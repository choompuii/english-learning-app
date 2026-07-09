// A2 Part 3: Units 9-12 (Movies, Internet, Work, School)
export const a2p3 = [
  // ==========================================================================
  // A2 Unit 9: Movies
  // ==========================================================================
  {
    id: 'a2-unit-9',
    title: 'Unit 9: Movies',
    thai: 'บทที่ 9: ภาพยนตร์',
    emoji: '🎬',

    vocabulary: {
      id: 'a2-unit-9-vocab',
      title: 'Movies',
      thai: 'ภาพยนตร์',
      emoji: '🎬',
      level: 'A2',
      words: [
        { word: 'actor',     pos: 'noun',      ipa: '/ˈæk.tər/',      emoji: '🎭', thai: 'นักแสดง',           def: 'a person who performs in films or plays',              example: 'My favourite actor is in this movie.',   synonym: 'performer', antonym: null },
        { word: 'director',  pos: 'noun',      ipa: '/dəˈrek.tər/',   emoji: '🎬', thai: 'ผู้กำกับ',          def: 'the person who tells the actors what to do in a film',  example: 'The director won an award for this film.', synonym: null,        antonym: null },
        { word: 'scene',     pos: 'noun',      ipa: '/siːn/',         emoji: '🎞️', thai: 'ฉาก',              def: 'a part of a film that happens in one place',           example: 'The last scene made me cry.',            synonym: null,        antonym: null },
        { word: 'exciting',  pos: 'adjective', ipa: '/ɪkˈsaɪ.tɪŋ/',   emoji: '🤩', thai: 'น่าตื่นเต้น',      def: 'making you feel very interested and happy',            example: 'The film was so exciting!',              synonym: 'thrilling', antonym: 'boring' },
        { word: 'boring',    pos: 'adjective', ipa: '/ˈbɔː.rɪŋ/',     emoji: '😴', thai: 'น่าเบื่อ',         def: 'not interesting at all',                               example: 'That movie was long and boring.',        synonym: 'dull',      antonym: 'exciting' },
        { word: 'ticket',    pos: 'noun',      ipa: '/ˈtɪk.ɪt/',      emoji: '🎟️', thai: 'ตั๋ว',             def: 'a paper that lets you enter the cinema',               example: 'I bought two tickets online.',           synonym: null,        antonym: null },
        { word: 'comedy',    pos: 'noun',      ipa: '/ˈkɒm.ə.di/',    emoji: '😂', thai: 'หนังตลก',          def: 'a film that is funny and makes you laugh',             example: 'We watched a comedy last night.',        synonym: null,        antonym: null },
        { word: 'watch',     pos: 'verb',      ipa: '/wɒtʃ/',         emoji: '👀', thai: 'ดู / ชม',          def: 'to look at something for a period of time',            example: 'I watch a movie every weekend.',         synonym: 'view',      antonym: null },
      ]
    },

    grammar: {
      id: 'a2-unit-9-grammar',
      title: 'Past Simple',
      thai: 'อดีตกาลธรรมดา (Past Simple)',
      emoji: '📐',
      level: 'A2',
      summary: 'ใช้ Past Simple เพื่อพูดถึงเหตุการณ์ที่จบไปแล้วในอดีต เช่น หนังที่เราดูเมื่อวานนี้',
      explanation: [
        {
          heading: 'Regular verbs: เติม -ed',
          body: 'กริยาปกติเติม -ed ท้ายคำเพื่อทำเป็นอดีต\n\nwatch → watched · play → played · enjoy → enjoyed\nlike → liked (คำที่ลงท้าย e เติมแค่ -d)\n\nตัวอย่าง: I watched a film last night. (ฉันดูหนังเมื่อคืน)'
        },
        {
          heading: 'Irregular verbs: เปลี่ยนรูป',
          body: 'กริยาไม่ปกติต้องจำรูปอดีตเป็นคำ ๆ ไป\n\nsee → saw · go → went · is/am → was · are → were\nhave → had · buy → bought · think → thought'
        },
        {
          heading: 'Negatives & Questions: did / did not',
          body: 'ประโยคปฏิเสธและคำถามใช้ did แล้วกริย­ากลับเป็นรูปเดิม (V1)\n\n❌ I did not watched.  ✅ I did not watch.\nQuestion: Did you watch the film? (คุณดูหนังหรือเปล่า?)'
        }
      ],
      examples: [
        { en: 'I watched a comedy last night.',        th: 'ฉันดูหนังตลกเมื่อคืน' },
        { en: 'We saw a great film yesterday.',        th: 'พวกเราดูหนังเยี่ยม ๆ เรื่องหนึ่งเมื่อวาน' },
        { en: 'She bought two tickets.',               th: 'เธอซื้อตั๋วสองใบ' },
        { en: 'The movie was very exciting.',          th: 'หนังเรื่องนั้นน่าตื่นเต้นมาก' },
        { en: 'They did not like the ending.',         th: 'พวกเขาไม่ชอบตอนจบ' },
        { en: 'Did you enjoy the film?',               th: 'คุณสนุกกับหนังไหม?' },
      ],
      practice: [
        { id: 'a2u9-gr-p1', type: 'fill-in-blank',  prompt: 'Yesterday I ___ (watch) a movie.',                     answer: 'watched', acceptedVariants: [],                explanation: 'watch เป็นกริยาปกติ เติม -ed' },
        { id: 'a2u9-gr-p2', type: 'multiple-choice', prompt: 'Choose the past form: We ___ a great film.',           options: ['see','saw','seen','sees'],                    correctIndex: 1, explanation: 'see เป็นกริยาไม่ปกติ อดีตคือ saw' },
        { id: 'a2u9-gr-p3', type: 'fill-in-blank',  prompt: 'She ___ (buy) the tickets online.',                    answer: 'bought', acceptedVariants: [],                 explanation: 'buy เป็นกริยาไม่ปกติ อดีตคือ bought' },
      ],
      quiz: [
        { id: 'a2u9-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                          options: ['I watch a film yesterday.','I watched a film yesterday.','I watching a film yesterday.','I watches a film yesterday.'], correctIndex: 1, explanation: 'yesterday บอกอดีต ต้องใช้ watched' },
        { id: 'a2u9-gr-q2', type: 'fill-in-blank',  prompt: 'We ___ (go) to the cinema last weekend.',              answer: 'went', acceptedVariants: [],                   explanation: 'go เป็นกริยาไม่ปกติ อดีตคือ went' },
        { id: 'a2u9-gr-q3', type: 'multiple-choice', prompt: '"They ___ not like the movie." เติมคำใดถูกต้อง?',      options: ['do','did','does','was'],                       correctIndex: 1, explanation: 'ประโยคปฏิเสธในอดีตใช้ did not' },
        { id: 'a2u9-gr-q4', type: 'fill-in-blank',  prompt: '___ you enjoy the film? (คำถามในอดีต)',                answer: 'Did', acceptedVariants: ['did'],               explanation: 'คำถามในอดีตขึ้นต้นด้วย Did' },
      ]
    },

    listening: {
      id: 'a2-unit-9-listening',
      type: 'Conversation',
      title: 'Talking About a Movie',
      thai: 'คุยกันเรื่องหนัง',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Ploy',  text: 'Hi Sam! Did you watch a movie this weekend?',            thai: 'สวัสดีแซม สุดสัปดาห์นี้เธอได้ดูหนังไหม?' },
        { speaker: 'Sam',   text: 'Yes, I did. I saw a new action film on Saturday.',      thai: 'ดูสิ ฉันดูหนังแอ็คชั่นเรื่องใหม่เมื่อวันเสาร์' },
        { speaker: 'Ploy',  text: 'Was it good? Who was the main actor?',                   thai: 'มันดีไหม? ใครเป็นนักแสดงนำ?' },
        { speaker: 'Sam',   text: 'It was very exciting! The actor was Tom Reed.',          thai: 'มันน่าตื่นเต้นมาก! นักแสดงคือทอม รีด' },
        { speaker: 'Ploy',  text: 'I love him. Where did you watch it?',                    thai: 'ฉันชอบเขา เธอดูที่ไหน?' },
        { speaker: 'Sam',   text: 'At the cinema. I bought the tickets online.',           thai: 'ที่โรงหนัง ฉันซื้อตั๋วออนไลน์' },
        { speaker: 'Ploy',  text: 'Nice! Was the ending good?',                            thai: 'ดีจัง! ตอนจบดีไหม?' },
        { speaker: 'Sam',   text: 'Yes, the last scene was the best part of the film.',    thai: 'ดีสิ ฉากสุดท้ายเป็นส่วนที่ดีที่สุดของหนัง' },
      ],
      questions: [
        { id: 'a2u9-ls-q1', type: 'multiple-choice', prompt: 'What kind of film did Sam watch?',       options: ['A comedy','An action film','A cartoon','A romance'],        correctIndex: 1, explanation: 'แซมพูดว่า "I saw a new action film"' },
        { id: 'a2u9-ls-q2', type: 'multiple-choice', prompt: 'Who was the main actor?',                options: ['Sam','Tom Reed','Ploy','Tom Cruise'],                       correctIndex: 1, explanation: 'แซมพูดว่า "The actor was Tom Reed"' },
        { id: 'a2u9-ls-q3', type: 'multiple-choice', prompt: 'How did Sam buy the tickets?',           options: ['At the cinema','By phone','Online','From a friend'],        correctIndex: 2, explanation: 'แซมพูดว่า "I bought the tickets online"' },
        { id: 'a2u9-ls-q4', type: 'multiple-choice', prompt: 'What was the best part of the film?',     options: ['The first scene','The main actor','The last scene','The music'], correctIndex: 2, explanation: 'แซมพูดว่า "the last scene was the best part"' },
      ]
    },

    reading: {
      id: 'a2-unit-9-reading',
      type: 'Story',
      title: 'My First Time at the Cinema',
      thai: 'ครั้งแรกที่โรงหนัง',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      paragraphs: [
        'Last month, my family and I went to the cinema in the city. It was my little sister\'s first time, and she was very excited. We arrived early and bought our tickets and some popcorn.',
        'We watched a comedy about a funny dog and his family. The film was ninety minutes long. My sister laughed at every scene. My parents enjoyed it too, but my father almost fell asleep in the middle!',
        'After the movie, we talked about our favourite parts. My sister loved the dog. I liked the actor who played the father because he was very funny. We all agreed it was a great choice.',
        'On the way home, my sister asked, "Can we go again next week?" My mother smiled and said maybe. It was a simple day, but it became one of my happiest memories with my family.',
      ],
      dialogue: null,
      glossary: [
        { word: 'popcorn',   thai: 'ป๊อปคอร์น',        def: 'a snack made from heated corn, often eaten at the cinema' },
        { word: 'laughed',   thai: 'หัวเราะ (อดีต)',   def: 'past form of laugh; showed you thought something was funny' },
        { word: 'fell asleep', thai: 'หลับไป',          def: 'started to sleep' },
        { word: 'memory',    thai: 'ความทรงจำ',        def: 'something you remember from the past' },
      ],
      summary: "The writer went to the cinema with the family and watched a comedy about a dog. The little sister loved it, and it became a happy family memory.",
      summaryThai: 'ผู้เขียนไปโรงหนังกับครอบครัวและดูหนังตลกเกี่ยวกับสุนัข น้องสาวชอบมาก และมันกลายเป็นความทรงจำที่มีความสุขของครอบครัว',
      questions: [
        { id: 'a2u9-rd-q1', type: 'multiple-choice', prompt: 'Whose first time was it at the cinema?',      options: ['The writer','The little sister','The father','The mother'], correctIndex: 1, explanation: 'ข้อความบอกว่า "It was my little sister\'s first time"' },
        { id: 'a2u9-rd-q2', type: 'multiple-choice', prompt: 'What kind of film did they watch?',           options: ['An action film','A horror film','A comedy','A cartoon'],    correctIndex: 2, explanation: 'ข้อความบอกว่า "We watched a comedy"' },
        { id: 'a2u9-rd-q3', type: 'multiple-choice', prompt: 'What happened to the father?',                options: ['He laughed a lot','He almost fell asleep','He left early','He bought tickets'], correctIndex: 1, explanation: 'ข้อความบอกว่า "my father almost fell asleep"' },
        { id: 'a2u9-rd-q4', type: 'multiple-choice', prompt: 'What did the sister ask on the way home?',    options: ['Can we eat now?','Can we go again next week?','Where is Dad?','Can I sleep?'], correctIndex: 1, explanation: 'น้องสาวถามว่า "Can we go again next week?"' },
      ]
    },

    test: {
      id: 'a2-unit-9-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u9-t-01', type: 'multiple-choice', prompt: '"ผู้กำกับ" ในภาษาอังกฤษคือคำใด?',                     options: ['actor','director','ticket','scene'],                        correctIndex: 1, explanation: '"director" = ผู้กำกับ' },
        { id: 'a2u9-t-02', type: 'multiple-choice', prompt: 'What does "boring" mean?',                            options: ['น่าตื่นเต้น','น่าเบื่อ','ตลก','สวย'],                       correctIndex: 1, explanation: '"boring" = น่าเบื่อ' },
        { id: 'a2u9-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "boring" คือ ___',                       answer: 'exciting', acceptedVariants: [],                              explanation: '"exciting" ตรงข้ามกับ boring' },
        { id: 'a2u9-t-04', type: 'multiple-choice', prompt: '"I ___ a film last night." เติมคำใดถูกต้อง?',        options: ['watch','watched','watches','watching'],                     correctIndex: 1, explanation: 'last night บอกอดีต ใช้ watched' },
        { id: 'a2u9-t-05', type: 'fill-in-blank',   prompt: 'We ___ (see) a great movie yesterday.',              answer: 'saw', acceptedVariants: [],                                   explanation: 'see อดีตคือ saw' },
        { id: 'a2u9-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                         options: ['Did you watched it?','Did you watch it?','Do you watched it?','You did watch it?'], correctIndex: 1, explanation: 'คำถามในอดีตใช้ did + กริยารูปเดิม' },
        { id: 'a2u9-t-07', type: 'fill-in-blank',   prompt: 'She ___ (buy) two tickets.',                         answer: 'bought', acceptedVariants: [],                                explanation: 'buy อดีตคือ bought' },
        { id: 'a2u9-t-08', type: 'multiple-choice', prompt: 'In the listening, what kind of film did Sam watch?', options: ['A comedy','An action film','A romance','A cartoon'],        correctIndex: 1, explanation: 'แซมพูดว่า "I saw a new action film"' },
        { id: 'a2u9-t-09', type: 'multiple-choice', prompt: 'In the listening, how did Sam buy the tickets?',     options: ['At the cinema','Online','By phone','From a friend'],        correctIndex: 1, explanation: 'แซมซื้อตั๋วออนไลน์' },
        { id: 'a2u9-t-10', type: 'multiple-choice', prompt: 'In the reading, what kind of film did the family watch?', options: ['A horror film','A comedy','An action film','A romance'], correctIndex: 1, explanation: 'ครอบครัวดูหนังตลก (comedy)' },
      ]
    }
  },

  // ==========================================================================
  // A2 Unit 10: Internet
  // ==========================================================================
  {
    id: 'a2-unit-10',
    title: 'Unit 10: Internet',
    thai: 'บทที่ 10: อินเทอร์เน็ต',
    emoji: '🌐',

    vocabulary: {
      id: 'a2-unit-10-vocab',
      title: 'Internet',
      thai: 'อินเทอร์เน็ต',
      emoji: '🌐',
      level: 'A2',
      words: [
        { word: 'website',   pos: 'noun',      ipa: '/ˈweb.saɪt/',    emoji: '🌐', thai: 'เว็บไซต์',          def: 'a set of pages on the internet',                       example: 'This website has good recipes.',         synonym: 'site',     antonym: null },
        { word: 'download',  pos: 'verb',      ipa: '/ˌdaʊnˈloʊd/',   emoji: '⬇️', thai: 'ดาวน์โหลด',        def: 'to copy files from the internet to your device',       example: 'I download music every day.',            synonym: null,       antonym: 'upload' },
        { word: 'password',  pos: 'noun',      ipa: '/ˈpæs.wɜːrd/',   emoji: '🔑', thai: 'รหัสผ่าน',         def: 'a secret word you use to log in',                      example: 'Do not share your password.',            synonym: null,       antonym: null },
        { word: 'search',    pos: 'verb',      ipa: '/sɜːrtʃ/',       emoji: '🔍', thai: 'ค้นหา',            def: 'to look for information online',                       example: 'I search for answers on the internet.',  synonym: 'look for', antonym: null },
        { word: 'email',     pos: 'noun',      ipa: '/ˈiː.meɪl/',     emoji: '📧', thai: 'อีเมล',            def: 'a message sent over the internet',                     example: 'She sent me an email this morning.',     synonym: null,       antonym: null },
        { word: 'online',    pos: 'adjective', ipa: '/ˌɒnˈlaɪn/',     emoji: '💻', thai: 'ออนไลน์',          def: 'connected to the internet',                            example: 'I am online most of the day.',           synonym: null,       antonym: 'offline' },
        { word: 'upload',    pos: 'verb',      ipa: '/ˌʌpˈloʊd/',     emoji: '⬆️', thai: 'อัปโหลด',          def: 'to send files from your device to the internet',       example: 'He uploaded a video to the website.',    synonym: null,       antonym: 'download' },
        { word: 'message',   pos: 'noun',      ipa: '/ˈmes.ɪdʒ/',     emoji: '💬', thai: 'ข้อความ',          def: 'a piece of written information you send to someone',   example: 'I sent her a message last night.',       synonym: 'text',     antonym: null },
      ]
    },

    grammar: {
      id: 'a2-unit-10-grammar',
      title: 'Present Continuous',
      thai: 'ปัจจุบันกาลต่อเนื่อง (Present Continuous)',
      emoji: '📐',
      level: 'A2',
      summary: 'ใช้ Present Continuous เพื่อพูดถึงสิ่งที่กำลังเกิดขึ้นตอนนี้ เช่น "ฉันกำลังค้นหาข้อมูลบนอินเทอร์เน็ต"',
      explanation: [
        {
          heading: 'โครงสร้าง: am / is / are + V-ing',
          body: 'ใช้ verb to be คู่กับกริยาเติม -ing\n\nI am searching. · He is downloading. · They are chatting.\n\nตัวอย่าง: I am watching a video now. (ตอนนี้ฉันกำลังดูวิดีโอ)'
        },
        {
          heading: 'การเติม -ing',
          body: 'ปกติเติม -ing ท้ายคำ: search → searching\nคำที่ลงท้าย e ตัด e ก่อน: use → using · type → typing\nคำพยางค์เดียวเสียงสั้นซ้ำตัวสุดท้าย: chat → chatting'
        },
        {
          heading: 'Present Simple vs Present Continuous',
          body: 'Present Simple = สิ่งที่ทำเป็นประจำ (I check my email every day.)\nPresent Continuous = สิ่งที่กำลังทำตอนนี้ (I am checking my email now.)\n\n⚠️ มักใช้กับ now, at the moment, right now'
        }
      ],
      examples: [
        { en: 'I am searching for a recipe now.',       th: 'ตอนนี้ฉันกำลังค้นหาสูตรอาหาร' },
        { en: 'She is downloading a file.',             th: 'เธอกำลังดาวน์โหลดไฟล์' },
        { en: 'They are watching a video online.',      th: 'พวกเขากำลังดูวิดีโอออนไลน์' },
        { en: 'He is uploading photos right now.',      th: 'ตอนนี้เขากำลังอัปโหลดรูปภาพ' },
        { en: 'We are not using the internet now.',     th: 'ตอนนี้พวกเราไม่ได้ใช้อินเทอร์เน็ต' },
        { en: 'What are you doing online?',             th: 'คุณกำลังทำอะไรออนไลน์อยู่?' },
      ],
      practice: [
        { id: 'a2u10-gr-p1', type: 'fill-in-blank',  prompt: 'I ___ (search) for information now.',                answer: 'am searching', acceptedVariants: ["'m searching"], explanation: 'I + am + V-ing' },
        { id: 'a2u10-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct form: She ___ a file.',          options: ['download','is downloading','downloads','are downloading'], correctIndex: 1, explanation: 'She + is + V-ing' },
        { id: 'a2u10-gr-p3', type: 'fill-in-blank',  prompt: 'They ___ (watch) a video right now.',                answer: 'are watching', acceptedVariants: [],           explanation: 'They + are + V-ing' },
      ],
      quiz: [
        { id: 'a2u10-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                       options: ['I am search now.','I am searching now.','I searching now.','I searches now.'], correctIndex: 1, explanation: 'ต้องใช้ am + searching' },
        { id: 'a2u10-gr-q2', type: 'fill-in-blank',  prompt: 'He ___ (upload) photos at the moment.',              answer: 'is uploading', acceptedVariants: [],           explanation: 'He + is + uploading' },
        { id: 'a2u10-gr-q3', type: 'multiple-choice', prompt: '"We ___ using the internet now." เติมคำใดถูกต้อง?', options: ['am','is','are','be'],                          correctIndex: 2, explanation: 'We ใช้ are + V-ing' },
        { id: 'a2u10-gr-q4', type: 'fill-in-blank',  prompt: 'What ___ you doing online? (กำลังทำอะไร)',           answer: 'are', acceptedVariants: [],                    explanation: 'you ใช้ are + doing' },
      ]
    },

    listening: {
      id: 'a2-unit-10-listening',
      type: 'Conversation',
      title: 'A Problem with the Password',
      thai: 'ปัญหาเรื่องรหัสผ่าน',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Mint', text: 'Dad, I am trying to log in, but it says my password is wrong.',   thai: 'พ่อคะ หนูกำลังพยายามล็อกอิน แต่มันบอกว่ารหัสผ่านผิด' },
        { speaker: 'Dad',  text: 'Are you sure you are typing it correctly?',                        thai: 'หนูแน่ใจว่าพิมพ์ถูกไหม?' },
        { speaker: 'Mint', text: 'Yes, I am. But it still does not work.',                           thai: 'ค่ะ หนูแน่ใจ แต่มันก็ยังใช้ไม่ได้' },
        { speaker: 'Dad',  text: 'Okay. Click on "Forgot password" on the website.',                 thai: 'โอเค คลิกที่ "ลืมรหัสผ่าน" บนเว็บไซต์สิ' },
        { speaker: 'Mint', text: 'Good idea. Now it is sending an email to me.',                      thai: 'ความคิดดี ตอนนี้มันกำลังส่งอีเมลมาให้หนู' },
        { speaker: 'Dad',  text: 'Great. Open the email and make a new password.',                   thai: 'เยี่ยม เปิดอีเมลแล้วตั้งรหัสผ่านใหม่' },
        { speaker: 'Mint', text: 'It is working now! Thank you, Dad.',                               thai: 'ตอนนี้ใช้ได้แล้ว! ขอบคุณค่ะพ่อ' },
        { speaker: 'Dad',  text: 'Well done. And this time, remember your new password!',            thai: 'เก่งมาก และคราวนี้จำรหัสผ่านใหม่ให้ได้นะ' },
      ],
      questions: [
        { id: 'a2u10-ls-q1', type: 'multiple-choice', prompt: 'What is Mint\'s problem?',               options: ['Her computer is broken','Her password is wrong','She has no internet','Her email is full'], correctIndex: 1, explanation: 'มินต์พูดว่า "it says my password is wrong"' },
        { id: 'a2u10-ls-q2', type: 'multiple-choice', prompt: 'What does Dad tell her to click?',       options: ['"Forgot password"','"New user"','"Help"','"Log out"'],       correctIndex: 0, explanation: 'พ่อบอกให้คลิก "Forgot password"' },
        { id: 'a2u10-ls-q3', type: 'multiple-choice', prompt: 'What does the website send to Mint?',    options: ['A message','An email','A file','A photo'],                   correctIndex: 1, explanation: 'มินต์พูดว่า "it is sending an email to me"' },
        { id: 'a2u10-ls-q4', type: 'multiple-choice', prompt: 'What does Dad tell her to remember?',    options: ['Her name','Her new password','The website','His email'],     correctIndex: 1, explanation: 'พ่อบอกว่า "remember your new password"' },
      ]
    },

    reading: {
      id: 'a2-unit-10-reading',
      type: 'Story',
      title: 'Staying Safe Online',
      thai: 'ความปลอดภัยบนโลกออนไลน์',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      paragraphs: [
        'The internet is a wonderful tool. We can search for information, watch videos, and send messages to friends far away. But we must also be careful when we are online.',
        'One important rule is to use a strong password. A good password has letters, numbers, and symbols. You should never share your password with other people, and you should not use the same password for every website.',
        'You should also be careful about what you download. Some files can harm your computer. If an email asks for your password or your bank details, do not answer it. Real companies never ask for these things by email.',
        'The internet is safe when you follow simple rules. Think before you click, keep your password secret, and always ask an adult if you are not sure. Then you can enjoy everything the internet offers.',
      ],
      dialogue: null,
      glossary: [
        { word: 'tool',     thai: 'เครื่องมือ',       def: 'a thing that helps you do something' },
        { word: 'symbol',   thai: 'สัญลักษณ์',        def: 'a sign such as @ or # used in passwords' },
        { word: 'harm',     thai: 'ทำอันตราย',        def: 'to hurt or damage something' },
        { word: 'bank details', thai: 'ข้อมูลบัญชีธนาคาร', def: 'private information about your money and bank account' },
      ],
      summary: "The internet is useful but we must stay safe. Use a strong password, do not share it, be careful about downloads, and never give bank details by email.",
      summaryThai: 'อินเทอร์เน็ตมีประโยชน์แต่เราต้องระวังความปลอดภัย ใช้รหัสผ่านที่แข็งแรง อย่าแชร์ ระวังการดาวน์โหลด และอย่าให้ข้อมูลธนาคารทางอีเมล',
      questions: [
        { id: 'a2u10-rd-q1', type: 'multiple-choice', prompt: 'What should a good password have?',          options: ['Only letters','Only numbers','Letters, numbers, and symbols','Your name'], correctIndex: 2, explanation: 'ข้อความบอกว่า "A good password has letters, numbers, and symbols"' },
        { id: 'a2u10-rd-q2', type: 'multiple-choice', prompt: 'What should you never do with your password?', options: ['Change it','Share it','Remember it','Write it down'],       correctIndex: 1, explanation: 'ข้อความบอกว่า "never share your password"' },
        { id: 'a2u10-rd-q3', type: 'multiple-choice', prompt: 'What can some downloads do?',                 options: ['Help your computer','Harm your computer','Make it faster','Nothing'], correctIndex: 1, explanation: 'ข้อความบอกว่า "Some files can harm your computer"' },
        { id: 'a2u10-rd-q4', type: 'multiple-choice', prompt: 'Do real companies ask for your password by email?', options: ['Yes, always','Yes, sometimes','No, never','Only banks do'], correctIndex: 2, explanation: 'ข้อความบอกว่า "Real companies never ask for these things by email"' },
      ]
    },

    test: {
      id: 'a2-unit-10-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u10-t-01', type: 'multiple-choice', prompt: '"รหัสผ่าน" ในภาษาอังกฤษคือคำใด?',                   options: ['website','password','message','email'],                     correctIndex: 1, explanation: '"password" = รหัสผ่าน' },
        { id: 'a2u10-t-02', type: 'multiple-choice', prompt: 'What does "download" mean?',                        options: ['อัปโหลด','ดาวน์โหลด','ค้นหา','ลบ'],                          correctIndex: 1, explanation: '"download" = ดาวน์โหลด' },
        { id: 'a2u10-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "download" คือ ___',                   answer: 'upload', acceptedVariants: [],                                explanation: '"upload" ตรงข้ามกับ download' },
        { id: 'a2u10-t-04', type: 'multiple-choice', prompt: '"I ___ searching for a recipe now." เติมคำใดถูก?', options: ['is','am','are','be'],                                       correctIndex: 1, explanation: 'I ใช้ am + V-ing' },
        { id: 'a2u10-t-05', type: 'fill-in-blank',   prompt: 'She ___ (download) a file right now.',              answer: 'is downloading', acceptedVariants: [],                        explanation: 'She + is + downloading' },
        { id: 'a2u10-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                        options: ['They is watching a video.','They are watching a video.','They watching a video.','They am watching a video.'], correctIndex: 1, explanation: 'They ใช้ are + V-ing' },
        { id: 'a2u10-t-07', type: 'fill-in-blank',   prompt: 'What ___ you doing online? (กำลังทำอะไร)',          answer: 'are', acceptedVariants: [],                                   explanation: 'you ใช้ are + doing' },
        { id: 'a2u10-t-08', type: 'multiple-choice', prompt: 'In the listening, what is Mint\'s problem?',        options: ['No internet','Wrong password','Broken screen','Full email'], correctIndex: 1, explanation: 'รหัสผ่านของมินต์ผิด' },
        { id: 'a2u10-t-09', type: 'multiple-choice', prompt: 'In the listening, what does the website send?',     options: ['A file','An email','A photo','A game'],                      correctIndex: 1, explanation: 'เว็บไซต์ส่งอีเมลมาให้มินต์' },
        { id: 'a2u10-t-10', type: 'multiple-choice', prompt: 'In the reading, do real companies ask for your password by email?', options: ['Yes','No, never','Only sometimes','Only banks'], correctIndex: 1, explanation: 'บริษัทจริงไม่เคยขอรหัสผ่านทางอีเมล' },
      ]
    }
  },

  // ==========================================================================
  // A2 Unit 11: Work
  // ==========================================================================
  {
    id: 'a2-unit-11',
    title: 'Unit 11: Work',
    thai: 'บทที่ 11: การทำงาน',
    emoji: '💼',

    vocabulary: {
      id: 'a2-unit-11-vocab',
      title: 'Work',
      thai: 'การทำงาน',
      emoji: '💼',
      level: 'A2',
      words: [
        { word: 'job',        pos: 'noun',      ipa: '/dʒɒb/',        emoji: '💼', thai: 'งาน / อาชีพ',      def: 'the work a person does to earn money',                 example: 'She has a new job at a bank.',           synonym: 'work',      antonym: null },
        { word: 'office',     pos: 'noun',      ipa: '/ˈɒf.ɪs/',      emoji: '🏢', thai: 'สำนักงาน',         def: 'a place where people work at desks',                   example: 'I work in an office in the city.',       synonym: null,        antonym: null },
        { word: 'salary',     pos: 'noun',      ipa: '/ˈsæl.ər.i/',   emoji: '💰', thai: 'เงินเดือน',        def: 'the money you receive from your job each month',       example: 'His salary is quite good.',              synonym: 'pay',       antonym: null },
        { word: 'meeting',    pos: 'noun',      ipa: '/ˈmiː.tɪŋ/',    emoji: '📅', thai: 'การประชุม',        def: 'a time when people come together to talk about work',  example: 'We have a meeting at nine o\'clock.',    synonym: null,        antonym: null },
        { word: 'boss',       pos: 'noun',      ipa: '/bɒs/',         emoji: '👔', thai: 'เจ้านาย / หัวหน้า', def: 'the person who is in charge of workers',              example: 'My boss is very kind and fair.',         synonym: 'manager',   antonym: null },
        { word: 'busy',       pos: 'adjective', ipa: '/ˈbɪz.i/',      emoji: '🏃', thai: 'ยุ่ง',             def: 'having a lot of things to do',                         example: 'I am very busy this week.',              synonym: null,        antonym: 'free' },
        { word: 'colleague',  pos: 'noun',      ipa: '/ˈkɒl.iːɡ/',    emoji: '🤝', thai: 'เพื่อนร่วมงาน',    def: 'a person you work with',                               example: 'My colleagues are friendly.',            synonym: 'coworker',  antonym: null },
        { word: 'earn',       pos: 'verb',      ipa: '/ɜːrn/',        emoji: '💵', thai: 'หาเงิน / ได้รับ',  def: 'to get money by working',                              example: 'She earns a good salary.',               synonym: null,        antonym: 'spend' },
      ]
    },

    grammar: {
      id: 'a2-unit-11-grammar',
      title: 'Comparatives & Superlatives',
      thai: 'ขั้นกว่าและขั้นสุด (Comparatives & Superlatives)',
      emoji: '📐',
      level: 'A2',
      summary: 'ใช้ขั้นกว่า (comparative) เพื่อเปรียบเทียบสองสิ่ง และขั้นสุด (superlative) เพื่อบอกว่าสิ่งใดที่สุด เช่น เปรียบเทียบงานหรือเงินเดือน',
      explanation: [
        {
          heading: 'คำสั้น (short adjectives): -er / -est',
          body: 'คำพยางค์เดียวเติม -er (ขั้นกว่า) และ -est (ขั้นสุด)\n\nbig → bigger → the biggest\ncheap → cheaper → the cheapest\nbusy → busier → the busiest (คำลงท้าย y เปลี่ยนเป็น i)'
        },
        {
          heading: 'คำยาว (long adjectives): more / most',
          body: 'คำสองพยางค์ขึ้นไปใช้ more (ขั้นกว่า) และ the most (ขั้นสุด)\n\nexpensive → more expensive → the most expensive\ndifficult → more difficult → the most difficult'
        },
        {
          heading: 'คำพิเศษ & การใช้ than',
          body: 'good → better → the best · bad → worse → the worst\n\nขั้นกว่าใช้คู่กับ than: My job is better than his job.\nขั้นสุดใช้คู่กับ the: She has the best job in the office.'
        }
      ],
      examples: [
        { en: 'My salary is higher than before.',            th: 'เงินเดือนของฉันสูงกว่าเมื่อก่อน' },
        { en: 'This job is easier than my old job.',         th: 'งานนี้ง่ายกว่างานเก่าของฉัน' },
        { en: 'He is the busiest person in the office.',     th: 'เขาเป็นคนที่ยุ่งที่สุดในสำนักงาน' },
        { en: 'This meeting is more important than that one.', th: 'การประชุมนี้สำคัญกว่าการประชุมนั้น' },
        { en: 'She is the best boss I have ever had.',       th: 'เธอเป็นเจ้านายที่ดีที่สุดที่ฉันเคยมี' },
        { en: 'My new office is bigger than the old one.',   th: 'สำนักงานใหม่ของฉันใหญ่กว่าที่เก่า' },
      ],
      practice: [
        { id: 'a2u11-gr-p1', type: 'fill-in-blank',  prompt: 'This job is ___ (easy) than my old job.',            answer: 'easier', acceptedVariants: [],                explanation: 'easy → easier (คำสั้นลงท้าย y เปลี่ยนเป็น i)' },
        { id: 'a2u11-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct form: She is the ___ boss ever.', options: ['good','better','best','goodest'],             correctIndex: 2, explanation: 'good → best (ขั้นสุด)' },
        { id: 'a2u11-gr-p3', type: 'fill-in-blank',  prompt: 'This meeting is ___ important than that one.',       answer: 'more', acceptedVariants: [],                   explanation: 'important เป็นคำยาว ใช้ more' },
      ],
      quiz: [
        { id: 'a2u11-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                       options: ['My salary is higher than before.','My salary is more high than before.','My salary is highest than before.','My salary is high than before.'], correctIndex: 0, explanation: 'high เป็นคำสั้น ใช้ higher + than' },
        { id: 'a2u11-gr-q2', type: 'fill-in-blank',  prompt: 'He is the ___ (busy) person in the office.',         answer: 'busiest', acceptedVariants: [],                explanation: 'busy → the busiest (ขั้นสุด)' },
        { id: 'a2u11-gr-q3', type: 'multiple-choice', prompt: 'This job is ___ than my last job. (difficult)',      options: ['difficulter','more difficult','most difficult','difficultest'], correctIndex: 1, explanation: 'difficult เป็นคำยาว ใช้ more difficult' },
        { id: 'a2u11-gr-q4', type: 'fill-in-blank',  prompt: 'She is the ___ (good) boss I have ever had.',        answer: 'best', acceptedVariants: [],                   explanation: 'good → the best' },
      ]
    },

    listening: {
      id: 'a2-unit-11-listening',
      type: 'Conversation',
      title: 'A New Job',
      thai: 'งานใหม่',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Anna',  text: 'Hi Ben! I heard you started a new job. How is it?',        thai: 'สวัสดีเบน ฉันได้ยินว่าคุณเริ่มงานใหม่ เป็นยังไงบ้าง?' },
        { speaker: 'Ben',   text: 'It is great! The office is bigger than my old one.',       thai: 'เยี่ยมเลย! สำนักงานใหญ่กว่าที่เก่าของผม' },
        { speaker: 'Anna',  text: 'Nice! And is the salary better?',                          thai: 'ดีจัง! แล้วเงินเดือนดีกว่าไหม?' },
        { speaker: 'Ben',   text: 'Yes, it is higher than before. And my boss is very kind.',  thai: 'ใช่ สูงกว่าเมื่อก่อน และเจ้านายของผมใจดีมาก' },
        { speaker: 'Anna',  text: 'That is important. Are you busy?',                          thai: 'สำคัญมากเลย คุณยุ่งไหม?' },
        { speaker: 'Ben',   text: 'Very busy! We have a meeting every morning.',              thai: 'ยุ่งมาก! เรามีประชุมทุกเช้า' },
        { speaker: 'Anna',  text: 'And what about your colleagues?',                           thai: 'แล้วเพื่อนร่วมงานของคุณล่ะ?' },
        { speaker: 'Ben',   text: 'They are the friendliest people I have ever worked with.',  thai: 'พวกเขาเป็นคนที่เป็นมิตรที่สุดที่ผมเคยทำงานด้วย' },
      ],
      questions: [
        { id: 'a2u11-ls-q1', type: 'multiple-choice', prompt: 'How is Ben\'s new office?',               options: ['Smaller than before','Bigger than before','The same size','Very old'], correctIndex: 1, explanation: 'เบนพูดว่า "The office is bigger than my old one"' },
        { id: 'a2u11-ls-q2', type: 'multiple-choice', prompt: 'How is the salary?',                      options: ['Lower than before','The same','Higher than before','Very bad'],  correctIndex: 2, explanation: 'เบนพูดว่า "it is higher than before"' },
        { id: 'a2u11-ls-q3', type: 'multiple-choice', prompt: 'How often do they have a meeting?',       options: ['Every week','Every morning','Every month','Never'],          correctIndex: 1, explanation: 'เบนพูดว่า "We have a meeting every morning"' },
        { id: 'a2u11-ls-q4', type: 'multiple-choice', prompt: 'What does Ben say about his colleagues?', options: ['They are boring','They are the friendliest people','They are lazy','They are new'], correctIndex: 1, explanation: 'เบนพูดว่า "They are the friendliest people"' },
      ]
    },

    reading: {
      id: 'a2-unit-11-reading',
      type: 'Story',
      title: 'Nong\'s First Week at Work',
      thai: 'สัปดาห์แรกในการทำงานของน้อง',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      paragraphs: [
        'Nong finished university last year. Last month, she got her first job at a small company in Bangkok. She works in an office near her home, so she can walk to work every day.',
        'On her first day, Nong felt nervous. But her colleagues were very friendly, and her boss showed her everything. Now she knows how to use the computer system and answer the phone. The job is harder than she expected, but she is learning fast.',
        'The best part of the job is the people. Nong\'s colleagues often eat lunch together and help each other. Her salary is not very high yet, but she is happy. She thinks experience is more important than money at the start of a career.',
        'This week, Nong had her first meeting with the whole team. She was a little shy, but she shared one good idea. Her boss said, "Well done!" Nong went home feeling proud. She knows she made the right choice.',
      ],
      dialogue: null,
      glossary: [
        { word: 'company',    thai: 'บริษัท',           def: 'a business that makes or sells things' },
        { word: 'expected',   thai: 'คาดหวัง (อดีต)',   def: 'thought something would happen' },
        { word: 'experience', thai: 'ประสบการณ์',       def: 'knowledge or skill you get from doing something' },
        { word: 'career',     thai: 'อาชีพการงาน',      def: 'the work you do over many years of your life' },
      ],
      summary: "Nong got her first job at a company in Bangkok. The work is harder than expected, but her colleagues are friendly and she is learning fast. She values experience more than money.",
      summaryThai: 'น้องได้งานแรกที่บริษัทในกรุงเทพฯ งานยากกว่าที่คิด แต่เพื่อนร่วมงานเป็นมิตรและเธอเรียนรู้ได้เร็ว เธอเห็นว่าประสบการณ์สำคัญกว่าเงิน',
      questions: [
        { id: 'a2u11-rd-q1', type: 'multiple-choice', prompt: 'How does Nong get to work?',                 options: ['By bus','By car','She walks','By train'],                  correctIndex: 2, explanation: 'ข้อความบอกว่า "she can walk to work every day"' },
        { id: 'a2u11-rd-q2', type: 'multiple-choice', prompt: 'How did Nong feel on her first day?',        options: ['Happy','Nervous','Bored','Angry'],                          correctIndex: 1, explanation: 'ข้อความบอกว่า "Nong felt nervous"' },
        { id: 'a2u11-rd-q3', type: 'multiple-choice', prompt: 'What is the best part of the job for Nong?',  options: ['The salary','The office','The people','The computer'],      correctIndex: 2, explanation: 'ข้อความบอกว่า "The best part of the job is the people"' },
        { id: 'a2u11-rd-q4', type: 'multiple-choice', prompt: 'What does Nong think is more important at the start?', options: ['Money','Experience','A big office','A high salary'], correctIndex: 1, explanation: 'ข้อความบอกว่า "experience is more important than money"' },
      ]
    },

    test: {
      id: 'a2-unit-11-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u11-t-01', type: 'multiple-choice', prompt: '"เงินเดือน" ในภาษาอังกฤษคือคำใด?',                   options: ['job','salary','office','meeting'],                          correctIndex: 1, explanation: '"salary" = เงินเดือน' },
        { id: 'a2u11-t-02', type: 'multiple-choice', prompt: 'What does "colleague" mean?',                       options: ['เจ้านาย','เพื่อนร่วมงาน','ลูกค้า','เพื่อนบ้าน'],            correctIndex: 1, explanation: '"colleague" = เพื่อนร่วมงาน' },
        { id: 'a2u11-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "busy" คือ ___',                       answer: 'free', acceptedVariants: [],                                  explanation: '"free" (ว่าง) ตรงข้ามกับ busy' },
        { id: 'a2u11-t-04', type: 'multiple-choice', prompt: '"My office is ___ than the old one." (big)',        options: ['big','bigger','biggest','more big'],                        correctIndex: 1, explanation: 'big → bigger + than' },
        { id: 'a2u11-t-05', type: 'fill-in-blank',   prompt: 'She is the ___ (busy) person in the office.',        answer: 'busiest', acceptedVariants: [],                               explanation: 'busy → the busiest (ขั้นสุด)' },
        { id: 'a2u11-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                        options: ['She is the goodest boss.','She is the best boss.','She is the better boss ever.','She is most good boss.'], correctIndex: 1, explanation: 'good → the best' },
        { id: 'a2u11-t-07', type: 'fill-in-blank',   prompt: 'This job is ___ important than that job. (คำยาว)',   answer: 'more', acceptedVariants: [],                                  explanation: 'important เป็นคำยาว ใช้ more' },
        { id: 'a2u11-t-08', type: 'multiple-choice', prompt: 'In the listening, how is Ben\'s new office?',       options: ['Smaller','Bigger than before','The same','Very old'],       correctIndex: 1, explanation: 'สำนักงานใหม่ใหญ่กว่าที่เก่า' },
        { id: 'a2u11-t-09', type: 'multiple-choice', prompt: 'In the listening, how often is the meeting?',       options: ['Every week','Every morning','Every month','Never'],         correctIndex: 1, explanation: 'มีประชุมทุกเช้า' },
        { id: 'a2u11-t-10', type: 'multiple-choice', prompt: 'In the reading, what does Nong value more at the start?', options: ['Money','Experience','A big office','A car'],           correctIndex: 1, explanation: 'ประสบการณ์สำคัญกว่าเงิน' },
      ]
    }
  },

  // ==========================================================================
  // A2 Unit 12: School
  // ==========================================================================
  {
    id: 'a2-unit-12',
    title: 'Unit 12: School',
    thai: 'บทที่ 12: โรงเรียน',
    emoji: '🏫',

    vocabulary: {
      id: 'a2-unit-12-vocab',
      title: 'School',
      thai: 'โรงเรียน',
      emoji: '🏫',
      level: 'A2',
      words: [
        { word: 'teacher',    pos: 'noun',      ipa: '/ˈtiː.tʃər/',   emoji: '👩‍🏫', thai: 'ครู',              def: 'a person whose job is to teach students',              example: 'Our English teacher is very kind.',      synonym: null,        antonym: 'student' },
        { word: 'student',    pos: 'noun',      ipa: '/ˈstuː.dənt/',  emoji: '🧑‍🎓', thai: 'นักเรียน',         def: 'a person who studies at a school',                     example: 'There are thirty students in my class.', synonym: 'pupil',     antonym: 'teacher' },
        { word: 'homework',   pos: 'noun',      ipa: '/ˈhoʊm.wɜːrk/', emoji: '📝', thai: 'การบ้าน',          def: 'work that students do at home after school',           example: 'I always do my homework in the evening.', synonym: null,       antonym: null },
        { word: 'exam',       pos: 'noun',      ipa: '/ɪɡˈzæm/',      emoji: '📄', thai: 'การสอบ',           def: 'an important test of your knowledge',                  example: 'We have a maths exam on Friday.',        synonym: 'test',      antonym: null },
        { word: 'subject',    pos: 'noun',      ipa: '/ˈsʌb.dʒɪkt/',  emoji: '📚', thai: 'วิชา',             def: 'an area of study, like maths or science',              example: 'My favourite subject is history.',       synonym: null,        antonym: null },
        { word: 'classroom',  pos: 'noun',      ipa: '/ˈklɑːs.ruːm/', emoji: '🏫', thai: 'ห้องเรียน',        def: 'a room where students have lessons',                   example: 'Our classroom is on the second floor.',  synonym: null,        antonym: null },
        { word: 'learn',      pos: 'verb',      ipa: '/lɜːrn/',       emoji: '🧠', thai: 'เรียนรู้',         def: 'to get new knowledge or skills',                       example: 'I want to learn English well.',          synonym: 'study',     antonym: 'teach' },
        { word: 'difficult',  pos: 'adjective', ipa: '/ˈdɪf.ɪ.kəlt/', emoji: '😣', thai: 'ยาก',             def: 'not easy to do or understand',                         example: 'This subject is difficult for me.',      synonym: 'hard',      antonym: 'easy' },
      ]
    },

    grammar: {
      id: 'a2-unit-12-grammar',
      title: 'Adverbs of Frequency',
      thai: 'คำวิเศษณ์บอกความถี่ (Adverbs of Frequency)',
      emoji: '📐',
      level: 'A2',
      summary: 'ใช้คำบอกความถี่ เช่น always, usually, sometimes, never เพื่อบอกว่าทำสิ่งต่าง ๆ บ่อยแค่ไหน เหมาะกับกิจวัตรที่โรงเรียน',
      explanation: [
        {
          heading: 'คำบอกความถี่หลัก ๆ',
          body: 'เรียงจากบ่อยที่สุดไปน้อยที่สุด:\nalways (เสมอ 100%) · usually (ปกติ) · often (บ่อย) · sometimes (บางครั้ง) · rarely (นาน ๆ ครั้ง) · never (ไม่เคย 0%)'
        },
        {
          heading: 'ตำแหน่ง: หน้ากริยาทั่วไป',
          body: 'วางคำบอกความถี่ไว้ "หน้ากริยาหลัก"\n\nI always do my homework. (ฉันทำการบ้านเสมอ)\nShe never misses class. (เธอไม่เคยขาดเรียน)'
        },
        {
          heading: 'ตำแหน่ง: หลัง verb to be',
          body: 'แต่ถ้าเป็น verb to be (am/is/are) ให้วาง "หลัง" to be\n\nHe is always late. (เขามาสายเสมอ)\nThey are usually busy. (พวกเขามักจะยุ่ง)'
        }
      ],
      examples: [
        { en: 'I always do my homework.',              th: 'ฉันทำการบ้านเสมอ' },
        { en: 'She usually studies in the library.',   th: 'เธอมักจะอ่านหนังสือในห้องสมุด' },
        { en: 'We sometimes have exams on Friday.',    th: 'บางครั้งเราสอบวันศุกร์' },
        { en: 'He is often late for class.',           th: 'เขามักจะมาเรียนสาย' },
        { en: 'They never talk in the classroom.',     th: 'พวกเขาไม่เคยคุยกันในห้องเรียน' },
        { en: 'My teacher is always kind.',            th: 'ครูของฉันใจดีเสมอ' },
      ],
      practice: [
        { id: 'a2u12-gr-p1', type: 'multiple-choice', prompt: 'Where does the adverb go? "I ___ do my homework."', options: ['always do','do always','always doing','doing always'], correctIndex: 0, explanation: 'คำบอกความถี่วางหน้ากริยาหลัก: always do' },
        { id: 'a2u12-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct sentence with "always".',        options: ['He always is late.','He is always late.','He is late always.','Always he is late.'], correctIndex: 1, explanation: 'กับ to be วาง always หลัง is' },
        { id: 'a2u12-gr-p3', type: 'fill-in-blank',   prompt: 'เติมคำบอกความถี่ที่แปลว่า "ไม่เคย": She ___ misses class.', answer: 'never', acceptedVariants: [],           explanation: 'never = ไม่เคย' },
      ],
      quiz: [
        { id: 'a2u12-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                       options: ['I always do my homework.','I do always my homework.','I homework always do.','Always I do homework.'], correctIndex: 0, explanation: 'always วางหน้ากริยาหลัก do' },
        { id: 'a2u12-gr-q2', type: 'multiple-choice', prompt: '"She ___ studies in the library." (มักจะ/ปกติ)',     options: ['usually','never','the usually','usual'],                    correctIndex: 0, explanation: 'usually = มักจะ / ปกติ' },
        { id: 'a2u12-gr-q3', type: 'multiple-choice', prompt: 'Which is correct with "to be"?',                     options: ['He often is late.','He is often late.','Often he late.','He late is often.'], correctIndex: 1, explanation: 'กับ to be วาง often หลัง is' },
        { id: 'a2u12-gr-q4', type: 'fill-in-blank',   prompt: 'เติมคำที่แปลว่า "เสมอ": My teacher is ___ kind.',      answer: 'always', acceptedVariants: [],                                explanation: 'always = เสมอ (วางหลัง is)' },
      ]
    },

    listening: {
      id: 'a2-unit-12-listening',
      type: 'Conversation',
      title: 'Talking About School',
      thai: 'คุยกันเรื่องโรงเรียน',
      emoji: '🎧',
      level: 'A2',
      segments: [
        { speaker: 'Fah',   text: 'Hi Ton! What is your favourite subject at school?',        thai: 'สวัสดีต้น วิชาที่ชอบที่สุดของเธอคืออะไร?' },
        { speaker: 'Ton',   text: 'I love science. But maths is difficult for me.',            thai: 'ฉันชอบวิทยาศาสตร์ แต่คณิตศาสตร์ยากสำหรับฉัน' },
        { speaker: 'Fah',   text: 'Really? Do you always do your homework?',                   thai: 'จริงเหรอ? เธอทำการบ้านเสมอไหม?' },
        { speaker: 'Ton',   text: 'Yes, I usually do it after dinner. And you?',               thai: 'ใช่ ฉันมักทำหลังอาหารเย็น แล้วเธอล่ะ?' },
        { speaker: 'Fah',   text: 'I sometimes forget! But I never miss an exam.',             thai: 'ฉันลืมบ้างบางครั้ง! แต่ฉันไม่เคยขาดสอบ' },
        { speaker: 'Ton',   text: 'We have a science exam on Friday. Are you ready?',          thai: 'เรามีสอบวิทยาศาสตร์วันศุกร์ เธอพร้อมไหม?' },
        { speaker: 'Fah',   text: 'Not yet! Can we study together in the library?',            thai: 'ยังเลย! เราไปอ่านหนังสือด้วยกันในห้องสมุดได้ไหม?' },
        { speaker: 'Ton',   text: 'Sure! Our teacher says the library is the best place to study.', thai: 'ได้เลย! ครูของเราบอกว่าห้องสมุดเป็นที่ที่ดีที่สุดในการอ่านหนังสือ' },
      ],
      questions: [
        { id: 'a2u12-ls-q1', type: 'multiple-choice', prompt: 'What is Ton\'s favourite subject?',       options: ['Maths','Science','English','History'],                     correctIndex: 1, explanation: 'ต้นพูดว่า "I love science"' },
        { id: 'a2u12-ls-q2', type: 'multiple-choice', prompt: 'Which subject is difficult for Ton?',     options: ['Science','English','Maths','Art'],                          correctIndex: 2, explanation: 'ต้นพูดว่า "maths is difficult for me"' },
        { id: 'a2u12-ls-q3', type: 'multiple-choice', prompt: 'When does Ton usually do his homework?',   options: ['Before school','After dinner','In the morning','Never'],    correctIndex: 1, explanation: 'ต้นพูดว่า "I usually do it after dinner"' },
        { id: 'a2u12-ls-q4', type: 'multiple-choice', prompt: 'When is the science exam?',               options: ['Monday','Wednesday','Friday','Sunday'],                     correctIndex: 2, explanation: 'ต้นพูดว่า "We have a science exam on Friday"' },
      ]
    },

    reading: {
      id: 'a2-unit-12-reading',
      type: 'Story',
      title: 'A Day at My School',
      thai: 'หนึ่งวันที่โรงเรียนของฉัน',
      emoji: '📖',
      level: 'A2',
      minutes: 3,
      paragraphs: [
        'My name is Beam, and I study at a secondary school in Chiang Mai. School always starts at eight o\'clock. My first subject is usually English, which is my favourite. Our teacher is very patient and helps everyone.',
        'We have six subjects every day. Maths is the most difficult subject for me, but I never give up. My best friend, Praew, is very good at maths, so she often helps me after class. In return, I help her with English.',
        'At lunchtime, we eat in the canteen and talk about our lessons. In the afternoon, we usually have art or sport. I love art because it is relaxing. We rarely have exams, but when we do, I always study hard the week before.',
        'After school, I go home and do my homework. Sometimes it is a lot, but I know it is important. I want to go to university one day, so I try my best every day. School is difficult sometimes, but I really enjoy learning new things.',
      ],
      dialogue: null,
      glossary: [
        { word: 'secondary school', thai: 'โรงเรียนมัธยม',  def: 'a school for students about 12 to 18 years old' },
        { word: 'patient',   thai: 'อดทน / ใจเย็น',     def: 'able to wait calmly and stay calm' },
        { word: 'canteen',   thai: 'โรงอาหาร',          def: 'a place in a school where students eat' },
        { word: 'give up',   thai: 'ยอมแพ้',            def: 'to stop trying to do something' },
      ],
      summary: "Beam studies at a secondary school in Chiang Mai. English is the favourite subject and maths is the hardest. Beam and a friend help each other and work hard, hoping to go to university.",
      summaryThai: 'บีมเรียนที่โรงเรียนมัธยมในเชียงใหม่ วิชาที่ชอบคือภาษาอังกฤษ และคณิตศาสตร์ยากที่สุด บีมกับเพื่อนช่วยเหลือกันและตั้งใจเรียน โดยหวังจะได้เข้ามหาวิทยาลัย',
      questions: [
        { id: 'a2u12-rd-q1', type: 'multiple-choice', prompt: 'What is Beam\'s favourite subject?',          options: ['Maths','English','Art','Sport'],                           correctIndex: 1, explanation: 'ข้อความบอกว่า "English, which is my favourite"' },
        { id: 'a2u12-rd-q2', type: 'multiple-choice', prompt: 'Which subject is the most difficult for Beam?', options: ['English','Maths','Art','Science'],                        correctIndex: 1, explanation: 'ข้อความบอกว่า "Maths is the most difficult subject for me"' },
        { id: 'a2u12-rd-q3', type: 'multiple-choice', prompt: 'Who helps Beam with maths?',                  options: ['The teacher','Praew','Beam\'s mother','Nobody'],            correctIndex: 1, explanation: 'ข้อความบอกว่า "Praew... often helps me"' },
        { id: 'a2u12-rd-q4', type: 'multiple-choice', prompt: 'What does Beam want to do one day?',          options: ['Become a teacher','Go to university','Move to Bangkok','Stop studying'], correctIndex: 1, explanation: 'ข้อความบอกว่า "I want to go to university one day"' },
      ]
    },

    test: {
      id: 'a2-unit-12-test',
      passMark: 0.70,
      questions: [
        { id: 'a2u12-t-01', type: 'multiple-choice', prompt: '"การบ้าน" ในภาษาอังกฤษคือคำใด?',                    options: ['exam','homework','subject','classroom'],                    correctIndex: 1, explanation: '"homework" = การบ้าน' },
        { id: 'a2u12-t-02', type: 'multiple-choice', prompt: 'What does "difficult" mean?',                      options: ['ง่าย','ยาก','สนุก','ยาว'],                                  correctIndex: 1, explanation: '"difficult" = ยาก' },
        { id: 'a2u12-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "difficult" คือ ___',                  answer: 'easy', acceptedVariants: [],                                  explanation: '"easy" (ง่าย) ตรงข้ามกับ difficult' },
        { id: 'a2u12-t-04', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                     options: ['I do always my homework.','I always do my homework.','Always I do my homework.','I homework always do.'], correctIndex: 1, explanation: 'always วางหน้ากริยาหลัก do' },
        { id: 'a2u12-t-05', type: 'fill-in-blank',   prompt: 'เติมคำที่แปลว่า "เสมอ": My teacher is ___ kind.',    answer: 'always', acceptedVariants: [],                                explanation: 'always วางหลัง is' },
        { id: 'a2u12-t-06', type: 'multiple-choice', prompt: 'Which is correct with "to be"?',                   options: ['He often is late.','He is often late.','Often is he late.','He late often is.'], correctIndex: 1, explanation: 'กับ to be วาง often หลัง is' },
        { id: 'a2u12-t-07', type: 'fill-in-blank',   prompt: 'เติมคำที่แปลว่า "ไม่เคย": She ___ misses an exam.',   answer: 'never', acceptedVariants: [],                                 explanation: 'never = ไม่เคย' },
        { id: 'a2u12-t-08', type: 'multiple-choice', prompt: 'In the listening, what is Ton\'s favourite subject?', options: ['Maths','Science','English','Art'],                        correctIndex: 1, explanation: 'ต้นชอบวิทยาศาสตร์' },
        { id: 'a2u12-t-09', type: 'multiple-choice', prompt: 'In the listening, when is the science exam?',      options: ['Monday','Wednesday','Friday','Sunday'],                     correctIndex: 2, explanation: 'สอบวิทยาศาสตร์วันศุกร์' },
        { id: 'a2u12-t-10', type: 'multiple-choice', prompt: 'In the reading, what does Beam want to do one day?', options: ['Become a teacher','Go to university','Move away','Stop studying'], correctIndex: 1, explanation: 'บีมอยากเข้ามหาวิทยาลัย' },
      ]
    }
  }
]
