import { navigate } from '../router.js'
import { getProgress } from '../store.js'

const THEME_KEY = 'elapp_theme'

function isDark() {
  return localStorage.getItem(THEME_KEY) === 'dark'
}

export function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark() ? 'dark' : '')
}

export function toggleTheme() {
  localStorage.setItem(THEME_KEY, isDark() ? 'light' : 'dark')
  applyTheme()
  renderSidebar()
}

applyTheme()

const navItems = [
  {
    id: 'home',
    label: 'Dashboard',
    hash: '/',
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`
  },
  {
    id: 'lessons',
    label: 'Lessons',
    hash: '/lessons',
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`
  },
  {
    id: 'flashcards',
    label: 'Flashcards',
    hash: '/flashcards',
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`
  },
  {
    id: 'quiz',
    label: 'Quiz',
    hash: '/quiz',
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
  },
  {
    id: 'notebook',
    label: 'Notebook',
    hash: '/notebook',
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
  },
  {
    id: 'search',
    label: 'Search',
    hash: '/search',
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
  },
  {
    id: 'progress',
    label: 'Progress',
    hash: '/progress',
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
  }
]

export function renderSidebar() {
  const sidebar = document.getElementById('sidebar')
  const state = getProgress()
  const streak = state.streakDays || 0

  sidebar.innerHTML = `
    <a class="sidebar-logo" href="#/">
      <div class="sidebar-logo-mark">EN</div>
      <span class="sidebar-logo-text">LearnEN</span>
    </a>
    <nav class="sidebar-nav">
      ${navItems.map(item => `
        <button class="nav-item" data-hash="${item.hash}" onclick="window.location.hash='${item.hash}'">
          ${item.icon}
          <span>${item.label}</span>
        </button>
      `).join('')}
    </nav>
    <div class="sidebar-footer">
      ${streak > 0 ? `
        <div class="streak-widget" style="margin-bottom:var(--sp-3)">
          <span>🔥</span>
          <span>${streak} day streak</span>
        </div>
      ` : ''}
      <button class="btn btn-ghost btn-sm" id="theme-toggle" style="width:100%;justify-content:center">
        ${isDark() ? '☀️ Light mode' : '🌙 Dark mode'}
      </button>
    </div>
  `

  updateActiveNav()

  sidebar.querySelector('#theme-toggle').addEventListener('click', toggleTheme)
}

export function updateActiveNav() {
  const currentHash = window.location.hash.slice(1) || '/'
  document.querySelectorAll('.nav-item').forEach(btn => {
    const hash = btn.dataset.hash
    const isActive = hash === '/'
      ? currentHash === '/'
      : currentHash.startsWith(hash)
    btn.classList.toggle('active', isActive)
  })
}

window.addEventListener('hashchange', updateActiveNav)
