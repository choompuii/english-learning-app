import { decks } from '../data/vocabulary.js'
import { getProgress, getDeckProgress } from '../store.js'

// CEFR levels ordered from lowest to highest
const LEVEL_ORDER = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

// Remembered across visits within a session
let activeLevel = 'all'

export function renderFlashcards() {
  const main = document.getElementById('main-content')
  const state = getProgress()

  // Sort decks by level, lowest to highest (stable within a level)
  const sorted = [...decks].sort(
    (a, b) => LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level)
  )
  // Only offer levels that actually have decks
  const levels = LEVEL_ORDER.filter(level => sorted.some(deck => deck.level === level))

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Flashcards</h1>
        <p>Vocabulary decks with spaced repetition</p>
      </div>
      <div style="margin-bottom:var(--sp-5)">
        <a href="#/dictation" class="btn btn-secondary">✍️ Dictation exercise</a>
      </div>
      <div class="level-filter">
        ${['all', ...levels].map(filterPill).join('')}
      </div>
      <div class="deck-grid" id="deck-grid"></div>
    </div>
  `

  const grid = main.querySelector('#deck-grid')

  function paint() {
    const visible = activeLevel === 'all'
      ? sorted
      : sorted.filter(deck => deck.level === activeLevel)

    grid.innerHTML = visible.map(deck => deckCard(deck, state)).join('')
    grid.querySelectorAll('.deck-card').forEach(card => {
      card.addEventListener('click', () => window.location.hash = `/flashcards/${card.dataset.id}`)
    })
    main.querySelectorAll('.level-filter-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.level === activeLevel)
    })
  }

  main.querySelectorAll('.level-filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      activeLevel = pill.dataset.level
      paint()
    })
  })

  paint()
}

function filterPill(level) {
  const label = level === 'all' ? 'All' : level
  return `<button class="level-filter-pill" data-level="${level}">${label}</button>`
}

function deckCard(deck, state) {
  const progress = getDeckProgress(deck.id, deck.cards.length)
  const pct = deck.cards.length > 0 ? Math.round((progress.studied / deck.cards.length) * 100) : 0

  return `
    <div class="card card-hover deck-card" data-id="${deck.id}" style="padding:var(--sp-4)">
      <div class="deck-card-icon">${deck.icon}</div>
      <div class="lesson-card-meta" style="margin-bottom:var(--sp-2)">
        <span class="level-badge level-${deck.level}">${deck.level}</span>
        ${deck.lessonId ? '' : '<span class="topic-badge">Standalone</span>'}
      </div>
      <h3>${deck.title}</h3>
      <div class="deck-card-stats">
        <span class="deck-stat">${deck.cards.length} cards · ${progress.studied} studied</span>
        ${progress.due > 0 ? `<span class="deck-due-badge">⚡ ${progress.due} due</span>` : ''}
      </div>
      <div class="progress-bar" style="margin-top:var(--sp-3);height:4px">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
    </div>
  `
}
