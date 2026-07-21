import { supabase } from './lib/supabase.js'

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
  speakingRound: {},
  games: {},
  conversations: {},
  idioms: {},
  flashcards: {},
  notebook: [],
  dailyGoal: 50,
  todayXp: 0,
  todayDate: null,
  activityLog: {},
  badgesEarned: [],
  ttsCount: 0,
  dictationDone: [],
  dictation: {},
  goalStreakDays: 0,
  lastGoalDate: null,
  lessonNotes: {},
  reminderDismissedDate: null,
  reminder: { enabled: false, time: '19:00', lastNotifiedDate: null },
  skillProgress: {},
  vocabProgress: {},
  practiceWords: [],
  dailyChallenge: {}
}

// ── Supabase sync ──

let _syncTimer = null

function scheduleSyncToCloud(state) {
  clearTimeout(_syncTimer)
  _syncTimer = setTimeout(() => syncToCloud(JSON.parse(JSON.stringify(state))), 2000)
}

async function syncToCloud(state) {
  const { data } = await supabase.auth.getUser()
  const user = data?.user || null
  if (!user) return
  await supabase.from('user_progress').upsert({ user_id: user.id, data: state, updated_at: new Date().toISOString() })
}

export async function pullFromCloud() {
  const { data: authData } = await supabase.auth.getUser()
  const user = authData?.user || null
  if (!user) return null
  const { data: row, error } = await supabase.from('user_progress').select('data').eq('user_id', user.id).single()
  if (error || !row) return null
  return row.data
}

export async function initCloudSync() {
  try {
    const cloudState = await pullFromCloud()
    if (cloudState) {
      const local = load()
      const localNewer = local._savedAt && cloudState._savedAt
        ? local._savedAt > cloudState._savedAt
        : local.xp > (cloudState.xp || 0)
      const merged = localNewer ? local : cloudState
      localStorage.setItem(KEY, JSON.stringify({ ...freshState(), ...merged }))
    }
  } catch (e) {
    console.error('Cloud sync failed', e)
  }
}

// A fresh, deeply-independent copy of the defaults. DEFAULT_STATE must never be
// mutated: load() hands its result to callers that write into nested objects
// (s.games[k] = ..., s.notebook.push(...)), so a shallow spread would share those
// nested references with DEFAULT_STATE and permanently pollute the defaults —
// which resurfaces stale data after resetProgress().
function freshState() {
  return structuredClone(DEFAULT_STATE)
}

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? { ...freshState(), ...JSON.parse(raw) } : freshState()
  } catch {
    return freshState()
  }
}

function save(state) {
  state._savedAt = new Date().toISOString()
  localStorage.setItem(KEY, JSON.stringify(state))
  scheduleSyncToCloud(state)
}

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

function yesterdayStr(dateStr) {
  const d = new Date(dateStr + 'T00:00:00Z')
  d.setUTCDate(d.getUTCDate() - 1)
  return d.toISOString().split('T')[0]
}

function daysFromNow(n) {
  const d = new Date()
  d.setUTCDate(d.getUTCDate() + n)
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
  }
  touchStreak(s)
  save(s)
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
  if (!s.quizzes[quizId]) s.quizzes[quizId] = { attempts: [], bestScore: 0, bestTotal: 0 }
  const attempt = { date: new Date().toISOString(), score, total, answers: answers || {} }
  s.quizzes[quizId].attempts.push(attempt)
  s.quizzes[quizId].bestTotal = total
  if (score > s.quizzes[quizId].bestScore) {
    s.quizzes[quizId].bestScore = score
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
  touchGoalStreak(s)
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

export function recordSpeakingResult(deckId, correct, total) {
  return recordBestResult('speakingRound', deckId, correct, total)
}

export function getSpeakingBest(deckId) {
  const s = load()
  return (s.speakingRound || {})[deckId] || null
}

// Word games (Hangman / Word Match / Scramble). Keyed by "<game>:<deckId>".
export function recordGameResult(gameKey, score, total) {
  return recordBestResult('games', gameKey, score, total)
}

export function getGameBest(gameKey) {
  const s = load()
  return (s.games || {})[gameKey] || null
}

// Role-play conversations. Keyed by conversation id.
export function recordConversationResult(convId, score, total) {
  return recordBestResult('conversations', convId, score, total)
}

export function getConversationBest(convId) {
  const s = load()
  return (s.conversations || {})[convId] || null
}

// Idioms & phrasal-verb quizzes. Keyed by category id.
export function recordIdiomResult(catId, score, total) {
  return recordBestResult('idioms', catId, score, total)
}

export function getIdiomBest(catId) {
  const s = load()
  return (s.idioms || {})[catId] || null
}

// ── Skills (Vocabulary / Grammar / Reading / Listening) ──
// A skill "item" is a vocabulary category, grammar topic, reading passage, or
// listening piece. Completion is tracked in a flat map keyed by the item id.

export function getSkillProgress() {
  const s = load()
  return s.skillProgress || {}
}

export function getSkillItemProgress(itemId) {
  const s = load()
  return (s.skillProgress || {})[itemId] || { status: 'not-started' }
}

// Mark a skill item complete. `score`/`total` are optional (for graded activities);
// `xp` is awarded through the same streak/goal/activity machinery as everything else.
// Pass xp:0 when the XP was already granted elsewhere (e.g. a grammar quiz recorded
// via recordQuizAttempt) to avoid double-counting.
export function recordSkillCompletion(itemId, { score = null, total = null, xp = 20 } = {}) {
  const s = load()
  touchStreak(s)
  if (!s.skillProgress) s.skillProgress = {}
  const prev = s.skillProgress[itemId] || {}
  s.skillProgress[itemId] = {
    status: 'completed',
    completedAt: new Date().toISOString(),
    bestScore: score != null ? Math.max(score, prev.bestScore || 0) : (prev.bestScore ?? null),
    bestTotal: total != null ? total : (prev.bestTotal ?? null),
    plays: (prev.plays || 0) + 1
  }
  if (xp > 0) {
    s.xp = (s.xp || 0) + xp
    addTodayXp(s, xp)
    touchActivityLog(s, xp)
  }
  touchGoalStreak(s)
  const newBadges = checkBadges(s)
  save(s)
  return newBadges
}

// ── Course progress (Course > Level > Unit > Section) ──

export function getCourseProgress() {
  return load().courseProgress || {}
}

export function getCourseSection(sectionId) {
  return (load().courseProgress || {})[sectionId] || { status: 'not-started' }
}

export function recordCourseSection(sectionId, { xp = 20 } = {}) {
  const s = load()
  touchStreak(s)
  if (!s.courseProgress) s.courseProgress = {}
  const prev = s.courseProgress[sectionId] || {}
  s.courseProgress[sectionId] = {
    status: 'completed',
    completedAt: new Date().toISOString(),
    plays: (prev.plays || 0) + 1
  }
  if (xp > 0) {
    s.xp = (s.xp || 0) + xp
    addTodayXp(s, xp)
    touchActivityLog(s, xp)
  }
  touchGoalStreak(s)
  const newBadges = checkBadges(s)
  save(s)
  return newBadges
}

export function recordCourseUnitTest(testId, score, total) {
  const s = load()
  touchStreak(s)
  if (!s.courseProgress) s.courseProgress = {}
  const prev = s.courseProgress[testId] || {}
  const passed = total > 0 && score / total >= 0.70
  const wasAlreadyPassed = prev.passed || false
  s.courseProgress[testId] = {
    status: 'completed',
    completedAt: new Date().toISOString(),
    bestScore: Math.max(score, prev.bestScore || 0),
    bestTotal: total,
    passed: passed || wasAlreadyPassed,
    plays: (prev.plays || 0) + 1
  }
  const xp = passed && !wasAlreadyPassed ? 50 : score * 5
  if (xp > 0) {
    s.xp = (s.xp || 0) + xp
    addTodayXp(s, xp)
    touchActivityLog(s, xp)
  }
  touchGoalStreak(s)
  const newBadges = checkBadges(s)
  save(s)
  return { newBadges, passed, xp }
}

export function isCourseUnitUnlocked(unitId, allUnits) {
  const idx = allUnits.findIndex(u => u.id === unitId)
  if (idx <= 0) return true
  const prevUnit = allUnits[idx - 1]
  if (!prevUnit?.test) return true
  const prevTest = prevUnit.test.id
  return (load().courseProgress || {})[prevTest]?.passed === true
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
  if (!entry?.word) return false
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

export function updateNotebookNote(word, note) {
  const s = load()
  if (!s.notebook) return
  const entry = s.notebook.find(e => e.word.toLowerCase() === word.toLowerCase())
  if (entry) {
    entry.note = note
    save(s)
  }
}

export function getNotebook() {
  const s = load()
  return s.notebook || []
}

export function isInNotebook(word) {
  const s = load()
  return (s.notebook || []).some(e => e.word.toLowerCase() === word.toLowerCase())
}

// ── Vocabulary progress tracking ──

export function recordVocabAnswer(word, isCorrect) {
  const s = load()
  if (!s.vocabProgress) s.vocabProgress = {}
  const p = s.vocabProgress[word] || { correct: 0, incorrect: 0 }
  if (isCorrect) p.correct++
  else p.incorrect++
  s.vocabProgress[word] = p
  save(s)
}

export function getDifficultWords() {
  const prog = load().vocabProgress || {}
  return Object.entries(prog)
    .filter(([, p]) => p.incorrect >= 2 && p.correct / (p.correct + p.incorrect) < 0.5)
    .map(([word]) => word)
}

export function getLearnedWords() {
  const prog = load().vocabProgress || {}
  return Object.entries(prog)
    .filter(([, p]) => p.correct >= 3 && p.correct / (p.correct + p.incorrect) >= 0.7)
    .map(([word]) => word)
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

// Dictation sessions now record a best score per deck (like Speed Round). We also
// keep marking the deck "done" so the Typist badge (which checks dictationDone)
// still fires — recordBestResult loads fresh state, so the flag must be saved first.
export function recordDictationResult(deckId, correct, total) {
  const s = load()
  if (!s.dictationDone) s.dictationDone = []
  if (!s.dictationDone.includes(deckId)) s.dictationDone.push(deckId)
  save(s)
  return recordBestResult('dictation', deckId, correct, total)
}

export function getDictationBest(deckId) {
  const s = load()
  return (s.dictation || {})[deckId] || null
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
  { id: 'daily-devotee', icon: '🗓️',  name: 'Daily Devotee', desc: 'ทำ Daily Challenge ครบ 7 วัน', check: s => Object.keys(s.dailyChallenge || {}).length >= 7 },
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

// ── Practice Words (Speed Round) ──

export function addToPracticeList(card) {
  const s = load()
  if (!s.practiceWords) s.practiceWords = []
  if (s.practiceWords.some(c => c.front.toLowerCase() === card.front.toLowerCase())) return false
  s.practiceWords.push({
    front: card.front,
    back: card.back,
    thai: card.thai,
    phonetic: card.phonetic || '',
    acceptedVariants: card.acceptedVariants || []
  })
  save(s)
  return true
}

export function removeFromPracticeList(word) {
  const s = load()
  if (!s.practiceWords) return
  s.practiceWords = s.practiceWords.filter(c => c.front.toLowerCase() !== word.toLowerCase())
  save(s)
}

export function getPracticeList() {
  return load().practiceWords || []
}

export function isInPracticeList(word) {
  return (load().practiceWords || []).some(c => c.front.toLowerCase() === word.toLowerCase())
}

// ── Daily Challenge ──
// A mixed daily review drawn from the learner's weak/due words. Completion is
// logged per day (YYYY-MM-DD); the number of distinct logged days both drives
// the Daily Devotee badge and lets us derive a "days in a row" streak.

export function getDailyChallengeToday() {
  const s = load()
  return (s.dailyChallenge || {})[todayStr()] || null
}

// Consecutive days (ending today or yesterday) with a completed daily challenge.
export function getDailyChallengeStreak() {
  const log = load().dailyChallenge || {}
  let streak = 0
  let cursor = todayStr()
  // Allow the streak to still "count" if today isn't done yet but yesterday was.
  if (!log[cursor]) cursor = yesterdayStr(cursor)
  while (log[cursor]) {
    streak++
    cursor = yesterdayStr(cursor)
  }
  return streak
}

export function recordDailyChallenge(score, total) {
  const s = load()
  touchStreak(s)
  if (!s.dailyChallenge) s.dailyChallenge = {}
  const today = todayStr()
  const prev = s.dailyChallenge[today]
  const isFirst = !prev
  s.dailyChallenge[today] = {
    score: Math.max(score, prev?.score || 0),
    total,
    completedAt: new Date().toISOString(),
    plays: (prev?.plays || 0) + 1
  }
  // Completion bonus awarded only the first time each day (per-question XP is
  // granted live via addBonusXP during the run).
  let bonus = 0
  if (isFirst) {
    bonus = 15
    s.xp = (s.xp || 0) + bonus
    addTodayXp(s, bonus)
    touchActivityLog(s, bonus)
  }
  touchGoalStreak(s)
  const newBadges = checkBadges(s)
  save(s)
  return { newBadges, isFirst, bonus, best: s.dailyChallenge[today].score }
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

// ── Daily study reminder settings ──
// A local, in-app reminder: when enabled, the app fires a browser notification
// at the chosen time on any day the learner hasn't studied yet. Requires the tab
// to be open (no push server — the app is fully free/serverless on this front).

const DEFAULT_REMINDER = { enabled: false, time: '19:00', lastNotifiedDate: null }

export function getReminderSettings() {
  const s = load()
  return { ...DEFAULT_REMINDER, ...(s.reminder || {}) }
}

export function setReminderSettings({ enabled, time } = {}) {
  const s = load()
  const cur = { ...DEFAULT_REMINDER, ...(s.reminder || {}) }
  if (typeof enabled === 'boolean') cur.enabled = enabled
  if (typeof time === 'string' && /^\d{2}:\d{2}$/.test(time)) cur.time = time
  s.reminder = cur
  save(s)
  return cur
}

// Records that today's reminder notification has fired, so it isn't repeated.
export function markReminderNotified() {
  const s = load()
  const cur = { ...DEFAULT_REMINDER, ...(s.reminder || {}) }
  cur.lastNotifiedDate = todayStr()
  s.reminder = cur
  save(s)
}

// Whether a reminder should fire right now: enabled, past the chosen time today,
// the learner hasn't earned XP today, and we haven't already notified today.
export function shouldRemindNow(now = new Date()) {
  const s = load()
  const r = { ...DEFAULT_REMINDER, ...(s.reminder || {}) }
  if (!r.enabled) return false
  const today = todayStr()
  if (r.lastNotifiedDate === today) return false
  const studiedToday = s.todayDate === today && (s.todayXp || 0) > 0
  if (studiedToday) return false
  const [h, m] = r.time.split(':').map(Number)
  const target = h * 60 + m
  const cur = now.getHours() * 60 + now.getMinutes()
  return cur >= target
}

export function getActivityLog() {
  const s = load()
  return s.activityLog || {}
}
