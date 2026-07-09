import { a1Unit1 } from './a1-unit-1.js'
import { a1Unit2 } from './a1-unit-2.js'
import { a1Unit3 } from './a1-unit-3.js'
import { a2p1 } from './a2-p1.js'
import { a2p2 } from './a2-p2.js'
import { a2p3 } from './a2-p3.js'
import { b1p1 } from './b1-p1.js'
import { b1p2 } from './b1-p2.js'
import { b1p3 } from './b1-p3.js'
import { b2p1 } from './b2-p1.js'
import { b2p2 } from './b2-p2.js'
import { c1p1 } from './c1-p1.js'
import { c1p2 } from './c1-p2.js'
import { c2p1 } from './c2-p1.js'
import { c2p2 } from './c2-p2.js'

export const COURSE = {
  levels: [
    {
      id: 'a1',
      label: 'A1',
      title: 'Beginner',
      thai: 'ระดับเริ่มต้น',
      emoji: '🌱',
      color: '#4CAF50',
      description: 'เรียนรู้ภาษาอังกฤษพื้นฐาน แนะนำตัว ทักทาย และพูดคุยเรื่องใกล้ตัว',
      units: [a1Unit1, a1Unit2, a1Unit3]
    },
    {
      id: 'a2',
      label: 'A2',
      title: 'Elementary',
      thai: 'ระดับต้น',
      emoji: '🌿',
      color: '#8BC34A',
      description: 'พูดคุยเรื่องชีวิตประจำวัน อาหาร การเดินทาง ช้อปปิ้ง ได้คล่องขึ้น',
      units: [...a2p1, ...a2p2, ...a2p3]
    },
    {
      id: 'b1',
      label: 'B1',
      title: 'Intermediate',
      thai: 'ระดับกลาง',
      emoji: '🌳',
      color: '#009688',
      description: 'สนทนาทั่วไปได้ พูดเรื่องงาน การเดินทาง ความคิดเห็น และเรื่องราวในชีวิต',
      units: [...b1p1, ...b1p2, ...b1p3]
    },
    {
      id: 'b2',
      label: 'B2',
      title: 'Upper Intermediate',
      thai: 'ระดับกลาง-สูง',
      emoji: '🌲',
      color: '#0097A7',
      description: 'ใช้ภาษาได้คล่องในบริบทงาน การประชุม การเขียนอีเมลและรายงาน',
      units: [...b2p1, ...b2p2]
    },
    {
      id: 'c1',
      label: 'C1',
      title: 'Advanced',
      thai: 'ระดับสูง',
      emoji: '🏔️',
      color: '#3F51B5',
      description: 'ใช้ภาษาได้เกือบเหมือนเจ้าของภาษา โต้วาที นำเสนอ เขียนเชิงวิชาการ',
      units: [...c1p1, ...c1p2]
    },
    {
      id: 'c2',
      label: 'C2',
      title: 'Proficiency',
      thai: 'ระดับสูงสุด',
      emoji: '🏆',
      color: '#9C27B0',
      description: 'เชี่ยวชาญภาษาอังกฤษในระดับผู้ประกอบวิชาชีพและวิชาการขั้นสูง',
      units: [...c2p1, ...c2p2]
    },
  ]
}

export function getLevel(levelId) {
  return COURSE.levels.find(l => l.id === levelId) || null
}

export function getUnit(levelId, unitId) {
  const level = getLevel(levelId)
  return level?.units.find(u => u.id === unitId) || null
}

export function getAllLevels() {
  return COURSE.levels
}
