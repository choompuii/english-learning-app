const KEY = 'elapp_progress'

const DEFAULT_STATE = {
  selectedLevel: null,
  streakDays: 0,
  lastStudyDate: null,
  xp: 0,
  lessons: {},
  quizzes: {},
  sentenceBuilder: {},
  speedRound: {},
  flashcards: {},
  notebook: [],
  dailyGoal: 50,
  todayXp: 0,
  todayDate: null,
  activityLog: {},
  badgesEarned: [],
  ttsCount: 0,
  dictationDone: [],
  goalStreakDays: 0,
  lastGoalDate: null,
  lessonNotes: {},
  reminderDismissedDate: null
}

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : { ...DEFAULT_STATE }
  } catch {
    return { ...DEFAULT_STATE }
  }
}

function save(state) {
  localStorage.setItem(KEY, JSON.stringify(state))
}

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

function yesterdayStr(dateStr) {
  const d = new Date(dateStr)
  d.setDate(d.getDate() - 1)
  return d.toISOString().split('T')[0]
}

function daysFromNow(n) {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return d.toISOString().split('T')[0]
}

function touchStreak(state) {
  const today = todayStr()
  if (state.lastStudyDate === today) return
  if (state.lastStudyDate && state.lastStudyDate === yesterdayStr(today)) {
    state.streakDays = (state.streakDays || 0) + 1
  } else {
    state.streakDays = 1
  }
  state.lastStudyDate = today
}

function touchActivityLog(state, xpAmount) {
  const today = todayStr()
  if (!state.activityLog) state.activityLog = {}
  state.activityLog[today] = (state.activityLog[today] || 0) + xpAmount
}

function touchGoalStreak(state) {
  const today = todayStr()
  syncTodayXp(state)
  if (state.todayXp >= (state.dailyGoal || 50)) {
    if (state.lastGoalDate === yesterdayStr(today)) {
      state.goalStreakDays = (state.goalStreakDays || 0) + 1
    } else if (state.lastGoalDate !== today) {
      state.goalStreakDays = 1
    }
    state.lastGoalDate = today
  }
}

// ── Public API ──

export function getProgress() {
  return load()
}

export function setLevel(level) {
  const s = load()
  s.selectedLevel = level
  save(s)
}

export function getLessonStatus(lessonId) {
  const s = load()
  return s.lessons[lessonId] || { status: 'not-started' }
}

export function startLesson(lessonId) {
  const s = load()
  if (!s.lessons[lessonId]) {
    s.lessons[lessonId] = { status: 'in-progress', startedAt: new Date().toISOString() }
    touchStreak(s)
    save(s)
  }
}

export function completeLesson(lessonId, timeSpentSeconds) {
  const s = load()
  touchStreak(s)
  s.lessons[lessonId] = {
    status: 'completed',
    completedAt: new Date().toISOString(),
    timeSpentSeconds: timeSpentSeconds || 0
  }
  s.xp = (s.xp || 0) + 50
  addTodayXp(s, 50)
  touchActivityLog(s, 50)
  touchGoalStreak(s)
  const newBadgesLesson = checkBadges(s)
  save(s)
  return newBadgesLesson
}

export function recordQuizAttempt(quizId, score, total, answers) {
  const s = load()
  touchStreak(s)
  if (!s.quizzes[quizId]) s.quizzes[quizId] = { attempts: [], bestScore: 0, bestTotal: total }
  const attempt = { date: new Date().toISOString(), score, total, answers: answers || {} }
  s.quizzes[quizId].attempts.push(attempt)
  if (score > s.quizzes[quizId].bestScore) {
    s.quizzes[quizId].bestScore = score
    s.quizzes[quizId].bestTotal = total
  }
  const quizXp = score * 10
  s.xp = (s.xp || 0) + quizXp
  addTodayXp(s, quizXp)
  touchActivityLog(s, quizXp)
  touchGoalStreak(s)
  const newBadgesQuiz = checkBadges(s)
  save(s)
  return newBadgesQuiz
}

export function getQuizBest(quizId) {
  const s = load()
  return s.quizzes[quizId] || null
}

// ── Mini-game best scores (Sentence Builder & Speed Round) ──
// Each records a best result per key (a level or a deck). The number of plays varies
// with retries/skips, so "best" is judged by accuracy (percentage), higher raw score
// breaking ties. Like recordQuizAttempt, finishing a session touches the streak and
// checks for new badges (XP itself is awarded per correct answer via addBonusXP).
function recordBestResult(namespace, key, score, total) {
  const s = load()
  if (!s[namespace]) s[namespace] = {}
  const prev = s[namespace][key] || { bestScore: 0, bestTotal: 0, plays: 0 }

  const pct = total > 0 ? score / total : 0
  const prevPct = prev.bestTotal > 0 ? prev.bestScore / prev.bestTotal : -1
  const beats = pct > prevPct || (pct === prevPct && score > prev.bestScore)
  const isNewRecord = beats && prev.plays > 0

  const entry = {
    bestScore: beats ? score : prev.bestScore,
    bestTotal: beats ? total : prev.bestTotal,
    plays: prev.plays + 1
  }
  s[namespace][key] = entry
  touchStreak(s)
  const newBadges = checkBadges(s)
  save(s)
  return { ...entry, isNewRecord, newBadges }
}

export function recordSentenceBuilderResult(level, score, total) {
  return recordBestResult('sentenceBuilder', level, score, total)
}

export function getSentenceBuilderBest(level) {
  const s = load()
  return (s.sentenceBuilder || {})[level] || null
}

export function recordSpeedRoundResult(deckId, correct, total) {
  return recordBestResult('speedRound', deckId, correct, total)
}

export function getSpeedRoundBest(deckId) {
  const s = load()
  return (s.speedRound || {})[deckId] || null
}

// SM-2 spaced repetition
export function updateFlashcard(deckId, cardId, rating) {
  // rating: 0=Again 1=Hard 2=Good 3=Easy
  const s = load()
  touchStreak(s)
  if (!s.flashcards[deckId]) s.flashcards[deckId] = { cards: {}, lastStudied: null }
  const deck = s.flashcards[deckId]
  deck.lastStudied = todayStr()

  let card = deck.cards[cardId] || { interval: 1, easeFactor: 2.5, repetitions: 0, nextReview: todayStr() }

  if (rating < 2) {
    card.interval = 1
    card.repetitions = 0
  } else {
    if (card.repetitions === 0) card.interval = 1
    else if (card.repetitions === 1) card.interval = 6
    else card.interval = Math.round(card.interval * card.easeFactor)
    card.repetitions += 1
  }

  card.easeFactor = Math.max(1.3,
    card.easeFactor + 0.1 - (3 - rating) * (0.08 + (3 - rating) * 0.02)
  )
  card.nextReview = daysFromNow(card.interval)
  card.lastResult = ['again', 'hard', 'good', 'easy'][rating]

  deck.cards[cardId] = card
  const xpGain = rating >= 2 ? 5 : 1
  s.xp = (s.xp || 0) + xpGain
  addTodayXp(s, xpGain)
  touchActivityLog(s, xpGain)
  save(s)
}

export function getDeckProgress(deckId, totalCards) {
  const s = load()
  const deck = s.flashcards[deckId]
  if (!deck) return { studied: 0, due: 0, total: totalCards }
  const today = todayStr()
  const studied = Object.keys(deck.cards).length
  const due = Object.values(deck.cards).filter(c => c.nextReview <= today).length
  return { studied, due, total: totalCards }
}

export function getDueCards(deckId, allCardIds) {
  const s = load()
  const deck = s.flashcards[deckId]
  if (!deck) return { due: [], newCards: allCardIds }
  const today = todayStr()
  const seen = new Set(Object.keys(deck.cards))
  const due = allCardIds.filter(id => seen.has(id) && deck.cards[id].nextReview <= today)
  const newCards = allCardIds.filter(id => !seen.has(id))
  return { due, newCards }
}

export function resetProgress() {
  localStorage.removeItem(KEY)
}

// ── Daily XP tracking ──

function syncTodayXp(state) {
  const today = todayStr()
  if (state.todayDate !== today) {
    state.todayXp = 0
    state.todayDate = today
  }
}

export function getDailyGoal() {
  const s = load()
  const before = s.todayDate
  syncTodayXp(s)
  if (s.todayDate !== before) save(s)
  return { goal: s.dailyGoal || 50, todayXp: s.todayXp || 0 }
}

export function setDailyGoal(xp) {
  const s = load()
  s.dailyGoal = xp
  save(s)
}

function addTodayXp(state, amount) {
  syncTodayXp(state)
  state.todayXp = (state.todayXp || 0) + amount
}

// ── Vocabulary notebook ──

export function saveToNotebook(entry) {
  // entry: { word, definition, thai, example, phonetic, source }
  const s = load()
  if (!s.notebook) s.notebook = []
  const exists = s.notebook.find(e => e.word.toLowerCase() === entry.word.toLowerCase())
  if (exists) return false
  s.notebook.unshift({ ...entry, savedAt: new Date().toISOString() })
  save(s)
  return true
}

export function removeFromNotebook(word) {
  const s = load()
  if (!s.notebook) return
  s.notebook = s.notebook.filter(e => e.word.toLowerCase() !== word.toLowerCase())
  save(s)
}

export function getNotebook() {
  const s = load()
  return s.notebook || []
}

export function isInNotebook(word) {
  const s = load()
  return (s.notebook || []).some(e => e.word.toLowerCase() === word.toLowerCase())
}

// ── TTS / Dictation tracking ──

export function incrementTtsCount() {
  const s = load()
  s.ttsCount = (s.ttsCount || 0) + 1
  const newBadges = checkBadges(s)
  save(s)
  return newBadges
}

export function markDictationDone(deckId) {
  const s = load()
  if (!s.dictationDone) s.dictationDone = []
  if (!s.dictationDone.includes(deckId)) s.dictationDone.push(deckId)
  const newBadges = checkBadges(s)
  save(s)
  return newBadges
}

// ── Badge definitions ──

export const BADGES = [
  { id: 'first-flame',   icon: '🔥',  name: 'First Flame',   desc: 'เรียนวันแรก', check: s => (s.streakDays || 0) >= 1 },
  { id: 'week-warrior',  icon: '⚔️',  name: 'Week Warrior',  desc: 'Streak 7 วัน', check: s => (s.streakDays || 0) >= 7 },
  { id: 'diamond-mind',  icon: '💎',  name: 'Diamond Mind',  desc: 'Streak 30 วัน', check: s => (s.streakDays || 0) >= 30 },
  { id: 'bookworm',      icon: '📚',  name: 'Bookworm',      desc: 'ทำ lesson ครบ 5 บท', check: s => Object.values(s.lessons || {}).filter(l => l.status === 'completed').length >= 5 },
  { id: 'quiz-master',   icon: '⚡',  name: 'Quiz Master',   desc: 'ผ่าน quiz ด้วยคะแนน 100%', check: s => Object.values(s.quizzes || {}).some(q => q.bestScore === q.bestTotal && q.bestTotal > 0) },
  { id: 'card-shark',    icon: '🃏',  name: 'Card Shark',    desc: 'เรียน flashcard ครบ 50 ใบ', check: s => Object.values(s.flashcards || {}).reduce((n, d) => n + Object.keys(d.cards || {}).length, 0) >= 50 },
  { id: 'on-target',     icon: '🎯',  name: 'On Target',     desc: 'ทำตาม daily goal 5 วันติดกัน', check: s => (s.goalStreakDays || 0) >= 5 },
  { id: 'scholar',       icon: '📓',  name: 'Scholar',       desc: 'บันทึกคำใน notebook 20 คำ', check: s => (s.notebook || []).length >= 20 },
  { id: 'listener',      icon: '🔊',  name: 'Listener',      desc: 'ฟัง TTS 50 ครั้ง', check: s => (s.ttsCount || 0) >= 50 },
  { id: 'typist',        icon: '✍️',  name: 'Typist',        desc: 'ทำ dictation ครบ 1 deck', check: s => (s.dictationDone || []).length >= 1 },
  { id: 'legend',        icon: '👑',  name: 'Legend',        desc: 'สะสม XP ถึง 1,000', check: s => (s.xp || 0) >= 1000 },
  { id: 'completionist', icon: '🎓',  name: 'Completionist', desc: 'ผ่านทุก lesson ใน 1 level', check: s => hasCompletedLevel(s) },
]

function hasCompletedLevel(s) {
  const { lessons: allLessons } = _getLessons()
  if (!allLessons) return false
  const byLevel = {}
  for (const l of allLessons) {
    if (!byLevel[l.level]) byLevel[l.level] = []
    byLevel[l.level].push(l.id)
  }
  return Object.values(byLevel).some(ids =>
    ids.every(id => s.lessons?.[id]?.status === 'completed')
  )
}

let _lessonsCache = null
function _getLessons() {
  if (_lessonsCache) return _lessonsCache
  try {
    // Dynamic import won't work synchronously — use a stored snapshot instead
    return { lessons: null }
  } catch { return { lessons: null } }
}

export function storeLessonsSnapshot(lessons) {
  _lessonsCache = { lessons }
}

export function checkBadges(state) {
  if (!state.badgesEarned) state.badgesEarned = []
  const newlyEarned = []
  for (const badge of BADGES) {
    if (!state.badgesEarned.includes(badge.id) && badge.check(state)) {
      state.badgesEarned.push(badge.id)
      newlyEarned.push(badge)
    }
  }
  return newlyEarned
}

// ── Bonus XP (Speed Round etc.) ──

export function addBonusXP(amount) {
  const s = load()
  touchStreak(s)
  s.xp = (s.xp || 0) + amount
  addTodayXp(s, amount)
  touchActivityLog(s, amount)
  touchGoalStreak(s)
  const newBadges = checkBadges(s)
  save(s)
  return newBadges
}

// ── Lesson Notes ──

export function saveLessonNote(lessonId, text) {
  const s = load()
  if (!s.lessonNotes) s.lessonNotes = {}
  s.lessonNotes[lessonId] = { text, updatedAt: new Date().toISOString() }
  save(s)
}

export function getLessonNote(lessonId) {
  const s = load()
  return (s.lessonNotes || {})[lessonId]?.text || ''
}

// ── Daily Reminder ──

export function dismissTodayReminder() {
  const s = load()
  s.reminderDismissedDate = todayStr()
  save(s)
}

export function isReminderDismissedToday() {
  const s = load()
  return s.reminderDismissedDate === todayStr()
}

export function getBadges() {
  const s = load()
  return BADGES.map(b => ({ ...b, earned: (s.badgesEarned || []).includes(b.id) }))
}

export function getActivityLog() {
  const s = load()
  return s.activityLog || {}
}
