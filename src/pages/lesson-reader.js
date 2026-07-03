import { getLessonById, lessons } from '../data/lessons.js'
import { getDeckById } from '../data/vocabulary.js'
import { startLesson, completeLesson, getLessonStatus, getDeckProgress, getQuizBest, getProgress, saveLessonNote, getLessonNote } from '../store.js'
import { getOrderedLessons } from '../utils/progression.js'
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

  const deck = lesson.vocabularyDeckId ? getDeckById(lesson.vocabularyDeckId) : null
  const vocabMap = {}
  if (deck) deck.cards.forEach(c => { vocabMap[c.front.toLowerCase()] = c })

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
        ${renderNextStep(lesson, deck, status)}

        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--sp-2)">
          <a href="#/lessons" class="btn btn-ghost">← All Lessons</a>
          ${status.status !== 'completed' ? `
            <button class="btn btn-primary" id="complete-btn">Mark Complete ✓</button>
          ` : `<span style="color:var(--accent);font-weight:600">✓ Completed</span>`}
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
      floatXP(50, completeBtn)
      if (stateAfter.streakDays > stateBefore.streakDays) {
        setTimeout(() => streakPop(stateAfter.streakDays), 600)
      }
      if (newBadges && newBadges.length) setTimeout(() => showNewBadges(newBadges), 800)
      completeBtn.replaceWith(Object.assign(document.createElement('span'), {
        style: 'color:var(--accent);font-weight:600',
        textContent: '✓ Completed'
      }))
    })
  }
}

function renderNextStep(lesson, deck, status) {
  const deckStudied = deck ? getDeckProgress(deck.id, deck.cards.length).studied > 0 : true
  const quizDone = lesson.quizId ? !!getQuizBest(lesson.quizId) : true

  // Step 1: study vocab
  if (lesson.vocabularyDeckId && !deckStudied) {
    return `
      <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-lg);padding:var(--sp-5) var(--sp-6)">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--accent);margin-bottom:var(--sp-2)">ขั้นตอนต่อไป</div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:var(--sp-4)">
          <div>
            <div style="font-weight:600;margin-bottom:2px">📚 เรียน Vocabulary ก่อน</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">${deck.cards.length} flashcards — ช่วยให้จำคำศัพท์ได้แน่น</div>
          </div>
          <a href="#/flashcards/${lesson.vocabularyDeckId}" class="btn btn-primary" style="white-space:nowrap">Study Words →</a>
        </div>
      </div>
    `
  }

  // Step 2: take quiz
  if (lesson.quizId && !quizDone) {
    return `
      <div style="background:var(--gold-soft);border:2px solid var(--gold);border-radius:var(--r-lg);padding:var(--sp-5) var(--sp-6)">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#8B6914;margin-bottom:var(--sp-2)">ขั้นตอนต่อไป</div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:var(--sp-4)">
          <div>
            <div style="font-weight:600;margin-bottom:2px">❓ ทดสอบความเข้าใจ</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">Quiz 20 ข้อ — วัดว่าเข้าใจแล้วแค่ไหน</div>
          </div>
          <a href="#/quiz/${lesson.quizId}" class="btn btn-gold" style="white-space:nowrap">Take Quiz →</a>
        </div>
      </div>
    `
  }

  // Step 3: next lesson
  const allLessons = lessons
  const currentIdx = allLessons.findIndex(l => l.id === lesson.id)
  const nextLesson = allLessons[currentIdx + 1]
  if (nextLesson) {
    return `
      <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-5) var(--sp-6)">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);margin-bottom:var(--sp-2)">บทเรียนถัดไป</div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:var(--sp-4)">
          <div style="min-width:0">
            <div style="font-weight:600;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${nextLesson.title}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">
              <span class="level-badge level-${nextLesson.level}">${nextLesson.level}</span>
              <span style="margin-left:var(--sp-2)">⏱ ${nextLesson.estimatedMinutes} min</span>
            </div>
          </div>
          <a href="#/lessons/${nextLesson.id}" class="btn btn-primary" style="white-space:nowrap">เริ่มเลย →</a>
        </div>
      </div>
    `
  }

  // All done
  return `
    <div style="background:var(--accent-soft);border-radius:var(--r-lg);padding:var(--sp-5);text-align:center">
      <div style="font-size:1.5rem;margin-bottom:var(--sp-2)">🎉</div>
      <div style="font-weight:600">ทำครบทุก lesson แล้ว!</div>
    </div>
  `
}

function renderSection(s) {
  switch (s.type) {
    case 'intro':
      return `
        <div class="lesson-section">
          <h2 style="margin-bottom:var(--sp-4)">${s.heading || ''}</h2>
          <p>${s.body}</p>
        </div>`

    case 'explanation':
      return `
        <div class="lesson-section lesson-explanation">
          ${s.heading ? `<h3 style="margin-bottom:var(--sp-3);font-family:var(--font-body);font-weight:600">${s.heading}</h3>` : ''}
          <p style="white-space:pre-line">${s.body}</p>
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
                    <span>${sent.en}</span>
                    <button class="tts-btn" data-speak="${sent.en.replace(/"/g, '&quot;')}" title="ฟังเสียง" style="margin-left:4px">🔊</button>
                  </td>
                  <td class="example-th">${sent.th}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>`

    case 'tip':
      return `
        <div class="lesson-section lesson-tip">
          <p style="white-space:pre-line;font-size:var(--text-sm)">${s.body}</p>
        </div>`

    case 'dialogue':
      return `
        <div class="lesson-section lesson-dialogue">
          <div class="lesson-dialogue-header">Dialogue</div>
          ${s.lines.map(line => `
            <div class="dialogue-line">
              <span class="dialogue-speaker">${line.speaker}</span>
              <span class="dialogue-text">${line.text}</span>
              <button class="tts-btn" data-speak="${line.text.replace(/"/g, '&quot;')}" title="ฟังเสียง" style="margin-left:auto;flex-shrink:0">🔊</button>
            </div>
          `).join('')}
        </div>`

    default:
      return ''
  }
}
