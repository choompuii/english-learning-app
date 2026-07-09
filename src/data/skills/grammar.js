export const grammarTopics = [
  {
    id: 'grammar-tenses',
    title: 'Verb Tenses',
    thai: 'กาล (Tenses)',
    emoji: '⏳',
    level: 'A2',
    summary: 'เรียนรู้กาลพื้นฐานของภาษาอังกฤษ (present, past, future) และรูปต่อเนื่องกับรูปสมบูรณ์',
    explanation: [
      {
        heading: 'Present Simple',
        body: 'ใช้พูดถึงความจริง นิสัย และกิจวัตรประจำวัน เช่น "I work", "She works".\nจุดที่คนไทยมักผิด: ลืมเติม -s/-es กับประธานเอกพจน์บุรุษที่ 3 (he/she/it) เพราะภาษาไทยกริยาไม่ผัน\nถูก: "He goes to work." ผิด: "He go to work."'
      },
      {
        heading: 'Present Continuous',
        body: 'ใช้พูดถึงสิ่งที่กำลังเกิดขึ้นตอนนี้ โครงสร้าง = am/is/are + V-ing เช่น "I am eating now."\nจุดที่คนไทยมักผิด: ลืมใส่ verb to be (am/is/are) เช่น พูดว่า "I eating" ซึ่งผิด ต้องเป็น "I am eating."'
      },
      {
        heading: 'Past Simple',
        body: 'ใช้พูดถึงเหตุการณ์ที่จบไปแล้วในอดีต กริยาปกติเติม -ed (worked, played) กริยาผิดปกติต้องจำ (go → went, eat → ate).\nจุดที่คนไทยมักผิด: ใช้ "did" แล้วยังผันกริยาอีก เช่น "Did you went?" ที่ถูกคือ "Did you go?" เพราะหลัง did ใช้กริยารูปธรรมดา'
      },
      {
        heading: 'Present Perfect',
        body: 'โครงสร้าง = have/has + V3 ใช้พูดถึงประสบการณ์หรือสิ่งที่เพิ่งเสร็จและยังเชื่อมกับปัจจุบัน เช่น "I have finished my homework."\nจุดที่คนไทยมักผิด: สับสนกับ past simple ให้จำว่าถ้าระบุเวลาชัดเจนในอดีต (yesterday, last year) ต้องใช้ past simple ไม่ใช่ present perfect'
      }
    ],
    examples: [
      { en: 'She works in a hospital.', th: 'เธอทำงานในโรงพยาบาล' },
      { en: 'They are watching a movie right now.', th: 'พวกเขากำลังดูหนังอยู่ตอนนี้' },
      { en: 'We visited Chiang Mai last year.', th: 'เราไปเที่ยวเชียงใหม่เมื่อปีที่แล้ว' },
      { en: 'I have already eaten lunch.', th: 'ฉันกินข้าวเที่ยงไปแล้ว' },
      { en: 'He will call you tomorrow.', th: 'เขาจะโทรหาคุณพรุ่งนี้' },
      { en: 'Did you sleep well last night?', th: 'เมื่อคืนคุณนอนหลับสบายดีไหม' }
    ],
    practice: [
      { id: 'gt-p1', type: 'fill-in-blank', prompt: 'She ___ (go) to school every day.', answer: 'goes', acceptedVariants: [], explanation: 'ประธานเอกพจน์บุรุษที่ 3 เติม -es → goes' },
      { id: 'gt-p2', type: 'multiple-choice', prompt: 'Choose the correct sentence about right now.', options: ['I read a book now.', 'I am reading a book now.', 'I reading a book now.', 'I reads a book now.'], correctIndex: 1, explanation: 'สิ่งที่กำลังเกิดขึ้นตอนนี้ใช้ present continuous = am + V-ing' },
      { id: 'gt-p3', type: 'fill-in-blank', prompt: 'We ___ (visit) our grandparents last weekend.', answer: 'visited', acceptedVariants: [], explanation: 'เหตุการณ์จบในอดีต + last weekend ใช้ past simple เติม -ed → visited' },
      { id: 'gt-p4', type: 'multiple-choice', prompt: 'Which question is correct?', options: ['Did you went home?', 'Did you go home?', 'Do you went home?', 'Did you going home?'], correctIndex: 1, explanation: 'หลัง did ใช้กริยารูปธรรมดา (go) เสมอ' }
    ],
    quiz: [
      { id: 'gt-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['He go home.', 'He goes home.', 'He going home.', 'He gone home.'], correctIndex: 1, explanation: 'ประธานเอกพจน์บุรุษที่ 3 + goes' },
      { id: 'gt-q2', type: 'fill-in-blank', prompt: 'They ___ (play) football yesterday.', answer: 'played', acceptedVariants: [], explanation: 'yesterday = อดีต ใช้ past simple → played' },
      { id: 'gt-q3', type: 'multiple-choice', prompt: 'Which sentence uses the present perfect correctly?', options: ['I have saw that film.', 'I have seen that film.', 'I has seen that film.', 'I have see that film.'], correctIndex: 1, explanation: 'present perfect = have + V3 (seen); I ใช้ have ไม่ใช่ has' },
      { id: 'gt-q4', type: 'fill-in-blank', prompt: 'Look! The baby ___ (cry). (happening now)', answer: 'is crying', acceptedVariants: ["'s crying"], explanation: 'สิ่งที่เกิดขึ้นตอนนี้ใช้ present continuous → is crying' }
    ]
  },
  {
    id: 'grammar-passive',
    title: 'Passive Voice',
    thai: 'ประโยค Passive / กรรมวาจก',
    emoji: '🔄',
    level: 'B1',
    summary: 'เรียนรู้การเปลี่ยนประโยคเป็นกรรมวาจก (passive) เมื่อเน้นผู้ถูกกระทำมากกว่าผู้กระทำ',
    explanation: [
      {
        heading: 'Basic Structure',
        body: 'โครงสร้าง passive = verb to be + V3 (past participle) เช่น "The cake was made by my mother."\nใช้เมื่อสนใจ "ผู้ถูกกระทำ" มากกว่า "ผู้กระทำ" หรือไม่รู้ว่าใครทำ\nจุดที่คนไทยมักผิด: ลืมใช้ verb to be เช่น "The house built in 1990" ที่ถูกคือ "The house was built in 1990."'
      },
      {
        heading: 'Choosing the Tense',
        body: 'กาลของประโยคจะอยู่ที่ verb to be ส่วนกริยาหลักเป็น V3 เสมอ\nPresent: "English is spoken here."\nPast: "The letter was sent yesterday."\nจุดที่คนไทยมักผิด: ผัน V3 ผิด เช่น ใช้ V2 แทน V3 (written ไม่ใช่ wrote)'
      },
      {
        heading: 'Using "by"',
        body: 'ถ้าต้องการบอกผู้กระทำ ใช้ "by + ผู้กระทำ" เช่น "The song was written by John."\nแต่ถ้าไม่สำคัญว่าใครทำ ก็ไม่ต้องใส่ by เลย เช่น "My phone was stolen."'
      }
    ],
    examples: [
      { en: 'This bridge was built in 1932.', th: 'สะพานนี้ถูกสร้างในปี 1932' },
      { en: 'English is spoken in many countries.', th: 'ภาษาอังกฤษถูกพูดในหลายประเทศ' },
      { en: 'The window was broken by the storm.', th: 'หน้าต่างถูกทำให้แตกเพราะพายุ' },
      { en: 'These cars are made in Japan.', th: 'รถเหล่านี้ผลิตในประเทศญี่ปุ่น' },
      { en: 'My wallet was stolen at the market.', th: 'กระเป๋าเงินของฉันถูกขโมยที่ตลาด' },
      { en: 'The results will be announced tomorrow.', th: 'ผลลัพธ์จะถูกประกาศพรุ่งนี้' }
    ],
    practice: [
      { id: 'pv-p1', type: 'fill-in-blank', prompt: 'The report ___ (write) by the manager. (present passive)', answer: 'is written', acceptedVariants: [], explanation: 'present passive = is + V3 (written)' },
      { id: 'pv-p2', type: 'multiple-choice', prompt: 'Which is the correct passive sentence?', options: ['The house builded last year.', 'The house was build last year.', 'The house was built last year.', 'The house is built last year.'], correctIndex: 2, explanation: 'past passive = was + V3 (built); last year = อดีต' },
      { id: 'pv-p3', type: 'fill-in-blank', prompt: 'Rice ___ (grow) in Thailand. (present passive)', answer: 'is grown', acceptedVariants: [], explanation: 'present passive = is + V3 (grown)' },
      { id: 'pv-p4', type: 'multiple-choice', prompt: 'Change to passive: "Someone stole my bike."', options: ['My bike was stolen.', 'My bike is stolen.', 'My bike stole.', 'My bike was stole.'], correctIndex: 0, explanation: 'past passive = was + V3 (stolen)' }
    ],
    quiz: [
      { id: 'pv-q1', type: 'multiple-choice', prompt: 'Choose the correct passive sentence.', options: ['The cake was make by her.', 'The cake was made by her.', 'The cake made by her.', 'The cake is make by her.'], correctIndex: 1, explanation: 'passive = was + V3 (made) + by' },
      { id: 'pv-q2', type: 'fill-in-blank', prompt: 'The email ___ (send) an hour ago. (past passive)', answer: 'was sent', acceptedVariants: [], explanation: 'past passive = was + V3 (sent)' },
      { id: 'pv-q3', type: 'multiple-choice', prompt: 'Which sentence is passive?', options: ['They clean the office every day.', 'The office is cleaned every day.', 'They are cleaning the office.', 'The office cleans every day.'], correctIndex: 1, explanation: 'passive = is + V3 (cleaned)' },
      { id: 'pv-q4', type: 'fill-in-blank', prompt: 'This book ___ (translate) into Thai. (present passive)', answer: 'is translated', acceptedVariants: [], explanation: 'present passive = is + V3 (translated)' }
    ]
  },
  {
    id: 'grammar-modals',
    title: 'Modal Verbs',
    thai: 'กริยาช่วย Modal',
    emoji: '🔑',
    level: 'A2',
    summary: 'เรียนรู้กริยาช่วย modal (can, must, should, may) เพื่อแสดงความสามารถ ความจำเป็น และคำแนะนำ',
    explanation: [
      {
        heading: 'Verb Form After Modals',
        body: 'หลัง modal verb (can, will, must, should, may, might, could) ใช้กริยารูปธรรมดา (base form) เสมอ ไม่เติม -s ไม่เติม to\nจุดที่คนไทยมักผิด: เติม to หรือ -s เช่น "She can to swim" หรือ "He can swims" ที่ถูกคือ "She can swim." และ "He can swim."'
      },
      {
        heading: 'Ability and Permission',
        body: 'can = สามารถ / ขออนุญาต เช่น "I can drive." "Can I sit here?"\ncould = อดีตของ can หรือใช้ขออย่างสุภาพ เช่น "Could you help me?"\nจุดที่คนไทยมักผิด: ใช้ can กับอดีต ควรใช้ could แทนเมื่อพูดถึงความสามารถในอดีต'
      },
      {
        heading: 'Obligation and Advice',
        body: 'must = ต้อง (จำเป็นมาก), should = ควร (คำแนะนำ)\n"You must wear a helmet." (กฎ) "You should rest." (แนะนำ)\nจุดที่คนไทยมักผิด: สับสนระหว่าง must (บังคับ) กับ should (แนะนำ) — must หนักแน่นกว่า'
      }
    ],
    examples: [
      { en: 'I can speak two languages.', th: 'ฉันพูดได้สองภาษา' },
      { en: 'You should see a doctor.', th: 'คุณควรไปหาหมอ' },
      { en: 'We must finish this today.', th: 'เราต้องทำสิ่งนี้ให้เสร็จวันนี้' },
      { en: 'Could you open the window, please?', th: 'ช่วยเปิดหน้าต่างหน่อยได้ไหม' },
      { en: 'It might rain this afternoon.', th: 'บ่ายนี้อาจจะฝนตก' },
      { en: 'She may join us later.', th: 'เธออาจจะมาร่วมกับเราทีหลัง' }
    ],
    practice: [
      { id: 'md-p1', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['She can to swim.', 'She can swims.', 'She can swim.', 'She cans swim.'], correctIndex: 2, explanation: 'หลัง modal (can) ใช้กริยารูปธรรมดา ไม่มี to ไม่เติม -s' },
      { id: 'md-p2', type: 'fill-in-blank', prompt: 'You look tired. You ___ (advice) go to bed early.', answer: 'should', acceptedVariants: [], explanation: 'ให้คำแนะนำใช้ should' },
      { id: 'md-p3', type: 'multiple-choice', prompt: 'Which is the most polite request?', options: ['Give me water.', 'Could you give me some water?', 'You give me water.', 'Water, now.'], correctIndex: 1, explanation: 'Could you ...? เป็นการขออย่างสุภาพ' },
      { id: 'md-p4', type: 'fill-in-blank', prompt: 'Drivers ___ (obligation) stop at a red light.', answer: 'must', acceptedVariants: [], explanation: 'สิ่งที่บังคับ/เป็นกฎใช้ must' }
    ],
    quiz: [
      { id: 'md-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['He must to work.', 'He must works.', 'He must work.', 'He musts work.'], correctIndex: 2, explanation: 'หลัง must ใช้กริยารูปธรรมดา (work)' },
      { id: 'md-q2', type: 'multiple-choice', prompt: 'Which sentence gives advice?', options: ['You must pay tax.', 'You should drink more water.', 'You can drive a car.', 'You may leave now.'], correctIndex: 1, explanation: 'should ใช้ให้คำแนะนำ' },
      { id: 'md-q3', type: 'fill-in-blank', prompt: 'When I was young, I ___ (ability, past) run very fast.', answer: 'could', acceptedVariants: [], explanation: 'ความสามารถในอดีตใช้ could' },
      { id: 'md-q4', type: 'multiple-choice', prompt: 'Choose the correct request for permission.', options: ['Can I use your phone?', 'Can I to use your phone?', 'Can I using your phone?', 'Can I used your phone?'], correctIndex: 0, explanation: 'Can I + กริยารูปธรรมดา (use) เพื่อขออนุญาต' }
    ]
  },
  {
    id: 'grammar-prepositions',
    title: 'Prepositions',
    thai: 'คำบุพบท',
    emoji: '📍',
    level: 'A2',
    summary: 'เรียนรู้คำบุพบทบอกเวลาและสถานที่ (in, on, at) ที่คนไทยมักสับสน',
    explanation: [
      {
        heading: 'Prepositions of Time',
        body: 'in = เดือน ปี ช่วงเวลากว้าง (in July, in 2020, in the morning)\non = วัน วันที่ (on Monday, on July 5th)\nat = เวลาเจาะจง (at 7 o\'clock, at night)\nจุดที่คนไทยมักผิด: พูด "in Monday" ที่ถูกคือ "on Monday" และ "on the morning" ที่ถูกคือ "in the morning"'
      },
      {
        heading: 'Prepositions of Place',
        body: 'in = อยู่ข้างใน (in the box, in Bangkok)\non = อยู่บนพื้นผิว (on the table, on the wall)\nat = อยู่ที่จุดหนึ่ง (at the bus stop, at school)\nจุดที่คนไทยมักผิด: ใช้ at กับเมืองหรือประเทศ ควรใช้ in เช่น "in Thailand" ไม่ใช่ "at Thailand"'
      },
      {
        heading: 'Common Fixed Expressions',
        body: 'บุพบทบางคำต้องจำเป็นวลีตายตัว เช่น "good at", "interested in", "afraid of", "listen to"\nจุดที่คนไทยมักผิด: แปลตรงตัวจากภาษาไทย เช่น "listen music" ที่ถูกคือ "listen to music"'
      }
    ],
    examples: [
      { en: 'The meeting is on Monday.', th: 'การประชุมอยู่ในวันจันทร์' },
      { en: 'I was born in 1998.', th: 'ฉันเกิดในปี 1998' },
      { en: 'Let\'s meet at 6 o\'clock.', th: 'เจอกันตอน 6 โมง' },
      { en: 'The keys are on the table.', th: 'กุญแจอยู่บนโต๊ะ' },
      { en: 'She lives in Chiang Rai.', th: 'เธออาศัยอยู่ในเชียงราย' },
      { en: 'He is good at math.', th: 'เขาเก่งคณิตศาสตร์' }
    ],
    practice: [
      { id: 'pr-p1', type: 'multiple-choice', prompt: 'We have a test ___ Friday.', options: ['in', 'on', 'at', 'to'], correctIndex: 1, explanation: 'วันในสัปดาห์ใช้ on → on Friday' },
      { id: 'pr-p2', type: 'fill-in-blank', prompt: 'The cat is sleeping ___ the sofa. (on the surface)', answer: 'on', acceptedVariants: [], explanation: 'อยู่บนพื้นผิวใช้ on' },
      { id: 'pr-p3', type: 'multiple-choice', prompt: 'My brother lives ___ Japan.', options: ['at', 'on', 'in', 'to'], correctIndex: 2, explanation: 'ประเทศ/เมืองใช้ in → in Japan' },
      { id: 'pr-p4', type: 'fill-in-blank', prompt: 'I like to listen ___ music every day.', answer: 'to', acceptedVariants: [], explanation: 'วลีตายตัว listen to' }
    ],
    quiz: [
      { id: 'pr-q1', type: 'multiple-choice', prompt: 'The shop opens ___ 9 a.m.', options: ['in', 'on', 'at', 'by'], correctIndex: 2, explanation: 'เวลาเจาะจงใช้ at → at 9 a.m.' },
      { id: 'pr-q2', type: 'multiple-choice', prompt: 'We go on holiday ___ July.', options: ['in', 'on', 'at', 'to'], correctIndex: 0, explanation: 'เดือนใช้ in → in July' },
      { id: 'pr-q3', type: 'fill-in-blank', prompt: 'The picture is ___ the wall. (surface)', answer: 'on', acceptedVariants: [], explanation: 'ติดบนพื้นผิว (กำแพง) ใช้ on' },
      { id: 'pr-q4', type: 'multiple-choice', prompt: 'She is interested ___ history.', options: ['on', 'at', 'in', 'to'], correctIndex: 2, explanation: 'วลีตายตัว interested in' }
    ]
  },
  {
    id: 'grammar-articles',
    title: 'Articles',
    thai: 'a / an / the',
    emoji: '🔤',
    level: 'A1',
    summary: 'เรียนรู้การใช้ a, an, the ซึ่งภาษาไทยไม่มี จึงเป็นจุดที่คนไทยมักลืมหรือใช้ผิด',
    explanation: [
      {
        heading: 'A vs An',
        body: 'ใช้ a/an กับคำนามนับได้เอกพจน์ที่พูดถึงครั้งแรกหรือทั่วไป\na ใช้หน้าคำที่ขึ้นต้นด้วยเสียงพยัญชนะ (a car, a book)\nan ใช้หน้าคำที่ขึ้นต้นด้วยเสียงสระ (an apple, an hour)\nจุดที่คนไทยมักผิด: ดูที่ "เสียง" ไม่ใช่ตัวอักษร เช่น "an hour" (h ไม่ออกเสียง), "a university" (ออกเสียง yu)'
      },
      {
        heading: 'The (Definite Article)',
        body: 'ใช้ the เมื่อผู้พูดและผู้ฟังรู้ว่าหมายถึงสิ่งไหนเจาะจง หรือเคยพูดถึงมาก่อน เช่น "I bought a book. The book is interesting."\nใช้ the กับสิ่งที่มีหนึ่งเดียว (the sun, the moon)\nจุดที่คนไทยมักผิด: ลืมใช้ the เพราะภาษาไทยไม่มี article'
      },
      {
        heading: 'No Article',
        body: 'ไม่ใช้ article กับคำนามพหูพจน์ทั่วไปและคำนามนับไม่ได้ เช่น "I like dogs." "Water is important."\nจุดที่คนไทยมักผิด: ใส่ a หน้าคำนามพหูพจน์ เช่น "a dogs" ซึ่งผิด'
      }
    ],
    examples: [
      { en: 'I have a dog.', th: 'ฉันมีสุนัขหนึ่งตัว' },
      { en: 'She ate an orange.', th: 'เธอกินส้มหนึ่งลูก' },
      { en: 'The sun is very bright today.', th: 'วันนี้ดวงอาทิตย์สว่างมาก' },
      { en: 'We waited for an hour.', th: 'เรารอเป็นเวลาหนึ่งชั่วโมง' },
      { en: 'Cats are cute animals.', th: 'แมวเป็นสัตว์ที่น่ารัก' },
      { en: 'Can you pass me the salt?', th: 'ช่วยส่งเกลือให้หน่อยได้ไหม' }
    ],
    practice: [
      { id: 'ar-p1', type: 'multiple-choice', prompt: 'I saw ___ elephant at the zoo.', options: ['a', 'an', 'the', '(no article)'], correctIndex: 1, explanation: 'elephant ขึ้นต้นด้วยเสียงสระ ใช้ an' },
      { id: 'ar-p2', type: 'fill-in-blank', prompt: 'She is reading ___ book. (a/an, first mention)', answer: 'a', acceptedVariants: [], explanation: 'book ขึ้นต้นด้วยเสียงพยัญชนะ พูดถึงครั้งแรกใช้ a' },
      { id: 'ar-p3', type: 'multiple-choice', prompt: 'Please close ___ door. (the specific one here)', options: ['a', 'an', 'the', '(no article)'], correctIndex: 2, explanation: 'ประตูที่รู้กันว่าอันไหน ใช้ the' },
      { id: 'ar-p4', type: 'multiple-choice', prompt: 'We stayed for ___ hour.', options: ['a', 'an', 'the', '(no article)'], correctIndex: 1, explanation: 'hour มีเสียงสระ (h เงียบ) ใช้ an' }
    ],
    quiz: [
      { id: 'ar-q1', type: 'multiple-choice', prompt: 'He is ___ honest man.', options: ['a', 'an', 'the', '(no article)'], correctIndex: 1, explanation: 'honest มี h เงียบ ออกเสียงสระ ใช้ an' },
      { id: 'ar-q2', type: 'fill-in-blank', prompt: 'Look at ___ moon tonight!', answer: 'the', acceptedVariants: [], explanation: 'สิ่งที่มีหนึ่งเดียว (moon) ใช้ the' },
      { id: 'ar-q3', type: 'multiple-choice', prompt: 'I bought ___ new phone yesterday.', options: ['a', 'an', 'the', '(no article)'], correctIndex: 0, explanation: 'new ขึ้นต้นด้วยเสียงพยัญชนะ พูดถึงครั้งแรกใช้ a' },
      { id: 'ar-q4', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['I love a cats.', 'I love an cats.', 'I love the cats in general.', 'I love cats.'], correctIndex: 3, explanation: 'คำนามพหูพจน์ทั่วไปไม่ใช้ article → I love cats.' }
    ]
  },
  {
    id: 'grammar-pronouns',
    title: 'Pronouns',
    thai: 'คำสรรพนาม',
    emoji: '👥',
    level: 'A1',
    summary: 'เรียนรู้คำสรรพนามประธาน กรรม และแสดงความเป็นเจ้าของ (I/me/my) พร้อมความแตกต่างของ he/she',
    explanation: [
      {
        heading: 'Subject vs Object Pronouns',
        body: 'Subject (ประธาน): I, you, he, she, it, we, they → อยู่หน้าประโยค เป็นผู้ทำกริยา\nObject (กรรม): me, you, him, her, it, us, them → อยู่หลังกริยาหรือบุพบท เป็นผู้ถูกกระทำ\nจุดที่คนไทยมักผิด: ใช้ประธานแทนกรรม เช่น "She likes I" ที่ถูกคือ "She likes me."'
      },
      {
        heading: 'Possessive Adjectives',
        body: 'my, your, his, her, its, our, their → วางหน้าคำนามเพื่อบอกความเป็นเจ้าของ เช่น "my book", "her car"\nจุดที่คนไทยมักผิด: สับสน his (ของเขาผู้ชาย) กับ her (ของเธอผู้หญิง) เพราะภาษาไทยใช้ "ของเขา" เหมือนกัน'
      },
      {
        heading: 'He vs She vs It',
        body: 'he = ผู้ชาย, she = ผู้หญิง, it = สิ่งของ/สัตว์/สิ่งที่ไม่ระบุเพศ\nจุดที่คนไทยมักผิด: เรียกคนด้วย it หรือสลับ he/she เพราะภาษาพูดไทยใช้ "เขา" กับทุกคน ต้องระวังเลือกให้ตรงเพศ'
      }
    ],
    examples: [
      { en: 'She is my sister.', th: 'เธอเป็นน้องสาวของฉัน' },
      { en: 'Can you help me?', th: 'ช่วยฉันหน่อยได้ไหม' },
      { en: 'This is his bag.', th: 'นี่คือกระเป๋าของเขา (ผู้ชาย)' },
      { en: 'We love them very much.', th: 'เรารักพวกเขามาก' },
      { en: 'The dog wagged its tail.', th: 'สุนัขกระดิกหางของมัน' },
      { en: 'Their house is big.', th: 'บ้านของพวกเขาใหญ่' }
    ],
    practice: [
      { id: 'pn-p1', type: 'multiple-choice', prompt: 'Please give the book to ___.', options: ['I', 'me', 'my', 'mine'], correctIndex: 1, explanation: 'หลังบุพบท (to) ใช้กรรม → me' },
      { id: 'pn-p2', type: 'fill-in-blank', prompt: 'This is ___ (belonging to me) pencil.', answer: 'my', acceptedVariants: [], explanation: 'หน้าคำนามเพื่อบอกเจ้าของใช้ my' },
      { id: 'pn-p3', type: 'multiple-choice', prompt: 'John is a boy. ___ likes football.', options: ['She', 'He', 'It', 'They'], correctIndex: 1, explanation: 'John เป็นผู้ชายใช้ He' },
      { id: 'pn-p4', type: 'multiple-choice', prompt: 'That is Mary\'s car. It is ___ car.', options: ['his', 'her', 'their', 'its'], correctIndex: 1, explanation: 'ของ Mary (ผู้หญิง) ใช้ her' }
    ],
    quiz: [
      { id: 'pn-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['Her is my friend.', 'She is my friend.', 'Hers is my friend.', 'She am my friend.'], correctIndex: 1, explanation: 'ประธานใช้ She' },
      { id: 'pn-q2', type: 'multiple-choice', prompt: 'The teacher asked ___ a question.', options: ['we', 'us', 'our', 'ours'], correctIndex: 1, explanation: 'หลังกริยา (asked) ใช้กรรม → us' },
      { id: 'pn-q3', type: 'fill-in-blank', prompt: 'Tom lost ___ (belonging to Tom) keys.', answer: 'his', acceptedVariants: [], explanation: 'ของ Tom (ผู้ชาย) ใช้ his' },
      { id: 'pn-q4', type: 'multiple-choice', prompt: 'The cat is hungry. ___ wants food.', options: ['He', 'She', 'It', 'They'], correctIndex: 2, explanation: 'สัตว์ทั่วไปที่ไม่ระบุเพศใช้ It' }
    ]
  },
  {
    id: 'grammar-relative-clauses',
    title: 'Relative Clauses',
    thai: 'อนุประโยค who/which/that',
    emoji: '🔗',
    level: 'B1',
    summary: 'เรียนรู้การเชื่อมประโยคด้วย who, which, that เพื่อให้ข้อมูลเพิ่มเติมเกี่ยวกับคำนาม',
    explanation: [
      {
        heading: 'Who, Which, That',
        body: 'who = ใช้กับคน (The man who called me...)\nwhich = ใช้กับสิ่งของ/สัตว์ (The book which I read...)\nthat = ใช้ได้ทั้งคนและสิ่งของในประโยคแบบ defining\nจุดที่คนไทยมักผิด: ใช้ which กับคน ควรใช้ who กับคนเสมอ'
      },
      {
        heading: 'Joining Two Sentences',
        body: 'relative clause ช่วยรวมสองประโยคที่พูดถึงคำนามเดียวกัน\n"I know a girl. She speaks French." → "I know a girl who speaks French."\nจุดที่คนไทยมักผิด: ใส่ประธานซ้ำ เช่น "The girl who she speaks French" — ไม่ต้องใส่ she เพราะ who ทำหน้าที่ประธานแล้ว'
      },
      {
        heading: 'Where and Whose',
        body: 'where = ใช้กับสถานที่ (the house where I live)\nwhose = แสดงความเป็นเจ้าของ (the man whose car is red)\nจุดที่คนไทยมักผิด: ใช้ where แทน which กับสิ่งที่ไม่ใช่สถานที่'
      }
    ],
    examples: [
      { en: 'The woman who lives next door is a nurse.', th: 'ผู้หญิงที่อาศัยอยู่บ้านข้างๆ เป็นพยาบาล' },
      { en: 'This is the phone which I bought yesterday.', th: 'นี่คือโทรศัพท์ที่ฉันซื้อเมื่อวานนี้' },
      { en: 'He is the teacher that everyone likes.', th: 'เขาคือครูที่ทุกคนชอบ' },
      { en: 'That is the restaurant where we met.', th: 'นั่นคือร้านอาหารที่เราเจอกัน' },
      { en: 'I have a friend whose father is a pilot.', th: 'ฉันมีเพื่อนที่พ่อของเขาเป็นนักบิน' },
      { en: 'The movie which we watched was scary.', th: 'หนังที่เราดูน่ากลัว' }
    ],
    practice: [
      { id: 'rc-p1', type: 'multiple-choice', prompt: 'The man ___ helped me was very kind.', options: ['which', 'who', 'where', 'whose'], correctIndex: 1, explanation: 'คนใช้ who' },
      { id: 'rc-p2', type: 'fill-in-blank', prompt: 'This is the book ___ won the prize. (thing)', answer: 'which', acceptedVariants: ['that'], explanation: 'สิ่งของใช้ which (หรือ that)' },
      { id: 'rc-p3', type: 'multiple-choice', prompt: 'That is the school ___ I studied.', options: ['who', 'which', 'where', 'whose'], correctIndex: 2, explanation: 'สถานที่ใช้ where' },
      { id: 'rc-p4', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['The girl who she sings is my sister.', 'The girl who sings is my sister.', 'The girl which sings is my sister.', 'The girl where sings is my sister.'], correctIndex: 1, explanation: 'who ทำหน้าที่ประธานแล้ว ไม่ต้องใส่ she ซ้ำ และใช้ who กับคน' }
    ],
    quiz: [
      { id: 'rc-q1', type: 'multiple-choice', prompt: 'The car ___ he drives is new.', options: ['who', 'which', 'where', 'whose'], correctIndex: 1, explanation: 'สิ่งของ (car) ใช้ which' },
      { id: 'rc-q2', type: 'multiple-choice', prompt: 'She is the doctor ___ saved my life.', options: ['which', 'who', 'where', 'what'], correctIndex: 1, explanation: 'คนใช้ who' },
      { id: 'rc-q3', type: 'fill-in-blank', prompt: 'I know a man ___ dog is very big. (possession)', answer: 'whose', acceptedVariants: [], explanation: 'แสดงความเป็นเจ้าของใช้ whose' },
      { id: 'rc-q4', type: 'multiple-choice', prompt: 'This is the town ___ I grew up.', options: ['which', 'who', 'where', 'whose'], correctIndex: 2, explanation: 'สถานที่ใช้ where' }
    ]
  },
  {
    id: 'grammar-conditionals',
    title: 'Conditionals',
    thai: 'ประโยคเงื่อนไข if',
    emoji: '🔀',
    level: 'B1',
    summary: 'เรียนรู้ประโยคเงื่อนไข (zero, first, second conditional) เพื่อพูดถึงเงื่อนไขและผลลัพธ์',
    explanation: [
      {
        heading: 'Zero & First Conditional',
        body: 'Zero conditional (ความจริงทั่วไป): If + present, present. เช่น "If you heat ice, it melts."\nFirst conditional (เป็นไปได้ในอนาคต): If + present, will + V. เช่น "If it rains, I will stay home."\nจุดที่คนไทยมักผิด: ใส่ will ในประโยค if เช่น "If it will rain..." ที่ถูกคือใช้ present ในส่วน if → "If it rains..."'
      },
      {
        heading: 'Second Conditional',
        body: 'ใช้พูดถึงสถานการณ์สมมติที่ไม่จริงหรือไม่น่าเป็นไปได้ในปัจจุบัน โครงสร้าง = If + past simple, would + V\n"If I were rich, I would travel the world."\nจุดที่คนไทยมักผิด: ใช้ was กับ I/he/she ในภาษาทางการควรใช้ were → "If I were you"'
      },
      {
        heading: 'Order of Clauses',
        body: 'สลับตำแหน่งประโยค if ได้ ถ้า if นำหน้าใช้ comma คั่น ถ้าอยู่หลังไม่ต้องใช้ comma\n"If you study, you will pass." = "You will pass if you study."'
      }
    ],
    examples: [
      { en: 'If you heat water, it boils.', th: 'ถ้าคุณต้มน้ำ มันจะเดือด' },
      { en: 'If it rains, we will cancel the trip.', th: 'ถ้าฝนตก เราจะยกเลิกทริป' },
      { en: 'If I were you, I would apologize.', th: 'ถ้าฉันเป็นคุณ ฉันจะขอโทษ' },
      { en: 'She will be happy if you call her.', th: 'เธอจะมีความสุขถ้าคุณโทรหาเธอ' },
      { en: 'If I had more time, I would learn the guitar.', th: 'ถ้าฉันมีเวลามากกว่านี้ ฉันจะเรียนกีตาร์' },
      { en: 'If you press this button, the machine starts.', th: 'ถ้าคุณกดปุ่มนี้ เครื่องจะเริ่มทำงาน' }
    ],
    practice: [
      { id: 'cd-p1', type: 'multiple-choice', prompt: 'If it ___ tomorrow, we will stay home.', options: ['will rain', 'rains', 'rained', 'raining'], correctIndex: 1, explanation: 'first conditional: ส่วน if ใช้ present simple → rains' },
      { id: 'cd-p2', type: 'fill-in-blank', prompt: 'If I were rich, I ___ (buy) a big house.', answer: 'would buy', acceptedVariants: [], explanation: 'second conditional: would + V (buy)' },
      { id: 'cd-p3', type: 'multiple-choice', prompt: 'If you heat ice, it ___.', options: ['will melt', 'melts', 'melted', 'would melt'], correctIndex: 1, explanation: 'zero conditional (ความจริง): present + present → melts' },
      { id: 'cd-p4', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['If I will see him, I will tell him.', 'If I see him, I will tell him.', 'If I see him, I tell him.', 'If I saw him, I will tell him.'], correctIndex: 1, explanation: 'first conditional: If + present, will + V' }
    ],
    quiz: [
      { id: 'cd-q1', type: 'multiple-choice', prompt: 'If she ___ hard, she will pass the exam.', options: ['will study', 'studies', 'studied', 'study'], correctIndex: 1, explanation: 'first conditional: ส่วน if ใช้ present → studies' },
      { id: 'cd-q2', type: 'fill-in-blank', prompt: 'If I ___ (be) you, I would take the job. (formal)', answer: 'were', acceptedVariants: [], explanation: 'second conditional ทางการใช้ were กับทุกประธาน' },
      { id: 'cd-q3', type: 'multiple-choice', prompt: 'Water freezes if the temperature ___ below zero.', options: ['will drop', 'drops', 'dropped', 'would drop'], correctIndex: 1, explanation: 'zero conditional (ความจริง): present → drops' },
      { id: 'cd-q4', type: 'multiple-choice', prompt: 'If I won the lottery, I ___ travel around the world.', options: ['will', 'would', 'am', 'did'], correctIndex: 1, explanation: 'second conditional (สมมติ): would + V' }
    ]
  },
  {
    id: 'grammar-reported-speech',
    title: 'Reported Speech',
    thai: 'การเล่าคำพูด',
    emoji: '💬',
    level: 'B2',
    summary: 'เรียนรู้การเล่าคำพูดของคนอื่น (reported speech) พร้อมการเปลี่ยนกาลและสรรพนาม',
    explanation: [
      {
        heading: 'Backshifting Tenses',
        body: 'เมื่อเล่าคำพูดที่พูดในอดีต ต้องเลื่อนกาลถอยหลังหนึ่งขั้น (backshift)\npresent simple → past simple, present continuous → past continuous, will → would\n"I am tired." → He said (that) he was tired.\nจุดที่คนไทยมักผิด: ลืมเลื่อนกาล เพราะภาษาไทยกริยาไม่ผัน'
      },
      {
        heading: 'Changing Pronouns & Time Words',
        body: 'ต้องเปลี่ยนสรรพนามให้เข้ากับผู้เล่า และเปลี่ยนคำบอกเวลา\nnow → then, today → that day, tomorrow → the next day, yesterday → the day before\n"I will call you tomorrow." → She said she would call me the next day.'
      },
      {
        heading: 'Reported Questions',
        body: 'คำถามที่เล่าต่อใช้ลำดับคำแบบประโยคบอกเล่า (ประธานมาก่อนกริยา) และไม่ใช้ ? \nYes/No question ใช้ if/whether: "Are you ok?" → He asked if I was ok.\nWh-question ใช้ wh-word: "Where do you live?" → She asked where I lived.\nจุดที่คนไทยมักผิด: ยังใช้ลำดับคำถาม (do/did) เช่น "He asked where did I live" ซึ่งผิด'
      }
    ],
    examples: [
      { en: 'He said that he was busy.', th: 'เขาบอกว่าเขายุ่ง' },
      { en: 'She told me she liked the gift.', th: 'เธอบอกฉันว่าเธอชอบของขวัญ' },
      { en: 'They said they would come the next day.', th: 'พวกเขาบอกว่าจะมาในวันถัดไป' },
      { en: 'He asked if I was hungry.', th: 'เขาถามว่าฉันหิวไหม' },
      { en: 'She asked where I lived.', th: 'เธอถามว่าฉันอยู่ที่ไหน' },
      { en: 'The teacher said the test was difficult.', th: 'ครูบอกว่าข้อสอบยาก' }
    ],
    practice: [
      { id: 'rs-p1', type: 'multiple-choice', prompt: 'Direct: "I am happy." Reported: He said he ___ happy.', options: ['is', 'was', 'were', 'has been'], correctIndex: 1, explanation: 'backshift: present simple (am) → past simple (was)' },
      { id: 'rs-p2', type: 'fill-in-blank', prompt: 'Direct: "I will help you." Reported: She said she ___ help me.', answer: 'would', acceptedVariants: [], explanation: 'backshift: will → would' },
      { id: 'rs-p3', type: 'multiple-choice', prompt: 'Report the question: "Where do you work?"', options: ['He asked where do I work.', 'He asked where did I work.', 'He asked where I worked.', 'He asked where worked I.'], correctIndex: 2, explanation: 'reported question ใช้ลำดับบอกเล่า และ backshift → where I worked' },
      { id: 'rs-p4', type: 'multiple-choice', prompt: 'Report: "Are you tired?"', options: ['She asked if I was tired.', 'She asked are you tired.', 'She asked if was I tired.', 'She asked if I am tired.'], correctIndex: 0, explanation: 'Yes/No question ใช้ if + ลำดับบอกเล่า + backshift → if I was tired' }
    ],
    quiz: [
      { id: 'rs-q1', type: 'multiple-choice', prompt: 'Direct: "I like coffee." Reported: He said he ___ coffee.', options: ['likes', 'liked', 'like', 'has liked'], correctIndex: 1, explanation: 'backshift: like → liked' },
      { id: 'rs-q2', type: 'fill-in-blank', prompt: 'Direct: "I am studying." Reported: She said she ___ studying.', answer: 'was', acceptedVariants: [], explanation: 'backshift: am → was' },
      { id: 'rs-q3', type: 'multiple-choice', prompt: 'Report the question: "What time is it?"', options: ['He asked what time is it.', 'He asked what time it was.', 'He asked what time was it.', 'He asked what time it is.'], correctIndex: 1, explanation: 'reported question: ลำดับบอกเล่า + backshift → what time it was' },
      { id: 'rs-q4', type: 'multiple-choice', prompt: 'Direct: "We will win." Reported: They said they ___ win.', options: ['will', 'would', 'are', 'did'], correctIndex: 1, explanation: 'backshift: will → would' }
    ]
  },
  {
    id: 'grammar-conjunctions',
    title: 'Conjunctions',
    thai: 'คำเชื่อม and/but/because',
    emoji: '➕',
    level: 'A2',
    summary: 'เรียนรู้คำเชื่อมประโยค (and, but, or, because, so) เพื่อรวมความคิดให้ประโยคลื่นไหล',
    explanation: [
      {
        heading: 'And, But, Or',
        body: 'and = และ (เพิ่มข้อมูล), but = แต่ (ขัดแย้ง), or = หรือ (ตัวเลือก)\n"I like tea and coffee." "It is cheap but good." "Tea or coffee?"\nจุดที่คนไทยมักผิด: ใช้ but ซ้ำกับ although ในประโยคเดียวกัน เลือกใช้อย่างใดอย่างหนึ่ง'
      },
      {
        heading: 'Because & So',
        body: 'because = เพราะ (บอกเหตุผล) มาก่อนเหตุผล, so = ดังนั้น (บอกผลลัพธ์) มาก่อนผลลัพธ์\n"I stayed home because I was sick." = "I was sick, so I stayed home."\nจุดที่คนไทยมักผิด: สลับ because กับ so ทำให้เหตุและผลกลับกัน'
      },
      {
        heading: 'Connecting Words, Not Just Sentences',
        body: 'คำเชื่อมใช้เชื่อมคำ วลี หรือประโยคก็ได้ เช่น "apples and oranges" (เชื่อมคำนาม)\nจุดที่คนไทยมักผิด: ใส่ comma ผิดที่ หรือใช้คำเชื่อมเกินความจำเป็นในประโยคเดียว'
      }
    ],
    examples: [
      { en: 'I bought bread and milk.', th: 'ฉันซื้อขนมปังและนม' },
      { en: 'She is small but strong.', th: 'เธอตัวเล็กแต่แข็งแรง' },
      { en: 'Do you want tea or coffee?', th: 'คุณอยากได้ชาหรือกาแฟ' },
      { en: 'He was late because the bus broke down.', th: 'เขามาสายเพราะรถบัสเสีย' },
      { en: 'It was raining, so we took a taxi.', th: 'ฝนตก เราเลยนั่งแท็กซี่' },
      { en: 'I like reading and writing.', th: 'ฉันชอบอ่านและเขียน' }
    ],
    practice: [
      { id: 'cj-p1', type: 'multiple-choice', prompt: 'She was tired ___ she kept working.', options: ['and', 'but', 'or', 'so'], correctIndex: 1, explanation: 'ความขัดแย้ง (เหนื่อยแต่ยังทำงาน) ใช้ but' },
      { id: 'cj-p2', type: 'fill-in-blank', prompt: 'I was hungry, ___ I made a sandwich. (result)', answer: 'so', acceptedVariants: [], explanation: 'บอกผลลัพธ์ใช้ so' },
      { id: 'cj-p3', type: 'multiple-choice', prompt: 'We stayed inside ___ it was raining.', options: ['but', 'or', 'because', 'so'], correctIndex: 2, explanation: 'บอกเหตุผลใช้ because' },
      { id: 'cj-p4', type: 'multiple-choice', prompt: 'Would you like cake ___ ice cream?', options: ['and', 'but', 'or', 'because'], correctIndex: 2, explanation: 'ให้เลือกใช้ or' }
    ],
    quiz: [
      { id: 'cj-q1', type: 'multiple-choice', prompt: 'He is rich ___ he is not happy.', options: ['and', 'but', 'or', 'so'], correctIndex: 1, explanation: 'ความขัดแย้งใช้ but' },
      { id: 'cj-q2', type: 'fill-in-blank', prompt: 'I like coffee ___ tea. (both)', answer: 'and', acceptedVariants: [], explanation: 'เพิ่มข้อมูลทั้งสองอย่างใช้ and' },
      { id: 'cj-q3', type: 'multiple-choice', prompt: 'She was sad ___ she failed the test.', options: ['and', 'but', 'because', 'or'], correctIndex: 2, explanation: 'บอกเหตุผลใช้ because' },
      { id: 'cj-q4', type: 'multiple-choice', prompt: 'The store was closed, ___ we went home.', options: ['because', 'but', 'or', 'so'], correctIndex: 3, explanation: 'บอกผลลัพธ์ใช้ so' }
    ]
  },
  {
    id: 'grammar-questions',
    title: 'Question Forms',
    thai: 'การตั้งคำถาม',
    emoji: '❓',
    level: 'A1',
    summary: 'เรียนรู้การตั้งคำถาม Yes/No และ Wh-questions พร้อมการใช้ do/does/did อย่างถูกต้อง',
    explanation: [
      {
        heading: 'Yes/No Questions',
        body: 'ใช้ verb to be หรือ auxiliary (do/does/did) ขึ้นต้น\nverb to be: "Are you happy?" "Is she a teacher?"\nverb ทั่วไป: "Do you like it?" "Does he work here?"\nจุดที่คนไทยมักผิด: ลืมใช้ do/does เช่น "You like coffee?" ควรเป็น "Do you like coffee?"'
      },
      {
        heading: 'Wh-Questions',
        body: 'คำถาม what, where, when, who, why, how วางไว้หน้าประโยค ตามด้วยโครงสร้างคำถาม\n"Where do you live?" "What is your name?" "Why did she leave?"\nจุดที่คนไทยมักผิด: ใช้ลำดับคำแบบประโยคบอกเล่า เช่น "Where you live?" ควรเป็น "Where do you live?"'
      },
      {
        heading: 'Do / Does / Did',
        body: 'do = I/you/we/they (present), does = he/she/it (present), did = ทุกประธาน (past)\nหลัง do/does/did ใช้กริยารูปธรรมดาเสมอ\nจุดที่คนไทยมักผิด: ใช้ "Does he goes?" ที่ถูกคือ "Does he go?" เพราะ -s อยู่ที่ does แล้ว'
      }
    ],
    examples: [
      { en: 'Do you speak English?', th: 'คุณพูดภาษาอังกฤษได้ไหม' },
      { en: 'Where does she live?', th: 'เธออาศัยอยู่ที่ไหน' },
      { en: 'Is this your bag?', th: 'นี่คือกระเป๋าของคุณใช่ไหม' },
      { en: 'What time did the movie start?', th: 'หนังเริ่มกี่โมง' },
      { en: 'Why are you late?', th: 'ทำไมคุณมาสาย' },
      { en: 'How do you go to work?', th: 'คุณไปทำงานอย่างไร' }
    ],
    practice: [
      { id: 'qf-p1', type: 'multiple-choice', prompt: 'Choose the correct question.', options: ['You like pizza?', 'Do you like pizza?', 'Does you like pizza?', 'Like you pizza?'], correctIndex: 1, explanation: 'ประธาน you + present ใช้ Do ขึ้นต้น' },
      { id: 'qf-p2', type: 'fill-in-blank', prompt: '___ he play tennis? (present, he)', answer: 'Does', acceptedVariants: ['does'], explanation: 'ประธาน he (present) ใช้ Does' },
      { id: 'qf-p3', type: 'multiple-choice', prompt: 'Which question is correct?', options: ['Where you go yesterday?', 'Where did you go yesterday?', 'Where you went yesterday?', 'Where did you went yesterday?'], correctIndex: 1, explanation: 'อดีตใช้ did + กริยารูปธรรมดา (go)' },
      { id: 'qf-p4', type: 'multiple-choice', prompt: 'Choose the correct question.', options: ['Does she goes to school?', 'Does she go to school?', 'Do she go to school?', 'Does she going to school?'], correctIndex: 1, explanation: 'หลัง does ใช้กริยารูปธรรมดา (go)' }
    ],
    quiz: [
      { id: 'qf-q1', type: 'multiple-choice', prompt: 'Choose the correct question.', options: ['Do he like music?', 'Does he likes music?', 'Does he like music?', 'He does like music?'], correctIndex: 2, explanation: 'ประธาน he ใช้ Does + กริยารูปธรรมดา (like)' },
      { id: 'qf-q2', type: 'fill-in-blank', prompt: '___ you go to the party last night? (past)', answer: 'Did', acceptedVariants: ['did'], explanation: 'อดีต (last night) ใช้ Did ขึ้นต้น' },
      { id: 'qf-q3', type: 'multiple-choice', prompt: 'Which is the correct Wh-question?', options: ['What you want?', 'What do you want?', 'What does you want?', 'You want what?'], correctIndex: 1, explanation: 'Wh-word + do + ประธาน + กริยา → What do you want?' },
      { id: 'qf-q4', type: 'multiple-choice', prompt: 'Choose the correct question with "to be".', options: ['You are ready?', 'Are you ready?', 'Do you are ready?', 'Are you are ready?'], correctIndex: 1, explanation: 'verb to be ขึ้นต้นเพื่อตั้งคำถาม → Are you ready?' }
    ]
  }
];
