import { renderQuestion } from '../components/quiz-question.js'
import { attachTtsListeners } from '../utils/tts.js'

// Runs a step-by-step quiz inside `mount` (an element). `questions` is an array of
// quiz-question shapes (multiple-choice / fill-in-blank / etc). Renders its own
// progress bar and a Next button, tracks the score, and calls
// `onComplete({ score, total })` when the last question is answered and advanced.
// onAnswer(question, isCorrect) — optional callback fired after each answer, used for vocab tracking
export function runQuiz(mount, questions, onComplete, { onAnswer } = {}) {
  const total = questions.length
  let idx = 0
  let score = 0

  function show() {
    mount.innerHTML = `
      <div style="margin-bottom:var(--sp-5)">
        <div style="display:flex;justify-content:space-between;font-size:var(--text-xs);color:var(--text-muted);margin-bottom:var(--sp-2)">
          <span>ข้อ ${idx + 1} / ${total}</span>
          <span>${score} ถูก</span>
        </div>
        <div class="progress-bar" style="height:6px"><div class="progress-fill" style="width:${(idx / total) * 100}%;transition:width .4s var(--ease)"></div></div>
      </div>
      <div id="q-slot"></div>
      <div id="q-next" style="margin-top:var(--sp-5);display:none;justify-content:flex-end">
        <button class="btn btn-primary" id="next-btn">${idx === total - 1 ? 'ดูผลลัพธ์ →' : 'ข้อถัดไป →'}</button>
      </div>
    `

    const slot = mount.querySelector('#q-slot')
    let answered = false
    const card = renderQuestion(questions[idx], idx, total, (res) => {
      if (answered) return
      answered = true
      if (res.correct) score++
      onAnswer?.(questions[idx], res.correct)
      mount.querySelector('#q-next').style.display = 'flex'
      setTimeout(() => {
        const btn = mount.querySelector('#next-btn')
        if (btn) btn.click()
      }, 2000)
    })
    slot.appendChild(card)
    attachTtsListeners(slot)

    mount.querySelector('#next-btn').addEventListener('click', () => {
      idx++
      if (idx >= total) onComplete({ score, total })
      else show()
    })
  }

  show()
}

// A reusable results panel returned as an HTML string. `href`/`cta` drive the
// primary button (usually "back to browser").
export function resultsHTML({ score, total, href, cta = 'เสร็จแล้ว' }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0
  const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'
  const msg = pct >= 80 ? 'เยี่ยมมาก!' : pct >= 50 ? 'ดีแล้ว ฝึกต่อไปนะ' : 'ลองอีกครั้งได้เสมอ'
  return `
    <div style="text-align:center;padding:var(--sp-8) var(--sp-4)">
      <div style="font-size:3rem;margin-bottom:var(--sp-3)">${emoji}</div>
      <div style="font-size:var(--text-2xl);font-weight:800;color:var(--accent)">${score} / ${total}</div>
      <div style="font-size:var(--text-lg);font-weight:700;margin-top:var(--sp-1)">${pct}%</div>
      <div style="color:var(--text-muted);margin-top:var(--sp-2)">${msg}</div>
      <div style="display:flex;gap:var(--sp-3);justify-content:center;margin-top:var(--sp-6);flex-wrap:wrap">
        <button class="btn btn-secondary" id="retry-btn">↻ ทำอีกครั้ง</button>
        <a href="${href}" class="btn btn-primary">${cta}</a>
      </div>
    </div>
  `
}
