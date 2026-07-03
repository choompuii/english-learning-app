export function renderQuestion(q, index, total, onAnswer) {
  const container = document.createElement('div')
  container.className = 'quiz-question-card'
  container.dataset.qid = q.id

  const header = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-4)">
      <span style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted)">
        Question ${index + 1} of ${total}
      </span>
    </div>
    <p class="quiz-prompt">${q.prompt}</p>
  `

  if (q.type === 'multiple-choice') {
    container.innerHTML = header + `
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option" data-index="${i}">
            <span style="font-weight:700;color:var(--accent);min-width:20px">${String.fromCharCode(65 + i)}.</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" style="display:none"></div>
    `

    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (container.dataset.answered) return
        container.dataset.answered = '1'

        const chosen = parseInt(btn.dataset.index)
        const correct = q.correctIndex
        const isCorrect = chosen === correct

        container.querySelectorAll('.quiz-option').forEach((b, i) => {
          b.disabled = true
          if (i === correct) b.classList.add('correct')
          else if (i === chosen && !isCorrect) b.classList.add('incorrect')
        })

        const exp = container.querySelector('.quiz-explanation')
        exp.style.display = 'block'
        exp.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Not quite.'}</strong> ${q.explanation}`

        onAnswer({ qid: q.id, correct: isCorrect, chosen })
      })
    })

  } else if (q.type === 'fill-in-blank') {
    container.innerHTML = header + `
      <div style="display:flex;gap:var(--sp-3);align-items:flex-start;flex-wrap:wrap">
        <input class="quiz-fill-input" type="text" placeholder="Type your answer…" autocomplete="off" style="flex:1;min-width:200px" />
        <button class="btn btn-primary" id="check-btn">Check</button>
      </div>
      <div class="quiz-explanation" style="display:none;margin-top:var(--sp-4)"></div>
    `

    const input = container.querySelector('.quiz-fill-input')
    const checkBtn = container.querySelector('#check-btn')

    function check() {
      if (container.dataset.answered) return
      container.dataset.answered = '1'

      const userAnswer = input.value.trim().toLowerCase()
      const correct = q.answer.toLowerCase()
      const variants = (q.acceptedVariants || []).map(v => v.toLowerCase())
      const isCorrect = userAnswer === correct || variants.includes(userAnswer)

      input.disabled = true
      input.classList.add(isCorrect ? 'correct' : 'incorrect')
      checkBtn.disabled = true

      if (!isCorrect) {
        input.value = q.answer
      }

      const exp = container.querySelector('.quiz-explanation')
      exp.style.display = 'block'
      exp.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : `✗ The answer is: "${q.answer}"`}</strong> ${q.explanation}`

      onAnswer({ qid: q.id, correct: isCorrect, userAnswer })
    }

    checkBtn.addEventListener('click', check)
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check() })
    input.focus()

  } else if (q.type === 'sentence-scramble') {
    // Shuffle words for display (keep correct order in q.words)
    const shuffled = [...q.words].sort(() => Math.random() - 0.5)

    container.innerHTML = header + `
      <div class="scramble-slots" id="scramble-slots"></div>
      <div class="scramble-word-pool" id="scramble-pool">
        ${shuffled.map((w, i) => `<button class="scramble-word" data-word="${w}" data-idx="${i}">${w}</button>`).join('')}
      </div>
      <div class="quiz-explanation" style="display:none"></div>
    `

    const slots = container.querySelector('#scramble-slots')
    const pool = container.querySelector('#scramble-pool')
    const placed = [] // array of word strings in slot order

    function updateCheckButton() {
      const existing = container.querySelector('#scramble-check')
      if (placed.length === q.words.length) {
        if (!existing) {
          const btn = document.createElement('button')
          btn.id = 'scramble-check'
          btn.className = 'btn btn-primary'
          btn.style.marginTop = 'var(--sp-3)'
          btn.textContent = 'ตรวจคำตอบ ✓'
          btn.addEventListener('click', checkScramble)
          container.querySelector('.quiz-explanation').before(btn)
        }
      } else if (existing) {
        existing.remove()
      }
    }

    function renderSlots() {
      slots.innerHTML = placed.map((w, i) =>
        `<button class="scramble-slot" data-slot="${i}">${w}</button>`
      ).join('')
      slots.querySelectorAll('.scramble-slot').forEach(btn => {
        btn.addEventListener('click', () => {
          if (container.dataset.answered) return
          const idx = parseInt(btn.dataset.slot)
          const word = placed[idx]
          placed.splice(idx, 1)
          // re-enable matching pool word
          pool.querySelectorAll('.scramble-word').forEach(pb => {
            if (pb.dataset.word === word && pb.classList.contains('used')) {
              pb.classList.remove('used')
              return
            }
          })
          renderSlots()
          updateCheckButton()
        })
      })
    }

    pool.querySelectorAll('.scramble-word').forEach(btn => {
      btn.addEventListener('click', () => {
        if (container.dataset.answered) return
        if (btn.classList.contains('used')) return
        btn.classList.add('used')
        placed.push(btn.dataset.word)
        renderSlots()
        updateCheckButton()
      })
    })

    function checkScramble() {
      if (container.dataset.answered) return
      container.dataset.answered = '1'
      container.querySelector('#scramble-check').disabled = true

      const isCorrect = placed.join(' ') === q.words.join(' ')

      slots.querySelectorAll('.scramble-slot').forEach((btn, i) => {
        btn.classList.add(placed[i] === q.words[i] ? 'correct' : 'incorrect')
      })

      if (!isCorrect) {
        // Show the correct sentence
        slots.insertAdjacentHTML('afterend',
          `<div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-3)">✅ ประโยคที่ถูก: <strong>${q.words.join(' ')}</strong></div>`
        )
      }

      const exp = container.querySelector('.quiz-explanation')
      exp.style.display = 'block'
      exp.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Not quite.'}</strong> ${q.explanation}`

      onAnswer({ qid: q.id, correct: isCorrect })
    }

  } else if (q.type === 'word-matching') {
    // Support both {word, match} and {left, right} formats
    const pairs = q.pairs.map(p => ({
      word: p.word ?? p.left,
      match: p.match ?? p.right
    }))
    const shuffledMatches = [...pairs.map(p => p.match)].sort(() => Math.random() - 0.5)

    container.innerHTML = header + `
      <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-3)">คลิกคำ แล้วคลิกความหมายเพื่อจับคู่</p>
      <div class="match-grid">
        <div id="match-words" style="display:flex;flex-direction:column;gap:8px">
          ${pairs.map((p, i) => `<button class="match-item" data-word="${p.word}" data-pair="${i}">${p.word}</button>`).join('')}
        </div>
        <div id="match-defs" style="display:flex;flex-direction:column;gap:8px">
          ${shuffledMatches.map((m, i) => `<button class="match-item" data-match="${m}" data-midx="${i}">${m}</button>`).join('')}
        </div>
      </div>
      <div class="quiz-explanation" style="display:none"></div>
    `

    let selectedWord = null
    let correctCount = 0
    const totalPairs = pairs.length

    function tryMatch(matchBtn) {
      if (!selectedWord) return
      const wordBtn = selectedWord
      const correctMatch = pairs.find(p => p.word === wordBtn.dataset.word)?.match
      const isCorrect = matchBtn.dataset.match === correctMatch

      if (isCorrect) {
        wordBtn.classList.remove('selected')
        wordBtn.classList.add('matched-correct')
        wordBtn.disabled = true
        matchBtn.classList.add('matched-correct')
        matchBtn.disabled = true
        correctCount++
        selectedWord = null

        if (correctCount === totalPairs) {
          // All matched
          const exp = container.querySelector('.quiz-explanation')
          exp.style.display = 'block'
          exp.innerHTML = `<strong>✓ ถูกต้องทุกคู่!</strong> ${q.explanation}`
          onAnswer({ qid: q.id, correct: true })
        }
      } else {
        // Flash wrong then reset
        wordBtn.classList.remove('selected')
        wordBtn.classList.add('matched-wrong')
        matchBtn.classList.add('matched-wrong')
        selectedWord = null
        setTimeout(() => {
          wordBtn.classList.remove('matched-wrong')
          matchBtn.classList.remove('matched-wrong')
        }, 600)
      }
    }

    container.querySelectorAll('#match-words .match-item').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return
        if (selectedWord === btn) {
          btn.classList.remove('selected')
          selectedWord = null
          return
        }
        if (selectedWord) selectedWord.classList.remove('selected')
        selectedWord = btn
        btn.classList.add('selected')
      })
    })

    container.querySelectorAll('#match-defs .match-item').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return
        if (!selectedWord) return
        tryMatch(btn)
      })
    })
  }

  return container
}
