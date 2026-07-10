import { getSentenceBuilderBest, recordSentenceBuilderResult, addBonusXP } from '../store.js'
import { speak } from '../utils/tts.js'
import { floatXP, showNewBadges } from '../utils/fx.js'

// Curated sentences grouped by level — Thai prompt, correct English word order
const SENTENCE_SETS = [
  {
    level: 'A1',
    label: 'Beginner',
    sentences: [
      { thai: 'ชื่อของฉันคือพลอย', words: ['My', 'name', 'is', 'Ploy', '.'] },
      { thai: 'ฉันมาจากประเทศไทย', words: ['I', 'am', 'from', 'Thailand', '.'] },
      { thai: 'ยินดีที่ได้รู้จักคุณ', words: ['Nice', 'to', 'meet', 'you', '.'] },
      { thai: 'ฉันอาศัยอยู่ในกรุงเทพฯ', words: ['I', 'live', 'in', 'Bangkok', '.'] },
      { thai: 'เธอเป็นครู', words: ['She', 'is', 'a', 'teacher', '.'] },
      { thai: 'ฉันสบายดี ขอบคุณ', words: ["I'm", 'fine', ',', 'thank', 'you', '.'] },
      { thai: 'นี่คือสมุดของฉัน', words: ['This', 'is', 'my', 'book', '.'] },
      { thai: 'พวกเขาอยู่ที่ไหน?', words: ['Where', 'are', 'they', '?'] },
    ]
  },
  {
    level: 'A2',
    label: 'Elementary',
    sentences: [
      { thai: 'ฉันตื่นนอนตอนเจ็ดโมงทุกวัน', words: ['I', 'wake', 'up', 'at', 'seven', 'every', 'day', '.'] },
      { thai: 'คุณมีงานอดิเรกอะไรบ้าง?', words: ['What', 'are', 'your', 'hobbies', '?'] },
      { thai: 'เธอชอบฟังเพลงและอ่านหนังสือ', words: ['She', 'likes', 'listening', 'to', 'music', 'and', 'reading', '.'] },
      { thai: 'ฉันต้องการกาแฟหนึ่งแก้ว', words: ['I', 'would', 'like', 'a', 'cup', 'of', 'coffee', '.'] },
      { thai: 'ห้องน้ำอยู่ที่ไหน?', words: ['Excuse', 'me', ',', 'where', 'is', 'the', 'bathroom', '?'] },
      { thai: 'ฉันไม่ค่อยกินข้าวเช้า', words: ['I', 'rarely', 'eat', 'breakfast', '.'] },
      { thai: 'ร้านนั้นอยู่ตรงข้ามกับโรงเรียน', words: ['The', 'shop', 'is', 'opposite', 'the', 'school', '.'] },
      { thai: 'คุณไม่ควรมาสาย', words: ['You', 'should', 'not', 'be', 'late', '.'] },
    ]
  },
  {
    level: 'B1',
    label: 'Intermediate',
    sentences: [
      { thai: 'ฉันทำงานที่บริษัทนี้มาสามปีแล้ว', words: ["I've", 'worked', 'at', 'this', 'company', 'for', 'three', 'years', '.'] },
      { thai: 'เครื่องบินถูกดีเลย์เพราะสภาพอากาศแย่', words: ['The', 'flight', 'was', 'delayed', 'due', 'to', 'bad', 'weather', '.'] },
      { thai: 'ถ้าฉันชนะสลากกินแบ่ง ฉันจะเดินทางรอบโลก', words: ['If', 'I', 'won', 'the', 'lottery', ',', 'I', 'would', 'travel', 'the', 'world', '.'] },
      { thai: 'คุณเคยไปลอนดอนไหม?', words: ['Have', 'you', 'ever', 'been', 'to', 'London', '?'] },
      { thai: 'สะพานอีเฟลถูกสร้างในปี 1889', words: ['The', 'Eiffel', 'Tower', 'was', 'built', 'in', '1889', '.'] },
      { thai: 'ฉันโทรหาเธอไม่ได้เพราะสายไม่ว่าง', words: ['I', "couldn't", 'reach', 'her', 'because', 'the', 'line', 'was', 'engaged', '.'] },
      { thai: 'คุณว่างวันเสาร์ไหม?', words: ['Are', 'you', 'available', 'on', 'Saturday', '?'] },
      { thai: 'แพทย์แนะนำให้เธอพักผ่อนหนึ่งสัปดาห์', words: ['The', 'doctor', 'advised', 'her', 'to', 'rest', 'for', 'a', 'week', '.'] },
    ]
  },
  {
    level: 'B2',
    label: 'Upper-Intermediate',
    sentences: [
      { thai: 'เธอบอกฉันว่าการประชุมถูกเลื่อนไปวันอังคาร', words: ['She', 'told', 'me', 'the', 'meeting', 'had', 'been', 'moved', 'to', 'Tuesday', '.'] },
      { thai: 'ฉันกลัวว่าจะมีปัญหากับบิลของฉัน', words: ["I'm", 'afraid', "there's", 'a', 'problem', 'with', 'my', 'bill', '.'] },
      { thai: 'เขาปฏิเสธว่าเขาไม่ได้ทำผิดพลาด', words: ['He', 'denied', 'making', 'any', 'mistakes', '.'] },
      { thai: 'ฉันขอโทษอย่างจริงใจสำหรับความไม่สะดวก', words: ['I', 'sincerely', 'apologise', 'for', 'the', 'inconvenience', '.'] },
      { thai: 'เธอถามว่าฉันทำงานที่ไหน', words: ['She', 'asked', 'where', 'I', 'worked', '.'] },
      { thai: 'ฉันอยากจะพูดคุยกับผู้จัดการ', words: ["I'd", 'like', 'to', 'speak', 'to', 'a', 'manager', ',', 'please', '.'] },
      { thai: 'ครูบอกให้เราเปิดหนังสือ', words: ['The', 'teacher', 'told', 'us', 'to', 'open', 'our', 'books', '.'] },
      { thai: 'นั่นเป็นความผิดของเราทั้งหมด', words: ['That', 'was', 'entirely', 'our', 'fault', '.'] },
    ]
  },
  {
    level: 'C1',
    label: 'Advanced',
    sentences: [
      { thai: 'ฉันเห็นจุดของคุณ แต่ฉันอยากจะโต้แย้ง', words: ['I', 'see', 'your', 'point', ',', 'but', "I'd", 'like', 'to', 'respectfully', 'disagree', '.'] },
      { thai: 'อาจพูดได้ว่านโยบายนี้มีผลกระทบที่ไม่ได้ตั้งใจ', words: ['It', 'could', 'be', 'argued', 'that', 'this', 'policy', 'has', 'unintended', 'consequences', '.'] },
      { thai: 'การเจรจาต้องใช้ทั้งความอดทนและความยืดหยุ่น', words: ['Negotiation', 'requires', 'both', 'patience', 'and', 'flexibility', '.'] },
      { thai: 'เขาฟังอย่างตั้งใจก่อนที่จะตอบสนอง', words: ['He', 'listened', 'attentively', 'before', 'formulating', 'his', 'response', '.'] },
      { thai: 'ฉันอยากขอให้คุณพิจารณาใหม่อีกครั้ง', words: ['I', 'would', 'like', 'to', 'ask', 'you', 'to', 'reconsider', 'your', 'position', '.'] },
      { thai: 'ข้อมูลดูเหมือนจะสนับสนุนสมมติฐานนี้', words: ['The', 'data', 'appear', 'to', 'support', 'this', 'hypothesis', '.'] },
      { thai: 'บริษัทตัดสินใจยุติสัญญาด้วยผลทันที', words: ['The', 'company', 'decided', 'to', 'terminate', 'the', 'contract', 'with', 'immediate', 'effect', '.'] },
      { thai: 'เธอแสดงให้เห็นว่าเธอมีความสามารถในการเป็นผู้นำ', words: ['She', 'demonstrated', 'an', 'impressive', 'capacity', 'for', 'leadership', '.'] },
    ]
  }
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function normalise(str) {
  return str.replace(/\s+/g, ' ').trim().toLowerCase().replace(/[.,?!]/g, '')
}

export function renderSentenceBuilder() {
  const main = document.getElementById('main-content')

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Sentence Builder</h1>
        <p>เรียงคำให้เป็นประโยคที่ถูกต้อง — ฝึกลำดับคำในภาษาอังกฤษ</p>
      </div>

      <div style="display:flex;gap:var(--sp-2);flex-wrap:wrap;margin-bottom:var(--sp-6)" id="level-tabs">
        ${SENTENCE_SETS.map((s, i) => `
          <button class="btn ${i === 0 ? 'btn-primary' : 'btn-ghost'} btn-sm level-tab" data-idx="${i}">
            <span class="level-badge level-${s.level}" style="margin-right:4px">${s.level}</span>${s.label}
          </button>
        `).join('')}
      </div>

      <div id="sb-content"></div>
    </div>
  `

  let currentLevel = 0
  let currentSentenceIdx = 0
  let score = 0
  let total = 0

  const tabs = main.querySelectorAll('.level-tab')
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.className = 'btn btn-ghost btn-sm level-tab' })
      tab.className = 'btn btn-primary btn-sm level-tab'
      currentLevel = parseInt(tab.dataset.idx)
      currentSentenceIdx = 0
      score = 0
      total = 0
      renderSentence()
    })
  })

  function renderSentence() {
    const set = SENTENCE_SETS[currentLevel]
    const sentence = set.sentences[currentSentenceIdx]
    const shuffled = shuffle(sentence.words)
    const content = main.querySelector('#sb-content')
    const best = getSentenceBuilderBest(set.level)

    content.innerHTML = `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-6);animation:pop-in 0.25s ease">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-5);flex-wrap:wrap;gap:var(--sp-3)">
          <div>
            <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-1)">ประโยคที่ ${currentSentenceIdx + 1} / ${set.sentences.length}</div>
            <div style="font-size:var(--text-xl);font-weight:700;color:var(--text)">${sentence.thai}</div>
          </div>
          <div style="background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-lg);padding:var(--sp-2) var(--sp-4);text-align:center;min-width:80px">
            <div style="font-size:var(--text-xl);font-weight:800;color:var(--accent)">${score}/${total}</div>
            <div style="font-size:var(--text-xs);color:var(--text-muted)">correct</div>
            ${best ? `<div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:2px;border-top:1px solid var(--accent-mid);padding-top:2px">🏆 ${best.bestScore}/${best.bestTotal}</div>` : ''}
          </div>
        </div>

        <!-- Drop zone -->
        <div id="drop-zone" style="min-height:52px;border:2px dashed var(--border);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);display:flex;flex-wrap:wrap;gap:var(--sp-2);align-items:center;margin-bottom:var(--sp-4);transition:border-color 200ms;background:var(--surface-2)">
          <span style="color:var(--text-faint);font-size:var(--text-sm);pointer-events:none" id="drop-hint">คลิกคำด้านล่างเพื่อเพิ่มที่นี่</span>
        </div>

        <!-- Word bank -->
        <div id="word-bank" style="display:flex;flex-wrap:wrap;gap:var(--sp-2);min-height:48px;margin-bottom:var(--sp-5)">
          ${shuffled.map((w, i) => `
            <button class="word-tile" data-word="${w.replace(/"/g, '&quot;')}" data-bank-idx="${i}"
              style="padding:var(--sp-2) var(--sp-3);background:var(--surface);border:2px solid var(--border);border-radius:var(--r-md);font-size:var(--text-sm);font-family:var(--font-body);font-weight:500;cursor:pointer;transition:all 150ms var(--ease);color:var(--text)">
              ${w.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </button>
          `).join('')}
        </div>

        <div style="display:flex;gap:var(--sp-3);flex-wrap:wrap;align-items:center">
          <button class="btn btn-primary" id="check-btn">Check ✓</button>
          <button class="btn btn-ghost btn-sm" id="clear-btn">Clear</button>
          <button class="btn btn-ghost btn-sm" id="hint-btn">💡 Hint</button>
        </div>

        <div id="feedback" style="margin-top:var(--sp-4)"></div>
      </div>
    `

    const dropZone = content.querySelector('#drop-zone')
    const wordBank = content.querySelector('#word-bank')
    const dropHint = content.querySelector('#drop-hint')
    const feedback = content.querySelector('#feedback')
    let placed = [] // words currently in drop zone
    let sentenceChecked = false // prevent total++ on retries

    function updateDropHint() {
      if (dropHint) dropHint.style.display = placed.length === 0 ? '' : 'none'
    }

    // Click word tile in bank → move to drop zone
    wordBank.addEventListener('click', e => {
      const btn = e.target.closest('.word-tile')
      if (!btn || btn.dataset.placed) return
      const word = btn.dataset.word
      placed.push(word)
      btn.dataset.placed = '1'
      btn.style.opacity = '0.3'
      btn.style.pointerEvents = 'none'

      const tile = document.createElement('button')
      tile.className = 'word-tile drop-tile'
      tile.textContent = word
      tile.dataset.word = word
      tile.style.cssText = 'padding:var(--sp-2) var(--sp-3);background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-md);font-size:var(--text-sm);font-family:var(--font-body);font-weight:600;cursor:pointer;color:var(--accent);transition:all 150ms'
      tile.addEventListener('click', () => {
        const dropTiles = [...dropZone.querySelectorAll('.drop-tile')]
        const tilePos = dropTiles.indexOf(tile)
        if (tilePos > -1) placed.splice(tilePos, 1)
        tile.remove()
        btn.style.opacity = ''
        btn.style.pointerEvents = ''
        delete btn.dataset.placed
        updateDropHint()
      })
      dropZone.appendChild(tile)
      updateDropHint()
    })

    content.querySelector('#clear-btn').addEventListener('click', () => {
      placed = []
      dropZone.querySelectorAll('.drop-tile').forEach(t => t.remove())
      wordBank.querySelectorAll('.word-tile').forEach(b => {
        b.style.opacity = ''
        b.style.pointerEvents = ''
        delete b.dataset.placed
      })
      feedback.innerHTML = ''
      updateDropHint()
    })

    content.querySelector('#hint-btn').addEventListener('click', () => {
      const correct = sentence.words.join(' ')
      feedback.innerHTML = `
        <div style="background:var(--gold-soft);border:1px solid var(--gold);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);font-size:var(--text-sm)">
          💡 <strong>Answer:</strong> ${correct.replace(/</g, '&lt;')}
        </div>
      `
    })

    content.querySelector('#check-btn').addEventListener('click', () => {
      if (placed.length === 0) {
        feedback.innerHTML = `<p style="color:var(--text-muted);font-size:var(--text-sm)">กรุณาเลือกคำก่อนนะ</p>`
        return
      }

      const userAnswer = placed.join(' ')
      const correctAnswer = sentence.words.join(' ')
      const isCorrect = normalise(userAnswer) === normalise(correctAnswer)
      const firstAttempt = !sentenceChecked
      if (!sentenceChecked) { total++; sentenceChecked = true }

      if (isCorrect) {
        if (firstAttempt) score++
        addBonusXP(5)
        speak(correctAnswer)
        feedback.innerHTML = `
          <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-lg);padding:var(--sp-4);animation:pop-in 0.25s ease">
            <div style="font-weight:700;color:var(--accent);margin-bottom:var(--sp-2)">✓ ถูกต้อง! +5 XP 🎉</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted);font-family:var(--font-mono)">${correctAnswer}</div>
          </div>
        `
        const checkBtn = content.querySelector('#check-btn')
        floatXP(5, checkBtn)
        setTimeout(() => nextSentence(), 1500)
      } else {
        feedback.innerHTML = `
          <div style="background:var(--danger-soft);border:1px solid var(--danger);border-radius:var(--r-lg);padding:var(--sp-4);animation:pop-in 0.25s ease">
            <div style="font-weight:700;color:var(--danger);margin-bottom:var(--sp-2)">✗ ยังไม่ถูกต้อง</div>
            <div style="font-size:var(--text-sm);margin-bottom:var(--sp-1)"><strong>คำตอบที่ถูก:</strong></div>
            <div style="font-size:var(--text-sm);font-family:var(--font-mono);color:var(--accent-hover)">${correctAnswer.replace(/</g, '&lt;')}</div>
            <div style="margin-top:var(--sp-3);display:flex;gap:var(--sp-2)">
              <button class="btn btn-ghost btn-sm" id="try-again-btn">↺ ลองใหม่</button>
              <button class="btn btn-secondary btn-sm" id="skip-btn">ข้ามไป →</button>
            </div>
          </div>
        `
        content.querySelector('#try-again-btn').addEventListener('click', () => {
          placed = []
          dropZone.querySelectorAll('.drop-tile').forEach(t => t.remove())
          wordBank.querySelectorAll('.word-tile').forEach(b => {
            b.style.opacity = ''
            b.style.pointerEvents = ''
            delete b.dataset.placed
          })
          feedback.innerHTML = ''
          updateDropHint()
        })
        content.querySelector('#skip-btn').addEventListener('click', () => nextSentence())
      }
    })
  }

  function nextSentence() {
    const set = SENTENCE_SETS[currentLevel]
    if (currentSentenceIdx < set.sentences.length - 1) {
      currentSentenceIdx++
      renderSentence()
    } else {
      const pct = total > 0 ? Math.round((score / total) * 100) : 0
      const result = recordSentenceBuilderResult(set.level, score, total)
      const content = main.querySelector('#sb-content')
      content.innerHTML = `
        <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-xl);padding:var(--sp-8);text-align:center;animation:pop-in 0.3s ease">
          <div style="font-size:3rem;margin-bottom:var(--sp-3)">${pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '💪'}</div>
          <h2 style="margin-bottom:var(--sp-3)">Level ${set.level} Complete!</h2>
          <div style="font-size:var(--text-xl);font-weight:700;color:var(--accent);margin-bottom:var(--sp-2)">${score} / ${total} correct (${pct}%)</div>
          ${result.isNewRecord ? `<div style="display:inline-block;background:var(--gold-soft);border:1px solid var(--gold);color:#8B6914;font-weight:700;font-size:var(--text-sm);border-radius:var(--r-lg);padding:var(--sp-1) var(--sp-4);margin-bottom:var(--sp-3)">🎉 สถิติใหม่!</div>` : ''}
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4)">🏆 คะแนนสูงสุด: ${result.bestScore}/${result.bestTotal}</div>
          <p style="color:var(--text-muted);margin-bottom:var(--sp-6)">${pct >= 80 ? 'ยอดเยี่ยมมาก! ลองระดับสูงขึ้นได้เลย' : pct >= 60 ? 'ดีมาก! ลองทำอีกครั้งเพื่อให้แม่นยำขึ้น' : 'ยังต้องฝึกอีกนิด — ทำได้แน่นอน!'}</p>
          <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" id="restart-btn">↺ ทำอีกครั้ง</button>
            ${currentLevel < SENTENCE_SETS.length - 1 ? `<button class="btn btn-secondary" id="next-level-btn">ระดับถัดไป →</button>` : ''}
          </div>
        </div>
      `
      if (result.newBadges?.length) setTimeout(() => showNewBadges(result.newBadges), 400)

      content.querySelector('#restart-btn').addEventListener('click', () => {
        currentSentenceIdx = 0
        score = 0
        total = 0
        renderSentence()
      })
      const nextLvlBtn = content.querySelector('#next-level-btn')
      if (nextLvlBtn) {
        nextLvlBtn.addEventListener('click', () => {
          tabs.forEach(t => { t.className = 'btn btn-ghost btn-sm level-tab' })
          tabs[currentLevel + 1].className = 'btn btn-primary btn-sm level-tab'
          currentLevel++
          currentSentenceIdx = 0
          score = 0
          total = 0
          renderSentence()
        })
      }
    }
  }

  renderSentence()
}
