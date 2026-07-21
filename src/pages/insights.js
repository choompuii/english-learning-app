import {
  getProgress, getDifficultWords, getActivityLog,
  getDailyChallengeToday, getDailyChallengeStreak
} from '../store.js'
import { decks } from '../data/vocabulary.js'
import { lessons } from '../data/lessons.js'
import { getOrderedLessons, getNextLesson } from '../utils/progression.js'
import { esc, escAttr } from '../utils/html.js'

// All analysis is derived from localStorage progress — no server, no AI.

function pct(score, total) {
  return total > 0 ? Math.round((score / total) * 100) : 0
}

function accColor(p) {
  return p >= 70 ? 'var(--accent)' : p >= 50 ? '#c9973a' : 'var(--danger)'
}

// Average best-percentage across a { key: {bestScore, bestTotal} } map.
function avgBestPct(map) {
  const entries = Object.values(map || {}).filter(e => e.bestTotal > 0)
  if (!entries.length) return null
  const sum = entries.reduce((n, e) => n + (e.bestScore / e.bestTotal) * 100, 0)
  return { pct: Math.round(sum / entries.length), count: entries.length }
}

function buildAccuracy(state) {
  const rows = []

  // Vocabulary (from per-word answer tracking)
  const vp = state.vocabProgress || {}
  const vCorrect = Object.values(vp).reduce((n, p) => n + (p.correct || 0), 0)
  const vTotal = Object.values(vp).reduce((n, p) => n + (p.correct || 0) + (p.incorrect || 0), 0)
  if (vTotal > 0) rows.push({ label: 'Vocabulary', emoji: '📖', pct: pct(vCorrect, vTotal), meta: `${vTotal} ครั้ง`, link: '/skills/vocabulary' })

  // Quizzes
  const qa = avgBestPct(state.quizzes)
  if (qa) rows.push({ label: 'Quizzes', emoji: '❓', pct: qa.pct, meta: `${qa.count} ควิซ`, link: '/quiz' })

  // Speed Round
  const sr = avgBestPct(state.speedRound)
  if (sr) rows.push({ label: 'Speed Round', emoji: '⚡', pct: sr.pct, meta: `${sr.count} deck`, link: '/speed-round' })

  // Speaking
  const sp = avgBestPct(state.speakingRound)
  if (sp) rows.push({ label: 'Speaking', emoji: '🗣️', pct: sp.pct, meta: `${sp.count} deck`, link: '/speaking' })

  // Sentence Builder
  const sb = avgBestPct(state.sentenceBuilder)
  if (sb) rows.push({ label: 'Sentence Builder', emoji: '🧩', pct: sb.pct, meta: `${sb.count} level`, link: '/sentence-builder' })

  return rows
}

// Sum XP per week for the last N weeks (oldest → newest).
function weeklyXp(log, weeks = 8) {
  const today = new Date()
  const buckets = Array.from({ length: weeks }, () => 0)
  for (let i = 0; i < weeks * 7; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    const key = d.toISOString().split('T')[0]
    const weekIdx = weeks - 1 - Math.floor(i / 7)
    buckets[weekIdx] += log[key] || 0
  }
  return buckets
}

// Returns the Insights markup as a string so it can be embedded as a tab inside
// the Progress page (see progress.js). All content is <a>-link based — no listeners.
export function insightsContentHTML() {
  const state = getProgress()
  const log = getActivityLog()

  const accuracy = buildAccuracy(state)
  const difficultWords = getDifficultWords()
  const weekly = weeklyXp(log)
  const maxWeek = Math.max(...weekly, 1)
  const activeDays = Object.values(log).filter(x => x > 0).length

  // Due flashcards
  const todayStr = new Date().toISOString().split('T')[0]
  let dueCount = 0
  for (const deck of decks) {
    const ds = state.flashcards?.[deck.id]
    if (ds) dueCount += Object.values(ds.cards).filter(c => c.nextReview <= todayStr).length
  }

  const nextLesson = getNextLesson(getOrderedLessons(lessons), state)
  const weakActivities = accuracy.filter(a => a.pct < 60)
  const dailyDone = !!getDailyChallengeToday()
  const dailyStreak = getDailyChallengeStreak()

  // Build recommendations
  const recs = []
  if (!dailyDone) recs.push({ icon: '🗓️', text: 'ทำ Daily Challenge วันนี้', link: '/daily', cta: 'เริ่ม' })
  if (difficultWords.length) recs.push({ icon: '⚡', text: `ฝึกคำยาก ${difficultWords.length} คำ`, link: '/skills/vocabulary', cta: 'ทบทวน' })
  if (dueCount) recs.push({ icon: '🃏', text: `Flashcard ถึงกำหนดทบทวน ${dueCount} ใบ`, link: '/flashcards', cta: 'ทบทวน' })
  for (const a of weakActivities) recs.push({ icon: a.emoji, text: `พัฒนา ${a.label} (แม่นยำ ${a.pct}%)`, link: a.link, cta: 'ฝึก' })
  if (nextLesson) recs.push({ icon: '📖', text: `อ่านเสริม: ${nextLesson.title}`, link: `/lessons/${nextLesson.id}`, cta: 'อ่าน' })
  if (!recs.length) recs.push({ icon: '🎉', text: 'ทุกอย่างไปได้สวย — ทำต่อไปเรื่อยๆ นะ!', link: '/course', cta: 'เรียนต่อ' })

  const hasData = accuracy.length > 0 || activeDays > 0

  return `
      ${!hasData ? `
        <div class="empty-state">
          <div class="empty-state-icon">🌱</div>
          <h3>ยังไม่มีข้อมูลพอจะวิเคราะห์</h3>
          <p>เริ่มทำควิซ ฝึกคำศัพท์ หรือเล่นมินิเกม แล้วกลับมาดู insight ของคุณได้เลย</p>
          <a href="#/daily" class="btn btn-primary" style="margin-top:var(--sp-6)">เริ่มที่ Daily Challenge →</a>
        </div>
      ` : `
        <!-- Snapshot -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:var(--sp-3);margin-bottom:var(--sp-8)">
          ${[
            { icon: '✨', value: (state.xp || 0).toLocaleString(), label: 'Total XP' },
            { icon: '🔥', value: state.streakDays || 0, label: 'Day streak' },
            { icon: '📅', value: activeDays, label: 'วันที่เรียน' },
            { icon: '🗓️', value: dailyStreak, label: 'Daily streak' },
          ].map(s => `
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-4);text-align:center">
              <div style="font-size:1.4rem;margin-bottom:var(--sp-1)">${s.icon}</div>
              <div style="font-size:var(--text-xl);font-weight:800;color:var(--accent);line-height:1">${s.value}</div>
              <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:2px">${s.label}</div>
            </div>
          `).join('')}
        </div>

        <!-- Recommendations -->
        <div style="margin-bottom:var(--sp-8)">
          <h3 style="font-family:var(--font-body);font-weight:600;font-size:var(--text-lg);margin-bottom:var(--sp-4)">🎯 แนะนำให้ทำต่อ</h3>
          <div style="display:flex;flex-direction:column;gap:var(--sp-2)">
            ${recs.map(r => `
              <a href="#${escAttr(r.link)}" style="display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-3) var(--sp-4);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);text-decoration:none;transition:border-color 200ms"
                 onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
                <span style="font-size:1.3rem">${r.icon}</span>
                <span style="flex:1;color:var(--text);font-size:var(--text-sm);font-weight:500">${esc(r.text)}</span>
                <span style="font-size:var(--text-sm);color:var(--accent);font-weight:700;white-space:nowrap">${esc(r.cta)} →</span>
              </a>
            `).join('')}
          </div>
        </div>

        ${accuracy.length ? `
        <!-- Accuracy by activity -->
        <div style="margin-bottom:var(--sp-8)">
          <h3 style="font-family:var(--font-body);font-weight:600;font-size:var(--text-lg);margin-bottom:var(--sp-4)">ความแม่นยำแยกตามกิจกรรม</h3>
          <div style="display:flex;flex-direction:column;gap:var(--sp-3)">
            ${accuracy.map(a => `
              <div>
                <div style="display:flex;align-items:center;gap:var(--sp-2);margin-bottom:4px">
                  <span>${a.emoji}</span>
                  <span style="font-weight:600;font-size:var(--text-sm)">${a.label}</span>
                  <span style="font-size:var(--text-xs);color:var(--text-muted)">${a.meta}</span>
                  <span style="margin-left:auto;font-weight:800;color:${accColor(a.pct)}">${a.pct}%</span>
                </div>
                <div style="height:8px;background:var(--border);border-radius:var(--r-full);overflow:hidden">
                  <div style="height:100%;width:${a.pct}%;background:${accColor(a.pct)};border-radius:var(--r-full);transition:width .4s"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        <!-- Weekly XP trend -->
        <div style="margin-bottom:var(--sp-8)">
          <h3 style="font-family:var(--font-body);font-weight:600;font-size:var(--text-lg);margin-bottom:var(--sp-4)">แนวโน้ม XP (8 สัปดาห์ล่าสุด)</h3>
          <div style="display:flex;align-items:flex-end;gap:var(--sp-2);height:140px;padding:var(--sp-3);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg)">
            ${weekly.map((xp, i) => {
              const h = Math.round((xp / maxWeek) * 100)
              const isLast = i === weekly.length - 1
              return `
                <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:4px" title="${xp} XP">
                  <div style="font-size:9px;color:var(--text-muted)">${xp || ''}</div>
                  <div style="width:100%;height:${Math.max(2, h)}%;background:${isLast ? 'var(--accent)' : 'var(--accent-mid)'};border-radius:var(--r-sm) var(--r-sm) 0 0;min-height:2px"></div>
                  <div style="font-size:9px;color:var(--text-muted)">${i === 0 ? '8w' : isLast ? 'now' : ''}</div>
                </div>`
            }).join('')}
          </div>
        </div>

        ${difficultWords.length ? `
        <!-- Weak words -->
        <div style="margin-bottom:var(--sp-8)">
          <h3 style="font-family:var(--font-body);font-weight:600;font-size:var(--text-lg);margin-bottom:var(--sp-4)">⚡ คำที่ควรทบทวน (${difficultWords.length})</h3>
          <div style="display:flex;flex-wrap:wrap;gap:var(--sp-2);margin-bottom:var(--sp-3)">
            ${difficultWords.slice(0, 24).map(w => `<span style="background:var(--danger-soft);color:var(--danger);border:1px solid var(--danger);border-radius:var(--r-full);padding:2px var(--sp-3);font-size:var(--text-sm);font-weight:600">${esc(w)}</span>`).join('')}
            ${difficultWords.length > 24 ? `<span style="color:var(--text-muted);font-size:var(--text-sm);align-self:center">+${difficultWords.length - 24} เพิ่มเติม</span>` : ''}
          </div>
          <a href="#/daily" class="btn btn-primary btn-sm">ฝึกคำเหล่านี้ใน Daily Challenge →</a>
        </div>
        ` : ''}
      `}
  `
}
