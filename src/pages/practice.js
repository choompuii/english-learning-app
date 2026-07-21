import { getAdaptiveBest } from '../store.js'

// Practice hub — a single entry point for the timed / adaptive vocabulary drills.
// Both modes drill the same vocabulary decks; this page lets the learner pick one.
const MODES = [
  {
    hash: '/speed-round',
    emoji: '⚡',
    title: 'Speed Round',
    thai: 'จับเวลา',
    desc: 'เห็นความหมายไทย → พิมพ์คำอังกฤษก่อนหมดเวลา เลือก deck ได้เอง',
    accent: 'var(--gold-soft)',
  },
  {
    hash: '/adaptive',
    emoji: '🎚️',
    title: 'Adaptive Practice',
    thai: 'ปรับระดับ',
    desc: 'คำถามปรับความยากตามคำตอบของคุณแบบเรียลไทม์ — เลือก 4 ตัวเลือก',
    accent: 'var(--accent-soft)',
  },
]

export function renderPracticeHub() {
  const main = document.getElementById('main-content')
  const bestRaw = getAdaptiveBest()
  const best = bestRaw && bestRaw.bestTotal > 0
    ? { pct: Math.round((bestRaw.bestScore / bestRaw.bestTotal) * 100) }
    : null

  main.innerHTML = `
    <div class="page" style="max-width:760px">
      <div class="page-header">
        <h1>Practice</h1>
        <p>ฝึกคำศัพท์แบบจับเวลาหรือปรับระดับความยาก — เลือกโหมดที่ชอบ</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:var(--sp-3)">
        ${MODES.map(m => `
          <div class="card card-hover" onclick="window.location.hash='${m.hash}'" style="display:flex;align-items:center;gap:var(--sp-4)">
            <div style="width:52px;height:52px;background:${m.accent};border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;font-size:1.6rem;flex-shrink:0">${m.emoji}</div>
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;margin-bottom:2px">${m.title} <span style="font-weight:400;color:var(--text-muted)">· ${m.thai}</span></div>
              <div style="font-size:var(--text-sm);color:var(--text-muted)">${m.desc}</div>
              ${m.hash === '/adaptive' && best ? `<div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:4px">🏆 Best: ${best.pct}%</div>` : ''}
            </div>
            <span style="color:var(--accent);font-size:1.25rem">→</span>
          </div>
        `).join('')}
      </div>
    </div>
  `
}
