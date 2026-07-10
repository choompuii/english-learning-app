import { getProgress } from '../store.js'
import { quizzes } from '../data/quizzes.js'
import { lessons } from '../data/lessons.js'
import { speak } from '../utils/tts.js'
import { esc } from '../utils/html.js'

export function renderReviewMistakes() {
  const main = document.getElementById('main-content')
  const state = getProgress()
  const mistakes = collectMistakes(state)

  if (!mistakes.length) {
    main.innerHTML = `
      <div class="page">
        <div class="page-header">
          <h1>Review Mistakes</h1>
          <p>ทบทวนข้อที่ตอบผิด</p>
        </div>
        <div class="empty-state">
          <div class="empty-state-icon">🎉</div>
          <h3>ไม่มีข้อที่ตอบผิดเลย!</h3>
          <p>ยังไม่มีประวัติ quiz หรือทำถูกทุกข้อแล้ว</p>
          <a href="#/quiz" class="btn btn-primary" style="margin-top:var(--sp-6)">ไปทำ Quiz</a>
        </div>
      </div>
    `
    return
  }

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Review Mistakes</h1>
        <p>${mistakes.length} ข้อที่ตอบผิดจากทุก quiz</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:var(--sp-4)">
        ${mistakes.map((m, i) => renderMistake(m, i)).join('')}
      </div>

      <div style="margin-top:var(--sp-8);text-align:center">
        <a href="#/quiz" class="btn btn-primary">ลองทำ Quiz อีกครั้ง →</a>
      </div>
    </div>
  `

  main.querySelectorAll('.tts-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); speak(btn.dataset.speak) })
  })

  main.querySelectorAll('.reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = main.querySelector(`#explanation-${btn.dataset.idx}`)
      if (target) {
        target.style.display = target.style.display === 'none' ? 'block' : 'none'
        btn.textContent = target.style.display === 'none' ? 'ดูเฉลย →' : 'ซ่อนเฉลย'
      }
    })
  })
}

function collectMistakes(state) {
  const mistakes = []
  const seen = new Set()

  for (const [quizId, quizData] of Object.entries(state.quizzes || {})) {
    const quiz = quizzes.find(q => q.id === quizId)
    if (!quiz) continue
    const lesson = lessons.find(l => l.id === quiz.lessonId)

    // Collect wrong answers across all attempts; remove those later answered correctly
    const attempts = quizData.attempts || []
    if (!attempts.length) continue
    const everWrong = new Set()
    const everCorrect = new Set()
    for (const attempt of attempts) {
      for (const [qid, correct] of Object.entries(attempt.answers || {})) {
        if (correct) everCorrect.add(qid)
        else everWrong.add(qid)
      }
    }

    for (const qid of everWrong) {
      if (!everCorrect.has(qid) && !seen.has(qid)) {
        const question = quiz.questions.find(q => q.id === qid)
        if (question) {
          seen.add(qid)
          mistakes.push({ question, quiz, lesson })
        }
      }
    }
  }

  return mistakes
}

function renderMistake(m, i) {
  const { question, quiz, lesson } = m
  const hasAudio = question.type === 'fill-in-blank' || question.type === 'multiple-choice'
  const promptText = question.prompt.replace(/<[^>]*>/g, '')

  let answerHtml = ''
  if (question.type === 'multiple-choice') {
    const correct = question.options[question.correctIndex]
    answerHtml = `<div style="color:var(--success);font-weight:600">✓ ${correct}</div>`
    const opts = question.options.map((o, idx) => `
      <div style="padding:var(--sp-2) var(--sp-3);border-radius:var(--r-sm);font-size:var(--text-sm);${idx === question.correctIndex ? 'background:var(--success-soft);color:var(--success);font-weight:600' : 'color:var(--text-muted)'}">
        ${idx === question.correctIndex ? '✓' : '·'} ${o}
      </div>
    `).join('')
    answerHtml = `<div style="display:flex;flex-direction:column;gap:4px">${opts}</div>`
  } else if (question.type === 'fill-in-blank') {
    const ans = question.answer || (question.acceptedVariants || [])[0] || ''
    answerHtml = `
      <div style="display:flex;align-items:center;gap:var(--sp-2)">
        <span style="color:var(--success);font-weight:700;font-family:var(--font-mono)">${ans}</span>
        ${ans ? `<button class="tts-btn" data-speak="${ans.replace(/"/g, '&quot;')}" title="ฟังเสียง">🔊</button>` : ''}
        ${question.acceptedVariants && question.acceptedVariants.length > 1 ? `<span style="font-size:var(--text-xs);color:var(--text-muted)">(หรือ: ${question.acceptedVariants.slice(1).join(', ')})</span>` : ''}
      </div>
    `
  }

  return `
    <div class="card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:var(--sp-3);margin-bottom:var(--sp-4)">
        <div style="flex:1">
          <div style="font-size:var(--text-xs);color:var(--text-faint);margin-bottom:var(--sp-2)">
            ${quiz.title}${lesson ? ` · ${lesson.title}` : ''}
            <span style="margin-left:var(--sp-2);padding:2px 8px;background:var(--danger-soft);color:var(--danger);border-radius:var(--r-full);font-weight:600">✗ ตอบผิด</span>
          </div>
          <div style="display:flex;align-items:flex-start;gap:var(--sp-2)">
            <p style="font-size:var(--text-base);font-weight:500;color:var(--text);margin:0;flex:1">${esc(question.prompt)}</p>
            ${hasAudio ? `<button class="tts-btn" data-speak="${promptText.replace(/"/g, '&quot;')}" title="ฟังเสียง">🔊</button>` : ''}
          </div>
        </div>
      </div>

      <div style="margin-bottom:var(--sp-4)">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);margin-bottom:var(--sp-2)">คำตอบที่ถูก</div>
        ${answerHtml}
      </div>

      ${question.explanation ? `
        <button class="btn btn-ghost btn-sm reveal-btn" data-idx="${i}">ดูเฉลย →</button>
        <div id="explanation-${i}" style="display:none;margin-top:var(--sp-3);padding:var(--sp-3) var(--sp-4);background:var(--surface-2);border-left:3px solid var(--accent);border-radius:0 var(--r-sm) var(--r-sm) 0;font-size:var(--text-sm);color:var(--text-muted)">
          ${question.explanation}
        </div>
      ` : ''}
    </div>
  `
}
