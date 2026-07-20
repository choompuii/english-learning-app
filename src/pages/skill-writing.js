import { recordSkillCompletion, getSkillItemProgress } from '../store.js'
import { checkGrammar } from '../utils/grammar-rules.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'
import { esc } from '../utils/html.js'

const WRITING_XP = 20

function countWords(text) {
  const t = text.trim()
  if (!t) return 0
  return t.split(/\s+/).length
}

function countSentences(text) {
  const matches = text.trim().match(/[^.!?]+[.!?]+/g)
  // Count trailing text without terminal punctuation as one sentence too
  const withTerminal = matches ? matches.length : 0
  const leftover = text.trim().replace(/[^.!?]+[.!?]+/g, '').trim()
  return withTerminal + (leftover ? 1 : 0)
}

export function renderWritingLesson(prompt, main, opts = {}) {
  const { breadcrumb } = opts
  const prog = getSkillItemProgress(prompt.id)
  const done = prog.status === 'completed'
  const breadcrumbHTML = breadcrumb ?? `
        <a href="#/skills">Skills</a>
        <span class="breadcrumb-sep">›</span>
        <a href="#/skills/writing">Writing</a>
        <span class="breadcrumb-sep">›</span>
        <span class="level-badge level-${prompt.level}">${prompt.level}</span>`

  main.innerHTML = `
    <div class="page" style="max-width:760px">
      <div class="breadcrumb">${breadcrumbHTML}
      </div>

      <div class="page-header" style="margin-bottom:var(--sp-5)">
        <h1>${prompt.emoji} ${esc(prompt.title)}</h1>
        <p>${esc(prompt.thai)} ${done ? '· <span style="color:var(--accent);font-weight:600">✓ ทำแล้ว</span>' : ''}</p>
      </div>

      <!-- Prompt card -->
      <div class="lesson-section lesson-explanation" style="margin-bottom:var(--sp-5)">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-2)">โจทย์</div>
        <p style="font-weight:600;margin-bottom:var(--sp-2)">${esc(prompt.prompt)}</p>
        <p style="color:var(--text-muted);font-size:var(--text-sm)">🇹🇭 ${esc(prompt.promptThai)}</p>
        <div style="display:flex;gap:var(--sp-2);flex-wrap:wrap;margin-top:var(--sp-4)">
          <span class="chip" style="background:var(--surface-2);color:var(--text-muted)">📝 อย่างน้อย ${prompt.minWords} คำ</span>
          <span class="chip" style="background:var(--surface-2);color:var(--text-muted)">✒️ อย่างน้อย ${prompt.minSentences} ประโยค</span>
        </div>
      </div>

      <!-- Hints -->
      <div style="margin-bottom:var(--sp-5)">
        <button class="btn btn-ghost btn-sm" id="wr-hint-toggle">💡 ดูวลีช่วยเขียน</button>
        <div id="wr-hints" style="display:none;margin-top:var(--sp-3);padding:var(--sp-4);background:var(--gold-soft);border-radius:var(--r-lg)">
          <div style="display:flex;flex-direction:column;gap:var(--sp-2)">
            ${prompt.hints.map(h => `<div style="font-family:var(--font-mono);font-size:var(--text-sm)">• ${esc(h)}</div>`).join('')}
          </div>
        </div>
      </div>

      <!-- Editor -->
      <textarea id="wr-input"
        placeholder="เริ่มเขียนที่นี่..."
        style="width:100%;min-height:200px;padding:var(--sp-4);border:2px solid var(--border);border-radius:var(--r-lg);font-family:var(--font-body);font-size:var(--text-base);resize:vertical;background:var(--surface);color:var(--text);line-height:1.7;box-sizing:border-box;transition:border-color 200ms var(--ease)"
        rows="8"></textarea>

      <div style="display:flex;gap:var(--sp-4);align-items:center;margin-top:var(--sp-3);flex-wrap:wrap">
        <span id="wr-wordcount" style="font-size:var(--text-sm);color:var(--text-muted)">0 คำ</span>
        <span id="wr-sentcount" style="font-size:var(--text-sm);color:var(--text-muted)">0 ประโยค</span>
        <button class="btn btn-primary" id="wr-check-btn" style="margin-left:auto">ตรวจงานเขียน →</button>
      </div>

      <div id="wr-results" style="margin-top:var(--sp-6)"></div>
    </div>
  `

  const input = main.querySelector('#wr-input')
  const wordCountEl = main.querySelector('#wr-wordcount')
  const sentCountEl = main.querySelector('#wr-sentcount')
  const checkBtn = main.querySelector('#wr-check-btn')
  const results = main.querySelector('#wr-results')

  main.querySelector('#wr-hint-toggle').addEventListener('click', () => {
    const h = main.querySelector('#wr-hints')
    h.style.display = h.style.display === 'none' ? 'block' : 'none'
  })

  input.addEventListener('input', () => {
    input.style.borderColor = 'var(--border)'
    wordCountEl.textContent = `${countWords(input.value)} คำ`
    sentCountEl.textContent = `${countSentences(input.value)} ประโยค`
  })

  let awarded = false

  checkBtn.addEventListener('click', () => {
    const text = input.value.trim()
    const words = countWords(text)
    const sentences = countSentences(text)

    if (!text) {
      results.innerHTML = `<p style="color:var(--text-muted);font-size:var(--text-sm)">กรุณาเขียนอะไรบางอย่างก่อนนะ</p>`
      return
    }

    const issues = checkGrammar(text)
    const metWords = words >= prompt.minWords
    const metSentences = sentences >= prompt.minSentences
    const keywordsUsed = (prompt.keywords || []).filter(k => new RegExp(`\\b${k}\\b`, 'i').test(text))
    const passed = metWords && metSentences

    // Award XP once, when length requirements are met (grammar issues don't block —
    // they're formative feedback). Uses the same skill-completion machinery as
    // other skills, so streak/goal/badges all update.
    let newBadges = []
    if (passed && !awarded) {
      awarded = true
      newBadges = recordSkillCompletion(prompt.id, { xp: WRITING_XP }) || []
      floatXP(WRITING_XP, checkBtn)
      confetti(40)
    }

    results.innerHTML = `
      ${checklistHTML({ metWords, words, minWords: prompt.minWords, metSentences, sentences, minSentences: prompt.minSentences, keywordsUsed, keywords: prompt.keywords || [] })}
      ${grammarFeedbackHTML(issues)}
      ${passed ? `
        <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-xl);padding:var(--sp-5);text-align:center;margin-top:var(--sp-4);animation:pop-in 0.3s ease">
          <div style="font-size:2rem;margin-bottom:var(--sp-2)">${issues.length === 0 ? '🌟' : '✅'}</div>
          <div style="font-weight:700;margin-bottom:var(--sp-1)">ส่งงานสำเร็จ!</div>
          <div style="color:var(--text-muted);font-size:var(--text-sm)">${issues.length === 0 ? 'ไม่พบข้อผิดพลาดที่ตรวจได้ — เยี่ยมมาก!' : `แก้ ${issues.length} จุดด้านบนแล้วงานจะดีขึ้นอีก`}</div>
          <a href="#/skills/writing" class="btn btn-primary" style="margin-top:var(--sp-4)">← เลือกหัวข้ออื่น</a>
        </div>
      ` : ''}
    `

    if (newBadges.length) setTimeout(() => showNewBadges(newBadges), 500)
    results.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  })
}

function checkItem(ok, label) {
  return `
    <div style="display:flex;align-items:center;gap:var(--sp-2);font-size:var(--text-sm);color:${ok ? 'var(--accent)' : 'var(--text-muted)'}">
      <span>${ok ? '✅' : '⬜'}</span><span>${label}</span>
    </div>`
}

function checklistHTML({ metWords, words, minWords, metSentences, sentences, minSentences, keywordsUsed, keywords }) {
  return `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);margin-bottom:var(--sp-4)">
      <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);margin-bottom:var(--sp-3)">ตรวจความครบถ้วน</div>
      <div style="display:flex;flex-direction:column;gap:var(--sp-2)">
        ${checkItem(metWords, `เขียน ${words} / ${minWords} คำ`)}
        ${checkItem(metSentences, `เขียน ${sentences} / ${minSentences} ประโยค`)}
        ${keywords.length ? checkItem(keywordsUsed.length > 0, `ใช้คำแนะนำ: ${keywordsUsed.length}/${keywords.length} (${keywords.map(k => keywordsUsed.includes(k) ? `<strong style="color:var(--accent)">${esc(k)}</strong>` : `<span style="color:var(--text-faint)">${esc(k)}</span>`).join(', ')})`) : ''}
      </div>
    </div>
  `
}

function grammarFeedbackHTML(issues) {
  if (issues.length === 0) {
    return `
      <div style="background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);margin-bottom:var(--sp-4)">
        <div style="font-weight:600;color:var(--accent)">✓ ไม่พบข้อผิดพลาดไวยากรณ์ที่ตรวจได้</div>
        <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--sp-1)">ตัวตรวจครอบคลุมข้อผิดพลาดที่พบบ่อยเท่านั้น — อาจมีบางจุดที่ตรวจไม่ได้</div>
      </div>
    `
  }
  return `
    <div style="margin-bottom:var(--sp-4)">
      <div style="display:flex;align-items:center;gap:var(--sp-3);flex-wrap:wrap;margin-bottom:var(--sp-3)">
        <span style="background:var(--danger-soft);color:var(--danger);padding:var(--sp-1) var(--sp-3);border-radius:var(--r-full);font-size:var(--text-sm);font-weight:700">${issues.length} จุดควรแก้</span>
        <span style="font-size:var(--text-xs);color:var(--text-muted)">⚠️ อาจมี false positive บ้าง — ใช้วิจารณญาณด้วย</span>
      </div>
      ${issues.map((issue, i) => `
        <div style="background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--danger);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);margin-bottom:var(--sp-3);animation:pop-in 0.2s ease ${i * 0.05}s both">
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--danger);margin-bottom:var(--sp-3)">${esc(issue.rule)}</div>
          <div style="display:flex;align-items:center;gap:var(--sp-3);flex-wrap:wrap;margin-bottom:var(--sp-3)">
            <span style="background:var(--danger-soft);color:var(--danger);padding:2px var(--sp-2);border-radius:var(--r-sm);font-size:var(--text-sm);font-family:var(--font-mono);text-decoration:line-through">${esc(issue.found)}</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--accent-soft);color:var(--accent);padding:2px var(--sp-2);border-radius:var(--r-sm);font-size:var(--text-sm);font-family:var(--font-mono)">${esc(issue.fix)}</span>
          </div>
          <div style="font-size:var(--text-sm);color:var(--text-muted);line-height:1.5">${esc(issue.tip)}</div>
        </div>
      `).join('')}
    </div>
  `
}
