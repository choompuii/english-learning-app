import { decks } from '../data/vocabulary.js'
import { speak } from '../utils/tts.js'
import { addBonusXP, recordSpeedRoundResult, getSpeedRoundBest } from '../store.js'
import { floatXP, showNewBadges } from '../utils/fx.js'

const TIMER_SECONDS = 10
const XP_PER_CORRECT = 10

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function normalise(s) {
  return s.toLowerCase().trim().replace(/[.,!?;:()]/g, '').replace(/\s+/g, ' ')
}

export function renderSpeedRound() {
  const main = document.getElementById('main-content')

  const levelGroups = {}
  for (const deck of decks) {
    if (!levelGroups[deck.level]) levelGroups[deck.level] = []
    levelGroups[deck.level].push(deck)
  }
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].filter(l => levelGroups[l])

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Speed Round</h1>
        <p>เห็นความหมายภาษาไทย → พิมพ์คำอังกฤษก่อน timeout — ${TIMER_SECONDS} วินาทีต่อคำ</p>
      </div>

      <div id="sr-deck-select">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-5)">เลือก deck</div>
        ${levels.map(lvl => `
          <div style="margin-bottom:var(--sp-5)">
            <div style="display:flex;align-items:center;gap:var(--sp-2);margin-bottom:var(--sp-3)">
              <span class="level-badge level-${lvl}">${lvl}</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:var(--sp-3)">
              ${levelGroups[lvl].map(deck => {
                const best = getSpeedRoundBest(deck.id)
                return `
                <button class="deck-card" data-deck-id="${deck.id}"
                  style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);text-align:left;cursor:pointer;transition:all 200ms var(--ease)"
                  onmouseover="this.style.borderColor='var(--accent)';this.style.background='var(--accent-soft)'"
                  onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--surface)'">
                  <div style="font-size:1.4rem;margin-bottom:var(--sp-2)">${deck.icon || '📚'}</div>
                  <div style="font-weight:600;font-size:var(--text-sm);margin-bottom:4px">${deck.title}</div>
                  <div style="font-size:var(--text-xs);color:var(--text-muted)">${deck.cards.length} cards · ${TIMER_SECONDS}s each</div>
                  ${best ? `<div style="font-size:var(--text-xs);color:var(--accent);font-weight:700;margin-top:var(--sp-2)">🏆 Best ${best.bestScore}/${best.bestTotal}</div>` : ''}
                </button>
              `}).join('')}
            </div>
          </div>
        `).join('')}
      </div>

      <div id="sr-session" style="display:none"></div>
    </div>
  `

  main.querySelectorAll('.deck-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const deck = decks.find(d => d.id === btn.dataset.deckId)
      if (deck) startSession(deck)
    })
  })

  function startSession(deck) {
    main.querySelector('#sr-deck-select').style.display = 'none'
    const sessionEl = main.querySelector('#sr-session')
    sessionEl.style.display = ''

    const cards = shuffle(deck.cards)
    let idx = 0
    let correct = 0
    let total = 0
    let timer = null
    let timeLeft = TIMER_SECONDS
    let answered = false

    // Stop the countdown if the user navigates away mid-session (the interval would
    // otherwise keep firing into a detached DOM until it times out).
    window.addEventListener('hashchange', () => clearInterval(timer), { once: true })

    function renderCard() {
      if (idx >= cards.length) {
        showSummary()
        return
      }
      const card = cards[idx]
      answered = false
      timeLeft = TIMER_SECONDS

      sessionEl.innerHTML = `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-6);animation:pop-in 0.2s ease">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-4);flex-wrap:wrap;gap:var(--sp-3)">
            <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted)">
              ${deck.icon || '📚'} ${deck.title} — ${idx + 1}/${cards.length}
            </div>
            <div style="background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-full);padding:var(--sp-1) var(--sp-4);font-size:var(--text-sm);font-weight:700;color:var(--accent)">
              ${correct}/${total} ✓
            </div>
          </div>

          <!-- Timer bar -->
          <div style="height:6px;background:var(--border);border-radius:var(--r-full);margin-bottom:var(--sp-6);overflow:hidden">
            <div id="timer-bar" style="height:100%;border-radius:var(--r-full);background:var(--accent);transition:width 1s linear;width:100%"></div>
          </div>

          <!-- Prompt -->
          <div style="text-align:center;margin-bottom:var(--sp-6)">
            <div style="font-size:var(--text-2xl);font-weight:800;color:var(--text);margin-bottom:var(--sp-2)">${card.thai}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">${card.back}</div>
          </div>

          <!-- Input -->
          <div style="display:flex;gap:var(--sp-3);align-items:center">
            <input id="sr-input" type="text" autocomplete="off" spellcheck="false"
              placeholder="พิมพ์คำอังกฤษ..."
              style="flex:1;padding:var(--sp-3) var(--sp-4);border:2px solid var(--border);border-radius:var(--r-lg);font-size:var(--text-base);font-family:var(--font-body);background:var(--surface);color:var(--text);transition:border-color 200ms"
            />
            <button class="btn btn-primary" id="sr-submit-btn">→</button>
          </div>

          <div id="sr-feedback" style="margin-top:var(--sp-4)"></div>
        </div>
      `

      const input = sessionEl.querySelector('#sr-input')
      const submitBtn = sessionEl.querySelector('#sr-submit-btn')
      const timerBar = sessionEl.querySelector('#timer-bar')
      const feedback = sessionEl.querySelector('#sr-feedback')

      input.focus()

      // Start countdown
      let ticksDone = 0
      timer = setInterval(() => {
        if (answered) return
        ticksDone++
        timeLeft = TIMER_SECONDS - ticksDone
        const pct = (timeLeft / TIMER_SECONDS) * 100
        timerBar.style.width = pct + '%'
        timerBar.style.background = pct > 40 ? 'var(--accent)' : pct > 20 ? 'var(--gold)' : 'var(--danger)'

        if (timeLeft <= 0) {
          clearInterval(timer)
          handleAnswer(null)
        }
      }, 1000)

      function handleAnswer(userAnswer) {
        if (answered) return
        answered = true
        clearInterval(timer)
        total++

        const isCorrect = userAnswer !== null &&
          (normalise(userAnswer) === normalise(card.front) ||
           (card.acceptedVariants || []).some(v => normalise(userAnswer) === normalise(v)))

        input.disabled = true
        submitBtn.disabled = true

        if (isCorrect) {
          correct++
          input.style.borderColor = 'var(--accent)'
          speak(card.front)
          const newBadges = addBonusXP(XP_PER_CORRECT)
          floatXP(XP_PER_CORRECT, submitBtn)
          if (newBadges?.length) setTimeout(() => showNewBadges(newBadges), 500)
          feedback.innerHTML = `
            <div style="background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);display:flex;align-items:center;gap:var(--sp-3);animation:pop-in 0.2s ease">
              <span style="font-size:1.3rem">✓</span>
              <div>
                <span style="font-weight:700;color:var(--accent)">${card.front}</span>
                <span style="font-size:var(--text-xs);color:var(--text-muted);margin-left:var(--sp-2)">${card.phonetic || ''}</span>
              </div>
              <span style="margin-left:auto;font-size:var(--text-sm);font-weight:700;color:var(--accent)">+${XP_PER_CORRECT} XP</span>
            </div>
          `
          setTimeout(() => { idx++; renderCard() }, 1200)
        } else {
          input.style.borderColor = 'var(--danger)'
          feedback.innerHTML = `
            <div style="background:var(--danger-soft);border:1px solid var(--danger);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);animation:pop-in 0.2s ease">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-2)">
                <span style="font-weight:700;color:var(--danger)">${userAnswer === null ? '⏰ หมดเวลา' : '✗ ยังไม่ถูก'}</span>
                <button class="btn btn-ghost btn-sm" id="sr-next-btn">ถัดไป →</button>
              </div>
              <div style="font-size:var(--text-sm)">คำตอบ: <strong style="color:var(--accent)">${card.front}</strong> <span style="color:var(--text-muted)">${card.phonetic || ''}</span></div>
            </div>
          `
          sessionEl.querySelector('#sr-next-btn').addEventListener('click', () => { idx++; renderCard() })
        }
      }

      submitBtn.addEventListener('click', () => handleAnswer(input.value.trim()))
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') handleAnswer(input.value.trim())
      })
    }

    function showSummary() {
      const pct = total > 0 ? Math.round((correct / total) * 100) : 0
      const result = recordSpeedRoundResult(deck.id, correct, total)
      sessionEl.innerHTML = `
        <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-xl);padding:var(--sp-8);text-align:center;animation:pop-in 0.3s ease">
          <div style="font-size:3rem;margin-bottom:var(--sp-3)">${pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '💪'}</div>
          <h2 style="margin-bottom:var(--sp-2)">Speed Round Complete!</h2>
          <div style="font-size:var(--text-2xl);font-weight:800;color:var(--accent);margin-bottom:var(--sp-2)">${correct}/${total} ถูก</div>
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-2)">XP ที่ได้รับ: +${correct * XP_PER_CORRECT}</div>
          ${result.isNewRecord ? `<div style="display:inline-block;background:var(--gold-soft);border:1px solid var(--gold);color:#8B6914;font-weight:700;font-size:var(--text-sm);border-radius:var(--r-lg);padding:var(--sp-1) var(--sp-4);margin-bottom:var(--sp-2)">🎉 สถิติใหม่!</div>` : ''}
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4)">🏆 คะแนนสูงสุด: ${result.bestScore}/${result.bestTotal}</div>
          <div style="font-size:var(--text-base);font-weight:600;margin-bottom:var(--sp-6)">${pct >= 80 ? 'ยอดเยี่ยม! คุณรู้คำศัพท์ deck นี้ดีมาก' : pct >= 60 ? 'ดีมาก! ลองอีกครั้งเพื่อให้แม่นขึ้น' : 'ยังมีที่พัฒนาได้ — ลองอีกครั้งดีกว่า!'}</div>
          <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" id="sr-retry-btn">↺ เล่นอีกครั้ง</button>
            <button class="btn btn-ghost" id="sr-back-btn">← เลือก Deck อื่น</button>
          </div>
        </div>
      `
      if (result.newBadges?.length) setTimeout(() => showNewBadges(result.newBadges), 500)
      sessionEl.querySelector('#sr-retry-btn').addEventListener('click', () => startSession(deck))
      sessionEl.querySelector('#sr-back-btn').addEventListener('click', () => {
        main.querySelector('#sr-deck-select').style.display = ''
        sessionEl.style.display = 'none'
        sessionEl.innerHTML = ''
      })
    }

    renderCard()
  }
}
