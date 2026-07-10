// Convert IPA phonetic notation to Thai-readable pronunciation guide
// e.g. /əˈkweɪntəns/ → "อะ-เควน-เทินซ์"

const CONSONANTS = [
  // Clusters first (must precede single entries)
  ['tʃ', 'ช'], ['dʒ', 'จ'], ['tr', 'ทร'], ['dr', 'ดร'],
  ['θ', 'ธ'], ['ð', 'ด'], ['ʃ', 'ช'], ['ʒ', 'จ'], ['ŋ', 'ง'],
  ['p', 'พ'], ['b', 'บ'], ['t', 'ต'], ['d', 'ด'], ['k', 'ค'], ['ɡ', 'ก'], ['g', 'ก'],
  ['f', 'ฟ'], ['v', 'ว'], ['s', 'ซ'], ['z', 'ซ'], ['m', 'ม'], ['n', 'น'],
  ['l', 'ล'], ['r', 'ร'], ['j', 'ย'], ['w', 'ว'], ['h', 'ฮ'],
]

// [ipa, pre (before onset in Thai), post (after onset in Thai)]
const VOWELS = [
  ['iː',  '',   'ี' ],
  ['uː',  '',   'ู' ],
  ['ɑː',  '',   'า' ],
  ['ɔː',  '',   'อ' ],  // consonant+อ, e.g. คอล, ออล
  ['ɜː',  'เ',  'อ' ],  // เ_อ
  ['eɪ',  'เ',  '' ],   // เ_ (ย dropped — Thai convention omits it before coda)
  ['aɪ',  'ไ',  ''  ],
  ['ɔɪ',  'อ',  'ย' ],
  ['aʊ',  '',   'าว'],
  ['əʊ',  'โ',  ''  ],
  ['oʊ',  'โ',  ''  ],
  ['ɪə',  'เ',  'ีย'],
  ['eə',  'แ',  ''  ],
  ['ʊə',  '',   'ัว'],
  ['ɪ',   '',   'ิ' ],
  ['ʊ',   '',   'ุ' ],
  ['æ',   'แ',  ''  ],
  ['ɒ',   '',   'อ' ],  // consonant+อ, e.g. คอ
  ['ʌ',   '',   'ะ' ],
  ['ə',   '',   'ะ' ],
  ['e',   'เ',  ''  ],
  ['i',   '',   'ิ' ],  // plain i (not length-marked)
]

// Two-consonant clusters that can validly start an English syllable
const VALID_ONSETS = new Set([
  'pr','br','tr','dr','kr','gr','fr','fl','pl','bl','kl','gl','sl',
  'sm','sn','sp','st','sk','sw','tw','kw','dw','θr',
])

function matchAt(s, i, table) {
  for (const entry of table) {
    if (s.startsWith(entry[0], i)) return entry
  }
  return null
}

// Convert a flat IPA chunk (no stress marks) into one or more Thai syllables joined by '-'
function convertChunk(chunk) {
  // Tokenise into a list of {type:'C'|'V', ipa, thai, pre?, post?}
  const tokens = []
  let i = 0
  while (i < chunk.length) {
    const v = matchAt(chunk, i, VOWELS)
    if (v) {
      tokens.push({ type: 'V', ipa: v[0], pre: v[1], post: v[2] })
      i += v[0].length
      continue
    }
    const c = matchAt(chunk, i, CONSONANTS)
    if (c) {
      tokens.push({ type: 'C', ipa: c[0], thai: c[1] })
      i += c[0].length
      continue
    }
    i++ // skip unknown IPA characters (ː, etc. already consumed as part of vowel)
  }

  // Group tokens into syllables using the rule:
  // Scan for vowel nuclei. Consonants before a vowel are its onset;
  // consonants after are buffered until the next vowel: if there are N consonants
  // before the next vowel, use all-but-last as coda of current syllable and
  // last (if valid) as onset of next; if the cluster is a valid 2-onset, use
  // last 2 as onset of next.
  const syllables = []  // each: {onset:string[], vowel:token, coda:string[]}

  let pos = 0
  while (pos < tokens.length) {
    // Collect onset consonants
    const onset = []
    while (pos < tokens.length && tokens[pos].type === 'C') {
      onset.push(tokens[pos])
      pos++
    }
    if (pos >= tokens.length) {
      // Trailing consonant-only chunk
      if (onset.length && syllables.length) {
        syllables[syllables.length - 1].coda.push(...onset.map(t => t.thai))
      }
      break
    }
    const vowelTok = tokens[pos]; pos++

    // Collect consonants after vowel — stop when we hit another vowel
    const postC = []
    while (pos < tokens.length && tokens[pos].type === 'C') {
      postC.push(tokens[pos])
      pos++
    }

    // Decide coda/onset split for postC
    let coda = postC
    let nextOnset = []
    if (pos < tokens.length && tokens[pos].type === 'V' && postC.length > 0) {
      // There's a following vowel — allocate postC between coda and next onset
      if (postC.length === 1) {
        // Single intervocalic consonant → onset of next syllable
        coda = []
        nextOnset = postC
      } else {
        // Multiple consonants: check if last 2 form a valid onset
        const last2 = postC.slice(-2).map(t => t.ipa).join('')
        if (VALID_ONSETS.has(last2)) {
          coda = postC.slice(0, -2)
          nextOnset = postC.slice(-2)
        } else {
          // Last single consonant goes to next onset
          coda = postC.slice(0, -1)
          nextOnset = postC.slice(-1)
        }
      }
    }

    syllables.push({
      onset: onset.map(t => t.thai),
      vowel: vowelTok,
      coda: coda.map(t => t.thai),
    })

    // If we have carry-over onset for the next syllable, push it back into token stream
    if (nextOnset.length) {
      // Prepend nextOnset tokens before current pos in our syllable loop
      // by starting the next iteration with these as the onset
      // We achieve this by pushing them to the front of the remaining
      // token sequence — simplest: re-build the remaining tokens array
      // Actually since we can't mutate tokens easily, just store them
      // and prepend them in the next iteration using a small stack trick:
      // We set a "pending onset" for the next syllable instead.
      syllables[syllables.length - 1]._nextOnset = nextOnset.map(t => t.thai)
    }
  }

  // Build Thai strings for each syllable
  return syllables.map((syl, idx) => {
    const prevNext = idx > 0 ? syllables[idx - 1]._nextOnset || [] : []
    const onset = [...prevNext, ...syl.onset].join('')
    const coda = syl.coda.join('')

    // /ə/ or /ʌ/ before a coda consonant → เ_อ pattern (e.g. เทิน, เดิน)
    // rather than the default _ะ which looks odd mid-syllable
    let { pre, post } = syl.vowel
    if (coda && (syl.vowel.ipa === 'ə' || syl.vowel.ipa === 'ʌ')) {
      pre = 'เ'; post = 'อ'
    }

    if (!onset) {
      // Vowel-initial: อ as placeholder consonant
      if (pre && post) return pre + 'อ' + post + coda   // e.g. เอีย, เออ
      if (pre)         return pre + 'อ' + coda           // e.g. เอ, แอ, โอ, ไ
      return 'อ' + post + coda                           // e.g. อะ, อิ, อี
    }
    return pre + onset + post + coda
  }).join('-')
}

export function ipaToThai(ipa) {
  if (!ipa) return ''
  let s = ipa
    .replace(/^\/|\/$/g, '')  // strip surrounding slashes
    .replace(/\([^)]*\)/g, '') // strip parenthesised optional sounds, e.g. (r)
  // Split on stress marks; each chunk may contain multiple syllables
  const chunks = s.split(/[ˈˌ]/).filter(Boolean)
  return chunks.map(convertChunk).join('-')
}
