// B1 Part 2: Units 5-8 (Environment, News, Health, Money)

const b1Unit5 = {
  id: 'b1-unit-5',
  title: 'Unit 5: Environment',
  thai: 'บทที่ 5: สิ่งแวดล้อม',
  emoji: '🌍',

  vocabulary: {
    id: 'b1-unit-5-vocab',
    title: 'Environment',
    thai: 'สิ่งแวดล้อม',
    emoji: '🌍',
    level: 'B1',
    words: [
      { word: 'pollution',      pos: 'noun',      ipa: '/pəˈluː.ʃən/',     emoji: '🏭', thai: 'มลพิษ',              def: 'damage caused to water, air, or land by harmful substances',   example: 'Air pollution in the city is getting worse every year.', synonym: 'contamination', antonym: null },
      { word: 'recycle',        pos: 'verb',      ipa: '/ˌriːˈsaɪ.kəl/',   emoji: '♻️', thai: 'รีไซเคิล / นำกลับมาใช้ใหม่', def: 'to treat used materials so they can be used again',           example: 'We recycle plastic bottles and paper at home.',          synonym: 'reuse',        antonym: 'discard' },
      { word: 'climate',        pos: 'noun',      ipa: '/ˈklaɪ.mət/',      emoji: '🌡️', thai: 'สภาพภูมิอากาศ',      def: 'the general weather conditions of an area over a long time',   example: 'Climate change affects farmers all over the world.',      synonym: 'weather pattern', antonym: null },
      { word: 'waste',          pos: 'noun',      ipa: '/weɪst/',          emoji: '🗑️', thai: 'ขยะ / ของเสีย',      def: 'unwanted materials or things that are thrown away',            example: 'Factories must not dump their waste into rivers.',        synonym: 'rubbish',      antonym: null },
      { word: 'renewable',      pos: 'adjective', ipa: '/rɪˈnjuː.ə.bəl/',  emoji: '🔋', thai: 'หมุนเวียน / ทดแทนได้', def: 'able to be replaced naturally, like solar or wind energy',    example: 'Solar power is a clean, renewable source of energy.',     synonym: null,           antonym: 'finite' },
      { word: 'protect',        pos: 'verb',      ipa: '/prəˈtekt/',       emoji: '🛡️', thai: 'ปกป้อง / คุ้มครอง',  def: 'to keep something safe from harm or damage',                   example: 'We must protect the forests for future generations.',     synonym: 'preserve',     antonym: 'harm' },
      { word: 'endangered',     pos: 'adjective', ipa: '/ɪnˈdeɪn.dʒəd/',   emoji: '🐘', thai: 'ใกล้สูญพันธุ์',      def: 'in danger of no longer existing',                              example: 'Tigers are an endangered species in Thailand.',          synonym: 'threatened',   antonym: null },
      { word: 'sustainable',    pos: 'adjective', ipa: '/səˈsteɪ.nə.bəl/', emoji: '🌱', thai: 'ยั่งยืน',            def: 'able to continue without harming the environment',             example: 'The village uses sustainable farming methods.',          synonym: null,           antonym: 'wasteful' },
    ]
  },

  grammar: {
    id: 'b1-unit-5-grammar',
    title: 'Passive Voice',
    thai: 'ประโยคกรรม (Passive Voice)',
    emoji: '📐',
    level: 'B1',
    summary: 'เรียนรู้การใช้ Passive Voice (be + past participle) เพื่อเน้นสิ่งที่ถูกกระทำ เหมาะกับการพูดถึงปัญหาสิ่งแวดล้อมที่ไม่รู้หรือไม่สำคัญว่าใครเป็นผู้กระทำ',
    explanation: [
      {
        heading: 'โครงสร้าง Passive Voice',
        body: 'Passive = be + past participle (V3)\n\nActive: Factories pollute the river. (โรงงานทำให้แม่น้ำเป็นมลพิษ)\nPassive: The river is polluted by factories. (แม่น้ำถูกทำให้เป็นมลพิษโดยโรงงาน)\n\nใช้เมื่อเราสนใจ "สิ่งที่ถูกกระทำ" มากกว่า "ผู้กระทำ"'
      },
      {
        heading: 'Passive ในกาลต่าง ๆ',
        body: 'Present: Plastic is recycled here. (พลาสติกถูกรีไซเคิลที่นี่)\nPast: The forest was destroyed last year. (ป่าถูกทำลายเมื่อปีที่แล้ว)\nPresent Perfect: Many trees have been planted. (มีการปลูกต้นไม้ไปแล้วมากมาย)'
      },
      {
        heading: 'ใช้ by เพื่อบอกผู้กระทำ',
        body: 'ถ้าจำเป็นต้องบอกว่าใครเป็นผู้กระทำ ใช้ by\n\nThe rubbish is collected by the council. (ขยะถูกเก็บโดยเทศบาล)\n\n⚠️ ถ้าผู้กระทำไม่สำคัญหรือไม่รู้ ไม่ต้องใส่ by\n✅ English is spoken here. (ที่นี่พูดภาษาอังกฤษ)'
      }
    ],
    examples: [
      { en: 'The river is polluted by the factory.',       th: 'แม่น้ำถูกทำให้เป็นมลพิษโดยโรงงาน' },
      { en: 'Millions of trees are cut down every year.',   th: 'ต้นไม้หลายล้านต้นถูกตัดโค่นทุกปี' },
      { en: 'The old bottles were recycled last week.',     th: 'ขวดเก่าถูกนำไปรีไซเคิลเมื่อสัปดาห์ที่แล้ว' },
      { en: 'A new park has been built in our town.',       th: 'สวนสาธารณะแห่งใหม่ถูกสร้างขึ้นในเมืองของเรา' },
      { en: 'Plastic bags are banned in many shops now.',   th: 'ถุงพลาสติกถูกห้ามใช้ในร้านค้าหลายแห่งแล้ว' },
      { en: 'The problem must be solved quickly.',          th: 'ปัญหานี้ต้องถูกแก้ไขโดยเร็ว' },
    ],
    practice: [
      { id: 'b1u5-gr-p1', type: 'fill-in-blank',   prompt: 'The river ___ polluted by the factory. (present)',                answer: 'is',  acceptedVariants: [],          explanation: 'Present passive ใช้ is + V3 (polluted)' },
      { id: 'b1u5-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct passive: The forest ___ destroyed last year.', options: ['is','was','has','are'], correctIndex: 1, explanation: 'Past passive ใช้ was/were + V3; เหตุการณ์ในอดีต (last year) ใช้ was' },
      { id: 'b1u5-gr-p3', type: 'fill-in-blank',   prompt: 'Many trees have ___ planted this year. (past participle of "plant")', answer: 'been', acceptedVariants: [], explanation: 'Present perfect passive = have/has + been + V3' },
      { id: 'b1u5-gr-p4', type: 'multiple-choice', prompt: 'Make it passive: "People recycle plastic here."',                  options: ['Plastic recycles here.','Plastic is recycled here.','Plastic is recycling here.','Plastic recycled here.'], correctIndex: 1, explanation: 'Present passive = is/are + V3 (recycled)' },
    ],
    quiz: [
      { id: 'b1u5-gr-q1', type: 'multiple-choice', prompt: 'Which sentence is a correct passive?',                            options: ['The air polluted by cars.','The air is pollute by cars.','The air is polluted by cars.','The air are polluted by cars.'], correctIndex: 2, explanation: 'Present passive = be + V3; "air" เป็นเอกพจน์ ใช้ is polluted' },
      { id: 'b1u5-gr-q2', type: 'fill-in-blank',   prompt: 'The rubbish ___ collected every morning. (present passive of "be")', answer: 'is', acceptedVariants: [], explanation: '"rubbish" นับไม่ได้ ถือเป็นเอกพจน์ ใช้ is + collected' },
      { id: 'b1u5-gr-q3', type: 'multiple-choice', prompt: 'Choose the past passive: The building ___ built in 1990.',        options: ['is','was','were','has'], correctIndex: 1, explanation: 'เอกพจน์ในอดีต ใช้ was + built' },
      { id: 'b1u5-gr-q4', type: 'fill-in-blank',   prompt: 'Complete: Plastic bags have been ___ in many shops. (V3 of "ban")', answer: 'banned', acceptedVariants: [], explanation: 'Present perfect passive = have been + V3 (banned)' },
    ]
  },

  listening: {
    id: 'b1-unit-5-listening',
    type: 'Conversation',
    title: 'Planning a Beach Clean-up',
    thai: 'วางแผนเก็บขยะชายหาด',
    emoji: '🎧',
    level: 'B1',
    segments: [
      { speaker: 'Ploy',  text: 'Have you heard about the beach clean-up this Saturday?',        thai: 'เธอได้ยินเรื่องกิจกรรมเก็บขยะชายหาดวันเสาร์นี้ไหม?' },
      { speaker: 'Ken',   text: 'Yes, I have. A lot of plastic waste has been washed up lately.', thai: 'ได้ยินแล้ว ช่วงนี้มีขยะพลาสติกถูกซัดขึ้นฝั่งเยอะมาก' },
      { speaker: 'Ploy',  text: 'Exactly. The sea turtles here are endangered because of it.',   thai: 'ใช่เลย เต่าทะเลแถวนี้ใกล้สูญพันธุ์เพราะเรื่องนี้' },
      { speaker: 'Ken',   text: 'So what will be done with the rubbish we collect?',              thai: 'แล้วขยะที่เราเก็บได้จะถูกจัดการยังไง?' },
      { speaker: 'Ploy',  text: 'Most of it will be recycled. The rest is taken to a proper site.', thai: 'ส่วนใหญ่จะถูกนำไปรีไซเคิล ส่วนที่เหลือถูกนำไปทิ้งในที่ที่ถูกต้อง' },
      { speaker: 'Ken',   text: 'Great. Should we bring gloves and bags?',                        thai: 'ดีเลย เราต้องเอาถุงมือกับถุงขยะมาไหม?' },
      { speaker: 'Ploy',  text: 'Gloves are provided, but bring your own water bottle.',          thai: 'ถุงมือมีเตรียมไว้ให้ แต่ให้เอาขวดน้ำมาเอง' },
      { speaker: 'Ken',   text: 'Perfect. I will tell my classmates to join too.',               thai: 'เยี่ยม เดี๋ยวฉันจะชวนเพื่อนร่วมชั้นมาช่วยด้วย' },
    ],
    questions: [
      { id: 'b1u5-ls-q1', type: 'multiple-choice', prompt: 'When is the beach clean-up?',                    options: ['This Friday','This Saturday','This Sunday','Next month'], correctIndex: 1, explanation: 'พลอยพูดว่า "the beach clean-up this Saturday"' },
      { id: 'b1u5-ls-q2', type: 'multiple-choice', prompt: 'Why are the sea turtles endangered?',            options: ['Because of hunters','Because of plastic waste','Because of the heat','Because of boats'], correctIndex: 1, explanation: 'พลอยบอกว่าเต่าใกล้สูญพันธุ์ "because of it" (plastic waste)' },
      { id: 'b1u5-ls-q3', type: 'multiple-choice', prompt: 'What happens to most of the rubbish collected?', options: ['It is burned','It is recycled','It is buried','It is sold'], correctIndex: 1, explanation: 'พลอยพูดว่า "Most of it will be recycled"' },
      { id: 'b1u5-ls-q4', type: 'multiple-choice', prompt: 'What should the volunteers bring themselves?',    options: ['Gloves','Bags','A water bottle','Food'], correctIndex: 2, explanation: 'พลอยบอกว่า "bring your own water bottle" (ถุงมือมีให้)' },
    ]
  },

  reading: {
    id: 'b1-unit-5-reading',
    type: 'Article',
    title: 'Small Changes, Big Difference',
    thai: 'การเปลี่ยนแปลงเล็ก ๆ ที่สร้างความต่างครั้งใหญ่',
    emoji: '📖',
    level: 'B1',
    minutes: 4,
    paragraphs: [
      'Every year, millions of tonnes of plastic are thrown away around the world. Much of this waste ends up in the ocean, where it harms fish, turtles, and seabirds. Scientists say that if nothing is done, there could be more plastic than fish in the sea by 2050.',
      'The good news is that individuals can make a real difference. Simple habits, such as carrying a reusable bag and refusing single-use straws, reduce the amount of waste we create. When these small actions are repeated by millions of people, the effect on the planet is enormous.',
      'Governments are also taking action. In many countries, plastic bags have been banned, and companies are encouraged to use recyclable packaging. Renewable energy, such as solar and wind power, is being developed to replace fuels that cause pollution.',
      'Protecting the environment is not the job of one person or one country alone. It is a shared responsibility. If we all make small changes today, a cleaner and more sustainable world can be created for the next generation.',
    ],
    dialogue: null,
    glossary: [
      { word: 'single-use',   thai: 'ใช้ครั้งเดียวทิ้ง',   def: 'designed to be used once and then thrown away' },
      { word: 'reusable',     thai: 'นำกลับมาใช้ซ้ำได้',   def: 'able to be used more than once' },
      { word: 'packaging',    thai: 'บรรจุภัณฑ์',         def: 'the materials used to wrap or protect goods' },
      { word: 'responsibility', thai: 'ความรับผิดชอบ',    def: 'a duty to deal with or take care of something' },
    ],
    summary: 'Plastic waste is a serious threat to the oceans, but individuals and governments can both help. Small daily habits and policies like plastic bans and renewable energy can create a cleaner, more sustainable future.',
    summaryThai: 'ขยะพลาสติกเป็นภัยร้ายแรงต่อมหาสมุทร แต่ทั้งบุคคลและรัฐบาลสามารถช่วยได้ นิสัยเล็ก ๆ ในชีวิตประจำวันและนโยบาย เช่น การห้ามใช้ถุงพลาสติกและพลังงานหมุนเวียน สามารถสร้างอนาคตที่สะอาดและยั่งยืนขึ้นได้',
    questions: [
      { id: 'b1u5-rd-q1', type: 'multiple-choice', prompt: 'What could happen by 2050 if nothing is done?',       options: ['The sea will dry up','There could be more plastic than fish','Fish will grow bigger','Plastic will disappear'], correctIndex: 1, explanation: 'บทความบอกว่า "more plastic than fish in the sea by 2050"' },
      { id: 'b1u5-rd-q2', type: 'multiple-choice', prompt: 'What simple habit does the article suggest?',          options: ['Driving more','Carrying a reusable bag','Buying more plastic','Burning waste'], correctIndex: 1, explanation: 'บทความยกตัวอย่าง "carrying a reusable bag"' },
      { id: 'b1u5-rd-q3', type: 'multiple-choice', prompt: 'What have many governments done?',                     options: ['Banned plastic bags','Banned cars','Closed factories','Stopped recycling'], correctIndex: 0, explanation: 'บทความบอกว่า "plastic bags have been banned"' },
      { id: 'b1u5-rd-q4', type: 'multiple-choice', prompt: 'According to the article, protecting the environment is:', options: ['One person’s job','A shared responsibility','Only for scientists','Impossible'], correctIndex: 1, explanation: 'บทความบอกว่า "It is a shared responsibility"' },
    ]
  },

  test: {
    id: 'b1-unit-5-test',
    passMark: 0.70,
    questions: [
      { id: 'b1u5-t-01', type: 'multiple-choice', prompt: '"มลพิษ" ในภาษาอังกฤษคือคำใด?',                           options: ['climate','pollution','waste','recycle'], correctIndex: 1, explanation: '"pollution" = มลพิษ' },
      { id: 'b1u5-t-02', type: 'multiple-choice', prompt: 'What does "endangered" mean?',                         options: ['ปลอดภัย','ใกล้สูญพันธุ์','ยั่งยืน','สะอาด'], correctIndex: 1, explanation: '"endangered" = ใกล้สูญพันธุ์' },
      { id: 'b1u5-t-03', type: 'fill-in-blank',   prompt: 'A source of energy that can be replaced naturally is ___.', answer: 'renewable', acceptedVariants: [], explanation: '"renewable" = พลังงานหมุนเวียน/ทดแทนได้' },
      { id: 'b1u5-t-04', type: 'multiple-choice', prompt: 'Choose the correct passive: The river ___ polluted by the factory.', options: ['are','is','has','be'], correctIndex: 1, explanation: 'Present passive เอกพจน์ ใช้ is + polluted' },
      { id: 'b1u5-t-05', type: 'fill-in-blank',   prompt: 'The forest ___ destroyed last year. (past passive of "be")', answer: 'was', acceptedVariants: [], explanation: 'Past passive เอกพจน์ ใช้ was + destroyed' },
      { id: 'b1u5-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                            options: ['Plastic is recycle here.','Plastic recycled here.','Plastic is recycled here.','Plastic are recycled here.'], correctIndex: 2, explanation: 'Present passive = is + V3 (recycled)' },
      { id: 'b1u5-t-07', type: 'fill-in-blank',   prompt: 'Many trees have ___ planted this year. (link verb for present perfect passive)', answer: 'been', acceptedVariants: [], explanation: 'Present perfect passive = have/has + been + V3' },
      { id: 'b1u5-t-08', type: 'multiple-choice', prompt: 'In the listening, when is the beach clean-up?',        options: ['Friday','Saturday','Sunday','Monday'], correctIndex: 1, explanation: 'พลอยพูดว่า "this Saturday"' },
      { id: 'b1u5-t-09', type: 'multiple-choice', prompt: 'In the listening, what should volunteers bring themselves?', options: ['Gloves','A water bottle','Bags','Nothing'], correctIndex: 1, explanation: 'พลอยบอกว่า "bring your own water bottle"' },
      { id: 'b1u5-t-10', type: 'multiple-choice', prompt: 'In the article, protecting the environment is described as:', options: ['A shared responsibility','A government-only task','Impossible','Unnecessary'], correctIndex: 0, explanation: 'บทความบอกว่า "It is a shared responsibility"' },
    ]
  }
}

const b1Unit6 = {
  id: 'b1-unit-6',
  title: 'Unit 6: News',
  thai: 'บทที่ 6: ข่าวสาร',
  emoji: '📰',

  vocabulary: {
    id: 'b1-unit-6-vocab',
    title: 'News',
    thai: 'ข่าวสาร',
    emoji: '📰',
    level: 'B1',
    words: [
      { word: 'headline',    pos: 'noun',      ipa: '/ˈhed.laɪn/',    emoji: '🗞️', thai: 'พาดหัวข่าว',        def: 'the title of a news story printed in large letters',            example: 'The headline said prices would rise next month.',      synonym: 'title',      antonym: null },
      { word: 'journalist',  pos: 'noun',      ipa: '/ˈdʒɜː.nə.lɪst/', emoji: '🧑‍💼', thai: 'นักข่าว',           def: 'a person who writes news for newspapers, TV, or websites',      example: 'The journalist interviewed the mayor about the flood.', synonym: 'reporter',   antonym: null },
      { word: 'broadcast',   pos: 'verb',      ipa: '/ˈbrɔːd.kɑːst/', emoji: '📡', thai: 'ออกอากาศ / กระจายเสียง', def: 'to send out a programme on television or radio',              example: 'The news is broadcast live at six every evening.',      synonym: 'air',        antonym: null },
      { word: 'article',     pos: 'noun',      ipa: '/ˈɑː.tɪ.kəl/',   emoji: '📄', thai: 'บทความ',           def: 'a piece of writing about a subject in a newspaper or website',  example: 'I read an interesting article about space travel.',     synonym: 'report',     antonym: null },
      { word: 'rumour',      pos: 'noun',      ipa: '/ˈruː.mər/',     emoji: '🗣️', thai: 'ข่าวลือ',           def: 'a story that people talk about but which may not be true',       example: 'There is a rumour that the factory will close.',        synonym: 'gossip',     antonym: 'fact' },
      { word: 'reliable',    pos: 'adjective', ipa: '/rɪˈlaɪ.ə.bəl/', emoji: '✅', thai: 'น่าเชื่อถือ',       def: 'able to be trusted to be correct or true',                      example: 'Always check the news from a reliable source.',         synonym: 'trustworthy', antonym: 'unreliable' },
      { word: 'announce',    pos: 'verb',      ipa: '/əˈnaʊns/',      emoji: '📢', thai: 'ประกาศ',           def: 'to tell people about something officially',                     example: 'The government will announce the results tomorrow.',    synonym: 'declare',    antonym: null },
      { word: 'coverage',    pos: 'noun',      ipa: '/ˈkʌv.ər.ɪdʒ/',  emoji: '🎥', thai: 'การรายงานข่าว',    def: 'the reporting of a particular event or subject by the media',   example: 'The election got a lot of coverage on TV.',             synonym: 'reporting',  antonym: null },
    ]
  },

  grammar: {
    id: 'b1-unit-6-grammar',
    title: 'Present Perfect for News',
    thai: 'Present Perfect สำหรับข่าว',
    emoji: '📐',
    level: 'B1',
    summary: 'เรียนรู้การใช้ Present Perfect (have/has + V3) เพื่อรายงานข่าวหรือเหตุการณ์ที่เพิ่งเกิดขึ้นและยังเกี่ยวข้องกับปัจจุบัน มักใช้กับ just, already, yet, recently',
    explanation: [
      {
        heading: 'โครงสร้าง Present Perfect',
        body: 'Present Perfect = have / has + past participle (V3)\n\nI / You / We / They → have\nHe / She / It → has\n\nThe government has announced new rules. (รัฐบาลได้ประกาศกฎใหม่แล้ว)\nScientists have discovered a new planet. (นักวิทยาศาสตร์ได้ค้นพบดาวดวงใหม่)'
      },
      {
        heading: 'ทำไมข่าวใช้ Present Perfect',
        body: 'ข่าวมักใช้ Present Perfect เพื่อบอกว่าเหตุการณ์ "เพิ่งเกิด" และยังส่งผลถึงปัจจุบัน โดยไม่ระบุเวลาแน่นอน\n\nA fire has broken out downtown. (เกิดไฟไหม้ในย่านใจกลางเมือง)\n\n⚠️ เมื่อบอกรายละเอียดและเวลาที่ชัดเจน มักเปลี่ยนไปใช้ Past Simple\nThe fire started at 3 a.m. (ไฟเริ่มไหม้ตอนตี 3)'
      },
      {
        heading: 'คำที่ใช้บ่อย: just / already / yet / recently',
        body: 'just = เพิ่งจะ: The results have just been announced.\nalready = แล้ว: She has already read the article.\nyet = ยัง (คำถาม/ปฏิเสธ): Have they announced it yet?\nrecently = เมื่อเร็ว ๆ นี้: Prices have risen recently.'
      }
    ],
    examples: [
      { en: 'The government has announced new taxes.',       th: 'รัฐบาลได้ประกาศภาษีใหม่แล้ว' },
      { en: 'Scientists have discovered a new medicine.',    th: 'นักวิทยาศาสตร์ได้ค้นพบยาชนิดใหม่' },
      { en: 'The news has just been broadcast.',             th: 'ข่าวเพิ่งจะออกอากาศไป' },
      { en: 'Have you read the headline yet?',               th: 'คุณอ่านพาดหัวข่าวแล้วหรือยัง?' },
      { en: 'Prices have risen sharply recently.',           th: 'ราคาได้พุ่งสูงขึ้นอย่างมากเมื่อเร็ว ๆ นี้' },
      { en: 'The reporter has already written the article.', th: 'นักข่าวได้เขียนบทความเสร็จแล้ว' },
    ],
    practice: [
      { id: 'b1u6-gr-p1', type: 'fill-in-blank',   prompt: 'The government ___ announced new rules. (has/have for "government")', answer: 'has', acceptedVariants: [], explanation: '"government" ถือเป็นเอกพจน์ ใช้ has + announced' },
      { id: 'b1u6-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct form: Scientists ___ discovered a new planet.', options: ['has','have','is','was'], correctIndex: 1, explanation: '"Scientists" เป็นพหูพจน์ ใช้ have + V3' },
      { id: 'b1u6-gr-p3', type: 'fill-in-blank',   prompt: 'The news has just ___ broadcast. (past participle of "be")',       answer: 'been', acceptedVariants: [], explanation: 'Present perfect passive = has + been + V3' },
      { id: 'b1u6-gr-p4', type: 'multiple-choice', prompt: 'Which word fits: "Have they announced the results ___?"',          options: ['yet','already','just','ever'], correctIndex: 0, explanation: '"yet" ใช้ในคำถามและปฏิเสธ วางท้ายประโยค' },
    ],
    quiz: [
      { id: 'b1u6-gr-q1', type: 'multiple-choice', prompt: 'Which sentence is correct?',                            options: ['She have read the article.','She has read the article.','She has readed the article.','She reads the article yesterday.'], correctIndex: 1, explanation: 'He/She/It ใช้ has + V3 (read เป็นทั้ง V1 และ V3)' },
      { id: 'b1u6-gr-q2', type: 'fill-in-blank',   prompt: 'The journalists ___ written many reports. (has/have)',    answer: 'have', acceptedVariants: [], explanation: '"journalists" พหูพจน์ ใช้ have' },
      { id: 'b1u6-gr-q3', type: 'multiple-choice', prompt: 'Choose the correct word: "The results have ___ been announced." (=เพิ่งจะ)', options: ['yet','just','ago','since'], correctIndex: 1, explanation: '"just" = เพิ่งจะ วางระหว่าง have กับ V3' },
      { id: 'b1u6-gr-q4', type: 'fill-in-blank',   prompt: 'A fire has ___ out downtown. (V3 of "break")',            answer: 'broken', acceptedVariants: [], explanation: 'break → broke → broken; ใช้ V3 (broken) กับ present perfect' },
    ]
  },

  listening: {
    id: 'b1-unit-6-listening',
    type: 'News',
    title: 'The Evening News Bulletin',
    thai: 'ข่าวภาคค่ำ',
    emoji: '🎧',
    level: 'B1',
    segments: [
      { speaker: 'Anchor', text: 'Good evening. Here are tonight’s top stories.',                    thai: 'สวัสดีตอนค่ำ นี่คือข่าวเด่นประจำคืนนี้' },
      { speaker: 'Anchor', text: 'The city council has announced a new plan to reduce traffic.',        thai: 'สภาเทศบาลได้ประกาศแผนใหม่เพื่อลดปัญหาจราจร' },
      { speaker: 'Anchor', text: 'From next month, three main roads will be closed to cars on Sundays.', thai: 'ตั้งแต่เดือนหน้า ถนนสายหลักสามสายจะปิดไม่ให้รถวิ่งในวันอาทิตย์' },
      { speaker: 'Reporter', text: 'I am here in the city centre, where many people have welcomed the news.', thai: 'ดิฉันอยู่ที่ใจกลางเมือง ที่ซึ่งผู้คนจำนวนมากยินดีต้อนรับข่าวนี้' },
      { speaker: 'Resident', text: 'It is a great idea. The air has become so polluted lately.',        thai: 'เป็นความคิดที่ดีมาก อากาศช่วงนี้เป็นมลพิษมากเลย' },
      { speaker: 'Reporter', text: 'However, some shop owners are worried about losing customers.',      thai: 'อย่างไรก็ตาม เจ้าของร้านบางคนกังวลว่าจะเสียลูกค้า' },
      { speaker: 'Anchor', text: 'The council says the plan will be tested for six months.',            thai: 'สภาบอกว่าแผนนี้จะถูกทดลองใช้เป็นเวลาหกเดือน' },
      { speaker: 'Anchor', text: 'And now, the weather. Rain is expected across the north tomorrow.',    thai: 'และตอนนี้ พยากรณ์อากาศ คาดว่าจะมีฝนตกทั่วภาคเหนือในวันพรุ่งนี้' },
    ],
    questions: [
      { id: 'b1u6-ls-q1', type: 'multiple-choice', prompt: 'What has the city council announced?',        options: ['A new tax','A plan to reduce traffic','A new stadium','Higher fares'], correctIndex: 1, explanation: 'ผู้ประกาศบอกว่า "a new plan to reduce traffic"' },
      { id: 'b1u6-ls-q2', type: 'multiple-choice', prompt: 'What will happen on Sundays from next month?', options: ['Shops will close','Three main roads will be closed to cars','Buses will be free','Schools will open'], correctIndex: 1, explanation: '"three main roads will be closed to cars on Sundays"' },
      { id: 'b1u6-ls-q3', type: 'multiple-choice', prompt: 'Why are some shop owners worried?',            options: ['About the rain','About losing customers','About higher rent','About pollution'], correctIndex: 1, explanation: 'ผู้สื่อข่าวบอกว่าเจ้าของร้านกังวล "about losing customers"' },
      { id: 'b1u6-ls-q4', type: 'multiple-choice', prompt: 'How long will the plan be tested?',            options: ['One month','Three months','Six months','One year'], correctIndex: 2, explanation: 'ผู้ประกาศบอกว่า "tested for six months"' },
    ]
  },

  reading: {
    id: 'b1-unit-6-reading',
    type: 'News',
    title: 'How to Spot Fake News',
    thai: 'วิธีสังเกตข่าวปลอม',
    emoji: '📖',
    level: 'B1',
    minutes: 4,
    paragraphs: [
      'These days, news travels faster than ever before. A story can be shared with millions of people within minutes on social media. However, not everything we read online is true, and false stories, known as "fake news", have become a serious problem.',
      'Fake news is often created to shock people or to make money from clicks. A dramatic headline may hide a story that has no real facts behind it. Sometimes a rumour is repeated so many times that people begin to believe it is true.',
      'So how can we protect ourselves? First, check whether the story comes from a reliable source, such as a well-known newspaper. Second, look for the same news on other websites. If only one page reports it, be careful. Finally, read past the headline before you share anything.',
      'Being a smart reader is a skill that everyone can learn. By taking a few seconds to think before we share, we can stop false information from spreading and help keep the internet a more honest place.',
    ],
    dialogue: null,
    glossary: [
      { word: 'fake news',  thai: 'ข่าวปลอม',        def: 'false information presented as real news' },
      { word: 'source',     thai: 'แหล่งข้อมูล',     def: 'a person, book, or website that gives information' },
      { word: 'dramatic',   thai: 'ที่เร้าอารมณ์',   def: 'exciting and impressive, sometimes exaggerated' },
      { word: 'spread',     thai: 'แพร่กระจาย',      def: 'to reach or affect more and more people or places' },
    ],
    summary: 'Fake news spreads quickly on social media and is often made to shock people or earn money. Readers can protect themselves by checking reliable sources, comparing other websites, and reading past the headline before sharing.',
    summaryThai: 'ข่าวปลอมแพร่กระจายอย่างรวดเร็วบนโซเชียลมีเดีย และมักถูกสร้างขึ้นเพื่อสร้างความตื่นตะลึงหรือหาเงิน ผู้อ่านสามารถป้องกันตัวเองได้โดยตรวจสอบแหล่งที่น่าเชื่อถือ เปรียบเทียบกับเว็บอื่น และอ่านให้จบก่อนแชร์',
    questions: [
      { id: 'b1u6-rd-q1', type: 'multiple-choice', prompt: 'Why is fake news often created?',                     options: ['To teach people','To shock people or make money','To help journalists','To reduce clicks'], correctIndex: 1, explanation: 'บทความบอกว่า "to shock people or to make money from clicks"' },
      { id: 'b1u6-rd-q2', type: 'multiple-choice', prompt: 'What is the first tip to protect yourself?',           options: ['Share it fast','Check a reliable source','Only read the headline','Ignore the news'], correctIndex: 1, explanation: 'บทความบอกว่า "check whether the story comes from a reliable source"' },
      { id: 'b1u6-rd-q3', type: 'multiple-choice', prompt: 'What should you do before sharing anything?',          options: ['Read past the headline','Add your own opinion','Delete the source','Change the headline'], correctIndex: 0, explanation: 'บทความบอกว่า "read past the headline before you share anything"' },
      { id: 'b1u6-rd-q4', type: 'multiple-choice', prompt: 'According to the article, being a smart reader is:',   options: ['Impossible','Only for experts','A skill everyone can learn','A waste of time'], correctIndex: 2, explanation: 'บทความบอกว่า "a skill that everyone can learn"' },
    ]
  },

  test: {
    id: 'b1-unit-6-test',
    passMark: 0.70,
    questions: [
      { id: 'b1u6-t-01', type: 'multiple-choice', prompt: '"นักข่าว" ในภาษาอังกฤษคือคำใด?',                        options: ['headline','journalist','coverage','rumour'], correctIndex: 1, explanation: '"journalist" = นักข่าว' },
      { id: 'b1u6-t-02', type: 'multiple-choice', prompt: 'What does "reliable" mean?',                          options: ['ปลอม','น่าเชื่อถือ','เร็ว','ยาว'], correctIndex: 1, explanation: '"reliable" = น่าเชื่อถือ' },
      { id: 'b1u6-t-03', type: 'fill-in-blank',   prompt: 'A story that people talk about but may not be true is a ___.', answer: 'rumour', acceptedVariants: ['rumor'], explanation: '"rumour" (US: rumor) = ข่าวลือ' },
      { id: 'b1u6-t-04', type: 'multiple-choice', prompt: 'Choose the correct form: Scientists ___ discovered a new planet.', options: ['has','have','is','was'], correctIndex: 1, explanation: '"Scientists" พหูพจน์ ใช้ have + V3' },
      { id: 'b1u6-t-05', type: 'fill-in-blank',   prompt: 'The government ___ announced new rules. (has/have)',   answer: 'has', acceptedVariants: [], explanation: '"government" เอกพจน์ ใช้ has' },
      { id: 'b1u6-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                          options: ['She have read the article.','She has read the article.','She has readed it.','She reading it.'], correctIndex: 1, explanation: 'She ใช้ has + V3 (read)' },
      { id: 'b1u6-t-07', type: 'fill-in-blank',   prompt: 'The news has just ___ broadcast. (past participle of "be")', answer: 'been', acceptedVariants: [], explanation: 'Present perfect passive = has been + V3' },
      { id: 'b1u6-t-08', type: 'multiple-choice', prompt: 'In the news bulletin, what has the council announced?', options: ['A new tax','A plan to reduce traffic','A new school','Free buses'], correctIndex: 1, explanation: 'ผู้ประกาศบอกว่า "a new plan to reduce traffic"' },
      { id: 'b1u6-t-09', type: 'multiple-choice', prompt: 'In the bulletin, how long will the plan be tested?',   options: ['One month','Three months','Six months','A year'], correctIndex: 2, explanation: '"tested for six months"' },
      { id: 'b1u6-t-10', type: 'multiple-choice', prompt: 'In the article, what should you do before sharing news?', options: ['Read past the headline','Share immediately','Trust one source','Ignore the date'], correctIndex: 0, explanation: 'บทความบอกว่า "read past the headline before you share"' },
    ]
  }
}

const b1Unit7 = {
  id: 'b1-unit-7',
  title: 'Unit 7: Health',
  thai: 'บทที่ 7: สุขภาพ',
  emoji: '💪',

  vocabulary: {
    id: 'b1-unit-7-vocab',
    title: 'Health',
    thai: 'สุขภาพ',
    emoji: '💪',
    level: 'B1',
    words: [
      { word: 'symptom',    pos: 'noun',      ipa: '/ˈsɪmp.təm/',    emoji: '🤒', thai: 'อาการ',            def: 'a sign that shows you may have an illness',                    example: 'A high fever is a common symptom of the flu.',        synonym: 'sign',       antonym: null },
      { word: 'treatment',  pos: 'noun',      ipa: '/ˈtriːt.mənt/',  emoji: '💊', thai: 'การรักษา',         def: 'the way a doctor tries to cure an illness or injury',          example: 'The doctor explained the treatment for my back pain.', synonym: 'therapy',    antonym: null },
      { word: 'exercise',   pos: 'noun',      ipa: '/ˈek.sə.saɪz/',  emoji: '🏃', thai: 'การออกกำลังกาย',   def: 'physical activity done to stay fit and healthy',               example: 'Regular exercise is good for your heart.',            synonym: 'workout',    antonym: null },
      { word: 'prevent',    pos: 'verb',      ipa: '/prɪˈvent/',     emoji: '🚫', thai: 'ป้องกัน',          def: 'to stop something bad from happening',                         example: 'Washing your hands helps prevent illness.',           synonym: 'avoid',      antonym: 'cause' },
      { word: 'recover',    pos: 'verb',      ipa: '/rɪˈkʌv.ər/',    emoji: '😌', thai: 'ฟื้นตัว / หายป่วย', def: 'to become well again after being ill or injured',             example: 'It took her a week to recover from the cold.',        synonym: 'heal',       antonym: null },
      { word: 'healthy',    pos: 'adjective', ipa: '/ˈhel.θi/',      emoji: '🥗', thai: 'มีสุขภาพดี',       def: 'physically strong and not ill',                                example: 'A healthy diet includes lots of vegetables.',         synonym: 'well',       antonym: 'unhealthy' },
      { word: 'stress',     pos: 'noun',      ipa: '/stres/',        emoji: '😰', thai: 'ความเครียด',       def: 'worry caused by a difficult situation',                        example: 'Too much stress can affect your sleep.',              synonym: 'pressure',   antonym: 'calm' },
      { word: 'diet',       pos: 'noun',      ipa: '/ˈdaɪ.ət/',      emoji: '🍎', thai: 'อาหารการกิน',      def: 'the kind of food that a person usually eats',                  example: 'He changed his diet to lose weight.',                 synonym: null,         antonym: null },
    ]
  },

  grammar: {
    id: 'b1-unit-7-grammar',
    title: 'First & Second Conditional',
    thai: 'ประโยคเงื่อนไขแบบที่ 1 และ 2',
    emoji: '📐',
    level: 'B1',
    summary: 'เรียนรู้ First Conditional (เงื่อนไขที่เป็นไปได้จริง) และ Second Conditional (เงื่อนไขสมมติ/ไม่จริง) เพื่อพูดถึงผลลัพธ์ของการดูแลสุขภาพ',
    explanation: [
      {
        heading: 'First Conditional: เงื่อนไขที่เป็นไปได้จริง',
        body: 'ใช้พูดถึงสิ่งที่อาจเกิดขึ้นในอนาคตหากทำตามเงื่อนไข\n\nโครงสร้าง: If + present simple, will + V1\n\nIf you exercise every day, you will feel better.\n(ถ้าคุณออกกำลังกายทุกวัน คุณจะรู้สึกดีขึ้น)'
      },
      {
        heading: 'Second Conditional: เงื่อนไขสมมติ / ไม่จริง',
        body: 'ใช้พูดถึงสถานการณ์ที่ไม่จริงหรือไม่น่าเป็นไปได้ในปัจจุบัน\n\nโครงสร้าง: If + past simple, would + V1\n\nIf I had more time, I would go to the gym.\n(ถ้าฉันมีเวลามากกว่านี้ ฉันคงไปยิม — แต่จริง ๆ ไม่มีเวลา)'
      },
      {
        heading: 'ข้อควรระวัง',
        body: '⚠️ First = จริง/เป็นไปได้ → will\n⚠️ Second = สมมติ/ไม่จริง → would + ใช้ past simple ในประโยค if\n\nกับ Second Conditional มักใช้ "were" กับทุกประธาน:\nIf I were you, I would see a doctor. (ถ้าฉันเป็นคุณ ฉันจะไปหาหมอ)'
      }
    ],
    examples: [
      { en: 'If you eat too much sugar, you will gain weight.',   th: 'ถ้าคุณกินน้ำตาลมากเกินไป คุณจะน้ำหนักขึ้น' },
      { en: 'If she rests, she will recover quickly.',            th: 'ถ้าเธอพักผ่อน เธอจะหายป่วยเร็ว' },
      { en: 'You will feel tired if you do not sleep.',           th: 'คุณจะรู้สึกเหนื่อยถ้าคุณไม่นอน' },
      { en: 'If I had more time, I would exercise every day.',    th: 'ถ้าฉันมีเวลามากกว่านี้ ฉันคงออกกำลังกายทุกวัน' },
      { en: 'If I were you, I would see a doctor.',               th: 'ถ้าฉันเป็นคุณ ฉันจะไปหาหมอ' },
      { en: 'She would be healthier if she ate more vegetables.', th: 'เธอคงสุขภาพดีกว่านี้ถ้าเธอกินผักมากขึ้น' },
    ],
    practice: [
      { id: 'b1u7-gr-p1', type: 'fill-in-blank',   prompt: 'If you exercise every day, you ___ feel better. (First Conditional)', answer: 'will', acceptedVariants: ["'ll"], explanation: 'First Conditional: if + present, will + V1' },
      { id: 'b1u7-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct form: If I ___ more time, I would go to the gym.', options: ['have','had','will have','has'], correctIndex: 1, explanation: 'Second Conditional ใช้ past simple (had) ในประโยค if' },
      { id: 'b1u7-gr-p3', type: 'fill-in-blank',   prompt: 'If she rests, she ___ recover quickly. (will + V1)',                answer: 'will', acceptedVariants: ["'ll"], explanation: 'เงื่อนไขจริง (First) ใช้ will + V1' },
      { id: 'b1u7-gr-p4', type: 'multiple-choice', prompt: 'Complete: "If I ___ you, I would see a doctor."',                  options: ['am','was','were','be'], correctIndex: 2, explanation: 'Second Conditional มักใช้ "were" กับทุกประธาน' },
    ],
    quiz: [
      { id: 'b1u7-gr-q1', type: 'multiple-choice', prompt: 'Which is a correct First Conditional sentence?',       options: ['If you eat too much, you gained weight.','If you eat too much, you will gain weight.','If you ate too much, you will gain weight.','If you eat too much, you would gain weight.'], correctIndex: 1, explanation: 'First: if + present simple, will + V1' },
      { id: 'b1u7-gr-q2', type: 'fill-in-blank',   prompt: 'If I had more money, I ___ join a gym. (would/will)',    answer: 'would', acceptedVariants: ["'d"], explanation: 'Second Conditional ใช้ would + V1' },
      { id: 'b1u7-gr-q3', type: 'multiple-choice', prompt: 'Choose the correct verb: "You will feel tired if you ___ sleep." (do not)', options: ['do not','did not','will not','would not'], correctIndex: 0, explanation: 'First Conditional: ประโยค if ใช้ present simple (do not sleep)' },
      { id: 'b1u7-gr-q4', type: 'fill-in-blank',   prompt: 'She would be healthier if she ___ more vegetables. (past simple of "eat")', answer: 'ate', acceptedVariants: [], explanation: 'Second Conditional ใช้ past simple (ate) ในประโยค if' },
    ]
  },

  listening: {
    id: 'b1-unit-7-listening',
    type: 'Conversation',
    title: 'A Visit to the Doctor',
    thai: 'ไปพบแพทย์',
    emoji: '🎧',
    level: 'B1',
    segments: [
      { speaker: 'Doctor', text: 'Good morning. What seems to be the problem today?',              thai: 'สวัสดีตอนเช้า วันนี้มีปัญหาอะไรครับ?' },
      { speaker: 'Nita',   text: 'I have had a bad cough and a headache for three days.',           thai: 'ฉันมีอาการไอหนักและปวดหัวมาสามวันแล้วค่ะ' },
      { speaker: 'Doctor', text: 'I see. Do you have a fever or any other symptoms?',               thai: 'เข้าใจแล้ว คุณมีไข้หรืออาการอื่น ๆ ไหมครับ?' },
      { speaker: 'Nita',   text: 'A slight fever, and I feel very tired all the time.',             thai: 'มีไข้เล็กน้อยค่ะ และรู้สึกเหนื่อยตลอดเวลา' },
      { speaker: 'Doctor', text: 'It sounds like a common cold. You should rest and drink water.',   thai: 'ฟังดูเหมือนเป็นหวัดธรรมดา คุณควรพักผ่อนและดื่มน้ำมาก ๆ' },
      { speaker: 'Nita',   text: 'Do I need any medicine, doctor?',                                 thai: 'ฉันต้องกินยาไหมคะคุณหมอ?' },
      { speaker: 'Doctor', text: 'If your fever gets worse, you will need this medicine.',           thai: 'ถ้าไข้ของคุณแย่ลง คุณจะต้องใช้ยานี้' },
      { speaker: 'Nita',   text: 'Thank you. I will rest and come back if I do not recover.',        thai: 'ขอบคุณค่ะ ฉันจะพักผ่อนและกลับมาใหม่ถ้ายังไม่หาย' },
    ],
    questions: [
      { id: 'b1u7-ls-q1', type: 'multiple-choice', prompt: 'How long has Nita had her symptoms?',        options: ['One day','Two days','Three days','A week'], correctIndex: 2, explanation: 'นิตาพูดว่า "for three days"' },
      { id: 'b1u7-ls-q2', type: 'multiple-choice', prompt: 'Which symptom does Nita have?',              options: ['A broken arm','A cough and headache','A toothache','A rash'], correctIndex: 1, explanation: 'นิตาบอกว่า "a bad cough and a headache"' },
      { id: 'b1u7-ls-q3', type: 'multiple-choice', prompt: 'What does the doctor say she should do?',    options: ['Rest and drink water','Run every day','Eat more sugar','Go to hospital now'], correctIndex: 0, explanation: 'หมอบอกว่า "You should rest and drink water"' },
      { id: 'b1u7-ls-q4', type: 'multiple-choice', prompt: 'When will Nita need the medicine?',          options: ['Right now','If her fever gets worse','Tomorrow','Never'], correctIndex: 1, explanation: 'หมอบอกว่า "If your fever gets worse, you will need this medicine"' },
    ]
  },

  reading: {
    id: 'b1-unit-7-reading',
    type: 'Article',
    title: 'A Healthy Body, A Healthy Mind',
    thai: 'ร่างกายแข็งแรง จิตใจแข็งแรง',
    emoji: '📖',
    level: 'B1',
    minutes: 4,
    paragraphs: [
      'Many people think that being healthy only means not being sick. In fact, good health is about the whole body and mind working well together. To stay healthy, we need to pay attention to what we eat, how much we move, and how we deal with stress.',
      'A balanced diet is one of the most important habits. If we eat plenty of fruit and vegetables and avoid too much sugar, our bodies get the energy they need. Drinking enough water also helps us think clearly and feel less tired during the day.',
      'Exercise is just as important. Doctors say that thirty minutes of activity a day can prevent many illnesses, from heart disease to depression. You do not need a gym; walking, cycling, or dancing at home all count as good exercise.',
      'Finally, we should not forget our mental health. Sleep, time with friends, and relaxing hobbies help us manage stress. If we take care of both body and mind, we will live longer, happier lives.',
    ],
    dialogue: null,
    glossary: [
      { word: 'balanced diet', thai: 'อาหารที่สมดุล',      def: 'a diet with the right amount of different types of food' },
      { word: 'heart disease', thai: 'โรคหัวใจ',           def: 'a serious illness that affects the heart' },
      { word: 'mental health', thai: 'สุขภาพจิต',          def: 'the condition of a person’s mind and emotions' },
      { word: 'relax',         thai: 'ผ่อนคลาย',           def: 'to rest and become less worried or tense' },
    ],
    summary: 'Good health means caring for both body and mind. A balanced diet, thirty minutes of daily exercise, enough sleep, and managing stress can prevent illness and lead to a longer, happier life.',
    summaryThai: 'สุขภาพดีหมายถึงการดูแลทั้งร่างกายและจิตใจ อาหารที่สมดุล การออกกำลังกายวันละ 30 นาที การนอนหลับเพียงพอ และการจัดการความเครียด สามารถป้องกันโรคและนำไปสู่ชีวิตที่ยืนยาวและมีความสุขมากขึ้น',
    questions: [
      { id: 'b1u7-rd-q1', type: 'multiple-choice', prompt: 'According to the article, good health is about:',      options: ['Only not being sick','Body and mind working well together','Only eating fruit','Only exercise'], correctIndex: 1, explanation: 'บทความบอกว่า "the whole body and mind working well together"' },
      { id: 'b1u7-rd-q2', type: 'multiple-choice', prompt: 'What does drinking enough water help with?',           options: ['Losing hair','Thinking clearly and feeling less tired','Gaining weight','Sleeping less'], correctIndex: 1, explanation: 'บทความบอกว่าน้ำช่วยให้ "think clearly and feel less tired"' },
      { id: 'b1u7-rd-q3', type: 'multiple-choice', prompt: 'How much daily activity do doctors recommend?',        options: ['Ten minutes','Thirty minutes','Two hours','None'], correctIndex: 1, explanation: 'บทความบอกว่า "thirty minutes of activity a day"' },
      { id: 'b1u7-rd-q4', type: 'multiple-choice', prompt: 'What helps us manage stress?',                         options: ['Skipping sleep','Sleep, friends, and relaxing hobbies','Eating more sugar','Working all night'], correctIndex: 1, explanation: 'บทความบอกว่า "Sleep, time with friends, and relaxing hobbies help us manage stress"' },
    ]
  },

  test: {
    id: 'b1-unit-7-test',
    passMark: 0.70,
    questions: [
      { id: 'b1u7-t-01', type: 'multiple-choice', prompt: '"อาการ (ของโรค)" ในภาษาอังกฤษคือคำใด?',              options: ['treatment','symptom','diet','stress'], correctIndex: 1, explanation: '"symptom" = อาการ' },
      { id: 'b1u7-t-02', type: 'multiple-choice', prompt: 'What does "prevent" mean?',                         options: ['ทำให้เกิด','ป้องกัน','รักษา','เพิ่ม'], correctIndex: 1, explanation: '"prevent" = ป้องกัน' },
      { id: 'b1u7-t-03', type: 'fill-in-blank',   prompt: 'The opposite of "healthy" is ___.',                answer: 'unhealthy', acceptedVariants: [], explanation: 'antonym ของ healthy คือ unhealthy' },
      { id: 'b1u7-t-04', type: 'multiple-choice', prompt: 'Choose the correct First Conditional: If you exercise, you ___ feel better.', options: ['would','will','felt','are'], correctIndex: 1, explanation: 'First Conditional ใช้ will + V1' },
      { id: 'b1u7-t-05', type: 'fill-in-blank',   prompt: 'If I ___ more time, I would go to the gym. (past simple of "have")', answer: 'had', acceptedVariants: [], explanation: 'Second Conditional ใช้ past simple (had) ในประโยค if' },
      { id: 'b1u7-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                       options: ['If I were you, I will see a doctor.','If I was you, I see a doctor.','If I were you, I would see a doctor.','If I am you, I would see a doctor.'], correctIndex: 2, explanation: 'Second Conditional: if + were, would + V1' },
      { id: 'b1u7-t-07', type: 'fill-in-blank',   prompt: 'She would be healthier if she ___ more vegetables. (past simple of "eat")', answer: 'ate', acceptedVariants: [], explanation: 'Second Conditional ใช้ ate ในประโยค if' },
      { id: 'b1u7-t-08', type: 'multiple-choice', prompt: 'In the listening, how long has Nita had symptoms?', options: ['One day','Two days','Three days','A week'], correctIndex: 2, explanation: 'นิตาบอกว่า "for three days"' },
      { id: 'b1u7-t-09', type: 'multiple-choice', prompt: 'In the listening, what does the doctor advise?',   options: ['Rest and drink water','Run daily','Take medicine now','Eat sugar'], correctIndex: 0, explanation: 'หมอบอกว่า "rest and drink water"' },
      { id: 'b1u7-t-10', type: 'multiple-choice', prompt: 'In the article, how much daily exercise is recommended?', options: ['10 minutes','30 minutes','2 hours','None'], correctIndex: 1, explanation: 'บทความบอกว่า "thirty minutes of activity a day"' },
    ]
  }
}

const b1Unit8 = {
  id: 'b1-unit-8',
  title: 'Unit 8: Money',
  thai: 'บทที่ 8: การเงิน',
  emoji: '💰',

  vocabulary: {
    id: 'b1-unit-8-vocab',
    title: 'Money',
    thai: 'การเงิน',
    emoji: '💰',
    level: 'B1',
    words: [
      { word: 'budget',      pos: 'noun',      ipa: '/ˈbʌdʒ.ɪt/',     emoji: '📊', thai: 'งบประมาณ',         def: 'a plan of how much money you can spend',                       example: 'She made a monthly budget to control her spending.',   synonym: 'plan',       antonym: null },
      { word: 'save',        pos: 'verb',      ipa: '/seɪv/',         emoji: '🏦', thai: 'ออม / เก็บเงิน',   def: 'to keep money instead of spending it',                         example: 'I try to save part of my salary every month.',        synonym: 'set aside',  antonym: 'spend' },
      { word: 'expense',     pos: 'noun',      ipa: '/ɪkˈspens/',     emoji: '🧾', thai: 'ค่าใช้จ่าย',       def: 'the money that you spend on something',                        example: 'Rent is my biggest monthly expense.',                 synonym: 'cost',       antonym: 'income' },
      { word: 'income',      pos: 'noun',      ipa: '/ˈɪn.kʌm/',      emoji: '💵', thai: 'รายได้',           def: 'the money a person receives from work or investments',         example: 'His income increased after the promotion.',           synonym: 'earnings',   antonym: 'expense' },
      { word: 'borrow',      pos: 'verb',      ipa: '/ˈbɒr.əʊ/',      emoji: '🤲', thai: 'ยืม',              def: 'to take money from someone that you will pay back later',       example: 'He had to borrow money to buy a car.',                synonym: null,         antonym: 'lend' },
      { word: 'afford',      pos: 'verb',      ipa: '/əˈfɔːd/',       emoji: '🛒', thai: 'มีเงินพอที่จะซื้อ', def: 'to have enough money to pay for something',                   example: 'We cannot afford a holiday this year.',               synonym: null,         antonym: null },
      { word: 'invest',      pos: 'verb',      ipa: '/ɪnˈvest/',      emoji: '📈', thai: 'ลงทุน',            def: 'to put money into something to earn more money',               example: 'Many people invest in shares or property.',           synonym: null,         antonym: null },
      { word: 'debt',        pos: 'noun',      ipa: '/det/',          emoji: '⛓️', thai: 'หนี้',             def: 'money that you owe to someone',                                example: 'They worked hard to pay off their debt.',             synonym: null,         antonym: null },
    ]
  },

  grammar: {
    id: 'b1-unit-8-grammar',
    title: 'Comparatives with Modifiers & Quantifiers',
    thai: 'การเปรียบเทียบขั้นกว่า และคำบอกปริมาณ',
    emoji: '📐',
    level: 'B1',
    summary: 'เรียนรู้การเสริมคำในการเปรียบเทียบขั้นกว่า (much/far/a bit + comparative) และคำบอกปริมาณ (much, many, a little, a few) เพื่อพูดเรื่องเงินและค่าใช้จ่าย',
    explanation: [
      {
        heading: 'Comparatives + Modifiers',
        body: 'เราสามารถเสริมคำเพื่อบอก "ระดับความต่าง" ในการเปรียบเทียบขั้นกว่า\n\nmuch / far = มากกว่ามาก: This car is much more expensive than that one.\na bit / a little = นิดหน่อย: My rent is a bit cheaper this year.\n\nโครงสร้าง: modifier + comparative (-er / more...) + than'
      },
      {
        heading: 'Quantifiers: much / many',
        body: 'much = ใช้กับนามนับไม่ได้: I do not have much money. (ฉันมีเงินไม่มาก)\nmany = ใช้กับนามนับได้ (พหูพจน์): She has many expenses. (เธอมีค่าใช้จ่ายหลายอย่าง)\n\n⚠️ money เป็นนามนับไม่ได้ → much money (ไม่ใช่ many moneys)'
      },
      {
        heading: 'Quantifiers: a little / a few',
        body: 'a little = เล็กน้อย (นามนับไม่ได้): I have saved a little money.\na few = สองสามอย่าง (นามนับได้): I have a few coins in my pocket.\n\nจำง่าย ๆ: little → นับไม่ได้ · few → นับได้'
      }
    ],
    examples: [
      { en: 'This phone is much cheaper than that one.',        th: 'โทรศัพท์เครื่องนี้ถูกกว่าเครื่องนั้นมาก' },
      { en: 'Rent is far more expensive in the city.',         th: 'ค่าเช่าในเมืองแพงกว่ามาก' },
      { en: 'My salary is a bit higher this year.',            th: 'เงินเดือนของฉันสูงขึ้นเล็กน้อยในปีนี้' },
      { en: 'I do not have much money left.',                  th: 'ฉันไม่มีเงินเหลือมากนัก' },
      { en: 'She has many expenses every month.',              th: 'เธอมีค่าใช้จ่ายหลายอย่างในทุกเดือน' },
      { en: 'I have saved a little money for a holiday.',      th: 'ฉันเก็บเงินไว้นิดหน่อยสำหรับไปเที่ยว' },
    ],
    practice: [
      { id: 'b1u8-gr-p1', type: 'fill-in-blank',   prompt: 'This car is ___ more expensive than that one. (=มากกว่ามาก)',     answer: 'much', acceptedVariants: ['far'], explanation: 'much/far + comparative = เน้นความต่างมาก' },
      { id: 'b1u8-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct quantifier: I do not have ___ money.',          options: ['many','much','a few','number'], correctIndex: 1, explanation: '"money" นับไม่ได้ ใช้ much' },
      { id: 'b1u8-gr-p3', type: 'fill-in-blank',   prompt: 'She has ___ expenses every month. (นับได้ พหูพจน์ = มากมาย)',      answer: 'many', acceptedVariants: [], explanation: '"expenses" นับได้พหูพจน์ ใช้ many' },
      { id: 'b1u8-gr-p4', type: 'multiple-choice', prompt: 'Choose the correct word: I have saved ___ money for a holiday.',   options: ['a few','a little','many','number of'], correctIndex: 1, explanation: '"money" นับไม่ได้ ใช้ a little' },
    ],
    quiz: [
      { id: 'b1u8-gr-q1', type: 'multiple-choice', prompt: 'Which sentence is correct?',                            options: ['This is more cheaper than that.','This is much cheaper than that.','This is cheaper more than that.','This is a bit more cheaper.'], correctIndex: 1, explanation: 'much + comparative (cheaper); ห้ามใช้ more กับ -er พร้อมกัน' },
      { id: 'b1u8-gr-q2', type: 'fill-in-blank',   prompt: 'I have ___ coins in my pocket. (นับได้ = สองสาม)',        answer: 'a few', acceptedVariants: [], explanation: '"coins" นับได้ ใช้ a few' },
      { id: 'b1u8-gr-q3', type: 'multiple-choice', prompt: 'Choose the correct quantifier: She does not have ___ friends.', options: ['much','many','a little','amount of'], correctIndex: 1, explanation: '"friends" นับได้พหูพจน์ ใช้ many' },
      { id: 'b1u8-gr-q4', type: 'fill-in-blank',   prompt: 'Rent is ___ more expensive in the city. (=มากกว่ามาก, ขึ้นต้นด้วย f)', answer: 'far', acceptedVariants: ['much'], explanation: 'far/much + comparative เน้นความต่างมาก' },
    ]
  },

  listening: {
    id: 'b1-unit-8-listening',
    type: 'Conversation',
    title: 'Making a Monthly Budget',
    thai: 'ทำงบประมาณรายเดือน',
    emoji: '🎧',
    level: 'B1',
    segments: [
      { speaker: 'Meta',  text: 'I really want to save more money this year.',                       thai: 'ปีนี้ฉันอยากเก็บเงินให้มากขึ้นจริง ๆ' },
      { speaker: 'Jira',  text: 'That is a good idea. Have you made a budget yet?',                 thai: 'เป็นความคิดที่ดี เธอทำงบประมาณแล้วหรือยัง?' },
      { speaker: 'Meta',  text: 'Not yet. I do not really know where my money goes.',              thai: 'ยังเลย ฉันไม่ค่อยรู้ว่าเงินหายไปไหนบ้าง' },
      { speaker: 'Jira',  text: 'First, write down your income, then all your monthly expenses.',    thai: 'อย่างแรก จดรายได้ของเธอ แล้วก็ค่าใช้จ่ายรายเดือนทั้งหมด' },
      { speaker: 'Meta',  text: 'My biggest expense is rent. It is much higher than last year.',    thai: 'ค่าใช้จ่ายที่มากที่สุดของฉันคือค่าเช่า มันสูงกว่าปีที่แล้วมาก' },
      { speaker: 'Jira',  text: 'Then try to cut small costs, like eating out too often.',          thai: 'งั้นลองลดค่าใช้จ่ายเล็ก ๆ เช่น การกินข้าวนอกบ้านบ่อยเกินไป' },
      { speaker: 'Meta',  text: 'Good point. If I cook at home, I will save a lot.',                thai: 'จริงด้วย ถ้าฉันทำอาหารเองที่บ้าน ฉันจะประหยัดได้เยอะเลย' },
      { speaker: 'Jira',  text: 'Exactly. A little saving every week adds up over a year.',         thai: 'ใช่เลย การออมนิดหน่อยทุกสัปดาห์รวมกันเป็นเงินก้อนใหญ่ในหนึ่งปี' },
    ],
    questions: [
      { id: 'b1u8-ls-q1', type: 'multiple-choice', prompt: 'What does Meta want to do this year?',       options: ['Buy a car','Save more money','Get a new job','Travel abroad'], correctIndex: 1, explanation: 'เมต้าพูดว่า "I really want to save more money this year"' },
      { id: 'b1u8-ls-q2', type: 'multiple-choice', prompt: 'What should Meta write down first?',         options: ['Her income','Her hobbies','Her friends','Her holidays'], correctIndex: 0, explanation: 'จิระบอกว่า "write down your income" ก่อน' },
      { id: 'b1u8-ls-q3', type: 'multiple-choice', prompt: 'What is Meta’s biggest expense?',        options: ['Food','Rent','Transport','Clothes'], correctIndex: 1, explanation: 'เมต้าบอกว่า "My biggest expense is rent"' },
      { id: 'b1u8-ls-q4', type: 'multiple-choice', prompt: 'How can Meta save money, according to Jira?', options: ['Eat out more','Cook at home','Buy a bigger flat','Stop working'], correctIndex: 1, explanation: 'เมต้าบอกว่า "If I cook at home, I will save a lot"' },
    ]
  },

  reading: {
    id: 'b1-unit-8-reading',
    type: 'Article',
    title: 'Smart Habits with Money',
    thai: 'นิสัยการใช้เงินอย่างชาญฉลาด',
    emoji: '📖',
    level: 'B1',
    minutes: 4,
    paragraphs: [
      'Managing money well is a skill that few people are taught at school, yet it affects almost every part of our lives. The good news is that anyone can learn simple habits that make a big difference over time. It starts with understanding the difference between your income and your expenses.',
      'The first smart habit is to make a budget. When you write down how much you earn and how much you spend, you can see where your money goes. Many people are surprised to find that small daily costs, such as coffee or snacks, add up to a lot each month.',
      'The second habit is to save regularly, even a little. If you put aside a small amount every month, your savings will grow far faster than you expect. Experts often suggest saving before you spend, not after, so that saving becomes automatic.',
      'Finally, it is wise to avoid unnecessary debt. Borrowing money can be useful, for example to study or buy a home, but if you borrow more than you can afford to pay back, the interest becomes a heavy burden. A careful person only borrows what is truly needed.',
    ],
    dialogue: null,
    glossary: [
      { word: 'budget',    thai: 'งบประมาณ',       def: 'a plan showing how much money you can spend' },
      { word: 'savings',   thai: 'เงินออม',        def: 'money that you have kept, especially in a bank' },
      { word: 'interest',  thai: 'ดอกเบี้ย',       def: 'extra money you pay back when you borrow, or earn when you save' },
      { word: 'burden',    thai: 'ภาระ',           def: 'a heavy responsibility that is difficult to deal with' },
    ],
    summary: 'Managing money is a learnable skill. The three key habits are making a budget to track income and expenses, saving a little regularly (before spending), and avoiding unnecessary debt so that interest does not become a burden.',
    summaryThai: 'การจัดการเงินเป็นทักษะที่เรียนรู้ได้ นิสัยสำคัญสามอย่างคือ การทำงบประมาณเพื่อติดตามรายได้และค่าใช้จ่าย การออมทีละน้อยอย่างสม่ำเสมอ (ก่อนใช้จ่าย) และการหลีกเลี่ยงหนี้ที่ไม่จำเป็นเพื่อไม่ให้ดอกเบี้ยกลายเป็นภาระ',
    questions: [
      { id: 'b1u8-rd-q1', type: 'multiple-choice', prompt: 'What is the first smart habit mentioned?',            options: ['Borrowing money','Making a budget','Buying a home','Investing in shares'], correctIndex: 1, explanation: 'บทความบอกว่า "The first smart habit is to make a budget"' },
      { id: 'b1u8-rd-q2', type: 'multiple-choice', prompt: 'What surprises many people about small daily costs?', options: ['They are free','They add up to a lot','They are necessary','They save money'], correctIndex: 1, explanation: 'บทความบอกว่าค่าใช้จ่ายเล็ก ๆ "add up to a lot each month"' },
      { id: 'b1u8-rd-q3', type: 'multiple-choice', prompt: 'What do experts suggest about saving?',               options: ['Save after you spend','Save before you spend','Never save','Only save once a year'], correctIndex: 1, explanation: 'บทความบอกว่า "saving before you spend, not after"' },
      { id: 'b1u8-rd-q4', type: 'multiple-choice', prompt: 'When does borrowing become a heavy burden?',          options: ['When you save too much','When you borrow more than you can afford','When interest is zero','When you have a budget'], correctIndex: 1, explanation: 'บทความบอกว่า "if you borrow more than you can afford to pay back, the interest becomes a heavy burden"' },
    ]
  },

  test: {
    id: 'b1-unit-8-test',
    passMark: 0.70,
    questions: [
      { id: 'b1u8-t-01', type: 'multiple-choice', prompt: '"รายได้" ในภาษาอังกฤษคือคำใด?',                        options: ['expense','income','debt','budget'], correctIndex: 1, explanation: '"income" = รายได้' },
      { id: 'b1u8-t-02', type: 'multiple-choice', prompt: 'What does "afford" mean?',                          options: ['ยืมเงิน','มีเงินพอที่จะซื้อ','เป็นหนี้','ลงทุน'], correctIndex: 1, explanation: '"afford" = มีเงินพอที่จะซื้อ' },
      { id: 'b1u8-t-03', type: 'fill-in-blank',   prompt: 'The opposite of "spend" is ___.',                   answer: 'save', acceptedVariants: [], explanation: 'antonym ของ spend คือ save (ออม)' },
      { id: 'b1u8-t-04', type: 'multiple-choice', prompt: 'Choose the correct quantifier: I do not have ___ money.', options: ['many','much','a few','number'], correctIndex: 1, explanation: '"money" นับไม่ได้ ใช้ much' },
      { id: 'b1u8-t-05', type: 'fill-in-blank',   prompt: 'This car is ___ more expensive than that one. (=มากกว่ามาก)', answer: 'much', acceptedVariants: ['far'], explanation: 'much/far + comparative เน้นความต่างมาก' },
      { id: 'b1u8-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                       options: ['This is more cheaper than that.','This is much cheaper than that.','This is cheaper more than that.','This is a bit more cheaper.'], correctIndex: 1, explanation: 'much + cheaper; ห้ามใช้ more กับ -er พร้อมกัน' },
      { id: 'b1u8-t-07', type: 'fill-in-blank',   prompt: 'I have saved ___ money for a holiday. (นับไม่ได้ = เล็กน้อย, 2 คำ)', answer: 'a little', acceptedVariants: [], explanation: '"money" นับไม่ได้ ใช้ a little' },
      { id: 'b1u8-t-08', type: 'multiple-choice', prompt: 'In the listening, what is Meta’s biggest expense?', options: ['Food','Rent','Clothes','Transport'], correctIndex: 1, explanation: 'เมต้าบอกว่า "My biggest expense is rent"' },
      { id: 'b1u8-t-09', type: 'multiple-choice', prompt: 'In the listening, how can Meta save money?',       options: ['Eat out more','Cook at home','Buy a car','Stop working'], correctIndex: 1, explanation: 'เมต้าบอกว่า "If I cook at home, I will save a lot"' },
      { id: 'b1u8-t-10', type: 'multiple-choice', prompt: 'In the article, what do experts suggest about saving?', options: ['Save after spending','Save before spending','Never save','Save once a year'], correctIndex: 1, explanation: 'บทความบอกว่า "saving before you spend, not after"' },
    ]
  }
}

export const b1p2 = [b1Unit5, b1Unit6, b1Unit7, b1Unit8]
