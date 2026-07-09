import { renderQuestion } from '../components/quiz-question.js'
import { ttsButton, attachTtsListeners } from '../utils/tts.js'
import { recordQuizAttempt, recordSkillCompletion, getSkillItemProgress } from '../store.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'
import { esc } from '../utils/html.js'
import { runQuiz, resultsHTML } from './skill-quiz-runner.js'

export function renderGrammarLesson(topic, main, opts = {}) {
  const { breadcrumb } = opts
  const prog = getSkillItemProgress(topic.id)
  const done = prog.status === 'completed'
  const breadcrumbHTML = breadcrumb ?? `
        <a href="#/skills">Skills</a>
        <span class="breadcrumb-sep">›</span>
        <a href="#/skills/grammar">Grammar</a>
        <span class="breadcrumb-sep">›</span>
        <span class="level-badge level-${topic.level}">${topic.level}</span>`

  main.innerHTML = `
    <div class="page" style="max-width:760px">
      <div class="breadcrumb">${breadcrumbHTML}
      </div>

      <div class="page-header" style="margin-bottom:var(--sp-5)">
        <h1>${topic.emoji} ${esc(topic.title)}</h1>
        <p>${esc(topic.thai)} — ${esc(topic.summary)} ${done ? '· <span style="color:var(--accent);font-weight:600">✓ ทำแล้ว</span>' : ''}</p>
      </div>

      <div id="grammar-body">
        <!-- Explanation -->
        ${topic.explanation.map(block => `
          <div class="lesson-section lesson-explanation">
            ${block.heading ? `<h3 style="margin-bottom:var(--sp-3);font-family:var(--font-body);font-weight:600">${esc(block.heading)}</h3>` : ''}
            <p style="white-space:pre-line">${esc(block.body)}</p>
          </div>
        `).join('')}

        <!-- Examples -->
        <div class="lesson-section">
          <h3 style="margin-bottom:var(--sp-3);font-family:var(--font-body);font-weight:600">ตัวอย่างประโยค</h3>
          <table class="lesson-example-table">
            <thead><tr><th>English</th><th>ภาษาไทย</th></tr></thead>
            <tbody>
              ${topic.examples.map(s => `
                <tr>
                  <td class="example-en"><span>${esc(s.en)}</span>${ttsButton(s.en)}</td>
                  <td class="example-th">${esc(s.th)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Practice (self-check, not scored) -->
        <div class="lesson-section">
          <h3 style="margin-bottom:var(--sp-3);font-family:var(--font-body);font-weight:600">แบบฝึกหัด <span style="font-weight:400;font-size:var(--text-sm);color:var(--text-muted)">(ฝึกเอง ไม่นับคะแนน)</span></h3>
          <div id="practice-slot" style="display:flex;flex-direction:column;gap:var(--sp-4)"></div>
        </div>

        <!-- Quiz CTA -->
        <div style="text-align:center;margin-top:var(--sp-6);padding-top:var(--sp-6);border-top:1px solid var(--border)">
          <button class="btn btn-primary btn-lg" id="quiz-btn">📝 ทำควิซ (${topic.quiz.length} ข้อ)</button>
          <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--sp-2)">ทำควิซให้ครบเพื่อรับ XP</div>
        </div>
      </div>
    </div>
  `

  attachTtsListeners(main)

  // Stacked, self-check practice cards.
  const practiceSlot = main.querySelector('#practice-slot')
  topic.practice.forEach((q, i) => {
    const card = renderQuestion(q, i, topic.practice.length, () => {})
    practiceSlot.appendChild(card)
  })
  attachTtsListeners(practiceSlot)

  main.querySelector('#quiz-btn').addEventListener('click', () => startQuiz(topic, main, opts))
}

function startQuiz(topic, main, opts = {}) {
  const body = main.querySelector('#grammar-body')
  body.innerHTML = `<div id="quiz-mount"></div>`
  const mount = body.querySelector('#quiz-mount')

  runQuiz(mount, topic.quiz, ({ score, total }) => {
    // Grammar quizzes feed the quiz namespace (XP + Quiz Master badge), then mark
    // the skill item complete without re-awarding XP.
    const quizId = `${topic.id}-quiz`
    const badgesA = recordQuizAttempt(quizId, score, total, {}) || []
    const badgesB = recordSkillCompletion(topic.id, { score, total, xp: 0 }) || []
    const newBadges = [...badgesA, ...badgesB]

    opts.onComplete?.({ score, total })
    mount.innerHTML = resultsHTML({ score, total, href: opts.backHref ?? '#/skills/grammar', cta: opts.backCta ?? 'กลับหน้าไวยากรณ์' })
    const xp = score * 10
    if (xp > 0) floatXP(xp, mount.querySelector('.btn-primary'))
    if (score / total >= 0.8) confetti()
    if (newBadges.length) setTimeout(() => showNewBadges(newBadges), 500)
    mount.querySelector('#retry-btn').addEventListener('click', () => renderGrammarLesson(topic, main, opts))
  })
}
