// B1 Part 3: Relationships & Culture
export const b1p3 = [
  // ============================================================
  // B1 Unit 9: Relationships
  // ============================================================
  {
    id: 'b1-unit-9',
    title: 'Unit 9: Relationships',
    thai: 'บทที่ 9: ความสัมพันธ์',
    emoji: '💞',

    // vocabulary section — shape matches vocabularyCategories item (skills/vocabulary.js)
    vocabulary: {
      id: 'b1-unit-9-vocab',
      title: 'Relationships',
      thai: 'ความสัมพันธ์',
      emoji: '💞',
      level: 'B1',
      words: [
        { word: 'relationship', pos: 'noun',      ipa: '/rɪˈleɪ.ʃən.ʃɪp/', emoji: '🤝', thai: 'ความสัมพันธ์',        def: 'the way two or more people are connected or behave towards each other', example: 'They have a close relationship with their neighbours.', synonym: 'connection', antonym: null },
        { word: 'trust',        pos: 'noun',      ipa: '/trʌst/',          emoji: '🤞', thai: 'ความไว้วางใจ',       def: 'the belief that someone is honest and will not harm you',              example: 'Trust is the basis of any friendship.',              synonym: 'faith',      antonym: 'distrust' },
        { word: 'argue',        pos: 'verb',      ipa: '/ˈɑːr.ɡjuː/',      emoji: '😠', thai: 'เถียง / ทะเลาะ',     def: 'to disagree with someone, often in an angry way',                      example: 'My brother and I sometimes argue about money.',       synonym: 'quarrel',    antonym: 'agree' },
        { word: 'support',      pos: 'verb',      ipa: '/səˈpɔːrt/',       emoji: '🙌', thai: 'สนับสนุน / ช่วยเหลือ', def: 'to help someone emotionally or practically',                           example: 'Good friends support each other in hard times.',      synonym: 'help',       antonym: 'abandon' },
        { word: 'loyal',        pos: 'adjective', ipa: '/ˈlɔɪ.əl/',        emoji: '🐕', thai: 'ซื่อสัตย์ / จงรักภักดี', def: 'always faithful and supportive to a person or group',                 example: 'She is a loyal friend who never lets me down.',       synonym: 'faithful',   antonym: 'disloyal' },
        { word: 'reliable',     pos: 'adjective', ipa: '/rɪˈlaɪ.ə.bəl/',   emoji: '✅', thai: 'ที่พึ่งพาได้',       def: 'able to be trusted to do what you promise',                            example: 'He is reliable and always arrives on time.',          synonym: 'dependable', antonym: 'unreliable' },
        { word: 'apologise',    pos: 'verb',      ipa: '/əˈpɒl.ə.dʒaɪz/',  emoji: '🙇', thai: 'ขอโทษ',              def: 'to say sorry for something you have done wrong',                       example: 'You should apologise if you hurt her feelings.',      synonym: null,         antonym: null },
        { word: 'get along',    pos: 'phrase',    ipa: '/ɡet əˈlɒŋ/',      emoji: '😊', thai: 'เข้ากันได้ดี',       def: 'to have a friendly relationship with someone',                         example: 'I get along well with my colleagues.',                synonym: null,         antonym: null },
      ]
    },

    // grammar section — shape matches grammarTopics item (skills/grammar.js)
    grammar: {
      id: 'b1-unit-9-grammar',
      title: 'Relative Clauses (who / which / that / where)',
      thai: 'ประโยคขยายความ (Relative Clauses)',
      emoji: '📐',
      level: 'B1',
      summary: 'เรียนรู้การใช้ who, which, that, where เพื่อขยายความคำนาม ทำให้ประโยคละเอียดขึ้นและเชื่อมสองประโยคเข้าด้วยกัน เหมาะกับการบรรยายคนและความสัมพันธ์',
      explanation: [
        {
          heading: 'Defining Relative Clauses คืออะไร',
          body: 'Relative clause คือส่วนที่ขยายคำนาม เพื่อบอกว่าเรากำลังพูดถึงคน สิ่งของ หรือสถานที่ใด\n\nใช้คำเชื่อม (relative pronoun) ดังนี้\nwho / that → ใช้กับคน\nwhich / that → ใช้กับสิ่งของหรือสัตว์\nwhere → ใช้กับสถานที่\n\nตัวอย่าง: The friend who helped me is very kind. (เพื่อนที่ช่วยฉันใจดีมาก)'
        },
        {
          heading: 'who, which, that ต่างกันอย่างไร',
          body: 'who ใช้กับคนเท่านั้น: The woman who lives next door is a doctor.\nwhich ใช้กับสิ่งของ/สัตว์: The gift which she gave me was lovely.\nthat ใช้ได้ทั้งคนและสิ่งของ (ในประโยคแบบ defining): The person that I trust most is my sister.\n\n⚠️ จุดที่คนไทยมักผิด: ห้ามใช้ what แทน that/which\n❌ The book what I read.  ✅ The book that I read.'
        },
        {
          heading: 'where และการละ relative pronoun',
          body: 'where ใช้ขยายสถานที่: This is the café where we first met.\n\nเมื่อ relative pronoun เป็นกรรม (object) เราสามารถละได้\nThe man (who/that) I met was friendly. → ละ who/that ได้\nแต่ถ้าเป็นประธาน (subject) ห้ามละ: The man who called me... (ละไม่ได้)'
        }
      ],
      examples: [
        { en: 'She is the friend who always supports me.',        th: 'เธอคือเพื่อนที่คอยสนับสนุนฉันเสมอ' },
        { en: 'That is the message which made him angry.',         th: 'นั่นคือข้อความที่ทำให้เขาโกรธ' },
        { en: 'The colleague that I trust is on holiday.',         th: 'เพื่อนร่วมงานที่ฉันไว้ใจกำลังลาพักร้อน' },
        { en: 'This is the restaurant where we had our first date.', th: 'นี่คือร้านอาหารที่เราออกเดตกันครั้งแรก' },
        { en: 'People who are loyal make the best friends.',        th: 'คนที่ซื่อสัตย์เป็นเพื่อนที่ดีที่สุด' },
        { en: 'The gift which she chose was perfect.',             th: 'ของขวัญที่เธอเลือกนั้นสมบูรณ์แบบ' },
      ],
      practice: [
        { id: 'b1u9-gr-p1', type: 'fill-in-blank',  prompt: 'The person ___ helped me was very kind. (คน)',            answer: 'who',   acceptedVariants: ['that'],       explanation: 'ใช้ who (หรือ that) กับคน' },
        { id: 'b1u9-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct word: The book ___ I bought is great.', options: ['who','which','where','whose'],           correctIndex: 1, explanation: 'ใช้ which กับสิ่งของ' },
        { id: 'b1u9-gr-p3', type: 'fill-in-blank',  prompt: 'This is the town ___ I grew up. (สถานที่)',              answer: 'where', acceptedVariants: [],             explanation: 'ใช้ where กับสถานที่' },
        { id: 'b1u9-gr-p4', type: 'multiple-choice', prompt: 'Which sentence is correct?',                             options: ['The friend what I trust.','The friend who I trust.','The friend where I trust.','The friend which I trust.'], correctIndex: 1, explanation: 'ใช้ who กับคน ห้ามใช้ what' },
      ],
      quiz: [
        { id: 'b1u9-gr-q1', type: 'multiple-choice', prompt: 'Complete: The woman ___ lives next door is a nurse.',   options: ['which','who','where','what'],            correctIndex: 1, explanation: 'ใช้ who กับคนที่เป็นประธานของ clause' },
        { id: 'b1u9-gr-q2', type: 'fill-in-blank',  prompt: 'The café ___ we met is now closed. (สถานที่)',          answer: 'where', acceptedVariants: [],             explanation: 'ใช้ where ขยายสถานที่' },
        { id: 'b1u9-gr-q3', type: 'multiple-choice', prompt: 'Which word can replace both "who" and "which" in defining clauses?', options: ['what','where','that','whose'],  correctIndex: 2, explanation: 'that ใช้แทนได้ทั้งคนและสิ่งของในประโยคแบบ defining' },
        { id: 'b1u9-gr-q4', type: 'fill-in-blank',  prompt: 'The gift ___ she gave me was expensive. (สิ่งของ)',      answer: 'which', acceptedVariants: ['that'],       explanation: 'ใช้ which (หรือ that) กับสิ่งของ' },
      ]
    },

    // listening section — shape matches listeningPieces item (skills/listening.js)
    listening: {
      id: 'b1-unit-9-listening',
      type: 'Conversation',
      title: 'Sorting Out an Argument',
      thai: 'คลี่คลายเรื่องทะเลาะกัน',
      emoji: '🎧',
      level: 'B1',
      segments: [
        { speaker: 'Mia',   text: 'Hey Ben, can we talk? I feel like we have been arguing a lot lately.',      thai: 'นี่เบน เราคุยกันได้ไหม? ฉันรู้สึกว่าช่วงนี้เราทะเลาะกันบ่อยมาก' },
        { speaker: 'Ben',   text: 'Yeah, I have noticed that too. I am sorry for what I said yesterday.',       thai: 'ใช่ ผมก็สังเกตเห็นเหมือนกัน ผมขอโทษกับสิ่งที่พูดไปเมื่อวานนะ' },
        { speaker: 'Mia',   text: 'Thank you. I think the problem is that we do not really listen to each other.', thai: 'ขอบคุณนะ ฉันคิดว่าปัญหาคือเราไม่ได้ฟังกันจริง ๆ' },
        { speaker: 'Ben',   text: 'You are right. A good friend is someone who listens, and I have not been doing that.', thai: 'คุณพูดถูก เพื่อนที่ดีคือคนที่รับฟัง และผมยังไม่ได้ทำแบบนั้นเลย' },
        { speaker: 'Mia',   text: 'I still trust you, though. That is why I wanted to fix this instead of walking away.', thai: 'แต่ฉันก็ยังไว้ใจคุณนะ นั่นคือเหตุผลที่ฉันอยากแก้ปัญหานี้แทนที่จะเดินจากไป' },
        { speaker: 'Ben',   text: 'That means a lot. Let us promise to be more honest with each other from now on.', thai: 'นั่นมีความหมายมากเลย เรามาสัญญากันว่าจะซื่อสัตย์ต่อกันมากขึ้นตั้งแต่นี้ไปดีไหม' },
        { speaker: 'Mia',   text: 'Agreed. And if we disagree, we will talk about it calmly, not shout.',      thai: 'ตกลง และถ้าเราเห็นไม่ตรงกัน เราจะคุยกันอย่างใจเย็น ไม่ตะโกนใส่กัน' },
        { speaker: 'Ben',   text: 'Deal. I am glad we sorted this out. You are a really reliable friend, Mia.',  thai: 'ตกลง ผมดีใจที่เราคลี่คลายเรื่องนี้ได้ คุณเป็นเพื่อนที่พึ่งพาได้จริง ๆ นะเมีย' },
      ],
      questions: [
        { id: 'b1u9-ls-q1', type: 'multiple-choice', prompt: 'Why does Mia want to talk to Ben?',              options: ['To end the friendship','Because they have been arguing a lot','To ask for money','To plan a trip'], correctIndex: 1, explanation: 'เมียพูดว่า "we have been arguing a lot lately"' },
        { id: 'b1u9-ls-q2', type: 'multiple-choice', prompt: 'What does Ben do near the start of the talk?',   options: ['He shouts','He apologises','He leaves','He laughs'], correctIndex: 1, explanation: 'เบนพูดว่า "I am sorry for what I said yesterday"' },
        { id: 'b1u9-ls-q3', type: 'multiple-choice', prompt: 'What do they promise to do from now on?',        options: ['Never speak again','Be more honest with each other','Only text','Avoid meeting'], correctIndex: 1, explanation: 'พวกเขาสัญญาว่า "be more honest with each other"' },
        { id: 'b1u9-ls-q4', type: 'multiple-choice', prompt: 'How does Ben describe Mia at the end?',          options: ['Rude','A reliable friend','Boring','Dishonest'], correctIndex: 1, explanation: 'เบนพูดว่า "You are a really reliable friend"' },
      ]
    },

    // reading section — shape matches readingPieces item (skills/reading.js)
    reading: {
      id: 'b1-unit-9-reading',
      type: 'Article',
      title: 'What Makes a Friendship Last?',
      thai: 'อะไรทำให้มิตรภาพยั่งยืน?',
      emoji: '📖',
      level: 'B1',
      minutes: 4,
      paragraphs: [
        'Everyone has friends, but not every friendship lasts a lifetime. Researchers who study relationships say that the strongest friendships share a few key qualities. The most important one is trust. A friend who keeps your secrets and stands by you in difficult times is worth far more than a hundred casual acquaintances.',
        'Another quality is honesty. People often think that being a good friend means always agreeing, but this is not true. A loyal friend is someone who tells you the truth, even when it is hard to hear. They do this with kindness, because they want the best for you, not because they want to argue.',
        'Communication also matters a great deal. When two friends disagree, the way they handle the argument decides whether the friendship survives. Friends who can apologise, listen, and forgive tend to stay close for years. Those who let small problems grow often drift apart.',
        'Finally, good friendships need time and effort. In a busy world where people are always working, it is easy to forget the people who matter. Sending a simple message, remembering a birthday, or meeting for coffee are small acts that keep a relationship alive. Friendship is like a garden: if you care for it, it will grow.',
      ],
      dialogue: null,
      glossary: [
        { word: 'acquaintance', thai: 'คนรู้จัก (ไม่สนิท)', def: 'a person you know but who is not a close friend' },
        { word: 'honesty',      thai: 'ความซื่อสัตย์',     def: 'the quality of always telling the truth' },
        { word: 'drift apart',  thai: 'ค่อย ๆ ห่างกัน',    def: 'to slowly become less close to someone over time' },
        { word: 'forgive',      thai: 'ให้อภัย',            def: 'to stop being angry with someone for a mistake' },
      ],
      summary: 'Lasting friendships share key qualities: trust, honesty, good communication, and effort. Friends who apologise and forgive stay close, while those who ignore small problems drift apart.',
      summaryThai: 'มิตรภาพที่ยั่งยืนมีคุณสมบัติสำคัญคือ ความไว้วางใจ ความซื่อสัตย์ การสื่อสารที่ดี และความใส่ใจ เพื่อนที่รู้จักขอโทษและให้อภัยจะสนิทกันนาน ส่วนคนที่ปล่อยปัญหาเล็กน้อยไว้จะค่อย ๆ ห่างกัน',
      questions: [
        { id: 'b1u9-rd-q1', type: 'multiple-choice', prompt: 'According to the article, what is the most important quality of a strong friendship?', options: ['Money','Trust','Living nearby','Having the same hobbies'], correctIndex: 1, explanation: 'บทความบอกว่า "The most important one is trust"' },
        { id: 'b1u9-rd-q2', type: 'multiple-choice', prompt: 'What does a loyal friend do, according to the text?', options: ['Always agrees with you','Tells you the truth kindly','Avoids all arguments','Keeps their distance'], correctIndex: 1, explanation: 'ข้อความบอกว่าเพื่อนที่ซื่อสัตย์ "tells you the truth, even when it is hard to hear"' },
        { id: 'b1u9-rd-q3', type: 'multiple-choice', prompt: 'What happens to friends who let small problems grow?', options: ['They become closer','They drift apart','They argue less','They travel together'], correctIndex: 1, explanation: 'ข้อความบอกว่า "Those who let small problems grow often drift apart"' },
        { id: 'b1u9-rd-q4', type: 'multiple-choice', prompt: 'What is friendship compared to at the end of the article?', options: ['A river','A machine','A garden','A book'], correctIndex: 2, explanation: 'ข้อความบอกว่า "Friendship is like a garden"' },
      ]
    },

    // unit test — 10 questions covering all sections
    test: {
      id: 'b1-unit-9-test',
      passMark: 0.70,
      questions: [
        { id: 'b1u9-t-01', type: 'multiple-choice', prompt: '"ความไว้วางใจ" ในภาษาอังกฤษคือคำใด?',                    options: ['argue','trust','loyal','support'],                                  correctIndex: 1, explanation: '"trust" = ความไว้วางใจ' },
        { id: 'b1u9-t-02', type: 'multiple-choice', prompt: 'What does "reliable" mean?',                             options: ['ที่พึ่งพาได้','ทะเลาะ','ขอโทษ','ห่างกัน'],                            correctIndex: 0, explanation: '"reliable" = ที่พึ่งพาได้' },
        { id: 'b1u9-t-03', type: 'fill-in-blank',   prompt: 'To say sorry for a mistake is to a___.',                answer: 'apologise', acceptedVariants: ['apologize'],                          explanation: '"apologise" = ขอโทษ (อเมริกันเขียน apologize)' },
        { id: 'b1u9-t-04', type: 'multiple-choice', prompt: 'Choose the correct word: The person ___ helped me is my neighbour.', options: ['which','who','where','what'],                       correctIndex: 1, explanation: 'ใช้ who กับคน' },
        { id: 'b1u9-t-05', type: 'fill-in-blank',   prompt: 'This is the house ___ I was born. (สถานที่)',           answer: 'where', acceptedVariants: [],                                          explanation: 'ใช้ where ขยายสถานที่' },
        { id: 'b1u9-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                            options: ['The gift who she gave me.','The gift what she gave me.','The gift which she gave me.','The gift where she gave me.'], correctIndex: 2, explanation: 'ใช้ which กับสิ่งของ' },
        { id: 'b1u9-t-07', type: 'fill-in-blank',   prompt: 'The friend ___ I trust most is my sister. (คน, ทำหน้าที่เป็นกรรม)', answer: 'who', acceptedVariants: ['that'],                        explanation: 'ใช้ who หรือ that กับคน' },
        { id: 'b1u9-t-08', type: 'multiple-choice', prompt: 'In the listening, why does Mia want to talk to Ben?',   options: ['To argue more','Because they have been arguing a lot','To say goodbye','To borrow money'], correctIndex: 1, explanation: 'เมียพูดว่าพวกเขาทะเลาะกันบ่อย' },
        { id: 'b1u9-t-09', type: 'multiple-choice', prompt: 'In the reading, what quality do the strongest friendships share most?', options: ['Wealth','Trust','Fame','Distance'],               correctIndex: 1, explanation: 'บทความบอกว่าคุณสมบัติที่สำคัญที่สุดคือ trust' },
        { id: 'b1u9-t-10', type: 'multiple-choice', prompt: 'In the reading, friendship is compared to a ___.',      options: ['garden','mountain','storm','clock'],                                correctIndex: 0, explanation: 'ข้อความบอกว่า "Friendship is like a garden"' },
      ]
    }
  },

  // ============================================================
  // B1 Unit 10: Culture
  // ============================================================
  {
    id: 'b1-unit-10',
    title: 'Unit 10: Culture',
    thai: 'บทที่ 10: วัฒนธรรม',
    emoji: '🎭',

    // vocabulary section — shape matches vocabularyCategories item (skills/vocabulary.js)
    vocabulary: {
      id: 'b1-unit-10-vocab',
      title: 'Culture',
      thai: 'วัฒนธรรม',
      emoji: '🎭',
      level: 'B1',
      words: [
        { word: 'culture',    pos: 'noun',      ipa: '/ˈkʌl.tʃər/',    emoji: '🎭', thai: 'วัฒนธรรม',            def: 'the customs, beliefs, and way of life of a group of people',           example: 'Thai culture is famous for its politeness.',          synonym: null,        antonym: null },
        { word: 'tradition',  pos: 'noun',      ipa: '/trəˈdɪʃ.ən/',   emoji: '🏮', thai: 'ประเพณี',             def: 'a belief or custom passed down through generations',                   example: 'Songkran is an important Thai tradition.',            synonym: 'custom',    antonym: null },
        { word: 'festival',   pos: 'noun',      ipa: '/ˈfes.tɪ.vəl/',  emoji: '🎉', thai: 'เทศกาล',              def: 'a special time when people celebrate something',                       example: 'The Loy Krathong festival is held in November.',      synonym: 'celebration', antonym: null },
        { word: 'custom',     pos: 'noun',      ipa: '/ˈkʌs.təm/',     emoji: '📜', thai: 'ธรรมเนียม',           def: 'an accepted way of behaving in a society',                             example: 'It is a custom to remove your shoes before entering.', synonym: 'tradition', antonym: null },
        { word: 'polite',     pos: 'adjective', ipa: '/pəˈlaɪt/',      emoji: '🙏', thai: 'สุภาพ',               def: 'behaving in a respectful and considerate way',                         example: 'It is polite to greet elders with a wai.',            synonym: 'courteous', antonym: 'rude' },
        { word: 'respect',    pos: 'verb',      ipa: '/rɪˈspekt/',     emoji: '🙇', thai: 'เคารพ / นับถือ',      def: 'to admire someone and treat them with consideration',                  example: 'We should respect other people\'s beliefs.',          synonym: 'admire',    antonym: 'disrespect' },
        { word: 'diverse',    pos: 'adjective', ipa: '/daɪˈvɜːrs/',    emoji: '🌍', thai: 'หลากหลาย',            def: 'made up of many different kinds of things or people',                  example: 'Bangkok is a diverse and multicultural city.',        synonym: 'varied',    antonym: 'uniform' },
        { word: 'heritage',   pos: 'noun',      ipa: '/ˈher.ɪ.tɪdʒ/',  emoji: '🏛️', thai: 'มรดกทางวัฒนธรรม',     def: 'features from the past that a society values and keeps',               example: 'Ayutthaya is part of Thailand\'s heritage.',          synonym: null,        antonym: null },
      ]
    },

    // grammar section — shape matches grammarTopics item (skills/grammar.js)
    grammar: {
      id: 'b1-unit-10-grammar',
      title: 'Reported Speech (Introduction)',
      thai: 'การเล่าคำพูดทางอ้อม (Reported Speech)',
      emoji: '📐',
      level: 'B1',
      summary: 'เรียนรู้วิธีเล่าสิ่งที่คนอื่นพูด โดยเปลี่ยนคำพูดตรง (direct speech) ให้เป็นคำพูดทางอ้อม (reported speech) ซึ่งมักต้องเลื่อน tense ไปข้างหลังหนึ่งขั้น',
      explanation: [
        {
          heading: 'Direct vs Reported Speech',
          body: 'Direct speech คือการอ้างคำพูดตรง ๆ ในเครื่องหมายคำพูด\nReported speech คือการเล่าว่าใครพูดอะไร โดยไม่ใช้เครื่องหมายคำพูด\n\nDirect: She said, "I like Thai food."\nReported: She said (that) she liked Thai food.\n\nมักใช้กริยา say หรือ tell นำหน้า (tell ต้องมีกรรม เช่น tell me)'
        },
        {
          heading: 'การเลื่อน Tense (Backshift)',
          body: 'เมื่อกริยานำ (said/told) เป็นอดีต ต้องเลื่อน tense ในคำพูดไปข้างหลังหนึ่งขั้น\n\npresent simple → past simple: "I am happy" → she said she was happy\npresent continuous → past continuous: "I am working" → he said he was working\npast simple → past perfect: "I saw it" → she said she had seen it\nwill → would: "I will go" → he said he would go'
        },
        {
          heading: 'การเปลี่ยนคำสรรพนามและคำบอกเวลา',
          body: 'ต้องเปลี่ยนสรรพนามให้เข้ากับมุมมองผู้เล่า\n"I" → he/she · "we" → they · "my" → his/her\n\nและคำบอกเวลา/สถานที่บางคำก็เปลี่ยน\ntoday → that day · tomorrow → the next day · here → there\n\n⚠️ ข้อควรระวัง: หลัง tell ต้องมีกรรมเสมอ (tell me/him/her) แต่หลัง say ไม่ต้องมี'
        }
      ],
      examples: [
        { en: 'He said (that) he loved the festival.',              th: 'เขาบอกว่าเขาชอบเทศกาลนั้น' },
        { en: 'She told me (that) she was learning about the culture.', th: 'เธอบอกฉันว่าเธอกำลังเรียนรู้เกี่ยวกับวัฒนธรรม' },
        { en: 'They said (that) they would visit the temple.',      th: 'พวกเขาบอกว่าพวกเขาจะไปเยี่ยมชมวัด' },
        { en: 'The guide said the tradition was very old.',         th: 'ไกด์บอกว่าประเพณีนี้เก่าแก่มาก' },
        { en: 'He told us he had seen the parade the day before.',  th: 'เขาบอกเราว่าเขาได้เห็นขบวนพาเหรดเมื่อวันก่อน' },
        { en: 'She said she respected other customs.',              th: 'เธอบอกว่าเธอเคารพธรรมเนียมของคนอื่น' },
      ],
      practice: [
        { id: 'b1u10-gr-p1', type: 'fill-in-blank',  prompt: 'Direct: "I am tired." → Reported: She said she ___ tired.', answer: 'was', acceptedVariants: [],           explanation: 'am เลื่อนเป็น was' },
        { id: 'b1u10-gr-p2', type: 'multiple-choice', prompt: 'Direct: "I will come." → Reported: He said he ___ come.',    options: ['will','would','wills','is'],           correctIndex: 1, explanation: 'will เลื่อนเป็น would' },
        { id: 'b1u10-gr-p3', type: 'fill-in-blank',  prompt: 'She ___ me that she liked the festival. (verb ที่ต้องมีกรรม)', answer: 'told', acceptedVariants: [],          explanation: 'ใช้ told เพราะมีกรรม (me) ตามหลัง' },
        { id: 'b1u10-gr-p4', type: 'multiple-choice', prompt: 'Direct: "We like Thai food." → Reported: They said they ___ Thai food.', options: ['like','likes','liked','liking'], correctIndex: 2, explanation: 'present simple (like) เลื่อนเป็น past simple (liked)' },
      ],
      quiz: [
        { id: 'b1u10-gr-q1', type: 'multiple-choice', prompt: 'Direct: "I am happy." → Reported: He said he ___ happy.',   options: ['is','am','was','were'],               correctIndex: 2, explanation: 'am เลื่อนเป็น was' },
        { id: 'b1u10-gr-q2', type: 'fill-in-blank',  prompt: 'Direct: "I will visit." → Reported: She said she ___ visit.', answer: 'would', acceptedVariants: [],         explanation: 'will เลื่อนเป็น would' },
        { id: 'b1u10-gr-q3', type: 'multiple-choice', prompt: 'Which verb needs an object after it?',                       options: ['say','said','tell','speak'],          correctIndex: 2, explanation: 'tell ต้องมีกรรมตามหลัง เช่น tell me' },
        { id: 'b1u10-gr-q4', type: 'fill-in-blank',  prompt: 'Direct: "They study English." → Reported: He said they ___ English.', answer: 'studied', acceptedVariants: [], explanation: 'present simple (study) เลื่อนเป็น past simple (studied)' },
      ]
    },

    // listening section — shape matches listeningPieces item (skills/listening.js)
    listening: {
      id: 'b1-unit-10-listening',
      type: 'Podcast',
      title: 'A Culture Podcast: Songkran',
      thai: 'พอดแคสต์วัฒนธรรม: สงกรานต์',
      emoji: '🎧',
      level: 'B1',
      segments: [
        { speaker: 'Host',    text: 'Welcome back to Culture Talk. Today we are exploring Songkran, the Thai New Year.',      thai: 'ยินดีต้อนรับกลับสู่ Culture Talk วันนี้เราจะมาสำรวจสงกรานต์ ปีใหม่ไทย' },
        { speaker: 'Guest',   text: 'Thanks for having me. Songkran is celebrated every April, usually from the 13th to the 15th.', thai: 'ขอบคุณที่เชิญมานะ สงกรานต์จัดขึ้นทุกเดือนเมษายน ปกติคือวันที่ 13 ถึง 15' },
        { speaker: 'Host',    text: 'Most people know it for the water fights. But there is more to it, right?',           thai: 'คนส่วนใหญ่รู้จักมันจากการเล่นสาดน้ำ แต่มันมีอะไรมากกว่านั้นใช่ไหม?' },
        { speaker: 'Guest',   text: 'Absolutely. The water is a symbol of washing away bad luck and starting the year fresh.', thai: 'ใช่เลย น้ำเป็นสัญลักษณ์ของการชำระล้างสิ่งไม่ดีและเริ่มต้นปีใหม่อย่างสดใส' },
        { speaker: 'Host',    text: 'I read that younger people pour water on the hands of their elders. Is that true?',    thai: 'ผมอ่านมาว่าคนรุ่นเยาว์จะรดน้ำที่มือของผู้ใหญ่ จริงไหม?' },
        { speaker: 'Guest',   text: 'Yes. It is a custom to show respect. The elders then give a blessing in return.',       thai: 'ใช่ค่ะ มันเป็นธรรมเนียมเพื่อแสดงความเคารพ จากนั้นผู้ใหญ่จะให้พรตอบแทน' },
        { speaker: 'Host',    text: 'So it is really a family tradition, not just a big party in the streets.',            thai: 'ดังนั้นมันเป็นประเพณีของครอบครัวจริง ๆ ไม่ใช่แค่งานปาร์ตี้ใหญ่ตามท้องถนน' },
        { speaker: 'Guest',   text: 'Exactly. It brings families together and reminds people to respect their heritage.',    thai: 'ถูกต้องเลยค่ะ มันทำให้ครอบครัวได้อยู่ร่วมกันและเตือนให้ผู้คนเคารพมรดกทางวัฒนธรรมของตน' },
      ],
      questions: [
        { id: 'b1u10-ls-q1', type: 'multiple-choice', prompt: 'When is Songkran usually celebrated?',            options: ['January','April','July','December'], correctIndex: 1, explanation: 'แขกรับเชิญบอกว่า "celebrated every April, usually from the 13th to the 15th"' },
        { id: 'b1u10-ls-q2', type: 'multiple-choice', prompt: 'What does the water symbolise?',                  options: ['Wealth and money','Washing away bad luck','Rain for farming','Cleaning the streets'], correctIndex: 1, explanation: 'แขกบอกว่าน้ำเป็นสัญลักษณ์ของ "washing away bad luck"' },
        { id: 'b1u10-ls-q3', type: 'multiple-choice', prompt: 'Why do younger people pour water on elders\' hands?', options: ['For fun','To show respect','To cool them down','To wake them up'], correctIndex: 1, explanation: 'แขกบอกว่ามันเป็นธรรมเนียม "to show respect"' },
        { id: 'b1u10-ls-q4', type: 'multiple-choice', prompt: 'According to the guest, what does Songkran mainly do?', options: ['Brings families together','Makes money for shops','Ends the rainy season','Starts the school year'], correctIndex: 0, explanation: 'แขกบอกว่า "It brings families together"' },
      ]
    },

    // reading section — shape matches readingPieces item (skills/reading.js)
    reading: {
      id: 'b1-unit-10-reading',
      type: 'Article',
      title: 'Why Culture Matters When We Travel',
      thai: 'ทำไมวัฒนธรรมจึงสำคัญเมื่อเราเดินทาง',
      emoji: '📖',
      level: 'B1',
      minutes: 4,
      paragraphs: [
        'Travelling to another country is one of the best ways to learn about the world. However, seeing famous places is only part of the experience. Understanding the local culture is what turns an ordinary trip into an unforgettable one. Every society has its own traditions, customs, and values that shape daily life.',
        'One of the most important things a traveller can do is show respect. In many countries, small actions carry a big meaning. In Thailand, for example, it is polite to greet people with a wai and to remove your shoes before entering a home or temple. A visitor who learns these customs will be welcomed much more warmly than one who ignores them.',
        'Food is another window into a culture. Sharing a meal is often a social event, and dishes are frequently tied to festivals and family traditions. When you try local food and ask about its history, you show that you value the heritage of the people you are visiting. Many travellers say that their best memories come from meals shared with local families.',
        'Finally, being curious and open-minded makes travel richer. The world is wonderfully diverse, and no single way of living is the "right" one. A guide once told a group of tourists that the goal of travel was not to judge other cultures but to understand them. When we respect differences, travel teaches us as much about ourselves as about others.',
      ],
      dialogue: null,
      glossary: [
        { word: 'unforgettable', thai: 'ที่น่าจดจำ / ลืมไม่ลง', def: 'so good or special that you will always remember it' },
        { word: 'wai',           thai: 'การไหว้',              def: 'a Thai greeting made by pressing the palms together and bowing slightly' },
        { word: 'open-minded',   thai: 'ใจกว้าง / เปิดกว้าง',  def: 'willing to consider new ideas and different ways of living' },
        { word: 'judge',         thai: 'ตัดสิน',               def: 'to form an opinion about someone or something, often too quickly' },
      ],
      summary: 'Understanding local culture makes travel more meaningful. Travellers should show respect for customs, try local food, and stay open-minded. The goal of travel is to understand other cultures, not to judge them.',
      summaryThai: 'การเข้าใจวัฒนธรรมท้องถิ่นทำให้การเดินทางมีความหมายมากขึ้น นักเดินทางควรเคารพธรรมเนียม ลองอาหารท้องถิ่น และเปิดใจกว้าง เป้าหมายของการเดินทางคือการเข้าใจวัฒนธรรมอื่น ไม่ใช่การตัดสิน',
      questions: [
        { id: 'b1u10-rd-q1', type: 'multiple-choice', prompt: 'According to the article, what turns an ordinary trip into an unforgettable one?', options: ['Seeing famous places','Understanding the local culture','Taking many photos','Buying souvenirs'], correctIndex: 1, explanation: 'บทความบอกว่า "Understanding the local culture is what turns an ordinary trip into an unforgettable one"' },
        { id: 'b1u10-rd-q2', type: 'multiple-choice', prompt: 'What Thai custom does the article mention?',        options: ['Shaking hands firmly','Greeting with a wai and removing shoes','Giving business cards','Bowing very low'], correctIndex: 1, explanation: 'บทความยกตัวอย่าง "greet people with a wai and to remove your shoes"' },
        { id: 'b1u10-rd-q3', type: 'multiple-choice', prompt: 'Why is food described as "a window into a culture"?',  options: ['It is cheap','Meals are social and tied to traditions','It is always spicy','Tourists eat a lot'], correctIndex: 1, explanation: 'บทความบอกว่าการกินอาหารร่วมกันเป็น social event และผูกกับประเพณี' },
        { id: 'b1u10-rd-q4', type: 'multiple-choice', prompt: 'What did the guide say the goal of travel was?',      options: ['To judge other cultures','To understand other cultures','To take the best photos','To spend money'], correctIndex: 1, explanation: 'ไกด์บอกว่าเป้าหมายคือ "not to judge other cultures but to understand them"' },
      ]
    },

    // unit test — 10 questions covering all sections
    test: {
      id: 'b1-unit-10-test',
      passMark: 0.70,
      questions: [
        { id: 'b1u10-t-01', type: 'multiple-choice', prompt: '"ประเพณี" ในภาษาอังกฤษคือคำใด?',                       options: ['culture','tradition','respect','festival'],                         correctIndex: 1, explanation: '"tradition" = ประเพณี' },
        { id: 'b1u10-t-02', type: 'multiple-choice', prompt: 'What does "diverse" mean?',                            options: ['เหมือนกันหมด','หลากหลาย','สุภาพ','เก่าแก่'],                          correctIndex: 1, explanation: '"diverse" = หลากหลาย' },
        { id: 'b1u10-t-03', type: 'fill-in-blank',   prompt: 'The opposite of "polite" is r___.',                    answer: 'rude', acceptedVariants: [],                                          explanation: 'คำตรงข้ามของ polite คือ rude' },
        { id: 'b1u10-t-04', type: 'multiple-choice', prompt: 'Direct: "I am busy." → Reported: She said she ___ busy.', options: ['is','am','was','be'],                                              correctIndex: 2, explanation: 'am เลื่อนเป็น was' },
        { id: 'b1u10-t-05', type: 'fill-in-blank',   prompt: 'Direct: "I will help." → Reported: He said he ___ help.', answer: 'would', acceptedVariants: [],                                        explanation: 'will เลื่อนเป็น would' },
        { id: 'b1u10-t-06', type: 'multiple-choice', prompt: 'Which verb must have an object after it?',              options: ['say','tell','speak','talk'],                                        correctIndex: 1, explanation: 'tell ต้องมีกรรมตามหลัง เช่น tell me' },
        { id: 'b1u10-t-07', type: 'fill-in-blank',   prompt: 'Direct: "We like it." → Reported: They said they ___ it.', answer: 'liked', acceptedVariants: [],                                       explanation: 'present simple (like) เลื่อนเป็น past simple (liked)' },
        { id: 'b1u10-t-08', type: 'multiple-choice', prompt: 'In the podcast, when is Songkran celebrated?',          options: ['January','April','August','November'],                              correctIndex: 1, explanation: 'แขกรับเชิญบอกว่าจัดในเดือนเมษายน' },
        { id: 'b1u10-t-09', type: 'multiple-choice', prompt: 'In the podcast, what does the water symbolise?',        options: ['Wealth','Washing away bad luck','Good weather','A new house'],       correctIndex: 1, explanation: 'น้ำเป็นสัญลักษณ์ของการชำระล้างสิ่งไม่ดี' },
        { id: 'b1u10-t-10', type: 'multiple-choice', prompt: 'In the reading, what did the guide say the goal of travel was?', options: ['To judge cultures','To understand cultures','To take photos','To relax'], correctIndex: 1, explanation: 'ไกด์บอกว่าเป้าหมายคือการเข้าใจวัฒนธรรมอื่น' },
      ]
    }
  }
]
