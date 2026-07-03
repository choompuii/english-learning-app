import { getProgress, setLevel, getDailyGoal, dismissTodayReminder, isReminderDismissedToday } from '../store.js'
import { navigate } from '../router.js'
import { lessons } from '../data/lessons.js'
import { decks } from '../data/vocabulary.js'
import { getOrderedLessons, isLessonPassed, getNextLesson } from '../utils/progression.js'

function getWordOfTheDay() {
  const allCards = decks.flatMap(d => d.cards.map(c => ({ ...c, deckTitle: d.title, level: d.level })))
  if (!allCards.length) return null
  const today = new Date()
  const start = new Date(today.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((today - start) / 86400000)
  return allCards[(dayOfYear + today.getFullYear()) % allCards.length]
}

const LEVELS = [
  { code: 'A1', label: 'Beginner' },
  { code: 'A2', label: 'Elementary' },
  { code: 'B1', label: 'Intermediate' },
  { code: 'B2', label: 'Upper-Int.' },
  { code: 'C1', label: 'Advanced' },
  { code: 'C2', label: 'Mastery' }
]

export function renderHome() {
  const main = document.getElementById('main-content')
  const state = getProgress()

  if (!state.selectedLevel) {
    renderLevelSelect(main, state)
  } else {
    renderDashboard(main, state)
  }
}

function renderLevelSelect(main, state) {
  main.innerHTML = `
    <div class="page" style="max-width:640px">
      <div style="margin-bottom:var(--sp-10)">
        <h1 style="font-size:var(--text-display);margin-bottom:var(--sp-4)">Welcome to<br>LearnEN</h1>
        <p style="font-size:var(--text-xl);color:var(--text-muted)">เรียนภาษาอังกฤษ ทีละก้าว</p>
      </div>

      <div style="margin-bottom:var(--sp-8)">
        <h3 style="margin-bottom:var(--sp-3);font-family:var(--font-body);font-weight:600">What's your current level?</h3>
        <p style="color:var(--text-muted);margin-bottom:var(--sp-6)">Don't worry — you can change this later.</p>
        <div class="level-grid" id="level-grid">
          ${LEVELS.map(l => `
            <button class="level-option" data-level="${l.code}">
              <span class="level-option-code">${l.code}</span>
              <span class="level-option-label">${l.label}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <p id="level-hint" style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4)">👆 กรุณาเลือก level ก่อน</p>
      <button class="btn btn-primary btn-lg" id="start-btn" disabled style="opacity:0.4;pointer-events:none">
        Start Learning →
      </button>
    </div>
  `

  let chosen = null
  const startBtn = main.querySelector('#start-btn')
  const hint = main.querySelector('#level-hint')

  main.querySelectorAll('.level-option').forEach(btn => {
    btn.addEventListener('click', () => {
      main.querySelectorAll('.level-option').forEach(b => b.classList.remove('selected'))
      btn.classList.add('selected')
      chosen = btn.dataset.level
      startBtn.disabled = false
      startBtn.style.opacity = '1'
      startBtn.style.pointerEvents = ''
      hint.style.display = 'none'
    })
  })

  startBtn.addEventListener('click', () => {
    if (!chosen) return
    setLevel(chosen)
    renderDashboard(main, { ...getProgress(), selectedLevel: chosen })
  })
}

function renderDashboard(main, state) {
  const totalLessons = lessons.length
  const completedLessons = Object.values(state.lessons).filter(l => l.status === 'completed').length
  const streak = state.streakDays || 0
  const xp = state.xp || 0
  const { goal: dailyGoal, todayXp } = getDailyGoal()
  const goalPct = Math.min(100, Math.round((todayXp / dailyGoal) * 100))
  const goalReached = todayXp >= dailyGoal

  // Find due cards
  let dueCount = 0
  decks.forEach(deck => {
    const deckState = state.flashcards[deck.id]
    if (deckState) {
      const today = new Date().toISOString().split('T')[0]
      dueCount += Object.values(deckState.cards).filter(c => c.nextReview <= today).length
    }
  })

  // Use progression order — show the next lesson to work on
  const ordered = getOrderedLessons(lessons)
  const primaryLesson = getNextLesson(ordered, state)
  const hasStarted = completedLessons > 0 || Object.values(state.lessons).some(l => l.status === 'in-progress')

  // Up to 2 upcoming lessons after primary
  const primaryIdx = primaryLesson ? ordered.findIndex(l => l.id === primaryLesson.id) : -1
  const upcomingLessons = primaryIdx >= 0
    ? ordered.slice(primaryIdx + 1, primaryIdx + 3).filter(l => !isLessonPassed(l, state))
    : []

  const lessonPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  const showReminder = (todayXp === 0) && !isReminderDismissedToday()
  const wotd = getWordOfTheDay()

  main.innerHTML = `
    <div class="page">
      ${showReminder ? `
        <div id="reminder-banner" style="background:var(--gold-soft);border:1.5px solid var(--gold);border-radius:var(--r-xl);padding:var(--sp-4) var(--sp-5);margin-bottom:var(--sp-6);display:flex;align-items:center;gap:var(--sp-4);animation:pop-in 0.3s ease">
          <span style="font-size:1.5rem;flex-shrink:0">⏰</span>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:var(--text-sm);color:#5C4300">ยังไม่ได้เรียนวันนี้เลย!</div>
            <div style="font-size:var(--text-xs);color:#7A5C1A;margin-top:2px">เรียนนิดหน่อยก็ยังดี — ก้าวเล็กๆ ทุกวันสร้างความแตกต่างได้มาก</div>
          </div>
          <div style="display:flex;align-items:center;gap:var(--sp-2);flex-shrink:0">
            <a href="#/lessons" class="btn btn-gold btn-sm">เรียนเลย →</a>
            <button id="dismiss-reminder" style="background:none;border:none;cursor:pointer;color:#7A5C1A;font-size:1.1rem;padding:var(--sp-1);line-height:1" title="ปิด">✕</button>
          </div>
        </div>
      ` : ''}

      <!-- Hero greeting -->
      <div style="margin-bottom:var(--sp-8)">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:var(--sp-4)">
          <div>
            <h1 style="margin-bottom:var(--sp-1)">Good ${greeting()}! 👋</h1>
            <p style="color:var(--text-muted);margin-bottom:var(--sp-3)">
              Level: <span class="level-badge level-${state.selectedLevel}">${state.selectedLevel}</span>
              <button style="background:none;border:none;color:var(--text-muted);font-size:var(--text-xs);cursor:pointer;margin-left:var(--sp-2);text-decoration:underline" id="change-level-btn">เปลี่ยน</button>
            </p>
          </div>
          ${streak > 0 ? `
            <div style="background:var(--gold-soft);border:2px solid var(--gold);border-radius:var(--r-lg);padding:var(--sp-3) var(--sp-4);text-align:center;flex-shrink:0;animation:pop-in 0.4s ease both">
              <div style="font-size:1.75rem;line-height:1">🔥</div>
              <div style="font-size:var(--text-xl);font-weight:800;color:#8B6914;line-height:1.2">${streak}</div>
              <div style="font-size:var(--text-xs);color:#8B6914;font-weight:600">day streak</div>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Daily goal (hero style) -->
      <div style="background:linear-gradient(135deg,var(--accent-soft) 0%,var(--surface) 100%);border:1px solid ${goalReached ? 'var(--accent)' : 'var(--accent-mid)'};border-radius:var(--r-xl);padding:var(--sp-5) var(--sp-6);margin-bottom:var(--sp-6)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--sp-3)">
          <div>
            <div style="font-weight:700;font-size:var(--text-base)">${goalReached ? '🎯 เป้าหมายวันนี้สำเร็จแล้ว!' : '🎯 เป้าหมายวันนี้'}</div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">${todayXp} / ${dailyGoal} XP</div>
          </div>
          <div style="font-size:var(--text-2xl);font-weight:800;color:var(--accent)">${goalPct}%</div>
        </div>
        <div class="progress-bar" style="height:10px;border-radius:var(--r-full)">
          <div class="progress-fill" style="width:${goalPct}%;border-radius:var(--r-full)"></div>
        </div>
      </div>

      <!-- Stats grid -->
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:var(--sp-3);margin-bottom:var(--sp-6)">
        <div class="stat-card" style="background:linear-gradient(135deg,var(--surface) 0%,var(--surface-2) 100%)">
          <span class="stat-value" style="font-size:var(--text-2xl)">${xp.toLocaleString()}</span>
          <div class="stat-label">Total XP</div>
        </div>
        <div class="stat-card" style="background:linear-gradient(135deg,var(--surface) 0%,var(--surface-2) 100%)">
          <span class="stat-value" style="font-size:var(--text-2xl)">${completedLessons}<span style="font-size:var(--text-base);opacity:0.5">/${totalLessons}</span></span>
          <div class="stat-label">Lessons done</div>
        </div>
        <div class="stat-card ${dueCount > 0 ? '' : ''}" style="background:linear-gradient(135deg,var(--surface) 0%,var(--surface-2) 100%);${dueCount > 0 ? 'cursor:pointer;border-color:var(--gold)' : ''}" ${dueCount > 0 ? `onclick="window.location.hash='/flashcards'"` : ''}>
          <span class="stat-value" style="font-size:var(--text-2xl);color:${dueCount > 0 ? '#8B6914' : 'var(--accent)'}">${dueCount}</span>
          <div class="stat-label">Cards due today${dueCount > 0 ? ' ⚡' : ''}</div>
        </div>
        <div class="stat-card" style="background:linear-gradient(135deg,var(--surface) 0%,var(--surface-2) 100%)">
          <span class="stat-value" style="font-size:var(--text-2xl)">${lessonPct}%</span>
          <div class="stat-label">Path complete</div>
        </div>
      </div>

      <!-- Next lesson hero card -->
      ${primaryLesson ? `
        <div style="margin-bottom:var(--sp-6)">
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-3)">${hasStarted ? 'Continue where you left off' : 'เริ่มต้นเลย'}</div>
          <div onclick="window.location.hash='/lessons/${primaryLesson.id}'"
               style="background:var(--surface);border:2px solid var(--accent);border-radius:var(--r-xl);padding:var(--sp-6);cursor:pointer;transition:all 200ms var(--ease);display:flex;align-items:center;gap:var(--sp-4)"
               onmouseover="this.style.boxShadow='var(--shadow-lg)';this.style.transform='translateY(-2px)'"
               onmouseout="this.style.boxShadow='';this.style.transform=''">
            <div style="width:56px;height:56px;background:var(--accent-soft);border-radius:var(--r-lg);display:flex;align-items:center;justify-content:center;font-size:1.75rem;flex-shrink:0">
              ${topicEmoji(primaryLesson.topic)}
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--accent);margin-bottom:4px">
                ${state.lessons[primaryLesson.id]?.status === 'in-progress' ? '▶ IN PROGRESS' : '→ NEXT LESSON'}
              </div>
              <div style="font-weight:700;font-size:var(--text-base);margin-bottom:4px;line-height:1.3">${primaryLesson.title}</div>
              <div style="display:flex;align-items:center;gap:var(--sp-2);flex-wrap:wrap">
                <span class="level-badge level-${primaryLesson.level}">${primaryLesson.level}</span>
                <span style="font-size:var(--text-xs);color:var(--text-muted)">⏱ ${primaryLesson.estimatedMinutes} min</span>
                <span style="font-size:var(--text-xs);color:var(--text-muted)">${primaryLesson.topic}</span>
              </div>
            </div>
            <div style="width:40px;height:40px;background:var(--accent);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.1rem;flex-shrink:0">→</div>
          </div>
          <div style="margin-top:var(--sp-3);text-align:right">
            <a href="#/lessons" style="font-size:var(--text-sm);color:var(--accent);font-weight:500">ดู Learning Path ทั้งหมด →</a>
          </div>
        </div>
      ` : `
        <div style="background:var(--accent-soft);border:2px solid var(--accent-mid);border-radius:var(--r-xl);padding:var(--sp-8);text-align:center;margin-bottom:var(--sp-6)">
          <div style="font-size:3rem;margin-bottom:var(--sp-3)">🏆</div>
          <h3 style="margin-bottom:var(--sp-2);font-family:var(--font-body)">All lessons completed!</h3>
          <p style="color:var(--text-muted)">ยอดเยี่ยมมาก! ทบทวน flashcards หรือทำ dictation ต่อได้เลย</p>
        </div>
      `}

      <!-- Word of the Day -->
      ${wotd ? `
        <div style="margin-bottom:var(--sp-6)">
          <div style="font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-bottom:var(--sp-3)">📖 Word of the Day</div>
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:var(--sp-5) var(--sp-6)">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:var(--sp-4);flex-wrap:wrap">
              <div style="flex:1;min-width:0">
                <div style="display:flex;align-items:baseline;gap:var(--sp-3);flex-wrap:wrap;margin-bottom:var(--sp-1)">
                  <span style="font-size:var(--text-2xl);font-weight:800;color:var(--accent)">${wotd.front}</span>
                  <span style="font-size:var(--text-sm);color:var(--text-faint);font-family:var(--font-mono)">${wotd.phonetic || ''}</span>
                </div>
                <div style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-2)">${wotd.back}</div>
                <div style="font-size:var(--text-sm);color:var(--text);font-style:italic;margin-bottom:var(--sp-2)">"${wotd.example}"</div>
                <div style="font-size:var(--text-sm);color:var(--text-muted)">🇹🇭 ${wotd.thai}</div>
              </div>
              <div style="display:flex;flex-direction:column;align-items:flex-end;gap:var(--sp-2);flex-shrink:0">
                <span class="level-badge level-${wotd.level}">${wotd.level}</span>
                <span style="font-size:var(--text-xs);color:var(--text-faint)">${wotd.deckTitle}</span>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Quick action buttons -->
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:var(--sp-3)">
        <a href="#/flashcards" style="display:flex;align-items:center;gap:var(--sp-3);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);text-decoration:none;color:var(--text);transition:all 200ms var(--ease)"
           onmouseover="this.style.borderColor='var(--accent)';this.style.background='var(--accent-soft)'"
           onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--surface)'">
          <span style="font-size:1.4rem">🃏</span>
          <div>
            <div style="font-weight:600;font-size:var(--text-sm)">Flashcards</div>
            <div style="font-size:var(--text-xs);color:var(--text-muted)">${dueCount > 0 ? `${dueCount} due today ⚡` : 'Review words'}</div>
          </div>
        </a>
        <a href="#/quiz" style="display:flex;align-items:center;gap:var(--sp-3);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);text-decoration:none;color:var(--text);transition:all 200ms var(--ease)"
           onmouseover="this.style.borderColor='var(--gold)';this.style.background='var(--gold-soft)'"
           onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--surface)'">
          <span style="font-size:1.4rem">❓</span>
          <div>
            <div style="font-weight:600;font-size:var(--text-sm)">Quiz</div>
            <div style="font-size:var(--text-xs);color:var(--text-muted)">Test yourself</div>
          </div>
        </a>
        <a href="#/dictation" style="display:flex;align-items:center;gap:var(--sp-3);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);text-decoration:none;color:var(--text);transition:all 200ms var(--ease)"
           onmouseover="this.style.borderColor='var(--accent)';this.style.background='var(--accent-soft)'"
           onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--surface)'">
          <span style="font-size:1.4rem">✍️</span>
          <div>
            <div style="font-weight:600;font-size:var(--text-sm)">Dictation</div>
            <div style="font-size:var(--text-xs);color:var(--text-muted)">Listen & type</div>
          </div>
        </a>
        <a href="#/search" style="display:flex;align-items:center;gap:var(--sp-3);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);text-decoration:none;color:var(--text);transition:all 200ms var(--ease)"
           onmouseover="this.style.borderColor='var(--accent)';this.style.background='var(--accent-soft)'"
           onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--surface)'">
          <span style="font-size:1.4rem">🔍</span>
          <div>
            <div style="font-weight:600;font-size:var(--text-sm)">Search</div>
            <div style="font-size:var(--text-xs);color:var(--text-muted)">Find vocabulary</div>
          </div>
        </a>
      </div>
    </div>
  `

  main.querySelector('#change-level-btn').addEventListener('click', () => {
    renderLevelSelect(main, state)
  })

  const dismissBtn = main.querySelector('#dismiss-reminder')
  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      dismissTodayReminder()
      const banner = main.querySelector('#reminder-banner')
      if (banner) banner.remove()
    })
  }
}

function greeting() {
  const h = new Date().getHours()
  if (h < 12) return 'morning'
  if (h < 17) return 'afternoon'
  return 'evening'
}

function topicEmoji(topic) {
  return { grammar: '📝', vocabulary: '📚', speaking: '💬', business: '💼', culture: '🌏' }[topic] || '📖'
}
