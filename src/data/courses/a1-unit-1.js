// A1 Unit 1: Greetings & Introductions
export const a1Unit1 = {
  id: 'a1-unit-1',
  title: 'Unit 1: Greetings & Introductions',
  thai: 'บทที่ 1: การทักทายและแนะนำตัว',
  emoji: '👋',

  // vocabulary section — shape matches vocabularyCategories item (skills/vocabulary.js)
  vocabulary: {
    id: 'a1-unit-1-vocab',
    title: 'Greetings & Introductions',
    thai: 'คำทักทายและแนะนำตัว',
    emoji: '👋',
    level: 'A1',
    words: [
      { word: 'hello',      pos: 'exclamation', ipa: '/həˈloʊ/',     emoji: '👋', thai: 'สวัสดี',           def: 'a greeting used when meeting someone',                      example: 'Hello! My name is Nok.',          synonym: 'hi',       antonym: 'goodbye' },
      { word: 'goodbye',    pos: 'exclamation', ipa: '/ˌɡʊdˈbaɪ/',   emoji: '🚶', thai: 'ลาก่อน',          def: 'something you say when leaving',                            example: 'Goodbye! See you tomorrow.',      synonym: 'bye',      antonym: 'hello' },
      { word: 'name',       pos: 'noun',        ipa: '/neɪm/',        emoji: '🏷️', thai: 'ชื่อ',             def: 'the word or words that a person is called',                 example: 'My name is Malee.',               synonym: null,       antonym: null },
      { word: 'meet',       pos: 'verb',        ipa: '/miːt/',        emoji: '🤝', thai: 'พบ / เจอ',         def: 'to see and talk to someone for the first time',             example: 'Nice to meet you!',               synonym: null,       antonym: null },
      { word: 'nice',       pos: 'adjective',   ipa: '/naɪs/',        emoji: '😊', thai: 'ดี / ยินดี',      def: 'pleasant and enjoyable',                                    example: 'It is nice to see you again.',    synonym: 'pleasant', antonym: 'unpleasant' },
      { word: 'please',     pos: 'adverb',      ipa: '/pliːz/',       emoji: '🙏', thai: 'กรุณา / ได้โปรด',  def: 'used to make a request polite',                            example: 'Can you help me, please?',        synonym: null,       antonym: null },
      { word: 'thank you',  pos: 'phrase',      ipa: '/ˈθæŋk juː/',   emoji: '🙏', thai: 'ขอบคุณ',          def: 'words used to show you are grateful',                       example: 'Thank you for your help.',        synonym: 'thanks',   antonym: null },
      { word: 'sorry',      pos: 'exclamation', ipa: '/ˈsɒr.i/',      emoji: '😔', thai: 'ขอโทษ',           def: 'used to apologise or ask someone to repeat something',      example: 'Sorry, I do not understand.',     synonym: null,       antonym: null },
      { word: 'from',       pos: 'preposition', ipa: '/frɒm/',        emoji: '📍', thai: 'มาจาก',           def: 'used to say where someone was born or lives',               example: 'I am from Thailand.',             synonym: null,       antonym: null },
      { word: 'welcome',    pos: 'exclamation', ipa: '/ˈwel.kəm/',    emoji: '🎉', thai: 'ยินดีต้อนรับ',    def: 'said to greet someone arriving in a new place',             example: 'Welcome to our school!',          synonym: null,       antonym: null },
    ]
  },

  // grammar section — shape matches grammarTopics item (skills/grammar.js)
  grammar: {
    id: 'a1-unit-1-grammar',
    title: 'Subject Pronouns & Verb "to be"',
    thai: 'สรรพนามและ Verb To Be',
    emoji: '📐',
    level: 'A1',
    summary: 'เรียนรู้การใช้ I / you / he / she / we / they คู่กับ am / is / are เพื่อแนะนำตัวและบอกข้อมูลพื้นฐาน',
    explanation: [
      {
        heading: 'Subject Pronouns',
        body: 'ภาษาอังกฤษต้องมีประธานในประโยคเสมอ ต่างจากภาษาไทยที่มักละประธาน\n\nI = ฉัน · you = คุณ · he = เขา (ชาย) · she = เธอ (หญิง) · it = มัน\nwe = เรา · they = พวกเขา'
      },
      {
        heading: 'Verb To Be: am / is / are',
        body: 'I → am\nHe / She / It → is\nYou / We / They → are\n\n⚠️ จุดที่คนไทยมักผิด: ลืมใส่ to be\n❌ I student.   ✅ I am a student.\n❌ She teacher.  ✅ She is a teacher.'
      },
      {
        heading: 'Short forms (contractions)',
        body: "ในการพูดและเขียนทั่วไปมักย่อ:\nI am → I'm · He is → He's · She is → She's\nYou are → You're · We are → We're · They are → They're"
      }
    ],
    examples: [
      { en: 'I am a student.',       th: 'ฉันเป็นนักเรียน' },
      { en: 'She is my teacher.',    th: 'เธอเป็นครูของฉัน' },
      { en: 'We are from Thailand.', th: 'พวกเรามาจากประเทศไทย' },
      { en: 'He is not here.',       th: 'เขาไม่ได้อยู่ที่นี่' },
      { en: 'Are you a student?',    th: 'คุณเป็นนักเรียนหรือเปล่า?' },
      { en: "They're my friends.",   th: 'พวกเขาเป็นเพื่อนของฉัน' },
    ],
    practice: [
      { id: 'a1u1-gr-p1', type: 'fill-in-blank',   prompt: 'I ___ a student.',                                          answer: 'am',  acceptedVariants: [],              explanation: 'I ใช้ am เสมอ' },
      { id: 'a1u1-gr-p2', type: 'multiple-choice',  prompt: 'Choose the correct verb: She ___ my teacher.',              options: ['am','is','are','be'],                   correctIndex: 1, explanation: 'She/He/It ใช้ is' },
      { id: 'a1u1-gr-p3', type: 'fill-in-blank',   prompt: 'They ___ my classmates.',                                   answer: 'are', acceptedVariants: [],              explanation: 'They/We/You ใช้ are' },
      { id: 'a1u1-gr-p4', type: 'multiple-choice',  prompt: 'Which is the correct short form for "She is"?',             options: ["She'm","She're","She's","She'd"],        correctIndex: 2, explanation: "She is → She's" },
    ],
    quiz: [
      { id: 'a1u1-gr-q1', type: 'multiple-choice',  prompt: 'Choose the correct sentence.',                               options: ['I is happy.','I are happy.','I am happy.','I be happy.'], correctIndex: 2, explanation: 'I ใช้ am เสมอ' },
      { id: 'a1u1-gr-q2', type: 'fill-in-blank',   prompt: 'He ___ a doctor.',                                           answer: 'is',  acceptedVariants: [],              explanation: 'He/She/It ใช้ is' },
      { id: 'a1u1-gr-q3', type: 'multiple-choice',  prompt: '"We ___ ready." เติมคำใดถูกต้อง?',                          options: ['am','is','are','be'],                   correctIndex: 2, explanation: 'We ใช้ are' },
      { id: 'a1u1-gr-q4', type: 'fill-in-blank',   prompt: '___ you a new student?',                                     answer: 'Are', acceptedVariants: ['are'],         explanation: 'คำถาม Yes/No กับ you ใช้ Are' },
    ]
  },

  // listening section — shape matches listeningPieces item (skills/listening.js)
  listening: {
    id: 'a1-unit-1-listening',
    type: 'Conversation',
    title: 'Meeting a New Classmate',
    thai: 'พบเพื่อนร่วมชั้นใหม่',
    emoji: '🎧',
    level: 'A1',
    segments: [
      { speaker: 'Nok',     text: 'Hello! My name is Nok. What is your name?',       thai: 'สวัสดี ฉันชื่อหนก คุณชื่ออะไร?' },
      { speaker: 'David',   text: 'Hi Nok! I am David. Nice to meet you.',            thai: 'สวัสดีครับหนก ผมชื่อเดวิด ยินดีที่ได้รู้จักครับ' },
      { speaker: 'Nok',     text: 'Nice to meet you too. Where are you from?',        thai: 'ยินดีเช่นกันค่ะ คุณมาจากที่ไหน?' },
      { speaker: 'David',   text: 'I am from the UK. And you?',                       thai: 'ผมมาจากสหราชอาณาจักรครับ แล้วคุณล่ะ?' },
      { speaker: 'Nok',     text: 'I am from Thailand. Is this your first day?',      thai: 'ฉันมาจากประเทศไทยค่ะ นี่เป็นวันแรกของคุณหรือเปล่า?' },
      { speaker: 'David',   text: 'Yes, it is. I am a little nervous.',               thai: 'ใช่ครับ ผมตื่นเต้นนิดหน่อยครับ' },
      { speaker: 'Nok',     text: 'Do not worry! Everyone here is very friendly.',    thai: 'ไม่ต้องกังวลนะคะ ทุกคนที่นี่ใจดีมากเลยค่ะ' },
      { speaker: 'David',   text: 'Thank you, Nok. That is very kind of you.',        thai: 'ขอบคุณมากครับหนก ใจดีมากเลยครับ' },
    ],
    questions: [
      { id: 'a1u1-ls-q1', type: 'multiple-choice', prompt: "What is the girl's name?",           options: ['Nok','David','Anna','May'],              correctIndex: 0, explanation: 'เธอพูดว่า "My name is Nok"' },
      { id: 'a1u1-ls-q2', type: 'multiple-choice', prompt: 'Where is David from?',               options: ['Thailand','The USA','The UK','Australia'], correctIndex: 2, explanation: 'เดวิดพูดว่า "I am from the UK"' },
      { id: 'a1u1-ls-q3', type: 'multiple-choice', prompt: 'How does David feel?',               options: ['Angry','A little nervous','Very happy','Tired'], correctIndex: 1, explanation: 'เดวิดพูดว่า "I am a little nervous"' },
      { id: 'a1u1-ls-q4', type: 'multiple-choice', prompt: 'What does Nok say about the people?', options: ['They are quiet','Everyone is friendly','No one is nice','They are busy'], correctIndex: 1, explanation: 'หนกพูดว่า "Everyone here is very friendly"' },
    ]
  },

  // reading section — shape matches readingPieces item (skills/reading.js)
  reading: {
    id: 'a1-unit-1-reading',
    type: 'Story',
    title: 'A Letter to a New Friend',
    thai: 'จดหมายถึงเพื่อนใหม่',
    emoji: '📖',
    level: 'A1',
    minutes: 3,
    paragraphs: [
      'My name is Malee. I am fifteen years old. I am from Khon Kaen, a city in the north-east of Thailand. I live with my mother, my father, and my younger brother.',
      'I am a student at Khon Kaen School. I study English, Maths, and Science. My favourite subject is English because I want to talk to people from other countries one day.',
      'In my free time, I like to read books and listen to music. I also enjoy playing badminton with my friends after school. My best friend is called Wan. She is funny and very kind.',
      'I am happy to have a new pen pal. My English is not perfect, but I practise every day. Please write to me and tell me about yourself. I look forward to your letter!',
    ],
    dialogue: null,
    glossary: [
      { word: 'pen pal',   thai: 'เพื่อนทางจดหมาย',    def: 'a friend you write letters or emails to, often in another country' },
      { word: 'favourite', thai: 'โปรดปราน / ชอบที่สุด', def: 'the one you like more than any other' },
      { word: 'practise',  thai: 'ฝึกฝน',               def: 'to do something regularly to improve at it' },
      { word: 'free time', thai: 'เวลาว่าง',             def: 'time when you are not working or studying' },
    ],
    summary: "Malee is a 15-year-old student from Khon Kaen. She loves English, reading, and badminton. She is writing to a new pen pal and hopes for a reply.",
    summaryThai: 'มาลีเป็นนักเรียนอายุ 15 ปีจากขอนแก่น ชอบภาษาอังกฤษ อ่านหนังสือ และแบดมินตัน เธอกำลังเขียนถึงเพื่อนใหม่ทางจดหมาย',
    questions: [
      { id: 'a1u1-rd-q1', type: 'multiple-choice', prompt: 'Where is Malee from?',                           options: ['Bangkok','Chiang Mai','Khon Kaen','Phuket'], correctIndex: 2, explanation: 'มาลีพูดว่า "I am from Khon Kaen"' },
      { id: 'a1u1-rd-q2', type: 'multiple-choice', prompt: "What is Malee's favourite subject?",             options: ['Maths','Science','English','Thai'],           correctIndex: 2, explanation: 'มาลีบอกว่า "My favourite subject is English"' },
      { id: 'a1u1-rd-q3', type: 'multiple-choice', prompt: 'What sport does Malee enjoy?',                   options: ['Football','Tennis','Badminton','Swimming'],   correctIndex: 2, explanation: 'มาลีบอกว่า "I enjoy playing badminton"' },
      { id: 'a1u1-rd-q4', type: 'multiple-choice', prompt: "What is Malee's best friend called?",            options: ['Nok','Wan','May','Fon'],                      correctIndex: 1, explanation: 'มาลีบอกว่า "My best friend is called Wan"' },
    ]
  },

  // unit test — 12 questions covering all 4 sections
  test: {
    id: 'a1-unit-1-test',
    passMark: 0.70,
    questions: [
      { id: 'a1u1-t-01', type: 'multiple-choice', prompt: '"ขอโทษ" ในภาษาอังกฤษคือคำใด?',                          options: ['please','thank you','sorry','hello'],                               correctIndex: 2, explanation: '"sorry" = ขอโทษ' },
      { id: 'a1u1-t-02', type: 'multiple-choice', prompt: 'What does "nice to meet you" mean?',                    options: ['ขอบคุณ','ลาก่อน','ยินดีที่ได้รู้จัก','ขอโทษ'],                       correctIndex: 2, explanation: '"Nice to meet you" ใช้เมื่อพบกันครั้งแรก' },
      { id: 'a1u1-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "hello" คือ ___',                          answer: 'goodbye', acceptedVariants: ['bye'],                                   explanation: '"goodbye" ใช้เมื่อจากกัน ตรงข้ามกับ hello' },
      { id: 'a1u1-t-04', type: 'multiple-choice', prompt: '"She ___ a student." เติมคำใดถูกต้อง?',                 options: ['am','is','are','be'],                                               correctIndex: 1, explanation: 'She ใช้ is' },
      { id: 'a1u1-t-05', type: 'fill-in-blank',   prompt: 'We ___ from Thailand.',                                 answer: 'are', acceptedVariants: [],                                           explanation: 'We ใช้ are' },
      { id: 'a1u1-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                            options: ['I is happy to meet you.','I am happy to meet you.','I are happy to meet you.','I be happy to meet you.'], correctIndex: 1, explanation: 'I ใช้ am เสมอ' },
      { id: 'a1u1-t-07', type: 'fill-in-blank',   prompt: 'He ___ my new classmate.',                              answer: 'is', acceptedVariants: [],                                            explanation: 'He ใช้ is' },
      { id: 'a1u1-t-08', type: 'multiple-choice', prompt: 'In the listening, where is David from?',                options: ['Thailand','The USA','The UK','France'],                             correctIndex: 2, explanation: 'เดวิดพูดว่า "I am from the UK"' },
      { id: 'a1u1-t-09', type: 'multiple-choice', prompt: 'In the listening, how does David feel?',                options: ['Angry','Very sad','A little nervous','Very confident'],             correctIndex: 2, explanation: 'เดวิดพูดว่า "I am a little nervous"' },
      { id: 'a1u1-t-10', type: 'multiple-choice', prompt: "In Malee's letter, which subject does she like most?", options: ['Maths','Science','English','Thai'],                                 correctIndex: 2, explanation: 'มาลีบอกว่า "My favourite subject is English"' },
      { id: 'a1u1-t-11', type: 'multiple-choice', prompt: 'How old is Malee?',                                     options: ['13','14','15','16'],                                                correctIndex: 2, explanation: 'มาลีบอกว่า "I am fifteen years old"' },
      { id: 'a1u1-t-12', type: 'fill-in-blank',   prompt: "Malee's best friend is called ___.",                    answer: 'Wan', acceptedVariants: ['wan'],                                      explanation: 'มาลีบอกว่า "My best friend is called Wan"' },
    ]
  }
}
