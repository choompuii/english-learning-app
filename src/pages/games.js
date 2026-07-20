import { decks } from '../data/vocabulary.js'
import { navigate } from '../router.js'
import { speak } from '../utils/tts.js'
import { addBonusXP, recordGameResult, getGameBest } from '../store.js'
import { floatXP, confetti, showNewBadges } from '../utils/fx.js'

// ── Shared helpers ────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function normalise(s) {
  return s.toLowerCase().trim().replace(/[.,!?;:()'-]/g, '').replace(/\s+/g, ' ')
}

const XP_PER_CORRECT = 10

const GAMES = {
  hangman: {
    id: 'hangman', title: 'Hangman', thai: 'เดาตัวอักษร', icon: '🎯',
    desc: 'เห็นความหมายไทย → เดาตัวอักษรทีละตัว ก่อนพลาดครบ 6 ครั้ง'
  },
  match: {
    id: 'match', title: 'Word Match', thai: 'จับคู่คำ', icon: '🔗',
    desc: 'จับคู่คำอังกฤษกับความหมายภาษาไทยให้ครบทุกคู่'
  },
  scramble: {
    id: 'scramble', title: 'Word Scramble', thai: 'เรียงตัวอักษร', icon: '🔤',
    desc: 'ตัวอักษรสลับที่ → เรียงกลับเป็นคำที่ถูกต้อง'
  },
}

// ── Games hub ─────────────────────────────────────────────────────────
export function renderGamesHub() {
  const main = document.getElementById('main-content')
  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Word Games</h1>
        <p>เล่นสนุก จำคำศัพท์ได้แม่นขึ้น — ได้ XP ทุกคำที่ถูก</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:var(--sp-4)">
        ${Object.values(GAMES).map(g => `
          <button class="game-hub-card" data-game="${g.id}"
            style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-6);text-align:left;cursor:pointer;transition:all 200ms var(--ease)"
            onmouseover="this.style.borderColor='var(--accent)';this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shadow-md)'"
            onmouseout="this.style.borderColor='var(--border)';this.style.transform='none';this.style.boxShadow='none'">
            <div style="font-size:2.4rem;margin-bottom:var(--sp-3)">${g.icon}</div>
            <div style="font-weight:700;font-size:var(--text-lg);margin-bottom:2px">${g.title}</div>
            <div style="font-size:var(--text-sm);color:var(--accent);font-weight:600;margin-bottom:var(--sp-3)">${g.thai}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted);line-height:1.5">${g.desc}</div>
          </button>
        `).join('')}
      </div>
    </div>
  `
  main.querySelectorAll('.game-hub-card').forEach(btn => {
    btn.addEventListener('click', () => navigate('/games/' + btn.dataset.game))
  })
}

// ── Deck picker (shared by all games) ─────────────────────────────────
export function renderGame({ game }) {
  const conf = GAMES[game]
  const main = document.getElementById('main-content')
  if (!conf) { navigate('/games'); return }

  const levelGroups = {}
  for (const deck of decks) {
    if (!levelGroups[deck.level]) levelGroups[deck.level] = []
    levelGroups[deck.level].push(deck)
  }
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].filter(l => levelGroups[l])

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <a href="#/games" style="font-size:var(--text-sm);color:var(--text-muted);text-decoration:none">← Word Games</a>
        <h1>${conf.icon} ${conf.title}</h1>
        <p>${conf.desc}</p>
      </div>
      <div id="game-deck-select">
        <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-5)">เลือก deck</div>
        ${levels.map(lvl => `
          <div style="margin-bottom:var(--sp-5)">
            <div style="display:flex;align-items:center;gap:var(--sp-2);margin-bottom:var(--sp-3)">
              <span class="level-badge level-${lvl}">${lvl}</span>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:var(--sp-3)">
              ${levelGroups[lvl].map(deck => {
                const best = getGameBest(`${game}:${deck.id}`)
                return `
                <button class="deck-card" data-deck-id="${deck.id}"
                  style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);text-align:left;cursor:pointer;transition:all 200ms var(--ease)"
                  onmouseover="this.style.borderColor='var(--accent)';this.style.background='var(--accent-soft)'"
                  onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--surface)'">
                  <div style="font-size:1.4rem;margin-bottom:var(--sp-2)">${deck.icon || '📚'}</div>
                  <div style="font-weight:600;font-size:var(--text-sm);margin-bottom:4px">${deck.title}</div>
                  <div style="font-size:var(--text-xs);color:var(--text-muted)">${deck.cards.length} cards</div>
                  ${best ? `<div style="font-size:var(--text-xs);color:var(--accent);font-weight:700;margin-top:var(--sp-2)">🏆 Best ${best.bestScore}/${best.bestTotal}</div>` : ''}
                </button>
              `}).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div id="game-session" style="display:none"></div>
    </div>
  `

  const selectEl = main.querySelector('#game-deck-select')
  const sessionEl = main.querySelector('#game-session')

  main.querySelectorAll('.deck-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const deck = decks.find(d => d.id === btn.dataset.deckId)
      if (!deck) return
      selectEl.style.display = 'none'
      sessionEl.style.display = ''
      const back = () => { sessionEl.style.display = 'none'; sessionEl.innerHTML = ''; selectEl.style.display = '' }
      if (game === 'hangman') playHangman(sessionEl, deck, back)
      else if (game === 'match') playMatch(sessionEl, deck, back)
      else playScramble(sessionEl, deck, back)
    })
  })
}

// ── Summary card (shared) ─────────────────────────────────────────────
function showSummary(el, { game, deck, correct, total, onRetry, onBack }) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  const result = recordGameResult(`${game}:${deck.id}`, correct, total)
  if (pct >= 80) confetti(60)
  el.innerHTML = `
    <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-xl);padding:var(--sp-8);text-align:center;animation:pop-in 0.3s ease">
      <div style="font-size:3rem;margin-bottom:var(--sp-3)">${pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '💪'}</div>
      <h2 style="margin-bottom:var(--sp-2)">Game Complete!</h2>
      <div style="font-size:var(--text-2xl);font-weight:800;color:var(--accent);margin-bottom:var(--sp-2)">${correct}/${total} ถูก</div>
      <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-2)">XP ที่ได้รับ: +${correct * XP_PER_CORRECT}</div>
      ${result.isNewRecord ? `<div style="display:inline-block;background:var(--gold-soft);border:1px solid var(--gold);color:var(--gold-strong);font-weight:700;font-size:var(--text-sm);border-radius:var(--r-lg);padding:var(--sp-1) var(--sp-4);margin-bottom:var(--sp-2)">🎉 สถิติใหม่!</div>` : ''}
      <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-6)">🏆 คะแนนสูงสุด: ${result.bestScore}/${result.bestTotal}</div>
      <div style="display:flex;gap:var(--sp-3);justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" id="game-retry-btn">↺ เล่นอีกครั้ง</button>
        <button class="btn btn-ghost" id="game-back-btn">← เลือก Deck อื่น</button>
      </div>
    </div>
  `
  if (result.newBadges?.length) setTimeout(() => showNewBadges(result.newBadges), 500)
  el.querySelector('#game-retry-btn').addEventListener('click', onRetry)
  el.querySelector('#game-back-btn').addEventListener('click', onBack)
}

// ── Game 1: Hangman ───────────────────────────────────────────────────
const HANGMAN_STAGES = ['😀', '🙂', '😐', '😕', '😟', '😨', '💀']
const MAX_WRONG = 6

function playHangman(el, deck, onBack) {
  // Prefer single alphabetic words for a clean guessing experience.
  const pool = deck.cards.filter(c => /^[a-zA-Z]+$/.test(c.front.trim()))
  const usable = pool.length >= 4 ? pool : deck.cards
  const rounds = shuffle(usable).slice(0, Math.min(8, usable.length))
  let idx = 0, correct = 0

  function renderRound() {
    if (idx >= rounds.length) {
      showSummary(el, { game: 'hangman', deck, correct, total: rounds.length,
        onRetry: () => playHangman(el, deck, onBack), onBack })
      return
    }
    const card = rounds[idx]
    const word = card.front.trim()
    const guessed = new Set()
    let wrong = 0
    let done = false

    function letters() {
      return word.split('').map(ch => {
        if (!/[a-zA-Z]/.test(ch)) return `<span style="width:1.4ch;text-align:center">${ch}</span>`
        const shown = guessed.has(ch.toLowerCase())
        return `<span style="width:1.6ch;text-align:center;border-bottom:3px solid var(--border);font-weight:800;text-transform:uppercase;color:${shown ? 'var(--text)' : 'transparent'}">${shown ? ch : '_'}</span>`
      }).join('')
    }

    function draw() {
      el.innerHTML = `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-6);animation:pop-in 0.2s ease">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-4);flex-wrap:wrap;gap:var(--sp-3)">
            <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted)">${deck.icon || '📚'} ${deck.title} — ${idx + 1}/${rounds.length}</div>
            <div style="background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-full);padding:var(--sp-1) var(--sp-4);font-size:var(--text-sm);font-weight:700;color:var(--accent)">${correct} ✓</div>
          </div>
          <div style="text-align:center;margin-bottom:var(--sp-5)">
            <div style="font-size:3rem;margin-bottom:var(--sp-2)">${HANGMAN_STAGES[wrong]}</div>
            <div style="font-size:var(--text-2xl);font-weight:800;margin-bottom:var(--sp-1)">${card.thai}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">${card.back || ''}</div>
          </div>
          <div id="hm-word" style="display:flex;justify-content:center;gap:6px;font-size:var(--text-2xl);margin-bottom:var(--sp-4);flex-wrap:wrap">${letters()}</div>
          <div style="display:flex;justify-content:center;gap:6px;margin-bottom:var(--sp-5)">
            ${Array.from({ length: MAX_WRONG }, (_, i) => `<span style="font-size:1.1rem">${i < wrong ? '💔' : '❤️'}</span>`).join('')}
          </div>
          <div id="hm-keyboard" style="display:grid;grid-template-columns:repeat(9,1fr);gap:6px;max-width:460px;margin:0 auto"></div>
          <div id="hm-feedback" style="margin-top:var(--sp-4)"></div>
        </div>
      `
      const kb = el.querySelector('#hm-keyboard')
      'abcdefghijklmnopqrstuvwxyz'.split('').forEach(ch => {
        const b = document.createElement('button')
        b.textContent = ch.toUpperCase()
        b.className = 'btn btn-ghost btn-sm'
        b.style.cssText = 'padding:var(--sp-2) 0;min-width:0;font-weight:700'
        if (guessed.has(ch)) {
          b.disabled = true
          b.style.opacity = '0.4'
          b.style.background = word.toLowerCase().includes(ch) ? 'var(--accent-soft)' : 'var(--danger-soft)'
        }
        b.addEventListener('click', () => guess(ch))
        kb.appendChild(b)
      })
    }

    function finish(win) {
      done = true
      guessed.add('__reveal__')
      // reveal all letters
      word.split('').forEach(ch => guessed.add(ch.toLowerCase()))
      if (win) { correct++; speak(word); const nb = addBonusXP(XP_PER_CORRECT); floatXP(XP_PER_CORRECT, el.querySelector('#hm-word')); if (nb?.length) setTimeout(() => showNewBadges(nb), 400) }
      draw()
      const fb = el.querySelector('#hm-feedback')
      fb.innerHTML = `
        <div style="background:${win ? 'var(--accent-soft)' : 'var(--danger-soft)'};border:1px solid ${win ? 'var(--accent-mid)' : 'var(--danger)'};border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);display:flex;align-items:center;justify-content:space-between;gap:var(--sp-3);flex-wrap:wrap;animation:pop-in 0.2s ease">
          <div><span style="font-weight:700;color:${win ? 'var(--accent)' : 'var(--danger)'}">${win ? '✓ ถูกต้อง!' : '✗ หมดโอกาส'}</span> <strong style="text-transform:uppercase;margin-left:var(--sp-2)">${word}</strong> <span style="color:var(--text-muted);font-size:var(--text-xs)">${card.phonetic || ''}</span></div>
          <button class="btn btn-primary btn-sm" id="hm-next">ถัดไป →</button>
        </div>
      `
      const next = el.querySelector('#hm-next')
      let advanced = false
      const enterTimer = setTimeout(() => document.addEventListener('keyup', onEnter), 400)
      function onEnter(e) { if (e.key === 'Enter') advance() }
      function advance() {
        if (advanced) return
        advanced = true
        clearTimeout(enterTimer)
        document.removeEventListener('keyup', onEnter)
        idx++; renderRound()
      }
      next.addEventListener('click', advance)
    }

    function guess(ch) {
      if (done || guessed.has(ch)) return
      guessed.add(ch)
      if (word.toLowerCase().includes(ch)) {
        const won = word.split('').every(c => !/[a-zA-Z]/.test(c) || guessed.has(c.toLowerCase()))
        if (won) return finish(true)
      } else {
        wrong++
        if (wrong >= MAX_WRONG) return finish(false)
      }
      draw()
    }

    draw()
  }

  renderRound()
}

// ── Game 2: Word Match ────────────────────────────────────────────────
function playMatch(el, deck, onBack) {
  const PAIR_COUNT = Math.min(6, deck.cards.length)
  const chosen = shuffle(deck.cards).slice(0, PAIR_COUNT)
  const left = shuffle(chosen)                       // English
  const right = shuffle(chosen)                      // Thai
  const matchedIds = new Set()                        // ids already paired (local, not mutating card data)
  let selectedEn = null
  let matched = 0
  let mistakes = 0

  function draw() {
    el.innerHTML = `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-6);animation:pop-in 0.2s ease">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-5);flex-wrap:wrap;gap:var(--sp-3)">
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted)">${deck.icon || '📚'} ${deck.title}</div>
          <div style="background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-full);padding:var(--sp-1) var(--sp-4);font-size:var(--text-sm);font-weight:700;color:var(--accent)">${matched}/${PAIR_COUNT} คู่</div>
        </div>
        <p style="text-align:center;color:var(--text-muted);font-size:var(--text-sm);margin-bottom:var(--sp-5)">แตะคำอังกฤษ แล้วแตะความหมายที่ตรงกัน</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-5)">
          <div id="match-left" style="display:flex;flex-direction:column;gap:var(--sp-3)"></div>
          <div id="match-right" style="display:flex;flex-direction:column;gap:var(--sp-3)"></div>
        </div>
      </div>
    `
    const leftCol = el.querySelector('#match-left')
    const rightCol = el.querySelector('#match-right')

    left.forEach(card => {
      const b = document.createElement('button')
      b.dataset.id = card.id
      b.textContent = card.front
      b.className = 'match-tile'
      styleTile(b)
      if (matchedIds.has(card.id)) lockTile(b)
      else if (selectedEn === card.id) selectTile(b)
      b.addEventListener('click', () => pickEn(card, b))
      leftCol.appendChild(b)
    })
    right.forEach(card => {
      const b = document.createElement('button')
      b.dataset.id = card.id
      b.textContent = card.thai
      b.className = 'match-tile'
      styleTile(b)
      if (matchedIds.has(card.id)) lockTile(b)
      b.addEventListener('click', () => pickThai(card, b))
      rightCol.appendChild(b)
    })
  }

  function styleTile(b) {
    b.style.cssText = 'padding:var(--sp-3) var(--sp-4);border:1.5px solid var(--border);border-radius:var(--r-lg);background:var(--surface);color:var(--text);font-size:var(--text-sm);font-weight:600;cursor:pointer;text-align:center;transition:all 150ms var(--ease)'
  }
  function selectTile(b) { b.style.borderColor = 'var(--accent)'; b.style.background = 'var(--accent-soft)' }
  function lockTile(b) { b.disabled = true; b.style.opacity = '0.45'; b.style.borderColor = 'var(--accent-mid)'; b.style.cursor = 'default' }

  function pickEn(card, b) {
    if (matchedIds.has(card.id)) return
    selectedEn = card.id
    el.querySelectorAll('#match-left .match-tile').forEach(t => {
      if (matchedIds.has(t.dataset.id)) { styleTile(t); lockTile(t) }
      else if (t.dataset.id === card.id) { styleTile(t); selectTile(t) }
      else styleTile(t)
    })
  }

  function pickThai(card, b) {
    if (matchedIds.has(card.id) || !selectedEn) return
    if (card.id === selectedEn) {
      // correct match
      matchedIds.add(card.id)
      matched++
      selectedEn = null
      speak(card.front)
      const nb = addBonusXP(XP_PER_CORRECT)
      floatXP(XP_PER_CORRECT, b)
      if (nb?.length) setTimeout(() => showNewBadges(nb), 400)
      if (matched >= PAIR_COUNT) {
        setTimeout(() => showSummary(el, { game: 'match', deck, correct: PAIR_COUNT, total: PAIR_COUNT + mistakes,
          onRetry: () => playMatch(el, deck, onBack), onBack }), 500)
        return
      }
      draw()
    } else {
      // wrong — flash red
      mistakes++
      b.style.borderColor = 'var(--danger)'
      b.style.background = 'var(--danger-soft)'
      setTimeout(() => { selectedEn = null; draw() }, 550)
    }
  }

  draw()
}

// ── Game 3: Word Scramble ─────────────────────────────────────────────
function scrambleWord(word) {
  const letters = word.split('')
  if (letters.length < 2) return word
  let out = word
  let tries = 0
  while (out === word && tries < 20) {
    out = shuffle(letters).join('')
    tries++
  }
  return out
}

function playScramble(el, deck, onBack) {
  const pool = deck.cards.filter(c => c.front.trim().length >= 3)
  const usable = pool.length >= 4 ? pool : deck.cards
  const rounds = shuffle(usable).slice(0, Math.min(8, usable.length))
  let idx = 0, correct = 0

  function renderRound() {
    if (idx >= rounds.length) {
      showSummary(el, { game: 'scramble', deck, correct, total: rounds.length,
        onRetry: () => playScramble(el, deck, onBack), onBack })
      return
    }
    const card = rounds[idx]
    const word = card.front.trim()
    const scrambled = word.includes(' ')
      ? word.split(' ').map(scrambleWord).join(' ')
      : scrambleWord(word)
    let answered = false

    el.innerHTML = `
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-6);animation:pop-in 0.2s ease">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-5);flex-wrap:wrap;gap:var(--sp-3)">
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted)">${deck.icon || '📚'} ${deck.title} — ${idx + 1}/${rounds.length}</div>
          <div style="background:var(--accent-soft);border:1px solid var(--accent-mid);border-radius:var(--r-full);padding:var(--sp-1) var(--sp-4);font-size:var(--text-sm);font-weight:700;color:var(--accent)">${correct} ✓</div>
        </div>
        <div style="text-align:center;margin-bottom:var(--sp-5)">
          <div style="font-size:var(--text-2xl);font-weight:800;margin-bottom:var(--sp-2)">${card.thai}</div>
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4)">${card.back || ''}</div>
          <div style="display:inline-flex;gap:6px;flex-wrap:wrap;justify-content:center">
            ${scrambled.split('').map(ch => `<span style="display:inline-flex;align-items:center;justify-content:center;min-width:2.2ch;height:2.6ch;padding:var(--sp-2);background:var(--accent-soft);border:1.5px solid var(--accent-mid);border-radius:var(--r-md);font-weight:800;text-transform:uppercase;font-size:var(--text-lg)">${ch === ' ' ? '&nbsp;' : ch}</span>`).join('')}
          </div>
        </div>
        <div style="display:flex;gap:var(--sp-3);align-items:center">
          <input id="sc-input" type="text" autocomplete="off" spellcheck="false" placeholder="พิมพ์คำที่ถูกต้อง..."
            style="flex:1;padding:var(--sp-3) var(--sp-4);border:2px solid var(--border);border-radius:var(--r-lg);font-size:var(--text-base);font-family:var(--font-body);background:var(--surface);color:var(--text)" />
          <button class="btn btn-primary" id="sc-submit">→</button>
        </div>
        <div id="sc-feedback" style="margin-top:var(--sp-4)"></div>
      </div>
    `
    const input = el.querySelector('#sc-input')
    const submit = el.querySelector('#sc-submit')
    const feedback = el.querySelector('#sc-feedback')
    input.focus()

    function handle() {
      if (answered) return
      const val = input.value.trim()
      if (!val) return
      answered = true
      input.disabled = true; submit.disabled = true
      const ok = normalise(val) === normalise(word)
      if (ok) {
        correct++
        input.style.borderColor = 'var(--accent)'
        speak(word)
        const nb = addBonusXP(XP_PER_CORRECT)
        floatXP(XP_PER_CORRECT, submit)
        if (nb?.length) setTimeout(() => showNewBadges(nb), 400)
      } else {
        input.style.borderColor = 'var(--danger)'
      }
      feedback.innerHTML = `
        <div style="background:${ok ? 'var(--accent-soft)' : 'var(--danger-soft)'};border:1px solid ${ok ? 'var(--accent-mid)' : 'var(--danger)'};border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);display:flex;align-items:center;justify-content:space-between;gap:var(--sp-3);flex-wrap:wrap;animation:pop-in 0.2s ease">
          <div><span style="font-weight:700;color:${ok ? 'var(--accent)' : 'var(--danger)'}">${ok ? '✓ ถูกต้อง!' : '✗ คำตอบ:'}</span> <strong style="text-transform:capitalize;margin-left:var(--sp-2)">${word}</strong> <span style="color:var(--text-muted);font-size:var(--text-xs)">${card.phonetic || ''}</span></div>
          <button class="btn btn-primary btn-sm" id="sc-next">ถัดไป →</button>
        </div>
      `
      const next = el.querySelector('#sc-next')
      let advanced = false
      const enterTimer = setTimeout(() => document.addEventListener('keyup', onEnter), 400)
      function onEnter(e) { if (e.key === 'Enter') advance() }
      function advance() {
        if (advanced) return
        advanced = true
        clearTimeout(enterTimer)
        document.removeEventListener('keyup', onEnter)
        idx++; renderRound()
      }
      next.addEventListener('click', advance)
    }

    submit.addEventListener('click', handle)
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handle() })
  }

  renderRound()
}
