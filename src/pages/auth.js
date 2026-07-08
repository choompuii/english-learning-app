import { signIn, signUp, signOut, getUser, getProfile, saveProfile,
         updatePassword, updateEmail, sendPasswordReset, signInWithGoogle } from '../lib/auth.js'
import { supabase } from '../lib/supabase.js'
import { initCloudSync, getProgress } from '../store.js'
import { renderSidebar } from '../components/sidebar.js'
import { navigate } from '../router.js'

// ── Entry point ────────────────────────────────────────────

export async function renderAuth() {
  const main = document.getElementById('main-content')

  // Detect password-recovery session (Supabase redirects back with a recovery token)
  const { data: { session } } = await supabase.auth.getSession()
  if (session?.user && window.location.hash.includes('type=recovery')) {
    renderResetPasswordForm(main); return
  }

  const user = await getUser()
  if (user) { await renderAccountPage(user, main); return }
  renderAuthForm(main, 'login')
}

// ── Shared styles ──────────────────────────────────────────

const INP   = `width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;font-size:14px;font-family:var(--font-body);color:var(--text);background:var(--bg);outline:none;box-sizing:border-box;transition:border-color .15s`
const LBL   = `display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--text)`
const BTN   = `width:100%;padding:11px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;font-family:var(--font-body)`
const BTN_S = `padding:10px 16px;background:none;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;color:var(--text);font-family:var(--font-body)`
const BTN_G = `padding:10px 16px;background:none;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;color:var(--text-muted);font-family:var(--font-body)`
const EYE_O = `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
const EYE_C = `<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`

function errBox(msg) {
  return msg ? `<div style="background:#fef2f2;border:1px solid #fecaca;color:#dc2626;padding:10px 14px;border-radius:8px;margin-bottom:16px;font-size:13px;display:flex;gap:8px;align-items:center"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>${msg}</div>` : ''
}

function pwField(id, placeholder, autocomplete = 'current-password') {
  return `<div style="position:relative">
    <input id="${id}" type="password" required autocomplete="${autocomplete}" style="${INP};padding-right:44px" placeholder="${placeholder}" />
    <button type="button" class="eye-btn" data-target="${id}" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;padding:2px;color:var(--text-muted);display:flex">${EYE_O}</button>
  </div>`
}

function divider() {
  return `<div style="display:flex;align-items:center;gap:12px;margin:4px 0">
    <div style="flex:1;height:1px;background:var(--border)"></div>
    <span style="font-size:12px;color:var(--text-muted)">or</span>
    <div style="flex:1;height:1px;background:var(--border)"></div>
  </div>`
}

function socialButtons() {
  return `
    <button id="btn-google" type="button" disabled style="${BTN_S};width:100%;display:flex;align-items:center;justify-content:center;gap:10px;opacity:.4;cursor:not-allowed">
      <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
      Continue with Google
    </button>
    <button type="button" style="${BTN_S};width:100%;display:flex;align-items:center;justify-content:center;gap:10px;opacity:.4;cursor:not-allowed" disabled>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.05.17zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
      Continue with Apple
    </button>
    <button type="button" style="${BTN_S};width:100%;display:flex;align-items:center;justify-content:center;gap:10px;opacity:.4;cursor:not-allowed" disabled>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      Continue with Facebook
    </button>
  `
}

function wireEyes(main) {
  main.querySelectorAll('.eye-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = main.querySelector(`#${btn.dataset.target}`)
      const show = input.type === 'password'
      input.type = show ? 'text' : 'password'
      btn.innerHTML = show ? EYE_C : EYE_O
    })
  })
}

function wireFocus(main) {
  main.querySelectorAll('input').forEach(el => {
    el.addEventListener('focus', () => { el.style.borderColor = 'var(--accent)' })
    el.addEventListener('blur',  () => { el.style.borderColor = 'var(--border)' })
  })
}

function shell(content, showBrand = true) {
  const brand = showBrand ? `
    <div style="display:none;background:#1a3328;min-height:100vh;flex-direction:column;justify-content:space-between;padding:48px 48px 40px;flex:1" class="auth-brand">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:64px">
          <div style="width:36px;height:36px;background:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800;color:#1a3328;font-size:14px">EN</div>
          <span style="font-weight:700;font-size:1.05rem;color:#fff">LearnEN</span>
        </div>
        <h2 style="font-size:2rem;font-weight:800;color:#fff;line-height:1.25;margin:0 0 16px">Learn English.<br>Track progress.<br>Achieve more.</h2>
        <p style="font-size:14px;color:rgba(255,255,255,.6);margin:0 0 40px;line-height:1.6">แพลตฟอร์มเรียนภาษาอังกฤษที่ปรับตามระดับและเป้าหมายของคุณ</p>
        <div style="display:flex;flex-direction:column;gap:16px">
          ${[['📚','Flashcards + SRS','ระบบ Spaced Repetition ช่วยให้จำคำศัพท์ได้นานขึ้น'],['🎯','Quiz & Games','ทดสอบความรู้ผ่านเกมหลากหลายรูปแบบ'],['📊','Track Progress','ติดตาม XP, streak, และ badge สะสม']].map(([icon,title,desc]) => `
            <div style="display:flex;gap:14px;align-items:flex-start">
              <div style="width:36px;height:36px;background:rgba(255,255,255,.1);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0">${icon}</div>
              <div>
                <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:2px">${title}</div>
                <div style="font-size:12px;color:rgba(255,255,255,.5);line-height:1.4">${desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="border-top:1px solid rgba(255,255,255,.1);padding-top:24px">
        <p style="font-size:13px;color:rgba(255,255,255,.4);margin:0">© 2026 LearnEN · ฟรี 100%</p>
      </div>
    </div>
  ` : ''

  return `
    <div style="min-height:100vh;display:flex;background:var(--bg)">
      ${brand}
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 24px;min-width:0">
        <div style="width:100%;max-width:380px">
          ${content}
        </div>
      </div>
    </div>
    <style>
      @media(min-width:900px) { .auth-brand { display:flex !important; } }
    </style>
  `
}

// ── Login ──────────────────────────────────────────────────

function renderAuthForm(main, mode, error = '') {
  const isLogin = mode === 'login'
  main.innerHTML = shell(`
    <div style="margin-bottom:32px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:24px" class="auth-logo-mobile">
        <div style="width:30px;height:30px;background:var(--accent);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;font-size:12px">EN</div>
        <span style="font-weight:700;font-size:.95rem;color:var(--text)">LearnEN</span>
      </div>
      <h1 style="font-size:1.6rem;font-weight:800;margin:0 0 6px;color:var(--text)">${isLogin ? 'Welcome back' : 'Get started'}</h1>
      <p style="margin:0;font-size:14px;color:var(--text-muted)">${isLogin ? 'Sign in to continue learning.' : 'Create your free account today.'}</p>
    </div>
    <style>@media(min-width:900px){.auth-logo-mobile{display:none!important}}</style>
    ${errBox(error)}

    ${socialButtons()}
    ${divider()}

    <form id="auth-form" style="display:flex;flex-direction:column;gap:14px">
      ${!isLogin ? `<div>
        <label style="${LBL}">Full name</label>
        <input id="auth-name" type="text" autocomplete="name" style="${INP}" placeholder="Your name" />
      </div>` : ''}
      <div>
        <label style="${LBL}">Email</label>
        <input id="auth-email" type="email" required autocomplete="email" style="${INP}" placeholder="you@example.com" />
      </div>
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <label style="font-size:13px;font-weight:600;color:var(--text)">Password</label>
          ${isLogin ? `<button type="button" id="forgot-btn" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:12px;font-weight:600;padding:0">Forgot password?</button>` : ''}
        </div>
        ${pwField('auth-password', isLogin ? '••••••••' : 'Min. 6 characters', isLogin ? 'current-password' : 'new-password')}
      </div>
      ${!isLogin ? `<div>
        <label style="${LBL}">Confirm password</label>
        ${pwField('auth-confirm', 'Repeat password', 'new-password')}
      </div>` : ''}

      ${isLogin ? `
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:var(--text)">
          <input id="remember-me" type="checkbox" checked style="width:15px;height:15px;accent-color:var(--accent)" />
          Remember me
        </label>
      ` : `
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:13px;color:var(--text)">
          <input id="accept-terms" type="checkbox" required style="width:15px;height:15px;accent-color:var(--accent);flex-shrink:0" />
          <span>I agree to the <button type="button" id="show-terms" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:13px;font-weight:600;padding:0">Terms of Service</button> &amp; <button type="button" id="show-privacy" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:13px;font-weight:600;padding:0">Privacy Policy</button></span>
        </label>

        <!-- Modals -->
        <div id="modal-terms" style="display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.5);align-items:center;justify-content:center;padding:20px">
          <div style="background:var(--surface);border-radius:16px;width:100%;max-width:500px;max-height:80vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.3)">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-bottom:1px solid var(--border)">
              <h2 style="margin:0;font-size:1.1rem;font-weight:700;color:var(--text)">Terms of Service</h2>
              <button class="close-modal" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:20px;line-height:1;padding:4px">✕</button>
            </div>
            <div style="overflow-y:auto;padding:24px;font-size:13px;color:var(--text);line-height:1.7">
              <p style="margin:0 0 16px;color:var(--text-muted);font-size:12px">Last updated: July 2026</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">1. Acceptance of Terms</h3>
              <p style="margin:0 0 16px">By creating an account on LearnEN, you agree to these Terms of Service. If you do not agree, please do not use the service.</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">2. Use of Service</h3>
              <p style="margin:0 0 16px">LearnEN is provided for personal, educational use only. You may not use it for commercial purposes or share your account with others.</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">3. Your Account</h3>
              <p style="margin:0 0 16px">You are responsible for keeping your password secure. We are not liable for any loss resulting from unauthorized access to your account.</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">4. Content</h3>
              <p style="margin:0 0 16px">All vocabulary, lessons, and learning content are provided for educational purposes. We reserve the right to modify or remove content at any time.</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">5. Termination</h3>
              <p style="margin:0 0 16px">We reserve the right to suspend or terminate accounts that violate these terms.</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">6. Changes</h3>
              <p style="margin:0">We may update these terms occasionally. Continued use of the service after changes means you accept the new terms.</p>
            </div>
            <div style="padding:16px 24px;border-top:1px solid var(--border)">
              <button class="close-modal" style="${BTN}">Got it</button>
            </div>
          </div>
        </div>

        <div id="modal-privacy" style="display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.5);align-items:center;justify-content:center;padding:20px">
          <div style="background:var(--surface);border-radius:16px;width:100%;max-width:500px;max-height:80vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.3)">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-bottom:1px solid var(--border)">
              <h2 style="margin:0;font-size:1.1rem;font-weight:700;color:var(--text)">Privacy Policy</h2>
              <button class="close-modal" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:20px;line-height:1;padding:4px">✕</button>
            </div>
            <div style="overflow-y:auto;padding:24px;font-size:13px;color:var(--text);line-height:1.7">
              <p style="margin:0 0 16px;color:var(--text-muted);font-size:12px">Last updated: July 2026</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">1. Data We Collect</h3>
              <p style="margin:0 0 16px">We collect your email address, learning progress (XP, streaks, flashcard scores), and notebook entries. We do not collect sensitive personal data.</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">2. How We Use Your Data</h3>
              <p style="margin:0 0 16px">Your data is used solely to provide and improve the LearnEN service — syncing progress across devices, displaying your stats, and personalizing your experience.</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">3. Data Storage</h3>
              <p style="margin:0 0 16px">Data is stored securely on Supabase servers (Singapore region). We use industry-standard encryption and row-level security.</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">4. Data Sharing</h3>
              <p style="margin:0 0 16px">We do not sell or share your personal data with third parties, except as required by law.</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">5. Your Rights</h3>
              <p style="margin:0 0 16px">You can delete your account and all associated data at any time from your Account Settings.</p>
              <h3 style="font-size:14px;font-weight:700;margin:0 0 8px">6. Cookies</h3>
              <p style="margin:0">We use localStorage and session cookies only to keep you signed in. No advertising or tracking cookies are used.</p>
            </div>
            <div style="padding:16px 24px;border-top:1px solid var(--border)">
              <button class="close-modal" style="${BTN}">Got it</button>
            </div>
          </div>
        </div>
      `}

      <button type="submit" id="auth-submit" style="${BTN};margin-top:4px">${isLogin ? 'Sign in' : 'Create account'}</button>
    </form>

    <p style="text-align:center;margin:18px 0 0;font-size:13px;color:var(--text-muted)">
      ${isLogin ? "Don't have an account?" : 'Already have an account?'}
      <button id="auth-toggle" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:13px;font-weight:600;margin-left:4px;padding:0">${isLogin ? 'Sign up' : 'Sign in'}</button>
    </p>
  `)

  wireEyes(main); wireFocus(main)

  // Terms & Privacy modals
  if (!isLogin) {
    const openModal = (id) => { main.querySelector(id).style.display = 'flex' }
    const closeAll  = () => { main.querySelectorAll('#modal-terms,#modal-privacy').forEach(m => m.style.display = 'none') }
    main.querySelector('#show-terms').addEventListener('click', () => openModal('#modal-terms'))
    main.querySelector('#show-privacy').addEventListener('click', () => openModal('#modal-privacy'))
    main.querySelectorAll('.close-modal').forEach(btn => btn.addEventListener('click', closeAll))
    main.querySelectorAll('#modal-terms,#modal-privacy').forEach(m => m.addEventListener('click', e => { if (e.target === m) closeAll() }))
  }

  main.querySelector('#btn-google').addEventListener('click', async () => {
    try { await signInWithGoogle() } catch (e) { renderAuthForm(main, mode, e.message) }
  })

  if (isLogin) {
    main.querySelector('#forgot-btn').addEventListener('click', () => renderForgotForm(main))
  }

  main.querySelector('#auth-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    if (!isLogin) {
      const pw  = main.querySelector('#auth-password').value
      const pw2 = main.querySelector('#auth-confirm').value
      if (pw !== pw2) { renderAuthForm(main, mode, 'Passwords do not match'); return }
      if (!main.querySelector('#accept-terms').checked) { renderAuthForm(main, mode, 'Please accept the Terms of Service'); return }
    }
    const email    = main.querySelector('#auth-email').value.trim()
    const password = main.querySelector('#auth-password').value
    const btn = main.querySelector('#auth-submit')
    btn.disabled = true; btn.style.opacity = '0.65'
    btn.textContent = isLogin ? 'Signing in…' : 'Creating account…'
    try {
      if (isLogin) {
        await signIn(email, password)
        await initCloudSync(); renderSidebar(); navigate('/')
      } else {
        const user = await signUp(email, password)
        const name = main.querySelector('#auth-name')?.value.trim()
        if (name && user) await saveProfile({ display_name: name, username: '', avatar_color: '#2d6a4f' })
        renderSidebar(); navigate('/onboarding')
      }
    } catch (err) { renderAuthForm(main, mode, err.message) }
  })

  main.querySelector('#auth-toggle').addEventListener('click', () => renderAuthForm(main, isLogin ? 'register' : 'login'))
}

// ── Forgot password ────────────────────────────────────────

function renderForgotForm(main, sent = false, error = '') {
  main.innerHTML = shell(`
    <button id="back-btn" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:13px;display:flex;align-items:center;gap:6px;padding:0;margin-bottom:28px">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      Back to sign in
    </button>
    <h1 style="font-size:1.6rem;font-weight:800;margin:0 0 6px;color:var(--text)">Forgot password?</h1>
    <p style="margin:0 0 24px;font-size:14px;color:var(--text-muted)">Enter your email and we'll send a reset link.</p>

    ${sent ? `<div style="background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d;padding:12px 16px;border-radius:8px;font-size:13px;margin-bottom:16px">
      ✓ Reset link sent — check your inbox (and spam folder).
    </div>` : ''}
    ${errBox(error)}

    <form id="forgot-form" style="display:flex;flex-direction:column;gap:14px">
      <div>
        <label style="${LBL}">Email address</label>
        <input id="reset-email" type="email" required autocomplete="email" style="${INP}" placeholder="you@example.com" />
      </div>
      <button type="submit" id="reset-btn" style="${BTN}">Send reset link</button>
    </form>
  `)

  wireFocus(main)
  main.querySelector('#back-btn').addEventListener('click', () => renderAuthForm(main, 'login'))
  main.querySelector('#forgot-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = main.querySelector('#reset-email').value.trim()
    const btn = main.querySelector('#reset-btn')
    btn.disabled = true; btn.style.opacity = '0.65'; btn.textContent = 'Sending…'
    try {
      await sendPasswordReset(email)
      renderForgotForm(main, true)
    } catch (err) { renderForgotForm(main, false, err.message) }
  })
}

// ── Reset password (after clicking email link) ─────────────

function renderResetPasswordForm(main, error = '') {
  main.innerHTML = shell(`
    <h1 style="font-size:1.6rem;font-weight:800;margin:0 0 6px;color:var(--text)">Set new password</h1>
    <p style="margin:0 0 24px;font-size:14px;color:var(--text-muted)">Choose a strong password for your account.</p>
    ${errBox(error)}
    <form id="reset-form" style="display:flex;flex-direction:column;gap:14px">
      <div>
        <label style="${LBL}">New password</label>
        ${pwField('new-pw', 'Min. 6 characters', 'new-password')}
      </div>
      <div>
        <label style="${LBL}">Confirm password</label>
        ${pwField('confirm-pw', 'Repeat password', 'new-password')}
      </div>
      <button type="submit" id="reset-submit" style="${BTN}">Update password</button>
    </form>
  `)

  wireEyes(main); wireFocus(main)
  main.querySelector('#reset-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const pw  = main.querySelector('#new-pw').value
    const pw2 = main.querySelector('#confirm-pw').value
    if (pw !== pw2) { renderResetPasswordForm(main, 'Passwords do not match'); return }
    const btn = main.querySelector('#reset-submit')
    btn.disabled = true; btn.style.opacity = '0.65'; btn.textContent = 'Updating…'
    try {
      await updatePassword(pw)
      renderSidebar(); navigate('/')
    } catch (err) { renderResetPasswordForm(main, err.message) }
  })
}

// ── Account page ───────────────────────────────────────────

const COLORS = ['#2d6a4f','#1e40af','#7c3aed','#be185d','#b45309','#065f46','#1e3a5f','#4c1d95','#881337','#78350f']

async function renderAccountPage(user, main) {
  const [profile, progress] = await Promise.all([getProfile(), Promise.resolve(getProgress())])
  const displayName = profile?.display_name || user.email.split('@')[0]
  const color = profile?.avatar_color || '#2d6a4f'
  const initial = displayName[0].toUpperCase()
  const stats = [
    { label: 'Total XP',          value: progress.xp || 0 },
    { label: 'Day streak',        value: `${progress.streakDays || 0} 🔥` },
    { label: 'Lessons completed', value: Object.values(progress.lessons || {}).filter(l => l.status === 'completed').length },
    { label: 'Cards studied',     value: Object.values(progress.flashcards || {}).reduce((n, d) => n + Object.keys(d.cards || {}).length, 0) },
  ]
  const log = progress.activityLog || {}
  const recentDays = Object.keys(log).sort().reverse().slice(0, 7)

  main.innerHTML = `
    <div style="max-width:620px;margin:0 auto;padding:32px 20px 60px">

      <!-- Header -->
      <div style="display:flex;align-items:center;gap:20px;margin-bottom:32px">
        <div id="avatar-display" title="Change color" style="width:68px;height:68px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;font-size:1.7rem;font-weight:700;color:#fff;flex-shrink:0;cursor:pointer;user-select:none">${initial}</div>
        <div>
          <h1 style="font-size:1.35rem;font-weight:700;margin:0 0 2px;color:var(--text)">${displayName}</h1>
          ${profile?.username ? `<p style="margin:0 0 2px;font-size:13px;color:var(--text-muted)">@${profile.username}</p>` : ''}
          <p style="margin:0;font-size:13px;color:var(--text-muted)">${user.email}</p>
        </div>
      </div>

      <!-- Tabs -->
      <div style="display:flex;gap:2px;border-bottom:1px solid var(--border);margin-bottom:24px">
        ${['Profile','Security','Activity'].map((t,i) => `
          <button class="acc-tab" data-tab="${i}" style="padding:9px 16px;background:none;border:none;font-size:13px;font-weight:600;cursor:pointer;font-family:var(--font-body);color:${i===0?'var(--accent)':'var(--text-muted)'};border-bottom:2px solid ${i===0?'var(--accent)':'transparent'};margin-bottom:-1px">${t}</button>
        `).join('')}
      </div>

      <div id="tab-profile">${profileTab(profile)}</div>
      <div id="tab-security" style="display:none">${securityTab(user)}</div>
      <div id="tab-activity" style="display:none">${activityTab(stats, recentDays, log)}</div>

      <!-- Color picker overlay -->
      <div id="color-picker" style="display:none;position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.35);align-items:center;justify-content:center">
        <div style="background:var(--surface);border-radius:16px;padding:24px;width:260px">
          <p style="margin:0 0 14px;font-size:14px;font-weight:700;color:var(--text)">Choose avatar color</p>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:18px">
            ${COLORS.map(c=>`<button class="color-opt" data-color="${c}" style="width:36px;height:36px;border-radius:50%;background:${c};border:3px solid ${c===color?'#fff':'transparent'};outline:2px solid ${c===color?c:'transparent'};cursor:pointer"></button>`).join('')}
          </div>
          <button id="close-picker" style="${BTN_G};width:100%">Cancel</button>
        </div>
      </div>

    </div>
  `

  wireAccountPage(main, user, profile, color)
}

function profileTab(profile) {
  return `<form id="profile-form" style="display:flex;flex-direction:column;gap:16px">
    <div>
      <label style="${LBL}">Display name</label>
      <input id="p-name" type="text" value="${profile?.display_name||''}" style="${INP}" placeholder="Your name" />
    </div>
    <div>
      <label style="${LBL}">Username</label>
      <div style="position:relative">
        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);font-size:14px">@</span>
        <input id="p-username" type="text" value="${profile?.username||''}" style="${INP};padding-left:28px" placeholder="yourhandle" />
      </div>
    </div>
    <div id="profile-msg" style="display:none;font-size:13px"></div>
    <button type="submit" style="${BTN}">Save changes</button>
  </form>`
}

function securityTab(user) {
  return `<div style="display:flex;flex-direction:column;gap:16px">
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px">
      <h3 style="margin:0 0 4px;font-size:14px;font-weight:700;color:var(--text)">Email address</h3>
      <p style="margin:0 0 12px;font-size:13px;color:var(--text-muted)">${user.email}</p>
      <form id="email-form" style="display:flex;gap:10px">
        <input id="new-email" type="email" style="${INP};flex:1" placeholder="New email address" />
        <button type="submit" style="${BTN_S};white-space:nowrap">Update</button>
      </form>
      <div id="email-msg" style="display:none;margin-top:8px;font-size:13px"></div>
    </div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px">
      <h3 style="margin:0 0 4px;font-size:14px;font-weight:700;color:var(--text)">Change password</h3>
      <p style="margin:0 0 12px;font-size:13px;color:var(--text-muted)">Must be at least 6 characters.</p>
      <form id="pw-form" style="display:flex;flex-direction:column;gap:10px">
        ${pwField('new-pw','New password','new-password')}
        ${pwField('confirm-pw','Confirm new password','new-password')}
        <div id="pw-msg" style="display:none;font-size:13px"></div>
        <button type="submit" style="${BTN}">Update password</button>
      </form>
    </div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px">
      <h3 style="margin:0 0 4px;font-size:14px;font-weight:700;color:var(--text)">Sign out</h3>
      <p style="margin:0 0 12px;font-size:13px;color:var(--text-muted)">Sign out from this device.</p>
      <button id="signout-btn" style="${BTN_G}">Sign out</button>
    </div>
  </div>`
}

function activityTab(stats, days, log) {
  return `<div style="display:flex;flex-direction:column;gap:14px">
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px">
      ${stats.map(s=>`<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px">
        <div style="font-size:1.5rem;font-weight:700;color:var(--accent);margin-bottom:2px">${s.value}</div>
        <div style="font-size:12px;color:var(--text-muted)">${s.label}</div>
      </div>`).join('')}
    </div>
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px">
      <h3 style="margin:0 0 14px;font-size:14px;font-weight:700;color:var(--text)">Recent activity</h3>
      ${days.length ? days.map(d=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:13px;color:var(--text)">${new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}</span>
        <span style="font-size:13px;font-weight:600;color:var(--accent)">${log[d]} XP</span>
      </div>`).join('') : '<p style="font-size:13px;color:var(--text-muted);margin:0">No activity yet.</p>'}
    </div>
  </div>`
}

function wireAccountPage(main, user, profile, color) {
  let currentColor = color

  main.querySelectorAll('.acc-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      main.querySelectorAll('.acc-tab').forEach(b => { b.style.color='var(--text-muted)'; b.style.borderBottomColor='transparent' })
      btn.style.color='var(--accent)'; btn.style.borderBottomColor='var(--accent)'
      ;['profile','security','activity'].forEach((t,i) => { main.querySelector(`#tab-${t}`).style.display = i===+btn.dataset.tab?'':'none' })
    })
  })

  wireFocus(main); wireEyes(main)

  // Avatar color picker
  main.querySelector('#avatar-display').addEventListener('click', () => { main.querySelector('#color-picker').style.display='flex' })
  main.querySelector('#close-picker').addEventListener('click', () => { main.querySelector('#color-picker').style.display='none' })
  main.querySelectorAll('.color-opt').forEach(btn => {
    btn.addEventListener('click', async () => {
      currentColor = btn.dataset.color
      main.querySelector('#avatar-display').style.background = currentColor
      main.querySelectorAll('.color-opt').forEach(b => { b.style.borderColor=b.dataset.color===currentColor?'#fff':'transparent'; b.style.outlineColor=b.dataset.color===currentColor?b.dataset.color:'transparent' })
      await saveProfile({ display_name: profile?.display_name||'', username: profile?.username||'', avatar_color: currentColor })
      main.querySelector('#color-picker').style.display='none'
      renderSidebar()
    })
  })

  // Profile save
  main.querySelector('#profile-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const display_name = main.querySelector('#p-name').value.trim()
    const username = main.querySelector('#p-username').value.trim()
    try {
      await saveProfile({ display_name, username, avatar_color: currentColor })
      renderSidebar()
      await renderAccountPage(user, main)
    } catch (err) { showMsg(main.querySelector('#profile-msg'), err.message, 'red') }
  })

  // Email update
  main.querySelector('#email-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const msg = main.querySelector('#email-msg')
    try { await updateEmail(main.querySelector('#new-email').value.trim()); showMsg(msg,'✓ Confirm the change via your new email','green') }
    catch (err) { showMsg(msg, err.message, 'red') }
  })

  // Password update
  main.querySelector('#pw-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const pw=main.querySelector('#new-pw').value, pw2=main.querySelector('#confirm-pw').value
    const msg=main.querySelector('#pw-msg')
    if (pw!==pw2) { showMsg(msg,'Passwords do not match','red'); return }
    try { await updatePassword(pw); showMsg(msg,'✓ Password updated','green'); main.querySelector('#new-pw').value=''; main.querySelector('#confirm-pw').value='' }
    catch (err) { showMsg(msg,err.message,'red') }
  })

  // Sign out
  main.querySelector('#signout-btn').addEventListener('click', async () => { await signOut(); renderSidebar(); navigate('/') })
}

function showMsg(el, text, color) {
  el.style.display='block'; el.style.color=color==='green'?'#16a34a':'#dc2626'; el.textContent=text
}
