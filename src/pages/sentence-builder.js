import { getSentenceBuilderBest, recordSentenceBuilderResult, addBonusXP } from '../store.js'
import { speak } from '../utils/tts.js'
import { floatXP, showNewBadges } from '../utils/fx.js'
import { SENTENCE_SETS } from '../data/sentences.js'

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
      <div id="sb-level-select"></div>
      <div id="sb-content" style="display:none"></div>
    </div>
  `

  let currentLevel = 0
  let currentSentenceIdx = 0
  let score = 0
  let total = 0

  function renderLevelSelect() {
    const levelSelect = main.querySelector('#sb-level-select')
    const contentEl = main.querySelector('#sb-content')
    levelSelect.style.display = ''
    contentEl.style.display = 'none'

    levelSelect.innerHTML = `
      <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-5)">เลือกระดับ</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:var(--sp-4)">
        ${SENTENCE_SETS.map((s, i) => {
          const best = getSentenceBuilderBest(s.level)
          return `
            <button class="sb-level-card" data-idx="${i}"
              style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-5) var(--sp-5);text-align:left;cursor:pointer;transition:all 200ms var(--ease)"
              onmouseover="this.style.borderColor='var(--accent)';this.style.background='var(--accent-soft)'"
              onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--surface)'">
              <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-3)">
                <span class="level-badge level-${s.level}">${s.level}</span>
                <span style="font-weight:600;font-size:var(--text-sm)">${s.label}</span>
              </div>
              <div style="font-size:var(--text-xs);color:var(--text-muted);margin-bottom:var(--sp-2)">${s.sentences.length} ประโยค</div>
              ${best ? `<div style="font-size:var(--text-xs);color:var(--accent);font-weight:700">🏆 Best ${best.bestScore}/${best.bestTotal}</div>` : '<div style="font-size:var(--text-xs);color:var(--text-faint)">ยังไม่เคยเล่น</div>'}
            </button>
          `
        }).join('')}
      </div>
    `

    levelSelect.querySelectorAll('.sb-level-card').forEach(btn => {
      btn.addEventListener('click', () => {
        currentLevel = parseInt(btn.dataset.idx)
        currentSentenceIdx = 0
        score = 0
        total = 0
        levelSelect.style.display = 'none'
        contentEl.style.display = ''
        renderSentence()
      })
    })
  }

  renderLevelSelect()

  function renderSentence() {
    const set = SENTENCE_SETS[currentLevel]
    const sentence = set.sentences[currentSentenceIdx]
    const shuffled = shuffle(sentence.words)
    const content = main.querySelector('#sb-content')
    const best = getSentenceBuilderBest(set.level)

    content.innerHTML = `
      <div style="margin-bottom:var(--sp-4)">
        <button id="sb-back-btn" class="btn btn-ghost btn-sm">← เลือกระดับ</button>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-6);animation:pop-in 0.25s ease">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-5);flex-wrap:wrap;gap:var(--sp-3)">
          <div>
            <div style="display:flex;align-items:center;gap:var(--sp-2);margin-bottom:var(--sp-1)">
              <span class="level-badge level-${set.level}">${set.level}</span>
              <span style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted)">ประโยคที่ ${currentSentenceIdx + 1} / ${set.sentences.length}</span>
            </div>
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

    content.querySelector('#sb-back-btn').addEventListener('click', () => renderLevelSelect())

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

    const hintBtn = content.querySelector('#hint-btn')
    hintBtn.addEventListener('click', () => {
      // Revealing the answer marks the sentence attempted so it can no longer score
      // (it still counts toward the total) — no more free 100% via Hint → Clear.
      if (!sentenceChecked) { total++; sentenceChecked = true }
      hintBtn.disabled = true
      const correct = sentence.words.join(' ')
      feedback.innerHTML = `
        <div style="background:var(--gold-soft);border:1px solid var(--gold);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);font-size:var(--text-sm)">
          💡 <strong>Answer:</strong> ${correct.replace(/</g, '&lt;')}
          <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--sp-1)">ใช้คำใบ้แล้ว — ข้อนี้จะไม่นับคะแนน</div>
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
        speak(correctAnswer)
        // XP and score are awarded only on a clean first attempt — a retry (or a
        // revealed Hint) still lets you advance, but it neither scores nor pays XP.
        let xpNote = ''
        if (firstAttempt) {
          score++
          const nb = addBonusXP(5)
          floatXP(5, content.querySelector('#check-btn'))
          if (nb?.length) setTimeout(() => showNewBadges(nb), 400)
          xpNote = ' +5 XP 🎉'
        }
        feedback.innerHTML = `
          <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-lg);padding:var(--sp-4);animation:pop-in 0.25s ease">
            <div style="font-weight:700;color:var(--accent);margin-bottom:var(--sp-2)">✓ ถูกต้อง!${xpNote}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted);font-family:var(--font-mono)">${correctAnswer}</div>
          </div>
        `
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
          ${result.isNewRecord ? `<div style="display:inline-block;background:var(--gold-soft);border:1px solid var(--gold);color:var(--gold-strong);font-weight:700;font-size:var(--text-sm);border-radius:var(--r-lg);padding:var(--sp-1) var(--sp-4);margin-bottom:var(--sp-3)">🎉 สถิติใหม่!</div>` : ''}
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4)">🏆 คะแนนสูงสุด: ${result.bestScore}/${result.bestTotal}</div>
          <p style="color:var(--text-muted);margin-bottom:var(--sp-6)">${pct >= 80 ? 'ยอดเยี่ยมมาก! ลองระดับสูงขึ้นได้เลย' : pct >= 60 ? 'ดีมาก! ลองทำอีกครั้งเพื่อให้แม่นยำขึ้น' : 'ยังต้องฝึกอีกนิด — ทำได้แน่นอน!'}</p>
          <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" id="restart-btn">↺ ทำอีกครั้ง</button>
            ${currentLevel < SENTENCE_SETS.length - 1 ? `<button class="btn btn-secondary" id="next-level-btn">ระดับถัดไป →</button>` : ''}
            <button class="btn btn-ghost" id="back-select-btn">← เลือกระดับ</button>
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
      content.querySelector('#back-select-btn').addEventListener('click', () => renderLevelSelect())
      const nextLvlBtn = content.querySelector('#next-level-btn')
      if (nextLvlBtn) {
        nextLvlBtn.addEventListener('click', () => {
          currentLevel++
          currentSentenceIdx = 0
          score = 0
          total = 0
          renderSentence()
        })
      }
    }
  }
}
