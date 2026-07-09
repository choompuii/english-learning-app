import { getLevel, getUnit, getAllLevels } from '../data/courses/index.js'
import { getCourseProgress, isCourseUnitUnlocked, recordCourseSection } from '../store.js'
import { renderVocabularyLesson } from './skill-vocabulary.js'
import { renderGrammarLesson } from './skill-grammar.js'
import { renderReadingLesson } from './skill-reading.js'
import { renderListeningLesson } from './skill-listening.js'
import { renderCourseUnitTest } from './course-unit-test.js'
import { showNewBadges } from '../utils/fx.js'
import { esc } from '../utils/html.js'

// ── Course Hub ──────────────────────────────────────────────────────────────
export function renderCourseHub() {
  const main = document.getElementById('main-content')
  const prog = getCourseProgress()

  main.innerHTML = `
    <div class="page" style="max-width:820px">
      <div class="page-header" style="margin-bottom:var(--sp-6)">
        <h1>📚 English Course</h1>
        <p>เรียนภาษาอังกฤษอย่างเป็นระบบ A1 → C2 ทุกระดับมีเนื้อหาครบ: คำศัพท์ ไวยากรณ์ ฟัง อ่าน และแบบทดสอบ</p>
      </div>

      <div class="course-level-grid">
        ${getAllLevels().map(level => levelCardHTML(level, prog)).join('')}
      </div>
    </div>
  `

  main.querySelectorAll('.course-level-card[data-level]').forEach(card => {
    card.addEventListener('click', () => { window.location.hash = `/course/${card.dataset.level}` })
  })
}

function levelCardHTML(level, prog) {
  const totalUnits = level.units.length
  const passedUnits = totalUnits > 0
    ? level.units.filter(u => prog[u.test.id]?.passed).length
    : 0
  const pct = totalUnits > 0 ? Math.round((passedUnits / totalUnits) * 100) : 0
  const hasContent = totalUnits > 0
  const locked = !hasContent

  return `
    <div class="course-level-card ${locked ? 'course-level-card--locked' : ''}" data-level="${level.id}"
         style="border-top:3px solid ${level.color}">
      <div style="display:flex;align-items:center;gap:var(--sp-3)">
        <span style="font-size:2rem">${level.emoji}</span>
        <div>
          <div style="display:flex;align-items:center;gap:var(--sp-2)">
            <span class="level-badge level-${level.label}">${level.label}</span>
            ${locked ? '<span class="chip" style="background:var(--surface-2);color:var(--text-muted)">🔒 เร็วๆ นี้</span>' : ''}
          </div>
          <div style="font-weight:700;font-size:var(--text-lg);margin-top:2px">${esc(level.title)}</div>
          <div style="font-size:var(--text-sm);color:var(--text-muted)">${esc(level.thai)}</div>
        </div>
      </div>
      <div style="font-size:var(--text-sm);color:var(--text-muted);margin-top:var(--sp-2)">${esc(level.description)}</div>
      ${hasContent ? `
        <div style="margin-top:var(--sp-3)">
          <div class="progress-bar" style="height:6px"><div class="progress-fill" style="width:${pct}%;background:${level.color}"></div></div>
          <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:4px">${passedUnits} / ${totalUnits} units ผ่านแล้ว</div>
        </div>
      ` : ''}
    </div>
  `
}

// ── Level Browser ───────────────────────────────────────────────────────────
export function renderLevelBrowser({ levelId }) {
  const main = document.getElementById('main-content')
  const level = getLevel(levelId)

  if (!level) {
    main.innerHTML = notFound('ไม่พบระดับนี้')
    return
  }

  const prog = getCourseProgress()

  main.innerHTML = `
    <div class="page" style="max-width:760px">
      <div class="breadcrumb">
        <a href="#/course">Course</a>
        <span class="breadcrumb-sep">›</span>
        <span>${esc(level.label)} ${esc(level.title)}</span>
      </div>

      <div class="page-header" style="margin-bottom:var(--sp-6)">
        <h1>${level.emoji} ${esc(level.label)} — ${esc(level.title)}</h1>
        <p>${esc(level.thai)} · ${esc(level.description)}</p>
      </div>

      ${level.units.length === 0 ? `
        <div class="empty-state">
          <div style="font-size:2.5rem">🚧</div>
          <p>กำลังสร้างเนื้อหาระดับนี้อยู่ — เร็วๆ นี้!</p>
          <a href="#/course" class="btn btn-primary" style="margin-top:var(--sp-3)">← กลับหน้า Course</a>
        </div>
      ` : `
        <div class="course-unit-list">
          ${level.units.map((unit, idx) => unitRowHTML(unit, idx, level.units, prog, levelId)).join('')}
        </div>
      `}
    </div>
  `

  main.querySelectorAll('.course-unit-row[data-unit]').forEach(row => {
    row.addEventListener('click', () => {
      window.location.hash = `/course/${levelId}/${row.dataset.unit}`
    })
  })
}

function unitRowHTML(unit, idx, allUnits, prog, levelId) {
  const unlocked = isCourseUnitUnlocked(unit.id, allUnits)
  const SECTIONS = ['vocabulary', 'grammar', 'listening', 'reading']
  const sectionsDone = SECTIONS.filter(sec => prog[unit[sec].id]?.status === 'completed').length
  const passed = prog[unit.test.id]?.passed === true

  const dots = SECTIONS.map(sec => {
    const done = prog[unit[sec].id]?.status === 'completed'
    const labels = { vocabulary: '📖', grammar: '📐', listening: '🎧', reading: '📚' }
    return `<span title="${sec}" style="font-size:0.8rem;opacity:${done ? 1 : 0.3}">${labels[sec]}</span>`
  }).join('')

  return `
    <div class="course-unit-row ${!unlocked ? 'course-unit-row--locked' : ''}" data-unit="${unit.id}"
         style="${!unlocked ? 'cursor:not-allowed;opacity:0.55' : ''}">
      <div style="display:flex;align-items:center;gap:var(--sp-3);flex:1;min-width:0">
        <div class="course-unit-number" style="background:${unlocked ? 'var(--accent)' : 'var(--text-faint)'}">
          ${!unlocked ? '🔒' : passed ? '✓' : idx + 1}
        </div>
        <div style="min-width:0">
          <div style="font-weight:700">${esc(unit.title)}</div>
          <div style="font-size:var(--text-sm);color:var(--text-muted)">${esc(unit.thai)}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:var(--sp-3);flex-shrink:0">
        <div style="display:flex;gap:4px">${dots}</div>
        ${passed ? '<span style="color:var(--accent);font-weight:600;font-size:var(--text-sm)">ผ่านแล้ว ✓</span>' : `<span style="font-size:var(--text-xs);color:var(--text-muted)">${sectionsDone}/4</span>`}
      </div>
    </div>
  `
}

// ── Unit Overview ───────────────────────────────────────────────────────────
export function renderUnitBrowser({ levelId, unitId }) {
  const main = document.getElementById('main-content')
  const level = getLevel(levelId)
  const unit = getUnit(levelId, unitId)

  if (!level || !unit) { main.innerHTML = notFound('ไม่พบบทนี้'); return }
  if (!isCourseUnitUnlocked(unitId, level.units)) { main.innerHTML = lockedHTML(levelId); return }

  const prog = getCourseProgress()
  const SECTIONS = [
    { key: 'vocabulary', label: 'Vocabulary',  thai: 'คำศัพท์',   emoji: '📖', color: 'var(--accent)' },
    { key: 'grammar',    label: 'Grammar',     thai: 'ไวยากรณ์', emoji: '📐', color: '#4A9EE0' },
    { key: 'listening',  label: 'Listening',   thai: 'การฟัง',   emoji: '🎧', color: '#9C6ADE' },
    { key: 'reading',    label: 'Reading',     thai: 'การอ่าน',  emoji: '📚', color: '#E8A838' },
  ]
  const sectionsDone = SECTIONS.filter(s => prog[unit[s.key].id]?.status === 'completed').length
  const allDone = sectionsDone === SECTIONS.length
  const testPassed = prog[unit.test.id]?.passed === true

  main.innerHTML = `
    <div class="page" style="max-width:760px">
      <div class="breadcrumb">
        <a href="#/course">Course</a>
        <span class="breadcrumb-sep">›</span>
        <a href="#/course/${levelId}">${esc(level.label)} ${esc(level.title)}</a>
        <span class="breadcrumb-sep">›</span>
        <span>${esc(unit.title)}</span>
      </div>

      <div class="page-header" style="margin-bottom:var(--sp-6)">
        <h1>${unit.emoji} ${esc(unit.title)}</h1>
        <p>${esc(unit.thai)} · <span style="color:var(--text-muted)">${sectionsDone}/4 sections เสร็จแล้ว</span>
          ${testPassed ? ' · <span style="color:var(--accent);font-weight:600">✓ ผ่านแล้ว</span>' : ''}
        </p>
      </div>

      <div class="course-section-grid">
        ${SECTIONS.map(s => {
          const done = prog[unit[s.key].id]?.status === 'completed'
          return `
            <a href="#/course/${levelId}/${unitId}/${s.key}" class="course-section-tile">
              <div style="font-size:2rem">${s.emoji}</div>
              <div>
                <div style="font-weight:700">${s.label}</div>
                <div style="font-size:var(--text-xs);color:var(--text-muted)">${s.thai}</div>
              </div>
              <div style="margin-top:auto;font-size:var(--text-sm)">
                ${done ? '<span style="color:var(--accent);font-weight:600">✓ เสร็จแล้ว</span>' : '<span style="color:var(--text-faint)">ยังไม่ได้ทำ</span>'}
              </div>
            </a>
          `
        }).join('')}
      </div>

      <!-- Unit Test tile -->
      <div style="margin-top:var(--sp-4)">
        <a href="#/course/${levelId}/${unitId}/test"
           class="course-unit-test-tile ${!allDone ? 'course-unit-test-tile--dim' : ''}"
           title="${!allDone ? 'ทำให้ครบทุก section ก่อนนะ' : 'ทำ Unit Test'}">
          <div style="font-size:2rem">📋</div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:var(--text-lg)">Unit Test</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">
              ${!allDone
                ? `ทำให้ครบ ${sectionsDone}/4 sections ก่อน`
                : testPassed
                  ? '✓ ผ่านแล้ว — ทำซ้ำได้เสมอ'
                  : `${unit.test.questions.length} ข้อ — ต้องได้ ≥ 70%`
              }
            </div>
          </div>
          <div style="font-size:1.5rem">${testPassed ? '🏆' : allDone ? '→' : '🔒'}</div>
        </a>
      </div>
    </div>
  `
}

// ── Section Dispatcher ──────────────────────────────────────────────────────
export function renderCourseSection({ levelId, unitId, section }) {
  const main = document.getElementById('main-content')
  const level = getLevel(levelId)
  const unit = getUnit(levelId, unitId)

  if (!level || !unit) { main.innerHTML = notFound('ไม่พบบทนี้'); return }
  if (!isCourseUnitUnlocked(unitId, level.units)) { main.innerHTML = lockedHTML(levelId); return }

  if (section === 'test') {
    renderCourseUnitTest({ levelId, unitId })
    return
  }

  const sectionData = unit[section]
  if (!sectionData) { window.location.hash = `/course/${levelId}/${unitId}`; return }

  // Shared options threaded into whichever skill renderer handles this section:
  //  - breadcrumb: course-aware trail (overrides the renderer's default /skills trail)
  //  - backHref/backCta: results-screen "back" button returns to the unit overview
  //  - onComplete: records course section progress (separate from the skill namespace)
  const opts = {
    breadcrumb: buildSectionBreadcrumb(levelId, unitId, section, level, unit),
    backHref: `#/course/${levelId}/${unitId}`,
    backCta: 'กลับหน้า Unit',
    onComplete: () => {
      const newBadges = recordCourseSection(sectionData.id, { xp: 20 })
      if (newBadges?.length) setTimeout(() => showNewBadges(newBadges), 500)
    }
  }

  switch (section) {
    case 'vocabulary': renderVocabularyLesson(sectionData, main, opts); break
    case 'grammar':    renderGrammarLesson(sectionData, main, opts); break
    case 'reading':    renderReadingLesson(sectionData, main, opts); break
    case 'listening':  renderListeningLesson(sectionData, main, opts); break
    default:           window.location.hash = `/course/${levelId}/${unitId}`
  }
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function buildSectionBreadcrumb(levelId, unitId, section, level, unit) {
  const labels = { vocabulary: 'Vocabulary', grammar: 'Grammar', listening: 'Listening', reading: 'Reading' }
  return `
    <a href="#/course">Course</a>
    <span class="breadcrumb-sep">›</span>
    <a href="#/course/${levelId}">${esc(level.label)} ${esc(level.title)}</a>
    <span class="breadcrumb-sep">›</span>
    <a href="#/course/${levelId}/${unitId}">${esc(unit.title)}</a>
    <span class="breadcrumb-sep">›</span>
    <span>${labels[section] || section}</span>
  `
}

function notFound(msg) {
  return `<div class="page"><div class="empty-state"><p>${esc(msg)}</p><a href="#/course" class="btn btn-primary" style="margin-top:var(--sp-3)">← กลับหน้า Course</a></div></div>`
}

function lockedHTML(levelId) {
  return `<div class="page"><div class="empty-state"><div style="font-size:2.5rem">🔒</div><p>Unit นี้ยังล็อคอยู่ — ผ่าน Unit Test ของ Unit ก่อนหน้าก่อนนะ</p><a href="#/course/${esc(levelId)}" class="btn btn-primary" style="margin-top:var(--sp-3)">← กลับไปดู Level</a></div></div>`
}
