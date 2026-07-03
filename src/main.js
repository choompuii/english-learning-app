import { route, initRouter } from './router.js'
import { renderSidebar } from './components/sidebar.js'
import { renderHome } from './pages/home.js'
import { renderLessons } from './pages/lessons.js'
import { renderLessonReader } from './pages/lesson-reader.js'
import { renderFlashcards } from './pages/flashcards.js'
import { renderFlashcardSession } from './pages/flashcard-session.js'
import { renderQuizBrowser, renderQuiz } from './pages/quiz.js'
import { renderProgress } from './pages/progress.js'
import { renderSearch } from './pages/search.js'
import { renderNotebook } from './pages/notebook.js'
import { renderReviewMistakes } from './pages/review-mistakes.js'
import { renderDictationBrowser, renderDictation } from './pages/dictation.js'
import { renderGrammarCheck } from './pages/grammar-check.js'

// Register routes
route('/', () => renderHome())
route('/lessons', () => renderLessons())
route('/lessons/:id', ({ id }) => renderLessonReader({ id }))
route('/flashcards', () => renderFlashcards())
route('/flashcards/:id', ({ id }) => renderFlashcardSession({ id }))
route('/quiz', () => renderQuizBrowser())
route('/quiz/:id', ({ id }) => renderQuiz({ id }))
route('/progress', () => renderProgress())
route('/search', () => renderSearch())
route('/notebook', () => renderNotebook())
route('/review-mistakes', () => renderReviewMistakes())
route('/dictation', () => renderDictationBrowser())
route('/dictation/:id', ({ id }) => renderDictation({ id }))
route('/grammar', () => renderGrammarCheck())

// Boot
renderSidebar()
initRouter()
