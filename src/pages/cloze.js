import { SENTENCE_SETS } from '../data/sentences.js'
import { addBonusXP } from '../store.js'
import { floatXP, showNewBadges } from '../utils/fx.js'

const ROUNDS = 10

// Words too common/short to be useful blanks
const SKIP = new Set([
  'a','an','the','i','is','am','are','was','were','be','been','being',
  'to','and','or','but','in','on','at','of','for','with','by','from',
  'it','its','this','that','not','so','my','your','his','her','our',
  'we','they','he','she','you',',','.','?','!','\'s',
])

function isBlankable(word) {
  return word.length >= 3 && !SKIP.has(word.toLowerCase())
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Build questions from sentence sets for a given level
function buildQuestions(level, count) {
  const set = SENTENCE_SETS.find(s => s.level === level)
  if (!set || !set.sentences.length) return []

  // Pool of all words at this level for distractors
  const wordPool = set.sentences.flatMap(s => s.words.filter(isBlankable))
  const questions = []

  const pool = shuffle([...set.sentences])
  for (const sent of pool) {
    if (questions.length >= count) break
    const candidates = sent.words.map((w, i) => ({ w, i })).filter(({ w }) => isBlankable(w))
    if (!candidates.length) continue

    const { w: answer, i: blankIdx } = candidates[Math.floor(Math.random() * candidates.length)]

    // Build sentence with blank
    const displayed = sent.words.map((w, i) => i === blankIdx ? '_____' : w).join(' ')

    // 3 distractors: different from answer, not already in sentence
    const sentWords = new Set(sent.words.map(w => w.toLowerCase()))
    const distractors = shuffle(wordPool.filter(w => w.toLowerCase() !== answer.toLowerCase() && !sentWords.has(w.toLowerCase())))
      .slice(0, 3)

    if (distractors.length < 3) continue // not enough distractors, skip

    questions.push({
      sentence: displayed,
      thai: sent.thai,
      answer,
      options: shuffle([answer, ...distractors]),
    })
  }

  return questions
}

let session = null

export function renderCloze() {
  const main = document.getElementById('main-content')

  main.innerHTML = `
    <div class="page" style="max-width:680px">
      <div class="page-header">
        <h1>📝 Cloze Test</h1>
        <p>เลือกคำที่ถูกต้องเพื่อเติมลงในช่องว่าง — ฝึกทำความเข้าใจประโยคในบริบท</p>
      </div>

      <div style="display:flex;gap:var(--sp-2);flex-wrap:wrap;margin-bottom:var(--sp-6)">
        ${['A1','A2','B1','B2','C1','C2'].map(l => `
          <button class="btn ${l === 'B1' ? 'btn-primary' : 'btn-ghost'} btn-sm level-pick" data-level="${l}">
            <span class="level-badge level-${l}" style="margin-right:4px">${l}</span>${['Beginner','Elementary','Intermediate','Upper-Int.','Advanced','Mastery'][['A1','A2','B1','B2','C1','C2'].indexOf(l)]}
          </button>
        `).join('')}
      </div>

      <div id="cloze-area"></div>
    </div>
  `

  let currentLevel = 'B1'

  function start(level) {
    currentLevel = level
    main.querySelectorAll('.level-pick').forEach(b => {
      b.classList.toggle('btn-primary', b.dataset.level === level)
      b.classList.toggle('btn-ghost', b.dataset.level !== level)
    })
    const questions = buildQuestions(level, ROUNDS)
    if (!questions.length) {
      document.getElementById('cloze-area').innerHTML = `<p style="color:var(--text-muted)">ไม่มีข้อมูลสำหรับระดับนี้</p>`
      return
    }
    session = { questions, idx: 0, correct: 0, answered: false, level }
    showQuestion()
  }

  main.querySelectorAll('.level-pick').forEach(b => {
    b.addEventListener('click', () => start(b.dataset.level))
  })

  start('B1')
}

function showQuestion() {
  const area = document.getElementById('cloze-area')
  if (!area || !session) return

  if (session.idx >= session.questions.length) {
    showSummary()
    return
  }

  const q = session.questions[session.idx]
  session.answered = false

  area.innerHTML = `
    <div style="margin-bottom:var(--sp-3)">
      <div class="progress-bar" style="height:6px;margin-bottom:var(--sp-2)">
        <div class="progress-fill" style="width:${Math.round((session.idx / session.questions.length) * 100)}%"></div>
      </div>
      <div style="font-size:var(--text-xs);color:var(--text-muted)">ข้อ ${session.idx + 1} / ${session.questions.length} · ถูก ${session.correct}</div>
    </div>

    <div class="card" style="margin-bottom:var(--sp-4)">
      <p style="font-size:var(--text-sm);color:var(--text-muted);margin:0 0 var(--sp-3)">🇹🇭 ${q.thai}</p>
      <p style="font-size:var(--text-xl);font-weight:600;color:var(--text);line-height:1.5;margin:0">${q.sentence}</p>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-3)" id="options-grid">
      ${q.options.map((opt, i) => `
        <button class="btn btn-ghost cloze-opt" data-opt="${opt}" style="justify-content:flex-start;padding:var(--sp-3) var(--sp-4);font-size:var(--text-base);font-weight:500;text-align:left;border:2px solid var(--border)">
          <span style="color:var(--text-faint);margin-right:8px;font-size:var(--text-sm)">${['A','B','C','D'][i]}.</span>${opt}
        </button>
      `).join('')}
    </div>

    <div id="cloze-feedback" style="margin-top:var(--sp-4);min-height:40px"></div>
  `

  area.querySelectorAll('.cloze-opt').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn.dataset.opt, q))
  })

  // Keyboard A/B/C/D shortcuts
  const keyHandler = (e) => {
    if (session.answered) return
    const map = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 }
    if (map[e.key.toLowerCase()] !== undefined) {
      const opt = q.options[map[e.key.toLowerCase()]]
      if (opt) {
        document.removeEventListener('keydown', keyHandler)
        handleAnswer(opt, q)
      }
    }
  }
  document.addEventListener('keydown', keyHandler)
  area._keyHandler = keyHandler
}

function handleAnswer(chosen, q) {
  if (session.answered) return
  session.answered = true

  // Remove keyboard handler
  if (document.getElementById('cloze-area')?._keyHandler) {
    document.removeEventListener('keydown', document.getElementById('cloze-area')._keyHandler)
  }

  const isCorrect = chosen.toLowerCase() === q.answer.toLowerCase()
  if (isCorrect) session.correct++

  // Highlight buttons
  document.querySelectorAll('.cloze-opt').forEach(btn => {
    btn.disabled = true
    if (btn.dataset.opt.toLowerCase() === q.answer.toLowerCase()) {
      btn.style.borderColor = 'var(--accent)'
      btn.style.background = 'var(--accent-soft)'
      btn.style.color = 'var(--accent)'
    } else if (btn.dataset.opt === chosen && !isCorrect) {
      btn.style.borderColor = 'var(--danger)'
      btn.style.background = 'var(--danger-soft)'
      btn.style.color = 'var(--danger)'
    }
  })

  // Show the complete sentence
  const revealed = session.questions[session.idx].sentence.replace('_____', `[${q.answer}]`)
  document.getElementById('cloze-feedback').innerHTML = `
    <div style="padding:var(--sp-3) var(--sp-4);border-radius:var(--r-md);background:${isCorrect ? 'var(--accent-soft)' : 'var(--danger-soft)'};border-left:3px solid ${isCorrect ? 'var(--accent)' : 'var(--danger)'}">
      <div style="font-weight:700;color:${isCorrect ? 'var(--accent)' : 'var(--danger)'};margin-bottom:4px">${isCorrect ? '✓ ถูกต้อง!' : `✗ คำตอบที่ถูก: ${q.answer}`}</div>
      <div style="font-size:var(--text-sm);color:var(--text-muted)">${revealed}</div>
    </div>
    <button class="btn btn-primary" id="next-btn" style="margin-top:var(--sp-4);width:100%">
      ${session.idx + 1 < session.questions.length ? 'ข้อถัดไป →' : 'ดูผลลัพธ์ →'}
    </button>
  `

  document.getElementById('next-btn').addEventListener('click', () => {
    session.idx++
    showQuestion()
  })
}

function showSummary() {
  const area = document.getElementById('cloze-area')
  if (!area || !session) return

  const pct = Math.round((session.correct / session.questions.length) * 100)
  const xpEarned = session.correct * 5
  addBonusXP(xpEarned)
  floatXP(xpEarned)
  showNewBadges()

  area.innerHTML = `
    <div style="text-align:center">
      <div style="font-size:4rem;margin-bottom:var(--sp-4)">${pct >= 80 ? '🌟' : pct >= 60 ? '👍' : '💪'}</div>
      <h2 style="margin-bottom:var(--sp-2)">${pct >= 80 ? 'ยอดเยี่ยม!' : pct >= 60 ? 'ดีมาก!' : 'สู้ต่อไป!'}</h2>
      <p style="color:var(--text-muted);margin-bottom:var(--sp-6)">${session.correct} / ${session.questions.length} ข้อ ถูก (${pct}%) · +${xpEarned} XP</p>

      <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" id="retry-btn">ลองอีกครั้ง</button>
        <a href="#/" class="btn btn-ghost">กลับหน้าหลัก</a>
      </div>
    </div>
  `

  document.getElementById('retry-btn').addEventListener('click', () => {
    const lvl = session.level || 'B1'
    const questions = buildQuestions(lvl, ROUNDS)
    session = { questions, idx: 0, correct: 0, answered: false, level: lvl }
    showQuestion()
  })
}
