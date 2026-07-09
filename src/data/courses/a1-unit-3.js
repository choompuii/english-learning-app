// A1 Unit 3: Family
export const a1Unit3 = {
  id: 'a1-unit-3',
  title: 'Unit 3: Family',
  thai: 'บทที่ 3: ครอบครัว',
  emoji: '👨‍👩‍👧‍👦',

  vocabulary: {
    id: 'a1-unit-3-vocab',
    title: 'Family',
    thai: 'คำศัพท์เกี่ยวกับครอบครัว',
    emoji: '👨‍👩‍👧‍👦',
    level: 'A1',
    words: [
      { word: 'mother',    pos: 'noun', ipa: '/ˈmʌð.ər/',  emoji: '👩', thai: 'แม่',         def: 'a female parent',                                        example: 'My mother is a nurse.',           synonym: 'mum',    antonym: 'father' },
      { word: 'father',    pos: 'noun', ipa: '/ˈfɑː.ðər/', emoji: '👨', thai: 'พ่อ',         def: 'a male parent',                                          example: 'My father works in a bank.',      synonym: 'dad',    antonym: 'mother' },
      { word: 'sister',    pos: 'noun', ipa: '/ˈsɪs.tər/', emoji: '👧', thai: 'พี่สาว / น้องสาว', def: 'a girl or woman who has the same parents as you',   example: 'I have one older sister.',        synonym: null,     antonym: 'brother' },
      { word: 'brother',   pos: 'noun', ipa: '/ˈbrʌð.ər/', emoji: '👦', thai: 'พี่ชาย / น้องชาย', def: 'a boy or man who has the same parents as you',      example: 'My brother is twelve years old.', synonym: null,     antonym: 'sister' },
      { word: 'parents',   pos: 'noun', ipa: '/ˈpeər.ənts/', emoji: '👫', thai: 'พ่อแม่ / ผู้ปกครอง', def: 'the mother and father of a person',            example: 'My parents live in Chiang Mai.',  synonym: null,     antonym: null },
      { word: 'family',    pos: 'noun', ipa: '/ˈfæm.ɪ.li/', emoji: '👪', thai: 'ครอบครัว',   def: 'a group of people who are related to each other',        example: 'I love my family very much.',     synonym: null,     antonym: null },
      { word: 'husband',   pos: 'noun', ipa: '/ˈhʌz.bənd/', emoji: '💍', thai: 'สามี',       def: 'the man that a woman is married to',                     example: 'Her husband is a doctor.',        synonym: null,     antonym: 'wife' },
      { word: 'wife',      pos: 'noun', ipa: '/waɪf/',      emoji: '💍', thai: 'ภรรยา',      def: 'the woman that a man is married to',                     example: 'His wife works at a school.',     synonym: null,     antonym: 'husband' },
      { word: 'child',     pos: 'noun', ipa: '/tʃaɪld/',    emoji: '👶', thai: 'เด็ก / ลูก',  def: 'a boy or girl who is not yet an adult',                  example: 'They have two children.',         synonym: 'kid',    antonym: 'adult' },
      { word: 'grandma',   pos: 'noun', ipa: '/ˈɡræn.mɑː/', emoji: '👵', thai: 'คุณยาย / คุณย่า', def: 'the mother of your mother or father (informal)',     example: 'My grandma makes great food.',    synonym: 'grandmother', antonym: 'grandson' },
    ]
  },

  grammar: {
    id: 'a1-unit-3-grammar',
    title: 'Possessive Adjectives',
    thai: 'คำแสดงความเป็นเจ้าของ',
    emoji: '📐',
    level: 'A1',
    summary: 'เรียนรู้การใช้ my / your / his / her / our / their เพื่อบอกความเป็นเจ้าของเกี่ยวกับครอบครัว',
    explanation: [
      {
        heading: 'Possessive Adjectives',
        body: 'ใช้บอกว่า "ของ ..." ก่อนคำนาม\nI → my (ของฉัน) · You → your (ของคุณ)\nHe → his (ของเขา) · She → her (ของเธอ)\nWe → our (ของเรา) · They → their (ของพวกเขา)'
      },
      {
        heading: 'Common mistakes',
        body: '⚠️ ห้ามสับสน his / her\nHis = ของเขา (ผู้ชาย) · Her = ของเธอ (ผู้หญิง)\n\n❌ She loves his cat. (ถ้าแมวเป็นของเธอ)\n✅ She loves her cat.'
      }
    ],
    examples: [
      { en: 'My mother is kind.',      th: 'แม่ของฉันใจดี' },
      { en: 'His father is a doctor.', th: 'พ่อของเขาเป็นหมอ' },
      { en: 'Her sister is a teacher.',th: 'น้องสาวของเธอเป็นครู' },
      { en: 'Our family is big.',      th: 'ครอบครัวของเราใหญ่มาก' },
      { en: 'Their parents live here.',th: 'พ่อแม่ของพวกเขาอาศัยอยู่ที่นี่' },
    ],
    practice: [
      { id: 'a1u3-gr-p1', type: 'fill-in-blank',   prompt: 'I love ___ family.',                                answer: 'my',  acceptedVariants: [],       explanation: 'I → my' },
      { id: 'a1u3-gr-p2', type: 'multiple-choice',  prompt: '"เขา (ผู้ชาย) รักครอบครัวของเขา" คือประโยคใด?',   options: ['He loves her family.','He loves his family.','He loves my family.','He loves our family.'], correctIndex: 1, explanation: 'He → his (ของเขา)' },
      { id: 'a1u3-gr-p3', type: 'fill-in-blank',   prompt: 'She lives with ___ parents.',                       answer: 'her', acceptedVariants: [],       explanation: 'She → her' },
    ],
    quiz: [
      { id: 'a1u3-gr-q1', type: 'multiple-choice',  prompt: '"ของฉัน" ในภาษาอังกฤษคือคำใด?',                    options: ['your','his','my','her'],            correctIndex: 2, explanation: 'I → my' },
      { id: 'a1u3-gr-q2', type: 'fill-in-blank',   prompt: 'We love ___ parents.',                               answer: 'our', acceptedVariants: [],       explanation: 'We → our' },
      { id: 'a1u3-gr-q3', type: 'multiple-choice',  prompt: '"เธอ (ผู้หญิง) รักพี่ชายของเธอ" คือประโยคใด?',    options: ['She loves her brother.','She loves his brother.','She loves my brother.','She loves their brother.'], correctIndex: 0, explanation: 'She → her (ของเธอ)' },
      { id: 'a1u3-gr-q4', type: 'fill-in-blank',   prompt: 'They live with ___ grandma.',                        answer: 'their', acceptedVariants: [],     explanation: 'They → their' },
    ]
  },

  listening: {
    id: 'a1-unit-3-listening',
    type: 'Conversation',
    title: 'Talking About Family',
    thai: 'พูดคุยเรื่องครอบครัว',
    emoji: '🎧',
    level: 'A1',
    segments: [
      { speaker: 'Prae',   text: 'Hey Tom! Is that a photo of your family?',                   thai: 'เฮ้ทอม นั่นรูปครอบครัวของคุณใช่ไหม?' },
      { speaker: 'Tom',    text: 'Yes! This is my family photo.',                               thai: 'ใช่ครับ นี่คือรูปครอบครัวของผมครับ' },
      { speaker: 'Prae',   text: 'How many people are in your family?',                        thai: 'ในครอบครัวของคุณมีกี่คนคะ?' },
      { speaker: 'Tom',    text: 'There are five of us. My parents, my two sisters and me.',   thai: 'มีห้าคนครับ พ่อแม่ น้องสาวสองคน และผมครับ' },
      { speaker: 'Prae',   text: 'How old are your sisters?',                                  thai: 'น้องสาวของคุณอายุเท่าไหร่คะ?' },
      { speaker: 'Tom',    text: 'My older sister is twenty and my younger sister is ten.',    thai: 'น้องสาวคนโตอายุยี่สิบปีครับ และน้องสาวคนเล็กอายุสิบปีครับ' },
      { speaker: 'Prae',   text: 'What does your father do?',                                  thai: 'พ่อของคุณทำงานอะไรคะ?' },
      { speaker: 'Tom',    text: 'He is a doctor. My mother is a teacher.',                    thai: 'เขาเป็นหมอครับ แม่ของผมเป็นครูครับ' },
    ],
    questions: [
      { id: 'a1u3-ls-q1', type: 'multiple-choice', prompt: 'How many people are in Tom\'s family?',   options: ['Three','Four','Five','Six'],             correctIndex: 2, explanation: 'ทอมพูดว่า "There are five of us"' },
      { id: 'a1u3-ls-q2', type: 'multiple-choice', prompt: 'How many sisters does Tom have?',         options: ['One','Two','Three','None'],              correctIndex: 1, explanation: 'ทอมพูดว่า "my two sisters"' },
      { id: 'a1u3-ls-q3', type: 'multiple-choice', prompt: 'How old is Tom\'s younger sister?',       options: ['8','10','12','20'],                      correctIndex: 1, explanation: 'ทอมพูดว่า "my younger sister is ten"' },
      { id: 'a1u3-ls-q4', type: 'multiple-choice', prompt: 'What is Tom\'s mother\'s job?',           options: ['Doctor','Nurse','Teacher','Engineer'],   correctIndex: 2, explanation: 'ทอมพูดว่า "My mother is a teacher"' },
    ]
  },

  reading: {
    id: 'a1-unit-3-reading',
    type: 'Story',
    title: 'My Family',
    thai: 'ครอบครัวของฉัน',
    emoji: '📖',
    level: 'A1',
    minutes: 3,
    paragraphs: [
      'My name is Suda. I am sixteen years old and I live in Chiang Mai with my family. My family has five members: my father, my mother, my older brother, my younger sister, and me.',
      'My father is forty-five years old. His name is Krit. He is an engineer. He works very hard. My mother is forty-two years old. Her name is Dara. She is a dentist. She works at a clinic near our house.',
      'My older brother is nineteen years old. His name is Ton. He is a university student in Bangkok. He comes home every month. My younger sister is eight years old. Her name is Nee. She is in primary school.',
      'I love my family very much. We eat dinner together every evening. On weekends, we often go to the market or the park. My family is my favourite thing in the world.',
    ],
    dialogue: null,
    glossary: [
      { word: 'member',   thai: 'สมาชิก',   def: 'a person who belongs to a group' },
      { word: 'engineer', thai: 'วิศวกร',   def: 'a person who designs and builds machines or structures' },
      { word: 'dentist',  thai: 'หมอฟัน',   def: 'a doctor who looks after people\'s teeth' },
      { word: 'clinic',   thai: 'คลินิก',   def: 'a small hospital or doctor\'s office' },
    ],
    summary: "Suda is 16 and lives in Chiang Mai with her parents, older brother Ton, and younger sister Nee. Her father is an engineer and her mother is a dentist. They spend time together every evening.",
    summaryThai: 'สุดาอายุ 16 ปี อาศัยอยู่ที่เชียงใหม่กับพ่อแม่ พี่ชายชื่อต้น และน้องสาวชื่อนี่ พ่อเป็นวิศวกร แม่เป็นหมอฟัน ครอบครัวทานข้าวเย็นด้วยกันทุกคืน',
    questions: [
      { id: 'a1u3-rd-q1', type: 'multiple-choice', prompt: 'How many people are in Suda\'s family?',    options: ['3','4','5','6'],                            correctIndex: 2, explanation: 'สุดาบอกว่า "My family has five members"' },
      { id: 'a1u3-rd-q2', type: 'multiple-choice', prompt: 'What is Suda\'s father\'s job?',             options: ['Doctor','Teacher','Engineer','Driver'],      correctIndex: 2, explanation: 'พ่อของสุดาเป็น "an engineer"' },
      { id: 'a1u3-rd-q3', type: 'multiple-choice', prompt: 'Where does her brother Ton study?',          options: ['Chiang Mai','Hat Yai','Phuket','Bangkok'],   correctIndex: 3, explanation: 'ต้นเป็น "a university student in Bangkok"' },
      { id: 'a1u3-rd-q4', type: 'multiple-choice', prompt: 'When does the family eat dinner together?',  options: ['Every morning','Every lunchtime','Every evening','On weekends only'], correctIndex: 2, explanation: 'สุดาบอกว่า "We eat dinner together every evening"' },
    ]
  },

  test: {
    id: 'a1-unit-3-test',
    passMark: 0.70,
    questions: [
      { id: 'a1u3-t-01', type: 'multiple-choice', prompt: '"พี่ชาย / น้องชาย" ในภาษาอังกฤษคือคำใด?',         options: ['sister','mother','brother','father'],                                   correctIndex: 2, explanation: '"brother" = พี่ชาย / น้องชาย' },
      { id: 'a1u3-t-02', type: 'multiple-choice', prompt: '"ภรรยา" ในภาษาอังกฤษคือคำใด?',                   options: ['husband','wife','child','sister'],                                      correctIndex: 1, explanation: '"wife" = ภรรยา' },
      { id: 'a1u3-t-03', type: 'fill-in-blank',   prompt: '"ของฉัน" ในภาษาอังกฤษ: I love ___ family.',       answer: 'my', acceptedVariants: [],                                                   explanation: 'I → my' },
      { id: 'a1u3-t-04', type: 'multiple-choice', prompt: '"ของเขา (ชาย)" ในภาษาอังกฤษคือคำใด?',             options: ['her','my','our','his'],                                                 correctIndex: 3, explanation: 'He → his' },
      { id: 'a1u3-t-05', type: 'fill-in-blank',   prompt: 'She loves ___ mother.',                            answer: 'her', acceptedVariants: [],                                                  explanation: 'She → her' },
      { id: 'a1u3-t-06', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                      options: ['He loves her family.','He loves his family.','He loves my family.','He loves our family.'], correctIndex: 1, explanation: 'ถ้าครอบครัวเป็น "ของเขา (ผู้ชาย)" ใช้ his' },
      { id: 'a1u3-t-07', type: 'fill-in-blank',   prompt: 'We love ___ parents.',                              answer: 'our', acceptedVariants: [],                                                 explanation: 'We → our' },
      { id: 'a1u3-t-08', type: 'multiple-choice', prompt: 'In the listening, how many sisters does Tom have?', options: ['One','Two','Three','None'],                                             correctIndex: 1, explanation: 'ทอมพูดว่า "my two sisters"' },
      { id: 'a1u3-t-09', type: 'multiple-choice', prompt: "In the listening, what is Tom's father's job?",    options: ['Teacher','Engineer','Doctor','Dentist'],                                correctIndex: 2, explanation: 'ทอมพูดว่า "He is a doctor"' },
      { id: 'a1u3-t-10', type: 'multiple-choice', prompt: "In the reading, what is Suda's father's job?",     options: ['Doctor','Teacher','Engineer','Driver'],                                 correctIndex: 2, explanation: 'พ่อของสุดาเป็น "an engineer"' },
      { id: 'a1u3-t-11', type: 'multiple-choice', prompt: 'In the reading, where does Ton study?',             options: ['Chiang Mai','Hat Yai','Phuket','Bangkok'],                              correctIndex: 3, explanation: 'ต้นเป็น "a university student in Bangkok"' },
      { id: 'a1u3-t-12', type: 'fill-in-blank',   prompt: "Suda's family eats dinner together every ___.",    answer: 'evening', acceptedVariants: ['evenings'],                                 explanation: 'สุดาบอกว่า "every evening"' },
    ]
  }
}
