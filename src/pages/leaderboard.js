import { fetchLeaderboard } from '../store.js'
import { getUser } from '../lib/auth.js'
import { esc } from '../utils/html.js'

const MEDALS = ['🥇', '🥈', '🥉']

export async function renderLeaderboard() {
  const main = document.getElementById('main-content')
  main.innerHTML = `
    <div class="page" style="max-width:680px">
      <div class="page-header">
        <h1>🏆 กระดานผู้นำ</h1>
        <p>จัดอันดับผู้เรียนตามคะแนน XP สะสม — สู้ๆ ไต่อันดับกันเลย!</p>
      </div>
      <div id="lb-body"><div class="card" style="text-align:center;color:var(--text-muted)">กำลังโหลด…</div></div>
    </div>
  `

  const [{ ok, rows }, user] = await Promise.all([fetchLeaderboard(100), getUser()])
  const body = document.getElementById('lb-body')

  if (!ok) {
    body.innerHTML = setupNotice()
    return
  }
  if (!rows.length) {
    body.innerHTML = `<div class="card" style="text-align:center;color:var(--text-muted)">ยังไม่มีข้อมูล — เริ่มเรียนเพื่อขึ้นกระดานเป็นคนแรก! 🚀</div>`
    return
  }

  const myId = user?.id
  body.innerHTML = `
    <div class="card" style="padding:0;overflow:hidden">
      ${rows.map((r, i) => rowHTML(r, i, r.user_id === myId)).join('')}
    </div>
  `
}

function rowHTML(r, i, isMe) {
  const rank = MEDALS[i] || `#${i + 1}`
  const initial = (r.display_name?.[0] || '?').toUpperCase()
  return `
    <div style="display:flex;align-items:center;gap:var(--sp-3);padding:12px 16px;border-bottom:1px solid var(--border-soft);
      background:${isMe ? 'var(--accent-soft)' : 'transparent'}">
      <span style="width:34px;text-align:center;font-size:${i < 3 ? '1.3rem' : 'var(--text-sm)'};font-weight:800;color:var(--text-muted);flex-shrink:0">${rank}</span>
      <span style="width:36px;height:36px;border-radius:50%;background:${escColor(r.avatar_color)};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">${esc(initial)}</span>
      <div style="min-width:0;flex:1">
        <div style="font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
          ${esc(r.display_name || 'Learner')}${isMe ? ' <span style="font-size:var(--text-xs);color:var(--accent)">(คุณ)</span>' : ''}
        </div>
        <div style="font-size:var(--text-xs);color:var(--text-muted)">
          ${r.level ? `<span class="level-badge level-${esc(r.level)}">${esc(r.level)}</span> ` : ''}🔥 ${r.streak || 0} วัน
        </div>
      </div>
      <span style="font-weight:800;color:var(--accent);flex-shrink:0">${(r.xp || 0).toLocaleString()} XP</span>
    </div>
  `
}

// Only allow hex colours through to the inline style, to keep it injection-safe.
function escColor(c) {
  return /^#[0-9a-fA-F]{3,8}$/.test(c || '') ? c : '#2d6a4f'
}

function setupNotice() {
  return `
    <div class="card">
      <h3 style="margin:0 0 var(--sp-2)">⚙️ กระดานผู้นำยังไม่ถูกตั้งค่า</h3>
      <p style="color:var(--text-muted);font-size:var(--text-sm);margin:0 0 var(--sp-3)">
        ต้องสร้างตาราง <code>leaderboard</code> ใน Supabase ก่อน (รันสคริปต์ครั้งเดียว)
        ดูไฟล์ <code>supabase/leaderboard.sql</code> แล้วรันใน Supabase SQL Editor
      </p>
    </div>
  `
}
