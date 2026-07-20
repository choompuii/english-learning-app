// Rule-based English grammar checker — 100% client-side, no external API.
// Each rule scans raw text and returns matches: { found, fix, tip, index }.
// Shared by the Grammar Checker page (/grammar) and Writing practice
// (skill-writing). checkGrammar() runs every rule and de-duplicates overlaps.

export const GRAMMAR_RULES = [
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
  },
  // ── New rules ──────────────────────────────────────────────
  {
    id: 'common-misspelling',
    label: 'สะกดผิดที่พบบ่อย',
    find(text) {
      const results = []
      const pairs = [
        ['recieve', 'receive'], ['seperate', 'separate'], ['definately', 'definitely'],
        ['occured', 'occurred'], ['untill', 'until'], ['wich', 'which'],
        ['becuase', 'because'], ['tommorow', 'tomorrow'], ['thier', 'their'],
        ['beleive', 'believe'], ['enviroment', 'environment'], ['goverment', 'government'],
        ['neccessary', 'necessary'], ['succesful', 'successful'], ['accross', 'across'],
        ['begining', 'beginning'], ['grammer', 'grammar'], ['embarass', 'embarrass'],
      ]
      for (const [wrong, right] of pairs) {
        const re = new RegExp(`\\b${wrong}\\b`, 'gi')
        let m
        while ((m = re.exec(text)) !== null) {
          const fix = /^[A-Z]/.test(m[0]) ? right[0].toUpperCase() + right.slice(1) : right
          results.push({ found: m[0], fix, tip: `สะกดที่ถูกต้องคือ "${right}"`, index: m.index })
        }
      }
      return results
    }
  },
  {
    id: 'alot',
    label: '"alot" → "a lot"',
    find(text) {
      const results = []
      const re = /\balot\b/gi
      let m
      while ((m = re.exec(text)) !== null) {
        results.push({ found: m[0], fix: 'a lot', tip: '"a lot" เขียนแยกกันสองคำเสมอ — ไม่มีคำว่า "alot"', index: m.index })
      }
      return results
    }
  },
  {
    id: 'modal-of',
    label: '"should of" → "should have"',
    find(text) {
      const results = []
      const re = /\b(should|would|could|must|might)\s+of\b/gi
      let m
      while ((m = re.exec(text)) !== null) {
        results.push({ found: m[0], fix: `${m[1]} have`, tip: `หลัง modal ใช้ "have" ไม่ใช่ "of" เช่น "${m[1]} have" (เสียงคล้าย "${m[1]}'ve" จึงมักเขียนผิด)`, index: m.index })
      }
      return results
    }
  },
  {
    id: 'double-comparative',
    label: 'Double Comparative',
    find(text) {
      const results = []
      // "more" + adjective already ending in -er, or "most" + -est
      const re = /\b(more)\s+(\w+er)\b|\b(most)\s+(\w+est)\b/gi
      let m
      while ((m = re.exec(text)) !== null) {
        const adj = m[2] || m[4]
        const word = (m[1] || m[3]).toLowerCase()
        // skip common words ending in -er/-est that aren't comparatives
        // ("more water", "most proper"). "better" is intentionally NOT skipped —
        // "more better" is exactly the error this rule targets.
        if (/^(other|later|water|paper|proper|matter|superior|master|semester)$/i.test(adj)) continue
        results.push({ found: m[0], fix: adj, tip: `ไม่ใช้ "${word}" ซ้อนกับคำที่เติม -${word === 'more' ? 'er' : 'est'} แล้ว เช่น "${adj}" ไม่ใช่ "${m[0]}"`, index: m.index })
      }
      return results
    }
  },
  {
    id: 'much-countable',
    label: '"much" + นามนับได้',
    find(text) {
      const results = []
      const countable = ['people', 'friends', 'books', 'cars', 'things', 'students', 'children', 'places', 'ideas', 'questions', 'problems', 'words', 'days', 'years', 'times']
      for (const noun of countable) {
        const re = new RegExp(`\\bmuch\\s+${noun}\\b`, 'gi')
        let m
        while ((m = re.exec(text)) !== null) {
          results.push({ found: m[0], fix: `many ${noun}`, tip: `ใช้ "many" กับนามนับได้พหูพจน์ เช่น "many ${noun}" — "much" ใช้กับนามนับไม่ได้`, index: m.index })
        }
      }
      return results
    }
  },
]

// Run every rule, then de-duplicate overlapping matches (keep the earliest).
export function checkGrammar(text) {
  const issues = []
  for (const rule of GRAMMAR_RULES) {
    for (const f of rule.find(text)) {
      issues.push({ ...f, rule: rule.label })
    }
  }

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
  return unique
}
