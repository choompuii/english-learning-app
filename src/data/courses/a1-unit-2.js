// A1 Unit 2: Personal Information
export const a1Unit2 = {
  id: 'a1-unit-2',
  title: 'Unit 2: Personal Information',
  thai: 'บทที่ 2: ข้อมูลส่วนตัว',
  emoji: '🪪',

  vocabulary: {
    id: 'a1-unit-2-vocab',
    title: 'Personal Information',
    thai: 'ข้อมูลส่วนตัว',
    emoji: '🪪',
    level: 'A1',
    words: [
      { word: 'age',         pos: 'noun',      ipa: '/eɪdʒ/',        emoji: '🎂', thai: 'อายุ',             def: 'the number of years someone has lived',                    example: 'My age is twenty.',               synonym: null,        antonym: null },
      { word: 'job',         pos: 'noun',      ipa: '/dʒɒb/',        emoji: '💼', thai: 'งาน / อาชีพ',     def: 'the work that someone does to earn money',                 example: 'Her job is a nurse.',             synonym: 'work',      antonym: null },
      { word: 'student',     pos: 'noun',      ipa: '/ˈstjuː.dənt/', emoji: '📚', thai: 'นักเรียน',        def: 'a person who is studying at a school or university',       example: 'I am a student.',                 synonym: 'learner',   antonym: 'teacher' },
      { word: 'teacher',     pos: 'noun',      ipa: '/ˈtiː.tʃər/',   emoji: '🍎', thai: 'ครู / อาจารย์',   def: 'a person who teaches in a school',                         example: 'Mr Park is my English teacher.',  synonym: 'instructor',antonym: 'student' },
      { word: 'doctor',      pos: 'noun',      ipa: '/ˈdɒk.tər/',    emoji: '👨‍⚕️', thai: 'แพทย์',          def: 'a person trained to treat sick people',                    example: 'She is a doctor at City Hospital.', synonym: 'physician', antonym: null },
      { word: 'nationality', pos: 'noun',      ipa: '/ˌnæʃ.əˈnæl.ɪ.ti/', emoji: '🌍', thai: 'สัญชาติ',  def: 'the fact of being a citizen of a particular country',      example: 'My nationality is Thai.',         synonym: null,        antonym: null },
      { word: 'language',    pos: 'noun',      ipa: '/ˈlæŋ.ɡwɪdʒ/', emoji: '🗣️', thai: 'ภาษา',           def: 'a system of communication used by people',                 example: 'I speak two languages.',          synonym: null,        antonym: null },
      { word: 'address',     pos: 'noun',      ipa: '/ˈæd.res/',     emoji: '🏠', thai: 'ที่อยู่',          def: 'the number and name of a building where someone lives',    example: 'What is your home address?',      synonym: null,        antonym: null },
      { word: 'email',       pos: 'noun',      ipa: '/ˈiː.meɪl/',    emoji: '📧', thai: 'อีเมล',           def: 'a message sent electronically via the internet',           example: 'Please send me an email.',        synonym: null,        antonym: null },
      { word: 'phone',       pos: 'noun',      ipa: '/fəʊn/',        emoji: '📱', thai: 'โทรศัพท์',        def: 'a device used to speak to someone at a distance',          example: 'What is your phone number?',      synonym: null,        antonym: null },
    ]
  },

  grammar: {
    id: 'a1-unit-2-grammar',
    title: 'Wh- Questions',
    thai: 'คำถาม Wh-',
    emoji: '📐',
    level: 'A1',
    summary: 'เรียนรู้การใช้ What / Where / Who / How old เพื่อถามข้อมูลส่วนตัว',
    explanation: [
      {
        heading: 'What are Wh- Questions?',
        body: 'คำถาม Wh- ใช้ถามข้อมูลเฉพาะ ต่างจาก Yes/No questions\nโครงสร้าง: Wh- word + am/is/are + subject?\n\nWhat = อะไร · Where = ที่ไหน · Who = ใคร · How old = อายุเท่าไหร่'
      },
      {
        heading: 'Common Wh- Questions for personal info',
        body: 'What is your name? = คุณชื่ออะไร?\nHow old are you? = คุณอายุเท่าไหร่?\nWhere are you from? = คุณมาจากที่ไหน?\nWhat is your job? = คุณทำงานอะไร?\nWhat is your nationality? = คุณมีสัญชาติอะไร?'
      }
    ],
    examples: [
      { en: 'What is your name?',        th: 'คุณชื่ออะไร?' },
      { en: 'How old are you?',          th: 'คุณอายุเท่าไหร่?' },
      { en: 'Where are you from?',       th: 'คุณมาจากที่ไหน?' },
      { en: 'What is your job?',         th: 'คุณทำงานอะไร?' },
      { en: 'What language do you speak?', th: 'คุณพูดภาษาอะไร?' },
    ],
    practice: [
      { id: 'a1u2-gr-p1', type: 'multiple-choice', prompt: 'ถามอายุใช้คำถามใด?',                           options: ['What are you?','How old are you?','Where are you?','Who are you?'],   correctIndex: 1, explanation: '"How old are you?" ใช้ถามอายุ' },
      { id: 'a1u2-gr-p2', type: 'fill-in-blank',   prompt: '___ is your name?',                             answer: 'What', acceptedVariants: ['what'],                                          explanation: '"What is your name?" ถามชื่อ' },
      { id: 'a1u2-gr-p3', type: 'multiple-choice', prompt: 'ถามว่ามาจากไหน ใช้คำถามใด?',                   options: ['What are you from?','How are you from?','Where are you from?','Who are you from?'], correctIndex: 2, explanation: '"Where are you from?" ถามว่ามาจากที่ไหน' },
    ],
    quiz: [
      { id: 'a1u2-gr-q1', type: 'multiple-choice', prompt: '"___ is your address?" เติมคำใด?',              options: ['Who','What','Where','How'],                                           correctIndex: 1, explanation: '"What is your address?" ถามที่อยู่' },
      { id: 'a1u2-gr-q2', type: 'fill-in-blank',   prompt: '___ old are you?',                              answer: 'How', acceptedVariants: ['how'],                                           explanation: '"How old are you?" ถามอายุ' },
      { id: 'a1u2-gr-q3', type: 'multiple-choice', prompt: '"___ are you from?" ถามว่าอะไร?',               options: ['ชื่อ','สัญชาติ / ประเทศ','อาชีพ','อายุ'],                             correctIndex: 1, explanation: '"Where are you from?" ถามว่ามาจากที่ไหน / ประเทศอะไร' },
      { id: 'a1u2-gr-q4', type: 'multiple-choice', prompt: 'Choose the correct Wh- question.',               options: ['What is you name?','What your name is?','What is your name?','What your name?'], correctIndex: 2, explanation: 'โครงสร้างถูกต้อง: What + is + your + noun?' },
    ]
  },

  listening: {
    id: 'a1-unit-2-listening',
    type: 'Conversation',
    title: 'Filling in a Form',
    thai: 'กรอกแบบฟอร์ม',
    emoji: '🎧',
    level: 'A1',
    segments: [
      { speaker: 'Staff',  text: 'Hello! Can I have your name, please?',                          thai: 'สวัสดีค่ะ ขอชื่อของคุณได้ไหมคะ?' },
      { speaker: 'Somchai',text: 'Yes, my name is Somchai Jaidee.',                               thai: 'ได้ครับ ผมชื่อ สมชาย ใจดีครับ' },
      { speaker: 'Staff',  text: 'How do you spell your first name?',                             thai: 'ชื่อต้นสะกดอย่างไรคะ?' },
      { speaker: 'Somchai',text: 'S-O-M-C-H-A-I.',                                               thai: 'S-O-M-C-H-A-I ครับ' },
      { speaker: 'Staff',  text: 'Thank you. And how old are you?',                               thai: 'ขอบคุณค่ะ แล้วคุณอายุเท่าไหร่คะ?' },
      { speaker: 'Somchai',text: 'I am twenty-eight years old.',                                  thai: 'ผมอายุยี่สิบแปดปีครับ' },
      { speaker: 'Staff',  text: 'What is your job?',                                             thai: 'คุณทำงานอะไรคะ?' },
      { speaker: 'Somchai',text: 'I am a teacher. I teach at a primary school.',                  thai: 'ผมเป็นครูครับ สอนอยู่ที่โรงเรียนประถมครับ' },
      { speaker: 'Staff',  text: 'And your nationality?',                                         thai: 'แล้วสัญชาติของคุณคะ?' },
      { speaker: 'Somchai',text: 'I am Thai.',                                                    thai: 'ผมสัญชาติไทยครับ' },
    ],
    questions: [
      { id: 'a1u2-ls-q1', type: 'multiple-choice', prompt: "What is the man's full name?",        options: ['Somchai Deejai','Jaidee Somchai','Somchai Jaidee','Jaidee Thai'],  correctIndex: 2, explanation: 'เขาพูดว่า "my name is Somchai Jaidee"' },
      { id: 'a1u2-ls-q2', type: 'multiple-choice', prompt: 'How old is Somchai?',                 options: ['18','22','28','38'],                                                correctIndex: 2, explanation: 'เขาพูดว่า "I am twenty-eight years old"' },
      { id: 'a1u2-ls-q3', type: 'multiple-choice', prompt: 'What is his job?',                   options: ['Doctor','Student','Driver','Teacher'],                              correctIndex: 3, explanation: 'เขาพูดว่า "I am a teacher"' },
      { id: 'a1u2-ls-q4', type: 'multiple-choice', prompt: 'What is his nationality?',            options: ['British','Thai','American','Australian'],                           correctIndex: 1, explanation: 'เขาพูดว่า "I am Thai"' },
    ]
  },

  reading: {
    id: 'a1-unit-2-reading',
    type: 'Story',
    title: 'My Profile',
    thai: 'โปรไฟล์ของฉัน',
    emoji: '📖',
    level: 'A1',
    minutes: 3,
    paragraphs: [
      'My name is Pim. My full name is Pimchanok Sriurai. I am nineteen years old. My birthday is on the 3rd of March.',
      'I am Thai. I am from Hat Yai, a big city in the south of Thailand. I now live in Bangkok because I am a university student. I study at Kasetsart University.',
      'I speak Thai and English. My English is intermediate level. I study English for four hours every week. I also watch English movies to practise.',
      'My phone number is 081-234-5678. My email address is pim.sriurai@email.com. If you want to know more about me, please send me an email. I am happy to write back!',
    ],
    dialogue: null,
    glossary: [
      { word: 'full name',    thai: 'ชื่อ-นามสกุล',      def: 'your first name and last name together' },
      { word: 'birthday',     thai: 'วันเกิด',            def: 'the day each year that is the same as the day you were born' },
      { word: 'intermediate', thai: 'ระดับกลาง',          def: 'between basic and advanced in level' },
      { word: 'university',   thai: 'มหาวิทยาลัย',        def: 'a place where students study for a degree after school' },
    ],
    summary: "Pim is a 19-year-old Thai university student from Hat Yai. She lives in Bangkok, speaks Thai and English, and enjoys watching English movies.",
    summaryThai: 'พิมเป็นนักศึกษาวัย 19 ปีจากหาดใหญ่ อาศัยอยู่ในกรุงเทพ พูดได้สองภาษา และชอบดูหนังภาษาอังกฤษ',
    questions: [
      { id: 'a1u2-rd-q1', type: 'multiple-choice', prompt: 'How old is Pim?',                        options: ['17','18','19','20'],                                              correctIndex: 2, explanation: 'พิมบอกว่า "I am nineteen years old"' },
      { id: 'a1u2-rd-q2', type: 'multiple-choice', prompt: 'Where is Pim originally from?',           options: ['Bangkok','Chiang Mai','Hat Yai','Phuket'],                        correctIndex: 2, explanation: 'พิมบอกว่า "I am from Hat Yai"' },
      { id: 'a1u2-rd-q3', type: 'multiple-choice', prompt: 'Why does Pim live in Bangkok?',           options: ['She works there','She is a student there','Her family is there','She likes it'], correctIndex: 1, explanation: 'พิมบอกว่า "I am a university student"' },
      { id: 'a1u2-rd-q4', type: 'multiple-choice', prompt: 'How does Pim practise English?',          options: ['Read books','Play games','Watch English movies','Listen to songs'], correctIndex: 2, explanation: 'พิมบอกว่า "I watch English movies to practise"' },
    ]
  },

  test: {
    id: 'a1-unit-2-test',
    passMark: 0.70,
    questions: [
      { id: 'a1u2-t-01', type: 'multiple-choice', prompt: '"อาชีพ" ในภาษาอังกฤษคือคำใด?',                    options: ['age','address','job','language'],                                       correctIndex: 2, explanation: '"job" = อาชีพ' },
      { id: 'a1u2-t-02', type: 'multiple-choice', prompt: '"สัญชาติ" ในภาษาอังกฤษคือคำใด?',                   options: ['nationality','phone','email','address'],                                correctIndex: 0, explanation: '"nationality" = สัญชาติ' },
      { id: 'a1u2-t-03', type: 'fill-in-blank',   prompt: '"เธอเป็นครู": She ___ a teacher.',                 answer: 'is', acceptedVariants: [],                                                   explanation: 'She ใช้ is' },
      { id: 'a1u2-t-04', type: 'multiple-choice', prompt: 'ถามอายุใช้คำถามใด?',                               options: ['What age you?','How old are you?','Where old are you?','Who old are you?'], correctIndex: 1, explanation: '"How old are you?" ถามอายุ' },
      { id: 'a1u2-t-05', type: 'fill-in-blank',   prompt: '___ is your name?',                                answer: 'What', acceptedVariants: ['what'],                                          explanation: '"What is your name?" ถามชื่อ' },
      { id: 'a1u2-t-06', type: 'multiple-choice', prompt: '"___ are you from?" ถามว่าอะไร?',                   options: ['ชื่อ','ที่อยู่','ประเทศ / แหล่งกำเนิด','อายุ'],                        correctIndex: 2, explanation: '"Where are you from?" ถามว่ามาจากที่ไหน' },
      { id: 'a1u2-t-07', type: 'multiple-choice', prompt: 'Choose the correct question.',                      options: ['What is you job?','What your job is?','What is your job?','What your job?'], correctIndex: 2, explanation: 'โครงสร้าง: What + is + your + noun?' },
      { id: 'a1u2-t-08', type: 'multiple-choice', prompt: 'In the listening, how old is Somchai?',             options: ['18','22','28','38'],                                                    correctIndex: 2, explanation: 'สมชายพูดว่า "I am twenty-eight years old"' },
      { id: 'a1u2-t-09', type: 'multiple-choice', prompt: 'In the listening, what is Somchai\'s job?',         options: ['Doctor','Nurse','Student','Teacher'],                                   correctIndex: 3, explanation: 'สมชายพูดว่า "I am a teacher"' },
      { id: 'a1u2-t-10', type: 'multiple-choice', prompt: 'In the reading, where is Pim from?',                options: ['Bangkok','Chiang Mai','Hat Yai','Phuket'],                              correctIndex: 2, explanation: 'พิมบอกว่า "I am from Hat Yai"' },
      { id: 'a1u2-t-11', type: 'multiple-choice', prompt: 'In the reading, how does Pim practise English?',    options: ['Read books','Play games','Watch English movies','Listen to radio'],    correctIndex: 2, explanation: 'พิมบอกว่า "I watch English movies to practise"' },
      { id: 'a1u2-t-12', type: 'fill-in-blank',   prompt: 'Pim is a university ___ .',                         answer: 'student', acceptedVariants: [],                                           explanation: 'พิมบอกว่า "I am a university student"' },
    ]
  }
}
