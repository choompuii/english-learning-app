export const quizzes = [
  {
    id: 'a1-greetings-quiz',
    lessonId: 'a1-greetings-01',
    title: 'Greetings Check',
    questions: [
      {
        id: 'ag-q1',
        type: 'multiple-choice',
        prompt: 'You meet someone for the first time in the morning. What do you say?',
        options: ['Good night!', 'Good morning!', 'Good evening!', 'Goodbye!'],
        correctIndex: 1,
        explanation: '"Good morning" is used as a greeting in the morning. "Good night" is a farewell before bed, not a greeting.'
      },
      {
        id: 'ag-q2',
        type: 'multiple-choice',
        prompt: 'Which sentence is correct when introducing yourself?',
        options: [
          'I am name Ploy.',
          'My name is Ploy.',
          'Name me is Ploy.',
          'I name Ploy.'
        ],
        correctIndex: 1,
        explanation: '"My name is ___" is the standard way to introduce yourself. You can also say "I\'m ___" as a shorter form.'
      },
      {
        id: 'ag-q3',
        type: 'fill-in-blank',
        prompt: 'Complete the response: "Nice to meet you!" → "Nice to meet you ___!"',
        answer: 'too',
        acceptedVariants: ['too', 'as well'],
        explanation: 'When someone says "Nice to meet you," the natural reply is "Nice to meet you too!" or "Nice to meet you as well!"'
      },
      {
        id: 'ag-q4',
        type: 'multiple-choice',
        prompt: 'Someone asks "How are you?" Which answer is most natural?',
        options: [
          'I am fine.',
          "I'm fine, thank you!",
          'Yes, I am.',
          'I am good, thank you very much sir.'
        ],
        correctIndex: 1,
        explanation: '"I\'m fine, thank you!" is natural and friendly. The full form "I am fine" sounds a bit stiff in casual conversation.'
      },
      {
        id: 'ag-q5',
        type: 'sentence-scramble',
        prompt: 'เรียงคำให้เป็นประโยคแนะนำตัวที่ถูกต้อง:',
        words: ['My', 'name', 'is', 'Ploy', '.'],
        explanation: '"My name is ___." เป็นรูปแบบมาตรฐานสำหรับแนะนำตัว นิยมใช้ในทุกสถานการณ์'
      },
      {
        id: 'ag-q6',
        type: 'word-matching',
        prompt: 'จับคู่คำทักทายกับสถานการณ์ที่ใช้:',
        pairs: [
          { word: 'Good morning', match: 'ใช้ในตอนเช้า' },
          { word: 'Good evening', match: 'ใช้ตอนค่ำ' },
          { word: 'Goodbye', match: 'ใช้เมื่อจากลา' },
          { word: 'Nice to meet you', match: 'ใช้เมื่อพบครั้งแรก' }
        ],
        explanation: 'คำทักทายภาษาอังกฤษเปลี่ยนตามเวลาและสถานการณ์ ต่างจากภาษาไทยที่ใช้ "สวัสดี" ได้ทุกเวลา'
      }
    ]
  },
  {
    id: 'b1-present-perfect-quiz',
    lessonId: 'b1-present-perfect-01',
    title: 'Present Perfect Check',
    questions: [
      {
        id: 'pp-q1',
        type: 'multiple-choice',
        prompt: 'Choose the grammatically correct sentence:',
        options: [
          'I have seen him yesterday.',
          'I saw him yesterday.',
          'I have saw him yesterday.',
          'I see him yesterday.'
        ],
        correctIndex: 1,
        explanation: '"Yesterday" is a finished, specific time. You MUST use Simple Past: "I saw him yesterday." Present Perfect cannot be used with finished time expressions.'
      },
      {
        id: 'pp-q2',
        type: 'fill-in-blank',
        prompt: 'She ___ (live) in Chiang Mai since 2019.',
        answer: 'has lived',
        acceptedVariants: ['has lived', 'has been living', "'s lived"],
        explanation: 'Use Present Perfect with "since" + point in time. The action started in 2019 and is still happening now.'
      },
      {
        id: 'pp-q3',
        type: 'multiple-choice',
        prompt: 'Which word fits? "I haven\'t finished ___."',
        options: ['already', 'yet', 'since', 'ever'],
        correctIndex: 1,
        explanation: '"Yet" is used at the end of negative sentences and questions. "Already" goes before the main verb in positives.'
      },
      {
        id: 'pp-q4',
        type: 'multiple-choice',
        prompt: 'Choose the correct Present Perfect sentence:',
        options: [
          'Have you ever been to Japan?',
          'Did you ever go to Japan?',
          'Have you ever went to Japan?',
          'Did you ever been to Japan?'
        ],
        correctIndex: 0,
        explanation: '"Have you ever been to Japan?" is correct. Present Perfect uses "have/has + past participle" — "been" is the past participle of "be/go" (to a place).'
      },
      {
        id: 'pp-q5',
        type: 'fill-in-blank',
        prompt: "I ___ (not / eat) breakfast today.",
        answer: "haven't eaten",
        acceptedVariants: ["haven't eaten", "have not eaten", "haven't ate"],
        explanation: 'Negative Present Perfect: have not (haven\'t) + past participle. "Eaten" is the past participle of "eat".'
      },
      {
        id: 'pp-q6',
        type: 'sentence-scramble',
        prompt: 'เรียงคำให้เป็นประโยค Present Perfect ที่ถูกต้อง:',
        words: ['She', 'has', 'never', 'been', 'to', 'London', '.'],
        explanation: '"She has never been to London." — โครงสร้าง: Subject + have/has + never + past participle. ใช้ "never" เพื่อแสดงว่าไม่เคยทำสิ่งนั้นเลย'
      },
      {
        id: 'pp-q7',
        type: 'word-matching',
        prompt: 'จับคู่คำกับความหมาย (Present Perfect keywords):',
        pairs: [
          { word: 'already', match: 'ทำเสร็จแล้ว' },
          { word: 'yet', match: 'ใช้ในคำถาม/ปฏิเสธ' },
          { word: 'since', match: 'ตั้งแต่จุดเวลาหนึ่ง' },
          { word: 'for', match: 'ตลอดระยะเวลา' }
        ],
        explanation: 'คำเหล่านี้เป็น "signal words" ที่บ่งบอกว่าต้องใช้ Present Perfect — จำไว้ว่า since + จุดเวลา, for + ระยะเวลา'
      }
    ]
  },
  {
    id: 'b1-phone-quiz',
    lessonId: 'b1-phone-calls-01',
    title: 'Phone Calls & Voicemails Check',
    questions: [
      {
        id: 'ph-q1',
        type: 'multiple-choice',
        prompt: 'You call a company and ask for a colleague. What should you say FIRST?',
        options: [
          'Can I speak to Sarah?',
          'Hello, this is Mint calling — could I speak to Sarah, please?',
          'Is Sarah there?',
          'Give me Sarah.'
        ],
        correctIndex: 1,
        explanation: 'Always identify yourself before asking for someone. "Hello, this is [name] calling" is the standard professional opener.'
      },
      {
        id: 'ph-q2',
        type: 'multiple-choice',
        prompt: 'The receptionist says "The line is engaged." What does this mean?',
        options: [
          'The person is not at work today.',
          'The phone is broken.',
          'The person is already on another call.',
          'The office is closed.'
        ],
        correctIndex: 2,
        explanation: '"Engaged" (British English) or "busy" (American English) means the phone line is already being used — the person is on another call.'
      },
      {
        id: 'ph-q3',
        type: 'fill-in-blank',
        prompt: 'You need to transfer a caller: "I\'ll ___ you through to the accounts department."',
        answer: 'put',
        acceptedVariants: ['put', 'connect', 'transfer'],
        explanation: '"Put you through" is the standard phrase for transferring a call. "Connect" and "transfer" are also used but less idiomatic.'
      },
      {
        id: 'ph-q4',
        type: 'multiple-choice',
        prompt: 'You are leaving a voicemail. What information is MOST important to include?',
        options: [
          'Your email address and home address.',
          'Your name, phone number, reason for calling, and best time to call back.',
          'Your name and the time you called.',
          'Just your name — they can look up your number.'
        ],
        correctIndex: 1,
        explanation: 'A complete voicemail always includes: your name, your phone number (say it slowly and twice!), the reason for calling, and the best time to reach you.'
      },
      {
        id: 'ph-q5',
        type: 'multiple-choice',
        prompt: 'The caller says something too fast. Which is the MOST polite response?',
        options: [
          'What? Say it again.',
          'I cannot understand you.',
          'Sorry, could you speak a little more slowly, please?',
          'Please repeat.'
        ],
        correctIndex: 2,
        explanation: '"Could you speak a little more slowly, please?" is polite and clear. It acknowledges the problem without blaming the other person.'
      },
      {
        id: 'ph-q6',
        type: 'fill-in-blank',
        prompt: 'The receptionist asks you to wait: "Could you ___ for a moment, please?"',
        answer: 'hold',
        acceptedVariants: ['hold', 'wait', 'hold on'],
        explanation: '"Hold" or "hold on" is the standard phone phrase for asking someone to wait. "Hold" alone is most common in professional contexts.'
      },
      {
        id: 'ph-q7',
        type: 'multiple-choice',
        prompt: 'You want to check you heard the reference number correctly. What do you say?',
        options: [
          'That is wrong.',
          'Let me read that back to you — the number is 4892, correct?',
          'Say it again please.',
          'Number 4892?'
        ],
        correctIndex: 1,
        explanation: '"Let me read that back to you" is the professional way to confirm information. It shows care and avoids errors.'
      },
      {
        id: 'ph-q8',
        type: 'multiple-choice',
        prompt: 'A colleague missed your call. You get their voicemail. Which opening is best?',
        options: [
          '"You didn\'t answer, so I\'m leaving a message."',
          '"Hi, this is Ploy. I\'m calling about the project deadline."',
          '"Call me back."',
          '"Hello, are you there?"'
        ],
        correctIndex: 1,
        explanation: 'Start a voicemail with your name and reason immediately. The listener may be checking messages quickly and needs context at once.'
      },
      {
        id: 'ph-q9',
        type: 'fill-in-blank',
        prompt: 'End your voicemail: "I look forward to ___ from you."',
        answer: 'hearing',
        acceptedVariants: ['hearing', 'hearing back'],
        explanation: '"I look forward to hearing from you" is a polite, professional way to close a voicemail or email, inviting a response.'
      },
      {
        id: 'ph-q10',
        type: 'multiple-choice',
        prompt: 'You want to end the call. Which phrase wraps it up most professionally?',
        options: [
          '"Okay, bye."',
          '"I think that covers everything — thank you for your help. Goodbye!"',
          '"I have to go now."',
          '"Stop talking, I am busy."'
        ],
        correctIndex: 1,
        explanation: 'A professional call ending summarises that the purpose is complete and thanks the other person before saying goodbye.'
      },
      {
        id: 'ph-q11',
        type: 'multiple-choice',
        prompt: 'What does "I\'ll put you on hold" mean?',
        options: [
          'The call is being recorded.',
          'You are being asked to wait while the other person does something.',
          'The call has ended.',
          'You are being transferred to a voicemail.'
        ],
        correctIndex: 1,
        explanation: '"Put you on hold" means you must wait — the other person will come back to you. You will often hear music while on hold.'
      },
      {
        id: 'ph-q12',
        type: 'fill-in-blank',
        prompt: 'You want to call the person back: "Could you ask him to ___ me back, please?"',
        answer: 'call',
        acceptedVariants: ['call', 'ring', 'phone', 'get back to'],
        explanation: '"Call me back" is the standard phrase. "Ring me back" (British) and "get back to me" are also natural alternatives.'
      },
      {
        id: 'ph-q13',
        type: 'multiple-choice',
        prompt: 'You are calling a friend (not a business). Which opening is most natural?',
        options: [
          '"Good afternoon. This is Nong Kaewsai calling."',
          '"Hello, this is Nong. Is this a good time?"',
          '"Hey! It\'s me."',
          '"I am calling you now."'
        ],
        correctIndex: 1,
        explanation: 'With friends, you can be more casual but still identify yourself. "It\'s me" only works if the person already has your number saved.'
      },
      {
        id: 'ph-q14',
        type: 'multiple-choice',
        prompt: 'The caller asks: "Did you say Tuesday or Thursday?" This is an example of:',
        options: [
          'Leaving a voicemail.',
          'Ending a call.',
          'Clarifying information.',
          'Putting someone on hold.'
        ],
        correctIndex: 2,
        explanation: 'Asking for clarification is essential on phone calls where mishearing is common. Always check specific details like dates, names, and numbers.'
      },
      {
        id: 'ph-q15',
        type: 'fill-in-blank',
        prompt: 'You want to spell out a name on the phone: "That\'s P-L-O-Y. Could you ___ that for me?"',
        answer: 'confirm',
        acceptedVariants: ['confirm', 'repeat back', 'read back', 'check'],
        explanation: '"Could you confirm that?" asks the listener to verify they heard correctly. On calls, always spell names and codes clearly.'
      },
      {
        id: 'ph-q16',
        type: 'multiple-choice',
        prompt: 'What is a "missed call"?',
        options: [
          'A call you made to the wrong number.',
          'A call that came in but you did not answer.',
          'A call where the connection was bad.',
          'A call that went to voicemail.'
        ],
        correctIndex: 1,
        explanation: 'A "missed call" is a call that came in while you were unavailable and you did not answer. You can see it in your call log.'
      },
      {
        id: 'ph-q17',
        type: 'multiple-choice',
        prompt: 'You hear: "I\'m afraid he\'s not available right now." What does "I\'m afraid" mean here?',
        options: [
          'The speaker is frightened.',
          'The speaker is not sure.',
          'The speaker is delivering bad news politely.',
          'The speaker is angry.'
        ],
        correctIndex: 2,
        explanation: '"I\'m afraid" in this context is a polite softener for bad news. It does not mean the speaker is scared — it means "I\'m sorry to say that..."'
      },
      {
        id: 'ph-q18',
        type: 'fill-in-blank',
        prompt: 'You want to ask if the person is free to talk: "Is this a good ___ to talk?"',
        answer: 'time',
        acceptedVariants: ['time', 'moment'],
        explanation: '"Is this a good time to talk?" is a considerate way to start a call — it checks that the other person is not busy before you continue.'
      },
      {
        id: 'ph-q19',
        type: 'multiple-choice',
        prompt: 'Which phrase means the SAME as "I\'ll connect you to the sales team"?',
        options: [
          "I'll hold you for the sales team.",
          "I'll put you through to the sales team.",
          "I'll transfer your voicemail to the sales team.",
          "I'll dial the sales team for you."
        ],
        correctIndex: 1,
        explanation: '"Put you through to [department/person]" is the standard British English phrase for transferring a call. "Transfer you to" is also widely used.'
      },
      {
        id: 'ph-q20',
        type: 'fill-in-blank',
        prompt: 'You call about an order problem: "I\'m calling ___ my order — number TH-4892."',
        answer: 'about',
        acceptedVariants: ['about', 'regarding', 'concerning'],
        explanation: '"I\'m calling about..." is the natural way to state the reason for your call. "Regarding" and "concerning" are also correct but more formal.'
      },
      {
        id: 'ph-q21',
        type: 'sentence-scramble',
        prompt: 'เรียงคำให้เป็นประโยคโทรศัพท์ที่ถูกต้อง:',
        words: ['Could', 'I', 'speak', 'to', 'Mr.', 'Smith', '?'],
        explanation: '"Could I speak to ___?" เป็นวิธีสุภาพในการขอต่อสายที่ถูกต้องที่สุด — ใช้ "Could" ไม่ใช่ "Can" ในสถานการณ์ formal'
      },
      {
        id: 'ph-q22',
        type: 'word-matching',
        prompt: 'จับคู่วลีโทรศัพท์กับความหมาย:',
        pairs: [
          { word: 'Hold on', match: 'รอสักครู่' },
          { word: 'Put through', match: 'โอนสาย' },
          { word: 'Leave a message', match: 'ฝากข้อความ' },
          { word: 'Call back', match: 'โทรกลับ' }
        ],
        explanation: 'วลีเหล่านี้ใช้บ่อยมากในการโทรศัพท์เป็นภาษาอังกฤษ — จำไว้ว่า "put through" หมายถึงการโอนสายไปให้อีกคน'
      }
    ]
  },
  {
    id: 'b1-doctor-quiz',
    lessonId: 'b1-doctor-01',
    title: 'At the Doctor Check',
    questions: [
      {
        id: 'dr-q1',
        type: 'multiple-choice',
        prompt: 'Which sentence is correct?',
        options: [
          'I have fever since two days.',
          'I have a fever for two days.',
          "I've had a fever for two days.",
          'I am having fever two days.'
        ],
        correctIndex: 2,
        explanation: 'Use Present Perfect ("I\'ve had") for something that started in the past and continues now. "A fever" needs the article "a". "For two days" gives the duration.'
      },
      {
        id: 'dr-q2',
        type: 'fill-in-blank',
        prompt: 'You feel sick to your stomach. Tell the doctor: "I feel ___."',
        answer: 'nauseous',
        acceptedVariants: ['nauseous', 'nauseous / sick', 'sick', 'nauseated'],
        explanation: '"I feel nauseous" or "I feel sick" both describe the sensation of wanting to vomit. "Nauseous" is the medical term the doctor will use.'
      },
      {
        id: 'dr-q3',
        type: 'multiple-choice',
        prompt: 'The doctor says "Take one tablet twice a day with food." When should you take it?',
        options: [
          'Once every day, before meals.',
          'Two tablets once a day, with food.',
          'One tablet two times per day, with food.',
          'Two tablets twice a day.'
        ],
        correctIndex: 2,
        explanation: '"Twice a day" = two times per day. "With food" means take it while eating or just after, not on an empty stomach.'
      },
      {
        id: 'dr-q4',
        type: 'multiple-choice',
        prompt: 'You want to book an appointment. Which phrase is correct?',
        options: [
          "I'd like to make an appointment to see Dr. Kim.",
          'I want appointment with Dr. Kim.',
          'Book me with Dr. Kim.',
          'Can I have a meeting with the doctor?'
        ],
        correctIndex: 0,
        explanation: '"I\'d like to make an appointment to see [doctor\'s name]" is the standard, polite way to book a medical appointment.'
      },
      {
        id: 'dr-q5',
        type: 'fill-in-blank',
        prompt: 'You are allergic to penicillin. Tell the doctor: "I have an ___ to penicillin."',
        answer: 'allergy',
        acceptedVariants: ['allergy', 'allergic reaction'],
        explanation: '"I have an allergy to [substance]" or "I\'m allergic to [substance]" are both correct. Always inform medical staff of allergies before treatment.'
      },
      {
        id: 'dr-q6',
        type: 'multiple-choice',
        prompt: 'The doctor says "Finish the full course of antibiotics." What does this mean?',
        options: [
          'Stop taking the medicine when you feel better.',
          'Take all the antibiotics prescribed, even after symptoms improve.',
          'Take double the dosage to recover faster.',
          'Only take the medicine when you feel sick.'
        ],
        correctIndex: 1,
        explanation: 'Always finish the full course of antibiotics even if you feel better. Stopping early can cause the infection to return and create antibiotic resistance.'
      },
      {
        id: 'dr-q7',
        type: 'fill-in-blank',
        prompt: 'Your arm is swollen and red. Tell the doctor: "My arm is ___ and there\'s some redness."',
        answer: 'swollen',
        acceptedVariants: ['swollen', 'swollen and inflamed', 'inflamed'],
        explanation: '"Swollen" means enlarged due to fluid or injury. "Inflamed" is also medically accurate. Both are correct for describing this symptom.'
      },
      {
        id: 'dr-q8',
        type: 'multiple-choice',
        prompt: 'Which is the correct way to describe when your pain started?',
        options: [
          'Pain is starting yesterday.',
          'My pain was started since morning.',
          'The pain started this morning.',
          'I start pain in morning.'
        ],
        correctIndex: 2,
        explanation: '"The pain started this morning" uses simple past correctly for a specific start time. This is the natural, grammatically correct form.'
      },
      {
        id: 'dr-q9',
        type: 'multiple-choice',
        prompt: 'The doctor says "I\'ll refer you to a specialist." What will happen next?',
        options: [
          'The doctor will treat you immediately.',
          'You will be sent to see a different, more specialised doctor.',
          'You need to go to the emergency room now.',
          'Your prescription will be ready at the pharmacy.'
        ],
        correctIndex: 1,
        explanation: 'A "referral" means your GP (general practitioner) is sending you to a specialist doctor with more expertise in a specific area, like a cardiologist or dermatologist.'
      },
      {
        id: 'dr-q10',
        type: 'fill-in-blank',
        prompt: 'The doctor asks how bad your pain is: "On a scale of one to ten, how would you ___ the pain?"',
        answer: 'rate',
        acceptedVariants: ['rate', 'describe', 'score'],
        explanation: '"Rate the pain on a scale of 1–10" is the standard medical question for assessing pain severity. 1 = barely noticeable; 10 = unbearable.'
      },
      {
        id: 'dr-q11',
        type: 'multiple-choice',
        prompt: '"I have a chronic condition." What does "chronic" mean?',
        options: [
          'A condition that is very painful.',
          'A condition that appeared suddenly.',
          'A condition that has lasted a long time and is ongoing.',
          'A condition that is contagious.'
        ],
        correctIndex: 2,
        explanation: '"Chronic" describes a condition that persists for a long time (usually more than 3 months). The opposite is "acute," which means sudden and short-term.'
      },
      {
        id: 'dr-q12',
        type: 'multiple-choice',
        prompt: 'You want to know if your illness can spread to others. What do you ask?',
        options: [
          'Is this illness dangerous?',
          'Is this contagious?',
          'Can I go to work?',
          'Is this chronic?'
        ],
        correctIndex: 1,
        explanation: '"Contagious" means the illness can spread from one person to another through contact. Asking "Is this contagious?" tells you whether to avoid close contact with others.'
      },
      {
        id: 'dr-q13',
        type: 'fill-in-blank',
        prompt: 'The doctor gives you medicine instructions: "Take this ___ meals — not on an empty stomach."',
        answer: 'with',
        acceptedVariants: ['with', 'after', 'during'],
        explanation: '"Take with meals" means take the medicine while eating or just after. This protects your stomach from irritation caused by the medication.'
      },
      {
        id: 'dr-q14',
        type: 'multiple-choice',
        prompt: 'Which phrase correctly uses "symptom"?',
        options: [
          'My symptom is very pain.',
          'I have a symptom of fever and cough.',
          'The symptoms include fever, cough, and fatigue.',
          'Symptom of me is headache.'
        ],
        correctIndex: 2,
        explanation: '"The symptoms include..." is the natural way to list multiple symptoms. Use "symptom" (singular) for one, "symptoms" (plural) for more than one.'
      },
      {
        id: 'dr-q15',
        type: 'multiple-choice',
        prompt: 'You see the doctor for a routine health check (no specific illness). This is called:',
        options: [
          'A diagnosis.',
          'A checkup.',
          'A prescription.',
          'A referral.'
        ],
        correctIndex: 1,
        explanation: 'A "checkup" (also "check-up") is a routine medical examination when you are not ill. It is preventive — the doctor checks that everything is healthy.'
      },
      {
        id: 'dr-q16',
        type: 'fill-in-blank',
        prompt: 'You want to ask if you need to return: "Should I come ___ if I don\'t feel better?"',
        answer: 'back',
        acceptedVariants: ['back', 'back in', 'in again'],
        explanation: '"Come back" means return to the clinic or doctor\'s office. "Should I come back?" is the standard way to ask about a follow-up visit.'
      },
      {
        id: 'dr-q17',
        type: 'multiple-choice',
        prompt: 'The doctor says "Avoid alcohol while taking this medication." What does "avoid" mean?',
        options: [
          'Limit your alcohol intake.',
          'Do not drink alcohol at all while on this medication.',
          'Only drink alcohol with meals.',
          'Ask the pharmacist about alcohol.'
        ],
        correctIndex: 1,
        explanation: '"Avoid" means do not do it at all. This is stronger than "limit." When a doctor says avoid, they mean completely abstain.'
      },
      {
        id: 'dr-q18',
        type: 'fill-in-blank',
        prompt: 'Describe your pain location: "I have a pain ___ my lower back."',
        answer: 'in',
        acceptedVariants: ['in', 'in my'],
        explanation: '"A pain in [body part]" is the correct structure. "I have a pain in my lower back / chest / shoulder" — always use "in" for pain location inside or within the body.'
      },
      {
        id: 'dr-q19',
        type: 'multiple-choice',
        prompt: 'What is the correct article with these illnesses? Choose the correct sentence.',
        options: [
          'I have cold and fever.',
          "I've got a cold and a fever.",
          'I got cold with fever.',
          'I have the cold and the fever.'
        ],
        correctIndex: 1,
        explanation: 'Most common illnesses use the indefinite article "a": a cold, a fever, a cough, a headache, a sore throat. "I\'ve got" is natural British English for "I have".'
      },
      {
        id: 'dr-q20',
        type: 'fill-in-blank',
        prompt: 'The doctor asks about your medication history: "Are you currently taking any ___?"',
        answer: 'medication',
        acceptedVariants: ['medication', 'medications', 'medicine', 'medicines', 'drugs'],
        explanation: '"Are you currently taking any medication?" is a standard question at every doctor visit. Always disclose all current medicines, supplements, and vitamins.'
      }
    ]
  },
  {
    id: 'b1-plans-quiz',
    lessonId: 'b1-plans-01',
    title: 'Making Plans & Invitations Check',
    questions: [
      {
        id: 'pl-q1',
        type: 'multiple-choice',
        prompt: 'You want to invite a colleague to lunch. Which is the most natural invitation?',
        options: [
          'Come to lunch with me.',
          'Would you like to grab lunch together today?',
          'You must come to lunch.',
          'Let us eat lunch.'
        ],
        correctIndex: 1,
        explanation: '"Would you like to...?" is polite and natural for invitations. It gives the person a real choice and sounds friendly, not demanding.'
      },
      {
        id: 'pl-q2',
        type: 'fill-in-blank',
        prompt: 'You want to decline but stay friendly: "I\'d love to, ___ I already have plans."',
        answer: 'but',
        acceptedVariants: ['but', 'however', 'though', 'unfortunately'],
        explanation: '"I\'d love to, but..." is the classic polite decline. You start with a positive ("I\'d love to"), then give the reason. Never just say "No" without a softener.'
      },
      {
        id: 'pl-q3',
        type: 'multiple-choice',
        prompt: '"Can I take a raincheck?" What does this phrase mean?',
        options: [
          'Can I bring an umbrella?',
          'Can we do this another time?',
          'Can I pay later?',
          'Can I cancel permanently?'
        ],
        correctIndex: 1,
        explanation: '"Take a raincheck" means you want to accept the invitation but at a later time. It is friendly — you are saying "I want to come, just not right now."'
      },
      {
        id: 'pl-q4',
        type: 'multiple-choice',
        prompt: 'You want to know if Friday is still happening. What do you say?',
        options: [
          '"Did we have plans on Friday?"',
          '"We are going Friday?"',
          '"Just confirming — we\'re still on for Friday, right?"',
          '"Tell me about Friday."'
        ],
        correctIndex: 2,
        explanation: '"We\'re still on for [day/event]" is a natural phrase to confirm plans. "Just confirming" softens the question and shows you are being considerate, not pushy.'
      },
      {
        id: 'pl-q5',
        type: 'fill-in-blank',
        prompt: 'You need to change the time of a meeting: "Something came up — could we ___?"',
        answer: 'reschedule',
        acceptedVariants: ['reschedule', 'change the time', 'move it', 'postpone', 'push it back'],
        explanation: '"Reschedule" means to arrange a new time. "Postpone" and "push it back" are also natural. Always apologise first: "I\'m so sorry — something came up."'
      },
      {
        id: 'pl-q6',
        type: 'multiple-choice',
        prompt: 'Your friend invites you somewhere and you are very happy to go. Which reply sounds the most enthusiastic?',
        options: [
          '"Okay."',
          '"Yes I will come."',
          '"Count me in — I wouldn\'t miss it!"',
          '"That is acceptable."'
        ],
        correctIndex: 2,
        explanation: '"Count me in" means yes definitely. Adding "I wouldn\'t miss it" shows excitement. Flat responses like "okay" or "yes I will come" sound unenthusiastic in English.'
      },
      {
        id: 'pl-q7',
        type: 'multiple-choice',
        prompt: '"I have a commitment I can\'t get out of." What does this mean?',
        options: [
          'I have made a promise or arrangement I must keep.',
          'I have a new job.',
          'I am not interested in your invitation.',
          'I am already at the venue.'
        ],
        correctIndex: 0,
        explanation: 'A "commitment" is a previous arrangement or obligation you must honour. "Can\'t get out of" means you cannot cancel it. This is a polite way to decline without giving too much detail.'
      },
      {
        id: 'pl-q8',
        type: 'fill-in-blank',
        prompt: 'You need to cancel at the last minute: "I ___ to cancel so late — I\'m really sorry."',
        answer: 'hate',
        acceptedVariants: ['hate', 'feel terrible', 'am so sorry'],
        explanation: '"I hate to cancel so late" expresses genuine regret. Always acknowledge the inconvenience when cancelling at short notice — it shows you value the other person\'s time.'
      },
      {
        id: 'pl-q9',
        type: 'multiple-choice',
        prompt: 'Someone invites you but you are not 100% sure yet. Which reply is best?',
        options: [
          '"No."',
          '"I\'m not coming."',
          '"I\'d love to come — I\'m not certain yet, but could I confirm by Thursday?"',
          '"Maybe if I feel like it."'
        ],
        correctIndex: 2,
        explanation: 'When unsure, ask for time to confirm with a specific deadline. "Could I confirm by [day]?" is polite and gives the host a clear answer date.'
      },
      {
        id: 'pl-q10',
        type: 'fill-in-blank',
        prompt: 'The event location is called the ___.',
        answer: 'venue',
        acceptedVariants: ['venue', 'location', 'place'],
        explanation: '"Venue" is the formal word for the location of an event. "What\'s the venue?" is a natural question when accepting an invitation.'
      },
      {
        id: 'pl-q11',
        type: 'multiple-choice',
        prompt: 'Which is the most polite way to suggest a different time?',
        options: [
          '"Change to Saturday."',
          '"I prefer another day."',
          '"Would it be possible to try Saturday instead?"',
          '"Not Friday. Saturday."'
        ],
        correctIndex: 2,
        explanation: '"Would it be possible to...?" is a very polite suggestion. It gives the other person the option to say no without feeling forced.'
      },
      {
        id: 'pl-q12',
        type: 'multiple-choice',
        prompt: 'What does "Are you free on Saturday?" mean?',
        options: [
          'Is there no entry fee on Saturday?',
          'Do you have no plans / are you available on Saturday?',
          'Do you enjoy being outdoors on Saturday?',
          'Is Saturday a public holiday?'
        ],
        correctIndex: 1,
        explanation: '"Are you free?" means "Do you have no plans / are you available?" It is the most common way to check someone\'s availability before making an invitation.'
      },
      {
        id: 'pl-q13',
        type: 'fill-in-blank',
        prompt: 'You want to move the event to a later date: "Could we ___ it to next weekend?"',
        answer: 'postpone',
        acceptedVariants: ['postpone', 'push', 'move', 'push back', 'delay', 'reschedule'],
        explanation: '"Postpone" means to delay something to a later time. "Push it back" and "move it" are equally natural in conversation.'
      },
      {
        id: 'pl-q14',
        type: 'multiple-choice',
        prompt: '"I was wondering if you\'d like to come." This phrase is:',
        options: [
          'Too direct for an invitation.',
          'A rude way to invite someone.',
          'A polite and slightly tentative way to invite someone.',
          'Only used in formal business contexts.'
        ],
        correctIndex: 2,
        explanation: '"I was wondering if..." softens an invitation and makes it easy for the other person to say no without awkwardness. It is natural and warm, not formal.'
      },
      {
        id: 'pl-q15',
        type: 'fill-in-blank',
        prompt: 'To formally confirm attendance at an event, you ___ to the invitation.',
        answer: 'RSVP',
        acceptedVariants: ['RSVP', 'rsvp', 'respond', 'reply'],
        explanation: 'RSVP comes from the French "Répondez s\'il vous plaît" and means "please reply." When an invitation says "RSVP by [date]," you must respond to confirm or decline.'
      },
      {
        id: 'pl-q16',
        type: 'multiple-choice',
        prompt: 'A friend cancels at the last minute. Which response is most gracious?',
        options: [
          '"Why didn\'t you tell me earlier? I am angry."',
          '"No worries at all — let\'s find another time soon!"',
          '"You always cancel on me."',
          '"Fine."'
        ],
        correctIndex: 1,
        explanation: '"No worries at all" dismisses the inconvenience graciously. Suggesting another time shows you still want to meet. This response maintains the friendship.'
      },
      {
        id: 'pl-q17',
        type: 'multiple-choice',
        prompt: 'What is a "tentative" plan?',
        options: [
          'A plan that has been confirmed and cannot change.',
          'A plan that is cancelled.',
          'A plan that is possible but not yet confirmed.',
          'A plan made for someone else.'
        ],
        correctIndex: 2,
        explanation: '"Tentative" means not definite — the plan might change. "I\'m tentatively free on Saturday" = I think I\'m free but I\'m not sure yet.'
      },
      {
        id: 'pl-q18',
        type: 'fill-in-blank',
        prompt: 'You suggest going to the movies: "We\'re ___ of going to the cinema — want to join?"',
        answer: 'thinking',
        acceptedVariants: ['thinking', 'thinking of', 'planning'],
        explanation: '"We\'re thinking of + -ing" is a natural way to share a tentative plan while making an invitation. It is casual and non-pressuring.'
      },
      {
        id: 'pl-q19',
        type: 'multiple-choice',
        prompt: '"That\'s such a shame!" in the context of declining an invitation means:',
        options: [
          'The person is embarrassed.',
          'The person is expressing regret that they cannot come.',
          'The person thinks the event is a bad idea.',
          'The person is angry about the invitation.'
        ],
        correctIndex: 1,
        explanation: '"What a shame!" or "That\'s such a shame" expresses regret. In a decline, it means "I\'m genuinely sorry I can\'t come." It softens the refusal.'
      },
      {
        id: 'pl-q20',
        type: 'fill-in-blank',
        prompt: 'You want to make a spontaneous plan right now: "Are you doing anything ___?"',
        answer: 'tonight',
        acceptedVariants: ['tonight', 'later', 'this evening', 'now'],
        explanation: 'Spontaneous invitations use present time words: "Are you doing anything tonight / later / this evening?" to check if someone is available right now.'
      }
    ]
  },
  {
    id: 'b1-travel-quiz',
    lessonId: 'b1-travel-01',
    title: 'Travel English Check',
    questions: [
      {
        id: 'tv-q1',
        type: 'multiple-choice',
        prompt: 'At check-in, the agent says "Your baggage is over the limit." What does this mean?',
        options: [
          'Your bag is too heavy and you may need to pay extra.',
          'Your bag is in the wrong lane.',
          'Your passport is expired.',
          'Your flight has been cancelled.'
        ],
        correctIndex: 0,
        explanation: '"Over the limit" means your baggage exceeds the maximum allowed weight. You will likely have to pay an excess baggage fee or remove items from your bag.'
      },
      {
        id: 'tv-q2',
        type: 'fill-in-blank',
        prompt: 'At check-in: "I\'d like to check ___ for flight TG921."',
        answer: 'in',
        acceptedVariants: ['in'],
        explanation: '"Check in" is the phrasal verb for the process of registering for your flight and dropping off your luggage at the airport desk.'
      },
      {
        id: 'tv-q3',
        type: 'multiple-choice',
        prompt: 'Your connecting flight is at 11 p.m. What is a "connecting flight"?',
        options: [
          'A direct flight with no stops.',
          'A flight you board after your first flight, to reach your final destination.',
          'A flight that connects two countries by sea.',
          'A flight paid for by a connecting company.'
        ],
        correctIndex: 1,
        explanation: 'A "connecting flight" is the second (or third) flight in a journey. You land at a hub airport, then board a new plane to your final destination.'
      },
      {
        id: 'tv-q4',
        type: 'multiple-choice',
        prompt: 'At the airport, where do you go through passport control when entering a new country?',
        options: [
          'Customs',
          'Security',
          'Immigration',
          'The departure gate'
        ],
        correctIndex: 2,
        explanation: '"Immigration" (also called passport control) is where an officer checks your passport and visa when you enter a country. "Customs" is where goods are checked.'
      },
      {
        id: 'tv-q5',
        type: 'fill-in-blank',
        prompt: 'Your luggage did not arrive. Tell staff: "My ___ hasn\'t arrived — this is my claim tag."',
        answer: 'baggage',
        acceptedVariants: ['baggage', 'luggage', 'bag', 'suitcase'],
        explanation: '"My baggage / luggage hasn\'t arrived" is how you report lost baggage. Staff will ask for your baggage claim tag (the sticker put on your bag at check-in).'
      },
      {
        id: 'tv-q6',
        type: 'multiple-choice',
        prompt: 'The pilot announces there will be "turbulence." What should you do?',
        options: [
          'Get off the plane immediately.',
          'Fasten your seatbelt and stay seated.',
          'Move to the back of the plane.',
          'Open the emergency exit.'
        ],
        correctIndex: 1,
        explanation: '"Turbulence" is rough, bumpy air movement that shakes the plane. When turbulence is announced, fasten your seatbelt and return to your seat.'
      },
      {
        id: 'tv-q7',
        type: 'fill-in-blank',
        prompt: 'Your flight is delayed. Ask staff: "When will the flight ___?"',
        answer: 'depart',
        acceptedVariants: ['depart', 'leave', 'take off'],
        explanation: '"Depart" is the formal word for a plane (or train) leaving. "Take off" is more casual for planes. Both are correct when asking about departure time.'
      },
      {
        id: 'tv-q8',
        type: 'multiple-choice',
        prompt: 'You have a 4-hour stop in Singapore before your next flight. This is called a:',
        options: [
          'Delay',
          'Stopover / layover',
          'Transit visa',
          'Boarding pass'
        ],
        correctIndex: 1,
        explanation: 'A "layover" (American English) or "stopover" (British English) is a planned wait at an intermediate airport between two flights. A short layover is usually under 24 hours.'
      },
      {
        id: 'tv-q9',
        type: 'fill-in-blank',
        prompt: 'At immigration, the officer asks: "What is the ___ of your visit?" You answer: "Tourism."',
        answer: 'purpose',
        acceptedVariants: ['purpose', 'reason'],
        explanation: '"What is the purpose of your visit?" is the standard immigration question. Common answers are "tourism," "business," or "visiting family."'
      },
      {
        id: 'tv-q10',
        type: 'multiple-choice',
        prompt: 'Which sentence correctly asks for a specific seat on a plane?',
        options: [
          '"I want window."',
          '"Give me seat by window."',
          '"Window seat, please — if there\'s one available."',
          '"I am requiring window seat."'
        ],
        correctIndex: 2,
        explanation: '"Window seat, please — if there\'s one available" is polite and realistic. Adding "if there\'s one available" shows flexibility, which staff appreciate.'
      },
      {
        id: 'tv-q11',
        type: 'multiple-choice',
        prompt: 'The announcement says "We are now boarding passengers in rows 30 to 50." You are in row 42. What do you do?',
        options: [
          'Wait — it is not your turn yet.',
          'Go to the gate now — it is your turn.',
          'Go to check-in first.',
          'Go through security now.'
        ],
        correctIndex: 1,
        explanation: 'Row 42 falls within the range "rows 30 to 50," so it is your turn to board. Move to the gate and have your boarding pass and passport ready.'
      },
      {
        id: 'tv-q12',
        type: 'fill-in-blank',
        prompt: 'You arrive at the hotel: "I have a ___ under the name Ploy Srisuk."',
        answer: 'reservation',
        acceptedVariants: ['reservation', 'booking'],
        explanation: '"I have a reservation / booking under the name [name]" is the standard hotel check-in phrase. Both "reservation" and "booking" are correct.'
      },
      {
        id: 'tv-q13',
        type: 'multiple-choice',
        prompt: 'You notice an error on your hotel bill. What do you say?',
        options: [
          '"Your bill is wrong. Fix it."',
          '"I think there\'s been a mistake with my bill — could you check it?"',
          '"Give me a new bill."',
          '"This bill is unacceptable."'
        ],
        correctIndex: 1,
        explanation: '"I think there\'s been a mistake" is polite — it frames the error as a possible misunderstanding, not an accusation. Always raise billing issues calmly and clearly.'
      },
      {
        id: 'tv-q14',
        type: 'fill-in-blank',
        prompt: 'You missed your connecting flight. Tell staff: "I\'ve ___ my connecting flight."',
        answer: 'missed',
        acceptedVariants: ['missed'],
        explanation: '"I\'ve missed my connecting flight" uses Present Perfect because it just happened and has a present consequence (you are now stranded). Past simple "I missed" is also acceptable.'
      },
      {
        id: 'tv-q15',
        type: 'multiple-choice',
        prompt: 'At customs, an officer asks "Do you have anything to declare?" You are carrying a gift worth £200. What should you do?',
        options: [
          'Say "no" — gifts do not need to be declared.',
          'Declare the gift and its approximate value.',
          'Hide the gift in your bag.',
          'Say you do not understand English.'
        ],
        correctIndex: 1,
        explanation: 'Always declare items above the duty-free threshold. Customs thresholds vary by country — when in doubt, declare it. Failing to declare can result in fines.'
      },
      {
        id: 'tv-q16',
        type: 'multiple-choice',
        prompt: 'What is your "boarding pass"?',
        options: [
          'Your passport.',
          'The document that allows you to board the plane, showing your flight and seat.',
          'Your visa.',
          'Your travel insurance card.'
        ],
        correctIndex: 1,
        explanation: 'A boarding pass is the document (or phone screen) that gives you permission to board a specific flight. It shows the flight number, gate, seat, and boarding time.'
      },
      {
        id: 'tv-q17',
        type: 'fill-in-blank',
        prompt: 'You want to keep your luggage at the hotel after checkout: "Could I ___ my luggage until 3 p.m.?"',
        answer: 'store',
        acceptedVariants: ['store', 'leave', 'keep', 'leave my luggage'],
        explanation: '"Could I store / leave my luggage?" is the polite request for luggage storage. Most hotels offer this service on the day of checkout as a courtesy.'
      },
      {
        id: 'tv-q18',
        type: 'multiple-choice',
        prompt: 'The airline offers you a "meal voucher" due to the delay. What is this?',
        options: [
          'A free upgrade to business class.',
          'A coupon that pays for a meal at the airport.',
          'A refund for your ticket.',
          'A hotel room for the night.'
        ],
        correctIndex: 1,
        explanation: 'A "meal voucher" is a coupon that covers the cost of food at designated airport restaurants. Airlines are often required to provide these for significant delays.'
      },
      {
        id: 'tv-q19',
        type: 'fill-in-blank',
        prompt: 'At security, the officer says: "Please ___ your shoes and belt."',
        answer: 'remove',
        acceptedVariants: ['remove', 'take off'],
        explanation: '"Remove" is the formal instruction. "Take off" is the casual equivalent. Both mean to take the items off your body and place them in the security tray.'
      },
      {
        id: 'tv-q20',
        type: 'multiple-choice',
        prompt: 'You want to report lost luggage formally. What do you say?',
        options: [
          '"My bag is gone. Help."',
          '"I\'d like to file a lost luggage report."',
          '"Find my bag please."',
          '"I cannot find luggage."'
        ],
        correctIndex: 1,
        explanation: '"I\'d like to file a lost luggage report" is the correct phrase. "File a report" means to formally document the problem so the airline can track and return your bag.'
      }
    ]
  },
  {
    id: 'b2-polite-quiz',
    lessonId: 'b2-polite-requests-01',
    title: 'Polite Requests Check',
    questions: [
      {
        id: 'pr-q1',
        type: 'multiple-choice',
        prompt: 'You need to ask your boss for a day off. Which is the most appropriate request?',
        options: [
          'Give me Thursday off.',
          'Can I have Thursday off?',
          'I was wondering if I could possibly take Thursday off.',
          'Thursday is mine.'
        ],
        correctIndex: 2,
        explanation: '"I was wondering if I could possibly take Thursday off" is the most polite and appropriate for asking a superior. It\'s indirect and tentative, which signals respect.'
      },
      {
        id: 'pr-q2',
        type: 'fill-in-blank',
        prompt: 'Complete this polite request: "___ you mind sending me the file?',
        answer: 'Would',
        acceptedVariants: ['Would', 'would'],
        explanation: '"Would you mind + -ing" is a very polite way to make a request. "Do you mind" is also possible but slightly less formal.'
      },
      {
        id: 'pr-q3',
        type: 'multiple-choice',
        prompt: '"I\'d appreciate it if you could review this" — what does this sentence mean?',
        options: [
          'I demand that you review this.',
          'I would be grateful if you reviewed this.',
          'You should review this now.',
          'I think you should review this.'
        ],
        correctIndex: 1,
        explanation: '"I\'d appreciate it if..." expresses gratitude in advance and makes a polite, indirect request. It\'s equivalent to "I would be grateful if..."'
      },
      {
        id: 'pr-q4',
        type: 'multiple-choice',
        prompt: 'Which phrase is most direct (least polite)?',
        options: [
          'I was wondering if you could help me.',
          'Would it be possible to get some help?',
          'Help me.',
          'Could you help me when you have a moment?'
        ],
        correctIndex: 2,
        explanation: '"Help me." is a direct command — the least polite option. In professional settings, always add softening language.'
      }
    ]
  },

  {
    id: 'b2-interview-quiz',
    lessonId: 'b2-job-interview-01',
    title: 'Job Interview English Check',
    questions: [
      {
        id: 'ji-q1',
        type: 'multiple-choice',
        prompt: 'An interviewer asks: "Tell me about yourself." Which opening is most effective for a job interview?',
        options: [
          '"My name is Ploy and I am a hard-working person."',
          '"I am currently a data analyst at a fintech firm, with four years of experience in customer behaviour analytics."',
          '"I was born in Chiang Mai and studied at university and I like data very much."',
          '"I would like to tell you about myself. I think I am a good candidate."'
        ],
        correctIndex: 1,
        explanation: 'Start with your current role and relevant expertise. Avoid generic statements like "hard-working" — show, don\'t tell. Personal background (birthplace) is not relevant unless asked.'
      },
      {
        id: 'ji-q2',
        type: 'multiple-choice',
        prompt: 'What does the "R" in the STAR method stand for?',
        options: ['Responsibility', 'Reason', 'Result', 'Response'],
        correctIndex: 2,
        explanation: 'STAR = Situation, Task, Action, Result. The "Result" is crucial — quantify it when possible (e.g., "increased sales by 20%").'
      },
      {
        id: 'ji-q3',
        type: 'fill-in-blank',
        prompt: 'Complete this answer about a weakness: "One area I am actively working on is public speaking. I have ________ a presentation skills course to address this."',
        answer: 'been taking',
        acceptedVariants: ['been taking', 'enrolled in', 'started taking', 'been attending'],
        explanation: 'Always pair a weakness with concrete action you are taking to improve it. "I have been taking..." shows ongoing effort and self-awareness.'
      },
      {
        id: 'ji-q4',
        type: 'multiple-choice',
        prompt: 'You are asked: "What is your greatest weakness?" Which answer is best?',
        options: [
          '"I work too hard and I care too much about my job."',
          '"I am sometimes too perfectionist."',
          '"I used to struggle with delegating tasks. I have been working on this by assigning clear responsibilities and following up with structured check-ins."',
          '"I do not really have any weaknesses."'
        ],
        correctIndex: 2,
        explanation: '"I work too hard" is a cliché that interviewers dislike. "Too perfectionist" is vague. Option C names a real weakness and demonstrates active improvement with specific action.'
      },
      {
        id: 'ji-q5',
        type: 'multiple-choice',
        prompt: '"I secured a ________ for the Marketing Manager position at two companies." Fill in the correct word.',
        options: ['shortlist', 'headhunter', 'KPI', 'onboarding'],
        correctIndex: 0,
        explanation: '"Shortlist" means you were selected as a final candidate. To be "shortlisted" means the company has narrowed down their candidates to a short list and you are on it.'
      },
      {
        id: 'ji-q6',
        type: 'multiple-choice',
        prompt: 'An interviewer asks: "Where do you see yourself in five years?" Which is the strongest response?',
        options: [
          '"I see myself in your position."',
          '"I am not sure — it depends on many things."',
          '"In five years, I hope to have grown into a senior strategic role, ideally leading a regional team and contributing to high-level product decisions."',
          '"I want to still be working here and doing the same job."'
        ],
        correctIndex: 2,
        explanation: 'Option C shows ambition, a growth mindset, and alignment with the role. Option A (wanting the interviewer\'s job) sounds arrogant. Option B shows no direction. Option D shows no ambition.'
      },
      {
        id: 'ji-q7',
        type: 'fill-in-blank',
        prompt: '"Based on my research and experience, I am looking for something in the ________ of 60,000 to 70,000 baht per month." (salary negotiation)',
        answer: 'range',
        acceptedVariants: ['range', 'region', 'bracket'],
        explanation: 'Giving a salary "range" is the professional way to negotiate. It shows you have done research while giving the employer flexibility.'
      },
      {
        id: 'ji-q8',
        type: 'multiple-choice',
        prompt: 'Why should you avoid saying "We" too much in STAR answers?',
        options: [
          'It sounds arrogant.',
          'It is grammatically incorrect in formal English.',
          'The interviewer wants to understand your specific contribution, not the team\'s.',
          'It makes the answer too long.'
        ],
        correctIndex: 2,
        explanation: 'STAR answers need to highlight what "I" specifically did. Saying "we did everything together" does not demonstrate your individual competency or value.'
      },
      {
        id: 'ji-q9',
        type: 'multiple-choice',
        prompt: '"The recruiter told me I had made the ________ and would be invited for a second interview." Which word completes this?',
        options: ['track record', 'shortlist', 'KPI', 'leverage'],
        correctIndex: 1,
        explanation: '"Shortlist" = the final list of candidates still in consideration. "Track record" = history of past achievements. "KPI" = Key Performance Indicator (a measurable goal).'
      },
      {
        id: 'ji-q10',
        type: 'multiple-choice',
        prompt: 'You are at the end of an interview. The interviewer says: "Do you have any questions for us?" Which question is BEST?',
        options: [
          '"How many days of annual leave will I get?"',
          '"What does success look like in this role in the first 90 days?"',
          '"Do I get a company car?"',
          '"I have no questions, everything was very clear."'
        ],
        correctIndex: 1,
        explanation: 'Questions about success criteria show you are already thinking about performance. Questions about benefits at this stage can seem premature. Having no questions can signal low interest.'
      },
      {
        id: 'ji-q11',
        type: 'fill-in-blank',
        prompt: '"She has a strong ________ ________ of delivering projects on time and within budget." (2 words, means history of past achievements)',
        answer: 'track record',
        acceptedVariants: ['track record'],
        explanation: '"Track record" = a history of achievements or failures over time. Common in job interviews: "I have a strong track record in sales leadership."'
      },
      {
        id: 'ji-q12',
        type: 'multiple-choice',
        prompt: '"He used his network to ________ better contract terms for the company." Which word is correct?',
        options: ['accomplish', 'leverage', 'adapt', 'initiate'],
        correctIndex: 1,
        explanation: '"Leverage" as a verb means to use something (a resource, skill, or connection) to maximum advantage. "He leveraged his network" = he used his connections strategically.'
      },
      {
        id: 'ji-q13',
        type: 'multiple-choice',
        prompt: 'A ________ is a person or company that finds suitable candidates for job vacancies, typically for senior roles.',
        options: ['stakeholder', 'shortlist', 'headhunter', 'KPI'],
        correctIndex: 2,
        explanation: 'A "headhunter" (also called a recruiter or executive search consultant) proactively finds candidates for companies, often approaching them while they are not actively job-searching.'
      },
      {
        id: 'ji-q14',
        type: 'fill-in-blank',
        prompt: '"During ________, new employees are introduced to company systems, culture, and their team." (the process of integrating a new hire)',
        answer: 'onboarding',
        acceptedVariants: ['onboarding', 'the onboarding process'],
        explanation: '"Onboarding" is the process of integrating a new employee into the organisation. It usually includes orientation, training, and meeting the team.'
      },
      {
        id: 'ji-q15',
        type: 'multiple-choice',
        prompt: 'Which phrase best demonstrates "proactive" behaviour in an interview answer?',
        options: [
          '"I always wait for my manager to tell me what to do."',
          '"I noticed a gap in our reporting process and created a new dashboard before being asked."',
          '"I do my work when I am asked."',
          '"I am proactive — I work hard every day."'
        ],
        correctIndex: 1,
        explanation: '"Proactive" means taking action before being asked or before a problem becomes critical. Option B demonstrates this with a concrete example rather than just claiming the trait.'
      },
      {
        id: 'ji-q16',
        type: 'multiple-choice',
        prompt: 'The interviewer asks: "Why do you want to work at this company?" Which answer is weakest?',
        options: [
          '"Your company\'s expansion into sustainable logistics aligns with my career goals in green supply chain."',
          '"I admire your company\'s reputation for innovation and I have followed your work for two years."',
          '"Because you are a big company and the salary is good."',
          '"I believe my skills in data analysis match the challenges your operations team is facing."'
        ],
        correctIndex: 2,
        explanation: 'Mentioning only salary and company size shows no genuine interest in the company. Strong answers reference specific company values, projects, or challenges and link them to your skills or goals.'
      },
      {
        id: 'ji-q17',
        type: 'fill-in-blank',
        prompt: '"The main ________ for this role include customer acquisition rate, churn rate, and monthly active users." (measurable performance targets)',
        answer: 'KPIs',
        acceptedVariants: ['KPIs', 'KPI', 'key performance indicators'],
        explanation: 'KPI = Key Performance Indicator. Mentioning KPIs in an interview shows you understand how performance is measured in a business context.'
      },
      {
        id: 'ji-q18',
        type: 'multiple-choice',
        prompt: 'What is a "competency-based" interview question?',
        options: [
          'A question about your salary expectations',
          'A question that asks you to describe a specific past situation to demonstrate a skill',
          'A question about your educational background',
          'A question testing your technical knowledge'
        ],
        correctIndex: 1,
        explanation: 'Competency-based questions (also called behavioural questions) ask you to give real past examples: "Tell me about a time when..." They are answered using the STAR method.'
      },
      {
        id: 'ji-q19',
        type: 'multiple-choice',
        prompt: '"That\'s a great question — let me think about that for a moment." When should you use this phrase?',
        options: [
          'Only when you do not understand the question',
          'When you need a few seconds to formulate a strong, considered answer',
          'To avoid answering the question',
          'Only at the start of the interview'
        ],
        correctIndex: 1,
        explanation: 'This phrase is a professional way to pause and collect your thoughts. It signals that you are thoughtful, not that you are unprepared. It is especially useful for unexpected or complex questions.'
      },
      {
        id: 'ji-q20',
        type: 'multiple-choice',
        prompt: 'Which quality does "adaptable" describe?',
        options: [
          'Being very organised and structured',
          'Having a long history of success',
          'Being able to adjust effectively to new situations, roles, or challenges',
          'Always taking the initiative on new projects'
        ],
        correctIndex: 2,
        explanation: '"Adaptable" = able to change and adjust to new conditions. Interviewers value adaptability because workplaces change constantly. "Proactive" = takes initiative. "Track record" = history of success. "Organised" = structured.'
      }
    ]
  },

  {
    id: 'b2-meetings-quiz',
    lessonId: 'b2-meetings-01',
    title: 'Meetings & Presentations Check',
    questions: [
      {
        id: 'mt-q1',
        type: 'multiple-choice',
        prompt: 'In a meeting, "minutes" refers to:',
        options: [
          'The length of the meeting',
          'The written record of what was discussed and decided',
          'The agenda sent before the meeting',
          'The time allocated to each speaker'
        ],
        correctIndex: 1,
        explanation: '"Minutes" (meeting minutes) = the official written record of a meeting, including decisions made and action items assigned. Separate from the meeting agenda, which is planned before the meeting.'
      },
      {
        id: 'mt-q2',
        type: 'multiple-choice',
        prompt: 'Your colleague is speaking. You want to add a point politely. What do you say?',
        options: [
          '"Stop. I want to talk now."',
          '"Sorry to interrupt, but I wanted to add something here."',
          '"Can I speak now please?"',
          '"Wait — I have something more important."'
        ],
        correctIndex: 1,
        explanation: '"Sorry to interrupt, but..." is the standard professional way to interject. It acknowledges the interruption and softens it. Never tell someone to stop speaking.'
      },
      {
        id: 'mt-q3',
        type: 'fill-in-blank',
        prompt: '"Let\'s ________ the legal discussion for next week\'s meeting — we don\'t have time today." (postpone to a later meeting)',
        answer: 'defer',
        acceptedVariants: ['defer', 'table', 'move', 'push'],
        explanation: '"Defer" = postpone to a later time. "Let\'s defer that" is common in meetings to manage time. "Table" is also used (note: in British English "table" means bring forward; in American English it means postpone).'
      },
      {
        id: 'mt-q4',
        type: 'multiple-choice',
        prompt: '"I don\'t have the ________ to take on another project right now." Which word fits?',
        options: ['agenda', 'synergy', 'bandwidth', 'takeaway'],
        correctIndex: 2,
        explanation: '"Bandwidth" in business jargon = capacity or availability. "I don\'t have the bandwidth" = "I\'m too busy / I don\'t have the capacity." Technically it is a networking term repurposed as business slang.'
      },
      {
        id: 'mt-q5',
        type: 'multiple-choice',
        prompt: 'In signposting a presentation, which phrase best introduces a new section?',
        options: [
          '"Now I will talk about something different."',
          '"Moving on to our second point — the financial projections…"',
          '"OK next thing."',
          '"So… the next part is…"'
        ],
        correctIndex: 1,
        explanation: '"Moving on to our second point" is clear, professional signposting. It tells the audience exactly where you are in the presentation. Vague phrases like "OK next thing" are too casual and unhelpful.'
      },
      {
        id: 'mt-q6',
        type: 'fill-in-blank',
        prompt: '"Can we ________ consensus on the launch date and move forward?" (reach agreement)',
        answer: 'reach',
        acceptedVariants: ['reach', 'find', 'come to', 'achieve'],
        explanation: '"Reach consensus" = agree collectively. "Consensus" means general agreement among a group. Collocations: reach/achieve/build/come to consensus.'
      },
      {
        id: 'mt-q7',
        type: 'multiple-choice',
        prompt: '"Let\'s take that conversation ________." What does this mean in a business meeting?',
        options: [
          'End the conversation immediately',
          'Discuss it privately after the meeting rather than in front of the full group',
          'Move the conversation online',
          'Continue the conversation in a louder voice'
        ],
        correctIndex: 1,
        explanation: '"Take it offline" = discuss privately or separately, outside the current meeting. Often used when a topic is too detailed, sensitive, or relevant to only a few people in the room.'
      },
      {
        id: 'mt-q8',
        type: 'multiple-choice',
        prompt: 'Which phrase best expresses polite disagreement in a professional meeting?',
        options: [
          '"That is completely wrong."',
          '"I disagree."',
          '"I take your point, but I\'m not entirely convinced that approach will work in our market."',
          '"No, I don\'t agree with you at all."'
        ],
        correctIndex: 2,
        explanation: '"I take your point, but..." acknowledges the other person\'s idea before challenging it. This is collaborative disagreement — you respect their input while offering an alternative view.'
      },
      {
        id: 'mt-q9',
        type: 'fill-in-blank',
        prompt: '"The key ________ from today\'s session is that we need to reduce time-to-market by 30%." (main learning or conclusion)',
        answer: 'takeaway',
        acceptedVariants: ['takeaway', 'take-away', 'takeaways'],
        explanation: '"Takeaway" in business = the main point or lesson to remember from a meeting, presentation, or discussion. Plural: "What are the key takeaways?"'
      },
      {
        id: 'mt-q10',
        type: 'multiple-choice',
        prompt: '"The ________ for this project includes all department heads and the CFO." Which word fits?',
        options: ['agenda', 'deliverable', 'stakeholder', 'minutes'],
        correctIndex: 2,
        explanation: '"Stakeholder" = anyone who has an interest in a project\'s outcome — could be internal (employees, management) or external (clients, investors, regulators). "Deliverable" = a specific output that must be produced.'
      },
      {
        id: 'mt-q11',
        type: 'multiple-choice',
        prompt: '"Let\'s circle back to the pricing question at the end of the meeting." What does "circle back" mean?',
        options: [
          'Ignore the pricing question',
          'Return to the pricing question later',
          'Ask a different person about pricing',
          'Write the pricing question on a whiteboard'
        ],
        correctIndex: 1,
        explanation: '"Circle back" = return to a topic later. It is used to manage meeting flow — flagging that something is important but setting it aside temporarily to maintain momentum.'
      },
      {
        id: 'mt-q12',
        type: 'fill-in-blank',
        prompt: '"I\'ll ________ the updated agenda to all participants before the end of today." (send a document to a group)',
        answer: 'circulate',
        acceptedVariants: ['circulate', 'send', 'distribute', 'share'],
        explanation: '"Circulate" in meetings means to send or distribute a document to all relevant people. More formal than "send". Common: "circulate the minutes", "circulate the agenda".'
      },
      {
        id: 'mt-q13',
        type: 'multiple-choice',
        prompt: 'Which phrase is used to formally end a meeting?',
        options: [
          '"OK bye, see you."',
          '"I think we\'re done here, go home."',
          '"Let\'s adjourn here — thank you all for your contributions today."',
          '"This meeting is finished."'
        ],
        correctIndex: 2,
        explanation: '"Let\'s adjourn" is the professional phrase to formally close a meeting. "Adjourn" = to end or suspend a formal meeting. Thanking participants is standard courtesy.'
      },
      {
        id: 'mt-q14',
        type: 'multiple-choice',
        prompt: '"The main ________ for Q3 is a fully launched mobile app with at least 10,000 active users." Which word fits?',
        options: ['agenda', 'synergy', 'deliverable', 'takeaway'],
        correctIndex: 2,
        explanation: '"Deliverable" = a tangible output or result that must be completed as part of a project. Deliverables have clear criteria — what it is, when it is due, and what "done" looks like.'
      },
      {
        id: 'mt-q15',
        type: 'multiple-choice',
        prompt: 'You want to give someone the floor in a meeting. Which phrase is correct?',
        options: [
          '"You go now."',
          '"I\'ll now hand over to Lek, who will present the Q2 numbers."',
          '"Lek, speak please."',
          '"Lek has something to say so listen."'
        ],
        correctIndex: 1,
        explanation: '"I\'ll now hand over to..." or "I\'d like to pass over to..." are the professional ways to give the floor to another speaker. This is also used in presentations when switching presenter.'
      },
      {
        id: 'mt-q16',
        type: 'fill-in-blank',
        prompt: '"Before we ________ on, I want to flag a concern about the proposed timeline."',
        answer: 'move',
        acceptedVariants: ['move', 'go', 'press'],
        explanation: '"Before we move on" is standard meeting language for pausing progress to address a point. It is polite and does not require interrupting anyone.'
      },
      {
        id: 'mt-q17',
        type: 'multiple-choice',
        prompt: '"Low-hanging fruit" in a business meeting means:',
        options: [
          'A problem that is very complicated',
          'A new market opportunity that requires significant investment',
          'Tasks or goals that are easy to achieve quickly',
          'A risk that has been identified but not addressed'
        ],
        correctIndex: 2,
        explanation: '"Low-hanging fruit" = easy wins; goals or tasks that require minimal effort compared to their impact. Example: "Let\'s start with the low-hanging fruit before tackling the bigger restructuring."'
      },
      {
        id: 'mt-q18',
        type: 'multiple-choice',
        prompt: 'What is an "action item" in a meeting?',
        options: [
          'The main topic of the meeting',
          'A specific task assigned to a person with a deadline',
          'A decision that has been made',
          'A problem raised during the meeting'
        ],
        correctIndex: 1,
        explanation: '"Action item" = a task with a clear owner and deadline that results from a meeting. Example: "Action item: Tom to send revised budget to all stakeholders by Friday." Good meetings always end with clear action items.'
      },
      {
        id: 'mt-q19',
        type: 'fill-in-blank',
        prompt: '"I\'d like to ________ your attention to the chart on the right side of the slide." (direct focus)',
        answer: 'draw',
        acceptedVariants: ['draw', 'direct'],
        explanation: '"Draw your attention to" is standard presentation language for directing the audience to look at something specific. It is more formal and professional than "Look at this".'
      },
      {
        id: 'mt-q20',
        type: 'multiple-choice',
        prompt: 'A colleague says: "I see where you\'re coming from." What does this mean?',
        options: [
          'I agree with you completely.',
          'I do not understand what you are saying.',
          'I understand your perspective (even if I may not fully agree).',
          'You are from a different department.'
        ],
        correctIndex: 2,
        explanation: '"I see where you\'re coming from" = I understand your perspective and reasoning. It does not necessarily mean agreement — it is often used before a "but" to introduce a contrasting view politely.'
      }
    ]
  },

  {
    id: 'b2-email-quiz',
    lessonId: 'b2-email-01',
    title: 'Professional Email Writing Check',
    questions: [
      {
        id: 'em-q1',
        type: 'multiple-choice',
        prompt: 'Which subject line is most effective for a professional email?',
        options: [
          '"Hello"',
          '"Question"',
          '"Action required: contract review — deadline 10 July"',
          '"FYI"'
        ],
        correctIndex: 2,
        explanation: 'Effective subject lines are specific, clear, and often include a deadline or action. Vague subjects like "Hello" or "Question" force the recipient to open the email just to find out what it is about.'
      },
      {
        id: 'em-q2',
        type: 'multiple-choice',
        prompt: 'You are emailing an important client for the first time. Which salutation is most appropriate?',
        options: [
          '"Hey John,"',
          '"Hi,"',
          '"Dear Mr Sutthipong,"',
          '"To whom it may concern,"'
        ],
        correctIndex: 2,
        explanation: '"Dear Mr [Surname]" is the correct formal salutation for a first-contact professional email. "Hey" is too casual. "Hi" alone is too informal without a name. "To whom it may concern" is for when you do not know a specific name.'
      },
      {
        id: 'em-q3',
        type: 'fill-in-blank',
        prompt: '"Please ________ attached the revised proposal for your review." (standard phrase for attachments)',
        answer: 'find',
        acceptedVariants: ['find', 'see'],
        explanation: '"Please find attached" is the standard professional phrase to introduce an attachment. More formal than "I\'ve attached" or "Here is". Alternatives: "Attached please find..." / "I have attached..."'
      },
      {
        id: 'em-q4',
        type: 'multiple-choice',
        prompt: 'What is "cc" in email?',
        options: [
          'A copy sent only to the main recipient',
          'Carbon copy — other recipients who receive the email for information, but are not the primary addressee',
          'A confidential copy that other recipients cannot see',
          'A copy of a previous email in the same thread'
        ],
        correctIndex: 1,
        explanation: '"Cc" = carbon copy. The cc\'d people receive the email as a courtesy / for visibility, but the primary action or response is expected from the main "To" recipient. "Bcc" = blind carbon copy — recipients cannot see who else was bcc\'d.'
      },
      {
        id: 'em-q5',
        type: 'multiple-choice',
        prompt: 'A Thai colleague writes: "I would like to inform you that I am very sorry to disturb you but I would like to ask you a question about the meeting which is scheduled for next week." How should this be improved?',
        options: [
          'It is already well written.',
          'Replace with: "Quick question about next week\'s meeting — could you confirm the venue?"',
          'Add more apologies at the beginning.',
          'Make it even longer with more background information.'
        ],
        correctIndex: 1,
        explanation: 'Over-apologising is a very common mistake among Thai English writers. Professional emails should be direct, clear, and concise. If your email is appropriate to send, you do not need to apologise for sending it.'
      },
      {
        id: 'em-q6',
        type: 'fill-in-blank',
        prompt: '"I am writing ________ to our call yesterday to confirm the three agreed deliverables." (referring back to a previous interaction)',
        answer: 'further',
        acceptedVariants: ['further', 'in reference', 'with reference'],
        explanation: '"Further to our call/meeting/email..." = in follow-up to; referring back to. This is a formal, professional phrase for opening an email that continues a previous conversation.'
      },
      {
        id: 'em-q7',
        type: 'multiple-choice',
        prompt: 'Which closing is most appropriate for a professional email to a familiar colleague?',
        options: [
          '"Yours faithfully,"',
          '"Love,"',
          '"Best regards,"',
          '"Respectfully yours in sincerity,"'
        ],
        correctIndex: 2,
        explanation: '"Best regards" is the most versatile professional closing — suitable for colleagues, clients, and business contacts. "Yours faithfully" is for formal letters when you do not know the recipient\'s name. "Yours sincerely" is for formal letters when you do know the name.'
      },
      {
        id: 'em-q8',
        type: 'multiple-choice',
        prompt: '"This email confirms your ________ booking for the conference room on Tuesday, 3pm." Which word fits?',
        options: ['pending', 'reiterate', 'tentative', 'cc'],
        correctIndex: 2,
        explanation: '"Tentative" = not definite; provisional. A "tentative booking" means the reservation is not yet fully confirmed. Often used to hold a time or space while awaiting final confirmation.'
      },
      {
        id: 'em-q9',
        type: 'fill-in-blank',
        prompt: '"I just wanted to ________ up on my email from last Thursday — have you had a chance to review the contract?"',
        answer: 'follow',
        acceptedVariants: ['follow'],
        explanation: '"Follow up" = to contact someone again after an initial message to check progress. A follow-up email is a normal professional action — not rude if done politely after a reasonable wait time.'
      },
      {
        id: 'em-q10',
        type: 'multiple-choice',
        prompt: 'You need to tell someone that the report is not ready yet because it needs approval. Which phrasing is best?',
        options: [
          '"We cannot send the report."',
          '"The report is still pending approval from senior management. I will send it to you as soon as it is cleared."',
          '"I don\'t have the report."',
          '"The report has some problem."'
        ],
        correctIndex: 1,
        explanation: '"Pending approval" is a professional, clear phrase for explaining a delay due to an internal process. It sets expectations and includes a commitment to follow through — both key elements of professional communication.'
      },
      {
        id: 'em-q11',
        type: 'multiple-choice',
        prompt: 'When is it appropriate to use instant messaging (e.g. LINE or Slack) instead of email?',
        options: [
          'When sending a contract for signature',
          'When sharing a quick question or update that does not need a formal record',
          'When making a salary request',
          'When confirming a client meeting'
        ],
        correctIndex: 1,
        explanation: 'Instant messaging is best for quick, informal exchanges that do not require a formal record. Contracts, salary discussions, formal requests, and client confirmations should always be in email to ensure a written record and appropriate tone.'
      },
      {
        id: 'em-q12',
        type: 'fill-in-blank',
        prompt: '"Could you ________ your question? I want to make sure I understand exactly what information you need."',
        answer: 'clarify',
        acceptedVariants: ['clarify', 'elaborate on', 'expand on'],
        explanation: '"Clarify" = explain more clearly or remove confusion. Asking someone to clarify is professional and shows you want to respond accurately. It is better to ask than to guess and answer the wrong question.'
      },
      {
        id: 'em-q13',
        type: 'multiple-choice',
        prompt: '"The email ________ between our legal team and the client now has over 40 messages." Which word fits?',
        options: ['attachment', 'thread', 'bcc', 'subject line'],
        correctIndex: 1,
        explanation: '"Thread" = a chain of related emails on the same topic, all connected via reply. "Email thread" is the sequence of messages. "Stay on the same thread" means keep replying rather than starting a new email.'
      },
      {
        id: 'em-q14',
        type: 'multiple-choice',
        prompt: 'Which opening line is most appropriate for a follow-up email sent 3 days after no response?',
        options: [
          '"Why haven\'t you replied to my email yet?"',
          '"I sent you an email three days ago and you have not answered."',
          '"I just wanted to follow up on my email from Monday — I know you\'re busy, but could you let me know if you need more time?"',
          '"As per my last email, please respond urgently."'
        ],
        correctIndex: 2,
        explanation: 'Option C is polite, acknowledges the recipient\'s workload, and gives them a graceful way to respond. Option D ("As per my last email") sounds passive-aggressive. Options A and B are confrontational.'
      },
      {
        id: 'em-q15',
        type: 'fill-in-blank',
        prompt: '"I am ________ receipt of your email dated 30 June and will respond in full by Wednesday."',
        answer: 'acknowledging',
        acceptedVariants: ['acknowledging', 'confirming'],
        explanation: '"Acknowledge receipt" = formally confirm that you have received something. This is especially important for contracts, applications, or important requests — it reassures the sender and buys you time to prepare a full response.'
      },
      {
        id: 'em-q16',
        type: 'multiple-choice',
        prompt: 'What is a "BCC" recipient?',
        options: [
          'The main person who should take action on the email',
          'A person copied for information, whose name is visible to all recipients',
          'A person who receives a copy but whose inclusion is hidden from other recipients',
          'The person who will archive the email'
        ],
        correctIndex: 2,
        explanation: '"Bcc" = blind carbon copy. The bcc\'d person receives the email but no other recipient can see they were included. Used when you want to keep someone informed discreetly, or when emailing a large group where you want to protect individual addresses.'
      },
      {
        id: 'em-q17',
        type: 'multiple-choice',
        prompt: 'Thai learner mistake: "I would like to inform you that I would like to request that you would consider…" What is the main problem?',
        options: [
          'The grammar is incorrect.',
          'It is too casual.',
          'It is excessively wordy — multiple "I would like to" constructions create a stilted, unclear request.',
          'The vocabulary is too advanced.'
        ],
        correctIndex: 2,
        explanation: 'Thai learners often stack "I would like to" repeatedly. This makes emails feel bureaucratic and difficult to read. Vary your phrasing: "Could you...", "Please...", "I\'d appreciate it if...", "Would it be possible to..."'
      },
      {
        id: 'em-q18',
        type: 'fill-in-blank',
        prompt: '"I would like to ________ the point that the deadline has not changed — it is still 15 July." (restate to emphasise)',
        answer: 'reiterate',
        acceptedVariants: ['reiterate', 'emphasise', 'emphasize', 'stress', 'underline'],
        explanation: '"Reiterate" = state again, typically for emphasis. More formal than "repeat". Often used in follow-up emails to restate something that may have been overlooked.'
      },
      {
        id: 'em-q19',
        type: 'multiple-choice',
        prompt: 'Which closing line is appropriate for a formal email to a senior executive you have never met?',
        options: [
          '"Cheers,"',
          '"Thanks,"',
          '"I look forward to your response. Yours sincerely,"',
          '"See you around!"'
        ],
        correctIndex: 2,
        explanation: '"I look forward to your response. Yours sincerely," is professional and formal — appropriate for an unknown senior contact. "Cheers" and "Thanks" are too casual. "See you around" is colloquial.'
      },
      {
        id: 'em-q20',
        type: 'multiple-choice',
        prompt: '"The ________ of this email is Khun Wiroj — please do not reply to the group." Which word fits?',
        options: ['thread', 'attachment', 'recipient', 'subject line'],
        correctIndex: 2,
        explanation: '"Recipient" = the person or people who receive an email. "Main recipient" = the person in the "To" field expected to take action. Cc recipients receive it for information. Bcc recipients are hidden.'
      }
    ]
  },
{
  "id": "a1-restaurant-quiz",
  "lessonId": "a1-restaurant-01",
  "title": "At the Restaurant — Communication Check",
  "questions": [
    {
      "id": "ar-q1",
      "type": "multiple-choice",
      "prompt": "You sit down at a restaurant. The waiter has not brought the menu yet. What do you say?",
      "options": [
        "Give me the menu.",
        "Can I have the menu, please?",
        "I want the menu now.",
        "Menu!"
      ],
      "correctIndex": 1,
      "explanation": "\"Can I have the menu, please?\" is polite and natural. \"Give me\" and \"I want\" sound too direct or rude."
    },
    {
      "id": "ar-q2",
      "type": "multiple-choice",
      "prompt": "The waiter asks: \"Are you ready to order?\" You need more time. What do you say?",
      "options": [
        "Not yet. Go away.",
        "We need a few minutes, please.",
        "No, I don't want.",
        "I am not ready."
      ],
      "correctIndex": 1,
      "explanation": "\"We need a few minutes, please\" is the natural, polite way to ask for more time."
    },
    {
      "id": "ar-q3",
      "type": "multiple-choice",
      "prompt": "You want to order the pasta. Which sentence sounds most natural?",
      "options": [
        "I want pasta.",
        "Give me pasta.",
        "I'd like the pasta, please.",
        "Pasta for me."
      ],
      "correctIndex": 2,
      "explanation": "\"I'd like the pasta, please\" is the most natural and polite. \"I want\" sounds direct; \"Give me\" sounds like a command."
    },
    {
      "id": "ar-q4",
      "type": "fill-in-blank",
      "prompt": "Complete the sentence: \"Could ___ have a glass of water, please?\"",
      "answer": "I",
      "acceptedVariants": [
        "I"
      ],
      "explanation": "\"Could I have…?\" is a standard polite request form."
    },
    {
      "id": "ar-q5",
      "type": "multiple-choice",
      "prompt": "You are vegetarian. What do you ask?",
      "options": [
        "No meat for me!",
        "I don't eat meat, so no meat.",
        "Does this dish have meat in it?",
        "Is everything vegetarian?"
      ],
      "correctIndex": 2,
      "explanation": "\"Does this dish have meat in it?\" is the clearest. You can also say \"Is this vegetarian?\""
    },
    {
      "id": "ar-q6",
      "type": "multiple-choice",
      "prompt": "Your meal is finished. You want to pay. What do you say?",
      "options": [
        "Bill me now.",
        "I want to pay.",
        "Could I have the bill, please?",
        "Pay now please."
      ],
      "correctIndex": 2,
      "explanation": "\"Could I have the bill, please?\" is the standard polite phrase."
    },
    {
      "id": "ar-q7",
      "type": "multiple-choice",
      "prompt": "What is the American English word for \"bill\" at the end of a meal?",
      "options": [
        "receipt",
        "check",
        "invoice",
        "note"
      ],
      "correctIndex": 1,
      "explanation": "In American English, you ask for \"the check.\" In British English, \"the bill.\""
    },
    {
      "id": "ar-q8",
      "type": "fill-in-blank",
      "prompt": "You and a friend will pay separately. Tell the waiter: \"We'd like to pay ___.\"",
      "answer": "separately",
      "acceptedVariants": [
        "separately",
        "separate"
      ],
      "explanation": "\"We'd like to pay separately\" means each person pays for their own food."
    },
    {
      "id": "ar-q9",
      "type": "multiple-choice",
      "prompt": "Who says \"What do you recommend?\" in a restaurant?",
      "options": [
        "The customer asks the waiter",
        "The waiter asks the customer",
        "Both people say this",
        "Neither — it is not used"
      ],
      "correctIndex": 0,
      "explanation": "The CUSTOMER asks the WAITER \"What do you recommend?\" — asking for their suggestion on what to order."
    },
    {
      "id": "ar-q10",
      "type": "multiple-choice",
      "prompt": "You want to leave a tip without getting change. What do you say?",
      "options": [
        "Keep it all.",
        "No change needed.",
        "Keep the change.",
        "Change is not needed."
      ],
      "correctIndex": 2,
      "explanation": "\"Keep the change\" is the standard English phrase when you want the waiter to keep the extra money as a tip."
    },
    {
      "id": "ar-q11",
      "type": "fill-in-blank",
      "prompt": "To book a table in advance, you make a ___.",
      "answer": "reservation",
      "acceptedVariants": [
        "reservation",
        "booking"
      ],
      "explanation": "A \"reservation\" (or \"booking\" in British English) means you have saved a table for a specific time."
    },
    {
      "id": "ar-q12",
      "type": "multiple-choice",
      "prompt": "You are allergic to nuts. Which sentence is safest and clearest?",
      "options": [
        "I can't eat nuts — I have an allergy.",
        "Nuts are bad for me.",
        "No nuts in my food please.",
        "I don't like nuts."
      ],
      "correctIndex": 0,
      "explanation": "\"I can't eat nuts — I have an allergy\" tells the waiter this is a health issue, not just a preference."
    },
    {
      "id": "ar-q13",
      "type": "multiple-choice",
      "prompt": "What does \"I'd like\" mean?",
      "options": [
        "I like (present)",
        "I liked (past)",
        "I would like (polite request)",
        "I am liking (continuous)"
      ],
      "correctIndex": 2,
      "explanation": "\"I'd like\" is a contraction of \"I would like.\" It is much more natural in a restaurant than \"I want.\""
    },
    {
      "id": "ar-q14",
      "type": "fill-in-blank",
      "prompt": "Small dishes served before the main meal are \"starters\" in British English or \"___ \" in American English.",
      "answer": "appetizers",
      "acceptedVariants": [
        "appetizers",
        "appetizer"
      ],
      "explanation": "\"Starter\" (British) and \"appetizer\" (American) both refer to the first small course of a meal."
    },
    {
      "id": "ar-q15",
      "type": "multiple-choice",
      "prompt": "The waiter says \"Enjoy your meal!\" What is the best response?",
      "options": [
        "OK.",
        "Yes.",
        "Thank you!",
        "I know."
      ],
      "correctIndex": 2,
      "explanation": "\"Thank you!\" is the natural, warm response every time."
    },
    {
      "id": "ar-q16",
      "type": "multiple-choice",
      "prompt": "Which of these is a \"main course\"?",
      "options": [
        "A small salad served first",
        "A chocolate cake at the end",
        "A grilled chicken dish served as the central part of the meal",
        "A cup of coffee after eating"
      ],
      "correctIndex": 2,
      "explanation": "The \"main course\" is the central and largest part of the meal — after the starter, before dessert."
    },
    {
      "id": "ar-q17",
      "type": "fill-in-blank",
      "prompt": "The sweet food you eat at the end of a meal is called ___.",
      "answer": "dessert",
      "acceptedVariants": [
        "dessert",
        "pudding"
      ],
      "explanation": "\"Dessert\" is the sweet course at the end: cake, ice cream, fruit, etc."
    },
    {
      "id": "ar-q18",
      "type": "multiple-choice",
      "prompt": "\"Do you accept credit cards?\" — Which is a natural positive response from the waiter?",
      "options": [
        "Yes, we do.",
        "Yes, we accept credit cards.",
        "Sure, no problem.",
        "All of the above are correct."
      ],
      "correctIndex": 3,
      "explanation": "All three responses are natural. \"Yes, we do\" is short; \"Yes, we accept credit cards\" is full; \"Sure, no problem\" is casual."
    },
    {
      "id": "ar-q19",
      "type": "multiple-choice",
      "prompt": "You arrive without a booking. What do you ask?",
      "options": [
        "Do you have a table for two?",
        "Can we get a table for two, please?",
        "Is there a table available for two?",
        "All of these are acceptable."
      ],
      "correctIndex": 3,
      "explanation": "All three options are natural and correct."
    },
    {
      "id": "ar-q20",
      "type": "fill-in-blank",
      "prompt": "You want to know if the food is hot and spicy. Ask: \"Is this dish ___?\"",
      "answer": "spicy",
      "acceptedVariants": [
        "spicy",
        "hot",
        "hot and spicy"
      ],
      "explanation": "\"Is this dish spicy?\" is the clearest question. \"Hot\" can mean temperature or spiciness, so \"spicy\" is more precise."
    }
  ]
},
{
  "id": "a1-numbers-quiz",
  "lessonId": "a1-numbers-time-01",
  "title": "Numbers, Time & Dates — Check",
  "questions": [
    {
      "id": "an-q1",
      "type": "multiple-choice",
      "prompt": "How do you say the number 13 in English?",
      "options": [
        "thirty",
        "thirteen",
        "thirdteen",
        "threeten"
      ],
      "correctIndex": 1,
      "explanation": "13 = \"thirteen.\" Be careful: \"thirty\" = 30. \"Thirteen\" is stressed on the second syllable: thir-TEEN."
    },
    {
      "id": "an-q2",
      "type": "fill-in-blank",
      "prompt": "Write the number 45 in words.",
      "answer": "forty-five",
      "acceptedVariants": [
        "forty-five",
        "forty five"
      ],
      "explanation": "45 = \"forty-five.\" Note the spelling: \"forty\" (not \"fourty\"). Numbers 21–99 use a hyphen."
    },
    {
      "id": "an-q3",
      "type": "multiple-choice",
      "prompt": "\"It's half past three.\" What does this mean?",
      "options": [
        "3:15",
        "3:30",
        "3:45",
        "2:30"
      ],
      "correctIndex": 1,
      "explanation": "\"Half past three\" = 3:30. \"Half past\" means 30 minutes after the hour."
    },
    {
      "id": "an-q4",
      "type": "multiple-choice",
      "prompt": "How do you say 9:45 in spoken English?",
      "options": [
        "nine forty-five / quarter to ten",
        "nine forty-five / quarter past ten",
        "quarter past nine",
        "half past nine"
      ],
      "correctIndex": 0,
      "explanation": "9:45 = \"nine forty-five\" (digital) or \"quarter to ten\" (clock style). It is 15 minutes BEFORE ten."
    },
    {
      "id": "an-q5",
      "type": "fill-in-blank",
      "prompt": "The shop opens at 8:00. Say this using \"o'clock\": \"The shop opens at eight ___\".",
      "answer": "o'clock",
      "acceptedVariants": [
        "o'clock",
        "oclock"
      ],
      "explanation": "\"O'clock\" is only used for exact hours with no minutes."
    },
    {
      "id": "an-q6",
      "type": "multiple-choice",
      "prompt": "What does \"a.m.\" mean?",
      "options": [
        "Hours from noon to midnight",
        "Hours from midnight to noon (morning)",
        "Short for \"approximately\"",
        "The American time zone"
      ],
      "correctIndex": 1,
      "explanation": "\"a.m.\" = ante meridiem — the hours from midnight to noon. \"p.m.\" = post meridiem — from noon to midnight."
    },
    {
      "id": "an-q7",
      "type": "multiple-choice",
      "prompt": "In British English, how do you write the 5th of March 2025?",
      "options": [
        "03/05/2025",
        "05/03/2025",
        "March 5, 2025",
        "5-3-2025"
      ],
      "correctIndex": 1,
      "explanation": "British English = Day/Month/Year: 05/03/2025. American = Month/Day/Year: 03/05/2025. Write the month as a word to be clear!"
    },
    {
      "id": "an-q8",
      "type": "fill-in-blank",
      "prompt": "What is the ordinal form of 3? \"Today is the ___ of July.\"",
      "answer": "third",
      "acceptedVariants": [
        "third",
        "3rd"
      ],
      "explanation": "Ordinal numbers: 1st = first, 2nd = second, 3rd = third, 4th = fourth. We use ordinals for dates."
    },
    {
      "id": "an-q9",
      "type": "multiple-choice",
      "prompt": "\"My appointment is at quarter past two.\" What time should you arrive?",
      "options": [
        "2:00",
        "2:15",
        "2:30",
        "2:45"
      ],
      "correctIndex": 1,
      "explanation": "\"Quarter past two\" = 2:15. A quarter of an hour is 15 minutes."
    },
    {
      "id": "an-q10",
      "type": "multiple-choice",
      "prompt": "Which question is correct for asking the time?",
      "options": [
        "How much is the time?",
        "What is the time?",
        "What time is it?",
        "Both B and C are correct."
      ],
      "correctIndex": 3,
      "explanation": "\"What time is it?\" and \"What is the time?\" are both correct. \"How much is the time?\" is not English."
    },
    {
      "id": "an-q11",
      "type": "fill-in-blank",
      "prompt": "12:00 in the middle of the day is called ___.",
      "answer": "noon",
      "acceptedVariants": [
        "noon",
        "midday"
      ],
      "explanation": "\"Noon\" or \"midday\" = 12:00 p.m. \"Midnight\" = 12:00 a.m. These words avoid the confusing 12 a.m./p.m. problem."
    },
    {
      "id": "an-q12",
      "type": "multiple-choice",
      "prompt": "Which month comes after July?",
      "options": [
        "June",
        "August",
        "September",
        "October"
      ],
      "correctIndex": 1,
      "explanation": "The months in order: ... June, July, AUGUST, September ..."
    },
    {
      "id": "an-q13",
      "type": "multiple-choice",
      "prompt": "How do you say your birthday? (Birthday: 20th November)",
      "options": [
        "My birthday is November twenty.",
        "My birthday is on the twentieth of November.",
        "I born on November 20.",
        "My birth date is November twentieth day."
      ],
      "correctIndex": 1,
      "explanation": "\"My birthday is on the twentieth of November\" is correct. Use \"on\" before dates. \"I born\" is wrong — say \"I was born.\""
    },
    {
      "id": "an-q14",
      "type": "fill-in-blank",
      "prompt": "How do you say 100 in English?",
      "answer": "one hundred",
      "acceptedVariants": [
        "one hundred",
        "a hundred"
      ],
      "explanation": "100 = \"one hundred\" or \"a hundred.\" Both are correct."
    },
    {
      "id": "an-q15",
      "type": "multiple-choice",
      "prompt": "\"04/07/2025\" in AMERICAN English means:",
      "options": [
        "7th April 2025",
        "4th July 2025",
        "July 7th 2025",
        "April 4th 2025"
      ],
      "correctIndex": 3,
      "explanation": "American = Month/Day/Year. Month 04 = April, day 07. So 04/07/2025 = April 7th 2025."
    },
    {
      "id": "an-q16",
      "type": "multiple-choice",
      "prompt": "Which number is spelled incorrectly?",
      "options": [
        "twenty",
        "fourty",
        "fifty",
        "sixty"
      ],
      "correctIndex": 1,
      "explanation": "\"Fourty\" is wrong! The correct spelling is \"forty\" — no \"u\". Remember: four → forty."
    },
    {
      "id": "an-q17",
      "type": "fill-in-blank",
      "prompt": "How do you say 2:30 using \"past\"? \"It's ___ past two.\"",
      "answer": "half",
      "acceptedVariants": [
        "half"
      ],
      "explanation": "\"Half past two\" = 2:30. \"Half\" means 30 minutes (half of 60)."
    },
    {
      "id": "an-q18",
      "type": "multiple-choice",
      "prompt": "You have a meeting \"at noon.\" What time is this?",
      "options": [
        "12:00 midnight",
        "12:00 midday",
        "11:00 a.m.",
        "1:00 p.m."
      ],
      "correctIndex": 1,
      "explanation": "\"Noon\" = 12:00 midday. \"Midnight\" = 12:00 at night."
    },
    {
      "id": "an-q19",
      "type": "fill-in-blank",
      "prompt": "You ask about the bus: \"What time does the bus ___?\" (reach the destination)",
      "answer": "arrive",
      "acceptedVariants": [
        "arrive",
        "get there",
        "get in"
      ],
      "explanation": "\"What time does it arrive?\" = when does it reach the destination. Opposite: \"What time does it leave/depart?\""
    },
    {
      "id": "an-q20",
      "type": "multiple-choice",
      "prompt": "How do you say the year 2025 in English?",
      "options": [
        "two thousand and twenty-five",
        "twenty twenty-five",
        "two zero two five",
        "Both A and B are correct."
      ],
      "correctIndex": 3,
      "explanation": "Both \"two thousand and twenty-five\" and \"twenty twenty-five\" are correct and widely used."
    }
  ]
}
,
{
  "id": "a2-shopping-quiz",
  "lessonId": "a2-shopping-01",
  "questions": [
    {
      "id": "a2-shop-q1",
      "type": "multiple-choice",
      "prompt": "You want to know the price of a shirt. What do you say?",
      "options": [
        "What is the price, please?",
        "How much is this shirt?",
        "Give me the price now.",
        "Tell me the cost of shirt."
      ],
      "correctIndex": 1,
      "explanation": "\"How much is this shirt?\" is the most natural and polite way to ask about a price in everyday shopping."
    },
    {
      "id": "a2-shop-q2",
      "type": "multiple-choice",
      "prompt": "You want to try on a dress before buying it. What do you ask?",
      "options": [
        "Where can I wear this?",
        "Can I try this on, please?",
        "I want to put this dress.",
        "Show me the fitting."
      ],
      "correctIndex": 1,
      "explanation": "\"Can I try this on?\" is the standard phrase for asking to use the fitting room."
    },
    {
      "id": "a2-shop-q3",
      "type": "multiple-choice",
      "prompt": "The jacket costs 2,000 baht but you saw it online for 1,500. What do you say politely?",
      "options": [
        "This is too expensive! Lower the price!",
        "I don't want this anymore.",
        "Excuse me, is there a discount on this jacket?",
        "Why does this cost so much?"
      ],
      "correctIndex": 2,
      "explanation": "\"Is there a discount on this?\" is a polite way to ask about a lower price without being rude."
    },
    {
      "id": "a2-shop-q4",
      "type": "multiple-choice",
      "prompt": "You want to pay with your bank card. Which sentence is correct?",
      "options": [
        "I pay with my card money.",
        "Can I pay by credit card?",
        "I use card for pay.",
        "Do you take my card?"
      ],
      "correctIndex": 1,
      "explanation": "\"Can I pay by credit card?\" is the standard phrase. We say \"pay by card\" not \"pay with card money\"."
    },
    {
      "id": "a2-shop-q5",
      "type": "multiple-choice",
      "prompt": "Which sentence correctly compares two items?",
      "options": [
        "This bag is more cheap than that one.",
        "This bag cheaper that one.",
        "This bag is cheaper than that one.",
        "This bag more cheaper than that one."
      ],
      "correctIndex": 2,
      "explanation": "Use \"cheaper than\" for short adjectives. \"More cheap\" is incorrect — \"cheap\" uses \"-er\" form."
    },
    {
      "id": "a2-shop-q6",
      "type": "multiple-choice",
      "prompt": "The shoes you bought are the wrong size. You want to swap them. What do you say?",
      "options": [
        "I want to exchange these for a bigger size.",
        "I need to change these shoes away.",
        "Can you give me different shoes?",
        "These shoes are wrong, take them."
      ],
      "correctIndex": 0,
      "explanation": "\"Exchange for a different size\" is the correct phrase when swapping an item at a shop."
    },
    {
      "id": "a2-shop-q7",
      "type": "multiple-choice",
      "prompt": "You want your money back for a faulty item. What do you say?",
      "options": [
        "I want a refund, please.",
        "Give me money back.",
        "I want to undo this purchase.",
        "This item is bad, pay me."
      ],
      "correctIndex": 0,
      "explanation": "\"I want a refund\" is the correct phrase when asking for your money back."
    },
    {
      "id": "a2-shop-q8",
      "type": "multiple-choice",
      "prompt": "You've decided to buy the blue jacket. What is the most natural thing to say to the staff?",
      "options": [
        "I decide to buy this blue one.",
        "OK I want this.",
        "I'll take this one, please.",
        "Purchase this jacket for me."
      ],
      "correctIndex": 2,
      "explanation": "\"I'll take this one\" is a natural, polite way to confirm your purchase."
    },
    {
      "id": "a2-shop-q9",
      "type": "multiple-choice",
      "prompt": "A customer asks: \"Is this on sale?\" The shop doesn't have any discounts. What does the staff say?",
      "options": [
        "No, this is full price.",
        "No, we don't sell sales.",
        "No, this is not saled.",
        "No, sale is finished yesterday."
      ],
      "correctIndex": 0,
      "explanation": "\"Full price\" is the correct term for the original price with no discount."
    },
    {
      "id": "a2-shop-q10",
      "type": "multiple-choice",
      "prompt": "Where do you go to pay for items in a department store?",
      "options": [
        "The changing room",
        "The checkout",
        "The receipt counter",
        "The service desk only"
      ],
      "correctIndex": 1,
      "explanation": "\"Checkout\" or \"till\" is where you pay for your items in a shop."
    },
    {
      "id": "a2-shop-q11",
      "type": "multiple-choice",
      "prompt": "Which question asks about available colours?",
      "options": [
        "Do you have this in other colour?",
        "Does this have more colours?",
        "Do you have this in different colours?",
        "Can I see this colour others?"
      ],
      "correctIndex": 2,
      "explanation": "\"Do you have this in different colours?\" is grammatically correct and natural."
    },
    {
      "id": "a2-shop-q12",
      "type": "multiple-choice",
      "prompt": "A staff member says \"That comes with a six-month guarantee.\" What does \"guarantee\" mean here?",
      "options": [
        "A discount coupon",
        "A promise to repair or replace if it breaks",
        "Free delivery",
        "A loyalty card"
      ],
      "correctIndex": 1,
      "explanation": "A guarantee (or warranty) means the seller promises to fix or replace the product if something goes wrong."
    },
    {
      "id": "a2-shop-q13",
      "type": "multiple-choice",
      "prompt": "You want a proof of purchase to return the item later. What do you ask for?",
      "options": [
        "A label",
        "A receipt",
        "A stamp",
        "A guarantee card"
      ],
      "correctIndex": 1,
      "explanation": "A receipt is the printed proof that you paid for something."
    },
    {
      "id": "a2-shop-q14",
      "type": "multiple-choice",
      "prompt": "The sign says \"50% off.\" What does this mean for a 400-baht item?",
      "options": [
        "You pay 400 baht.",
        "You pay 50 baht.",
        "You pay 200 baht.",
        "You pay 350 baht."
      ],
      "correctIndex": 2,
      "explanation": "50% off means you pay half the original price. Half of 400 is 200."
    },
    {
      "id": "a2-shop-q15",
      "type": "fill-in-blank",
      "prompt": "You want to know if there is a smaller size. Complete the sentence: \"Excuse me, do you have this _____ a smaller size?\"",
      "answer": "in",
      "acceptedVariants": [
        "in"
      ],
      "explanation": "The correct preposition is \"in\" — \"Do you have this in a smaller size?\" This is fixed phrasing for sizes and colours."
    },
    {
      "id": "a2-shop-q16",
      "type": "fill-in-blank",
      "prompt": "You want to return shoes. Complete the sentence: \"I'd like to _____ these shoes. They don't fit.\"",
      "answer": "return",
      "acceptedVariants": [
        "return",
        "exchange"
      ],
      "explanation": "\"Return\" means give back for a refund. \"Exchange\" means swap for another item. Both work here contextually."
    },
    {
      "id": "a2-shop-q17",
      "type": "fill-in-blank",
      "prompt": "You're at the register. Complete the sentence: \"Can I pay _____ card?\"",
      "answer": "by",
      "acceptedVariants": [
        "by"
      ],
      "explanation": "We say \"pay by card\", \"pay by cash\", \"pay by bank transfer\". The preposition is always \"by\"."
    },
    {
      "id": "a2-shop-q18",
      "type": "fill-in-blank",
      "prompt": "You want to know if the price can be lower. Ask: \"Is there a _____ on this?\"",
      "answer": "discount",
      "acceptedVariants": [
        "discount",
        "sale",
        "deal"
      ],
      "explanation": "\"Discount\" is the most standard word. \"Sale\" and \"deal\" also work in casual speech."
    },
    {
      "id": "a2-shop-q19",
      "type": "fill-in-blank",
      "prompt": "Complete this comparison sentence: \"The blue dress is more expensive _____ the red one.\"",
      "answer": "than",
      "acceptedVariants": [
        "than"
      ],
      "explanation": "Comparative adjectives are always followed by \"than\": \"more expensive than\", \"cheaper than\", \"bigger than\"."
    },
    {
      "id": "a2-shop-q20",
      "type": "fill-in-blank",
      "prompt": "You want paper proof of your purchase. Say: \"Could I have a _____, please?\"",
      "answer": "receipt",
      "acceptedVariants": [
        "receipt",
        "bill"
      ],
      "explanation": "\"Receipt\" is the standard word. \"Bill\" is sometimes used in restaurants."
    }
  ]
},
{
  "id": "a2-directions-quiz",
  "lessonId": "a2-directions-01",
  "questions": [
    {
      "id": "a2-dir-q1",
      "type": "multiple-choice",
      "prompt": "You are lost and need help. Which is the most polite way to start?",
      "options": [
        "Hey, where is the station?",
        "Excuse me, could you tell me the way to the station?",
        "I need the station. Help me.",
        "Station — where?"
      ],
      "correctIndex": 1,
      "explanation": "Starting with \"Excuse me\" and using \"could you\" is polite and natural for asking a stranger for help."
    },
    {
      "id": "a2-dir-q2",
      "type": "multiple-choice",
      "prompt": "Someone says: \"Turn right at the traffic lights.\" Where do you turn?",
      "options": [
        "Before the traffic lights",
        "At the roundabout",
        "When you reach the traffic lights",
        "After you pass the lights"
      ],
      "correctIndex": 2,
      "explanation": "\"At the traffic lights\" means you turn exactly when you reach them."
    },
    {
      "id": "a2-dir-q3",
      "type": "multiple-choice",
      "prompt": "You hear: \"The bank is opposite the post office.\" Where is the bank?",
      "options": [
        "Next to the post office",
        "Behind the post office",
        "Facing the post office on the other side of the road",
        "Inside the post office building"
      ],
      "correctIndex": 2,
      "explanation": "\"Opposite\" means directly facing something — usually across a street."
    },
    {
      "id": "a2-dir-q4",
      "type": "multiple-choice",
      "prompt": "Which sentence gives directions correctly?",
      "options": [
        "Go the street straight and left turn.",
        "Go straight ahead and then turn left.",
        "You go straight, then left you turn.",
        "Straight go and turn to the left."
      ],
      "correctIndex": 1,
      "explanation": "\"Go straight ahead and then turn left\" follows correct English word order for directions."
    },
    {
      "id": "a2-dir-q5",
      "type": "multiple-choice",
      "prompt": "Someone says the hospital is \"adjacent to the park.\" What does adjacent mean?",
      "options": [
        "Far from",
        "Inside",
        "Directly next to",
        "Opposite"
      ],
      "correctIndex": 2,
      "explanation": "\"Adjacent\" means directly beside or next to something."
    },
    {
      "id": "a2-dir-q6",
      "type": "multiple-choice",
      "prompt": "You didn't understand the directions. What do you say?",
      "options": [
        "Please speak again.",
        "I don't understand your mouth.",
        "Sorry, could you say that again more slowly?",
        "What? Repeat!"
      ],
      "correctIndex": 2,
      "explanation": "\"Could you say that again more slowly?\" is polite and clear when you need repetition."
    },
    {
      "id": "a2-dir-q7",
      "type": "multiple-choice",
      "prompt": "You want to take the bus. Which question is correct?",
      "options": [
        "Which bus is go to centre?",
        "Which bus goes to the city centre?",
        "What bus number go city?",
        "Bus to centre, which number?"
      ],
      "correctIndex": 1,
      "explanation": "\"Which bus goes to...?\" is the correct structure. Subject + verb + destination."
    },
    {
      "id": "a2-dir-q8",
      "type": "multiple-choice",
      "prompt": "On the bus, you want to know your stop. What do you ask the driver?",
      "options": [
        "Where I leave bus for the museum?",
        "Where do I get off for the national museum?",
        "Which stop is museum?",
        "Tell me when museum stop comes."
      ],
      "correctIndex": 1,
      "explanation": "\"Where do I get off for [place]?\" is the standard phrase to ask about your stop on public transport."
    },
    {
      "id": "a2-dir-q9",
      "type": "multiple-choice",
      "prompt": "\"Take the second street on your left.\" How many streets do you pass before turning?",
      "options": [
        "None — turn immediately",
        "One street, then turn",
        "Two streets, then turn",
        "Three streets, then turn"
      ],
      "correctIndex": 1,
      "explanation": "You pass the first street and turn at the second one. So you pass one before turning."
    },
    {
      "id": "a2-dir-q10",
      "type": "multiple-choice",
      "prompt": "The museum is \"in the vicinity of the station.\" What does vicinity mean?",
      "options": [
        "Inside the station",
        "Far away from the station",
        "In the area around the station",
        "On top of the station"
      ],
      "correctIndex": 2,
      "explanation": "\"Vicinity\" means the nearby area or surrounding neighbourhood."
    },
    {
      "id": "a2-dir-q11",
      "type": "multiple-choice",
      "prompt": "Which preposition is correct? \"The café is ___ the corner.\"",
      "options": [
        "in",
        "at",
        "on",
        "by"
      ],
      "correctIndex": 2,
      "explanation": "We say \"on the corner\" — this is fixed preposition usage in English."
    },
    {
      "id": "a2-dir-q12",
      "type": "multiple-choice",
      "prompt": "Someone says: \"It's about a ten-minute walk.\" What do they mean?",
      "options": [
        "You need to take a bus",
        "Walking takes exactly 10 minutes",
        "Walking takes approximately 10 minutes",
        "It is too far to walk"
      ],
      "correctIndex": 2,
      "explanation": "\"About\" means approximately — not an exact time."
    },
    {
      "id": "a2-dir-q13",
      "type": "multiple-choice",
      "prompt": "You see a roundabout. You need to take the third exit. How many roads do you pass?",
      "options": [
        "One road",
        "Two roads",
        "Three roads then exit",
        "You take the road right after entering"
      ],
      "correctIndex": 1,
      "explanation": "The third exit means you pass exits one and two, then take exit three."
    },
    {
      "id": "a2-dir-q14",
      "type": "multiple-choice",
      "prompt": "You ask: \"Is the supermarket far from here?\" The person answers: \"Not really — it's just around the corner.\" What does this mean?",
      "options": [
        "It is very far",
        "It is very close",
        "It is exactly at the corner",
        "You need to turn a corner then walk far"
      ],
      "correctIndex": 1,
      "explanation": "\"Just around the corner\" is an idiom meaning very close by."
    },
    {
      "id": "a2-dir-q15",
      "type": "fill-in-blank",
      "prompt": "Complete the direction: \"Go straight ahead and turn left _____ the traffic lights.\"",
      "answer": "at",
      "acceptedVariants": [
        "at"
      ],
      "explanation": "We use \"at\" with landmarks and fixed points: \"at the traffic lights\", \"at the corner\", \"at the roundabout\"."
    },
    {
      "id": "a2-dir-q16",
      "type": "fill-in-blank",
      "prompt": "Ask about your stop: \"Excuse me, where do I _____ off for Central Station?\"",
      "answer": "get",
      "acceptedVariants": [
        "get"
      ],
      "explanation": "\"Get off\" is the phrasal verb for leaving a bus, train, or tube. \"Where do I get off?\""
    },
    {
      "id": "a2-dir-q17",
      "type": "fill-in-blank",
      "prompt": "You're not sure you're heading the right way. Say: \"Excuse me, am I going the right _____ for the airport?\"",
      "answer": "way",
      "acceptedVariants": [
        "way",
        "direction"
      ],
      "explanation": "\"Going the right way\" is the standard phrase to check you are on the correct route."
    },
    {
      "id": "a2-dir-q18",
      "type": "fill-in-blank",
      "prompt": "The school is between the bank and the pharmacy. In other words, the pharmacy is _____ to the school.",
      "answer": "next",
      "acceptedVariants": [
        "next",
        "adjacent"
      ],
      "explanation": "\"Next to\" and \"adjacent to\" both describe things that are beside each other."
    },
    {
      "id": "a2-dir-q19",
      "type": "fill-in-blank",
      "prompt": "You need to change trains. Ask: \"Do I need to _____ trains at Asok station?\"",
      "answer": "change",
      "acceptedVariants": [
        "change",
        "transfer"
      ],
      "explanation": "\"Change trains\" or \"transfer\" both work when you need to switch to a different line."
    },
    {
      "id": "a2-dir-q20",
      "type": "fill-in-blank",
      "prompt": "You want a faster route. Ask: \"Is there a _____ to the market from here?\"",
      "answer": "shortcut",
      "acceptedVariants": [
        "shortcut",
        "shorter way",
        "quicker way"
      ],
      "explanation": "\"Shortcut\" is the specific word for a quicker, more direct route."
    }
  ]
},
{
  "id": "a2-small-talk-quiz",
  "lessonId": "a2-small-talk-01",
  "questions": [
    {
      "id": "a2-st-q1",
      "type": "multiple-choice",
      "prompt": "You want to start a conversation with someone at a party. Which is the best opener?",
      "options": [
        "What is your name and job?",
        "Nice weather we're having, isn't it?",
        "How old are you?",
        "Do you have money?"
      ],
      "correctIndex": 1,
      "explanation": "Weather is a safe, universal small-talk topic. Tag questions like \"isn't it?\" invite the other person to respond."
    },
    {
      "id": "a2-st-q2",
      "type": "multiple-choice",
      "prompt": "Someone says \"I'm really into photography.\" What is a good follow-up response?",
      "options": [
        "OK.",
        "Photography is expensive.",
        "Oh really? What kind of photos do you like to take?",
        "I don't like photos."
      ],
      "correctIndex": 2,
      "explanation": "Asking a follow-up question shows genuine interest and keeps the conversation going."
    },
    {
      "id": "a2-st-q3",
      "type": "multiple-choice",
      "prompt": "You want to ask about someone's weekend plans. Which is most natural?",
      "options": [
        "What are your Saturday and Sunday activities?",
        "Any plans for the weekend?",
        "Do you have weekend schedule?",
        "Tell me your plans."
      ],
      "correctIndex": 1,
      "explanation": "\"Any plans for the weekend?\" is casual, friendly, and commonly used in everyday English."
    },
    {
      "id": "a2-st-q4",
      "type": "multiple-choice",
      "prompt": "There is an awkward silence. Which phrase can help restart the conversation?",
      "options": [
        "I am silent now.",
        "Please talk more.",
        "By the way, did you see the game last night?",
        "It is quiet here."
      ],
      "correctIndex": 2,
      "explanation": "\"By the way\" is a natural pivot phrase to change topics or restart a conversation."
    },
    {
      "id": "a2-st-q5",
      "type": "multiple-choice",
      "prompt": "Someone says \"I love hiking.\" You have never tried it. What's a good response?",
      "options": [
        "Hiking is dangerous.",
        "That sounds great! I've never tried it — what do you like about it?",
        "I know, hiking is good.",
        "Why do you like hiking?"
      ],
      "correctIndex": 1,
      "explanation": "Sharing your experience + asking a question is the ideal small-talk response. It keeps both people engaged."
    },
    {
      "id": "a2-st-q6",
      "type": "multiple-choice",
      "prompt": "Which phrase best shows enthusiasm during small talk?",
      "options": [
        "Yes.",
        "I understand.",
        "That's so interesting! Tell me more.",
        "OK, noted."
      ],
      "correctIndex": 2,
      "explanation": "\"That's so interesting! Tell me more.\" shows genuine interest and encourages the other person to keep talking."
    },
    {
      "id": "a2-st-q7",
      "type": "multiple-choice",
      "prompt": "You want to share your hobby. Which sentence is most natural?",
      "options": [
        "My hobby is to do cooking.",
        "I am hobby cooking.",
        "I'm really into cooking — I try new recipes every weekend.",
        "Cooking is my hobby thing."
      ],
      "correctIndex": 2,
      "explanation": "\"I'm really into [hobby]\" is natural and conversational. Adding detail makes it better small talk."
    },
    {
      "id": "a2-st-q8",
      "type": "multiple-choice",
      "prompt": "A colleague says: \"Let's grab coffee sometime!\" What does this mean?",
      "options": [
        "They are inviting you to a formal meeting.",
        "They want to get coffee right now.",
        "They are suggesting a casual social meeting in the future.",
        "They want you to buy them coffee."
      ],
      "correctIndex": 2,
      "explanation": "\"Let's grab coffee sometime\" is a casual, friendly suggestion to meet socially — not a specific plan."
    },
    {
      "id": "a2-st-q9",
      "type": "multiple-choice",
      "prompt": "What is the purpose of an \"icebreaker\" in a conversation?",
      "options": [
        "To cool down a hot room",
        "To end a conversation quickly",
        "To start a conversation and reduce awkwardness",
        "To make someone laugh"
      ],
      "correctIndex": 2,
      "explanation": "An icebreaker is a question or comment used to start a conversation and make people feel comfortable."
    },
    {
      "id": "a2-st-q10",
      "type": "multiple-choice",
      "prompt": "Someone says: \"I'm not really into sports.\" What do they mean?",
      "options": [
        "They hate sports intensely.",
        "They don't particularly like sports.",
        "They don't play sports well.",
        "They used to like sports."
      ],
      "correctIndex": 1,
      "explanation": "\"Not really into\" is a soft, polite way of saying you don't like something much."
    },
    {
      "id": "a2-st-q11",
      "type": "multiple-choice",
      "prompt": "Which topic is generally safe for small talk with a new acquaintance?",
      "options": [
        "Politics",
        "Religion",
        "How much money they earn",
        "Their weekend plans"
      ],
      "correctIndex": 3,
      "explanation": "Weekend plans are a safe, neutral small-talk topic. Politics, religion, and salaries can be sensitive."
    },
    {
      "id": "a2-st-q12",
      "type": "multiple-choice",
      "prompt": "You want to recommend a restaurant to someone. Which is correct?",
      "options": [
        "You should go to the new Italian place — it's really good!",
        "Go eat at Italian restaurant.",
        "I recommend you eating the Italian restaurant.",
        "You must eat Italian food there."
      ],
      "correctIndex": 0,
      "explanation": "\"You should go to...\" or \"I'd recommend...\" are natural and polite recommendation phrases."
    },
    {
      "id": "a2-st-q13",
      "type": "multiple-choice",
      "prompt": "Someone says \"That reminds me...\" in conversation. What is this phrase used for?",
      "options": [
        "To end the conversation",
        "To change to a related topic",
        "To correct a mistake",
        "To ask for help"
      ],
      "correctIndex": 1,
      "explanation": "\"That reminds me\" is a natural pivot to connect to a related topic without a sudden change."
    },
    {
      "id": "a2-st-q14",
      "type": "multiple-choice",
      "prompt": "Which response shows active listening during small talk?",
      "options": [
        "Saying nothing and looking away",
        "Saying \"Hmm\" and checking your phone",
        "Saying \"Oh really? That sounds amazing!\"",
        "Talking about yourself immediately"
      ],
      "correctIndex": 2,
      "explanation": "Short reactions like \"Oh really?\" and \"That sounds amazing!\" show you are listening and engaged."
    },
    {
      "id": "a2-st-q15",
      "type": "fill-in-blank",
      "prompt": "You want to ask someone about their free-time activities. Ask: \"What do you do _____ fun?\"",
      "answer": "for",
      "acceptedVariants": [
        "for"
      ],
      "explanation": "\"What do you do for fun?\" is a fixed expression. The preposition is always \"for\"."
    },
    {
      "id": "a2-st-q16",
      "type": "fill-in-blank",
      "prompt": "You want to show that something interests you. Say: \"That _____ really interesting!\"",
      "answer": "sounds",
      "acceptedVariants": [
        "sounds",
        "seems"
      ],
      "explanation": "\"That sounds really interesting!\" is a natural reaction. \"Sounds\" is used because you're responding to what they said."
    },
    {
      "id": "a2-st-q17",
      "type": "fill-in-blank",
      "prompt": "You want to change the topic. Say: \"By the _____, did you hear about the new mall opening?\"",
      "answer": "way",
      "acceptedVariants": [
        "way"
      ],
      "explanation": "\"By the way\" is a fixed phrase used to introduce a new topic in conversation."
    },
    {
      "id": "a2-st-q18",
      "type": "fill-in-blank",
      "prompt": "You don't know much about a topic someone raised. Say: \"I don't know much about that — _____ me more!\"",
      "answer": "tell",
      "acceptedVariants": [
        "tell"
      ],
      "explanation": "\"Tell me more!\" shows interest and invites the other person to keep talking."
    },
    {
      "id": "a2-st-q19",
      "type": "fill-in-blank",
      "prompt": "You and a new colleague want to meet for coffee. Suggest: \"We should _____ coffee sometime!\"",
      "answer": "grab",
      "acceptedVariants": [
        "grab",
        "get",
        "have"
      ],
      "explanation": "\"Grab coffee\" is casual and friendly. \"Get coffee\" and \"have coffee\" also work in this context."
    },
    {
      "id": "a2-st-q20",
      "type": "fill-in-blank",
      "prompt": "You want to ask what someone prefers. Ask: \"Do you _____ the mountains or the beach?\"",
      "answer": "prefer",
      "acceptedVariants": [
        "prefer",
        "like"
      ],
      "explanation": "\"Prefer\" asks about a general preference. It is commonly used in small talk for comparison questions."
    }
  ]
},
{
  "id": "a2-routine-quiz",
  "lessonId": "a2-daily-routine-01",
  "questions": [
    {
      "id": "a2-rout-q1",
      "type": "multiple-choice",
      "prompt": "Which sentence correctly uses a frequency adverb?",
      "options": [
        "I eat breakfast always.",
        "I always eat breakfast.",
        "Always I eat breakfast.",
        "I eat always breakfast."
      ],
      "correctIndex": 1,
      "explanation": "Frequency adverbs go BEFORE the main verb: \"I always eat breakfast.\" NOT after the verb or at the start of the sentence."
    },
    {
      "id": "a2-rout-q2",
      "type": "multiple-choice",
      "prompt": "\"She is often late for work.\" The frequency adverb is in the correct position because it comes:",
      "options": [
        "Before the verb \"is\"",
        "After the verb \"be\" (is)",
        "At the end of the sentence",
        "At the beginning"
      ],
      "correctIndex": 1,
      "explanation": "With the verb \"be\", the frequency adverb comes AFTER: \"She is often late.\" NOT \"She often is late.\""
    },
    {
      "id": "a2-rout-q3",
      "type": "multiple-choice",
      "prompt": "Which adverb means something happens about 80% of the time?",
      "options": [
        "sometimes",
        "rarely",
        "usually",
        "never"
      ],
      "correctIndex": 2,
      "explanation": "\"Usually\" implies something happens most of the time — roughly 80%. \"Sometimes\" is about 40%, \"rarely\" is about 10%."
    },
    {
      "id": "a2-rout-q4",
      "type": "multiple-choice",
      "prompt": "Which sentence is grammatically correct?",
      "options": [
        "He go to gym every morning.",
        "He goes to the gym every morning.",
        "He going to gym every morning.",
        "Every morning he go to gym."
      ],
      "correctIndex": 1,
      "explanation": "Third-person singular (he/she/it) needs -s/-es: \"He goes.\" Also \"the gym\" needs the article \"the\"."
    },
    {
      "id": "a2-rout-q5",
      "type": "multiple-choice",
      "prompt": "Nong says \"I rarely eat junk food.\" This means she eats junk food:",
      "options": [
        "Every day",
        "Most of the time",
        "Occasionally, but not often",
        "Never at all"
      ],
      "correctIndex": 2,
      "explanation": "\"Rarely\" means it happens only occasionally — not never. It's about 5-10% of the time."
    },
    {
      "id": "a2-rout-q6",
      "type": "multiple-choice",
      "prompt": "Which time expression means \"Monday to Friday\"?",
      "options": [
        "Every day",
        "At weekends",
        "On weekdays",
        "Each week"
      ],
      "correctIndex": 2,
      "explanation": "\"Weekdays\" refers specifically to Monday through Friday, the working days."
    },
    {
      "id": "a2-rout-q7",
      "type": "multiple-choice",
      "prompt": "Which describes a sequence of morning activities correctly?",
      "options": [
        "I brush teeth, then I wake up, then I shower.",
        "First I wake up. Then I shower. After that I have breakfast.",
        "I breakfast, then I wake, then I shower.",
        "After I sleep, I do everything."
      ],
      "correctIndex": 1,
      "explanation": "\"First... Then... After that...\" is a natural sequence using time connectors in the right logical order."
    },
    {
      "id": "a2-rout-q8",
      "type": "multiple-choice",
      "prompt": "Which sentence describes a habit in Simple Present correctly?",
      "options": [
        "I am commuting by train every day.",
        "I commute by train every day.",
        "I will commute by train every day.",
        "I commuted by train every day."
      ],
      "correctIndex": 1,
      "explanation": "Habits and routines use Simple Present: \"I commute.\" Not Present Continuous or Future."
    },
    {
      "id": "a2-rout-q9",
      "type": "multiple-choice",
      "prompt": "The traffic is very bad from 7-9 AM in Bangkok. What do we call this period?",
      "options": [
        "Dawn time",
        "Peak morning",
        "Rush hour",
        "Busy period"
      ],
      "correctIndex": 2,
      "explanation": "\"Rush hour\" is the specific term for peak commuting periods, typically 7-9 AM and 5-7 PM."
    },
    {
      "id": "a2-rout-q10",
      "type": "multiple-choice",
      "prompt": "Which sentence is in the wrong tense for describing a current routine?",
      "options": [
        "She usually starts work at nine.",
        "They always walk to school.",
        "He was waking up early every day.",
        "I sometimes skip lunch."
      ],
      "correctIndex": 2,
      "explanation": "\"Was waking up\" is Past Continuous, not Simple Present. Routines use \"wakes up\" or \"woke up\" (Past Simple for past habits)."
    },
    {
      "id": "a2-rout-q11",
      "type": "multiple-choice",
      "prompt": "\"I'm not a morning person.\" What does this expression mean?",
      "options": [
        "You work only in the morning",
        "You find it hard to wake up early and feel alert in the morning",
        "You don't like the morning news",
        "You sleep very deeply"
      ],
      "correctIndex": 1,
      "explanation": "\"Not a morning person\" means you struggle to feel awake and energetic early in the day."
    },
    {
      "id": "a2-rout-q12",
      "type": "multiple-choice",
      "prompt": "Which preposition is correct? \"I go running ___ the evening.\"",
      "options": [
        "on",
        "in",
        "at",
        "by"
      ],
      "correctIndex": 1,
      "explanation": "We say \"in the morning\", \"in the afternoon\", \"in the evening\". But \"at night\" — \"at\" is used with night."
    },
    {
      "id": "a2-rout-q13",
      "type": "multiple-choice",
      "prompt": "Which frequency adverb fits this sentence? \"I ___ miss my alarm — it only happened once.\"",
      "options": [
        "always",
        "usually",
        "rarely",
        "often"
      ],
      "correctIndex": 2,
      "explanation": "If something happened only once, \"rarely\" (almost never) fits. \"Always\" or \"often\" would be contradicted by \"only once\"."
    },
    {
      "id": "a2-rout-q14",
      "type": "multiple-choice",
      "prompt": "Somporn says \"I sometimes do errands after work.\" What are errands?",
      "options": [
        "Work meetings",
        "Small tasks like shopping, going to the bank, or picking up dry cleaning",
        "Sports activities",
        "Evening classes"
      ],
      "correctIndex": 1,
      "explanation": "Errands are short practical tasks you do outside your home — buying things, going to the pharmacy, paying bills, etc."
    },
    {
      "id": "a2-rout-q15",
      "type": "fill-in-blank",
      "prompt": "Complete the sentence with the correct verb form: \"My sister _____ (wake) up at six every morning.\"",
      "answer": "wakes up",
      "acceptedVariants": [
        "wakes up",
        "wakes"
      ],
      "explanation": "Third person singular (she/he/it) in Simple Present needs -s: \"wakes up\"."
    },
    {
      "id": "a2-rout-q16",
      "type": "fill-in-blank",
      "prompt": "Place the adverb correctly: \"I (usually) take the train to work.\" Write the full correct sentence.",
      "answer": "I usually take the train to work.",
      "acceptedVariants": [
        "I usually take the train to work.",
        "I usually take the train to work"
      ],
      "explanation": "Frequency adverb \"usually\" goes before the main verb \"take\": \"I usually take...\"."
    },
    {
      "id": "a2-rout-q17",
      "type": "fill-in-blank",
      "prompt": "Complete this sequence: \"First I shower. _____ I have breakfast. After that I leave for work.\"",
      "answer": "Then",
      "acceptedVariants": [
        "Then",
        "After that",
        "Next"
      ],
      "explanation": "\"Then\", \"Next\", and \"After that\" all work as sequence connectors."
    },
    {
      "id": "a2-rout-q18",
      "type": "fill-in-blank",
      "prompt": "Which preposition? \"I exercise _____ weekends.\"",
      "answer": "on",
      "acceptedVariants": [
        "on"
      ],
      "explanation": "We use \"on\" with specific days and weekends: \"on Monday\", \"on weekdays\", \"on weekends\"."
    },
    {
      "id": "a2-rout-q19",
      "type": "fill-in-blank",
      "prompt": "Complete: \"She _____ (never / eat) fast food. She cooks at home every day.\"",
      "answer": "never eats",
      "acceptedVariants": [
        "never eats",
        "never eats fast food"
      ],
      "explanation": "\"Never\" goes before the main verb: \"She never eats.\" Third person singular adds -s."
    },
    {
      "id": "a2-rout-q20",
      "type": "fill-in-blank",
      "prompt": "Your commute is by bus every day. Describe it: \"I _____ to work by bus every morning.\"",
      "answer": "commute",
      "acceptedVariants": [
        "commute",
        "travel",
        "go"
      ],
      "explanation": "\"Commute\" is the most precise word for a regular daily journey to work. \"Travel\" and \"go\" also work."
    }
  ]
},
{
  "id": "c1-idioms-quiz",
  "lessonId": "c1-idioms-01",
  "questions": [
    {
      "id": "c1-idioms-q01",
      "type": "multiple-choice",
      "prompt": "A colleague says, \"I think we've jumped the gun on this announcement.\" What does she mean?",
      "options": [
        "The announcement was made too late.",
        "The announcement was made prematurely.",
        "The announcement was made too loudly.",
        "The announcement was poorly written."
      ],
      "correctIndex": 1,
      "explanation": "\"Jump the gun\" means to act before the appropriate time. It comes from the starting pistol in races — a false start. Here, the announcement was made before it should have been."
    },
    {
      "id": "c1-idioms-q02",
      "type": "multiple-choice",
      "prompt": "Which sentence uses \"cost an arm and a leg\" correctly?",
      "options": [
        "The meeting cost an arm and a leg — it went on for three hours.",
        "That vintage watch cost an arm and a leg, but it's worth every penny.",
        "He cost an arm and a leg when he left the company.",
        "The plan cost an arm and a leg before we even started."
      ],
      "correctIndex": 1,
      "explanation": "\"Cost an arm and a leg\" means to be extremely expensive. It applies to objects or services with a high financial cost, not to meetings, people, or abstract plans."
    },
    {
      "id": "c1-idioms-q03",
      "type": "multiple-choice",
      "prompt": "In which context would \"burn your bridges\" be MOST appropriate?",
      "options": [
        "A friend asking why you quit your gym membership.",
        "Discussing the consequences of resigning from a job in a hostile manner.",
        "Describing why a construction project was abandoned.",
        "Explaining why a team meeting was cancelled."
      ],
      "correctIndex": 1,
      "explanation": "\"Burn your bridges\" means to permanently damage a relationship or destroy future opportunities by acting rashly. It is most relevant in professional or interpersonal contexts, like a hostile resignation."
    },
    {
      "id": "c1-idioms-q04",
      "type": "multiple-choice",
      "prompt": "What is the most natural register for using idioms like \"bite the bullet\" and \"pull it off\"?",
      "options": [
        "Formal written reports and academic papers.",
        "Legal contracts and official correspondence.",
        "Informal conversations and semi-formal spoken English.",
        "Technical documentation and instruction manuals."
      ],
      "correctIndex": 2,
      "explanation": "Most common English idioms are informal or semi-formal and work best in spoken conversation or casual written communication. They generally sound out of place in formal written or legal contexts."
    },
    {
      "id": "c1-idioms-q05",
      "type": "multiple-choice",
      "prompt": "Which idiom best describes a situation where someone accidentally revealed a surprise party?",
      "options": [
        "Hit the nail on the head",
        "Let the cat out of the bag",
        "Jump the gun",
        "Bite the bullet"
      ],
      "correctIndex": 1,
      "explanation": "\"Let the cat out of the bag\" specifically means to accidentally reveal a secret or surprise. The other options do not fit this meaning."
    },
    {
      "id": "c1-idioms-q06",
      "type": "multiple-choice",
      "prompt": "A manager says, \"Let's get everyone on the same page before we proceed.\" This means she wants to:",
      "options": [
        "Distribute the same document to all staff.",
        "Ensure everyone reads the same report.",
        "Make sure everyone has the same understanding and is aligned.",
        "Have everyone attend the same meeting."
      ],
      "correctIndex": 2,
      "explanation": "\"On the same page\" is a metaphorical idiom meaning that all parties share the same information, understanding, or agreement — not a literal reference to a document."
    },
    {
      "id": "c1-idioms-q07",
      "type": "multiple-choice",
      "prompt": "Which of the following sentences demonstrates correct use of the idiom \"see eye to eye\"?",
      "options": [
        "We always see eye to eye — we never disagree about anything.",
        "They don't see eye to eye on the budget, but they're working through it.",
        "She saw eye to eye the moment she put on her glasses.",
        "The committee sees eye to eye because they are all tall."
      ],
      "correctIndex": 1,
      "explanation": "\"See eye to eye\" means to agree or share the same view. It can be used positively (\"we see eye to eye\") or negatively (\"they don't see eye to eye\"). Options C and D are literal misreadings of the phrase."
    },
    {
      "id": "c1-idioms-q08",
      "type": "multiple-choice",
      "prompt": "What potential risk does overusing idioms create for a C1 English speaker?",
      "options": [
        "It makes speech too formal for professional settings.",
        "It signals that the speaker has a very large vocabulary.",
        "It can sound unnatural, forced, or even comical.",
        "It reduces the clarity of academic writing."
      ],
      "correctIndex": 2,
      "explanation": "Using too many idioms in close succession sounds unnatural — native speakers use idioms organically, not densely. Overuse signals that a speaker has memorised phrases rather than internalised them."
    },
    {
      "id": "c1-idioms-q09",
      "type": "multiple-choice",
      "prompt": "\"I only visit my hometown once in a blue moon.\" Which category does this idiom belong to?",
      "options": [
        "Body idioms",
        "Animal idioms",
        "Time idioms",
        "Success/failure idioms"
      ],
      "correctIndex": 2,
      "explanation": "\"Once in a blue moon\" means very rarely, making it a time idiom. Time idioms relate to frequency, duration, or urgency."
    },
    {
      "id": "c1-idioms-q10",
      "type": "multiple-choice",
      "prompt": "A project has failed and the team must redesign the entire approach from scratch. Which idiom best describes this?",
      "options": [
        "Bite the bullet",
        "Break the ice",
        "Go back to the drawing board",
        "Pull someone's leg"
      ],
      "correctIndex": 2,
      "explanation": "\"Go back to the drawing board\" specifically means to abandon a failed plan and start the design process again from the beginning. It originates from architectural and engineering drawing."
    },
    {
      "id": "c1-idioms-q11",
      "type": "multiple-choice",
      "prompt": "Which statement best explains why Thai learners may find English idioms particularly challenging?",
      "options": [
        "Thai has no idiomatic expressions whatsoever.",
        "Thai idioms are based on the same metaphors as English ones.",
        "English idioms have historical roots in trades and sports unfamiliar to Thai learners.",
        "Thai learners tend to have strong literal vocabulary but no metaphorical thinking."
      ],
      "correctIndex": 2,
      "explanation": "Many English idioms come from historical contexts — blacksmithing, military, horse racing, sailing — that are culturally distant for Thai learners. Thai also has idioms, but they are based on different cultural metaphors."
    },
    {
      "id": "c1-idioms-q12",
      "type": "multiple-choice",
      "prompt": "Which sentence contains a \"mixed metaphor\" — combining idioms illogically?",
      "options": [
        "We need to bite the bullet on this issue.",
        "Don't burn your bridges with your old contacts.",
        "We need to bite the bullet, go back to the drawing board, and stop jumping the gun.",
        "She's been burning the midnight oil on the new proposal."
      ],
      "correctIndex": 2,
      "explanation": "Option C chains three idioms in a single sentence. While each is individually correct, combining them makes the sentence stylistically clumsy and unnatural — this is a mixed metaphor problem."
    },
    {
      "id": "c1-idioms-q13",
      "type": "multiple-choice",
      "prompt": "Someone says, \"Don't worry — I was just pulling your leg.\" What do they mean?",
      "options": [
        "They were physically helping you walk.",
        "They were trying to deceive you seriously.",
        "They were joking and didn't mean what they said.",
        "They were giving you a massage."
      ],
      "correctIndex": 2,
      "explanation": "\"Pull someone's leg\" means to joke or tease someone — to say something untrue for humour without malicious intent. It has nothing to do with physical contact."
    },
    {
      "id": "c1-idioms-q14",
      "type": "multiple-choice",
      "prompt": "Which idiom would be most natural at the start of a formal presentation to relax the audience?",
      "options": [
        "Burn the midnight oil",
        "Break the ice",
        "Miss the boat",
        "Straight from the horse's mouth"
      ],
      "correctIndex": 1,
      "explanation": "\"Break the ice\" means to do something that helps people relax in a social or formal situation. It is commonly used to describe an opening activity or remark in presentations and meetings."
    },
    {
      "id": "c1-idioms-q15",
      "type": "fill-in-blank",
      "prompt": "The consultant's analysis was spot on — she really _____ the _____ on the head when she identified the cash flow problem.",
      "answer": "hit the nail",
      "acceptedVariants": [
        "hit the nail"
      ],
      "explanation": "\"Hit the nail on the head\" means to identify something exactly correctly. The full idiom is \"hit the nail on the head.\""
    },
    {
      "id": "c1-idioms-q16",
      "type": "fill-in-blank",
      "prompt": "We don't always _____ eye to _____ on strategy, but we respect each other's views.",
      "answer": "see / eye",
      "acceptedVariants": [
        "see eye to eye",
        "see / eye"
      ],
      "explanation": "\"See eye to eye\" means to agree or share the same viewpoint. The structure is fixed: see eye to eye."
    },
    {
      "id": "c1-idioms-q17",
      "type": "fill-in-blank",
      "prompt": "The renovation cost _____ arm and a leg, but the property value has doubled since.",
      "answer": "an",
      "acceptedVariants": [
        "an"
      ],
      "explanation": "The idiom is \"cost an arm and a leg.\" The article \"an\" is required before \"arm.\" The full phrase is fixed."
    },
    {
      "id": "c1-idioms-q18",
      "type": "fill-in-blank",
      "prompt": "After the product failed in testing, we had no choice but to go back to the _____ board.",
      "answer": "drawing",
      "acceptedVariants": [
        "drawing"
      ],
      "explanation": "\"Go back to the drawing board\" means to start from scratch after a failure. The word \"drawing\" completes the idiom."
    },
    {
      "id": "c1-idioms-q19",
      "type": "fill-in-blank",
      "prompt": "She announced the merger before it was approved — she really _____ the gun.",
      "answer": "jumped",
      "acceptedVariants": [
        "jumped",
        "jumped the gun"
      ],
      "explanation": "\"Jump the gun\" means to act prematurely. The past tense \"jumped\" is required here for grammatical consistency."
    },
    {
      "id": "c1-idioms-q20",
      "type": "fill-in-blank",
      "prompt": "I've been _____ the midnight oil all week trying to finish the annual report.",
      "answer": "burning",
      "acceptedVariants": [
        "burning"
      ],
      "explanation": "\"Burn the midnight oil\" means to work very late into the night. The present participle \"burning\" is required after \"been\" in this structure."
    }
  ]
},
{
  "id": "c1-negotiation-quiz",
  "lessonId": "c1-negotiation-01",
  "questions": [
    {
      "id": "c1-neg-q01",
      "type": "multiple-choice",
      "prompt": "In a negotiation, what does it mean to \"table\" a topic?",
      "options": [
        "To immediately resolve the topic.",
        "To set the topic aside temporarily and return to it later.",
        "To formally remove the topic from discussion permanently.",
        "To introduce a new topic that hasn't been discussed."
      ],
      "correctIndex": 1,
      "explanation": "In British English, \"to table\" means to set a topic aside for later discussion. (Note: in American English, \"table\" paradoxically means to bring something up for immediate discussion — a common source of confusion in international meetings.)"
    },
    {
      "id": "c1-neg-q02",
      "type": "multiple-choice",
      "prompt": "Which phrase best represents an anchoring strategy in negotiation?",
      "options": [
        "\"Let's hear your offer first before we share ours.\"",
        "\"We'd like to propose a starting price of 150,000, which reflects the full scope of the project.\"",
        "\"We're happy with whatever figure you suggest.\"",
        "\"Can we revisit the pricing later once we've agreed on terms?\""
      ],
      "correctIndex": 1,
      "explanation": "Anchoring means making the first, ambitious offer to influence the final settlement. Option B opens with a clear, high number and justifies it — a classic anchor. Option A defers the anchor to the other side, which weakens your position."
    },
    {
      "id": "c1-neg-q03",
      "type": "multiple-choice",
      "prompt": "A negotiator says, \"We're quite firm on the delivery date, but there's flexibility on the payment schedule.\" What technique is this?",
      "options": [
        "Deadlock handling",
        "Strategic concession — offering flexibility in one area to protect another",
        "Closing the deal",
        "Reframing the proposal"
      ],
      "correctIndex": 1,
      "explanation": "This is a strategic concession: the speaker signals that one issue is non-negotiable (delivery date) while deliberately offering movement in another area (payment) to keep the negotiation alive and create the appearance of flexibility."
    },
    {
      "id": "c1-neg-q04",
      "type": "multiple-choice",
      "prompt": "Which phrase most effectively handles a deadlock without ending the negotiation?",
      "options": [
        "\"It seems we're unable to agree. Perhaps we should end here.\"",
        "\"This is unacceptable. We need a much better offer.\"",
        "\"We seem to have reached an impasse on price. Can we discuss delivery terms first and return to pricing?\"",
        "\"We can't go any lower. That's our final answer.\""
      ],
      "correctIndex": 2,
      "explanation": "Option C de-escalates by acknowledging the stalemate without closing the door, and redirects to a different issue to rebuild momentum. Options A and D shut down the negotiation; B is unnecessarily confrontational."
    },
    {
      "id": "c1-neg-q05",
      "type": "multiple-choice",
      "prompt": "In a Thai cultural context, silence during a negotiation most likely indicates:",
      "options": [
        "Complete agreement with the proposal.",
        "Boredom or disengagement.",
        "Discomfort, hesitation, or an indirect \"no.\"",
        "A request for more time to calculate numbers."
      ],
      "correctIndex": 2,
      "explanation": "In Thai culture, silence is often an indirect way of expressing discomfort or disagreement without explicit confrontation. Misreading this as acceptance is a common error in cross-cultural negotiations."
    },
    {
      "id": "c1-neg-q06",
      "type": "multiple-choice",
      "prompt": "What does \"our bottom line\" refer to in a negotiation?",
      "options": [
        "The last item on the agenda.",
        "The minimum acceptable terms below which you will walk away.",
        "The final payment date agreed upon.",
        "A written summary of what was agreed."
      ],
      "correctIndex": 1,
      "explanation": "\"Bottom line\" in negotiations means the absolute minimum you will accept. If an offer falls below your bottom line, you walk away. It is not related to agendas, dates, or written summaries."
    },
    {
      "id": "c1-neg-q07",
      "type": "multiple-choice",
      "prompt": "Which phrase would you use to signal that you are prepared to end the negotiation if terms don't improve?",
      "options": [
        "\"We're very keen to finalise this agreement today.\"",
        "\"We appreciate your patience in this process.\"",
        "\"We're prepared to walk away if these terms don't change.\"",
        "\"We'd love to hear any counter-proposals you might have.\""
      ],
      "correctIndex": 2,
      "explanation": "Signalling your willingness to walk away is a powerful tactic that shifts leverage toward you. Option C does this directly. The others signal eagerness, which weakens your bargaining position."
    },
    {
      "id": "c1-neg-q08",
      "type": "multiple-choice",
      "prompt": "A negotiator says, \"We see this as the beginning of a long-term strategic partnership, not just a one-time contract.\" This is an example of:",
      "options": [
        "Deadlock resolution",
        "Closing language",
        "Reframing — shifting the perspective from transactional to relational",
        "A concession on price"
      ],
      "correctIndex": 2,
      "explanation": "Reframing changes the context within which a proposal is evaluated. By invoking \"long-term partnership,\" the speaker makes a single-contract negotiation feel like an investment, which can justify a higher price or better terms."
    },
    {
      "id": "c1-neg-q09",
      "type": "multiple-choice",
      "prompt": "Which of the following best demonstrates a well-constructed counter-offer?",
      "options": [
        "\"No, that doesn't work for us.\"",
        "\"We can't accept that. Please revise your proposal.\"",
        "\"I understand where you're coming from, but a six-month timeline isn't workable for us. Would nine months with phased delivery be acceptable?\"",
        "\"That sounds fine. Let's go with it.\""
      ],
      "correctIndex": 2,
      "explanation": "An effective counter-offer acknowledges the other side's position, explains why their term is problematic, and proposes a specific alternative. Option C does all three. Options A and B reject without offering an alternative; D is not a counter-offer at all."
    },
    {
      "id": "c1-neg-q10",
      "type": "multiple-choice",
      "prompt": "What does the phrase \"leverage\" mean in a negotiation context?",
      "options": [
        "The physical weight of a contract document.",
        "A bargaining advantage or power that one party holds over the other.",
        "The interest rate applied to deferred payments.",
        "A formal term for a compromise agreement."
      ],
      "correctIndex": 1,
      "explanation": "\"Leverage\" in negotiation refers to the degree of power or advantage a party has — for example, having multiple competing offers, a tight deadline, or being the only provider of a critical service."
    },
    {
      "id": "c1-neg-q11",
      "type": "multiple-choice",
      "prompt": "Why is explicitly confirming the agreed terms at the close of a negotiation important?",
      "options": [
        "It gives the speaker a chance to change the terms.",
        "It prevents misunderstandings by ensuring both parties have the same understanding of what was agreed.",
        "It signals that you trust the other party completely.",
        "It replaces the need for a written contract."
      ],
      "correctIndex": 1,
      "explanation": "Verbal confirmation of agreed terms prevents post-negotiation disputes. Even with written contracts to follow, an oral summary (\"So to confirm, we've agreed on X…\") ensures alignment before anyone leaves the room."
    },
    {
      "id": "c1-neg-q12",
      "type": "multiple-choice",
      "prompt": "You ask \"What if we were to extend the payment terms to 60 days — would that change things?\" This is best described as:",
      "options": [
        "Anchoring",
        "A conditional proposal that tests flexibility without fully committing",
        "A concession",
        "A closing statement"
      ],
      "correctIndex": 1,
      "explanation": "\"What if we were to…?\" is a conditional proposal. It tests whether a specific change would unlock movement without the speaker fully committing to that change. This preserves flexibility while gathering information."
    },
    {
      "id": "c1-neg-q13",
      "type": "multiple-choice",
      "prompt": "Which phrase is most appropriate to open a formal business negotiation?",
      "options": [
        "\"Let's cut to the chase — what's your best price?\"",
        "\"I appreciate you making the time. Shall we start by outlining each side's priorities?\"",
        "\"We already know what we want, so let's get started.\"",
        "\"You've seen our proposal. Do you accept it?\""
      ],
      "correctIndex": 1,
      "explanation": "Opening a negotiation professionally involves rapport building and agenda setting. Option B does both. Option A is too aggressive; C and D skip rapport entirely and risk creating an adversarial atmosphere from the start."
    },
    {
      "id": "c1-neg-q14",
      "type": "multiple-choice",
      "prompt": "What is a \"mutual benefit\" argument, and when is it most effective?",
      "options": [
        "An argument that one party benefits significantly more than the other.",
        "A framing technique that presents a deal as advantageous to both sides, reducing resistance.",
        "A legal clause protecting both parties from liability.",
        "A financial incentive offered only to the stronger party."
      ],
      "correctIndex": 1,
      "explanation": "Framing a deal as mutually beneficial reduces defensiveness and makes the other party more receptive. It is most effective when the speaker can show genuine reciprocal value, not merely claim it."
    },
    {
      "id": "c1-neg-q15",
      "type": "fill-in-blank",
      "prompt": "We're willing to make a _____ on the timeline if you can meet us on the budget.",
      "answer": "concession",
      "acceptedVariants": [
        "concession"
      ],
      "explanation": "A \"concession\" is something you give up in exchange for something from the other side. It is the standard term for flexible compromise in negotiation language."
    },
    {
      "id": "c1-neg-q16",
      "type": "fill-in-blank",
      "prompt": "It seems we've reached a _____. Can we set this issue aside and come back to it after we discuss the other terms?",
      "answer": "deadlock",
      "acceptedVariants": [
        "deadlock",
        "impasse"
      ],
      "explanation": "A \"deadlock\" (or \"impasse\") is a point in a negotiation where neither side will move and progress has stalled. Both terms are accepted in formal negotiations."
    },
    {
      "id": "c1-neg-q17",
      "type": "fill-in-blank",
      "prompt": "Our _____ line is a 20% margin. We cannot go below that and remain profitable.",
      "answer": "bottom",
      "acceptedVariants": [
        "bottom"
      ],
      "explanation": "\"Bottom line\" is the minimum acceptable outcome in a negotiation. It refers to the point below which you will walk away."
    },
    {
      "id": "c1-neg-q18",
      "type": "fill-in-blank",
      "prompt": "We submitted a _____ offer after their initial proposal was too high for our budget.",
      "answer": "counter",
      "acceptedVariants": [
        "counter",
        "counter-"
      ],
      "explanation": "A \"counter-offer\" (or \"counteroffer\") is a response to a proposal that suggests different terms. It keeps the negotiation alive rather than simply rejecting."
    },
    {
      "id": "c1-neg-q19",
      "type": "fill-in-blank",
      "prompt": "If you can commit to a three-year agreement, we can offer a significant _____ to reward your long-term commitment.",
      "answer": "incentive",
      "acceptedVariants": [
        "incentive",
        "discount"
      ],
      "explanation": "An \"incentive\" is something offered to encourage a specific action or commitment. In negotiations, incentives are often used to sweeten an offer or reward a concession."
    },
    {
      "id": "c1-neg-q20",
      "type": "fill-in-blank",
      "prompt": "The contract _____ that all deliverables must be reviewed and approved before any payment is released.",
      "answer": "stipulates",
      "acceptedVariants": [
        "stipulates",
        "stipulated"
      ],
      "explanation": "\"Stipulate\" means to specify a condition or requirement explicitly as part of an agreement. It is commonly used in formal contract and negotiation language."
    }
  ]
},
{
  "id": "c1-opinions-quiz",
  "lessonId": "c1-opinions-01",
  "questions": [
    {
      "id": "c1-opin-q01",
      "type": "multiple-choice",
      "prompt": "Which phrase most clearly signals a tentative opinion rather than a strong assertion?",
      "options": [
        "\"This is unquestionably the correct approach.\"",
        "\"It seems to me that the evidence points in a different direction.\"",
        "\"Everyone in the industry agrees on this point.\"",
        "\"The data conclusively proves that this strategy works.\""
      ],
      "correctIndex": 1,
      "explanation": "Tentative language uses hedges like \"it seems to me,\" \"I tend to think,\" \"my inclination would be\" to signal that the speaker holds a view without claiming absolute certainty. Options A, C, and D all express certainty or appeal to authority."
    },
    {
      "id": "c1-opin-q02",
      "type": "multiple-choice",
      "prompt": "A debater says, \"While it is true that the policy reduced costs initially, the long-term implications are considerably more complex.\" What technique is this?",
      "options": [
        "Anchoring",
        "Reframing",
        "Conceding a point before presenting a counterargument",
        "Appealing to emotion"
      ],
      "correctIndex": 2,
      "explanation": "The phrase \"while it is true that…\" is a classic academic concession structure — it acknowledges a valid point before introducing a \"but\" or qualification. This strengthens credibility and makes the counterargument more persuasive."
    },
    {
      "id": "c1-opin-q03",
      "type": "multiple-choice",
      "prompt": "Which phrase would be MOST appropriate in a formal academic seminar to disagree with a professor's position?",
      "options": [
        "\"That's totally wrong, if you ask me.\"",
        "\"I think you're missing the point.\"",
        "\"With respect, I'd take issue with that premise — the data from the 2019 study suggests otherwise.\"",
        "\"I don't really agree, but whatever.\""
      ],
      "correctIndex": 2,
      "explanation": "In academic contexts, disagreement must be polite, reasoned, and evidence-based. Option C acknowledges the professor respectfully (\"with respect\"), states a position (\"take issue\"), and grounds it in evidence. The other options are too casual or dismissive."
    },
    {
      "id": "c1-opin-q04",
      "type": "multiple-choice",
      "prompt": "Why do Thai learners sometimes appear to agree in English discussions when they do not actually agree?",
      "options": [
        "Thai people generally dislike forming opinions.",
        "Thai culture values harmony and face, making direct disagreement uncomfortable.",
        "Thai learners haven't studied English opinion vocabulary.",
        "Thai is a language that has no way of expressing disagreement."
      ],
      "correctIndex": 1,
      "explanation": "The Thai cultural value of maintaining face (รักษาหน้า) and social harmony means that direct disagreement can feel confrontational or disrespectful. This cultural habit transfers to English communication, where silence or vague agreement may be misread."
    },
    {
      "id": "c1-opin-q05",
      "type": "multiple-choice",
      "prompt": "\"Building on what Sara just said, I think there's also a regulatory dimension we haven't considered.\" This phrase functions to:",
      "options": [
        "Contradict Sara's point.",
        "Acknowledge Sara's contribution while extending the discussion.",
        "Summarise the entire discussion so far.",
        "Change the subject away from Sara's point."
      ],
      "correctIndex": 1,
      "explanation": "\"Building on what [person] said\" is a collaborative discourse marker. It credits the previous speaker and signals that your point extends or adds to theirs rather than contradicting — a key skill in collaborative academic and professional discussions."
    },
    {
      "id": "c1-opin-q06",
      "type": "multiple-choice",
      "prompt": "In which context is hedging language MOST important?",
      "options": [
        "Giving an emergency instruction that must be followed immediately.",
        "Making a claim in an academic paper where you are presenting evidence-based, provisional conclusions.",
        "Giving a direct order in a military context.",
        "Writing a product description for an e-commerce website."
      ],
      "correctIndex": 1,
      "explanation": "Academic writing relies heavily on hedging because knowledge claims are provisional and evidence-dependent. Phrases like \"the data suggest,\" \"it could be argued,\" \"this appears to indicate\" are standard academic hedges."
    },
    {
      "id": "c1-opin-q07",
      "type": "multiple-choice",
      "prompt": "Which statement represents a partial agreement most accurately?",
      "options": [
        "\"I completely disagree with everything you've said.\"",
        "\"Yes, that's exactly right.\"",
        "\"I'm largely with you on the environmental angle, but the economic data complicates things.\"",
        "\"I'm not sure what you mean.\""
      ],
      "correctIndex": 2,
      "explanation": "Partial agreement acknowledges validity in the other person's point (\"largely with you\") while introducing a qualification or complication. It avoids the extremes of full agreement and full rejection."
    },
    {
      "id": "c1-opin-q08",
      "type": "multiple-choice",
      "prompt": "What does it mean to \"rebut\" an argument?",
      "options": [
        "To rephrase an argument in simpler terms.",
        "To present a counter-argument that disproves or challenges a previous claim.",
        "To agree with an argument enthusiastically.",
        "To postpone responding to an argument until later."
      ],
      "correctIndex": 1,
      "explanation": "\"Rebut\" means to provide counter-evidence or counter-reasoning that challenges a claim. It is stronger than simply disagreeing — it involves active argumentation against the other position."
    },
    {
      "id": "c1-opin-q09",
      "type": "multiple-choice",
      "prompt": "Which word best completes this sentence? \"Her argument was _____ — I found it very difficult to find a flaw in her reasoning.\"",
      "options": [
        "tentative",
        "hedged",
        "compelling",
        "rhetorical"
      ],
      "correctIndex": 2,
      "explanation": "\"Compelling\" means persuasive and powerful — difficult to argue against. \"Tentative\" and \"hedged\" suggest uncertainty, which is the opposite. \"Rhetorical\" means relating to rhetoric, but doesn't carry the same sense of difficulty to rebut."
    },
    {
      "id": "c1-opin-q10",
      "type": "multiple-choice",
      "prompt": "What is the function of the phrase \"with respect\" when preceding a disagreement?",
      "options": [
        "To emphasise that you deeply respect the person and will not disagree.",
        "To signal that a polite but potentially unwelcome disagreement is about to follow.",
        "To ask for the other person's permission to speak.",
        "To indicate that you agree with everything they said."
      ],
      "correctIndex": 1,
      "explanation": "\"With respect\" (or \"with all due respect\") is a conventional politeness marker that prepares the listener for a disagreement. It softens the impact without removing the substance of the challenge."
    },
    {
      "id": "c1-opin-q11",
      "type": "multiple-choice",
      "prompt": "In an academic essay, which phrase would be INAPPROPRIATE for expressing a claim?",
      "options": [
        "\"It could be argued that…\"",
        "\"The evidence suggests that…\"",
        "\"This is 100% proved by the data.\"",
        "\"There is reason to believe that…\""
      ],
      "correctIndex": 2,
      "explanation": "Academic writing requires epistemic humility — the acknowledgement that evidence supports but rarely proves absolutely. \"100% proved\" is not appropriate academic language and signals poor critical thinking."
    },
    {
      "id": "c1-opin-q12",
      "type": "multiple-choice",
      "prompt": "What does it mean to \"substantiate\" a claim?",
      "options": [
        "To make a claim in public.",
        "To support a claim with evidence, examples, or reasoning.",
        "To withdraw a claim politely.",
        "To simplify a complex claim for a general audience."
      ],
      "correctIndex": 1,
      "explanation": "\"Substantiate\" means to back up or prove a claim with supporting material — data, examples, references, or logical reasoning. It is the opposite of making an unsubstantiated assertion."
    },
    {
      "id": "c1-opin-q13",
      "type": "multiple-choice",
      "prompt": "Which phrase would most naturally follow \"That's a compelling point…\" in a diplomatic disagreement?",
      "options": [
        "\"…so I have nothing to add.\"",
        "\"…and I'm afraid it's completely wrong.\"",
        "\"…but I'm not sure it accounts for the recent changes in legislation.\"",
        "\"…and I've already made a note of it.\""
      ],
      "correctIndex": 2,
      "explanation": "After acknowledging a compelling point, the most effective diplomatic disagreement introduces a specific, reasoned qualification. Option C concedes the strength of the argument and then narrows the challenge to a specific gap."
    },
    {
      "id": "c1-opin-q14",
      "type": "multiple-choice",
      "prompt": "What distinguishes \"asserting\" an opinion from \"hedging\" one?",
      "options": [
        "Assertions are always wrong; hedged opinions are always correct.",
        "Assertions present a view as certain fact; hedged opinions signal uncertainty or provisionality.",
        "Assertions are used in casual speech; hedged opinions are used in academic writing only.",
        "Hedging means you are lying; asserting means you are telling the truth."
      ],
      "correctIndex": 1,
      "explanation": "An assertion is a confident, direct claim (\"This policy is wrong\"). A hedged opinion signals that the claim is provisional or based on incomplete knowledge (\"It seems to me that this policy may be problematic\"). Both are valid in different contexts."
    },
    {
      "id": "c1-opin-q15",
      "type": "fill-in-blank",
      "prompt": "I see _____ point, but I'd argue that the implementation challenges outweigh the theoretical benefits.",
      "answer": "your",
      "acceptedVariants": [
        "your"
      ],
      "explanation": "\"I see your point\" is a standard phrase for acknowledging someone's argument before introducing a disagreement. \"Your\" is the correct possessive pronoun here."
    },
    {
      "id": "c1-opin-q16",
      "type": "fill-in-blank",
      "prompt": "Her argument lacks a solid _____. Without a clear foundational claim, the rest of the reasoning doesn't hold up.",
      "answer": "premise",
      "acceptedVariants": [
        "premise"
      ],
      "explanation": "A \"premise\" is the foundational assumption or starting point of an argument. If the premise is weak or false, the entire argument can be challenged."
    },
    {
      "id": "c1-opin-q17",
      "type": "fill-in-blank",
      "prompt": "I _____ that the timeline is too ambitious — let me explain my reasoning.",
      "answer": "would argue",
      "acceptedVariants": [
        "would argue",
        "tend to think",
        "contend"
      ],
      "explanation": "\"I would argue\" is a classic hedging phrase for introducing a personal position with appropriate tentativeness. \"I tend to think\" and \"I contend\" are also natural alternatives."
    },
    {
      "id": "c1-opin-q18",
      "type": "fill-in-blank",
      "prompt": "You raise a fair point. _____ on that, I think we also need to examine the long-term costs.",
      "answer": "Building",
      "acceptedVariants": [
        "Building",
        "Building on that"
      ],
      "explanation": "\"Building on that\" is a discourse marker that adds to a previous point rather than contradicting it. It signals collaborative thinking."
    },
    {
      "id": "c1-opin-q19",
      "type": "fill-in-blank",
      "prompt": "While the proposal has _____, I believe the risks outweigh the potential gains.",
      "answer": "merit",
      "acceptedVariants": [
        "merit",
        "merits",
        "some merit"
      ],
      "explanation": "\"While the proposal has merit\" is a concession structure — it acknowledges value in the other position before introducing a rebuttal. \"Merits\" and \"some merit\" are equally natural."
    },
    {
      "id": "c1-opin-q20",
      "type": "fill-in-blank",
      "prompt": "I'm _____ with you on the financial analysis, but the social impact data tells a very different story.",
      "answer": "largely in agreement",
      "acceptedVariants": [
        "largely in agreement",
        "largely with you",
        "broadly in agreement"
      ],
      "explanation": "\"Largely in agreement\" or \"largely with you\" signals partial agreement — you accept most of someone's position while qualifying or challenging part of it."
    }
  ]
},
{
  "id": "c1-emergency-quiz",
  "lessonId": "c1-emergency-01",
  "questions": [
    {
      "id": "c1-emrg-q01",
      "type": "multiple-choice",
      "prompt": "What does the \"A\" in the IPAD emergency communication framework stand for?",
      "options": [
        "Action",
        "Ambulance",
        "Address",
        "Assessment"
      ],
      "correctIndex": 2,
      "explanation": "In the IPAD framework: I = Incident, P = People, A = Address, D = Details. Giving a clear, precise address is critical because emergency services cannot help you if they cannot find you."
    },
    {
      "id": "c1-emrg-q02",
      "type": "multiple-choice",
      "prompt": "You are calling 999 in the UK. The dispatcher asks \"Which service do you require?\" Which answer is correct?",
      "options": [
        "\"I need help.\"",
        "\"Ambulance, please — someone has collapsed.\"",
        "\"I don't know — what do you have?\"",
        "\"Call the police, fire, and ambulance.\""
      ],
      "correctIndex": 1,
      "explanation": "Emergency dispatchers in the UK need to route your call immediately. You should state the service (police / fire / ambulance) and briefly describe the emergency. Option B gives both pieces of information concisely."
    },
    {
      "id": "c1-emrg-q03",
      "type": "multiple-choice",
      "prompt": "A colleague is unconscious at work. Which description is most useful to an emergency dispatcher?",
      "options": [
        "\"Someone is ill and needs help soon.\"",
        "\"A 40-year-old man has collapsed in our office — he's breathing but unresponsive.\"",
        "\"There is a problem here and we don't know what to do.\"",
        "\"Please come to our company.\""
      ],
      "correctIndex": 1,
      "explanation": "Effective emergency descriptions are specific: they include the approximate age, condition (collapsed, unresponsive), and vital signs (breathing). Vague descriptions like \"someone is ill\" delay the dispatcher's ability to send the right resources."
    },
    {
      "id": "c1-emrg-q04",
      "type": "multiple-choice",
      "prompt": "What does \"triage\" mean in a medical emergency context?",
      "options": [
        "Administering first aid to a patient.",
        "Sorting and prioritising casualties based on the urgency of their condition.",
        "Transporting patients to hospital.",
        "Calling for additional emergency resources."
      ],
      "correctIndex": 1,
      "explanation": "Triage (from French \"to sort\") is the process of prioritising multiple casualties according to the severity of their injuries or conditions, so that limited medical resources are allocated to those who need them most urgently."
    },
    {
      "id": "c1-emrg-q05",
      "type": "multiple-choice",
      "prompt": "Why do language experts suggest speaking slowly when calling emergency services in a second language?",
      "options": [
        "Dispatchers cannot understand fast speech in any language.",
        "It reduces the chance of mispronouncing numbers or addresses and helps prevent misunderstanding.",
        "Emergency lines have poor audio quality that distorts fast speech.",
        "Slow speech signals to the dispatcher that the caller is calm."
      ],
      "correctIndex": 1,
      "explanation": "Speaking slowly in an emergency call reduces the risk of critical errors — wrong addresses, misheard numbers, unclear medical symptoms. Dispatchers are trained to handle slow, careful speech; they are not helped by rushed, garbled information."
    },
    {
      "id": "c1-emrg-q06",
      "type": "multiple-choice",
      "prompt": "What is the emergency number used across most European Union countries?",
      "options": [
        "999",
        "911",
        "112",
        "1669"
      ],
      "correctIndex": 2,
      "explanation": "112 is the standard emergency number across the European Union and many other countries globally. 999 is the UK number, 911 is the North American number, and 1669 is the ambulance number in Thailand."
    },
    {
      "id": "c1-emrg-q07",
      "type": "multiple-choice",
      "prompt": "\"The patient's condition is deteriorating rapidly.\" What does \"deteriorating\" mean here?",
      "options": [
        "Improving slowly.",
        "Remaining stable.",
        "Getting worse.",
        "Becoming difficult to assess."
      ],
      "correctIndex": 2,
      "explanation": "\"Deteriorate\" means to become progressively worse. In medical contexts, a deteriorating patient requires increasingly urgent intervention."
    },
    {
      "id": "c1-emrg-q08",
      "type": "multiple-choice",
      "prompt": "You have been robbed of your bag on the street. When reporting to police, which information is LEAST immediately relevant?",
      "options": [
        "The location where the theft occurred.",
        "A physical description of the suspect.",
        "What was inside the bag.",
        "The brand and age of the bag itself."
      ],
      "correctIndex": 3,
      "explanation": "When reporting a theft, the most critical initial information is location, description of the suspect, and what was taken (for insurance and investigation purposes). The brand and age of the bag are far less relevant to the investigation."
    },
    {
      "id": "c1-emrg-q09",
      "type": "multiple-choice",
      "prompt": "In a workplace crisis, you are told to \"proceed to the assembly point.\" This means you should:",
      "options": [
        "Go to your manager's office immediately.",
        "Gather staff from different departments.",
        "Go to the pre-designated meeting point outside the building.",
        "Stay at your desk and wait for further instructions."
      ],
      "correctIndex": 2,
      "explanation": "An \"assembly point\" is a pre-designated safe location outside a building where staff gather during evacuations. It allows emergency services to account for everyone and prevents people from re-entering a dangerous building."
    },
    {
      "id": "c1-emrg-q10",
      "type": "multiple-choice",
      "prompt": "Which phrase communicates urgency most effectively in an emergency situation?",
      "options": [
        "\"When you get a moment, could you send someone over?\"",
        "\"Please send assistance at your earliest convenience.\"",
        "\"The situation is critical — please dispatch someone immediately.\"",
        "\"I was wondering if maybe you could help us sometime soon.\""
      ],
      "correctIndex": 2,
      "explanation": "Emergency communication must be direct and urgent. \"Critical\" and \"immediately\" signal life-threatening urgency. The other options are inappropriately hedged and polite for an emergency context."
    },
    {
      "id": "c1-emrg-q11",
      "type": "multiple-choice",
      "prompt": "What does \"dispatch\" mean when an emergency dispatcher says \"I'm dispatching a unit to your location now\"?",
      "options": [
        "Sending emergency responders to your location.",
        "Recording your call for review.",
        "Connecting your call to a second dispatcher.",
        "Confirming your address in the system."
      ],
      "correctIndex": 0,
      "explanation": "\"Dispatch\" means to send out an emergency unit (ambulance, police car, fire engine) to a location. A \"dispatcher\" is the person who coordinates and sends these units."
    },
    {
      "id": "c1-emrg-q12",
      "type": "multiple-choice",
      "prompt": "Why is practising emergency phrases before you need them particularly important for non-native speakers?",
      "options": [
        "Because emergency services charge extra for non-native speaker calls.",
        "Because the brain reverts to the dominant language under extreme stress, making rehearsed phrases more accessible.",
        "Because emergency services only speak formal English.",
        "Because non-native speakers are more likely to be involved in emergencies."
      ],
      "correctIndex": 1,
      "explanation": "Under acute stress, the brain reduces access to less-practised language. Pre-rehearsed phrases and frameworks (like IPAD) are more likely to remain accessible under pressure because they have been stored in long-term memory through repetition."
    },
    {
      "id": "c1-emrg-q13",
      "type": "multiple-choice",
      "prompt": "What should you do if you are struggling to communicate in English with an emergency dispatcher?",
      "options": [
        "Hang up and call back later when you feel calmer.",
        "Say \"My English is limited — please speak slowly\" and try to use key words.",
        "Switch entirely to Thai and hope the dispatcher understands.",
        "Pass the phone to someone nearby without explaining the situation."
      ],
      "correctIndex": 1,
      "explanation": "Emergency dispatchers are trained to assist callers with language difficulties. Saying \"my English is limited\" gives the dispatcher critical context to slow down, ask yes/no questions, and extract information with patience."
    },
    {
      "id": "c1-emrg-q14",
      "type": "multiple-choice",
      "prompt": "\"She's going into anaphylactic shock.\" This phrase indicates that:",
      "options": [
        "She is having a panic attack.",
        "She is experiencing a severe, life-threatening allergic reaction.",
        "She has been in a road accident.",
        "She is showing signs of a stroke."
      ],
      "correctIndex": 1,
      "explanation": "Anaphylactic shock (anaphylaxis) is a severe, rapid-onset allergic reaction that can be fatal without immediate treatment (usually epinephrine/adrenaline). Recognising and naming this condition is critical in a medical emergency."
    },
    {
      "id": "c1-emrg-q15",
      "type": "fill-in-blank",
      "prompt": "Please _____ the building immediately via the nearest fire exit — this is not a drill.",
      "answer": "evacuate",
      "acceptedVariants": [
        "evacuate"
      ],
      "explanation": "\"Evacuate\" means to leave a place urgently and in an organised manner due to a dangerous situation. It is a core word in emergency and crisis communication."
    },
    {
      "id": "c1-emrg-q16",
      "type": "fill-in-blank",
      "prompt": "The paramedic began to _____ the patient after he stopped breathing.",
      "answer": "resuscitate",
      "acceptedVariants": [
        "resuscitate"
      ],
      "explanation": "\"Resuscitate\" means to revive someone from unconsciousness or apparent death, typically using CPR or other medical interventions. It is the core verb in cardiac arrest situations."
    },
    {
      "id": "c1-emrg-q17",
      "type": "fill-in-blank",
      "prompt": "There are three _____ — two with minor injuries and one in a critical condition.",
      "answer": "casualties",
      "acceptedVariants": [
        "casualties"
      ],
      "explanation": "\"Casualties\" refers to people injured or killed in an accident or emergency. It is the standard term used by emergency services and crisis communicators."
    },
    {
      "id": "c1-emrg-q18",
      "type": "fill-in-blank",
      "prompt": "Please _____ the hospital immediately — the patient is on her way and they need to prepare.",
      "answer": "notify",
      "acceptedVariants": [
        "notify",
        "contact",
        "alert"
      ],
      "explanation": "\"Notify\" means to formally inform someone of something important, especially in a time-sensitive situation. \"Alert\" and \"contact\" are also natural alternatives in this context."
    },
    {
      "id": "c1-emrg-q19",
      "type": "fill-in-blank",
      "prompt": "The first _____ on scene were able to stabilise the patient before the ambulance arrived.",
      "answer": "responders",
      "acceptedVariants": [
        "responders"
      ],
      "explanation": "\"First responders\" are the first trained personnel to arrive at an emergency — typically police, firefighters, or paramedics, and sometimes trained bystanders. The term is widely used in emergency communication."
    },
    {
      "id": "c1-emrg-q20",
      "type": "fill-in-blank",
      "prompt": "The nurse asked a bystander to _____ pressure to the wound while she prepared the dressing.",
      "answer": "apply",
      "acceptedVariants": [
        "apply",
        "administer"
      ],
      "explanation": "In first-aid contexts, \"apply pressure\" is the standard phrase for pressing on a wound to reduce bleeding. \"Administer\" is slightly more formal and typically used for medication or treatments rather than physical pressure."
    }
  ]
},

  // ── A2 Quizzes ───────────────────────────────────────────────────────
  {
    id: 'a2-shopping-quiz',
    lessonId: 'a2-shopping-01',
    title: 'Shopping English Check',
    questions: [
      { id: 'sh-q1', type: 'multiple-choice', prompt: 'You want to know the price of a jacket. What do you say?', options: ['What is the jacket?', 'How much does this cost?', 'Give me the price.', 'How many is this?'], correctIndex: 1, explanation: '"How much does this cost?" or "How much is this?" are the natural ways to ask for a price in English.' },
      { id: 'sh-q2', type: 'multiple-choice', prompt: 'You want to try on a shirt before buying it. What do you ask?', options: ['Can I wear this shirt?', 'Where is the changing?', 'Can I try this on, please?', 'I want to test this.'], correctIndex: 2, explanation: '"Can I try this on?" is the standard phrase. "Fitting room" or "changing room" is the place you go.' },
      { id: 'sh-q3', type: 'fill-in-blank', prompt: 'You\'re just looking around with no plan to buy. You say: "I\'m just _____, thanks."', answer: 'browsing', acceptedVariants: ['browsing', 'looking'], explanation: '"Just browsing" tells the shop assistant you don\'t need help right now. "Just looking" is also very common and natural.' },
      { id: 'sh-q4', type: 'multiple-choice', prompt: 'The shirt doesn\'t fit. You want a different size. What do you say?', options: ['I want to change this shirt.', 'Do you have this in a larger size?', 'This shirt is wrong size.', 'Give me a bigger one.'], correctIndex: 1, explanation: '"Do you have this in a different/larger/smaller size?" is the polite, natural way to ask for another size.' },
      { id: 'sh-q5', type: 'sentence-scramble', prompt: 'Arrange these words to ask for a receipt:', words: ['Could', 'I', 'have', 'a', 'receipt', ',', 'please', '?'], explanation: '"Could I have a receipt, please?" is polite and natural. You can also say "Can I get a receipt?"' },
      { id: 'sh-q6', type: 'multiple-choice', prompt: 'You bought something but it\'s broken. You want your money back. You ask for a…', options: ['discount', 'bargain', 'refund', 'exchange'], correctIndex: 2, explanation: 'A "refund" is when you get your money back. An "exchange" is when you swap for a different item. A "discount" is a price reduction.' },
      { id: 'sh-q7', type: 'word-matching', prompt: 'Match the shopping word to its meaning:', pairs: [{ left: 'receipt', right: 'proof of purchase' }, { left: 'bargain', right: 'great deal' }, { left: 'checkout', right: 'payment counter' }, { left: 'fitting room', right: 'try clothes on' }] },
      { id: 'sh-q8', type: 'fill-in-blank', prompt: 'You want to pay with your card: "Do you _____ credit cards?"', answer: 'accept', acceptedVariants: ['accept', 'take'], explanation: '"Do you accept credit cards?" or "Do you take cards?" are both natural. Never say "Do you have credit cards?"' },
      { id: 'sh-q9', type: 'multiple-choice', prompt: 'Which phrase means the shop is offering a lower price than usual?', options: ['It\'s a fitting room', 'It\'s on sale / on offer', 'It\'s a checkout', 'It\'s a receipt'], correctIndex: 1, explanation: '"On sale" (American English) and "on offer" (British English) both mean the item is being sold at a reduced price.' },
      { id: 'sh-q10', type: 'multiple-choice', prompt: 'You decide not to buy something. Which phrase is correct?', options: ['I\'ll leave it, thanks.', 'I don\'t buy this.', 'No this item.', 'I am not wanting.'], correctIndex: 0, explanation: '"I\'ll leave it" means you\'ve decided not to buy. You can also say "I\'ll pass" or "I\'ll give it a miss."' }
    ]
  },
  {
    id: 'a2-restaurant-quiz',
    lessonId: 'a2-restaurant-01',
    title: 'Restaurant English Check',
    questions: [
      { id: 'rs-q1', type: 'multiple-choice', prompt: 'You arrive at a restaurant with no reservation. What do you say first?', options: ['Give me a table.', 'Do you have a table for two, please?', 'I want to eat here.', 'Two people table.'], correctIndex: 1, explanation: '"Do you have a table for two?" or "A table for two, please" are the natural openers when arriving at a restaurant.' },
      { id: 'rs-q2', type: 'fill-in-blank', prompt: 'You want the waiter\'s suggestion: "What do you _____?"', answer: 'recommend', acceptedVariants: ['recommend', 'suggest'], explanation: '"What do you recommend?" is the most common and natural way to ask a waiter for their suggestion.' },
      { id: 'rs-q3', type: 'multiple-choice', prompt: 'You\'re ready to order your main dish. What do you say?', options: ['I want the pasta.', 'Give me pasta.', 'I\'ll have the pasta, please.', 'Pasta for me.'], correctIndex: 2, explanation: '"I\'ll have the…" is the most natural, polite way to order food. "I\'d like the…" also works perfectly.' },
      { id: 'rs-q4', type: 'word-matching', prompt: 'Match the restaurant term to its meaning:', pairs: [{ left: 'starter', right: 'first course / appetiser' }, { left: 'bill', right: 'payment request' }, { left: 'specials', right: 'today\'s extra dishes' }, { left: 'tip', right: 'extra money for service' }] },
      { id: 'rs-q5', type: 'fill-in-blank', prompt: 'At the end of the meal: "Could we have the _____, please?"', answer: 'bill', acceptedVariants: ['bill', 'check'], explanation: 'In British English: "the bill". In American English: "the check". Both are correct — use "bill" in the UK and "check" in the US.' },
      { id: 'rs-q6', type: 'multiple-choice', prompt: 'You don\'t eat meat. How do you tell the waiter?', options: ['I hate meat.', 'No meat for me.', 'I\'m vegetarian — do you have options for me?', 'Meat is bad.'], correctIndex: 2, explanation: 'Say "I\'m vegetarian / vegan" or "I don\'t eat meat" then ask about options. Always polite and clear.' },
      { id: 'rs-q7', type: 'sentence-scramble', prompt: 'Order water politely:', words: ['Could', 'I', 'have', 'some', 'still', 'water', ',', 'please', '?'], explanation: '"Could I have some still water, please?" — "still" means not fizzy. "Sparkling" means carbonated.' },
      { id: 'rs-q8', type: 'multiple-choice', prompt: 'You want to pay separately from your friend. You say:', options: ['We pay two times.', 'Separate bills, please. / We\'d like to pay separately.', 'Give us two receipts.', 'Split it.'], correctIndex: 1, explanation: '"We\'d like to pay separately" or "Could we have separate bills?" is the correct phrase. "Split the bill" means to divide the total equally.' },
      { id: 'rs-q9', type: 'fill-in-blank', prompt: 'You\'re allergic to shellfish: "I\'m _____ to shellfish — could you check the ingredients?"', answer: 'allergic', acceptedVariants: ['allergic'], explanation: '"I\'m allergic to…" is the essential phrase for food allergies. Always mention allergies clearly before ordering.' },
      { id: 'rs-q10', type: 'multiple-choice', prompt: 'The waiter asks "How would you like your steak?" What does this mean?', options: ['What steak do you want?', 'Do you want steak?', 'How cooked do you want it? (rare/medium/well-done)', 'Is steak okay for you?'], correctIndex: 2, explanation: 'When asked "how would you like it?", they\'re asking about the cooking level: rare (แดง), medium (กลาง), or well-done (สุกมาก).' }
    ]
  },
  {
    id: 'a2-directions-quiz',
    lessonId: 'a2-directions-01',
    title: 'Directions English Check',
    questions: [
      { id: 'dr-q1', type: 'multiple-choice', prompt: 'You\'re lost. What do you say to a stranger?', options: ['Where is museum?', 'Excuse me, could you tell me how to get to the museum?', 'Museum direction please.', 'I am lost, museum?'], correctIndex: 1, explanation: '"Excuse me, could you tell me how to get to…?" is polite and natural. You can also say "Excuse me, where is the…?"' },
      { id: 'dr-q2', type: 'word-matching', prompt: 'Match the direction word to its meaning:', pairs: [{ left: 'turn left', right: 'เลี้ยวซ้าย' }, { left: 'go straight', right: 'ตรงไป' }, { left: 'opposite', right: 'ตรงข้าม' }, { left: 'junction', right: 'ทางแยก' }] },
      { id: 'dr-q3', type: 'fill-in-blank', prompt: 'The cafe is next to the bank and _____ the park.', answer: 'opposite', acceptedVariants: ['opposite', 'across from'], explanation: '"Opposite" means directly facing something on the other side. "Across from" is the American English equivalent.' },
      { id: 'dr-q4', type: 'sentence-scramble', prompt: 'Give directions to turn right at the lights:', words: ['Turn', 'right', 'at', 'the', 'traffic', 'lights', '.'], explanation: '"Turn right at the traffic lights" — this is the most common direction phrase in English cities.' },
      { id: 'dr-q5', type: 'multiple-choice', prompt: 'Someone says "It\'s about a 10-minute walk." What does this mean?', options: ['It takes 10 minutes by car', 'Walking will take roughly 10 minutes', 'The walk is exactly 10 minutes', 'You should drive for 10 minutes'], correctIndex: 1, explanation: '"About a 10-minute walk" means approximately 10 minutes on foot. "About" shows it\'s an estimate, not exact.' },
      { id: 'dr-q6', type: 'multiple-choice', prompt: 'What does "You can\'t miss it!" mean?', options: ['You will definitely miss it', 'It\'s impossible to find', 'It\'s very easy to see / find', 'You shouldn\'t go there'], correctIndex: 2, explanation: '"You can\'t miss it!" is an idiom meaning the place is very obvious and easy to spot — a reassurance, not a warning.' },
      { id: 'dr-q7', type: 'fill-in-blank', prompt: 'Take the second _____ on the left, then go straight for two blocks.', answer: 'turning', acceptedVariants: ['turning', 'turn', 'left'], explanation: '"Take the second turning on the left" = เลี้ยวซ้ายตรงทางแยกที่สอง. "Turning" and "turn" are both used in British English.' },
      { id: 'dr-q8', type: 'multiple-choice', prompt: 'What is a "roundabout"?', options: ['A circular road junction', 'A type of bus', 'A pedestrian crossing', 'A road sign'], correctIndex: 0, explanation: 'A roundabout (วงเวียน) is a circular junction where traffic flows around a central island. Common in the UK. In the US, it\'s called a "traffic circle" or "rotary".' },
      { id: 'dr-q9', type: 'multiple-choice', prompt: 'You didn\'t understand the directions. What do you say?', options: ['Repeat!', 'I\'m sorry, could you say that again more slowly?', 'What did you say again?', 'No understand.'], correctIndex: 1, explanation: '"I\'m sorry, could you say that again more slowly?" is polite and clear. You can also say "I\'m sorry, I didn\'t catch that."' },
      { id: 'dr-q10', type: 'fill-in-blank', prompt: 'There\'s a traffic jam — we need to take a _____.', answer: 'detour', acceptedVariants: ['detour', 'different route'], explanation: 'A "detour" is an alternative route taken to avoid a problem. "We need to take a detour" is natural in this situation.' }
    ]
  },

  // ── B1 additional quizzes ─────────────────────────────────────────────
  {
    id: 'b1-conditionals-quiz',
    lessonId: 'b1-conditionals-01',
    title: 'Conditionals Check',
    questions: [
      { id: 'cn-q1', type: 'multiple-choice', prompt: 'Which sentence uses the FIRST conditional correctly?', options: ['If it rains, I would stay home.', 'If it rains, I will stay home.', 'If it will rain, I stay home.', 'If it rain, I will stay home.'], correctIndex: 1, explanation: 'First conditional: If + present simple, will + verb. Never use "will" in the if-clause. The situation must be real/possible.' },
      { id: 'cn-q2', type: 'multiple-choice', prompt: 'Which sentence uses the SECOND conditional correctly?', options: ['If I am rich, I will travel the world.', 'If I was rich, I will travel.', 'If I were rich, I would travel the world.', 'If I were rich, I will travel.'], correctIndex: 2, explanation: 'Second conditional: If + past simple (were for all subjects in formal English), would + verb. Used for imaginary/unlikely situations.' },
      { id: 'cn-q3', type: 'fill-in-blank', prompt: 'Complete: "If she _____ the answer, she would tell us." (second conditional — she doesn\'t know)', answer: 'knew', acceptedVariants: ['knew'], explanation: '"If she knew" uses past simple for second conditional. We use past simple to show the situation is hypothetical/imaginary.' },
      { id: 'cn-q4', type: 'multiple-choice', prompt: '"If I _____ you, I would apologise." — which word completes this correctly?', options: ['am', 'was', 'will be', 'were'], correctIndex: 3, explanation: '"If I were you" is the correct form. In formal English, always use "were" (not "was") for all subjects in second conditional.' },
      { id: 'cn-q5', type: 'sentence-scramble', prompt: 'Build a first conditional sentence:', words: ['If', 'you', 'study', 'hard', ',', 'you', 'will', 'pass', 'the', 'exam', '.'], explanation: '"If you study hard, you will pass the exam." — present simple in the if-clause, will + verb in the main clause.' },
      { id: 'cn-q6', type: 'multiple-choice', prompt: 'Is this first or second conditional? "If it\'s warm, we\'ll have a picnic."', options: ['Second — imaginary', 'First — real/possible', 'Neither — it\'s wrong', 'Third conditional'], correctIndex: 1, explanation: 'This is FIRST conditional. The speaker thinks it might actually be warm — it\'s a real possibility, not imaginary.' },
      { id: 'cn-q7', type: 'fill-in-blank', prompt: '"_____ you miss the bus, call me." — add the correct word to start.', answer: 'If', acceptedVariants: ['If', 'Should'], explanation: '"If you miss the bus, call me" — first conditional. "Should you miss the bus, call me" is a more formal alternative.' },
      { id: 'cn-q8', type: 'multiple-choice', prompt: 'Complete: "What _____ you do if you found a wallet in the street?"', options: ['will', 'would', 'do', 'are'], correctIndex: 1, explanation: '"What would you do if…?" is second conditional — asking about a hypothetical situation. Answer: "If I found it, I would take it to the police."' },
      { id: 'cn-q9', type: 'word-matching', prompt: 'Match each sentence to its conditional type:', pairs: [{ left: 'If it rains, we\'ll cancel.', right: 'First — real' }, { left: 'If I were a bird, I\'d fly.', right: 'Second — imaginary' }, { left: 'Unless you hurry, you\'ll be late.', right: 'First — real' }, { left: 'She\'d tell us if she knew.', right: 'Second — imaginary' }] },
      { id: 'cn-q10', type: 'fill-in-blank', prompt: 'Second conditional: "I _____ travel the world if I had more money."', answer: 'would', acceptedVariants: ['would', '\'d'], explanation: 'Second conditional main clause: would + base verb. "I would travel" or contracted "I\'d travel" — both correct.' },
      { id: 'cn-q11', type: 'multiple-choice', prompt: 'Which sentence is grammatically WRONG?', options: ['If I were you, I\'d be careful.', 'If it will rain, take an umbrella.', 'If you need help, call me.', 'If she studied more, she\'d pass.'], correctIndex: 1, explanation: 'NEVER use "will" in the if-clause. "If it rains, take an umbrella" is correct.' },
      { id: 'cn-q12', type: 'sentence-scramble', prompt: 'Build a second conditional:', words: ['If', 'I', 'had', 'more', 'time', ',', 'I', 'would', 'learn', 'Spanish', '.'], explanation: '"If I had more time, I would learn Spanish." — past simple in if-clause, would + base verb in main clause.' }
    ]
  },
  {
    id: 'b1-passive-quiz',
    lessonId: 'b1-passive-01',
    title: 'Passive Voice Check',
    questions: [
      { id: 'pv-q1', type: 'multiple-choice', prompt: 'Which sentence is in the PASSIVE voice?', options: ['The chef cooked the meal.', 'The meal was cooked by the chef.', 'She ate the pizza.', 'They built the house.'], correctIndex: 1, explanation: 'Passive: subject (the meal) + was/were + past participle (cooked). The "doer" (chef) comes after "by" — or is omitted.' },
      { id: 'pv-q2', type: 'fill-in-blank', prompt: 'Complete the passive sentence: "The Eiffel Tower _____ built in 1889."', answer: 'was', acceptedVariants: ['was'], explanation: 'Past passive = was/were + past participle. "The Eiffel Tower was built" — past passive because it happened in 1889.' },
      { id: 'pv-q3', type: 'sentence-scramble', prompt: 'Arrange into a correct passive sentence:', words: ['The', 'report', 'will', 'be', 'submitted', 'tomorrow', '.'], explanation: '"The report will be submitted tomorrow." — future passive = will be + past participle.' },
      { id: 'pv-q4', type: 'multiple-choice', prompt: 'Change to passive: "They cancelled the meeting."', options: ['The meeting was cancelled.', 'The meeting is cancelled.', 'The meeting will cancelled.', 'The meeting cancelled.'], correctIndex: 0, explanation: '"The meeting was cancelled." — past passive. The original is past tense (cancelled), so passive uses "was" + cancelled.' },
      { id: 'pv-q5', type: 'word-matching', prompt: 'Match each tense to the correct passive form:', pairs: [{ left: 'present simple', right: 'is/are + past participle' }, { left: 'past simple', right: 'was/were + past participle' }, { left: 'future simple', right: 'will be + past participle' }, { left: 'present perfect', right: 'has/have been + past participle' }] },
      { id: 'pv-q6', type: 'multiple-choice', prompt: 'Why is passive used here? "Mistakes were made during the project."', options: ['To sound more interesting', 'To avoid mentioning who made the mistakes', 'Because it\'s past tense', 'Because "mistakes" is plural'], correctIndex: 1, explanation: 'Passive is often used to avoid blame or when the "doer" is less important. "Mistakes were made" hides who made them.' },
      { id: 'pv-q7', type: 'fill-in-blank', prompt: '"Three suspects have _____ arrested." (present perfect passive)', answer: 'been', acceptedVariants: ['been'], explanation: 'Present perfect passive = have/has been + past participle. "Three suspects have been arrested."' },
      { id: 'pv-q8', type: 'multiple-choice', prompt: '"English is spoken by over a billion people." — What is the purpose of passive here?', options: ['The doer (people) is not important', 'We don\'t know who speaks English', 'English is more important than the speakers', 'All of the above are valid reasons'], correctIndex: 3, explanation: 'All three reasons are valid! Passive focuses attention on English (not people), and the enormous number of speakers makes "the doer" less important than the language itself.' },
      { id: 'pv-q9', type: 'fill-in-blank', prompt: 'The results are _____ announced tomorrow. (present continuous passive)', answer: 'being', acceptedVariants: ['being'], explanation: 'Present continuous passive = is/are being + past participle. "The results are being announced" — happening now/around now.' },
      { id: 'pv-q10', type: 'sentence-scramble', prompt: 'Make this active sentence passive: first arrange it correctly:', words: ['The', 'award', 'was', 'presented', 'by', 'the', 'Queen', '.'], explanation: '"The award was presented by the Queen." — passive with agent (by the Queen). The active version: "The Queen presented the award."' },
      { id: 'pv-q11', type: 'multiple-choice', prompt: 'Which sentence is grammatically CORRECT?', options: ['The cake was ate by the children.', 'The cake was eaten by the children.', 'The cake were eaten by the children.', 'The cake is ate by the children.'], correctIndex: 1, explanation: '"was eaten" — past passive. "Ate" is the simple past but NOT used in passive. Always use the PAST PARTICIPLE (eaten, not ate) in passive voice.' },
      { id: 'pv-q12', type: 'multiple-choice', prompt: 'In which situation is passive voice MOST appropriate?', options: ['Telling a friend what you did today', 'Writing a formal science report', 'Having casual small talk', 'Telling a story to children'], correctIndex: 1, explanation: 'Passive voice is most common in formal and academic writing — science reports, news, official documents. Casual conversation usually uses active voice.' }
    ]
  },
  {
    id: 'b1-small-talk-quiz',
    lessonId: 'b1-small-talk-01',
    title: 'Small Talk Check',
    questions: [
      { id: 'st-q1', type: 'multiple-choice', prompt: 'Someone says "How are you?" in passing. The most natural reply is:', options: ['"I am well and happy today."', '"Not bad, thanks! You?"', '"Yes, I am fine."', '"My health is good."'], correctIndex: 1, explanation: '"Not bad, thanks! You?" or "Pretty good, thanks! How about you?" — short, casual, and turns it back to them. Long detailed answers are unusual in quick exchanges.' },
      { id: 'st-q2', type: 'word-matching', prompt: 'Match the small talk opener to the correct situation:', pairs: [{ left: 'Lovely day, isn\'t it?', right: 'weather topic' }, { left: 'Busy week?', right: 'work topic' }, { left: 'Any plans for the weekend?', right: 'plans topic' }, { left: 'Have you seen any good films?', right: 'entertainment topic' }] },
      { id: 'st-q3', type: 'fill-in-blank', prompt: 'You want to know what someone did last weekend: "Did you _____ anything nice at the weekend?"', answer: 'do', acceptedVariants: ['do', 'get up to'], explanation: '"Did you do anything nice?" or "Did you get up to much?" are both natural weekend conversation openers in British English.' },
      { id: 'st-q4', type: 'multiple-choice', prompt: 'Which is a safe small talk topic with a new colleague?', options: ['Their salary', 'Their religion', 'Their weekend plans', 'Their age'], correctIndex: 2, explanation: 'Weekend plans are a safe, neutral topic. Salary, religion, and age are considered private in most English-speaking work cultures.' },
      { id: 'st-q5', type: 'sentence-scramble', prompt: 'Build a natural follow-up question:', words: ['Oh', 'really', '?', 'What', 'did', 'you', 'think', 'of', 'it', '?'], explanation: '"Oh really? What did you think of it?" — showing genuine interest and asking for their opinion keeps the conversation going.' },
      { id: 'st-q6', type: 'multiple-choice', prompt: 'Someone mentions they just came back from Japan. The BEST small talk response is:', options: ['"Japan is a country in Asia."', '"Oh, how exciting! How long were you there?"', '"I don\'t know Japan very well."', '"Japan is very far away."'], correctIndex: 1, explanation: 'The best response shows genuine interest and asks a follow-up question. This keeps the conversation flowing and shows you\'re engaged.' },
      { id: 'st-q7', type: 'fill-in-blank', prompt: '"I\'m absolutely _____! It\'s been the busiest week." (common expression for being very tired)', answer: 'exhausted', acceptedVariants: ['exhausted', 'shattered', 'knackered'], explanation: '"Exhausted" is standard. "Shattered" and "knackered" are very British informal alternatives meaning extremely tired.' },
      { id: 'st-q8', type: 'multiple-choice', prompt: 'What\'s the golden rule of small talk?', options: ['Talk as much as possible', 'Ask a question and then listen and build on their answer', 'Only talk about yourself', 'Avoid asking questions'], correctIndex: 1, explanation: 'Ask → Listen → Build and return the question. Small talk is a two-way exchange. The worst mistake is not showing interest in the other person.' },
      { id: 'st-q9', type: 'multiple-choice', prompt: 'Your colleague says "What a gorgeous day!" — the most natural reply is:', options: ['"The weather is sunny with 28 degrees Celsius."', '"I know, right? Perfect weather for lunch outside!"', '"Yes. It is a nice day."', '"Thank you."'], correctIndex: 1, explanation: '"I know, right?" agrees enthusiastically. Adding a suggestion ("Perfect for lunch outside!") extends the conversation naturally.' },
      { id: 'st-q10', type: 'multiple-choice', prompt: 'What does "catch up" mean in small talk?', options: ['To run faster than someone', 'To share news with someone you haven\'t seen in a while', 'To understand something difficult', 'To join a conversation late'], correctIndex: 1, explanation: '"Let\'s catch up!" means let\'s get together and share news/stories since we last met. "We need to catch up" = เราต้องคุยกันให้ได้เรื่อง.' }
    ]
  },

  // ── C1 Quizzes ───────────────────────────────────────────────────────
  {
    id: 'c1-negotiation-quiz',
    lessonId: 'c1-negotiation-01',
    title: 'Negotiation Language Check',
    questions: [
      { id: 'ng-q1', type: 'multiple-choice', prompt: 'You want to decline an offer politely. Which is most appropriate?', options: ['"No. We refuse."', '"I\'m afraid that doesn\'t quite work for us."', '"That offer is bad."', '"Impossible."'], correctIndex: 1, explanation: '"I\'m afraid that doesn\'t quite work for us" uses softening language ("I\'m afraid", "quite") to decline respectfully — essential in professional negotiation.' },
      { id: 'ng-q2', type: 'fill-in-blank', prompt: '"That\'s my _____ line — I can\'t go any lower." (the minimum acceptable price)', answer: 'bottom', acceptedVariants: ['bottom'], explanation: '"Bottom line" = the minimum you will accept. "That\'s my bottom line" signals you cannot negotiate further on this point.' },
      { id: 'ng-q3', type: 'word-matching', prompt: 'Match the negotiation phrase to its function:', pairs: [{ left: 'Let me take that back to my team.', right: 'buying time' }, { left: 'I\'m afraid that doesn\'t work for us.', right: 'polite refusal' }, { left: 'We\'d be willing to if you could…', right: 'conditional offer' }, { left: 'I think we have a deal.', right: 'closing' }] },
      { id: 'ng-q4', type: 'sentence-scramble', prompt: 'Make a conditional offer:', words: ['We', '\'d', 'be', 'willing', 'to', 'lower', 'the', 'price', 'if', 'you', 'increase', 'the', 'order', '.'], explanation: '"We\'d be willing to lower the price if you increase the order." — conditional offer structure: willing to X if you Y.' },
      { id: 'ng-q5', type: 'multiple-choice', prompt: 'What does "deadlock" mean in a negotiation?', options: ['A final agreement has been reached', 'No progress can be made — both sides are stuck', 'One side has won the negotiation', 'The deal has been signed'], correctIndex: 1, explanation: 'Deadlock = neither side will move. Progress is impossible. You might need a mediator or to take a break and return to the table.' },
      { id: 'ng-q6', type: 'fill-in-blank', prompt: '"I\'ll need to run this _____ my director before I can commit." (phrasal verb = consult)', answer: 'by', acceptedVariants: ['by', 'past'], explanation: '"Run it by someone" = consult them / get their opinion. "Let me run this by my manager" is a very common business phrase.' },
      { id: 'ng-q7', type: 'multiple-choice', prompt: 'Which phrase is used to CLOSE a negotiation successfully?', options: ['"That\'s my bottom line."', '"Let\'s shake on that."', '"Let me check with my team."', '"I\'m afraid that doesn\'t work."'], correctIndex: 1, explanation: '"Let\'s shake on that" means we agree and are ready to finalise. "Shall we draw up the paperwork?" and "I think we have a deal" are also closing phrases.' },
      { id: 'ng-q8', type: 'multiple-choice', prompt: 'A "concession" in negotiation means:', options: ['Winning the negotiation', 'Something you give up to reach an agreement', 'A final offer', 'A type of contract'], correctIndex: 1, explanation: 'A concession = something you sacrifice or agree to in order to move forward. "We\'ve made significant concessions on price — what can you offer in return?"' },
      { id: 'ng-q9', type: 'fill-in-blank', prompt: '"We\'re looking for a _____ arrangement — we help you, you help us." (adjective meaning mutual)', answer: 'reciprocal', acceptedVariants: ['reciprocal', 'mutually beneficial'], explanation: '"Reciprocal" = mutual, each side benefits or gives equally. A reciprocal arrangement benefits both parties.' },
      { id: 'ng-q10', type: 'multiple-choice', prompt: 'You want to make an opening offer formally. Which is best?', options: ['"We want £50."', '"Our initial proposal is £50 per unit."', '"Price is £50."', '"£50, take it or leave it."'], correctIndex: 1, explanation: '"Our initial proposal is…" signals this is the starting point, leaving room to negotiate. "Take it or leave it" is aggressive and rarely effective.' },
      { id: 'ng-q11', type: 'sentence-scramble', prompt: 'Suggest finding a middle ground:', words: ['Let', '\'s', 'see', 'if', 'we', 'can', 'find', 'a', 'middle', 'ground', '.'], explanation: '"Let\'s see if we can find a middle ground" — invites compromise and collaborative problem-solving. Highly effective in stalled negotiations.' },
      { id: 'ng-q12', type: 'multiple-choice', prompt: 'Which is the most powerful negotiation tip from the lesson?', options: ['Always make the first offer', 'Let the other side make the first offer to reveal their position', 'Negotiate aggressively from the start', 'Never use softening language'], correctIndex: 1, explanation: 'Letting the other side make the first offer reveals their expectations and gives you a strategic advantage — you can negotiate from their number.' }
    ]
  },
  {
    id: 'c1-idioms-quiz',
    lessonId: 'c1-idioms-01',
    title: 'Idiomatic English Check',
    questions: [
      { id: 'id-q1', type: 'multiple-choice', prompt: '"I\'m on the fence about taking the new job." What does this mean?', options: ['I\'m very excited about the job', 'I\'ve already decided to take it', 'I haven\'t decided yet — I\'m undecided', 'I don\'t want the job'], correctIndex: 2, explanation: '"On the fence" = undecided between two options. Imagine sitting on a fence with one option on each side — you haven\'t jumped to either side yet.' },
      { id: 'id-q2', type: 'word-matching', prompt: 'Match the idiom to its meaning:', pairs: [{ left: 'bite the bullet', right: 'endure something difficult' }, { left: 'call it a day', right: 'stop working for today' }, { left: 'cut corners', right: 'do something poorly to save time' }, { left: 'burn the midnight oil', right: 'work very late' }] },
      { id: 'id-q3', type: 'fill-in-blank', prompt: '"I\'ve sent my proposal. The _____ is in their court now."', answer: 'ball', acceptedVariants: ['ball'], explanation: '"The ball is in their court" = it\'s their turn to act or decide. From tennis — the ball has been hit to the other player\'s side.' },
      { id: 'id-q4', type: 'multiple-choice', prompt: '"Let\'s get the ball rolling." What does the speaker want?', options: ['To play a sport', 'To begin a project or activity', 'To find a ball', 'To slow down progress'], correctIndex: 1, explanation: '"Get the ball rolling" = start something. "Let\'s get the ball rolling on this project" = let\'s begin.' },
      { id: 'id-q5', type: 'sentence-scramble', prompt: 'Use the idiom correctly:', words: ['We', 'had', 'to', 'go', 'back', 'to', 'the', 'drawing', 'board', 'after', 'the', 'design', 'failed', '.'], explanation: '"Go back to the drawing board" = start from scratch after failure. The "drawing board" refers to the design board where architects/engineers plan.' },
      { id: 'id-q6', type: 'multiple-choice', prompt: 'Your colleague says "Don\'t jump the gun!" What are they telling you?', options: ['Be careful — there\'s a gun', 'Don\'t be too slow', 'Don\'t act too hastily before you have all the facts', 'Speed up!'], correctIndex: 2, explanation: '"Jump the gun" = act too soon, before you\'re supposed to. From athletics — jumping before the starting gun fires.' },
      { id: 'id-q7', type: 'fill-in-blank', prompt: '"Their tech team has always been ahead of the _____ on AI trends."', answer: 'curve', acceptedVariants: ['curve'], explanation: '"Ahead of the curve" = more advanced than the current standard or trend. Like being ahead of the curve of a graph.' },
      { id: 'id-q8', type: 'multiple-choice', prompt: '"She hit the ground running in her new role." This means she:', options: ['Fell over on her first day', 'Started slowly and built up', 'Started very effectively without wasting time', 'Ran to her office'], correctIndex: 2, explanation: '"Hit the ground running" = start immediately with great energy and effectiveness — no warm-up period needed.' },
      { id: 'id-q9', type: 'multiple-choice', prompt: '"Everyone needs to pull their weight on this project." This means:', options: ['Everyone must carry heavy objects', 'Everyone must do their fair share of work', 'The project is very heavy work', 'One person should do most of the work'], correctIndex: 1, explanation: '"Pull your weight" = contribute your fair share to a team effort. If someone doesn\'t, they\'re "not pulling their weight."' },
      { id: 'id-q10', type: 'fill-in-blank', prompt: '"We can\'t _____ corners on quality — our reputation depends on it."', answer: 'cut', acceptedVariants: ['cut'], explanation: '"Cut corners" = do something cheaply or carelessly to save time/money, but at the cost of quality. Never cut corners on safety or quality.' },
      { id: 'id-q11', type: 'multiple-choice', prompt: 'What\'s the best strategy for learning idioms according to the lesson tip?', options: ['Memorise a list of 100 idioms', 'Watch native content with subtitles and look up idioms in context', 'Only use idioms you\'ve heard once', 'Avoid idioms until C2 level'], correctIndex: 1, explanation: 'The best method: consume native content (TV, podcasts, books), pause when you hear an idiom, look it up in context, and note it. Context makes idioms stick.' },
      { id: 'id-q12', type: 'sentence-scramble', prompt: 'Complete this idiom correctly:', words: ['I\'ve', 'been', 'burning', 'the', 'midnight', 'oil', 'to', 'finish', 'this', 'report', '.'], explanation: '"I\'ve been burning the midnight oil to finish this report." — working very late at night. From the days of oil lamps.' }
    ]
  }
]

export function getQuizById(id) {
  return quizzes.find(q => q.id === id) || null
}
