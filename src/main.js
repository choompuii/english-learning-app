import { route, navigate, initRouter } from './router.js'
import { renderSidebar } from './components/sidebar.js'
import { onAuthChange, getUser } from './lib/auth.js'
import { initCloudSync, storeLessonsSnapshot } from './store.js'
import { lessons } from './data/lessons.js'
import { renderHome } from './pages/home.js'
import { renderLessons } from './pages/lessons.js'
import { renderLessonReader } from './pages/lesson-reader.js'
import { renderSkillsHub, renderSkillBrowser, renderSkillDetail } from './pages/skills.js'
import { renderFlashcards } from './pages/flashcards.js'
import { renderFlashcardSession } from './pages/flashcard-session.js'
import { renderQuizBrowser, renderQuiz } from './pages/quiz.js'
import { renderProgress } from './pages/progress.js'
import { renderSearch } from './pages/search.js'
import { renderNotebook } from './pages/notebook.js'
import { renderReviewMistakes } from './pages/review-mistakes.js'
import { renderDictationBrowser, renderDictation } from './pages/dictation.js'
import { renderCourseHub, renderLevelBrowser, renderUnitBrowser, renderCourseSection } from './pages/course.js'
import { renderGrammarCheck } from './pages/grammar-check.js'
import { renderSentenceBuilder } from './pages/sentence-builder.js'
import { renderSpeedRound } from './pages/speed-round.js'
import { renderAuth } from './pages/auth.js'
import { renderOnboarding } from './pages/onboarding.js'
import { renderProfile } from './pages/profile.js'
import { renderSpeakingBrowser } from './pages/speaking.js'
import { renderDaily } from './pages/daily.js'
import { renderInsights } from './pages/insights.js'
import { renderGamesHub, renderGame } from './pages/games.js'
import { renderConversationHub, renderConversation } from './pages/conversation.js'
import { renderIdiomsHub, renderIdiomCategory } from './pages/idioms.js'
import { registerServiceWorker } from './utils/pwa.js'
import { initReminders } from './utils/reminders.js'

// Auth guard — wraps any handler that requires login
function guard(fn) {
  return async (params) => {
    const user = await getUser()
    if (!user) { navigate('/account'); return }
    await fn(params)
  }
}

// Public routes (no login needed)
route('/account',    () => renderAuth())
route('/onboarding', () => renderOnboarding())
route('/profile',    guard(() => renderProfile()))

// Protected routes
route('/',                guard(() => renderHome()))
route('/course',                           guard(() => renderCourseHub()))
route('/course/:levelId',                  guard(({ levelId }) => renderLevelBrowser({ levelId })))
route('/course/:levelId/:unitId',          guard(({ levelId, unitId }) => renderUnitBrowser({ levelId, unitId })))
route('/course/:levelId/:unitId/:section', guard(({ levelId, unitId, section }) => renderCourseSection({ levelId, unitId, section })))
route('/lessons',         guard(() => navigate('/course')))
route('/lessons/:id',     guard(({ id }) => renderLessonReader({ id })))
route('/skills',              guard(() => renderSkillsHub()))
route('/skills/:skill',       guard(({ skill }) => renderSkillBrowser({ skill })))
route('/skills/:skill/:id',   guard(({ skill, id }) => renderSkillDetail({ skill, id })))
route('/flashcards',      guard(() => renderFlashcards()))
route('/flashcards/:id',  guard(({ id }) => renderFlashcardSession({ id })))
route('/quiz',            guard(() => renderQuizBrowser()))
route('/quiz/:id',        guard(({ id }) => renderQuiz({ id })))
route('/progress',        guard(() => renderProgress()))
route('/search',          guard(() => renderSearch()))
route('/notebook',        guard(() => renderNotebook()))
route('/review-mistakes', guard(() => renderReviewMistakes()))
route('/dictation',       guard(() => renderDictationBrowser()))
route('/dictation/:id',   guard(({ id }) => renderDictation({ id })))
route('/grammar',         guard(() => renderGrammarCheck()))
route('/speaking',        guard(() => renderSpeakingBrowser()))
route('/sentence-builder',guard(() => renderSentenceBuilder()))
route('/speed-round',     guard(() => renderSpeedRound()))
route('/daily',           guard(() => renderDaily()))
route('/insights',        guard(() => renderInsights()))
route('/games',           guard(() => renderGamesHub()))
route('/games/:game',     guard(({ game }) => renderGame({ game })))
route('/conversation',      guard(() => renderConversationHub()))
route('/conversation/:id',  guard(({ id }) => renderConversation({ id })))
route('/idioms',          guard(() => renderIdiomsHub()))
route('/idioms/:id',      guard(({ id }) => renderIdiomCategory({ id })))

// Boot
storeLessonsSnapshot(lessons)
renderSidebar()
initRouter()
registerServiceWorker()
initReminders()

// Auth listener — re-render sidebar and pull cloud data when auth changes
onAuthChange(async (user) => {
  renderSidebar()
  if (user) await initCloudSync()
})
