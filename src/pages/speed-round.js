import { decks } from '../data/vocabulary.js'
import { speak } from '../utils/tts.js'
import { addBonusXP, recordSpeedRoundResult, getSpeedRoundBest, addToPracticeList, removeFromPracticeList, getPracticeList, isInPracticeList } from '../store.js'
import { floatXP, showNewBadges } from '../utils/fx.js'

const TIMER_SECONDS = 10
const PRACTICE_TIMER_SECONDS = 20
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

function makeHint(word) {
  return word.split(' ')
    .map(w => w.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : '_').join(''))
    .join('  ')
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
      <div class="breadcrumb">
        <span>Speed Round</span>
      </div>
      <div class="page-header">
        <h1>Speed Round</h1>
        <p>เห็นความหมายภาษาไทย → พิมพ์คำอังกฤษก่อน timeout — ${TIMER_SECONDS} วินาทีต่อคำ</p>
      </div>

      <div id="sr-deck-select">
        <div id="sr-practice-section"></div>

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

  function renderPracticeSection() {
    const practiceList = getPracticeList()
    const section = main.querySelector('#sr-practice-section')
    if (!section) return
    if (practiceList.length === 0) { section.innerHTML = ''; return }

    section.innerHTML = `
      <div style="margin-bottom:var(--sp-6)">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-3)">คำที่ต้องฝึก</div>
        <div style="display:flex;gap:var(--sp-3);align-items:stretch;flex-wrap:wrap">
          <button id="sr-practice-start-btn"
            style="background:var(--surface);border:2px solid var(--accent);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);text-align:left;cursor:pointer;transition:all 200ms var(--ease);min-width:220px"
            onmouseover="this.style.background='var(--accent-soft)'"
            onmouseout="this.style.background='var(--surface)'">
            <div style="font-size:1.4rem;margin-bottom:var(--sp-2)">🎯</div>
            <div style="font-weight:600;font-size:var(--text-sm);margin-bottom:4px">คำที่ต้องฝึก</div>
            <div style="font-size:var(--text-xs);color:var(--text-muted)">${practiceList.length} คำ · มีคำใบ้</div>
          </button>
          <button id="sr-practice-manage-toggle"
            style="background:transparent;border:1.5px dashed var(--border);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);font-size:var(--text-xs);color:var(--text-muted);cursor:pointer;align-self:flex-start;margin-top:var(--sp-2)">
            จัดการ ›
          </button>
        </div>
        <div id="sr-practice-manage-panel" style="display:none;margin-top:var(--sp-3);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4)">
          <div style="font-size:var(--text-xs);color:var(--text-muted);margin-bottom:var(--sp-3)">กดเอาออกเมื่อคล่องแล้ว</div>
          <div style="display:flex;flex-wrap:wrap;gap:var(--sp-2)">
            ${practiceList.map(c => `
              <div style="display:flex;align-items:center;gap:var(--sp-2);background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-full);padding:var(--sp-1) var(--sp-3);font-size:var(--text-sm)">
                <span style="font-weight:600">${c.front}</span>
                <button data-remove-word="${c.front}"
                  style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1rem;line-height:1;padding:0"
                  title="เอาออก">×</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `

    section.querySelector('#sr-practice-start-btn').addEventListener('click', () => {
      const cards = getPracticeList()
      if (cards.length === 0) return
      startSession({ id: '__practice__', title: 'คำที่ต้องฝึก', icon: '🎯', cards, isPractice: true })
    })

    section.querySelector('#sr-practice-manage-toggle').addEventListener('click', () => {
      const panel = section.querySelector('#sr-practice-manage-panel')
      panel.style.display = panel.style.display === 'none' ? '' : 'none'
    })

    section.querySelectorAll('[data-remove-word]').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromPracticeList(btn.dataset.removeWord)
        renderPracticeSection()
      })
    })
  }

  renderPracticeSection()

  let autoAdvanceTimeout = null
  let activeTimer = null

  function startSession(deck) {
    if (autoAdvanceTimeout) { clearTimeout(autoAdvanceTimeout); autoAdvanceTimeout = null }
    if (activeTimer) { clearInterval(activeTimer); activeTimer = null }
    main.querySelector('#sr-deck-select').style.display = 'none'
    const sessionEl = main.querySelector('#sr-session')
    sessionEl.style.display = ''

    const cards = shuffle(deck.cards)
    let idx = 0
    let correct = 0
    let total = 0
    const cardTimer = deck.isPractice ? PRACTICE_TIMER_SECONDS : TIMER_SECONDS
    let timeLeft = cardTimer
    let answered = false

    // Stop the countdown if the user navigates away mid-session (the interval would
    // otherwise keep firing into a detached DOM until it times out).
    window.addEventListener('hashchange', () => {
      clearInterval(activeTimer); activeTimer = null
      clearTimeout(autoAdvanceTimeout); autoAdvanceTimeout = null
    }, { once: true })

    function renderCard() {
      if (idx >= cards.length) {
        showSummary()
        return
      }
      const card = cards[idx]
      answered = false
      timeLeft = cardTimer

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
            ${deck.isPractice ? `<div style="margin-top:var(--sp-3);font-family:monospace;font-size:var(--text-base);letter-spacing:0.15em;color:var(--accent);font-weight:600">${makeHint(card.front)}</div>` : ''}
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
      activeTimer = setInterval(() => {
        if (answered) return
        ticksDone++
        timeLeft = cardTimer - ticksDone
        const pct = (timeLeft / cardTimer) * 100
        timerBar.style.width = pct + '%'
        timerBar.style.background = pct > 40 ? 'var(--accent)' : pct > 20 ? 'var(--gold)' : 'var(--danger)'

        if (timeLeft <= 0) {
          clearInterval(activeTimer)
          activeTimer = null
          handleAnswer(null)
        }
      }, 1000)

      function handleAnswer(userAnswer) {
        if (answered) return
        answered = true
        clearInterval(activeTimer)
        activeTimer = null
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
          const alreadyInPractice = deck.isPractice
          feedback.innerHTML = `
            <div style="background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);display:flex;align-items:center;gap:var(--sp-3);animation:pop-in 0.2s ease">
              <span style="font-size:1.3rem">✓</span>
              <div>
                <span style="font-weight:700;color:var(--accent)">${card.front}</span>
                <span style="font-size:var(--text-xs);color:var(--text-muted);margin-left:var(--sp-2)">${card.phonetic || ''}</span>
              </div>
              <span style="margin-left:auto;font-size:var(--text-sm);font-weight:700;color:var(--accent)">+${XP_PER_CORRECT} XP</span>
              ${alreadyInPractice ? `<button class="btn btn-ghost btn-sm" id="sr-remove-practice-btn" style="font-size:var(--text-xs)">คล่องแล้ว เอาออก ✓</button>` : ''}
            </div>
          `
          if (alreadyInPractice) {
            sessionEl.querySelector('#sr-remove-practice-btn')?.addEventListener('click', () => {
              removeFromPracticeList(card.front)
              if (autoAdvanceTimeout) { clearTimeout(autoAdvanceTimeout); autoAdvanceTimeout = null }
              idx++; renderCard()
            })
          }
          autoAdvanceTimeout = setTimeout(() => { autoAdvanceTimeout = null; idx++; renderCard() }, 1200)
        } else {
          input.style.borderColor = 'var(--danger)'
          const alreadyAdded = isInPracticeList(card.front)
          feedback.innerHTML = `
            <div style="background:var(--danger-soft);border:1px solid var(--danger);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);animation:pop-in 0.2s ease">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-2);gap:var(--sp-2);flex-wrap:wrap">
                <span style="font-weight:700;color:var(--danger)">${userAnswer === null ? '⏰ หมดเวลา' : '✗ ยังไม่ถูก'}</span>
                <div style="display:flex;gap:var(--sp-2)">
                  ${!deck.isPractice ? `<button class="btn btn-ghost btn-sm" id="sr-add-practice-btn" ${alreadyAdded ? 'disabled' : ''} style="font-size:var(--text-xs)">${alreadyAdded ? '✓ เพิ่มแล้ว' : '+ ฝึกเพิ่ม'}</button>` : ''}
                  <button class="btn btn-ghost btn-sm" id="sr-next-btn">ถัดไป →</button>
                </div>
              </div>
              <div style="font-size:var(--text-sm)">คำตอบ: <strong style="color:var(--accent)">${card.front}</strong> <span style="color:var(--text-muted)">${card.phonetic || ''}</span></div>
            </div>
          `
          if (!deck.isPractice && !alreadyAdded) {
            sessionEl.querySelector('#sr-add-practice-btn')?.addEventListener('click', (e) => {
              addToPracticeList(card)
              e.target.textContent = '✓ เพิ่มแล้ว'
              e.target.disabled = true
            })
          }
          const nextBtn = sessionEl.querySelector('#sr-next-btn')
          let advanced = false
          const enterTimer = setTimeout(() => document.addEventListener('keyup', onEnterNext), 1000)
          function advance() {
            if (advanced) return
            advanced = true
            clearTimeout(enterTimer)
            nextBtn.removeEventListener('click', advance)
            document.removeEventListener('keyup', onEnterNext)
            idx++; renderCard()
          }
          function onEnterNext(e) { if (e.key === 'Enter') advance() }
          nextBtn.addEventListener('click', advance)
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
        if (activeTimer) { clearInterval(activeTimer); activeTimer = null }
        if (autoAdvanceTimeout) { clearTimeout(autoAdvanceTimeout); autoAdvanceTimeout = null }
        main.querySelector('#sr-deck-select').style.display = ''
        sessionEl.style.display = 'none'
        sessionEl.innerHTML = ''
      })
    }

    renderCard()
  }
}
