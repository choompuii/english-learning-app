const GRAMMAR_RULES = [
  {
    id: 'a-before-vowel-sound',
    label: 'Article: "a" → "an"',
    find(text) {
      const results = []
      const re = /\ba\s+([aeiou]\w*)/gi
      let m
      while ((m = re.exec(text)) !== null) {
        const word = m[1].toLowerCase()
        // vowel letter but consonant sound
        if (/^(uni|use|eur|one[^s]|useful|usual|unique|uniform|unit|union|universe|universal|university|user|usage)/i.test(word)) continue
        results.push({ found: m[0].trim(), fix: `an ${m[1]}`, tip: 'ใช้ "an" ก่อนคำที่เสียงขึ้นต้นด้วยสระ เช่น "an apple", "an email", "an umbrella"', index: m.index })
      }
      return results
    }
  },
  {
    id: 'an-before-consonant-sound',
    label: 'Article: "an" → "a"',
    find(text) {
      const results = []
      const re = /\ban\s+([^aeiou\s]\w*)/gi
      let m
      while ((m = re.exec(text)) !== null) {
        const word = m[1].toLowerCase()
        // silent h → an hour, an honest, an heir
        if (/^(hour|honest|honesty|honour|honor|heir|herb)/i.test(word)) continue
        results.push({ found: m[0].trim(), fix: `a ${m[1]}`, tip: 'ใช้ "a" ก่อนคำที่เสียงขึ้นต้นด้วยพยัญชนะ เช่น "a book", "a university", "a European"', index: m.index })
      }
      return results
    }
  },
  {
    id: 'double-negative',
    label: 'Double Negative',
    find(text) {
      const results = []
      const re = /\b(don't|doesn't|didn't|won't|can't|couldn't|wouldn't|shouldn't|isn't|aren't|wasn't|weren't|haven't|hasn't|hadn't|never)\b[^.!?]{0,60}?\b(nothing|nobody|nowhere|no\s+one)\b/gi
      let m
      while ((m = re.exec(text)) !== null) {
        const neg = m[2].toLowerCase().replace(/\s+/, ' ')
        const fix = { nothing: 'anything', nobody: 'anybody', nowhere: 'anywhere', 'no one': 'anyone' }[neg] || 'anything'
        results.push({ found: m[0].trim(), fix: `ใช้ "${fix}" แทน "${neg}"`, tip: 'Double negative: ภาษาอังกฤษมาตรฐานไม่ใช้ประโยคปฏิเสธซ้อน เช่น "I don\'t know anything" ไม่ใช่ "I don\'t know nothing"', index: m.index })
      }
      return results
    }
  },
  {
    id: 'uncountable-plural',
    label: 'Uncountable Noun + -s',
    find(text) {
      const results = []
      const pairs = [
        ['informations', 'information'], ['furnitures', 'furniture'],
        ['advices', 'advice'], ['equipments', 'equipment'],
        ['luggages', 'luggage'], ['knowledges', 'knowledge'],
        ['homeworks', 'homework'], ['traffics', 'traffic'],
      ]
      for (const [wrong, right] of pairs) {
        const re = new RegExp(`\\b${wrong}\\b`, 'gi')
        let m
        while ((m = re.exec(text)) !== null) {
          results.push({ found: m[0], fix: right, tip: `"${right}" เป็น uncountable noun ไม่เติม -s เช่น "some information", "the furniture"`, index: m.index })
        }
      }
      return results
    }
  },
  {
    id: 'discuss-about',
    label: '"Discuss about" Error',
    find(text) {
      const results = []
      const re = /\bdiscuss(?:es|ed|ing)?\s+about\b/gi
      let m
      while ((m = re.exec(text)) !== null) {
        const v = m[0].replace(/\s+about$/i, '')
        results.push({ found: m[0], fix: v, tip: '"discuss" เป็น transitive verb ไม่ใช้ "about" เช่น "discuss the plan" ไม่ใช่ "discuss about the plan"', index: m.index })
      }
      return results
    }
  },
  {
    id: 'am-is-are-verb',
    label: '"Be + verb" Error',
    find(text) {
      const results = []
      const verbs = ['agree', 'disagree', 'understand', 'know', 'think', 'believe', 'want', 'need']
      for (const v of verbs) {
        const re = new RegExp(`\\b(am|is|are|was|were)\\s+${v}\\b`, 'gi')
        let m
        while ((m = re.exec(text)) !== null) {
          results.push({ found: m[0], fix: v, tip: `"${v}" เป็น verb ธรรมดา ไม่ต้องใช้ be ก่อน เช่น "I agree" ไม่ใช่ "I am agree"`, index: m.index })
        }
      }
      return results
    }
  },
  {
    id: 'he-she-dont',
    label: '"He/She don\'t" → "doesn\'t"',
    find(text) {
      const results = []
      const re = /\b(he|she|it)\s+(don't)\b/gi
      let m
      while ((m = re.exec(text)) !== null) {
        results.push({ found: m[0], fix: `${m[1]} doesn't`, tip: 'เมื่อประธานเป็น he/she/it ต้องใช้ "doesn\'t" ไม่ใช่ "don\'t"', index: m.index })
      }
      return results
    }
  },
  {
    id: 'he-she-have',
    label: '"He/She have" → "has"',
    find(text) {
      const results = []
      const re = /\b(he|she|it)\s+have\b/gi
      let m
      while ((m = re.exec(text)) !== null) {
        const before = text.slice(0, m.index).trimEnd()
        if (/\b(could|would|should|might|may|must|will|can|shall)$/i.test(before)) continue
        results.push({ found: m[0], fix: `${m[1]} has`, tip: 'เมื่อประธานเป็น he/she/it ต้องใช้ "has" ไม่ใช่ "have" (ยกเว้นตามหลัง modal verb เช่น "could he have")', index: m.index })
      }
      return results
    }
  },
  {
    id: 'modal-to-verb',
    label: 'Modal + "to" (ไม่จำเป็น)',
    find(text) {
      const results = []
      const re = /\b(must|can|could|should|shall|may|might|will)\s+to\s+(\w+)/gi
      let m
      while ((m = re.exec(text)) !== null) {
        results.push({ found: m[0], fix: `${m[1]} ${m[2]}`, tip: `หลัง modal verb ไม่ต้องใส่ "to" เช่น "${m[1]} ${m[2]}" ไม่ใช่ "${m[0]}"`, index: m.index })
      }
      return results
    }
  },
  {
    id: 'your-youre',
    label: '"Your" → "You\'re"',
    find(text) {
      const results = []
      const afterYour = ['welcome', 'right', 'wrong', 'amazing', 'awesome', 'crazy', 'kidding', 'joking', 'going to', 'the best']
      for (const p of afterYour) {
        const re = new RegExp(`\\byour\\s+${p.replace(' ', '\\s+')}\\b`, 'gi')
        let m
        while ((m = re.exec(text)) !== null) {
          results.push({ found: m[0], fix: `you're ${p}`, tip: '"your" = ของคุณ, "you\'re" = you are. เช่น "You\'re welcome" ไม่ใช่ "Your welcome"', index: m.index })
        }
      }
      return results
    }
  },
  {
    id: 'its-its',
    label: '"Its" → "It\'s"',
    find(text) {
      const results = []
      const re = /\bits\s+(raining|snowing|okay|ok|fine|good|bad|hot|cold|warm|cool|not|very|so|too|time|possible|impossible|important|true|false|clear)\b/gi
      let m
      while ((m = re.exec(text)) !== null) {
        results.push({ found: m[0], fix: `it's ${m[1]}`, tip: '"its" = ของมัน, "it\'s" = it is / it has. เช่น "It\'s raining" ไม่ใช่ "Its raining"', index: m.index })
      }
      return results
    }
  },
  {
    id: 'lowercase-i',
    label: 'ตัวพิมพ์เล็ก "i"',
    find(text) {
      const results = []
      const seen = new Set()
      // Contractions first (case-sensitive — no 'i' flag)
      const contractRe = /\bi'm\b|\bi've\b|\bi'll\b|\bi'd\b/g
      let m
      while ((m = contractRe.exec(text)) !== null) {
        seen.add(m.index)
        results.push({ found: m[0], fix: 'I' + m[0].slice(1), tip: 'สรรพนาม "I" ต้องเขียนตัวพิมพ์ใหญ่เสมอ', index: m.index })
      }
      // Standalone lowercase i
      const standaloneRe = /\bi\b/g
      while ((m = standaloneRe.exec(text)) !== null) {
        if (!seen.has(m.index)) {
          results.push({ found: 'i', fix: 'I', tip: 'สรรพนาม "I" ต้องเขียนตัวพิมพ์ใหญ่เสมอ', index: m.index })
        }
      }
      return results
    }
  }
]

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

    const issues = []
    for (const rule of GRAMMAR_RULES) {
      for (const f of rule.find(text)) {
        issues.push({ ...f, rule: rule.label })
      }
    }

    // Deduplicate overlapping matches by index, keep first
    const sorted = issues.sort((a, b) => a.index - b.index)
    const unique = []
    let lastEnd = -1
    for (const issue of sorted) {
      const end = issue.index + issue.found.length
      if (issue.index >= lastEnd) {
        unique.push(issue)
        lastEnd = end
      }
    }

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
