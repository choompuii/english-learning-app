import { speakTracked, stopSpeech } from '../utils/tts.js'
import { recordSkillCompletion, getSkillItemProgress } from '../store.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'
import { esc } from '../utils/html.js'
import { runQuiz, resultsHTML } from './skill-quiz-runner.js'

const SPEEDS = [
  { rate: 0.65, label: '🐢 ช้า' },
  { rate: 0.9,  label: '🚶 ปกติ' },
  { rate: 1.1,  label: '🐇 เร็ว' },
]

export function renderListeningLesson(piece, main, opts = {}) {
  const { breadcrumb } = opts
  const prog = getSkillItemProgress(piece.id)
  const done = prog.status === 'completed'
  const fullText = piece.segments.map(s => s.text).join(' ')
  const breadcrumbHTML = breadcrumb ?? `
        <a href="#/skills">Skills</a>
        <span class="breadcrumb-sep">›</span>
        <a href="#/skills/listening">Listening</a>
        <span class="breadcrumb-sep">›</span>
        <span class="level-badge level-${piece.level}">${piece.level}</span>`

  // Player state (closed over by the handlers below)
  let rate = 0.9
  let playing = false
  let revealed = false

  main.innerHTML = `
    <div class="page" style="max-width:680px">
      <div class="breadcrumb">${breadcrumbHTML}
      </div>

      <div class="page-header" style="margin-bottom:var(--sp-5)">
        <div style="display:flex;align-items:center;gap:var(--sp-2);flex-wrap:wrap;margin-bottom:var(--sp-2)">
          <span class="chip" style="background:var(--accent-soft);color:var(--accent)">${piece.emoji} ${esc(piece.type)}</span>
          ${done ? '<span style="font-size:var(--text-xs);color:var(--accent);font-weight:600">✓ ทำแล้ว</span>' : ''}
        </div>
        <h1>${esc(piece.title)}</h1>
        <p>${esc(piece.thai)}</p>
      </div>

      <div id="listening-body">
        <!-- Player -->
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-5)">
          <div style="display:flex;align-items:center;gap:var(--sp-3);flex-wrap:wrap">
            <button class="btn btn-primary" id="play-btn" style="min-width:130px">▶ เล่นทั้งหมด</button>
            <button class="pill-btn" id="repeat-btn" title="เล่นซ้ำ">🔁 เล่นซ้ำ</button>
          </div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:var(--sp-4);flex-wrap:wrap">
            <span style="font-size:var(--text-xs);color:var(--text-muted)">ความเร็ว:</span>
            ${SPEEDS.map(s => `<button class="pill-btn speed-btn ${s.rate === rate ? 'active' : ''}" data-rate="${s.rate}">${s.label}</button>`).join('')}
          </div>
        </div>

        <!-- Transcript -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin:var(--sp-6) 0 var(--sp-3)">
          <h3 style="font-family:var(--font-body);font-weight:600;margin:0">Transcript</h3>
          <button class="btn btn-ghost btn-sm" id="reveal-btn">👁 แสดง transcript</button>
        </div>
        <div style="display:flex;flex-direction:column;gap:var(--sp-2)">
          ${piece.segments.map((seg, i) => segmentHTML(seg, i)).join('')}
        </div>
        <div style="font-size:var(--text-xs);color:var(--text-muted);text-align:center;margin-top:var(--sp-3)">
          💡 แตะแต่ละบรรทัดเพื่อฟังทีละประโยค
        </div>

        <!-- Comprehension CTA -->
        <div style="text-align:center;margin-top:var(--sp-6);padding-top:var(--sp-6);border-top:1px solid var(--border)">
          <button class="btn btn-primary btn-lg" id="quiz-btn">❓ ตอบคำถามจากที่ฟัง (${piece.questions.length} ข้อ)</button>
        </div>
      </div>
    </div>
  `

  const body = main.querySelector('#listening-body')
  const playBtn = body.querySelector('#play-btn')

  function setPlaying(v) {
    playing = v
    playBtn.textContent = v ? '⏸ หยุด' : '▶ เล่นทั้งหมด'
  }

  playBtn.addEventListener('click', () => {
    if (playing) { stopSpeech(); setPlaying(false); return }
    speakTracked(fullText, rate, { onstart: () => setPlaying(true), onend: () => setPlaying(false) })
  })

  body.querySelector('#repeat-btn').addEventListener('click', () => {
    speakTracked(fullText, rate, { onstart: () => setPlaying(true), onend: () => setPlaying(false) })
  })

  body.querySelectorAll('.speed-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      rate = parseFloat(btn.dataset.rate)
      body.querySelectorAll('.speed-btn').forEach(b => b.classList.toggle('active', b === btn))
    })
  })

  const revealBtn = body.querySelector('#reveal-btn')
  revealBtn.addEventListener('click', () => {
    revealed = !revealed
    body.querySelectorAll('.seg-text').forEach(el => { el.style.filter = revealed ? 'none' : 'blur(5px)' })
    revealBtn.textContent = revealed ? '🙈 ซ่อน transcript' : '👁 แสดง transcript'
  })

  // Per-segment playback + active highlight
  body.querySelectorAll('.listen-seg').forEach(row => {
    row.addEventListener('click', () => {
      const i = parseInt(row.dataset.idx)
      body.querySelectorAll('.listen-seg').forEach(r => r.classList.remove('listen-seg--active'))
      row.classList.add('listen-seg--active')
      speakTracked(piece.segments[i].text, rate, {
        onend: () => row.classList.remove('listen-seg--active')
      })
    })
  })

  body.querySelector('#quiz-btn').addEventListener('click', () => startQuiz(piece, main, opts))

  // Stop any audio when the user navigates away.
  window.addEventListener('hashchange', stopSpeech, { once: true })
}

function segmentHTML(seg, i) {
  const speaker = seg.speaker
    ? `<span style="font-weight:700;color:var(--accent);flex-shrink:0;min-width:64px">${esc(seg.speaker)}</span>`
    : ''
  return `
    <div class="listen-seg" data-idx="${i}">
      <span style="flex-shrink:0">🔊</span>
      ${speaker}
      <div style="flex:1;min-width:0">
        <div class="seg-text" style="filter:blur(5px);transition:filter 150ms var(--ease)">${esc(seg.text)}</div>
        <div class="seg-text" style="filter:blur(5px);transition:filter 150ms var(--ease);font-size:var(--text-sm);color:var(--text-muted);margin-top:2px">${esc(seg.thai)}</div>
      </div>
    </div>
  `
}

function startQuiz(piece, main, opts = {}) {
  stopSpeech()
  const body = main.querySelector('#listening-body')
  body.innerHTML = `<div id="quiz-mount"></div>`
  const mount = body.querySelector('#quiz-mount')

  runQuiz(mount, piece.questions, ({ score, total }) => {
    const xp = score * 5
    const newBadges = recordSkillCompletion(piece.id, { score, total, xp })
    opts.onComplete?.({ score, total })
    mount.innerHTML = resultsHTML({ score, total, href: opts.backHref ?? '#/skills/listening', cta: opts.backCta ?? 'กลับหน้าการฟัง' })
    if (xp > 0) floatXP(xp, mount.querySelector('.btn-primary'))
    if (score / total >= 0.8) confetti()
    if (newBadges && newBadges.length) setTimeout(() => showNewBadges(newBadges), 500)
    mount.querySelector('#retry-btn').addEventListener('click', () => renderListeningLesson(piece, main, opts))
  })
}
