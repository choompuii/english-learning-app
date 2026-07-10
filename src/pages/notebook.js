import { getNotebook, removeFromNotebook } from '../store.js'
import { speak } from '../utils/tts.js'
import { esc, escAttr } from '../utils/html.js'

export function renderNotebook() {
  const main = document.getElementById('main-content')
  const notebook = getNotebook()

  if (!notebook.length) {
    main.innerHTML = `
      <div class="page">
        <div class="page-header">
          <h1>Vocabulary Notebook</h1>
          <p>คำศัพท์ที่คุณบันทึกไว้</p>
        </div>
        <div class="empty-state">
          <div class="empty-state-icon">📓</div>
          <h3>Notebook ยังว่างอยู่</h3>
          <p>กด <strong>+ Notebook</strong> ในหน้า Flashcard หรือ Search เพื่อบันทึกคำ</p>
          <div style="display:flex;gap:var(--sp-3);justify-content:center;margin-top:var(--sp-6);flex-wrap:wrap">
            <a href="#/flashcards" class="btn btn-primary">ไปที่ Flashcards</a>
            <a href="#/search" class="btn btn-secondary">ค้นหาคำศัพท์</a>
          </div>
        </div>
      </div>
    `
    return
  }

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Vocabulary Notebook</h1>
        <p>${notebook.length} คำที่บันทึกไว้</p>
      </div>

      <div style="display:flex;gap:var(--sp-3);margin-bottom:var(--sp-6)">
        <a href="#/search" class="btn btn-secondary">+ เพิ่มคำใหม่</a>
      </div>

      <div id="notebook-list" style="display:flex;flex-direction:column;gap:var(--sp-3)">
        ${notebook.map(entry => renderEntry(entry)).join('')}
      </div>
    </div>
  `

  main.querySelectorAll('.tts-btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); speak(btn.dataset.speak) })
  })

  main.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const word = btn.dataset.word
      removeFromNotebook(word)
      const card = btn.closest('[data-entry]')
      if (card) {
        card.style.transition = 'opacity 0.2s, transform 0.2s'
        card.style.opacity = '0'
        card.style.transform = 'translateX(8px)'
        setTimeout(() => {
          card.remove()
          const remaining = main.querySelectorAll('[data-entry]').length
          const countEl = main.querySelector('.page-header p')
          if (countEl) countEl.textContent = `${remaining} คำที่บันทึกไว้`
        }, 220)
      }
    })
  })
}

function renderEntry(entry) {
  const word = entry.word || ''
  const dateObj = entry.savedAt ? new Date(entry.savedAt) : new Date()
  const date = isNaN(dateObj.getTime()) ? '—' : dateObj.toLocaleDateString('th-TH', { day: 'numeric', month: 'short' })
  return `
    <div class="card" data-entry="${escAttr(word)}" style="display:flex;gap:var(--sp-4);align-items:flex-start">
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:var(--sp-2);flex-wrap:wrap;margin-bottom:var(--sp-2)">
          <span style="font-size:var(--text-xl);font-weight:700;color:var(--text)">${esc(word)}</span>
          <button class="tts-btn" data-speak="${escAttr(word)}" title="ฟังเสียง">🔊</button>
          ${entry.phonetic ? `<span style="font-family:var(--font-mono);font-size:var(--text-sm);color:var(--text-muted)">${esc(entry.phonetic)}</span>` : ''}
        </div>
        <div style="color:var(--text);margin-bottom:var(--sp-1)">${esc(entry.definition || '')}</div>
        ${entry.thai ? `<div style="color:var(--accent);font-size:var(--text-sm);font-weight:500">${esc(entry.thai)}</div>` : ''}
        ${entry.example ? `<div style="font-family:var(--font-mono);font-size:var(--text-sm);color:var(--text-muted);font-style:italic;margin-top:var(--sp-2)">"${esc(entry.example)}"</div>` : ''}
        <div style="margin-top:var(--sp-2);font-size:var(--text-xs);color:var(--text-faint)">บันทึกเมื่อ ${date}</div>
      </div>
      <button class="btn btn-sm btn-ghost remove-btn" data-word="${escAttr(word)}" title="ลบออก" style="flex-shrink:0;color:var(--danger)">✕</button>
    </div>
  `
}
