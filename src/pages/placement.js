import { placementBank, PLACEMENT_LEVELS } from '../data/placement.js'
import { setLevel } from '../store.js'
import { getProfile, saveProfile } from '../lib/auth.js'
import { navigate } from '../router.js'
import { confetti } from '../utils/fx.js'
import { esc } from '../utils/html.js'

// Pass mark for a level: get most of a level right to "clear" it and move up.
const PASS = 3 // out of 4

// Session state for one run.
let session = null

function freshSession() {
  return {
    levelIdx: 0,        // which level we're testing
    qIdx: 0,            // which question within the level
    correctThisLevel: 0,
    placed: null,       // highest cleared level so far (null = not even A1)
    answered: [],       // { level, q, chosen, correct, correctIdx }
  }
}

export function renderPlacement() {
  session = freshSession()
  showQuestion()
}

function shell(inner) {
  const main = document.getElementById('main-content')
  main.innerHTML = `
    <div class="page" style="max-width:640px">
      ${inner}
    </div>
  `
  return main
}

function progressHeader() {
  // Rough progress: how far up the ladder we are. Total is unknown (adaptive),
  // so we show the current level being probed rather than a % bar.
  const level = PLACEMENT_LEVELS[session.levelIdx]
  const totalQ = placementBank[session.levelIdx].questions.length
  return `
    <div class="page-header">
      <h1>📋 แบบทดสอบวัดระดับ</h1>
      <p>ตอบคำถามตามความเข้าใจของคุณ ระบบจะปรับความยากขึ้นเรื่อยๆ จนกว่าจะเจอระดับที่เหมาะสม</p>
    </div>
    <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-5)">
      <span class="level-badge level-${level}" style="font-weight:800">${level}</span>
      <span style="font-size:var(--text-sm);color:var(--text-muted)">คำถามที่ ${session.qIdx + 1}/${totalQ} ของระดับนี้</span>
    </div>
  `
}

function showQuestion() {
  const bank = placementBank[session.levelIdx]
  const item = bank.questions[session.qIdx]

  const main = shell(`
    ${progressHeader()}
    <div class="card" style="padding:var(--sp-6)">
      <p style="font-size:var(--text-xl);font-weight:700;color:var(--text);margin:0 0 var(--sp-5);line-height:1.5">${esc(item.q)}</p>
      <div id="opts" style="display:flex;flex-direction:column;gap:var(--sp-3)">
        ${item.options.map((opt, i) => `
          <button class="placement-opt" data-i="${i}"
            style="text-align:left;padding:14px 18px;border:2px solid var(--border);border-radius:var(--r-md);background:var(--surface);color:var(--text);font-size:var(--text-base);font-weight:600;cursor:pointer;font-family:var(--font-body);transition:all .12s">
            <span style="display:inline-block;width:22px;height:22px;line-height:20px;text-align:center;border-radius:50%;border:1.5px solid var(--border-soft);font-size:12px;margin-right:10px;color:var(--text-muted)">${String.fromCharCode(65 + i)}</span>${esc(opt)}
          </button>
        `).join('')}
      </div>
    </div>
  `)

  main.querySelectorAll('.placement-opt').forEach(btn => {
    btn.addEventListener('click', () => choose(+btn.dataset.i, btn), { once: false })
  })
}

function choose(chosen, btn) {
  const bank = placementBank[session.levelIdx]
  const item = bank.questions[session.qIdx]
  const correct = chosen === item.answer

  // Lock the options and show right/wrong feedback briefly.
  const opts = document.querySelectorAll('.placement-opt')
  opts.forEach(o => { o.disabled = true; o.style.cursor = 'default' })
  opts[item.answer].style.borderColor = 'var(--success)'
  opts[item.answer].style.background = 'var(--success-soft)'
  if (!correct) {
    btn.style.borderColor = 'var(--danger)'
    btn.style.background = 'var(--danger-soft)'
  }

  if (correct) session.correctThisLevel++
  session.answered.push({
    level: bank.level, q: item.q, chosen, correct, correctIdx: item.answer, options: item.options,
  })

  setTimeout(advance, 620)
}

function advance() {
  const bank = placementBank[session.levelIdx]

  // More questions in this level?
  if (session.qIdx < bank.questions.length - 1) {
    session.qIdx++
    showQuestion()
    return
  }

  // Level finished — did they clear it?
  const cleared = session.correctThisLevel >= PASS
  if (cleared) session.placed = bank.level

  const isLastLevel = session.levelIdx >= PLACEMENT_LEVELS.length - 1
  if (cleared && !isLastLevel) {
    // Climb to the next, harder level.
    session.levelIdx++
    session.qIdx = 0
    session.correctThisLevel = 0
    showQuestion()
    return
  }

  // Stop: either they failed this level, or they cleared the top level.
  finish()
}

async function finish() {
  // Placed level: highest cleared level, or A1 if they didn't even clear A1.
  const level = session.placed || 'A1'
  setLevel(level)

  // Persist to the cloud profile too (best-effort — ignore if not signed in).
  try {
    const profile = await getProfile()
    if (profile) {
      await saveProfile({
        display_name: profile.display_name || '',
        username: profile.username || '',
        avatar_color: profile.avatar_color || '#2d6a4f',
        level,
        placement_done: true,
      })
    }
  } catch { /* offline / anonymous — local level is enough */ }

  const totalCorrect = session.answered.filter(a => a.correct).length
  const totalQ = session.answered.length
  const levelMeta = LEVEL_BLURB[level]

  const main = shell(`
    <div class="page-header">
      <h1>🎉 ผลการวัดระดับ</h1>
    </div>
    <div class="card" style="text-align:center;padding:var(--sp-8) var(--sp-6);margin-bottom:var(--sp-5)">
      <div style="font-size:3rem;font-weight:900;color:var(--accent);line-height:1">${level}</div>
      <div style="font-size:var(--text-lg);font-weight:700;color:var(--text);margin-top:var(--sp-2)">${levelMeta.title}</div>
      <p style="color:var(--text-muted);margin:var(--sp-2) 0 0;font-size:var(--text-sm)">${levelMeta.desc}</p>
      <div style="margin-top:var(--sp-5);font-size:var(--text-sm);color:var(--text-muted)">ตอบถูก ${totalCorrect}/${totalQ} ข้อ</div>
    </div>

    <div class="card" style="margin-bottom:var(--sp-5)">
      <h3 style="margin:0 0 var(--sp-4);font-size:var(--text-sm);text-transform:uppercase;letter-spacing:.05em;color:var(--text-muted)">ทบทวนคำตอบ</h3>
      <div style="display:flex;flex-direction:column;gap:var(--sp-3)">
        ${session.answered.map(a => `
          <div style="display:flex;gap:var(--sp-3);align-items:flex-start;padding-bottom:var(--sp-3);border-bottom:1px solid var(--border-soft)">
            <span style="flex-shrink:0;font-size:1.1rem">${a.correct ? '✅' : '❌'}</span>
            <div style="min-width:0">
              <div style="font-size:var(--text-sm);color:var(--text);font-weight:600">${esc(a.q)}</div>
              ${a.correct ? '' : `<div style="font-size:var(--text-sm);color:var(--success);margin-top:2px">คำตอบ: ${esc(a.options[a.correctIdx])}</div>`}
            </div>
            <span class="level-badge level-${a.level}" style="margin-left:auto;flex-shrink:0">${a.level}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="display:flex;gap:var(--sp-3);flex-wrap:wrap">
      <button class="btn btn-primary btn-lg" id="go-course" style="flex:1;min-width:200px">เริ่มเรียนที่ระดับ ${level} →</button>
      <button class="btn btn-ghost" id="retake">ทำใหม่อีกครั้ง</button>
    </div>
  `)

  confetti()
  main.querySelector('#go-course').addEventListener('click', () => navigate('/course/' + level.toLowerCase()))
  main.querySelector('#retake').addEventListener('click', () => renderPlacement())
}

const LEVEL_BLURB = {
  A1: { title: 'Beginner', desc: 'เริ่มต้นจากพื้นฐาน คำศัพท์และประโยคง่ายๆ' },
  A2: { title: 'Elementary', desc: 'สื่อสารเรื่องในชีวิตประจำวันได้' },
  B1: { title: 'Intermediate', desc: 'คุยเรื่องทั่วไปและเข้าใจประโยคซับซ้อนขึ้น' },
  B2: { title: 'Upper-Intermediate', desc: 'สื่อสารได้คล่อง อ่านงานที่ซับซ้อนได้' },
  C1: { title: 'Advanced', desc: 'ใช้ภาษาได้ยืดหยุ่นและเป็นธรรมชาติ' },
  C2: { title: 'Mastery', desc: 'เชี่ยวชาญใกล้เคียงเจ้าของภาษา' },
}
