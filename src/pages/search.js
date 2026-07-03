import { decks } from '../data/vocabulary.js'
import { isInNotebook, saveToNotebook, removeFromNotebook } from '../store.js'
import { speak } from '../utils/tts.js'

export function renderSearch() {
  const main = document.getElementById('main-content')

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Search Vocabulary</h1>
        <p>ค้นหาคำศัพท์จากทุก deck</p>
      </div>

      <div style="position:relative;margin-bottom:var(--sp-6)">
        <svg style="position:absolute;left:var(--sp-4);top:50%;transform:translateY(-50%);width:18px;height:18px;stroke:var(--text-muted);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          id="search-input"
          type="text"
          placeholder="พิมพ์คำภาษาอังกฤษหรือไทย…"
          autocomplete="off"
          style="width:100%;padding:var(--sp-4) var(--sp-4) var(--sp-4) 2.75rem;border:2px solid var(--border);border-radius:var(--r-lg);font-size:var(--text-lg);font-family:var(--font-body);color:var(--text);background:var(--surface);outline:none;transition:border-color var(--duration)"
        />
      </div>

      <div id="search-results"></div>
    </div>
  `

  const input = main.querySelector('#search-input')
  const results = main.querySelector('#search-results')

  input.addEventListener('focus', () => { input.style.borderColor = 'var(--accent)' })
  input.addEventListener('blur', () => { input.style.borderColor = 'var(--border)' })

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase()
    if (!q) { results.innerHTML = ''; return }
    renderResults(q, results)
  })

  input.focus()
}

function renderResults(q, container) {
  const hits = []
  for (const deck of decks) {
    for (const card of deck.cards) {
      const score = scoreCard(card, q)
      if (score > 0) hits.push({ card, deck, score })
    }
  }
  hits.sort((a, b) => b.score - a.score)

  if (!hits.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3>ไม่พบคำที่ค้นหา</h3>
        <p>ลองใช้คำอื่น หรือตรวจสอบการสะกด</p>
      </div>
    `
    return
  }

  container.innerHTML = `
    <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4)">${hits.length} คำที่พบ</div>
    <div style="display:flex;flex-direction:column;gap:var(--sp-3)">
      ${hits.map(({ card, deck }) => renderCard(card, deck)).join('')}
    </div>
  `

  container.querySelectorAll('.tts-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); speak(btn.dataset.speak) })
  })

  container.querySelectorAll('.notebook-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const word = btn.dataset.word
      if (isInNotebook(word)) {
        removeFromNotebook(word)
        btn.textContent = '+ Notebook'
        btn.classList.remove('btn-secondary')
        btn.classList.add('btn-ghost')
      } else {
        const card = findCard(word)
        if (card) saveToNotebook({ word: card.front, definition: card.back, thai: card.thai, example: card.example, phonetic: card.phonetic, source: 'search' })
        btn.textContent = '✓ Saved'
        btn.classList.remove('btn-ghost')
        btn.classList.add('btn-secondary')
      }
    })
  })
}

function findCard(word) {
  for (const deck of decks) {
    const card = deck.cards.find(c => c.front.toLowerCase() === word.toLowerCase())
    if (card) return card
  }
  return null
}

function scoreCard(card, q) {
  if (card.front.toLowerCase() === q) return 100
  if (card.front.toLowerCase().startsWith(q)) return 80
  if (card.front.toLowerCase().includes(q)) return 60
  if (card.thai && card.thai.toLowerCase().includes(q)) return 50
  if (card.back && card.back.toLowerCase().includes(q)) return 30
  if (card.example && card.example.toLowerCase().includes(q)) return 20
  return 0
}

function renderCard(card, deck) {
  const saved = isInNotebook(card.front)
  return `
    <div class="card" style="display:flex;gap:var(--sp-4);align-items:flex-start">
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:var(--sp-2);flex-wrap:wrap;margin-bottom:var(--sp-2)">
          <span style="font-size:var(--text-xl);font-weight:700;color:var(--text)">${card.front}</span>
          <button class="tts-btn" data-speak="${card.front.replace(/"/g, '&quot;')}" title="ฟังเสียง">🔊</button>
          ${card.phonetic ? `<span style="font-family:var(--font-mono);font-size:var(--text-sm);color:var(--text-muted)">${card.phonetic}</span>` : ''}
          <span class="level-badge level-${deck.level}">${deck.level}</span>
        </div>
        <div style="color:var(--text);margin-bottom:var(--sp-1)">${card.back}</div>
        ${card.thai ? `<div style="color:var(--accent);font-size:var(--text-sm);font-weight:500">${card.thai}</div>` : ''}
        ${card.example ? `<div style="font-family:var(--font-mono);font-size:var(--text-sm);color:var(--text-muted);font-style:italic;margin-top:var(--sp-2)">"${card.example}"</div>` : ''}
        <div style="margin-top:var(--sp-2);font-size:var(--text-xs);color:var(--text-faint)">${deck.icon} ${deck.title}</div>
      </div>
      <button class="btn btn-sm ${saved ? 'btn-secondary' : 'btn-ghost'} notebook-btn" data-word="${card.front.replace(/"/g, '&quot;')}" style="white-space:nowrap;flex-shrink:0">
        ${saved ? '✓ Saved' : '+ Notebook'}
      </button>
    </div>
  `
}
