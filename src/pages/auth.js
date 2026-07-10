import { signIn, signUp, signOut, getUser, getProfile, saveProfile,
         updatePassword, updateEmail, sendPasswordReset, signInWithGoogle } from '../lib/auth.js'
import { supabase } from '../lib/supabase.js'
import { initCloudSync, getProgress } from '../store.js'
import { renderSidebar } from '../components/sidebar.js'
import { navigate } from '../router.js'
import { esc } from '../utils/html.js'

// ── Entry point ────────────────────────────────────────────

export async function renderAuth() {
  const main = document.getElementById('main-content')
  const { data: { session } } = await supabase.auth.getSession()
  if (session?.user && window.location.hash.includes('type=recovery')) {
    renderResetPasswordForm(main); return
  }
  const user = await getUser()
  if (user) { await renderAccountPage(user, main); return }
  renderAuthForm(main, 'login')
}

// ── Style tokens ───────────────────────────────────────────

const INP   = `width:100%;padding:11px 14px;border:1.5px solid var(--border);border-radius:9px;font-size:14px;font-family:var(--font-body);color:var(--text);background:var(--bg);outline:none;box-sizing:border-box;transition:border-color .18s,box-shadow .18s`
const LBL   = `display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:var(--text)`
const BTN   = `width:100%;padding:12px;background:var(--accent);color:#fff;border:none;border-radius:9px;font-size:14px;font-weight:700;cursor:pointer;font-family:var(--font-body);transition:opacity .15s,transform .1s,box-shadow .15s;display:flex;align-items:center;justify-content:center;gap:8px`
const BTN_S = `padding:11px 16px;background:var(--bg);border:1.5px solid var(--border);border-radius:9px;font-size:13px;font-weight:600;cursor:pointer;color:var(--text);font-family:var(--font-body);transition:border-color .18s,box-shadow .18s,background .18s`
const BTN_G = `padding:10px 16px;background:none;border:1.5px solid var(--border);border-radius:9px;font-size:13px;font-weight:600;cursor:pointer;color:var(--text);font-family:var(--font-body);transition:border-color .15s,background .15s`

const EYE_O = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
const EYE_C = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`

const SPINNER = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="animation:auth-spin .7s linear infinite;flex-shrink:0"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`

function errBox(msg) {
  return msg ? `<div style="background:#fef2f2;border:1px solid #fecaca;color:#dc2626;padding:10px 14px;border-radius:9px;margin-bottom:16px;font-size:13px;display:flex;gap:8px;align-items:center"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>${esc(msg)}</div>` : ''
}

function pwField(id, placeholder, autocomplete = 'current-password') {
  return `<div style="position:relative">
    <input id="${id}" type="password" required autocomplete="${autocomplete}" class="auth-inp" style="${INP};padding-right:48px" placeholder="${placeholder}" />
    <button type="button" class="eye-btn" data-target="${id}" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;padding:3px;color:var(--text-muted);display:flex;align-items:center;line-height:0">${EYE_O}</button>
  </div>`
}

function divider() {
  return `<div style="display:flex;align-items:center;gap:12px;margin:2px 0">
    <div style="flex:1;height:1px;background:var(--border)"></div>
    <span style="font-size:11px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.07em">or</span>
    <div style="flex:1;height:1px;background:var(--border)"></div>
  </div>`
}

// ── Global auth styles ─────────────────────────────────────

const AUTH_CSS = `<style>
  @keyframes auth-spin { to { transform:rotate(360deg); } }
  @keyframes auth-fade-up { from { opacity:0;transform:translateY(18px); } to { opacity:1;transform:none; } }
  @keyframes auth-float-a { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-7px); } }
  @keyframes auth-float-b { 0%,100% { transform:translateY(-4px); } 50% { transform:translateY(4px); } }

  .auth-form-shell {
    animation: auth-fade-up .42s cubic-bezier(.22,.68,0,1.15) both;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 60px 32px 40px;
    box-sizing: border-box;
  }

  .auth-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 480px) {
    .auth-form-shell { padding: 40px 20px 32px; }
  }

  .auth-inp:focus {
    border-color:var(--accent) !important;
    box-shadow:0 0 0 3px rgba(45,106,79,0.14) !important;
  }

  .auth-social-btn { transition:border-color .18s,box-shadow .18s,background .18s !important; }
  .auth-social-btn:hover:not(:disabled) {
    border-color:var(--accent) !important;
    box-shadow:0 3px 12px rgba(0,0,0,0.09) !important;
  }

  .auth-submit:hover:not(:disabled) { opacity:.9;transform:translateY(-1px);box-shadow:0 4px 14px rgba(45,106,79,0.3); }
  .auth-submit:active:not(:disabled) { transform:translateY(0);box-shadow:none; }

  .auth-check-label {
    display:flex;align-items:center;gap:9px;cursor:pointer;
    font-size:13px;color:var(--text);user-select:none;
  }
  .auth-check-label input[type=checkbox] { display:none; }
  .auth-checkmark {
    width:17px;height:17px;border:1.5px solid var(--border);border-radius:5px;
    background:var(--bg);display:flex;align-items:center;justify-content:center;
    flex-shrink:0;transition:all .15s;
  }
  .auth-check-label input:checked + .auth-checkmark {
    background:var(--accent);border-color:var(--accent);
  }
  .auth-check-label input:checked + .auth-checkmark::after {
    content:'';width:9px;height:5px;
    border-left:2px solid white;border-bottom:2px solid white;
    transform:rotate(-45deg) translateY(-1px);
  }

  .auth-caps-warn {
    font-size:12px;color:#d97706;display:flex;align-items:center;
    gap:5px;margin-top:5px;opacity:0;transition:opacity .2s;
  }
  .auth-caps-warn.visible { opacity:1; }

  .pw-strength-row { display:flex;gap:4px;margin-top:7px; }
  .pw-seg { flex:1;height:3px;background:var(--border);border-radius:2px;transition:background .3s; }
  .pw-seg.weak  { background:#ef4444; }
  .pw-seg.fair  { background:#f59e0b; }
  .pw-seg.good  { background:#22c55e; }
  .pw-seg.strong{ background:var(--accent); }

  .demo-card-a { animation:auth-float-a 5s ease-in-out infinite; }

  .weekly-dot { transition:transform .15s,opacity .15s; cursor:default; }
  .weekly-dot:hover { transform:scale(1.25);opacity:.85; }

  .auth-social-btn:hover:not(:disabled) {
    border-color:var(--accent) !important;
    background:rgba(45,106,79,0.04) !important;
    box-shadow:0 2px 10px rgba(0,0,0,0.07) !important;
  }

  @media(min-width:900px) { .auth-brand { display:flex !important; } }
  @media(max-width:899px) { .auth-logo-mobile { display:flex !important; } }
</style>`

// ── Brand panel (left side) ────────────────────────────────

function brandPanel() {
  // Weekly activity: M T W T F S S  (1=active full, 0.5=light, 0=empty)
  const weekDots = [1, 1, 1, 1, 0.5, 0, 0]
  const dayLabels = ['M','T','W','T','F','S','S']

  return `
    <div class="auth-brand" style="display:none;flex-direction:column;background:#0e2016;min-height:100vh;padding:32px 44px 24px;flex:0 0 45%;position:relative;overflow:hidden">

      <!-- Ambient glow -->
      <div style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
        <div style="position:absolute;top:-80px;right:-60px;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(34,197,94,0.15) 0%,transparent 65%)"></div>
        <div style="position:absolute;bottom:120px;left:-60px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,0.1) 0%,transparent 65%)"></div>
      </div>

      <!-- Logo -->
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px;position:relative;z-index:1">
        <div style="width:34px;height:34px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.13);border-radius:9px;display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;font-size:12px;letter-spacing:-.5px">EN</div>
        <span style="font-weight:700;font-size:.95rem;color:#fff;letter-spacing:-.01em">LearnEN</span>
      </div>

      <!-- Headline -->
      <div style="position:relative;z-index:1;margin-bottom:20px">
        <h2 style="font-size:1.65rem;font-weight:800;color:#fff;line-height:1.22;margin:0 0 12px;letter-spacing:-.03em">Learn English<br>from A1 to C2.</h2>
        <p style="font-size:13px;color:rgba(255,255,255,0.48);margin:0;line-height:1.7;max-width:280px">Structured lessons, daily quizzes, and spaced-repetition flashcards — all in one place.</p>
      </div>

      <!-- Single dashboard preview card -->
      <div class="demo-card-a" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:18px;padding:24px 24px 20px;position:relative;z-index:1">

        <!-- User row -->
        <div style="display:flex;align-items:center;gap:11px;margin-bottom:20px;padding-bottom:18px;border-bottom:1px solid rgba(255,255,255,0.07)">
          <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:13px;flex-shrink:0">S</div>
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;color:#fff;font-size:13px">Sarah Chen</div>
            <div style="display:flex;align-items:center;gap:5px;margin-top:2px">
              <span style="font-size:10px;font-weight:700;color:#a5b4fc;background:rgba(99,102,241,0.15);border-radius:4px;padding:1px 6px">B2</span>
              <span style="font-size:10px;color:rgba(255,255,255,0.35)">Upper Intermediate</span>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:4px;background:rgba(251,191,36,0.1);border:1px solid rgba(251,191,36,0.2);border-radius:20px;padding:3px 10px">
            <span style="font-size:13px">🔥</span>
            <span style="font-size:12px;font-weight:700;color:#fbbf24">12</span>
          </div>
        </div>

        <!-- XP Progress -->
        <div style="margin-bottom:18px">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px">
            <span style="font-size:11px;font-weight:600;color:rgba(255,255,255,0.5)">Today's XP</span>
            <span style="font-size:12px;font-weight:700;color:#4ade80">80 <span style="font-weight:400;color:rgba(255,255,255,0.3)">/ 100</span></span>
          </div>
          <div style="height:5px;background:rgba(255,255,255,0.07);border-radius:3px;overflow:hidden">
            <div style="width:80%;height:100%;background:linear-gradient(90deg,#22c55e,#16a34a);border-radius:3px"></div>
          </div>
        </div>

        <!-- Stats row — no borders, just background -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:18px">
          ${[['18','Lessons','#4ade80'],['247','Words','#a5b4fc'],['4','Badges','#fbbf24']].map(([n,l,c]) => `
            <div style="background:rgba(255,255,255,0.035);border-radius:10px;padding:10px 6px;text-align:center">
              <div style="font-size:16px;font-weight:800;color:${c};letter-spacing:-.02em">${n}</div>
              <div style="font-size:10px;color:rgba(255,255,255,0.32);margin-top:2px">${l}</div>
            </div>
          `).join('')}
        </div>

        <!-- Today's word -->
        <div style="background:rgba(34,197,94,0.07);border-radius:10px;padding:10px 12px;margin-bottom:12px">
          <div style="font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.28);margin-bottom:5px">Word of the Day</div>
          <div style="display:flex;align-items:baseline;gap:7px;flex-wrap:wrap">
            <span style="font-size:14px;font-weight:800;color:#fff;letter-spacing:-.02em">eloquent</span>
            <span style="font-size:11px;color:rgba(255,255,255,0.35);font-family:monospace">/ˈɛl.ə.kwənt/</span>
          </div>
          <div style="font-size:11.5px;color:rgba(255,255,255,0.48);margin-top:3px">adj. well-spoken and persuasive</div>
        </div>

        <!-- Weekly activity — GitHub-style squares -->
        <div style="display:flex;align-items:flex-end;gap:5px">
          <span style="font-size:9.5px;color:rgba(255,255,255,0.25);margin-right:3px;margin-bottom:2px">This week</span>
          ${weekDots.map((v, i) => {
            const bg = v === 1 ? 'rgba(34,197,94,0.72)' : v === 0.5 ? 'rgba(34,197,94,0.22)' : 'rgba(255,255,255,0.06)'
            const label = v === 1 ? 'Active' : v === 0.5 ? 'Light' : 'No activity'
            return `<div style="display:flex;flex-direction:column;align-items:center;gap:3px">
              <div class="weekly-dot" title="${dayLabels[i]}: ${label}" style="width:18px;height:18px;border-radius:4px;background:${bg}"></div>
              <span style="font-size:8.5px;color:rgba(255,255,255,0.2)">${dayLabels[i]}</span>
            </div>`
          }).join('')}
        </div>
      </div>

      <!-- 3 feature chips -->
      <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:20px;position:relative;z-index:1">
        ${[['✓','CEFR A1–C2'],['✓','10,000+ Words'],['🔥','Daily Streak']].map(([icon,label]) => `
          <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:5px 12px">
            <span style="font-size:10px;color:#4ade80;font-weight:700">${icon}</span>
            <span style="font-size:11px;font-weight:600;color:rgba(255,255,255,0.55)">${label}</span>
          </div>
        `).join('')}
      </div>

      <!-- Footer -->
      <div style="margin-top:16px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.06);position:relative;z-index:1">
        <p style="font-size:11px;color:rgba(255,255,255,0.18);margin:0">© 2026 LearnEN · Always Free</p>
      </div>
    </div>
  `
}

// ── Shell ──────────────────────────────────────────────────

function shell(content) {
  return `
    ${AUTH_CSS}
    <div style="min-height:100vh;display:flex;background:var(--bg)">
      ${brandPanel()}
      <div class="auth-right">
        <div class="auth-form-shell">
          ${content}
        </div>
      </div>
    </div>
  `
}

// ── Social buttons ─────────────────────────────────────────

function socialButtons() {
  return `
    <button id="btn-google" type="button" disabled class="auth-social-btn" style="${BTN_S};width:100%;display:flex;align-items:center;justify-content:center;gap:10px;opacity:.4;cursor:not-allowed">
      <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
      Continue with Google
    </button>
    <button type="button" class="auth-social-btn" disabled style="${BTN_S};width:100%;display:flex;align-items:center;justify-content:center;gap:10px;opacity:.4;cursor:not-allowed">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.2 1.28-2.18 3.81.03 3.02 2.65 4.03 2.68 4.04l-.05.17zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
      Continue with Apple
    </button>
    <button type="button" class="auth-social-btn" disabled style="${BTN_S};width:100%;display:flex;align-items:center;justify-content:center;gap:10px;opacity:.4;cursor:not-allowed">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      Continue with Facebook
    </button>
  `
}

// ── Helpers ────────────────────────────────────────────────

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
    el.addEventListener('focus', () => { el.style.borderColor = 'var(--accent)'; el.style.boxShadow = '0 0 0 3px rgba(45,106,79,0.14)' })
    el.addEventListener('blur',  () => { el.style.borderColor = 'var(--border)';  el.style.boxShadow = 'none' })
  })
}

function wireCapsLock(main, inputId, warnId) {
  const input = main.querySelector(`#${inputId}`)
  const warn  = main.querySelector(`#${warnId}`)
  if (!input || !warn) return
  const check = (e) => {
    const on = e.getModifierState && e.getModifierState('CapsLock')
    warn.classList.toggle('visible', !!on)
  }
  input.addEventListener('keydown', check)
  input.addEventListener('keyup',   check)
}

function wirePwStrength(main, inputId) {
  const input = main.querySelector(`#${inputId}`)
  const segs  = main.querySelectorAll('.pw-seg')
  if (!input || !segs.length) return
  input.addEventListener('input', () => {
    const v = input.value
    const score = [v.length >= 8, /[A-Z]/.test(v), /[0-9]/.test(v), /[^A-Za-z0-9]/.test(v)].filter(Boolean).length
    segs.forEach((s, i) => {
      s.className = 'pw-seg'
      if (i < score) s.classList.add(score === 1 ? 'weak' : score === 2 ? 'fair' : score === 3 ? 'good' : 'strong')
    })
  })
}

// ── Login / Register ───────────────────────────────────────

function renderAuthForm(main, mode, error = '') {
  const isLogin = mode === 'login'
  main.innerHTML = shell(`

    <!-- Mobile logo (hidden on desktop) -->
    <div class="auth-logo-mobile" style="display:none;align-items:center;gap:8px;margin-bottom:20px">
      <div style="width:30px;height:30px;background:var(--accent);border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;font-size:12px">EN</div>
      <span style="font-weight:700;font-size:.95rem;color:var(--text)">LearnEN</span>
    </div>

    <div style="margin-bottom:20px">
      <h1 style="font-size:1.55rem;font-weight:800;margin:0 0 5px;color:var(--text);letter-spacing:-.02em">${isLogin ? 'Welcome back' : 'Get started'}</h1>
      <p style="margin:0;font-size:13.5px;color:var(--text-muted)">${isLogin ? 'Sign in to continue learning.' : 'Create your free account today.'}</p>
    </div>

    ${errBox(error)}

    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
      ${socialButtons()}
    </div>

    ${divider()}

    <form id="auth-form" style="display:flex;flex-direction:column;gap:14px;margin-top:14px">

      ${!isLogin ? `<div>
        <label style="${LBL}">Full name</label>
        <input id="auth-name" type="text" autocomplete="name" class="auth-inp" style="${INP}" placeholder="Your name" />
      </div>` : ''}

      <div>
        <label style="${LBL}">Email</label>
        <input id="auth-email" type="email" required autocomplete="email" class="auth-inp" style="${INP}" placeholder="you@example.com" />
      </div>

      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <label style="font-size:13px;font-weight:600;color:var(--text)">Password</label>
          ${isLogin ? `<button type="button" id="forgot-btn" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:12px;font-weight:600;padding:0;transition:opacity .15s">Forgot password?</button>` : ''}
        </div>
        ${pwField('auth-password', isLogin ? '••••••••' : 'Min. 6 characters', isLogin ? 'current-password' : 'new-password')}
        <div id="caps-warn-pw" class="auth-caps-warn">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Caps Lock is on
        </div>
        ${!isLogin ? `<div class="pw-strength-row"><div class="pw-seg"></div><div class="pw-seg"></div><div class="pw-seg"></div><div class="pw-seg"></div></div>` : ''}
      </div>

      ${!isLogin ? `<div>
        <label style="${LBL}">Confirm password</label>
        ${pwField('auth-confirm', 'Repeat password', 'new-password')}
        <div id="caps-warn-confirm" class="auth-caps-warn">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Caps Lock is on
        </div>
      </div>` : ''}

      ${isLogin ? `
        <label class="auth-check-label">
          <input id="remember-me" type="checkbox" checked />
          <span class="auth-checkmark"></span>
          Remember me
        </label>
      ` : `
        <label class="auth-check-label">
          <input id="accept-terms" type="checkbox" required />
          <span class="auth-checkmark"></span>
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

      <button type="submit" id="auth-submit" class="auth-submit" style="${BTN};margin-top:2px">
        ${isLogin ? 'Sign in' : 'Create account'}
      </button>
    </form>

    <p style="text-align:center;margin:18px 0 0;font-size:13px;color:var(--text-muted)">
      ${isLogin ? "Don't have an account?" : 'Already have an account?'}
      <button id="auth-toggle" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:13px;font-weight:600;margin-left:4px;padding:0;transition:opacity .15s">${isLogin ? 'Sign up' : 'Sign in'}</button>
    </p>
  `)

  wireEyes(main)
  wireFocus(main)
  wireCapsLock(main, 'auth-password', 'caps-warn-pw')
  if (!isLogin) {
    wireCapsLock(main, 'auth-confirm', 'caps-warn-confirm')
    wirePwStrength(main, 'auth-password')
  }

  // Terms & Privacy modals
  if (!isLogin) {
    const openModal = (id) => { main.querySelector(id).style.display = 'flex' }
    const closeAll  = () => { main.querySelectorAll('#modal-terms,#modal-privacy').forEach(m => m.style.display = 'none') }
    main.querySelector('#show-terms').addEventListener('click',   () => openModal('#modal-terms'))
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
      if (pw !== pw2)         { renderAuthForm(main, mode, 'Passwords do not match'); return }
      if (pw.length < 6)      { renderAuthForm(main, mode, 'Password must be at least 6 characters'); return }
      if (!main.querySelector('#accept-terms').checked) { renderAuthForm(main, mode, 'Please accept the Terms of Service'); return }
    }
    const email    = main.querySelector('#auth-email').value.trim()
    const password = main.querySelector('#auth-password').value
    const btn = main.querySelector('#auth-submit')
    btn.disabled = true
    btn.innerHTML = `${SPINNER} ${isLogin ? 'Signing in…' : 'Creating account…'}`

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
    } catch (err) {
      renderAuthForm(main, mode, err.message)
    }
  })

  main.querySelector('#auth-toggle').addEventListener('click', () => renderAuthForm(main, isLogin ? 'register' : 'login'))
}

// ── Forgot password ────────────────────────────────────────

function renderForgotForm(main, sent = false, error = '') {
  main.innerHTML = shell(`
    <button id="back-btn" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:13px;display:flex;align-items:center;gap:6px;padding:0;margin-bottom:28px;transition:color .15s">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      Back to sign in
    </button>
    <h1 style="font-size:1.6rem;font-weight:800;margin:0 0 6px;color:var(--text);letter-spacing:-.02em">Forgot password?</h1>
    <p style="margin:0 0 24px;font-size:14px;color:var(--text-muted)">Enter your email and we'll send a reset link.</p>

    ${sent ? `<div style="background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d;padding:12px 16px;border-radius:9px;font-size:13px;margin-bottom:16px;display:flex;align-items:center;gap:8px">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
      Reset link sent — check your inbox (and spam folder).
    </div>` : ''}
    ${errBox(error)}

    <form id="forgot-form" style="display:flex;flex-direction:column;gap:14px">
      <div>
        <label style="${LBL}">Email address</label>
        <input id="reset-email" type="email" required autocomplete="email" class="auth-inp" style="${INP}" placeholder="you@example.com" />
      </div>
      <button type="submit" id="reset-btn" class="auth-submit" style="${BTN}">Send reset link</button>
    </form>
  `)

  wireFocus(main)
  main.querySelector('#back-btn').addEventListener('click', () => renderAuthForm(main, 'login'))
  main.querySelector('#forgot-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = main.querySelector('#reset-email').value.trim()
    const btn = main.querySelector('#reset-btn')
    btn.disabled = true
    btn.innerHTML = `${SPINNER} Sending…`
    try {
      await sendPasswordReset(email)
      renderForgotForm(main, true)
    } catch (err) { renderForgotForm(main, false, err.message) }
  })
}

// ── Reset password ─────────────────────────────────────────

function renderResetPasswordForm(main, error = '') {
  main.innerHTML = shell(`
    <h1 style="font-size:1.6rem;font-weight:800;margin:0 0 6px;color:var(--text);letter-spacing:-.02em">Set new password</h1>
    <p style="margin:0 0 24px;font-size:14px;color:var(--text-muted)">Choose a strong password for your account.</p>
    ${errBox(error)}
    <form id="reset-form" style="display:flex;flex-direction:column;gap:14px">
      <div>
        <label style="${LBL}">New password</label>
        ${pwField('new-pw', 'Min. 6 characters', 'new-password')}
        <div class="pw-strength-row"><div class="pw-seg"></div><div class="pw-seg"></div><div class="pw-seg"></div><div class="pw-seg"></div></div>
      </div>
      <div>
        <label style="${LBL}">Confirm password</label>
        ${pwField('confirm-pw', 'Repeat password', 'new-password')}
      </div>
      <button type="submit" id="reset-submit" class="auth-submit" style="${BTN}">Update password</button>
    </form>
  `)

  wireEyes(main); wireFocus(main)
  wirePwStrength(main, 'new-pw')
  main.querySelector('#reset-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const pw  = main.querySelector('#new-pw').value
    const pw2 = main.querySelector('#confirm-pw').value
    if (pw !== pw2) { renderResetPasswordForm(main, 'Passwords do not match'); return }
    const btn = main.querySelector('#reset-submit')
    btn.disabled = true
    btn.innerHTML = `${SPINNER} Updating…`
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

      <div style="display:flex;align-items:center;gap:20px;margin-bottom:32px">
        <div id="avatar-display" title="Change color" style="width:68px;height:68px;border-radius:50%;background:${color};display:flex;align-items:center;justify-content:center;font-size:1.7rem;font-weight:700;color:#fff;flex-shrink:0;cursor:pointer;user-select:none">${initial}</div>
        <div>
          <h1 style="font-size:1.35rem;font-weight:700;margin:0 0 2px;color:var(--text)">${displayName}</h1>
          ${profile?.username ? `<p style="margin:0 0 2px;font-size:13px;color:var(--text-muted)">@${profile.username}</p>` : ''}
          <p style="margin:0;font-size:13px;color:var(--text-muted)">${user.email}</p>
        </div>
      </div>

      <div style="display:flex;gap:2px;border-bottom:1px solid var(--border);margin-bottom:24px">
        ${['Profile','Security','Activity'].map((t,i) => `
          <button class="acc-tab" data-tab="${i}" style="padding:9px 16px;background:none;border:none;font-size:13px;font-weight:600;cursor:pointer;font-family:var(--font-body);color:${i===0?'var(--accent)':'var(--text-muted)'};border-bottom:2px solid ${i===0?'var(--accent)':'transparent'};margin-bottom:-1px">${t}</button>
        `).join('')}
      </div>

      <div id="tab-profile">${profileTab(profile)}</div>
      <div id="tab-security" style="display:none">${securityTab(user)}</div>
      <div id="tab-activity" style="display:none">${activityTab(stats, recentDays, log)}</div>

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
      <input id="p-name" type="text" value="${profile?.display_name||''}" class="auth-inp" style="${INP}" placeholder="Your name" />
    </div>
    <div>
      <label style="${LBL}">Username</label>
      <div style="position:relative">
        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);font-size:14px">@</span>
        <input id="p-username" type="text" value="${profile?.username||''}" class="auth-inp" style="${INP};padding-left:28px" placeholder="yourhandle" />
      </div>
    </div>
    <div id="profile-msg" style="display:none;font-size:13px"></div>
    <button type="submit" class="auth-submit" style="${BTN}">Save changes</button>
  </form>`
}

function securityTab(user) {
  return `<div style="display:flex;flex-direction:column;gap:16px">
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px">
      <h3 style="margin:0 0 4px;font-size:14px;font-weight:700;color:var(--text)">Email address</h3>
      <p style="margin:0 0 12px;font-size:13px;color:var(--text-muted)">${user.email}</p>
      <form id="email-form" style="display:flex;gap:10px">
        <input id="new-email" type="email" class="auth-inp" style="${INP};flex:1" placeholder="New email address" />
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
        <button type="submit" class="auth-submit" style="${BTN}">Update password</button>
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

  main.querySelector('#avatar-display').addEventListener('click', () => { main.querySelector('#color-picker').style.display='flex' })
  main.querySelector('#close-picker').addEventListener('click',   () => { main.querySelector('#color-picker').style.display='none' })
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

  main.querySelector('#email-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const msg = main.querySelector('#email-msg')
    try { await updateEmail(main.querySelector('#new-email').value.trim()); showMsg(msg,'✓ Confirm the change via your new email','green') }
    catch (err) { showMsg(msg, err.message, 'red') }
  })

  main.querySelector('#pw-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const pw=main.querySelector('#new-pw').value, pw2=main.querySelector('#confirm-pw').value
    const msg=main.querySelector('#pw-msg')
    if (pw!==pw2) { showMsg(msg,'Passwords do not match','red'); return }
    try { await updatePassword(pw); showMsg(msg,'✓ Password updated','green'); main.querySelector('#new-pw').value=''; main.querySelector('#confirm-pw').value='' }
    catch (err) { showMsg(msg,err.message,'red') }
  })

  main.querySelector('#signout-btn').addEventListener('click', async () => { await signOut(); renderSidebar(); navigate('/account') })
}

function showMsg(el, text, color) {
  el.style.display='block'; el.style.color=color==='green'?'#16a34a':'#dc2626'; el.textContent=text
}
