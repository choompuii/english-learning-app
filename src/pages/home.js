import { getProgress, setLevel, getDailyGoal, dismissTodayReminder, isReminderDismissedToday, getCourseProgress, isCourseUnitUnlocked } from '../store.js'
import { navigate } from '../router.js'
import { lessons } from '../data/lessons.js'
import { decks } from '../data/vocabulary.js'
import { getAllLevels } from '../data/courses/index.js'
import { getOrderedLessons, isLessonPassed, getNextLesson } from '../utils/progression.js'
import { ttsButton, attachTtsListeners } from '../utils/tts.js'
import { getUser, getProfile } from '../lib/auth.js'

// ── Word of the Day ────────────────────────────────────────

function getWordOfTheDay(level) {
  const allCards = decks.flatMap(d => d.cards.map(c => ({ ...c, deckTitle: d.title, level: d.level })))
  const pool = (level && allCards.some(c => c.level === level))
    ? allCards.filter(c => c.level === level) : allCards
  if (!pool.length) return null
  const today = new Date()
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 1)) / 86400000)
  return pool[(dayOfYear + today.getFullYear()) % pool.length]
}

const LEVELS = [
  { code: 'A1', label: 'Beginner' }, { code: 'A2', label: 'Elementary' },
  { code: 'B1', label: 'Intermediate' }, { code: 'B2', label: 'Upper-Int.' },
  { code: 'C1', label: 'Advanced' }, { code: 'C2', label: 'Mastery' }
]

function greeting() {
  const h = new Date().getHours()
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'
}

function topicEmoji(topic) {
  return { grammar: '📝', vocabulary: '📚', speaking: '💬', business: '💼', culture: '🌏' }[topic] || '📖'
}

// ── Entry ──────────────────────────────────────────────────

export async function renderHome() {
  const main = document.getElementById('main-content')
  const state = getProgress()
  if (!state.selectedLevel) { renderLevelSelect(main, state); return }
  await renderDashboard(main, state)
}

// ── Level Select ───────────────────────────────────────────

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
          ${LEVELS.map(l => `<button class="level-option" data-level="${l.code}"><span class="level-option-code">${l.code}</span><span class="level-option-label">${l.label}</span></button>`).join('')}
        </div>
      </div>
      <p id="level-hint" style="font-size:var(--text-sm);color:var(--text-muted);margin-bottom:var(--sp-4)">👆 กรุณาเลือก level ก่อน</p>
      <button class="btn btn-primary btn-lg" id="start-btn" disabled style="opacity:0.4;pointer-events:none">Start Learning →</button>
    </div>
  `
  let chosen = null
  const startBtn = main.querySelector('#start-btn')
  main.querySelectorAll('.level-option').forEach(btn => {
    btn.addEventListener('click', () => {
      main.querySelectorAll('.level-option').forEach(b => b.classList.remove('selected'))
      btn.classList.add('selected'); chosen = btn.dataset.level
      startBtn.disabled = false; startBtn.style.opacity = '1'; startBtn.style.pointerEvents = ''
      main.querySelector('#level-hint').style.display = 'none'
    })
  })
  startBtn.addEventListener('click', async () => {
    if (!chosen) return
    setLevel(chosen)
    await renderDashboard(main, { ...getProgress(), selectedLevel: chosen })
  })
}

// ── Dashboard ──────────────────────────────────────────────

async function renderDashboard(main, state) {
  const [user, profile] = await Promise.all([getUser(), getProfile()])
  const displayName = profile?.display_name || user?.email?.split('@')[0] || 'Learner'
  const avatarColor = profile?.avatar_color || '#2d6a4f'
  const initial = displayName[0].toUpperCase()

  const totalLessons = lessons.length
  const completedLessons = Object.values(state.lessons).filter(l => l.status === 'completed').length
  const streak = state.streakDays || 0
  const xp = state.xp || 0
  const { goal: dailyGoal, todayXp } = getDailyGoal()
  const goalPct = Math.min(100, Math.round((todayXp / dailyGoal) * 100))
  const goalReached = todayXp >= dailyGoal
  const lessonPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  // Due flashcards
  let dueCount = 0, wordsLearned = 0
  decks.forEach(deck => {
    const ds = state.flashcards[deck.id]
    if (ds) {
      const today = new Date().toISOString().split('T')[0]
      dueCount += Object.values(ds.cards).filter(c => c.nextReview <= today).length
      wordsLearned += Object.keys(ds.cards).length
    }
  })

  const ordered = getOrderedLessons(lessons)
  const primaryLesson = getNextLesson(ordered, state)
  const hasStarted = completedLessons > 0 || Object.values(state.lessons).some(l => l.status === 'in-progress')

  const courseSnapshot = getCourseSnapshot()
  const wotd = getWordOfTheDay(state.selectedLevel)
  const activityLog = state.activityLog || {}
  const todayMinutes = Math.round((todayXp / 5) * 2) // rough estimate
  const dailyMinuteGoal = profile?.daily_minutes || 10

  main.innerHTML = `
    <div style="max-width:900px;margin:0 auto;padding:28px 20px 60px">

      ${buildReminderBanner(todayXp)}

      <!-- Welcome Card -->
      <div style="background:linear-gradient(135deg,#eef4f0 0%,#deeae3 100%);border:1px solid #c8ddd0;border-radius:20px;padding:24px 28px;margin-bottom:20px;display:flex;align-items:center;gap:20px;flex-wrap:wrap">
        <div style="width:56px;height:56px;border-radius:50%;background:${avatarColor};border:3px solid #fff;display:flex;align-items:center;justify-content:center;font-size:1.4rem;font-weight:700;color:#fff;flex-shrink:0">${initial}</div>
        <div style="flex:1;min-width:0">
          <p style="margin:0 0 2px;font-size:13px;color:#6b8a76">${greeting()},</p>
          <h2 style="margin:0 0 6px;font-size:1.3rem;font-weight:800;color:#1e3a2a">${displayName}</h2>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
            <span style="background:#fff;color:#2d6a4f;font-size:12px;font-weight:700;padding:3px 10px;border-radius:99px;border:1px solid #c8ddd0">${state.selectedLevel}</span>
            <span style="font-size:13px;color:#6b8a76">·</span>
            <span style="font-size:13px;color:#3d6b52;font-weight:600">✨ ${xp.toLocaleString()} XP</span>
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          ${streak > 0 ? `<div style="background:#fff;border:1px solid #c8ddd0;border-radius:12px;padding:10px 16px;text-align:center"><div style="font-size:1.5rem">🔥</div><div style="font-size:1.3rem;font-weight:800;color:#2d6a4f;line-height:1">${streak}</div><div style="font-size:11px;color:#6b8a76;margin-top:2px">day streak</div></div>` : ''}
        </div>
      </div>

      ${buildCourseCard(courseSnapshot)}

      <!-- Continue Learning + Daily Goal -->
      <div class="dash-grid-2">

        <!-- Supplementary Reading -->
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px">
          <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:0 0 14px">📖 Supplementary Reading</p>
          ${primaryLesson ? `
            <div onclick="window.location.hash='/lessons/${primaryLesson.id}'" style="cursor:pointer">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
                <div style="width:44px;height:44px;background:var(--accent-soft,#e8f5e9);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0">${topicEmoji(primaryLesson.topic)}</div>
                <div style="flex:1;min-width:0">
                  <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--text-muted);margin-bottom:2px">ไม่บังคับ · อ่านเสริม</div>
                  <div style="font-size:13px;font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${primaryLesson.title}</div>
                  <div style="font-size:11px;color:var(--text-muted)">${primaryLesson.estimatedMinutes} min · ${primaryLesson.level}</div>
                </div>
              </div>
              <div style="margin-bottom:6px">
                <div style="height:5px;background:var(--border);border-radius:99px;overflow:hidden">
                  <div style="height:100%;width:${lessonPct}%;background:var(--accent);border-radius:99px"></div>
                </div>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted)">
                <span>${completedLessons}/${totalLessons} บทอ่าน</span><span>${lessonPct}%</span>
              </div>
            </div>
          ` : `<div style="text-align:center;padding:12px 0;color:var(--text-muted);font-size:13px">🏆 อ่านครบทุกบทแล้ว!</div>`}
        </div>

        <!-- Daily Goal -->
        <div style="background:var(--surface);border:1px solid ${goalReached ? 'var(--accent)' : 'var(--border)'};border-radius:16px;padding:20px">
          <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:0 0 14px">Daily Goal</p>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
            <div>
              <div style="font-size:1.6rem;font-weight:800;color:${goalReached?'var(--accent)':'var(--text)'};line-height:1">${goalPct}%</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:2px">${todayXp} / ${dailyGoal} XP</div>
            </div>
            <div style="font-size:2rem">${goalReached ? '🎯' : '💪'}</div>
          </div>
          <div style="height:8px;background:var(--border);border-radius:99px;overflow:hidden;margin-bottom:10px">
            <div style="height:100%;width:${goalPct}%;background:${goalReached?'var(--accent)':'var(--accent)'};border-radius:99px;transition:width .4s ease"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted)">
            <span>⏱ ~${todayMinutes} min today</span><span>Goal: ${dailyMinuteGoal} min</span>
          </div>
        </div>
      </div>

      <!-- Daily Challenge -->
      <div style="margin-bottom:20px">
        <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:0 0 12px">Daily Challenge</p>
        <div class="dash-grid-3">
          ${[
            { icon:'❓', label:'Quiz', sub:'Test your knowledge', link:'/quiz', border:'#e8d9b8', bg:'#fdf8ee' },
            { icon:'🃏', label:'Vocabulary', sub: dueCount>0?`${dueCount} cards due`:'Review words', link:'/flashcards', border:'#b8d4c0', bg:'#f0f7f2' },
            { icon:'✍️', label:'Dictation', sub:'Listen & type', link:'/dictation', border:'#ccc3e0', bg:'#f5f2fb' },
          ].map(c => `
            <a href="#${c.link}" style="background:${c.bg};border:1.5px solid ${c.border};border-radius:14px;padding:16px 14px;text-decoration:none;display:block;transition:transform .15s,box-shadow .15s"
               onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 16px rgba(0,0,0,.06)'"
               onmouseout="this.style.transform='';this.style.boxShadow=''">
              <div style="font-size:1.6rem;margin-bottom:8px">${c.icon}</div>
              <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:2px">${c.label}</div>
              <div style="font-size:11px;color:var(--text-muted)">${c.sub}</div>
            </a>
          `).join('')}
        </div>
      </div>

      <!-- Today's Word + Streak side by side -->
      <div class="dash-grid-2">

        <!-- Today's Word -->
        ${wotd ? `
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px 22px">
            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:0 0 14px">📖 Today's Word</p>
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:10px">
              <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                <span style="font-size:1.6rem;font-weight:800;color:var(--accent)">${wotd.front}</span>
                ${wotd.phonetic ? `<span style="font-size:12px;color:var(--text-muted);font-family:var(--font-mono)">${wotd.phonetic}</span>` : ''}
                ${ttsButton(wotd.front, 'ฟังคำนี้')}
              </div>
              <span style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;background:var(--accent);color:#fff;flex-shrink:0">${wotd.level}</span>
            </div>
            <div style="font-size:13px;color:var(--text);margin-bottom:5px;font-weight:500">${wotd.back}</div>
            <div style="font-size:12px;color:var(--text-muted);font-style:italic;margin-bottom:5px">"${wotd.example}" ${ttsButton(wotd.example, 'ฟังตัวอย่าง')}</div>
            <div style="font-size:12px;color:var(--accent);font-weight:500">🇹🇭 ${wotd.thai}</div>
          </div>
        ` : '<div></div>'}

        <!-- Streak + Calendar -->
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px 22px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:0">🔥 Streak</p>
            <div style="display:flex;align-items:center;gap:6px">
              <span style="font-size:1.3rem;font-weight:800;color:${streak>0?'#f59e0b':'var(--text-muted)'}">${streak}</span>
              <span style="font-size:12px;color:var(--text-muted)">day${streak!==1?'s':''}</span>
            </div>
          </div>
          ${buildCalendar(activityLog)}
        </div>

      </div>

      <!-- Statistics -->
      <div>
        <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:0 0 12px">Statistics</p>
        <div class="dash-grid-3">
          ${[
            { label:'Study Time', value: formatMinutes(state.xp || 0), icon:'⏱', sub:'estimated' },
            { label:'Lessons Done', value: completedLessons, icon:'📚', sub:`of ${totalLessons} total` },
            { label:'Words Learned', value: wordsLearned, icon:'💡', sub:'flashcards seen' },
          ].map(s => `
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px 16px">
              <div style="font-size:1.4rem;margin-bottom:6px">${s.icon}</div>
              <div style="font-size:1.4rem;font-weight:800;color:var(--accent);line-height:1;margin-bottom:4px">${s.value}</div>
              <div style="font-size:12px;font-weight:600;color:var(--text);margin-bottom:2px">${s.label}</div>
              <div style="font-size:11px;color:var(--text-muted)">${s.sub}</div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `

  attachTtsListeners(main)

  const dismissBtn = main.querySelector('#dismiss-reminder')
  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      dismissTodayReminder()
      main.querySelector('#reminder-banner')?.remove()
    })
  }
}

// ── Helpers ────────────────────────────────────────────────

// Picks the level the learner is actively working through (first level with
// content that isn't fully passed, else the last level with content) and the
// next unlocked-but-unpassed unit inside it.
function getCourseSnapshot() {
  const prog = getCourseProgress()
  const levels = getAllLevels().filter(l => l.units.length > 0)
  if (!levels.length) return null

  const level = levels.find(l => l.units.some(u => u.test && !prog[u.test.id]?.passed)) || levels[levels.length - 1]
  const units = level.units
  const passedCount = units.filter(u => u.test && prog[u.test.id]?.passed).length
  const nextUnit = units.find(u => u.test && isCourseUnitUnlocked(u.id, units) && !prog[u.test.id]?.passed) || null

  let sectionsDone = 0
  if (nextUnit) {
    sectionsDone = ['vocabulary', 'grammar', 'listening', 'reading']
      .filter(s => nextUnit[s] && prog[nextUnit[s].id]?.status === 'completed').length
  }

  return { level, passedCount, totalUnits: units.length, nextUnit, sectionsDone }
}

function buildCourseCard(snapshot) {
  if (!snapshot) return ''
  const { level, passedCount, totalUnits, nextUnit, sectionsDone } = snapshot
  const pct = totalUnits > 0 ? Math.round((passedCount / totalUnits) * 100) : 0
  const target = nextUnit ? `/course/${level.id}/${nextUnit.id}` : `/course/${level.id}`

  return `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:20px 22px;margin-bottom:20px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:0">📚 English Course</p>
        <a href="#/course" style="font-size:12px;color:var(--accent);text-decoration:none;font-weight:600">ดูทั้งหมด →</a>
      </div>
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
        <div style="font-size:2.2rem;flex-shrink:0">${level.emoji}</div>
        <div style="flex:1;min-width:180px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="background:${level.color};color:#fff;font-size:12px;font-weight:700;padding:2px 10px;border-radius:99px">${level.label}</span>
            <span style="font-weight:700;color:var(--text)">${level.title}</span>
          </div>
          <div style="height:6px;background:var(--border);border-radius:99px;overflow:hidden;margin:8px 0 4px">
            <div style="height:100%;width:${pct}%;background:${level.color};border-radius:99px;transition:width .4s ease"></div>
          </div>
          <div style="font-size:11px;color:var(--text-muted)">${passedCount}/${totalUnits} units ผ่านแล้ว</div>
        </div>
        <a href="#${target}" style="padding:10px 18px;background:var(--accent);color:#fff;border-radius:10px;font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;flex-shrink:0">
          ${nextUnit ? 'เรียนต่อ →' : 'ดูคอร์ส →'}
        </a>
      </div>
      ${nextUnit ? `
        <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border)">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
            <div style="min-width:0">
              <div style="font-size:10px;font-weight:700;text-transform:uppercase;color:var(--accent);margin-bottom:2px">ถัดไป</div>
              <div style="font-size:13px;font-weight:700;color:var(--text)">${nextUnit.title}</div>
            </div>
            <div style="font-size:11px;color:var(--text-muted)">${sectionsDone}/4 sections</div>
          </div>
        </div>
      ` : ''}
    </div>
  `
}

function buildReminderBanner(todayXp) {
  if (todayXp > 0 || isReminderDismissedToday()) return ''
  return `
    <div id="reminder-banner" style="background:#fdf8ee;border:1.5px solid #e8d9b8;border-radius:14px;padding:14px 18px;margin-bottom:18px;display:flex;align-items:center;gap:14px">
      <span style="font-size:1.3rem">⏰</span>
      <div style="flex:1">
        <div style="font-weight:700;font-size:13px;color:#7a5c1a">ยังไม่ได้เรียนวันนี้เลย!</div>
        <div style="font-size:12px;color:#9e7530">ก้าวเล็กๆ ทุกวันสร้างความแตกต่างได้มาก</div>
      </div>
      <a href="#/course" style="padding:8px 14px;background:#c9973a;color:#fff;border-radius:8px;font-size:12px;font-weight:700;text-decoration:none;white-space:nowrap">เรียนเลย →</a>
      <button id="dismiss-reminder" style="background:none;border:none;cursor:pointer;color:#9e7530;font-size:16px;padding:4px;line-height:1">✕</button>
    </div>
  `
}

function buildCalendar(activityLog) {
  const today = new Date()
  const WEEKS = 15
  const todayDow = today.getDay() // 0=Sun … 6=Sat

  // Start from Sunday of the oldest week so day labels (S M T W T F S) align
  const startOffset = todayDow + (WEEKS - 1) * 7
  const days = []

  for (let i = startOffset; i >= 0; i--) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const key = d.toISOString().split('T')[0]
    const xp = activityLog[key] || 0
    days.push({ key, xp, isToday: i === 0 })
  }

  // Pad remaining days of current week with nulls
  for (let i = 0; i < (6 - todayDow); i++) days.push(null)

  // Group into columns (weeks), each column = 7 days Sun→Sat
  const cols = []
  for (let w = 0; w < WEEKS; w++) cols.push(days.slice(w * 7, w * 7 + 7))

  const DOW = ['S','M','T','W','T','F','S']

  const dowLabels = DOW.map((d, i) =>
    '<div style="width:10px;height:12px;font-size:9px;color:var(--text-muted);display:flex;align-items:center;justify-content:center;' + (i % 2 === 0 ? 'opacity:0' : '') + '">' + d + '</div>'
  ).join('')

  const colsHTML = cols.map(week => {
    const monthLabel = week[0] && new Date(week[0].key).getDate() <= 7
      ? new Date(week[0].key).toLocaleString('en', { month: 'short' })
      : ''
    const cells = week.map(d => {
      if (!d) return '<div style="width:12px;height:12px"></div>'
      const bg = d.xp > 0
        ? 'rgba(45,106,79,' + Math.min(0.95, 0.25 + d.xp / 80) + ')'
        : 'var(--border)'
      const outline = d.isToday ? '2px solid var(--accent)' : 'none'
      const title = d.key + (d.xp > 0 ? ' · ' + d.xp + ' XP' : '')
      return '<div title="' + title + '" style="width:12px;height:12px;border-radius:3px;background:' + bg + ';outline:' + outline + ';outline-offset:1px;cursor:default;transition:transform .1s" onmouseover="this.style.transform=\'scale(1.4)\'" onmouseout="this.style.transform=\'\'"></div>'
    }).join('')
    return '<div style="display:flex;flex-direction:column;gap:3px"><div style="font-size:8px;color:var(--text-muted);text-align:center;height:16px;line-height:16px;white-space:nowrap">' + monthLabel + '</div>' + cells + '</div>'
  }).join('')

  const legendDots = [0.12, 0.3, 0.5, 0.7, 0.92].map(o =>
    '<div style="width:11px;height:11px;border-radius:3px;background:rgba(45,106,79,' + o + ')"></div>'
  ).join('')

  return `
    <div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
      <div style="display:flex;gap:3px;align-items:flex-start;min-width:max-content">
        <div style="display:flex;flex-direction:column;gap:3px;margin-right:4px;padding-top:20px">${dowLabels}</div>
        ${colsHTML}
      </div>
      <div style="display:flex;align-items:center;gap:5px;margin-top:10px">
        <span style="font-size:10px;color:var(--text-muted)">Less</span>
        ${legendDots}
        <span style="font-size:10px;color:var(--text-muted)">More</span>
      </div>
    </div>
  `
}

function formatMinutes(xp) {
  const mins = Math.round(xp / 5 * 2)
  if (mins < 60) return `${mins}m`
  return `${Math.floor(mins/60)}h ${mins%60}m`
}
