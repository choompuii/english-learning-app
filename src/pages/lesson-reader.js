import { getLessonById, lessons } from '../data/lessons.js'
import { esc } from '../utils/html.js'
import { startLesson, completeLesson, getLessonStatus, getProgress, saveLessonNote, getLessonNote } from '../store.js'
import { getOrderedLessons, getNextAction } from '../utils/progression.js'
import { speak, attachTtsListeners } from '../utils/tts.js'
import { floatXP, streakPop, showNewBadges } from '../utils/fx.js'

export function renderLessonReader({ id }) {
  const main = document.getElementById('main-content')
  const lesson = getLessonById(id)

  if (!lesson) {
    main.innerHTML = `<div class="page"><p>Lesson not found.</p><a href="#/lessons">← Back</a></div>`
    return
  }

  const ordered = getOrderedLessons(lessons)
  const state = getProgress()

  const status = getLessonStatus(id)
  if (status.status === 'not-started') startLesson(id)
  const startTime = Date.now()

  // The single guided next step for this lesson (study vocab → quiz → next lesson → done)
  const nextAction = getNextAction(lesson, state, ordered)

  main.innerHTML = `
    <div class="page">
      <div class="breadcrumb">
        <a href="#/lessons">Lessons</a>
        <span class="breadcrumb-sep">›</span>
        <span class="level-badge level-${lesson.level}">${lesson.level}</span>
        <span class="breadcrumb-sep">›</span>
        <span>${lesson.topic}</span>
      </div>

      <div class="page-header">
        <h1>${lesson.title}</h1>
        <p>${lesson.description}</p>
      </div>

      <article id="lesson-body">
        ${lesson.sections.map(renderSection).join('')}
      </article>

      <!-- Lesson Notes -->
      <div style="margin-top:var(--sp-10);padding-top:var(--sp-6);border-top:1px solid var(--border)">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-3)">📝 My Notes</div>
        <textarea id="lesson-notes"
          placeholder="จดบันทึกส่วนตัวสำหรับบทเรียนนี้... (บันทึกอัตโนมัติ)"
          style="width:100%;min-height:96px;padding:var(--sp-3) var(--sp-4);border:1.5px solid var(--border);border-radius:var(--r-lg);font-family:var(--font-body);font-size:var(--text-sm);resize:vertical;background:var(--surface);color:var(--text);line-height:1.6;transition:border-color 200ms var(--ease);box-sizing:border-box"
          rows="4"
        >${getLessonNote(id).replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
        <div style="font-size:var(--text-xs);color:var(--text-faint);margin-top:var(--sp-1);text-align:right" id="notes-status">บันทึกอัตโนมัติ</div>
      </div>

      <div style="margin-top:var(--sp-6);padding-top:var(--sp-6);border-top:1px solid var(--border);display:flex;flex-direction:column;gap:var(--sp-4)">
        ${renderNextStepBlock(nextAction)}

        <div style="display:flex;justify-content:space-between;align-items:center;gap:var(--sp-3);flex-wrap:wrap;margin-top:var(--sp-2)">
          <a href="#/lessons" class="btn btn-ghost">← All Lessons</a>
          ${status.status !== 'completed'
            ? `<button class="btn btn-primary" id="complete-btn" style="white-space:nowrap">เสร็จแล้ว — ${nextAction.cta}</button>`
            : `<div style="display:flex;align-items:center;gap:var(--sp-3);flex-wrap:wrap">
                 <span style="color:var(--accent);font-weight:600">✓ เรียนจบแล้ว</span>
                 <a href="${nextAction.href}" class="btn btn-primary" style="white-space:nowrap">${nextAction.cta}</a>
               </div>`}
        </div>
      </div>
    </div>
  `

  attachTtsListeners(main)

  const notesArea = main.querySelector('#lesson-notes')
  const notesStatus = main.querySelector('#notes-status')
  if (notesArea) {
    notesArea.addEventListener('focus', () => { notesArea.style.borderColor = 'var(--accent)' })
    notesArea.addEventListener('blur', () => { notesArea.style.borderColor = 'var(--border)' })
    let saveTimer
    notesArea.addEventListener('input', () => {
      notesStatus.textContent = 'กำลังพิมพ์...'
      clearTimeout(saveTimer)
      saveTimer = setTimeout(() => {
        saveLessonNote(id, notesArea.value)
        notesStatus.textContent = '✓ บันทึกแล้ว'
        setTimeout(() => { notesStatus.textContent = 'บันทึกอัตโนมัติ' }, 2000)
      }, 600)
    })
  }

  const completeBtn = main.querySelector('#complete-btn')
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      const elapsed = Math.round((Date.now() - startTime) / 1000)
      const stateBefore = getProgress()
      const newBadges = completeLesson(id, elapsed)
      const stateAfter = getProgress()
      const freshAction = getNextAction(lesson, stateAfter, ordered)
      floatXP(50, completeBtn)
      if (stateAfter.streakDays > stateBefore.streakDays) {
        setTimeout(() => streakPop(stateAfter.streakDays), 600)
      }
      if (newBadges && newBadges.length) setTimeout(() => showNewBadges(newBadges), 800)

      // Give the celebration a beat, then guide the learner straight to the next step
      completeBtn.disabled = true
      completeBtn.textContent = 'เยี่ยม! กำลังพาไปต่อ…'
      setTimeout(() => { window.location.hash = freshAction.href.replace(/^#/, '') }, 900)
    })
  }
}

const TONE_STYLES = {
  accent: { bg: 'var(--accent-soft)', border: '2px solid var(--accent-mid)', eyebrow: 'var(--accent)' },
  gold: { bg: 'var(--gold-soft)', border: '2px solid var(--gold)', eyebrow: '#8B6914' },
  neutral: { bg: 'var(--surface-2)', border: '1px solid var(--border)', eyebrow: 'var(--text-muted)' }
}

// Renders the informational "what's next" block from a getNextAction() descriptor.
// The block only explains the next step — the single action button lives in the bottom bar.
function renderNextStepBlock(action) {
  if (action.type === 'done') {
    return `
      <div style="background:var(--accent-soft);border-radius:var(--r-lg);padding:var(--sp-5);text-align:center">
        <div style="font-size:1.5rem;margin-bottom:var(--sp-2)">${action.emoji}</div>
        <div style="font-weight:600">${action.title}</div>
        <div style="font-size:var(--text-sm);color:var(--text-muted);margin-top:2px">${action.subtitle}</div>
      </div>
    `
  }

  const tone = TONE_STYLES[action.tone] || TONE_STYLES.neutral
  const eyebrow = action.type === 'next-lesson' ? 'บทเรียนถัดไป' : 'ขั้นตอนต่อไป'
  return `
    <div style="background:${tone.bg};border:${tone.border};border-radius:var(--r-lg);padding:var(--sp-5) var(--sp-6)">
      <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:${tone.eyebrow};margin-bottom:var(--sp-2)">${eyebrow}</div>
      <div style="min-width:0">
        <div style="font-weight:600;margin-bottom:2px">${action.emoji} ${action.title}</div>
        <div style="font-size:var(--text-sm);color:var(--text-muted)">${action.subtitle}</div>
      </div>
    </div>
  `
}

function renderSection(s) {
  switch (s.type) {
    case 'intro':
      return `
        <div class="lesson-section">
          <h2 style="margin-bottom:var(--sp-4)">${esc(s.heading || '')}</h2>
          <p>${esc(s.body)}</p>
        </div>`

    case 'explanation':
      return `
        <div class="lesson-section lesson-explanation">
          ${s.heading ? `<h3 style="margin-bottom:var(--sp-3);font-family:var(--font-body);font-weight:600">${esc(s.heading)}</h3>` : ''}
          <p style="white-space:pre-line">${esc(s.body)}</p>
        </div>`

    case 'example':
      return `
        <div class="lesson-section">
          <table class="lesson-example-table">
            <thead><tr><th>English</th><th>ภาษาไทย</th></tr></thead>
            <tbody>
              ${s.sentences.map(sent => `
                <tr>
                  <td class="example-en">
                    <span>${esc(sent.en)}</span>
                    <button class="tts-btn" data-speak="${sent.en.replace(/"/g, '&quot;')}" title="ฟังเสียง" style="margin-left:4px">🔊</button>
                  </td>
                  <td class="example-th">${esc(sent.th)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>`

    case 'tip':
      return `
        <div class="lesson-section lesson-tip">
          <p style="white-space:pre-line;font-size:var(--text-sm)">${esc(s.body)}</p>
        </div>`

    case 'dialogue':
      return `
        <div class="lesson-section lesson-dialogue">
          <div class="lesson-dialogue-header">Dialogue</div>
          ${s.lines.map(line => `
            <div class="dialogue-line">
              <span class="dialogue-speaker">${esc(line.speaker)}</span>
              <span class="dialogue-text">${esc(line.text)}</span>
              <button class="tts-btn" data-speak="${line.text.replace(/"/g, '&quot;')}" title="ฟังเสียง" style="margin-left:auto;flex-shrink:0">🔊</button>
            </div>
          `).join('')}
        </div>`

    default:
      return ''
  }
}
