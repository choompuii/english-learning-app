// A2 Part 1: Health, Hotel, Airport, Vacation
export const a2p1 = [
  // ============================================================
  // A2 Unit 1: Health
  // ============================================================
  {
    id: 'a2-unit-1',
    title: 'Unit 1: Health',
    thai: 'บทที่ 1: สุขภาพ',
    emoji: '🩺',

    vocabulary: {
      id: 'a2-unit-1-vocab',
      title: 'Health & The Body',
      thai: 'สุขภาพและร่างกาย',
      emoji: '🩺',
      level: 'A2',
      words: [
        { word: 'doctor',    pos: 'noun',      ipa: '/ˈdɒk.tər/',    emoji: '👨‍⚕️', thai: 'หมอ / แพทย์',    def: 'a person trained to treat sick people',                       example: 'I went to the doctor yesterday.',        synonym: 'physician', antonym: null },
        { word: 'medicine',  pos: 'noun',      ipa: '/ˈmed.sən/',    emoji: '💊', thai: 'ยา',              def: 'a substance you take to treat an illness',                    example: 'Take this medicine twice a day.',        synonym: 'drug',      antonym: null },
        { word: 'headache',  pos: 'noun',      ipa: '/ˈhed.eɪk/',    emoji: '🤕', thai: 'อาการปวดหัว',     def: 'a pain in your head',                                         example: 'I have a bad headache today.',           synonym: null,        antonym: null },
        { word: 'fever',     pos: 'noun',      ipa: '/ˈfiː.vər/',    emoji: '🌡️', thai: 'ไข้',             def: 'a high body temperature when you are ill',                    example: 'She has a high fever.',                  synonym: null,        antonym: null },
        { word: 'healthy',   pos: 'adjective', ipa: '/ˈhel.θi/',     emoji: '💪', thai: 'สุขภาพดี',        def: 'strong and not often ill',                                    example: 'Eat vegetables to stay healthy.',        synonym: 'well',      antonym: 'sick' },
        { word: 'sick',      pos: 'adjective', ipa: '/sɪk/',         emoji: '🤒', thai: 'ป่วย / ไม่สบาย',  def: 'not feeling well; ill',                                       example: 'He is sick and stayed home.',            synonym: 'ill',       antonym: 'healthy' },
        { word: 'hospital',  pos: 'noun',      ipa: '/ˈhɒs.pɪ.təl/', emoji: '🏥', thai: 'โรงพยาบาล',       def: 'a place where sick people are treated',                       example: 'The hospital is near my house.',         synonym: null,        antonym: null },
        { word: 'rest',      pos: 'verb',      ipa: '/rest/',        emoji: '😴', thai: 'พักผ่อน',         def: 'to stop working or moving so your body can recover',          example: 'You should rest when you are ill.',      synonym: 'relax',     antonym: 'work' },
      ]
    },

    grammar: {
      id: 'a2-unit-1-grammar',
      title: 'Past Simple',
      thai: 'อดีตกาลแบบง่าย (Past Simple)',
      emoji: '📐',
      level: 'A2',
      summary: 'เรียนรู้การเล่าเรื่องราวในอดีต เช่น การไปหาหมอเมื่อวานนี้ โดยใช้กริยาช่องที่ 2 ทั้งแบบปกติ (regular) และแบบไม่ปกติ (irregular)',
      explanation: [
        {
          heading: 'Regular verbs: เติม -ed',
          body: 'กริยาปกติเมื่อพูดถึงอดีต ให้เติม -ed ท้ายคำ\n\nwork → worked · visit → visited · call → called\n\n⚠️ ถ้าลงท้ายด้วย e อยู่แล้ว เติมแค่ -d: like → liked'
        },
        {
          heading: 'Irregular verbs: ต้องจำ',
          body: 'กริยาบางคำไม่เติม -ed แต่เปลี่ยนรูปทั้งคำ ต้องท่องจำ\n\ngo → went · take → took · feel → felt\nhave → had · see → saw · get → got'
        },
        {
          heading: 'Questions & Negatives: did / did not',
          body: 'ประโยคคำถามและปฏิเสธใช้ did แล้วกริยากลับเป็นช่อง 1 (รูปปกติ)\n\n❓ Did you see the doctor?\n❌ I did not (didn\'t) take the medicine.\n\n⚠️ จุดที่คนไทยมักผิด: ❌ Did you went? ✅ Did you go?'
        }
      ],
      examples: [
        { en: 'I visited the doctor yesterday.',   th: 'ฉันไปหาหมอเมื่อวานนี้' },
        { en: 'She took the medicine last night.', th: 'เธอกินยาเมื่อคืนนี้' },
        { en: 'He felt sick this morning.',        th: 'เขารู้สึกป่วยเมื่อเช้านี้' },
        { en: 'We went to the hospital.',          th: 'พวกเราไปโรงพยาบาล' },
        { en: 'Did you sleep well?',               th: 'คุณนอนหลับสบายดีไหม?' },
        { en: "I didn't have a fever.",            th: 'ฉันไม่ได้เป็นไข้' },
      ],
      practice: [
        { id: 'a2u1-gr-p1', type: 'fill-in-blank',  prompt: 'Yesterday I ___ (visit) the doctor.',            answer: 'visited', acceptedVariants: [],        explanation: 'visit เป็นกริยาปกติ เติม -ed → visited' },
        { id: 'a2u1-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct past form: She ___ to the hospital.', options: ['go','goes','went','gone'],   correctIndex: 2, explanation: 'go เป็น irregular → went' },
        { id: 'a2u1-gr-p3', type: 'fill-in-blank',  prompt: 'Did you ___ (take) the medicine?',                answer: 'take', acceptedVariants: [],           explanation: 'หลัง did กริยากลับเป็นช่อง 1 → take' },
      ],
      quiz: [
        { id: 'a2u1-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                  options: ['I go to the doctor yesterday.','I went to the doctor yesterday.','I gone to the doctor yesterday.','I goed to the doctor yesterday.'], correctIndex: 1, explanation: 'go → went (irregular) เมื่อพูดถึงอดีต' },
        { id: 'a2u1-gr-q2', type: 'fill-in-blank',  prompt: 'He ___ (feel) sick last night.',                 answer: 'felt', acceptedVariants: [],           explanation: 'feel → felt (irregular)' },
        { id: 'a2u1-gr-q3', type: 'multiple-choice', prompt: '"___ you see the doctor?" เติมคำใดถูกต้อง?',    options: ['Do','Did','Does','Are'],             correctIndex: 1, explanation: 'คำถามในอดีตใช้ Did' },
        { id: 'a2u1-gr-q4', type: 'fill-in-blank',  prompt: 'She ___ (not / take) the medicine.',             answer: "didn't take", acceptedVariants: ['did not take'], explanation: 'ปฏิเสธในอดีต: did not + กริยาช่อง 1' },
      ]
    },

    listening: {
      id: 'a2-unit-1-listening',
      type: 'Conversation',
      title: 'At the Doctor\'s Office',
      thai: 'ที่ห้องตรวจของหมอ',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Doctor', text: 'Good morning. What seems to be the problem?',        thai: 'สวัสดีครับ มีปัญหาอะไรหรือครับ?' },
        { speaker: 'Ploy',   text: 'Good morning, doctor. I have a bad headache and a fever.', thai: 'สวัสดีค่ะคุณหมอ ฉันปวดหัวมากและมีไข้ค่ะ' },
        { speaker: 'Doctor', text: 'I see. When did it start?',                          thai: 'อ๋อ อาการเริ่มเมื่อไหร่ครับ?' },
        { speaker: 'Ploy',   text: 'It started two days ago. I did not sleep well.',      thai: 'เริ่มเมื่อสองวันก่อนค่ะ ฉันนอนไม่ค่อยหลับ' },
        { speaker: 'Doctor', text: 'Let me check your temperature. Yes, you have a fever.', thai: 'ขอตรวจอุณหภูมิหน่อยนะครับ ใช่ครับ คุณมีไข้' },
        { speaker: 'Ploy',   text: 'What should I do, doctor?',                           thai: 'ฉันควรทำอย่างไรดีคะคุณหมอ?' },
        { speaker: 'Doctor', text: 'Take this medicine twice a day and rest at home.',    thai: 'กินยานี้วันละสองครั้งและพักผ่อนที่บ้านนะครับ' },
        { speaker: 'Ploy',   text: 'Thank you very much, doctor.',                        thai: 'ขอบคุณมากค่ะคุณหมอ' },
      ],
      questions: [
        { id: 'a2u1-ls-q1', type: 'multiple-choice', prompt: 'What are Ploy\'s symptoms?',           options: ['A cough and a cold','A headache and a fever','A stomachache','A broken leg'], correctIndex: 1, explanation: 'พลอยพูดว่า "I have a bad headache and a fever"' },
        { id: 'a2u1-ls-q2', type: 'multiple-choice', prompt: 'When did the problem start?',          options: ['This morning','Yesterday','Two days ago','Last week'],                        correctIndex: 2, explanation: 'พลอยพูดว่า "It started two days ago"' },
        { id: 'a2u1-ls-q3', type: 'multiple-choice', prompt: 'How often should she take the medicine?', options: ['Once a day','Twice a day','Three times a day','Every hour'],               correctIndex: 1, explanation: 'หมอพูดว่า "Take this medicine twice a day"' },
        { id: 'a2u1-ls-q4', type: 'multiple-choice', prompt: 'What else does the doctor tell her to do?', options: ['Go to work','Exercise a lot','Rest at home','Eat more'],                    correctIndex: 2, explanation: 'หมอพูดว่า "rest at home"' },
      ]
    },

    reading: {
      id: 'a2-unit-1-reading',
      type: 'Story',
      title: 'A Healthy Weekend',
      thai: 'สุดสัปดาห์ที่มีสุขภาพดี',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      dialogue: null,
      paragraphs: [
        'Last week, Ton felt very tired and sick. He had a headache every day and he did not sleep well. His mother told him to see a doctor, so on Saturday morning he visited the hospital near his house.',
        'The doctor checked him carefully. She said, "You are not very ill, but you work too much and you do not rest enough." She told Ton to eat more fruit and vegetables, drink water, and go to bed early.',
        'On Sunday, Ton followed the doctor\'s advice. He ate a big healthy breakfast and went for a walk in the park. In the afternoon, he rested and read a book instead of using his phone.',
        'On Monday morning, Ton felt much better. His headache was gone and he had more energy. Now he understands that rest and good food are important for a healthy life.',
      ],
      glossary: [
        { word: 'tired',   thai: 'เหนื่อย / อ่อนเพลีย', def: 'needing rest or sleep' },
        { word: 'advice',  thai: 'คำแนะนำ',              def: 'an idea about what someone should do' },
        { word: 'energy',  thai: 'พลังงาน / เรี่ยวแรง',  def: 'the strength to do things actively' },
        { word: 'enough',  thai: 'เพียงพอ',              def: 'as much as is needed' },
      ],
      summary: 'Ton felt sick and tired, so he visited the doctor. She told him to rest more and eat well. After following her advice for a weekend, he felt much better.',
      summaryThai: 'ต้นรู้สึกป่วยและเหนื่อย จึงไปหาหมอ หมอแนะนำให้พักผ่อนมากขึ้นและกินอาหารดีๆ หลังจากทำตามคำแนะนำในสุดสัปดาห์ เขาก็รู้สึกดีขึ้นมาก',
      questions: [
        { id: 'a2u1-rd-q1', type: 'multiple-choice', prompt: 'Why did Ton visit the hospital?',        options: ['To visit a friend','Because he felt sick and tired','To work there','To buy medicine'], correctIndex: 1, explanation: 'เขารู้สึกเหนื่อยและป่วย จึงไปหาหมอ' },
        { id: 'a2u1-rd-q2', type: 'multiple-choice', prompt: 'What did the doctor say was the problem?', options: ['He was very ill','He worked too much and did not rest enough','He ate too much','He walked too much'], correctIndex: 1, explanation: 'หมอบอกว่าเขาทำงานมากเกินไปและพักผ่อนไม่พอ' },
        { id: 'a2u1-rd-q3', type: 'multiple-choice', prompt: 'What did Ton do on Sunday afternoon?',    options: ['Played football','Used his phone','Rested and read a book','Went to work'], correctIndex: 2, explanation: '"he rested and read a book instead of using his phone"' },
        { id: 'a2u1-rd-q4', type: 'multiple-choice', prompt: 'How did Ton feel on Monday?',             options: ['Worse','The same','Much better','Very tired'], correctIndex: 2, explanation: '"Ton felt much better"' },
      ]
    },

    test: {
      id: 'a2-unit-1-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u1-t-01', type: 'multiple-choice', prompt: '"โรงพยาบาล" ในภาษาอังกฤษคือคำใด?',        options: ['hotel','hospital','house','office'],           correctIndex: 1, explanation: '"hospital" = โรงพยาบาล' },
        { id: 'a2u1-t-02', type: 'multiple-choice', prompt: 'What does "medicine" mean?',              options: ['อาหาร','ยา','น้ำ','หมอ'],                       correctIndex: 1, explanation: '"medicine" = ยา' },
        { id: 'a2u1-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "healthy" คือ ___',          answer: 'sick', acceptedVariants: ['ill'],                explanation: '"sick / ill" = ป่วย ตรงข้ามกับ healthy' },
        { id: 'a2u1-t-04', type: 'multiple-choice', prompt: '"I ___ to the doctor yesterday." เติมคำใดถูกต้อง?', options: ['go','goes','went','going'],     correctIndex: 2, explanation: 'go → went (past simple)' },
        { id: 'a2u1-t-05', type: 'fill-in-blank',   prompt: 'She ___ (take) the medicine last night.', answer: 'took', acceptedVariants: [],                     explanation: 'take → took (irregular)' },
        { id: 'a2u1-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',              options: ['Did you went home?','Did you go home?','Did you goes home?','Did you gone home?'], correctIndex: 1, explanation: 'หลัง did ใช้กริยาช่อง 1 → Did you go?' },
        { id: 'a2u1-t-07', type: 'fill-in-blank',   prompt: 'I ___ (visit) my grandmother last week.', answer: 'visited', acceptedVariants: [],                  explanation: 'visit เป็นกริยาปกติ → visited' },
        { id: 'a2u1-t-08', type: 'multiple-choice', prompt: 'In the listening, what does Ploy have?',  options: ['A cold','A headache and a fever','A broken arm','A cough'], correctIndex: 1, explanation: 'พลอยมีอาการปวดหัวและมีไข้' },
        { id: 'a2u1-t-09', type: 'multiple-choice', prompt: 'In the listening, how often should Ploy take the medicine?', options: ['Once a day','Twice a day','Every hour','Never'], correctIndex: 1, explanation: 'หมอบอกให้กินยาวันละสองครั้ง' },
        { id: 'a2u1-t-10', type: 'multiple-choice', prompt: 'In the story, what did the doctor tell Ton to eat?', options: ['More sweets','More fruit and vegetables','More rice','More meat'], correctIndex: 1, explanation: 'หมอบอกให้กินผลไม้และผักมากขึ้น' },
      ]
    }
  },

  // ============================================================
  // A2 Unit 2: Hotel
  // ============================================================
  {
    id: 'a2-unit-2',
    title: 'Unit 2: Hotel',
    thai: 'บทที่ 2: โรงแรม',
    emoji: '🏨',

    vocabulary: {
      id: 'a2-unit-2-vocab',
      title: 'At the Hotel',
      thai: 'ที่โรงแรม',
      emoji: '🏨',
      level: 'A2',
      words: [
        { word: 'reception',   pos: 'noun',      ipa: '/rɪˈsep.ʃən/',   emoji: '🛎️', thai: 'แผนกต้อนรับ',      def: 'the desk where guests check in at a hotel',            example: 'Please leave your key at reception.',       synonym: 'front desk', antonym: null },
        { word: 'reservation', pos: 'noun',      ipa: '/ˌrez.əˈveɪ.ʃən/', emoji: '📅', thai: 'การจอง',           def: 'an arrangement to have a room kept for you',           example: 'I have a reservation for two nights.',      synonym: 'booking',    antonym: null },
        { word: 'guest',       pos: 'noun',      ipa: '/ɡest/',         emoji: '🧳', thai: 'แขก / ผู้เข้าพัก',  def: 'a person who stays at a hotel',                        example: 'The hotel has many guests today.',          synonym: 'visitor',    antonym: 'host' },
        { word: 'luggage',     pos: 'noun',      ipa: '/ˈlʌɡ.ɪdʒ/',     emoji: '🧳', thai: 'สัมภาระ / กระเป๋าเดินทาง', def: 'the bags you take when you travel',              example: 'Can you help me with my luggage?',          synonym: 'baggage',    antonym: null },
        { word: 'comfortable', pos: 'adjective', ipa: '/ˈkʌm.fə.tə.bəl/', emoji: '🛏️', thai: 'สะดวกสบาย',        def: 'making you feel relaxed and pleasant',                 example: 'The bed is very comfortable.',              synonym: 'cosy',       antonym: 'uncomfortable' },
        { word: 'key card',    pos: 'noun',      ipa: '/ˈkiː kɑːd/',    emoji: '🔑', thai: 'บัตรกุญแจห้อง',    def: 'a plastic card used to open a hotel room door',        example: 'Use your key card to open the door.',       synonym: null,         antonym: null },
        { word: 'floor',       pos: 'noun',      ipa: '/flɔːr/',        emoji: '🏢', thai: 'ชั้น',              def: 'one level of a building',                              example: 'Your room is on the third floor.',          synonym: 'level',      antonym: null },
        { word: 'check in',    pos: 'verb',      ipa: '/ˌtʃek ˈɪn/',    emoji: '✅', thai: 'เช็คอิน / ลงทะเบียนเข้าพัก', def: 'to arrive and register at a hotel',            example: 'We can check in after 2 p.m.',              synonym: null,         antonym: 'check out' },
      ]
    },

    grammar: {
      id: 'a2-unit-2-grammar',
      title: 'Comparatives & Superlatives',
      thai: 'ขั้นกว่าและขั้นสูงสุด (Comparatives & Superlatives)',
      emoji: '📐',
      level: 'A2',
      summary: 'เรียนรู้การเปรียบเทียบ เช่น เปรียบเทียบโรงแรมสองแห่ง (cheaper) และบอกว่าห้องไหนดีที่สุด (the best) เหมาะกับการเลือกที่พัก',
      explanation: [
        {
          heading: 'Short adjectives: -er / -est',
          body: 'คำคุณศัพท์สั้น (1 พยางค์) เติม -er เพื่อเปรียบเทียบ และ -est เพื่อบอกที่สุด\n\ncheap → cheaper → the cheapest\nbig → bigger → the biggest (ซ้ำตัวสะกด)\nnice → nicer → the nicest'
        },
        {
          heading: 'Long adjectives: more / most',
          body: 'คำคุณศัพท์ยาว (2+ พยางค์) ใช้ more และ the most นำหน้า\n\ncomfortable → more comfortable → the most comfortable\nexpensive → more expensive → the most expensive'
        },
        {
          heading: 'Irregular & the word "than"',
          body: 'คำพิเศษที่ต้องจำ:\ngood → better → the best\nbad → worse → the worst\n\n⚠️ เวลาเปรียบเทียบสองสิ่งใช้ than: This hotel is cheaper than that one.'
        }
      ],
      examples: [
        { en: 'This room is cheaper than that room.',        th: 'ห้องนี้ถูกกว่าห้องนั้น' },
        { en: 'The Blue Hotel is bigger than the Sun Hotel.', th: 'โรงแรมบลูใหญ่กว่าโรงแรมซัน' },
        { en: 'This is the most comfortable bed.',           th: 'นี่คือเตียงที่สบายที่สุด' },
        { en: 'Their service is better than ours.',          th: 'บริการของพวกเขาดีกว่าของเรา' },
        { en: 'This is the best hotel in the city.',         th: 'นี่คือโรงแรมที่ดีที่สุดในเมือง' },
        { en: 'The lift is faster than the stairs.',         th: 'ลิฟต์เร็วกว่าบันได' },
      ],
      practice: [
        { id: 'a2u2-gr-p1', type: 'fill-in-blank',  prompt: 'This room is ___ (cheap) than that one.',       answer: 'cheaper', acceptedVariants: [],       explanation: 'cheap เป็นคำสั้น เติม -er → cheaper' },
        { id: 'a2u2-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct form: This bed is ___ than that one.', options: ['comfortabler','more comfortable','most comfortable','comfortable'], correctIndex: 1, explanation: 'comfortable เป็นคำยาว ใช้ more' },
        { id: 'a2u2-gr-p3', type: 'fill-in-blank',  prompt: 'It is the ___ (good) hotel in town.',           answer: 'best', acceptedVariants: [],           explanation: 'good → the best (irregular)' },
      ],
      quiz: [
        { id: 'a2u2-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                options: ['This hotel is more big than that one.','This hotel is bigger than that one.','This hotel is biggest than that one.','This hotel is big than that one.'], correctIndex: 1, explanation: 'big → bigger (คำสั้น เติม -er และซ้ำตัวสะกด)' },
        { id: 'a2u2-gr-q2', type: 'fill-in-blank',  prompt: 'The Sky Hotel is the ___ (expensive) in the city.', answer: 'most expensive', acceptedVariants: [], explanation: 'expensive เป็นคำยาว → the most expensive' },
        { id: 'a2u2-gr-q3', type: 'multiple-choice', prompt: '"Their service is ___ than ours." เติมคำใดถูกต้อง?', options: ['gooder','more good','better','best'], correctIndex: 2, explanation: 'good → better (irregular)' },
        { id: 'a2u2-gr-q4', type: 'fill-in-blank',  prompt: 'This room is ___ (clean) than the other one.',  answer: 'cleaner', acceptedVariants: [],        explanation: 'clean เป็นคำสั้น เติม -er → cleaner' },
      ]
    },

    listening: {
      id: 'a2-unit-2-listening',
      type: 'Conversation',
      title: 'Checking in at the Hotel',
      thai: 'เช็คอินที่โรงแรม',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Receptionist', text: 'Good afternoon and welcome to the Sunrise Hotel. Do you have a reservation?', thai: 'สวัสดีตอนบ่ายค่ะ ยินดีต้อนรับสู่โรงแรมซันไรส์ คุณมีการจองไหมคะ?' },
        { speaker: 'James',        text: 'Yes, I do. My name is James Wilson. I booked a room for three nights.', thai: 'มีครับ ผมชื่อเจมส์ วิลสัน ผมจองห้องไว้สามคืนครับ' },
        { speaker: 'Receptionist', text: 'Let me check. Yes, a single room for three nights. Can I see your passport, please?', thai: 'ขอตรวจสอบก่อนนะคะ ใช่ค่ะ ห้องเดี่ยวสามคืน ขอดูพาสปอร์ตหน่อยได้ไหมคะ?' },
        { speaker: 'James',        text: 'Here you are. Is breakfast included?',           thai: 'นี่ครับ อาหารเช้ารวมอยู่ด้วยไหมครับ?' },
        { speaker: 'Receptionist', text: 'Yes, breakfast is served from 7 to 10 on the ground floor.', thai: 'รวมค่ะ อาหารเช้าเสิร์ฟตั้งแต่ 7 ถึง 10 โมงที่ชั้นล่างค่ะ' },
        { speaker: 'James',        text: 'Great. Which floor is my room on?',              thai: 'เยี่ยมเลยครับ ห้องผมอยู่ชั้นไหนครับ?' },
        { speaker: 'Receptionist', text: 'Your room is on the fourth floor. Here is your key card.', thai: 'ห้องของคุณอยู่ชั้นสี่ค่ะ นี่บัตรกุญแจห้องของคุณค่ะ' },
        { speaker: 'James',        text: 'Thank you very much. Have a nice day.',          thai: 'ขอบคุณมากครับ ขอให้เป็นวันที่ดีนะครับ' },
      ],
      questions: [
        { id: 'a2u2-ls-q1', type: 'multiple-choice', prompt: 'How many nights did James book?',      options: ['One night','Two nights','Three nights','Four nights'], correctIndex: 2, explanation: 'เจมส์พูดว่า "a room for three nights"' },
        { id: 'a2u2-ls-q2', type: 'multiple-choice', prompt: 'What does the receptionist ask to see?', options: ['His ticket','His passport','His phone','His key card'], correctIndex: 1, explanation: 'พนักงานพูดว่า "Can I see your passport, please?"' },
        { id: 'a2u2-ls-q3', type: 'multiple-choice', prompt: 'Where is breakfast served?',           options: ['On the fourth floor','In the room','On the ground floor','At reception'], correctIndex: 2, explanation: '"breakfast is served ... on the ground floor"' },
        { id: 'a2u2-ls-q4', type: 'multiple-choice', prompt: 'Which floor is James\'s room on?',       options: ['The ground floor','The second floor','The third floor','The fourth floor'], correctIndex: 3, explanation: '"Your room is on the fourth floor"' },
      ]
    },

    reading: {
      id: 'a2-unit-2-reading',
      type: 'Story',
      title: 'Choosing a Hotel',
      thai: 'การเลือกโรงแรม',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      dialogue: null,
      paragraphs: [
        'Last summer, Nan and her family planned a holiday in Chiang Mai. Before the trip, Nan looked at three hotels on the internet. She wanted to find the best hotel for her family.',
        'The first hotel, the River View, was the cheapest, but the rooms were very small. The second hotel, the Green Garden, was bigger and more comfortable, but it was more expensive. The third hotel, the City Star, was the most expensive of all.',
        'Nan compared the three hotels carefully. The Green Garden had good reviews and a nice swimming pool. It was cheaper than the City Star but more comfortable than the River View. Nan decided that it was the best choice for her family.',
        'When they arrived, the reception staff were very friendly. Their room was clean and comfortable, and it was on a quiet floor. Nan was happy because she chose the right hotel.',
      ],
      glossary: [
        { word: 'holiday', thai: 'วันหยุด / การพักผ่อน', def: 'a time when you travel or rest and do not work' },
        { word: 'compare', thai: 'เปรียบเทียบ',           def: 'to look at things to see how they are different' },
        { word: 'review',  thai: 'รีวิว / บทวิจารณ์',     def: 'an opinion written by someone who used a service' },
        { word: 'choice',  thai: 'ทางเลือก',              def: 'a decision to pick one thing from several' },
      ],
      summary: 'Nan compared three hotels for a family holiday in Chiang Mai. She chose the Green Garden because it was more comfortable than the cheapest one and cheaper than the most expensive one.',
      summaryThai: 'แนนเปรียบเทียบโรงแรมสามแห่งสำหรับวันหยุดของครอบครัวที่เชียงใหม่ เธอเลือกโรงแรมกรีนการ์เดนเพราะสบายกว่าโรงแรมที่ถูกที่สุดและถูกกว่าโรงแรมที่แพงที่สุด',
      questions: [
        { id: 'a2u2-rd-q1', type: 'multiple-choice', prompt: 'How many hotels did Nan compare?',      options: ['Two','Three','Four','Five'], correctIndex: 1, explanation: 'แนนดูโรงแรมสามแห่ง' },
        { id: 'a2u2-rd-q2', type: 'multiple-choice', prompt: 'Which hotel was the cheapest?',         options: ['The River View','The Green Garden','The City Star','The Sunrise'], correctIndex: 0, explanation: '"The River View ... was the cheapest"' },
        { id: 'a2u2-rd-q3', type: 'multiple-choice', prompt: 'Which hotel did Nan choose?',           options: ['The River View','The Green Garden','The City Star','None of them'], correctIndex: 1, explanation: 'แนนเลือกโรงแรมกรีนการ์เดน' },
        { id: 'a2u2-rd-q4', type: 'multiple-choice', prompt: 'Why was Nan happy at the end?',         options: ['The hotel was free','She chose the right hotel','The room was on the top floor','The hotel had no other guests'], correctIndex: 1, explanation: '"Nan was happy because she chose the right hotel"' },
      ]
    },

    test: {
      id: 'a2-unit-2-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u2-t-01', type: 'multiple-choice', prompt: '"การจอง" ในภาษาอังกฤษคือคำใด?',           options: ['reception','reservation','luggage','floor'], correctIndex: 1, explanation: '"reservation" = การจอง' },
        { id: 'a2u2-t-02', type: 'multiple-choice', prompt: 'What does "luggage" mean?',              options: ['กุญแจ','สัมภาระ / กระเป๋าเดินทาง','ชั้น','แขก'], correctIndex: 1, explanation: '"luggage" = สัมภาระ / กระเป๋าเดินทาง' },
        { id: 'a2u2-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "check in" คือ ___',          answer: 'check out', acceptedVariants: ['checkout'], explanation: '"check out" = เช็คเอาท์ ตรงข้ามกับ check in' },
        { id: 'a2u2-t-04', type: 'multiple-choice', prompt: '"This room is ___ than that one." เติมคำใดถูกต้อง?', options: ['cheap','cheaper','cheapest','more cheap'], correctIndex: 1, explanation: 'เปรียบเทียบสองสิ่ง cheap → cheaper' },
        { id: 'a2u2-t-05', type: 'fill-in-blank',   prompt: 'This is the ___ (good) hotel in the city.', answer: 'best', acceptedVariants: [],           explanation: 'good → the best (irregular superlative)' },
        { id: 'a2u2-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',              options: ['This bed is comfortabler.','This bed is more comfortable.','This bed is most comfortable than.','This bed is comfortablest.'], correctIndex: 1, explanation: 'comfortable เป็นคำยาว ใช้ more comfortable' },
        { id: 'a2u2-t-07', type: 'fill-in-blank',   prompt: 'The City Star is the most ___ (expensive) hotel.', answer: 'expensive', acceptedVariants: [], explanation: 'the most + expensive (ขั้นสูงสุดของคำยาว)' },
        { id: 'a2u2-t-08', type: 'multiple-choice', prompt: 'In the listening, how many nights did James book?', options: ['One','Two','Three','Four'], correctIndex: 2, explanation: 'เจมส์จองสามคืน' },
        { id: 'a2u2-t-09', type: 'multiple-choice', prompt: 'In the listening, which floor is James\'s room on?', options: ['Ground floor','Second floor','Third floor','Fourth floor'], correctIndex: 3, explanation: 'ห้องอยู่ชั้นสี่' },
        { id: 'a2u2-t-10', type: 'multiple-choice', prompt: 'In the story, which hotel did Nan choose?', options: ['The River View','The Green Garden','The City Star','The Sunrise'], correctIndex: 1, explanation: 'แนนเลือกโรงแรมกรีนการ์เดน' },
      ]
    }
  },

  // ============================================================
  // A2 Unit 3: Airport
  // ============================================================
  {
    id: 'a2-unit-3',
    title: 'Unit 3: Airport',
    thai: 'บทที่ 3: สนามบิน',
    emoji: '✈️',

    vocabulary: {
      id: 'a2-unit-3-vocab',
      title: 'At the Airport',
      thai: 'ที่สนามบิน',
      emoji: '✈️',
      level: 'A2',
      words: [
        { word: 'passport',    pos: 'noun',      ipa: '/ˈpɑːs.pɔːt/',    emoji: '🛂', thai: 'หนังสือเดินทาง',   def: 'an official document you need to travel abroad',       example: 'Show your passport at the gate.',        synonym: null,       antonym: null },
        { word: 'boarding pass', pos: 'noun',    ipa: '/ˈbɔː.dɪŋ pɑːs/', emoji: '🎫', thai: 'บัตรผ่านขึ้นเครื่อง', def: 'a card that lets you get on a plane',                example: 'Keep your boarding pass ready.',         synonym: null,       antonym: null },
        { word: 'flight',      pos: 'noun',      ipa: '/flaɪt/',         emoji: '🛫', thai: 'เที่ยวบิน',        def: 'a journey by plane',                                   example: 'My flight leaves at ten o\'clock.',      synonym: null,       antonym: null },
        { word: 'gate',        pos: 'noun',      ipa: '/ɡeɪt/',          emoji: '🚪', thai: 'ประตูขึ้นเครื่อง', def: 'the place where you get on the plane',                 example: 'Go to gate 12 for your flight.',         synonym: null,       antonym: null },
        { word: 'luggage',     pos: 'noun',      ipa: '/ˈlʌɡ.ɪdʒ/',      emoji: '🧳', thai: 'สัมภาระ',          def: 'the bags you carry when travelling',                   example: 'Put your luggage on the belt.',          synonym: 'baggage',  antonym: null },
        { word: 'departure',   pos: 'noun',      ipa: '/dɪˈpɑː.tʃər/',   emoji: '🛫', thai: 'ขาออก / การเดินทางออก', def: 'the act of leaving on a journey',                 example: 'Check the departure time on the screen.', synonym: null,      antonym: 'arrival' },
        { word: 'arrival',     pos: 'noun',      ipa: '/əˈraɪ.vəl/',     emoji: '🛬', thai: 'ขาเข้า / การมาถึง', def: 'the act of reaching a place',                          example: 'The arrival gate is on the left.',       synonym: null,       antonym: 'departure' },
        { word: 'delay',       pos: 'noun',      ipa: '/dɪˈleɪ/',        emoji: '⏰', thai: 'ความล่าช้า',       def: 'a period of time when something is late',              example: 'There is a two-hour delay.',             synonym: null,       antonym: null },
      ]
    },

    grammar: {
      id: 'a2-unit-3-grammar',
      title: 'Future: "going to" & "will"',
      thai: 'อนาคตกาล: going to และ will',
      emoji: '📐',
      level: 'A2',
      summary: 'เรียนรู้การพูดถึงอนาคต เช่น แผนการเดินทาง (be going to) และการตัดสินใจทันที (will) เหมาะกับการวางแผนที่สนามบิน',
      explanation: [
        {
          heading: 'be going to: แผนที่ตั้งใจไว้',
          body: 'ใช้ be going to เมื่อพูดถึงแผนหรือความตั้งใจที่วางไว้แล้ว\n\nI am going to travel to Japan.\nWe are going to check in early.\n\nโครงสร้าง: am/is/are + going to + กริยาช่อง 1'
        },
        {
          heading: 'will: การตัดสินใจทันที / คำสัญญา',
          body: 'ใช้ will เมื่อตัดสินใจ ณ ตอนนั้น หรือให้คำสัญญา หรือคาดการณ์\n\nA: The flight is delayed. B: OK, I will wait here.\nI will help you with your luggage.\n\nโครงสร้าง: will + กริยาช่อง 1 (ใช้เหมือนกันทุกประธาน)'
        },
        {
          heading: 'Negatives & Questions',
          body: "ปฏิเสธ: I am not going to fly today. · She will not (won't) be late.\nคำถาม: Are you going to travel next week? · Will you call me?\n\n⚠️ will ตามด้วยกริยาช่อง 1 เสมอ: ❌ I will to go. ✅ I will go."
        }
      ],
      examples: [
        { en: 'I am going to travel to London next month.', th: 'ฉันจะเดินทางไปลอนดอนเดือนหน้า' },
        { en: 'We are going to arrive at 8 p.m.',           th: 'พวกเราจะไปถึงตอนสองทุ่ม' },
        { en: 'The flight will be late.',                   th: 'เที่ยวบินจะล่าช้า' },
        { en: 'I will help you carry your luggage.',        th: 'ฉันจะช่วยคุณถือสัมภาระ' },
        { en: 'Are you going to take the early flight?',    th: 'คุณจะขึ้นเที่ยวบินเช้าไหม?' },
        { en: "I won't miss my flight.",                    th: 'ฉันจะไม่พลาดเที่ยวบิน' },
      ],
      practice: [
        { id: 'a2u3-gr-p1', type: 'fill-in-blank',  prompt: 'I am ___ to travel to Japan next week.',        answer: 'going', acceptedVariants: [],         explanation: 'โครงสร้าง be going to → am going to travel' },
        { id: 'a2u3-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct form: The flight ___ be late.', options: ['will','going','is','to'],       correctIndex: 0, explanation: 'การคาดการณ์ใช้ will → will be late' },
        { id: 'a2u3-gr-p3', type: 'fill-in-blank',  prompt: 'A: The gate is far. B: OK, I ___ take a taxi.',  answer: 'will', acceptedVariants: ["'ll"],     explanation: 'การตัดสินใจทันทีใช้ will' },
      ],
      quiz: [
        { id: 'a2u3-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                options: ['I will to travel tomorrow.','I am going travel tomorrow.','I am going to travel tomorrow.','I will traveling tomorrow.'], correctIndex: 2, explanation: 'be going to + กริยาช่อง 1 → am going to travel' },
        { id: 'a2u3-gr-q2', type: 'fill-in-blank',  prompt: 'We are going ___ check in early.',              answer: 'to', acceptedVariants: [],             explanation: 'โครงสร้าง be going to + verb' },
        { id: 'a2u3-gr-q3', type: 'multiple-choice', prompt: '"Don\'t worry, I ___ help you." เติมคำใดถูกต้อง?', options: ['am going','will','going to','am'], correctIndex: 1, explanation: 'การเสนอช่วยเหลือทันทีใช้ will' },
        { id: 'a2u3-gr-q4', type: 'fill-in-blank',  prompt: 'She ___ (not) be late for the flight. (ใช้รูปย่อของ will not)', answer: "won't", acceptedVariants: ['will not'], explanation: 'will not → won\'t' },
      ]
    },

    listening: {
      id: 'a2-unit-3-listening',
      type: 'Conversation',
      title: 'At the Check-in Counter',
      thai: 'ที่เคาน์เตอร์เช็คอิน',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Agent', text: 'Good morning. May I see your passport and ticket, please?', thai: 'สวัสดีตอนเช้าค่ะ ขอดูหนังสือเดินทางและตั๋วหน่อยได้ไหมคะ?' },
        { speaker: 'Mali',  text: 'Here you are. I am going to fly to Singapore.',            thai: 'นี่ค่ะ ฉันจะบินไปสิงคโปร์ค่ะ' },
        { speaker: 'Agent', text: 'Thank you. How many bags are you checking in?',            thai: 'ขอบคุณค่ะ คุณจะโหลดกระเป๋ากี่ใบคะ?' },
        { speaker: 'Mali',  text: 'Just one bag. Is my flight on time?',                      thai: 'แค่ใบเดียวค่ะ เที่ยวบินของฉันตรงเวลาไหมคะ?' },
        { speaker: 'Agent', text: 'I am sorry, there is a short delay of thirty minutes.',    thai: 'ขอโทษค่ะ มีความล่าช้าเล็กน้อยประมาณสามสิบนาที' },
        { speaker: 'Mali',  text: 'Oh, that\'s okay. Which gate should I go to?',             thai: 'อ๋อ ไม่เป็นไรค่ะ ฉันควรไปที่ประตูไหนคะ?' },
        { speaker: 'Agent', text: 'Please go to gate 15. Here is your boarding pass.',        thai: 'กรุณาไปที่ประตู 15 ค่ะ นี่บัตรผ่านขึ้นเครื่องของคุณค่ะ' },
        { speaker: 'Mali',  text: 'Thank you. I will go there now.',                          thai: 'ขอบคุณค่ะ ฉันจะไปที่นั่นเลยค่ะ' },
      ],
      questions: [
        { id: 'a2u3-ls-q1', type: 'multiple-choice', prompt: 'Where is Mali going to fly?',        options: ['Japan','Singapore','London','Bangkok'], correctIndex: 1, explanation: 'มาลีพูดว่า "I am going to fly to Singapore"' },
        { id: 'a2u3-ls-q2', type: 'multiple-choice', prompt: 'How many bags is she checking in?',   options: ['None','One','Two','Three'], correctIndex: 1, explanation: 'มาลีพูดว่า "Just one bag"' },
        { id: 'a2u3-ls-q3', type: 'multiple-choice', prompt: 'How long is the delay?',             options: ['Ten minutes','Thirty minutes','One hour','Two hours'], correctIndex: 1, explanation: '"a short delay of thirty minutes"' },
        { id: 'a2u3-ls-q4', type: 'multiple-choice', prompt: 'Which gate must Mali go to?',        options: ['Gate 5','Gate 15','Gate 50','Gate 51'], correctIndex: 1, explanation: '"Please go to gate 15"' },
      ]
    },

    reading: {
      id: 'a2-unit-3-reading',
      type: 'Story',
      title: 'A Long Day at the Airport',
      thai: 'วันอันยาวนานที่สนามบิน',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      dialogue: null,
      paragraphs: [
        'Somchai was very excited. He was going to visit his sister in Australia for the first time. He arrived at the airport three hours early because he did not want to miss his flight.',
        'At the check-in counter, he showed his passport and got his boarding pass. The agent told him that his flight was going to be delayed by two hours because of bad weather. Somchai was a little worried, but he decided to wait calmly.',
        'While he waited, Somchai bought a coffee and read the departure board. He watched the planes take off and land. After two hours, a voice said, "Flight to Sydney is now boarding at gate 22."',
        'Somchai took his luggage and walked quickly to the gate. He was happy that the delay was over. "Soon I will see my sister," he thought with a big smile. It was going to be a wonderful trip.',
      ],
      glossary: [
        { word: 'excited',   thai: 'ตื่นเต้น (ในทางดี)',  def: 'feeling very happy about something that will happen' },
        { word: 'worried',   thai: 'กังวล',                def: 'feeling nervous because something might go wrong' },
        { word: 'weather',   thai: 'สภาพอากาศ',            def: 'the condition of the sky such as rain or sun' },
        { word: 'board',     thai: 'ป้าย / กระดาน (หรือขึ้นเครื่อง)', def: 'a flat surface with information; also to get on a plane' },
      ],
      summary: 'Somchai went to the airport to fly to Australia to visit his sister. His flight was delayed by two hours because of bad weather, but he waited calmly and finally boarded at gate 22.',
      summaryThai: 'สมชายไปสนามบินเพื่อบินไปออสเตรเลียเยี่ยมน้องสาว เที่ยวบินล่าช้าสองชั่วโมงเพราะสภาพอากาศไม่ดี แต่เขารอด้วยความสงบและในที่สุดก็ขึ้นเครื่องที่ประตู 22',
      questions: [
        { id: 'a2u3-rd-q1', type: 'multiple-choice', prompt: 'Where was Somchai going to travel?',   options: ['Japan','Singapore','Australia','England'], correctIndex: 2, explanation: 'เขาจะไปเยี่ยมน้องสาวที่ออสเตรเลีย' },
        { id: 'a2u3-rd-q2', type: 'multiple-choice', prompt: 'Why was the flight delayed?',          options: ['Bad weather','A broken plane','No pilot','Too many people'], correctIndex: 0, explanation: '"delayed by two hours because of bad weather"' },
        { id: 'a2u3-rd-q3', type: 'multiple-choice', prompt: 'How long was the delay?',             options: ['One hour','Two hours','Three hours','Four hours'], correctIndex: 1, explanation: 'เที่ยวบินล่าช้าสองชั่วโมง' },
        { id: 'a2u3-rd-q4', type: 'multiple-choice', prompt: 'Which gate did his flight board at?',  options: ['Gate 2','Gate 12','Gate 22','Gate 20'], correctIndex: 2, explanation: '"boarding at gate 22"' },
      ]
    },

    test: {
      id: 'a2-unit-3-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u3-t-01', type: 'multiple-choice', prompt: '"หนังสือเดินทาง" ในภาษาอังกฤษคือคำใด?',   options: ['ticket','passport','luggage','gate'], correctIndex: 1, explanation: '"passport" = หนังสือเดินทาง' },
        { id: 'a2u3-t-02', type: 'multiple-choice', prompt: 'What does "flight" mean?',              options: ['สนามบิน','เที่ยวบิน','ประตู','ตั๋ว'], correctIndex: 1, explanation: '"flight" = เที่ยวบิน' },
        { id: 'a2u3-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "departure" คือ ___',        answer: 'arrival', acceptedVariants: [],        explanation: '"arrival" = ขาเข้า ตรงข้ามกับ departure' },
        { id: 'a2u3-t-04', type: 'multiple-choice', prompt: '"I ___ going to fly tomorrow." เติมคำใดถูกต้อง?', options: ['am','is','are','will'], correctIndex: 0, explanation: 'ประธาน I ใช้ am → am going to' },
        { id: 'a2u3-t-05', type: 'fill-in-blank',   prompt: 'Don\'t worry, I ___ help you with your bags. (ใช้คำที่แสดงการตัดสินใจทันที)', answer: 'will', acceptedVariants: ["'ll"], explanation: 'การเสนอช่วยทันทีใช้ will' },
        { id: 'a2u3-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',              options: ['I will to travel next week.','I am going to travel next week.','I am going travel next week.','I will traveling next week.'], correctIndex: 1, explanation: 'be going to + กริยาช่อง 1' },
        { id: 'a2u3-t-07', type: 'fill-in-blank',   prompt: 'We are going ___ check in now.',          answer: 'to', acceptedVariants: [],             explanation: 'be going to + verb' },
        { id: 'a2u3-t-08', type: 'multiple-choice', prompt: 'In the listening, where is Mali going to fly?', options: ['London','Singapore','Sydney','Tokyo'], correctIndex: 1, explanation: 'มาลีจะบินไปสิงคโปร์' },
        { id: 'a2u3-t-09', type: 'multiple-choice', prompt: 'In the listening, how long is the delay?', options: ['15 minutes','30 minutes','1 hour','2 hours'], correctIndex: 1, explanation: 'ล่าช้าสามสิบนาที' },
        { id: 'a2u3-t-10', type: 'multiple-choice', prompt: 'In the story, why was Somchai\'s flight delayed?', options: ['Bad weather','A strike','No fuel','A late pilot'], correctIndex: 0, explanation: 'ล่าช้าเพราะสภาพอากาศไม่ดี' },
      ]
    }
  },

  // ============================================================
  // A2 Unit 4: Vacation
  // ============================================================
  {
    id: 'a2-unit-4',
    title: 'Unit 4: Vacation',
    thai: 'บทที่ 4: วันหยุดพักผ่อน',
    emoji: '🏖️',

    vocabulary: {
      id: 'a2-unit-4-vocab',
      title: 'On Vacation',
      thai: 'ในวันหยุดพักผ่อน',
      emoji: '🏖️',
      level: 'A2',
      words: [
        { word: 'beach',     pos: 'noun',      ipa: '/biːtʃ/',       emoji: '🏖️', thai: 'ชายหาด',          def: 'an area of sand or stones by the sea',                 example: 'We relaxed on the beach all day.',      synonym: 'seaside',  antonym: null },
        { word: 'souvenir',  pos: 'noun',      ipa: '/ˌsuː.vənˈɪər/', emoji: '🎁', thai: 'ของที่ระลึก',     def: 'a thing you buy to remember a trip',                   example: 'I bought a souvenir for my mother.',    synonym: 'keepsake', antonym: null },
        { word: 'sightseeing', pos: 'noun',    ipa: '/ˈsaɪtˌsiː.ɪŋ/', emoji: '📸', thai: 'การเที่ยวชมสถานที่', def: 'visiting interesting places as a tourist',           example: 'We went sightseeing in the old town.',  synonym: null,       antonym: null },
        { word: 'relax',     pos: 'verb',      ipa: '/rɪˈlæks/',     emoji: '😌', thai: 'ผ่อนคลาย',        def: 'to rest and feel calm',                                example: 'I like to relax by the pool.',          synonym: 'unwind',   antonym: 'stress' },
        { word: 'tourist',   pos: 'noun',      ipa: '/ˈtʊə.rɪst/',   emoji: '🧳', thai: 'นักท่องเที่ยว',   def: 'a person who travels to visit places for fun',         example: 'Many tourists visit Phuket.',           synonym: 'traveller', antonym: 'local' },
        { word: 'exciting',  pos: 'adjective', ipa: '/ɪkˈsaɪ.tɪŋ/',  emoji: '🤩', thai: 'น่าตื่นเต้น',     def: 'making you feel happy and interested',                 example: 'The trip was very exciting.',           synonym: 'thrilling', antonym: 'boring' },
        { word: 'weather',   pos: 'noun',      ipa: '/ˈweð.ər/',     emoji: '☀️', thai: 'สภาพอากาศ',       def: 'the condition of the sky and air',                     example: 'The weather is sunny and warm.',        synonym: null,       antonym: null },
        { word: 'trip',      pos: 'noun',      ipa: '/trɪp/',        emoji: '🗺️', thai: 'การเดินทาง / ทริป', def: 'a journey to a place and back',                      example: 'We had a wonderful trip to the islands.', synonym: 'journey',  antonym: null },
      ]
    },

    grammar: {
      id: 'a2-unit-4-grammar',
      title: 'Present Continuous',
      thai: 'ปัจจุบันกาลต่อเนื่อง (Present Continuous)',
      emoji: '📐',
      level: 'A2',
      summary: 'เรียนรู้การบอกสิ่งที่กำลังเกิดขึ้นตอนนี้ เช่น เล่าว่าตอนนี้กำลังทำอะไรในวันหยุด โดยใช้ am/is/are + verb-ing',
      explanation: [
        {
          heading: 'โครงสร้าง: am/is/are + verb-ing',
          body: 'ใช้เมื่อสิ่งนั้นกำลังเกิดขึ้นในขณะที่พูด\n\nI am relaxing on the beach.\nShe is taking photos.\nThey are swimming in the sea.\n\nประธานเลือก am/is/are เหมือน verb to be'
        },
        {
          heading: 'การเติม -ing',
          body: 'ปกติเติม -ing ท้ายคำ: play → playing\n\n⚠️ คำที่ลงท้ายด้วย e ตัด e ทิ้ง: take → taking · come → coming\n⚠️ คำสั้นสระเดี่ยว ซ้ำตัวสะกด: swim → swimming · run → running'
        },
        {
          heading: 'Negatives & Questions',
          body: "ปฏิเสธ: I am not sleeping. · He is not (isn't) working.\nคำถาม: Are you enjoying your holiday? · What is she doing?\n\n⚠️ อย่าลืม verb to be: ❌ I relaxing. ✅ I am relaxing."
        }
      ],
      examples: [
        { en: 'I am relaxing on the beach.',        th: 'ฉันกำลังผ่อนคลายอยู่ที่ชายหาด' },
        { en: 'She is taking photos of the temple.', th: 'เธอกำลังถ่ายรูปวัด' },
        { en: 'They are swimming in the sea.',      th: 'พวกเขากำลังว่ายน้ำในทะเล' },
        { en: 'We are having a wonderful time.',    th: 'พวกเรากำลังสนุกมาก' },
        { en: 'Are you enjoying your holiday?',     th: 'คุณกำลังสนุกกับวันหยุดไหม?' },
        { en: 'It is raining outside.',             th: 'ข้างนอกฝนกำลังตก' },
      ],
      practice: [
        { id: 'a2u4-gr-p1', type: 'fill-in-blank',  prompt: 'I am ___ (relax) on the beach.',               answer: 'relaxing', acceptedVariants: [],       explanation: 'am + relaxing (verb + -ing)' },
        { id: 'a2u4-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct form: She ___ photos now.', options: ['take','takes','is taking','taking'], correctIndex: 2, explanation: 'กำลังเกิดขึ้นตอนนี้ → is taking' },
        { id: 'a2u4-gr-p3', type: 'fill-in-blank',  prompt: 'They are ___ (swim) in the sea.',               answer: 'swimming', acceptedVariants: [],       explanation: 'swim → swimming (ซ้ำตัวสะกด)' },
      ],
      quiz: [
        { id: 'a2u4-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                options: ['I relaxing on the beach.','I am relax on the beach.','I am relaxing on the beach.','I relaxes on the beach.'], correctIndex: 2, explanation: 'am + verb-ing → am relaxing' },
        { id: 'a2u4-gr-q2', type: 'fill-in-blank',  prompt: 'She is ___ (take) photos of the sea.',          answer: 'taking', acceptedVariants: [],         explanation: 'take → taking (ตัด e เติม -ing)' },
        { id: 'a2u4-gr-q3', type: 'multiple-choice', prompt: '"What ___ they doing?" เติมคำใดถูกต้อง?',      options: ['is','am','are','do'], correctIndex: 2, explanation: 'ประธาน they ใช้ are → are doing' },
        { id: 'a2u4-gr-q4', type: 'fill-in-blank',  prompt: 'It ___ (rain) outside now.',                    answer: 'is raining', acceptedVariants: [],     explanation: 'It + is + raining (present continuous)' },
      ]
    },

    listening: {
      id: 'a2-unit-4-listening',
      type: 'Conversation',
      title: 'A Phone Call from the Beach',
      thai: 'โทรศัพท์จากชายหาด',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Fon',  text: 'Hi Beam! I am calling you from Phuket. I am on holiday!',     thai: 'สวัสดีบีม! ฉันโทรหาเธอจากภูเก็ตนะ ฉันกำลังเที่ยววันหยุดอยู่!' },
        { speaker: 'Beam', text: 'Wow, that\'s great! What are you doing right now?',          thai: 'ว้าว เยี่ยมเลย! ตอนนี้เธอกำลังทำอะไรอยู่?' },
        { speaker: 'Fon',  text: 'I am relaxing on the beach. The weather is beautiful today.', thai: 'ฉันกำลังผ่อนคลายอยู่ที่ชายหาด อากาศวันนี้สวยมากเลย' },
        { speaker: 'Beam', text: 'That sounds lovely! Is your family with you?',               thai: 'ฟังดูดีจัง! ครอบครัวเธออยู่ด้วยไหม?' },
        { speaker: 'Fon',  text: 'Yes. My brother is swimming, and my parents are having lunch.', thai: 'อยู่สิ น้องชายฉันกำลังว่ายน้ำ ส่วนพ่อแม่กำลังกินข้าวเที่ยงกัน' },
        { speaker: 'Beam', text: 'Are you going to buy any souvenirs?',                        thai: 'เธอจะซื้อของที่ระลึกไหม?' },
        { speaker: 'Fon',  text: 'Yes, tomorrow we are going sightseeing in the old town.',    thai: 'ซื้อสิ พรุ่งนี้เราจะไปเที่ยวชมเมืองเก่ากัน' },
        { speaker: 'Beam', text: 'Have a great time! Send me some photos.',                    thai: 'ขอให้สนุกนะ! ส่งรูปมาให้ฉันด้วยล่ะ' },
      ],
      questions: [
        { id: 'a2u4-ls-q1', type: 'multiple-choice', prompt: 'Where is Fon on holiday?',            options: ['Bangkok','Phuket','Chiang Mai','Pattaya'], correctIndex: 1, explanation: 'ฝนพูดว่า "I am calling you from Phuket"' },
        { id: 'a2u4-ls-q2', type: 'multiple-choice', prompt: 'What is Fon doing right now?',        options: ['Swimming','Having lunch','Relaxing on the beach','Sightseeing'], correctIndex: 2, explanation: '"I am relaxing on the beach"' },
        { id: 'a2u4-ls-q3', type: 'multiple-choice', prompt: 'What is her brother doing?',          options: ['Swimming','Sleeping','Eating','Shopping'], correctIndex: 0, explanation: '"My brother is swimming"' },
        { id: 'a2u4-ls-q4', type: 'multiple-choice', prompt: 'What will they do tomorrow?',         options: ['Go home','Go sightseeing in the old town','Stay at the hotel','Go to the airport'], correctIndex: 1, explanation: '"tomorrow we are going sightseeing in the old town"' },
      ]
    },

    reading: {
      id: 'a2-unit-4-reading',
      type: 'Story',
      title: 'The Best Vacation',
      thai: 'วันหยุดที่ดีที่สุด',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      dialogue: null,
      paragraphs: [
        'Every year, the Wongsa family goes on vacation together. This year they chose Krabi, a beautiful place in the south of Thailand. They wanted a relaxing holiday near the sea.',
        'On the first day, they went to the beach. The children were building sandcastles while their parents were relaxing under an umbrella. The weather was warm and sunny, and everyone was having a wonderful time.',
        'The next day was the most exciting. They took a boat trip to a small island. They saw colourful fish while they were swimming, and they took many photos. In the afternoon, they bought some souvenirs at a local market.',
        'On the last evening, the family sat together and talked about the trip. "This is the best vacation ever," said the youngest daughter. Everyone agreed. They were already planning their next holiday.',
      ],
      glossary: [
        { word: 'sandcastle', thai: 'ปราสาททราย',        def: 'a small castle made of sand on the beach' },
        { word: 'island',     thai: 'เกาะ',              def: 'a piece of land with water all around it' },
        { word: 'colourful',  thai: 'มีสีสัน',           def: 'having many bright colours' },
        { word: 'agree',      thai: 'เห็นด้วย',          def: 'to have the same opinion as someone' },
      ],
      summary: 'The Wongsa family went on vacation to Krabi. They relaxed on the beach, took a boat trip to an island, went swimming, and bought souvenirs. The youngest daughter said it was the best vacation ever.',
      summaryThai: 'ครอบครัววงศาไปเที่ยววันหยุดที่กระบี่ พวกเขาผ่อนคลายที่ชายหาด นั่งเรือไปเกาะ ว่ายน้ำ และซื้อของที่ระลึก ลูกสาวคนเล็กบอกว่าเป็นวันหยุดที่ดีที่สุด',
      questions: [
        { id: 'a2u4-rd-q1', type: 'multiple-choice', prompt: 'Where did the Wongsa family go this year?', options: ['Phuket','Krabi','Chiang Mai','Bangkok'], correctIndex: 1, explanation: '"they chose Krabi"' },
        { id: 'a2u4-rd-q2', type: 'multiple-choice', prompt: 'What were the children doing on the beach?', options: ['Swimming','Building sandcastles','Sleeping','Shopping'], correctIndex: 1, explanation: '"The children were building sandcastles"' },
        { id: 'a2u4-rd-q3', type: 'multiple-choice', prompt: 'What did they do on the second day?',    options: ['Stayed at the hotel','Took a boat trip to an island','Went home','Visited a museum'], correctIndex: 1, explanation: '"They took a boat trip to a small island"' },
        { id: 'a2u4-rd-q4', type: 'multiple-choice', prompt: 'What did the youngest daughter say?',    options: ['She was bored','It was the best vacation ever','She wanted to go home','The weather was bad'], correctIndex: 1, explanation: '"This is the best vacation ever"' },
      ]
    },

    test: {
      id: 'a2-unit-4-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u4-t-01', type: 'multiple-choice', prompt: '"ของที่ระลึก" ในภาษาอังกฤษคือคำใด?',      options: ['souvenir','tourist','beach','trip'], correctIndex: 0, explanation: '"souvenir" = ของที่ระลึก' },
        { id: 'a2u4-t-02', type: 'multiple-choice', prompt: 'What does "relax" mean?',               options: ['ทำงาน','ผ่อนคลาย','ว่ายน้ำ','เดินทาง'], correctIndex: 1, explanation: '"relax" = ผ่อนคลาย' },
        { id: 'a2u4-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "exciting" คือ ___',         answer: 'boring', acceptedVariants: [],         explanation: '"boring" = น่าเบื่อ ตรงข้ามกับ exciting' },
        { id: 'a2u4-t-04', type: 'multiple-choice', prompt: '"I ___ relaxing on the beach." เติมคำใดถูกต้อง?', options: ['am','is','are','be'], correctIndex: 0, explanation: 'ประธาน I ใช้ am → am relaxing' },
        { id: 'a2u4-t-05', type: 'fill-in-blank',   prompt: 'She is ___ (take) photos right now.',      answer: 'taking', acceptedVariants: [],         explanation: 'take → taking (present continuous)' },
        { id: 'a2u4-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',              options: ['They swimming in the sea.','They are swim in the sea.','They are swimming in the sea.','They is swimming in the sea.'], correctIndex: 2, explanation: 'are + swimming (present continuous)' },
        { id: 'a2u4-t-07', type: 'fill-in-blank',   prompt: 'We ___ (have) a great time now.',          answer: 'are having', acceptedVariants: [],     explanation: 'We + are + having (present continuous)' },
        { id: 'a2u4-t-08', type: 'multiple-choice', prompt: 'In the listening, where is Fon on holiday?', options: ['Krabi','Phuket','Pattaya','Bangkok'], correctIndex: 1, explanation: 'ฝนอยู่ที่ภูเก็ต' },
        { id: 'a2u4-t-09', type: 'multiple-choice', prompt: 'In the listening, what is her brother doing?', options: ['Sleeping','Swimming','Eating','Reading'], correctIndex: 1, explanation: 'น้องชายกำลังว่ายน้ำ' },
        { id: 'a2u4-t-10', type: 'multiple-choice', prompt: 'In the story, where did the family go this year?', options: ['Krabi','Phuket','Chiang Mai','Bangkok'], correctIndex: 0, explanation: 'ครอบครัววงศาไปกระบี่' },
      ]
    }
  }
]
