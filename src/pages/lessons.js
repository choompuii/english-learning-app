import { lessons } from '../data/lessons.js'
import { getProgress } from '../store.js'
import { getOrderedLessons, isLessonPassed, isLessonUnlocked } from '../utils/progression.js'

const LEVEL_CONFIG = {
  A1: { color: '#F5C842', bg: '#FEF7DC', label: 'Beginner', emoji: '🌱' },
  A2: { color: '#FF8C42', bg: '#FFF0E5', label: 'Elementary', emoji: '🌿' },
  B1: { color: '#3FBF74', bg: '#E8F5EE', label: 'Intermediate', emoji: '🌳' },
  B2: { color: '#4A9EE0', bg: '#E5F1FA', label: 'Upper-Int.', emoji: '⭐' },
  C1: { color: '#9B59B6', bg: '#F3E8FA', label: 'Advanced', emoji: '🔥' },
  C2: { color: '#E74C3C', bg: '#FDECEA', label: 'Mastery', emoji: '👑' }
}

export function renderLessons() {
  const main = document.getElementById('main-content')
  const state = getProgress()
  const ordered = getOrderedLessons(lessons)

  // Group by level
  const byLevel = {}
  for (const lesson of ordered) {
    if (!byLevel[lesson.level]) byLevel[lesson.level] = []
    byLevel[lesson.level].push(lesson)
  }

  const totalLessons = ordered.length
  const completedCount = ordered.filter(l => isLessonPassed(l, state)).length
  const overallPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  main.innerHTML = `
    <div class="page" style="max-width:680px">
      <div class="page-header" style="margin-bottom:var(--sp-6)">
        <h1>Learning Path</h1>
        <p>เรียนตามลำดับ — ผ่าน quiz เพื่อปลดล็อคบทถัดไป</p>
      </div>

      <!-- Overall progress bar -->
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:var(--sp-5) var(--sp-6);margin-bottom:var(--sp-8)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--sp-3)">
          <span style="font-weight:600;font-size:var(--text-sm)">Overall Progress</span>
          <span style="font-size:var(--text-sm);font-weight:700;color:var(--accent)">${completedCount} / ${totalLessons} lessons</span>
        </div>
        <div class="progress-bar" style="height:8px">
          <div class="progress-fill" style="width:${overallPct}%;transition:width 1s var(--ease)"></div>
        </div>
        <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:var(--sp-2)">${overallPct}% complete</div>
      </div>

      <!-- Learning path -->
      <div class="learning-path">
        ${Object.entries(byLevel).map(([level, levelLessons]) => renderLevelSection(level, levelLessons, state, ordered)).join('')}
      </div>
    </div>
  `

  main.querySelectorAll('.path-node[data-unlocked="true"]').forEach(node => {
    node.addEventListener('click', () => window.location.hash = `/lessons/${node.dataset.id}`)
  })
}

function renderLevelSection(level, levelLessons, state, ordered) {
  const cfg = LEVEL_CONFIG[level] || { color: '#888', bg: '#f5f5f5', label: level, emoji: '📚' }
  const passedCount = levelLessons.filter(l => isLessonPassed(l, state)).length
  const allPassed = passedCount === levelLessons.length

  return `
    <div class="level-section" style="margin-bottom:var(--sp-8)">
      <!-- Level header -->
      <div style="display:flex;align-items:center;gap:var(--sp-3);margin-bottom:var(--sp-5);padding:var(--sp-3) var(--sp-4);background:${cfg.bg};border-radius:var(--r-lg);border:1px solid ${cfg.color}30">
        <div style="width:40px;height:40px;border-radius:50%;background:${cfg.color};display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0">
          ${allPassed ? '✓' : cfg.emoji}
        </div>
        <div style="flex:1">
          <div style="font-weight:700;color:var(--text)">${level} — ${cfg.label}</div>
          <div style="font-size:var(--text-xs);color:var(--text-muted)">${passedCount}/${levelLessons.length} completed</div>
        </div>
        <div style="width:48px;height:48px;position:relative;flex-shrink:0">
          ${miniDonut(passedCount / levelLessons.length, cfg.color)}
        </div>
      </div>

      <!-- Lesson nodes -->
      <div style="display:flex;flex-direction:column;gap:0;padding-left:20px;border-left:2px solid ${cfg.color}40">
        ${levelLessons.map((lesson, idx) => renderPathNode(lesson, state, ordered, cfg, idx, levelLessons.length)).join('')}
      </div>
    </div>
  `
}

function renderPathNode(lesson, state, ordered, cfg, idx, total) {
  const unlocked = isLessonUnlocked(lesson.id, ordered, state)
  const passed = isLessonPassed(lesson, state)
  const inProgress = state.lessons[lesson.id]?.status === 'in-progress'
  const isLast = idx === total - 1

  let statusColor = cfg.color
  let borderStyle = `2px solid ${cfg.color}40`
  let cursor = 'pointer'

  if (passed) {
    borderStyle = `2px solid ${cfg.color}40`
  } else if (inProgress) {
    borderStyle = `2px solid ${cfg.color}`
  } else {
    borderStyle = `1px solid var(--border)`
  }

  const topicIcons = { speaking: '🗣️', grammar: '📐', vocabulary: '📖', business: '💼', culture: '🌍', listening: '👂' }

  return `
    <div style="position:relative;margin-bottom:${isLast ? '0' : 'var(--sp-3)'}">
      <!-- connector dot -->
      <div style="position:absolute;left:-27px;top:50%;transform:translateY(-50%);width:12px;height:12px;border-radius:50%;background:${passed ? cfg.color : cfg.color + '60'};border:2px solid var(--surface)"></div>

      <div class="path-node path-node--active"
           data-id="${lesson.id}"
           data-unlocked="true"
           style="border:${borderStyle};border-radius:var(--r-lg);padding:var(--sp-4) var(--sp-5);background:var(--surface);cursor:${cursor};transition:all 200ms var(--ease)">
        <div style="display:flex;align-items:center;gap:var(--sp-3)">
          <!-- Status circle -->
          <div style="width:36px;height:36px;border-radius:50%;background:${passed ? cfg.color : cfg.color + '18'};display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;font-weight:700;color:${passed ? '#fff' : statusColor}">
            ${topicIcons[lesson.topic] || '📚'}
          </div>

          <div style="flex:1;min-width:0">
            <div style="display:flex;align-items:center;gap:var(--sp-2);margin-bottom:2px;flex-wrap:wrap">
              <span style="font-weight:600;font-size:var(--text-sm);color:${unlocked ? 'var(--text)' : 'var(--text-muted)'}">
                ${lesson.title}
              </span>
            </div>
            <div style="display:flex;align-items:center;gap:var(--sp-2);flex-wrap:wrap">
              <span style="font-size:var(--text-xs);color:var(--text-muted)">⏱ ${lesson.estimatedMinutes} min</span>
              <span style="font-size:var(--text-xs);color:var(--text-faint)">·</span>
              <span style="font-size:var(--text-xs);color:var(--text-muted)">${lesson.topic}</span>
              ${passed ? `<span style="font-size:var(--text-xs);font-weight:700;color:${cfg.color};padding:1px 8px;background:${cfg.color}18;border-radius:var(--r-full)">✓ Passed</span>` : ''}
              ${inProgress && !passed ? `<span style="font-size:var(--text-xs);font-weight:600;color:${cfg.color}">▶ In progress</span>` : ''}
            </div>
          </div>

          <div style="color:${cfg.color};font-size:1.1rem;flex-shrink:0">→</div>
        </div>
      </div>
    </div>
  `
}

function miniDonut(fraction, color) {
  const r = 18, c = 2 * Math.PI * r
  const offset = c - fraction * c
  return `
    <svg width="48" height="48" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="${r}" fill="none" stroke="var(--border)" stroke-width="4"/>
      <circle cx="24" cy="24" r="${r}" fill="none" stroke="${color}" stroke-width="4"
        stroke-dasharray="${c}" stroke-dashoffset="${offset}"
        stroke-linecap="round" transform="rotate(-90 24 24)"
        style="transition:stroke-dashoffset 1s var(--ease)"/>
      <text x="24" y="28" text-anchor="middle" font-size="10" font-weight="700" fill="${color}">${Math.round(fraction * 100)}%</text>
    </svg>
  `
}
