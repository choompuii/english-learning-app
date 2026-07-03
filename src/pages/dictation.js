import { decks, getDeckById } from '../data/vocabulary.js'
import { speak, speakSlow } from '../utils/tts.js'

export function renderDictationBrowser() {
  const main = document.getElementById('main-content')
  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Dictation</h1>
        <p>ฟังแล้วพิมพ์คำที่ได้ยิน — ฝึก listening + spelling พร้อมกัน</p>
      </div>
      <div class="deck-grid">
        ${decks.map(deck => `
          <div class="card card-hover" onclick="window.location.hash='/dictation/${deck.id}'">
            <div class="deck-card-icon">${deck.icon}</div>
            <span class="level-badge level-${deck.level}" style="margin-bottom:var(--sp-3)">${deck.level}</span>
            <h3 class="deck-card" style="font-size:var(--text-lg);margin-bottom:var(--sp-2)">${deck.title}</h3>
            <p style="font-size:var(--text-sm);color:var(--text-muted)">${deck.cards.length} คำ</p>
          </div>
        `).join('')}
      </div>
    </div>
  `
}

export function renderDictation({ id }) {
  const main = document.getElementById('main-content')
  const deck = getDeckById(id)
  if (!deck) {
    main.innerHTML = `<div class="page"><p>Deck not found.</p><a href="#/dictation">← Back</a></div>`
    return
  }

  const cards = shuffle([...deck.cards])
  let idx = 0
  let correct = 0
  let incorrect = 0

  function showCard() {
    if (idx >= cards.length) { showSummary(); return }
    const card = cards[idx]

    main.innerHTML = `
      <div class="page">
        <div class="breadcrumb">
          <a href="#/dictation">Dictation</a>
          <span class="breadcrumb-sep">›</span>
          <span>${deck.title}</span>
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--sp-8)">
          <span style="font-size:var(--text-sm);color:var(--text-muted)">คำที่ ${idx + 1} / ${cards.length}</span>
          <div style="display:flex;gap:var(--sp-3)">
            <span style="color:var(--success);font-weight:600">✓ ${correct}</span>
            <span style="color:var(--danger);font-weight:600">✗ ${incorrect}</span>
          </div>
        </div>

        <div style="text-align:center;padding:var(--sp-10) var(--sp-8);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);margin-bottom:var(--sp-6)">
          <p style="color:var(--text-muted);font-size:var(--text-sm);margin-bottom:var(--sp-6)">ฟังแล้วพิมพ์คำที่ได้ยิน</p>
          <div style="display:flex;justify-content:center;gap:var(--sp-3);margin-bottom:var(--sp-8)">
            <button id="play-btn" class="btn btn-primary btn-lg">🔊 ฟังคำ</button>
            <button id="slow-btn" class="btn btn-secondary">🐢 ช้า</button>
          </div>
          <input
            id="dictation-input"
            type="text"
            placeholder="พิมพ์คำที่ได้ยิน…"
            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
            style="width:100%;max-width:360px;padding:var(--sp-4) var(--sp-5);border:2px solid var(--border);border-radius:var(--r-lg);font-size:var(--text-2xl);font-family:var(--font-mono);text-align:center;color:var(--text);background:var(--surface);outline:none;transition:border-color var(--duration)"
          />
          <div id="feedback" style="min-height:48px;margin-top:var(--sp-4)"></div>
        </div>

        <div style="display:flex;gap:var(--sp-3);justify-content:center">
          <button id="check-btn" class="btn btn-primary" disabled>ตรวจ →</button>
          <button id="skip-btn" class="btn btn-ghost">ข้ามไป</button>
        </div>
      </div>
    `

    const playBtn = main.querySelector('#play-btn')
    const slowBtn = main.querySelector('#slow-btn')
    const input = main.querySelector('#dictation-input')
    const checkBtn = main.querySelector('#check-btn')
    const skipBtn = main.querySelector('#skip-btn')
    const feedback = main.querySelector('#feedback')

    let answered = false

    playBtn.addEventListener('click', () => speak(card.front))
    slowBtn.addEventListener('click', () => speakSlow(card.front))

    input.addEventListener('focus', () => { input.style.borderColor = 'var(--accent)' })
    input.addEventListener('blur', () => { if (!answered) input.style.borderColor = 'var(--border)' })
    input.addEventListener('input', () => {
      checkBtn.disabled = !input.value.trim()
    })
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !checkBtn.disabled && !answered) checkBtn.click()
    })

    function check() {
      answered = true
      const userAnswer = input.value.trim().toLowerCase()
      const isCorrect = userAnswer === card.front.toLowerCase()

      if (isCorrect) {
        correct++
        input.style.borderColor = 'var(--success)'
        input.style.background = 'var(--success-soft)'
        feedback.innerHTML = `
          <div style="color:var(--success);font-weight:700;font-size:var(--text-lg)">✓ ถูกต้อง!</div>
          <div style="font-family:var(--font-mono);color:var(--text-muted);font-size:var(--text-sm);margin-top:4px">${card.phonetic || ''} — ${card.thai}</div>
        `
      } else {
        incorrect++
        input.style.borderColor = 'var(--danger)'
        input.style.background = 'var(--danger-soft)'
        feedback.innerHTML = `
          <div style="color:var(--danger);font-weight:700;font-size:var(--text-lg)">✗ ผิด</div>
          <div style="margin-top:var(--sp-2)">
            คำที่ถูก: <strong style="font-family:var(--font-mono);color:var(--text);font-size:var(--text-xl)">${card.front}</strong>
            <button class="tts-btn" data-speak="${card.front.replace(/"/g, '&quot;')}" style="margin-left:4px">🔊</button>
          </div>
          <div style="font-size:var(--text-sm);color:var(--text-muted)">${card.thai}</div>
        `
        feedback.querySelector('.tts-btn')?.addEventListener('click', () => speak(card.front))
      }

      checkBtn.textContent = 'ถัดไป →'
      checkBtn.disabled = false
      skipBtn.style.display = 'none'
      checkBtn.removeEventListener('click', check)
      checkBtn.addEventListener('click', () => { idx++; showCard() })
      input.disabled = true
    }

    checkBtn.addEventListener('click', check)
    skipBtn.addEventListener('click', () => {
      incorrect++
      feedback.innerHTML = `<div style="color:var(--text-muted)">ข้าม — คำที่ถูก: <strong style="font-family:var(--font-mono)">${card.front}</strong></div>`
      idx++
      setTimeout(showCard, 800)
    })

    // Auto-play on load
    setTimeout(() => speak(card.front), 300)
    input.focus()
  }

  function showSummary() {
    const pct = Math.round((correct / cards.length) * 100)
    main.innerHTML = `
      <div class="page" style="text-align:center">
        <div style="font-size:4rem;margin-bottom:var(--sp-4)">${pct >= 70 ? '🌟' : '💪'}</div>
        <h2 style="margin-bottom:var(--sp-2)">เสร็จแล้ว!</h2>
        <p style="color:var(--text-muted);margin-bottom:var(--sp-8)">${cards.length} คำ</p>
        <div style="display:flex;gap:var(--sp-4);justify-content:center;margin-bottom:var(--sp-8);flex-wrap:wrap">
          <div class="card" style="min-width:120px;text-align:center">
            <div style="font-size:2rem;color:var(--success);font-weight:700">${correct}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">ถูก</div>
          </div>
          <div class="card" style="min-width:120px;text-align:center">
            <div style="font-size:2rem;color:var(--danger);font-weight:700">${incorrect}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">ผิด</div>
          </div>
          <div class="card" style="min-width:120px;text-align:center">
            <div style="font-size:2rem;color:var(--accent);font-weight:700">${pct}%</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">คะแนน</div>
          </div>
        </div>
        <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" onclick="window.location.reload()">ลองอีกครั้ง</button>
          <a href="#/dictation" class="btn btn-secondary">เปลี่ยน Deck</a>
        </div>
      </div>
    `
  }

  showCard()
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
