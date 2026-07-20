import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

// Avoid the real Supabase client (network + auto-refresh timers) during tests.
vi.mock('../src/lib/supabase.js', () => ({
  supabase: {
    auth: { getUser: async () => ({ data: { user: null } }) },
    from: () => ({
      upsert: async () => ({}),
      select: () => ({ eq: () => ({ single: async () => ({ data: null, error: null }) }) }),
    }),
  },
}))

import {
  getProgress,
  resetProgress,
  recordGameResult,
  getGameBest,
  updateFlashcard,
  getDueCards,
  getDeckProgress,
  addBonusXP,
  recordQuizAttempt,
  getDailyGoal,
  saveToNotebook,
  removeFromNotebook,
  isInNotebook,
  recordVocabAnswer,
  getDifficultWords,
  getLearnedWords,
  recordDailyChallenge,
  getDailyChallengeStreak,
} from '../src/store.js'

const DAY = 'T08:00:00Z'
const setDay = (d) => vi.setSystemTime(new Date(d + DAY))

beforeEach(() => {
  localStorage.clear()
  resetProgress()
  vi.useFakeTimers()
  setDay('2026-07-20')
})

afterEach(() => {
  vi.useRealTimers()
})

// ── recordBestResult (via games) ──────────────────────────────────────
describe('recordBestResult / best-score tracking', () => {
  it('first play is never a "new record" but stores the score', () => {
    const r = recordGameResult('hangman:deck1', 3, 5)
    expect(r.isNewRecord).toBe(false)
    expect(r.bestScore).toBe(3)
    expect(r.bestTotal).toBe(5)
    expect(r.plays).toBe(1)
  })

  it('keeps the previous best when a later play is worse', () => {
    recordGameResult('hangman:deck1', 4, 5)          // 80%
    const r = recordGameResult('hangman:deck1', 2, 5) // 40%
    expect(r.isNewRecord).toBe(false)
    expect(r.bestScore).toBe(4)
    expect(r.plays).toBe(2)
  })

  it('flags a new record and updates best on a better accuracy', () => {
    recordGameResult('hangman:deck1', 3, 5)          // 60%
    const r = recordGameResult('hangman:deck1', 5, 5) // 100%
    expect(r.isNewRecord).toBe(true)
    expect(r.bestScore).toBe(5)
    expect(r.bestTotal).toBe(5)
  })

  it('breaks an accuracy tie by higher raw score', () => {
    recordGameResult('match:deck2', 2, 4)            // 50%, raw 2
    const r = recordGameResult('match:deck2', 3, 6)  // 50%, raw 3 → beats
    expect(r.isNewRecord).toBe(true)
    expect(r.bestScore).toBe(3)
    expect(r.bestTotal).toBe(6)
  })

  it('getGameBest returns null before any play, entry after', () => {
    expect(getGameBest('scramble:x')).toBeNull()
    recordGameResult('scramble:x', 1, 2)
    expect(getGameBest('scramble:x')).toMatchObject({ bestScore: 1, bestTotal: 2 })
  })
})

// ── SM-2 flashcard scheduling ─────────────────────────────────────────
describe('updateFlashcard (SM-2)', () => {
  const card = () => getProgress().flashcards.d1.cards.c1

  it('progresses intervals 1 → 6 → round(interval*ease) on repeated "good"', () => {
    updateFlashcard('d1', 'c1', 2)
    expect(card()).toMatchObject({ interval: 1, repetitions: 1 })
    updateFlashcard('d1', 'c1', 2)
    expect(card()).toMatchObject({ interval: 6, repetitions: 2 })
    updateFlashcard('d1', 'c1', 2)
    expect(card().interval).toBe(15) // round(6 * 2.5)
    expect(card().repetitions).toBe(3)
  })

  it('resets interval and repetitions when rated below "good"', () => {
    updateFlashcard('d1', 'c1', 2)
    updateFlashcard('d1', 'c1', 2)
    updateFlashcard('d1', 'c1', 0) // again
    expect(card()).toMatchObject({ interval: 1, repetitions: 0 })
  })

  it('never lets easeFactor drop below 1.3', () => {
    for (let i = 0; i < 12; i++) updateFlashcard('d1', 'c1', 0)
    expect(card().easeFactor).toBeGreaterThanOrEqual(1.3)
  })

  it('sets nextReview to interval days from now', () => {
    updateFlashcard('d1', 'c1', 2)
    expect(card().nextReview).toBe('2026-07-21') // +1 day
  })
})

describe('getDueCards / getDeckProgress', () => {
  it('treats unseen cards as new and scheduled cards as not-yet-due', () => {
    updateFlashcard('d1', 'c1', 3) // reviewed today, due in the future
    const { due, newCards } = getDueCards('d1', ['c1', 'c2', 'c3'])
    expect(due).toEqual([])
    expect(newCards).toEqual(['c2', 'c3'])
  })

  it('counts a card as due once its nextReview date arrives', () => {
    updateFlashcard('d1', 'c1', 2) // interval 1 → due 2026-07-21
    setDay('2026-07-22')
    expect(getDeckProgress('d1', 10).due).toBe(1)
  })
})

// ── Streaks ───────────────────────────────────────────────────────────
describe('daily streak (touchStreak)', () => {
  it('starts at 1, increments on consecutive days, holds within a day', () => {
    addBonusXP(10)
    expect(getProgress().streakDays).toBe(1)
    addBonusXP(10) // same day again
    expect(getProgress().streakDays).toBe(1)
    setDay('2026-07-21')
    addBonusXP(10)
    expect(getProgress().streakDays).toBe(2)
  })

  it('resets to 1 after a missed day', () => {
    addBonusXP(10)
    setDay('2026-07-23') // skipped the 21st and 22nd
    addBonusXP(10)
    expect(getProgress().streakDays).toBe(1)
  })
})

// ── Daily XP resets across the day boundary ──────────────────────────
describe('daily XP tracking', () => {
  it('accumulates today and resets on a new day', () => {
    addBonusXP(20)
    expect(getDailyGoal().todayXp).toBe(20)
    setDay('2026-07-21')
    expect(getDailyGoal().todayXp).toBe(0)
  })
})

// ── XP + badges ───────────────────────────────────────────────────────
describe('XP and badges', () => {
  it('awards quiz XP as score * 10', () => {
    recordQuizAttempt('q1', 6, 10, {})
    expect(getProgress().xp).toBe(60)
  })

  it('earns First Flame on the first day of study', () => {
    const newBadges = addBonusXP(10)
    expect(newBadges.map(b => b.id)).toContain('first-flame')
  })

  it('earns Legend when XP reaches 1000, only once', () => {
    const first = addBonusXP(1000)
    expect(first.map(b => b.id)).toContain('legend')
    const again = addBonusXP(10) // still >= 1000, but already earned
    expect(again.map(b => b.id)).not.toContain('legend')
  })
})

// ── Notebook ──────────────────────────────────────────────────────────
describe('notebook', () => {
  it('saves once, rejects case-insensitive duplicates, and removes', () => {
    expect(saveToNotebook({ word: 'Serendipity', thai: 'โชคดี' })).toBe(true)
    expect(saveToNotebook({ word: 'serendipity', thai: 'x' })).toBe(false)
    expect(isInNotebook('SERENDIPITY')).toBe(true)
    removeFromNotebook('serendipity')
    expect(isInNotebook('serendipity')).toBe(false)
  })

  it('ignores entries without a word', () => {
    expect(saveToNotebook({ thai: 'ไม่มีคำ' })).toBe(false)
  })
})

// ── Vocab difficulty classification ──────────────────────────────────
describe('difficult / learned words', () => {
  it('flags a word as difficult after >=2 wrong and <50% accuracy', () => {
    recordVocabAnswer('tough', false)
    recordVocabAnswer('tough', false)
    expect(getDifficultWords()).toContain('tough')
  })

  it('flags a word as learned after >=3 correct and >=70% accuracy', () => {
    recordVocabAnswer('easy', true)
    recordVocabAnswer('easy', true)
    recordVocabAnswer('easy', true)
    expect(getLearnedWords()).toContain('easy')
  })
})

// ── Daily Challenge streak ───────────────────────────────────────────
describe('daily challenge streak', () => {
  it('counts consecutive completed days', () => {
    recordDailyChallenge(5, 5)
    setDay('2026-07-21')
    recordDailyChallenge(5, 5)
    setDay('2026-07-22')
    recordDailyChallenge(5, 5)
    expect(getDailyChallengeStreak()).toBe(3)
  })

  it('still counts the streak on a fresh day before today is done', () => {
    recordDailyChallenge(5, 5) // 2026-07-20
    setDay('2026-07-21')       // today not done yet, yesterday was
    expect(getDailyChallengeStreak()).toBe(1)
  })

  it('awards the completion bonus only the first time each day', () => {
    const first = recordDailyChallenge(3, 5)
    expect(first.isFirst).toBe(true)
    expect(first.bonus).toBe(15)
    const second = recordDailyChallenge(4, 5)
    expect(second.isFirst).toBe(false)
    expect(second.bonus).toBe(0)
    expect(second.best).toBe(4) // best score kept across plays
  })
})
