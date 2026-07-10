import { getDeckById } from '../data/vocabulary.js'
import { getDueCards, updateFlashcard } from '../store.js'
import { createFlashcardHTML, initFlashcardInteraction } from '../components/flashcard.js'

export function renderFlashcardSession({ id, forceAll = false }) {
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
    document.getElementById('study-again-btn').addEventListener('click', () => {
      renderFlashcardSession({ id, forceAll: true })
    })
    return
  }

  const queue = sessionCardIds.map(cid => deck.cards.find(c => c.id === cid)).filter(Boolean)
  let currentIndex = 0
  const results = []
  let cleanupInteraction = null

  function showCard() {
    if (cleanupInteraction) { cleanupInteraction(); cleanupInteraction = null }

    if (currentIndex >= queue.length) {
      showSummary()
      return
    }

    const card = queue[currentIndex]
    main.innerHTML = `
      <div class="page">
        <div class="breadcrumb">
          <a href="#/flashcards">Flashcards</a>
          <span class="breadcrumb-sep">›</span>
          <span>${deck.title}</span>
        </div>
        <div id="card-container">
          ${createFlashcardHTML(card, currentIndex, queue.length)}
        </div>
        <p style="text-align:center;font-size:var(--text-xs);color:var(--text-faint);margin-top:var(--sp-4)">
          Press 1–4 to rate after flipping
        </p>
      </div>
    `

    cleanupInteraction = initFlashcardInteraction((rating) => {
      updateFlashcard(id, card.id, rating)
      results.push({ card, rating })
      currentIndex++
      showCard()
    }, card)
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
    main.querySelector('#study-again-btn').addEventListener('click', () => renderFlashcardSession({ id, forceAll: true }))
  }

  showCard()
}
