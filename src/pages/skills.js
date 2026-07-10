import { SKILLS, getSkill, getSkillItems, getSkillItem } from '../data/skills/index.js'
import { vocabularyCategories } from '../data/skills/vocabulary.js'
import { getSkillItemProgress, getNotebook, getDifficultWords, getLearnedWords, getProgress } from '../store.js'
import { esc, escAttr } from '../utils/html.js'
import { ttsButton, attachTtsListeners } from '../utils/tts.js'
import { openWordModal } from '../utils/word-modal.js'
import { renderVocabularyLesson } from './skill-vocabulary.js'
import { renderGrammarLesson } from './skill-grammar.js'
import { renderReadingLesson } from './skill-reading.js'
import { renderListeningLesson } from './skill-listening.js'

// ── Hub: all six skills ──
export function renderSkillsHub() {
  const main = document.getElementById('main-content')

  main.innerHTML = `
    <div class="page" style="max-width:760px">
      <div class="page-header" style="margin-bottom:var(--sp-6)">
        <h1>Skills</h1>
        <p>ฝึกภาษาอังกฤษครบทุกทักษะ — เลือกทักษะที่อยากพัฒนา</p>
      </div>
      <div class="skill-grid">
        ${SKILLS.map(skillCardHTML).join('')}
      </div>
    </div>
  `

  main.querySelectorAll('.skill-card[data-skill]').forEach(card => {
    const skill = card.dataset.skill
    window.location.hash
    card.addEventListener('click', () => {
      window.location.hash = skill === 'speaking' ? '/speaking' : `/skills/${skill}`
    })
  })
}

function skillCardHTML(skill) {
  if (!skill.active) {
    return `
      <div class="skill-card skill-card--locked">
        <div style="font-size:2rem">${skill.emoji}</div>
        <div>
          <div style="font-weight:700">${skill.name} <span style="font-weight:400;color:var(--text-muted)">· ${esc(skill.thai)}</span></div>
          <div style="font-size:var(--text-sm);color:var(--text-muted);margin-top:2px">${esc(skill.desc)}</div>
        </div>
        <span class="chip" style="align-self:flex-start;background:var(--surface-2);color:var(--text-muted)">🔒 เร็วๆ นี้</span>
      </div>
    `
  }

  const items = getSkillItems(skill.id)
  const total = items.length
  const completed = items.filter(it => getSkillItemProgress(it.id).status === 'completed').length
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0

  return `
    <button class="skill-card" data-skill="${skill.id}" style="border-top:3px solid ${skill.color}">
      <div style="font-size:2rem">${skill.emoji}</div>
      <div>
        <div style="font-weight:700">${skill.name} <span style="font-weight:400;color:var(--text-muted)">· ${esc(skill.thai)}</span></div>
        <div style="font-size:var(--text-sm);color:var(--text-muted);margin-top:2px">${esc(skill.desc)}</div>
      </div>
      <div style="margin-top:auto">
        <div class="progress-bar" style="height:6px"><div class="progress-fill" style="width:${pct}%;background:${skill.color}"></div></div>
        <div style="font-size:var(--text-xs);color:var(--text-muted);margin-top:6px">${completed} / ${total} ทำแล้ว</div>
      </div>
    </button>
  `
}

// ── Browser: items within one skill ──
export function renderSkillBrowser({ skill }) {
  const main = document.getElementById('main-content')
  const s = getSkill(skill)

  if (!s || !s.active) {
    main.innerHTML = notFound('ไม่พบทักษะนี้ หรือยังไม่เปิดให้ใช้งาน')
    return
  }

  if (skill === 'vocabulary') {
    renderVocabularyBrowser(s, main)
    return
  }

  const items = getSkillItems(skill)

  main.innerHTML = `
    <div class="page" style="max-width:820px">
      <div class="breadcrumb">
        <a href="#/skills">Skills</a>
        <span class="breadcrumb-sep">›</span>
        <span>${s.name}</span>
      </div>

      <div class="page-header" style="margin-bottom:var(--sp-6)">
        <h1>${s.emoji} ${s.name} <span style="font-weight:400;color:var(--text-muted);font-size:var(--text-lg)">· ${esc(s.thai)}</span></h1>
        <p>${esc(s.desc)}</p>
      </div>

      <div class="item-grid">
        ${items.map(it => itemCardHTML(skill, it)).join('')}
      </div>
    </div>
  `

  main.querySelectorAll('.item-card[data-id]').forEach(card => {
    card.addEventListener('click', () => { window.location.hash = `/skills/${skill}/${card.dataset.id}` })
  })
}

// ── Vocabulary browser with tabs ──

function findWordData(wordStr) {
  for (const cat of vocabularyCategories) {
    const w = cat.words.find(w => w.word === wordStr)
    if (w) return { ...w, categoryTitle: cat.title, categoryId: cat.id }
  }
  return null
}

function miniWordCard(w, prog) {
  if (!w) return ''
  let accuracyBadge = ''
  if (prog) {
    const total = (prog.correct || 0) + (prog.incorrect || 0)
    if (total > 0) {
      const pct = Math.round((prog.correct / total) * 100)
      const color = pct >= 70 ? 'var(--success,#2d6a4f)' : pct >= 50 ? '#c9973a' : 'var(--danger)'
      accuracyBadge = `<span style="font-size:var(--text-xs);padding:1px 6px;border-radius:var(--r-full);background:var(--surface-2);color:${color};font-weight:700">${pct}% (${prog.correct}/${total})</span>`
    }
  }
  return `
    <div class="vocab-card vocab-card--clickable" data-word="${escAttr(w.word)}" style="cursor:pointer">
      <div style="display:flex;align-items:center;gap:var(--sp-2)">
        <span style="font-size:1.6rem">${w.emoji || '📖'}</span>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;display:flex;align-items:center;gap:var(--sp-2);flex-wrap:wrap">${esc(w.word)} ${ttsButton(w.word)} ${accuracyBadge}</div>
          <div style="font-size:var(--text-xs);font-family:var(--font-mono);color:var(--text-muted)">${esc(w.ipa || '')}</div>
        </div>
      </div>
      <div style="font-weight:600;color:var(--accent);font-size:var(--text-sm)">${esc(w.thai || '')}</div>
      <div style="font-size:var(--text-xs);color:var(--text-muted)">${esc(w.def || w.definition || '')}</div>
    </div>
  `
}

function emptyState(msg) {
  return `<div class="empty-state"><p>${esc(msg)}</p></div>`
}

function renderVocabularyBrowser(s, main) {
  const items = getSkillItems('vocabulary')
  const TABS = [
    { id: 'categories', label: 'หมวดหมู่' },
    { id: 'saved',      label: '🔖 บันทึกไว้' },
    { id: 'difficult',  label: '⚡ คำยาก' },
    { id: 'learned',    label: '✓ เรียนแล้ว' },
  ]

  main.innerHTML = `
    <div class="page" style="max-width:820px">
      <div class="breadcrumb">
        <a href="#/skills">Skills</a>
        <span class="breadcrumb-sep">›</span>
        <span>${s.name}</span>
      </div>

      <div class="page-header" style="margin-bottom:var(--sp-4)">
        <h1>${s.emoji} ${s.name} <span style="font-weight:400;color:var(--text-muted);font-size:var(--text-lg)">· ${esc(s.thai)}</span></h1>
        <p>${esc(s.desc)}</p>
      </div>

      <div class="vocab-tabs">
        ${TABS.map(t => `<button class="vocab-tab${t.id === 'categories' ? ' active' : ''}" data-tab="${t.id}">${t.label}</button>`).join('')}
      </div>

      <div id="vocab-tab-content"></div>
    </div>
  `

  const content = main.querySelector('#vocab-tab-content')

  function showTab(tabId) {
    main.querySelectorAll('.vocab-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId))

    if (tabId === 'categories') {
      content.innerHTML = `<div class="item-grid">${items.map(it => itemCardHTML('vocabulary', it)).join('')}</div>`
      content.querySelectorAll('.item-card[data-id]').forEach(card => {
        card.addEventListener('click', () => { window.location.hash = `/skills/vocabulary/${card.dataset.id}` })
      })
      return
    }

    let words = []
    const vocabProg = getProgress().vocabProgress || {}

    if (tabId === 'saved') {
      words = getNotebook()
        .filter(e => e.source === 'vocabulary')
        .map(e => findWordData(e.word) || { word: e.word, thai: e.thai, def: e.definition, ipa: e.phonetic, emoji: '📖', example: e.example })
    } else if (tabId === 'difficult') {
      words = getDifficultWords().map(findWordData).filter(Boolean)
    } else if (tabId === 'learned') {
      words = getLearnedWords().map(findWordData).filter(Boolean)
    }

    const emptyMessages = {
      saved:     'ยังไม่มีคำที่บันทึกไว้ — กด 🔖 ในบทเรียนเพื่อบันทึกคำศัพท์',
      difficult: 'ยังไม่มีคำยาก — ทำ quiz เพื่อติดตามคำที่ตอบผิดบ่อย',
      learned:   'ยังไม่มีคำที่เรียนแล้ว — ทำ quiz เพื่อติดตามความก้าวหน้า',
    }

    if (words.length === 0) {
      content.innerHTML = emptyState(emptyMessages[tabId])
    } else {
      const showStats = tabId === 'difficult' || tabId === 'learned'
      content.innerHTML = `<div class="vocab-list">${words.map(w => miniWordCard(w, showStats ? vocabProg[w.word] : null)).join('')}</div>`
      attachTtsListeners(content)
      content.querySelectorAll('.vocab-card--clickable').forEach(card => {
        card.addEventListener('click', e => {
          if (e.target.closest('.tts-btn')) return
          const w = findWordData(card.dataset.word)
          if (w) openWordModal(w)
        })
      })
    }
  }

  main.querySelectorAll('.vocab-tab').forEach(btn => {
    btn.addEventListener('click', () => showTab(btn.dataset.tab))
  })

  showTab('categories')
}


function itemCardHTML(skill, it) {
  const done = getSkillItemProgress(it.id).status === 'completed'
  const title = skill === 'vocabulary' ? it.title : it.title
  const meta = itemMeta(skill, it)

  return `
    <div class="item-card" data-id="${it.id}">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:var(--sp-2)">
        <span style="font-size:1.6rem">${it.emoji}</span>
        <div style="display:flex;align-items:center;gap:6px">
          <span class="level-badge level-${it.level}">${it.level}</span>
          ${done ? '<span style="color:var(--accent);font-size:1.1rem" title="ทำแล้ว">✓</span>' : ''}
        </div>
      </div>
      <div style="font-weight:700;margin-top:2px">${esc(title)}</div>
      <div style="font-size:var(--text-sm);color:var(--text-muted)">${esc(it.thai)}</div>
      <div style="font-size:var(--text-xs);color:var(--text-faint);margin-top:4px">${meta}</div>
    </div>
  `
}

function itemMeta(skill, it) {
  switch (skill) {
    case 'vocabulary': return `${it.words?.length ?? 0} คำ`
    case 'grammar':    return `${it.quiz?.length ?? 0} ข้อควิซ`
    case 'reading':    return `${it.type} · ⏱ ${it.minutes ?? '?'} min · ${it.questions?.length ?? 0} คำถาม`
    case 'listening':  return `${it.type} · ${it.segments?.length ?? 0} ประโยค · ${it.questions?.length ?? 0} คำถาม`
    default:           return ''
  }
}

// ── Detail: dispatch to the right skill renderer ──
export function renderSkillDetail({ skill, id }) {
  const main = document.getElementById('main-content')
  const s = getSkill(skill)

  if (!s || !s.active) { main.innerHTML = notFound('ไม่พบทักษะนี้'); return }

  const item = getSkillItem(skill, id)
  if (!item) { main.innerHTML = notFound('ไม่พบบทเรียนนี้'); return }

  switch (skill) {
    case 'vocabulary': return renderVocabularyLesson(item, main)
    case 'grammar':    return renderGrammarLesson(item, main)
    case 'reading':    return renderReadingLesson(item, main)
    case 'listening':  return renderListeningLesson(item, main)
    default:           main.innerHTML = notFound('ไม่พบทักษะนี้')
  }
}

function notFound(msg) {
  return `<div class="page"><div class="empty-state"><p>${esc(msg)}</p><a href="#/skills" class="btn btn-primary" style="margin-top:var(--sp-3)">← กลับไปหน้า Skills</a></div></div>`
}
