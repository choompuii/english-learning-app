import { ttsButton, attachTtsListeners } from './tts.js'
import { esc } from './html.js'
import { saveToNotebook, isInNotebook, removeFromNotebook } from '../store.js'

// Opens a modal overlay showing full word detail.
// `w` matches the skills vocabulary word shape: word, pos, ipa, emoji, thai, def, example, synonym, antonym
// Also accepts notebook entries (definition → def, phonetic → ipa).
export function openWordModal(w) {
  document.getElementById('word-modal-overlay')?.remove()

  const word = w.word
  const def = w.def || w.definition || ''
  const ipa = w.ipa || w.phonetic || ''
  const saved = isInNotebook(word)

  const overlay = document.createElement('div')
  overlay.id = 'word-modal-overlay'
  overlay.className = 'word-modal-overlay'

  overlay.innerHTML = `
    <div class="word-modal" role="dialog" aria-modal="true">
      <button class="word-modal-close" id="wm-close" aria-label="ปิด">✕</button>

      <div class="word-modal-header">
        <div class="word-modal-emoji">${esc(w.emoji || '📖')}</div>
        <div>
          <div class="word-modal-word">
            ${esc(word)}
            ${ttsButton(word)}
          </div>
          ${ipa ? `<div class="word-modal-ipa">${esc(ipa)}</div>` : ''}
        </div>
      </div>

      <div class="word-modal-body">
        ${w.pos ? `
        <div class="word-modal-row">
          <span class="word-modal-label">Part of Speech</span>
          <span class="chip" style="background:var(--surface-2);color:var(--text-muted)">${esc(w.pos)}</span>
        </div>` : ''}

        ${w.thai ? `
        <div class="word-modal-row">
          <span class="word-modal-label">ความหมาย</span>
          <span class="word-modal-value" style="font-weight:600;color:var(--accent)">${esc(w.thai)}</span>
        </div>` : ''}

        ${def ? `
        <div class="word-modal-row">
          <span class="word-modal-label">Meaning</span>
          <span class="word-modal-value">${esc(def)}</span>
        </div>` : ''}

        ${w.example ? `
        <div class="word-modal-row">
          <span class="word-modal-label">Example</span>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span class="word-modal-example">"${esc(w.example)}"</span>
            ${ttsButton(w.example)}
          </div>
        </div>` : ''}

        ${w.synonym ? `
        <div class="word-modal-row">
          <span class="word-modal-label">Synonym</span>
          <span class="chip" style="background:var(--accent-soft);color:var(--accent)">≈ ${esc(w.synonym)}</span>
        </div>` : ''}

        ${w.antonym ? `
        <div class="word-modal-row">
          <span class="word-modal-label">Antonym</span>
          <span class="chip" style="background:var(--danger-soft);color:var(--danger)">↔ ${esc(w.antonym)}</span>
        </div>` : ''}
      </div>

      <div class="word-modal-footer">
        <button class="btn ${saved ? 'btn-secondary' : 'btn-primary'}" id="wm-fav">
          ${saved ? '✅ บันทึกแล้ว' : '🔖 บันทึกคำศัพท์'}
        </button>
      </div>
    </div>
  `

  document.body.appendChild(overlay)
  attachTtsListeners(overlay)

  const close = () => overlay.remove()
  overlay.querySelector('#wm-close').addEventListener('click', close)
  overlay.addEventListener('click', e => { if (e.target === overlay) close() })

  const escHandler = e => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escHandler) } }
  document.addEventListener('keydown', escHandler)

  const favBtn = overlay.querySelector('#wm-fav')
  favBtn.addEventListener('click', () => {
    if (isInNotebook(word)) {
      removeFromNotebook(word)
      favBtn.className = 'btn btn-primary'
      favBtn.textContent = '🔖 บันทึกคำศัพท์'
    } else {
      saveToNotebook({ word, definition: def, thai: w.thai || '', example: w.example || '', phonetic: ipa, source: 'vocabulary' })
      favBtn.className = 'btn btn-secondary'
      favBtn.textContent = '✅ บันทึกแล้ว'
    }
  })
}
