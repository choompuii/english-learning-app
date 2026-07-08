import { getUser, getProfile, saveProfile } from '../lib/auth.js'
import { getProgress, getBadges, BADGES } from '../store.js'
import { navigate } from '../router.js'

const COUNTRIES = ['Thailand','United States','United Kingdom','Japan','China','South Korea','Singapore','Australia','Germany','France','Other']
const TIMEZONES = ['Asia/Bangkok','Asia/Tokyo','Asia/Singapore','Asia/Seoul','Australia/Sydney','Europe/London','Europe/Paris','America/New_York','America/Los_Angeles']
const COVER_COLORS = ['#deeae3','#dce8f5','#ede8f5','#f5e8e8','#f5f0e8','#e8f5f3','#f0f5e8','#f5e8f0']
const RANKS = [
  { min:0,    label:'Novice',      icon:'🌱', color:'#6b7280' },
  { min:100,  label:'Explorer',    icon:'🗺️', color:'#059669' },
  { min:500,  label:'Apprentice',  icon:'📖', color:'#2563eb' },
  { min:1500, label:'Scholar',     icon:'🎓', color:'#7c3aed' },
  { min:3000, label:'Expert',      icon:'⚡', color:'#d97706' },
  { min:6000, label:'Master',      icon:'👑', color:'#dc2626' },
]

function getRank(xp) {
  return [...RANKS].reverse().find(r => xp >= r.min) || RANKS[0]
}

function formatMinutes(xp) {
  const m = Math.round(xp / 5 * 2)
  if (m < 60) return `${m}m`
  return `${Math.floor(m/60)}h ${m%60}m`
}

const INP = `width:100%;padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;font-size:14px;font-family:var(--font-body);color:var(--text);background:var(--bg);outline:none;box-sizing:border-box;transition:border-color .15s`
const LBL = `display:block;font-size:12px;font-weight:600;margin-bottom:6px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em`
const BTN = `padding:10px 20px;background:var(--accent);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;font-family:var(--font-body)`

// ── Entry ──────────────────────────────────────────────────

export async function renderProfile() {
  const main = document.getElementById('main-content')
  const [user, profile, progress] = await Promise.all([getUser(), getProfile(), Promise.resolve(getProgress())])
  if (!user) { navigate('/account'); return }

  const displayName  = profile?.display_name || user.email.split('@')[0]
  const username     = profile?.username || ''
  const avatarColor  = profile?.avatar_color || '#2d6a4f'
  const coverColor   = profile?.cover_color || '#deeae3'
  const initial      = displayName[0].toUpperCase()
  const xp           = progress.xp || 0
  const rank         = getRank(xp)
  const badges       = getBadges(progress)
  const earnedBadges = badges.filter(b => b.earned)

  const completedLessons = Object.values(progress.lessons || {}).filter(l => l.status === 'completed').length
  const wordsLearned = Object.values(progress.flashcards || {}).reduce((n, d) => n + Object.keys(d.cards || {}).length, 0)
  const quizzesDone  = Object.keys(progress.quizzes || {}).length

  main.innerHTML = `
    <div style="max-width:800px;margin:0 auto;padding-bottom:60px">

      <!-- Cover + Avatar -->
      <div style="position:relative;margin-bottom:64px">
        <div id="cover-bar" style="height:180px;background:${coverColor};border-radius:0 0 20px 20px;cursor:pointer;display:flex;align-items:flex-end;justify-content:flex-end;padding:16px;transition:filter .15s"
             onmouseover="this.style.filter='brightness(.95)'" onmouseout="this.style.filter=''">
          <span style="font-size:12px;font-weight:600;color:rgba(0,0,0,.4);background:rgba(255,255,255,.5);padding:4px 10px;border-radius:99px">✏️ Change cover</span>
        </div>
        <div style="position:absolute;bottom:-48px;left:28px;display:flex;align-items:flex-end;gap:16px">
          <div style="width:88px;height:88px;border-radius:50%;background:${avatarColor};border:4px solid var(--bg);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:700;color:#fff;flex-shrink:0">${initial}</div>
          <div style="padding-bottom:4px">
            <h2 style="margin:0 0 2px;font-size:1.2rem;font-weight:800;color:var(--text)">${displayName}</h2>
            <p style="margin:0;font-size:13px;color:var(--text-muted)">${username ? '@'+username : user.email}</p>
          </div>
        </div>
        <div style="position:absolute;bottom:-40px;right:28px;display:flex;align-items:center;gap:8px">
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:8px 14px;display:flex;align-items:center;gap:8px">
            <span style="font-size:1.1rem">${rank.icon}</span>
            <div>
              <div style="font-size:11px;color:var(--text-muted)">Rank</div>
              <div style="font-size:13px;font-weight:700;color:${rank.color}">${rank.label}</div>
            </div>
          </div>
          <button onclick="window.location.hash='/account'" style="background:var(--surface);border:1.5px solid var(--border);border-radius:10px;padding:8px 14px;font-size:13px;font-weight:600;cursor:pointer;color:var(--text);font-family:var(--font-body)">Edit profile</button>
        </div>
      </div>

      <!-- Stats bar -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:0 20px;margin-bottom:24px">
        ${[
          { label:'Level', value: profile?.level || progress.selectedLevel || '—', icon:'📊' },
          { label:'Total XP', value: xp.toLocaleString(), icon:'✨' },
          { label:'Study Time', value: formatMinutes(xp), icon:'⏱' },
          { label:'Words Learned', value: wordsLearned, icon:'💡' },
        ].map(s => `
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px 16px;text-align:center">
            <div style="font-size:1.2rem;margin-bottom:4px">${s.icon}</div>
            <div style="font-size:1.1rem;font-weight:800;color:var(--accent)">${s.value}</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${s.label}</div>
          </div>
        `).join('')}
      </div>

      <!-- Tabs -->
      <div style="padding:0 20px">
        <div style="display:flex;gap:2px;border-bottom:1px solid var(--border);margin-bottom:24px">
          ${['Overview','Personal Info','Achievements','Goals'].map((t,i) => `
            <button class="prof-tab" data-tab="${i}" style="padding:9px 16px;background:none;border:none;font-size:13px;font-weight:600;cursor:pointer;font-family:var(--font-body);color:${i===0?'var(--accent)':'var(--text-muted)'};border-bottom:2px solid ${i===0?'var(--accent)':'transparent'};margin-bottom:-1px">${t}</button>
          `).join('')}
        </div>

        <div id="tab-0">${overviewTab(progress, profile, completedLessons, wordsLearned, quizzesDone, earnedBadges)}</div>
        <div id="tab-1" style="display:none">${personalInfoTab(profile, user)}</div>
        <div id="tab-2" style="display:none">${achievementsTab(earnedBadges, badges, completedLessons, wordsLearned)}</div>
        <div id="tab-3" style="display:none">${goalsTab(profile, progress)}</div>
      </div>

      <!-- Cover color picker -->
      <div id="cover-picker" style="display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.4);align-items:center;justify-content:center">
        <div style="background:var(--surface);border-radius:16px;padding:24px;width:280px">
          <p style="margin:0 0 14px;font-size:14px;font-weight:700;color:var(--text)">Choose cover color</p>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:18px">
            ${COVER_COLORS.map(c => `<button class="cover-opt" data-color="${c}" style="height:48px;border-radius:10px;background:${c};border:3px solid ${c===coverColor?'var(--accent)':'transparent'};cursor:pointer;transition:transform .1s" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform=''"></button>`).join('')}
          </div>
          <button id="close-cover-picker" style="${BTN};width:100%;background:none;border:1.5px solid var(--border);color:var(--text-muted)">Cancel</button>
        </div>
      </div>

    </div>
  `

  wireFocus(main)
  wireTabs(main)
  wireCoverPicker(main, profile, coverColor)
  wirePersonalForm(main, profile, user)
  wireGoalsForm(main, profile)
}

// ── Tabs ───────────────────────────────────────────────────

function overviewTab(progress, profile, completedLessons, wordsLearned, quizzesDone, earnedBadges) {
  const skills = [
    { label:'Speaking',  score: profile?.speaking_score  || 0, color:'#7c3aed', icon:'🎤' },
    { label:'Listening', score: profile?.listening_score || 0, color:'#2563eb', icon:'👂' },
    { label:'Reading',   score: profile?.reading_score   || 0, color:'#059669', icon:'📖' },
    { label:'Writing',   score: profile?.writing_score   || 0, color:'#d97706', icon:'✏️' },
  ]
  const bio = profile?.bio || ''

  return `
    <div style="display:flex;flex-direction:column;gap:20px">
      ${bio ? `<div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px 20px"><p style="margin:0;font-size:14px;color:var(--text);line-height:1.6">${bio}</p></div>` : ''}

      <!-- Skill scores -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:20px">
        <h3 style="margin:0 0 16px;font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Skill Scores</h3>
        <div style="display:flex;flex-direction:column;gap:14px">
          ${skills.map(s => `
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
                <span style="font-size:13px;font-weight:600;color:var(--text)">${s.icon} ${s.label}</span>
                <span style="font-size:13px;font-weight:700;color:${s.color}">${s.score > 0 ? s.score + '/100' : 'Not set'}</span>
              </div>
              <div style="height:8px;background:var(--border);border-radius:99px;overflow:hidden">
                <div style="height:100%;width:${s.score}%;background:${s.color};border-radius:99px;transition:width .6s ease"></div>
              </div>
            </div>
          `).join('')}
          <p style="font-size:12px;color:var(--text-muted);margin:4px 0 0">Update scores in <a href="#/account" style="color:var(--accent)">Account → Security</a> or set manually in Personal Info tab.</p>
        </div>
      </div>

      <!-- Learning stats -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
        ${[
          { icon:'📚', value: completedLessons, label:'Lessons Done' },
          { icon:'🎯', value: quizzesDone, label:'Quizzes Taken' },
          { icon:'💡', value: wordsLearned, label:'Cards Studied' },
        ].map(s => `
          <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center">
            <div style="font-size:1.4rem;margin-bottom:6px">${s.icon}</div>
            <div style="font-size:1.4rem;font-weight:800;color:var(--accent)">${s.value}</div>
            <div style="font-size:11px;color:var(--text-muted);margin-top:2px">${s.label}</div>
          </div>
        `).join('')}
      </div>

      <!-- Recent badges -->
      ${earnedBadges.length ? `
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:20px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
            <h3 style="margin:0;font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Recent Badges</h3>
            <button onclick="document.querySelectorAll('.prof-tab')[2].click()" style="background:none;border:none;color:var(--accent);font-size:12px;font-weight:600;cursor:pointer">See all →</button>
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            ${earnedBadges.slice(0,5).map(b => `
              <div title="${b.name} — ${b.desc}" style="display:flex;flex-direction:column;align-items:center;gap:4px;cursor:default">
                <div style="width:44px;height:44px;background:#f0fdf4;border:1.5px solid #b8d4c0;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem">${b.icon}</div>
                <span style="font-size:10px;color:var(--text-muted);font-weight:600">${b.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `
}

function personalInfoTab(profile, user) {
  return `
    <form id="personal-form" style="display:flex;flex-direction:column;gap:20px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        <div>
          <label style="${LBL}">Display Name</label>
          <input id="pf-name" type="text" value="${profile?.display_name||''}" style="${INP}" placeholder="Your name" />
        </div>
        <div>
          <label style="${LBL}">Username</label>
          <div style="position:relative">
            <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);font-size:14px">@</span>
            <input id="pf-username" type="text" value="${profile?.username||''}" style="${INP};padding-left:28px" placeholder="yourhandle" />
          </div>
        </div>
        <div>
          <label style="${LBL}">Email</label>
          <input type="email" value="${user.email}" style="${INP};opacity:.6" disabled />
        </div>
        <div>
          <label style="${LBL}">Phone</label>
          <input id="pf-phone" type="tel" value="${profile?.phone||''}" style="${INP}" placeholder="+66 81 234 5678" />
        </div>
        <div>
          <label style="${LBL}">Country</label>
          <select id="pf-country" style="${INP}">
            <option value="">— Select —</option>
            ${COUNTRIES.map(c=>`<option value="${c}" ${profile?.country===c?'selected':''}>${c}</option>`).join('')}
          </select>
        </div>
        <div>
          <label style="${LBL}">Timezone</label>
          <select id="pf-timezone" style="${INP}">
            <option value="">— Select —</option>
            ${TIMEZONES.map(t=>`<option value="${t}" ${profile?.timezone===t?'selected':''}>${t}</option>`).join('')}
          </select>
        </div>
        <div>
          <label style="${LBL}">Birthday</label>
          <input id="pf-birthday" type="date" value="${profile?.birthday||''}" style="${INP}" />
        </div>
      </div>
      <div>
        <label style="${LBL}">Bio</label>
        <textarea id="pf-bio" rows="3" style="${INP};resize:vertical" placeholder="Tell us about yourself...">${profile?.bio||''}</textarea>
      </div>

      <div style="border-top:1px solid var(--border);padding-top:20px">
        <h3 style="margin:0 0 14px;font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Skill Scores (Manual)</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
          ${[['speaking','🎤 Speaking'],['listening','👂 Listening'],['reading','📖 Reading'],['writing','✏️ Writing']].map(([k,l])=>`
            <div>
              <label style="${LBL}">${l}</label>
              <input id="pf-${k}" type="number" min="0" max="100" value="${profile?.[k+'_score']||''}" style="${INP}" placeholder="0–100" />
            </div>
          `).join('')}
        </div>
      </div>

      <div id="pf-msg" style="display:none;font-size:13px"></div>
      <button type="submit" style="${BTN}">Save changes</button>
    </form>
  `
}

function achievementsTab(earnedBadges, allBadges, completedLessons, wordsLearned) {
  const certs = []
  if (completedLessons >= 1)  certs.push({ icon:'📜', title:'First Steps', desc:'Completed your first lesson', color:'#deeae3' })
  if (completedLessons >= 5)  certs.push({ icon:'🎓', title:'Dedicated Learner', desc:'Completed 5 lessons', color:'#dce8f5' })
  if (completedLessons >= 20) certs.push({ icon:'🏆', title:'Champion', desc:'Completed 20 lessons', color:'#f5f0e8' })
  if (wordsLearned >= 50)     certs.push({ icon:'📚', title:'Vocabulary Builder', desc:'Studied 50 flashcards', color:'#ede8f5' })

  return `
    <div style="display:flex;flex-direction:column;gap:20px">

      <!-- Badges -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:20px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <h3 style="margin:0;font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Badges</h3>
          <span style="font-size:12px;color:var(--text-muted)">${earnedBadges.length} / ${allBadges.length} earned</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
          ${allBadges.map(b => `
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;opacity:${b.earned?'1':'.35'}">
              <div style="width:52px;height:52px;background:${b.earned?'#f0fdf4':'var(--border)'};border:2px solid ${b.earned?'#b8d4c0':'transparent'};border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.4rem">${b.icon}</div>
              <div style="font-size:11px;font-weight:700;color:var(--text)">${b.name}</div>
              <div style="font-size:10px;color:var(--text-muted);line-height:1.3">${b.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Certificates -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:20px">
        <h3 style="margin:0 0 16px;font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Certificates</h3>
        ${certs.length ? `
          <div style="display:flex;flex-direction:column;gap:10px">
            ${certs.map(c => `
              <div style="background:${c.color};border-radius:12px;padding:14px 18px;display:flex;align-items:center;gap:14px">
                <span style="font-size:1.8rem">${c.icon}</span>
                <div>
                  <div style="font-weight:700;font-size:14px;color:#1a3328">${c.title}</div>
                  <div style="font-size:12px;color:#3d6b52">${c.desc}</div>
                </div>
                <div style="margin-left:auto">
                  <span style="font-size:11px;font-weight:600;background:rgba(255,255,255,.6);padding:4px 10px;border-radius:99px;color:#2d6a4f">Earned ✓</span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `<p style="color:var(--text-muted);font-size:13px;margin:0">Complete lessons to earn certificates!</p>`}
      </div>

    </div>
  `
}

function goalsTab(profile, progress) {
  const { goal: dailyGoal, todayXp } = { goal: progress.dailyGoal || 50, todayXp: 0 }
  const weeklyGoal  = profile?.weekly_goal  || 5
  const monthlyGoal = profile?.monthly_goal || 20

  const completedThisWeek  = countCompletedSince(progress, 7)
  const completedThisMonth = countCompletedSince(progress, 30)

  return `
    <form id="goals-form" style="display:flex;flex-direction:column;gap:16px">

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:20px">
        <h3 style="margin:0 0 16px;font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Daily Goal</h3>
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px">
          <div style="flex:1">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px">
              <span style="font-size:13px;color:var(--text)">XP per day</span>
              <span style="font-size:13px;font-weight:700;color:var(--accent)" id="daily-label">${dailyGoal} XP</span>
            </div>
            <input id="goal-daily" type="range" min="10" max="200" step="10" value="${dailyGoal}" style="width:100%;accent-color:var(--accent)" />
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);margin-top:4px"><span>10 XP</span><span>200 XP</span></div>
          </div>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:20px">
          <h3 style="margin:0 0 14px;font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Weekly Goal</h3>
          <label style="${LBL}">Lessons per week</label>
          <input id="goal-weekly" type="number" min="1" max="30" value="${weeklyGoal}" style="${INP};margin-bottom:10px" />
          <div style="height:6px;background:var(--border);border-radius:99px;overflow:hidden">
            <div style="height:100%;width:${Math.min(100,Math.round(completedThisWeek/weeklyGoal*100))}%;background:var(--accent);border-radius:99px"></div>
          </div>
          <p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">${completedThisWeek} / ${weeklyGoal} this week</p>
        </div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:20px">
          <h3 style="margin:0 0 14px;font-size:13px;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em">Monthly Goal</h3>
          <label style="${LBL}">Lessons per month</label>
          <input id="goal-monthly" type="number" min="1" max="100" value="${monthlyGoal}" style="${INP};margin-bottom:10px" />
          <div style="height:6px;background:var(--border);border-radius:99px;overflow:hidden">
            <div style="height:100%;width:${Math.min(100,Math.round(completedThisMonth/monthlyGoal*100))}%;background:var(--accent);border-radius:99px"></div>
          </div>
          <p style="font-size:12px;color:var(--text-muted);margin:6px 0 0">${completedThisMonth} / ${monthlyGoal} this month</p>
        </div>
      </div>

      <div id="goals-msg" style="display:none;font-size:13px"></div>
      <button type="submit" style="${BTN}">Save goals</button>
    </form>
  `
}

// ── Wiring ─────────────────────────────────────────────────

function wireTabs(main) {
  main.querySelectorAll('.prof-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      main.querySelectorAll('.prof-tab').forEach(b => { b.style.color='var(--text-muted)'; b.style.borderBottomColor='transparent' })
      btn.style.color='var(--accent)'; btn.style.borderBottomColor='var(--accent)'
      for (let i = 0; i < 4; i++) main.querySelector(`#tab-${i}`).style.display = i===+btn.dataset.tab?'':'none'
    })
  })
}

function wireCoverPicker(main, profile, currentCover) {
  let color = currentCover
  main.querySelector('#cover-bar').addEventListener('click', () => { main.querySelector('#cover-picker').style.display='flex' })
  main.querySelector('#close-cover-picker').addEventListener('click', () => { main.querySelector('#cover-picker').style.display='none' })
  main.querySelectorAll('.cover-opt').forEach(btn => {
    btn.addEventListener('click', async () => {
      color = btn.dataset.color
      main.querySelector('#cover-bar').style.background = color
      main.querySelectorAll('.cover-opt').forEach(b => { b.style.borderColor = b.dataset.color===color?'var(--accent)':'transparent' })
      await saveProfile({ ...(profile||{}), cover_color: color })
      main.querySelector('#cover-picker').style.display='none'
    })
  })
}

function wirePersonalForm(main, profile, user) {
  const form = main.querySelector('#personal-form')
  if (!form) return
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const msg = main.querySelector('#pf-msg')
    const g = id => main.querySelector(id)?.value?.trim() || ''
    try {
      await saveProfile({
        ...(profile||{}),
        display_name:    g('#pf-name'),
        username:        g('#pf-username'),
        phone:           g('#pf-phone'),
        country:         g('#pf-country'),
        timezone:        g('#pf-timezone'),
        birthday:        g('#pf-birthday'),
        bio:             g('#pf-bio'),
        speaking_score:  +g('#pf-speaking') || null,
        listening_score: +g('#pf-listening') || null,
        reading_score:   +g('#pf-reading')   || null,
        writing_score:   +g('#pf-writing')   || null,
      })
      showMsg(msg, '✓ Saved successfully', 'green')
      renderProfile()
    } catch (err) { showMsg(msg, err.message, 'red') }
  })
}

function wireGoalsForm(main, profile) {
  const form = main.querySelector('#goals-form')
  if (!form) return

  const slider = main.querySelector('#goal-daily')
  const label  = main.querySelector('#daily-label')
  if (slider) slider.addEventListener('input', () => { label.textContent = slider.value + ' XP' })

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const msg = main.querySelector('#goals-msg')
    try {
      await saveProfile({
        ...(profile||{}),
        daily_minutes: +main.querySelector('#goal-daily')?.value || 50,
        weekly_goal:   +main.querySelector('#goal-weekly')?.value || 5,
        monthly_goal:  +main.querySelector('#goal-monthly')?.value || 20,
      })
      showMsg(msg, '✓ Goals saved', 'green')
    } catch (err) { showMsg(msg, err.message, 'red') }
  })
}

// ── Helpers ────────────────────────────────────────────────

function countCompletedSince(progress, days) {
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)
  return Object.values(progress.lessons || {}).filter(l => {
    if (l.status !== 'completed') return false
    return l.completedAt && new Date(l.completedAt) >= cutoff
  }).length
}

function showMsg(el, text, color) {
  el.style.display = 'block'
  el.style.color = color === 'green' ? '#16a34a' : '#dc2626'
  el.textContent = text
}

function wireFocus(main) {
  main.querySelectorAll('input,select,textarea').forEach(el => {
    el.addEventListener('focus', () => { el.style.borderColor = 'var(--accent)' })
    el.addEventListener('blur',  () => { el.style.borderColor = 'var(--border)' })
  })
}
