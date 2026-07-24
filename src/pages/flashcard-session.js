import { getDeckById } from '../data/vocabulary.js'
import { getDueCards, updateFlashcard } from '../store.js'
import { createFlashcardHTML, initFlashcardInteraction } from '../components/flashcard.js'
import { speak } from '../utils/tts.js'

function normalise(s) {
  return String(s).toLowerCase().trim().replace(/[.,!?;:'"()]/g, '').replace(/\s+/g, ' ')
}

export function renderFlashcardSession({ id, forceAll = false, mode = 'flip' }) {
  const main = document.getElementById('main-content')
  const deck = getDeckById(id)

  if (!deck) {
    main.innerHTML = `<div class="page"><p>Deck not found.</p><a href="#/flashcards">← Back</a></div>`
    return
  }

  const allCardIds = deck.cards.map(c => c.id)
  const { due, newCards } = getDueCards(id, allCardIds)
  const sessionCardIds = forceAll
    ? allCardIds
    : [...due, ...newCards.slice(0, Math.max(0, 10 - due.length))]

  if (sessionCardIds.length === 0) {
    main.innerHTML = `
      <div class="page" style="text-align:center">
        <div style="font-size:4rem;margin-bottom:var(--sp-6)">🎉</div>
        <h2>All caught up!</h2>
        <p style="color:var(--text-muted);margin-bottom:var(--sp-8)">No cards due today for this deck. Come back tomorrow!</p>
        <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
          <button class="btn btn-secondary" id="study-again-btn">Study Again</button>
          <a href="#/flashcards" class="btn btn-primary">Back to Decks</a>
        </div>
      </div>
    `
    main.querySelector('#study-again-btn').addEventListener('click', () => {
      renderFlashcardSession({ id, forceAll: true, mode })
    })
    return
  }

  const queue = sessionCardIds.map(cid => deck.cards.find(c => c.id === cid)).filter(Boolean)
  let currentIndex = 0
  const results = []
  let cleanupInteraction = null
  let currentMode = mode

  function modeBadge(m) {
    return `
      <div style="display:flex;gap:var(--sp-2);margin-bottom:var(--sp-4)">
        <button class="btn btn-sm ${m === 'flip' ? 'btn-primary' : 'btn-ghost'}" id="mode-flip">🔄 Flip</button>
        <button class="btn btn-sm ${m === 'type' ? 'btn-primary' : 'btn-ghost'}" id="mode-type">⌨️ Type</button>
      </div>
    `
  }

  function wireModeBtns() {
    document.getElementById('mode-flip')?.addEventListener('click', () => {
      if (cleanupInteraction) { cleanupInteraction(); cleanupInteraction = null }
      currentMode = 'flip'
      showCard()
    })
    document.getElementById('mode-type')?.addEventListener('click', () => {
      if (cleanupInteraction) { cleanupInteraction(); cleanupInteraction = null }
      currentMode = 'type'
      showCard()
    })
  }

  function showCard() {
    if (cleanupInteraction) { cleanupInteraction(); cleanupInteraction = null }

    if (currentIndex >= queue.length) {
      showSummary()
      return
    }

    const card = queue[currentIndex]

    if (currentMode === 'type') {
      showTypeCard(card)
    } else {
      showFlipCard(card)
    }
  }

  function showFlipCard(card) {
    main.innerHTML = `
      <div class="page">
        <div class="breadcrumb">
          <a href="#/flashcards">Flashcards</a>
          <span class="breadcrumb-sep">›</span>
          <span>${deck.title}</span>
        </div>
        ${modeBadge('flip')}
        <div id="card-container">
          ${createFlashcardHTML(card, currentIndex, queue.length)}
        </div>
        <p style="text-align:center;font-size:var(--text-xs);color:var(--text-faint);margin-top:var(--sp-4)">
          Press 1–4 to rate after flipping
        </p>
      </div>
    `

    wireModeBtns()
    cleanupInteraction = initFlashcardInteraction((rating) => {
      updateFlashcard(id, card.id, rating)
      results.push({ card, rating })
      currentIndex++
      showCard()
    }, card)
  }

  function showTypeCard(card) {
    main.innerHTML = `
      <div class="page" style="max-width:600px">
        <div class="breadcrumb">
          <a href="#/flashcards">Flashcards</a>
          <span class="breadcrumb-sep">›</span>
          <span>${deck.title}</span>
        </div>
        ${modeBadge('type')}

        <div class="session-header">
          <div class="session-counter">Card ${currentIndex + 1} of ${queue.length}</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${Math.round((currentIndex / queue.length) * 100)}%"></div>
          </div>
        </div>

        <div class="card" style="margin:var(--sp-5) 0;text-align:center">
          <p style="font-size:var(--text-sm);color:var(--text-muted);margin:0 0 var(--sp-2)">ความหมาย</p>
          <p style="font-size:var(--text-lg);font-weight:700;color:var(--accent);margin:0 0 var(--sp-2)">${card.thai}</p>
          ${card.back ? `<p style="font-size:var(--text-sm);color:var(--text-muted);margin:0">${card.back}</p>` : ''}
          ${card.example ? `<p style="font-size:var(--text-sm);color:var(--text-faint);font-style:italic;margin:var(--sp-3) 0 0">"${card.example.replace(new RegExp(card.front, 'gi'), '_____')}"</p>` : ''}
        </div>

        <div style="display:flex;gap:var(--sp-2);margin-bottom:var(--sp-3)">
          <input id="type-input" type="text" placeholder="พิมพ์คำภาษาอังกฤษ…"
            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
            style="flex:1;padding:var(--sp-3) var(--sp-4);border:2px solid var(--border);border-radius:var(--r-md);font-size:var(--text-lg);font-family:var(--font-mono);background:var(--surface);color:var(--text)">
          <button class="btn btn-primary" id="type-submit">ตรวจ →</button>
        </div>
        <p style="font-size:var(--text-xs);color:var(--text-faint)">กด Enter เพื่อตรวจคำตอบ</p>

        <div id="type-feedback" style="margin-top:var(--sp-4);min-height:60px"></div>
      </div>
    `

    wireModeBtns()

    const input = main.querySelector('#type-input')
    input.focus()

    function check() {
      const typed = input.value.trim()
      if (!typed) return

      const correct = normalise(typed) === normalise(card.front)
      const rating = correct ? 3 : 1

      input.disabled = true
      main.querySelector('#type-submit').disabled = true
      input.style.borderColor = correct ? 'var(--accent)' : 'var(--danger)'

      main.querySelector('#type-feedback').innerHTML = `
        <div style="padding:var(--sp-3) var(--sp-4);border-radius:var(--r-md);background:${correct ? 'var(--accent-soft)' : 'var(--danger-soft)'};border-left:3px solid ${correct ? 'var(--accent)' : 'var(--danger)'}">
          <div style="font-weight:700;color:${correct ? 'var(--accent)' : 'var(--danger)'};margin-bottom:4px;display:flex;align-items:center;gap:8px">
            ${correct ? '✓ ถูกต้อง!' : `✗ คำตอบที่ถูก:`}
            <span style="font-family:var(--font-mono);font-size:var(--text-lg)">${card.front}</span>
            <button class="tts-btn-inline" data-speak="${card.front.replace(/"/g,'&quot;')}" title="ฟังเสียง" style="background:none;border:none;cursor:pointer;font-size:1rem">🔊</button>
          </div>
          ${card.phonetic ? `<div style="font-size:var(--text-sm);color:var(--text-muted)">${card.phonetic}</div>` : ''}
        </div>
        <button class="btn btn-primary" id="type-next" style="margin-top:var(--sp-4);width:100%">
          ${currentIndex + 1 < queue.length ? 'ถัดไป →' : 'ดูผลลัพธ์ →'}
        </button>
      `

      main.querySelector('.tts-btn-inline')?.addEventListener('click', (e) => {
        e.stopPropagation()
        speak(e.currentTarget.dataset.speak)
      })

      updateFlashcard(id, card.id, rating)
      results.push({ card, rating })

      main.querySelector('#type-next').addEventListener('click', () => {
        currentIndex++
        showCard()
      })
    }

    main.querySelector('#type-submit').addEventListener('click', check)
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check() })
  }

  function showSummary() {
    const good = results.filter(r => r.rating >= 2).length
    const again = results.filter(r => r.rating < 2).length
    const pct = results.length > 0 ? Math.round((good / results.length) * 100) : 0

    main.innerHTML = `
      <div class="page" style="text-align:center">
        <div style="font-size:4rem;margin-bottom:var(--sp-4)">${pct >= 70 ? '🌟' : '💪'}</div>
        <h2>Session complete!</h2>
        <p style="color:var(--text-muted);margin-bottom:var(--sp-8)">${queue.length} cards reviewed</p>

        <div style="display:flex;gap:var(--sp-4);justify-content:center;margin-bottom:var(--sp-8);flex-wrap:wrap">
          <div class="card" style="min-width:120px;text-align:center">
            <div style="font-size:2rem;color:var(--accent);font-weight:700">${good}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">Good / Easy</div>
          </div>
          <div class="card" style="min-width:120px;text-align:center">
            <div style="font-size:2rem;color:var(--danger);font-weight:700">${again}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">Again / Hard</div>
          </div>
          <div class="card" style="min-width:120px;text-align:center">
            <div style="font-size:2rem;color:var(--accent);font-weight:700">${pct}%</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">Score</div>
          </div>
        </div>

        <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
          <button class="btn btn-primary" id="study-again-btn">Study Again</button>
          <a href="#/flashcards" class="btn btn-secondary">All Decks</a>
        </div>
      </div>
    `
    main.querySelector('#study-again-btn').addEventListener('click', () => renderFlashcardSession({ id, forceAll: true, mode: currentMode }))
  }

  showCard()
}
