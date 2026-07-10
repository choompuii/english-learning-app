import { runQuiz } from './skill-quiz-runner.js'
import { recordCourseUnitTest, getCourseProgress, isCourseUnitUnlocked } from '../store.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'
import { esc } from '../utils/html.js'
import { getLevel, getUnit } from '../data/courses/index.js'

export function renderCourseUnitTest({ levelId, unitId }) {
  const main = document.getElementById('main-content')
  const level = getLevel(levelId)
  const unit = getUnit(levelId, unitId)

  if (!level || !unit) {
    main.innerHTML = `<div class="page"><div class="empty-state"><p>ไม่พบบทนี้</p><a href="#/course" class="btn btn-primary" style="margin-top:var(--sp-3)">← กลับหน้า Course</a></div></div>`
    return
  }

  if (!isCourseUnitUnlocked(unitId, level.units)) {
    main.innerHTML = lockedHTML(levelId)
    return
  }

  const prog = getCourseProgress()
  const SECTIONS = ['vocabulary', 'grammar', 'listening', 'reading']
  const sectionsDone = SECTIONS.filter(sec => unit[sec] && prog[unit[sec].id]?.status === 'completed').length
  const allDone = sectionsDone === SECTIONS.length
  const prev = unit.test ? (prog[unit.test.id] || {}) : {}
  const alreadyPassed = prev.passed === true
  const breadcrumb = buildBreadcrumb(levelId, unitId, level, unit)

  if (!allDone) {
    main.innerHTML = `
      <div class="page" style="max-width:640px">
        <div class="breadcrumb">${breadcrumb}</div>
        <div class="page-header">
          <h1>📋 Unit Test: ${esc(unit.title)}</h1>
        </div>
        <div class="empty-state" style="border:2px dashed var(--border);border-radius:var(--r-lg);padding:var(--sp-8)">
          <div style="font-size:2.5rem;margin-bottom:var(--sp-3)">🔒</div>
          <p style="font-weight:600">ทำให้ครบทุก section ก่อนนะ</p>
          <p style="font-size:var(--text-sm);color:var(--text-muted);margin-top:var(--sp-2)">${sectionsDone} / ${SECTIONS.length} sections เสร็จแล้ว</p>
          <a href="#/course/${levelId}/${unitId}" class="btn btn-primary" style="margin-top:var(--sp-4)">← กลับหน้า Unit</a>
        </div>
      </div>
    `
    return
  }

  main.innerHTML = `
    <div class="page" style="max-width:760px">
      <div class="breadcrumb">${breadcrumb}</div>

      <div class="page-header" style="margin-bottom:var(--sp-5)">
        <h1>📋 Unit Test: ${esc(unit.title)}</h1>
        <p style="color:var(--text-muted)">
          ทดสอบความรู้ทั้งหมดจาก Unit นี้ — ต้องได้ ≥ 70% เพื่อปลดล็อค Unit ถัดไป
          ${alreadyPassed ? ' · <span style="color:var(--accent);font-weight:600">✓ ผ่านแล้ว</span>' : ''}
        </p>
        ${prev.bestScore != null ? `
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-top:var(--sp-2)">
            คะแนนสูงสุด: ${prev.bestScore} / ${prev.bestTotal} · ทำแล้ว ${prev.plays || 0} ครั้ง
          </div>
        ` : ''}
      </div>

      <div id="test-mount"></div>
    </div>
  `

  const mount = main.querySelector('#test-mount')
  if (!unit.test?.questions) { mount.innerHTML = '<p style="color:var(--text-muted)">ข้อมูลแบบทดสอบไม่พบ</p>'; return }
  runQuiz(mount, unit.test.questions, ({ score, total }) => {
    const { newBadges, passed, xp } = recordCourseUnitTest(unit.test.id, score, total)

    // Find next unit
    const allUnits = level.units
    const idx = allUnits.findIndex(u => u.id === unitId)
    const nextUnit = allUnits[idx + 1] || null

    mount.innerHTML = testResultHTML({ score, total, passed, levelId, unitId, unit, nextUnit, xp })
    if (xp > 0) floatXP(xp, mount.querySelector('.btn-primary') || mount)
    if (passed) confetti()
    if (newBadges?.length) setTimeout(() => showNewBadges(newBadges), 500)

    mount.querySelector('#retry-btn')?.addEventListener('click', () => renderCourseUnitTest({ levelId, unitId }))
  })
}

function testResultHTML({ score, total, passed, levelId, unitId, unit, nextUnit, xp }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0
  const emoji = passed ? '🎉' : pct >= 50 ? '👍' : '💪'
  const msg = passed ? 'ผ่านแล้ว! ยอดเยี่ยม' : pct >= 50 ? 'เกือบแล้ว ลองอีกครั้ง' : 'ลองทบทวนและทำใหม่นะ'

  return `
    <div style="text-align:center;padding:var(--sp-8) var(--sp-4)">
      <div style="font-size:3rem;margin-bottom:var(--sp-3)">${emoji}</div>
      <div style="font-size:var(--text-2xl);font-weight:800;color:${passed ? 'var(--accent)' : 'var(--text)'}">${score} / ${total}</div>
      <div style="font-size:var(--text-lg);font-weight:700;margin-top:var(--sp-1)">${pct}%</div>
      <div style="color:var(--text-muted);margin-top:var(--sp-2)">${msg}</div>
      ${xp > 0 ? `<div style="font-size:var(--text-sm);color:var(--accent);margin-top:var(--sp-1)">+${xp} XP</div>` : ''}

      ${passed && nextUnit ? `
        <div style="margin-top:var(--sp-5);padding:var(--sp-4);background:var(--accent-soft);border-radius:var(--r-lg)">
          <div style="font-weight:700;color:var(--accent)">🔓 ปลดล็อคแล้ว!</div>
          <div style="font-size:var(--text-sm);margin-top:4px">${esc(nextUnit.title)}</div>
        </div>
      ` : ''}

      <div style="display:flex;gap:var(--sp-3);justify-content:center;margin-top:var(--sp-6);flex-wrap:wrap">
        ${!passed ? `<button class="btn btn-secondary" id="retry-btn">↻ ทำอีกครั้ง</button>` : ''}
        <a href="#/course/${levelId}/${unitId}" class="btn btn-ghost">← กลับ Unit</a>
        ${passed && nextUnit ? `<a href="#/course/${levelId}/${nextUnit.id}" class="btn btn-primary">Unit ถัดไป →</a>` : ''}
        ${passed && !nextUnit ? `<a href="#/course/${levelId}" class="btn btn-primary">ดูระดับถัดไป →</a>` : ''}
      </div>
    </div>
  `
}

function buildBreadcrumb(levelId, unitId, level, unit) {
  return `
    <a href="#/course">Course</a>
    <span class="breadcrumb-sep">›</span>
    <a href="#/course/${levelId}">${esc(level.label)} ${esc(level.title)}</a>
    <span class="breadcrumb-sep">›</span>
    <a href="#/course/${levelId}/${unitId}">${esc(unit.title)}</a>
    <span class="breadcrumb-sep">›</span>
    <span>Unit Test</span>
  `
}

function lockedHTML(levelId) {
  return `<div class="page"><div class="empty-state"><div style="font-size:2.5rem">🔒</div><p>Unit นี้ยังล็อคอยู่ — ผ่าน Unit Test ของ Unit ก่อนหน้าก่อนนะ</p><a href="#/course/${esc(levelId)}" class="btn btn-primary" style="margin-top:var(--sp-3)">← กลับไปดู Level</a></div></div>`
}
