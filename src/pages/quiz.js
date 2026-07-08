import { quizzes, getQuizById } from '../data/quizzes.js'
import { lessons, getLessonById } from '../data/lessons.js'
import { getQuizBest, recordQuizAttempt, getProgress } from '../store.js'
import { renderQuestion } from '../components/quiz-question.js'
import { getOrderedLessons } from '../utils/progression.js'
import { confetti, floatXP, showNewBadges } from '../utils/fx.js'

// Quiz browser — when no id given
export function renderQuizBrowser() {
  const main = document.getElementById('main-content')

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Quizzes</h1>
        <p>Test your knowledge after each lesson</p>
      </div>
      <div style="margin-bottom:var(--sp-5)">
        <a href="#/review-mistakes" class="btn btn-secondary">✗ ทบทวนข้อที่ตอบผิด</a>
      </div>
      <div style="display:flex;flex-direction:column;gap:var(--sp-3)">
        ${quizzes.map(q => {
          const lesson = lessons.find(l => l.id === q.lessonId)
          const best = getQuizBest(q.id)
          const level = lesson ? lesson.level : 'B1'
          return `
            <div class="card card-hover" onclick="window.location.hash='/quiz/${q.id}'" style="display:flex;align-items:center;gap:var(--sp-4)">
              <div style="width:44px;height:44px;background:var(--gold-soft);border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0">❓</div>
              <div style="flex:1">
                <div style="font-weight:600;margin-bottom:2px">${q.title}</div>
                <div style="font-size:var(--text-xs);color:var(--text-muted)">
                  <span class="level-badge level-${level}" style="margin-right:var(--sp-2)">${level}</span>
                  ${q.questions.length} questions
                  ${best ? ` • Best: ${best.bestScore}/${best.bestTotal}` : ''}
                </div>
              </div>
              <span style="color:var(--accent);font-size:1.25rem">→</span>
            </div>
          `
        }).join('')}
      </div>
    </div>
  `
}

// Individual quiz — step-by-step, one question at a time
export function renderQuiz({ id }) {
  const main = document.getElementById('main-content')
  const quiz = getQuizById(id)

  if (!quiz) {
    main.innerHTML = `<div class="page"><p>Quiz not found.</p><a href="#/quiz">← Quizzes</a></div>`
    return
  }

  const lesson = lessons.find(l => l.id === quiz.lessonId)
  const best = getQuizBest(id)
  const total = quiz.questions.length
  const answers = {}
  let currentIndex = 0

  main.innerHTML = `
    <div class="page">
      <div class="breadcrumb">
        <a href="#/quiz">Quizzes</a>
        <span class="breadcrumb-sep">›</span>
        <span>${quiz.title}</span>
      </div>

      <div style="margin-bottom:var(--sp-5)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--sp-2)">
          <span id="q-counter" style="font-size:var(--text-sm);font-weight:600;color:var(--text-muted)">ข้อ 1 / ${total}</span>
          ${best ? `<span style="font-size:var(--text-xs);color:var(--text-muted)">Best: ${best.bestScore}/${best.bestTotal}</span>` : ''}
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="q-progress" style="width:0%;transition:width 0.3s var(--ease)"></div>
        </div>
      </div>

      <div id="question-slot"></div>

      <div id="next-area" style="display:none;margin-top:var(--sp-5)"></div>
    </div>
  `

  function showQuestion(index) {
    const q = quiz.questions[index]
    const slot = main.querySelector('#question-slot')
    const nextArea = main.querySelector('#next-area')
    const counter = main.querySelector('#q-counter')
    const progressFill = main.querySelector('#q-progress')

    counter.textContent = `ข้อ ${index + 1} / ${total}`
    progressFill.style.width = `${(index / total) * 100}%`

    nextArea.style.display = 'none'
    nextArea.innerHTML = ''
    slot.innerHTML = ''

    const el = renderQuestion(q, index, total, ({ qid, correct }) => {
      if (answers[qid] !== undefined) return
      answers[qid] = correct

      const isLast = index === total - 1
      nextArea.style.display = 'block'
      nextArea.innerHTML = isLast
        ? `<button class="btn btn-primary" id="finish-btn" style="width:100%">ดูผลคะแนน →</button>`
        : `<button class="btn btn-primary" id="next-btn" style="width:100%">ข้อถัดไป →</button>`

      if (isLast) {
        nextArea.querySelector('#finish-btn').addEventListener('click', showResults)
      } else {
        nextArea.querySelector('#next-btn').addEventListener('click', () => {
          currentIndex++
          showQuestion(currentIndex)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      }
    })
    slot.appendChild(el)

    const input = slot.querySelector('.quiz-fill-input')
    if (input) setTimeout(() => input.focus(), 50)
  }

  function showResults() {
    const score = Object.values(answers).filter(Boolean).length
    const pct = Math.round((score / total) * 100)
    const pass = pct >= 70

    const newBadges = recordQuizAttempt(id, score, total, answers)
    if (pass) confetti()
    const xpGain = score * 10
    if (xpGain > 0) setTimeout(() => floatXP(xpGain, main.querySelector('#q-progress')), 400)
    if (newBadges && newBadges.length) setTimeout(() => showNewBadges(newBadges), 1200)

    // Level completion celebration
    if (pass && lesson) {
      const stateNow = getProgress()
      const levelLessons = lessons.filter(l => l.level === lesson.level)
      const allLevelPassed = levelLessons.every(l => {
        if (!l.quizId) return stateNow.lessons[l.id]?.status === 'completed'
        const qb = stateNow.quizzes[l.quizId]
        return qb && (qb.bestScore / Math.max(1, qb.bestTotal)) >= 0.7
      })
      if (allLevelPassed) {
        setTimeout(() => {
          const cel = document.createElement('div')
          cel.innerHTML = `
            <div style="font-size:3rem;margin-bottom:8px">🎓</div>
            <div style="font-weight:800;font-size:1.1rem;color:var(--text)">Level ${lesson.level} Complete!</div>
            <div style="font-size:0.8rem;color:var(--text-muted);margin-top:4px">ผ่านทุก lesson ใน ${lesson.level} แล้ว!</div>
          `
          cel.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:var(--surface);border:3px solid var(--accent);border-radius:var(--r-xl);padding:32px 40px;text-align:center;box-shadow:var(--shadow-lg);z-index:9999;animation:pop-in 0.5s cubic-bezier(0.4,0,0.2,1) both;font-family:var(--font-body)`
          document.body.appendChild(cel)
          setTimeout(() => { cel.style.transition='opacity 0.4s'; cel.style.opacity='0'; setTimeout(()=>cel.remove(),450) }, 3500)
        }, 800)
      }
    }

    // Suggest next lesson after passing
    const ordered = getOrderedLessons(lessons)
    const stateAfter = getProgress()
    let unlockedLesson = null
    if (pass && lesson) {
      const thisIdx = ordered.findIndex(l => l.id === lesson.id)
      const next = ordered[thisIdx + 1]
      if (next) unlockedLesson = next
    }

    // Single primary action: on pass → next lesson (or progress if it was the last),
    // on fail → retry the quiz.
    let primaryHref = '#/progress'
    let primaryLabel = 'ดูความคืบหน้า →'
    if (pass && unlockedLesson) {
      primaryHref = `#/lessons/${unlockedLesson.id}`
      primaryLabel = 'ไปบทเรียนถัดไป →'
    }

    main.querySelector('#q-progress').style.width = '100%'
    main.querySelector('#q-counter').textContent = `เสร็จแล้ว! ${total} / ${total}`
    main.querySelector('#question-slot').innerHTML = ''
    main.querySelector('#next-area').innerHTML = `
      <div style="padding-top:var(--sp-6);border-top:1px solid var(--border)">
        <div style="display:flex;align-items:center;gap:var(--sp-4);flex-wrap:wrap;margin-bottom:var(--sp-5)">
          <div style="font-size:3rem">${pass ? '🌟' : '💪'}</div>
          <div>
            <div style="font-size:var(--text-2xl);font-weight:700;margin-bottom:var(--sp-1)">${score} / ${total}</div>
            <div style="color:var(--text-muted)">${pct}% — ${pass ? 'ผ่านแล้ว!' : 'ลองใหม่นะ ต้องได้ ≥ 70%'}</div>
          </div>
        </div>

        ${unlockedLesson ? `
          <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);margin-bottom:var(--sp-5)">
            <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--accent);margin-bottom:var(--sp-1)">→ บทเรียนถัดไป</div>
            <div style="font-weight:600">${unlockedLesson.title}</div>
            <div style="font-size:var(--text-xs);color:var(--text-muted)">
              <span class="level-badge level-${unlockedLesson.level}">${unlockedLesson.level}</span>
              <span style="margin-left:var(--sp-2)">⏱ ${unlockedLesson.estimatedMinutes} min</span>
            </div>
          </div>
        ` : pass ? '' : `
          <div style="background:var(--gold-soft);border:1px solid var(--gold);border-radius:var(--r-lg);padding:var(--sp-4);margin-bottom:var(--sp-5);font-size:var(--text-sm)">
            💡 ต้องได้ <strong>${Math.ceil(total * 0.7)}</strong> คะแนนขึ้นไป (${Math.ceil(total * 0.7)}/${total}) เพื่อปลดล็อคบทถัดไป กลับไปทบทวนแล้วลองใหม่ได้เลย
          </div>
        `}

        <div style="display:flex;gap:var(--sp-3);flex-wrap:wrap">
          ${pass
            ? `<a href="${primaryHref}" class="btn btn-primary">${primaryLabel}</a>
               <button class="btn btn-ghost" id="retry-btn">ทำ Quiz อีกครั้ง</button>
               ${lesson ? `<a href="#/lessons/${lesson.id}" class="btn btn-ghost">← กลับ Lesson</a>` : ''}`
            : `<button class="btn btn-primary" id="retry-btn">↺ ลองอีกครั้ง</button>
               ${lesson ? `<a href="#/lessons/${lesson.id}" class="btn btn-ghost">← กลับไปทบทวน Lesson</a>` : ''}`}
        </div>
      </div>
    `
    main.querySelector('#next-area').style.display = 'block'
    const retryBtn = main.querySelector('#retry-btn')
    if (retryBtn) retryBtn.addEventListener('click', () => renderQuiz({ id }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  showQuestion(0)
}
