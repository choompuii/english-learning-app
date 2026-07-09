// A2 Part 2: Units 5-8 (Directions, Phone Call, Shopping, Restaurant)
export const a2p2 = [
  // ============================================================
  // A2 Unit 5: Directions
  // ============================================================
  {
    id: 'a2-unit-5',
    title: 'Unit 5: Directions',
    thai: 'บทที่ 5: การบอกทาง',
    emoji: '🧭',

    vocabulary: {
      id: 'a2-unit-5-vocab',
      title: 'Directions',
      thai: 'การบอกทาง',
      emoji: '🧭',
      level: 'A2',
      words: [
        { word: 'left',       pos: 'noun',        ipa: '/left/',         emoji: '👈', thai: 'ซ้าย',            def: 'the side of your body that is to the west when you face north', example: 'Turn left at the bank.',              synonym: null,       antonym: 'right' },
        { word: 'right',      pos: 'noun',        ipa: '/raɪt/',         emoji: '👉', thai: 'ขวา',             def: 'the side of your body that is to the east when you face north', example: 'The shop is on your right.',          synonym: null,       antonym: 'left' },
        { word: 'straight',   pos: 'adverb',      ipa: '/streɪt/',       emoji: '⬆️', thai: 'ตรงไป',           def: 'without turning or bending',                                   example: 'Go straight for two blocks.',         synonym: null,       antonym: null },
        { word: 'corner',     pos: 'noun',        ipa: '/ˈkɔːrnər/',     emoji: '📐', thai: 'มุม / หัวมุม',    def: 'the place where two streets meet',                             example: 'The café is on the corner.',         synonym: null,       antonym: null },
        { word: 'opposite',   pos: 'preposition', ipa: '/ˈɒpəzɪt/',      emoji: '↔️', thai: 'ตรงข้าม',         def: 'on the other side of something, facing it',                    example: 'The park is opposite the station.',   synonym: 'facing',   antonym: 'beside' },
        { word: 'between',    pos: 'preposition', ipa: '/bɪˈtwiːn/',     emoji: '🔀', thai: 'ระหว่าง',         def: 'in the space that separates two things',                       example: 'The bank is between the shop and the hotel.', synonym: null, antonym: null },
        { word: 'crossroads', pos: 'noun',        ipa: '/ˈkrɒsrəʊdz/',   emoji: '➕', thai: 'สี่แยก',          def: 'a place where two roads cross each other',                     example: 'Turn right at the crossroads.',       synonym: 'junction', antonym: null },
        { word: 'near',       pos: 'preposition', ipa: '/nɪər/',         emoji: '📍', thai: 'ใกล้',            def: 'a short distance away',                                        example: 'Is there a hotel near here?',         synonym: 'close',    antonym: 'far' },
      ]
    },

    grammar: {
      id: 'a2-unit-5-grammar',
      title: 'Prepositions of Place & Imperatives',
      thai: 'คำบุพบทบอกตำแหน่งและประโยคคำสั่ง',
      emoji: '📐',
      level: 'A2',
      summary: 'เรียนรู้คำบุพบทบอกตำแหน่ง (next to, opposite, between) และการใช้ประโยคคำสั่ง (Turn left, Go straight) เพื่อบอกและถามทาง',
      explanation: [
        {
          heading: 'Prepositions of Place',
          body: 'คำบุพบทบอกตำแหน่งใช้บอกว่าสิ่งของอยู่ที่ไหน\n\nnext to = ถัดจาก / ข้าง ๆ\nopposite = ตรงข้าม\nbetween A and B = ระหว่าง A กับ B\non the corner = อยู่หัวมุม\nnear = ใกล้ · far from = ไกลจาก'
        },
        {
          heading: 'Imperatives (ประโยคคำสั่ง)',
          body: 'ใช้บอกทางหรือให้คำแนะนำ โดยขึ้นต้นด้วยกริยาช่องที่ 1 ไม่ต้องมีประธาน\n\nTurn left. = เลี้ยวซ้าย\nGo straight ahead. = ตรงไปข้างหน้า\nTake the first street on the right. = เลี้ยวถนนแรกทางขวา\n\nรูปปฏิเสธเติม Don\'t: Don\'t turn here. = อย่าเลี้ยวตรงนี้'
        },
        {
          heading: 'Asking for directions',
          body: 'วิธีถามทางแบบสุภาพ:\nExcuse me, how do I get to the station? = ขอโทษครับ ไปสถานีอย่างไร?\nIs there a bank near here? = แถวนี้มีธนาคารไหม?\nWhere is the post office? = ไปรษณีย์อยู่ที่ไหน?'
        }
      ],
      examples: [
        { en: 'The bank is next to the school.',        th: 'ธนาคารอยู่ถัดจากโรงเรียน' },
        { en: 'The hotel is opposite the market.',       th: 'โรงแรมอยู่ตรงข้ามตลาด' },
        { en: 'Turn left at the traffic lights.',        th: 'เลี้ยวซ้ายที่สัญญาณไฟจราจร' },
        { en: 'Go straight and take the second right.',  th: 'ตรงไปแล้วเลี้ยวขวาที่สอง' },
        { en: 'The café is between the bank and the shop.', th: 'ร้านกาแฟอยู่ระหว่างธนาคารกับร้านค้า' },
        { en: 'Excuse me, how do I get to the museum?',  th: 'ขอโทษครับ ไปพิพิธภัณฑ์อย่างไร?' },
      ],
      practice: [
        { id: 'a2u5-gr-p1', type: 'fill-in-blank',   prompt: 'Turn ___ at the corner. (opposite of right)',           answer: 'left', acceptedVariants: [],           explanation: 'ตรงข้ามกับ right คือ left' },
        { id: 'a2u5-gr-p2', type: 'multiple-choice',  prompt: 'The park is ___ the station (on the other side, facing it).', options: ['between','opposite','near','on'], correctIndex: 1, explanation: 'opposite = ตรงข้าม' },
        { id: 'a2u5-gr-p3', type: 'fill-in-blank',   prompt: 'The bank is ___ the shop and the hotel.',               answer: 'between', acceptedVariants: [],        explanation: 'between A and B = ระหว่างสองสิ่ง' },
      ],
      quiz: [
        { id: 'a2u5-gr-q1', type: 'multiple-choice',  prompt: 'Choose the correct imperative for giving directions.', options: ['You turning left.','To turn left.','Turn left.','Turned left.'], correctIndex: 2, explanation: 'ประโยคคำสั่งขึ้นต้นด้วยกริยาช่อง 1 ไม่มีประธาน' },
        { id: 'a2u5-gr-q2', type: 'fill-in-blank',   prompt: 'The shop is ___ to the bank (right beside it).',         answer: 'next', acceptedVariants: [],           explanation: 'next to = ถัดจาก / ข้าง ๆ' },
        { id: 'a2u5-gr-q3', type: 'multiple-choice',  prompt: 'Which sentence asks for directions politely?',          options: ['Where station?','Excuse me, how do I get to the station?','Station where you?','You go station?'], correctIndex: 1, explanation: 'ใช้ "Excuse me, how do I get to...?" เพื่อถามทางอย่างสุภาพ' },
        { id: 'a2u5-gr-q4', type: 'fill-in-blank',   prompt: 'Go ___ ahead for 100 metres. (do not turn)',            answer: 'straight', acceptedVariants: [],       explanation: 'straight = ตรงไป ไม่เลี้ยว' },
      ]
    },

    listening: {
      id: 'a2-unit-5-listening',
      type: 'Conversation',
      title: 'Finding the Train Station',
      thai: 'หาสถานีรถไฟ',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Ben',    text: 'Excuse me, how do I get to the train station?',        thai: 'ขอโทษครับ ไปสถานีรถไฟอย่างไรครับ?' },
        { speaker: 'Local',  text: 'Sure. Go straight down this street for two blocks.',   thai: 'ได้ค่ะ ตรงไปตามถนนนี้สองช่วงตึกค่ะ' },
        { speaker: 'Ben',    text: 'Okay, two blocks. And then?',                          thai: 'โอเค สองช่วงตึก แล้วยังไงต่อครับ?' },
        { speaker: 'Local',  text: 'Then turn left at the traffic lights.',                thai: 'จากนั้นเลี้ยวซ้ายที่สัญญาณไฟจราจรค่ะ' },
        { speaker: 'Ben',    text: 'Turn left at the lights. Is it far?',                  thai: 'เลี้ยวซ้ายที่ไฟ ไกลไหมครับ?' },
        { speaker: 'Local',  text: 'No, it is very near. The station is opposite the bank.', thai: 'ไม่ค่ะ ใกล้มาก สถานีอยู่ตรงข้ามธนาคารค่ะ' },
        { speaker: 'Ben',    text: 'Great. Thank you so much for your help!',              thai: 'เยี่ยมเลย ขอบคุณมากที่ช่วยครับ!' },
        { speaker: 'Local',  text: 'You are welcome. Have a good trip!',                   thai: 'ยินดีค่ะ ขอให้เดินทางปลอดภัยนะคะ' },
      ],
      questions: [
        { id: 'a2u5-ls-q1', type: 'multiple-choice', prompt: 'Where does Ben want to go?',                options: ['The bank','The train station','The hotel','The museum'], correctIndex: 1, explanation: 'เบนถามว่า "how do I get to the train station?"' },
        { id: 'a2u5-ls-q2', type: 'multiple-choice', prompt: 'How many blocks does he go straight?',      options: ['One block','Two blocks','Three blocks','Four blocks'],   correctIndex: 1, explanation: 'ผู้หญิงบอกว่า "Go straight ... for two blocks"' },
        { id: 'a2u5-ls-q3', type: 'multiple-choice', prompt: 'Where does he turn left?',                  options: ['At the corner','At the crossroads','At the traffic lights','At the bank'], correctIndex: 2, explanation: 'เธอบอกว่า "turn left at the traffic lights"' },
        { id: 'a2u5-ls-q4', type: 'multiple-choice', prompt: 'The station is opposite what?',             options: ['The bank','The school','The park','The market'],         correctIndex: 0, explanation: 'เธอบอกว่า "The station is opposite the bank"' },
      ]
    },

    reading: {
      id: 'a2-unit-5-reading',
      type: 'Story',
      title: 'A Walk Around the Old Town',
      thai: 'เดินเที่ยวเมืองเก่า',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      paragraphs: [
        'Last Saturday, Ploy visited the old town for the first time. She wanted to see the famous temple, but she did not know the way. So she asked a friendly shopkeeper for directions.',
        'The shopkeeper told her to go straight along Main Street until she reached the crossroads. "Turn right at the crossroads," she said, "and walk past the small park. The temple is on your left, opposite the museum."',
        'Ploy followed the directions carefully. She walked straight, turned right, and passed the green park. After a few minutes, she saw the beautiful golden temple exactly where the shopkeeper said it would be.',
        'Ploy was very happy. The old town was easy to explore because the people were so kind and helpful. She decided to come back next weekend to visit the museum too.',
      ],
      dialogue: null,
      glossary: [
        { word: 'shopkeeper', thai: 'เจ้าของร้าน',      def: 'a person who owns or works in a small shop' },
        { word: 'crossroads', thai: 'สี่แยก',            def: 'a place where two roads cross each other' },
        { word: 'past',       thai: 'ผ่าน / เลย',        def: 'from one side of something to the other side' },
        { word: 'explore',    thai: 'สำรวจ / เที่ยวชม',  def: 'to travel around a place to learn about it' },
      ],
      summary: "Ploy visited the old town to see a famous temple. A kind shopkeeper gave her directions: go straight, turn right at the crossroads, and the temple is opposite the museum. She found it easily.",
      summaryThai: 'พลอยไปเที่ยวเมืองเก่าเพื่อชมวัดที่มีชื่อเสียง เจ้าของร้านใจดีบอกทางให้ ตรงไป เลี้ยวขวาที่สี่แยก แล้ววัดจะอยู่ตรงข้ามพิพิธภัณฑ์ เธอหาเจอได้อย่างง่ายดาย',
      questions: [
        { id: 'a2u5-rd-q1', type: 'multiple-choice', prompt: 'What did Ploy want to see?',                     options: ['A museum','A famous temple','A park','A market'],       correctIndex: 1, explanation: 'เรื่องบอกว่า "She wanted to see the famous temple"' },
        { id: 'a2u5-rd-q2', type: 'multiple-choice', prompt: 'Where did she turn right?',                      options: ['At the park','At the temple','At the crossroads','At the museum'], correctIndex: 2, explanation: '"Turn right at the crossroads"' },
        { id: 'a2u5-rd-q3', type: 'multiple-choice', prompt: 'The temple is opposite what?',                   options: ['The park','The museum','The shop','The station'],       correctIndex: 1, explanation: '"The temple is on your left, opposite the museum"' },
        { id: 'a2u5-rd-q4', type: 'multiple-choice', prompt: 'Why was the old town easy to explore?',          options: ['It was small','The people were kind and helpful','There were maps everywhere','It had few streets'], correctIndex: 1, explanation: '"the people were so kind and helpful"' },
      ]
    },

    test: {
      id: 'a2-unit-5-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u5-t-01', type: 'multiple-choice', prompt: '"เลี้ยวซ้าย" ในภาษาอังกฤษคือคำใด?',                options: ['Turn right','Turn left','Go straight','Stop here'],                 correctIndex: 1, explanation: 'left = ซ้าย, turn left = เลี้ยวซ้าย' },
        { id: 'a2u5-t-02', type: 'multiple-choice', prompt: 'What does "opposite" mean?',                       options: ['ถัดจาก','ระหว่าง','ตรงข้าม','ใกล้'],                                 correctIndex: 2, explanation: 'opposite = ตรงข้าม' },
        { id: 'a2u5-t-03', type: 'fill-in-blank',   prompt: 'The bank is ___ the shop and the hotel.',           answer: 'between', acceptedVariants: [],                                       explanation: 'between A and B = ระหว่างสองสิ่ง' },
        { id: 'a2u5-t-04', type: 'multiple-choice', prompt: 'Choose the correct imperative.',                    options: ['You go straight.','Go straight.','Going straight.','To go straight.'], correctIndex: 1, explanation: 'ประโยคคำสั่งขึ้นต้นด้วยกริยาช่อง 1' },
        { id: 'a2u5-t-05', type: 'fill-in-blank',   prompt: 'The café is ___ to the bank (right beside it).',     answer: 'next', acceptedVariants: [],                                          explanation: 'next to = ถัดจาก / ข้าง ๆ' },
        { id: 'a2u5-t-06', type: 'multiple-choice', prompt: 'Which sentence asks for directions politely?',      options: ['Where is station?','Excuse me, how do I get to the station?','Go station now.','Station is far?'], correctIndex: 1, explanation: 'ใช้ "Excuse me, how do I get to...?"' },
        { id: 'a2u5-t-07', type: 'fill-in-blank',   prompt: 'A place where two roads cross is a ___.',            answer: 'crossroads', acceptedVariants: ['crossroad','junction'],              explanation: 'crossroads = สี่แยก' },
        { id: 'a2u5-t-08', type: 'multiple-choice', prompt: 'In the listening, how many blocks does Ben go straight?', options: ['One','Two','Three','Four'],                                    correctIndex: 1, explanation: 'เธอบอกว่า "for two blocks"' },
        { id: 'a2u5-t-09', type: 'multiple-choice', prompt: 'In the listening, the station is opposite what?',    options: ['The bank','The park','The school','The market'],                    correctIndex: 0, explanation: '"The station is opposite the bank"' },
        { id: 'a2u5-t-10', type: 'multiple-choice', prompt: 'In the reading, where did Ploy turn right?',         options: ['At the park','At the crossroads','At the temple','At the museum'],   correctIndex: 1, explanation: '"Turn right at the crossroads"' },
      ]
    }
  },

  // ============================================================
  // A2 Unit 6: Phone Call
  // ============================================================
  {
    id: 'a2-unit-6',
    title: 'Unit 6: Phone Call',
    thai: 'บทที่ 6: การโทรศัพท์',
    emoji: '📞',

    vocabulary: {
      id: 'a2-unit-6-vocab',
      title: 'Phone Call',
      thai: 'การโทรศัพท์',
      emoji: '📞',
      level: 'A2',
      words: [
        { word: 'call',      pos: 'verb',        ipa: '/kɔːl/',        emoji: '📞', thai: 'โทร',              def: 'to telephone someone',                                    example: 'I will call you tonight.',            synonym: 'phone',    antonym: null },
        { word: 'answer',    pos: 'verb',        ipa: '/ˈɑːnsər/',     emoji: '✅', thai: 'รับสาย / ตอบ',      def: 'to pick up the phone when it rings',                      example: 'She did not answer the phone.',       synonym: null,       antonym: null },
        { word: 'message',   pos: 'noun',        ipa: '/ˈmesɪdʒ/',     emoji: '💬', thai: 'ข้อความ',           def: 'a piece of information you leave for someone',            example: 'Can I leave a message?',              synonym: 'note',     antonym: null },
        { word: 'hold on',   pos: 'phrase',      ipa: '/ˌhəʊld ˈɒn/',  emoji: '⏸️', thai: 'รอสักครู่ / ถือสายรอ', def: 'to wait for a short time on the phone',                 example: 'Hold on, I will get her.',            synonym: 'wait',     antonym: null },
        { word: 'speak',     pos: 'verb',        ipa: '/spiːk/',       emoji: '🗣️', thai: 'พูด (คุย)',         def: 'to talk to someone, especially on the phone',             example: 'Can I speak to Mr Lee, please?',      synonym: 'talk',     antonym: null },
        { word: 'wrong',     pos: 'adjective',   ipa: '/rɒŋ/',         emoji: '❌', thai: 'ผิด',              def: 'not correct',                                             example: 'Sorry, you have the wrong number.',   synonym: 'incorrect', antonym: 'right' },
        { word: 'busy',      pos: 'adjective',   ipa: '/ˈbɪzi/',       emoji: '🔴', thai: 'สายไม่ว่าง / ยุ่ง', def: 'the line is being used, or a person has a lot to do',     example: 'The line is busy right now.',         synonym: 'engaged',  antonym: 'free' },
        { word: 'back',      pos: 'adverb',      ipa: '/bæk/',         emoji: '🔁', thai: 'กลับ (โทรกลับ)',    def: 'in return or in reply',                                   example: 'I will call you back later.',         synonym: null,       antonym: null },
      ]
    },

    grammar: {
      id: 'a2-unit-6-grammar',
      title: 'Future with "will"',
      thai: 'อนาคตกาลด้วย will',
      emoji: '📐',
      level: 'A2',
      summary: 'เรียนรู้การใช้ "will" เพื่อพูดถึงการตัดสินใจทันที คำสัญญา และการเสนอความช่วยเหลือ ซึ่งใช้บ่อยในการคุยโทรศัพท์',
      explanation: [
        {
          heading: 'Form of "will"',
          body: 'will + กริยาช่องที่ 1 (ไม่ผันตามประธาน)\n\nI will call. / She will call. / They will call.\nรูปย่อ: I\'ll · she\'ll · we\'ll · they\'ll\nรูปปฏิเสธ: will not = won\'t → I won\'t forget.'
        },
        {
          heading: 'When to use "will"',
          body: '1) การตัดสินใจทันที: The phone is ringing. I\'ll answer it. = ฉันจะรับเอง\n2) คำสัญญา: I\'ll call you back. = ฉันจะโทรกลับ\n3) การเสนอช่วยเหลือ: I\'ll take a message. = ฉันจะรับข้อความให้'
        },
        {
          heading: 'Questions with "will"',
          body: 'สร้างคำถามโดยเอา will ขึ้นหน้าประธาน\nWill you call me later? = คุณจะโทรหาฉันทีหลังไหม?\nShall I take a message? = ให้ฉันรับข้อความไหม? (สุภาพ ใช้ Shall I ...? เสนอช่วยเหลือ)'
        }
      ],
      examples: [
        { en: "I'll call you back in five minutes.",     th: 'ฉันจะโทรกลับใน 5 นาที' },
        { en: 'Can I take a message? I will tell her.',  th: 'ให้ฉันรับข้อความไหม? ฉันจะบอกเธอให้' },
        { en: "He won't be home until six.",             th: 'เขาจะไม่อยู่บ้านจนกว่าจะหกโมง' },
        { en: 'Will you speak to the manager?',          th: 'คุณจะคุยกับผู้จัดการไหม?' },
        { en: "Hold on, I'll get her for you.",          th: 'รอสักครู่ ฉันจะไปตามเธอให้' },
        { en: 'I promise I will not forget to call.',    th: 'ฉันสัญญาว่าจะไม่ลืมโทร' },
      ],
      practice: [
        { id: 'a2u6-gr-p1', type: 'fill-in-blank',   prompt: 'The phone is ringing. I ___ answer it. (immediate decision)', answer: 'will', acceptedVariants: ["'ll"],     explanation: 'ใช้ will กับการตัดสินใจทันที' },
        { id: 'a2u6-gr-p2', type: 'multiple-choice',  prompt: 'Choose the correct form: She ___ call you back.',        options: ['will','wills','willing','to will'], correctIndex: 0, explanation: 'will + กริยาช่อง 1 ไม่ผันตามประธาน' },
        { id: 'a2u6-gr-p3', type: 'fill-in-blank',   prompt: 'I promise I ___ forget. (negative of will)',            answer: "won't", acceptedVariants: ['will not'], explanation: 'will not = won\'t' },
      ],
      quiz: [
        { id: 'a2u6-gr-q1', type: 'multiple-choice',  prompt: 'Which sentence is correct?',                            options: ['I will to call you.','I will call you.','I will calling you.','I will called you.'], correctIndex: 1, explanation: 'will + กริยาช่อง 1 (call)' },
        { id: 'a2u6-gr-q2', type: 'fill-in-blank',   prompt: 'Hold on, I ___ get her for you. (offer to help)',        answer: 'will', acceptedVariants: ["'ll"],     explanation: 'ใช้ will เสนอความช่วยเหลือ' },
        { id: 'a2u6-gr-q3', type: 'multiple-choice',  prompt: 'Choose the correct question form.',                     options: ['You will call me?','Will you call me?','Will call you me?','Call you will me?'], correctIndex: 1, explanation: 'คำถาม will เอา will ขึ้นหน้าประธาน' },
        { id: 'a2u6-gr-q4', type: 'fill-in-blank',   prompt: 'He ___ be home until six. (negative short form)',        answer: "won't", acceptedVariants: ['will not'], explanation: 'won\'t = will not' },
      ]
    },

    listening: {
      id: 'a2-unit-6-listening',
      type: 'Conversation',
      title: 'Taking a Message',
      thai: 'รับฝากข้อความ',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Anna',      text: 'Hello, this is Anna speaking. Can I speak to Mr Kim, please?', thai: 'สวัสดีค่ะ แอนนาพูดสายค่ะ ขอสายคุณคิมได้ไหมคะ?' },
        { speaker: 'Secretary', text: 'I am sorry, Mr Kim is in a meeting right now.',                thai: 'ขอโทษค่ะ ตอนนี้คุณคิมกำลังประชุมอยู่ค่ะ' },
        { speaker: 'Anna',      text: 'Oh, I see. When will he be free?',                             thai: 'อ๋อ เข้าใจแล้วค่ะ เขาจะว่างเมื่อไหร่คะ?' },
        { speaker: 'Secretary', text: 'He will be free after three o\'clock. Can I take a message?',   thai: 'เขาจะว่างหลังบ่ายสามค่ะ ให้รับข้อความไหมคะ?' },
        { speaker: 'Anna',      text: 'Yes, please. Please tell him to call me back.',                thai: 'ได้ค่ะ ช่วยบอกเขาให้โทรกลับหาฉันด้วยนะคะ' },
        { speaker: 'Secretary', text: 'Of course. What is your phone number?',                        thai: 'ได้ค่ะ ขอเบอร์โทรของคุณด้วยค่ะ' },
        { speaker: 'Anna',      text: 'It is 081-234-5678. Thank you very much.',                     thai: 'เบอร์ 081-234-5678 ค่ะ ขอบคุณมากค่ะ' },
        { speaker: 'Secretary', text: 'You are welcome. I will give him the message.',                thai: 'ยินดีค่ะ ฉันจะแจ้งข้อความให้เขาค่ะ' },
      ],
      questions: [
        { id: 'a2u6-ls-q1', type: 'multiple-choice', prompt: 'Who does Anna want to speak to?',           options: ['The secretary','Mr Kim','Mr Lee','The manager'],   correctIndex: 1, explanation: 'แอนนาพูดว่า "Can I speak to Mr Kim, please?"' },
        { id: 'a2u6-ls-q2', type: 'multiple-choice', prompt: 'Why can Mr Kim not answer?',                 options: ['He is at lunch','He is in a meeting','He is out of the office','He is sick'], correctIndex: 1, explanation: 'เลขาบอกว่า "Mr Kim is in a meeting"' },
        { id: 'a2u6-ls-q3', type: 'multiple-choice', prompt: 'When will Mr Kim be free?',                  options: ['After one o\'clock','After two o\'clock','After three o\'clock','After four o\'clock'], correctIndex: 2, explanation: '"He will be free after three o\'clock"' },
        { id: 'a2u6-ls-q4', type: 'multiple-choice', prompt: 'What does Anna ask the secretary to do?',    options: ['Send an email','Tell him to call her back','Book a meeting','Cancel the call'], correctIndex: 1, explanation: '"Please tell him to call me back"' },
      ]
    },

    reading: {
      id: 'a2-unit-6-reading',
      type: 'Story',
      title: 'The Important Phone Call',
      thai: 'สายโทรศัพท์สำคัญ',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      paragraphs: [
        'Somchai was waiting for an important phone call. A company wanted to offer him a new job, and they said they would call on Monday morning. He kept his phone close all day.',
        'At ten o\'clock, his phone rang. He answered quickly, but it was the wrong number. A woman was looking for a pizza restaurant. Somchai said politely, "Sorry, you have the wrong number," and hung up.',
        'An hour later, the phone rang again. This time it was the company. The manager said, "Hello, is this Somchai? We are happy to offer you the job. Can you start next month?" Somchai was so excited that he almost dropped the phone.',
        'He said, "Yes, thank you! I will start next month." After the call, he told his family the good news. Everyone was very proud of him. It was the best phone call of his life.',
      ],
      dialogue: null,
      glossary: [
        { word: 'offer',       thai: 'เสนอ / มอบให้',    def: 'to say you are willing to give someone something, such as a job' },
        { word: 'wrong number', thai: 'โทรผิดเบอร์',      def: 'when you call the wrong telephone number by mistake' },
        { word: 'hang up',     thai: 'วางสาย',            def: 'to end a telephone call' },
        { word: 'proud',       thai: 'ภูมิใจ',            def: 'feeling pleased about something good you or someone else did' },
      ],
      summary: "Somchai was waiting for a job offer by phone. First he got a wrong number, but later the company called and offered him the job. He accepted happily and his family was proud.",
      summaryThai: 'สมชายรอสายโทรศัพท์เสนองาน ตอนแรกมีคนโทรผิดเบอร์ แต่ต่อมาบริษัทโทรมาเสนองานให้เขา เขาตอบรับอย่างดีใจและครอบครัวก็ภูมิใจในตัวเขา',
      questions: [
        { id: 'a2u6-rd-q1', type: 'multiple-choice', prompt: 'What was Somchai waiting for?',                  options: ['A pizza delivery','An important phone call','A letter','A visitor'],  correctIndex: 1, explanation: '"Somchai was waiting for an important phone call"' },
        { id: 'a2u6-rd-q2', type: 'multiple-choice', prompt: 'Who was the first call from?',                    options: ['The company','His family','A wrong number','His friend'],             correctIndex: 2, explanation: '"it was the wrong number"' },
        { id: 'a2u6-rd-q3', type: 'multiple-choice', prompt: 'What did the company offer him?',                 options: ['A holiday','A pizza','A new job','A meeting'],                        correctIndex: 2, explanation: '"We are happy to offer you the job"' },
        { id: 'a2u6-rd-q4', type: 'multiple-choice', prompt: 'When will Somchai start the job?',                options: ['Next week','Next month','Next year','Tomorrow'],                      correctIndex: 1, explanation: '"I will start next month"' },
      ]
    },

    test: {
      id: 'a2-unit-6-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u6-t-01', type: 'multiple-choice', prompt: '"รับสาย / ตอบ" ในภาษาอังกฤษคือคำใด?',              options: ['call','answer','message','hold'],                                   correctIndex: 1, explanation: 'answer = รับสาย' },
        { id: 'a2u6-t-02', type: 'multiple-choice', prompt: 'What does "wrong number" mean?',                    options: ['เบอร์ว่าง','โทรผิดเบอร์','ฝากข้อความ','สายไม่ว่าง'],                 correctIndex: 1, explanation: 'wrong number = โทรผิดเบอร์' },
        { id: 'a2u6-t-03', type: 'fill-in-blank',   prompt: 'Can I leave a ___? (ข้อความ)',                       answer: 'message', acceptedVariants: [],                                       explanation: 'message = ข้อความ' },
        { id: 'a2u6-t-04', type: 'multiple-choice', prompt: 'Which sentence is correct?',                        options: ['I will to call you.','I will call you.','I will calling you.','I willing call you.'], correctIndex: 1, explanation: 'will + กริยาช่อง 1' },
        { id: 'a2u6-t-05', type: 'fill-in-blank',   prompt: 'The phone is ringing. I ___ answer it.',             answer: 'will', acceptedVariants: ["'ll"],                                     explanation: 'ใช้ will กับการตัดสินใจทันที' },
        { id: 'a2u6-t-06', type: 'multiple-choice', prompt: 'How do you ask to talk to someone on the phone?',   options: ['Can I speak to Mr Kim, please?','You are Mr Kim?','Mr Kim is where?','Speak Mr Kim now.'], correctIndex: 0, explanation: 'ใช้ "Can I speak to ..., please?"' },
        { id: 'a2u6-t-07', type: 'fill-in-blank',   prompt: 'He ___ be home until six. (negative short form)',    answer: "won't", acceptedVariants: ['will not'],                               explanation: 'won\'t = will not' },
        { id: 'a2u6-t-08', type: 'multiple-choice', prompt: 'In the listening, why can Mr Kim not answer?',      options: ['He is sick','He is in a meeting','He is out','He is at lunch'],       correctIndex: 1, explanation: '"Mr Kim is in a meeting"' },
        { id: 'a2u6-t-09', type: 'multiple-choice', prompt: 'In the listening, when will Mr Kim be free?',       options: ['After two','After three o\'clock','After four','At noon'],             correctIndex: 1, explanation: '"free after three o\'clock"' },
        { id: 'a2u6-t-10', type: 'multiple-choice', prompt: 'In the reading, what did the company offer Somchai?', options: ['A holiday','A new job','A car','A pizza'],                           correctIndex: 1, explanation: '"We are happy to offer you the job"' },
      ]
    }
  },

  // ============================================================
  // A2 Unit 7: Shopping
  // ============================================================
  {
    id: 'a2-unit-7',
    title: 'Unit 7: Shopping',
    thai: 'บทที่ 7: การช้อปปิ้ง',
    emoji: '🛍️',

    vocabulary: {
      id: 'a2-unit-7-vocab',
      title: 'Shopping',
      thai: 'การช้อปปิ้ง',
      emoji: '🛍️',
      level: 'A2',
      words: [
        { word: 'price',     pos: 'noun',        ipa: '/praɪs/',       emoji: '💲', thai: 'ราคา',             def: 'the amount of money you pay for something',              example: 'What is the price of this shirt?',    synonym: 'cost',     antonym: null },
        { word: 'cheap',     pos: 'adjective',   ipa: '/tʃiːp/',       emoji: '🪙', thai: 'ถูก (ราคา)',        def: 'not costing a lot of money',                             example: 'This bag is very cheap.',             synonym: 'inexpensive', antonym: 'expensive' },
        { word: 'expensive', pos: 'adjective',   ipa: '/ɪkˈspensɪv/',  emoji: '💰', thai: 'แพง',              def: 'costing a lot of money',                                 example: 'That watch is too expensive.',        synonym: 'costly',   antonym: 'cheap' },
        { word: 'size',      pos: 'noun',        ipa: '/saɪz/',        emoji: '📏', thai: 'ขนาด / ไซซ์',       def: 'how big or small something is',                          example: 'Do you have this in a bigger size?',  synonym: null,       antonym: null },
        { word: 'try on',    pos: 'phrase',      ipa: '/ˈtraɪ ɒn/',    emoji: '👕', thai: 'ลองใส่',            def: 'to put on clothes to see if they fit',                   example: 'Can I try on this jacket?',           synonym: null,       antonym: null },
        { word: 'discount',  pos: 'noun',        ipa: '/ˈdɪskaʊnt/',   emoji: '🏷️', thai: 'ส่วนลด',           def: 'money taken off the normal price',                       example: 'They gave me a ten percent discount.', synonym: 'reduction', antonym: null },
        { word: 'receipt',   pos: 'noun',        ipa: '/rɪˈsiːt/',     emoji: '🧾', thai: 'ใบเสร็จ',           def: 'a paper that shows you paid for something',              example: 'Please keep your receipt.',           synonym: null,       antonym: null },
        { word: 'change',    pos: 'noun',        ipa: '/tʃeɪndʒ/',     emoji: '💵', thai: 'เงินทอน',           def: 'the money you get back when you pay too much',           example: 'Here is your change, twenty baht.',   synonym: null,       antonym: null },
      ]
    },

    grammar: {
      id: 'a2-unit-7-grammar',
      title: 'Comparatives & Superlatives',
      thai: 'การเปรียบเทียบขั้นกว่าและขั้นสุด',
      emoji: '📐',
      level: 'A2',
      summary: 'เรียนรู้การเปรียบเทียบคำคุณศัพท์ขั้นกว่า (cheaper, more expensive) และขั้นสุด (the cheapest, the most expensive) เพื่อเปรียบเทียบสินค้าเวลาช้อปปิ้ง',
      explanation: [
        {
          heading: 'Short adjectives (คำสั้น)',
          body: 'คำคุณศัพท์พยางค์เดียว เติม -er (ขั้นกว่า) และ -est (ขั้นสุด)\n\ncheap → cheaper → the cheapest\nbig → bigger → the biggest (ตัวสะกดซ้ำ)\nคำลงท้าย -y เปลี่ยน y เป็น i: easy → easier → the easiest'
        },
        {
          heading: 'Long adjectives (คำยาว)',
          body: 'คำคุณศัพท์ตั้งแต่ 2-3 พยางค์ ใช้ more (ขั้นกว่า) และ the most (ขั้นสุด)\n\nexpensive → more expensive → the most expensive\nbeautiful → more beautiful → the most beautiful'
        },
        {
          heading: 'Irregular & "than"',
          body: 'คำพิเศษ: good → better → the best · bad → worse → the worst\n\nใช้ than เมื่อเปรียบเทียบสองสิ่ง:\nThis shirt is cheaper than that one. = เสื้อตัวนี้ถูกกว่าตัวนั้น'
        }
      ],
      examples: [
        { en: 'This bag is cheaper than that one.',            th: 'กระเป๋าใบนี้ถูกกว่าใบนั้น' },
        { en: 'The red dress is more expensive than the blue dress.', th: 'ชุดสีแดงแพงกว่าชุดสีน้ำเงิน' },
        { en: 'This is the cheapest shop in the mall.',        th: 'นี่คือร้านที่ถูกที่สุดในห้าง' },
        { en: 'That is the most expensive watch here.',        th: 'นั่นคือนาฬิกาที่แพงที่สุดที่นี่' },
        { en: 'These shoes are better than my old ones.',      th: 'รองเท้าคู่นี้ดีกว่าคู่เก่าของฉัน' },
        { en: 'It is the biggest size they have.',             th: 'มันเป็นไซซ์ที่ใหญ่ที่สุดที่พวกเขามี' },
      ],
      practice: [
        { id: 'a2u7-gr-p1', type: 'fill-in-blank',   prompt: 'This shirt is ___ than that one. (cheap)',              answer: 'cheaper', acceptedVariants: [],       explanation: 'คำสั้น cheap เติม -er = cheaper' },
        { id: 'a2u7-gr-p2', type: 'multiple-choice',  prompt: 'Choose the correct form: That car is ___ than this one.', options: ['expensiver','more expensive','most expensive','expensivest'], correctIndex: 1, explanation: 'คำยาว expensive ใช้ more' },
        { id: 'a2u7-gr-p3', type: 'fill-in-blank',   prompt: 'This is the ___ shop in town. (cheap, superlative)',     answer: 'cheapest', acceptedVariants: [],      explanation: 'ขั้นสุดของคำสั้นเติม -est = cheapest' },
      ],
      quiz: [
        { id: 'a2u7-gr-q1', type: 'multiple-choice',  prompt: 'Choose the correct comparative.',                       options: ['This bag is more cheap.','This bag is cheaper.','This bag is cheapest.','This bag is cheap than.'], correctIndex: 1, explanation: 'cheap เป็นคำสั้น → cheaper' },
        { id: 'a2u7-gr-q2', type: 'fill-in-blank',   prompt: 'That watch is the ___ (expensive) in the shop.',          answer: 'most expensive', acceptedVariants: [], explanation: 'ขั้นสุดของคำยาวใช้ the most' },
        { id: 'a2u7-gr-q3', type: 'multiple-choice',  prompt: 'What is the superlative of "good"?',                    options: ['gooder','goodest','more good','the best'], correctIndex: 3, explanation: 'good เป็นคำพิเศษ → the best' },
        { id: 'a2u7-gr-q4', type: 'fill-in-blank',   prompt: 'These shoes are cheaper ___ those ones.',               answer: 'than', acceptedVariants: [],          explanation: 'ใช้ than เมื่อเปรียบเทียบสองสิ่ง' },
      ]
    },

    listening: {
      id: 'a2-unit-7-listening',
      type: 'Conversation',
      title: 'Buying a Pair of Jeans',
      thai: 'ซื้อกางเกงยีนส์',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Customer',  text: 'Excuse me, how much are these jeans?',                thai: 'ขอโทษค่ะ กางเกงยีนส์ตัวนี้ราคาเท่าไหร่คะ?' },
        { speaker: 'Assistant', text: 'They are 1,200 baht. Would you like to try them on?', thai: 'ราคา 1,200 บาทค่ะ อยากลองใส่ดูไหมคะ?' },
        { speaker: 'Customer',  text: 'Yes, please. Do you have them in a smaller size?',    thai: 'ค่ะ ขอลองหน่อย มีไซซ์เล็กกว่านี้ไหมคะ?' },
        { speaker: 'Assistant', text: 'Of course. Here is a size medium. The fitting room is over there.', thai: 'ได้ค่ะ นี่ไซซ์กลางค่ะ ห้องลองอยู่ตรงนั้นค่ะ' },
        { speaker: 'Customer',  text: 'These fit perfectly. But 1,200 baht is a bit expensive.', thai: 'พอดีเลยค่ะ แต่ 1,200 บาทแพงไปหน่อยค่ะ' },
        { speaker: 'Assistant', text: 'Today we have a discount. You can get them for 1,000 baht.', thai: 'วันนี้มีส่วนลดค่ะ ได้ในราคา 1,000 บาทค่ะ' },
        { speaker: 'Customer',  text: 'That is much cheaper. I will take them.',              thai: 'ถูกกว่าเยอะเลยค่ะ ฉันเอาค่ะ' },
        { speaker: 'Assistant', text: 'Great. Here is your receipt and your change.',         thai: 'เยี่ยมค่ะ นี่ใบเสร็จและเงินทอนของคุณค่ะ' },
      ],
      questions: [
        { id: 'a2u7-ls-q1', type: 'multiple-choice', prompt: 'What is the customer buying?',              options: ['A shirt','A pair of jeans','Shoes','A jacket'],       correctIndex: 1, explanation: 'ลูกค้าถามราคา "these jeans"' },
        { id: 'a2u7-ls-q2', type: 'multiple-choice', prompt: 'What is the first price of the jeans?',     options: ['1,000 baht','1,100 baht','1,200 baht','1,500 baht'],   correctIndex: 2, explanation: 'พนักงานบอกว่า "They are 1,200 baht"' },
        { id: 'a2u7-ls-q3', type: 'multiple-choice', prompt: 'What does the customer ask for?',           options: ['A bigger size','A smaller size','A different colour','A different shop'], correctIndex: 1, explanation: '"Do you have them in a smaller size?"' },
        { id: 'a2u7-ls-q4', type: 'multiple-choice', prompt: 'How much does she pay after the discount?', options: ['800 baht','900 baht','1,000 baht','1,200 baht'],       correctIndex: 2, explanation: '"You can get them for 1,000 baht"' },
      ]
    },

    reading: {
      id: 'a2-unit-7-reading',
      type: 'Story',
      title: 'A Day at the Market',
      thai: 'วันหนึ่งที่ตลาด',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      paragraphs: [
        'On Sunday morning, Nid went to the weekend market with her mother. The market was big and busy, with hundreds of shops selling clothes, food, and gifts. Nid loved looking at everything.',
        'She wanted to buy a new dress. At the first shop, a beautiful dress cost 600 baht. At the second shop, a similar dress was only 450 baht. It was cheaper, so Nid decided to look at more shops before buying.',
        'At the third shop, she found the most beautiful dress of all. The price was 500 baht, but the seller gave her a discount. "You can have it for 400 baht," he said with a smile. It was the best price in the whole market.',
        'Nid was very happy. She paid the seller, and he gave her a receipt and some change. On the way home, she told her mother that shopping at the market was more fun than shopping at the mall.',
      ],
      dialogue: null,
      glossary: [
        { word: 'weekend market', thai: 'ตลาดนัดสุดสัปดาห์', def: 'a market that is open on Saturdays and Sundays' },
        { word: 'similar',        thai: 'คล้ายกัน',           def: 'almost the same but not exactly' },
        { word: 'seller',         thai: 'ผู้ขาย / คนขาย',     def: 'a person who sells things' },
        { word: 'discount',       thai: 'ส่วนลด',             def: 'money taken off the normal price' },
      ],
      summary: "Nid went to the weekend market with her mother to buy a dress. She compared prices at three shops and found the best dress for 400 baht after a discount. She thought the market was more fun than the mall.",
      summaryThai: 'นิดไปตลาดนัดสุดสัปดาห์กับแม่เพื่อซื้อชุด เธอเปรียบเทียบราคาที่สามร้านและได้ชุดที่ดีที่สุดในราคา 400 บาทหลังได้ส่วนลด เธอคิดว่าตลาดสนุกกว่าห้าง',
      questions: [
        { id: 'a2u7-rd-q1', type: 'multiple-choice', prompt: 'Where did Nid go on Sunday?',                    options: ['The mall','The weekend market','The supermarket','The station'],     correctIndex: 1, explanation: '"Nid went to the weekend market"' },
        { id: 'a2u7-rd-q2', type: 'multiple-choice', prompt: 'What did she want to buy?',                      options: ['Shoes','A bag','A new dress','A gift'],                              correctIndex: 2, explanation: '"She wanted to buy a new dress"' },
        { id: 'a2u7-rd-q3', type: 'multiple-choice', prompt: 'How much did she pay for the dress in the end?', options: ['600 baht','500 baht','450 baht','400 baht'],                          correctIndex: 3, explanation: '"You can have it for 400 baht"' },
        { id: 'a2u7-rd-q4', type: 'multiple-choice', prompt: 'What did Nid think about the market?',           options: ['It was boring','It was more fun than the mall','It was too expensive','It was too small'], correctIndex: 1, explanation: '"shopping at the market was more fun than shopping at the mall"' },
      ]
    },

    test: {
      id: 'a2-unit-7-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u7-t-01', type: 'multiple-choice', prompt: '"แพง" ในภาษาอังกฤษคือคำใด?',                        options: ['cheap','expensive','discount','price'],                             correctIndex: 1, explanation: 'expensive = แพง' },
        { id: 'a2u7-t-02', type: 'multiple-choice', prompt: 'What does "discount" mean?',                        options: ['ราคา','เงินทอน','ส่วนลด','ใบเสร็จ'],                                 correctIndex: 2, explanation: 'discount = ส่วนลด' },
        { id: 'a2u7-t-03', type: 'fill-in-blank',   prompt: 'Can I ___ on this jacket? (ลองใส่)',                 answer: 'try', acceptedVariants: [],                                           explanation: 'try on = ลองใส่' },
        { id: 'a2u7-t-04', type: 'multiple-choice', prompt: 'Choose the correct comparative: This bag is ___ than that one.', options: ['cheaper','more cheap','cheapest','cheap'],                  correctIndex: 0, explanation: 'cheap เป็นคำสั้น → cheaper' },
        { id: 'a2u7-t-05', type: 'fill-in-blank',   prompt: 'That is the ___ (expensive) watch in the shop.',      answer: 'most expensive', acceptedVariants: [],                                explanation: 'ขั้นสุดของคำยาวใช้ the most expensive' },
        { id: 'a2u7-t-06', type: 'multiple-choice', prompt: 'What is the superlative of "good"?',                 options: ['gooder','goodest','the best','more good'],                          correctIndex: 2, explanation: 'good → the best' },
        { id: 'a2u7-t-07', type: 'fill-in-blank',   prompt: 'This shirt is cheaper ___ that one.',                answer: 'than', acceptedVariants: [],                                          explanation: 'ใช้ than เปรียบเทียบสองสิ่ง' },
        { id: 'a2u7-t-08', type: 'multiple-choice', prompt: 'In the listening, what is the first price of the jeans?', options: ['1,000 baht','1,200 baht','1,500 baht','900 baht'],               correctIndex: 1, explanation: '"They are 1,200 baht"' },
        { id: 'a2u7-t-09', type: 'multiple-choice', prompt: 'In the listening, how much after the discount?',     options: ['800 baht','900 baht','1,000 baht','1,100 baht'],                     correctIndex: 2, explanation: '"You can get them for 1,000 baht"' },
        { id: 'a2u7-t-10', type: 'multiple-choice', prompt: 'In the reading, how much did Nid pay for the dress?', options: ['600 baht','500 baht','450 baht','400 baht'],                         correctIndex: 3, explanation: '"You can have it for 400 baht"' },
      ]
    }
  },

  // ============================================================
  // A2 Unit 8: Restaurant
  // ============================================================
  {
    id: 'a2-unit-8',
    title: 'Unit 8: Restaurant',
    thai: 'บทที่ 8: ร้านอาหาร',
    emoji: '🍽️',

    vocabulary: {
      id: 'a2-unit-8-vocab',
      title: 'Restaurant',
      thai: 'ร้านอาหาร',
      emoji: '🍽️',
      level: 'A2',
      words: [
        { word: 'menu',      pos: 'noun',        ipa: '/ˈmenjuː/',     emoji: '📋', thai: 'เมนู / รายการอาหาร', def: 'a list of the food you can order in a restaurant',       example: 'Can I see the menu, please?',         synonym: null,       antonym: null },
        { word: 'order',     pos: 'verb',        ipa: '/ˈɔːrdər/',     emoji: '📝', thai: 'สั่ง (อาหาร)',      def: 'to ask for food or drink in a restaurant',               example: 'I would like to order now.',          synonym: null,       antonym: null },
        { word: 'waiter',    pos: 'noun',        ipa: '/ˈweɪtər/',     emoji: '🧑‍🍳', thai: 'พนักงานเสิร์ฟ',   def: 'a person who serves food in a restaurant',               example: 'The waiter brought our food.',        synonym: 'server',   antonym: null },
        { word: 'dish',      pos: 'noun',        ipa: '/dɪʃ/',         emoji: '🍲', thai: 'จาน / เมนูอาหาร',   def: 'food prepared in a particular way',                      example: 'This dish is very spicy.',            synonym: null,       antonym: null },
        { word: 'delicious', pos: 'adjective',   ipa: '/dɪˈlɪʃəs/',    emoji: '😋', thai: 'อร่อย',             def: 'having a very nice taste',                               example: 'The soup was delicious.',             synonym: 'tasty',    antonym: 'disgusting' },
        { word: 'bill',      pos: 'noun',        ipa: '/bɪl/',         emoji: '🧾', thai: 'บิล / ใบเรียกเก็บเงิน', def: 'a piece of paper showing how much you must pay',      example: 'Can we have the bill, please?',       synonym: 'check',    antonym: null },
        { word: 'book',      pos: 'verb',        ipa: '/bʊk/',         emoji: '📅', thai: 'จอง',              def: 'to arrange to have a table at a certain time',           example: 'I would like to book a table for two.', synonym: 'reserve', antonym: null },
        { word: 'starter',   pos: 'noun',        ipa: '/ˈstɑːrtər/',   emoji: '🥗', thai: 'อาหารเรียกน้ำย่อย',  def: 'a small dish eaten before the main meal',                example: 'We ordered soup as a starter.',       synonym: 'appetizer', antonym: null },
      ]
    },

    grammar: {
      id: 'a2-unit-8-grammar',
      title: 'Countable/Uncountable + some/any',
      thai: 'นามนับได้/นับไม่ได้ กับ some/any',
      emoji: '📐',
      level: 'A2',
      summary: 'เรียนรู้คำนามนับได้และนับไม่ได้ พร้อมการใช้ some / any / a / an ในบริบทการสั่งอาหารและพูดถึงอาหารในร้านอาหาร',
      explanation: [
        {
          heading: 'Countable vs Uncountable',
          body: 'นามนับได้ (countable) มีรูปพหูพจน์ ใช้ a/an ได้: a menu, two dishes, an apple\n\nนามนับไม่ได้ (uncountable) ไม่มีรูปพหูพจน์ ใช้ a/an ไม่ได้: rice, water, soup, coffee, sugar\n❌ a rice · ✅ some rice'
        },
        {
          heading: 'some vs any',
          body: 'some ใช้ในประโยคบอกเล่า: I would like some water. = ฉันขอน้ำหน่อย\n\nany ใช้ในประโยคปฏิเสธและคำถาม:\nWe don\'t have any bread. = เราไม่มีขนมปัง\nDo you have any soup? = คุณมีซุปไหม?'
        },
        {
          heading: 'Polite requests',
          body: 'การสั่งอาหารอย่างสุภาพ:\nI would like ... = ฉันขอ ... (สุภาพกว่า I want)\nCan I have some rice, please? = ขอข้าวหน่อยได้ไหมครับ?\nCould we have the menu? = ขอเมนูได้ไหมครับ?'
        }
      ],
      examples: [
        { en: 'I would like some water, please.',      th: 'ฉันขอน้ำหน่อยครับ' },
        { en: 'Do you have any vegetarian dishes?',     th: 'คุณมีเมนูมังสวิรัติไหม?' },
        { en: "We don't have any soup today.",          th: 'วันนี้เราไม่มีซุป' },
        { en: 'Can I have a menu, please?',             th: 'ขอเมนูหน่อยได้ไหมครับ?' },
        { en: 'There is some rice on the table.',       th: 'มีข้าวอยู่บนโต๊ะ' },
        { en: 'Would you like some coffee?',            th: 'คุณอยากได้กาแฟไหม?' },
      ],
      practice: [
        { id: 'a2u8-gr-p1', type: 'multiple-choice',  prompt: 'Choose the correct word: I would like ___ water.',      options: ['a','an','some','any'], correctIndex: 2, explanation: 'water นับไม่ได้ ในประโยคบอกเล่าใช้ some' },
        { id: 'a2u8-gr-p2', type: 'fill-in-blank',   prompt: 'Do you have ___ soup? (question)',                       answer: 'any', acceptedVariants: [],           explanation: 'ในคำถามใช้ any' },
        { id: 'a2u8-gr-p3', type: 'multiple-choice',  prompt: 'Which is countable?',                                    options: ['rice','water','menu','sugar'], correctIndex: 2, explanation: 'menu นับได้ (a menu, two menus)' },
      ],
      quiz: [
        { id: 'a2u8-gr-q1', type: 'multiple-choice',  prompt: 'Choose the correct sentence.',                          options: ['I want a rice.','I want some rice.','I want an rice.','I want any rice.'], correctIndex: 1, explanation: 'rice นับไม่ได้ ประโยคบอกเล่าใช้ some' },
        { id: 'a2u8-gr-q2', type: 'fill-in-blank',   prompt: "We don't have ___ bread. (negative)",                    answer: 'any', acceptedVariants: [],           explanation: 'ประโยคปฏิเสธใช้ any' },
        { id: 'a2u8-gr-q3', type: 'multiple-choice',  prompt: 'Which noun is uncountable?',                            options: ['dish','waiter','coffee','menu'], correctIndex: 2, explanation: 'coffee นับไม่ได้ ไม่มีรูปพหูพจน์' },
        { id: 'a2u8-gr-q4', type: 'fill-in-blank',   prompt: 'Can I have ___ menu, please? (a/an)',                    answer: 'a', acceptedVariants: [],             explanation: 'menu นับได้ ขึ้นต้นด้วยเสียงพยัญชนะ ใช้ a' },
      ]
    },

    listening: {
      id: 'a2-unit-8-listening',
      type: 'Conversation',
      title: 'Ordering Dinner',
      thai: 'สั่งอาหารเย็น',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Waiter',   text: 'Good evening. Are you ready to order?',                thai: 'สวัสดีตอนเย็นครับ พร้อมสั่งอาหารหรือยังครับ?' },
        { speaker: 'Customer', text: 'Yes. Can I have the chicken soup as a starter?',       thai: 'ค่ะ ขอซุปไก่เป็นอาหารเรียกน้ำย่อยค่ะ' },
        { speaker: 'Waiter',   text: 'Certainly. And for your main dish?',                   thai: 'ได้ครับ แล้วอาหารจานหลักล่ะครับ?' },
        { speaker: 'Customer', text: 'I would like the grilled fish with some rice, please.', thai: 'ขอปลาย่างกับข้าวหน่อยค่ะ' },
        { speaker: 'Waiter',   text: 'Would you like anything to drink?',                    thai: 'รับเครื่องดื่มอะไรไหมครับ?' },
        { speaker: 'Customer', text: 'Just some water, thank you. Is the fish spicy?',       thai: 'ขอแค่น้ำเปล่าค่ะ ขอบคุณค่ะ ปลาเผ็ดไหมคะ?' },
        { speaker: 'Waiter',   text: 'No, it is not spicy. It is very delicious.',           thai: 'ไม่เผ็ดครับ อร่อยมากครับ' },
        { speaker: 'Customer', text: 'Perfect. That is all for now, thank you.',             thai: 'เยี่ยมค่ะ เท่านี้ก่อนนะคะ ขอบคุณค่ะ' },
      ],
      questions: [
        { id: 'a2u8-ls-q1', type: 'multiple-choice', prompt: 'What does the customer order as a starter?', options: ['A salad','Chicken soup','Grilled fish','Rice'],           correctIndex: 1, explanation: '"Can I have the chicken soup as a starter?"' },
        { id: 'a2u8-ls-q2', type: 'multiple-choice', prompt: 'What is her main dish?',                     options: ['Chicken','Grilled fish','Beef','Noodles'],                correctIndex: 1, explanation: '"I would like the grilled fish"' },
        { id: 'a2u8-ls-q3', type: 'multiple-choice', prompt: 'What does she want to drink?',               options: ['Coffee','Juice','Water','Tea'],                           correctIndex: 2, explanation: '"Just some water, thank you"' },
        { id: 'a2u8-ls-q4', type: 'multiple-choice', prompt: 'Is the fish spicy?',                         options: ['Yes, very spicy','A little spicy','No, it is not spicy','The waiter does not know'], correctIndex: 2, explanation: '"No, it is not spicy"' },
      ]
    },

    reading: {
      id: 'a2-unit-8-reading',
      type: 'Story',
      title: 'A Special Birthday Dinner',
      thai: 'มื้อเย็นวันเกิดพิเศษ',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      paragraphs: [
        'It was Malee\'s birthday, so her family decided to have dinner at a nice restaurant in the city. Her father booked a table for four people at seven o\'clock. Everyone was excited.',
        'When they arrived, a friendly waiter showed them to their table and gave them the menu. There were many delicious dishes to choose from. Malee ordered a green salad as a starter and grilled chicken as her main dish.',
        'The food was wonderful. Her mother said the soup was the best she had ever tasted, and her brother loved his noodles. They also ordered some fruit juice and a big chocolate cake for dessert.',
        'At the end of the meal, her father asked the waiter for the bill. The dinner was a little expensive, but everyone agreed it was worth it. Malee said it was the most delicious birthday dinner of her life.',
      ],
      dialogue: null,
      glossary: [
        { word: 'book a table', thai: 'จองโต๊ะ',          def: 'to arrange to have a table at a restaurant in advance' },
        { word: 'dessert',      thai: 'ของหวาน',          def: 'sweet food eaten at the end of a meal' },
        { word: 'worth it',     thai: 'คุ้มค่า',           def: 'good enough to be worth the money or effort' },
        { word: 'main dish',    thai: 'อาหารจานหลัก',      def: 'the largest and most important part of a meal' },
      ],
      summary: "For Malee's birthday, her family had dinner at a nice restaurant. Her father booked a table for four. They ordered starters, main dishes, and a chocolate cake. Malee said it was the most delicious birthday dinner of her life.",
      summaryThai: 'วันเกิดของมาลี ครอบครัวไปทานอาหารเย็นที่ร้านอาหารดี ๆ พ่อจองโต๊ะสำหรับสี่คน พวกเขาสั่งอาหารเรียกน้ำย่อย อาหารจานหลัก และเค้กช็อกโกแลต มาลีบอกว่าเป็นมื้อเย็นวันเกิดที่อร่อยที่สุดในชีวิต',
      questions: [
        { id: 'a2u8-rd-q1', type: 'multiple-choice', prompt: 'Why did the family go to the restaurant?',       options: ['A wedding','Malee\'s birthday','A work party','New Year'],           correctIndex: 1, explanation: '"It was Malee\'s birthday"' },
        { id: 'a2u8-rd-q2', type: 'multiple-choice', prompt: 'For how many people did the father book?',        options: ['Two','Three','Four','Five'],                                        correctIndex: 2, explanation: '"booked a table for four people"' },
        { id: 'a2u8-rd-q3', type: 'multiple-choice', prompt: 'What did Malee order as a starter?',              options: ['Chicken soup','A green salad','Grilled fish','Noodles'],             correctIndex: 1, explanation: '"Malee ordered a green salad as a starter"' },
        { id: 'a2u8-rd-q4', type: 'multiple-choice', prompt: 'What did they have for dessert?',                 options: ['Ice cream','Fruit','A chocolate cake','Cookies'],                    correctIndex: 2, explanation: '"a big chocolate cake for dessert"' },
      ]
    },

    test: {
      id: 'a2-unit-8-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u8-t-01', type: 'multiple-choice', prompt: '"พนักงานเสิร์ฟ" ในภาษาอังกฤษคือคำใด?',            options: ['menu','waiter','bill','dish'],                                      correctIndex: 1, explanation: 'waiter = พนักงานเสิร์ฟ' },
        { id: 'a2u8-t-02', type: 'multiple-choice', prompt: 'What does "delicious" mean?',                       options: ['แพง','อร่อย','เผ็ด','จอง'],                                          correctIndex: 1, explanation: 'delicious = อร่อย' },
        { id: 'a2u8-t-03', type: 'fill-in-blank',   prompt: 'Can we have the ___, please? (ใบเรียกเก็บเงิน)',      answer: 'bill', acceptedVariants: ['check'],                                   explanation: 'bill = บิล / ใบเรียกเก็บเงิน' },
        { id: 'a2u8-t-04', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                      options: ['I want a rice.','I want some rice.','I want an rice.','I want rice a.'], correctIndex: 1, explanation: 'rice นับไม่ได้ ประโยคบอกเล่าใช้ some' },
        { id: 'a2u8-t-05', type: 'fill-in-blank',   prompt: 'Do you have ___ soup? (question)',                   answer: 'any', acceptedVariants: [],                                           explanation: 'ในคำถามใช้ any' },
        { id: 'a2u8-t-06', type: 'multiple-choice', prompt: 'Which noun is uncountable?',                        options: ['dish','menu','water','waiter'],                                     correctIndex: 2, explanation: 'water นับไม่ได้' },
        { id: 'a2u8-t-07', type: 'fill-in-blank',   prompt: 'I would like to ___ a table for two. (จอง)',         answer: 'book', acceptedVariants: ['reserve'],                                 explanation: 'book a table = จองโต๊ะ' },
        { id: 'a2u8-t-08', type: 'multiple-choice', prompt: 'In the listening, what does she order as a starter?', options: ['Salad','Chicken soup','Fish','Rice'],                             correctIndex: 1, explanation: '"chicken soup as a starter"' },
        { id: 'a2u8-t-09', type: 'multiple-choice', prompt: 'In the listening, what does she want to drink?',    options: ['Coffee','Water','Juice','Tea'],                                     correctIndex: 1, explanation: '"Just some water"' },
        { id: 'a2u8-t-10', type: 'multiple-choice', prompt: 'In the reading, what did they have for dessert?',   options: ['Ice cream','A chocolate cake','Fruit','Cookies'],                    correctIndex: 1, explanation: '"a big chocolate cake for dessert"' },
      ]
    }
  }
]
