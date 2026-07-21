import { getProfile, saveProfile } from '../lib/auth.js'
import { setLevel } from '../store.js'
import { navigate } from '../router.js'

const LEVELS = [
  { id: 'A1', label: 'A1', desc: 'Beginner', detail: 'รู้ศัพท์พื้นฐาน ทักทายได้' },
  { id: 'A2', label: 'A2', desc: 'Elementary', detail: 'สื่อสารง่ายๆ ในชีวิตประจำวัน' },
  { id: 'B1', label: 'B1', desc: 'Intermediate', detail: 'คุยเรื่องทั่วไปได้ เข้าใจประโยคซับซ้อน' },
  { id: 'B2', label: 'B2', desc: 'Upper-Int.', detail: 'สื่อสารได้คล่อง อ่านงานวิชาการได้' },
  { id: 'C1', label: 'C1', desc: 'Advanced', detail: 'ใช้ภาษาได้ยืดหยุ่น เป็นธรรมชาติ' },
  { id: 'C2', label: 'C2', desc: 'Mastery', detail: 'เชี่ยวชาญระดับเจ้าของภาษา' },
]

const GOALS = [
  { id: 'ielts',   icon: '📝', label: 'สอบ IELTS' },
  { id: 'toeic',   icon: '📊', label: 'สอบ TOEIC' },
  { id: 'speak',   icon: '💬', label: 'พูดกับชาวต่างชาติ' },
  { id: 'work',    icon: '💼', label: 'ใช้ในการทำงาน' },
  { id: 'travel',  icon: '✈️', label: 'ท่องเที่ยว' },
  { id: 'general', icon: '🌟', label: 'พัฒนาทั่วไป' },
]

const TIMES = [
  { id: 5,  label: '5 นาที', sub: 'เร็วมาก' },
  { id: 10, label: '10 นาที', sub: 'แนะนำ' },
  { id: 15, label: '15 นาที', sub: 'ดี' },
  { id: 20, label: '20 นาที', sub: 'เยี่ยม' },
  { id: 30, label: '30+ นาที', sub: 'เข้มข้น' },
]

const INTERESTS = [
  { id: 'it',       icon: '💻', label: 'IT & Tech' },
  { id: 'business', icon: '📈', label: 'Business' },
  { id: 'food',     icon: '🍜', label: 'Food' },
  { id: 'travel',   icon: '🗺️', label: 'Travel' },
  { id: 'movie',    icon: '🎬', label: 'Movie' },
  { id: 'music',    icon: '🎵', label: 'Music' },
  { id: 'sports',   icon: '⚽', label: 'Sports' },
  { id: 'science',  icon: '🔬', label: 'Science' },
]

const state = { level: null, goals: [], minutes: 10, interests: [] }
const TOTAL_STEPS = 4

export async function renderOnboarding() {
  Object.assign(state, { level: null, goals: [], minutes: 10, interests: [] })
  const main = document.getElementById('main-content')
  const profile = await getProfile()
  if (profile?.onboarding_done) { navigate('/'); return }
  showStep(main, 0)
}

function showStep(main, step) {
  const steps = [renderStep1, renderStep2, renderStep3, renderStep4]
  steps[step](main, step)
}

function progressBar(step) {
  const pct = Math.round(((step + 1) / TOTAL_STEPS) * 100)
  return `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:32px">
      <div style="flex:1;height:4px;background:var(--border);border-radius:99px;overflow:hidden">
        <div style="height:100%;width:${pct}%;background:var(--accent);border-radius:99px;transition:width .4s ease"></div>
      </div>
      <span style="font-size:12px;color:var(--text-muted);white-space:nowrap">${step + 1}/${TOTAL_STEPS}</span>
    </div>
  `
}

function navBtns(step, nextLabel = 'Continue', nextDisabled = false) {
  return `
    <div style="display:flex;gap:10px;margin-top:32px">
      ${step > 0 ? `<button id="btn-back" style="padding:12px 20px;background:none;border:1.5px solid var(--border);border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;color:var(--text-muted);font-family:var(--font-body)">← Back</button>` : ''}
      <button id="btn-next" ${nextDisabled ? 'disabled' : ''} style="flex:1;padding:12px;background:${nextDisabled ? 'var(--border)' : 'var(--accent)'};color:${nextDisabled ? 'var(--text-muted)' : '#fff'};border:none;border-radius:10px;font-size:14px;font-weight:600;cursor:${nextDisabled ? 'not-allowed' : 'pointer'};font-family:var(--font-body);transition:all .15s">${nextLabel}</button>
    </div>
  `
}

function shell(main, step, content) {
  main.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;background:var(--bg)">
      <div style="width:100%;max-width:520px">
        ${progressBar(step)}
        ${content}
      </div>
    </div>
  `
}

// ── Step 1: Level ──────────────────────────────────────────

function renderStep1(main, step) {
  shell(main, step, `
    <div style="margin-bottom:28px">
      <p style="font-size:13px;font-weight:600;color:var(--accent);margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">Step 1</p>
      <h1 style="font-size:1.6rem;font-weight:800;margin:0 0 8px;color:var(--text)">ระดับภาษาอังกฤษของคุณ</h1>
      <p style="font-size:14px;color:var(--text-muted);margin:0">เลือกระดับที่ใกล้เคียงที่สุด หรือทำ Placement Test ทีหลังก็ได้</p>
    </div>

    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px" id="level-grid">
      ${LEVELS.map(l => `
        <button class="level-btn" data-level="${l.id}" style="padding:16px;border:2px solid var(--border);border-radius:12px;background:var(--surface);cursor:pointer;text-align:left;transition:all .15s;font-family:var(--font-body)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="font-size:1.1rem;font-weight:800;color:var(--text)">${l.label}</span>
            <span style="font-size:11px;font-weight:600;color:var(--text-muted);background:var(--bg);padding:2px 8px;border-radius:99px">${l.desc}</span>
          </div>
          <p style="font-size:12px;color:var(--text-muted);margin:0;line-height:1.4">${l.detail}</p>
        </button>
      `).join('')}
    </div>

    ${navBtns(step, 'Continue', !state.level)}
  `)

  main.querySelectorAll('.level-btn').forEach(btn => {
    if (btn.dataset.level === state.level) highlight(btn)
    btn.addEventListener('click', () => {
      state.level = btn.dataset.level
      main.querySelectorAll('.level-btn').forEach(b => unhighlight(b))
      highlight(btn)
      main.querySelector('#btn-next').disabled = false
      main.querySelector('#btn-next').style.background = 'var(--accent)'
      main.querySelector('#btn-next').style.color = '#fff'
      main.querySelector('#btn-next').style.cursor = 'pointer'
    })
  })

  main.querySelector('#btn-next').addEventListener('click', () => showStep(main, 1))
}

// ── Step 2: Goals ──────────────────────────────────────────

function renderStep2(main, step) {
  shell(main, step, `
    <div style="margin-bottom:28px">
      <p style="font-size:13px;font-weight:600;color:var(--accent);margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">Step 2</p>
      <h1 style="font-size:1.6rem;font-weight:800;margin:0 0 8px;color:var(--text)">เป้าหมายของคุณ</h1>
      <p style="font-size:14px;color:var(--text-muted);margin:0">เลือกได้หลายข้อ</p>
    </div>

    <div style="display:flex;flex-direction:column;gap:10px" id="goal-list">
      ${GOALS.map(g => `
        <button class="goal-btn" data-id="${g.id}" style="display:flex;align-items:center;gap:14px;padding:14px 18px;border:2px solid var(--border);border-radius:12px;background:var(--surface);cursor:pointer;text-align:left;font-family:var(--font-body);transition:all .15s;${state.goals.includes(g.id)?'border-color:var(--accent);background:var(--accent-light,#f0fdf4);':'' }">
          <span style="font-size:1.4rem">${g.icon}</span>
          <span style="font-size:14px;font-weight:600;color:var(--text)">${g.label}</span>
          <span style="margin-left:auto;width:20px;height:20px;border-radius:50%;border:2px solid ${state.goals.includes(g.id)?'var(--accent)':'var(--border)'};background:${state.goals.includes(g.id)?'var(--accent)':'transparent'};display:flex;align-items:center;justify-content:center;flex-shrink:0">
            ${state.goals.includes(g.id) ? '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>' : ''}
          </span>
        </button>
      `).join('')}
    </div>

    ${navBtns(step, 'Continue', state.goals.length === 0)}
  `)

  main.querySelectorAll('.goal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id
      if (state.goals.includes(id)) state.goals = state.goals.filter(g => g !== id)
      else state.goals.push(id)
      renderStep2(main, step)
    })
  })

  main.querySelector('#btn-back').addEventListener('click', () => showStep(main, 0))
  main.querySelector('#btn-next').addEventListener('click', () => showStep(main, 2))
}

// ── Step 3: Time + Interests ───────────────────────────────

function renderStep3(main, step) {
  shell(main, step, `
    <div style="margin-bottom:24px">
      <p style="font-size:13px;font-weight:600;color:var(--accent);margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">Step 3</p>
      <h1 style="font-size:1.6rem;font-weight:800;margin:0 0 8px;color:var(--text)">เวลาและความสนใจ</h1>
    </div>

    <p style="font-size:13px;font-weight:700;color:var(--text);margin:0 0 10px">เรียนวันละกี่นาที?</p>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px">
      ${TIMES.map(t => `
        <button class="time-btn" data-mins="${t.id}" style="flex:1;min-width:80px;padding:12px 8px;border:2px solid ${state.minutes===t.id?'var(--accent)':'var(--border)'};border-radius:10px;background:${state.minutes===t.id?'var(--accent)':'var(--surface)'};cursor:pointer;font-family:var(--font-body);transition:all .15s">
          <div style="font-size:13px;font-weight:700;color:${state.minutes===t.id?'#fff':'var(--text)'}">${t.label}</div>
          <div style="font-size:11px;color:${state.minutes===t.id?'rgba(255,255,255,.8)':'var(--text-muted)'}">${t.sub}</div>
        </button>
      `).join('')}
    </div>

    <p style="font-size:13px;font-weight:700;color:var(--text);margin:0 0 10px">ความสนใจ <span style="font-weight:400;color:var(--text-muted)">(เลือกได้หลายข้อ)</span></p>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
      ${INTERESTS.map(i => `
        <button class="int-btn" data-id="${i.id}" style="padding:12px 8px;border:2px solid ${state.interests.includes(i.id)?'var(--accent)':'var(--border)'};border-radius:10px;background:${state.interests.includes(i.id)?'var(--accent)':'var(--surface)'};cursor:pointer;font-family:var(--font-body);transition:all .15s">
          <div style="font-size:1.3rem;margin-bottom:4px">${i.icon}</div>
          <div style="font-size:11px;font-weight:600;color:${state.interests.includes(i.id)?'#fff':'var(--text)'}">${i.label}</div>
        </button>
      `).join('')}
    </div>

    ${navBtns(step, 'Continue')}
  `)

  main.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', () => { state.minutes = +btn.dataset.mins; renderStep3(main, step) })
  })
  main.querySelectorAll('.int-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id
      if (state.interests.includes(id)) state.interests = state.interests.filter(x => x !== id)
      else state.interests.push(id)
      renderStep3(main, step)
    })
  })

  main.querySelector('#btn-back').addEventListener('click', () => showStep(main, 1))
  main.querySelector('#btn-next').addEventListener('click', () => showStep(main, 3))
}

// ── Step 4: Summary + Finish ───────────────────────────────

function renderStep4(main, step) {
  const levelObj = LEVELS.find(l => l.id === state.level)
  const goalLabels = state.goals.map(g => GOALS.find(x => x.id === g)?.label).filter(Boolean)
  const intLabels  = state.interests.map(i => INTERESTS.find(x => x.id === i)?.label).filter(Boolean)

  shell(main, step, `
    <div style="margin-bottom:28px">
      <p style="font-size:13px;font-weight:600;color:var(--accent);margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em">Step 4</p>
      <h1 style="font-size:1.6rem;font-weight:800;margin:0 0 8px;color:var(--text)">พร้อมเริ่มแล้ว! 🎉</h1>
      <p style="font-size:14px;color:var(--text-muted);margin:0">นี่คือแผนการเรียนของคุณ</p>
    </div>

    <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:20px">
      ${summaryRow('Level', `<span style="font-weight:700;color:var(--accent)">${levelObj?.label}</span> — ${levelObj?.desc}`)}
      ${summaryRow('เป้าหมาย', goalLabels.length ? goalLabels.join(', ') : '—')}
      ${summaryRow('เรียนต่อวัน', `${state.minutes} นาที`)}
      ${summaryRow('ความสนใจ', intLabels.length ? intLabels.join(', ') : '—', true)}
    </div>

    <div style="display:flex;flex-direction:column;gap:10px">
      <button id="btn-placement" style="width:100%;padding:13px;background:none;border:2px solid var(--accent);border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;color:var(--accent);font-family:var(--font-body);display:flex;align-items:center;justify-content:center;gap:8px">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        ทำ Placement Test (แนะนำ)
      </button>
      <button id="btn-start" style="width:100%;padding:13px;background:var(--accent);color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:var(--font-body)">
        เริ่มเรียนเลย →
      </button>
    </div>

    <button id="btn-back" style="display:block;margin:16px auto 0;background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:13px;font-family:var(--font-body)">← Back</button>
  `)

  main.querySelector('#btn-back').addEventListener('click', () => showStep(main, 2))

  main.querySelector('#btn-start').addEventListener('click', async () => {
    await finishOnboarding()
    navigate('/')
  })

  main.querySelector('#btn-placement').addEventListener('click', async () => {
    await finishOnboarding()
    navigate('/placement')
  })
}

function summaryRow(label, value, last = false) {
  return `<div style="display:flex;gap:12px;padding:14px 18px;${last ? '' : 'border-bottom:1px solid var(--border)'}">
    <span style="font-size:13px;color:var(--text-muted);width:90px;flex-shrink:0">${label}</span>
    <span style="font-size:13px;color:var(--text);font-weight:500">${value}</span>
  </div>`
}

async function finishOnboarding() {
  if (!state.level) return
  setLevel(state.level)
  const profile = await getProfile()
  await saveProfile({
    display_name: profile?.display_name || '',
    username: profile?.username || '',
    avatar_color: profile?.avatar_color || '#2d6a4f',
    level: state.level,
    goals: state.goals,
    daily_minutes: state.minutes,
    interests: state.interests,
    onboarding_done: true,
  })
}

// ── Helpers ────────────────────────────────────────────────

function highlight(btn) {
  btn.style.borderColor = 'var(--accent)'
  btn.style.background  = 'var(--accent)'
  btn.querySelectorAll('span, p').forEach(el => { el.style.color = '#fff' })
}

function unhighlight(btn) {
  btn.style.borderColor = 'var(--border)'
  btn.style.background  = 'var(--surface)'
  btn.querySelectorAll('span').forEach(el => { el.style.color = '' })
  btn.querySelectorAll('p').forEach(el => { el.style.color = 'var(--text-muted)' })
}
