export const lessons = [
  {
    id: 'a1-greetings-01',
    title: 'Nice to meet you — Greetings & Introductions',
    level: 'A1',
    topic: 'speaking',
    estimatedMinutes: 6,
    description: 'Learn how to greet people and introduce yourself in English.',
    vocabularyDeckId: 'a1-greetings-vocab',
    quizId: 'a1-greetings-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Why this matters',
        body: 'The first thing anyone does in English is say hello. But Thai learners often make one common mistake: saying "I am Ploy" instead of "My name is Ploy." Both can work, but knowing when to use each one will make you sound more natural right away.'
      },
      {
        type: 'explanation',
        heading: 'Greeting someone',
        body: 'Use these phrases to greet people at different times of day or in different situations:'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Hello! / Hi!', th: 'สวัสดี! (ทั่วไป)' },
          { en: 'Good morning.', th: 'สวัสดีตอนเช้า' },
          { en: 'Good afternoon.', th: 'สวัสดีตอนบ่าย' },
          { en: 'Good evening.', th: 'สวัสดีตอนเย็น' },
          { en: 'How are you?', th: 'เป็นยังไงบ้าง?' },
          { en: "I'm fine, thank you.", th: 'ฉันสบายดี ขอบคุณ' }
        ]
      },
      {
        type: 'tip',
        body: '💡 "Good night" is NOT a greeting — it\'s a farewell used before bed. Don\'t say "Good night" when you arrive somewhere!'
      },
      {
        type: 'explanation',
        heading: 'Introducing yourself',
        body: 'When you meet someone new, use these phrases:'
      },
      {
        type: 'example',
        sentences: [
          { en: 'My name is Ploy.', th: 'ชื่อของฉันคือพลอย' },
          { en: "I'm Ploy.", th: 'ฉันชื่อพลอย (ลดรูป)' },
          { en: "Nice to meet you.", th: 'ยินดีที่ได้รู้จัก' },
          { en: 'Nice to meet you too.', th: 'ยินดีที่ได้รู้จักเช่นกัน' },
          { en: 'I\'m from Thailand.', th: 'ฉันมาจากประเทศไทย' },
          { en: 'I live in Bangkok.', th: 'ฉันอาศัยอยู่ในกรุงเทพฯ' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'A', text: 'Hi! My name is James. What\'s your name?' },
          { speaker: 'B', text: "Hello! I'm Nong. Nice to meet you, James." },
          { speaker: 'A', text: 'Nice to meet you too, Nong. Where are you from?' },
          { speaker: 'B', text: "I'm from Thailand. What about you?" },
          { speaker: 'A', text: "I'm from England. I'm a teacher here." }
        ]
      }
    ]
  },
  {
    id: 'b1-present-perfect-01',
    title: "I've been waiting — The Present Perfect",
    level: 'B1',
    topic: 'grammar',
    estimatedMinutes: 10,
    description: 'Master the Present Perfect tense — one of the trickiest points for Thai learners.',
    vocabularyDeckId: 'b1-present-perfect-vocab',
    quizId: 'b1-present-perfect-quiz',
    sections: [
      {
        type: 'intro',
        heading: "Why Thai speakers struggle with this",
        body: 'Thai has no tense system — context and time words do all the work. English has a special tense for actions connected to the present moment: the Present Perfect. The key question is: "Is the action finished at a specific past time, or does it still connect to now?"'
      },
      {
        type: 'explanation',
        heading: 'The formula',
        body: 'Present Perfect = have/has + past participle (V3)\n\nUse it when:\n• Something happened in the past but the exact time is unknown or unimportant\n• An action has a result you can see or feel right now\n• Something started in the past and is still true now'
      },
      {
        type: 'example',
        sentences: [
          { en: "I've eaten durian before.", th: 'ฉันเคยกินทุเรียนมาก่อน (ไม่สำคัญว่าเมื่อไหร่)' },
          { en: 'She has already left.', th: 'เธอออกไปแล้ว (ผลคือตอนนี้ไม่อยู่)' },
          { en: "He hasn't arrived yet.", th: 'เขายังไม่มา (ยังไม่เสร็จสิ้น)' },
          { en: "They've lived here for 3 years.", th: 'พวกเขาอาศัยอยู่ที่นี่มา 3 ปีแล้ว (ยังอยู่)' },
          { en: 'Have you ever been to London?', th: 'คุณเคยไปลอนดอนไหม?' }
        ]
      },
      {
        type: 'tip',
        body: '⚠️ Common mistake: "I have seen him yesterday." ✗\n\n"Yesterday" is a finished time, so you MUST use Simple Past:\n"I saw him yesterday." ✓\n\nNever use Present Perfect with finished time words: yesterday, last week, in 2020, ago.'
      },
      {
        type: 'explanation',
        heading: 'Already, Yet, Ever, For, Since',
        body: 'These signal words often appear with Present Perfect and help you understand the meaning:'
      },
      {
        type: 'example',
        sentences: [
          { en: 'already — She has already finished.', th: 'แล้ว — เธอทำเสร็จแล้ว (เร็วกว่าที่คาด)' },
          { en: "yet — Have you eaten yet?", th: 'ยัง/แล้ว — คุณกินข้าวแล้วหรือยัง? (ใช้ในคำถาม/ปฏิเสธ)' },
          { en: 'ever — Have you ever tried surfing?', th: 'เคย — คุณเคยลองเล่นเซิร์ฟไหม?' },
          { en: "for — I've studied English for 5 years.", th: 'มาเป็นเวลา — ฉันเรียนภาษาอังกฤษมา 5 ปีแล้ว' },
          { en: "since — She's worked here since 2020.", th: 'ตั้งแต่ — เธอทำงานที่นี่ตั้งแต่ปี 2020' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'A', text: "Have you been to Chiang Mai before?" },
          { speaker: 'B', text: "Yes! I've visited three times. Have you?" },
          { speaker: 'A', text: "No, I haven't been there yet. I've always wanted to go." },
          { speaker: 'B', text: "You should go! I've already booked my trip for next month." }
        ]
      }
    ]
  },
  {
    id: 'b1-phone-calls-01',
    title: "I'm calling about my order — Phone Calls & Voicemails",
    level: 'B1',
    topic: 'speaking',
    estimatedMinutes: 11,
    description: 'Learn how to make and receive phone calls in English — from asking for someone to leaving a professional voicemail.',
    vocabularyDeckId: 'b1-phone-vocab',
    quizId: 'b1-phone-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Why phone calls are hard',
        body: 'Phone calls in English are stressful for Thai learners because you cannot see the other person\'s face or use body language to help understand. You must rely entirely on words. The good news: most phone calls follow a predictable pattern. Once you know the script, you can handle almost any call.'
      },
      {
        type: 'explanation',
        heading: 'Starting a call',
        body: 'The first few seconds of a call establish who you are and why you are calling. Use these phrases to open clearly:'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Hello, this is Mint calling from BKK Solutions.', th: 'สวัสดีค่ะ นี่คือมิ้นท์ โทรมาจาก BKK Solutions' },
          { en: "Hi, could I speak to Sarah, please?", th: 'สวัสดีครับ ขอพูดกับซาราห์ได้ไหมครับ?' },
          { en: "I'm calling about my order — number TH-4892.", th: 'ฉันโทรมาเรื่องออร์เดอร์ของฉัน หมายเลข TH-4892' },
          { en: 'Is this a good time to talk?', th: 'ตอนนี้สะดวกคุยไหมคะ?' }
        ]
      },
      {
        type: 'tip',
        body: '💡 Always say who you are before asking for someone. Saying "Can I speak to Sarah?" without identifying yourself sounds abrupt. Say "This is [name] — could I speak to Sarah?" instead.'
      },
      {
        type: 'explanation',
        heading: 'Asking someone to wait — putting on hold',
        body: 'In business calls, you will often need to ask someone to wait or be transferred:'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Could you hold for a moment, please?', th: 'รอสักครู่ได้ไหมคะ?' },
          { en: "I'll put you through to the accounts department.", th: 'ฉันจะโอนสายคุณไปยังฝ่ายบัญชี' },
          { en: 'The line is engaged — would you like to hold or call back?', th: 'สายไม่ว่าง — คุณจะรอหรือโทรกลับ?' },
          { en: "I'm afraid he's not available right now.", th: 'โชคไม่ดีเลย ตอนนี้เขาไม่ว่างครับ' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Leaving a voicemail',
        body: 'When no one answers, leave a clear voicemail. Always include: your name, your number, your reason for calling, and the best time to call back.'
      },
      {
        type: 'example',
        sentences: [
          { en: "Hi, this is Ploy. My number is 081-234-5678.", th: 'สวัสดีค่ะ นี่คือพลอย เบอร์ของฉันคือ 081-234-5678' },
          { en: "I'm calling about my delivery — it was supposed to arrive yesterday.", th: 'ฉันโทรมาเรื่องการจัดส่ง ควรจะมาถึงเมื่อวาน' },
          { en: 'Could you call me back before 5 p.m. today?', th: 'คุณโทรกลับมาก่อน 5 โมงเย็นวันนี้ได้ไหม?' },
          { en: 'Thank you — I look forward to hearing from you.', th: 'ขอบคุณนะคะ รอฟังข่าวจากคุณอยู่' }
        ]
      },
      {
        type: 'tip',
        body: '⚠️ Common mistake: Thai learners often forget to leave their phone number in a voicemail, or speak too fast. Speak slowly and say your number TWICE — once at the start and once at the end.'
      },
      {
        type: 'explanation',
        heading: 'Clarifying and asking to repeat',
        body: 'On phone calls, it is perfectly normal — and expected — to ask for clarification. These phrases are polite and professional:'
      },
      {
        type: 'example',
        sentences: [
          { en: "I'm sorry, could you repeat that?", th: 'ขอโทษนะคะ พูดซ้ำได้ไหม?' },
          { en: 'Could you speak a little more slowly, please?', th: 'ช่วยพูดช้าๆ หน่อยได้ไหมคะ?' },
          { en: 'Sorry — did you say Thursday or Tuesday?', th: 'ขอโทษนะครับ คุณบอกว่าวันพฤหัสหรือวันอังคาร?' },
          { en: 'Could you spell that for me?', th: 'สะกดตัวอักษรให้ฉันได้ไหม?' },
          { en: "Let me read that back to you — the reference number is TH-4892.", th: 'ขอทวนกลับนะคะ หมายเลขอ้างอิงคือ TH-4892' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Receptionist', text: "Good afternoon, Parker & Associates, how can I help you?" },
          { speaker: 'Ploy', text: "Hello, this is Ploy Srisuk calling. Could I speak to Mr. Davis in sales, please?" },
          { speaker: 'Receptionist', text: "Of course — I'll put you through. Could you hold for a moment?" },
          { speaker: 'Ploy', text: "Yes, that's fine, thank you." },
          { speaker: 'Receptionist', text: "I'm afraid Mr. Davis is on another call right now. Would you like to leave a message?" },
          { speaker: 'Ploy', text: "Yes, please. Could you tell him I called about invoice number 1047? My name is Ploy — P-L-O-Y — and my number is 02-555-8823." },
          { speaker: 'Receptionist', text: "Certainly. I'll make sure he gets the message." },
          { speaker: 'Ploy', text: "Thank you very much. Goodbye!" }
        ]
      },
      {
        type: 'explanation',
        heading: 'Ending a call',
        body: 'End calls clearly and politely. Avoid just saying "Okay, bye" and hanging up — wrap up the conversation first:'
      },
      {
        type: 'example',
        sentences: [
          { en: "Is there anything else I can help you with?", th: 'มีอะไรอื่นที่ฉันช่วยได้ไหม?' },
          { en: "I think that covers everything — thank you for your help.", th: 'ฉันคิดว่าครอบคลุมทุกอย่างแล้ว ขอบคุณสำหรับความช่วยเหลือ' },
          { en: "I'll follow up with an email.", th: 'ฉันจะส่งอีเมลติดตาม' },
          { en: "Thank you for calling. Have a good day!", th: 'ขอบคุณที่โทรมา ขอให้มีวันที่ดีนะครับ!' }
        ]
      }
    ]
  },
  {
    id: 'b1-doctor-01',
    title: "I have a pain in my chest — At the Doctor",
    level: 'B1',
    topic: 'speaking',
    estimatedMinutes: 10,
    description: 'Learn how to describe symptoms, make appointments, and understand medical instructions in English.',
    vocabularyDeckId: 'b1-doctor-vocab',
    quizId: 'b1-doctor-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Medical English for Thai learners',
        body: 'Seeing a doctor in English can feel frightening if you do not know the vocabulary. Thai learners often make one very common error: saying "I have fever" instead of "I have a fever." In English, most illnesses need the article "a" — "a cold," "a headache," "a fever." This lesson gives you the language you need to describe what is wrong clearly and confidently.'
      },
      {
        type: 'explanation',
        heading: 'Describing your symptoms — the three key questions',
        body: 'Doctors in English-speaking countries will ask you three things:\n• WHERE does it hurt?\n• HOW LONG have you had this?\n• HOW BAD is it? (on a scale of 1–10)\n\nPrepare answers to all three before your appointment.'
      },
      {
        type: 'example',
        sentences: [
          { en: "I have a pain in my chest.", th: 'ฉันมีอาการปวดที่หน้าอก' },
          { en: "My stomach hurts — it started this morning.", th: 'ท้องฉันเจ็บ เริ่มตั้งแต่เช้า' },
          { en: "I've had a headache for two days.", th: 'ฉันปวดหัวมาสองวันแล้ว' },
          { en: "The pain is about a six out of ten.", th: 'ความเจ็บปวดประมาณหกจากสิบ' },
          { en: "It hurts more when I swallow.", th: 'เจ็บมากขึ้นเวลากลืน' }
        ]
      },
      {
        type: 'tip',
        body: '⚠️ Thai learner error: "I have fever / I have headache / I have cold" ✗\n\nAlways use the article "a":\n"I have a fever." ✓ / "I have a headache." ✓ / "I have a cold." ✓\n\nExceptions: "I have diarrhoea" and "I have cancer" — these do not use "a".'
      },
      {
        type: 'explanation',
        heading: 'Describing symptoms — useful vocabulary',
        body: 'Use these phrases to describe how you feel more precisely:'
      },
      {
        type: 'example',
        sentences: [
          { en: "I feel nauseous / I feel sick.", th: 'ฉันรู้สึกคลื่นไส้' },
          { en: "I have a rash on my arm.", th: 'ฉันมีผื่นที่แขน' },
          { en: "I'm dizzy / I feel faint.", th: 'ฉันเวียนหัว / รู้สึกจะเป็นลม' },
          { en: "My knee is swollen.", th: 'เข่าของฉันบวม' },
          { en: "I have a runny nose and a sore throat.", th: 'ฉันน้ำมูกไหลและเจ็บคอ' },
          { en: "I've been coughing for a week.", th: 'ฉันไอมาหนึ่งสัปดาห์แล้ว' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Making an appointment',
        body: 'Calling to book a doctor\'s appointment follows a simple pattern:'
      },
      {
        type: 'example',
        sentences: [
          { en: "I'd like to make an appointment to see Dr. Thompson.", th: 'ฉันต้องการนัดพบหมอทอมป์สัน' },
          { en: "Is it urgent or can it wait?", th: 'เร่งด่วนไหมหรือรอได้?' },
          { en: "It's not an emergency, but I'd like to be seen soon.", th: 'ไม่ใช่เหตุฉุกเฉิน แต่อยากพบหมอเร็วๆ นี้' },
          { en: "I have an allergy to penicillin.", th: 'ฉันแพ้ยาเพนิซิลลิน' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Doctor', text: "Good morning. What brings you in today?" },
          { speaker: 'Nong', text: "Good morning, Doctor. I've had a sore throat and a fever for about three days." },
          { speaker: 'Doctor', text: "I see. How high has your temperature been?" },
          { speaker: 'Nong', text: "It was 38.5 last night. I also have a cough, and I feel really tired." },
          { speaker: 'Doctor', text: "Any allergies to medication?" },
          { speaker: 'Nong', text: "No allergies that I know of." },
          { speaker: 'Doctor', text: "It looks like a throat infection. I'm going to prescribe antibiotics — take one tablet twice a day for seven days. Finish the full course, even if you feel better." },
          { speaker: 'Nong', text: "Should I come back if the symptoms don't improve?" },
          { speaker: 'Doctor', text: "Yes — if you're not better in three days, come back or call us. Drink plenty of fluids and rest." }
        ]
      },
      {
        type: 'explanation',
        heading: 'Understanding prescriptions and instructions',
        body: 'Make sure you understand these common doctor phrases before you leave:'
      },
      {
        type: 'example',
        sentences: [
          { en: "Take one tablet three times a day with food.", th: 'รับประทานยาหนึ่งเม็ด สามครั้งต่อวัน พร้อมอาหาร' },
          { en: "Finish the full course of antibiotics.", th: 'รับประทานยาปฏิชีวนะให้ครบชุด' },
          { en: "Avoid alcohol while taking this medication.", th: 'หลีกเลี่ยงแอลกอฮอล์ขณะรับประทานยานี้' },
          { en: "Come back if symptoms don't improve in 48 hours.", th: 'กลับมาถ้าอาการไม่ดีขึ้นใน 48 ชั่วโมง' },
          { en: "I'll refer you to a specialist.", th: 'ฉันจะส่งตัวคุณไปพบผู้เชี่ยวชาญ' }
        ]
      }
    ]
  },
  {
    id: 'b1-plans-01',
    title: "Are you free on Saturday? — Making Plans & Invitations",
    level: 'B1',
    topic: 'speaking',
    estimatedMinutes: 10,
    description: 'Learn how to invite people, accept and decline gracefully, suggest alternatives, and confirm or cancel plans.',
    vocabularyDeckId: 'b1-plans-vocab',
    quizId: 'b1-plans-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Social English that Thai learners often avoid',
        body: 'Many Thai learners can talk about themselves but find it hard to arrange plans in English. The biggest challenge is declining an invitation politely — in Thai culture, saying "no" directly can feel rude, so learners sometimes say nothing or make vague excuses. In English, a clear but warm decline is actually more polite than silence or a vague "maybe." This lesson gives you the exact phrases.'
      },
      {
        type: 'explanation',
        heading: 'Inviting someone',
        body: 'Use these phrases to invite someone to do something. Notice that "Do you want to...?" is casual, while "Would you like to...?" is more polite:'
      },
      {
        type: 'example',
        sentences: [
          { en: "Are you free on Saturday evening?", th: 'คุณว่างเย็นวันเสาร์ไหม?' },
          { en: "Would you like to come to my birthday dinner?", th: 'คุณอยากมางานอาหารค่ำวันเกิดฉันไหม?' },
          { en: "We're thinking of going to the night market — want to join us?", th: 'เรากำลังคิดจะไปตลาดกลางคืน อยากมาด้วยไหม?' },
          { en: "I was wondering if you'd like to grab coffee sometime.", th: 'ฉันสงสัยว่าคุณอยากไปดื่มกาแฟด้วยกันบางทีไหม' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Accepting an invitation',
        body: 'When you say yes, show enthusiasm! A flat "yes" can sound unfriendly:'
      },
      {
        type: 'example',
        sentences: [
          { en: "That sounds great — I'd love to come!", th: 'ฟังดูดีมาก อยากมาเลย!' },
          { en: "Yes, I'm free! What time should I arrive?", th: 'ใช่ ว่างเลย! ควรไปถึงกี่โมง?' },
          { en: "Count me in — I wouldn't miss it!", th: 'รับรองได้เลย ไม่พลาดแน่!' },
          { en: "I'd be happy to — thanks for the invitation.", th: 'ยินดีมากเลย ขอบคุณสำหรับคำเชิญ' }
        ]
      },
      {
        type: 'tip',
        body: '💡 When you accept, always show you are pleased. "Okay" alone sounds reluctant. Add "sounds great," "I\'d love to," or "that\'s perfect" to sound genuinely enthusiastic.'
      },
      {
        type: 'explanation',
        heading: 'Declining politely',
        body: 'A good decline has three parts: (1) express regret, (2) give a brief reason, (3) suggest an alternative or express hope for next time. You do not need to over-explain.'
      },
      {
        type: 'example',
        sentences: [
          { en: "I'd love to, but I already have plans that evening.", th: 'อยากมาเลย แต่มีแผนไว้แล้วคืนนั้น' },
          { en: "That's such a shame — I have a commitment I can't get out of.", th: 'น่าเสียดายมาก ฉันมีภาระผูกพันที่ยกเลิกไม่ได้' },
          { en: "I'm afraid I can't make it — could we try another time?", th: 'โชคไม่ดีไปไม่ได้ — ลองนัดเวลาอื่นได้ไหม?' },
          { en: "Can I take a raincheck? I'd really love to go another time.", th: 'ขอนัดใหม่ได้ไหม? อยากไปจริงๆ คราวหน้า' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'James', text: "Hey Mint! A few of us are going hiking this Sunday — are you free?" },
          { speaker: 'Mint', text: "Oh, that sounds fun! What time are you heading out?" },
          { speaker: 'James', text: "We're meeting at the park entrance at 7 a.m. It's about a three-hour trail." },
          { speaker: 'Mint', text: "I'd love to come, but I actually have a family commitment on Sunday morning. I'm really sorry." },
          { speaker: 'James', text: "No worries at all! We usually do this once a month — I'll let you know next time." },
          { speaker: 'Mint', text: "Please do! Can I confirm by Thursday for the next one? I'll check my schedule." },
          { speaker: 'James', text: "Of course. It'll be great to have you along." }
        ]
      },
      {
        type: 'explanation',
        heading: 'Confirming, postponing, and cancelling',
        body: 'Plans often change. Here is how to handle it without causing offence:'
      },
      {
        type: 'example',
        sentences: [
          { en: "Just confirming — we're still on for Friday, right?", th: 'ยืนยันก่อนนะ เรายังไปวันศุกร์อยู่ใช่ไหม?' },
          { en: "I'm so sorry — something came up and I need to reschedule.", th: 'ขอโทษมากนะ มีเรื่องขึ้นมา ขอนัดใหม่ได้ไหม?' },
          { en: "Would it be okay to push it back to next week?", th: 'เลื่อนไปสัปดาห์หน้าได้ไหม?' },
          { en: "I hate to cancel at the last minute, but I'm not feeling well.", th: 'ไม่อยากยกเลิกในนาทีสุดท้ายเลย แต่ฉันไม่ค่อยสบาย' }
        ]
      }
    ]
  },
  {
    id: 'b1-travel-01',
    title: "My flight has been delayed — Travel English",
    level: 'B1',
    topic: 'speaking',
    estimatedMinutes: 12,
    description: 'Handle airports, hotels, and travel problems confidently — from check-in to lost luggage.',
    vocabularyDeckId: 'b1-travel-vocab',
    quizId: 'b1-travel-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Travel is where English really matters',
        body: 'Thai travellers often manage fine until something goes wrong — a delayed flight, lost baggage, or a booking problem at the hotel. That is exactly when you need clear, confident English. This lesson covers the entire journey: airport check-in, security, boarding, hotel, and what to say when things do not go to plan.'
      },
      {
        type: 'explanation',
        heading: 'At the check-in desk',
        body: 'Check-in at an international airport follows a familiar script. Know these phrases and you will sail through:'
      },
      {
        type: 'example',
        sentences: [
          { en: "I'd like to check in for flight TG921 to London.", th: 'ฉันต้องการ check in สำหรับเที่ยวบิน TG921 ไปลอนดอน' },
          { en: "Window seat, please — if there's one available.", th: 'ขอที่นั่งริมหน้าต่างนะคะ ถ้ามีที่ว่าง' },
          { en: "I have one bag to check and one carry-on.", th: 'ฉันมีกระเป๋าเช็คอินหนึ่งใบและสัมภาระถือขึ้นเครื่องหนึ่งใบ' },
          { en: "Is my baggage within the weight limit?", th: 'กระเป๋าของฉันน้ำหนักเกินไหม?' },
          { en: "How much is the excess baggage fee?", th: 'ค่าธรรมเนียมกระเป๋าน้ำหนักเกินเท่าไหร่?' }
        ]
      },
      {
        type: 'tip',
        body: '💡 Your boarding pass is the most important document at the airport. Know what is printed on it: flight number, gate number, seat number, and boarding time. Staff may ask "What gate are you at?" — be ready to answer.'
      },
      {
        type: 'explanation',
        heading: 'Security and boarding',
        body: 'At security, you will hear instructions. These are the most common ones:'
      },
      {
        type: 'example',
        sentences: [
          { en: "Please remove your shoes and belt.", th: 'กรุณาถอดรองเท้าและเข็มขัด' },
          { en: "Place all liquids in a clear bag.", th: 'วางของเหลวทั้งหมดในถุงใสนะครับ' },
          { en: "Boarding will begin in 20 minutes at gate 14.", th: 'การขึ้นเครื่องจะเริ่มใน 20 นาที ที่ประตู 14' },
          { en: "We are now boarding passengers in rows 30 to 50.", th: 'ขณะนี้เรากำลังขึ้นเครื่องผู้โดยสารแถวที่ 30 ถึง 50' },
          { en: "Could I see your boarding pass and passport, please?", th: 'ขอดู boarding pass และหนังสือเดินทางของคุณได้ไหมครับ?' }
        ]
      },
      {
        type: 'explanation',
        heading: 'When things go wrong — flight problems',
        body: 'Delays and cancellations happen. Stay calm and use these phrases to get help:'
      },
      {
        type: 'example',
        sentences: [
          { en: "Excuse me — my flight has been delayed. Can you tell me when it will depart?", th: 'ขอโทษนะคะ เที่ยวบินของฉันถูกดีเลย์ บอกได้ไหมว่าจะออกเดินทางเมื่อไหร่?' },
          { en: "I've missed my connecting flight. What are my options?", th: 'ฉันพลาดเที่ยวบินต่อ มีตัวเลือกอะไรบ้าง?' },
          { en: "My baggage hasn't arrived — this is my baggage claim tag.", th: 'กระเป๋าของฉันยังไม่มา นี่คือบัตรรับกระเป๋าของฉัน' },
          { en: "I'd like to file a lost luggage report.", th: 'ฉันต้องการแจ้งกระเป๋าหาย' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Announcement', text: "We regret to inform passengers on flight BA012 to London that there will be a three-hour delay due to technical reasons." },
          { speaker: 'Ploy', text: "Excuse me — I'm on flight BA012 to London. I have a connecting flight at Heathrow at 11 p.m. Will I still make it?" },
          { speaker: 'Staff', text: "Let me check for you. When is your connecting flight?" },
          { speaker: 'Ploy', text: "It departs at 11:15 p.m. — it's flight VS201 to New York." },
          { speaker: 'Staff', text: "With a three-hour delay, you'll land at 10:30 p.m. It will be very tight. I'd recommend we rebook you on the next available flight to New York. May I see your passport and booking reference?" },
          { speaker: 'Ploy', text: "Yes, of course. Here you are. What about my checked baggage?" },
          { speaker: 'Staff', text: "We'll transfer it automatically. You'll receive a new boarding pass at the gate. Is there anything else I can help you with?" },
          { speaker: 'Ploy', text: "Is there a meal voucher for the delay?" },
          { speaker: 'Staff', text: "Yes — here is a £10 voucher valid at any restaurant in Terminal 5." }
        ]
      },
      {
        type: 'explanation',
        heading: 'Hotel check-in and check-out',
        body: 'At the hotel, you will need these phrases:'
      },
      {
        type: 'example',
        sentences: [
          { en: "I have a reservation under the name Ploy Srisuk.", th: 'ฉันมีการจองในชื่อพลอย ศรีสุข' },
          { en: "Could I have a room with a city view?", th: 'ขอห้องที่มองเห็นวิวเมืองได้ไหม?' },
          { en: "What time is check-out?", th: 'เช็คเอาท์กี่โมง?' },
          { en: "Could I store my luggage until 3 p.m.?", th: 'ฝากกระเป๋าไว้จนถึงบ่ายสามได้ไหม?' },
          { en: "I think there's been a mistake with my bill.", th: 'ฉันคิดว่ามีความผิดพลาดในบิลของฉัน' }
        ]
      }
    ]
  },
  {
    id: 'b2-polite-requests-01',
    title: 'Could you possibly…? — Softening Requests',
    level: 'B2',
    topic: 'business',
    estimatedMinutes: 12,
    description: 'Learn to make polite, indirect requests in professional and formal contexts.',
    vocabularyDeckId: 'b2-polite-vocab',
    quizId: 'b2-polite-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Directness vs. Politeness',
        body: 'Thai communication can be very direct between friends and formal in other contexts. English politeness works differently: in professional settings, making requests more indirect actually signals respect and confidence — not weakness. The longer and more tentative your request sounds, the more polite it is.'
      },
      {
        type: 'explanation',
        heading: 'The Politeness Scale',
        body: 'From most direct (abrupt) to most indirect (very polite):'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Send me the report. ✗ (command)', th: 'ส่งรายงานมาให้ฉัน (ฟังดูหยาบ)' },
          { en: 'Send me the report, please.', th: 'ส่งรายงานมาด้วย please (ยังค่อนข้างตรง)' },
          { en: 'Can you send me the report?', th: 'คุณส่งรายงานมาได้ไหม? (เป็นกันเอง)' },
          { en: 'Could you send me the report?', th: 'คุณช่วยส่งรายงานมาได้ไหม? (สุภาพ)' },
          { en: 'Would it be possible to send the report?', th: 'เป็นไปได้ไหมที่จะส่งรายงาน? (สุภาพมาก)' },
          { en: "I was wondering if you could send the report.", th: 'ฉันสงสัยว่าคุณจะส่งรายงานมาได้ไหม? (สุภาพที่สุด)' }
        ]
      },
      {
        type: 'tip',
        body: '💼 In a professional email, always use the bottom half of that scale. "Could you" is the safe minimum. "I was wondering if..." is ideal for sensitive requests or when asking a superior.'
      },
      {
        type: 'explanation',
        heading: 'Useful softening phrases',
        body: 'Add these phrases to make any request more polite:'
      },
      {
        type: 'example',
        sentences: [
          { en: "I'd appreciate it if you could review this.", th: 'ฉันจะขอบคุณมากถ้าคุณช่วยรีวิวสิ่งนี้' },
          { en: 'Would you mind checking this for me?', th: 'คุณจะรำคาญไหมถ้าช่วยตรวจสิ่งนี้ให้ฉัน?' },
          { en: 'When you have a moment, could you…', th: 'เมื่อคุณมีเวลา คุณช่วย…ได้ไหม?' },
          { en: 'I hate to bother you, but…', th: 'ฉันไม่อยากรบกวนนะ แต่…' },
          { en: 'If it\'s not too much trouble…', th: 'ถ้าไม่ยุ่งยากเกินไป…' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Nong', text: "Hi Sarah, I was wondering if you could take a look at my presentation draft when you have a moment." },
          { speaker: 'Sarah', text: "Of course! Could you send it to me by email?" },
          { speaker: 'Nong', text: "Absolutely. I'd really appreciate any feedback on the introduction — I'm not sure it flows well." },
          { speaker: 'Sarah', text: "No problem at all. Would it be alright if I get back to you by Thursday?" },
          { speaker: 'Nong', text: "That would be perfect. Thank you so much, I really appreciate it." }
        ]
      }
    ]
  },

  {
    id: 'b2-job-interview-01',
    title: 'Tell me about yourself — Job Interview English',
    level: 'B2',
    topic: 'business',
    estimatedMinutes: 15,
    description: 'Master the language of job interviews — from introducing yourself to negotiating salary.',
    vocabularyDeckId: 'b2-interview-vocab',
    quizId: 'b2-interview-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Why Thai candidates often undersell themselves',
        body: 'Thai culture values modesty and humility (ความถ่อมตน). This is a beautiful quality — but in an English-language job interview, being too modest can cost you the job. Interviewers expect you to confidently describe your achievements, skills, and ambitions. Saying "I am just a normal person, I try my best" will not impress a hiring manager. In this lesson, you will learn how to present yourself powerfully, professionally, and naturally — without sounding arrogant.'
      },
      {
        type: 'explanation',
        heading: '"Tell me about yourself" — The 3-Part Formula',
        body: 'This is almost always the first question. Use the Present–Past–Future structure:\n\n1. Present: your current role and what you do\n2. Past: relevant experience that supports your application\n3. Future: why this role is the right next step\n\nKeep your answer to about 90 seconds.'
      },
      {
        type: 'example',
        sentences: [
          { en: "I'm currently a marketing coordinator at a mid-sized logistics company, where I manage our social media channels and run monthly campaigns.", th: 'ตอนนี้ฉันเป็นผู้ประสานงานด้านการตลาดในบริษัทโลจิสติกส์ขนาดกลาง ซึ่งฉันดูแลช่องทางโซเชียลมีเดียและจัดแคมเปญรายเดือน' },
          { en: "Before that, I completed a degree in Business Administration and interned at two agencies, which gave me a strong foundation in digital marketing.", th: 'ก่อนหน้านั้น ฉันสำเร็จการศึกษาด้านบริหารธุรกิจและฝึกงานที่สองเอเจนซี ซึ่งทำให้ฉันมีพื้นฐานที่แข็งแกร่งด้านการตลาดดิจิทัล' },
          { en: "I'm now looking for a role where I can take on more strategic responsibility, which is exactly why this position at your company excited me.", th: 'ตอนนี้ฉันกำลังมองหาบทบาทที่รับผิดชอบเชิงกลยุทธ์มากขึ้น ซึ่งนั่นคือเหตุผลที่ตำแหน่งนี้ในบริษัทของคุณน่าสนใจมากสำหรับฉัน' }
        ]
      },
      {
        type: 'tip',
        body: '💼 Avoid starting with "My name is..." — the interviewer already knows your name. Also avoid: "I am a hard-working person." Everyone says this. Replace it with a specific achievement instead.'
      },
      {
        type: 'explanation',
        heading: 'The STAR Method for Behavioural Questions',
        body: 'Questions like "Tell me about a time when..." require a structured story. Use STAR:\n\nS — Situation: Set the context briefly\nT — Task: Explain your responsibility\nA — Action: Describe exactly what YOU did (use "I", not "we")\nR — Result: Quantify the outcome if possible\n\nCommon STAR questions: "Tell me about a challenge you overcame." / "Describe a time you showed leadership." / "Give me an example of when you worked under pressure."'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Situation: Last year, our team was given two weeks to launch a product campaign that normally takes six.', th: 'สถานการณ์: ปีที่แล้ว ทีมของเราได้รับเวลาสองสัปดาห์ในการเปิดตัวแคมเปญสินค้าที่ปกติต้องใช้เวลาหกสัปดาห์' },
          { en: 'Task: As the project lead, I was responsible for coordinating the creative, digital, and PR teams simultaneously.', th: 'งาน: ในฐานะหัวหน้าโครงการ ฉันรับผิดชอบในการประสานทีมสร้างสรรค์ ดิจิทัล และ PR พร้อมกัน' },
          { en: 'Action: I created a shared project tracker, held daily 15-minute stand-ups, and cut three non-essential deliverables after consulting stakeholders.', th: 'การกระทำ: ฉันสร้าง project tracker ร่วมกัน จัดประชุมแบบยืน 15 นาทีทุกวัน และตัดสิ่งส่งมอบที่ไม่จำเป็นสามรายการหลังจากปรึกษาผู้มีส่วนได้ส่วนเสีย' },
          { en: 'Result: We launched on time, and the campaign achieved 140% of its engagement target.', th: 'ผลลัพธ์: เราเปิดตัวตรงเวลา และแคมเปญบรรลุเป้าหมายการมีส่วนร่วม 140%' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Strengths, Weaknesses & Salary',
        body: 'Three questions that Thai candidates often find difficult:\n\n"What is your greatest strength?" → Choose ONE strength with a concrete example. Do not list five.\n\n"What is your greatest weakness?" → State a real weakness, then show what you are doing to improve it. Never say "I work too hard" — interviewers have heard it thousands of times.\n\n"What are your salary expectations?" → Research the market rate first. Then give a range: "Based on my research and experience, I am looking for something in the range of X to Y. Is that within your budget?"'
      },
      {
        type: 'example',
        sentences: [
          { en: 'My greatest strength is data analysis. In my current role, I built a dashboard that reduced our reporting time by 30%.', th: 'จุดแข็งที่ยิ่งใหญ่ที่สุดของฉันคือการวิเคราะห์ข้อมูล ในบทบาทปัจจุบัน ฉันสร้าง dashboard ที่ลดเวลาการรายงานลง 30%' },
          { en: 'One area I am working on is public speaking. I have been taking a presentation skills course and recently volunteered to lead two client meetings.', th: 'ด้านหนึ่งที่ฉันกำลังพัฒนาคือการพูดในที่สาธารณะ ฉันกำลังเรียนหลักสูตรทักษะการนำเสนอและเพิ่งอาสาเป็นผู้นำการประชุมลูกค้าสองครั้ง' },
          { en: 'Why this company? Your investment in sustainability aligns with my values, and I have followed your regional expansion with great interest.', th: 'ทำไมบริษัทนี้? การลงทุนของคุณด้านความยั่งยืนสอดคล้องกับค่านิยมของฉัน และฉันติดตามการขยายตัวในภูมิภาคของคุณด้วยความสนใจอย่างมาก' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Questions to ask the interviewer',
        body: 'Always prepare 2–3 questions to ask at the end. Asking nothing signals a lack of interest. Good questions focus on the role, team, or company — not on salary or holidays (save those for the offer stage).'
      },
      {
        type: 'example',
        sentences: [
          { en: 'What does success look like in this role in the first 90 days?', th: 'ความสำเร็จในบทบาทนี้ในช่วง 90 วันแรกมีลักษณะอย่างไร?' },
          { en: 'Can you tell me about the team I would be working with?', th: 'คุณช่วยบอกฉันเกี่ยวกับทีมที่ฉันจะทำงานด้วยได้ไหม?' },
          { en: 'What are the main challenges the team is currently facing?', th: 'ความท้าทายหลักที่ทีมกำลังเผชิญอยู่ในขณะนี้คืออะไร?' },
          { en: 'What opportunities are there for professional development?', th: 'มีโอกาสพัฒนาทางวิชาชีพอะไรบ้าง?' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Interviewer', text: "Thanks for coming in, Ploy. So — tell me about yourself." },
          { speaker: 'Ploy', text: "Thank you for having me. I'm currently a data analyst at a fintech startup in Bangkok, where I focus on customer behaviour and retention metrics. Before this, I studied Statistics at Chulalongkorn and interned at two banks. I'm now keen to move into a more product-facing role, so this position really appeals to me." },
          { speaker: 'Interviewer', text: "Great. Can you tell me about a time you had to deal with a difficult stakeholder?" },
          { speaker: 'Ploy', text: "Certainly. Last year, our marketing director wanted to proceed with a campaign based on incomplete data. I arranged a brief meeting, presented the risk clearly, and proposed a two-week delay to gather more reliable data. He agreed, and the campaign ultimately outperformed the previous quarter by 25%." },
          { speaker: 'Interviewer', text: "Impressive. Do you have any questions for us?" },
          { speaker: 'Ploy', text: "Yes — I'd love to know what success looks like in this role in the first six months." }
        ]
      },
      {
        type: 'explanation',
        heading: 'Additional interview phrases',
        body: 'Keep these ready for any interview:'
      },
      {
        type: 'example',
        sentences: [
          { en: "That's a great question — let me think about that for a moment.", th: 'นั่นเป็นคำถามที่ดี ขอฉันคิดสักครู่นะ' },
          { en: 'I would say my key strength is my ability to…', th: 'ฉันจะบอกว่าจุดแข็งหลักของฉันคือความสามารถในการ…' },
          { en: "I'm particularly proud of the time when…", th: 'ฉันภูมิใจเป็นพิเศษกับครั้งที่…' },
          { en: 'In terms of my long-term goals, I see myself…', th: 'ในแง่ของเป้าหมายระยะยาว ฉันมองเห็นตัวเองว่า…' },
          { en: "I'm a quick learner and I thrive in environments where…", th: 'ฉันเรียนรู้ได้เร็วและเจริญเติบโตในสภาพแวดล้อมที่…' }
        ]
      }
    ]
  },

  {
    id: 'b2-meetings-01',
    title: "Let's circle back on that — Meetings & Presentations",
    level: 'B2',
    topic: 'business',
    estimatedMinutes: 14,
    description: 'Navigate professional meetings and presentations with confidence — from opening remarks to action items.',
    vocabularyDeckId: 'b2-meetings-vocab',
    quizId: 'b2-meetings-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Meetings: where language really matters',
        body: 'For many Thai professionals, the hardest part of an international meeting is not understanding the content — it is knowing when and how to speak. In Thai meeting culture, junior employees often stay quiet out of respect (กรุณา). But in Western-style meetings, silence can be read as disengagement. This lesson gives you the exact phrases to open, interrupt, agree, disagree, and close meetings professionally.'
      },
      {
        type: 'explanation',
        heading: 'Opening and closing a meeting',
        body: 'The chair (person running the meeting) uses specific phrases to start and end efficiently. Even if you are not the chair, knowing these phrases helps you follow the structure.'
      },
      {
        type: 'example',
        sentences: [
          { en: "Right, let's get started. Thank you all for coming.", th: 'เอาล่ะ เริ่มกันเลย ขอบคุณทุกคนที่มา' },
          { en: "The purpose of today's meeting is to finalise the Q3 budget.", th: 'วัตถุประสงค์ของการประชุมวันนี้คือการสรุปงบประมาณ Q3' },
          { en: "I'd like to run through the agenda quickly. First we'll cover…, then…, and finally…", th: 'อยากพูดถึงวาระการประชุมอย่างรวดเร็ว ก่อนอื่นเราจะพูดถึง… จากนั้น… และสุดท้าย…' },
          { en: "That brings us to the end of the agenda. I'll circulate the minutes by end of day.", th: 'นั่นพาเรามาถึงจุดสิ้นสุดของวาระ ฉันจะส่งบันทึกการประชุมภายในสิ้นวัน' },
          { en: "Let's adjourn here. Thanks everyone — great work today.", th: 'ขอปิดการประชุมที่นี่ ขอบคุณทุกคน — ทำงานได้ดีมากวันนี้' }
        ]
      },
      {
        type: 'tip',
        body: '📋 "Minutes" in a meeting context means the written record of what was discussed and decided — not the unit of time. "I\'ll take the minutes" means "I\'ll write down what happens."'
      },
      {
        type: 'explanation',
        heading: 'Giving the floor and interrupting politely',
        body: 'In collaborative meetings, you must signal when you want to speak. Jumping in without signalling sounds rude. Wait for a pause, then use one of these phrases:'
      },
      {
        type: 'example',
        sentences: [
          { en: 'If I could just jump in here…', th: 'ถ้าฉันจะขอพูดแทรกตรงนี้…' },
          { en: 'Sorry to interrupt, but I wanted to add…', th: 'ขอโทษที่ขัด แต่ฉันอยากเพิ่มเติม…' },
          { en: 'Can I come back to something you said earlier?', th: 'ฉันขอกลับไปที่สิ่งที่คุณพูดก่อนหน้านี้ได้ไหม?' },
          { en: 'Before we move on, I just want to flag a concern.', th: 'ก่อนที่เราจะไปต่อ ฉันแค่อยากแจ้งความกังวลหนึ่งอย่าง' },
          { en: 'Could I have the floor for a moment?', th: 'ฉันขอพูดสักครู่ได้ไหม?' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Agreeing and disagreeing professionally',
        body: 'Direct disagreement ("No, you are wrong") is too blunt in most workplaces. Use these phrases to push back while staying collaborative:'
      },
      {
        type: 'example',
        sentences: [
          { en: "I take your point, but I'm not entirely convinced that…", th: 'ฉันเข้าใจประเด็นของคุณ แต่ฉันยังไม่ค่อยแน่ใจว่า…' },
          { en: "That's a fair point. I'd also want to consider…", th: 'นั่นเป็นประเด็นที่ยุติธรรม ฉันก็อยากพิจารณา…' },
          { en: "I see where you're coming from, though I think we should also look at…", th: 'ฉันเข้าใจมุมมองของคุณ แต่ฉันคิดว่าเราควรดูด้วยว่า…' },
          { en: 'Absolutely — that aligns perfectly with what I was thinking.', th: 'แน่นอนเลย — นั่นสอดคล้องกับสิ่งที่ฉันคิดอยู่พอดี' },
          { en: "I'm not sure we're all on the same page here.", th: 'ฉันไม่แน่ใจว่าเราทุกคนเข้าใจตรงกันตรงนี้' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Signposting in presentations',
        body: 'Signposting means telling your audience where you are going. Good presenters use it constantly — it makes complex information easy to follow.'
      },
      {
        type: 'example',
        sentences: [
          { en: "I'll start by giving you an overview, then move on to the data, and finish with our recommendations.", th: 'ฉันจะเริ่มด้วยการให้ภาพรวม จากนั้นไปที่ข้อมูล และจบด้วยข้อเสนอแนะของเรา' },
          { en: "As you can see from this slide…", th: 'อย่างที่คุณเห็นจากสไลด์นี้…' },
          { en: "I'd like to draw your attention to the figures on the right.", th: 'ฉันอยากให้คุณสนใจตัวเลขทางด้านขวา' },
          { en: 'To summarise the key takeaways from this section…', th: 'สรุปประเด็นสำคัญจากส่วนนี้…' },
          { en: "I'll now hand over to Khun Nong, who will walk us through the financials.", th: 'ตอนนี้ฉันจะส่งต่อให้คุณหนอง ซึ่งจะพาเราผ่านรายละเอียดทางการเงิน' }
        ]
      },
      {
        type: 'tip',
        body: '🗣️ Business jargon decoded:\n• "Circle back" = return to a topic later\n• "Take it offline" = discuss privately after the meeting\n• "Low-hanging fruit" = easy wins that can be achieved quickly\n• "Bandwidth" = capacity or availability (e.g. "I don\'t have the bandwidth for that right now")\n• "Synergy" = two things working together for a better result (often overused)'
      },
      {
        type: 'explanation',
        heading: 'Summarising and assigning action items',
        body: 'The most important part of a productive meeting is the close: summarising what was decided and who is doing what by when.'
      },
      {
        type: 'example',
        sentences: [
          { en: "Let's take stock of where we are. We've agreed to…", th: 'มาสรุปว่าเราอยู่ตรงไหน เราตกลงกันว่าจะ…' },
          { en: "So the action item here is for Lek to send the revised budget by Friday — is that correct?", th: 'ดังนั้นงานที่ต้องทำที่นี่คือเล็กส่งงบประมาณที่แก้ไขแล้วภายในวันศุกร์ — ถูกต้องไหม?' },
          { en: "I'll defer the discussion on the new office to next week's agenda.", th: 'ฉันจะเลื่อนการอภิปรายเรื่องสำนักงานใหม่ไปยังวาระสัปดาห์หน้า' },
          { en: "Can we reach a consensus on this and move forward?", th: 'เราสามารถหาข้อตกลงร่วมกันในเรื่องนี้และก้าวต่อไปได้ไหม?' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Chair (Ariya)', text: "Okay, let's get started. The goal today is to align on the product launch timeline. I'll take us through the three agenda items quickly." },
          { speaker: 'Tom', text: "Before we dive in — I just want to flag that the dev team may not have the bandwidth for a September launch." },
          { speaker: 'Ariya', text: "Thanks, Tom. Let's park that and come back to it when we hit timeline. First — marketing update?" },
          { speaker: 'Pim', text: "Sure. As you can see on this slide, we're on track for the campaign assets. I'd like to draw your attention to the influencer KPIs on the right." },
          { speaker: 'Tom', text: "I take your point on the influencers, but I'm not entirely convinced the ROI is there. Could we circle back to that after the dev discussion?" },
          { speaker: 'Ariya', text: "Agreed. So — action items: Pim will share the asset timeline by end of day Thursday. Tom, could you send us the dev capacity report before next Tuesday? Let's adjourn there. Thanks everyone." }
        ]
      }
    ]
  },

  {
    id: 'b2-email-01',
    title: 'As per my last email — Professional Email Writing',
    level: 'B2',
    topic: 'business',
    estimatedMinutes: 13,
    description: 'Write clear, professional emails in English — from subject lines to sign-offs, with the right tone every time.',
    vocabularyDeckId: 'b2-email-vocab',
    quizId: 'b2-email-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Why email writing is a career skill',
        body: 'Email is often the first impression you make on colleagues, clients, and senior management. Thai professionals frequently make two opposite mistakes in English emails: either they are too formal (writing a three-paragraph apology before making a simple request) or too casual (using instant-message language in a client email). In this lesson, you will learn to calibrate your tone exactly right — formal, semi-formal, or casual — and write emails that are clear, efficient, and professional.'
      },
      {
        type: 'explanation',
        heading: 'Subject lines that get opened',
        body: 'Your subject line should be specific and action-oriented. Avoid vague subjects like "Hello" or "Question". The reader should know exactly what the email is about before opening it.'
      },
      {
        type: 'example',
        sentences: [
          { en: '✗ "Question" → ✓ "Question re: Q3 budget approval deadline"', th: '✗ "คำถาม" → ✓ "คำถามเกี่ยวกับกำหนดเวลาอนุมัติงบประมาณ Q3"' },
          { en: '✗ "Meeting" → ✓ "Reschedule: project kickoff — proposing Tue 14 Nov, 2pm"', th: '✗ "การประชุม" → ✓ "เลื่อนการประชุม: project kickoff — เสนอวันอังคาร 14 พ.ย. 14:00"' },
          { en: '✗ "Update" → ✓ "Campaign performance update — week 3 results attached"', th: '✗ "อัปเดต" → ✓ "อัปเดตประสิทธิภาพแคมเปญ — ผลลัพธ์สัปดาห์ที่ 3 แนบมาด้วย"' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Salutations and opening lines',
        body: 'Match your salutation to your relationship and context:\n\n• "Dear Mr/Ms [Surname]," — formal, first contact, senior stakeholder\n• "Dear [First name]," — professional but warm, ongoing relationship\n• "Hi [First name]," — semi-formal, internal team, familiar contact\n• "Hi all," / "Hi team," — group email, internal\n\nOpening lines tell the reader why you are writing:'
      },
      {
        type: 'example',
        sentences: [
          { en: 'I am writing to enquire about the status of the pending contract.', th: 'ฉันเขียนมาเพื่อสอบถามสถานะของสัญญาที่รอดำเนินการ' },
          { en: 'Further to our conversation yesterday, I wanted to confirm the key points.', th: 'ตามการสนทนาของเราเมื่อวานนี้ ฉันอยากยืนยันประเด็นสำคัญ' },
          { en: 'I hope this email finds you well. I am reaching out regarding…', th: 'หวังว่าคุณจะสบายดี ฉันติดต่อมาเกี่ยวกับ…' },
          { en: 'Thank you for your email of 28 June. I have reviewed the proposal and…', th: 'ขอบคุณสำหรับอีเมลของคุณวันที่ 28 มิถุนายน ฉันได้ตรวจสอบข้อเสนอแล้วและ…' },
          { en: 'Quick question: are you available for a 30-minute call this week?', th: 'คำถามสั้น: คุณว่างสำหรับสายโทรศัพท์ 30 นาทีในสัปดาห์นี้ไหม?' }
        ]
      },
      {
        type: 'tip',
        body: '⚠️ Thai learner alert: Avoid starting every single email with "I would like to..." This phrase is fine but becomes robotic when overused. Vary your opening lines. Also: you do not need to apologise for writing ("Sorry to bother you with this email"). If your email is relevant and necessary, no apology is needed.'
      },
      {
        type: 'explanation',
        heading: 'Making requests clearly',
        body: 'The biggest cause of email misunderstanding is a buried or vague request. Put your request early, make it specific, and add a deadline if relevant.'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Could you please review the attached report and send me your comments by 5pm Friday?', th: 'คุณช่วยตรวจสอบรายงานที่แนบมาและส่งความคิดเห็นให้ฉันภายในเวลา 17:00 วันศุกร์ได้ไหม?' },
          { en: 'I would appreciate it if you could confirm receipt of this email.', th: 'จะขอบคุณมากถ้าคุณยืนยันการรับอีเมลนี้' },
          { en: 'Please let me know if you need any further information.', th: 'โปรดแจ้งให้ฉันทราบหากคุณต้องการข้อมูลเพิ่มเติม' },
          { en: 'I would be grateful if you could clarify the timeline at your earliest convenience.', th: 'จะขอบคุณมากถ้าคุณสามารถชี้แจงกำหนดเวลาได้ในโอกาสแรก' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Follow-up emails',
        body: 'Following up is a normal, professional act — not rude. If you have not received a response after 2–3 business days, send a brief, polite follow-up. The phrase "As per my last email" (the title of this lesson) is actually considered slightly passive-aggressive by native speakers — use it carefully or avoid it.'
      },
      {
        type: 'example',
        sentences: [
          { en: "I just wanted to follow up on my email from Tuesday — have you had a chance to review the proposal?", th: 'ฉันแค่อยากติดตามอีเมลของฉันจากวันอังคาร — คุณมีโอกาสตรวจสอบข้อเสนอแล้วหรือยัง?' },
          { en: 'I understand you may be busy, but I wanted to gently reiterate the deadline is this Friday.', th: 'ฉันเข้าใจว่าคุณอาจยุ่ง แต่อยากเตือนเบาๆ ว่ากำหนดเวลาคือวันศุกร์นี้' },
          { en: 'Apologies for chasing, but could you give me a quick update on where things stand?', th: 'ขอโทษที่ตามเรื่อง แต่คุณช่วยอัปเดตสั้นๆ ว่าสิ่งต่างๆ เป็นอย่างไรได้ไหม?' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Closing phrases and sign-offs',
        body: 'Your closing should match the tone of the email:\n\n• Formal: "Yours sincerely," / "Yours faithfully," (if you used "Dear Sir/Madam")\n• Professional: "Kind regards," / "Best regards," / "Warm regards,"\n• Semi-formal: "Many thanks," / "Thanks and regards,"\n• Casual (internal): "Thanks," / "Cheers," / "Best,"'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Thank you for your time and consideration. I look forward to hearing from you.', th: 'ขอบคุณสำหรับเวลาและการพิจารณาของคุณ ตั้งตารอที่จะได้ยินจากคุณ' },
          { en: 'Please do not hesitate to contact me if you have any questions.', th: 'โปรดอย่าลังเลที่จะติดต่อฉันหากคุณมีคำถามใดๆ' },
          { en: 'I look forward to your reply.', th: 'ตั้งตารอการตอบกลับของคุณ' }
        ]
      },
      {
        type: 'tip',
        body: '📱 Email vs. instant message: Email is for records, decisions, attachments, and formal requests. Instant messages (LINE, Slack, Teams) are for quick questions, informal updates, and real-time coordination. Do not send a five-paragraph email when "Can we meet at 3?" on Slack will do. And never send a sensitive decision or contract via chat — always confirm in email.'
      },
      {
        type: 'explanation',
        heading: 'Full email example — semi-formal follow-up',
        body: 'Read this example email. Notice the clear subject line, specific opening, one main request, and professional close.'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Subject: Follow-up: Brand guidelines feedback — deadline Fri 5 Jul', th: 'หัวเรื่อง: ติดตาม: คำติชมแนวทางแบรนด์ — กำหนดเส้นตาย 5 ก.ค.' },
          { en: 'Dear Khun Wichai,', th: 'เรียน คุณวิชัย' },
          { en: "I hope you're having a good week. I wanted to follow up on the brand guideline document I sent on Monday.", th: 'หวังว่าคุณจะมีสัปดาห์ที่ดี ฉันอยากติดตามเอกสารแนวทางแบรนด์ที่ส่งให้วันจันทร์' },
          { en: 'Could you share any initial feedback by this Friday? The design team needs your input before they can proceed to the next phase.', th: 'คุณสามารถแบ่งปันความคิดเห็นเบื้องต้นได้ภายในวันศุกร์นี้ไหม? ทีมออกแบบต้องการข้อมูลของคุณก่อนจะดำเนินการขั้นตอนต่อไป' },
          { en: "Please let me know if you need any further context or if Friday doesn't work — I'm happy to adjust.", th: 'โปรดแจ้งให้ฉันทราบหากคุณต้องการบริบทเพิ่มเติม หรือถ้าวันศุกร์ไม่สะดวก — ฉันยินดีปรับ' },
          { en: 'Many thanks, Nong | Marketing Manager | nong@company.co.th', th: 'ขอบคุณมาก หนอง | ผู้จัดการฝ่ายการตลาด | nong@company.co.th' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Additional useful phrases',
        body: 'Build your email vocabulary with these:'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Please find attached the revised proposal.', th: 'กรุณาดูข้อเสนอที่แก้ไขแล้วในไฟล์แนบ' },
          { en: "I've cc'd Lek and Tom for visibility.", th: 'ฉัน cc เล็กและทอมไว้เพื่อให้รับทราบ' },
          { en: 'This is a tentative booking — I will confirm next week.', th: 'นี่เป็นการจองเบื้องต้น — ฉันจะยืนยันสัปดาห์หน้า' },
          { en: 'I am acknowledging receipt of your email dated 1 July.', th: 'ฉันรับทราบการรับอีเมลของคุณลงวันที่ 1 กรกฎาคม' },
          { en: 'This matter is still pending approval from the finance team.', th: 'เรื่องนี้ยังรอการอนุมัติจากทีมการเงิน' }
        ]
      }
    ]
  },
{
  "id": "a1-restaurant-01",
  "title": "Can I have the menu, please? — At the Restaurant",
  "level": "A1",
  "topic": "speaking",
  "estimatedMinutes": 8,
  "description": "Learn how to order food and drinks, ask for the bill, and speak politely at a restaurant in English.",
  "vocabularyDeckId": "a1-restaurant-vocab",
  "quizId": "a1-restaurant-quiz",
  "sections": [
    {
      "type": "intro",
      "heading": "Why this matters for Thai learners",
      "body": "Thai restaurants are relaxed — you call out \"น้องครับ/น้องค่ะ\" and point at the menu. In English-speaking countries, the system is different. A waiter comes to your table, you wait to be seated, and there are specific phrases for each step. Thai learners often go silent or just point, which can feel awkward. Learning these phrases will make eating out in English much more comfortable and enjoyable."
    },
    {
      "type": "explanation",
      "heading": "Arriving and asking for the menu",
      "body": "When you sit down, the waiter will usually greet you. Here are the key phrases for the start of your meal:"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "Can I have the menu, please?",
          "th": "ขอเมนูหน่อยได้ไหมครับ/ค่ะ?"
        },
        {
          "en": "Could I see the menu, please?",
          "th": "ขอดูเมนูได้ไหมครับ/ค่ะ? (สุภาพกว่าเล็กน้อย)"
        },
        {
          "en": "Do you have a table for two?",
          "th": "มีโต๊ะสำหรับสองคนไหมครับ/ค่ะ?"
        },
        {
          "en": "We have a reservation. My name is Ploy.",
          "th": "เราจองโต๊ะไว้ครับ/ค่ะ ชื่อพลอย"
        },
        {
          "en": "Are you ready to order?",
          "th": "พร้อมสั่งอาหารแล้วหรือยังครับ/ค่ะ? (waiter พูด)"
        }
      ]
    },
    {
      "type": "tip",
      "body": "💡 \"Could I have…\" is slightly more polite than \"Can I have…\" — both are correct and natural. Use \"Could I have…\" when you want to sound extra polite, like at a formal restaurant."
    },
    {
      "type": "explanation",
      "heading": "Ordering food and drinks",
      "body": "When the waiter asks \"Are you ready to order?\", use these phrases. \"I'd like\" (= I would like) is much more natural than \"I want\":"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "I'd like the chicken soup, please.",
          "th": "ฉันขอซุปไก่ครับ/ค่ะ (\"I'd like\" สุภาพกว่า \"I want\")"
        },
        {
          "en": "Could I have a glass of water?",
          "th": "ขอน้ำแก้วนึงได้ไหมครับ/ค่ะ?"
        },
        {
          "en": "I'll have the pasta, please.",
          "th": "ฉันจะเอาพาสต้าครับ/ค่ะ"
        },
        {
          "en": "What do you recommend?",
          "th": "คุณแนะนำอะไรครับ/ค่ะ?"
        },
        {
          "en": "Is this dish spicy?",
          "th": "จานนี้เผ็ดไหมครับ/ค่ะ?"
        },
        {
          "en": "I'm vegetarian. Does this have meat?",
          "th": "ฉันกินมังสวิรัติ มีเนื้อสัตว์ไหมครับ/ค่ะ?"
        }
      ]
    },
    {
      "type": "tip",
      "body": "⚠️ Avoid saying \"I want the chicken.\" It sounds demanding. Use \"I'd like\" or \"I'll have\" — these are the natural choices in a restaurant."
    },
    {
      "type": "explanation",
      "heading": "Asking for the bill",
      "body": "In British English it's \"the bill.\" In American English it's \"the check.\" Both are understood everywhere:"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "Could I have the bill, please?",
          "th": "ขอบิลหน่อยได้ไหมครับ/ค่ะ? (British English)"
        },
        {
          "en": "Can I have the check, please?",
          "th": "ขอเช็คหน่อยได้ไหมครับ/ค่ะ? (American English)"
        },
        {
          "en": "We'd like to pay separately.",
          "th": "เราจะแยกจ่ายครับ/ค่ะ"
        },
        {
          "en": "We'll pay together.",
          "th": "เราจะจ่ายรวมกันครับ/ค่ะ"
        },
        {
          "en": "Do you accept credit cards?",
          "th": "รับบัตรเครดิตไหมครับ/ค่ะ?"
        },
        {
          "en": "Keep the change.",
          "th": "ไม่ต้องทอนครับ/ค่ะ (เป็นการให้ทิป)"
        }
      ]
    },
    {
      "type": "dialogue",
      "lines": [
        {
          "speaker": "Waiter",
          "text": "Good evening! Welcome. Do you have a reservation?"
        },
        {
          "speaker": "Ploy",
          "text": "Yes, we do. My name is Ploy. A table for two."
        },
        {
          "speaker": "Waiter",
          "text": "Perfect. Here are your menus. Are you ready to order, or do you need a few minutes?"
        },
        {
          "speaker": "Ploy",
          "text": "We need a few minutes, please."
        },
        {
          "speaker": "Waiter",
          "text": "Of course! I'll be back shortly."
        },
        {
          "speaker": "Waiter",
          "text": "Are you ready to order?"
        },
        {
          "speaker": "Ploy",
          "text": "Yes. I'd like the green curry, please. And could I have a glass of water?"
        },
        {
          "speaker": "Ploy's friend",
          "text": "I'll have the fish and chips. Is the soup vegetarian?"
        },
        {
          "speaker": "Waiter",
          "text": "Yes, it is! Great choices."
        },
        {
          "speaker": "Ploy",
          "text": "Excuse me, could I have the bill, please?"
        },
        {
          "speaker": "Waiter",
          "text": "Of course! Here you are. Anything else?"
        },
        {
          "speaker": "Ploy",
          "text": "No, thank you. Everything was delicious!"
        }
      ]
    }
  ]
},
{
  "id": "a1-numbers-time-01",
  "title": "What time is it? — Numbers, Time & Dates",
  "level": "A1",
  "topic": "speaking",
  "estimatedMinutes": 8,
  "description": "Learn numbers 1–100, how to tell the time, say dates, and talk about schedules in English.",
  "vocabularyDeckId": "a1-numbers-vocab",
  "quizId": "a1-numbers-quiz",
  "sections": [
    {
      "type": "intro",
      "heading": "Why numbers and time trip up Thai learners",
      "body": "Thai numbers are straightforward (หนึ่ง สอง สาม...), but English time-telling has two systems: digital (\"It's three fifteen\") and spoken (\"It's quarter past three\"). Many Thai learners know the numbers but freeze when someone says \"half past seven\" or writes a date as \"07/04.\" This lesson will make all of that clear."
    },
    {
      "type": "explanation",
      "heading": "Numbers 1–100: the key patterns",
      "body": "You only need to memorise a few sets — the rest follow patterns:\n\n1–12: one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve\n13–19: Add \"-teen\" — thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen\n20–90 (tens): twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety\n21–99: Say the ten first, then the one — \"twenty-one,\" \"forty-five,\" \"ninety-nine\"\n100: one hundred"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "13 = thirteen",
          "th": "สิบสาม (สังเกต: -teen ออกเสียงต่างจาก -ty)"
        },
        {
          "en": "30 = thirty",
          "th": "สามสิบ (ระวัง: thirty ≠ thirteen)"
        },
        {
          "en": "21 = twenty-one",
          "th": "ยี่สิบเอ็ด"
        },
        {
          "en": "55 = fifty-five",
          "th": "ห้าสิบห้า"
        },
        {
          "en": "100 = one hundred",
          "th": "หนึ่งร้อย"
        }
      ]
    },
    {
      "type": "tip",
      "body": "💡 A very common mistake: confusing \"thirteen\" (13) and \"thirty\" (30). \"Thirteen\" has stress on the second syllable (thir-TEEN), while \"thirty\" has stress on the first (THIR-ty). Always repeat the number back to confirm!"
    },
    {
      "type": "explanation",
      "heading": "Telling the time",
      "body": "English has two ways to tell the time:\n\nDigital style: Say hours, then minutes (3:15 = \"three fifteen\")\nSpoken style: Use \"past\" (after the hour) and \"to\" (before the next hour)\n\nKey phrases:\n• o'clock — exact hours only (3:00 = \"three o'clock\")\n• past — minutes after the hour (3:15 = \"quarter past three\")\n• to — minutes before the next hour (3:45 = \"quarter to four\")\n• quarter = 15 minutes • half = 30 minutes"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "9:00 = nine o'clock",
          "th": "เก้าโมงตรง"
        },
        {
          "en": "9:15 = nine fifteen / quarter past nine",
          "th": "เก้าโมงสิบห้า / สิบห้านาทีผ่านเก้าโมง"
        },
        {
          "en": "9:30 = nine thirty / half past nine",
          "th": "เก้าโมงครึ่ง"
        },
        {
          "en": "9:45 = nine forty-five / quarter to ten",
          "th": "เก้าโมงสี่สิบห้า / อีกสิบห้านาทีถึงสิบโมง"
        },
        {
          "en": "What time is it? — It's two o'clock.",
          "th": "กี่โมงแล้ว? — สองโมงแล้ว"
        },
        {
          "en": "The shop opens at 9 a.m.",
          "th": "ร้านเปิดตอน 9 โมงเช้า"
        },
        {
          "en": "The film starts at 7:30 p.m.",
          "th": "หนังเริ่มตอนสามทุ่มครึ่ง"
        }
      ]
    },
    {
      "type": "explanation",
      "heading": "Saying dates: British vs American",
      "body": "The date 04/07 means DIFFERENT things!\n\nBritish: Day/Month/Year → 04/07/2025 = 4th July\nAmerican: Month/Day/Year → 04/07/2025 = April 7th\n\nTo avoid confusion, write the month as a word: \"4 July 2025\" or \"July 4, 2025\"\n\nOrdinal numbers: 1st (first), 2nd (second), 3rd (third), 4th (fourth), 5th (fifth)...\nMonths: January, February, March, April, May, June, July, August, September, October, November, December"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "My birthday is on the 12th of March.",
          "th": "วันเกิดของฉันคือวันที่ 12 มีนาคม (British style)"
        },
        {
          "en": "My birthday is on March 12th.",
          "th": "วันเกิดของฉันคือ 12 มีนาคม (American style)"
        },
        {
          "en": "What's the date today? — It's the 3rd of July.",
          "th": "วันนี้วันที่เท่าไหร่? — วันที่ 3 กรกฎาคม"
        },
        {
          "en": "When is your appointment? — It's on Monday at 10 a.m.",
          "th": "คุณมีนัดเมื่อไหร่? — วันจันทร์ตอนสิบโมงเช้า"
        }
      ]
    },
    {
      "type": "dialogue",
      "lines": [
        {
          "speaker": "Teacher",
          "text": "Good morning! What's the date today?"
        },
        {
          "speaker": "Nong",
          "text": "It's the third of July."
        },
        {
          "speaker": "Teacher",
          "text": "Good! And what time does class finish?"
        },
        {
          "speaker": "Nong",
          "text": "It finishes at twelve thirty — half past twelve."
        },
        {
          "speaker": "Teacher",
          "text": "Now, I want to schedule a test. Is the fifteenth of July OK?"
        },
        {
          "speaker": "Nong",
          "text": "The fifteenth... that's a Tuesday, right? Yes, that's fine."
        },
        {
          "speaker": "Teacher",
          "text": "Great. The test will start at nine o'clock sharp. Don't be late!"
        },
        {
          "speaker": "Nong",
          "text": "Don't worry — I'll be there at quarter to nine!"
        }
      ]
    }
  ]
}
,
{
  "id": "a2-shopping-01",
  "title": "How much is this? — Shopping & Prices",
  "level": "A2",
  "topic": "speaking",
  "estimatedMinutes": 9,
  "vocabularyDeckId": "a2-shopping-vocab",
  "quizId": "a2-shopping-quiz",
  "sections": [
    {
      "type": "intro",
      "heading": "",
      "body": "Shopping in English can feel stressful — especially when you need to ask about prices, find the right size, or return something that doesn't fit. Thai learners often know basic words like \"how much\" but struggle with full shopping conversations. This lesson gives you real phrases to use in markets, department stores, and online shops."
    },
    {
      "type": "explanation",
      "heading": "Asking About Price",
      "body": "To ask the price of something, use these patterns:\n\n• \"How much is this?\" — for one item near you\n• \"How much are these?\" — for plural items\n• \"How much does this cost?\" — slightly more formal\n• \"What's the price of this jacket?\" — when pointing to a specific item"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "How much is this shirt?",
          "th": "เสื้อตัวนี้ราคาเท่าไหร่?"
        },
        {
          "en": "How much are these shoes?",
          "th": "รองเท้าพวกนี้ราคาเท่าไหร่?"
        },
        {
          "en": "What's the price of the red bag?",
          "th": "กระเป๋าสีแดงราคาเท่าไหร่?"
        },
        {
          "en": "Does this come in a smaller size?",
          "th": "มีไซส์เล็กกว่านี้ไหม?"
        }
      ]
    },
    {
      "type": "tip",
      "body": "In Thai markets you often bargain, but in Western shops prices are usually fixed. Use \"Is there a discount?\" or \"Is this on sale?\" instead of negotiating directly."
    },
    {
      "type": "explanation",
      "heading": "Comparing Items & Sizes",
      "body": "When choosing between items, use comparative adjectives:\n\n• \"This one is cheaper than that one.\"\n• \"Do you have this in a larger size?\"\n• \"I'm looking for something in blue.\"\n• \"Can I try this on?\" — to use the fitting room"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "This dress is more expensive than the other one.",
          "th": "ชุดนี้แพงกว่าอีกชุดหนึ่ง"
        },
        {
          "en": "Do you have this in a medium?",
          "th": "มีไซส์ M ไหม?"
        },
        {
          "en": "I prefer the blue one.",
          "th": "ฉันชอบสีน้ำเงินมากกว่า"
        },
        {
          "en": "Where is the fitting room, please?",
          "th": "ห้องลองเสื้อผ้าอยู่ที่ไหนคะ?"
        }
      ]
    },
    {
      "type": "explanation",
      "heading": "Paying and Getting a Receipt",
      "body": "At the checkout, you'll need these phrases:\n\n• \"I'll take this one.\" — you've decided to buy it\n• \"Can I pay by card?\" — credit/debit card\n• \"Can I have a receipt, please?\"\n• \"Do you have a bag?\""
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "I'll take this one, please.",
          "th": "ฉันจะเอาอันนี้เลยนะคะ"
        },
        {
          "en": "Can I pay by credit card?",
          "th": "จ่ายด้วยบัตรเครดิตได้ไหม?"
        },
        {
          "en": "Can I have a receipt, please?",
          "th": "ขอใบเสร็จด้วยได้ไหมคะ?"
        },
        {
          "en": "Do you gift wrap?",
          "th": "มีบริการห่อของขวัญไหม?"
        }
      ]
    },
    {
      "type": "explanation",
      "heading": "Returns and Exchanges",
      "body": "If something is wrong with what you bought:\n\n• \"I'd like to return this.\" — give it back for money\n• \"I'd like to exchange this for a different size.\"\n• \"It doesn't fit.\" / \"It's the wrong size.\"\n• \"Do I need the receipt to return this?\""
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "I'd like to return this jacket, please.",
          "th": "ฉันอยากคืนแจ็คเก็ตตัวนี้ค่ะ"
        },
        {
          "en": "Can I exchange this for a larger size?",
          "th": "ขอเปลี่ยนเป็นไซส์ใหญ่กว่านี้ได้ไหม?"
        },
        {
          "en": "It doesn't fit — it's too small.",
          "th": "มันไม่พอดี — เล็กเกินไป"
        },
        {
          "en": "I have the receipt right here.",
          "th": "ฉันมีใบเสร็จอยู่นี่เลย"
        }
      ]
    },
    {
      "type": "dialogue",
      "lines": [
        {
          "speaker": "Customer",
          "text": "Excuse me, how much is this jacket?"
        },
        {
          "speaker": "Staff",
          "text": "That one is 1,200 baht. It's on sale today — normally 1,500."
        },
        {
          "speaker": "Customer",
          "text": "Oh, that's good! Do you have it in blue?"
        },
        {
          "speaker": "Staff",
          "text": "Let me check. We have navy blue in a medium and large."
        },
        {
          "speaker": "Customer",
          "text": "Great. Can I try the medium on?"
        },
        {
          "speaker": "Staff",
          "text": "Of course! The fitting room is at the back on the right."
        },
        {
          "speaker": "Customer",
          "text": "Thanks. Actually, it's a bit small. Can I have the large?"
        },
        {
          "speaker": "Staff",
          "text": "Sure, here you go."
        },
        {
          "speaker": "Customer",
          "text": "Perfect. I'll take it. Can I pay by card?"
        },
        {
          "speaker": "Staff",
          "text": "Yes, of course. I'll ring you up at the checkout."
        }
      ]
    },
    {
      "type": "tip",
      "body": "\"Ring you up\" means to process your payment at the register. You can also say \"I'll pay at the till\" (British English) or \"I'll pay at the register\" (American English)."
    }
  ]
},
{
  "id": "a2-directions-01",
  "title": "Turn left at the corner — Asking for Directions",
  "level": "A2",
  "topic": "speaking",
  "estimatedMinutes": 9,
  "vocabularyDeckId": "a2-directions-vocab",
  "quizId": "a2-directions-quiz",
  "sections": [
    {
      "type": "intro",
      "heading": "",
      "body": "Getting lost and needing to ask for help is one of the most common real-life situations for English learners. Thai learners sometimes know \"go straight\" and \"turn left\" but struggle to understand fast replies or use natural prepositions. This lesson gives you the language to both ask for and follow directions confidently."
    },
    {
      "type": "explanation",
      "heading": "Asking for Directions",
      "body": "Polite ways to ask someone for help:\n\n• \"Excuse me, how do I get to the train station?\"\n• \"Could you tell me the way to the nearest pharmacy?\"\n• \"Is the museum far from here?\"\n• \"I'm looking for [place]. Am I going the right way?\""
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "Excuse me, how do I get to the airport?",
          "th": "ขอโทษนะครับ ไปสนามบินยังไงครับ?"
        },
        {
          "en": "Could you tell me the way to the city centre?",
          "th": "ช่วยบอกทางไปใจกลางเมืองได้ไหมครับ?"
        },
        {
          "en": "Is the hotel far from here?",
          "th": "โรงแรมอยู่ไกลจากที่นี่ไหม?"
        },
        {
          "en": "Am I going the right way for the market?",
          "th": "ฉันเดินถูกทางไปตลาดไหมนะ?"
        }
      ]
    },
    {
      "type": "explanation",
      "heading": "Giving Directions",
      "body": "Core direction language:\n\n• \"Go straight ahead.\" — เดินตรงไป\n• \"Turn left / Turn right.\" — เลี้ยวซ้าย / เลี้ยวขวา\n• \"Take the first / second street on the left.\"\n• \"It's on your left / right.\"\n• \"It's opposite the bank.\" — อยู่ตรงข้ามธนาคาร\n• \"It's next to the supermarket.\" — อยู่ข้างซูเปอร์มาร์เก็ต\n• \"It's about 200 metres from here.\""
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "Go straight ahead and then turn left.",
          "th": "เดินตรงไปแล้วก็เลี้ยวซ้าย"
        },
        {
          "en": "Take the second street on your right.",
          "th": "เลี้ยวขวาที่ถนนเส้นที่สอง"
        },
        {
          "en": "The post office is opposite the park.",
          "th": "ที่ทำการไปรษณีย์อยู่ตรงข้ามสวนสาธารณะ"
        },
        {
          "en": "It's about five minutes' walk from here.",
          "th": "จากนี้เดินประมาณห้านาที"
        }
      ]
    },
    {
      "type": "tip",
      "body": "If someone gives you directions too quickly, say: \"Sorry, could you say that again more slowly?\" or \"Could you write that down for me?\" Most people are happy to help."
    },
    {
      "type": "explanation",
      "heading": "Prepositions of Place",
      "body": "These prepositions are essential for understanding location:\n\n• **at** — at the traffic lights, at the roundabout\n• **on** — on the left, on the corner\n• **next to** — next to the cinema\n• **opposite** — opposite the school\n• **between** — between the cafe and the bank\n• **in front of** — in front of the station\n• **behind** — behind the shopping centre"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "Turn left at the traffic lights.",
          "th": "เลี้ยวซ้ายที่สัญญาณไฟจราจร"
        },
        {
          "en": "The library is between the school and the park.",
          "th": "ห้องสมุดอยู่ระหว่างโรงเรียนกับสวนสาธารณะ"
        },
        {
          "en": "The bus stop is in front of the hotel.",
          "th": "ป้ายรถเมล์อยู่หน้าโรงแรม"
        },
        {
          "en": "The restaurant is on the corner.",
          "th": "ร้านอาหารอยู่ที่มุมถนน"
        }
      ]
    },
    {
      "type": "explanation",
      "heading": "Public Transport Directions",
      "body": "Asking about buses and trains:\n\n• \"Which bus goes to the city centre?\"\n• \"Where do I get off for the museum?\"\n• \"Do I need to change trains?\"\n• \"How many stops is it?\""
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "Which bus goes to the airport?",
          "th": "รถเมล์สายไหนไปสนามบิน?"
        },
        {
          "en": "Where do I get off for the national museum?",
          "th": "ลงที่ไหนเพื่อไปพิพิธภัณฑ์แห่งชาติ?"
        },
        {
          "en": "Do I need to change trains at Central?",
          "th": "ต้องเปลี่ยนรถไฟที่ Central ไหม?"
        },
        {
          "en": "It's three stops from here.",
          "th": "จากนี้อีกสามป้าย"
        }
      ]
    },
    {
      "type": "dialogue",
      "lines": [
        {
          "speaker": "Tourist",
          "text": "Excuse me, I'm looking for the Grand Palace. Am I going the right way?"
        },
        {
          "speaker": "Local",
          "text": "The Grand Palace? No, you need to go back the other way, I'm afraid."
        },
        {
          "speaker": "Tourist",
          "text": "Oh! Could you tell me how to get there?"
        },
        {
          "speaker": "Local",
          "text": "Sure. Go straight down this road for about two blocks. At the traffic lights, turn left."
        },
        {
          "speaker": "Tourist",
          "text": "Left at the traffic lights — OK."
        },
        {
          "speaker": "Local",
          "text": "Then you'll see a big roundabout. Take the second exit. The Grand Palace is on your right, opposite the river."
        },
        {
          "speaker": "Tourist",
          "text": "Is it far to walk?"
        },
        {
          "speaker": "Local",
          "text": "About fifteen minutes on foot. Or you can take the number 8 bus from the stop right here."
        },
        {
          "speaker": "Tourist",
          "text": "I'll walk, I think. Thank you so much!"
        },
        {
          "speaker": "Local",
          "text": "No problem, enjoy your visit!"
        }
      ]
    },
    {
      "type": "tip",
      "body": "\"Blocks\" is common in US English — one block is the distance between two intersections. In British or Thai contexts, people say \"about 200 metres\" or \"two streets down\" instead."
    }
  ]
},
{
  "id": "a2-small-talk-01",
  "title": "What do you do for fun? — Small Talk",
  "level": "A2",
  "topic": "speaking",
  "estimatedMinutes": 8,
  "vocabularyDeckId": "a2-small-talk-vocab",
  "quizId": "a2-small-talk-quiz",
  "sections": [
    {
      "type": "intro",
      "heading": "",
      "body": "Small talk is short, friendly conversation about everyday topics — weather, hobbies, weekend plans. In Thailand, small talk often focuses on food or family. In English-speaking countries, talking about hobbies, the weather, or weekend plans is very common. Many Thai learners feel embarrassed during silence and don't know what to say. This lesson gives you the tools to keep a conversation going naturally."
    },
    {
      "type": "explanation",
      "heading": "Starting a Conversation — The Weather",
      "body": "Weather is the classic English small-talk starter. It's safe, easy, and everyone can relate:\n\n• \"Nice weather today, isn't it?\"\n• \"It's really hot/cold/rainy today.\"\n• \"I love this kind of weather!\"\n• \"What a beautiful day!\"\n\nThen follow up — don't stop at one line."
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "Nice weather today, isn't it?",
          "th": "วันนี้อากาศดีนะ ใช่ไหม?"
        },
        {
          "en": "It's so hot today! Are you used to this heat?",
          "th": "วันนี้ร้อนมากเลย คุณชินกับความร้อนนี้ไหม?"
        },
        {
          "en": "I heard it's going to rain this afternoon.",
          "th": "ฉันได้ยินว่าบ่ายนี้จะมีฝน"
        },
        {
          "en": "The weather has been beautiful this week, hasn't it?",
          "th": "สัปดาห์นี้อากาศสวยมากเลยนะ ใช่ไหม?"
        }
      ]
    },
    {
      "type": "explanation",
      "heading": "Talking About Hobbies",
      "body": "Asking about and sharing hobbies:\n\n• \"What do you do for fun?\" — casual, friendly\n• \"Do you have any hobbies?\"\n• \"I really enjoy / I love / I'm into [hobby].\"\n• \"I'm not really into [hobby], but I like [other hobby].\"\n• \"How long have you been doing that?\""
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "What do you do for fun at the weekend?",
          "th": "คุณทำอะไรเพื่อความสนุกในวันหยุดสุดสัปดาห์?"
        },
        {
          "en": "I'm really into photography. I take photos everywhere!",
          "th": "ฉันชอบถ่ายรูปมาก ถ่ายไปทุกที่เลย!"
        },
        {
          "en": "That sounds interesting! How did you get started?",
          "th": "ฟังดูน่าสนใจมาก! คุณเริ่มต้นยังไง?"
        },
        {
          "en": "I prefer staying home and watching films honestly.",
          "th": "จริงๆ แล้วฉันชอบอยู่บ้านดูหนังมากกว่า"
        }
      ]
    },
    {
      "type": "tip",
      "body": "Show interest with short reactions: \"Oh really?\", \"That's cool!\", \"Wow, I didn't know that!\", \"I should try that!\" These keep the conversation alive without you needing to say much."
    },
    {
      "type": "explanation",
      "heading": "Weekend Plans & Follow-up Questions",
      "body": "A great small-talk topic is asking about plans:\n\n• \"Any plans for the weekend?\"\n• \"Did you do anything fun last weekend?\"\n• \"I'm thinking of [verb+ing]...\"\n• \"We're planning to go to...\"\n\nAlways ask a follow-up question to show genuine interest."
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "Any plans for the long weekend?",
          "th": "มีแผนอะไรสำหรับวันหยุดยาวไหม?"
        },
        {
          "en": "I'm thinking of trying that new Thai restaurant near the station.",
          "th": "ฉันกำลังคิดจะลองร้านอาหารไทยใหม่แถวสถานี"
        },
        {
          "en": "Oh nice! Have you been there before?",
          "th": "โอ ดีเลย! เคยไปที่นั่นก่อนไหม?"
        },
        {
          "en": "We're planning to visit my family in Chiang Mai.",
          "th": "เราวางแผนจะไปเยี่ยมครอบครัวที่เชียงใหม่"
        }
      ]
    },
    {
      "type": "explanation",
      "heading": "Avoiding Awkward Silence",
      "body": "When you don't know what to say next, use these fillers and pivots:\n\n• \"By the way, did you hear about...?\"\n• \"Speaking of which...\"\n• \"That reminds me...\"\n• \"So, how long have you been working here?\"\n• \"What about you — what do you think?\"\n\nAlso, it's fine to say \"I don't know much about that — tell me more!\""
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "By the way, did you see the match last night?",
          "th": "อ้อ ดูแมตช์เมื่อคืนไหม?"
        },
        {
          "en": "That reminds me — I tried a great new coffee shop yesterday.",
          "th": "นั่นทำให้ฉันนึกถึง — เมื่อวานลองร้านกาแฟใหม่ที่ดีมาก"
        },
        {
          "en": "I don't know much about golf — what do you like about it?",
          "th": "ฉันไม่ค่อยรู้เรื่องกอล์ฟ — คุณชอบอะไรในนั้น?"
        },
        {
          "en": "What about you — do you prefer the city or the countryside?",
          "th": "แล้วคุณล่ะ — ชอบเมืองหรือชนบทมากกว่า?"
        }
      ]
    },
    {
      "type": "dialogue",
      "lines": [
        {
          "speaker": "Maya",
          "text": "Lovely evening, isn't it? I'm Maya, by the way."
        },
        {
          "speaker": "Tom",
          "text": "Hi Maya, I'm Tom. Yes, it's a great venue. Do you work in the marketing team?"
        },
        {
          "speaker": "Maya",
          "text": "No, I'm in product design. I just started last month. What about you?"
        },
        {
          "speaker": "Tom",
          "text": "I'm in sales. I've been here about two years now. Are you settling in OK?"
        },
        {
          "speaker": "Maya",
          "text": "Yeah, everyone is really friendly. So, do you have any plans for the long weekend?"
        },
        {
          "speaker": "Tom",
          "text": "Actually yes — I'm going hiking with some friends up north. Do you like the outdoors?"
        },
        {
          "speaker": "Maya",
          "text": "I love it! I'm really into trail running actually."
        },
        {
          "speaker": "Tom",
          "text": "Oh wow, that's impressive! How long have you been doing that?"
        },
        {
          "speaker": "Maya",
          "text": "About three years. It's great for clearing your head after work."
        },
        {
          "speaker": "Tom",
          "text": "I should try it! You'll have to give me some tips sometime."
        }
      ]
    },
    {
      "type": "tip",
      "body": "A good rule for small talk: ask, listen, share. Ask them a question, listen to their answer, then share something about yourself. Back-and-forth is more comfortable than a long speech from one person."
    }
  ]
},
{
  "id": "a2-daily-routine-01",
  "title": "I usually wake up at 7 — Daily Routines",
  "level": "A2",
  "topic": "grammar",
  "estimatedMinutes": 9,
  "vocabularyDeckId": "a2-routine-vocab",
  "quizId": "a2-routine-quiz",
  "sections": [
    {
      "type": "intro",
      "heading": "",
      "body": "Talking about your daily routine is one of the most common A2 conversation topics — in job interviews, casual chats, and language classes. Thai learners often translate directly from Thai, which doesn't always work in English. The key grammar here is the Simple Present tense with frequency adverbs. Master this and you can describe your life clearly and naturally."
    },
    {
      "type": "explanation",
      "heading": "Simple Present for Habits and Routines",
      "body": "We use the Simple Present tense to talk about things we do regularly — habits, routines, and facts.\n\nStructure:\n• I / You / We / They + base verb → \"I wake up at 7.\"\n• He / She / It + verb + -s/-es → \"She wakes up at 7.\"\n\nCommon routine verbs: wake up, get up, have breakfast, commute, start work, take a break, finish work, cook dinner, go to bed"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "I wake up at six o'clock every morning.",
          "th": "ฉันตื่นนอนตีหกทุกเช้า"
        },
        {
          "en": "She takes the BTS to work.",
          "th": "เธอนั่ง BTS ไปทำงาน"
        },
        {
          "en": "We usually have dinner together as a family.",
          "th": "เรามักกินข้าวเย็นด้วยกันในฐานะครอบครัว"
        },
        {
          "en": "He goes to bed at eleven.",
          "th": "เขาเข้านอนสี่ทุ่ม"
        }
      ]
    },
    {
      "type": "explanation",
      "heading": "Frequency Adverbs",
      "body": "Frequency adverbs tell us HOW OFTEN something happens. In English, they go BEFORE the main verb (but AFTER \"be\"):\n\n| Adverb | Frequency | Example |\n|---|---|---|\n| always | 100% | I always brush my teeth. |\n| usually | ~80% | I usually eat breakfast. |\n| often | ~60% | She often takes a taxi. |\n| sometimes | ~40% | He sometimes works late. |\n| rarely / seldom | ~10% | I rarely go to the gym. |\n| never | 0% | They never skip lunch. |\n\n**Position with \"be\":** \"She is always late.\" — adverb comes AFTER \"be\""
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "I always check my phone first thing in the morning.",
          "th": "ฉันเช็คโทรศัพท์ทุกครั้งก่อนอื่นในตอนเช้า"
        },
        {
          "en": "She is usually very tired after the commute.",
          "th": "เธอมักจะเหนื่อยมากหลังจากเดินทาง"
        },
        {
          "en": "He rarely eats fast food.",
          "th": "เขาแทบไม่กินอาหารจานด่วน"
        },
        {
          "en": "We sometimes go for a walk in the evening.",
          "th": "บางครั้งเราออกไปเดินเล่นตอนเย็น"
        }
      ]
    },
    {
      "type": "tip",
      "body": "Common mistake: Thai learners sometimes put the adverb at the end — \"I eat breakfast always.\" This sounds wrong. Always put frequency adverbs BEFORE the main verb: \"I always eat breakfast.\""
    },
    {
      "type": "explanation",
      "heading": "Time Expressions for Routines",
      "body": "Use these time expressions to make your routine descriptions more specific:\n\n• **every** — every morning, every day, every Monday\n• **in the** — in the morning, in the afternoon, in the evening\n• **at** — at night, at noon, at 7 o'clock\n• **on** — on weekdays, on weekends, on Sundays\n• **before/after** — before work, after dinner, after school"
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "I go for a run every morning before breakfast.",
          "th": "ฉันวิ่งออกกำลังกายทุกเช้าก่อนกินข้าวเช้า"
        },
        {
          "en": "She reads for an hour before going to bed.",
          "th": "เธออ่านหนังสือหนึ่งชั่วโมงก่อนเข้านอน"
        },
        {
          "en": "On weekends, we usually sleep in.",
          "th": "วันหยุดสุดสัปดาห์ เรามักจะนอนตื่นสาย"
        },
        {
          "en": "He commutes to Bangkok every weekday.",
          "th": "เขาเดินทางไปกรุงเทพฯ ทุกวันทำการ"
        }
      ]
    },
    {
      "type": "explanation",
      "heading": "Describing Your Day",
      "body": "Connecting your routine into a flowing description:\n\n• \"First, I... Then I... After that, I... Finally, I...\"\n• \"In the morning I..., but in the evening I...\"\n• Use \"usually\" and \"sometimes\" to show what's flexible."
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "First, I shower and get dressed. Then I have a quick breakfast.",
          "th": "ก่อนอื่น ฉันอาบน้ำและแต่งตัว จากนั้นก็กินข้าวเช้าเร็วๆ"
        },
        {
          "en": "After work, I usually go to the gym or meet friends.",
          "th": "หลังเลิกงาน ฉันมักไปยิมหรือไปพบเพื่อน"
        },
        {
          "en": "I'm not a morning person, so I sometimes skip breakfast.",
          "th": "ฉันไม่ใช่คนตื่นเช้า ดังนั้นบางครั้งฉันก็ข้ามมื้อเช้า"
        },
        {
          "en": "My evenings are usually pretty productive.",
          "th": "ช่วงเย็นของฉันมักจะมีประสิทธิภาพดี"
        }
      ]
    },
    {
      "type": "dialogue",
      "lines": [
        {
          "speaker": "Interviewer",
          "text": "Can you tell me about your typical day?"
        },
        {
          "speaker": "Nong",
          "text": "Sure! I usually wake up at six thirty. First I exercise — I always do yoga for about twenty minutes."
        },
        {
          "speaker": "Interviewer",
          "text": "That's disciplined! Do you have breakfast at home?"
        },
        {
          "speaker": "Nong",
          "text": "I usually do, yes. I normally have rice soup — it's a Thai thing. Then I commute to the office."
        },
        {
          "speaker": "Interviewer",
          "text": "How long is your commute?"
        },
        {
          "speaker": "Nong",
          "text": "About forty-five minutes by skytrain. It's rush hour, so it's quite busy. I sometimes listen to podcasts to pass the time."
        },
        {
          "speaker": "Interviewer",
          "text": "And in the evenings?"
        },
        {
          "speaker": "Nong",
          "text": "I finish work at six, then I often cook dinner at home. I rarely go out on weekdays — I prefer to relax and read."
        },
        {
          "speaker": "Interviewer",
          "text": "That sounds like a healthy routine!"
        }
      ]
    },
    {
      "type": "tip",
      "body": "When describing routines in an interview or casual conversation, mix your adverbs: \"I usually..., but sometimes I...\". This sounds more natural than using \"always\" for everything."
    }
  ]
},
{
  "id": "c1-idioms-01",
  "title": "Hit the nail on the head — Idioms & Natural Expressions",
  "level": "C1",
  "topic": "vocabulary",
  "estimatedMinutes": 14,
  "vocabularyDeckId": "c1-idioms-vocab",
  "quizId": "c1-idioms-quiz",
  "sections": [
    {
      "type": "intro",
      "heading": "Why idioms feel like a secret code",
      "body": "For Thai learners, English idioms can feel like a completely different language. You might understand every word individually — \"bite,\" \"bullet,\" \"hit,\" \"nail\" — but have no idea what the phrase means in context. In Thai, idiomatic expressions often describe feelings through nature or food (เหนื่อยใจ, หัวร้อน), but English idioms are often rooted in historical trades, sports, and body-based metaphors. The good news: native speakers use the same 200–300 idioms repeatedly, so mastering the most common ones will dramatically improve how natural you sound."
    },
    {
      "type": "explanation",
      "heading": "Idioms grouped by category",
      "body": "Learning idioms by category makes them easier to remember. Body idioms describe situations through body parts: \"cost an arm and a leg\" means very expensive, \"under the weather\" means feeling unwell. Time idioms involve urgency or delay: \"in the nick of time\" means just barely in time, \"at the drop of a hat\" means immediately. Animal idioms often reflect behaviour: \"let the cat out of the bag\" means to accidentally reveal a secret. Success/failure idioms are especially common in professional contexts: \"back to the drawing board\" means starting over, \"hit the nail on the head\" means identifying something exactly correctly. Register matters: most idioms are informal or semi-formal. Avoid using \"break a leg\" in a written report or \"bottom line\" in a casual conversation unless the tone clearly fits."
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "You really hit the nail on the head — that's exactly what's been bothering me about the proposal.",
          "th": "คุณพูดถูกจุดเลย — นั่นแหละคือสิ่งที่ฉันรู้สึกอึดอัดกับข้อเสนอนี้มาตลอด"
        },
        {
          "en": "I know the surgery is scary, but sometimes you just have to bite the bullet.",
          "th": "ฉันรู้ว่าการผ่าตัดน่ากลัว แต่บางครั้งก็ต้องยอมสู้ทนเอาไว้"
        },
        {
          "en": "Don't burn your bridges with your old employer — you never know when you might need a reference.",
          "th": "อย่าตัดสัมพันธ์กับนายจ้างเก่า — ไม่มีทางรู้ได้ว่าเมื่อไหรจะต้องขอหนังสือรับรอง"
        },
        {
          "en": "Just give me a ballpark figure — I don't need the exact cost right now.",
          "th": "แค่บอกตัวเลขคร่าว ๆ พอ — ตอนนี้ยังไม่ต้องการราคาที่แน่นอน"
        },
        {
          "en": "The design failed testing, so we're going back to the drawing board.",
          "th": "ดีไซน์ผ่านการทดสอบไม่ได้ เราเลยต้องเริ่มต้นใหม่ทั้งหมด"
        },
        {
          "en": "Are we all on the same page about the deadline?",
          "th": "ทุกคนเข้าใจตรงกันเรื่องกำหนดส่งงานแล้วใช่ไหม"
        },
        {
          "en": "She jumped the gun and announced the promotion before it was official.",
          "th": "เธอรีบร้อนเกินไป ประกาศเรื่องการเลื่อนตำแหน่งก่อนที่จะมีการยืนยันอย่างเป็นทางการ"
        },
        {
          "en": "We don't always see eye to eye on strategy, but we respect each other's opinions.",
          "th": "เรามองเรื่องกลยุทธ์ไม่ค่อยตรงกัน แต่ก็เคารพความคิดเห็นของกัน"
        }
      ]
    },
    {
      "type": "tip",
      "body": "A common mistake among advanced learners is overusing idioms to sound native. Using three idioms in one sentence sounds unnatural and even comical. Idioms work best when they arise organically in conversation. Instead of memorising idioms to use, focus on recognising them when you hear them. Once you understand an idiom comfortably, it will start appearing in your speech naturally. Also watch out for mixed metaphors: saying \"we need to bite the bullet and go back to the drawing board before we jump the gun\" is grammatically fine but stylistically clunky."
    },
    {
      "type": "dialogue",
      "lines": [
        {
          "speaker": "Maya",
          "text": "So the launch didn't go as planned. I think we need to be honest about what went wrong."
        },
        {
          "speaker": "Tom",
          "text": "You've hit the nail on the head. The marketing wasn't aligned with the product's actual features."
        },
        {
          "speaker": "Prae",
          "text": "So are we going back to the drawing board, or can we salvage something?"
        },
        {
          "speaker": "Maya",
          "text": "Let's not throw everything away. But we do need to bite the bullet and delay the next campaign."
        },
        {
          "speaker": "Tom",
          "text": "I'd say we're all under the weather about this, but at least we're on the same page now."
        },
        {
          "speaker": "Prae",
          "text": "Agreed. Let's not burn bridges with the media partners either — they weren't fully briefed."
        }
      ]
    }
  ]
},
{
  "id": "c1-negotiation-01",
  "title": "I think we can work something out — Negotiation & Persuasion",
  "level": "C1",
  "topic": "business",
  "estimatedMinutes": 16,
  "vocabularyDeckId": "c1-negotiation-vocab",
  "quizId": "c1-negotiation-quiz",
  "sections": [
    {
      "type": "intro",
      "heading": "Negotiation across cultures: Thailand vs the West",
      "body": "In Thai professional culture, direct confrontation is often avoided to preserve face (รักษาหน้า). Disagreement is frequently expressed through silence, hesitation, or indirect language rather than an explicit \"no.\" In international business negotiations, however, this can be misread as agreement — leading to confusion and broken deals. Western negotiation styles tend to value directness, explicit proposals, and the ability to push back without it being taken personally. This lesson helps you develop the language to be a confident, strategic negotiator in English while still maintaining the respect and politeness that Thai culture values."
    },
    {
      "type": "explanation",
      "heading": "The architecture of a negotiation",
      "body": "A successful negotiation in English follows a recognisable structure. Opening: establish rapport and set the agenda (\"I appreciate you making the time. Shall we go over the key points?\"). Proposal: state your position clearly with reasoning (\"We'd like to propose a six-month contract at the current rate, given the volume we're bringing.\"). Counter-offer: respond to their position without rejecting it outright (\"I understand where you're coming from, but we'd need to adjust the timeline slightly.\"). Concession: give something to get something (\"If you can commit to the full order upfront, we can offer a 10% reduction.\"). Deadlock handling: don't let silence kill the deal (\"It seems we've reached an impasse. Can we come back to the pricing and talk about the delivery terms first?\"). Closing: confirm agreement explicitly (\"So to confirm, we're agreeing on X at Y price, delivered by Z. Does that work for everyone?\")."
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "We appreciate your proposal, but the timeline doesn't quite work for us.",
          "th": "เราขอบคุณข้อเสนอของคุณ แต่ตารางเวลาค่อนข้างไม่เหมาะกับเรา"
        },
        {
          "en": "What if we were to extend the contract by three months — would that change things?",
          "th": "ถ้าเราขยายสัญญาออกไปอีกสามเดือน ภาพรวมจะเปลี่ยนไปไหม"
        },
        {
          "en": "We'd be willing to make that concession if you could meet us on the delivery date.",
          "th": "เราพร้อมยืดหยุ่นตรงนั้น ถ้าคุณสามารถตกลงในเรื่องวันส่งมอบได้"
        },
        {
          "en": "I think we've hit a deadlock on price. Can we table that and discuss scope first?",
          "th": "ดูเหมือนเราจะติดขัดในเรื่องราคา ขอพักเรื่องนั้นไว้ก่อนแล้วมาคุยเรื่องขอบเขตงานแทนได้ไหม"
        },
        {
          "en": "Our bottom line is a 15% margin — anything below that isn't viable for us.",
          "th": "ขั้นต่ำของเราคือกำไร 15% — ต่ำกว่านั้นเราทำไม่ได้"
        },
        {
          "en": "By framing this as a long-term partnership, we both stand to gain significantly.",
          "th": "หากมองสิ่งนี้ในฐานะความร่วมมือระยะยาว ทั้งสองฝ่ายจะได้รับประโยชน์อย่างมาก"
        },
        {
          "en": "We're prepared to walk away if the terms don't improve.",
          "th": "เราพร้อมถอนตัวถ้าเงื่อนไขไม่ดีขึ้น"
        },
        {
          "en": "I think we can work something out — let me check with my team and get back to you by Thursday.",
          "th": "ฉันคิดว่าเราหาทางออกร่วมกันได้ — ให้ฉันปรึกษาทีมก่อนแล้วจะกลับมาหาคุณภายในวันพฤหัสฯ"
        }
      ]
    },
    {
      "type": "tip",
      "body": "One of the most powerful persuasion techniques in negotiation is anchoring — making the first offer, and making it ambitious. Research shows that the first number mentioned in a negotiation disproportionately influences the final outcome. If you open at 100, settling at 80 feels like a win for both parties. If you open at 70, you'll likely settle lower than you wanted. Thai learners often resist making the first offer because it feels presumptuous (หน้ามาก). In English business contexts, opening with a clear, justified proposal is not rude — it signals confidence and professionalism."
    },
    {
      "type": "dialogue",
      "lines": [
        {
          "speaker": "Client",
          "text": "Thanks for coming in. We've reviewed your proposal, and the quality is there — but the price is above our budget."
        },
        {
          "speaker": "Natt",
          "text": "I appreciate you being direct. Can I ask what range you had in mind?"
        },
        {
          "speaker": "Client",
          "text": "We were thinking closer to 80,000 — about 20% below your figure."
        },
        {
          "speaker": "Natt",
          "text": "That's a significant gap, but I don't think we're at a deadlock yet. If we reduce the scope in phase one and defer two features to phase two, I think we could get closer to your number."
        },
        {
          "speaker": "Client",
          "text": "That could work. What would you need from us to make that happen?"
        },
        {
          "speaker": "Natt",
          "text": "We'd need a signed agreement by end of this week, and a 30% deposit upfront. In return, we can commit to the 80,000 ceiling for phase one."
        },
        {
          "speaker": "Client",
          "text": "That sounds fair. Let's put something in writing."
        }
      ]
    }
  ]
},
{
  "id": "c1-opinions-01",
  "title": "I see your point, but… — Discussing Opinions & Debates",
  "level": "C1",
  "topic": "speaking",
  "estimatedMinutes": 13,
  "vocabularyDeckId": "c1-opinions-vocab",
  "quizId": "c1-opinions-quiz",
  "sections": [
    {
      "type": "intro",
      "heading": "The Thai tendency to agree — and why it can backfire",
      "body": "In Thai culture, maintaining harmony (ความกลมเกลียว) is deeply valued. Openly disagreeing with someone — especially a senior or a guest — can feel disrespectful or confrontational. As a result, Thai learners of English often either stay silent in discussions or agree outwardly while privately disagreeing. In international academic, professional, and social contexts, however, the ability to disagree respectfully and constructively is seen as a sign of intellectual confidence, not rudeness. Learning the language of polite disagreement is one of the most valuable C1 skills you can develop."
    },
    {
      "type": "explanation",
      "heading": "The spectrum from agreement to disagreement",
      "body": "Expressing opinions in English exists on a spectrum. Strong agreement: \"Absolutely,\" \"I couldn't agree more,\" \"That's a compelling point.\" Partial agreement: \"You raise a fair point, though I'd add…,\" \"I'm largely with you on this, but…\" Tentative opinion: \"I tend to think…,\" \"My inclination would be to…,\" \"I'm not entirely sure, but it seems to me…\" Polite disagreement: \"I see where you're coming from, but…,\" \"With respect, I'd push back on that a little.\" Strong disagreement: \"I'm afraid I have to take issue with that,\" \"I think that argument doesn't quite hold up.\" In academic and formal contexts, hedging language (I would argue, it could be suggested, there is reason to believe) signals that you are engaging with ideas critically rather than dogmatically. In casual settings, more direct phrases are natural and expected."
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "I see your point, but I'd argue that the data doesn't fully support that conclusion.",
          "th": "ฉันเข้าใจมุมมองของคุณ แต่ฉันคิดว่าข้อมูลยังไม่ได้สนับสนุนข้อสรุปนั้นอย่างเต็มที่"
        },
        {
          "en": "That's a compelling argument, and I'd largely agree — though the implementation side concerns me.",
          "th": "นั่นเป็นข้อโต้แย้งที่น่าเชื่อถือ และฉันเห็นด้วยเป็นส่วนใหญ่ แต่ฉันเป็นห่วงเรื่องการนำไปปฏิบัติ"
        },
        {
          "en": "With respect, I think that premise needs to be examined more carefully.",
          "th": "ด้วยความเคารพ ฉันคิดว่าสมมติฐานนั้นต้องการการตรวจสอบอย่างรอบคอบมากขึ้น"
        },
        {
          "en": "Building on what Kai said, I think there's also a systemic dimension we haven't addressed.",
          "th": "เพิ่มเติมจากที่ไคพูด ฉันคิดว่ายังมีมิติเชิงระบบที่เรายังไม่ได้พูดถึง"
        },
        {
          "en": "I'm inclined to disagree, though I'd want to hear your reasoning before I push back further.",
          "th": "ฉันค่อนข้างไม่เห็นด้วย แต่อยากฟังเหตุผลของคุณก่อนที่จะโต้แย้งเพิ่มเติม"
        },
        {
          "en": "That's a fair point in theory, but in practice the situation is considerably more nuanced.",
          "th": "นั่นเป็นประเด็นที่ถูกต้องในทางทฤษฎี แต่ในทางปฏิบัติสถานการณ์มีความซับซ้อนกว่านั้นมาก"
        }
      ]
    },
    {
      "type": "tip",
      "body": "The most effective way to disagree in English without creating defensiveness is to acknowledge the other person's point first. This is sometimes called the \"yes, and\" or \"yes, but\" technique. \"That's a valid concern, and I don't want to dismiss it — but I think if we look at the broader picture…\" This structure shows you were listening, takes the emotion out of the disagreement, and makes the other person more receptive to your counterargument. In formal debates or academic writing, this is called conceding a point before rebutting it. Phrases like \"while it is true that…\" or \"one could argue that… however…\" demonstrate intellectual honesty and strengthen your overall argument."
    },
    {
      "type": "dialogue",
      "lines": [
        {
          "speaker": "Lena",
          "text": "I think full remote work makes teams less cohesive. You lose the informal interactions that build trust."
        },
        {
          "speaker": "James",
          "text": "I see where you're coming from, but I'd push back on that a little. Research suggests remote teams can outperform office-based ones when managed well."
        },
        {
          "speaker": "Lena",
          "text": "That's a compelling point, and I won't dispute the data. But I'd argue the management variable is enormous — most companies aren't equipped for it."
        },
        {
          "speaker": "James",
          "text": "That's a fair concession. So perhaps the issue isn't remote work itself, but the infrastructure around it."
        },
        {
          "speaker": "Lena",
          "text": "Exactly. Building on that — maybe a hybrid model is the more pragmatic middle ground."
        },
        {
          "speaker": "James",
          "text": "I'm largely in agreement there, though I'd want to qualify that with \"if the policy is clear and consistent.\""
        }
      ]
    }
  ]
},
{
  "id": "c1-emergency-01",
  "title": "Call an ambulance! — Emergency & Crisis Communication",
  "level": "C1",
  "topic": "speaking",
  "estimatedMinutes": 12,
  "vocabularyDeckId": "c1-emergency-vocab",
  "quizId": "c1-emergency-quiz",
  "sections": [
    {
      "type": "intro",
      "heading": "Why emergencies are especially hard for non-native speakers",
      "body": "Emergencies test your language at its absolute limit. Your brain reverts to its dominant language under stress (สมองจะกลับไปใช้ภาษาแม่เมื่อตกใจ), vocabulary gaps become critical, and there is no time to rephrase or look up words. Thai learners often report freezing completely when calling emergency services in English, or struggling to give clear information under pressure. This lesson gives you the specific language, structure, and confidence to communicate clearly in an emergency — whether you're calling 999 in the UK, 911 in the US, or 112 across Europe."
    },
    {
      "type": "explanation",
      "heading": "What emergency services need to know",
      "body": "When you call emergency services, the dispatcher will guide you — but you need to be ready to provide key information quickly and clearly. The IPAD framework helps: Incident (what happened — \"There's been a road accident\"), People (how many people are involved and what is the condition — \"One person is unconscious\"), Address (exact location — \"We're on Sukhumvit Road, outside Terminal 21\"), Details (any relevant extras — \"The driver is trapped inside the vehicle\"). Stay on the line unless told otherwise. Speak slowly and clearly — do not rush even if you feel the urge to. If English is difficult under stress, say: \"My English is limited — please speak slowly.\" Dispatchers are trained to assist. For medical emergencies, key phrases include: \"She's not breathing,\" \"He's having a seizure,\" \"There's a lot of bleeding,\" \"She's lost consciousness.\" For accidents: \"There's been a collision,\" \"Someone is trapped,\" \"The car is on fire.\" For crimes: \"I want to report a theft,\" \"I've been robbed,\" \"I need to report a missing person.\""
    },
    {
      "type": "example",
      "sentences": [
        {
          "en": "I need an ambulance immediately. A man has collapsed and he's not responding.",
          "th": "ต้องการรถพยาบาลทันที ผู้ชายคนหนึ่งล้มลงและไม่ตอบสนอง"
        },
        {
          "en": "We're at the corner of Oxford Street and Regent Street — outside a Boots pharmacy.",
          "th": "เราอยู่ที่มุมถนนออกซ์ฟอร์ดและถนนรีเจนท์ — ตรงข้ามกับร้านขายยาบูทส์"
        },
        {
          "en": "She's breathing but unconscious. I think she may have hit her head.",
          "th": "เธอหายใจอยู่แต่หมดสติ ฉันคิดว่าเธออาจจะกระแทกศีรษะ"
        },
        {
          "en": "There's been a serious accident. Two vehicles are involved and one driver appears to be trapped.",
          "th": "เกิดอุบัติเหตุร้ายแรง มีรถสองคันเกี่ยวข้องและคนขับคนหนึ่งดูเหมือนติดอยู่ภายใน"
        },
        {
          "en": "I need to report a theft. My bag was stolen about ten minutes ago on the Underground.",
          "th": "ฉันต้องการแจ้งความโจรกรรม กระเป๋าของฉันถูกขโมยไปประมาณสิบนาทีที่แล้วบนรถไฟใต้ดิน"
        },
        {
          "en": "The situation is deteriorating — please send someone as quickly as possible.",
          "th": "สถานการณ์เลวร้ายลงเรื่อย ๆ — กรุณาส่งคนมาโดยเร็วที่สุด"
        }
      ]
    },
    {
      "type": "tip",
      "body": "The single best thing you can do is rehearse emergency calls before you ever need them. Read the phrases in this lesson out loud until they feel automatic. Write down the emergency numbers for the countries you spend time in (999 UK, 911 USA/Canada, 1669 Thailand, 112 EU). When you travel, identify your location consciously — knowing you are \"on the corner of Fifth Avenue and 42nd Street\" could save a life. If you work in an international company, make sure you know the internal emergency procedure and who to contact in English. If you feel panic setting in during a real emergency, take one slow breath and use the IPAD framework: Incident, People, Address, Details."
    },
    {
      "type": "dialogue",
      "lines": [
        {
          "speaker": "Dispatcher",
          "text": "Emergency services. Which service do you require?"
        },
        {
          "speaker": "Nat",
          "text": "Ambulance, please. A woman has collapsed in the street and she's not conscious."
        },
        {
          "speaker": "Dispatcher",
          "text": "Can you give me the address?"
        },
        {
          "speaker": "Nat",
          "text": "We're on Baker Street, just outside the tube station — near the entrance on the north side."
        },
        {
          "speaker": "Dispatcher",
          "text": "Is she breathing?"
        },
        {
          "speaker": "Nat",
          "text": "Yes, she is breathing, but her breathing is shallow and she isn't responding to my voice."
        },
        {
          "speaker": "Dispatcher",
          "text": "Don't move her. Keep her warm and stay on the line. An ambulance is on its way — approximately five minutes."
        },
        {
          "speaker": "Nat",
          "text": "Understood. I'll stay with her. Please hurry."
        }
      ]
    }
  ]
},

  // ── A2 ───────────────────────────────────────────────────────────────
  {
    id: 'a2-shopping-01',
    title: 'How much is it? — Shopping English',
    level: 'A2',
    topic: 'speaking',
    estimatedMinutes: 8,
    description: 'Learn to ask for prices, sizes, and make purchases confidently in English.',
    vocabularyDeckId: 'a2-shopping-vocab',
    quizId: 'a2-shopping-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Why this matters',
        body: 'Whether you\'re at a market in London, a mall in New York, or shopping online, you need to understand prices, ask for help, and negotiate. These phrases will make you sound confident immediately.'
      },
      {
        type: 'explanation',
        heading: 'Asking about price and availability',
        body: 'Use these essential phrases when shopping:\n\n"How much is this/that?" — asking for a price\n"Do you have this in a different size/colour?" — asking for options\n"Can I try this on?" — for clothing\n"Where can I find…?" — asking for location in a store'
      },
      {
        type: 'example',
        sentences: [
          { en: 'How much does this cost?', th: 'อันนี้ราคาเท่าไหร่?' },
          { en: 'Do you have this in a larger size?', th: 'มีไซส์ใหญ่กว่านี้ไหมคะ/ครับ?' },
          { en: 'Can I try this on, please?', th: 'ขอลองใส่ได้ไหมคะ/ครับ?' },
          { en: 'I\'ll take it. / I\'ll leave it.', th: 'เอาเลย / ไม่เอาดีกว่า' },
          { en: 'Do you accept credit cards?', th: 'รับบัตรเครดิตไหมคะ/ครับ?' },
          { en: 'Could I get a receipt, please?', th: 'ขอใบเสร็จด้วยได้ไหมคะ/ครับ?' }
        ]
      },
      {
        type: 'tip',
        body: '💡 In British English, say "Have you got…?" instead of "Do you have…?" — both are correct but Brits prefer the first one in conversation.'
      },
      {
        type: 'explanation',
        heading: 'Talking about size and colour',
        body: 'Sizes in English:\n\nXS (extra small) → S (small) → M (medium) → L (large) → XL (extra large) → XXL\n\nFor shoes: UK sizes ≠ US sizes ≠ EU sizes — always check!\n\nColour note: British English = "colour", American English = "color" — both are correct.'
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Shop assistant', text: 'Good afternoon! Can I help you?' },
          { speaker: 'Customer', text: 'Yes, please. I\'m looking for a blue shirt.' },
          { speaker: 'Shop assistant', text: 'Certainly. What size are you?' },
          { speaker: 'Customer', text: 'I\'m a medium, I think. How much is this one?' },
          { speaker: 'Shop assistant', text: 'That one is £29.99. Would you like to try it on?' },
          { speaker: 'Customer', text: 'Yes, please. Do you have it in dark blue as well?' },
          { speaker: 'Shop assistant', text: 'We do! The fitting rooms are just over there.' },
          { speaker: 'Customer', text: 'Perfect. I\'ll take the dark blue one. Can I pay by card?' }
        ]
      },
      {
        type: 'tip',
        body: '🛍️ "I\'m just browsing" = ดูเฉยๆ ยังไม่ซื้อ — ใช้เมื่อพนักงานถามว่าต้องการความช่วยเหลือไหม แต่คุณยังไม่ตัดสินใจ'
      }
    ]
  },
  {
    id: 'a2-restaurant-01',
    title: 'Table for two, please — At the Restaurant',
    level: 'A2',
    topic: 'speaking',
    estimatedMinutes: 9,
    description: 'Order food, make reservations, and handle restaurant situations in English.',
    vocabularyDeckId: 'a2-restaurant-vocab',
    quizId: 'a2-restaurant-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Eating out in English',
        body: 'Ordering at an English-speaking restaurant can be stressful if you don\'t know the right phrases. But once you learn a few key sentences, it becomes fun! The key is knowing what to say at each stage: arriving, ordering, and paying.'
      },
      {
        type: 'explanation',
        heading: 'Three stages of dining out',
        body: 'Stage 1 — ARRIVING:\n"Do you have a reservation?" / "I have a reservation under [name]."\n"A table for [number], please."\n\nStage 2 — ORDERING:\n"Could I see the menu, please?"\n"I\'d like the…" / "I\'ll have the…"\n"What do you recommend?"\n\nStage 3 — PAYING:\n"Could we have the bill, please?"\n"Is service included?"\n"We\'d like to pay separately."'
      },
      {
        type: 'example',
        sentences: [
          { en: 'I\'d like a table for two, please.', th: 'ขอโต๊ะสำหรับสองคนด้วยนะคะ/ครับ' },
          { en: 'Could I see the menu, please?', th: 'ขอดูเมนูได้ไหมคะ/ครับ?' },
          { en: 'What do you recommend?', th: 'คุณแนะนำอะไรดีคะ/ครับ?' },
          { en: 'I\'ll have the pasta, please.', th: 'ขอพาสต้าด้วยนะคะ/ครับ' },
          { en: 'Could we have the bill, please?', th: 'ขอเก็บเงินด้วยนะคะ/ครับ' },
          { en: 'Is service charge included?', th: 'รวมค่าบริการแล้วหรือเปล่าคะ/ครับ?' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Waiter', text: 'Good evening! Do you have a reservation?' },
          { speaker: 'Guest', text: 'Yes, I have a reservation under Thompson, for two people.' },
          { speaker: 'Waiter', text: 'Perfect. Right this way, please. Here are your menus.' },
          { speaker: 'Guest', text: 'Thank you. What do you recommend tonight?' },
          { speaker: 'Waiter', text: 'The salmon is excellent today. It comes with roasted vegetables.' },
          { speaker: 'Guest', text: 'That sounds lovely. I\'ll have the salmon. And could I have still water?' },
          { speaker: 'Waiter', text: 'Of course. I\'ll be back shortly to take your full order.' },
          { speaker: 'Guest', text: 'One more thing — do you have any vegetarian options?' }
        ]
      },
      {
        type: 'tip',
        body: '🍽️ Tipping in the UK: 10-15% is standard if service is not included. In the US, 18-20% is expected. Always check if "service charge" is already on the bill first!'
      },
      {
        type: 'explanation',
        heading: 'Dietary requirements',
        body: 'Important phrases for dietary needs:\n\n"I\'m vegetarian / vegan." — กินมังสวิรัติ / วีแกน\n"I\'m allergic to nuts / shellfish." — แพ้ถั่ว / อาหารทะเล\n"Does this contain gluten / dairy?" — อันนี้มีกลูเตน / นมไหม?\n"Is this dish spicy?" — จานนี้เผ็ดไหมคะ/ครับ?'
      }
    ]
  },
  {
    id: 'a2-directions-01',
    title: 'Turn left at the corner — Giving Directions',
    level: 'A2',
    topic: 'speaking',
    estimatedMinutes: 8,
    description: 'Ask for and give directions clearly in English, using landmarks and transport.',
    vocabularyDeckId: 'a2-directions-vocab',
    quizId: 'a2-directions-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Never get lost again',
        body: 'Getting directions right is one of the most practical skills in English. The vocabulary is simple, but the key is combining it smoothly. Whether someone stops you on the street or you ask at a hotel desk, these phrases always work.'
      },
      {
        type: 'explanation',
        heading: 'Key direction phrases',
        body: 'Movement:\n"Go straight ahead." — ตรงไปเรื่อยๆ\n"Turn left / right." — เลี้ยวซ้าย / ขวา\n"Take the first / second left." — เลี้ยวซ้ายแรก / สอง\n\nDistance:\n"It\'s about 5 minutes on foot." — ประมาณ 5 นาทีเดิน\n"It\'s not far." / "It\'s quite far." — ไม่ไกล / ค่อนข้างไกล\n\nLandmarks:\n"It\'s next to / opposite / behind the…" — อยู่ข้างๆ / ตรงข้าม / หลัง…\n"You\'ll see it on your left / right." — จะเห็นอยู่ทางซ้าย / ขวา'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Excuse me, how do I get to the station?', th: 'ขอโทษนะคะ/ครับ ไปสถานีรถไฟยังไงคะ/ครับ?' },
          { en: 'Go straight ahead and turn right at the traffic lights.', th: 'ตรงไปแล้วเลี้ยวขวาตรงสัญญาณไฟ' },
          { en: 'It\'s about a ten-minute walk from here.', th: 'เดินประมาณสิบนาทีจากที่นี่' },
          { en: 'Take the second turning on the left.', th: 'เลี้ยวซ้ายตรงทางแยกที่สอง' },
          { en: 'It\'s opposite the post office.', th: 'อยู่ตรงข้ามที่ทำการไปรษณีย์' },
          { en: 'You can\'t miss it — it\'s a big red building.', th: 'ไม่พลาดหรอก เป็นตึกสีแดงใหญ่เลย' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Tourist', text: 'Excuse me, I\'m looking for the National Museum. Am I going the right way?' },
          { speaker: 'Local', text: 'Almost! You need to turn back and go straight down this road.' },
          { speaker: 'Tourist', text: 'How far is it from here?' },
          { speaker: 'Local', text: 'It\'s about a fifteen-minute walk. Or you can take the number 12 bus.' },
          { speaker: 'Tourist', text: 'I\'ll walk, I think. Do I turn anywhere?' },
          { speaker: 'Local', text: 'Yes — turn left at the big park. The museum is right there, opposite a fountain.' },
          { speaker: 'Tourist', text: 'Left at the park, opposite the fountain. Got it! Thank you so much.' },
          { speaker: 'Local', text: 'You\'re welcome. Enjoy the museum!' }
        ]
      },
      {
        type: 'tip',
        body: '🗺️ Pro tip: If you don\'t understand directions, say "I\'m sorry, could you repeat that more slowly?" or "Could you write it down?" — locals are usually happy to help!'
      }
    ]
  },

  // ── B1 (additional) ──────────────────────────────────────────────────
  {
    id: 'b1-conditionals-01',
    title: 'If I Won the Lottery… — Conditionals',
    level: 'B1',
    topic: 'grammar',
    estimatedMinutes: 12,
    description: 'Master the First and Second Conditionals to talk about possibilities and hypothetical situations.',
    vocabularyDeckId: 'b1-conditionals-vocab',
    quizId: 'b1-conditionals-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Real vs. imaginary',
        body: 'Conditionals are sentences with "if." English has different structures depending on how real or likely the situation is. Thai learners often translate directly from Thai ("ถ้า…ก็…") and get confused by the verb forms. This lesson will make it crystal clear.'
      },
      {
        type: 'explanation',
        heading: 'First Conditional — real & likely',
        body: 'Form: If + present simple, will + verb\n\nUse when: the situation is REAL and POSSIBLE — you actually think it might happen.\n\nIf it rains, I will take an umbrella. ✓\nIf it rains, I would take an umbrella. ✗ (that\'s second conditional)\n\nKey words: will, can, may, might, should\n\nRemember: Never use "will" in the if-clause!\n✗ "If it will rain, I will take…"\n✓ "If it rains, I will take…"'
      },
      {
        type: 'example',
        sentences: [
          { en: 'If I study hard, I will pass the exam.', th: 'ถ้าฉันตั้งใจเรียน ฉันจะสอบผ่าน (เป็นไปได้จริง)' },
          { en: 'If it\'s sunny tomorrow, we\'ll go to the beach.', th: 'ถ้าพรุ่งนี้แดดออก เราจะไปทะเล' },
          { en: 'If you miss the bus, you can call me.', th: 'ถ้าคุณพลาดรถ โทรมาหาฉันได้เลย' },
          { en: 'If I win the lottery, I\'ll buy a house.', th: 'ถ้าฉันถูกลอตเตอรี่ ฉันจะซื้อบ้าน (คิดว่าเป็นไปได้)' },
          { en: 'If you need help, I\'ll be in my office.', th: 'ถ้าต้องการความช่วยเหลือ ฉันอยู่ที่ออฟฟิศ' },
          { en: 'She\'ll be late if she doesn\'t leave now.', th: 'เธอจะสายถ้าไม่ออกตอนนี้' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Second Conditional — imaginary & unlikely',
        body: 'Form: If + past simple, would + verb\n\nUse when: the situation is IMAGINARY or VERY UNLIKELY — you don\'t really think it will happen.\n\nIf I won the lottery, I would travel the world. (unlikely — you probably won\'t win)\nIf I were you, I would apologise. (impossible — I can\'t be you)\n\n⚡ Special rule: Use "were" (not "was") for all subjects in formal/correct English:\n"If I were rich…" ✓ (not "If I was rich…" in formal writing)\n"If she were here…" ✓'
      },
      {
        type: 'example',
        sentences: [
          { en: 'If I were taller, I would play basketball.', th: 'ถ้าฉันสูงกว่านี้ ฉันคงเล่นบาสเก็ตบอล (แต่ฉันไม่สูง)' },
          { en: 'If I had more time, I would learn Japanese.', th: 'ถ้าฉันมีเวลามากกว่านี้ คงเรียนภาษาญี่ปุ่น' },
          { en: 'What would you do if you lost your passport?', th: 'คุณจะทำอะไรถ้าหนังสือเดินทางหาย?' },
          { en: 'If she knew the answer, she would tell us.', th: 'ถ้าเธอรู้คำตอบ เธอคงบอกพวกเราแล้ว' },
          { en: 'I would visit more countries if flights were cheaper.', th: 'ฉันคงไปเที่ยวหลายประเทศถ้าค่าตั๋วถูกกว่านี้' },
          { en: 'If I were you, I wouldn\'t say that.', th: 'ถ้าฉันเป็นคุณ ฉันคงไม่พูดแบบนั้น' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'A', text: 'What would you do if you won a million dollars?' },
          { speaker: 'B', text: 'Hmm, if I won that much money, I would definitely quit my job first!' },
          { speaker: 'A', text: 'Really? I would travel the world. Where would you go?' },
          { speaker: 'B', text: 'I\'d buy a house in the countryside. And if I had enough left over, I\'d start a small business.' },
          { speaker: 'A', text: 'That sounds great. I think if I were you, I\'d invest most of it.' },
          { speaker: 'B', text: 'That\'s sensible. What will you do if you get your bonus this month?' },
          { speaker: 'A', text: 'Oh, that\'s a real possibility! If I get it, I\'ll put it in savings.' },
          { speaker: 'B', text: 'See — for things that are likely, we use "will"!' }
        ]
      },
      {
        type: 'tip',
        body: '⚡ Quick test: Is it REAL/LIKELY? → Use First Conditional (will). Is it IMAGINARY/UNLIKELY? → Use Second Conditional (would). The "if" clause tells you how real it is.'
      }
    ]
  },
  {
    id: 'b1-passive-01',
    title: 'It Was Built in 1889 — The Passive Voice',
    level: 'B1',
    topic: 'grammar',
    estimatedMinutes: 11,
    description: 'Learn when and how to use passive voice — essential for formal writing and news English.',
    vocabularyDeckId: 'b1-passive-vocab',
    quizId: 'b1-passive-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Why passive voice matters',
        body: 'The Eiffel Tower was built in 1889. English was invented by nobody — it evolved. These sentences use passive voice, and you see it everywhere: in news, science, history, and formal writing. Thai learners often avoid it, but it\'s not as hard as it looks.'
      },
      {
        type: 'explanation',
        heading: 'Active vs. Passive',
        body: 'Active: Subject DOES the action.\n"Workers built the tower in 1889." → we focus on workers\n\nPassive: Subject RECEIVES the action.\n"The tower was built in 1889." → we focus on the tower\n\nForm: be + past participle (+ by + agent)\n\nPresent: "English is spoken in 60 countries."\nPast: "The letter was written yesterday."\nFuture: "The results will be announced tomorrow."\nPresent Perfect: "The report has been completed."'
      },
      {
        type: 'example',
        sentences: [
          { en: 'The Pyramids were built thousands of years ago.', th: 'พีระมิดถูกสร้างขึ้นเมื่อหลายพันปีก่อน' },
          { en: 'English is spoken by over 1.5 billion people.', th: 'ภาษาอังกฤษถูกพูดโดยคนกว่า 1.5 พันล้านคน' },
          { en: 'My phone was stolen on the train.', th: 'โทรศัพท์ของฉันถูกขโมยบนรถไฟ' },
          { en: 'The meeting has been cancelled.', th: 'การประชุมถูกยกเลิกแล้ว' },
          { en: 'The new hospital will be opened next year.', th: 'โรงพยาบาลแห่งใหม่จะเปิดปีหน้า' },
          { en: 'The package is being delivered right now.', th: 'พัสดุกำลังถูกส่งตอนนี้' }
        ]
      },
      {
        type: 'explanation',
        heading: 'When to use passive voice',
        body: 'Use passive when:\n\n1. The DOER is unknown → "My bag was stolen." (we don\'t know who)\n2. The DOER is obvious → "The suspect was arrested." (by police — obvious)\n3. The THING is more important → "The report was submitted on time."\n4. Formal/academic writing → Science reports, news articles\n5. Avoid blame → "Mistakes were made." (not: "I made mistakes.")'
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Guide', text: 'Welcome to the palace. It was built in 1782 by King Rama I.' },
          { speaker: 'Tourist', text: 'It\'s incredible. Has it been restored recently?' },
          { speaker: 'Guide', text: 'Yes, major restoration work was completed just five years ago.' },
          { speaker: 'Tourist', text: 'Is photography allowed inside?' },
          { speaker: 'Guide', text: 'Photos can be taken in the outer halls, but flash is not permitted.' },
          { speaker: 'Tourist', text: 'I heard some jewels were stolen in the 1970s. Is that true?' },
          { speaker: 'Guide', text: 'Yes, unfortunately several items were taken, but most were recovered.' },
          { speaker: 'Tourist', text: 'Recovered — so they were found again. Great use of passive!' }
        ]
      },
      {
        type: 'tip',
        body: '📰 Read BBC News or The Guardian for 10 minutes a day. Passive voice is used constantly in journalism. You\'ll start noticing it everywhere — that\'s when it becomes natural.'
      }
    ]
  },
  {
    id: 'b1-small-talk-01',
    title: 'How\'s everything going? — The Art of Small Talk',
    level: 'B1',
    topic: 'speaking',
    estimatedMinutes: 10,
    description: 'Master small talk — the short, friendly conversations that build relationships in English.',
    vocabularyDeckId: 'b1-small-talk-vocab',
    quizId: 'b1-small-talk-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'Why small talk feels hard',
        body: 'Thai culture has different social norms — deep personal questions are normal between acquaintances. In English-speaking cultures, strangers and colleagues often start with safe, light topics: weather, weekend plans, current events. Knowing this pattern immediately makes you more comfortable in social situations.'
      },
      {
        type: 'explanation',
        heading: 'The four safe small talk topics',
        body: '1. 🌦️ WEATHER — Always safe. "Lovely day, isn\'t it?" / "Can you believe this heat?"\n\n2. 📅 WEEKEND / PLANS — "Any plans for the weekend?" / "Did you do anything nice?"\n\n3. 💼 WORK (lightly) — "How\'s work been?" / "Busy week?"\n\n4. 🎬 ENTERTAINMENT — "Have you seen any good films recently?" / "Are you watching anything good?"\n\n⚠️ AVOID: politics, religion, salary, age, weight, relationship status with people you don\'t know well.'
      },
      {
        type: 'example',
        sentences: [
          { en: 'Not bad at all, thanks. How about you?', th: 'ดีเลยนะ ขอบคุณ แล้วคุณล่ะ?' },
          { en: 'What a gorgeous day! Are you enjoying the sunshine?', th: 'วันนี้อากาศดีมากเลย คุณชอบแดดไหม?' },
          { en: 'Did you have a good weekend?', th: 'สุดสัปดาห์ที่ผ่านมาเป็นยังไงบ้าง?' },
          { en: 'I\'m absolutely exhausted — it\'s been a crazy week!', th: 'เหนื่อยมากเลย อาทิตย์นี้วุ่นวายมาก!' },
          { en: 'Have you tried that new Thai restaurant on the high street?', th: 'คุณลองร้านไทยใหม่บนถนนหลักยัง?' },
          { en: 'That sounds brilliant — you must have had a great time!', th: 'ฟังดูสุดยอดเลย คุณต้องสนุกมากเลย!' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'James', text: 'Morning, Ploy! How are you doing?' },
          { speaker: 'Ploy', text: 'Pretty good, thanks! A bit tired — I had a late night.' },
          { speaker: 'James', text: 'Oh really? Anything fun?' },
          { speaker: 'Ploy', text: 'I went to see a live band. It was brilliant! Do you like live music?' },
          { speaker: 'James', text: 'I love it! Who did you see?' },
          { speaker: 'Ploy', text: 'A jazz band at the Blue Note. Have you been there?' },
          { speaker: 'James', text: 'Not yet, but I\'ve been meaning to go. Was it expensive?' },
          { speaker: 'Ploy', text: 'About £20 entry. Totally worth it. You should check it out!' }
        ]
      },
      {
        type: 'tip',
        body: '🗣️ The golden rule of small talk: ASK a question, then LISTEN and BUILD on what they say. Don\'t just answer — add a detail and turn it back to them. This keeps the conversation flowing naturally.'
      }
    ]
  },

  // ── C1 ───────────────────────────────────────────────────────────────
  {
    id: 'c1-negotiation-01',
    title: 'Let\'s find a middle ground — Negotiation English',
    level: 'C1',
    topic: 'business',
    estimatedMinutes: 15,
    description: 'Master the language of negotiation, persuasion, and reaching agreement in professional contexts.',
    vocabularyDeckId: 'c1-negotiation-vocab',
    quizId: 'c1-negotiation-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'The language of getting what you want (diplomatically)',
        body: 'Negotiation in English is not about being aggressive — it\'s about being clear, firm, and respectful at the same time. The language of negotiation uses specific patterns: softening refusals, making conditional offers, buying time, and closing the deal. These phrases work in salary discussions, business deals, and even everyday situations.'
      },
      {
        type: 'explanation',
        heading: 'Key negotiation moves',
        body: 'Making an opening offer:\n"Our initial proposal is…" / "We\'re prepared to offer…"\n\nCountering / pushing back:\n"That\'s a bit higher than we expected." / "I\'m afraid that doesn\'t quite work for us."\n\nMaking concessions:\n"We\'d be willing to… if you could…" / "I can go as low as… but that\'s my bottom line."\n\nBuying time:\n"Let me take that back to my team." / "I\'ll need to check with my manager on that."\n\nClosing:\n"I think we have a deal." / "Let\'s shake on that." / "Shall we draw up the paperwork?"'
      },
      {
        type: 'example',
        sentences: [
          { en: 'We\'d be willing to lower the price if you can increase the order quantity.', th: 'เราพร้อมจะลดราคาถ้าคุณเพิ่มปริมาณการสั่งซื้อ' },
          { en: 'That\'s my bottom line — I can\'t go any lower than that.', th: 'นั่นคือราคาต่ำสุดของฉัน ลดไม่ได้อีกแล้ว' },
          { en: 'I can see where you\'re coming from, but I\'m afraid we can\'t accept those terms.', th: 'ฉันเข้าใจมุมมองของคุณ แต่น่าเสียดายที่เราไม่สามารถรับเงื่อนไขนั้นได้' },
          { en: 'Let\'s see if we can find a middle ground that works for both parties.', th: 'มาดูกันว่าเราจะหาจุดกึ่งกลางที่ทั้งสองฝ่ายโอเคได้ไหม' },
          { en: 'I\'ll need to run this by my director before I can commit to anything.', th: 'ฉันต้องปรึกษาผู้อำนวยการก่อนที่จะยืนยันอะไร' },
          { en: 'If we can agree on the timeline, I think we have a deal.', th: 'ถ้าเราตกลงเรื่องกำหนดเวลาได้ คิดว่าเราตกลงกันได้' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Softening language — essential at C1',
        body: 'Native speakers rarely say "No" directly. Instead they use softeners:\n\n"I\'m afraid…" → ฉันเสียใจที่ต้องบอกว่า…\n"Unfortunately…" → น่าเสียดายที่…\n"I\'m not sure we can…" → ไม่แน่ใจว่าเราจะ…\n"That might be a bit difficult…" → อาจจะค่อนข้างยาก…\n"I see your point, however…" → เข้าใจประเด็นคุณ แต่…\n\nThese phrases let you decline without damaging the relationship.'
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Buyer', text: 'Thank you for sending over the proposal. We\'ve reviewed it and there are a few points we\'d like to discuss.' },
          { speaker: 'Seller', text: 'Of course. I\'m glad you had a chance to look it over. What are your thoughts?' },
          { speaker: 'Buyer', text: 'The quality looks excellent, but frankly the price is higher than we anticipated. We were expecting something closer to £80 per unit.' },
          { speaker: 'Seller', text: 'I understand your position. I\'m afraid £80 is below our cost price. However, if you\'re able to commit to an order of 500 units, we could come down to £92.' },
          { speaker: 'Buyer', text: 'That\'s moving in the right direction. Could you also extend the payment terms to 60 days?' },
          { speaker: 'Seller', text: 'I\'ll need to check with my finance team on the payment terms. But if we can agree on the unit price today, I\'m confident we can work something out.' },
          { speaker: 'Buyer', text: 'Let\'s say £90 per unit, 500 units, with 45-day payment terms. That\'s our final position.' },
          { speaker: 'Seller', text: 'Let me just make a quick call... Yes, we can do £90 at 45 days for 500 units. I think we have a deal. Shall I send over the contract?' }
        ]
      },
      {
        type: 'tip',
        body: '🤝 Power move: Always let the other side make the first offer. It reveals their expectations and gives you room to negotiate upward or downward from there. Silence after an offer can be a very effective tool.'
      }
    ]
  },
  {
    id: 'c1-idioms-01',
    title: 'Paint the Picture — Idiomatic English in Context',
    level: 'C1',
    topic: 'vocabulary',
    estimatedMinutes: 14,
    description: 'Go beyond textbook English — learn high-frequency idioms that native speakers use every day.',
    vocabularyDeckId: 'c1-idioms-vocab',
    quizId: 'c1-idioms-quiz',
    sections: [
      {
        type: 'intro',
        heading: 'The gap between textbook and real English',
        body: 'You can speak grammatically perfect English and still struggle to understand native speakers. Why? Idioms. Phrases like "on the fence," "bite the bullet," and "the ball is in your court" appear constantly in conversation, films, and business. This lesson gives you the most useful ones in real context.'
      },
      {
        type: 'explanation',
        heading: 'Idioms for decisions & action',
        body: '"On the fence" = ยังไม่ตัดสินใจ, ลังเล\n"Bite the bullet" = ทนสู้ทำในสิ่งที่ยากหรือไม่อยากทำ\n"Jump the gun" = รีบเร่งเกินไป, ด่วนสรุป\n"Call it a day" = หยุดทำงานสำหรับวันนี้\n"Go back to the drawing board" = เริ่มต้นใหม่ทั้งหมด\n"The ball is in your court" = ถึงตาคุณแล้ว, การตัดสินใจอยู่ที่คุณ'
      },
      {
        type: 'example',
        sentences: [
          { en: 'I\'m still on the fence about whether to take the job offer.', th: 'ฉันยังลังเลอยู่ว่าจะรับข้อเสนองานหรือเปล่า' },
          { en: 'We need to bite the bullet and tell the client the project will be delayed.', th: 'เราต้องทนบอกลูกค้าว่าโครงการจะล่าช้า' },
          { en: 'Don\'t jump the gun — we don\'t have all the facts yet.', th: 'อย่าด่วนสรุป เรายังไม่มีข้อมูลครบ' },
          { en: 'I\'ve sent my proposal — the ball is in their court now.', th: 'ฉันส่งข้อเสนอไปแล้ว ตอนนี้ถึงตาพวกเขาแล้ว' },
          { en: 'The whole design failed — we had to go back to the drawing board.', th: 'ดีไซน์ทั้งหมดล้มเหลว เราต้องเริ่มต้นใหม่ทั้งหมด' },
          { en: 'It\'s been a long day. Let\'s call it a day and pick this up tomorrow.', th: 'วันนี้ยาวนานมากแล้ว หยุดวันนี้ก่อนแล้วมาต่อพรุ่งนี้' }
        ]
      },
      {
        type: 'explanation',
        heading: 'Idioms for work & effort',
        body: '"Burn the midnight oil" = ทำงานดึกดื่น, ทำงานหนัก\n"Hit the ground running" = เริ่มต้นอย่างรวดเร็วและมีประสิทธิภาพ\n"Pull your weight" = ทำงานเต็มที่ ช่วยเหลือทีมเต็มที่\n"Get the ball rolling" = เริ่มต้นทำสิ่งใดสิ่งหนึ่ง\n"Cut corners" = ทำอะไรแบบลวกๆ ไม่ทำให้ครบถ้วน\n"Ahead of the curve" = ล้ำหน้ากว่าคนอื่น, ทันสมัย'
      },
      {
        type: 'example',
        sentences: [
          { en: 'She burned the midnight oil to finish the report before the deadline.', th: 'เธอทำงานดึกเพื่อทำรายงานให้เสร็จก่อนกำหนด' },
          { en: 'The new manager hit the ground running — she had ideas from day one.', th: 'ผู้จัดการคนใหม่เริ่มต้นได้เลย มีไอเดียตั้งแต่วันแรก' },
          { en: 'We can\'t afford to cut corners on safety procedures.', th: 'เราไม่สามารถทำขั้นตอนความปลอดภัยแบบลวกๆ ได้' },
          { en: 'Let\'s get the ball rolling — who wants to present first?', th: 'มาเริ่มกันเลย ใครจะนำเสนอก่อน?' }
        ]
      },
      {
        type: 'dialogue',
        lines: [
          { speaker: 'Sarah', text: 'Have you made a decision about the Singapore job yet?' },
          { speaker: 'Tom', text: 'Honestly? I\'m still on the fence. The salary is great, but it\'s a huge move.' },
          { speaker: 'Sarah', text: 'I get it. But the opportunity won\'t wait forever — the ball is in your court.' },
          { speaker: 'Tom', text: 'I know. I\'ve been burning the midnight oil going over the pros and cons.' },
          { speaker: 'Sarah', text: 'Look, you need to bite the bullet and make a decision. When\'s the deadline?' },
          { speaker: 'Tom', text: 'Friday. I was thinking of asking for more time, but I don\'t want to jump the gun on rejecting it either.' },
          { speaker: 'Sarah', text: 'Contact them today. Get the ball rolling on a second conversation at least.' },
          { speaker: 'Tom', text: 'You\'re right. I\'ve been going back and forth too long. Time to stop cutting corners on this decision.' }
        ]
      },
      {
        type: 'tip',
        body: '🎬 Best way to learn idioms: watch British panel shows (QI, Would I Lie to You?) or American talk shows with subtitles. Pause when you hear an idiom you don\'t know — look it up, note the context, then move on. Context is everything.'
      }
    ]
  }
]

export function getLessonById(id) {
  return lessons.find(l => l.id === id) || null
}
