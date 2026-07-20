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
      { id: 'gt-p4', type: 'multiple-choice', prompt: 'Which question is correct?', options: ['Did you went home?', 'Did you go home?', 'Do you went home?', 'Did you going home?'], correctIndex: 1, explanation: 'หลัง did ใช้กริยารูปธรรมดา (go) เสมอ' },
      { id: "gt-p5", type: 'fill-in-blank', prompt: "They ___ (play) football when it started to rain.", answer: "were playing", acceptedVariants: ["Were playing"], explanation: "ใช้ Past Continuous (was/were + V-ing) เพื่อบอกว่ากำลังทำอะไรอยู่เมื่อมีเหตุการณ์อื่นเกิดขึ้นในอดีต" },
      { id: "gt-p6", type: 'multiple-choice', prompt: "I ___ never been to Japan before this trip.", options: ["have", "had", "has", "was"], correctIndex: 1, explanation: "ใช้ Past Perfect (had + V3) เพราะเป็นประสบการณ์ที่เกิดขึ้น \"ก่อน\" เหตุการณ์อื่นในอดีต (before this trip)" },
      { id: "gt-p7", type: 'fill-in-blank', prompt: "She ___ (finish) her report by 5 pm tomorrow.", answer: "will have finished", acceptedVariants: ["Will have finished"], explanation: "ใช้ Future Perfect (will have + V3) เพื่อบอกว่าการกระทำจะเสร็จสิ้นก่อนเวลาหรือเหตุการณ์หนึ่งในอนาคต" },
      { id: "gt-p8", type: 'multiple-choice', prompt: "Look at those clouds! It ___ rain soon.", options: ["is going to", "will", "was going to", "has rained"], correctIndex: 0, explanation: "ใช้ \"be going to\" เมื่อมีหลักฐานในปัจจุบัน (มองเห็นเมฆ) ที่บ่งบอกว่าอะไรจะเกิดขึ้น" },
      { id: "gt-p9", type: 'fill-in-blank', prompt: "He ___ (study) at this university since 2020.", answer: "has been studying", acceptedVariants: ["Has been studying"], explanation: "ใช้ Present Perfect Continuous (have/has been + V-ing) เพื่อเน้นว่ากิจกรรมยังดำเนินต่อเนื่องอยู่จนถึงปัจจุบัน" },
      { id: "gt-p10", type: 'multiple-choice', prompt: "Water ___ at 100 degrees Celsius.", options: ["boils", "is boiling", "boiled", "has boiled"], correctIndex: 0, explanation: "ใช้ Present Simple สำหรับความจริงทางวิทยาศาสตร์และสิ่งที่เป็นจริงเสมอ" },
      { id: "gt-p11", type: 'fill-in-blank', prompt: "By the time we arrived, the movie ___ (already / start).", answer: "had already started", acceptedVariants: ["Had already started"], explanation: "ใช้ Past Perfect (had + V3) เพื่อบอกว่าเหตุการณ์หนึ่งเกิดขึ้นก่อนอีกเหตุการณ์หนึ่งในอดีต" },
      { id: "gt-p12", type: 'multiple-choice', prompt: "She ___ her keys this morning and can't find them.", options: ["has lost", "loses", "lost", "had lost"], correctIndex: 0, explanation: "ใช้ Present Perfect (have/has + V3) เมื่อเหตุการณ์ในอดีตมีผลกระทบต่อปัจจุบัน (ยังหาไม่เจอตอนนี้)" }
    ],
    quiz: [
      { id: 'gt-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['He go home.', 'He goes home.', 'He going home.', 'He gone home.'], correctIndex: 1, explanation: 'ประธานเอกพจน์บุรุษที่ 3 + goes' },
      { id: 'gt-q2', type: 'fill-in-blank', prompt: 'They ___ (play) football yesterday.', answer: 'played', acceptedVariants: [], explanation: 'yesterday = อดีต ใช้ past simple → played' },
      { id: 'gt-q3', type: 'multiple-choice', prompt: 'Which sentence uses the present perfect correctly?', options: ['I have saw that film.', 'I have seen that film.', 'I has seen that film.', 'I have see that film.'], correctIndex: 1, explanation: 'present perfect = have + V3 (seen); I ใช้ have ไม่ใช่ has' },
      { id: 'gt-q4', type: 'fill-in-blank', prompt: 'Look! The baby ___ (cry). (happening now)', answer: 'is crying', acceptedVariants: ["'s crying"], explanation: 'สิ่งที่เกิดขึ้นตอนนี้ใช้ present continuous → is crying' },
      { id: "gt-q5", type: 'multiple-choice', prompt: "Which sentence uses the correct tense?", options: ["I have seen that film yesterday.", "I saw that film yesterday.", "I had seen that film yesterday.", "I was seeing that film yesterday."], correctIndex: 1, explanation: "ใช้ Past Simple เมื่อมีคำบอกเวลาที่ชัดเจนในอดีต เช่น \"yesterday\" ไม่ใช้ Present Perfect" },
      { id: "gt-q6", type: 'fill-in-blank', prompt: "When I woke up, the sun ___ (shine) brightly.", answer: "was shining", acceptedVariants: ["Was shining"], explanation: "ใช้ Past Continuous สำหรับเหตุการณ์ที่กำลังดำเนินอยู่ในช่วงเวลาหนึ่งในอดีต" },
      { id: "gt-q7", type: 'multiple-choice', prompt: "They ___ a new shopping mall near our house next year.", options: ["are building", "will be building", "build", "have built"], correctIndex: 1, explanation: "ใช้ Future Continuous (will be + V-ing) สำหรับเหตุการณ์ที่จะกำลังดำเนินอยู่ในช่วงเวลาหนึ่งในอนาคต" },
      { id: "gt-q8", type: 'fill-in-blank', prompt: "He ___ (not / eat) meat since he became a vegetarian.", answer: "has not eaten", acceptedVariants: ["hasn't eaten", "has not eaten", "Has not eaten", "Hasn't eaten"], explanation: "ใช้ Present Perfect Negative (have/has not + V3) สำหรับสิ่งที่ไม่ได้เกิดขึ้นตั้งแต่จุดหนึ่งในอดีตจนถึงปัจจุบัน" },
      { id: "gt-q9", type: 'multiple-choice', prompt: "Which word best completes: \"She ___ to work every day by bus.\"", options: ["is going", "goes", "go", "went"], correctIndex: 1, explanation: "ใช้ Present Simple กับกิจวัตรประจำวัน (routine) ประธาน she/he/it ต้องเติม -s ที่กริยา" },
      { id: "gt-q10", type: 'fill-in-blank', prompt: "I ___ (just / arrive) home when you called.", answer: "had just arrived", acceptedVariants: ["Had just arrived"], explanation: "\"Just\" + Past Perfect ใช้เมื่อเหตุการณ์หนึ่งเพิ่งเสร็จสิ้นไปก่อนเหตุการณ์อื่นในอดีต" },
      { id: "gt-q11", type: 'multiple-choice', prompt: "What is she doing? She ___ a book.", options: ["reads", "is reading", "read", "has read"], correctIndex: 1, explanation: "ใช้ Present Continuous (is/am/are + V-ing) สำหรับเหตุการณ์ที่กำลังเกิดขึ้น ณ ขณะพูด" },
      { id: "gt-q12", type: 'fill-in-blank', prompt: "By 2030, scientists ___ (discover) a cure for the disease.", answer: "will have discovered", acceptedVariants: ["Will have discovered"], explanation: "ใช้ Future Perfect (will have + V3) กับคำว่า \"by + เวลาในอนาคต\" เพื่อบอกว่าจะเสร็จก่อนเวลานั้น" }
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
      { id: 'pv-p4', type: 'multiple-choice', prompt: 'Change to passive: "Someone stole my bike."', options: ['My bike was stolen.', 'My bike is stolen.', 'My bike stole.', 'My bike was stole.'], correctIndex: 0, explanation: 'past passive = was + V3 (stolen)' },
      { id: "pv-p5", type: 'fill-in-blank', prompt: "English ___ (speak) in many countries around the world.", answer: "is spoken", acceptedVariants: ["Is spoken"], explanation: "ใช้ Present Simple Passive (is/are + V3) เมื่อประธานเป็นผู้ถูกกระทำและไม่สำคัญว่าใครทำ" },
      { id: "pv-p6", type: 'multiple-choice', prompt: "The ancient temple ___ by tourists every year.", options: ["visited", "is visited", "visits", "was visiting"], correctIndex: 1, explanation: "ใช้ Present Simple Passive (is + V3) เพราะวัดถูก (ผู้ถูกกระทำ) เยี่ยมชมเป็นประจำ" },
      { id: "pv-p7", type: 'fill-in-blank', prompt: "The letter ___ (write) by a famous poet in 1850.", answer: "was written", acceptedVariants: ["Was written"], explanation: "ใช้ Past Simple Passive (was/were + V3) สำหรับเหตุการณ์ที่ถูกกระทำในอดีต" },
      { id: "pv-p8", type: 'multiple-choice', prompt: "The new hospital ___ by the end of next year.", options: ["will build", "will be built", "is being built", "has been built"], correctIndex: 1, explanation: "ใช้ Future Passive (will be + V3) เมื่อบอกว่าสิ่งหนึ่งจะถูกกระทำในอนาคต" },
      { id: "pv-p9", type: 'fill-in-blank', prompt: "The report ___ (currently / review) by the manager.", answer: "is currently being reviewed", acceptedVariants: ["Is currently being reviewed"], explanation: "ใช้ Present Continuous Passive (is/are being + V3) สำหรับสิ่งที่กำลังถูกกระทำอยู่ในขณะนี้" },
      { id: "pv-p10", type: 'multiple-choice', prompt: "Passengers ___ to switch off their phones during the flight.", options: ["must", "are required", "require", "should require"], correctIndex: 1, explanation: "ใช้ Passive with modal-like expression \"are required to\" เพื่อแสดงกฎข้อบังคับ" },
      { id: "pv-p11", type: 'fill-in-blank', prompt: "___ the thief ___ (catch) by the police yet?", answer: "Has / been caught", acceptedVariants: ["has / been caught", "Has...been caught"], explanation: "ใช้ Present Perfect Passive Question (Has/Have + ประธาน + been + V3) เพื่อถามว่าสิ่งหนึ่งเกิดขึ้นหรือยัง" },
      { id: "pv-p12", type: 'multiple-choice', prompt: "The package should ___ to your address within three days.", options: ["deliver", "delivered", "be delivered", "have delivered"], correctIndex: 2, explanation: "ใช้ Passive with modal (modal + be + V3) เช่น should be delivered เพื่อแสดงความคาดหวัง" }
    ],
    quiz: [
      { id: 'pv-q1', type: 'multiple-choice', prompt: 'Choose the correct passive sentence.', options: ['The cake was make by her.', 'The cake was made by her.', 'The cake made by her.', 'The cake is make by her.'], correctIndex: 1, explanation: 'passive = was + V3 (made) + by' },
      { id: 'pv-q2', type: 'fill-in-blank', prompt: 'The email ___ (send) an hour ago. (past passive)', answer: 'was sent', acceptedVariants: [], explanation: 'past passive = was + V3 (sent)' },
      { id: 'pv-q3', type: 'multiple-choice', prompt: 'Which sentence is passive?', options: ['They clean the office every day.', 'The office is cleaned every day.', 'They are cleaning the office.', 'The office cleans every day.'], correctIndex: 1, explanation: 'passive = is + V3 (cleaned)' },
      { id: 'pv-q4', type: 'fill-in-blank', prompt: 'This book ___ (translate) into Thai. (present passive)', answer: 'is translated', acceptedVariants: [], explanation: 'present passive = is + V3 (translated)' },
      { id: "pv-q5", type: 'multiple-choice', prompt: "Which sentence is correct passive voice?", options: ["The cake was eating by the children.", "The cake was eaten by the children.", "The cake is ate by the children.", "The cake eaten by the children."], correctIndex: 1, explanation: "Passive ต้องใช้ was/were + V3 (past participle) เท่านั้น \"eating\" และ \"ate\" ไม่ใช่ V3 ที่ถูกต้อง" },
      { id: "pv-q6", type: 'fill-in-blank', prompt: "Many houses ___ (destroy) by the flood last year.", answer: "were destroyed", acceptedVariants: ["Were destroyed"], explanation: "ใช้ Past Simple Passive (were + V3) เพราะเหตุการณ์เกิดขึ้นในอดีต และมี \"last year\" บอกเวลา" },
      { id: "pv-q7", type: 'multiple-choice', prompt: "The new policy ___ announced at yesterday's meeting.", options: ["has been", "was", "is being", "will be"], correctIndex: 1, explanation: "ใช้ Past Simple Passive \"was\" เพราะมีเวลาที่ชัดเจนในอดีต (yesterday's meeting)" },
      { id: "pv-q8", type: 'fill-in-blank', prompt: "This bridge ___ (build) in 1920 ___ a French engineer.", answer: "was built / by", acceptedVariants: ["was built...by", "Was built / by"], explanation: "ใช้ Past Passive + \"by\" เพื่อระบุว่าใครเป็นผู้กระทำในประโยค Passive" },
      { id: "pv-q9", type: 'multiple-choice', prompt: "The suspect ___ in for questioning right now.", options: ["is being brought", "has brought", "brings", "was bringing"], correctIndex: 0, explanation: "ใช้ Present Continuous Passive (is being + V3) สำหรับการกระทำที่กำลังเกิดขึ้น ณ ขณะนี้" },
      { id: "pv-q10", type: 'fill-in-blank', prompt: "The results ___ (announce) at the ceremony next Friday.", answer: "will be announced", acceptedVariants: ["Will be announced"], explanation: "ใช้ Future Passive (will be + V3) สำหรับเหตุการณ์ที่จะถูกกระทำในอนาคต" },
      { id: "pv-q11", type: 'multiple-choice', prompt: "Mistakes ___ be made when you are learning a new language.", options: ["could", "can", "are", "will"], correctIndex: 1, explanation: "ใช้ \"can be made\" (modal passive) เพื่อบอกความเป็นไปได้ทั่วไป" },
      { id: "pv-q12", type: 'fill-in-blank', prompt: "___ this medication ___ (take) twice a day?", answer: "Should / be taken", acceptedVariants: ["should / be taken", "Should...be taken"], explanation: "ใช้ Modal Passive Question (Should + ประธาน + be + V3) เพื่อถามว่าควรทำอะไร" }
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
      { id: 'md-p4', type: 'fill-in-blank', prompt: 'Drivers ___ (obligation) stop at a red light.', answer: 'must', acceptedVariants: [], explanation: 'สิ่งที่บังคับ/เป็นกฎใช้ must' },
      { id: "md-p5", type: 'fill-in-blank', prompt: "You look tired. You ___ take a rest.", answer: "should", acceptedVariants: ["Should", "ought to"], explanation: "ใช้ \"should\" หรือ \"ought to\" เพื่อให้คำแนะนำหรือบอกว่าสิ่งใดเป็นสิ่งที่ดีที่ควรทำ" },
      { id: "md-p6", type: 'multiple-choice', prompt: "I ___ speak Thai when I was five years old.", options: ["could", "can", "must", "would"], correctIndex: 0, explanation: "ใช้ \"could\" เพื่อบอกความสามารถในอดีต \"can\" ใช้สำหรับปัจจุบัน" },
      { id: "md-p7", type: 'fill-in-blank', prompt: "You ___ (must – negative) park here. It's a fire lane.", answer: "must not", acceptedVariants: ["mustn't", "must not", "Mustn't", "Must not"], explanation: "ใช้ \"must not / mustn't\" เพื่อแสดงการห้ามทำสิ่งใดอย่างเด็ดขาด (prohibition)" },
      { id: "md-p8", type: 'multiple-choice', prompt: "She ___ have forgotten the meeting — she never misses appointments.", options: ["can't", "must", "should", "would"], correctIndex: 0, explanation: "ใช้ \"can't have + V3\" เพื่อแสดงความเชื่อมั่นแบบ Negative ว่าสิ่งหนึ่งไม่น่าจะเกิดขึ้นในอดีต" },
      { id: "md-p9", type: 'fill-in-blank', prompt: "You ___ finish the project today; the deadline is next week.", answer: "don't have to", acceptedVariants: ["don't have to", "do not have to", "Don't have to", "Do not have to"], explanation: "ใช้ \"don't have to\" เพื่อบอกว่าไม่จำเป็นต้องทำ (no obligation) ต่างจาก \"must not\" ที่หมายถึงห้าม" },
      { id: "md-p10", type: 'multiple-choice', prompt: "It's raining heavily. We ___ take an umbrella.", options: ["might not", "had better", "wouldn't", "need"], correctIndex: 1, explanation: "ใช้ \"had better\" เพื่อแนะนำอย่างหนักแน่น มักมีนัยถึงผลเสียถ้าไม่ทำ" },
      { id: "md-p11", type: 'fill-in-blank', prompt: "He ___ have called us. We were waiting for hours!", answer: "should have", acceptedVariants: ["Should have"], explanation: "ใช้ \"should have + V3\" (modal perfect) เพื่อวิจารณ์หรือแสดงความเสียใจเกี่ยวกับสิ่งที่ไม่ได้ทำในอดีต" },
      { id: "md-p12", type: 'multiple-choice', prompt: "I'm not sure about the weather. It ___ snow tomorrow.", options: ["must", "will", "might", "should"], correctIndex: 2, explanation: "ใช้ \"might\" หรือ \"may\" เมื่อไม่แน่ใจ บอกความเป็นไปได้ที่ยังไม่แน่นอน" }
    ],
    quiz: [
      { id: 'md-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['He must to work.', 'He must works.', 'He must work.', 'He musts work.'], correctIndex: 2, explanation: 'หลัง must ใช้กริยารูปธรรมดา (work)' },
      { id: 'md-q2', type: 'multiple-choice', prompt: 'Which sentence gives advice?', options: ['You must pay tax.', 'You should drink more water.', 'You can drive a car.', 'You may leave now.'], correctIndex: 1, explanation: 'should ใช้ให้คำแนะนำ' },
      { id: 'md-q3', type: 'fill-in-blank', prompt: 'When I was young, I ___ (ability, past) run very fast.', answer: 'could', acceptedVariants: [], explanation: 'ความสามารถในอดีตใช้ could' },
      { id: 'md-q4', type: 'multiple-choice', prompt: 'Choose the correct request for permission.', options: ['Can I use your phone?', 'Can I to use your phone?', 'Can I using your phone?', 'Can I used your phone?'], correctIndex: 0, explanation: 'Can I + กริยารูปธรรมดา (use) เพื่อขออนุญาต' },
      { id: "md-q5", type: 'multiple-choice', prompt: "Which sentence expresses a RULE or strong obligation?", options: ["You should wear a seatbelt.", "You must wear a seatbelt in a car.", "You might want to wear a seatbelt.", "You could wear a seatbelt."], correctIndex: 1, explanation: "\"Must\" แสดงข้อบังคับที่เข้มงวด ส่วน \"should\" แนะนำ \"might/could\" แสดงความเป็นไปได้" },
      { id: "md-q6", type: 'fill-in-blank', prompt: "She ___ cook very well when she was young, but now she's forgotten.", answer: "could", acceptedVariants: ["Could"], explanation: "\"Could\" ใช้บอกความสามารถในอดีต (past ability) ที่อาจไม่มีแล้วในปัจจุบัน" },
      { id: "md-q7", type: 'multiple-choice', prompt: "I ___ be wrong, but I think the exam is on Monday.", options: ["must", "could", "shall", "need"], correctIndex: 1, explanation: "\"Could\" ใช้แสดงความไม่แน่ใจหรือความเป็นไปได้ในปัจจุบัน" },
      { id: "md-q8", type: 'fill-in-blank', prompt: "You ___ (would – negative) believe how much the price has gone up!", answer: "wouldn't", acceptedVariants: ["would not", "Wouldn't", "Would not"], explanation: "\"Wouldn't believe\" ใช้ในความหมาย \"คุณคงไม่เชื่อ\" เป็นการพูดเน้นความน่าประหลาดใจ" },
      { id: "md-q9", type: 'multiple-choice', prompt: "The keys are missing. Tom ___ taken them by mistake.", options: ["must have", "should", "can have", "will have"], correctIndex: 0, explanation: "\"Must have + V3\" ใช้เมื่อเราค่อนข้างมั่นใจว่าบางสิ่งเกิดขึ้นในอดีต (logical deduction)" },
      { id: "md-q10", type: 'fill-in-blank', prompt: "She ___ (need – negative) to buy a ticket; children under 5 enter free.", answer: "doesn't need to", acceptedVariants: ["doesn't need to", "does not need to", "Doesn't need to", "Does not need to", "needn't"], explanation: "\"Doesn't need to\" หรือ \"needn't\" แสดงว่าไม่จำเป็นต้องทำ ไม่ได้หมายความว่าห้าม" },
      { id: "md-q11", type: 'multiple-choice', prompt: "Choose the sentence with the CORRECT modal perfect:", options: ["I could have been study harder for the test.", "I could have studied harder for the test.", "I could studied harder for the test.", "I could had studied harder for the test."], correctIndex: 1, explanation: "Modal perfect ต้องใช้รูปแบบ: modal + have + V3 (past participle) เสมอ" },
      { id: "md-q12", type: 'fill-in-blank', prompt: "Shall I ___ (open) the window? It's hot in here.", answer: "open", acceptedVariants: ["Open"], explanation: "\"Shall I + V1\" ใช้เสนอตัวทำสิ่งใดให้คนอื่น (offer) เป็นการถามความต้องการของผู้ฟัง" }
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
      { id: 'pr-p4', type: 'fill-in-blank', prompt: 'I like to listen ___ music every day.', answer: 'to', acceptedVariants: [], explanation: 'วลีตายตัว listen to' },
      { id: "pr-p5", type: 'fill-in-blank', prompt: "The meeting is scheduled ___ Monday ___ 9 am.", answer: "on / at", acceptedVariants: ["on...at", "On / at", "On...at"], explanation: "ใช้ \"on\" กับวันในสัปดาห์ และ \"at\" กับเวลาที่เฉพาะเจาะจง" },
      { id: "pr-p6", type: 'multiple-choice', prompt: "She lives ___ a small apartment ___ the city centre.", options: ["in / at", "at / in", "on / in", "in / in"], correctIndex: 3, explanation: "ใช้ \"in\" กับสถานที่ที่ล้อมรอบ เช่น apartment (ภายใน) และ city centre (ภายในเมือง)" },
      { id: "pr-p7", type: 'fill-in-blank', prompt: "This gift is ___ you, as a thank you for your help.", answer: "for", acceptedVariants: ["For"], explanation: "ใช้ \"for\" เพื่อบอกผู้รับหรือจุดประสงค์ของสิ่งของ" },
      { id: "pr-p8", type: 'multiple-choice', prompt: "The painting was made ___ hand, not ___ a machine.", options: ["by / with", "with / by", "by / by", "with / with"], correctIndex: 0, explanation: "ใช้ \"by hand\" (วิธีการทำ) และ \"with a machine\" (เครื่องมือที่ใช้ทำ)" },
      { id: "pr-p9", type: 'fill-in-blank', prompt: "He walked ___ the bridge and looked down at the river.", answer: "across", acceptedVariants: ["Across"], explanation: "ใช้ \"across\" สำหรับการเคลื่อนที่จากด้านหนึ่งไปอีกด้านหนึ่ง (side to side movement)" },
      { id: "pr-p10", type: 'multiple-choice', prompt: "I was born ___ 1995, ___ the summer.", options: ["in / in", "on / in", "in / at", "at / in"], correctIndex: 0, explanation: "ใช้ \"in\" กับปี (in 1995) และ ฤดูกาล (in the summer)" },
      { id: "pr-p11", type: 'fill-in-blank', prompt: "She is very good ___ solving mathematical problems.", answer: "at", acceptedVariants: ["At"], explanation: "ใช้ \"good at\" เป็น collocation (คำที่มักใช้ด้วยกัน) เพื่อบอกว่าเก่งในเรื่องอะไร" },
      { id: "pr-p12", type: 'multiple-choice', prompt: "The cat jumped ___ the wall and disappeared.", options: ["above", "over", "across", "along"], correctIndex: 1, explanation: "ใช้ \"over\" สำหรับการกระโดดข้าม (movement from one side to another, clearing an obstacle)" }
    ],
    quiz: [
      { id: 'pr-q1', type: 'multiple-choice', prompt: 'The shop opens ___ 9 a.m.', options: ['in', 'on', 'at', 'by'], correctIndex: 2, explanation: 'เวลาเจาะจงใช้ at → at 9 a.m.' },
      { id: 'pr-q2', type: 'multiple-choice', prompt: 'We go on holiday ___ July.', options: ['in', 'on', 'at', 'to'], correctIndex: 0, explanation: 'เดือนใช้ in → in July' },
      { id: 'pr-q3', type: 'fill-in-blank', prompt: 'The picture is ___ the wall. (surface)', answer: 'on', acceptedVariants: [], explanation: 'ติดบนพื้นผิว (กำแพง) ใช้ on' },
      { id: 'pr-q4', type: 'multiple-choice', prompt: 'She is interested ___ history.', options: ['on', 'at', 'in', 'to'], correctIndex: 2, explanation: 'วลีตายตัว interested in' },
      { id: "pr-q5", type: 'multiple-choice', prompt: "Which preposition correctly completes: \"We arrived ___ the airport at noon\"?", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "ใช้ \"at\" กับสถานที่เฉพาะเจาะจง เช่น the airport, the station, the bus stop" },
      { id: "pr-q6", type: 'fill-in-blank', prompt: "They drove ___ the tunnel to get to the other side of the mountain.", answer: "through", acceptedVariants: ["Through"], explanation: "ใช้ \"through\" สำหรับการเคลื่อนที่ผ่านพื้นที่หรือสิ่งที่ล้อมรอบ (movement inside something)" },
      { id: "pr-q7", type: 'multiple-choice', prompt: "She translated the document ___ Thai ___ English.", options: ["from / to", "from / for", "to / from", "for / to"], correctIndex: 0, explanation: "ใช้ \"from ... to ...\" เพื่อบอกต้นทางและปลายทางของการแปล การเดินทาง หรือการเปลี่ยนแปลง" },
      { id: "pr-q8", type: 'fill-in-blank', prompt: "The book is ___ the shelf, ___ the dictionary.", answer: "on / next to", acceptedVariants: ["on...next to", "On / next to", "on / beside"], explanation: "ใช้ \"on\" กับพื้นผิว (on the shelf) และ \"next to/beside\" สำหรับตำแหน่งข้างๆ" },
      { id: "pr-q9", type: 'multiple-choice', prompt: "I am very interested ___ learning about Thai history.", options: ["about", "for", "in", "on"], correctIndex: 2, explanation: "\"Interested in\" เป็น collocation ที่ถูกต้อง ใช้ \"in\" หลัง \"interested\" เสมอ" },
      { id: "pr-q10", type: 'fill-in-blank', prompt: "The train departs ___ midnight ___ Christmas Eve.", answer: "at / on", acceptedVariants: ["at...on", "At / on", "At...on"], explanation: "ใช้ \"at\" กับเวลา (at midnight) และ \"on\" กับวันพิเศษ (on Christmas Eve)" },
      { id: "pr-q11", type: 'multiple-choice', prompt: "The children ran ___ the park, laughing and playing.", options: ["through", "across", "around", "all of the above can work"], correctIndex: 3, explanation: "\"Through\" (วิ่งผ่าน), \"across\" (วิ่งข้าม), \"around\" (วิ่งรอบๆ) ล้วนสามารถใช้กับ park ได้ขึ้นอยู่กับความหมาย" },
      { id: "pr-q12", type: 'fill-in-blank', prompt: "She is responsible ___ training all new staff members.", answer: "for", acceptedVariants: ["For"], explanation: "\"Responsible for\" เป็น preposition collocation ที่ใช้บอกว่ารับผิดชอบเรื่องอะไร" }
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
      { id: 'ar-p4', type: 'multiple-choice', prompt: 'We stayed for ___ hour.', options: ['a', 'an', 'the', '(no article)'], correctIndex: 1, explanation: 'hour มีเสียงสระ (h เงียบ) ใช้ an' },
      { id: "ar-p5", type: 'fill-in-blank', prompt: "She ate ___ apple for breakfast.", answer: "an", acceptedVariants: [], explanation: "ใช้ \"an\" ก่อนคำที่ขึ้นต้นด้วยเสียงสระ (vowel sound) เช่น \"apple\" ออกเสียงขึ้นต้นด้วย /æ/" },
      { id: "ar-p6", type: 'multiple-choice', prompt: "I saw ___ moon last night. It was beautiful.", options: ["a", "an", "the", "(no article)"], correctIndex: 2, explanation: "ใช้ \"the\" กับสิ่งที่มีเพียงอย่างเดียวในโลก เช่น the moon, the sun, the earth" },
      { id: "ar-p7", type: 'fill-in-blank', prompt: "He is ___ university student.", answer: "a", acceptedVariants: [], explanation: "ใช้ \"a\" ไม่ใช่ \"an\" เพราะ \"university\" ออกเสียงขึ้นต้นด้วย /j/ (เสียงพยัญชนะ) ไม่ใช่เสียงสระ" },
      { id: "ar-p8", type: 'multiple-choice', prompt: "___ dogs make great pets.", options: ["A", "An", "The", "(no article)"], correctIndex: 3, explanation: "ไม่ใช้ article กับคำนามพหูพจน์ที่พูดถึงโดยทั่วไป (general statement)" },
      { id: "ar-p9", type: 'fill-in-blank', prompt: "I have a dog. ___ dog is very friendly.", answer: "The", acceptedVariants: ["the"], explanation: "ใช้ \"the\" เมื่อพูดถึงสิ่งที่กล่าวถึงไปแล้ว (second mention) ทั้งผู้พูดและผู้ฟังรู้ว่าหมายถึงตัวไหน" },
      { id: "ar-p10", type: 'multiple-choice', prompt: "She speaks ___ French fluently.", options: ["a", "an", "the", "(no article)"], correctIndex: 3, explanation: "ไม่ใช้ article กับชื่อภาษา เช่น French, Thai, English, Japanese" },
      { id: "ar-p11", type: 'fill-in-blank', prompt: "We had ___ dinner at 7 p.m.", answer: "no article", acceptedVariants: ["", "-", "(no article)"], explanation: "ไม่ใช้ article กับมื้ออาหาร (breakfast, lunch, dinner) เมื่อพูดถึงโดยทั่วไป" },
      { id: "ar-p12", type: 'multiple-choice', prompt: "Can you open ___ window, please? It's hot in here.", options: ["a", "an", "the", "(no article)"], correctIndex: 2, explanation: "ใช้ \"the\" เมื่อผู้ฟังรู้ว่าหมายถึงหน้าต่างบานใด เพราะอยู่ในบริบทเดียวกัน (shared context)" }
    ],
    quiz: [
      { id: 'ar-q1', type: 'multiple-choice', prompt: 'He is ___ honest man.', options: ['a', 'an', 'the', '(no article)'], correctIndex: 1, explanation: 'honest มี h เงียบ ออกเสียงสระ ใช้ an' },
      { id: 'ar-q2', type: 'fill-in-blank', prompt: 'Look at ___ moon tonight!', answer: 'the', acceptedVariants: [], explanation: 'สิ่งที่มีหนึ่งเดียว (moon) ใช้ the' },
      { id: 'ar-q3', type: 'multiple-choice', prompt: 'I bought ___ new phone yesterday.', options: ['a', 'an', 'the', '(no article)'], correctIndex: 0, explanation: 'new ขึ้นต้นด้วยเสียงพยัญชนะ พูดถึงครั้งแรกใช้ a' },
      { id: 'ar-q4', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['I love a cats.', 'I love an cats.', 'I love the cats in general.', 'I love cats.'], correctIndex: 3, explanation: 'คำนามพหูพจน์ทั่วไปไม่ใช้ article → I love cats.' },
      { id: "ar-q5", type: 'multiple-choice', prompt: "My brother is ___ engineer.", options: ["a", "an", "the", "(no article)"], correctIndex: 1, explanation: "ใช้ \"an\" ก่อนคำที่ขึ้นต้นด้วยเสียงสระ \"engineer\" ออกเสียงขึ้นต้นด้วย /ɛ/" },
      { id: "ar-q6", type: 'fill-in-blank', prompt: "___ Pacific Ocean is the largest ocean on Earth.", answer: "The", acceptedVariants: ["the"], explanation: "ใช้ \"the\" กับชื่อมหาสมุทร แม่น้ำ และสิ่งที่เป็น unique/specific ที่ทุกคนรู้จัก" },
      { id: "ar-q7", type: 'multiple-choice', prompt: "I love ___ music, especially jazz.", options: ["a", "an", "the", "(no article)"], correctIndex: 3, explanation: "ไม่ใช้ article กับคำนามนับไม่ได้ (uncountable noun) ที่พูดถึงโดยทั่วไป เช่น music, water, advice" },
      { id: "ar-q8", type: 'fill-in-blank', prompt: "We visited ___ Eiffel Tower when we were in Paris.", answer: "the", acceptedVariants: ["The"], explanation: "ใช้ \"the\" กับสถานที่ที่มีชื่อเฉพาะและมีเพียงแห่งเดียว เช่น the Eiffel Tower, the White House" },
      { id: "ar-q9", type: 'multiple-choice', prompt: "She bought ___ new dress yesterday.", options: ["a", "an", "the", "(no article)"], correctIndex: 0, explanation: "ใช้ \"a\" กับคำนามนับได้เอกพจน์ที่กล่าวถึงครั้งแรก และขึ้นต้นด้วยเสียงพยัญชนะ" },
      { id: "ar-q10", type: 'fill-in-blank', prompt: "___ London is the capital of England.", answer: "no article", acceptedVariants: ["", "-", "(no article)"], explanation: "ไม่ใช้ article กับชื่อเมือง ชื่อประเทศ หรือชื่อเฉพาะส่วนใหญ่" },
      { id: "ar-q11", type: 'multiple-choice', prompt: "He had ___ hour to finish the test.", options: ["a", "an", "the", "(no article)"], correctIndex: 1, explanation: "ใช้ \"an\" เพราะ \"hour\" ออกเสียงขึ้นต้นด้วยเสียงสระ /aʊ/ (ตัว h ไม่ออกเสียง)" },
      { id: "ar-q12", type: 'fill-in-blank', prompt: "I usually have ___ breakfast before 8 a.m.", answer: "no article", acceptedVariants: ["", "-", "(no article)"], explanation: "ไม่ใช้ article กับมื้ออาหาร (breakfast, lunch, dinner) เมื่อพูดถึงตามปกติ" }
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
      { id: 'pn-p4', type: 'multiple-choice', prompt: 'That is Mary\'s car. It is ___ car.', options: ['his', 'her', 'their', 'its'], correctIndex: 1, explanation: 'ของ Mary (ผู้หญิง) ใช้ her' },
      { id: "pn-p5", type: 'multiple-choice', prompt: "That book belongs to me. It is ___.", options: ["my", "mine", "me", "myself"], correctIndex: 1, explanation: "ใช้ possessive pronoun \"mine\" เมื่อไม่มีคำนามตามหลัง (\"my book\" แต่ \"it is mine\")" },
      { id: "pn-p6", type: 'fill-in-blank', prompt: "She hurt ___ when she fell off her bike.", answer: "herself", acceptedVariants: [], explanation: "ใช้ reflexive pronoun \"herself\" เมื่อประธานและกรรมเป็นบุคคลเดียวกัน และประธานเป็น \"she\"" },
      { id: "pn-p7", type: 'multiple-choice', prompt: "___ and I went to the market together.", options: ["Him", "Her", "She", "Them"], correctIndex: 2, explanation: "ใช้ subject pronoun \"She\" เพราะเป็นประธานของประโยค ไม่ใช้ object pronoun \"Her\"" },
      { id: "pn-p8", type: 'fill-in-blank', prompt: "The teacher asked ___ to read aloud.", answer: "us", acceptedVariants: [], explanation: "ใช้ object pronoun \"us\" เพราะเป็นกรรมของกริยา \"asked\" (ใครที่ถูก ask)" },
      { id: "pn-p9", type: 'multiple-choice', prompt: "That car is not yours — ___ is the red one.", options: ["our", "ours", "we", "us"], correctIndex: 1, explanation: "ใช้ possessive pronoun \"ours\" เมื่อไม่มีคำนามตามหลัง แทนที่จะใช้ \"our car\"" },
      { id: "pn-p10", type: 'fill-in-blank', prompt: "I made this cake ___. Nobody helped me.", answer: "myself", acceptedVariants: [], explanation: "ใช้ reflexive pronoun \"myself\" เพื่อเน้นว่าทำด้วยตัวเอง ไม่มีคนช่วย (emphatic use)" },
      { id: "pn-p11", type: 'multiple-choice', prompt: "Give the letter to ___.", options: ["he", "she", "they", "him"], correctIndex: 3, explanation: "ใช้ object pronoun \"him\" หลัง preposition \"to\" ไม่ใช้ subject pronoun \"he\"" },
      { id: "pn-p12", type: 'fill-in-blank', prompt: "The children enjoyed ___ at the park.", answer: "themselves", acceptedVariants: [], explanation: "ใช้ reflexive pronoun \"themselves\" เพราะประธาน \"the children\" และกรรมเป็นบุคคลเดียวกัน" }
    ],
    quiz: [
      { id: 'pn-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['Her is my friend.', 'She is my friend.', 'Hers is my friend.', 'She am my friend.'], correctIndex: 1, explanation: 'ประธานใช้ She' },
      { id: 'pn-q2', type: 'multiple-choice', prompt: 'The teacher asked ___ a question.', options: ['we', 'us', 'our', 'ours'], correctIndex: 1, explanation: 'หลังกริยา (asked) ใช้กรรม → us' },
      { id: 'pn-q3', type: 'fill-in-blank', prompt: 'Tom lost ___ (belonging to Tom) keys.', answer: 'his', acceptedVariants: [], explanation: 'ของ Tom (ผู้ชาย) ใช้ his' },
      { id: 'pn-q4', type: 'multiple-choice', prompt: 'The cat is hungry. ___ wants food.', options: ['He', 'She', 'It', 'They'], correctIndex: 2, explanation: 'สัตว์ทั่วไปที่ไม่ระบุเพศใช้ It' },
      { id: "pn-q5", type: 'fill-in-blank', prompt: "___ is my favourite subject.", answer: "It", acceptedVariants: [], explanation: "ใช้ \"It\" เป็น subject pronoun แทนสิ่งของหรือสิ่งที่ไม่มีเพศ" },
      { id: "pn-q6", type: 'multiple-choice', prompt: "Between you and ___, I think she is wrong.", options: ["I", "me", "myself", "mine"], correctIndex: 1, explanation: "ใช้ object pronoun \"me\" หลัง preposition \"between\" ไม่ใช้ \"I\" ซึ่งเป็น subject pronoun" },
      { id: "pn-q7", type: 'fill-in-blank', prompt: "Is this pen ___? I found it on your desk.", answer: "yours", acceptedVariants: [], explanation: "ใช้ possessive pronoun \"yours\" เพราะไม่มีคำนามตามหลัง (ไม่ใช่ \"your pen\" แต่เป็น \"is it yours\")" },
      { id: "pn-q8", type: 'multiple-choice', prompt: "My sister and ___ are going to the concert.", options: ["me", "myself", "I", "mine"], correctIndex: 2, explanation: "ใช้ subject pronoun \"I\" เพราะเป็นประธานของประโยค ไม่ใช้ \"me\" ซึ่งเป็น object pronoun" },
      { id: "pn-q9", type: 'fill-in-blank', prompt: "He saw ___ in the mirror and smiled.", answer: "himself", acceptedVariants: [], explanation: "ใช้ reflexive pronoun \"himself\" เมื่อประธาน (he) มองเห็นตัวเอง" },
      { id: "pn-q10", type: 'multiple-choice', prompt: "___ is raining outside. Bring an umbrella.", options: ["He", "She", "It", "They"], correctIndex: 2, explanation: "ใช้ \"It\" สำหรับสภาพอากาศ เวลา และระยะทาง เช่น It is raining / It is 3 o'clock" },
      { id: "pn-q11", type: 'fill-in-blank', prompt: "I called ___ (the boys) but they didn't answer.", answer: "them", acceptedVariants: [], explanation: "ใช้ object pronoun \"them\" แทนคำนามพหูพจน์ที่เป็นกรรมของกริยา" },
      { id: "pn-q12", type: 'multiple-choice', prompt: "The decision is ___ (belonging to her) to make.", options: ["her", "hers", "herself", "she"], correctIndex: 1, explanation: "ใช้ possessive pronoun \"hers\" เมื่อไม่มีคำนามตามหลัง เพื่อแสดงความเป็นเจ้าของ" }
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
      { id: 'rc-p4', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['The girl who she sings is my sister.', 'The girl who sings is my sister.', 'The girl which sings is my sister.', 'The girl where sings is my sister.'], correctIndex: 1, explanation: 'who ทำหน้าที่ประธานแล้ว ไม่ต้องใส่ she ซ้ำ และใช้ who กับคน' },
      { id: "rc-p5", type: 'fill-in-blank', prompt: "The restaurant ___ we had dinner last night was excellent.", answer: "where", acceptedVariants: [], explanation: "ใช้ \"where\" ในการขยายสถานที่ (restaurant = a place)" },
      { id: "rc-p6", type: 'multiple-choice', prompt: "The woman ___ car was stolen filed a police report.", options: ["who", "which", "whose", "that"], correctIndex: 2, explanation: "ใช้ \"whose\" เพื่อแสดงความเป็นเจ้าของ (the woman's car = whose car)" },
      { id: "rc-p7", type: 'fill-in-blank', prompt: "The movie ___ we watched yesterday was very scary.", answer: "that", acceptedVariants: ["which"], explanation: "ใช้ \"that\" หรือ \"which\" ขยายสิ่งของ (movie) ใน defining relative clause" },
      { id: "rc-p8", type: 'multiple-choice', prompt: "My father, ___ is a doctor, works at a big hospital.", options: ["who", "which", "that", "whose"], correctIndex: 0, explanation: "ใช้ \"who\" ขยายบุคคล และนี่คือ non-defining relative clause (มีคอมม่าคั่น) จึงใช้ \"who\" ไม่ใช้ \"that\"" },
      { id: "rc-p9", type: 'fill-in-blank', prompt: "The city ___ I was born is very small.", answer: "where", acceptedVariants: [], explanation: "ใช้ \"where\" แทน \"in which\" เพื่อขยายสถานที่ที่เกิดเหตุการณ์" },
      { id: "rc-p10", type: 'multiple-choice', prompt: "The book ___ I lent you is very interesting.", options: ["who", "whom", "which", "where"], correctIndex: 2, explanation: "ใช้ \"which\" หรือ \"that\" ขยายสิ่งของ (book) ไม่ใช้ \"who\" ซึ่งใช้กับคน" },
      { id: "rc-p11", type: 'fill-in-blank', prompt: "The man ___ you met yesterday is my uncle.", answer: "who", acceptedVariants: ["that", "whom"], explanation: "ใช้ \"who\" หรือ \"that\" ขยายบุคคล (man) ใน defining relative clause" },
      { id: "rc-p12", type: 'multiple-choice', prompt: "The year ___ my parents got married was 1990.", options: ["when", "where", "which", "who"], correctIndex: 0, explanation: "ใช้ \"when\" ขยายช่วงเวลา (year, day, time) แทน \"in which\"" }
    ],
    quiz: [
      { id: 'rc-q1', type: 'multiple-choice', prompt: 'The car ___ he drives is new.', options: ['who', 'which', 'where', 'whose'], correctIndex: 1, explanation: 'สิ่งของ (car) ใช้ which' },
      { id: 'rc-q2', type: 'multiple-choice', prompt: 'She is the doctor ___ saved my life.', options: ['which', 'who', 'where', 'what'], correctIndex: 1, explanation: 'คนใช้ who' },
      { id: 'rc-q3', type: 'fill-in-blank', prompt: 'I know a man ___ dog is very big. (possession)', answer: 'whose', acceptedVariants: [], explanation: 'แสดงความเป็นเจ้าของใช้ whose' },
      { id: 'rc-q4', type: 'multiple-choice', prompt: 'This is the town ___ I grew up.', options: ['which', 'who', 'where', 'whose'], correctIndex: 2, explanation: 'สถานที่ใช้ where' },
      { id: "rc-q5", type: 'multiple-choice', prompt: "The students ___ passed the exam were very happy.", options: ["which", "whose", "who", "where"], correctIndex: 2, explanation: "ใช้ \"who\" ขยายบุคคล (students) ใน defining relative clause" },
      { id: "rc-q6", type: 'fill-in-blank', prompt: "That is the company ___ my sister works.", answer: "where", acceptedVariants: [], explanation: "ใช้ \"where\" ขยายสถานที่ (company = a place where something happens)" },
      { id: "rc-q7", type: 'multiple-choice', prompt: "The laptop ___ I bought last year has broken down.", options: ["who", "whom", "whose", "that"], correctIndex: 3, explanation: "ใช้ \"that\" หรือ \"which\" ขยายสิ่งของ (laptop) ไม่ใช้ \"who\" ซึ่งใช้กับคนเท่านั้น" },
      { id: "rc-q8", type: 'fill-in-blank', prompt: "Do you know the reason ___ she left so early?", answer: "why", acceptedVariants: [], explanation: "ใช้ \"why\" ขยาย reason เพื่อบอกสาเหตุ แทน \"for which\"" },
      { id: "rc-q9", type: 'multiple-choice', prompt: "The professor ___ lectures I attended was very inspiring.", options: ["who", "which", "whose", "that"], correctIndex: 2, explanation: "ใช้ \"whose\" เพื่อแสดงความเป็นเจ้าของ (the professor's lectures = whose lectures)" },
      { id: "rc-q10", type: 'fill-in-blank', prompt: "The man ___ I spoke to was very helpful.", answer: "who", acceptedVariants: ["that", "whom"], explanation: "ใช้ \"who\", \"that\" หรือ \"whom\" ขยายบุคคล และสามารถละ relative pronoun ได้เมื่อเป็น object" },
      { id: "rc-q11", type: 'multiple-choice', prompt: "Bangkok, ___ is the capital of Thailand, is a very busy city.", options: ["that", "which", "who", "where"], correctIndex: 1, explanation: "ใน non-defining relative clause (มีคอมม่า) ขยายสิ่งของหรือสถานที่ ใช้ \"which\" ไม่ใช้ \"that\"" },
      { id: "rc-q12", type: 'fill-in-blank', prompt: "The house ___ Jack built is now a museum.", answer: "that", acceptedVariants: ["which"], explanation: "ใช้ \"that\" หรือ \"which\" ขยายสิ่งของ (house) หรือสามารถละไว้ได้เพราะเป็น object clause" }
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
      { id: 'cd-p4', type: 'multiple-choice', prompt: 'Choose the correct sentence.', options: ['If I will see him, I will tell him.', 'If I see him, I will tell him.', 'If I see him, I tell him.', 'If I saw him, I will tell him.'], correctIndex: 1, explanation: 'first conditional: If + present, will + V' },
      { id: "cd-p5", type: 'fill-in-blank', prompt: "If you ___ (heat) water to 100°C, it boils.", answer: "heat", acceptedVariants: [], explanation: "Zero conditional ใช้ present simple ทั้งสองประโยค เพื่อบอกความจริงทั่วไปหรือกฎธรรมชาติ" },
      { id: "cd-p6", type: 'multiple-choice', prompt: "If it rains tomorrow, we ___ the picnic.", options: ["cancel", "will cancel", "would cancel", "cancelled"], correctIndex: 1, explanation: "First conditional ใช้ will + infinitive ในประโยคหลัก เพราะพูดถึงสถานการณ์จริงที่อาจเกิดขึ้นในอนาคต" },
      { id: "cd-p7", type: 'fill-in-blank', prompt: "If she ___ (know) the answer, she would tell us.", answer: "knew", acceptedVariants: [], explanation: "Second conditional ใช้ past simple ในประโยค if เพื่อแสดงสถานการณ์สมมุติที่ไม่จริงในปัจจุบัน" },
      { id: "cd-p8", type: 'multiple-choice', prompt: "If they had left earlier, they ___ the train.", options: ["catch", "would catch", "would have caught", "had caught"], correctIndex: 2, explanation: "Third conditional ใช้ would have + past participle ในประโยคหลัก เพื่อพูดถึงเหตุการณ์ที่ไม่ได้เกิดขึ้นในอดีต" },
      { id: "cd-p9", type: 'fill-in-blank', prompt: "Unless you ___ (study) harder, you will fail the exam.", answer: "study", acceptedVariants: [], explanation: "Unless มีความหมายว่า \"ถ้าไม่\" และใช้ present simple ในประโยค unless เช่นเดียวกับ if ใน first conditional" },
      { id: "cd-p10", type: 'multiple-choice', prompt: "I wish I ___ a bigger apartment right now.", options: ["have", "had", "would have", "have had"], correctIndex: 1, explanation: "Wish + past simple ใช้เพื่อแสดงความปรารถนาที่ตรงข้ามกับความจริงในปัจจุบัน" },
      { id: "cd-p11", type: 'fill-in-blank', prompt: "If I had studied medicine, I ___ (be) a doctor now.", answer: "would be", acceptedVariants: [], explanation: "Mixed conditional ผสม third conditional (if + past perfect) กับ second conditional (would + infinitive) เพื่อเชื่อมเหตุการณ์อดีตกับผลในปัจจุบัน" },
      { id: "cd-p12", type: 'multiple-choice', prompt: "You can borrow my car ___ you drive carefully.", options: ["unless", "as long as", "even if", "in case"], correctIndex: 1, explanation: "\"As long as\" หมายความว่า \"ตราบเท่าที่\" ใช้แสดงเงื่อนไขที่ต้องมีเพื่อให้สิ่งหนึ่งเป็นจริง" }
    ],
    quiz: [
      { id: 'cd-q1', type: 'multiple-choice', prompt: 'If she ___ hard, she will pass the exam.', options: ['will study', 'studies', 'studied', 'study'], correctIndex: 1, explanation: 'first conditional: ส่วน if ใช้ present → studies' },
      { id: 'cd-q2', type: 'fill-in-blank', prompt: 'If I ___ (be) you, I would take the job. (formal)', answer: 'were', acceptedVariants: [], explanation: 'second conditional ทางการใช้ were กับทุกประธาน' },
      { id: 'cd-q3', type: 'multiple-choice', prompt: 'Water freezes if the temperature ___ below zero.', options: ['will drop', 'drops', 'dropped', 'would drop'], correctIndex: 1, explanation: 'zero conditional (ความจริง): present → drops' },
      { id: 'cd-q4', type: 'multiple-choice', prompt: 'If I won the lottery, I ___ travel around the world.', options: ['will', 'would', 'am', 'did'], correctIndex: 1, explanation: 'second conditional (สมมติ): would + V' },
      { id: "cd-q5", type: 'multiple-choice', prompt: "Which sentence is a zero conditional?", options: ["If I win the lottery, I will buy a house.", "If you mix blue and yellow, you get green.", "If she worked harder, she would succeed.", "If he had tried, he would have passed."], correctIndex: 1, explanation: "Zero conditional ใช้ present simple ทั้งสองประโยค เพื่อบอกความจริงทั่วไป เช่น กฎทางวิทยาศาสตร์" },
      { id: "cd-q6", type: 'fill-in-blank', prompt: "If you don't hurry, you ___ (miss) the bus.", answer: "will miss", acceptedVariants: ["'ll miss"], explanation: "First conditional ใช้ will + infinitive เพื่อแสดงผลที่จะเกิดขึ้นจริงในอนาคต" },
      { id: "cd-q7", type: 'multiple-choice', prompt: "If I were you, I ___ apologize immediately.", options: ["will", "would", "should have", "had"], correctIndex: 1, explanation: "Second conditional ใช้ would + infinitive ในประโยคหลัก สำนวน \"If I were you\" ใช้บอกคำแนะนำในสถานการณ์สมมุติ" },
      { id: "cd-q8", type: 'fill-in-blank', prompt: "If he had eaten breakfast, he ___ (not feel) so hungry now.", answer: "would not have felt", acceptedVariants: ["wouldn't have felt", "would not have felt"], explanation: "Third conditional ใช้ would not have + past participle เพื่อบอกผลที่ไม่ได้เกิดขึ้นเนื่องจากเหตุการณ์ในอดีต" },
      { id: "cd-q9", type: 'multiple-choice', prompt: "She feels terrible. She wishes she ___ so much last night.", options: ["didn't eat", "hadn't eaten", "wouldn't eat", "won't eat"], correctIndex: 1, explanation: "Wish + past perfect (had + past participle) ใช้แสดงความเสียใจเกี่ยวกับเหตุการณ์ที่เกิดขึ้นในอดีต" },
      { id: "cd-q10", type: 'multiple-choice', prompt: "Which sentence has the same meaning as \"If you don't have a ticket, you can't enter\"?", options: ["Unless you have a ticket, you can't enter.", "As long as you have a ticket, you can't enter.", "Even if you have a ticket, you can't enter.", "In case you have a ticket, you can't enter."], correctIndex: 0, explanation: "\"Unless\" มีความหมายเหมือนกับ \"if not\" ดังนั้น \"Unless you have a ticket\" = \"If you don't have a ticket\"" },
      { id: "cd-q11", type: 'fill-in-blank', prompt: "If we had taken a different road, we ___ (not be) stuck in traffic now.", answer: "would not be", acceptedVariants: ["wouldn't be"], explanation: "Mixed conditional เชื่อม if + past perfect (อดีต) กับ would + infinitive (ผลปัจจุบัน)" },
      { id: "cd-q12", type: 'multiple-choice', prompt: "\"If I had more money, I would travel the world.\" — What type of conditional is this?", options: ["Zero conditional", "First conditional", "Second conditional", "Third conditional"], correctIndex: 2, explanation: "Second conditional ใช้ past simple ใน if-clause และ would + infinitive ในประโยคหลัก เพื่อแสดงสถานการณ์สมมุติที่ไม่จริงในปัจจุบัน" }
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
      { id: 'rs-p4', type: 'multiple-choice', prompt: 'Report: "Are you tired?"', options: ['She asked if I was tired.', 'She asked are you tired.', 'She asked if was I tired.', 'She asked if I am tired.'], correctIndex: 0, explanation: 'Yes/No question ใช้ if + ลำดับบอกเล่า + backshift → if I was tired' },
      { id: "rs-p5", type: 'fill-in-blank', prompt: "Direct: \"I am tired.\" → Reported: She said that she ___ tired.", answer: "was", acceptedVariants: [], explanation: "เมื่อรายงานคำพูด (reported speech) ให้ backshift กริยา: am/is → was" },
      { id: "rs-p6", type: 'multiple-choice', prompt: "He ___ me that the meeting was cancelled.", options: ["said", "told", "spoke", "talked"], correctIndex: 1, explanation: "\"Tell\" ต้องตามด้วยกรรม (me, him, her, us) ในขณะที่ \"say\" ไม่ต้องมีกรรมตามหลังโดยตรง" },
      { id: "rs-p7", type: 'fill-in-blank', prompt: "Direct: \"I finished the report.\" → Reported: He said he ___ the report.", answer: "had finished", acceptedVariants: [], explanation: "Past simple (finished) backshift เป็น past perfect (had finished) ใน reported speech" },
      { id: "rs-p8", type: 'multiple-choice', prompt: "Direct: \"Where do you live?\" → Reported: She asked me where I ___.", options: ["live", "do live", "lived", "was live"], correctIndex: 2, explanation: "ใน reported questions ไม่มีการกลับลำดับประธาน-กริยา และต้อง backshift กริยาด้วย: live → lived" },
      { id: "rs-p9", type: 'fill-in-blank', prompt: "Direct: \"Please sit down.\" → Reported: The teacher told us ___ down.", answer: "to sit", acceptedVariants: [], explanation: "Reported commands ใช้ tell + กรรม + to-infinitive เช่น told us to sit down" },
      { id: "rs-p10", type: 'multiple-choice', prompt: "Direct: \"I will call you now.\" → Reported: He said he would call me ___.", options: ["now", "then", "here", "today"], correctIndex: 1, explanation: "ใน reported speech คำว่า \"now\" เปลี่ยนเป็น \"then\" เพื่อให้สอดคล้องกับเวลาที่รายงาน" },
      { id: "rs-p11", type: 'fill-in-blank', prompt: "Direct: \"Are you coming?\" → Reported: She asked me ___ I was coming.", answer: "if", acceptedVariants: ["whether"], explanation: "ใน reported yes/no questions ใช้ if หรือ whether แทนการกลับลำดับกริยา" },
      { id: "rs-p12", type: 'multiple-choice', prompt: "Direct: \"I left my bag here.\" → Reported: She said she had left her bag ___.", options: ["here", "there", "then", "where"], correctIndex: 1, explanation: "\"Here\" เปลี่ยนเป็น \"there\" ใน reported speech เพราะตำแหน่งอ้างอิงเปลี่ยนไปจากผู้พูดต้นฉบับ" }
    ],
    quiz: [
      { id: 'rs-q1', type: 'multiple-choice', prompt: 'Direct: "I like coffee." Reported: He said he ___ coffee.', options: ['likes', 'liked', 'like', 'has liked'], correctIndex: 1, explanation: 'backshift: like → liked' },
      { id: 'rs-q2', type: 'fill-in-blank', prompt: 'Direct: "I am studying." Reported: She said she ___ studying.', answer: 'was', acceptedVariants: [], explanation: 'backshift: am → was' },
      { id: 'rs-q3', type: 'multiple-choice', prompt: 'Report the question: "What time is it?"', options: ['He asked what time is it.', 'He asked what time it was.', 'He asked what time was it.', 'He asked what time it is.'], correctIndex: 1, explanation: 'reported question: ลำดับบอกเล่า + backshift → what time it was' },
      { id: 'rs-q4', type: 'multiple-choice', prompt: 'Direct: "We will win." Reported: They said they ___ win.', options: ['will', 'would', 'are', 'did'], correctIndex: 1, explanation: 'backshift: will → would' },
      { id: "rs-q5", type: 'multiple-choice', prompt: "Direct: \"We are leaving tomorrow.\" → Which reported speech is correct?", options: ["They said they are leaving tomorrow.", "They said they were leaving the next day.", "They said they will leave tomorrow.", "They said they leave the next day."], correctIndex: 1, explanation: "Backshift: are → were, tomorrow → the next day เป็นการเปลี่ยนแปลงที่ถูกต้องใน reported speech" },
      { id: "rs-q6", type: 'fill-in-blank', prompt: "My boss ___ (say/tell) me to finish the project by Friday.", answer: "told", acceptedVariants: [], explanation: "\"Tell\" ใช้เมื่อมีกรรมบุคคลตามหลัง เช่น told me, told her, told us" },
      { id: "rs-q7", type: 'multiple-choice', prompt: "Direct: \"What time does the film start?\" → Reported: He asked ___.", options: ["what time does the film start", "what time the film starts", "what time did the film start", "what time the film started"], correctIndex: 3, explanation: "Reported questions ไม่มีการกลับลำดับประธาน-กริยา และต้อง backshift: does start → started" },
      { id: "rs-q8", type: 'fill-in-blank', prompt: "Direct: \"Don't touch that!\" → Reported: She told him ___ that.", answer: "not to touch", acceptedVariants: [], explanation: "Reported negative commands ใช้ tell + กรรม + not to-infinitive" },
      { id: "rs-q9", type: 'multiple-choice', prompt: "Direct: \"I saw him this morning.\" → Reported: She said she had seen him ___.", options: ["this morning", "that morning", "the morning", "last morning"], correctIndex: 1, explanation: "\"This morning\" เปลี่ยนเป็น \"that morning\" ใน reported speech เนื่องจากการอ้างอิงเวลาเปลี่ยนไป" },
      { id: "rs-q10", type: 'fill-in-blank', prompt: "Direct: \"I will help you.\" → Reported: He said he ___ help me.", answer: "would", acceptedVariants: [], explanation: "\"Will\" backshift เป็น \"would\" ใน reported speech" },
      { id: "rs-q11", type: 'multiple-choice', prompt: "Direct: \"Did you enjoy the party?\" → Reported: He asked me ___.", options: ["did I enjoy the party", "if I enjoyed the party", "if did I enjoy the party", "whether I did enjoy the party"], correctIndex: 1, explanation: "Reported yes/no questions ใช้ if/whether + ประธาน + กริยา (ไม่กลับลำดับ) และ backshift กริยา" },
      { id: "rs-q12", type: 'multiple-choice', prompt: "Direct: \"I can speak three languages.\" → Reported: She said she ___ speak three languages.", options: ["can", "could", "would", "was able to have"], correctIndex: 1, explanation: "\"Can\" backshift เป็น \"could\" ใน reported speech" }
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
      { id: 'cj-p4', type: 'multiple-choice', prompt: 'Would you like cake ___ ice cream?', options: ['and', 'but', 'or', 'because'], correctIndex: 2, explanation: 'ให้เลือกใช้ or' },
      { id: "cj-p5", type: 'fill-in-blank', prompt: "She studied hard, ___ she passed the exam.", answer: "so", acceptedVariants: [], explanation: "ใช้ \"so\" แสดงผลลัพธ์ (result) ที่เกิดจากการกระทำก่อนหน้า" },
      { id: "cj-p6", type: 'multiple-choice', prompt: "___ it was raining, they decided to go out anyway.", options: ["Because", "Although", "Since", "So"], correctIndex: 1, explanation: "ใช้ \"Although\" แสดงความขัดแย้ง (contrast) ว่าแม้จะฝนตก แต่ก็ยังออกไป" },
      { id: "cj-p7", type: 'fill-in-blank', prompt: "Would you like tea ___ coffee?", answer: "or", acceptedVariants: [], explanation: "ใช้ \"or\" เพื่อแสดงทางเลือก (alternative) ระหว่างสองสิ่ง" },
      { id: "cj-p8", type: 'multiple-choice', prompt: "I will call you ___ I arrive at the station.", options: ["although", "however", "when", "therefore"], correctIndex: 2, explanation: "ใช้ \"when\" แสดงเวลา (time) ที่เหตุการณ์สองอย่างเกิดขึ้นพร้อมกันหรือต่อเนื่องกัน" },
      { id: "cj-p9", type: 'fill-in-blank', prompt: "He was tired; ___, he kept working.", answer: "however", acceptedVariants: ["nevertheless"], explanation: "ใช้ \"however\" แสดงความขัดแย้ง เมื่อใช้หลัง semicolon ต้องตามด้วยคอมม่า" },
      { id: "cj-p10", type: 'multiple-choice', prompt: "You should wear sunscreen ___ you go out in the sun.", options: ["although", "while", "if", "so"], correctIndex: 2, explanation: "ใช้ \"if\" แสดงเงื่อนไข (condition) ว่าถ้าออกไปกลางแดดแล้วควรทาครีมกันแดด" },
      { id: "cj-p11", type: 'fill-in-blank', prompt: "She listened to music ___ she cooked dinner.", answer: "while", acceptedVariants: [], explanation: "ใช้ \"while\" แสดงการกระทำสองอย่างที่เกิดขึ้นพร้อมกัน (simultaneous actions)" },
      { id: "cj-p12", type: 'multiple-choice', prompt: "He missed the bus; ___, he was late for work.", options: ["although", "however", "therefore", "since"], correctIndex: 2, explanation: "ใช้ \"therefore\" แสดงผลลัพธ์หรือข้อสรุป (result/conclusion) ที่เป็นทางการมากกว่า \"so\"" }
    ],
    quiz: [
      { id: 'cj-q1', type: 'multiple-choice', prompt: 'He is rich ___ he is not happy.', options: ['and', 'but', 'or', 'so'], correctIndex: 1, explanation: 'ความขัดแย้งใช้ but' },
      { id: 'cj-q2', type: 'fill-in-blank', prompt: 'I like coffee ___ tea. (both)', answer: 'and', acceptedVariants: [], explanation: 'เพิ่มข้อมูลทั้งสองอย่างใช้ and' },
      { id: 'cj-q3', type: 'multiple-choice', prompt: 'She was sad ___ she failed the test.', options: ['and', 'but', 'because', 'or'], correctIndex: 2, explanation: 'บอกเหตุผลใช้ because' },
      { id: 'cj-q4', type: 'multiple-choice', prompt: 'The store was closed, ___ we went home.', options: ['because', 'but', 'or', 'so'], correctIndex: 3, explanation: 'บอกผลลัพธ์ใช้ so' },
      { id: "cj-q5", type: 'multiple-choice', prompt: "I like swimming, ___ my brother prefers running.", options: ["and", "but", "so", "or"], correctIndex: 1, explanation: "ใช้ \"but\" แสดงความขัดแย้ง (contrast) ระหว่างสองประโยคที่มีความหมายตรงกันข้าม" },
      { id: "cj-q6", type: 'fill-in-blank', prompt: "___ she had a headache, she still went to work.", answer: "Although", acceptedVariants: ["Even though", "Though"], explanation: "ใช้ \"Although\" หรือ \"Even though\" แสดงความขัดแย้ง ว่าแม้จะปวดหัวก็ยังไปทำงาน" },
      { id: "cj-q7", type: 'multiple-choice', prompt: "I haven't eaten ___ I woke up this morning.", options: ["when", "while", "since", "although"], correctIndex: 2, explanation: "ใช้ \"since\" แสดงจุดเริ่มต้นของระยะเวลา มักใช้กับ present perfect tense" },
      { id: "cj-q8", type: 'fill-in-blank', prompt: "He failed the test ___ he didn't study.", answer: "because", acceptedVariants: [], explanation: "ใช้ \"because\" แสดงสาเหตุ (reason) ว่าทำไมจึงสอบไม่ผ่าน" },
      { id: "cj-q9", type: 'multiple-choice', prompt: "She worked hard ___ she was promoted.", options: ["but", "or", "and", "although"], correctIndex: 2, explanation: "ใช้ \"and\" เชื่อมประโยคสองประโยคที่เกิดขึ้นต่อเนื่องกัน หรือเป็นผลของกัน" },
      { id: "cj-q10", type: 'fill-in-blank', prompt: "I will help you ___ you ask me nicely.", answer: "if", acceptedVariants: [], explanation: "ใช้ \"if\" แสดงเงื่อนไข (conditional) ว่าจะช่วยก็ต่อเมื่อมีการขอด้วยความสุภาพ" },
      { id: "cj-q11", type: 'multiple-choice', prompt: "The match was cancelled ___ of the heavy rain.", options: ["because", "because of", "although", "however"], correctIndex: 1, explanation: "ใช้ \"because of\" ตามด้วยคำนาม (noun phrase) แต่ใช้ \"because\" ตามด้วยประโยค (clause)" },
      { id: "cj-q12", type: 'fill-in-blank', prompt: "The traffic was terrible. ___, we arrived on time.", answer: "Nevertheless", acceptedVariants: ["However", "Nonetheless"], explanation: "ใช้ \"Nevertheless\" หรือ \"However\" แสดงความขัดแย้งที่เป็นทางการ เมื่อขึ้นต้นประโยคใหม่" }
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
      { id: 'qf-p4', type: 'multiple-choice', prompt: 'Choose the correct question.', options: ['Does she goes to school?', 'Does she go to school?', 'Do she go to school?', 'Does she going to school?'], correctIndex: 1, explanation: 'หลัง does ใช้กริยารูปธรรมดา (go)' },
      { id: "qf-p5", type: 'fill-in-blank', prompt: "___ your parents at home yesterday?", answer: "Were", acceptedVariants: [], explanation: "Yes/No questions กับ to-be ในอดีต ให้ใช้ Were ขึ้นต้นประโยค (they/you/we → were)" },
      { id: "qf-p6", type: 'multiple-choice', prompt: "___ she speak English fluently?", options: ["Do", "Does", "Is", "Has"], correctIndex: 1, explanation: "ใช้ \"Does\" กับประธานเอกพจน์บุรุษที่สาม (he/she/it) ใน present simple yes/no questions" },
      { id: "qf-p7", type: 'fill-in-blank', prompt: "Where ___ you go last weekend?", answer: "did", acceptedVariants: [], explanation: "Wh-questions ในอดีตใช้ did + ประธาน + infinitive โดยไม่ใช้ went" },
      { id: "qf-p8", type: 'multiple-choice', prompt: "You have been to Japan, ___?", options: ["have you", "haven't you", "did you", "don't you"], correctIndex: 1, explanation: "Question tag: ถ้าประโยคหลักเป็นบวก ให้ใช้ tag เป็นลบ (have been → haven't you)" },
      { id: "qf-p9", type: 'fill-in-blank', prompt: "___ broke the window? (subject question with who)", answer: "Who", acceptedVariants: [], explanation: "Subject question: เมื่อ who/what เป็นประธาน ไม่ต้องใช้ did และไม่กลับลำดับกริยา" },
      { id: "qf-p10", type: 'multiple-choice', prompt: "Can you tell me where ___ the nearest hospital?", options: ["is", "the nearest hospital is", "is it", "does the nearest hospital"], correctIndex: 1, explanation: "Indirect questions ไม่กลับลำดับประธาน-กริยา ใช้รูปแบบปกติ: where + ประธาน + กริยา" },
      { id: "qf-p11", type: 'fill-in-blank', prompt: "___ you help me carry these bags?", answer: "Can", acceptedVariants: ["Could", "Would"], explanation: "คำถามที่ขอความช่วยเหลือใช้ modal verb (Can/Could/Would) + ประธาน + infinitive" },
      { id: "qf-p12", type: 'multiple-choice', prompt: "How ___ the weather in Bangkok last month?", options: ["did", "was", "were", "had"], correctIndex: 1, explanation: "\"How was\" ใช้ถามเกี่ยวกับสภาพหรือลักษณะในอดีต (he/she/it/weather → was)" }
    ],
    quiz: [
      { id: 'qf-q1', type: 'multiple-choice', prompt: 'Choose the correct question.', options: ['Do he like music?', 'Does he likes music?', 'Does he like music?', 'He does like music?'], correctIndex: 2, explanation: 'ประธาน he ใช้ Does + กริยารูปธรรมดา (like)' },
      { id: 'qf-q2', type: 'fill-in-blank', prompt: '___ you go to the party last night? (past)', answer: 'Did', acceptedVariants: ['did'], explanation: 'อดีต (last night) ใช้ Did ขึ้นต้น' },
      { id: 'qf-q3', type: 'multiple-choice', prompt: 'Which is the correct Wh-question?', options: ['What you want?', 'What do you want?', 'What does you want?', 'You want what?'], correctIndex: 1, explanation: 'Wh-word + do + ประธาน + กริยา → What do you want?' },
      { id: 'qf-q4', type: 'multiple-choice', prompt: 'Choose the correct question with "to be".', options: ['You are ready?', 'Are you ready?', 'Do you are ready?', 'Are you are ready?'], correctIndex: 1, explanation: 'verb to be ขึ้นต้นเพื่อตั้งคำถาม → Are you ready?' },
      { id: "qf-q5", type: 'multiple-choice', prompt: "Which question is grammatically correct?", options: ["Did she went to the market?", "Did she goes to the market?", "Did she go to the market?", "Does she went to the market?"], correctIndex: 2, explanation: "หลัง did ใช้ infinitive (go) เสมอ ไม่ใช้ went หรือ goes" },
      { id: "qf-q6", type: 'fill-in-blank', prompt: "She doesn't like spicy food, ___?", answer: "does she", acceptedVariants: [], explanation: "Question tag: ถ้าประโยคหลักเป็นลบ ให้ tag เป็นบวก (doesn't → does she)" },
      { id: "qf-q7", type: 'multiple-choice', prompt: "___ makes you happy? (subject question)", options: ["What does", "What do", "What", "What is"], correctIndex: 2, explanation: "ใน subject question เมื่อ what เป็นประธาน ไม่ต้องใช้ do/does ใช้ what + กริยา โดยตรง" },
      { id: "qf-q8", type: 'fill-in-blank', prompt: "Do you know what time ___ (the shop/open)?", answer: "the shop opens", acceptedVariants: ["the shops open"], explanation: "ใน indirect question ไม่กลับลำดับประธาน-กริยา: what time + the shop + opens (ไม่ใช่ does the shop open)" },
      { id: "qf-q9", type: 'multiple-choice', prompt: "___ did you study at university?", options: ["Who", "What", "Which", "Whom"], correctIndex: 1, explanation: "\"What\" ใช้ถามเกี่ยวกับสิ่งของหรือเรื่องที่ศึกษา ส่วน \"which\" ใช้เมื่อมีตัวเลือกจำกัด" },
      { id: "qf-q10", type: 'fill-in-blank', prompt: "___ I take an umbrella? It looks cloudy.", answer: "Should", acceptedVariants: [], explanation: "\"Should\" ใช้ถามหรือให้คำแนะนำเกี่ยวกับสิ่งที่ควรทำ" },
      { id: "qf-q11", type: 'multiple-choice', prompt: "They haven't finished yet, ___?", options: ["haven't they", "have they", "did they", "don't they"], correctIndex: 1, explanation: "Question tag หลัง haven't ใช้ \"have they\" (ลบ→บวก โดยใช้ auxiliary verb เดียวกัน)" },
      { id: "qf-q12", type: 'multiple-choice', prompt: "Which sentence is a correct indirect question?", options: ["Could you tell me where is the exit?", "Could you tell me where the exit is?", "Could you tell me where does the exit is?", "Could you tell me where the exit does?"], correctIndex: 1, explanation: "Indirect questions ใช้รูปปกติ (ประธาน + กริยา) ไม่กลับลำดับเหมือน direct question" }
    ]
  },
  {
    id: "grammar-phrasal-verbs",
    title: "Phrasal Verbs",
    thai: "กริยาวลี (Phrasal Verbs)",
    emoji: "🔀",
    level: "B1",
    summary: "Phrasal verbs คือกริยาที่ประกอบด้วยคำกริยาหลักและ particle (preposition หรือ adverb) ซึ่งรวมกันแล้วมีความหมายใหม่ที่ต่างจากคำเดิม\nคนไทยมักสับสนเพราะไม่สามารถแปลความหมายจากคำแต่ละคำได้ตรงๆ",
    explanation: [
      { heading: "What Are Phrasal Verbs?", body: "Phrasal verb คือกริยา + particle เช่น give up, look after, find out\nความหมายของ phrasal verb มักไม่เหมือนกริยาเดิม เช่น \"give\" แปลว่าให้ แต่ \"give up\" แปลว่ายอมแพ้\nจุดที่คนไทยมักผิด: พยายามแปลคำต่อคำ ทำให้เข้าใจความหมายผิด" },
      { heading: "Separable Phrasal Verbs", body: "Separable phrasal verbs สามารถแยก particle ออกจากกริยาได้ โดยวางกรรม (object) ไว้ตรงกลาง\nตัวอย่าง: \"Turn off the lights.\" หรือ \"Turn the lights off.\" ทั้งสองถูกต้อง\nแต่ถ้าใช้ pronoun ต้องวางไว้กลางเสมอ: \"Turn them off.\" ❌ \"Turn off them.\"\nจุดที่คนไทยมักผิด: ใช้ pronoun ผิดตำแหน่ง" },
      { heading: "Inseparable Phrasal Verbs", body: "Inseparable phrasal verbs ไม่สามารถแยก particle ออกได้ object ต้องวางหลัง particle เสมอ\nตัวอย่าง: \"She looks after her sister.\" ❌ \"She looks her sister after.\"\nกริยาประเภทนี้ได้แก่ look after, come across, get on, get over\nจุดที่คนไทยมักผิด: พยายามแยก particle เหมือน separable verbs" }
    ],
    examples: [
      { en: "She gave up smoking last year.", th: "เธอเลิกสูบบุหรี่เมื่อปีที่แล้ว" },
      { en: "Can you look after my dog this weekend?", th: "คุณช่วยดูแลสุนัขของฉันสุดสัปดาห์นี้ได้ไหม" },
      { en: "I came across an old photo album in the attic.", th: "ฉันบังเอิญเจออัลบั้มรูปเก่าในห้องใต้หลังคา" },
      { en: "Please turn off the TV before you sleep.", th: "กรุณาปิดทีวีก่อนนอน" },
      { en: "They set up a new business together.", th: "พวกเขาตั้งธุรกิจใหม่ด้วยกัน" },
      { en: "Don't put off your homework until tomorrow.", th: "อย่าเลื่อนการบ้านไปทำพรุ่งนี้" }
    ],
    practice: [
      { id: "phv-p1", type: 'fill-in-blank', prompt: "She ___ smoking after her doctor's advice. (give up)", answer: "gave up", acceptedVariants: [], explanation: "Give up (ยอมแพ้/เลิก) เป็น separable phrasal verb ใช้ past tense \"gave up\" ในประโยคนี้" },
      { id: "phv-p2", type: 'multiple-choice', prompt: "Which sentence uses the inseparable phrasal verb correctly?", options: ["She looks her baby after.", "She looks after her baby.", "She after looks her baby.", "She looks after to her baby."], correctIndex: 1, explanation: "\"Look after\" เป็น inseparable phrasal verb ต้องวาง object ไว้หลัง particle เสมอ" },
      { id: "phv-p3", type: 'fill-in-blank', prompt: "I couldn't ___ what he was saying because of the noise. (find out)", answer: "find out", acceptedVariants: [], explanation: "\"Find out\" หมายถึงค้นหาหรือสืบรู้ข้อมูล ใช้ในความหมายว่าเข้าใจหรือรับรู้" },
      { id: "phv-p4", type: 'multiple-choice', prompt: "Tom and Lisa ___ well from the first day they met.", options: ["got on", "got up", "got out", "got over"], correctIndex: 0, explanation: "\"Get on (with someone)\" หมายถึงเข้ากันได้ดี มีความสัมพันธ์ที่ดี" },
      { id: "phv-p5", type: 'fill-in-blank', prompt: "Remember to ___ the lights when you leave the room. (turn off)", answer: "turn off", acceptedVariants: [], explanation: "\"Turn off\" หมายถึงปิด (ไฟ/เครื่องใช้ไฟฟ้า) เป็น separable phrasal verb" },
      { id: "phv-p6", type: 'multiple-choice', prompt: "Which sentence correctly uses a pronoun with a separable phrasal verb?", options: ["Please turn off it.", "Please turn it off.", "Please off turn it.", "Please it turn off."], correctIndex: 1, explanation: "เมื่อใช้ pronoun กับ separable phrasal verb ต้องวาง pronoun ไว้ระหว่างกริยาและ particle เสมอ" },
      { id: "phv-p7", type: 'fill-in-blank', prompt: "They plan to ___ a new office in Bangkok. (set up)", answer: "set up", acceptedVariants: [], explanation: "\"Set up\" หมายถึงจัดตั้งหรือก่อตั้ง เป็น separable phrasal verb" },
      { id: "phv-p8", type: 'multiple-choice', prompt: "What does \"put off\" mean in this sentence: \"She put off the meeting until Friday.\"?", options: ["ยกเลิก", "เลื่อน", "เริ่ม", "จัด"], correctIndex: 1, explanation: "\"Put off\" หมายถึงเลื่อน (เวลา/กิจกรรม) ออกไป ไม่ได้แปลว่ายกเลิก" }
    ],
    quiz: [
      { id: "phv-q1", type: 'multiple-choice', prompt: "She decided to ___ her bad habits.", options: ["give up", "give in", "give out", "give away"], correctIndex: 0, explanation: "\"Give up\" หมายถึงเลิกหรือหยุดทำสิ่งใดสิ่งหนึ่ง เหมาะกับประโยคนี้มากที่สุด" },
      { id: "phv-q2", type: 'fill-in-blank', prompt: "I ___ an interesting article while browsing the internet yesterday. (come across)", answer: "came across", acceptedVariants: [], explanation: "\"Come across\" หมายถึงบังเอิญพบ ใช้ past tense \"came across\" เพราะมี \"yesterday\"" },
      { id: "phv-q3", type: 'multiple-choice', prompt: "Which phrasal verb means \"to discover information\"?", options: ["look after", "find out", "put off", "get on"], correctIndex: 1, explanation: "\"Find out\" หมายถึงค้นพบหรือสืบรู้ข้อมูล ส่วน phrasal verbs อื่นมีความหมายต่างกัน" },
      { id: "phv-q4", type: 'fill-in-blank', prompt: "My grandmother ___ five children on her own after her husband died. (look after)", answer: "looked after", acceptedVariants: [], explanation: "\"Look after\" หมายถึงดูแล เป็น inseparable phrasal verb ใช้ past tense เพราะเล่าเรื่องในอดีต" },
      { id: "phv-q5", type: 'multiple-choice', prompt: "Don't ___ your work. Finish it today!", options: ["put off", "put up", "put on", "put out"], correctIndex: 0, explanation: "\"Put off\" หมายถึงเลื่อนออกไป ส่วน \"put on\" แปลว่าสวมใส่ \"put out\" แปลว่าดับ" },
      { id: "phv-q6", type: 'fill-in-blank', prompt: "The two business partners ___ a successful company ten years ago. (set up)", answer: "set up", acceptedVariants: [], explanation: "\"Set up\" หมายถึงก่อตั้งหรือจัดตั้ง ใช้ past tense \"set up\" (set ไม่เปลี่ยนรูปใน past tense)" },
      { id: "phv-q7", type: 'multiple-choice', prompt: "He ___ with his new colleagues very quickly.", options: ["got over", "got up", "got on", "got out"], correctIndex: 2, explanation: "\"Get on (with someone)\" หมายถึงเข้ากันได้ดี \"Get over\" หมายถึงฟื้นตัว \"Get up\" หมายถึงลุกขึ้น" },
      { id: "phv-q8", type: 'multiple-choice', prompt: "The phrasal verb in \"I turned it off\" is used correctly because ___.", options: ["Turn off is inseparable", "Pronouns must go between the verb and particle", "Pronouns always go after the particle", "Turn off cannot be separated"], correctIndex: 1, explanation: "เมื่อ object เป็น pronoun (it, them, him ฯลฯ) ต้องวางไว้ระหว่างกริยาและ particle เสมอ" }
    ]
  },
  {
    id: "grammar-gerunds-infinitives",
    title: "Gerunds & Infinitives",
    thai: "Gerund และ Infinitive",
    emoji: "🔄",
    level: "B1",
    summary: "Gerund (verb+ing) และ Infinitive (to+verb) ใช้ตามหลังกริยาบางคำและสามารถเป็นประธานของประโยคได้\nคนไทยมักสับสนว่าหลังกริยาใดควรใช้ gerund และหลังกริยาใดควรใช้ infinitive",
    explanation: [
      { heading: "Gerund as Subject & After Certain Verbs", body: "Gerund (verb+ing) สามารถทำหน้าที่เป็นประธานได้ เช่น \"Swimming is good exercise.\"\nกริยาที่ตามด้วย gerund ได้แก่ enjoy, finish, avoid, mind, suggest, keep, practice\nตัวอย่าง: \"I enjoy reading books.\" / \"She finished cooking dinner.\"\nจุดที่คนไทยมักผิด: ใช้ infinitive หลัง enjoy เช่น ❌ \"I enjoy to read.\"" },
      { heading: "Verbs Followed by Infinitive", body: "กริยาบางคำตามด้วย infinitive (to + base verb) เท่านั้น ได้แก่ want, decide, hope, refuse, plan, promise, agree, manage\nตัวอย่าง: \"She decided to study abroad.\" / \"He refused to apologize.\"\nกริยา + object + infinitive: ask, tell, want, invite, allow\nตัวอย่าง: \"She asked him to help.\" / \"They want us to leave.\"\nจุดที่คนไทยมักผิด: ลืมใส่ \"to\" หน้า verb" },
      { heading: "Verbs That Accept Both (With Meaning Change)", body: "กริยาบางคำใช้ได้ทั้ง gerund และ infinitive โดยความหมายไม่ต่างกันมากนัก: like, love, hate, start, begin, continue\nตัวอย่าง: \"I love swimming.\" = \"I love to swim.\"\nแต่บางคำเปลี่ยนความหมาย: remember/forget/stop\n\"I stopped to eat.\" (หยุดเพื่อกิน) vs \"I stopped eating.\" (เลิกกิน)\nจุดที่คนไทยมักผิด: ไม่ทราบว่า remember/forget/stop เปลี่ยนความหมาย" }
    ],
    examples: [
      { en: "Swimming is my favourite hobby.", th: "การว่ายน้ำเป็นงานอดิเรกที่ฉันชอบที่สุด" },
      { en: "He enjoys playing football on weekends.", th: "เขาชอบเล่นฟุตบอลในวันหยุดสุดสัปดาห์" },
      { en: "She decided to study medicine at university.", th: "เธอตัดสินใจเรียนแพทย์ที่มหาวิทยาลัย" },
      { en: "They avoid eating fast food as much as possible.", th: "พวกเขาหลีกเลี่ยงการกินอาหารฟาสต์ฟู้ดให้มากที่สุดเท่าที่จะทำได้" },
      { en: "My teacher asked me to stay after class.", th: "ครูของฉันขอให้ฉันอยู่หลังเลิกเรียน" },
      { en: "I stopped smoking three years ago.", th: "ฉันเลิกสูบบุหรี่มาสามปีแล้ว" }
    ],
    practice: [
      { id: "gi-p1", type: 'fill-in-blank', prompt: "___ is the best way to stay healthy. (exercise)", answer: "Exercising", acceptedVariants: ["exercising"], explanation: "Gerund (verb+ing) สามารถทำหน้าที่เป็นประธานของประโยคได้ จึงใช้ \"Exercising\"" },
      { id: "gi-p2", type: 'multiple-choice', prompt: "She enjoys ___ to classical music in the evening.", options: ["listen", "to listen", "listening", "listened"], correctIndex: 2, explanation: "\"Enjoy\" ตามด้วย gerund (verb+ing) เสมอ ❌ \"enjoy to listen\" ไม่ถูกต้อง" },
      { id: "gi-p3", type: 'fill-in-blank', prompt: "He decided ___ a new job in the city. (find)", answer: "to find", acceptedVariants: [], explanation: "\"Decide\" ตามด้วย infinitive (to + verb) เสมอ จึงใช้ \"to find\"" },
      { id: "gi-p4", type: 'multiple-choice', prompt: "Would you mind ___ the window? It's cold.", options: ["to close", "closing", "closed", "close"], correctIndex: 1, explanation: "\"Mind\" ตามด้วย gerund (verb+ing) เสมอ \"Would you mind closing...\" หมายถึงคุณรังเกียจที่จะปิด...ไหม" },
      { id: "gi-p5", type: 'fill-in-blank', prompt: "My parents want me ___ hard at school. (study)", answer: "to study", acceptedVariants: [], explanation: "รูปแบบ \"want + object + infinitive\" คือ want someone to do something จึงใช้ \"to study\"" },
      { id: "gi-p6", type: 'multiple-choice', prompt: "She refused ___ the question.", options: ["answering", "answer", "to answer", "answered"], correctIndex: 2, explanation: "\"Refuse\" ตามด้วย infinitive (to + verb) เสมอ จึงใช้ \"to answer\"" },
      { id: "gi-p7", type: 'fill-in-blank', prompt: "I stopped ___ junk food after my health check. (eat)", answer: "eating", acceptedVariants: [], explanation: "\"Stop + gerund\" หมายถึงเลิกทำสิ่งนั้น ส่วน \"stop + infinitive\" หมายถึงหยุดเพื่อทำสิ่งอื่น" },
      { id: "gi-p8", type: 'multiple-choice', prompt: "The teacher told the students ___ quietly.", options: ["working", "work", "worked", "to work"], correctIndex: 3, explanation: "\"Tell + object + infinitive\" คือรูปแบบที่ถูกต้อง: \"told the students to work\"" }
    ],
    quiz: [
      { id: "gi-q1", type: 'multiple-choice', prompt: "Which sentence is correct?", options: ["I hope seeing you soon.", "I hope to see you soon.", "I hope see you soon.", "I hope saw you soon."], correctIndex: 1, explanation: "\"Hope\" ตามด้วย infinitive (to + verb) เสมอ จึงใช้ \"hope to see\"" },
      { id: "gi-q2", type: 'fill-in-blank', prompt: "Avoid ___ too much sugar if you want to be healthy. (eat)", answer: "eating", acceptedVariants: [], explanation: "\"Avoid\" ตามด้วย gerund เสมอ ❌ \"avoid to eat\" ไม่ถูกต้อง" },
      { id: "gi-q3", type: 'multiple-choice', prompt: "\"I stopped to talk to her.\" What does this sentence mean?", options: ["ฉันเลิกคุยกับเธอ", "ฉันหยุดเพื่อคุยกับเธอ", "ฉันพยายามคุยกับเธอ", "ฉันจำได้ว่าคุยกับเธอ"], correctIndex: 1, explanation: "\"Stop + infinitive\" หมายถึงหยุดสิ่งที่กำลังทำเพื่อทำสิ่งใหม่ ต่างจาก \"stop + gerund\" ที่หมายถึงเลิกทำ" },
      { id: "gi-q4", type: 'fill-in-blank', prompt: "She promised ___ on time for the meeting. (be)", answer: "to be", acceptedVariants: [], explanation: "\"Promise\" ตามด้วย infinitive จึงใช้ \"to be\" ไม่ใช่ \"being\"" },
      { id: "gi-q5", type: 'multiple-choice', prompt: "He invited all his friends ___ to his birthday party.", options: ["come", "coming", "to come", "came"], correctIndex: 2, explanation: "\"Invite + object + infinitive\" คือรูปแบบที่ถูกต้อง: \"invited them to come\"" },
      { id: "gi-q6", type: 'fill-in-blank', prompt: "___ a foreign language takes time and practice. (learn)", answer: "Learning", acceptedVariants: ["learning"], explanation: "Gerund ใช้เป็นประธานของประโยคได้ \"Learning a language\" ทำหน้าที่เป็นประธาน" },
      { id: "gi-q7", type: 'multiple-choice', prompt: "Which verb is CORRECTLY followed by a gerund?", options: ["decide", "want", "finish", "hope"], correctIndex: 2, explanation: "\"Finish\" ตามด้วย gerund เสมอ ส่วน decide/want/hope ตามด้วย infinitive" },
      { id: "gi-q8", type: 'multiple-choice', prompt: "She managed ___ all her exams despite being ill.", options: ["passing", "pass", "to pass", "passed"], correctIndex: 2, explanation: "\"Manage\" ตามด้วย infinitive (to + verb) เสมอ จึงใช้ \"managed to pass\"" }
    ]
  },
  {
    id: "grammar-comparatives",
    title: "Comparatives & Superlatives",
    thai: "การเปรียบเทียบ (Comparatives & Superlatives)",
    emoji: "📊",
    level: "A2",
    summary: "Comparatives ใช้เปรียบเทียบสองสิ่ง (taller, more expensive) ส่วน Superlatives ใช้เปรียบเทียบในกลุ่ม (the tallest, the most expensive)\nคนไทยมักสับสนระหว่างกฎของ adjective สั้นและยาว รวมถึง irregular forms",
    explanation: [
      { heading: "Short Adjectives: -er / -est", body: "Adjective ที่มี 1 พยางค์ หรือ 2 พยางค์ที่ลงท้ายด้วย -y ใช้ -er (comparative) และ -est (superlative)\nตัวอย่าง: tall→taller→tallest, fast→faster→fastest, happy→happier→happiest\nกฎการสะกด: adjective ที่ลงท้าย CVC (consonant-vowel-consonant) ให้เพิ่มตัวสุดท้าย: big→bigger\nจุดที่คนไทยมักผิด: ใช้ \"more tall\" แทน \"taller\"" },
      { heading: "Long Adjectives: more / most", body: "Adjective ที่มี 2 พยางค์ขึ้นไป (ที่ไม่ลงท้ายด้วย -y) ใช้ more (comparative) และ most (superlative)\nตัวอย่าง: expensive→more expensive→the most expensive\nbeautiful→more beautiful→the most beautiful\nจุดที่คนไทยมักผิด: ใช้ \"beautifuller\" หรือลืมใส่ \"the\" หน้า superlative" },
      { heading: "Irregular Forms & Special Patterns", body: "Irregular comparatives: good→better→best, bad→worse→worst, far→further/farther→furthest/farthest\nรูปแบบพิเศษ:\n- as...as: เปรียบเทียบความเท่ากัน \"She is as tall as her brother.\"\n- much/far + comparative: เน้นความต่าง \"This is much better.\"\n- double comparative: \"The more you practice, the better you get.\"\nจุดที่คนไทยมักผิด: ใช้ \"more good\" แทน \"better\"" }
    ],
    examples: [
      { en: "My sister is taller than me.", th: "น้องสาวของฉันสูงกว่าฉัน" },
      { en: "This restaurant is more expensive than the one near my house.", th: "ร้านอาหารนี้แพงกว่าร้านที่อยู่ใกล้บ้านฉัน" },
      { en: "Mount Everest is the highest mountain in the world.", th: "เอเวอเรสต์เป็นภูเขาที่สูงที่สุดในโลก" },
      { en: "Your English is much better than last year.", th: "ภาษาอังกฤษของคุณดีกว่าปีที่แล้วมาก" },
      { en: "She is as clever as her brother.", th: "เธอฉลาดพอๆ กับพี่ชายของเธอ" },
      { en: "The more you read, the more you learn.", th: "ยิ่งอ่านมาก ก็ยิ่งเรียนรู้มาก" }
    ],
    practice: [
      { id: "comp-p1", type: 'fill-in-blank', prompt: "Bangkok is ___ than my hometown. (big)", answer: "bigger", acceptedVariants: [], explanation: "\"Big\" เป็น adjective ที่ลงท้าย CVC ต้องเพิ่มตัวสุดท้ายก่อนเติม -er จึงได้ \"bigger\"" },
      { id: "comp-p2", type: 'multiple-choice', prompt: "This is ___ movie I have ever seen!", options: ["the most boring", "more boring", "the boringest", "most boring"], correctIndex: 0, explanation: "Superlative ของ adjective ยาวใช้ \"the most + adjective\" และต้องมี \"the\" นำหน้าเสมอ" },
      { id: "comp-p3", type: 'fill-in-blank', prompt: "Her grades were ___ than expected. (bad)", answer: "worse", acceptedVariants: [], explanation: "\"Bad\" มี irregular comparative คือ \"worse\" ไม่ใช่ \"more bad\" หรือ \"badder\"" },
      { id: "comp-p4", type: 'multiple-choice', prompt: "He is ___ swimmer on the team.", options: ["the fastest", "the most fast", "faster", "most fastest"], correctIndex: 0, explanation: "\"Fast\" เป็น adjective สั้น ใช้ -est สำหรับ superlative และต้องมี \"the\" นำหน้า" },
      { id: "comp-p5", type: 'fill-in-blank', prompt: "My coffee is as ___ as yours. (hot)", answer: "hot", acceptedVariants: [], explanation: "รูปแบบ \"as + adjective + as\" ใช้ adjective ในรูปปกติ (base form) ไม่เปลี่ยนรูป" },
      { id: "comp-p6", type: 'multiple-choice', prompt: "Which sentence is correct?", options: ["This problem is much more worse.", "This problem is far worse.", "This problem is more worse.", "This problem is the worse."], correctIndex: 1, explanation: "ใช้ \"far\" หรือ \"much\" หน้า comparative เพื่อเน้นความต่าง \"far worse\" ถูกต้อง ไม่ใช่ \"more worse\"" },
      { id: "comp-p7", type: 'fill-in-blank', prompt: "___ you study, ___ you will understand. (the more)", answer: "The more", acceptedVariants: ["the more"], explanation: "Double comparative ใช้รูปแบบ \"The more...the more...\" เพื่อแสดงความสัมพันธ์ที่เพิ่มขึ้นพร้อมกัน" },
      { id: "comp-p8", type: 'multiple-choice', prompt: "What is the superlative form of \"good\"?", options: ["the goodest", "the most good", "the best", "the better"], correctIndex: 2, explanation: "\"Good\" มี irregular superlative คือ \"the best\" ไม่ใช่ \"the most good\"" }
    ],
    quiz: [
      { id: "comp-q1", type: 'fill-in-blank', prompt: "The Amazon is ___ river in the world. (long)", answer: "the longest", acceptedVariants: [], explanation: "Superlative ของ adjective สั้น \"long\" คือ \"the longest\" ต้องมี \"the\" นำหน้าเสมอ" },
      { id: "comp-q2", type: 'multiple-choice', prompt: "Her new apartment is ___ her old one.", options: ["more comfortable as", "more comfortable than", "the most comfortable than", "comfortabler than"], correctIndex: 1, explanation: "Comparative ของ adjective ยาวใช้ \"more + adjective + than\" ในการเปรียบเทียบ" },
      { id: "comp-q3", type: 'fill-in-blank', prompt: "Today's weather is ___ yesterday's. (bad → worse)", answer: "worse than", acceptedVariants: [], explanation: "\"Bad\" มี irregular comparative \"worse\" และต้องมี \"than\" ตามหลังเมื่อเปรียบเทียบกับสิ่งอื่น" },
      { id: "comp-q4", type: 'multiple-choice', prompt: "My brother is not ___ my father.", options: ["as tall than", "as tall as", "taller as", "the tallest as"], correctIndex: 1, explanation: "รูปแบบ \"as...as\" ใช้สำหรับเปรียบเทียบความเท่ากัน หรือใช้ \"not as...as\" สำหรับความไม่เท่ากัน" },
      { id: "comp-q5", type: 'fill-in-blank', prompt: "This is ___ difficult exam I have ever taken. (difficult)", answer: "the most difficult", acceptedVariants: [], explanation: "Superlative ของ adjective ยาวใช้ \"the most + adjective\" จึงได้ \"the most difficult\"" },
      { id: "comp-q6", type: 'multiple-choice', prompt: "The new phone is ___ the old model.", options: ["far more better than", "much better than", "more better than", "very more good than"], correctIndex: 1, explanation: "\"Much better than\" ถูกต้อง ไม่ใช่ \"more better\" เพราะ \"better\" เป็น comparative อยู่แล้ว" },
      { id: "comp-q7", type: 'fill-in-blank', prompt: "___ money you spend, ___ you will save. (the less)", answer: "The less", acceptedVariants: ["the less"], explanation: "Double comparative \"The less...the more/less...\" แสดงความสัมพันธ์ระหว่างสองสิ่ง" },
      { id: "comp-q8", type: 'multiple-choice', prompt: "Which sentence uses \"further\" correctly?", options: ["The station is further than I thought.", "She is further tall than her sister.", "This is the further problem.", "He runs further good."], correctIndex: 0, explanation: "\"Further\" เป็น comparative ของ \"far\" ใช้เปรียบเทียบระยะทาง \"further than I thought\" ถูกต้อง" }
    ]
  },
  {
    id: "grammar-nouns",
    title: "Countable & Uncountable Nouns",
    thai: "คำนามนับได้และนับไม่ได้",
    emoji: "🔢",
    level: "A2",
    summary: "Countable nouns คือนามที่นับได้ (a book, two books) ส่วน Uncountable nouns คือนามที่นับไม่ได้ ไม่มีพหูพจน์ (water, advice, information)\nคนไทยมักสับสนเพราะภาษาไทยไม่แยกประเภทนามแบบนี้",
    explanation: [
      { heading: "Countable vs Uncountable Nouns", body: "Countable nouns มีรูปเอกพจน์และพหูพจน์: a cat/two cats, a chair/three chairs\nUncountable nouns ไม่มีพหูพจน์ ไม่ใช้ a/an: water, milk, rice, advice, information, news, money, furniture, luggage, knowledge\nจุดที่คนไทยมักผิด: ใช้พหูพจน์กับ uncountable nouns เช่น ❌ \"informations\", ❌ \"advices\", ❌ \"furnitures\"" },
      { heading: "Articles and Quantifiers", body: "Countable: a/an (เอกพจน์), some/any (พหูพจน์), many, a few, few\nUncountable: some/any (ทั่วไป), much, a little, little, a great deal of\nใช้ได้ทั้งคู่: a lot of, lots of, plenty of, no\nตัวอย่าง: \"I have a few friends.\" vs \"I have a little time.\"\nจุดที่คนไทยมักผิด: ใช้ \"many\" กับ uncountable nouns เช่น ❌ \"many water\"" },
      { heading: "Quantifiers for Uncountable Nouns", body: "เราใช้ quantifier phrases เพื่อ \"นับ\" uncountable nouns:\na piece of advice/information, a cup of tea/coffee, a glass of water/juice\na slice of bread/cake, a bottle of water/wine, a bag of rice/flour\nตัวอย่าง: \"Can I give you a piece of advice?\" / \"I'd like two cups of coffee.\"\nจุดที่คนไทยมักผิด: ❌ \"a water\" หรือ ❌ \"two waters\" แทนที่จะใช้ \"a glass of water\"" }
    ],
    examples: [
      { en: "I need some advice about my career.", th: "ฉันต้องการคำแนะนำเกี่ยวกับอาชีพของฉัน" },
      { en: "There isn't much information about this topic online.", th: "ไม่มีข้อมูลมากนักเกี่ยวกับหัวข้อนี้ออนไลน์" },
      { en: "Could I have a glass of water, please?", th: "ขอน้ำหนึ่งแก้วได้ไหมครับ/ค่ะ" },
      { en: "She has very little money left after the trip.", th: "เธอมีเงินเหลือน้อยมากหลังการเดินทาง" },
      { en: "I bought a few new books at the market.", th: "ฉันซื้อหนังสือใหม่สองสามเล่มที่ตลาด" },
      { en: "The news was surprising to everyone.", th: "ข่าวนั้นทำให้ทุกคนประหลาดใจ" }
    ],
    practice: [
      { id: "cn-p1", type: 'multiple-choice', prompt: "Which noun is uncountable?", options: ["furniture", "book", "chair", "table"], correctIndex: 0, explanation: "\"Furniture\" เป็น uncountable noun ❌ \"furnitures\" ไม่ถูกต้อง ส่วน chair, book, table เป็น countable nouns" },
      { id: "cn-p2", type: 'fill-in-blank', prompt: "She gave me a ___ of advice that changed my life. (piece)", answer: "piece", acceptedVariants: [], explanation: "ใช้ \"a piece of advice\" เพราะ \"advice\" เป็น uncountable noun ไม่สามารถพูดว่า \"an advice\" ได้" },
      { id: "cn-p3", type: 'multiple-choice', prompt: "There is ___ sugar in my coffee. I need more.", options: ["a few", "a little", "many", "a lot"], correctIndex: 1, explanation: "\"Sugar\" เป็น uncountable noun ใช้ \"a little\" (มีเล็กน้อย) ไม่ใช้ \"a few\" ซึ่งใช้กับ countable nouns" },
      { id: "cn-p4", type: 'fill-in-blank', prompt: "I don't have ___ time to finish this today. (much/many)", answer: "much", acceptedVariants: [], explanation: "\"Time\" ในความหมายนี้เป็น uncountable noun ใช้ \"much\" ไม่ใช่ \"many\" ซึ่งใช้กับ countable nouns" },
      { id: "cn-p5", type: 'multiple-choice', prompt: "Which sentence is correct?", options: ["I received two good advices from my teacher.", "I received a good advice from my teacher.", "I received some good advice from my teacher.", "I received many advices from my teacher."], correctIndex: 2, explanation: "\"Advice\" เป็น uncountable noun ไม่มีพหูพจน์ ใช้ \"some advice\" สำหรับจำนวนไม่เฉพาะเจาะจง" },
      { id: "cn-p6", type: 'fill-in-blank', prompt: "Could I have ___ cup of tea, please? (a/an)", answer: "a", acceptedVariants: [], explanation: "ใช้ \"a cup of tea\" เพราะ \"cup\" เป็น countable noun ที่ขึ้นต้นด้วยเสียงพยัญชนะ จึงใช้ \"a\"" },
      { id: "cn-p7", type: 'multiple-choice', prompt: "Are there ___ chairs in the meeting room?", options: ["much", "a little", "a few of", "any"], correctIndex: 3, explanation: "\"Any\" ใช้ได้กับทั้ง countable และ uncountable nouns ในประโยคคำถามและปฏิเสธ" },
      { id: "cn-p8", type: 'fill-in-blank', prompt: "The news ___ very shocking this morning. (is/are)", answer: "is", acceptedVariants: [], explanation: "\"News\" เป็น uncountable noun จึงใช้กริยาเอกพจน์ \"is\" แม้จะลงท้ายด้วย -s ก็ตาม" }
    ],
    quiz: [
      { id: "cn-q1", type: 'multiple-choice', prompt: "Which sentence has a mistake?", options: ["She gave me two informations.", "I need some information.", "Do you have any information?", "There is no information available."], correctIndex: 0, explanation: "\"Information\" เป็น uncountable noun ไม่มีพหูพจน์ ❌ \"two informations\" ไม่ถูกต้อง" },
      { id: "cn-q2", type: 'fill-in-blank', prompt: "I only have ___ friends here, but they are very kind. (a few/a little)", answer: "a few", acceptedVariants: [], explanation: "\"Friends\" เป็น countable noun ใช้ \"a few\" (จำนวนน้อย) ส่วน \"a little\" ใช้กับ uncountable nouns" },
      { id: "cn-q3", type: 'multiple-choice', prompt: "How ___ luggage did you bring on the trip?", options: ["many", "much", "few", "a number of"], correctIndex: 1, explanation: "\"Luggage\" เป็น uncountable noun ใช้ \"much\" ไม่ใช่ \"many\" ❌ \"how many luggage\" ไม่ถูกต้อง" },
      { id: "cn-q4", type: 'fill-in-blank', prompt: "She has ___ knowledge of Thai history. (a lot of)", answer: "a lot of", acceptedVariants: ["lots of"], explanation: "\"Knowledge\" เป็น uncountable noun ใช้ \"a lot of\" หรือ \"lots of\" ได้กับทั้ง countable และ uncountable" },
      { id: "cn-q5", type: 'multiple-choice', prompt: "Which quantifier can be used with BOTH countable and uncountable nouns?", options: ["many", "a few", "a lot of", "a number of"], correctIndex: 2, explanation: "\"A lot of\" ใช้ได้กับทั้ง countable และ uncountable nouns ส่วน \"many\" และ \"a few\" ใช้เฉพาะ countable" },
      { id: "cn-q6", type: 'fill-in-blank', prompt: "I'd like two ___ of bread, please. (slice)", answer: "slices", acceptedVariants: [], explanation: "ใช้ \"slices of bread\" เพราะ \"bread\" เป็น uncountable noun ต้องใช้ quantifier phrase และ \"slices\" เป็นพหูพจน์" },
      { id: "cn-q7", type: 'multiple-choice', prompt: "There isn't ___ milk left in the fridge.", options: ["many", "a few", "some", "any"], correctIndex: 3, explanation: "ในประโยคปฏิเสธ ใช้ \"any\" กับ uncountable nouns: \"There isn't any milk.\" ส่วน \"some\" ใช้ในประโยคบอกเล่า" },
      { id: "cn-q8", type: 'multiple-choice', prompt: "My boss gave me ___ useful ___ yesterday.", options: ["some — advice", "some — advices", "a — advice", "many — advice"], correctIndex: 0, explanation: "\"Advice\" เป็น uncountable noun ใช้ \"some advice\" (ไม่มีพหูพจน์ และไม่ใช้ \"a\" นำหน้า)" }
    ]
  },
  {
    id: "grammar-future-forms",
    title: "Future Forms",
    thai: "รูปแบบอนาคต",
    emoji: "🔮",
    level: "B1",
    summary: "ภาษาอังกฤษมีหลายวิธีในการพูดถึงอนาคต เช่น will, going to, และ Present Continuous แต่ละแบบมีความหมายและการใช้งานที่แตกต่างกัน\nจุดที่คนไทยมักสับสนคือการเลือกใช้ will กับ going to ให้ถูกต้องตามสถานการณ์",
    explanation: [
      { heading: "Will vs Going To", body: "ใช้ \"will\" เมื่อตัดสินใจทันทีหรือทำนายโดยไม่มีหลักฐาน เช่น \"I'll get the door.\" (ตัดสินใจตอนนั้น)\nใช้ \"going to\" เมื่อมีแผนล่วงหน้าหรือมีหลักฐานชัดเจน เช่น \"Look at those clouds — it's going to rain.\" (เห็นหลักฐานจากปัจจุบัน)\nจุดที่คนไทยมักผิด: ใช้ will แทน going to เสมอ เพราะในภาษาไทยใช้ \"จะ\" ทั้งสองกรณี" },
      { heading: "Present Continuous & Present Simple for Future", body: "ใช้ Present Continuous สำหรับนัดหมายหรือการจัดการที่ตกลงแน่นอนแล้ว เช่น \"I'm meeting Tom at 6.\" (นัดไว้แล้ว)\nใช้ Present Simple สำหรับตารางเวลาหรือตารางเดินรถที่เป็นทางการ เช่น \"The train leaves at 8 am.\"\nจุดที่คนไทยมักผิด: ลืมใช้ Present Continuous กับนัดหมายส่วนตัว แล้วใช้ will แทน" },
      { heading: "Future Perfect & Future Continuous", body: "ใช้ Future Perfect (will have + V3) เพื่อพูดถึงสิ่งที่จะเสร็จสิ้นก่อนเวลาหนึ่งในอนาคต เช่น \"By Friday, I will have finished the report.\"\nใช้ Future Continuous (will be + V-ing) เพื่อพูดถึงสิ่งที่กำลังเกิดขึ้นในช่วงเวลาหนึ่งในอนาคต เช่น \"This time tomorrow, I will be flying to London.\"\nจุดที่คนไทยมักผิด: ละเว้น have ใน Future Perfect หรือใช้ will be + V3 แทน will have + V3" }
    ],
    examples: [
      { en: "I think it will rain tomorrow.", th: "ฉันคิดว่าพรุ่งนี้จะฝนตก (ทำนายทั่วไป)" },
      { en: "I'm going to visit my parents this weekend.", th: "ฉันจะไปเยี่ยมพ่อแม่สุดสัปดาห์นี้ (วางแผนไว้แล้ว)" },
      { en: "We're having a meeting at 10 tomorrow.", th: "เรามีประชุมตอน 10 โมงพรุ่งนี้ (นัดหมายแน่นอน)" },
      { en: "The concert starts at 7 pm.", th: "คอนเสิร์ตเริ่มตอนสองทุ่ม (ตารางเวลาอย่างเป็นทางการ)" },
      { en: "By next year, she will have graduated.", th: "ภายในปีหน้า เธอจะเรียนจบแล้ว (เสร็จสิ้นก่อนเวลา)" },
      { en: "At this time next week, I will be lying on the beach.", th: "เวลานี้สัปดาห์หน้า ฉันจะกำลังนอนอยู่บนชายหาด (กำลังทำในช่วงเวลา)" }
    ],
    practice: [
      { id: "fut-p1", type: 'fill-in-blank', prompt: "A: The phone is ringing! B: I ___ get it! (spontaneous decision)", answer: "will get", acceptedVariants: ["'ll get"], explanation: "ใช้ will เมื่อตัดสินใจทันทีโดยไม่ได้วางแผนไว้ก่อน" },
      { id: "fut-p2", type: 'multiple-choice', prompt: "Which sentence describes a fixed arrangement already made?", options: ["I am seeing the doctor at 3 p.m. tomorrow.", "I will see the doctor tomorrow.", "I go to see the doctor tomorrow.", "I see the doctor tomorrow."], correctIndex: 0, explanation: "Present Continuous ใช้กับนัดหมายที่จัดการแน่นอนแล้ว (fixed arrangement) → am seeing" },
      { id: "fut-p3", type: 'fill-in-blank', prompt: "Look at the sky — it ___ snow soon. (evidence from present)", answer: "is going to", acceptedVariants: ["'s going to"], explanation: "ใช้ going to เมื่อมีหลักฐานในปัจจุบันชี้ให้เห็นว่าจะเกิดอะไรขึ้น" },
      { id: "fut-p4", type: 'multiple-choice', prompt: "The flight ___ at 6:45 am according to the schedule.", options: ["will depart", "is departing", "departs", "is going to depart"], correctIndex: 2, explanation: "Present Simple ใช้กับตารางเวลาทางการ เช่น เที่ยวบิน รถไฟ" },
      { id: "fut-p5", type: 'fill-in-blank', prompt: "By the time you arrive, we ___ dinner already. (will have + V3)", answer: "will have finished", acceptedVariants: ["'ll have finished"], explanation: "Future Perfect แสดงถึงเหตุการณ์ที่จะเสร็จสิ้นก่อนเวลาหนึ่งในอนาคต" },
      { id: "fut-p6", type: 'multiple-choice', prompt: "At 8 pm tonight, I ___ my favourite TV show.", options: ["watch", "will watch", "will have watched", "will be watching"], correctIndex: 3, explanation: "Future Continuous แสดงถึงกิจกรรมที่กำลังดำเนินอยู่ในช่วงเวลาหนึ่งในอนาคต" },
      { id: "fut-p7", type: 'fill-in-blank', prompt: "She ___ to study medicine when she grows up. (prior plan)", answer: "is going to", acceptedVariants: ["'s going to"], explanation: "ใช้ going to เมื่อมีแผนที่ตั้งใจไว้ล่วงหน้าแล้ว" },
      { id: "fut-p8", type: 'multiple-choice', prompt: "By 2030, scientists ___ a cure for that disease.", options: ["will have found", "will find", "are finding", "find"], correctIndex: 0, explanation: "Future Perfect ใช้กับสิ่งที่จะสำเร็จภายในเวลาที่กำหนดในอนาคต" }
    ],
    quiz: [
      { id: "fut-q1", type: 'multiple-choice', prompt: "Your friend says: \"I'm really cold.\" You decide to help right now. You say:", options: ["I'm going to close the window.", "I will close the window.", "I close the window.", "I am closing the window."], correctIndex: 1, explanation: "will ใช้กับการตัดสินใจทันทีในขณะพูด ไม่ใช่แผนล่วงหน้า" },
      { id: "fut-q2", type: 'fill-in-blank', prompt: "She already bought the tickets. She ___ to the concert on Friday. (prior plan)", answer: "is going", acceptedVariants: ["is going to go"], explanation: "ซื้อตั๋วแล้ว หมายความว่ามีแผนล่วงหน้าชัดเจน ใช้ going to" },
      { id: "fut-q3", type: 'multiple-choice', prompt: "Which sentence uses Future Continuous correctly?", options: ["This time tomorrow, I will have worked.", "This time tomorrow, I work.", "This time tomorrow, I am working.", "This time tomorrow, I will be working."], correctIndex: 3, explanation: "Future Continuous (will be + V-ing) บอกว่ากำลังทำอะไรอยู่ในช่วงเวลาหนึ่งในอนาคต" },
      { id: "fut-q4", type: 'fill-in-blank', prompt: "Don't call me at 9 pm — I ___ the kids to bed then. (future continuous)", answer: "will be putting", acceptedVariants: ["'ll be putting"], explanation: "Future Continuous แสดงว่ากำลังทำกิจกรรมนั้นอยู่ในช่วงเวลาที่กำหนด" },
      { id: "fut-q5", type: 'multiple-choice', prompt: "The museum ___ at 9 and ___ at 5 every day. (timetable)", options: ["opens / closes", "will open / will close", "is opening / is closing", "going to open / going to close"], correctIndex: 0, explanation: "ตารางเวลาทางการใช้ Present Simple ไม่ใช่ will หรือ going to" },
      { id: "fut-q6", type: 'fill-in-blank', prompt: "By the time he retires, he ___ for the company for 40 years. (future perfect)", answer: "will have worked", acceptedVariants: ["'ll have worked"], explanation: "Future Perfect ใช้เมื่อต้องการบอกว่าจะทำมานานแค่ไหนแล้วถึงเวลาที่กำหนด" },
      { id: "fut-q7", type: 'multiple-choice', prompt: "I ___ my boss tomorrow morning — we arranged it last week.", options: ["will meet", "am going to meet", "am meeting", "meet"], correctIndex: 2, explanation: "Present Continuous ใช้กับนัดหมายที่จัดการแน่นอนล่วงหน้าแล้ว" },
      { id: "fut-q8", type: 'multiple-choice', prompt: "Careful! You ___ drop that vase! (evidence from present situation)", options: ["will", "are going to", "will be", "will have"], correctIndex: 1, explanation: "ใช้ going to เมื่อสถานการณ์ปัจจุบันบ่งบอกชัดว่าจะเกิดอะไรขึ้นทันที" }
    ]
  },
  {
    id: "grammar-word-order",
    title: "Word Order",
    thai: "ลำดับคำในประโยค",
    emoji: "🔢",
    level: "A2",
    summary: "ภาษาอังกฤษมีกฎลำดับคำที่เข้มงวดกว่าภาษาไทย โดยเฉพาะตำแหน่งของ adverb, adjective และการใช้ there is/are\nคนไทยมักเรียงคำตามแบบภาษาไทย ซึ่งทำให้ประโยคภาษาอังกฤษผิดไวยากรณ์",
    explanation: [
      { heading: "Basic SVO & Adverb Placement", body: "ประโยคภาษาอังกฤษพื้นฐาน: Subject + Verb + Object (SVO) เช่น \"She eats rice.\"\nFrequency adverbs (always/usually/often/sometimes/never) วางหน้า main verb แต่หลัง verb \"to be\" เช่น \"I always drink coffee.\" / \"She is always late.\"\nจุดที่คนไทยมักผิด: วาง adverb ไว้ท้ายประโยค เช่น \"I drink coffee always.\" ซึ่งผิด" },
      { heading: "Multiple Adverbs & Time/Place", body: "เมื่อมีหลาย adverb ในประโยคเดียว ลำดับที่ถูกต้องคือ: Manner (อย่างไร) → Place (ที่ไหน) → Time (เมื่อไหร่)\nเช่น \"She sang beautifully at the concert last night.\" (manner > place > time)\nTime และ Place adverbs มักวางท้ายประโยค เช่น \"I went to school yesterday.\"\nจุดที่คนไทยมักผิด: วาง time adverb ไว้กลางประโยค เช่น \"I yesterday went to school.\"" },
      { heading: "Adjective Order & Special Structures", body: "เมื่อใช้ adjective หลายตัวก่อน noun ลำดับที่ถูกต้องคือ: Opinion → Size → Age → Colour → Origin → Noun\nเช่น \"a beautiful small old red Italian car\" ไม่ใช่ \"a red Italian old small beautiful car\"\nโครงสร้าง \"there is/there are\" ใช้แนะนำว่ามีบางสิ่งอยู่ เช่น \"There is a cat in the garden.\"\nโครงสร้าง \"It is + adj + to-infinitive\" เช่น \"It is important to study hard.\"\nจุดที่คนไทยมักผิด: พูดว่า \"Is important study hard.\" โดยละ It" }
    ],
    examples: [
      { en: "She always arrives on time.", th: "เธอมาตรงเวลาเสมอ (frequency adverb หน้า main verb)" },
      { en: "He is never late for class.", th: "เขาไม่เคยมาสายเรียน (frequency adverb หลัง be)" },
      { en: "They drove slowly through the town yesterday.", th: "เมื่อวานพวกเขาขับรถช้าๆ ผ่านในตัวเมือง (manner > place > time)" },
      { en: "She bought a lovely little old French clock.", th: "เธอซื้อนาฬิกาฝรั่งเศสโบราณตัวเล็กน่ารัก (opinion > size > age > origin)" },
      { en: "There are three students in the room.", th: "มีนักเรียนสามคนอยู่ในห้อง" },
      { en: "It is difficult to learn a new language.", th: "การเรียนภาษาใหม่เป็นเรื่องยาก" }
    ],
    practice: [
      { id: "wo-p1", type: 'multiple-choice', prompt: "Choose the sentence with correct adverb placement:", options: ["I drink always coffee in the morning.", "I always drink coffee in the morning.", "Always I drink coffee in the morning.", "I drink coffee always in the morning."], correctIndex: 1, explanation: "Frequency adverb \"always\" วางหน้า main verb (drink) ไม่ใช่ท้ายประโยคหรือต้นประโยค" },
      { id: "wo-p2", type: 'fill-in-blank', prompt: "Reorder: (is / late / often / she) — She ___.", answer: "is often late", acceptedVariants: [], explanation: "หลัง verb \"be\" ให้วาง frequency adverb ระหว่าง is กับ adjective ที่ตามมา" },
      { id: "wo-p3", type: 'multiple-choice', prompt: "Which word order for multiple adverbs is correct?", options: ["She spoke at the meeting yesterday clearly.", "She spoke clearly yesterday at the meeting.", "She spoke clearly at the meeting yesterday.", "She clearly spoke yesterday at the meeting."], correctIndex: 2, explanation: "ลำดับที่ถูกต้อง: manner (clearly) → place (at the meeting) → time (yesterday)" },
      { id: "wo-p4", type: 'fill-in-blank', prompt: "___ a big park near my house. (There is/are)", answer: "There is", acceptedVariants: ["There's"], explanation: "ใช้ There is กับ singular noun (a park) เพื่อบอกว่ามีสิ่งนั้นอยู่" },
      { id: "wo-p5", type: 'multiple-choice', prompt: "Which sentence has the correct adjective order?", options: ["a German old big brown dog", "a big old brown German dog", "a brown big old German dog", "an old big German brown dog"], correctIndex: 1, explanation: "ลำดับ adjective ที่ถูก: size (big) → age (old) → colour (brown) → origin (German)" },
      { id: "wo-p6", type: 'fill-in-blank', prompt: "___ easy to make mistakes when you are tired. (It is)", answer: "It is", acceptedVariants: ["It's"], explanation: "ใช้โครงสร้าง \"It is + adjective + to-infinitive\" ไม่ใช่ \"Is easy to...\"" },
      { id: "wo-p7", type: 'multiple-choice', prompt: "Where should \"yesterday\" go? \"I went ___ to the market ___.\"", options: ["yesterday / (nothing)", "(nothing) / yesterday", "Both positions are correct.", "Neither — it goes before \"went\"."], correctIndex: 1, explanation: "Time adverb \"yesterday\" วางท้ายประโยคเป็นปกติ" },
      { id: "wo-p8", type: 'fill-in-blank', prompt: "He ___ reads the newspaper before breakfast. (usually)", answer: "usually reads", acceptedVariants: [], explanation: "วาง \"usually\" หน้า main verb (reads) เสมอ" }
    ],
    quiz: [
      { id: "wo-q1", type: 'multiple-choice', prompt: "Which sentence is INCORRECT?", options: ["She never eats meat.", "He is sometimes tired after work.", "They often go usually to the gym.", "We always have dinner together."], correctIndex: 2, explanation: "ไม่สามารถใช้ frequency adverbs สองตัว (often และ usually) ในประโยคเดียวกันแบบนี้" },
      { id: "wo-q2", type: 'fill-in-blank', prompt: "___ five chairs around the table. (There are)", answer: "There are", acceptedVariants: [], explanation: "ใช้ There are กับ plural noun (five chairs)" },
      { id: "wo-q3", type: 'multiple-choice', prompt: "Which adjective order is correct for \"a table that is round, small, and wooden\"?", options: ["a wooden round small table", "a round wooden small table", "a small round wooden table", "a round small wooden table"], correctIndex: 2, explanation: "ลำดับที่ถูก: size (small) → shape/opinion (round) → material (wooden)" },
      { id: "wo-q4", type: 'fill-in-blank', prompt: "___ important to drink water every day. (It is)", answer: "It is", acceptedVariants: ["It's"], explanation: "ต้องใช้ \"It\" เป็น subject เสมอในโครงสร้างนี้ ไม่ใช่ \"Is important\"" },
      { id: "wo-q5", type: 'multiple-choice', prompt: "Correct the word order: \"She danced at the party beautifully last night.\"", options: ["She danced beautifully at the party last night.", "She beautifully danced at the party last night.", "Last night she danced beautifully at the party.", "A and C are both correct."], correctIndex: 3, explanation: "ทั้ง A และ C ถูกต้อง — time adverb วางท้ายหรือต้นประโยคก็ได้ แต่ manner ต้องอยู่ก่อน place" },
      { id: "wo-q6", type: 'fill-in-blank', prompt: "My brother ___ watches TV after dinner. (never)", answer: "never watches", acceptedVariants: [], explanation: "Frequency adverb \"never\" วางหน้า main verb" },
      { id: "wo-q7", type: 'multiple-choice', prompt: "Which sentence uses \"there is/there are\" correctly?", options: ["There are a lot of information on this page.", "There is a lot of information on this page.", "There is many books on the shelf.", "There are a new student in class."], correctIndex: 1, explanation: "\"information\" เป็น uncountable noun จึงใช้ \"there is\" ไม่ใช่ \"there are\"" },
      { id: "wo-q8", type: 'multiple-choice', prompt: "I ___ my homework before school.", options: ["do always", "do always do", "always do", "always doing"], correctIndex: 2, explanation: "Frequency adverb วางหน้า main verb: \"always do\" ไม่ใช่ \"do always\"" }
    ]
  },
  {
    id: "grammar-discourse-markers",
    title: "Discourse Markers",
    thai: "คำเชื่อมความในการเขียนและพูด",
    emoji: "🔗",
    level: "C1",
    summary: "Discourse markers คือคำหรือวลีที่ใช้เชื่อมประโยคและย่อหน้าให้มีความต่อเนื่องและชัดเจนในการเขียนเชิงวิชาการหรือการพูดระดับสูง\nการเลือกใช้ discourse marker ที่ถูกต้องทำให้ข้อความมีความเป็นมืออาชีพและน่าอ่านมากขึ้น",
    explanation: [
      { heading: "Adding Ideas & Contrasting", body: "เพิ่มความคิด: \"Furthermore\", \"In addition\", \"Moreover\" — ใช้เพิ่มจุดที่เสริมหรือสำคัญกว่า\nตัดกัน/ขัดแย้ง: \"However\", \"On the other hand\", \"Nevertheless\", \"Yet\" — ใช้แสดงความขัดแย้งหรือมุมมองอีกด้าน\nจุดที่คนไทยมักผิด: ใช้ \"But\" ซ้ำๆ แทน however/nevertheless ซึ่งดูไม่เป็นทางการในงานเขียน และมักลืมใส่เครื่องหมายจุลภาค (comma) หลัง discourse marker" },
      { heading: "Examples, Results & Conceding", body: "ยกตัวอย่าง: \"For instance\", \"For example\", \"Such as\", \"Namely\" — ใช้ยกตัวอย่างประกอบ\nผลลัพธ์: \"Therefore\", \"Consequently\", \"As a result\", \"Hence\" — ใช้แสดงผลที่เกิดจากเหตุ\nยอมรับบางส่วน (conceding): \"Admittedly\", \"Granted\", \"Even though\" — ใช้ยอมรับจุดอ่อนของตนเองก่อนแย้งกลับ\nจุดที่คนไทยมักผิด: สับสนระหว่าง \"such as\" (ตามด้วย noun) กับ \"for example\" (ตามด้วย clause หรือ example ที่สมบูรณ์)" },
      { heading: "Summarising & Formal Register", body: "สรุป: \"In conclusion\", \"To sum up\", \"Overall\" — ใช้ท้ายเรื่องเพื่อสรุปใจความสำคัญ\nควรเลือก discourse marker ให้เหมาะกับ register: งานเขียนทางการใช้ \"Furthermore/Nevertheless\" ส่วนการพูดทั่วไปใช้ \"Also/But/So\"\nจุดที่คนไทยมักผิด: ใช้ \"In conclusion\" ตามด้วยข้อมูลใหม่แทนที่จะสรุปสิ่งที่พูดไปแล้ว" }
    ],
    examples: [
      { en: "The new policy reduces costs. Furthermore, it improves efficiency.", th: "นโยบายใหม่ช่วยลดต้นทุน นอกจากนี้ยังช่วยเพิ่มประสิทธิภาพอีกด้วย" },
      { en: "The plan seemed promising. However, several problems emerged.", th: "แผนดูเหมือนจะดี อย่างไรก็ตาม ปัญหาหลายอย่างก็เกิดขึ้น" },
      { en: "Many countries, such as Japan and Germany, invest heavily in education.", th: "หลายประเทศ เช่น ญี่ปุ่นและเยอรมนี ลงทุนด้านการศึกษาอย่างมาก" },
      { en: "She didn't study. As a result, she failed the exam.", th: "เธอไม่ได้เรียน ส่งผลให้เธอสอบตก" },
      { en: "Admittedly, the solution is expensive; nevertheless, it is the most effective option.", th: "ยอมรับว่าวิธีแก้ปัญหานี้มีราคาแพง แต่ถึงกระนั้นก็ยังเป็นทางเลือกที่มีประสิทธิภาพที่สุด" },
      { en: "To sum up, regular exercise has clear benefits for both body and mind.", th: "สรุปแล้ว การออกกำลังกายสม่ำเสมอมีประโยชน์ชัดเจนทั้งต่อร่างกายและจิตใจ" }
    ],
    practice: [
      { id: "dm-p1", type: 'multiple-choice', prompt: "Choose the correct discourse marker: \"The exam was difficult. ___, most students passed.\"", options: ["Therefore", "Furthermore", "Nevertheless", "For instance"], correctIndex: 2, explanation: "\"Nevertheless\" ใช้เพื่อแสดงว่าแม้มีอุปสรรค แต่ผลลัพธ์ก็ยังเกิดขึ้นในทิศทางที่ไม่คาดคิด" },
      { id: "dm-p2", type: 'fill-in-blank', prompt: "The company increased prices. ___, sales dropped significantly. (result)", answer: "As a result", acceptedVariants: ["Consequently", "Therefore", "Hence"], explanation: "ใช้ \"As a result\" หรือ \"Consequently\" เพื่อแสดงผลที่เกิดจากเหตุที่กล่าวถึงก่อนหน้า" },
      { id: "dm-p3", type: 'multiple-choice', prompt: "Which word CANNOT be used to give examples?", options: ["For instance", "Such as", "Namely", "Nevertheless"], correctIndex: 3, explanation: "\"Nevertheless\" ใช้แสดงการขัดแย้ง ไม่ใช่การยกตัวอย่าง" },
      { id: "dm-p4", type: 'fill-in-blank', prompt: "The results were poor. ___, the team learned a great deal from the experience. (conceding/contrasting)", answer: "However", acceptedVariants: ["Nevertheless", "Yet", "On the other hand"], explanation: "ใช้ \"However\" หรือ \"Nevertheless\" เพื่อแสดงมุมมองที่ขัดแย้งกับประโยคก่อนหน้า" },
      { id: "dm-p5", type: 'multiple-choice', prompt: "The new law protects consumers. ___, it creates jobs in the inspection sector.", options: ["However", "In addition", "As a result", "Admittedly"], correctIndex: 1, explanation: "\"In addition\" ใช้เพิ่มข้อมูลหรือประเด็นใหม่ที่เสริมกับประเด็นก่อนหน้า" },
      { id: "dm-p6", type: 'fill-in-blank', prompt: "Several major cities, ___ Bangkok, Singapore, and Tokyo, face severe traffic congestion.", answer: "such as", acceptedVariants: ["for example", "for instance", "namely"], explanation: "\"Such as\" ตามด้วย noun phrase เพื่อยกตัวอย่าง" },
      { id: "dm-p7", type: 'multiple-choice', prompt: "Which sentence uses a summarising marker correctly?", options: ["In conclusion, another point worth mentioning is climate change.", "In conclusion, the evidence strongly supports the need for immediate action.", "In conclusion, furthermore, the situation is complex.", "In conclusion, however, there are other views."], correctIndex: 1, explanation: "\"In conclusion\" ควรตามด้วยการสรุปสิ่งที่พูดไปแล้ว ไม่ใช่ข้อมูลใหม่" },
      { id: "dm-p8", type: 'fill-in-blank', prompt: "___, the author acknowledges flaws in the study. (conceding)", answer: "Admittedly", acceptedVariants: ["Granted"], explanation: "\"Admittedly\" ใช้เพื่อยอมรับจุดอ่อนหรือข้อโต้แย้งก่อนแล้วค่อยตอบโต้" }
    ],
    quiz: [
      { id: "dm-q1", type: 'multiple-choice', prompt: "\"The treatment is painful. ___, it is the most effective option available.\"", options: ["Therefore", "For example", "Nevertheless", "In addition"], correctIndex: 2, explanation: "\"Nevertheless\" แสดงว่าแม้จะมีข้อเสีย แต่ยังคงเลือกทำเพราะข้อดีมากกว่า" },
      { id: "dm-q2", type: 'fill-in-blank', prompt: "She works two jobs. ___, she volunteers at the weekend. (adding)", answer: "Furthermore", acceptedVariants: ["Moreover", "In addition"], explanation: "\"Furthermore\" หรือ \"Moreover\" ใช้เพิ่มข้อมูลที่มีน้ำหนักหรือสำคัญเพิ่มขึ้น" },
      { id: "dm-q3", type: 'multiple-choice', prompt: "Which marker best shows a cause-and-effect relationship?", options: ["On the other hand", "Consequently", "Granted", "To sum up"], correctIndex: 1, explanation: "\"Consequently\" แสดงผลที่เกิดจากเหตุที่กล่าวถึงก่อนหน้า" },
      { id: "dm-q4", type: 'fill-in-blank', prompt: "The medicine has side effects. ___, it is widely prescribed. (contrast)", answer: "However", acceptedVariants: ["Nevertheless", "Yet", "On the other hand"], explanation: "ใช้ \"However\" หรือ \"Yet\" เพื่อแสดงความขัดแย้งกับประโยคก่อนหน้า" },
      { id: "dm-q5", type: 'multiple-choice', prompt: "Which sentence uses \"such as\" correctly?", options: ["Such as, she works very hard.", "Renewable energy sources, such as solar and wind, are growing rapidly.", "She passed the exam. Such as, she studied every night.", "The results were good, such as the team celebrated."], correctIndex: 1, explanation: "\"Such as\" ต้องตามด้วย noun หรือ noun phrase เพื่อยกตัวอย่าง" },
      { id: "dm-q6", type: 'fill-in-blank', prompt: "___, online learning is not suitable for every learner. (conceding a counterpoint)", answer: "Admittedly", acceptedVariants: ["Granted"], explanation: "\"Admittedly\" ยอมรับว่ามีข้อโต้แย้งที่สมเหตุสมผลก่อนตอบโต้" },
      { id: "dm-q7", type: 'multiple-choice', prompt: "Which is the most appropriate way to begin a conclusion in a formal essay?", options: ["So, in the end, things are complicated.", "In conclusion, this essay has examined three key arguments.", "To conclude, but there are more points.", "Overall, also the situation needs more study."], correctIndex: 1, explanation: "\"In conclusion\" ตามด้วยการสรุปเนื้อหาหลักที่กล่าวถึงไปแล้ว" },
      { id: "dm-q8", type: 'fill-in-blank', prompt: "Deforestation harms biodiversity. ___, it contributes to climate change. (adding)", answer: "Moreover", acceptedVariants: ["Furthermore", "In addition"], explanation: "\"Moreover\" ใช้เพิ่มประเด็นที่มีน้ำหนักมากยิ่งขึ้น" }
    ]
  },
  {
    id: "grammar-inversion",
    title: "Inversion & Emphasis",
    thai: "การสลับลำดับประธานกริยาเพื่อเน้นความ",
    emoji: "🔁",
    level: "C1",
    summary: "Inversion คือการนำ auxiliary verb มาไว้หน้า subject เพื่อเน้นความสำคัญหรือสร้างความเป็นทางการ มักพบในภาษาเขียนและการพูดระดับสูง\nรูปแบบนี้ไม่มีในภาษาไทย จึงเป็นเรื่องที่คนไทยต้องฝึกเป็นพิเศษ",
    explanation: [
      { heading: "Negative Adverbial Inversion", body: "เมื่อนำ negative adverbial มาต้นประโยค จะต้องสลับ auxiliary verb มาหน้า subject\nเช่น: \"Never have I seen such a thing.\" (ปกติ: \"I have never seen such a thing.\")\n\"Rarely does she complain.\" / \"Not only did he arrive late, but he also forgot the documents.\"\nจุดที่คนไทยมักผิด: ลืมสลับ verb เช่น พูดว่า \"Never I have seen...\" ซึ่งผิด" },
      { heading: "Cleft Sentences & Emphatic Do", body: "Cleft sentences ใช้เน้นส่วนใดส่วนหนึ่งของประโยค:\n\"It was John who broke the window.\" (เน้นว่า John เป็นคนทำ)\n\"What I really need is more time.\" (เน้นความต้องการ)\nEmphatic do/does/did ใช้ยืนยันหรือแย้งอย่างแน่วแน่:\n\"I DO understand your concern.\" / \"She DID warn you.\"\nจุดที่คนไทยมักผิด: ใช้ it was + noun + that แทน who เมื่อ noun นั้นเป็นคน" },
      { heading: "Fronting & So/Such Inversion", body: "Fronting คือการนำส่วนขยายมาต้นประโยคเพื่อเน้น:\n\"Beautiful though it was, the painting was too expensive.\" (ปกติ: \"Although it was beautiful...\")\n\"Tired as she was, she continued working.\"\nSo/Such inversion: \"So difficult was the exam that many students failed.\" (ปกติ: \"The exam was so difficult that...\")\n\"Such was the noise that no one could sleep.\"\nจุดที่คนไทยมักผิด: ใช้ \"Although beautiful though\" ซ้ำซ้อน หรือลืมสลับ verb หลัง so/such" }
    ],
    examples: [
      { en: "Never have I eaten such delicious food.", th: "ฉันไม่เคยกินอาหารอร่อยขนาดนี้เลย (เน้นความไม่เคย)" },
      { en: "Rarely does he ask for help.", th: "เขาแทบไม่เคยขอความช่วยเหลือเลย" },
      { en: "It was the manager who approved the budget.", th: "ผู้จัดการคือคนที่อนุมัติงบประมาณ (cleft — เน้นว่าใคร)" },
      { en: "What surprised me most was his reaction.", th: "สิ่งที่ทำให้ฉันประหลาดใจที่สุดคือปฏิกิริยาของเขา (cleft — เน้นสิ่ง)" },
      { en: "I DO care about the outcome.", th: "ฉันใส่ใจผลลัพธ์จริงๆ (emphatic do เพื่อยืนยันหรือแย้ง)" },
      { en: "So exhausted was she that she fell asleep immediately.", th: "เธอเหนื่อยมากจนหลับทันที (so + adj + inversion)" }
    ],
    practice: [
      { id: "inv-p1", type: 'multiple-choice', prompt: "Choose the correctly inverted sentence:", options: ["Never I have heard such news.", "Never have I heard such news.", "Never heard I have such news.", "Have I never heard such news."], correctIndex: 1, explanation: "หลัง \"Never\" ที่ต้นประโยค ต้องสลับ auxiliary (have) มาหน้า subject (I)" },
      { id: "inv-p2", type: 'fill-in-blank', prompt: "___ does he visit his hometown. (Rarely — inversion)", answer: "Rarely does", acceptedVariants: [], explanation: "หลัง \"Rarely\" ต้องใช้ does + subject (inversion) เพราะนำ negative adverbial ขึ้นต้น" },
      { id: "inv-p3", type: 'multiple-choice', prompt: "Complete the cleft sentence: \"___ the CEO who signed the contract.\"", options: ["It was", "It is being", "That was", "What was"], correctIndex: 0, explanation: "\"It was + noun + who\" ใช้เน้น subject ที่เป็นคน" },
      { id: "inv-p4", type: 'fill-in-blank', prompt: "___ I need is more practice. (What — cleft)", answer: "What", acceptedVariants: [], explanation: "\"What I need is...\" ใช้เน้นว่าต้องการอะไร โดย what = the thing that" },
      { id: "inv-p5", type: 'multiple-choice', prompt: "Which sentence uses emphatic \"do\" correctly?", options: ["She does did understand.", "She does understand the problem.", "She do understand the problem.", "She understanding does the problem."], correctIndex: 1, explanation: "Emphatic do: ใช้ does/do/did + base verb ธรรมดา เพื่อยืนยันหรือเน้นความจริง" },
      { id: "inv-p6", type: 'fill-in-blank', prompt: "So loud ___ the music that the neighbours complained. (was — inversion)", answer: "was", acceptedVariants: [], explanation: "\"So + adj + was + subject + that\" — verb (was) มาก่อน subject ในโครงสร้างนี้" },
      { id: "inv-p7", type: 'multiple-choice', prompt: "\"___ only did he forget her birthday, but he also missed their anniversary.\"", options: ["Not", "Never", "Hardly", "Rarely"], correctIndex: 0, explanation: "\"Not only... but also\" เป็น paired conjunction ใช้เพิ่มข้อมูลที่แย่ยิ่งขึ้น" },
      { id: "inv-p8", type: 'fill-in-blank', prompt: "Tired ___ she was, she stayed up to finish the report. (as — fronting)", answer: "as", acceptedVariants: [], explanation: "\"Tired as she was\" = \"Although she was tired\" — โครงสร้าง fronting ที่ทางการ" }
    ],
    quiz: [
      { id: "inv-q1", type: 'multiple-choice', prompt: "Rewrite with inversion: \"I had barely sat down when the phone rang.\"", options: ["Barely I had sat down when the phone rang.", "Barely had I sat down when the phone rang.", "Had barely I sat down when the phone rang.", "Sat down barely I had when the phone rang."], correctIndex: 1, explanation: "หลัง \"Barely\" ที่ต้นประโยค auxiliary (had) ต้องมาก่อน subject (I)" },
      { id: "inv-q2", type: 'fill-in-blank', prompt: "It was the new software ___ caused the system crash. (that/which/who)", answer: "that", acceptedVariants: ["which"], explanation: "\"It was + thing + that/which\" ใช้เน้น subject ที่ไม่ใช่คน" },
      { id: "inv-q3", type: 'multiple-choice', prompt: "Which sentence correctly uses \"such\" inversion?", options: ["Such the chaos was that no one could think clearly.", "Such was the chaos that no one could think clearly.", "So such was the chaos that no one could think clearly.", "Such the chaos that no one could think clearly."], correctIndex: 1, explanation: "\"Such was + noun + that\" — verb (was) มาก่อน noun ในโครงสร้าง such inversion" },
      { id: "inv-q4", type: 'fill-in-blank', prompt: "She ___ tell me the truth eventually. (emphatic did)", answer: "did tell", acceptedVariants: ["DID tell"], explanation: "Emphatic did + base verb: ยืนยันอย่างหนักแน่นว่าเกิดขึ้นจริง" },
      { id: "inv-q5", type: 'multiple-choice', prompt: "\"Not only ___ he rude, but he also refused to apologise.\"", options: ["was", "is", "were", "did"], correctIndex: 0, explanation: "หลัง \"Not only\" ต้องใช้ inversion: Not only was he + adj (รูปอดีต เพราะเล่าเหตุการณ์ในอดีต)" },
      { id: "inv-q6", type: 'fill-in-blank', prompt: "___ I enjoy most about travel is meeting new people. (What — cleft)", answer: "What", acceptedVariants: [], explanation: "\"What I enjoy most is...\" เน้นว่าสิ่งที่ชอบที่สุดคืออะไร" },
      { id: "inv-q7", type: 'multiple-choice', prompt: "Choose the correct fronted structure: \"Although she was exhausted, she kept going.\"", options: ["Although exhausted though she was, she kept going.", "Exhausted although she was, she kept going.", "Exhausted as she was, she kept going.", "As exhausted she was, she kept going."], correctIndex: 2, explanation: "\"Adjective/participle + as + subject + verb\" เป็น fronting ที่ถูกต้อง ไม่ใช้ although ร่วมกับ as/though" },
      { id: "inv-q8", type: 'multiple-choice', prompt: "\"So ___ was the film that the audience sat in silence afterwards.\"", options: ["moved", "moving", "movement", "movingly"], correctIndex: 1, explanation: "หลัง \"So\" ในโครงสร้าง inversion ต้องใช้ adjective (moving) ไม่ใช่ adverb หรือ noun" }
    ]
  }
];
