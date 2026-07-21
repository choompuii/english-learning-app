import { decks } from '../data/vocabulary.js'
import { speak } from '../utils/tts.js'
import {
  getProgress, setLevel, addBonusXP, recordVocabAnswer,
  recordAdaptiveResult, getAdaptiveBest, CEFR_LEVELS,
} from '../store.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'
import { esc } from '../utils/html.js'

const ROUNDS = 15          // questions per session
const STEP_UP = 3          // consecutive correct answers to move up a level
const STEP_DOWN = 2        // consecutive wrong answers to move down a level

// Cards grouped by CEFR level (built once).
const CARDS_BY_LEVEL = (() => {
  const map = Object.fromEntries(CEFR_LEVELS.map(l => [l, []]))
  for (const d of decks) {
    if (!map[d.level]) continue
    for (const c of d.cards) {
      if (c.front && c.thai) map[d.level].push({ ...c, level: d.level })
    }
  }
  return map
})()

// A flat pool of all cards, used to draw plausible distractors.
const ALL_CARDS = CEFR_LEVELS.flatMap(l => CARDS_BY_LEVEL[l])

let s = null

function fresh() {
  const start = getProgress().selectedLevel
  const startIdx = Math.max(0, CEFR_LEVELS.indexOf(CEFR_LEVELS.includes(start) ? start : 'A1'))
  return {
    levelIdx: startIdx,
    peakIdx: startIdx,
    round: 0,
    correct: 0,
    streakUp: 0,
    streakDown: 0,
    seen: new Set(),
    lastMsg: null,
  }
}

export function renderAdaptive() {
  s = fresh()
  nextQuestion()
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function currentLevel() {
  return CEFR_LEVELS[s.levelIdx]
}

// Draw a fresh card at (or near) the current level. Falls back to adjacent levels
// if the current one is exhausted for this session.
function drawCard() {
  const order = [s.levelIdx, s.levelIdx + 1, s.levelIdx - 1, s.levelIdx + 2, s.levelIdx - 2]
  for (const idx of order) {
    const lvl = CEFR_LEVELS[idx]
    if (!lvl) continue
    const pool = CARDS_BY_LEVEL[lvl].filter(c => !s.seen.has(c.id))
    if (pool.length) return pick(pool)
  }
  // Everything at nearby levels seen — allow repeats from current level.
  return pick(CARDS_BY_LEVEL[currentLevel()]) || pick(ALL_CARDS)
}

function buildOptions(card) {
  const distractors = []
  const usedThai = new Set([card.thai])
  const shuffledPool = [...ALL_CARDS].sort(() => Math.random() - 0.5)
  for (const c of shuffledPool) {
    if (distractors.length >= 3) break
    if (usedThai.has(c.thai)) continue
    usedThai.add(c.thai)
    distractors.push(c.thai)
  }
  return [card.thai, ...distractors].sort(() => Math.random() - 0.5)
}

function levelMeter() {
  return `
    <div style="display:flex;gap:6px;justify-content:center;margin-bottom:var(--sp-2)">
      ${CEFR_LEVELS.map((l, i) => `
        <span style="padding:3px 10px;border-radius:var(--r-full);font-size:var(--text-xs);font-weight:800;
          background:${i === s.levelIdx ? 'var(--accent)' : 'var(--surface-2)'};
          color:${i === s.levelIdx ? '#fff' : 'var(--text-faint)'};
          border:1px solid ${i === s.levelIdx ? 'var(--accent)' : 'var(--border-soft)'}">${l}</span>
      `).join('')}
    </div>
    <p style="text-align:center;font-size:var(--text-xs);color:var(--text-muted);margin:0">
      ระดับความยากปัจจุบัน • ตอบถูกติดกัน ${STEP_UP} ข้อเพื่อเลื่อนขึ้น
    </p>
  `
}

function nextQuestion() {
  if (s.round >= ROUNDS) return finish()

  const card = drawCard()
  s.seen.add(card.id)
  s.currentCard = card
  const options = buildOptions(card)

  const main = document.getElementById('main-content')
  main.innerHTML = `
    <div class="page" style="max-width:600px">
      <div class="breadcrumb">
        <a href="#/practice">Practice</a>
        <span class="breadcrumb-sep">›</span>
        <span>Adaptive Practice</span>
      </div>
      <div class="page-header">
        <h1>🎚️ Adaptive Practice</h1>
        <p>ฝึกคำศัพท์ที่ปรับความยากตามคำตอบของคุณแบบเรียลไทม์</p>
      </div>

      ${levelMeter()}

      <div style="display:flex;justify-content:space-between;align-items:center;margin:var(--sp-5) 0 var(--sp-3)">
        <span style="font-size:var(--text-sm);color:var(--text-muted)">ข้อ ${s.round + 1}/${ROUNDS}</span>
        <span style="font-size:var(--text-sm);font-weight:700;color:var(--accent)">คะแนน ${s.correct}</span>
      </div>
      <div style="height:6px;background:var(--surface-2);border-radius:var(--r-full);overflow:hidden;margin-bottom:var(--sp-5)">
        <div style="height:100%;width:${(s.round / ROUNDS) * 100}%;background:var(--accent);transition:width .3s"></div>
      </div>

      ${s.lastMsg ? `<div style="text-align:center;font-size:var(--text-sm);font-weight:700;color:${s.lastMsg.color};margin-bottom:var(--sp-3)">${s.lastMsg.text}</div>` : ''}

      <div class="card" style="text-align:center;padding:var(--sp-8) var(--sp-6);margin-bottom:var(--sp-5)">
        <div style="font-size:var(--text-3xl);font-weight:800;color:var(--text)">${esc(card.front)}</div>
        ${card.phonetic ? `<div style="font-family:var(--font-mono);color:var(--text-muted);margin-top:var(--sp-1)">${esc(card.phonetic)}</div>` : ''}
        <button id="speak-btn" class="btn btn-ghost btn-sm" style="margin-top:var(--sp-3)" aria-label="ฟังเสียงคำนี้">🔊 ฟังเสียง</button>
      </div>

      <p style="font-size:var(--text-sm);color:var(--text-muted);text-align:center;margin-bottom:var(--sp-3)">เลือกความหมายที่ถูกต้อง</p>
      <div id="opts" style="display:flex;flex-direction:column;gap:var(--sp-3)">
        ${options.map(opt => `
          <button class="adapt-opt" data-thai="${encodeURIComponent(opt)}"
            style="text-align:center;padding:14px 18px;border:2px solid var(--border);border-radius:var(--r-md);background:var(--surface);color:var(--text);font-size:var(--text-base);font-weight:600;cursor:pointer;font-family:var(--font-body);transition:all .12s">${esc(opt)}</button>
        `).join('')}
      </div>
    </div>
  `

  s.lastMsg = null
  main.querySelector('#speak-btn').addEventListener('click', () => speak(card.front))
  main.querySelectorAll('.adapt-opt').forEach(btn => {
    btn.addEventListener('click', () => answer(decodeURIComponent(btn.dataset.thai), btn))
  })
}

function answer(chosenThai, btn) {
  const card = s.currentCard
  const correct = chosenThai === card.thai

  const opts = document.querySelectorAll('.adapt-opt')
  opts.forEach(o => {
    o.disabled = true
    o.style.cursor = 'default'
    if (decodeURIComponent(o.dataset.thai) === card.thai) {
      o.style.borderColor = 'var(--success)'
      o.style.background = 'var(--success-soft)'
    }
  })
  if (!correct) {
    btn.style.borderColor = 'var(--danger)'
    btn.style.background = 'var(--danger-soft)'
  }

  recordVocabAnswer(card.front, correct)

  if (correct) {
    s.correct++
    s.streakUp++
    s.streakDown = 0
    const xp = 3 + s.levelIdx          // harder level → a little more XP
    addBonusXP(xp)
    floatXP(xp, btn)
    if (s.streakUp >= STEP_UP && s.levelIdx < CEFR_LEVELS.length - 1) {
      s.levelIdx++
      s.streakUp = 0
      s.peakIdx = Math.max(s.peakIdx, s.levelIdx)
      s.lastMsg = { text: `⬆️ เก่งขึ้น! เลื่อนไประดับ ${currentLevel()}`, color: 'var(--success)' }
    }
  } else {
    s.streakDown++
    s.streakUp = 0
    if (s.streakDown >= STEP_DOWN && s.levelIdx > 0) {
      s.levelIdx--
      s.streakDown = 0
      s.lastMsg = { text: `⬇️ ลดความยากลงเป็นระดับ ${currentLevel()}`, color: 'var(--text-muted)' }
    }
  }

  s.round++
  setTimeout(nextQuestion, 720)
}

function finish() {
  const peak = CEFR_LEVELS[s.peakIdx]
  const pct = Math.round((s.correct / ROUNDS) * 100)
  const result = recordAdaptiveResult(s.correct, ROUNDS)
  const best = getAdaptiveBest()
  const currentLvl = getProgress().selectedLevel

  const main = document.getElementById('main-content')
  main.innerHTML = `
    <div class="page" style="max-width:560px">
      <div class="page-header"><h1>🏁 จบเซสชัน!</h1></div>

      <div class="card" style="text-align:center;padding:var(--sp-8) var(--sp-6);margin-bottom:var(--sp-5)">
        <div style="font-size:var(--text-4xl);font-weight:900;color:var(--accent);line-height:1">${s.correct}/${ROUNDS}</div>
        <div style="color:var(--text-muted);margin-top:var(--sp-2)">ความแม่นยำ ${pct}%</div>
        <div style="margin-top:var(--sp-4);display:flex;justify-content:center;gap:var(--sp-6)">
          <div>
            <div style="font-size:var(--text-xs);color:var(--text-muted)">ระดับสูงสุดที่ทำได้</div>
            <div style="font-size:var(--text-xl);font-weight:800;color:var(--text)">${peak}</div>
          </div>
          <div>
            <div style="font-size:var(--text-xs);color:var(--text-muted)">สถิติดีสุด</div>
            <div style="font-size:var(--text-xl);font-weight:800;color:var(--text)">${best ? best.bestScore + '/' + best.bestTotal : '—'}</div>
          </div>
        </div>
        ${result?.isNewRecord ? '<div style="margin-top:var(--sp-3);font-weight:700;color:var(--gold-text)">🎉 ทำลายสถิติเดิม!</div>' : ''}
      </div>

      ${peak !== currentLvl ? `
        <div class="card" style="margin-bottom:var(--sp-5);text-align:center">
          <p style="margin:0 0 var(--sp-3);color:var(--text)">คุณทำได้ถึงระดับ <b>${peak}</b> — ต้องการตั้งระดับการเรียนเป็น ${peak} ไหม?</p>
          <button class="btn btn-primary" id="set-level">ตั้งระดับเป็น ${peak}</button>
        </div>
      ` : ''}

      <div style="display:flex;gap:var(--sp-3);flex-wrap:wrap">
        <button class="btn btn-primary btn-lg" id="again" style="flex:1;min-width:180px">ฝึกอีกครั้ง</button>
        <button class="btn btn-ghost" id="home">กลับหน้าหลัก</button>
      </div>
    </div>
  `

  if (pct >= 70) confetti()
  if (result?.newBadges?.length) showNewBadges(result.newBadges)

  main.querySelector('#again').addEventListener('click', () => renderAdaptive())
  main.querySelector('#home').addEventListener('click', () => { window.location.hash = '/' })
  const setBtn = main.querySelector('#set-level')
  if (setBtn) setBtn.addEventListener('click', () => {
    setLevel(peak)
    setBtn.textContent = `ตั้งเป็น ${peak} แล้ว ✓`
    setBtn.disabled = true
  })
}
