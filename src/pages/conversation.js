import { conversations } from '../data/conversations.js'
import { navigate } from '../router.js'
import { speak, speakSlow, stopSpeech } from '../utils/tts.js'
import { addBonusXP, recordConversationResult, getConversationBest } from '../store.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'

const XP_PER_LINE = 10
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

function normalizeSpeech(s) {
  return s.toLowerCase().trim().replace(/[.,!?;:()'"—-]/g, '').replace(/\s+/g, ' ')
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── Hub ───────────────────────────────────────────────────────────────
export function renderConversationHub() {
  const main = document.getElementById('main-content')
  const byLevel = {}
  for (const c of conversations) {
    if (!byLevel[c.level]) byLevel[c.level] = []
    byLevel[c.level].push(c)
  }
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].filter(l => byLevel[l])

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Conversation</h1>
        <p>ฝึกบทสนทนาสถานการณ์จริง — ฟังเจ้าของภาษา แล้วเลือกคำตอบให้ถูก</p>
      </div>
      ${levels.map(lvl => `
        <div style="margin-bottom:var(--sp-6)">
          <div style="margin-bottom:var(--sp-3)"><span class="level-badge level-${lvl}">${lvl}</span></div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:var(--sp-3)">
            ${byLevel[lvl].map(c => {
              const best = getConversationBest(c.id)
              return `
              <button class="deck-card" data-id="${c.id}"
                style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-5);text-align:left;cursor:pointer;transition:all 200ms var(--ease)"
                onmouseover="this.style.borderColor='var(--accent)';this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shadow-md)'"
                onmouseout="this.style.borderColor='var(--border)';this.style.transform='none';this.style.boxShadow='none'">
                <div style="font-size:1.8rem;margin-bottom:var(--sp-2)">${c.icon || '💬'}</div>
                <div style="font-weight:700;font-size:var(--text-base);margin-bottom:2px">${c.title}</div>
                <div style="font-size:var(--text-sm);color:var(--accent);font-weight:600;margin-bottom:var(--sp-2)">${c.thai}</div>
                <div style="font-size:var(--text-xs);color:var(--text-muted)">${c.thaiSetting || c.setting}</div>
                ${best ? `<div style="font-size:var(--text-xs);color:var(--accent);font-weight:700;margin-top:var(--sp-2)">🏆 Best ${best.bestScore}/${best.bestTotal}</div>` : ''}
              </button>`
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `
  main.querySelectorAll('.deck-card').forEach(btn =>
    btn.addEventListener('click', () => navigate('/conversation/' + btn.dataset.id)))
}

// ── Session ───────────────────────────────────────────────────────────
export function renderConversation({ id }) {
  const conv = conversations.find(c => c.id === id)
  const main = document.getElementById('main-content')
  if (!conv) { navigate('/conversation'); return }

  const userLineCount = conv.lines.filter(l => l.speaker === 'user').length
  let idx = 0
  let correct = 0
  const transcript = []   // { speaker, en, thai }

  // Stop any in-flight TTS when the user leaves mid-conversation.
  window.addEventListener('hashchange', () => stopSpeech(), { once: true })

  main.innerHTML = `
    <div class="page" style="max-width:720px">
      <div class="page-header">
        <a href="#/conversation" style="font-size:var(--text-sm);color:var(--text-muted);text-decoration:none">← Conversations</a>
        <h1>${conv.icon || '💬'} ${conv.title}</h1>
        <p>${conv.setting} · <span style="color:var(--text-muted)">คุณคือ <strong>${conv.roleUser}</strong>, คู่สนทนาคือ ${conv.roleBot}</span></p>
      </div>
      <div id="conv-transcript" style="display:flex;flex-direction:column;gap:var(--sp-3);margin-bottom:var(--sp-5)"></div>
      <div id="conv-action"></div>
    </div>
  `
  const transcriptEl = main.querySelector('#conv-transcript')
  const actionEl = main.querySelector('#conv-action')

  function bubble({ speaker, en, thai }) {
    const isUser = speaker === 'user'
    return `
      <div style="display:flex;justify-content:${isUser ? 'flex-end' : 'flex-start'}">
        <div style="max-width:80%;background:${isUser ? 'var(--accent)' : 'var(--surface)'};color:${isUser ? '#fff' : 'var(--text)'};border:1px solid ${isUser ? 'var(--accent)' : 'var(--border)'};border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);animation:slide-up 0.3s ease">
          <div style="font-size:var(--text-base);font-weight:600;line-height:1.4">${en}</div>
          <div style="font-size:var(--text-xs);color:${isUser ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)'};margin-top:2px">${thai}</div>
        </div>
      </div>`
  }

  function renderTranscript() {
    transcriptEl.innerHTML = transcript.map(bubble).join('')
    transcriptEl.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  function step() {
    if (idx >= conv.lines.length) return finish()
    const line = conv.lines[idx]
    if (line.speaker === 'bot') renderBotTurn(line)
    else renderUserTurn(line)
  }

  function renderBotTurn(line) {
    transcript.push({ speaker: 'bot', en: line.en, thai: line.thai })
    renderTranscript()
    speak(line.en)
    actionEl.innerHTML = `
      <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
        <button class="btn btn-ghost" id="conv-replay">🔊 ฟังอีกครั้ง</button>
        <button class="btn btn-ghost" id="conv-slow">🐢 ช้าๆ</button>
        <button class="btn btn-primary" id="conv-continue">ถัดไป →</button>
      </div>`
    actionEl.querySelector('#conv-replay').addEventListener('click', () => speak(line.en))
    actionEl.querySelector('#conv-slow').addEventListener('click', () => speakSlow(line.en))
    actionEl.querySelector('#conv-continue').addEventListener('click', () => { idx++; step() })
  }

  function renderUserTurn(line) {
    const opts = shuffle(line.options && line.options.length ? line.options : [line.en])
    let answered = false
    actionEl.innerHTML = `
      <div style="background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-lg);padding:var(--sp-4);animation:pop-in 0.2s ease">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:var(--sp-3);margin-bottom:var(--sp-2);flex-wrap:wrap">
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent)">ตาคุณพูด (${conv.roleUser})</div>
          ${SpeechRecognition ? `<button class="btn btn-ghost btn-sm" id="conv-mic" style="font-size:var(--text-xs)">🎤 พูดเอง</button>` : ''}
        </div>
        <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-2)">💡 สื่อความว่า: “${line.thai}”</div>
        <div id="conv-mic-status" style="font-size:var(--text-xs);color:var(--text-muted);margin-bottom:var(--sp-3);min-height:1em"></div>
        <div id="conv-options" style="display:flex;flex-direction:column;gap:var(--sp-2)"></div>
      </div>`
    const optsEl = actionEl.querySelector('#conv-options')
    const micStatus = actionEl.querySelector('#conv-mic-status')
    opts.forEach(opt => {
      const b = document.createElement('button')
      b.textContent = opt
      b.className = 'btn btn-ghost'
      b.style.cssText = 'text-align:left;justify-content:flex-start;width:100%;white-space:normal;height:auto;padding:var(--sp-3) var(--sp-4)'
      b.addEventListener('click', () => pick(opt, b, line))
      optsEl.appendChild(b)
    })

    // Optional: speak your line instead of tapping (Chrome/Edge only).
    const micBtn = actionEl.querySelector('#conv-mic')
    if (micBtn) {
      micBtn.addEventListener('click', () => {
        if (answered) return
        stopSpeech()
        const rec = new SpeechRecognition()
        rec.lang = 'en-US'
        rec.interimResults = false
        rec.maxAlternatives = 3
        micBtn.disabled = true
        micStatus.innerHTML = `<span style="color:var(--danger)">🔴 กำลังฟัง…</span>`
        rec.onresult = (e) => {
          const alts = Array.from(e.results[0]).map(a => normalizeSpeech(a.transcript))
          const target = normalizeSpeech(line.en)
          const hit = alts.some(h => h === target || h.includes(target) || target.includes(h))
          if (hit) {
            const correctBtn = Array.from(optsEl.querySelectorAll('button')).find(x => x.textContent === line.en)
            micStatus.innerHTML = `<span style="color:var(--accent)">✓ ได้ยิน: “${alts[0]}”</span>`
            pick(line.en, correctBtn || micBtn, line)
          } else {
            micStatus.innerHTML = `<span style="color:var(--danger)">ได้ยิน: “${alts[0]}” — ลองอีกครั้ง หรือแตะเลือกคำตอบ</span>`
          }
        }
        rec.onerror = () => { micStatus.innerHTML = `<span style="color:var(--danger)">⚠️ ไม่ได้ยินเสียง — ลองอีกครั้ง</span>` }
        rec.onend = () => { if (!answered) micBtn.disabled = false }
        rec.start()
      })
    }

    function pick(opt, btn, line) {
      if (answered) return
      const isCorrect = opt === line.en
      if (isCorrect) {
        answered = true
        correct++
        transcript.push({ speaker: 'user', en: line.en, thai: line.thai })
        renderTranscript()
        speak(line.en)
        const nb = addBonusXP(XP_PER_LINE)
        floatXP(XP_PER_LINE, btn)
        if (nb?.length) setTimeout(() => showNewBadges(nb), 400)
        actionEl.innerHTML = ''
        setTimeout(() => { idx++; step() }, 700)
      } else {
        btn.disabled = true
        btn.style.borderColor = 'var(--danger)'
        btn.style.background = 'var(--danger-soft)'
        btn.style.color = 'var(--danger)'
      }
    }
  }

  function finish() {
    const total = userLineCount
    const pct = total > 0 ? Math.round((correct / total) * 100) : 100
    const result = recordConversationResult(conv.id, correct, total)
    if (pct >= 80) confetti(60)
    actionEl.innerHTML = `
      <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-xl);padding:var(--sp-8);text-align:center;animation:pop-in 0.3s ease">
        <div style="font-size:3rem;margin-bottom:var(--sp-3)">${pct >= 80 ? '🎉' : pct >= 60 ? '⭐' : '💪'}</div>
        <h2 style="margin-bottom:var(--sp-2)">จบบทสนทนา!</h2>
        <div style="font-size:var(--text-2xl);font-weight:800;color:var(--accent);margin-bottom:var(--sp-2)">${correct}/${total} ถูก</div>
        <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-2)">XP ที่ได้รับ: +${correct * XP_PER_LINE}</div>
        ${result.isNewRecord ? `<div style="display:inline-block;background:var(--gold-soft);border:1px solid var(--gold);color:var(--gold-strong);font-weight:700;font-size:var(--text-sm);border-radius:var(--r-lg);padding:var(--sp-1) var(--sp-4);margin-bottom:var(--sp-4)">🎉 สถิติใหม่!</div>` : ''}
        <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap;margin-top:var(--sp-4)">
          <button class="btn btn-primary" id="conv-retry">↺ ฝึกอีกครั้ง</button>
          <button class="btn btn-ghost" id="conv-back">← บทสนทนาอื่น</button>
        </div>
      </div>`
    if (result.newBadges?.length) setTimeout(() => showNewBadges(result.newBadges), 500)
    actionEl.querySelector('#conv-retry').addEventListener('click', () => renderConversation({ id }))
    actionEl.querySelector('#conv-back').addEventListener('click', () => navigate('/conversation'))
  }

  step()
}
