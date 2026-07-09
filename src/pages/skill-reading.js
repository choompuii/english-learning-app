import { ttsButton, attachTtsListeners } from '../utils/tts.js'
import { recordSkillCompletion, getSkillItemProgress } from '../store.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'
import { esc } from '../utils/html.js'
import { runQuiz, resultsHTML } from './skill-quiz-runner.js'

export function renderReadingLesson(piece, main, opts = {}) {
  const { breadcrumb } = opts
  const prog = getSkillItemProgress(piece.id)
  const done = prog.status === 'completed'
  const breadcrumbHTML = breadcrumb ?? `
        <a href="#/skills">Skills</a>
        <span class="breadcrumb-sep">›</span>
        <a href="#/skills/reading">Reading</a>
        <span class="breadcrumb-sep">›</span>
        <span class="level-badge level-${piece.level}">${piece.level}</span>`

  main.innerHTML = `
    <div class="page" style="max-width:720px">
      <div class="breadcrumb">${breadcrumbHTML}
      </div>

      <div class="page-header" style="margin-bottom:var(--sp-5)">
        <div style="display:flex;align-items:center;gap:var(--sp-2);flex-wrap:wrap;margin-bottom:var(--sp-2)">
          <span class="chip" style="background:var(--accent-soft);color:var(--accent)">${piece.emoji} ${esc(piece.type)}</span>
          <span style="font-size:var(--text-xs);color:var(--text-muted)">⏱ ${piece.minutes} min</span>
          ${done ? '<span style="font-size:var(--text-xs);color:var(--accent);font-weight:600">✓ ทำแล้ว</span>' : ''}
        </div>
        <h1>${esc(piece.title)}</h1>
        <p>${esc(piece.thai)}</p>
      </div>

      <div id="reading-body">
        <!-- Passage -->
        <article style="font-size:var(--text-base);line-height:1.9">
          ${renderPassage(piece)}
        </article>

        <!-- Glossary -->
        <div class="lesson-section" style="margin-top:var(--sp-6)">
          <h3 style="margin-bottom:var(--sp-3);font-family:var(--font-body);font-weight:600">📚 คำศัพท์น่ารู้</h3>
          <div style="display:flex;flex-direction:column;gap:var(--sp-2)">
            ${piece.glossary.map(g => `
              <div style="display:flex;gap:var(--sp-3);align-items:baseline;padding:var(--sp-2) 0;border-bottom:1px solid var(--border-soft)">
                <span style="font-weight:700;min-width:120px">${esc(g.word)}${ttsButton(g.word)}</span>
                <span style="color:var(--accent);font-weight:600">${esc(g.thai)}</span>
                <span style="font-size:var(--text-sm);color:var(--text-muted)">— ${esc(g.def)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Summary (revealable) -->
        <div class="lesson-section lesson-tip" style="margin-top:var(--sp-5)">
          <button class="btn btn-ghost btn-sm" id="summary-toggle" style="margin-bottom:var(--sp-2)">👁 ดูสรุป (Summary)</button>
          <div id="summary-content" style="display:none">
            <p style="margin-bottom:var(--sp-2)"><strong>Summary:</strong> ${esc(piece.summary)}</p>
            <p style="color:var(--text-muted)"><strong>สรุป:</strong> ${esc(piece.summaryThai)}</p>
          </div>
        </div>

        <!-- Comprehension CTA -->
        <div style="text-align:center;margin-top:var(--sp-6);padding-top:var(--sp-6);border-top:1px solid var(--border)">
          <button class="btn btn-primary btn-lg" id="quiz-btn">❓ ตอบคำถามจับใจความ (${piece.questions.length} ข้อ)</button>
        </div>
      </div>
    </div>
  `

  attachTtsListeners(main)

  const toggle = main.querySelector('#summary-toggle')
  const content = main.querySelector('#summary-content')
  toggle.addEventListener('click', () => {
    const showing = content.style.display !== 'none'
    content.style.display = showing ? 'none' : 'block'
    toggle.textContent = showing ? '👁 ดูสรุป (Summary)' : '🙈 ซ่อนสรุป'
  })

  main.querySelector('#quiz-btn').addEventListener('click', () => startQuiz(piece, main, opts))
}

function renderPassage(piece) {
  if (piece.type === 'Conversation' && Array.isArray(piece.dialogue)) {
    return `
      <div class="lesson-dialogue">
        ${piece.dialogue.map(line => `
          <div class="dialogue-line">
            <span class="dialogue-speaker">${esc(line.speaker)}</span>
            <span class="dialogue-text">${esc(line.text)}</span>
            ${ttsButton(line.text)}
          </div>
        `).join('')}
      </div>
    `
  }
  return piece.paragraphs.map(p => `
    <p style="margin-bottom:var(--sp-4);display:flex;gap:8px;align-items:flex-start">
      <span>${esc(p)}</span>${ttsButton(p, 'ฟังย่อหน้านี้')}
    </p>
  `).join('')
}

function startQuiz(piece, main, opts = {}) {
  const body = main.querySelector('#reading-body')
  body.innerHTML = `<div id="quiz-mount"></div>`
  const mount = body.querySelector('#quiz-mount')

  runQuiz(mount, piece.questions, ({ score, total }) => {
    const xp = score * 5
    const newBadges = recordSkillCompletion(piece.id, { score, total, xp })
    opts.onComplete?.({ score, total })
    mount.innerHTML = resultsHTML({ score, total, href: opts.backHref ?? '#/skills/reading', cta: opts.backCta ?? 'กลับหน้าการอ่าน' })
    if (xp > 0) floatXP(xp, mount.querySelector('.btn-primary'))
    if (score / total >= 0.8) confetti()
    if (newBadges && newBadges.length) setTimeout(() => showNewBadges(newBadges), 500)
    mount.querySelector('#retry-btn').addEventListener('click', () => renderReadingLesson(piece, main, opts))
  })
}
