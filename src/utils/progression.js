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
