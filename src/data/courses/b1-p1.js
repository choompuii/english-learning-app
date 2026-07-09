// B1 Part 1: Travel, Business, Technology, Education
export const b1p1 = [
  // ─────────────────────────────────────────────────────────────
  // B1 Unit 1: Travel
  // ─────────────────────────────────────────────────────────────
  {
    id: 'b1-unit-1',
    title: 'Unit 1: Travel',
    thai: 'บทที่ 1: การเดินทาง',
    emoji: '✈️',

    vocabulary: {
      id: 'b1-unit-1-vocab',
      title: 'Travel',
      thai: 'การเดินทาง',
      emoji: '✈️',
      level: 'B1',
      words: [
        { word: 'itinerary',    pos: 'noun',      ipa: '/aɪˈtɪn.ər.ər.i/', emoji: '🗺️', thai: 'กำหนดการเดินทาง',    def: 'a detailed plan of a journey, including the route and places to visit', example: 'Our itinerary includes three days in Kyoto.',          synonym: 'schedule',   antonym: null },
        { word: 'accommodation', pos: 'noun',     ipa: '/əˌkɒm.əˈdeɪ.ʃən/', emoji: '🏨', thai: 'ที่พัก',              def: 'a place where you stay, such as a hotel or hostel',                     example: 'We booked our accommodation online before leaving.',    synonym: 'lodging',    antonym: null },
        { word: 'departure',    pos: 'noun',      ipa: '/dɪˈpɑːr.tʃər/',   emoji: '🛫', thai: 'การออกเดินทาง',       def: 'the act of leaving a place to start a journey',                          example: 'The departure was delayed by two hours.',              synonym: 'leaving',    antonym: 'arrival' },
        { word: 'delay',        pos: 'noun',      ipa: '/dɪˈleɪ/',         emoji: '⏰', thai: 'ความล่าช้า',          def: 'a situation in which something happens later than planned',              example: 'There was a long delay because of the storm.',          synonym: 'hold-up',    antonym: null },
        { word: 'destination',  pos: 'noun',      ipa: '/ˌdes.tɪˈneɪ.ʃən/', emoji: '📍', thai: 'จุดหมายปลายทาง',      def: 'the place to which someone or something is going',                       example: 'Bangkok is a popular tourist destination.',            synonym: null,         antonym: null },
        { word: 'luggage',      pos: 'noun',      ipa: '/ˈlʌɡ.ɪdʒ/',       emoji: '🧳', thai: 'สัมภาระ',            def: 'the bags and cases that you take when you travel',                       example: 'Please keep your luggage with you at all times.',      synonym: 'baggage',    antonym: null },
        { word: 'abroad',       pos: 'adverb',    ipa: '/əˈbrɔːd/',        emoji: '🌍', thai: 'ต่างประเทศ',         def: 'in or to a foreign country',                                             example: 'She has never travelled abroad before.',               synonym: 'overseas',   antonym: null },
        { word: 'cancel',       pos: 'verb',      ipa: '/ˈkæn.səl/',       emoji: '❌', thai: 'ยกเลิก',             def: 'to decide that something planned will not happen',                       example: 'They had to cancel the flight because of the weather.', synonym: 'call off',   antonym: 'confirm' },
      ]
    },

    grammar: {
      id: 'b1-unit-1-grammar',
      title: 'Present Perfect for Experience',
      thai: 'Present Perfect เพื่อบอกประสบการณ์',
      emoji: '📐',
      level: 'B1',
      summary: 'ใช้ Present Perfect (have/has + past participle) เพื่อพูดถึงประสบการณ์ในชีวิตโดยไม่ระบุเวลาแน่นอน เหมาะกับการเล่าเรื่องการเดินทาง',
      explanation: [
        {
          heading: 'โครงสร้าง Present Perfect',
          body: 'subject + have / has + past participle (V3)\n\nI / You / We / They → have\nHe / She / It → has\n\n✅ I have visited Japan.\n✅ She has travelled abroad twice.\n\nใช้เมื่อไม่สนใจว่าเกิดขึ้นเมื่อไร แต่สนใจว่า "เคย" หรือ "ยังไม่เคย"'
        },
        {
          heading: 'ever / never / already / yet',
          body: 'ever = เคย (ใช้ในคำถาม) → Have you ever been to Europe?\nnever = ไม่เคย → I have never flown business class.\nalready = แล้ว → We have already booked the hotel.\nyet = ยัง (ใช้ในคำถาม/ปฏิเสธ) → They haven\'t checked in yet.'
        },
        {
          heading: 'been vs gone',
          body: 'have been to = เคยไปและกลับมาแล้ว\n→ I have been to Chiang Mai. (ไปมาแล้ว)\n\nhave gone to = ไปแล้วและยังอยู่ที่นั่น\n→ He has gone to the airport. (ยังไม่กลับ)'
        }
      ],
      examples: [
        { en: 'I have visited five countries in Asia.',        th: 'ฉันเคยไปมาแล้วห้าประเทศในเอเชีย' },
        { en: 'Have you ever missed a flight?',                th: 'คุณเคยพลาดเที่ยวบินไหม?' },
        { en: 'She has never travelled by train.',             th: 'เธอไม่เคยเดินทางด้วยรถไฟเลย' },
        { en: 'We have already collected our luggage.',        th: 'พวกเราเก็บสัมภาระเรียบร้อยแล้ว' },
        { en: 'They have not booked the accommodation yet.',   th: 'พวกเขายังไม่ได้จองที่พักเลย' },
        { en: 'He has gone to the departure gate.',            th: 'เขาไปที่ประตูขึ้นเครื่องแล้ว (ยังอยู่ที่นั่น)' },
      ],
      practice: [
        { id: 'b1u1-gr-p1', type: 'fill-in-blank',  prompt: 'I ___ visited Japan three times. (have/has)',            answer: 'have', acceptedVariants: [],           explanation: 'I ใช้ have' },
        { id: 'b1u1-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct form: She ___ never been abroad.',    options: ['have','has','had','is'],             correctIndex: 1, explanation: 'She ใช้ has' },
        { id: 'b1u1-gr-p3', type: 'fill-in-blank',  prompt: 'Complete: Have you ___ been to London? (เคย)',            answer: 'ever', acceptedVariants: [],           explanation: 'ever = เคย ใช้ในคำถาม' },
        { id: 'b1u1-gr-p4', type: 'multiple-choice', prompt: 'Which sentence is correct?',                             options: ['I have went to Paris.','I have gone to Paris.','I have go to Paris.','I has gone to Paris.'], correctIndex: 1, explanation: 'past participle ของ go คือ gone' },
      ],
      quiz: [
        { id: 'b1u1-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                           options: ['We has already arrived.','We have already arrived.','We have arrived already yet.','We had arrive already.'], correctIndex: 1, explanation: 'We ใช้ have + already + V3' },
        { id: 'b1u1-gr-q2', type: 'fill-in-blank',  prompt: 'They haven\'t checked in ___ . (ยัง)',                    answer: 'yet',  acceptedVariants: [],           explanation: 'yet = ยัง ใช้ท้ายประโยคปฏิเสธ' },
        { id: 'b1u1-gr-q3', type: 'multiple-choice', prompt: 'Complete: "I have ___ my luggage." (V3 of lose)',        options: ['lose','lost','losed','losing'],      correctIndex: 1, explanation: 'past participle ของ lose คือ lost' },
        { id: 'b1u1-gr-q4', type: 'fill-in-blank',  prompt: 'She ___ never travelled by plane. (have/has)',           answer: 'has',  acceptedVariants: [],           explanation: 'She ใช้ has' },
      ]
    },

    listening: {
      id: 'b1-unit-1-listening',
      type: 'Conversation',
      title: 'At the Check-in Desk',
      thai: 'ที่เคาน์เตอร์เช็คอิน',
      emoji: '🎧',
      level: 'B1',
      segments: [
        { speaker: 'Agent',   text: 'Good morning. May I see your passport and booking, please?',        thai: 'สวัสดีตอนเช้าค่ะ ขอดูหนังสือเดินทางและการจองด้วยค่ะ' },
        { speaker: 'Traveler', text: 'Of course. Here you are. I\'m flying to Singapore.',                 thai: 'ได้เลยครับ นี่ครับ ผมจะบินไปสิงคโปร์' },
        { speaker: 'Agent',   text: 'Thank you. How many bags would you like to check in?',              thai: 'ขอบคุณค่ะ คุณต้องการโหลดกระเป๋ากี่ใบคะ?' },
        { speaker: 'Traveler', text: 'Just one. Is the flight on time? I have a connection in Kuala Lumpur.', thai: 'แค่ใบเดียวครับ เที่ยวบินตรงเวลาไหมครับ? ผมมีต่อเครื่องที่กัวลาลัมเปอร์' },
        { speaker: 'Agent',   text: 'I\'m afraid there is a short delay of about thirty minutes.',        thai: 'เกรงว่าจะมีความล่าช้าประมาณสามสิบนาทีค่ะ' },
        { speaker: 'Traveler', text: 'Will I still make my connecting flight?',                            thai: 'ผมจะยังทันต่อเครื่องไหมครับ?' },
        { speaker: 'Agent',   text: 'Yes, you should have enough time. Your gate is B12.',               thai: 'ค่ะ คุณน่าจะมีเวลาพอ ประตูขึ้นเครื่องของคุณคือ B12 ค่ะ' },
        { speaker: 'Traveler', text: 'Great. Thank you very much for your help.',                          thai: 'เยี่ยมเลยครับ ขอบคุณมากสำหรับความช่วยเหลือครับ' },
      ],
      questions: [
        { id: 'b1u1-ls-q1', type: 'multiple-choice', prompt: 'Where is the traveler flying to?',           options: ['Kuala Lumpur','Singapore','Bangkok','Tokyo'],              correctIndex: 1, explanation: 'เขาพูดว่า "I\'m flying to Singapore"' },
        { id: 'b1u1-ls-q2', type: 'multiple-choice', prompt: 'How many bags does he check in?',            options: ['None','One','Two','Three'],                                correctIndex: 1, explanation: 'เขาพูดว่า "Just one"' },
        { id: 'b1u1-ls-q3', type: 'multiple-choice', prompt: 'How long is the delay?',                     options: ['Fifteen minutes','Thirty minutes','One hour','Two hours'], correctIndex: 1, explanation: 'พนักงานพูดว่า "a short delay of about thirty minutes"' },
        { id: 'b1u1-ls-q4', type: 'multiple-choice', prompt: 'What is the traveler\'s gate number?',       options: ['B2','B12','B20','A12'],                                    correctIndex: 1, explanation: 'พนักงานพูดว่า "Your gate is B12"' },
      ]
    },

    reading: {
      id: 'b1-unit-1-reading',
      type: 'Article',
      title: 'How to Travel on a Budget',
      thai: 'วิธีเดินทางแบบประหยัด',
      emoji: '📖',
      level: 'B1',
      minutes: 4,
      paragraphs: [
        'Travelling does not have to be expensive. With careful planning, you can explore the world without spending a fortune. The first step is to be flexible with your dates. Flights are often much cheaper if you travel in the middle of the week or outside the busy holiday seasons.',
        'Accommodation is another area where you can save money. Instead of staying in an expensive hotel, many travellers choose hostels, guesthouses, or home-sharing services. These options are not only cheaper but also give you the chance to meet other people from around the world.',
        'Eating like a local is a great way to reduce your costs. Street food and small family restaurants are usually far cheaper than tourist restaurants, and the food is often more authentic. Buying snacks and water from supermarkets rather than airports can also make a big difference.',
        'Finally, remember to book your transport in advance. Train and bus tickets are frequently cheaper when purchased early. By following these simple tips, you can enjoy an unforgettable trip while keeping your budget under control.',
      ],
      dialogue: null,
      glossary: [
        { word: 'budget',      thai: 'งบประมาณ',         def: 'the amount of money you have available to spend' },
        { word: 'flexible',    thai: 'ยืดหยุ่น',         def: 'able to change easily according to the situation' },
        { word: 'authentic',   thai: 'แท้ / ดั้งเดิม',    def: 'real and genuine, not a copy' },
        { word: 'in advance',  thai: 'ล่วงหน้า',         def: 'before a particular time or event' },
      ],
      summary: 'The article gives tips for budget travel: be flexible with dates, choose cheaper accommodation like hostels, eat local food, and book transport in advance.',
      summaryThai: 'บทความให้เคล็ดลับการเดินทางแบบประหยัด ได้แก่ ยืดหยุ่นเรื่องวันเดินทาง เลือกที่พักราคาถูกอย่างโฮสเทล กินอาหารท้องถิ่น และจองการเดินทางล่วงหน้า',
      questions: [
        { id: 'b1u1-rd-q1', type: 'multiple-choice', prompt: 'When are flights often cheaper?',                    options: ['On weekends','During holidays','In the middle of the week','At night'], correctIndex: 2, explanation: 'บทความบอกว่าถูกกว่าเมื่อเดินทางกลางสัปดาห์' },
        { id: 'b1u1-rd-q2', type: 'multiple-choice', prompt: 'What accommodation does the article suggest?',      options: ['Five-star hotels','Hostels and guesthouses','Private villas','Resorts'], correctIndex: 1, explanation: 'บทความแนะนำโฮสเทลและเกสต์เฮาส์' },
        { id: 'b1u1-rd-q3', type: 'multiple-choice', prompt: 'Why is street food recommended?',                   options: ['It is cheaper and more authentic','It is faster','It is healthier','It is safer'], correctIndex: 0, explanation: 'บทความบอกว่าถูกกว่าและแท้กว่า' },
        { id: 'b1u1-rd-q4', type: 'fill-in-blank',   prompt: 'You should book your transport in ___ to save money.', answer: 'advance', acceptedVariants: ['advance.'], explanation: '"in advance" = ล่วงหน้า' },
      ]
    },

    test: {
      id: 'b1-unit-1-test',
      passMark: 0.70,
      questions: [
        { id: 'b1u1-t-01', type: 'multiple-choice', prompt: '"ที่พัก" ในภาษาอังกฤษคือคำใด?',                 options: ['itinerary','accommodation','departure','luggage'],       correctIndex: 1, explanation: '"accommodation" = ที่พัก' },
        { id: 'b1u1-t-02', type: 'multiple-choice', prompt: 'What does "delay" mean?',                        options: ['การมาถึง','ความล่าช้า','จุดหมาย','การจอง'],              correctIndex: 1, explanation: '"delay" = ความล่าช้า' },
        { id: 'b1u1-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "arrival" คือ ___',                answer: 'departure', acceptedVariants: ['departure.'],             explanation: '"departure" (การออกเดินทาง) ตรงข้ามกับ arrival' },
        { id: 'b1u1-t-04', type: 'multiple-choice', prompt: '"She ___ never been abroad." เติมคำใดถูกต้อง?', options: ['have','has','had','is'],                                 correctIndex: 1, explanation: 'She ใช้ has ใน Present Perfect' },
        { id: 'b1u1-t-05', type: 'fill-in-blank',   prompt: 'Have you ___ visited Europe? (เคย)',            answer: 'ever', acceptedVariants: [],                              explanation: 'ever = เคย ใช้ในคำถาม Present Perfect' },
        { id: 'b1u1-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                     options: ['I have went there.','I have gone there.','I have go there.','I has gone there.'], correctIndex: 1, explanation: 'past participle ของ go คือ gone' },
        { id: 'b1u1-t-07', type: 'fill-in-blank',   prompt: 'We have ___ booked the hotel. (แล้ว)',          answer: 'already', acceptedVariants: [],                           explanation: 'already = แล้ว' },
        { id: 'b1u1-t-08', type: 'multiple-choice', prompt: 'In the listening, where is the traveler going?', options: ['Tokyo','Singapore','Bangkok','London'],                 correctIndex: 1, explanation: 'เขาพูดว่า "I\'m flying to Singapore"' },
        { id: 'b1u1-t-09', type: 'multiple-choice', prompt: 'In the listening, how long is the delay?',       options: ['15 minutes','30 minutes','1 hour','2 hours'],           correctIndex: 1, explanation: 'ล่าช้าประมาณสามสิบนาที' },
        { id: 'b1u1-t-10', type: 'multiple-choice', prompt: 'According to the article, how can you save on food?', options: ['Eat at hotels','Eat local street food','Eat at airports','Skip meals'], correctIndex: 1, explanation: 'บทความแนะนำอาหารท้องถิ่น/สตรีทฟู้ด' },
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // B1 Unit 2: Business
  // ─────────────────────────────────────────────────────────────
  {
    id: 'b1-unit-2',
    title: 'Unit 2: Business',
    thai: 'บทที่ 2: ธุรกิจ',
    emoji: '💼',

    vocabulary: {
      id: 'b1-unit-2-vocab',
      title: 'Business',
      thai: 'ธุรกิจ',
      emoji: '💼',
      level: 'B1',
      words: [
        { word: 'meeting',     pos: 'noun', ipa: '/ˈmiː.tɪŋ/',       emoji: '🗓️', thai: 'การประชุม',        def: 'an event at which people gather to discuss something',                 example: 'The meeting is scheduled for 9 a.m. tomorrow.',        synonym: 'gathering',  antonym: null },
        { word: 'deadline',    pos: 'noun', ipa: '/ˈded.laɪn/',      emoji: '⏳', thai: 'กำหนดส่งงาน',       def: 'a time or date by which something must be finished',                   example: 'We must submit the report before the deadline.',       synonym: 'due date',   antonym: null },
        { word: 'negotiate',   pos: 'verb', ipa: '/nəˈɡoʊ.ʃi.eɪt/',  emoji: '🤝', thai: 'เจรจาต่อรอง',      def: 'to try to reach an agreement by discussion',                           example: 'They negotiated a better price for the contract.',     synonym: 'bargain',    antonym: null },
        { word: 'client',      pos: 'noun', ipa: '/ˈklaɪ.ənt/',      emoji: '👤', thai: 'ลูกค้า',            def: 'a person or company that pays for goods or services',                  example: 'Our client wants to review the design next week.',     synonym: 'customer',   antonym: null },
        { word: 'profit',      pos: 'noun', ipa: '/ˈprɒf.ɪt/',       emoji: '📈', thai: 'กำไร',              def: 'money you make after paying all your costs',                           example: 'The company made a large profit this year.',           synonym: 'gain',       antonym: 'loss' },
        { word: 'colleague',   pos: 'noun', ipa: '/ˈkɒl.iːɡ/',       emoji: '👥', thai: 'เพื่อนร่วมงาน',    def: 'a person you work with, especially in a profession',                   example: 'My colleague helped me finish the presentation.',      synonym: 'coworker',   antonym: null },
        { word: 'invest',      pos: 'verb', ipa: '/ɪnˈvest/',        emoji: '💰', thai: 'ลงทุน',             def: 'to put money into something to make more money',                       example: 'They decided to invest in new technology.',            synonym: null,         antonym: null },
        { word: 'promotion',   pos: 'noun', ipa: '/prəˈmoʊ.ʃən/',    emoji: '⬆️', thai: 'การเลื่อนตำแหน่ง',  def: 'a move to a more important job in a company',                          example: 'She got a promotion after five years of hard work.',   synonym: null,         antonym: 'demotion' },
      ]
    },

    grammar: {
      id: 'b1-unit-2-grammar',
      title: 'The Passive Voice',
      thai: 'ประโยค Passive Voice',
      emoji: '📐',
      level: 'B1',
      summary: 'ใช้ Passive Voice (be + past participle) เมื่อเน้นที่การกระทำหรือผลลัพธ์มากกว่าผู้กระทำ พบบ่อยในภาษาธุรกิจและทางการ',
      explanation: [
        {
          heading: 'โครงสร้าง Passive Voice',
          body: 'object + be + past participle (V3) + (by + ผู้กระทำ)\n\nActive:  The manager wrote the report.\nPassive: The report was written by the manager.\n\nเน้นที่ "รายงาน" (สิ่งที่ถูกกระทำ) มากกว่าผู้เขียน'
        },
        {
          heading: 'Passive ในกาลต่าง ๆ',
          body: 'Present: The meeting is held every Monday.\nPast: The contract was signed yesterday.\nPresent Perfect: The order has been sent.\nModal: The report must be finished today.\n\nสังเกตว่า be เปลี่ยนตามกาล แต่ใช้ V3 เสมอ'
        },
        {
          heading: 'เมื่อไรควรใช้ Passive',
          body: '1) เมื่อไม่รู้หรือไม่สำคัญว่าใครทำ → The office was cleaned last night.\n2) ในภาษาทางการ/ธุรกิจ → Payment is required within 30 days.\n3) เมื่ออยากเน้นสิ่งที่ถูกกระทำ → The product was designed in Thailand.'
        }
      ],
      examples: [
        { en: 'The report was written by my colleague.',       th: 'รายงานถูกเขียนโดยเพื่อนร่วมงานของฉัน' },
        { en: 'The meeting is held every Monday.',              th: 'การประชุมจัดขึ้นทุกวันจันทร์' },
        { en: 'The contract was signed last week.',             th: 'สัญญาถูกลงนามเมื่อสัปดาห์ที่แล้ว' },
        { en: 'The payment has been received.',                 th: 'การชำระเงินได้รับเรียบร้อยแล้ว' },
        { en: 'The order must be sent today.',                  th: 'คำสั่งซื้อต้องถูกส่งวันนี้' },
        { en: 'These products are made in Thailand.',           th: 'สินค้าเหล่านี้ผลิตในประเทศไทย' },
      ],
      practice: [
        { id: 'b1u2-gr-p1', type: 'fill-in-blank',  prompt: 'The report ___ written by the manager. (was/were)',   answer: 'was',  acceptedVariants: [],           explanation: 'The report เป็นเอกพจน์ ใช้ was' },
        { id: 'b1u2-gr-p2', type: 'multiple-choice', prompt: 'Choose the passive form: "They clean the office daily."', options: ['The office cleans daily.','The office is cleaned daily.','The office cleaned daily.','The office was clean daily.'], correctIndex: 1, explanation: 'Present passive = is/are + V3' },
        { id: 'b1u2-gr-p3', type: 'fill-in-blank',  prompt: 'These cars ___ made in Japan. (is/are)',              answer: 'are',  acceptedVariants: [],           explanation: 'These cars เป็นพหูพจน์ ใช้ are' },
        { id: 'b1u2-gr-p4', type: 'multiple-choice', prompt: 'Which is correct passive voice?',                     options: ['The order has sent.','The order has been sent.','The order have been send.','The order been sent.'], correctIndex: 1, explanation: 'Present perfect passive = has/have been + V3' },
      ],
      quiz: [
        { id: 'b1u2-gr-q1', type: 'multiple-choice', prompt: 'Change to passive: "The team finished the project."',   options: ['The project finished the team.','The project was finished by the team.','The project is finish by the team.','The project finished by the team.'], correctIndex: 1, explanation: 'Past passive = was/were + V3' },
        { id: 'b1u2-gr-q2', type: 'fill-in-blank',  prompt: 'The contract ___ signed yesterday. (was/were)',        answer: 'was',  acceptedVariants: [],           explanation: 'The contract เอกพจน์ ใช้ was' },
        { id: 'b1u2-gr-q3', type: 'multiple-choice', prompt: 'Complete: "The email must ___ sent immediately."',      options: ['be','is','was','been'],              correctIndex: 0, explanation: 'หลัง modal (must) ใช้ be + V3' },
        { id: 'b1u2-gr-q4', type: 'fill-in-blank',  prompt: 'These products ___ made in Thailand. (is/are)',        answer: 'are',  acceptedVariants: [],           explanation: 'These products พหูพจน์ ใช้ are' },
      ]
    },

    listening: {
      id: 'b1-unit-2-listening',
      type: 'Conversation',
      title: 'Planning a Team Meeting',
      thai: 'การวางแผนประชุมทีม',
      emoji: '🎧',
      level: 'B1',
      segments: [
        { speaker: 'Sara',  text: 'Hi Tom, do you have a moment to talk about the client meeting?',       thai: 'สวัสดีทอม คุณมีเวลาคุยเรื่องการประชุมกับลูกค้าไหม?' },
        { speaker: 'Tom',   text: 'Sure, Sara. When is it scheduled?',                                    thai: 'ได้เลยซาร่า มันถูกกำหนดไว้เมื่อไหร่?' },
        { speaker: 'Sara',  text: 'It\'s on Thursday at two o\'clock. The report must be ready by then.',   thai: 'วันพฤหัสบดีบ่ายสองโมง รายงานต้องพร้อมภายในนั้น' },
        { speaker: 'Tom',   text: 'That\'s a tight deadline. Has the data been collected yet?',            thai: 'นั่นเป็นกำหนดที่กระชั้นชิดนะ ข้อมูลถูกเก็บครบหรือยัง?' },
        { speaker: 'Sara',  text: 'Most of it, but the sales figures are still being checked.',           thai: 'ส่วนใหญ่แล้ว แต่ตัวเลขยอดขายยังกำลังถูกตรวจสอบอยู่' },
        { speaker: 'Tom',   text: 'Okay. I\'ll prepare the presentation slides tonight.',                 thai: 'โอเค ผมจะเตรียมสไลด์นำเสนอคืนนี้' },
        { speaker: 'Sara',  text: 'Great. Let\'s negotiate the new prices carefully with the client.',    thai: 'เยี่ยม เรามาเจรจาราคาใหม่กับลูกค้าอย่างระมัดระวังกันเถอะ' },
        { speaker: 'Tom',   text: 'Agreed. I think we can make a good profit from this deal.',            thai: 'เห็นด้วย ผมคิดว่าเราจะได้กำไรดีจากดีลนี้' },
      ],
      questions: [
        { id: 'b1u2-ls-q1', type: 'multiple-choice', prompt: 'When is the client meeting?',                options: ['Monday at 2','Thursday at 2','Friday at 9','Wednesday at 3'], correctIndex: 1, explanation: 'ซาร่าพูดว่า "on Thursday at two o\'clock"' },
        { id: 'b1u2-ls-q2', type: 'multiple-choice', prompt: 'What is still being checked?',              options: ['The slides','The sales figures','The client list','The budget'], correctIndex: 1, explanation: 'พูดว่า "the sales figures are still being checked"' },
        { id: 'b1u2-ls-q3', type: 'multiple-choice', prompt: 'What will Tom prepare tonight?',            options: ['The report','The contract','The presentation slides','The invoice'], correctIndex: 2, explanation: 'ทอมพูดว่าจะเตรียม "the presentation slides tonight"' },
        { id: 'b1u2-ls-q4', type: 'multiple-choice', prompt: 'What do they want to negotiate?',           options: ['The deadline','The new prices','The meeting time','The salary'], correctIndex: 1, explanation: 'ซาร่าพูดว่า "negotiate the new prices"' },
      ]
    },

    reading: {
      id: 'b1-unit-2-reading',
      type: 'Article',
      title: 'Starting a Small Business',
      thai: 'การเริ่มต้นธุรกิจขนาดเล็ก',
      emoji: '📖',
      level: 'B1',
      minutes: 4,
      paragraphs: [
        'Many people dream of running their own business, but starting one takes careful planning. Before you invest any money, you should research your market and understand who your customers will be. A good business idea solves a real problem for real people.',
        'Once you have an idea, you need to write a business plan. This document describes your products, your costs, and how you expect to make a profit. Banks and investors will usually want to see a clear plan before they agree to lend you money.',
        'In the early days, cash is often tight, so it is important to control your spending. Many successful entrepreneurs started small and grew slowly. They reinvested their early profits instead of spending them, which allowed the business to become stronger over time.',
        'Finally, do not be afraid to ask for help. Talking to experienced colleagues, mentors, or other business owners can save you from expensive mistakes. Running a business is hard work, but with patience and good planning, it can be very rewarding.',
      ],
      dialogue: null,
      glossary: [
        { word: 'market',        thai: 'ตลาด',              def: 'the group of people who might buy a product' },
        { word: 'business plan', thai: 'แผนธุรกิจ',         def: 'a written document describing how a business will operate and make money' },
        { word: 'entrepreneur',  thai: 'ผู้ประกอบการ',      def: 'a person who starts and runs a business, often taking financial risks' },
        { word: 'reinvest',      thai: 'ลงทุนซ้ำ',          def: 'to put profits back into a business rather than spending them' },
      ],
      summary: 'The article explains how to start a small business: research the market, write a business plan, control spending and reinvest early profits, and ask experienced people for help.',
      summaryThai: 'บทความอธิบายวิธีเริ่มต้นธุรกิจขนาดเล็ก ได้แก่ ศึกษาตลาด เขียนแผนธุรกิจ ควบคุมค่าใช้จ่ายและนำกำไรช่วงแรกกลับมาลงทุน และขอคำปรึกษาจากผู้มีประสบการณ์',
      questions: [
        { id: 'b1u2-rd-q1', type: 'multiple-choice', prompt: 'What should you do before investing money?',       options: ['Hire staff','Research your market','Rent an office','Buy equipment'], correctIndex: 1, explanation: 'บทความบอกให้ศึกษาตลาดก่อนลงทุน' },
        { id: 'b1u2-rd-q2', type: 'multiple-choice', prompt: 'Why do banks want to see a business plan?',        options: ['To copy the idea','Before they agree to lend money','To hire the owner','To buy the company'], correctIndex: 1, explanation: 'ธนาคารต้องการเห็นแผนก่อนตกลงให้กู้เงิน' },
        { id: 'b1u2-rd-q3', type: 'multiple-choice', prompt: 'What did many successful entrepreneurs do with early profits?', options: ['Spent them quickly','Reinvested them','Gave them away','Hid them'], correctIndex: 1, explanation: 'พวกเขานำกำไรช่วงแรกกลับมาลงทุน (reinvested)' },
        { id: 'b1u2-rd-q4', type: 'fill-in-blank',   prompt: 'A person who starts and runs a business is an ___.', answer: 'entrepreneur', acceptedVariants: ['entrepreneur.'], explanation: 'entrepreneur = ผู้ประกอบการ' },
      ]
    },

    test: {
      id: 'b1-unit-2-test',
      passMark: 0.70,
      questions: [
        { id: 'b1u2-t-01', type: 'multiple-choice', prompt: '"กำหนดส่งงาน" ในภาษาอังกฤษคือคำใด?',            options: ['meeting','deadline','profit','client'],                 correctIndex: 1, explanation: '"deadline" = กำหนดส่งงาน' },
        { id: 'b1u2-t-02', type: 'multiple-choice', prompt: 'What does "negotiate" mean?',                    options: ['ลงทุน','เจรจาต่อรอง','ยกเลิก','ผลิต'],                   correctIndex: 1, explanation: '"negotiate" = เจรจาต่อรอง' },
        { id: 'b1u2-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "profit" คือ ___',                 answer: 'loss', acceptedVariants: ['loss.'],                       explanation: '"loss" (ขาดทุน) ตรงข้ามกับ profit' },
        { id: 'b1u2-t-04', type: 'multiple-choice', prompt: 'Passive: "The report ___ written by Tom."',      options: ['was','were','is being','has'],                          correctIndex: 0, explanation: 'The report เอกพจน์ อดีต ใช้ was + V3' },
        { id: 'b1u2-t-05', type: 'fill-in-blank',   prompt: 'These products ___ made in Thailand. (is/are)',  answer: 'are',  acceptedVariants: [],                              explanation: 'These products พหูพจน์ ใช้ are' },
        { id: 'b1u2-t-06', type: 'multiple-choice', prompt: 'Which is correct passive voice?',                options: ['The order has sent.','The order has been sent.','The order have send.','The order been send.'], correctIndex: 1, explanation: 'Present perfect passive = has been + V3' },
        { id: 'b1u2-t-07', type: 'fill-in-blank',   prompt: 'The email must ___ sent today. (be)',            answer: 'be',   acceptedVariants: [],                              explanation: 'หลัง modal ใช้ be + V3' },
        { id: 'b1u2-t-08', type: 'multiple-choice', prompt: 'In the listening, when is the client meeting?',  options: ['Monday','Thursday','Friday','Sunday'],                  correctIndex: 1, explanation: 'ประชุมวันพฤหัสบดี' },
        { id: 'b1u2-t-09', type: 'multiple-choice', prompt: 'In the listening, what is still being checked?',  options: ['The slides','The sales figures','The budget','The plan'], correctIndex: 1, explanation: 'ตัวเลขยอดขายยังถูกตรวจสอบอยู่' },
        { id: 'b1u2-t-10', type: 'multiple-choice', prompt: 'According to the article, what is the first step?', options: ['Hire staff','Research the market','Sign contracts','Buy an office'], correctIndex: 1, explanation: 'ขั้นแรกคือศึกษาตลาด' },
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // B1 Unit 3: Technology
  // ─────────────────────────────────────────────────────────────
  {
    id: 'b1-unit-3',
    title: 'Unit 3: Technology',
    thai: 'บทที่ 3: เทคโนโลยี',
    emoji: '💻',

    vocabulary: {
      id: 'b1-unit-3-vocab',
      title: 'Technology',
      thai: 'เทคโนโลยี',
      emoji: '💻',
      level: 'B1',
      words: [
        { word: 'device',       pos: 'noun',      ipa: '/dɪˈvaɪs/',        emoji: '📱', thai: 'อุปกรณ์',           def: 'a machine or tool made for a particular purpose',                      example: 'A smartphone is a very useful device.',                synonym: 'gadget',     antonym: null },
        { word: 'download',     pos: 'verb',      ipa: '/ˈdaʊn.loʊd/',     emoji: '⬇️', thai: 'ดาวน์โหลด',        def: 'to copy data from the internet to your device',                        example: 'You can download the app for free.',                   synonym: null,         antonym: 'upload' },
        { word: 'software',     pos: 'noun',      ipa: '/ˈsɒft.wer/',      emoji: '💿', thai: 'ซอฟต์แวร์',        def: 'the programs that run on a computer',                                  example: 'This software helps you edit photos.',                 synonym: 'program',    antonym: 'hardware' },
        { word: 'password',     pos: 'noun',      ipa: '/ˈpɑːs.wɜːrd/',    emoji: '🔑', thai: 'รหัสผ่าน',          def: 'a secret word or phrase used to access a system',                      example: 'Please choose a strong password.',                     synonym: null,         antonym: null },
        { word: 'update',       pos: 'verb',      ipa: '/ˌʌpˈdeɪt/',       emoji: '🔄', thai: 'อัปเดต',           def: 'to make something more modern or add the latest information',          example: 'Remember to update your phone regularly.',             synonym: 'upgrade',    antonym: null },
        { word: 'connect',      pos: 'verb',      ipa: '/kəˈnekt/',        emoji: '🔌', thai: 'เชื่อมต่อ',        def: 'to join two things together or link to a network',                     example: 'Connect your laptop to the wifi.',                     synonym: 'link',       antonym: 'disconnect' },
        { word: 'artificial',   pos: 'adjective', ipa: '/ˌɑːr.tɪˈfɪʃ.əl/', emoji: '🤖', thai: 'ประดิษฐ์ / เทียม',  def: 'made by people, not natural',                                          example: 'Artificial intelligence is changing the world.',       synonym: 'man-made',   antonym: 'natural' },
        { word: 'reliable',     pos: 'adjective', ipa: '/rɪˈlaɪ.ə.bəl/',   emoji: '✅', thai: 'เชื่อถือได้',       def: 'able to be trusted to work well',                                      example: 'We need a reliable internet connection.',              synonym: 'dependable', antonym: 'unreliable' },
      ]
    },

    grammar: {
      id: 'b1-unit-3-grammar',
      title: 'The First Conditional',
      thai: 'ประโยคเงื่อนไขแบบที่ 1',
      emoji: '📐',
      level: 'B1',
      summary: 'ใช้ First Conditional (If + present simple, will + verb) เพื่อพูดถึงเงื่อนไขและผลลัพธ์ที่เป็นไปได้จริงในอนาคต',
      explanation: [
        {
          heading: 'โครงสร้าง First Conditional',
          body: 'If + present simple, subject + will + verb\n\nIf you update the app, it will work better.\n\n⚠️ ในประโยค if ใช้ present simple (ไม่ใช้ will)\n❌ If you will update...  ✅ If you update...'
        },
        {
          heading: 'สลับตำแหน่งได้',
          body: 'สามารถขึ้นต้นด้วย if หรือ will ก็ได้\n\nIf it rains, we will stay home.\n= We will stay home if it rains.\n\n💡 ถ้าขึ้นต้นด้วย will ไม่ต้องใส่ comma (,)'
        },
        {
          heading: 'unless และ modal อื่น ๆ',
          body: 'unless = if not (ถ้าไม่)\n→ Unless you save your work, you will lose it.\n\nนอกจาก will ยังใช้ can / may / might ได้\n→ If you connect to wifi, you can download the file.'
        }
      ],
      examples: [
        { en: 'If you download the app, it will help you study.',        th: 'ถ้าคุณดาวน์โหลดแอป มันจะช่วยคุณเรียน' },
        { en: 'If the password is wrong, you will not log in.',          th: 'ถ้ารหัสผ่านผิด คุณจะเข้าระบบไม่ได้' },
        { en: 'We will fix the problem if you update the software.',     th: 'เราจะแก้ปัญหาถ้าคุณอัปเดตซอฟต์แวร์' },
        { en: 'If you connect to wifi, you can watch videos.',           th: 'ถ้าคุณเชื่อมต่อไวไฟ คุณจะดูวิดีโอได้' },
        { en: 'Unless you save the file, you will lose your work.',      th: 'ถ้าคุณไม่บันทึกไฟล์ คุณจะเสียงานของคุณ' },
        { en: 'If the device is reliable, people will buy it.',          th: 'ถ้าอุปกรณ์เชื่อถือได้ ผู้คนจะซื้อมัน' },
      ],
      practice: [
        { id: 'b1u3-gr-p1', type: 'fill-in-blank',  prompt: 'If you ___ the button, the app will open. (press)',      answer: 'press', acceptedVariants: [],          explanation: 'ในประโยค if ใช้ present simple: press' },
        { id: 'b1u3-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct form: "If it rains, we ___ home."',   options: ['stay','will stay','stayed','staying'], correctIndex: 1, explanation: 'ผลลัพธ์ใช้ will + verb' },
        { id: 'b1u3-gr-p3', type: 'fill-in-blank',  prompt: 'If you update the phone, it ___ work faster. (will)',    answer: 'will', acceptedVariants: [],           explanation: 'ผลลัพธ์ของ First Conditional ใช้ will' },
        { id: 'b1u3-gr-p4', type: 'multiple-choice', prompt: 'Which sentence is correct?',                            options: ['If you will click, it opens.','If you click, it will open.','If you click, it opens will.','If you clicked, it will open.'], correctIndex: 1, explanation: 'if + present, will + verb' },
      ],
      quiz: [
        { id: 'b1u3-gr-q1', type: 'multiple-choice', prompt: 'Complete: "If you ___ to wifi, you can download it."',   options: ['connect','will connect','connected','connecting'], correctIndex: 0, explanation: 'ในประโยค if ใช้ present simple' },
        { id: 'b1u3-gr-q2', type: 'fill-in-blank',  prompt: 'If the password is wrong, you ___ not log in. (will)',   answer: 'will', acceptedVariants: [],           explanation: 'ผลลัพธ์ใช้ will (will not)' },
        { id: 'b1u3-gr-q3', type: 'multiple-choice', prompt: '"___ you save your work, you will lose it." เติมคำใด?', options: ['If','Unless','When','Because'],       correctIndex: 1, explanation: 'Unless = if not (ถ้าไม่บันทึก)' },
        { id: 'b1u3-gr-q4', type: 'fill-in-blank',  prompt: 'If you ___ the software, it will run better. (update)',  answer: 'update', acceptedVariants: [],         explanation: 'ในประโยค if ใช้ present simple: update' },
      ]
    },

    listening: {
      id: 'b1-unit-3-listening',
      type: 'Podcast',
      title: 'A Podcast About Smartphones',
      thai: 'พอดแคสต์เกี่ยวกับสมาร์ทโฟน',
      emoji: '🎧',
      level: 'B1',
      segments: [
        { speaker: 'Host',  text: 'Welcome back to Tech Talk. Today we ask: how often should you update your phone?',  thai: 'ยินดีต้อนรับกลับสู่ Tech Talk วันนี้เราถามว่า คุณควรอัปเดตโทรศัพท์บ่อยแค่ไหน?' },
        { speaker: 'Guest', text: 'Great question. If you update regularly, your phone will stay secure.',              thai: 'คำถามที่ดี ถ้าคุณอัปเดตสม่ำเสมอ โทรศัพท์ของคุณจะปลอดภัย' },
        { speaker: 'Host',  text: 'So updates are mainly about security?',                                             thai: 'งั้นการอัปเดตส่วนใหญ่เกี่ยวกับความปลอดภัยใช่ไหม?' },
        { speaker: 'Guest', text: 'Yes, but they also fix bugs and make the software faster.',                        thai: 'ใช่ แต่มันยังแก้บั๊กและทำให้ซอฟต์แวร์เร็วขึ้นด้วย' },
        { speaker: 'Host',  text: 'What about passwords? Many people use very weak ones.',                             thai: 'แล้วรหัสผ่านล่ะ? หลายคนใช้รหัสที่อ่อนแอมาก' },
        { speaker: 'Guest', text: 'That is dangerous. A strong password protects your personal data.',                 thai: 'นั่นอันตราย รหัสผ่านที่แข็งแรงจะปกป้องข้อมูลส่วนตัวของคุณ' },
        { speaker: 'Host',  text: 'And what will happen with artificial intelligence in phones?',                      thai: 'แล้วปัญญาประดิษฐ์ในโทรศัพท์จะเป็นอย่างไร?' },
        { speaker: 'Guest', text: 'AI will make our devices more helpful, but we must protect our privacy.',          thai: 'AI จะทำให้อุปกรณ์ของเรามีประโยชน์มากขึ้น แต่เราต้องปกป้องความเป็นส่วนตัว' },
      ],
      questions: [
        { id: 'b1u3-ls-q1', type: 'multiple-choice', prompt: 'What is the main benefit of regular updates?', options: ['More storage','Keeping the phone secure','A new colour','Cheaper apps'], correctIndex: 1, explanation: 'แขกพูดว่าอัปเดตทำให้โทรศัพท์ปลอดภัย' },
        { id: 'b1u3-ls-q2', type: 'multiple-choice', prompt: 'What else do updates do besides security?',   options: ['Add adverts','Fix bugs and make software faster','Delete photos','Cost money'], correctIndex: 1, explanation: 'แขกพูดว่าอัปเดตแก้บั๊กและทำให้เร็วขึ้น' },
        { id: 'b1u3-ls-q3', type: 'multiple-choice', prompt: 'Why is a strong password important?',         options: ['It is easy to type','It protects personal data','It saves battery','It is free'], correctIndex: 1, explanation: 'รหัสผ่านที่แข็งแรงปกป้องข้อมูลส่วนตัว' },
        { id: 'b1u3-ls-q4', type: 'multiple-choice', prompt: 'What does the guest say about AI in phones?', options: ['It is useless','It will make devices more helpful','It will replace phones','It is illegal'], correctIndex: 1, explanation: 'AI จะทำให้อุปกรณ์มีประโยชน์มากขึ้น' },
      ]
    },

    reading: {
      id: 'b1-unit-3-reading',
      type: 'Article',
      title: 'Living With Artificial Intelligence',
      thai: 'การใช้ชีวิตกับปัญญาประดิษฐ์',
      emoji: '📖',
      level: 'B1',
      minutes: 4,
      paragraphs: [
        'Artificial intelligence, often called AI, is no longer science fiction. It is already part of our daily lives. When you ask a voice assistant a question or receive film suggestions from a streaming service, you are using AI. These systems learn from huge amounts of data to make helpful predictions.',
        'One of the biggest advantages of AI is that it can do boring or difficult tasks quickly. In hospitals, AI can help doctors read medical images and find problems earlier. In factories, machines that use AI can work day and night without getting tired, which increases production.',
        'However, AI also brings challenges. Some people worry that machines will replace human workers. Others are concerned about privacy, because AI systems collect and store personal information. If we are not careful, this data could be used in ways we do not want.',
        'Most experts agree that AI is a powerful tool that can improve our lives, but it must be used responsibly. If governments and companies create clear rules, AI will be safer for everyone. The technology itself is neither good nor bad; what matters is how we choose to use it.',
      ],
      dialogue: null,
      glossary: [
        { word: 'voice assistant', thai: 'ผู้ช่วยเสียง',      def: 'a program that answers questions and follows commands using your voice' },
        { word: 'data',            thai: 'ข้อมูล',            def: 'information, especially facts or numbers, collected to be examined' },
        { word: 'privacy',         thai: 'ความเป็นส่วนตัว',   def: 'the right to keep your personal information secret' },
        { word: 'responsibly',     thai: 'อย่างมีความรับผิดชอบ', def: 'in a sensible and careful way' },
      ],
      summary: 'The article explains that AI is already part of daily life. It can do tasks quickly and help in hospitals and factories, but it raises worries about jobs and privacy. Experts say AI must be used responsibly with clear rules.',
      summaryThai: 'บทความอธิบายว่า AI เป็นส่วนหนึ่งของชีวิตประจำวันแล้ว มันทำงานได้เร็วและช่วยงานในโรงพยาบาลและโรงงาน แต่ก่อความกังวลเรื่องงานและความเป็นส่วนตัว ผู้เชี่ยวชาญบอกว่าต้องใช้ AI อย่างมีความรับผิดชอบพร้อมกฎที่ชัดเจน',
      questions: [
        { id: 'b1u3-rd-q1', type: 'multiple-choice', prompt: 'How do AI systems make helpful predictions?',       options: ['By guessing','By learning from huge amounts of data','By copying humans','By using magic'], correctIndex: 1, explanation: 'ระบบ AI เรียนรู้จากข้อมูลจำนวนมาก' },
        { id: 'b1u3-rd-q2', type: 'multiple-choice', prompt: 'How can AI help in hospitals?',                     options: ['By cleaning rooms','By reading medical images','By cooking food','By driving cars'], correctIndex: 1, explanation: 'AI ช่วยแพทย์อ่านภาพทางการแพทย์' },
        { id: 'b1u3-rd-q3', type: 'multiple-choice', prompt: 'What worry does the article mention?',             options: ['AI is too slow','AI may replace workers and threaten privacy','AI is too cheap','AI cannot learn'], correctIndex: 1, explanation: 'กังวลว่า AI อาจแทนที่คนงานและกระทบความเป็นส่วนตัว' },
        { id: 'b1u3-rd-q4', type: 'fill-in-blank',   prompt: 'Experts say AI must be used ___ .',                  answer: 'responsibly', acceptedVariants: ['responsibly.'], explanation: 'บทความบอกว่าต้องใช้ AI อย่างมีความรับผิดชอบ (responsibly)' },
      ]
    },

    test: {
      id: 'b1-unit-3-test',
      passMark: 0.70,
      questions: [
        { id: 'b1u3-t-01', type: 'multiple-choice', prompt: '"รหัสผ่าน" ในภาษาอังกฤษคือคำใด?',                options: ['software','password','device','update'],                correctIndex: 1, explanation: '"password" = รหัสผ่าน' },
        { id: 'b1u3-t-02', type: 'multiple-choice', prompt: 'What does "reliable" mean?',                      options: ['ราคาแพง','เชื่อถือได้','ใหม่','ช้า'],                    correctIndex: 1, explanation: '"reliable" = เชื่อถือได้' },
        { id: 'b1u3-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "download" คือ ___',                answer: 'upload', acceptedVariants: ['upload.'],                  explanation: '"upload" ตรงข้ามกับ download' },
        { id: 'b1u3-t-04', type: 'multiple-choice', prompt: '"If it rains, we ___ home." เติมคำใดถูกต้อง?',    options: ['stay','will stay','stayed','staying'],                  correctIndex: 1, explanation: 'ผลลัพธ์ First Conditional ใช้ will + verb' },
        { id: 'b1u3-t-05', type: 'fill-in-blank',   prompt: 'If you ___ the app, it will work. (download)',    answer: 'download', acceptedVariants: [],                          explanation: 'ในประโยค if ใช้ present simple: download' },
        { id: 'b1u3-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                      options: ['If you will click, it opens.','If you click, it will open.','If you clicked, it will open.','If you click, it opens will.'], correctIndex: 1, explanation: 'if + present, will + verb' },
        { id: 'b1u3-t-07', type: 'fill-in-blank',   prompt: '"___ you save your work, you will lose it." (ถ้าไม่)', answer: 'Unless', acceptedVariants: ['unless'],                  explanation: 'Unless = if not' },
        { id: 'b1u3-t-08', type: 'multiple-choice', prompt: 'In the podcast, why should you update your phone?', options: ['To change colour','To keep it secure','To add adverts','To use more data'], correctIndex: 1, explanation: 'อัปเดตเพื่อความปลอดภัย' },
        { id: 'b1u3-t-09', type: 'multiple-choice', prompt: 'In the podcast, what protects your personal data?', options: ['A weak password','A strong password','No password','An old phone'], correctIndex: 1, explanation: 'รหัสผ่านที่แข็งแรงปกป้องข้อมูล' },
        { id: 'b1u3-t-10', type: 'multiple-choice', prompt: 'According to the article, AI is...',              options: ['Always dangerous','A tool that must be used responsibly','Useless','Illegal'], correctIndex: 1, explanation: 'AI เป็นเครื่องมือที่ต้องใช้อย่างมีความรับผิดชอบ' },
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────
  // B1 Unit 4: Education
  // ─────────────────────────────────────────────────────────────
  {
    id: 'b1-unit-4',
    title: 'Unit 4: Education',
    thai: 'บทที่ 4: การศึกษา',
    emoji: '🎓',

    vocabulary: {
      id: 'b1-unit-4-vocab',
      title: 'Education',
      thai: 'การศึกษา',
      emoji: '🎓',
      level: 'B1',
      words: [
        { word: 'knowledge',    pos: 'noun',      ipa: '/ˈnɒl.ɪdʒ/',       emoji: '📚', thai: 'ความรู้',           def: 'information and understanding that you gain through learning',          example: 'Reading widely increases your knowledge.',             synonym: null,         antonym: 'ignorance' },
        { word: 'graduate',     pos: 'verb',      ipa: '/ˈɡrædʒ.u.eɪt/',   emoji: '🎓', thai: 'สำเร็จการศึกษา',    def: 'to complete your studies at a school or university',                    example: 'She will graduate from university next year.',         synonym: null,         antonym: null },
        { word: 'assignment',   pos: 'noun',      ipa: '/əˈsaɪn.mənt/',    emoji: '📝', thai: 'งานที่ได้รับมอบหมาย', def: 'a piece of work given to a student to complete',                        example: 'The teacher gave us a difficult assignment.',          synonym: 'task',       antonym: null },
        { word: 'scholarship',  pos: 'noun',      ipa: '/ˈskɒl.ər.ʃɪp/',   emoji: '🏅', thai: 'ทุนการศึกษา',       def: 'money given to a student to help pay for their education',              example: 'He won a scholarship to study abroad.',                synonym: 'grant',      antonym: null },
        { word: 'lecture',      pos: 'noun',      ipa: '/ˈlek.tʃər/',      emoji: '🧑‍🏫', thai: 'การบรรยาย',        def: 'a formal talk given to teach people about a subject',                   example: 'The professor gave an interesting lecture on history.', synonym: 'talk',       antonym: null },
        { word: 'improve',      pos: 'verb',      ipa: '/ɪmˈpruːv/',       emoji: '📈', thai: 'พัฒนา / ปรับปรุง',   def: 'to become better or make something better',                             example: 'Practice will improve your English.',                  synonym: 'enhance',    antonym: 'worsen' },
        { word: 'curriculum',   pos: 'noun',      ipa: '/kəˈrɪk.jə.ləm/',  emoji: '📋', thai: 'หลักสูตร',         def: 'the subjects that are taught in a school or course',                    example: 'English is part of the school curriculum.',            synonym: 'syllabus',   antonym: null },
        { word: 'motivated',    pos: 'adjective', ipa: '/ˈmoʊ.tɪ.veɪ.tɪd/', emoji: '🔥', thai: 'มีแรงจูงใจ',       def: 'having a strong reason to work hard and succeed',                       example: 'Motivated students learn much faster.',                synonym: 'driven',     antonym: 'lazy' },
      ]
    },

    grammar: {
      id: 'b1-unit-4-grammar',
      title: '"Used to" & Past Habits',
      thai: 'การใช้ "used to" กับนิสัยในอดีต',
      emoji: '📐',
      level: 'B1',
      summary: 'ใช้ "used to + verb" เพื่อพูดถึงนิสัยหรือสถานการณ์ในอดีตที่ไม่เป็นจริงแล้วในปัจจุบัน เหมาะกับการเปรียบเทียบอดีตกับปัจจุบัน',
      explanation: [
        {
          heading: 'โครงสร้าง used to',
          body: 'subject + used to + verb (base form)\n\nI used to study late at night.\n(เมื่อก่อนฉันเคยเรียนดึก แต่ตอนนี้ไม่แล้ว)\n\n💡 used to ใช้พูดถึงสิ่งที่เคยทำเป็นประจำในอดีต แต่หยุดแล้ว'
        },
        {
          heading: 'ปฏิเสธและคำถาม',
          body: 'ปฏิเสธ: didn\'t use to + verb (ตัด d ออก)\n→ I didn\'t use to like exams.\n\nคำถาม: Did + subject + use to + verb?\n→ Did you use to walk to school?\n\n⚠️ ในรูปปฏิเสธและคำถามใช้ "use to" (ไม่มี d)'
        },
        {
          heading: 'used to vs. ปัจจุบัน',
          body: 'used to = อดีตที่ไม่จริงแล้ว\n→ She used to hate reading, but now she loves it.\n\nอย่าสับสนกับ "be used to" (คุ้นเคยกับ) ซึ่งตามด้วย V-ing\n→ I am used to studying online. (คุ้นเคยแล้ว)'
        }
      ],
      examples: [
        { en: 'I used to walk to school every day.',              th: 'เมื่อก่อนฉันเคยเดินไปโรงเรียนทุกวัน' },
        { en: 'She used to hate maths, but now she loves it.',    th: 'เมื่อก่อนเธอเคยเกลียดคณิต แต่ตอนนี้เธอชอบมัน' },
        { en: 'We used to have classes on Saturdays.',            th: 'เมื่อก่อนพวกเราเคยมีเรียนวันเสาร์' },
        { en: 'He didn\'t use to enjoy reading.',                 th: 'เมื่อก่อนเขาไม่เคยชอบการอ่าน' },
        { en: 'Did you use to study at this university?',         th: 'เมื่อก่อนคุณเคยเรียนที่มหาวิทยาลัยนี้ไหม?' },
        { en: 'There used to be only one library here.',         th: 'เมื่อก่อนที่นี่เคยมีห้องสมุดแค่แห่งเดียว' },
      ],
      practice: [
        { id: 'b1u4-gr-p1', type: 'fill-in-blank',  prompt: 'I ___ to walk to school. (used)',                       answer: 'used', acceptedVariants: [],           explanation: 'used to + verb สำหรับนิสัยในอดีต' },
        { id: 'b1u4-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct negative: "He ___ like exams."',     options: ['didn\'t used to','didn\'t use to','doesn\'t use to','not used to'], correctIndex: 1, explanation: 'รูปปฏิเสธใช้ didn\'t use to (ไม่มี d)' },
        { id: 'b1u4-gr-p3', type: 'fill-in-blank',  prompt: 'She used ___ study late at night. (to)',                answer: 'to',   acceptedVariants: [],           explanation: 'used to + verb เสมอ' },
        { id: 'b1u4-gr-p4', type: 'multiple-choice', prompt: 'Which question is correct?',                           options: ['Did you used to walk?','Did you use to walk?','Do you used to walk?','Are you use to walk?'], correctIndex: 1, explanation: 'คำถามใช้ Did + use to (ไม่มี d)' },
      ],
      quiz: [
        { id: 'b1u4-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                         options: ['I use to study here.','I used to study here.','I used study here.','I am used study here.'], correctIndex: 1, explanation: 'used to + verb สำหรับอดีต' },
        { id: 'b1u4-gr-q2', type: 'fill-in-blank',  prompt: 'We ___ to have classes on Saturday. (used)',           answer: 'used', acceptedVariants: [],           explanation: 'used to + verb' },
        { id: 'b1u4-gr-q3', type: 'multiple-choice', prompt: 'Complete: "He ___ enjoy reading, but now he does."',   options: ['didn\'t used to','didn\'t use to','use to not','not use to'], correctIndex: 1, explanation: 'ปฏิเสธใช้ didn\'t use to' },
        { id: 'b1u4-gr-q4', type: 'fill-in-blank',  prompt: 'Did you ___ to walk to school? (use)',                 answer: 'use',  acceptedVariants: [],           explanation: 'ในคำถามใช้ use to (ไม่มี d)' },
      ]
    },

    listening: {
      id: 'b1-unit-4-listening',
      type: 'Conversation',
      title: 'Choosing a University Course',
      thai: 'การเลือกหลักสูตรมหาวิทยาลัย',
      emoji: '🎧',
      level: 'B1',
      segments: [
        { speaker: 'Advisor', text: 'Hello Ploy. Have you decided what you want to study?',                    thai: 'สวัสดีพลอย คุณตัดสินใจแล้วหรือยังว่าจะเรียนอะไร?' },
        { speaker: 'Ploy',    text: 'I\'m interested in business, but I also love computer science.',         thai: 'ฉันสนใจธุรกิจ แต่ก็รักวิทยาการคอมพิวเตอร์ด้วยค่ะ' },
        { speaker: 'Advisor', text: 'Both are excellent. Do you know about the scholarship for top students?', thai: 'ทั้งสองยอดเยี่ยม คุณรู้เรื่องทุนสำหรับนักเรียนเก่งไหม?' },
        { speaker: 'Ploy',    text: 'Yes! If I get good grades, will I be able to apply?',                    thai: 'ค่ะ ถ้าฉันได้เกรดดี ฉันจะสามารถสมัครได้ไหมคะ?' },
        { speaker: 'Advisor', text: 'Of course. The scholarship covers most of your tuition fees.',           thai: 'แน่นอน ทุนนี้ครอบคลุมค่าเล่าเรียนส่วนใหญ่' },
        { speaker: 'Ploy',    text: 'That would really help my family. What is the curriculum like?',         thai: 'นั่นจะช่วยครอบครัวฉันได้มาก หลักสูตรเป็นอย่างไรบ้างคะ?' },
        { speaker: 'Advisor', text: 'You\'ll have lectures, group projects, and one assignment each month.',  thai: 'คุณจะมีการบรรยาย โปรเจกต์กลุ่ม และงานหนึ่งชิ้นในแต่ละเดือน' },
        { speaker: 'Ploy',    text: 'That sounds great. I feel very motivated to start.',                     thai: 'ฟังดูดีมากค่ะ ฉันรู้สึกมีแรงจูงใจมากที่จะเริ่มเรียน' },
      ],
      questions: [
        { id: 'b1u4-ls-q1', type: 'multiple-choice', prompt: 'What two subjects is Ploy interested in?', options: ['Art and music','Business and computer science','Law and history','Maths and biology'], correctIndex: 1, explanation: 'พลอยสนใจธุรกิจและวิทยาการคอมพิวเตอร์' },
        { id: 'b1u4-ls-q2', type: 'multiple-choice', prompt: 'What does the scholarship cover?',        options: ['Books only','Most tuition fees','Travel costs','Nothing'], correctIndex: 1, explanation: 'ทุนครอบคลุมค่าเล่าเรียนส่วนใหญ่' },
        { id: 'b1u4-ls-q3', type: 'multiple-choice', prompt: 'How often is there an assignment?',       options: ['Every week','Every month','Every day','Every year'], correctIndex: 1, explanation: 'มีงานหนึ่งชิ้นในแต่ละเดือน' },
        { id: 'b1u4-ls-q4', type: 'multiple-choice', prompt: 'How does Ploy feel at the end?',          options: ['Bored','Motivated','Worried','Tired'], correctIndex: 1, explanation: 'พลอยรู้สึกมีแรงจูงใจ (motivated)' },
      ]
    },

    reading: {
      id: 'b1-unit-4-reading',
      type: 'Article',
      title: 'The Benefits of Lifelong Learning',
      thai: 'ประโยชน์ของการเรียนรู้ตลอดชีวิต',
      emoji: '📖',
      level: 'B1',
      minutes: 4,
      paragraphs: [
        'Many people believe that learning stops when we leave school or university. In reality, education can and should continue throughout our whole lives. This idea is known as lifelong learning, and it has become more important than ever in our fast-changing world.',
        'One clear benefit is that lifelong learning keeps our minds active and healthy. Studies suggest that people who continue to learn new skills, such as a language or a musical instrument, stay mentally sharp for longer. Learning also gives us confidence and a sense of achievement.',
        'Lifelong learning is also useful for our careers. Technology changes quickly, so the skills we learned years ago may no longer be enough. Workers who keep improving their knowledge are more likely to be promoted or to find better jobs. Many companies now offer courses to help their staff develop.',
        'Best of all, learning has never been easier. Thanks to the internet, we can take online courses, watch lectures, and read articles from anywhere in the world, often for free. All we need is curiosity and the motivation to begin. It is never too late to learn something new.',
      ],
      dialogue: null,
      glossary: [
        { word: 'lifelong learning', thai: 'การเรียนรู้ตลอดชีวิต', def: 'the idea of continuing to learn throughout your whole life' },
        { word: 'mentally sharp',    thai: 'มีสมองที่คมชัด',      def: 'able to think clearly and quickly' },
        { word: 'achievement',       thai: 'ความสำเร็จ',          def: 'something good that you succeed in doing through effort' },
        { word: 'curiosity',         thai: 'ความอยากรู้อยากเห็น',  def: 'a strong desire to learn or know about something' },
      ],
      summary: 'The article explains that learning should continue throughout life. Lifelong learning keeps the mind healthy, helps careers as technology changes, and is now easy and often free thanks to the internet.',
      summaryThai: 'บทความอธิบายว่าการเรียนรู้ควรดำเนินต่อไปตลอดชีวิต การเรียนรู้ตลอดชีวิตช่วยให้สมองแข็งแรง ช่วยด้านอาชีพเมื่อเทคโนโลยีเปลี่ยนแปลง และตอนนี้ทำได้ง่ายและมักฟรีด้วยอินเทอร์เน็ต',
      questions: [
        { id: 'b1u4-rd-q1', type: 'multiple-choice', prompt: 'What is "lifelong learning"?',                    options: ['Learning only at school','Continuing to learn throughout life','Learning a single subject','Stopping learning after university'], correctIndex: 1, explanation: 'การเรียนรู้ตลอดชีวิตคือการเรียนต่อไปตลอดชีวิต' },
        { id: 'b1u4-rd-q2', type: 'multiple-choice', prompt: 'How does lifelong learning help the mind?',      options: ['It makes it tired','It keeps it active and sharp','It has no effect','It causes stress'], correctIndex: 1, explanation: 'ช่วยให้สมองแข็งแรงและคมชัด' },
        { id: 'b1u4-rd-q3', type: 'multiple-choice', prompt: 'Why is lifelong learning useful for careers?',   options: ['Technology never changes','Skills can become out of date','Jobs are always the same','It is required by law'], correctIndex: 1, explanation: 'เทคโนโลยีเปลี่ยนเร็ว ทักษะเก่าอาจไม่พอ' },
        { id: 'b1u4-rd-q4', type: 'fill-in-blank',   prompt: 'All we need is curiosity and the ___ to begin.',   answer: 'motivation', acceptedVariants: ['motivation.'], explanation: 'บทความบอกว่าต้องมีแรงจูงใจ (motivation)' },
      ]
    },

    test: {
      id: 'b1-unit-4-test',
      passMark: 0.70,
      questions: [
        { id: 'b1u4-t-01', type: 'multiple-choice', prompt: '"ทุนการศึกษา" ในภาษาอังกฤษคือคำใด?',            options: ['lecture','scholarship','assignment','curriculum'],      correctIndex: 1, explanation: '"scholarship" = ทุนการศึกษา' },
        { id: 'b1u4-t-02', type: 'multiple-choice', prompt: 'What does "graduate" mean?',                      options: ['เริ่มเรียน','สำเร็จการศึกษา','ลาออก','สอบตก'],           correctIndex: 1, explanation: '"graduate" = สำเร็จการศึกษา' },
        { id: 'b1u4-t-03', type: 'fill-in-blank',   prompt: 'คำตรงข้ามของ "improve" คือ ___',                answer: 'worsen', acceptedVariants: ['worsen.'],                   explanation: '"worsen" (แย่ลง) ตรงข้ามกับ improve' },
        { id: 'b1u4-t-04', type: 'multiple-choice', prompt: '"I ___ to walk to school." เติมคำใดถูกต้อง?',     options: ['use','used','using','uses'],                            correctIndex: 1, explanation: 'used to + verb สำหรับนิสัยในอดีต' },
        { id: 'b1u4-t-05', type: 'fill-in-blank',   prompt: 'Did you ___ to study here? (use)',               answer: 'use',  acceptedVariants: [],                              explanation: 'ในคำถามใช้ use to (ไม่มี d)' },
        { id: 'b1u4-t-06', type: 'multiple-choice', prompt: 'Which sentence is correct?',                      options: ['I use to live here.','I used to live here.','I used live here.','I am used live here.'], correctIndex: 1, explanation: 'used to + verb' },
        { id: 'b1u4-t-07', type: 'fill-in-blank',   prompt: 'He didn\'t ___ to like exams. (use)',            answer: 'use',  acceptedVariants: [],                              explanation: 'ปฏิเสธใช้ didn\'t use to (ไม่มี d)' },
        { id: 'b1u4-t-08', type: 'multiple-choice', prompt: 'In the listening, what does the scholarship cover?', options: ['Books only','Most tuition fees','Food','Nothing'],    correctIndex: 1, explanation: 'ทุนครอบคลุมค่าเล่าเรียนส่วนใหญ่' },
        { id: 'b1u4-t-09', type: 'multiple-choice', prompt: 'In the listening, how often is there an assignment?', options: ['Weekly','Monthly','Daily','Yearly'],                 correctIndex: 1, explanation: 'มีงานหนึ่งชิ้นในแต่ละเดือน' },
        { id: 'b1u4-t-10', type: 'multiple-choice', prompt: 'According to the article, why is lifelong learning easy now?', options: ['Schools are free','Because of the internet','It is required','Teachers visit homes'], correctIndex: 1, explanation: 'ทำได้ง่ายเพราะอินเทอร์เน็ต' },
      ]
    }
  }
]
