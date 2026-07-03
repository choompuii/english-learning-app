import { getProgress, resetProgress, getDailyGoal, setDailyGoal, getBadges, getActivityLog } from '../store.js'
import { lessons } from '../data/lessons.js'
import { decks } from '../data/vocabulary.js'
import { quizzes } from '../data/quizzes.js'
import { createProgressRing } from '../components/progress-ring.js'

export function renderProgress() {
  const main = document.getElementById('main-content')
  const state = getProgress()

  const totalLessons = lessons.length
  const completedLessons = Object.values(state.lessons).filter(l => l.status === 'completed').length
  const lessonPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  const totalCards = decks.reduce((sum, d) => sum + d.cards.length, 0)
  const studiedCards = Object.values(state.flashcards).reduce((sum, deck) => sum + Object.keys(deck.cards).length, 0)
  const cardPct = totalCards > 0 ? Math.round((studiedCards / totalCards) * 100) : 0

  const quizAttempts = Object.values(state.quizzes)
  const avgScore = quizAttempts.length > 0
    ? Math.round(quizAttempts.reduce((sum, q) => sum + (q.bestScore / Math.max(1, q.bestTotal)) * 100, 0) / quizAttempts.length)
    : 0

  const streak = state.streakDays || 0
  const xp = state.xp || 0
  const level = state.selectedLevel || '—'
  const { goal, todayXp } = getDailyGoal()
  const goalPct = Math.min(100, Math.round((todayXp / goal) * 100))
  const goalReached = todayXp >= goal
  const badges = getBadges()
  const earnedCount = badges.filter(b => b.earned).length
  const activityLog = getActivityLog()

  // Human letter
  const letter = generateLetter(state, completedLessons, studiedCards, streak, avgScore)

  main.innerHTML = `
    <div class="page">
      <div class="page-header">
        <h1>Your Progress</h1>
        <p>Level: <span class="level-badge level-${level}">${level}</span></p>
      </div>

      <div class="card" style="margin-bottom:var(--sp-6);background:var(--accent-soft);border-color:var(--accent-mid)">
        <p style="line-height:1.8;color:var(--text)">${letter}</p>
      </div>

      <!-- Daily Goal -->
      <div class="card" style="margin-bottom:var(--sp-6)${goalReached ? ';border-color:var(--accent);background:var(--accent-soft)' : ''}">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-3)">
          <div>
            <div style="font-weight:600;font-size:var(--text-base)">
              ${goalReached ? '🎯 เป้าหมายวันนี้สำเร็จแล้ว!' : '🎯 เป้าหมายวันนี้'}
            </div>
            <div style="font-size:var(--text-sm);color:var(--text-muted)">${todayXp} / ${goal} XP</div>
          </div>
          <div style="display:flex;align-items:center;gap:var(--sp-2)">
            <select id="goal-select" style="padding:var(--sp-2) var(--sp-3);border:1px solid var(--border);border-radius:var(--r-md);font-family:var(--font-body);font-size:var(--text-sm);color:var(--text);background:var(--surface);cursor:pointer">
              <option value="20" ${goal === 20 ? 'selected' : ''}>20 XP (ง่าย)</option>
              <option value="50" ${goal === 50 ? 'selected' : ''}>50 XP (ปกติ)</option>
              <option value="100" ${goal === 100 ? 'selected' : ''}>100 XP (ท้าทาย)</option>
              <option value="200" ${goal === 200 ? 'selected' : ''}>200 XP (เข้มข้น)</option>
            </select>
          </div>
        </div>
        <div class="progress-bar" style="height:10px">
          <div class="progress-fill" style="width:${goalPct}%;${goalReached ? 'background:var(--accent)' : ''}"></div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--sp-6);margin-bottom:var(--sp-8)">
        <div style="text-align:center">
          <div id="ring-lessons" style="display:inline-block;margin-bottom:var(--sp-3)"></div>
          <div style="font-weight:600">Lessons</div>
          <div style="font-size:var(--text-sm);color:var(--text-muted)">${completedLessons} / ${totalLessons}</div>
        </div>
        <div style="text-align:center">
          <div id="ring-cards" style="display:inline-block;margin-bottom:var(--sp-3)"></div>
          <div style="font-weight:600">Flashcards</div>
          <div style="font-size:var(--text-sm);color:var(--text-muted)">${studiedCards} / ${totalCards} studied</div>
        </div>
        <div style="text-align:center">
          <div id="ring-quiz" style="display:inline-block;margin-bottom:var(--sp-3)"></div>
          <div style="font-weight:600">Quiz Avg.</div>
          <div style="font-size:var(--text-sm);color:var(--text-muted)">${quizAttempts.length} quizzes taken</div>
        </div>
      </div>

      <div class="stats-row" style="margin-bottom:var(--sp-8)">
        <div class="stat-card">
          <span class="stat-value">${streak > 0 ? '🔥' : '—'} ${streak}</span>
          <div class="stat-label">Day streak</div>
        </div>
        <div class="stat-card">
          <span class="stat-value">${xp}</span>
          <div class="stat-label">Total XP</div>
        </div>
        <div class="stat-card">
          <span class="stat-value">${state.lastStudyDate || '—'}</span>
          <div class="stat-label">Last studied</div>
        </div>
      </div>

      ${completedLessons > 0 ? `
        <div style="margin-bottom:var(--sp-8)">
          <h3 style="font-family:var(--font-body);font-weight:600;margin-bottom:var(--sp-4)">Completed Lessons</h3>
          <div style="display:flex;flex-direction:column;gap:var(--sp-2)">
            ${lessons.filter(l => state.lessons[l.id]?.status === 'completed').map(l => `
              <div style="display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-3) var(--sp-4);background:var(--surface);border-radius:var(--r-md);border:1px solid var(--border-soft)">
                <span style="color:var(--accent)">✓</span>
                <span class="level-badge level-${l.level}">${l.level}</span>
                <a href="#/lessons/${l.id}" style="color:var(--text);font-weight:500">${l.title}</a>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Badge Gallery -->
      <div style="margin-bottom:var(--sp-8)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--sp-4)">
          <h3 style="font-family:var(--font-body);font-weight:600;font-size:var(--text-lg)">Achievements</h3>
          <span style="font-size:var(--text-sm);color:var(--text-muted);font-weight:600">${earnedCount} / ${badges.length}</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:var(--sp-3)">
          ${badges.map(b => `
            <div style="background:var(--surface);border:2px solid ${b.earned ? 'var(--accent-mid)' : 'var(--border-soft)'};border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-3);text-align:center;opacity:${b.earned ? '1' : '0.4'};transition:transform 200ms,box-shadow 200ms;${b.earned ? 'cursor:default' : ''}" title="${b.desc}">
              <div style="font-size:1.75rem;margin-bottom:var(--sp-2)">${b.icon}</div>
              <div style="font-size:var(--text-xs);font-weight:700;color:${b.earned ? 'var(--text)' : 'var(--text-muted)'};line-height:1.3">${b.name}</div>
              ${b.earned ? '<div style="font-size:0.6rem;color:var(--accent);font-weight:700;margin-top:3px">EARNED</div>' : ''}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Activity Heatmap -->
      <div style="margin-bottom:var(--sp-8)">
        <h3 style="font-family:var(--font-body);font-weight:600;font-size:var(--text-lg);margin-bottom:var(--sp-4)">Activity</h3>
        ${renderHeatmap(activityLog)}
      </div>

      <div style="padding-top:var(--sp-6);border-top:1px solid var(--border)">
        <h4 style="font-family:var(--font-body);font-weight:600;margin-bottom:var(--sp-2);font-size:var(--text-sm);color:var(--text-muted)">Reset Progress</h4>
        <p style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4)">Clears all progress, streaks, and XP from this device.</p>
        <button class="btn btn-danger btn-sm" id="reset-btn">Reset Everything</button>
      </div>
    </div>
  `

  // Render rings after HTML is in DOM
  createProgressRing(main.querySelector('#ring-lessons'), lessonPct)
  createProgressRing(main.querySelector('#ring-cards'), cardPct)
  createProgressRing(main.querySelector('#ring-quiz'), avgScore)

  main.querySelector('#reset-btn').addEventListener('click', () => {
    if (confirm('Are you sure? This will erase all your progress.')) {
      resetProgress()
      window.location.hash = '/'
    }
  })

  main.querySelector('#goal-select').addEventListener('change', (e) => {
    setDailyGoal(parseInt(e.target.value))
    renderProgress()
  })
}

function renderHeatmap(log) {
  const WEEKS = 15
  const today = new Date()
  const days = []
  for (let i = (WEEKS * 7) - 1; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const key = d.toISOString().split('T')[0]
    days.push({ key, xp: log[key] || 0, dow: d.getDay() })
  }

  const maxXp = Math.max(...days.map(d => d.xp), 1)

  function color(xp) {
    if (!xp) return 'var(--border-soft)'
    const intensity = Math.min(1, xp / maxXp)
    if (intensity < 0.25) return 'var(--accent-mid)'
    if (intensity < 0.5)  return '#2DA85E'
    if (intensity < 0.75) return '#1F8A4C'
    return 'var(--accent)'
  }

  // Pad to start on Sunday
  const firstDow = days[0].dow
  const padded = Array(firstDow).fill(null).concat(days)

  const cols = []
  for (let w = 0; w < Math.ceil(padded.length / 7); w++) {
    const week = padded.slice(w * 7, w * 7 + 7)
    cols.push(`<div style="display:flex;flex-direction:column;gap:3px">
      ${week.map(d => d === null
        ? '<div style="width:12px;height:12px"></div>'
        : `<div style="width:12px;height:12px;border-radius:3px;background:${color(d.xp)}" title="${d.key}${d.xp ? ': '+d.xp+' XP' : ''}"></div>`
      ).join('')}
    </div>`)
  }

  const totalDays = days.filter(d => d.xp > 0).length

  return `
    <div style="overflow-x:auto;padding-bottom:var(--sp-2)">
      <div style="display:flex;gap:3px;min-width:max-content">
        ${cols.join('')}
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:var(--sp-3);margin-top:var(--sp-3)">
      <span style="font-size:var(--text-xs);color:var(--text-muted)">${totalDays} วันที่เรียน</span>
      <div style="display:flex;align-items:center;gap:4px;margin-left:auto">
        <span style="font-size:var(--text-xs);color:var(--text-muted)">น้อย</span>
        <div style="display:flex;gap:3px">
          ${['var(--border-soft)','var(--accent-mid)','#2DA85E','#1F8A4C','var(--accent)'].map(c => `<div style="width:12px;height:12px;border-radius:3px;background:${c}"></div>`).join('')}
        </div>
        <span style="font-size:var(--text-xs);color:var(--text-muted)">มาก</span>
      </div>
    </div>
  `
}

function generateLetter(state, completedLessons, studiedCards, streak, avgScore) {
  const parts = []

  if (streak > 0) {
    parts.push(`You've studied ${streak === 1 ? 'today' : `${streak} days in a row`} — that consistency is everything.`)
  } else {
    parts.push(`Welcome back! Every day you study, you build a stronger habit.`)
  }

  if (completedLessons > 0) {
    parts.push(`You've completed ${completedLessons} lesson${completedLessons > 1 ? 's' : ''}.`)
  } else {
    parts.push(`Start with your first lesson — even 6 minutes makes a difference.`)
  }

  if (studiedCards > 0) {
    parts.push(`${studiedCards} vocabulary card${studiedCards > 1 ? 's' : ''} are in your memory bank.`)
  }

  if (avgScore > 0) {
    parts.push(`Your average quiz score is ${avgScore}% — ${avgScore >= 80 ? 'excellent!' : avgScore >= 60 ? 'good work, keep going!' : 'keep practising and it will improve.'}`)
  }

  return parts.join(' ')
}
