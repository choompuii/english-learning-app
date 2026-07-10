import { navigate } from '../router.js'
import { getProgress } from '../store.js'
import { supabase } from '../lib/supabase.js'
import { getProfile } from '../lib/auth.js'

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

// mobile: true = show in bottom tab bar (max 5), false = desktop only
const navItems = [
  {
    id: 'home',
    label: 'Dashboard',
    hash: '/',
    mobile: true,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`
  },
  {
    id: 'course',
    label: 'Course',
    hash: '/course',
    mobile: true,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`
  },
  {
    id: 'skills',
    label: 'Skills',
    hash: '/skills',
    mobile: true,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
  },
  {
    id: 'flashcards',
    label: 'Flashcards',
    hash: '/flashcards',
    mobile: true,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`
  },
  {
    id: 'quiz',
    label: 'Quiz',
    hash: '/quiz',
    mobile: false,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
  },
  {
    id: 'notebook',
    label: 'Notebook',
    hash: '/notebook',
    mobile: false,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
  },
  {
    id: 'search',
    label: 'Search',
    hash: '/search',
    mobile: false,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
  },
  {
    id: 'progress',
    label: 'Progress',
    hash: '/progress',
    mobile: true,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
  },
  {
    id: 'speaking',
    label: 'Speaking',
    hash: '/speaking',
    mobile: false,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`
  },
  {
    id: 'grammar',
    label: 'Grammar Check',
    hash: '/grammar',
    mobile: false,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/><line x1="9" y1="10" x2="14" y2="15"/></svg>`
  },
  {
    id: 'sentence-builder',
    label: 'Sentence Builder',
    hash: '/sentence-builder',
    mobile: false,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><rect x="3" y="8" width="5" height="3" rx="1"/><rect x="10" y="8" width="5" height="3" rx="1"/><rect x="17" y="8" width="4" height="3" rx="1"/><rect x="3" y="13" width="7" height="3" rx="1"/><rect x="12" y="13" width="5" height="3" rx="1"/></svg>`
  },
  {
    id: 'speed-round',
    label: 'Speed Round',
    hash: '/speed-round',
    mobile: false,
    icon: `<svg class="nav-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  },
]

let _sidebarRendering = false
let _pendingRender = false

export async function renderSidebar() {
  if (_sidebarRendering) { _pendingRender = true; return }
  _sidebarRendering = true
  _pendingRender = false
  try {
    await _renderSidebarInner()
  } finally {
    _sidebarRendering = false
    if (_pendingRender) renderSidebar()
  }
}

async function _renderSidebarInner() {
  const sidebar = document.getElementById('sidebar')
  if (!sidebar) return
  const state = getProgress()
  const streak = state.streakDays || 0
  const { data: authData } = await supabase.auth.getUser()
  const user = authData?.user || null

  // Toggle full-screen auth mode
  document.body.classList.toggle('auth-mode', !user)
  if (!user) { sidebar.innerHTML = ''; return }

  const profile = user ? await getProfile() : null
  const displayName = profile?.display_name || (user ? user.email.split('@')[0] : null)

  sidebar.innerHTML = `
    <a class="sidebar-logo" href="#/">
      <div class="sidebar-logo-mark">EN</div>
      <span class="sidebar-logo-text">LearnEN</span>
    </a>
    <nav class="sidebar-nav">
      ${navItems.map(item => `
        <button class="nav-item" data-hash="${item.hash}"
          ${item.mobile === false ? 'data-mobile-hide="true"' : ''}>
          ${item.icon}
          <span>${item.label}</span>
        </button>
      `).join('')}
      <button class="nav-item more-btn" id="more-btn">
        <svg class="nav-icon" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
        <span>More</span>
      </button>
    </nav>
    <div class="sidebar-footer">
      <button class="nav-item" data-hash="/profile" style="width:100%;margin-bottom:var(--sp-2)">
        <svg class="nav-icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        <span style="flex:1;text-align:left">${displayName || 'Profile'}</span>
      </button>
      <button class="btn btn-ghost btn-sm" id="theme-toggle" style="width:100%;justify-content:center">
        ${isDark() ? '☀️ Light mode' : '🌙 Dark mode'}
      </button>
    </div>
  `

  // Inject More drawer into body (removed on each re-render)
  document.getElementById('more-drawer-overlay')?.remove()
  const hiddenItems = navItems.filter(i => i.mobile === false)
  const overlay = document.createElement('div')
  overlay.id = 'more-drawer-overlay'
  overlay.className = 'more-drawer-overlay'
  overlay.innerHTML = `
    <div id="more-drawer" class="more-drawer">
      <div class="more-drawer-handle"></div>
      <div class="more-drawer-grid">
        ${hiddenItems.map(item => `
          <button class="more-drawer-item" data-hash="${item.hash}">
            ${item.icon}
            <span>${item.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `
  document.body.appendChild(overlay)

  // Wire nav item clicks
  sidebar.querySelectorAll('.nav-item[data-hash]').forEach(btn => {
    btn.addEventListener('click', () => { window.location.hash = btn.dataset.hash })
  })

  // Wire More drawer open/close
  const moreBtn = sidebar.querySelector('#more-btn')
  const drawerOverlay = document.getElementById('more-drawer-overlay')
  const drawer = document.getElementById('more-drawer')

  function openDrawer() { drawerOverlay.classList.add('open'); drawer.classList.add('open') }
  function closeDrawer() { drawerOverlay.classList.remove('open'); drawer.classList.remove('open') }

  moreBtn?.addEventListener('click', openDrawer)
  drawerOverlay?.addEventListener('click', (e) => { if (e.target === drawerOverlay) closeDrawer() })
  drawerOverlay?.querySelectorAll('.more-drawer-item[data-hash]').forEach(btn => {
    btn.addEventListener('click', () => { window.location.hash = btn.dataset.hash; closeDrawer() })
  })

  updateActiveNav()

  sidebar.querySelector('#theme-toggle').addEventListener('click', toggleTheme)
}

export function updateActiveNav() {
  const currentHash = window.location.hash.slice(1) || '/'

  document.querySelectorAll('.nav-item[data-hash]').forEach(btn => {
    const hash = btn.dataset.hash
    const isActive = hash === '/'
      ? currentHash === '/'
      : currentHash.startsWith(hash)
    btn.classList.toggle('active', isActive)
  })

  // Highlight drawer items
  document.querySelectorAll('.more-drawer-item[data-hash]').forEach(btn => {
    const hash = btn.dataset.hash
    const isActive = hash === '/' ? currentHash === '/' : currentHash.startsWith(hash)
    btn.classList.toggle('active', isActive)
  })

  // Highlight More button when on a hidden-nav page
  const hiddenHashes = navItems.filter(i => !i.mobile).map(i => i.hash)
  const moreBtn = document.querySelector('#more-btn')
  if (moreBtn) {
    const anyHiddenActive = hiddenHashes.some(h => currentHash.startsWith(h))
    moreBtn.classList.toggle('active', anyHiddenActive)
  }
}

window.addEventListener('hashchange', updateActiveNav)
