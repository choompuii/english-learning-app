import { idiomCategories } from '../data/idioms.js'
import { navigate } from '../router.js'
import { speak } from '../utils/tts.js'
import { ttsButton, attachTtsListeners } from '../utils/tts.js'
import { addBonusXP, recordIdiomResult, getIdiomBest } from '../store.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'

const XP_PER_CORRECT = 10

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const TYPE_LABEL = { idiom: 'สำนวน (Idioms)', phrasal: 'Phrasal Verbs' }
const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

// ── Hub ───────────────────────────────────────────────────────────────
export function renderIdiomsHub() {
  const main = document.getElementById('main-content')
  const byType = { idiom: [], phrasal: [] }
  for (const c of idiomCategories) {
    if (!byType[c.type]) byType[c.type] = []
    byType[c.type].push(c)
  }
  // Show categories in CEFR order (A1 → C1) within each type.
  for (const type of Object.keys(byType)) {
    byType[type].sort((a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level))
  }

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Idioms & Phrasal Verbs</h1>
        <p>สำนวนและกริยาวลีที่เจ้าของภาษาใช้จริง — เรียนรู้แล้วทดสอบความเข้าใจ</p>
      </div>
      ${['idiom', 'phrasal'].map(type => byType[type]?.length ? `
        <div style="margin-bottom:var(--sp-7)">
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-4)">${TYPE_LABEL[type]}</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:var(--sp-3)">
            ${byType[type].map(c => {
              const best = getIdiomBest(c.id)
              return `
              <button class="deck-card" data-id="${c.id}"
                style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-5);text-align:left;cursor:pointer;transition:all 200ms var(--ease)"
                onmouseover="this.style.borderColor='var(--accent)';this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shadow-md)'"
                onmouseout="this.style.borderColor='var(--border)';this.style.transform='none';this.style.boxShadow='none'">
                <div style="display:flex;align-items:center;gap:var(--sp-2);margin-bottom:var(--sp-2)">
                  <span style="font-size:1.6rem">${c.icon || '💬'}</span>
                  <span class="level-badge level-${c.level}">${c.level}</span>
                </div>
                <div style="font-weight:700;font-size:var(--text-base);margin-bottom:2px">${c.title}</div>
                <div style="font-size:var(--text-sm);color:var(--accent);font-weight:600;margin-bottom:var(--sp-2)">${c.thai}</div>
                <div style="font-size:var(--text-xs);color:var(--text-muted)">${c.items.length} รายการ</div>
                ${best ? `<div style="font-size:var(--text-xs);color:var(--accent);font-weight:700;margin-top:var(--sp-2)">🏆 Best ${best.bestScore}/${best.bestTotal}</div>` : ''}
              </button>`
            }).join('')}
          </div>
        </div>
      ` : '').join('')}
    </div>
  `
  main.querySelectorAll('.deck-card').forEach(btn =>
    btn.addEventListener('click', () => navigate('/idioms/' + btn.dataset.id)))
}

// ── Category (learn + quiz) ───────────────────────────────────────────
export function renderIdiomCategory({ id }) {
  const cat = idiomCategories.find(c => c.id === id)
  const main = document.getElementById('main-content')
  if (!cat) { navigate('/idioms'); return }

  main.innerHTML = `
    <div class="page" style="max-width:760px">
      <div class="page-header">
        <a href="#/idioms" style="font-size:var(--text-sm);color:var(--text-muted);text-decoration:none">← Idioms & Phrasal Verbs</a>
        <h1>${cat.icon || '💬'} ${cat.title}</h1>
        <p>${cat.thai}</p>
      </div>
      <div style="display:inline-flex;background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-full);padding:4px;margin-bottom:var(--sp-6)">
        <button class="idiom-tab" data-tab="learn" style="border:none;background:var(--accent);color:#fff;border-radius:var(--r-full);padding:var(--sp-2) var(--sp-5);font-weight:600;cursor:pointer;font-family:var(--font-body)">📖 เรียนรู้</button>
        <button class="idiom-tab" data-tab="quiz" style="border:none;background:transparent;color:var(--text);border-radius:var(--r-full);padding:var(--sp-2) var(--sp-5);font-weight:600;cursor:pointer;font-family:var(--font-body)">✏️ ทดสอบ</button>
      </div>
      <div id="idiom-body"></div>
    </div>
  `
  const body = main.querySelector('#idiom-body')
  const tabs = main.querySelectorAll('.idiom-tab')

  function setTab(tab) {
    tabs.forEach(t => {
      const on = t.dataset.tab === tab
      t.style.background = on ? 'var(--accent)' : 'transparent'
      t.style.color = on ? '#fff' : 'var(--text)'
    })
    if (tab === 'learn') renderLearn(body, cat)
    else renderQuiz(body, cat)
  }
  tabs.forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)))
  setTab('learn')
}

function renderLearn(body, cat) {
  body.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:var(--sp-3)">
      ${cat.items.map(it => `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5)">
          <div style="display:flex;align-items:center;gap:var(--sp-2);margin-bottom:var(--sp-2)">
            <span style="font-weight:800;font-size:var(--text-lg)">${it.phrase}</span>
            ${ttsButton(it.phrase, 'ฟังเสียง')}
          </div>
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-1)">${it.meaning}</div>
          <div style="font-size:var(--text-sm);color:var(--accent);font-weight:600;margin-bottom:var(--sp-3)">${it.thai}</div>
          <div style="display:flex;align-items:flex-start;gap:var(--sp-2);background:var(--accent-soft);border-radius:var(--r-md);padding:var(--sp-2) var(--sp-3)">
            <span style="font-size:var(--text-sm);font-style:italic;flex:1">“${it.example}”</span>
            ${ttsButton(it.example, 'ฟังประโยค')}
          </div>
          ${it.note ? `<div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--sp-2)">📌 ${it.note}</div>` : ''}
        </div>
      `).join('')}
    </div>
  `
  attachTtsListeners(body)
}

// Distractors are pulled from other items at the same CEFR level (across
// categories, so they're not just the phrases already visible in the Learn tab),
// falling back to the wider pool if a level is thin. `key` is 'phrase' for the
// original direction or 'thai' for the reverse direction.
function buildDistractors(cat, item, key) {
  const uniq = arr => [...new Set(arr)]
  const sameLevel = idiomCategories.filter(c => c.level === cat.level).flatMap(c => c.items)
  let pool = uniq(sameLevel.filter(i => i[key] !== item[key]).map(i => i[key]))
  if (pool.length < 3) {
    const wider = idiomCategories.flatMap(c => c.items)
    pool = uniq([...pool, ...wider.filter(i => i[key] !== item[key]).map(i => i[key])])
  }
  return shuffle(pool).slice(0, 3)
}

function renderQuiz(body, cat) {
  // Mix two directions: "meaning → phrase" (original) and "phrase → meaning" (reverse).
  const picks = shuffle(cat.items).slice(0, Math.min(8, cat.items.length))
  // Alternate direction so every session mixes both; randomise which one starts.
  const startReverse = Math.random() < 0.5
  const questions = picks.map((item, i) => ({ item, reverse: (i + startReverse) % 2 === 1 }))
  let idx = 0, correct = 0

  function renderQ() {
    if (idx >= questions.length) return finish()
    const { item, reverse } = questions[idx]
    // Reverse: show the phrase, choose its Thai meaning. Original: show the meaning,
    // choose the phrase.
    const answer = reverse ? item.thai : item.phrase
    const options = shuffle([answer, ...buildDistractors(cat, item, reverse ? 'thai' : 'phrase')])
    let answered = false

    const promptBlock = reverse ? `
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-2)">วลี/สำนวนนี้มีความหมายว่าอะไร</div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--sp-2)">
            <span style="font-size:var(--text-xl);font-weight:800;color:var(--accent)">${item.phrase}</span>
            ${ttsButton(item.phrase, 'ฟังเสียง')}
          </div>` : `
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-2)">เลือกสำนวน/วลีที่มีความหมายว่า</div>
          <div style="font-size:var(--text-xl);font-weight:800;color:var(--accent)">${item.thai}</div>
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-top:var(--sp-1)">${item.meaning}</div>`

    body.innerHTML = `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-6);animation:pop-in 0.2s ease">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-5)">
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted)">คำถาม ${idx + 1}/${questions.length}</div>
          <div style="background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-full);padding:var(--sp-1) var(--sp-4);font-size:var(--text-sm);font-weight:700;color:var(--accent)">${correct} ✓</div>
        </div>
        <div style="text-align:center;margin-bottom:var(--sp-5)">${promptBlock}</div>
        <div id="idiom-q-options" style="display:flex;flex-direction:column;gap:var(--sp-2)"></div>
        <div id="idiom-q-feedback" style="margin-top:var(--sp-4)"></div>
      </div>
    `
    const optsEl = body.querySelector('#idiom-q-options')
    const feedback = body.querySelector('#idiom-q-feedback')
    if (reverse) attachTtsListeners(body)
    options.forEach(opt => {
      const b = document.createElement('button')
      b.textContent = opt
      b.className = 'btn btn-ghost'
      b.style.cssText = 'text-align:left;justify-content:flex-start;width:100%;white-space:normal;height:auto;padding:var(--sp-3) var(--sp-4)'
      b.addEventListener('click', () => pick(opt, b))
      optsEl.appendChild(b)
    })

    function pick(opt, btn) {
      if (answered) return
      answered = true
      const isCorrect = opt === answer
      optsEl.querySelectorAll('button').forEach(x => {
        x.disabled = true
        if (x.textContent === answer) { x.style.borderColor = 'var(--accent)'; x.style.background = 'var(--accent-soft)' }
      })
      if (isCorrect) {
        correct++
        speak(item.phrase)
        const nb = addBonusXP(XP_PER_CORRECT)
        floatXP(XP_PER_CORRECT, btn)
        if (nb?.length) setTimeout(() => showNewBadges(nb), 400)
      } else {
        btn.style.borderColor = 'var(--danger)'
        btn.style.background = 'var(--danger-soft)'
        btn.style.color = 'var(--danger)'
      }
      feedback.innerHTML = `
        <div style="background:${isCorrect ? 'var(--accent-soft)' : 'var(--danger-soft)'};border:1px solid ${isCorrect ? 'var(--accent-mid)' : 'var(--danger)'};border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);animation:pop-in 0.2s ease">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:var(--sp-3);flex-wrap:wrap;margin-bottom:var(--sp-2)">
            <span style="font-weight:700;color:${isCorrect ? 'var(--accent)' : 'var(--danger)'}">${isCorrect ? '✓ ถูกต้อง!' : '✗ ยังไม่ถูก'}</span>
            <button class="btn btn-primary btn-sm" id="idiom-next">ถัดไป →</button>
          </div>
          <div style="font-size:var(--text-sm);color:var(--text);margin-bottom:2px"><strong>${item.phrase}</strong> — ${item.thai}</div>
          <div style="font-size:var(--text-sm);font-style:italic;color:var(--text-muted)">“${item.example}”</div>
        </div>
      `
      const next = body.querySelector('#idiom-next')
      let advanced = false
      const enterTimer = setTimeout(() => document.addEventListener('keyup', onEnter), 400)
      function onEnter(e) { if (e.key === 'Enter') advance() }
      function advance() {
        if (advanced) return
        advanced = true
        clearTimeout(enterTimer)
        document.removeEventListener('keyup', onEnter)
        idx++; renderQ()
      }
      next.addEventListener('click', advance)
      // Don't leak the global keyup listener if the user navigates away before advancing.
      window.addEventListener('hashchange', () => {
        clearTimeout(enterTimer)
        document.removeEventListener('keyup', onEnter)
      }, { once: true })
    }
  }

  function finish() {
    const total = questions.length
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    const result = recordIdiomResult(cat.id, correct, total)
    if (pct >= 80) confetti(60)
    body.innerHTML = `
      <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-xl);padding:var(--sp-8);text-align:center;animation:pop-in 0.3s ease">
        <div style="font-size:3rem;margin-bottom:var(--sp-3)">${pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '💪'}</div>
        <h2 style="margin-bottom:var(--sp-2)">ทดสอบเสร็จแล้ว!</h2>
        <div style="font-size:var(--text-2xl);font-weight:800;color:var(--accent);margin-bottom:var(--sp-2)">${correct}/${total} ถูก</div>
        <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-2)">XP ที่ได้รับ: +${correct * XP_PER_CORRECT}</div>
        ${result.isNewRecord ? `<div style="display:inline-block;background:var(--gold-soft);border:1px solid var(--gold);color:var(--gold-strong);font-weight:700;font-size:var(--text-sm);border-radius:var(--r-lg);padding:var(--sp-1) var(--sp-4);margin-bottom:var(--sp-4)">🎉 สถิติใหม่!</div>` : ''}
        <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4)">🏆 คะแนนสูงสุด: ${result.bestScore}/${result.bestTotal}</div>
        <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap;margin-top:var(--sp-4)">
          <button class="btn btn-primary" id="idiom-retry">↺ ทำอีกครั้ง</button>
          <button class="btn btn-ghost" id="idiom-hub">← กลับ hub</button>
        </div>
      </div>
    `
    if (result.newBadges?.length) setTimeout(() => showNewBadges(result.newBadges), 500)
    body.querySelector('#idiom-retry').addEventListener('click', () => renderQuiz(body, cat))
    body.querySelector('#idiom-hub').addEventListener('click', () => navigate('/idioms'))
  }

  renderQ()
}
