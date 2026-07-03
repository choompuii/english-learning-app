// ── XP Float ──────────────────────────────────────────────────────────
export function floatXP(amount, anchorEl) {
  if (!amount || amount <= 0) return
  const el = document.createElement('div')
  el.textContent = `+${amount} XP`
  el.style.cssText = `
    position:fixed;
    font-family:var(--font-display);
    font-size:1.1rem;
    font-weight:800;
    color:var(--accent);
    pointer-events:none;
    z-index:9999;
    text-shadow:0 1px 4px rgba(0,0,0,0.15);
    animation:xp-float 1.4s cubic-bezier(0.4,0,0.2,1) forwards;
  `
  const rect = anchorEl
    ? anchorEl.getBoundingClientRect()
    : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 }
  el.style.left = (rect.left + rect.width / 2 - 30) + 'px'
  el.style.top = (rect.top + rect.height / 2) + 'px'
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 1500)
}

// Inject keyframes once
if (!document.getElementById('fx-styles')) {
  const s = document.createElement('style')
  s.id = 'fx-styles'
  s.textContent = `
    @keyframes xp-float {
      0%   { opacity:1; transform:translateY(0) scale(1); }
      60%  { opacity:1; transform:translateY(-48px) scale(1.15); }
      100% { opacity:0; transform:translateY(-80px) scale(0.9); }
    }
    @keyframes confetti-fall {
      0%   { transform:translateY(-20px) rotateZ(0deg); opacity:1; }
      100% { transform:translateY(100vh) rotateZ(720deg); opacity:0; }
    }
    @keyframes pop-in {
      0%   { opacity:0; transform:scale(0.6); }
      70%  { transform:scale(1.1); }
      100% { opacity:1; transform:scale(1); }
    }
    @keyframes slide-up {
      0%   { opacity:0; transform:translateY(24px); }
      100% { opacity:1; transform:translateY(0); }
    }
    @keyframes pulse-ring {
      0%   { box-shadow:0 0 0 0 rgba(63,191,116,0.4); }
      70%  { box-shadow:0 0 0 16px rgba(63,191,116,0); }
      100% { box-shadow:0 0 0 0 rgba(63,191,116,0); }
    }
    .animate-pop    { animation: pop-in 0.4s cubic-bezier(0.4,0,0.2,1) both; }
    .animate-up     { animation: slide-up 0.5s cubic-bezier(0.4,0,0.2,1) both; }
    .animate-pulse  { animation: pulse-ring 1.2s ease-out; }
    .path-node--active:hover {
      transform: translateX(4px);
      box-shadow: var(--shadow-md);
    }
  `
  document.head.appendChild(s)
}

// ── Confetti ──────────────────────────────────────────────────────────
const CONFETTI_COLORS = ['#F5C842','#3FBF74','#4A9EE0','#FF8C42','#9B59B6','#E74C3C','#fff']

export function confetti(count = 80) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => spawnConfettiPiece(), Math.random() * 600)
  }
}

function spawnConfettiPiece() {
  const el = document.createElement('div')
  const size = 6 + Math.random() * 8
  const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]
  const left = Math.random() * 100
  const duration = 2 + Math.random() * 2
  const isCircle = Math.random() > 0.5

  el.style.cssText = `
    position:fixed;
    left:${left}vw;
    top:-20px;
    width:${size}px;
    height:${isCircle ? size : size * 0.5}px;
    background:${color};
    border-radius:${isCircle ? '50%' : '2px'};
    pointer-events:none;
    z-index:9998;
    animation:confetti-fall ${duration}s linear forwards;
    opacity:0.9;
  `
  document.body.appendChild(el)
  setTimeout(() => el.remove(), duration * 1000 + 100)
}

// ── Badge pop ─────────────────────────────────────────────────────────
export function badgePop(badge) {
  const el = document.createElement('div')
  el.innerHTML = `
    <div style="font-size:2.5rem;margin-bottom:6px">${badge.icon}</div>
    <div style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);margin-bottom:2px">Badge Unlocked!</div>
    <div style="font-size:1rem;font-weight:800;color:var(--text)">${badge.name}</div>
    <div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px">${badge.desc}</div>
  `
  el.style.cssText = `
    position:fixed;
    bottom:120px;
    right:24px;
    background:var(--surface);
    border:2px solid var(--accent-mid);
    border-radius:var(--r-xl);
    padding:20px 24px;
    text-align:center;
    min-width:180px;
    box-shadow:var(--shadow-lg);
    z-index:9999;
    animation:pop-in 0.4s cubic-bezier(0.4,0,0.2,1) both;
    font-family:var(--font-body);
  `
  document.body.appendChild(el)
  setTimeout(() => {
    el.style.transition = 'opacity 0.4s, transform 0.4s'
    el.style.opacity = '0'
    el.style.transform = 'translateY(16px)'
    setTimeout(() => el.remove(), 450)
  }, 3200)
}

export function showNewBadges(badges) {
  badges.forEach((badge, i) => setTimeout(() => badgePop(badge), i * 600))
}

// ── Streak fire pop ───────────────────────────────────────────────────
export function streakPop(days) {
  const el = document.createElement('div')
  el.innerHTML = `<span style="font-size:2rem">🔥</span><span style="font-size:1.1rem;font-weight:800;margin-left:6px">${days} day streak!</span>`
  el.style.cssText = `
    position:fixed;
    bottom:100px;
    left:50%;
    transform:translateX(-50%);
    background:var(--gold-soft);
    border:2px solid var(--gold);
    border-radius:var(--r-xl);
    padding:12px 24px;
    display:flex;
    align-items:center;
    font-family:var(--font-display);
    color:#8B6914;
    z-index:9999;
    animation:pop-in 0.4s cubic-bezier(0.4,0,0.2,1) both, xp-float 2.5s 1s cubic-bezier(0.4,0,0.2,1) forwards;
    white-space:nowrap;
  `
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 3500)
}
