import { vocabularyCategories } from './vocabulary.js'
import { grammarTopics } from './grammar.js'
import { readingPieces } from './reading.js'
import { listeningPieces } from './listening.js'
import { writingPrompts } from './writing.js'

// The six skills, all active. Writing is a guided free-writing task checked
// client-side (word/sentence count + rule-based grammar checker) — no AI.
export const SKILLS = [
  { id: 'vocabulary', name: 'Vocabulary', thai: 'คำศัพท์', emoji: '📖', color: '#3FBF74',
    desc: 'เรียนคำศัพท์เป็นหมวดหมู่ พร้อมเสียง รูป ตัวอย่าง คำเหมือน–คำตรงข้าม', active: true },
  { id: 'grammar', name: 'Grammar', thai: 'ไวยากรณ์', emoji: '📐', color: '#4A9EE0',
    desc: 'เข้าใจหลักไวยากรณ์ พร้อมตัวอย่าง แบบฝึกหัด และควิซ', active: true },
  { id: 'reading', name: 'Reading', thai: 'การอ่าน', emoji: '📰', color: '#FF8C42',
    desc: 'อ่านเรื่องสั้น ข่าว บทความ พร้อมศัพท์ สรุป และคำถามจับใจความ', active: true },
  { id: 'listening', name: 'Listening', thai: 'การฟัง', emoji: '👂', color: '#9B59B6',
    desc: 'ฝึกฟังพร้อมปรับความเร็ว เล่นซ้ำ ดู transcript และตอบคำถาม', active: true },
  { id: 'speaking', name: 'Speaking', thai: 'การพูด', emoji: '🗣️', color: '#F5C842',
    desc: 'ฝึกออกเสียงคำศัพท์ด้วย Speech Recognition — พูดแล้วระบบให้คะแนนทันที', active: true },
  { id: 'writing', name: 'Writing', thai: 'การเขียน', emoji: '✍️', color: '#E74C3C',
    desc: 'ฝึกเขียนประโยค–เรียงความ พร้อมตรวจไวยากรณ์และนับคำอัตโนมัติ', active: true },
]

const ITEMS = {
  vocabulary: vocabularyCategories,
  grammar: grammarTopics,
  reading: readingPieces,
  listening: listeningPieces,
  writing: writingPrompts,
}

export function getSkill(id) {
  return SKILLS.find(s => s.id === id) || null
}

export function getSkillItems(skillId) {
  return ITEMS[skillId] || []
}

export function getSkillItem(skillId, itemId) {
  return (ITEMS[skillId] || []).find(it => it.id === itemId) || null
}
