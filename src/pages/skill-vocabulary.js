import { ttsButton, attachTtsListeners } from '../utils/tts.js'
import { saveToNotebook, isInNotebook, recordSkillCompletion, getSkillItemProgress, recordVocabAnswer } from '../store.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'
import { esc, escAttr } from '../utils/html.js'
import { runQuiz, resultsHTML } from './skill-quiz-runner.js'
import { openWordModal } from '../utils/word-modal.js'

export function renderVocabularyLesson(cat, main, opts = {}) {
  const { breadcrumb } = opts
  const prog = getSkillItemProgress(cat.id)
  const done = prog.status === 'completed'
  const breadcrumbHTML = breadcrumb ?? `
        <a href="#/skills">Skills</a>
        <span class="breadcrumb-sep">›</span>
        <a href="#/skills/vocabulary">Vocabulary</a>
        <span class="breadcrumb-sep">›</span>
        <span class="level-badge level-${cat.level}">${cat.level}</span>`

  main.innerHTML = `
    <div class="page" style="max-width:900px">
      <div class="breadcrumb">${breadcrumbHTML}
      </div>

      <div class="page-header" style="margin-bottom:var(--sp-6)">
        <h1>${cat.emoji} ${esc(cat.title)}</h1>
        <p>${esc(cat.thai)} · ${cat.words.length} คำ ${done ? '· <span style="color:var(--accent);font-weight:600">✓ ทำแล้ว</span>' : ''}</p>
      </div>

      <div id="vocab-body">
        <div class="vocab-list">
          ${cat.words.map((w, i) => vocabCardHTML(w, i)).join('')}
        </div>

        <div style="text-align:center;margin-top:var(--sp-8)">
          <button class="btn btn-primary btn-lg" id="check-btn">🧠 ทดสอบความจำ (${cat.words.length} คำ)</button>
          <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--sp-2)">ทายคำศัพท์จากความหมายภาษาไทย</div>
        </div>
      </div>
    </div>
  `

  attachTtsListeners(main)
  wireNotebook(main, cat)
  wireWordModal(main, cat)

  main.querySelector('#check-btn').addEventListener('click', () => startQuickCheck(cat, main, opts))
}

function vocabCardHTML(w, i) {
  const saved = isInNotebook(w.word)
  const chips = []
  if (w.synonym) chips.push(`<span class="chip" style="background:var(--accent-soft);color:var(--accent)">≈ ${esc(w.synonym)}</span>`)
  if (w.antonym) chips.push(`<span class="chip" style="background:var(--danger-soft);color:var(--danger)">↔ ${esc(w.antonym)}</span>`)

  return `
    <div class="vocab-card vocab-card--clickable" data-word-idx="${i}">
      <div style="display:flex;align-items:flex-start;gap:var(--sp-3)">
        <div style="font-size:2.4rem;line-height:1">${w.emoji}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span style="font-weight:700;font-size:var(--text-lg)">${esc(w.word)}</span>
            ${ttsButton(w.word)}
            <span class="chip" style="background:var(--surface-2);color:var(--text-muted)">${esc(w.pos)}</span>
          </div>
          <div style="font-family:var(--font-mono);font-size:var(--text-sm);color:var(--text-muted)">${esc(w.ipa)}</div>
        </div>
        <button class="tts-btn nb-btn" data-idx="${i}" title="บันทึกลง Notebook"
          style="flex-shrink:0;font-size:1.05rem">${saved ? '✅' : '🔖'}</button>
      </div>

      <div style="font-weight:600;color:var(--accent)">${esc(w.thai)}</div>
      <div style="font-size:var(--text-sm);color:var(--text-muted)">${esc(w.def)}</div>

      <div style="font-size:var(--text-sm);font-style:italic;display:flex;gap:6px;align-items:flex-start;color:var(--text)">
        <span>“${esc(w.example)}”</span>${ttsButton(w.example)}
      </div>

      ${chips.length ? `<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:2px">${chips.join('')}</div>` : ''}
    </div>
  `
}

function wireWordModal(main, cat) {
  main.querySelectorAll('.vocab-card--clickable').forEach(card => {
    card.addEventListener('click', e => {
      // Don't open modal when clicking TTS or notebook buttons
      if (e.target.closest('.tts-btn') || e.target.closest('.nb-btn')) return
      const w = cat.words[parseInt(card.dataset.wordIdx)]
      if (w) openWordModal(w)
    })
  })
}

function wireNotebook(main, cat) {
  main.querySelectorAll('.nb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const w = cat.words[parseInt(btn.dataset.idx)]
      if (!w) return
      if (isInNotebook(w.word)) return
      const added = saveToNotebook({
        word: w.word,
        definition: w.def,
        thai: w.thai,
        example: w.example,
        phonetic: w.ipa,
        source: 'vocabulary'
      })
      if (added) {
        btn.textContent = '✅'
        floatXP(0, btn) // visual anchor only; no XP for saving
      }
    })
  })
}

// Build a "guess the word from its Thai meaning" multiple-choice quiz from the
// category's own words (each word's distractors are other words in the category).
function startQuickCheck(cat, main, opts = {}) {
  const words = cat.words
  const questions = shuffle(words).map((w, qi) => {
    const distractors = shuffle(words.filter(x => x.word !== w.word)).slice(0, 3).map(x => x.word)
    const options = shuffle([w.word, ...distractors])
    return {
      id: `${cat.id}-qc-${qi}`,
      type: 'multiple-choice',
      prompt: `${w.emoji} “${escAttr(w.thai)}” ตรงกับคำใด?`,
      options,
      correctIndex: options.indexOf(w.word),
      explanation: `${w.word} ${w.ipa} — ${w.thai}`
    }
  })

  const body = main.querySelector('#vocab-body')
  body.innerHTML = `<div id="quiz-mount"></div>`
  const mount = body.querySelector('#quiz-mount')

  runQuiz(mount, questions, ({ score, total }) => {
    const xp = score * 5
    const newBadges = recordSkillCompletion(cat.id, { score, total, xp })
    opts.onComplete?.({ score, total })
    mount.innerHTML = resultsHTML({ score, total, href: opts.backHref ?? '#/skills/vocabulary', cta: opts.backCta ?? 'กลับหน้าคำศัพท์' })
    if (xp > 0) floatXP(xp, mount.querySelector('.btn-primary'))
    if (score / total >= 0.8) confetti()
    if (newBadges && newBadges.length) setTimeout(() => showNewBadges(newBadges), 500)
    mount.querySelector('#retry-btn').addEventListener('click', () => renderVocabularyLesson(cat, main, opts))
  }, {
    onAnswer: (q, isCorrect) => {
      const word = q.options[q.correctIndex]
      if (word) recordVocabAnswer(word, isCorrect)
    }
  })
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
