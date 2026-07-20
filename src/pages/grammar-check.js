import { addBonusXP } from '../store.js'
import { floatXP } from '../utils/fx.js'
import { GRAMMAR_RULES, checkGrammar as runGrammarCheck } from '../utils/grammar-rules.js'

const EXAMPLES = [
  "She don't like the food here.",
  "I have many informations about this topic.",
  "He have a new car and she go to work every day.",
  "We need to discuss about the project.",
  "I am agree with your opinion.",
  "She can to speak three languages.",
  "Its raining outside, bring a umbrella.",
  "i think your welcome to join us anytime.",
]

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function renderGrammarCheck() {
  const main = document.getElementById('main-content')
  let _lastCheckedText = null

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Grammar Checker</h1>
        <p>ตรวจสอบ grammar ภาษาอังกฤษสำหรับข้อผิดพลาดที่พบบ่อย</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:var(--sp-4)">
        <textarea id="grammar-input"
          placeholder="พิมพ์ประโยคหรือย่อหน้าภาษาอังกฤษที่นี่..."
          style="width:100%;min-height:140px;padding:var(--sp-4);border:2px solid var(--border);border-radius:var(--r-lg);font-family:var(--font-body);font-size:var(--text-base);resize:vertical;background:var(--surface);color:var(--text);line-height:1.6;transition:border-color 200ms var(--ease);box-sizing:border-box"
          rows="5"
        ></textarea>

        <div style="display:flex;gap:var(--sp-3);align-items:center;flex-wrap:wrap">
          <button class="btn btn-primary" id="check-btn">Check Grammar →</button>
          <button class="btn btn-ghost btn-sm" id="clear-btn">Clear</button>
          <span style="font-size:var(--text-xs);color:var(--text-muted);margin-left:auto" id="char-count">0 characters</span>
        </div>
        <p style="font-size:var(--text-xs);color:var(--text-muted)">💡 Ctrl+Enter เพื่อตรวจสอบเร็วๆ</p>
      </div>

      <div id="results" style="margin-top:var(--sp-6)"></div>

      <div style="margin-top:var(--sp-10);padding-top:var(--sp-6);border-top:1px solid var(--border)">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-4)">ตัวอย่างประโยคที่มีข้อผิดพลาด</div>
        <div style="display:flex;flex-direction:column;gap:var(--sp-2)">
          ${EXAMPLES.map(ex => `
            <button class="btn btn-ghost btn-sm" style="justify-content:flex-start;text-align:left;font-family:var(--font-mono)" data-example="${escapeHtml(ex)}">
              "${escapeHtml(ex)}"
            </button>
          `).join('')}
        </div>
      </div>

      <div style="margin-top:var(--sp-8);padding:var(--sp-5);background:var(--surface-2);border-radius:var(--r-lg);border:1px solid var(--border)">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-3)">สิ่งที่ตรวจสอบได้</div>
        <div style="display:flex;flex-wrap:wrap;gap:var(--sp-2)">
          ${GRAMMAR_RULES.map(r => `<span style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-full);padding:2px var(--sp-3);font-size:var(--text-xs);color:var(--text-muted)">${r.label}</span>`).join('')}
        </div>
      </div>
    </div>
  `

  const input = main.querySelector('#grammar-input')
  const checkBtn = main.querySelector('#check-btn')
  const clearBtn = main.querySelector('#clear-btn')
  const charCount = main.querySelector('#char-count')
  const results = main.querySelector('#results')

  input.addEventListener('input', () => {
    charCount.textContent = `${input.value.length} characters`
    input.style.borderColor = 'var(--border)'
  })

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) checkGrammar()
  })

  checkBtn.addEventListener('click', checkGrammar)

  clearBtn.addEventListener('click', () => {
    input.value = ''
    charCount.textContent = '0 characters'
    results.innerHTML = ''
    input.focus()
  })

  main.querySelectorAll('[data-example]').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.example
      charCount.textContent = `${input.value.length} characters`
      input.style.borderColor = 'var(--accent)'
      checkGrammar()
      input.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
  })

  function checkGrammar() {
    const text = input.value.trim()
    if (!text) {
      results.innerHTML = `<p style="color:var(--text-muted);font-size:var(--text-sm)">กรุณาพิมพ์ประโยคก่อน</p>`
      return
    }
    if (text.length >= 20 && text !== _lastCheckedText) {
      _lastCheckedText = text
      addBonusXP(5)
      floatXP(5, checkBtn)
    }

    const unique = runGrammarCheck(text)

    if (unique.length === 0) {
      results.innerHTML = `
        <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-xl);padding:var(--sp-6);text-align:center;animation:pop-in 0.3s ease">
          <div style="font-size:2rem;margin-bottom:var(--sp-2)">✅</div>
          <div style="font-weight:700;margin-bottom:var(--sp-1)">ไม่พบข้อผิดพลาด!</div>
          <div style="color:var(--text-muted);font-size:var(--text-sm)">Grammar ของคุณดูดีมาก — ยังมีบางกฎที่ตรวจไม่ได้ทั้งหมด แต่นี่เป็นสัญญาณที่ดี</div>
        </div>
      `
      return
    }

    results.innerHTML = `
      <div style="margin-bottom:var(--sp-4);display:flex;align-items:center;gap:var(--sp-3);flex-wrap:wrap">
        <span style="background:var(--danger-soft);color:var(--danger);padding:var(--sp-1) var(--sp-3);border-radius:var(--r-full);font-size:var(--text-sm);font-weight:700">${unique.length} issue${unique.length > 1 ? 's' : ''} found</span>
        <span style="font-size:var(--text-xs);color:var(--text-muted)">⚠️ อาจมี false positive บ้าง — ใช้วิจารณญาณด้วยนะ</span>
      </div>
      ${unique.map((issue, i) => `
        <div style="background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--danger);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);margin-bottom:var(--sp-3);animation:pop-in 0.2s ease ${i * 0.05}s both">
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--danger);margin-bottom:var(--sp-3)">${escapeHtml(issue.rule)}</div>
          <div style="display:flex;align-items:center;gap:var(--sp-3);flex-wrap:wrap;margin-bottom:var(--sp-3)">
            <span style="background:var(--danger-soft);color:var(--danger);padding:2px var(--sp-2);border-radius:var(--r-sm);font-size:var(--text-sm);font-family:var(--font-mono);text-decoration:line-through">${escapeHtml(issue.found)}</span>
            <span style="color:var(--text-muted)">→</span>
            <span style="background:var(--accent-soft);color:var(--accent);padding:2px var(--sp-2);border-radius:var(--r-sm);font-size:var(--text-sm);font-family:var(--font-mono)">${escapeHtml(issue.fix)}</span>
          </div>
          <div style="font-size:var(--text-sm);color:var(--text-muted);line-height:1.5">${escapeHtml(issue.tip)}</div>
        </div>
      `).join('')}
    `
  }
}
