import { decks } from '../data/vocabulary.js'
import { getProgress, addBonusXP, recordSpeakingResult } from '../store.js'
import { speak, speakSlow } from '../utils/tts.js'
import { ipaToThai } from '../utils/ipa-to-thai.js'
import { floatXP, showNewBadges } from '../utils/fx.js'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

export function renderSpeakingBrowser() {
  const main = document.getElementById('main-content')

  if (!SpeechRecognition) {
    main.innerHTML = `
      <div class="page" style="max-width:640px">
        <div class="page-header">
          <h1>🗣️ Speaking Practice</h1>
          <p>ฝึกออกเสียงคำศัพท์ภาษาอังกฤษ</p>
        </div>
        <div class="empty-state">
          <div style="font-size:3rem;margin-bottom:var(--sp-4)">🎤</div>
          <h3>เบราว์เซอร์ไม่รองรับ Speech Recognition</h3>
          <p style="color:var(--text-muted)">ฟีเจอร์นี้ต้องการ Google Chrome หรือ Microsoft Edge<br>ลองเปิดในเบราว์เซอร์อื่นนะ</p>
          <a href="#/skills" class="btn btn-primary" style="margin-top:var(--sp-6)">← กลับ Skills</a>
        </div>
      </div>
    `
    return
  }

  const state = getProgress()
  const level = state.selectedLevel || 'A1'

  main.innerHTML = `
    <div class="page" style="max-width:640px">
      <div class="page-header">
        <h1>🗣️ Speaking Practice</h1>
        <p>ฝึกออกเสียงคำศัพท์ — พูดคำภาษาอังกฤษจากความหมายภาษาไทย</p>
      </div>

      <div style="display:flex;gap:var(--sp-2);flex-wrap:wrap;margin-bottom:var(--sp-6)">
        ${decks.map(d => `
          <button class="btn btn-sm ${d.level === level ? 'btn-primary' : 'btn-ghost'} deck-filter" data-deck="${d.id}">
            ${d.icon} ${d.title} <span class="level-badge level-${d.level}" style="margin-left:4px">${d.level}</span>
          </button>
        `).join('')}
      </div>

      <div id="speaking-area"></div>
    </div>
  `

  let activeDeckId = decks.find(d => d.level === level)?.id || decks[0]?.id

  function startSession(deckId) {
    activeDeckId = deckId
    main.querySelectorAll('.deck-filter').forEach(btn => {
      btn.classList.toggle('btn-primary', btn.dataset.deck === deckId)
      btn.classList.toggle('btn-ghost', btn.dataset.deck !== deckId)
    })
    renderSession(main.querySelector('#speaking-area'), deckId)
  }

  main.querySelectorAll('.deck-filter').forEach(btn => {
    btn.addEventListener('click', () => startSession(btn.dataset.deck))
  })

  startSession(activeDeckId)
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function normalize(str) {
  return str.toLowerCase().replace(/[^a-z\s]/g, '').trim()
}

// Word-level comparison of the expected phrase against what was heard. Each
// expected word is marked hit/miss depending on whether it appeared in the
// recognised transcript — this is honest word-level feedback (the browser's
// speech API returns whole words, not phonemes), not an AI guess.
function diffHighlight(expected, heard) {
  const heardWords = new Set(normalize(heard).split(/\s+/).filter(Boolean))
  return expected.split(/\s+/).map(w => {
    const hit = heardWords.has(normalize(w))
    return `<span style="padding:1px 6px;border-radius:var(--r-sm);font-family:var(--font-mono);font-weight:700;${hit
      ? 'background:var(--accent-soft);color:var(--accent)'
      : 'background:var(--danger-soft);color:var(--danger);text-decoration:underline'}">${w}</span>`
  }).join(' ')
}

// Pronunciation guide: IPA + a Thai-readable approximation (from ipa-to-thai).
function pronunciationGuide(card) {
  const thaiRead = card.phonetic ? ipaToThai(card.phonetic) : ''
  if (!card.phonetic && !thaiRead) return ''
  return `
    <div style="display:inline-flex;flex-direction:column;gap:2px;align-items:center;margin-bottom:var(--sp-4)">
      ${card.phonetic ? `<span style="font-family:var(--font-mono);color:var(--text-muted)">${card.phonetic}</span>` : ''}
      ${thaiRead ? `<span style="font-size:var(--text-sm);color:var(--accent);font-weight:600">🗣️ ${thaiRead}</span>` : ''}
    </div>`
}

function renderSession(area, deckId) {
  const deck = decks.find(d => d.id === deckId)
  if (!deck) return

  const cards = shuffle(deck.cards)
  let idx = 0
  // Track correct answers by card index so a "retry this word" that later
  // succeeds can't double-count the same card.
  const correctSet = new Set()
  let recognizer = null

  function showCard() {
    if (idx >= cards.length) { showSummary(); return }
    const card = cards[idx]

    area.innerHTML = `
      <div style="text-align:center">
        <div style="font-size:var(--text-xs);color:var(--text-muted);margin-bottom:var(--sp-6)">${idx + 1} / ${cards.length}</div>

        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-10) var(--sp-8);margin-bottom:var(--sp-6)">
          <div style="font-size:3rem;margin-bottom:var(--sp-4)">${card.emoji || '🗣️'}</div>
          <div style="font-size:var(--text-2xl);font-weight:800;color:var(--accent);margin-bottom:var(--sp-2)">${card.thai}</div>
          <div style="font-size:var(--text-base);color:var(--text-muted)">${card.back}</div>
        </div>

        <p style="color:var(--text-muted);font-size:var(--text-sm);margin-bottom:var(--sp-4)">พูดคำภาษาอังกฤษที่ตรงกัน</p>

        <div id="mic-status" style="min-height:48px;margin-bottom:var(--sp-4);font-size:var(--text-base);font-weight:600;color:var(--text-muted)">กด 🎤 เพื่อเริ่มพูด</div>

        <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
          <button id="speak-btn" class="btn btn-primary btn-lg" style="min-width:160px">🎤 พูดเลย</button>
          <button id="hint-btn" class="btn btn-ghost">💡 Hint</button>
          <button id="skip-btn" class="btn btn-ghost">ข้าม →</button>
        </div>

        <div id="hint-area" style="display:none;margin-top:var(--sp-5);padding:var(--sp-3) var(--sp-4);background:var(--gold-soft);border-radius:var(--r-lg)">
          <div style="font-size:var(--text-2xl);font-weight:700;font-family:var(--font-mono)">${card.front}</div>
          ${card.phonetic ? `<div style="font-size:var(--text-sm);color:var(--text-muted);font-family:var(--font-mono)">${card.phonetic}</div>` : ''}
        </div>
      </div>
    `

    const speakBtn = area.querySelector('#speak-btn')
    const hintBtn = area.querySelector('#hint-btn')
    const skipBtn = area.querySelector('#skip-btn')
    const micStatus = area.querySelector('#mic-status')
    const hintArea = area.querySelector('#hint-area')
    let answered = false

    function stopRecognizer() {
      if (recognizer) { try { recognizer.stop() } catch {} recognizer = null }
    }

    function showResult(isCorrect, heard) {
      if (answered) return
      answered = true
      stopRecognizer()
      if (isCorrect) correctSet.add(idx)

      const xpGain = isCorrect ? 10 : 0
      if (xpGain > 0) {
        addBonusXP(xpGain)
        floatXP(xpGain, speakBtn)
      }

      area.innerHTML = `
        <div style="text-align:center">
          <div style="font-size:3rem;margin-bottom:var(--sp-4)">${isCorrect ? '✅' : '❌'}</div>
          <div style="font-size:var(--text-2xl);font-weight:800;margin-bottom:var(--sp-4);color:${isCorrect ? 'var(--accent)' : 'var(--danger)'}">
            ${isCorrect ? 'ถูกต้อง!' : 'ลองใหม่'}
          </div>

          <div style="font-size:var(--text-2xl);font-weight:700;font-family:var(--font-mono);color:var(--text);margin-bottom:var(--sp-2)">${card.front}</div>
          ${pronunciationGuide(card)}

          ${!isCorrect ? `
            <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4);margin:0 auto var(--sp-5);max-width:420px">
              <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);margin-bottom:var(--sp-3)">เทียบทีละคำ</div>
              <div style="margin-bottom:var(--sp-3);line-height:2">${diffHighlight(card.front, heard)}</div>
              <div style="font-size:var(--text-sm);color:var(--text-muted)">ได้ยินว่า: <em>"${heard || '—'}"</em></div>
            </div>
          ` : ''}

          <div style="display:flex;gap:var(--sp-2);justify-content:center;flex-wrap:wrap;margin-bottom:var(--sp-6)">
            <button class="btn btn-ghost btn-sm" id="listen-btn">🔊 ฟังปกติ</button>
            <button class="btn btn-ghost btn-sm" id="listen-slow-btn">🐢 ฟังช้าๆ</button>
            ${!isCorrect ? `<button class="btn btn-ghost btn-sm" id="retry-word-btn">🎤 พูดคำนี้ใหม่</button>` : ''}
          </div>

          <button id="next-btn" class="btn btn-primary btn-lg">ถัดไป →</button>
        </div>
      `
      area.querySelector('#listen-btn').addEventListener('click', () => speak(card.front))
      area.querySelector('#listen-slow-btn').addEventListener('click', () => speakSlow(card.front))
      area.querySelector('#retry-word-btn')?.addEventListener('click', () => { showCard() })
      area.querySelector('#next-btn').addEventListener('click', () => { idx++; showCard() })
    }

    speakBtn.addEventListener('click', () => {
      if (answered) return
      stopRecognizer()
      recognizer = new SpeechRecognition()
      recognizer.lang = 'en-US'
      recognizer.interimResults = false
      recognizer.maxAlternatives = 3

      micStatus.innerHTML = `<span style="color:var(--danger)">🔴 กำลังฟัง…</span>`
      speakBtn.disabled = true
      speakBtn.textContent = '🎙️ กำลังฟัง…'

      recognizer.onresult = (e) => {
        const alternatives = Array.from(e.results[0])
        const expected = normalize(card.front)
        const acceptedVariants = (card.acceptedVariants || []).map(normalize)
        const isCorrect = alternatives.some(alt => {
          const heard = normalize(alt.transcript)
          return heard === expected || acceptedVariants.includes(heard) || heard.includes(expected) || expected.includes(heard)
        })
        const heard = alternatives[0]?.transcript || ''
        showResult(isCorrect, heard)
      }

      recognizer.onerror = (e) => {
        micStatus.innerHTML = `<span style="color:var(--danger)">⚠️ ไม่ได้ยินเสียง — ลองอีกครั้ง</span>`
        speakBtn.disabled = false
        speakBtn.textContent = '🎤 พูดเลย'
        recognizer = null
      }

      recognizer.onend = () => {
        if (!answered) {
          speakBtn.disabled = false
          speakBtn.textContent = '🎤 พูดเลย'
          micStatus.textContent = 'กด 🎤 เพื่อเริ่มพูด'
        }
        recognizer = null
      }

      recognizer.start()
    })

    hintBtn.addEventListener('click', () => {
      hintArea.style.display = hintArea.style.display === 'none' ? 'block' : 'none'
    })

    skipBtn.addEventListener('click', () => {
      if (answered) return
      stopRecognizer()
      showResult(false, '(ข้าม)')
    })
  }

  function showSummary() {
    const correct = correctSet.size
    const pct = cards.length > 0 ? Math.round((correct / cards.length) * 100) : 0
    const { newBadges } = recordSpeakingResult(deckId, correct, cards.length)
    if (newBadges?.length) setTimeout(() => showNewBadges(newBadges), 500)

    area.innerHTML = `
      <div style="text-align:center">
        <div style="font-size:4rem;margin-bottom:var(--sp-4)">${pct >= 70 ? '🌟' : '💪'}</div>
        <h2 style="margin-bottom:var(--sp-2)">เสร็จแล้ว!</h2>
        <div style="display:flex;gap:var(--sp-4);justify-content:center;margin-bottom:var(--sp-8);flex-wrap:wrap">
          <div class="card" style="min-width:120px;text-align:center">
            <div style="font-size:2rem;color:var(--accent);font-weight:700">${correct}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">ถูก</div>
          </div>
          <div class="card" style="min-width:120px;text-align:center">
            <div style="font-size:2rem;color:var(--danger);font-weight:700">${cards.length - correct}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">ผิด/ข้าม</div>
          </div>
          <div class="card" style="min-width:120px;text-align:center">
            <div style="font-size:2rem;color:var(--accent);font-weight:700">${pct}%</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">คะแนน</div>
          </div>
        </div>
        <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" id="retry-btn">ลองอีกครั้ง</button>
          <a href="#/speaking" class="btn btn-secondary">เปลี่ยน Deck</a>
        </div>
      </div>
    `
    area.querySelector('#retry-btn').addEventListener('click', () => renderSession(area, deckId))
  }

  // Cleanup speech recognizer on navigation
  window.addEventListener('hashchange', () => {
    if (recognizer) { try { recognizer.stop() } catch {} recognizer = null }
  }, { once: true })

  showCard()
}
