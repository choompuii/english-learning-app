import { decks } from '../data/vocabulary.js'
import { speak } from '../utils/tts.js'
import {
  getProgress, getDifficultWords, getPracticeList,
  addBonusXP, recordDailyChallenge, getDailyChallengeToday, getDailyChallengeStreak
} from '../store.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'
import { esc } from '../utils/html.js'

const CHALLENGE_SIZE = 8
const XP_PER_CORRECT = 5

// ── Deterministic per-day randomness ──────────────────────────
// Seed the shuffle/fill by today's date so the challenge is stable all day
// (retries show the same set) but rotates tomorrow.
function hashStr(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) }
  return h >>> 0
}
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0
    let t = Math.imul(a ^ a >>> 15, 1 | a)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}
function seededShuffle(arr, rng) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function normalise(s) {
  return s.toLowerCase().trim().replace(/[.,!?;:()]/g, '').replace(/\s+/g, ' ')
}

// Build today's adaptive set: practice-list words + due flashcards + difficult
// words first, topped up with fresh cards (preferring the learner's level).
function buildDailySet() {
  const state = getProgress()
  const today = new Date().toISOString().split('T')[0]
  const rng = mulberry32(hashStr(today))

  const allCards = decks.flatMap(d => d.cards.map(c => ({
    ...c, level: d.level, deckId: d.id, deckTitle: d.title
  })))
  const byFront = new Map()
  for (const c of allCards) byFront.set(c.front.toLowerCase(), c)

  const picked = new Map() // front → { card, source }
  const add = (card, source) => {
    if (!card) return
    const key = card.front.toLowerCase()
    if (!picked.has(key)) picked.set(key, { ...card, source })
  }

  // 1. User-flagged practice words
  for (const c of getPracticeList()) add(byFront.get(c.front.toLowerCase()) || c, 'practice')

  // 2. Due flashcards
  for (const [deckId, deck] of Object.entries(state.flashcards || {})) {
    const srcDeck = decks.find(d => d.id === deckId)
    if (!srcDeck) continue
    for (const [cardId, cd] of Object.entries(deck.cards || {})) {
      if (!cd.nextReview || cd.nextReview > today) continue
      const card = srcDeck.cards.find(c => c.id === cardId)
      if (card) add({ ...card, level: srcDeck.level, deckId, deckTitle: srcDeck.title }, 'due')
    }
  }

  // 3. Difficult words (tracked as low-accuracy)
  for (const w of getDifficultWords()) add(byFront.get(w.toLowerCase()), 'weak')

  // 4. Fill with fresh cards, preferring the learner's level
  const level = state.selectedLevel
  const remaining = seededShuffle(
    allCards.filter(c => !picked.has(c.front.toLowerCase())),
    rng
  ).sort((a, b) => (b.level === level) - (a.level === level))
  for (const c of remaining) {
    if (picked.size >= CHALLENGE_SIZE) break
    add(c, 'new')
  }

  // Keep at most CHALLENGE_SIZE, order shuffled for the day. Use a fresh RNG so
  // the final order is deterministic per-day regardless of how many cards the
  // fill step consumed from the first RNG.
  const orderRng = mulberry32(hashStr(today + '-order'))
  return seededShuffle([...picked.values()].slice(0, CHALLENGE_SIZE), orderRng)
}

const SOURCE_LABEL = {
  practice: { text: 'คำที่ต้องฝึก', color: 'var(--accent)' },
  due:      { text: 'ถึงกำหนดทบทวน', color: '#c9973a' },
  weak:     { text: 'คำที่เคยผิด', color: 'var(--danger)' },
  new:      { text: 'คำใหม่', color: 'var(--text-muted)' },
}

export function renderDaily() {
  const main = document.getElementById('main-content')
  const cards = buildDailySet()
  const todayResult = getDailyChallengeToday()
  const streak = getDailyChallengeStreak()

  main.innerHTML = `
    <div class="page" style="max-width:640px">
      <div class="page-header">
        <h1>🗓️ Daily Challenge</h1>
        <p>ชุดทบทวนประจำวัน ${CHALLENGE_SIZE} คำ — เลือกจากคำที่คุณต้องฝึก ถึงกำหนดทบทวน และเคยตอบผิด</p>
      </div>

      <div style="display:flex;gap:var(--sp-4);flex-wrap:wrap;margin-bottom:var(--sp-6)">
        <div class="card" style="flex:1;min-width:140px;text-align:center">
          <div style="font-size:1.8rem">🔥</div>
          <div style="font-size:var(--text-2xl);font-weight:800;color:var(--accent);line-height:1">${streak}</div>
          <div style="font-size:var(--text-sm);color:var(--text-muted)">วันติดกัน</div>
        </div>
        <div class="card" style="flex:1;min-width:140px;text-align:center">
          <div style="font-size:1.8rem">${todayResult ? '✅' : '⏳'}</div>
          <div style="font-size:var(--text-sm);font-weight:700;margin-top:var(--sp-1)">${todayResult ? `วันนี้: ${todayResult.score}/${todayResult.total}` : 'ยังไม่ได้ทำวันนี้'}</div>
        </div>
      </div>

      <div id="daily-intro">
        <button class="btn btn-primary btn-lg" id="daily-start-btn" style="width:100%">
          ${todayResult ? '↺ ทำอีกครั้ง' : 'เริ่ม Daily Challenge →'}
        </button>
        ${todayResult ? '<p style="text-align:center;font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--sp-3)">ทำวันนี้ครบแล้ว — เล่นซ้ำได้ แต่โบนัสรายวันได้ครั้งเดียว</p>' : ''}
      </div>

      <div id="daily-session" style="display:none"></div>
    </div>
  `

  main.querySelector('#daily-start-btn').addEventListener('click', () => startSession(main, cards))
}

function startSession(main, cards) {
  main.querySelector('#daily-intro').style.display = 'none'
  const sessionEl = main.querySelector('#daily-session')
  sessionEl.style.display = ''

  let idx = 0
  let correct = 0
  let advanceTimeout = null

  // Cancel the pending auto-advance if the user navigates away mid-session, so
  // the callback can't fire into a detached DOM.
  window.addEventListener('hashchange', () => {
    if (advanceTimeout) { clearTimeout(advanceTimeout); advanceTimeout = null }
  }, { once: true })

  function renderCard() {
    if (idx >= cards.length) { showSummary(); return }
    const card = cards[idx]
    const src = SOURCE_LABEL[card.source] || SOURCE_LABEL.new

    sessionEl.innerHTML = `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-6);animation:pop-in 0.2s ease">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-4);flex-wrap:wrap;gap:var(--sp-2)">
          <span style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted)">${idx + 1}/${cards.length}</span>
          <span style="font-size:var(--text-xs);font-weight:700;padding:2px var(--sp-3);border-radius:var(--r-full);background:var(--surface-2);color:${src.color}">${src.text}</span>
        </div>

        <div style="height:6px;background:var(--border);border-radius:var(--r-full);margin-bottom:var(--sp-6);overflow:hidden">
          <div style="height:100%;width:${(idx / cards.length) * 100}%;background:var(--accent);border-radius:var(--r-full);transition:width .3s"></div>
        </div>

        <div style="text-align:center;margin-bottom:var(--sp-6)">
          <div style="font-size:var(--text-2xl);font-weight:800;color:var(--text);margin-bottom:var(--sp-2)">${esc(card.thai || card.front)}</div>
          <div style="font-size:var(--text-sm);color:var(--text-muted)">${esc(card.back || '')}</div>
        </div>

        <div style="display:flex;gap:var(--sp-3);align-items:center">
          <input id="daily-input" type="text" autocomplete="off" spellcheck="false"
            placeholder="พิมพ์คำอังกฤษ..."
            style="flex:1;padding:var(--sp-3) var(--sp-4);border:2px solid var(--border);border-radius:var(--r-lg);font-size:var(--text-base);font-family:var(--font-body);background:var(--surface);color:var(--text)"/>
          <button class="btn btn-primary" id="daily-submit-btn">→</button>
        </div>

        <div id="daily-feedback" style="margin-top:var(--sp-4)"></div>
      </div>
    `

    const input = sessionEl.querySelector('#daily-input')
    const submitBtn = sessionEl.querySelector('#daily-submit-btn')
    const feedback = sessionEl.querySelector('#daily-feedback')
    let answered = false
    input.focus()

    function handleAnswer() {
      if (answered) return
      answered = true
      const userAnswer = input.value.trim()
      const isCorrect = userAnswer !== '' &&
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
          <div style="background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);display:flex;align-items:center;gap:var(--sp-3)">
            <span style="font-size:1.3rem">✓</span>
            <span style="font-weight:700;color:var(--accent)">${esc(card.front)}</span>
            <span style="font-size:var(--text-xs);color:var(--text-muted)">${esc(card.phonetic || '')}</span>
            <span style="margin-left:auto;font-weight:700;color:var(--accent)">+${XP_PER_CORRECT} XP</span>
          </div>`
        advanceTimeout = setTimeout(() => { advanceTimeout = null; idx++; renderCard() }, 1100)
      } else {
        input.style.borderColor = 'var(--danger)'
        feedback.innerHTML = `
          <div style="background:var(--danger-soft);border:1px solid var(--danger);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-2)">
              <span style="font-weight:700;color:var(--danger)">${userAnswer === '' ? 'ข้าม' : '✗ ยังไม่ถูก'}</span>
              <button class="btn btn-ghost btn-sm" id="daily-next-btn">ถัดไป →</button>
            </div>
            <div style="font-size:var(--text-sm)">คำตอบ: <strong style="color:var(--accent)">${esc(card.front)}</strong> <span style="color:var(--text-muted)">${esc(card.phonetic || '')}</span></div>
          </div>`
        const nextBtn = sessionEl.querySelector('#daily-next-btn')
        function advance() {
          nextBtn.removeEventListener('click', advance)
          document.removeEventListener('keyup', onEnterNext)
          idx++; renderCard()
        }
        function onEnterNext(e) { if (e.key === 'Enter') advance() }
        nextBtn.addEventListener('click', advance)
        setTimeout(() => document.addEventListener('keyup', onEnterNext), 1000)
      }
    }

    submitBtn.addEventListener('click', handleAnswer)
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handleAnswer() })
  }

  function showSummary() {
    const total = cards.length
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0
    const result = recordDailyChallenge(correct, total)
    const streak = getDailyChallengeStreak()

    sessionEl.innerHTML = `
      <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-xl);padding:var(--sp-8);text-align:center;animation:pop-in 0.3s ease">
        <div style="font-size:3rem;margin-bottom:var(--sp-3)">${pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '💪'}</div>
        <h2 style="margin-bottom:var(--sp-2)">Daily Challenge เสร็จแล้ว!</h2>
        <div style="font-size:var(--text-2xl);font-weight:800;color:var(--accent);margin-bottom:var(--sp-2)">${correct}/${total} ถูก</div>
        ${result.isFirst ? `<div style="display:inline-block;background:var(--gold-soft);border:1px solid var(--gold);color:#8B6914;font-weight:700;font-size:var(--text-sm);border-radius:var(--r-lg);padding:var(--sp-1) var(--sp-4);margin-bottom:var(--sp-2)">🎁 โบนัสรายวัน +${result.bonus} XP</div>` : ''}
        <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-5)">🔥 ทำต่อเนื่อง ${streak} วัน</div>
        <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" id="daily-retry-btn">↺ ทำอีกครั้ง</button>
          <a href="#/" class="btn btn-ghost">← กลับหน้าหลัก</a>
        </div>
      </div>
    `
    if (pct >= 80) confetti()
    if (result.newBadges?.length) setTimeout(() => showNewBadges(result.newBadges), 500)
    sessionEl.querySelector('#daily-retry-btn').addEventListener('click', () => {
      idx = 0; correct = 0; renderCard()
    })
  }

  renderCard()
}
