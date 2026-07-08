import { getDeckById } from '../data/vocabulary.js'
import { getQuizById } from '../data/quizzes.js'

const LEVEL_ORDER = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 }

// Returns lessons sorted A1→A2→B1→B2→C1→C2, preserving original order within level
export function getOrderedLessons(allLessons) {
  return [...allLessons].sort((a, b) => {
    const la = LEVEL_ORDER[a.level] || 99
    const lb = LEVEL_ORDER[b.level] || 99
    if (la !== lb) return la - lb
    return allLessons.indexOf(a) - allLessons.indexOf(b)
  })
}

// A lesson is "passed" when the user has proven they understand it
export function isLessonPassed(lesson, state) {
  if (lesson.quizId) {
    const best = state.quizzes[lesson.quizId]
    return !!(best && best.bestScore / best.bestTotal >= 0.7)
  }
  return state.lessons[lesson.id]?.status === 'completed'
}

// All lessons are unlocked — learners can explore freely
export function isLessonUnlocked(lessonId, orderedLessons, state) {
  return true
}

// Returns the next lesson the user should work on
export function getNextLesson(orderedLessons, state) {
  return orderedLessons.find(l => isLessonUnlocked(l.id, orderedLessons, state) && !isLessonPassed(l, state)) || null
}

// The single most important thing to do right after finishing a lesson.
// Priority: study its vocabulary → take its quiz → move to the next lesson → all done.
// Shared by the lesson reader and (for the next-lesson step) the quiz results screen so
// the guided path is always consistent. Returns a plain descriptor the caller renders.
export function getNextAction(lesson, state, orderedLessons) {
  // Step 1 — study the lesson's vocabulary deck (if any, and not yet started)
  if (lesson.vocabularyDeckId) {
    const studied = Object.keys(state.flashcards?.[lesson.vocabularyDeckId]?.cards || {}).length > 0
    if (!studied) {
      const deck = getDeckById(lesson.vocabularyDeckId)
      return {
        type: 'vocab',
        href: `#/flashcards/${lesson.vocabularyDeckId}`,
        cta: 'เรียนคำศัพท์ต่อ →',
        emoji: '📚',
        title: 'เรียน Vocabulary ก่อน',
        subtitle: `${deck ? deck.cards.length : ''} flashcards — ช่วยให้จำคำศัพท์ได้แน่น`,
        tone: 'accent'
      }
    }
  }

  // Step 2 — take the lesson's quiz until it is passed (≥ 70%), matching the quiz
  // results screen, which only unlocks the next lesson on a pass.
  if (lesson.quizId) {
    const qb = state.quizzes?.[lesson.quizId]
    const passed = !!(qb && qb.bestTotal > 0 && qb.bestScore / qb.bestTotal >= 0.7)
    if (!passed) {
      const quiz = getQuizById(lesson.quizId)
      const retry = !!qb
      return {
        type: 'quiz',
        href: `#/quiz/${lesson.quizId}`,
        cta: retry ? 'ทำ Quiz อีกครั้ง →' : 'ทำ Quiz ต่อ →',
        emoji: '❓',
        title: retry ? 'ยังไม่ผ่าน — ลองทำ Quiz อีกครั้ง' : 'ทดสอบความเข้าใจ',
        subtitle: `Quiz ${quiz ? quiz.questions.length + ' ข้อ' : ''} — ต้องได้ ≥ 70% เพื่อปลดล็อคบทถัดไป`,
        tone: 'gold'
      }
    }
  }

  // Step 3 — move on to the next lesson in canonical order
  const idx = orderedLessons.findIndex(l => l.id === lesson.id)
  const next = idx > -1 ? orderedLessons[idx + 1] : null
  if (next) {
    return {
      type: 'next-lesson',
      href: `#/lessons/${next.id}`,
      cta: 'ไปบทเรียนถัดไป →',
      emoji: '➡️',
      title: next.title,
      subtitle: `${next.level} · ⏱ ${next.estimatedMinutes} min`,
      tone: 'neutral',
      lesson: next
    }
  }

  // Step 4 — everything is done
  return {
    type: 'done',
    href: '#/progress',
    cta: 'ดูความคืบหน้า →',
    emoji: '🎉',
    title: 'ทำครบทุก lesson แล้ว!',
    subtitle: 'สุดยอดมาก — ไปดูสรุปความคืบหน้าของคุณได้เลย',
    tone: 'done'
  }
}
