import { speak } from '../utils/tts.js'
import { saveToNotebook, removeFromNotebook, isInNotebook } from '../store.js'

export function createFlashcardHTML(card, index, total) {
  const frontText = card.front
  const backText = `${card.front}. ${card.back}. ${card.example}`
  const saved = isInNotebook(card.front)

  return `
    <div class="session-header">
      <div class="session-counter">Card ${index + 1} of ${total}</div>
      <div class="progress-bar" style="width:200px">
        <div class="progress-fill" style="width:${Math.round((index / total) * 100)}%"></div>
      </div>
    </div>

    <div class="flashcard-scene" id="flashcard-scene" role="button" tabindex="0" aria-label="Click to flip card">
      <div class="flashcard-inner" id="flashcard-inner">
        <div class="flashcard-face flashcard-front">
          <div style="display:flex;align-items:center;justify-content:center;gap:8px">
            <div class="card-word">${card.front}</div>
            <button class="tts-btn" data-speak="${frontText.replace(/"/g, '&quot;')}" title="ฟังเสียง">🔊</button>
          </div>
          <div class="card-phonetic">${card.phonetic || ''}</div>
          <div class="card-flip-hint">Click to reveal →</div>
        </div>
        <div class="flashcard-face flashcard-back">
          <div style="display:flex;align-items:center;justify-content:center;gap:8px">
            <div class="card-back-word">${card.front}</div>
            <button class="tts-btn" data-speak="${backText.replace(/"/g, '&quot;')}" title="ฟังเสียง">🔊</button>
          </div>
          <div class="card-definition">${card.back}</div>
          <div class="card-example">"${card.example}"</div>
          <div class="card-thai">${card.thai}</div>
          <button class="notebook-fc-btn" data-card-id="${card.id}" style="margin-top:var(--sp-3);background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);color:#fff;border-radius:var(--r-sm);padding:4px 10px;font-size:var(--text-xs);cursor:pointer;font-family:var(--font-body)">
            ${saved ? '✓ Saved' : '+ Notebook'}
          </button>
        </div>
      </div>
    </div>

    <div class="rating-buttons" id="rating-buttons" style="display:none">
      <button class="rating-btn rating-again" data-rating="0">
        <span>😵</span>
        <span>Again</span>
        <span style="font-size:0.6rem;opacity:0.7">&lt;1 day</span>
      </button>
      <button class="rating-btn rating-hard" data-rating="1">
        <span>😓</span>
        <span>Hard</span>
        <span style="font-size:0.6rem;opacity:0.7">~1 day</span>
      </button>
      <button class="rating-btn rating-good" data-rating="2">
        <span>🙂</span>
        <span>Good</span>
        <span style="font-size:0.6rem;opacity:0.7">a few days</span>
      </button>
      <button class="rating-btn rating-easy" data-rating="3">
        <span>😄</span>
        <span>Easy</span>
        <span style="font-size:0.6rem;opacity:0.7">longer</span>
      </button>
    </div>
  `
}

export function initFlashcardInteraction(onRate, card) {
  const scene = document.getElementById('flashcard-scene')
  const inner = document.getElementById('flashcard-inner')
  const ratingBtns = document.getElementById('rating-buttons')
  if (!scene || !inner) return

  let flipped = false

  function flip() {
    if (flipped) return
    flipped = true
    inner.classList.add('flipped')
    ratingBtns.style.display = 'grid'
    ratingBtns.style.animation = 'none'
    ratingBtns.offsetHeight // reflow
    ratingBtns.style.opacity = '0'
    ratingBtns.style.transition = 'opacity 300ms'
    ratingBtns.offsetHeight
    ratingBtns.style.opacity = '1'
  }

  // TTS buttons — stop propagation so they don't flip the card
  scene.querySelectorAll('.tts-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      speak(btn.dataset.speak)
    })
  })

  // Notebook button on back face
  const notebookBtn = scene.querySelector('.notebook-fc-btn')
  if (notebookBtn && card) {
    notebookBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      if (isInNotebook(card.front)) {
        removeFromNotebook(card.front)
        notebookBtn.textContent = '+ Notebook'
      } else {
        saveToNotebook({ word: card.front, definition: card.back, thai: card.thai, example: card.example, phonetic: card.phonetic, source: 'flashcard' })
        notebookBtn.textContent = '✓ Saved'
      }
    })
  }

  scene.addEventListener('click', flip)
  scene.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip() }
  })

  // Keyboard shortcuts for ratings (after flip) — defined first so mouse handler can remove it
  let keydownHandler = null
  keydownHandler = function(e) {
    if (!flipped) return
    const map = { '1': 0, '2': 1, '3': 2, '4': 3 }
    if (map[e.key] !== undefined) {
      document.removeEventListener('keydown', keydownHandler)
      keydownHandler = null
      onRate(map[e.key])
    }
  }
  document.addEventListener('keydown', keydownHandler)

  ratingBtns.querySelectorAll('.rating-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      if (keydownHandler) {
        document.removeEventListener('keydown', keydownHandler)
        keydownHandler = null
      }
      onRate(parseInt(btn.dataset.rating))
    })
  })
}
