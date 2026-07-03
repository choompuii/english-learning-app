import { decks } from '../data/vocabulary.js'
import { getProgress, getDeckProgress } from '../store.js'

export function renderFlashcards() {
  const main = document.getElementById('main-content')
  const state = getProgress()

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Flashcards</h1>
        <p>Vocabulary decks with spaced repetition</p>
      </div>
      <div style="margin-bottom:var(--sp-5)">
        <a href="#/dictation" class="btn btn-secondary">✍️ Dictation exercise</a>
      </div>
      <div class="deck-grid">
        ${decks.map(deck => deckCard(deck, state)).join('')}
      </div>
    </div>
  `

  main.querySelectorAll('.deck-card').forEach(card => {
    card.addEventListener('click', () => window.location.hash = `/flashcards/${card.dataset.id}`)
  })
}

function deckCard(deck, state) {
  const progress = getDeckProgress(deck.id, deck.cards.length)
  const pct = deck.cards.length > 0 ? Math.round((progress.studied / deck.cards.length) * 100) : 0

  return `
    <div class="card card-hover deck-card" data-id="${deck.id}">
      <div class="deck-card-icon">${deck.icon}</div>
      <div class="lesson-card-meta">
        <span class="level-badge level-${deck.level}">${deck.level}</span>
        ${deck.lessonId ? '' : '<span class="topic-badge">Standalone</span>'}
      </div>
      <h3>${deck.title}</h3>
      <div class="deck-card-stats">
        <span class="deck-stat">${deck.cards.length} cards</span>
        <span class="deck-stat">${progress.studied} studied</span>
        ${progress.due > 0 ? `<span class="deck-due-badge">⚡ ${progress.due} due</span>` : ''}
      </div>
      <div class="progress-bar" style="margin-top:var(--sp-4)">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
    </div>
  `
}
