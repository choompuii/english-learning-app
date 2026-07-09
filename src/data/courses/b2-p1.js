// B2 Part 1: Professional English (Meetings, Interviews, Negotiation, Presentation)
export const b2p1 = [
  // ==================================================================
  // B2 Unit 1: Meetings
  // ==================================================================
  {
    id: 'b2-unit-1',
    title: 'Unit 1: Meetings',
    thai: 'บทที่ 1: การประชุม',
    emoji: '🗓️',

    vocabulary: {
      id: 'b2-unit-1-vocab',
      title: 'Meetings',
      thai: 'คำศัพท์เกี่ยวกับการประชุม',
      emoji: '🗓️',
      level: 'B2',
      words: [
        { word: 'agenda',        pos: 'noun',      ipa: '/əˈdʒen.də/',        emoji: '📋', thai: 'ระเบียบวาระการประชุม',   def: 'a list of items to be discussed at a meeting',                      example: 'Let us move on to the next item on the agenda.',        synonym: 'schedule',   antonym: null },
        { word: 'minutes',       pos: 'noun',      ipa: '/ˈmɪn.ɪts/',         emoji: '📝', thai: 'รายงานการประชุม',        def: 'a written record of what is said and decided in a meeting',         example: 'Could you take the minutes for today’s meeting?',   synonym: 'record',     antonym: null },
        { word: 'stakeholder',   pos: 'noun',      ipa: '/ˈsteɪkˌhoʊl.dɚ/',   emoji: '🤝', thai: 'ผู้มีส่วนได้ส่วนเสีย',   def: 'a person or group with an interest in a project or company',        example: 'We must keep all stakeholders informed of the changes.', synonym: 'party',      antonym: null },
        { word: 'consensus',     pos: 'noun',      ipa: '/kənˈsen.səs/',      emoji: '👍', thai: 'ฉันทามติ / ความเห็นพ้อง', def: 'general agreement among a group of people',                        example: 'We reached a consensus on the new budget.',             synonym: 'agreement',  antonym: 'disagreement' },
        { word: 'adjourn',       pos: 'verb',      ipa: '/əˈdʒɝːn/',          emoji: '⏸️', thai: 'เลื่อน / ปิดการประชุม',  def: 'to stop a meeting, intending to continue it later',                 example: 'I suggest we adjourn until tomorrow morning.',          synonym: 'suspend',    antonym: 'convene' },
        { word: 'delegate',      pos: 'verb',      ipa: '/ˈdel.ɪ.ɡeɪt/',      emoji: '➡️', thai: 'มอบหมายงาน',            def: 'to give a task or responsibility to another person',                example: 'The manager decided to delegate the report to Anna.',   synonym: 'assign',     antonym: null },
        { word: 'concise',       pos: 'adjective', ipa: '/kənˈsaɪs/',         emoji: '✂️', thai: 'กระชับ / รัดกุม',        def: 'giving information clearly and in few words',                       example: 'Please keep your update brief and concise.',            synonym: 'succinct',   antonym: 'lengthy' },
        { word: 'follow up',     pos: 'phrasal verb', ipa: '/ˌfɑː.loʊ ˈʌp/', emoji: '📞', thai: 'ติดตามผล',              def: 'to take further action after a previous discussion',                example: 'I will follow up with the client after the meeting.',   synonym: 'pursue',     antonym: null },
      ]
    },

    grammar: {
      id: 'b2-unit-1-grammar',
      title: 'Reported Speech',
      thai: 'การเล่าคำพูดของผู้อื่น (Reported Speech)',
      emoji: '💬',
      level: 'B2',
      summary: 'เรียนรู้การรายงานสิ่งที่คนอื่นพูดในการประชุม โดยเปลี่ยนกาล (backshift) สรรพนาม และคำบอกเวลา ซึ่งจำเป็นมากในการเขียนรายงานการประชุม (minutes)',
      explanation: [
        {
          heading: 'Backshift of Tenses',
          body: 'เมื่อรายงานคำพูด (มักตามหลัง verb ในอดีต เช่น said, told) เรามักเลื่อนกาลถอยหลังหนึ่งขั้น\n\nPresent Simple → Past Simple\nPresent Continuous → Past Continuous\nPast Simple / Present Perfect → Past Perfect\nwill → would · can → could · must → had to\n\n❌ He said "I am busy." → ✅ He said (that) he was busy.'
        },
        {
          heading: 'Pronouns, Time & Place References',
          body: 'ต้องเปลี่ยนสรรพนามและคำบอกเวลา/สถานที่ให้เหมาะกับผู้เล่า\n\nnow → then · today → that day · tomorrow → the next day\nyesterday → the day before · here → there · this → that\n\n"I will send this today." → She said she would send that that day.'
        },
        {
          heading: 'Reported Questions & Commands',
          body: 'คำถาม: ไม่ใช้ do/does/did และเรียงประโยคเป็นบอกเล่า ใช้ if/whether กับคำถาม Yes/No\n\n"Are you ready?" → He asked if I was ready.\n"When will it start?" → She asked when it would start.\n\nคำสั่ง/คำขอ: ใช้ told/asked + someone + to + verb\n"Please send the report." → He asked me to send the report.'
        }
      ],
      examples: [
        { en: 'The manager said the project was behind schedule.',        th: 'ผู้จัดการบอกว่าโครงการล่าช้ากว่ากำหนด' },
        { en: 'She told us that she had finished the report.',             th: 'เธอบอกเราว่าเธอทำรายงานเสร็จแล้ว' },
        { en: 'He said he would email the minutes the next day.',          th: 'เขาบอกว่าเขาจะส่งอีเมลรายงานการประชุมในวันรุ่งขึ้น' },
        { en: 'They asked whether the deadline could be extended.',        th: 'พวกเขาถามว่ากำหนดส่งสามารถขยายได้หรือไม่' },
        { en: 'The chair asked everyone to review the agenda beforehand.', th: 'ประธานขอให้ทุกคนตรวจดูวาระการประชุมล่วงหน้า' },
        { en: 'Anna said she was working on the budget at that moment.',   th: 'แอนนาบอกว่าตอนนั้นเธอกำลังจัดทำงบประมาณอยู่' },
      ],
      practice: [
        { id: 'b2u1-gr-p1', type: 'fill-in-blank',  prompt: 'Direct: "I am busy." → Reported: He said he ___ busy.',                     answer: 'was', acceptedVariants: [], explanation: 'am เปลี่ยนเป็น was (backshift, ประธาน he)' },
        { id: 'b2u1-gr-p2', type: 'multiple-choice', prompt: 'Direct: "We will decide tomorrow." → She said they ___ decide the next day.', options: ['will','would','can','shall'], correctIndex: 1, explanation: 'will เปลี่ยนเป็น would ในการรายงาน' },
        { id: 'b2u1-gr-p3', type: 'multiple-choice', prompt: 'Report the question "Are you ready?"',                                          options: ['He asked are you ready.','He asked if I was ready.','He asked if I am ready.','He asked was I ready.'], correctIndex: 1, explanation: 'ใช้ if + เรียงประโยคบอกเล่า + backshift are→was' },
        { id: 'b2u1-gr-p4', type: 'fill-in-blank',  prompt: 'Direct: "Please send the file." → She asked me ___ send the file.',          answer: 'to', acceptedVariants: [], explanation: 'คำขอใช้ asked + someone + to + verb' },
      ],
      quiz: [
        { id: 'b2u1-gr-q1', type: 'multiple-choice', prompt: 'Which is the correct reported form of "The report is ready"?',      options: ['He said the report is ready.','He said the report was ready.','He said the report will be ready.','He said the report be ready.'], correctIndex: 1, explanation: 'is เปลี่ยนเป็น was เมื่อ verb หลักเป็นอดีต' },
        { id: 'b2u1-gr-q2', type: 'fill-in-blank',  prompt: 'Direct: "I have finished." → She said she ___ finished.',            answer: 'had', acceptedVariants: [], explanation: 'Present Perfect (have finished) เปลี่ยนเป็น Past Perfect (had finished)' },
        { id: 'b2u1-gr-q3', type: 'multiple-choice', prompt: 'Report: "When does the meeting start?"',                             options: ['He asked when does the meeting start.','He asked when did the meeting start.','He asked when the meeting started.','He asked when the meeting starts.'], correctIndex: 2, explanation: 'คำถามในการรายงานไม่ใช้ does และเรียงเป็นบอกเล่า start→started' },
        { id: 'b2u1-gr-q4', type: 'multiple-choice', prompt: 'Choose the correct time change: "I will call you today." → She said she would call me ___.', options: ['today','that day','this day','now'], correctIndex: 1, explanation: 'today เปลี่ยนเป็น that day ในการรายงาน' },
      ]
    },

    listening: {
      id: 'b2-unit-1-listening',
      type: 'Conversation',
      title: 'The Weekly Team Meeting',
      thai: 'การประชุมทีมประจำสัปดาห์',
      emoji: '🎧',
      level: 'B2',
      segments: [
        { speaker: 'Sarah',  text: 'Good morning, everyone. Thanks for joining. Let’s get started — we have a full agenda today.', thai: 'อรุณสวัสดิ์ทุกคน ขอบคุณที่มาร่วมประชุม เรามาเริ่มกันเลย วันนี้มีวาระเยอะทีเดียว' },
        { speaker: 'Tom',    text: 'Before we begin, could we quickly review the minutes from last week?',                         thai: 'ก่อนเริ่ม เราทบทวนรายงานการประชุมสัปดาห์ที่แล้วสั้น ๆ ได้ไหม?' },
        { speaker: 'Sarah',  text: 'Of course. The main action point was the client proposal. Priya, how is that progressing?',   thai: 'ได้เลย ประเด็นหลักคือข้อเสนอสำหรับลูกค้า ปรียา ตอนนี้คืบหน้าอย่างไรบ้าง?' },
        { speaker: 'Priya',  text: 'It’s almost done. I just need the final figures from the finance team by Thursday.',      thai: 'เกือบเสร็จแล้วค่ะ ฉันแค่ต้องการตัวเลขสุดท้ายจากทีมการเงินภายในวันพฤหัสบดี' },
        { speaker: 'Tom',    text: 'I can follow up with finance this afternoon and send you the numbers.',                       thai: 'ผมจะติดตามกับทีมการเงินบ่ายนี้แล้วส่งตัวเลขให้คุณครับ' },
        { speaker: 'Sarah',  text: 'Great. Let’s try to reach a consensus on the launch date before we adjourn.',            thai: 'ดีมาก เรามาพยายามหาข้อสรุปเรื่องวันเปิดตัวก่อนที่จะปิดประชุมกันนะ' },
        { speaker: 'Priya',  text: 'I’d suggest the fifteenth. That gives us enough time to prepare properly.',              thai: 'ฉันขอเสนอวันที่สิบห้าค่ะ จะให้เวลาเราเตรียมตัวได้อย่างเหมาะสม' },
        { speaker: 'Sarah',  text: 'Agreed. Tom, could you take the minutes and circulate them by end of day?',                  thai: 'ตกลง ทอม คุณช่วยจดรายงานการประชุมและส่งให้ทุกคนภายในสิ้นวันได้ไหม?' },
      ],
      questions: [
        { id: 'b2u1-ls-q1', type: 'multiple-choice', prompt: 'What does Tom want to do before the meeting begins?', options: ['Leave early','Review last week’s minutes','Change the agenda','Call the client'], correctIndex: 1, explanation: 'ทอมพูดว่า "could we quickly review the minutes from last week?"' },
        { id: 'b2u1-ls-q2', type: 'multiple-choice', prompt: 'What does Priya still need to finish the proposal?', options: ['The client’s approval','The final figures from finance','A new deadline','More staff'], correctIndex: 1, explanation: 'ปรียาบอกว่า "I just need the final figures from the finance team"' },
        { id: 'b2u1-ls-q3', type: 'multiple-choice', prompt: 'Who offers to follow up with the finance team?', options: ['Sarah','Priya','Tom','The client'], correctIndex: 2, explanation: 'ทอมพูดว่า "I can follow up with finance this afternoon"' },
        { id: 'b2u1-ls-q4', type: 'multiple-choice', prompt: 'What launch date does the team agree on?', options: ['The fifth','The tenth','The fifteenth','The twentieth'], correctIndex: 2, explanation: 'ปรียาเสนอวันที่สิบห้า และซาราห์บอกว่า "Agreed"' },
      ]
    },

    reading: {
      id: 'b2-unit-1-reading',
      type: 'Article',
      title: 'How to Run an Effective Meeting',
      thai: 'วิธีจัดการประชุมให้มีประสิทธิภาพ',
      emoji: '📖',
      level: 'B2',
      minutes: 4,
      paragraphs: [
        'Meetings are a necessary part of professional life, yet many employees regard them as a waste of time. Research suggests that the average office worker spends several hours each week in meetings, a significant proportion of which achieve very little. The good news is that, with careful planning, any meeting can be transformed into a productive session.',
        'The single most important tool is a clear agenda, which should be circulated well in advance. This allows participants, all of whom are busy, to prepare their contributions and gather any necessary information. A well-structured agenda also keeps the discussion focused and makes it far easier to reach a consensus within the allotted time.',
        'Equally important is the role of the chairperson, whose job is to guide the conversation rather than dominate it. A skilled chair encourages quieter colleagues to speak, prevents any single person from talking too much, and ensures that every item is discussed concisely. When a decision is made, it should be recorded clearly in the minutes, along with the name of the person responsible for each action.',
        'Finally, a meeting is only as valuable as the follow-up that comes afterwards. Action points that are agreed but never reviewed quickly lose their meaning. The most effective teams treat the minutes as a living document, checking progress at the start of the next meeting and holding one another accountable.',
      ],
      dialogue: null,
      glossary: [
        { word: 'proportion',   thai: 'สัดส่วน',           def: 'a part or share of a whole amount' },
        { word: 'circulate',    thai: 'ส่งเวียน / เผยแพร่', def: 'to send information to a group of people' },
        { word: 'allotted',     thai: 'ที่จัดสรรไว้',      def: 'given or set aside for a particular purpose' },
        { word: 'accountable',  thai: 'ที่ต้องรับผิดชอบ',  def: 'responsible for something and required to explain your actions' },
      ],
      summary: 'Many meetings are unproductive, but a clear agenda, a skilled chairperson, well-recorded minutes, and consistent follow-up can make them genuinely useful.',
      summaryThai: 'การประชุมหลายครั้งไม่มีประสิทธิภาพ แต่การมีวาระที่ชัดเจน ประธานที่มีทักษะ การจดรายงานที่ดี และการติดตามผลอย่างสม่ำเสมอ จะทำให้การประชุมมีคุณค่าอย่างแท้จริง',
      questions: [
        { id: 'b2u1-rd-q1', type: 'multiple-choice', prompt: 'According to the article, how do many employees view meetings?', options: ['As enjoyable','As a waste of time','As too short','As well-organised'], correctIndex: 1, explanation: 'บทความบอกว่า "many employees regard them as a waste of time"' },
        { id: 'b2u1-rd-q2', type: 'multiple-choice', prompt: 'Why should an agenda be circulated in advance?', options: ['To save paper','So participants can prepare','To make the meeting longer','To replace the minutes'], correctIndex: 1, explanation: 'บทความบอกว่า agenda "allows participants ... to prepare their contributions"' },
        { id: 'b2u1-rd-q3', type: 'multiple-choice', prompt: 'What is the role of a skilled chairperson?', options: ['To dominate the discussion','To guide the conversation','To take all the minutes','To avoid making decisions'], correctIndex: 1, explanation: 'บทความบอกว่าประธาน "guide the conversation rather than dominate it"' },
        { id: 'b2u1-rd-q4', type: 'multiple-choice', prompt: 'What makes a meeting truly valuable, according to the last paragraph?', options: ['A long agenda','Free coffee','The follow-up afterwards','Many participants'], correctIndex: 2, explanation: 'บทความบอกว่า "a meeting is only as valuable as the follow-up that comes afterwards"' },
      ]
    },

    test: {
      id: 'b2-unit-1-test',
      passMark: 0.70,
      questions: [
        { id: 'b2u1-t-01', type: 'multiple-choice', prompt: '"ระเบียบวาระการประชุม" ในภาษาอังกฤษคือคำใด?',            options: ['minutes','agenda','consensus','stakeholder'], correctIndex: 1, explanation: '"agenda" = ระเบียบวาระการประชุม' },
        { id: 'b2u1-t-02', type: 'multiple-choice', prompt: 'What does "minutes" mean in a meeting context?',         options: ['A unit of time','A written record of the meeting','A short break','A list of guests'], correctIndex: 1, explanation: '"minutes" = รายงานการประชุม' },
        { id: 'b2u1-t-03', type: 'fill-in-blank',   prompt: 'To give a task to another person is to ___ it.',        answer: 'delegate', acceptedVariants: ['delegate to'], explanation: '"delegate" = มอบหมายงาน' },
        { id: 'b2u1-t-04', type: 'multiple-choice', prompt: 'Reported speech: "The report is ready." → He said the report ___ ready.', options: ['is','was','be','are'], correctIndex: 1, explanation: 'is เปลี่ยนเป็น was (backshift)' },
        { id: 'b2u1-t-05', type: 'fill-in-blank',   prompt: 'Direct: "I will call you." → She said she ___ call me.', answer: 'would', acceptedVariants: [], explanation: 'will เปลี่ยนเป็น would' },
        { id: 'b2u1-t-06', type: 'multiple-choice', prompt: 'Which is the correct reported question for "Are you free?"', options: ['He asked are you free.','He asked if I was free.','He asked if I am free.','He asked was I free.'], correctIndex: 1, explanation: 'ใช้ if + เรียงบอกเล่า + backshift' },
        { id: 'b2u1-t-07', type: 'fill-in-blank',   prompt: 'General agreement among a group is a ___.',              answer: 'consensus', acceptedVariants: [], explanation: '"consensus" = ฉันทามติ' },
        { id: 'b2u1-t-08', type: 'multiple-choice', prompt: 'In the listening, who offers to follow up with finance?', options: ['Sarah','Priya','Tom','The client'], correctIndex: 2, explanation: 'ทอมพูดว่า "I can follow up with finance this afternoon"' },
        { id: 'b2u1-t-09', type: 'multiple-choice', prompt: 'In the listening, what launch date is agreed?',         options: ['The fifth','The tenth','The fifteenth','The twentieth'], correctIndex: 2, explanation: 'ทีมตกลงวันที่สิบห้า' },
        { id: 'b2u1-t-10', type: 'multiple-choice', prompt: 'In the reading, what is the single most important tool for a good meeting?', options: ['Free coffee','A clear agenda','A large room','A projector'], correctIndex: 1, explanation: 'บทความบอกว่า "The single most important tool is a clear agenda"' },
      ]
    }
  },

  // ==================================================================
  // B2 Unit 2: Interview
  // ==================================================================
  {
    id: 'b2-unit-2',
    title: 'Unit 2: Interview',
    thai: 'บทที่ 2: การสัมภาษณ์งาน',
    emoji: '💼',

    vocabulary: {
      id: 'b2-unit-2-vocab',
      title: 'Job Interviews',
      thai: 'คำศัพท์การสัมภาษณ์งาน',
      emoji: '💼',
      level: 'B2',
      words: [
        { word: 'candidate',     pos: 'noun',      ipa: '/ˈkæn.dɪ.dət/',    emoji: '🧑‍💼', thai: 'ผู้สมัคร',              def: 'a person who applies for a job or position',                       example: 'We interviewed five candidates for the role.',        synonym: 'applicant',   antonym: null },
        { word: 'qualification', pos: 'noun',      ipa: '/ˌkwɑː.lə.fəˈkeɪ.ʃən/', emoji: '🎓', thai: 'คุณสมบัติ / วุฒิ',      def: 'a skill, degree, or quality that makes you suitable for a job',    example: 'She has all the qualifications for the position.',     synonym: 'credential',  antonym: null },
        { word: 'strength',      pos: 'noun',      ipa: '/streŋθ/',         emoji: '💪', thai: 'จุดแข็ง',               def: 'a good quality or skill that a person has',                        example: 'My greatest strength is problem-solving.',            synonym: 'asset',       antonym: 'weakness' },
        { word: 'weakness',      pos: 'noun',      ipa: '/ˈwiːk.nəs/',      emoji: '📉', thai: 'จุดอ่อน',               def: 'a quality or skill that a person lacks or needs to improve',       example: 'A common interview question is about your weakness.',  synonym: 'shortcoming', antonym: 'strength' },
        { word: 'résumé',        pos: 'noun',      ipa: '/ˈrez.ʊ.meɪ/',     emoji: '📄', thai: 'ประวัติย่อ / เรซูเม่',  def: 'a document listing your education and work experience',            example: 'Please attach your résumé to the application.',       synonym: 'CV',          antonym: null },
        { word: 'recruit',       pos: 'verb',      ipa: '/rɪˈkruːt/',       emoji: '🔍', thai: 'สรรหา / จ้างพนักงาน',   def: 'to find and hire new people for a company',                        example: 'The firm is recruiting engineers this quarter.',      synonym: 'hire',        antonym: 'dismiss' },
        { word: 'confident',     pos: 'adjective', ipa: '/ˈkɑːn.fə.dənt/',  emoji: '😎', thai: 'มั่นใจ',                def: 'feeling sure about your own abilities',                            example: 'Try to appear confident during the interview.',       synonym: 'assured',     antonym: 'nervous' },
        { word: 'promotion',     pos: 'noun',      ipa: '/prəˈmoʊ.ʃən/',    emoji: '📈', thai: 'การเลื่อนตำแหน่ง',      def: 'a move to a more senior job within a company',                     example: 'He was given a promotion after two years.',           synonym: 'advancement', antonym: 'demotion' },
      ]
    },

    grammar: {
      id: 'b2-unit-2-grammar',
      title: 'Present Perfect & Present Perfect Continuous',
      thai: 'Present Perfect และ Present Perfect Continuous',
      emoji: '⏳',
      level: 'B2',
      summary: 'เรียนรู้การพูดถึงประสบการณ์การทำงานและผลลัพธ์ในการสัมภาษณ์ โดยใช้ Present Perfect (have done) และ Present Perfect Continuous (have been doing) ซึ่งจำเป็นสำหรับการเล่าประวัติการทำงาน',
      explanation: [
        {
          heading: 'Present Perfect: have/has + past participle',
          body: 'ใช้พูดถึงประสบการณ์ (ไม่ระบุเวลาแน่นอน) หรือการกระทำที่จบแล้วแต่ผลยังส่งถึงปัจจุบัน\n\n"I have worked in marketing for five years."\n"She has managed several international projects."\n\n⚠️ จุดที่คนไทยมักผิด: ใช้ Past Simple แทน\n❌ I worked here since 2020. ✅ I have worked here since 2020.'
        },
        {
          heading: 'Present Perfect Continuous: have/has been + verb-ing',
          body: 'ใช้เน้นความต่อเนื่องของการกระทำที่เริ่มในอดีตและยังดำเนินอยู่ (มักใช้กับ for / since)\n\n"I have been working on this skill for months."\n"They have been recruiting since January."\n\nเน้น "ระยะเวลา / กระบวนการ" มากกว่า "ผลลัพธ์"'
        },
        {
          heading: 'for / since & Perfect vs Continuous',
          body: 'for + ช่วงเวลา (for three years) · since + จุดเริ่มต้น (since 2020)\n\nใช้ Perfect เมื่อเน้นผลลัพธ์/จำนวน: "I have finished three reports."\nใช้ Perfect Continuous เมื่อเน้นระยะเวลา/กิจกรรม: "I have been writing reports all day."'
        }
      ],
      examples: [
        { en: 'I have worked in this field for over six years.',           th: 'ฉันทำงานในสายงานนี้มากว่าหกปีแล้ว' },
        { en: 'She has never missed a deadline.',                          th: 'เธอไม่เคยพลาดกำหนดส่งงานเลย' },
        { en: 'We have been developing this product since last spring.',   th: 'เราพัฒนาผลิตภัณฑ์นี้มาตั้งแต่ฤดูใบไม้ผลิที่แล้ว' },
        { en: 'Have you ever managed a large team?',                       th: 'คุณเคยบริหารทีมขนาดใหญ่ไหม?' },
        { en: 'He has just been promoted to senior manager.',             th: 'เขาเพิ่งได้รับการเลื่อนตำแหน่งเป็นผู้จัดการอาวุโส' },
        { en: 'They have been interviewing candidates all week.',         th: 'พวกเขาสัมภาษณ์ผู้สมัครมาทั้งสัปดาห์แล้ว' },
      ],
      practice: [
        { id: 'b2u2-gr-p1', type: 'fill-in-blank',  prompt: 'I ___ worked here since 2019. (have/has)',                       answer: 'have', acceptedVariants: [], explanation: 'ประธาน I ใช้ have' },
        { id: 'b2u2-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct form: She ___ managed three projects.',      options: ['have','has','is','had'], correctIndex: 1, explanation: 'ประธาน She ใช้ has + past participle' },
        { id: 'b2u2-gr-p3', type: 'multiple-choice', prompt: 'Which sentence emphasises the ongoing process?',                options: ['I have written the report.','I have been writing the report all morning.','I wrote the report.','I write the report.'], correctIndex: 1, explanation: 'Present Perfect Continuous เน้นกระบวนการที่ต่อเนื่อง' },
        { id: 'b2u2-gr-p4', type: 'fill-in-blank',  prompt: 'They have been recruiting ___ January. (for/since)',            answer: 'since', acceptedVariants: [], explanation: 'January เป็นจุดเริ่มต้น จึงใช้ since' },
      ],
      quiz: [
        { id: 'b2u2-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                                  options: ['I work here since 2018.','I am working here since 2018.','I have worked here since 2018.','I worked here since 2018.'], correctIndex: 2, explanation: 'ใช้ Present Perfect กับ since' },
        { id: 'b2u2-gr-q2', type: 'fill-in-blank',  prompt: 'We have worked together ___ three years. (for/since)',           answer: 'for', acceptedVariants: [], explanation: 'three years เป็นช่วงเวลา จึงใช้ for' },
        { id: 'b2u2-gr-q3', type: 'multiple-choice', prompt: '"He ___ just ___ promoted." เติมคำใดถูกต้อง?',                 options: ['have / been','has / been','is / being','had / been'], correctIndex: 1, explanation: 'He ใช้ has + been (past participle ของ be)' },
        { id: 'b2u2-gr-q4', type: 'multiple-choice', prompt: 'Which best emphasises duration of an ongoing activity?',        options: ['I have finished two reports.','I have been writing reports all day.','I finished reports.','I finish reports.'], correctIndex: 1, explanation: 'Present Perfect Continuous เน้นระยะเวลาของกิจกรรมที่ต่อเนื่อง' },
      ]
    },

    listening: {
      id: 'b2-unit-2-listening',
      type: 'Conversation',
      title: 'A Job Interview',
      thai: 'การสัมภาษณ์งาน',
      emoji: '🎧',
      level: 'B2',
      segments: [
        { speaker: 'Interviewer', text: 'Thank you for coming in today. Could you start by telling me a little about yourself?', thai: 'ขอบคุณที่มาในวันนี้ คุณช่วยเล่าเกี่ยวกับตัวเองสักเล็กน้อยได้ไหม?' },
        { speaker: 'Mei',         text: 'Certainly. I have been working as a marketing analyst for the past four years.',        thai: 'ได้ค่ะ ฉันทำงานเป็นนักวิเคราะห์การตลาดมาสี่ปีแล้ว' },
        { speaker: 'Interviewer', text: 'Impressive. What would you say is your greatest strength?',                            thai: 'น่าประทับใจ คุณคิดว่าจุดแข็งที่สุดของคุณคืออะไร?' },
        { speaker: 'Mei',         text: 'I’m very good at analysing data and turning it into clear recommendations.',      thai: 'ฉันเก่งเรื่องการวิเคราะห์ข้อมูลและแปลงเป็นข้อเสนอแนะที่ชัดเจนค่ะ' },
        { speaker: 'Interviewer', text: 'And what about a weakness you are working on?',                                        thai: 'แล้วจุดอ่อนที่คุณกำลังพยายามปรับปรุงล่ะ?' },
        { speaker: 'Mei',         text: 'I used to take on too much myself, so I have been learning to delegate more.',        thai: 'เมื่อก่อนฉันมักรับงานเองมากเกินไป ฉันจึงกำลังฝึกมอบหมายงานให้มากขึ้นค่ะ' },
        { speaker: 'Interviewer', text: 'Good self-awareness. Finally, why do you want to join our company?',                   thai: 'มีการตระหนักรู้ในตนเองที่ดี สุดท้าย ทำไมคุณถึงอยากร่วมงานกับบริษัทเรา?' },
        { speaker: 'Mei',         text: 'Your firm has a strong reputation for innovation, and I want to grow with a forward-thinking team.', thai: 'บริษัทของคุณมีชื่อเสียงด้านนวัตกรรม และฉันอยากเติบโตไปกับทีมที่คิดก้าวหน้าค่ะ' },
      ],
      questions: [
        { id: 'b2u2-ls-q1', type: 'multiple-choice', prompt: 'How long has Mei worked as a marketing analyst?', options: ['Two years','Three years','Four years','Six years'], correctIndex: 2, explanation: 'เหมยพูดว่า "for the past four years"' },
        { id: 'b2u2-ls-q2', type: 'multiple-choice', prompt: 'What does Mei say is her greatest strength?', options: ['Public speaking','Analysing data','Managing money','Writing code'], correctIndex: 1, explanation: 'เธอบอกว่า "I’m very good at analysing data"' },
        { id: 'b2u2-ls-q3', type: 'multiple-choice', prompt: 'What weakness is Mei working on?', options: ['Being late','Delegating more','Speaking English','Using computers'], correctIndex: 1, explanation: 'เธอบอกว่า "I have been learning to delegate more"' },
        { id: 'b2u2-ls-q4', type: 'multiple-choice', prompt: 'Why does Mei want to join the company?', options: ['Higher salary','Its reputation for innovation','Shorter hours','It is near her home'], correctIndex: 1, explanation: 'เธอบอกว่า "Your firm has a strong reputation for innovation"' },
      ]
    },

    reading: {
      id: 'b2-unit-2-reading',
      type: 'Article',
      title: 'Preparing for a Successful Interview',
      thai: 'การเตรียมตัวเพื่อการสัมภาษณ์ที่ประสบความสำเร็จ',
      emoji: '📖',
      level: 'B2',
      minutes: 4,
      paragraphs: [
        'A job interview can be a nerve-racking experience, but candidates who prepare thoroughly are far more likely to succeed. The first step, which many people overlook, is careful research. Before the interview, you should learn as much as possible about the company, its products, its values, and the challenges it currently faces.',
        'Equally important is preparing answers to common questions. Interviewers almost always ask about your strengths and weaknesses, so it is wise to have thought these through in advance. When describing a weakness, the best candidates explain what they have been doing to improve, which turns a potential negative into evidence of self-awareness and growth.',
        'On the day itself, first impressions matter enormously. Arriving early, dressing appropriately, and offering a firm handshake all signal that you are professional and reliable. During the conversation, try to give specific examples rather than vague statements; an interviewer who hears a concrete story is far more likely to remember you.',
        'Finally, remember that an interview is a two-way process. Preparing a few thoughtful questions of your own shows genuine interest and helps you decide whether the role is right for you. A candidate who asks intelligent questions often leaves a stronger impression than one who simply answers well.',
      ],
      dialogue: null,
      glossary: [
        { word: 'nerve-racking',   thai: 'ที่ทำให้เครียด / ตื่นเต้น', def: 'making you feel very worried or anxious' },
        { word: 'overlook',        thai: 'มองข้าม',                   def: 'to fail to notice or consider something' },
        { word: 'self-awareness',  thai: 'การรู้จักตนเอง',            def: 'knowledge of your own character, feelings, and abilities' },
        { word: 'impression',      thai: 'ความประทับใจ / ภาพลักษณ์',   def: 'an idea or opinion others form about you' },
      ],
      summary: 'Successful interview candidates research the company, prepare answers about their strengths and weaknesses, make a strong first impression with specific examples, and ask thoughtful questions of their own.',
      summaryThai: 'ผู้สมัครที่สัมภาษณ์สำเร็จจะค้นคว้าข้อมูลบริษัท เตรียมคำตอบเรื่องจุดแข็งจุดอ่อน สร้างความประทับใจแรกด้วยตัวอย่างที่ชัดเจน และเตรียมคำถามที่ดีของตนเอง',
      questions: [
        { id: 'b2u2-rd-q1', type: 'multiple-choice', prompt: 'What is the first step that many people overlook?', options: ['Buying a new suit','Careful research about the company','Practising a handshake','Arriving late'], correctIndex: 1, explanation: 'บทความบอกว่า "The first step, which many people overlook, is careful research"' },
        { id: 'b2u2-rd-q2', type: 'multiple-choice', prompt: 'How do the best candidates describe a weakness?', options: ['They hide it','They explain what they are doing to improve','They blame others','They deny having any'], correctIndex: 1, explanation: 'บทความบอกว่าพวกเขา "explain what they have been doing to improve"' },
        { id: 'b2u2-rd-q3', type: 'multiple-choice', prompt: 'What should you give instead of vague statements?', options: ['Long silences','Specific examples','Jokes','Complaints'], correctIndex: 1, explanation: 'บทความบอกว่า "try to give specific examples rather than vague statements"' },
        { id: 'b2u2-rd-q4', type: 'multiple-choice', prompt: 'Why should you prepare questions of your own?', options: ['To use up time','To show genuine interest','To confuse the interviewer','To end early'], correctIndex: 1, explanation: 'บทความบอกว่าคำถามของคุณ "shows genuine interest"' },
      ]
    },

    test: {
      id: 'b2-unit-2-test',
      passMark: 0.70,
      questions: [
        { id: 'b2u2-t-01', type: 'multiple-choice', prompt: '"ผู้สมัคร" ในภาษาอังกฤษคือคำใด?',                     options: ['recruiter','candidate','manager','employer'], correctIndex: 1, explanation: '"candidate" = ผู้สมัคร' },
        { id: 'b2u2-t-02', type: 'multiple-choice', prompt: 'What is the opposite of "strength"?',                 options: ['power','weakness','asset','skill'], correctIndex: 1, explanation: '"weakness" (จุดอ่อน) ตรงข้ามกับ "strength" (จุดแข็ง)' },
        { id: 'b2u2-t-03', type: 'fill-in-blank',   prompt: 'A document listing your work experience is a ___.', answer: 'résumé', acceptedVariants: ['resume','cv'], explanation: '"résumé" หรือ CV = ประวัติย่อ' },
        { id: 'b2u2-t-04', type: 'multiple-choice', prompt: 'Choose the correct sentence.',                       options: ['I work here since 2018.','I have worked here since 2018.','I working here since 2018.','I am work here since 2018.'], correctIndex: 1, explanation: 'ใช้ Present Perfect กับ since' },
        { id: 'b2u2-t-05', type: 'fill-in-blank',   prompt: 'We have worked together ___ three years. (for/since)', answer: 'for', acceptedVariants: [], explanation: 'three years เป็นช่วงเวลา จึงใช้ for' },
        { id: 'b2u2-t-06', type: 'multiple-choice', prompt: 'Which form emphasises an ongoing process?',          options: ['I have written the report.','I have been writing the report all day.','I wrote the report.','I write the report.'], correctIndex: 1, explanation: 'Present Perfect Continuous เน้นกระบวนการต่อเนื่อง' },
        { id: 'b2u2-t-07', type: 'fill-in-blank',   prompt: 'To find and hire new staff is to ___ them.',         answer: 'recruit', acceptedVariants: [], explanation: '"recruit" = สรรหา/จ้างพนักงาน' },
        { id: 'b2u2-t-08', type: 'multiple-choice', prompt: 'In the listening, how long has Mei been a marketing analyst?', options: ['Two years','Three years','Four years','Five years'], correctIndex: 2, explanation: 'เหมยพูดว่า "for the past four years"' },
        { id: 'b2u2-t-09', type: 'multiple-choice', prompt: 'In the listening, what weakness is Mei working on?',  options: ['Being late','Delegating more','Speaking English','Using data'], correctIndex: 1, explanation: 'เธอบอกว่า "I have been learning to delegate more"' },
        { id: 'b2u2-t-10', type: 'multiple-choice', prompt: 'In the reading, what makes a candidate memorable?',   options: ['Vague statements','Specific examples','Long answers','Arriving late'], correctIndex: 1, explanation: 'บทความบอกว่า "give specific examples"' },
      ]
    }
  },

  // ==================================================================
  // B2 Unit 3: Negotiation
  // ==================================================================
  {
    id: 'b2-unit-3',
    title: 'Unit 3: Negotiation',
    thai: 'บทที่ 3: การเจรจาต่อรอง',
    emoji: '🤝',

    vocabulary: {
      id: 'b2-unit-3-vocab',
      title: 'Negotiation',
      thai: 'คำศัพท์การเจรจาต่อรอง',
      emoji: '🤝',
      level: 'B2',
      words: [
        { word: 'compromise',   pos: 'noun',      ipa: '/ˈkɑːm.prə.maɪz/',  emoji: '⚖️', thai: 'การประนีประนอม',        def: 'an agreement in which each side gives up something',              example: 'After hours of talks, we reached a compromise.',      synonym: 'settlement', antonym: null },
        { word: 'concession',   pos: 'noun',      ipa: '/kənˈseʃ.ən/',      emoji: '🎁', thai: 'การยอมผ่อนปรน',         def: 'something you allow or give up to reach an agreement',            example: 'They made a concession on the delivery date.',        synonym: 'allowance',  antonym: null },
        { word: 'leverage',     pos: 'noun',      ipa: '/ˈlev.ɚ.ɪdʒ/',      emoji: '💪', thai: 'อำนาจต่อรอง',           def: 'the power to influence a situation to your advantage',            example: 'A strong reputation gives you leverage in talks.',    synonym: 'advantage',  antonym: null },
        { word: 'bargain',      pos: 'verb',      ipa: '/ˈbɑːr.ɡən/',       emoji: '💵', thai: 'ต่อรองราคา',            def: 'to discuss the terms of a deal, especially the price',            example: 'They bargained hard over the final figure.',          synonym: 'haggle',     antonym: null },
        { word: 'deadlock',     pos: 'noun',      ipa: '/ˈded.lɑːk/',       emoji: '🚧', thai: 'ทางตัน / ภาวะชะงักงัน', def: 'a situation in which no agreement can be reached',                example: 'The talks reached a deadlock over pricing.',          synonym: 'stalemate',  antonym: null },
        { word: 'mutual',       pos: 'adjective', ipa: '/ˈmjuː.tʃu.əl/',    emoji: '🤝', thai: 'ซึ่งกันและกัน / ร่วมกัน', def: 'shared or felt by two or more people equally',                   example: 'We are looking for a mutual benefit.',                synonym: 'shared',     antonym: 'one-sided' },
        { word: 'counteroffer', pos: 'noun',      ipa: '/ˈkaʊn.t̬ɚˌɑː.fɚ/', emoji: '🔄', thai: 'ข้อเสนอโต้กลับ',        def: 'an offer made in response to another offer',                      example: 'We rejected their price and made a counteroffer.',    synonym: null,         antonym: null },
        { word: 'flexible',     pos: 'adjective', ipa: '/ˈflek.sə.bəl/',    emoji: '🧘', thai: 'ยืดหยุ่น',              def: 'able to change or be changed easily to suit a situation',         example: 'We can be flexible on the payment terms.',            synonym: 'adaptable',  antonym: 'rigid' },
      ]
    },

    grammar: {
      id: 'b2-unit-3-grammar',
      title: 'Conditionals (Second & Third)',
      thai: 'ประโยคเงื่อนไข (Second และ Third Conditional)',
      emoji: '🔀',
      level: 'B2',
      summary: 'เรียนรู้การเสนอเงื่อนไขและสถานการณ์สมมติในการเจรจา ด้วย Second Conditional (สมมติปัจจุบัน/อนาคต) และ Third Conditional (สมมติในอดีต) ซึ่งเป็นภาษาสุภาพและมีชั้นเชิงในการต่อรอง',
      explanation: [
        {
          heading: 'Second Conditional (สมมติที่ไม่จริง/ไม่น่าเป็นไปได้)',
          body: 'โครงสร้าง: If + Past Simple, ... would + verb\n\nใช้เสนอเงื่อนไขอย่างสุภาพหรือสมมติสถานการณ์\n"If you ordered more, we would offer a discount."\n"If I were you, I would accept the deal."\n\n⚠️ หมายเหตุ: ใช้ were กับทุกประธานในภาษาทางการ (If I were / If he were)'
        },
        {
          heading: 'Third Conditional (สมมติในอดีตที่ไม่เกิดขึ้น)',
          body: 'โครงสร้าง: If + Past Perfect, ... would have + past participle\n\nใช้พูดถึงสิ่งที่ไม่ได้เกิดขึ้นในอดีตและผลที่ตามมา\n"If you had signed earlier, we would have delivered on time."\n"We would have agreed if they had lowered the price."'
        },
        {
          heading: 'Softening & Polite Bargaining',
          body: 'ในการเจรจา conditionals ช่วยให้ข้อเสนอฟังดูสุภาพและเปิดทาง\n\nแทน "Give us a discount" (ตรงเกินไป)\nใช้ "If you could offer a discount, we would place a larger order."\n\nสังเกต would / could / might ทำให้ข้อเสนอนุ่มนวลขึ้น'
        }
      ],
      examples: [
        { en: 'If you lowered the price, we would sign today.',                    th: 'ถ้าคุณลดราคาลง เราจะเซ็นสัญญาวันนี้เลย' },
        { en: 'If I were in your position, I would consider it carefully.',        th: 'ถ้าฉันอยู่ในตำแหน่งของคุณ ฉันจะพิจารณาอย่างรอบคอบ' },
        { en: 'We would offer free shipping if you ordered in bulk.',              th: 'เราจะให้บริการจัดส่งฟรีถ้าคุณสั่งซื้อจำนวนมาก' },
        { en: 'If they had been more flexible, we would have reached a deal.',     th: 'ถ้าพวกเขายืดหยุ่นกว่านี้ เราคงบรรลุข้อตกลงไปแล้ว' },
        { en: 'If we had known about the deadline, we would have prepared better.', th: 'ถ้าเรารู้เรื่องกำหนดส่งก่อนหน้านี้ เราคงเตรียมตัวได้ดีกว่านี้' },
        { en: 'If you could extend the deadline, it would help us enormously.',    th: 'ถ้าคุณสามารถขยายกำหนดเวลาได้ จะช่วยเราได้มากเลย' },
      ],
      practice: [
        { id: 'b2u3-gr-p1', type: 'fill-in-blank',  prompt: 'If you ordered more, we ___ offer a discount. (would/will)',        answer: 'would', acceptedVariants: [], explanation: 'Second Conditional ใช้ would ในประโยคหลัก' },
        { id: 'b2u3-gr-p2', type: 'multiple-choice', prompt: 'Complete: If I ___ you, I would accept the offer.',                 options: ['am','was','were','be'], correctIndex: 2, explanation: 'ในภาษาทางการใช้ "If I were" (subjunctive)' },
        { id: 'b2u3-gr-p3', type: 'multiple-choice', prompt: 'Third Conditional: If they had lowered the price, we ___ signed.', options: ['will have','would have','would','had'], correctIndex: 1, explanation: 'Third Conditional ใช้ would have + past participle' },
        { id: 'b2u3-gr-p4', type: 'fill-in-blank',  prompt: 'If you had told us earlier, we ___ have prepared. (would/will)',    answer: 'would', acceptedVariants: [], explanation: 'Third Conditional ใช้ would have' },
      ],
      quiz: [
        { id: 'b2u3-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct Second Conditional sentence.',                 options: ['If you lower the price, we would sign.','If you lowered the price, we would sign.','If you lowered the price, we will sign.','If you will lower the price, we sign.'], correctIndex: 1, explanation: 'If + Past Simple, would + verb' },
        { id: 'b2u3-gr-q2', type: 'fill-in-blank',  prompt: 'If we had known, we ___ have acted differently.',                  answer: 'would', acceptedVariants: [], explanation: 'Third Conditional: would have + past participle' },
        { id: 'b2u3-gr-q3', type: 'multiple-choice', prompt: 'Which sentence is a correct Third Conditional?',                  options: ['If they had agreed, we would have started.','If they agreed, we would have started.','If they had agreed, we will start.','If they agree, we would start.'], correctIndex: 0, explanation: 'If + Past Perfect, would have + past participle' },
        { id: 'b2u3-gr-q4', type: 'multiple-choice', prompt: 'Which is the most polite way to bargain?',                       options: ['Give us a discount now.','You must lower the price.','If you could lower the price, we would order more.','Lower it or no deal.'], correctIndex: 2, explanation: 'conditionals + could/would ทำให้ข้อเสนอสุภาพขึ้น' },
      ]
    },

    listening: {
      id: 'b2-unit-3-listening',
      type: 'Conversation',
      title: 'Negotiating a Supply Contract',
      thai: 'การเจรจาสัญญาจัดหาสินค้า',
      emoji: '🎧',
      level: 'B2',
      segments: [
        { speaker: 'Buyer',    text: 'We’re interested in your product, but frankly, your price is a little high for us.',        thai: 'เราสนใจสินค้าของคุณ แต่พูดตรง ๆ ว่าราคาสูงไปนิดสำหรับเรา' },
        { speaker: 'Supplier', text: 'I understand. If you ordered in larger quantities, we could certainly offer a better rate.',  thai: 'ผมเข้าใจครับ ถ้าคุณสั่งในปริมาณที่มากขึ้น เราให้ราคาที่ดีกว่านี้ได้แน่นอน' },
        { speaker: 'Buyer',    text: 'That’s helpful. What if we committed to a twelve-month contract?',                        thai: 'นั่นช่วยได้มากเลยค่ะ ถ้าเราตกลงทำสัญญาสิบสองเดือนล่ะ?' },
        { speaker: 'Supplier', text: 'In that case, I’d be willing to reduce the unit price by eight percent.',                thai: 'ในกรณีนั้น ผมยินดีลดราคาต่อหน่วยลงแปดเปอร์เซ็นต์ครับ' },
        { speaker: 'Buyer',    text: 'We were hoping for ten. Could you meet us halfway on delivery costs as well?',               thai: 'เราหวังว่าจะได้สิบเปอร์เซ็นต์ คุณช่วยพบกันครึ่งทางเรื่องค่าจัดส่งด้วยได้ไหม?' },
        { speaker: 'Supplier', text: 'If we agreed on nine percent, I could include free delivery. Would that work for you?',      thai: 'ถ้าเราตกลงที่เก้าเปอร์เซ็นต์ ผมรวมค่าจัดส่งฟรีให้ได้ แบบนั้นโอเคไหมครับ?' },
        { speaker: 'Buyer',    text: 'That sounds like a fair compromise. I think we have a deal.',                                thai: 'ฟังดูเป็นการประนีประนอมที่ยุติธรรมดี ฉันคิดว่าเราตกลงกันได้แล้วค่ะ' },
        { speaker: 'Supplier', text: 'Excellent. I’ll draw up the contract and send it over this afternoon.',                  thai: 'ยอดเยี่ยมครับ ผมจะร่างสัญญาและส่งให้บ่ายนี้เลย' },
      ],
      questions: [
        { id: 'b2u3-ls-q1', type: 'multiple-choice', prompt: 'What is the buyer’s main concern at the start?', options: ['The quality','The high price','The delivery date','The colour'], correctIndex: 1, explanation: 'ผู้ซื้อบอกว่า "your price is a little high for us"' },
        { id: 'b2u3-ls-q2', type: 'multiple-choice', prompt: 'What does the buyer offer in exchange for a lower price?', options: ['A cash payment','A twelve-month contract','A public review','A bigger office'], correctIndex: 1, explanation: 'ผู้ซื้อพูดว่า "What if we committed to a twelve-month contract?"' },
        { id: 'b2u3-ls-q3', type: 'multiple-choice', prompt: 'What discount do they finally agree on?', options: ['Eight percent','Nine percent','Ten percent','Twelve percent'], correctIndex: 1, explanation: 'พวกเขาตกลงที่ nine percent พร้อมค่าจัดส่งฟรี' },
        { id: 'b2u3-ls-q4', type: 'multiple-choice', prompt: 'What does the supplier include at nine percent?', options: ['Extra products','Free delivery','A longer warranty','Training'], correctIndex: 1, explanation: 'ผู้ขายพูดว่า "I could include free delivery"' },
      ]
    },

    reading: {
      id: 'b2-unit-3-reading',
      type: 'Article',
      title: 'The Art of Win-Win Negotiation',
      thai: 'ศิลปะของการเจรจาแบบได้ประโยชน์ทั้งสองฝ่าย',
      emoji: '📖',
      level: 'B2',
      minutes: 4,
      paragraphs: [
        'Many people imagine that negotiation is a battle, in which one side wins only if the other loses. Experienced negotiators, however, know that the most durable agreements are those in which both parties feel they have gained something. This approach, often called win-win negotiation, focuses on mutual benefit rather than on defeating the other side.',
        'The foundation of any successful negotiation is thorough preparation. Before entering talks, you should identify your own priorities, the concessions you are willing to make, and the point beyond which you cannot go. Understanding the other party’s needs is just as important, because it allows you to propose solutions that satisfy both sides.',
        'During the discussion, skilled negotiators listen far more than they speak. By asking open questions, they discover what the other side truly values, which is often different from what they first demand. If the talks reach a deadlock, an experienced negotiator will look for a creative concession, offering something of low cost to them but high value to the other party.',
        'Finally, it is essential to remain flexible and to protect the relationship. A deal that leaves the other side feeling cheated may collapse later, or damage future cooperation. The best negotiators aim for a fair compromise that both parties are happy to honour, because a reputation for fairness is itself a valuable form of leverage.',
      ],
      dialogue: null,
      glossary: [
        { word: 'durable',    thai: 'ที่คงทน / ยั่งยืน',      def: 'lasting a long time without failing' },
        { word: 'priorities', thai: 'สิ่งที่สำคัญเป็นอันดับต้น', def: 'the things that are most important and must be dealt with first' },
        { word: 'deadlock',   thai: 'ทางตัน',                 def: 'a situation in which no progress or agreement is possible' },
        { word: 'honour',     thai: 'ปฏิบัติตาม / รักษาสัญญา',  def: 'to keep or fulfil an agreement or promise' },
      ],
      summary: 'The best negotiators aim for win-win outcomes through careful preparation, active listening, creative concessions, and by protecting the relationship with a fair compromise both sides will honour.',
      summaryThai: 'นักเจรจาที่เก่งที่สุดมุ่งผลลัพธ์ที่ได้ประโยชน์ทั้งสองฝ่าย ผ่านการเตรียมตัวอย่างรอบคอบ การฟังอย่างตั้งใจ การยอมผ่อนปรนอย่างสร้างสรรค์ และการรักษาความสัมพันธ์ด้วยการประนีประนอมที่เป็นธรรม',
      questions: [
        { id: 'b2u3-rd-q1', type: 'multiple-choice', prompt: 'What do experienced negotiators believe about the best agreements?', options: ['One side must lose','Both parties should feel they gained something','Speed is most important','Price is the only issue'], correctIndex: 1, explanation: 'บทความบอกว่าข้อตกลงที่ดีคือ "both parties feel they have gained something"' },
        { id: 'b2u3-rd-q2', type: 'multiple-choice', prompt: 'What is the foundation of a successful negotiation?', options: ['Aggression','Thorough preparation','A loud voice','A big budget'], correctIndex: 1, explanation: 'บทความบอกว่า "The foundation ... is thorough preparation"' },
        { id: 'b2u3-rd-q3', type: 'multiple-choice', prompt: 'What do skilled negotiators do more of during talks?', options: ['Talk','Listen','Argue','Interrupt'], correctIndex: 1, explanation: 'บทความบอกว่า "skilled negotiators listen far more than they speak"' },
        { id: 'b2u3-rd-q4', type: 'multiple-choice', prompt: 'Why should you protect the relationship?', options: ['It looks polite','A cheated party may cause the deal to collapse','It saves money','It ends talks faster'], correctIndex: 1, explanation: 'บทความบอกว่าข้อตกลงที่ทำให้อีกฝ่ายรู้สึกถูกโกง "may collapse later"' },
      ]
    },

    test: {
      id: 'b2-unit-3-test',
      passMark: 0.70,
      questions: [
        { id: 'b2u3-t-01', type: 'multiple-choice', prompt: '"การประนีประนอม" ในภาษาอังกฤษคือคำใด?',              options: ['deadlock','compromise','leverage','concession'], correctIndex: 1, explanation: '"compromise" = การประนีประนอม' },
        { id: 'b2u3-t-02', type: 'multiple-choice', prompt: 'What does "deadlock" mean?',                          options: ['A quick agreement','A situation with no agreement possible','A discount','A signature'], correctIndex: 1, explanation: '"deadlock" = ทางตัน / ภาวะชะงักงัน' },
        { id: 'b2u3-t-03', type: 'fill-in-blank',   prompt: 'The opposite of "rigid" is ___.',                    answer: 'flexible', acceptedVariants: [], explanation: '"flexible" (ยืดหยุ่น) ตรงข้ามกับ "rigid" (แข็งทื่อ)' },
        { id: 'b2u3-t-04', type: 'multiple-choice', prompt: 'Choose the correct Second Conditional.',             options: ['If you lower the price, we would sign.','If you lowered the price, we would sign.','If you lowered the price, we will sign.','If you will lower it, we sign.'], correctIndex: 1, explanation: 'If + Past Simple, would + verb' },
        { id: 'b2u3-t-05', type: 'fill-in-blank',   prompt: 'If we had known earlier, we ___ have prepared better.', answer: 'would', acceptedVariants: [], explanation: 'Third Conditional: would have + past participle' },
        { id: 'b2u3-t-06', type: 'multiple-choice', prompt: 'Which is the most polite way to bargain?',            options: ['Lower the price now.','You must give a discount.','If you could lower the price, we would order more.','No discount, no deal.'], correctIndex: 2, explanation: 'conditionals + could/would ทำให้สุภาพ' },
        { id: 'b2u3-t-07', type: 'fill-in-blank',   prompt: 'Shared or felt equally by both sides is ___ benefit.', answer: 'mutual', acceptedVariants: [], explanation: '"mutual" = ซึ่งกันและกัน / ร่วมกัน' },
        { id: 'b2u3-t-08', type: 'multiple-choice', prompt: 'In the listening, what does the buyer offer for a lower price?', options: ['Cash','A twelve-month contract','A review','An office'], correctIndex: 1, explanation: 'ผู้ซื้อเสนอทำสัญญาสิบสองเดือน' },
        { id: 'b2u3-t-09', type: 'multiple-choice', prompt: 'In the listening, what discount do they finally agree on?', options: ['Eight percent','Nine percent','Ten percent','Twelve percent'], correctIndex: 1, explanation: 'พวกเขาตกลงที่เก้าเปอร์เซ็นต์พร้อมค่าจัดส่งฟรี' },
        { id: 'b2u3-t-10', type: 'multiple-choice', prompt: 'In the reading, what do skilled negotiators do more of?', options: ['Talk','Listen','Argue','Interrupt'], correctIndex: 1, explanation: 'บทความบอกว่าพวกเขา "listen far more than they speak"' },
      ]
    }
  },

  // ==================================================================
  // B2 Unit 4: Presentation
  // ==================================================================
  {
    id: 'b2-unit-4',
    title: 'Unit 4: Presentation',
    thai: 'บทที่ 4: การนำเสนอ',
    emoji: '📊',

    vocabulary: {
      id: 'b2-unit-4-vocab',
      title: 'Presentations',
      thai: 'คำศัพท์การนำเสนอ',
      emoji: '📊',
      level: 'B2',
      words: [
        { word: 'audience',    pos: 'noun',      ipa: '/ˈɑː.di.əns/',    emoji: '👥', thai: 'ผู้ฟัง / ผู้ชม',        def: 'the group of people who watch or listen to a presentation',       example: 'Know your audience before you prepare the slides.',    synonym: 'listeners',  antonym: null },
        { word: 'slide',       pos: 'noun',      ipa: '/slaɪd/',         emoji: '🖼️', thai: 'สไลด์',                def: 'a single screen of a digital presentation',                       example: 'Please move on to the next slide.',                    synonym: null,         antonym: null },
        { word: 'highlight',   pos: 'verb',      ipa: '/ˈhaɪ.laɪt/',     emoji: '🔦', thai: 'เน้น / ชี้ให้เห็น',     def: 'to draw special attention to something',                          example: 'I want to highlight three key results.',               synonym: 'emphasise',  antonym: null },
        { word: 'summarise',   pos: 'verb',      ipa: '/ˈsʌm.ə.raɪz/',   emoji: '📝', thai: 'สรุป',                 def: 'to give the main points briefly',                                 example: 'Let me summarise the main findings.',                  synonym: 'recap',      antonym: null },
        { word: 'visual aid',  pos: 'noun',      ipa: '/ˌvɪʒ.u.əl ˈeɪd/', emoji: '📈', thai: 'สื่อประกอบภาพ',        def: 'a chart, image, or object used to help explain ideas',            example: 'A good visual aid makes data easier to understand.',   synonym: null,         antonym: null },
        { word: 'engage',      pos: 'verb',      ipa: '/ɪnˈɡeɪdʒ/',      emoji: '🎯', thai: 'ดึงดูดความสนใจ',       def: 'to attract and hold someone’s interest',                     example: 'A strong opening helps you engage the audience.',      synonym: 'captivate',  antonym: 'bore' },
        { word: 'persuasive',  pos: 'adjective', ipa: '/pɚˈsweɪ.sɪv/',   emoji: '🗣️', thai: 'ที่โน้มน้าวใจ',        def: 'good at making people agree with you',                            example: 'Her persuasive tone won over the investors.',          synonym: 'convincing', antonym: null },
        { word: 'handout',     pos: 'noun',      ipa: '/ˈhænd.aʊt/',     emoji: '📄', thai: 'เอกสารประกอบ',         def: 'a printed sheet given to an audience',                            example: 'I’ve prepared a handout with the key figures.',   synonym: null,         antonym: null },
      ]
    },

    grammar: {
      id: 'b2-unit-4-grammar',
      title: 'The Passive Voice',
      thai: 'ประโยคกรรม (Passive Voice)',
      emoji: '🔄',
      level: 'B2',
      summary: 'เรียนรู้การใช้ Passive Voice เพื่อนำเสนอข้อมูล ผลลัพธ์ และกระบวนการอย่างเป็นทางการ โดยเน้นที่การกระทำหรือผลลัพธ์มากกว่าผู้กระทำ ซึ่งพบมากในภาษาธุรกิจและวิชาการ',
      explanation: [
        {
          heading: 'Form: be + past participle',
          body: 'โครงสร้าง: subject + be (ผันตามกาล) + past participle (+ by ...)\n\nActive: The team completed the survey.\nPassive: The survey was completed (by the team).\n\nPresent: is/are + V3 · Past: was/were + V3 · Perfect: has/have been + V3'
        },
        {
          heading: 'When to Use the Passive',
          body: 'ใช้เมื่อ:\n1) ผู้กระทำไม่สำคัญหรือไม่ทราบ: "The data was collected last month."\n2) ต้องการเน้นผลลัพธ์: "Sales were increased by 20%."\n3) ต้องการน้ำเสียงเป็นทางการ/เป็นกลาง (พบมากในรายงานและการนำเสนอ)\n\n⚠️ ไม่ต้องระบุ by เสมอไป ถ้าผู้กระทำไม่สำคัญ'
        },
        {
          heading: 'Passive in Presentations',
          body: 'วลีที่พบบ่อยในการนำเสนอ:\n"As can be seen in this chart, ..." (ตามที่เห็นในแผนภูมินี้)\n"The results are shown on the next slide." (ผลลัพธ์แสดงในสไลด์ถัดไป)\n"This method is widely used in the industry." (วิธีนี้ถูกใช้กันอย่างแพร่หลาย)'
        }
      ],
      examples: [
        { en: 'The report was written by the finance team.',            th: 'รายงานถูกเขียนโดยทีมการเงิน' },
        { en: 'These figures are updated every quarter.',               th: 'ตัวเลขเหล่านี้ถูกปรับปรุงทุกไตรมาส' },
        { en: 'The product will be launched next month.',               th: 'ผลิตภัณฑ์จะถูกเปิดตัวเดือนหน้า' },
        { en: 'As can be seen on this slide, sales have risen.',        th: 'ตามที่เห็นในสไลด์นี้ ยอดขายเพิ่มขึ้น' },
        { en: 'The survey was conducted among 500 customers.',          th: 'การสำรวจถูกดำเนินการในกลุ่มลูกค้า 500 คน' },
        { en: 'A handout will be provided at the end of the talk.',     th: 'จะมีการแจกเอกสารประกอบตอนท้ายของการบรรยาย' },
      ],
      practice: [
        { id: 'b2u4-gr-p1', type: 'fill-in-blank',  prompt: 'Passive: The report ___ written by the team. (was/were)',        answer: 'was', acceptedVariants: [], explanation: 'report เป็นเอกพจน์ ใช้ was + past participle' },
        { id: 'b2u4-gr-p2', type: 'multiple-choice', prompt: 'Make passive: "They update the figures monthly."',              options: ['The figures update monthly.','The figures are updated monthly.','The figures were update monthly.','The figures updating monthly.'], correctIndex: 1, explanation: 'Present passive: are + updated' },
        { id: 'b2u4-gr-p3', type: 'multiple-choice', prompt: 'Choose the correct future passive.',                          options: ['The product will launch next month.','The product will be launched next month.','The product will be launch next month.','The product is launched next month.'], correctIndex: 1, explanation: 'Future passive: will be + past participle' },
        { id: 'b2u4-gr-p4', type: 'fill-in-blank',  prompt: 'The survey ___ conducted last year. (was/is)',                  answer: 'was', acceptedVariants: [], explanation: 'อดีต (last year) ใช้ was + conducted' },
      ],
      quiz: [
        { id: 'b2u4-gr-q1', type: 'multiple-choice', prompt: 'Which sentence is in the passive voice?',                     options: ['The team wrote the report.','The report was written by the team.','The team is writing the report.','The team will write the report.'], correctIndex: 1, explanation: '"was written" คือ be + past participle = passive' },
        { id: 'b2u4-gr-q2', type: 'fill-in-blank',  prompt: 'These results ___ shown on the next slide. (is/are)',          answer: 'are', acceptedVariants: [], explanation: 'results เป็นพหูพจน์ ใช้ are + shown' },
        { id: 'b2u4-gr-q3', type: 'multiple-choice', prompt: 'Make passive: "We will present the findings tomorrow."',      options: ['The findings will present tomorrow.','The findings are presented tomorrow.','The findings will be presented tomorrow.','The findings were presented tomorrow.'], correctIndex: 2, explanation: 'Future passive: will be + presented' },
        { id: 'b2u4-gr-q4', type: 'multiple-choice', prompt: 'Present perfect passive: "The data ___ analysed."',            options: ['has been','have being','was been','is been'], correctIndex: 0, explanation: 'data (เอกพจน์ในบริบทนี้) ใช้ has been + analysed' },
      ]
    },

    listening: {
      id: 'b2-unit-4-listening',
      type: 'Podcast',
      title: 'Tips for a Great Presentation',
      thai: 'เคล็ดลับสำหรับการนำเสนอที่ยอดเยี่ยม',
      emoji: '🎧',
      level: 'B2',
      segments: [
        { speaker: 'Host',   text: 'Welcome back to the podcast. Today we’re joined by presentation coach Daniel Reed.',            thai: 'ยินดีต้อนรับกลับสู่พอดแคสต์ วันนี้เรามีโค้ชการนำเสนอ แดเนียล รีด มาร่วมพูดคุย' },
        { speaker: 'Daniel', text: 'Thanks for having me. The biggest mistake I see is that people forget who their audience is.',    thai: 'ขอบคุณที่เชิญครับ ข้อผิดพลาดที่ใหญ่ที่สุดที่ผมเห็นคือคนมักลืมว่าผู้ฟังของตนคือใคร' },
        { speaker: 'Host',   text: 'So how should a speaker begin?',                                                                    thai: 'แล้วผู้พูดควรเริ่มต้นอย่างไรดีครับ?' },
        { speaker: 'Daniel', text: 'Start with a strong hook — a surprising fact or a question — to engage the audience immediately.', thai: 'เริ่มด้วยการเปิดที่ทรงพลัง เช่น ข้อเท็จจริงที่น่าประหลาดใจหรือคำถาม เพื่อดึงดูดผู้ฟังทันที' },
        { speaker: 'Host',   text: 'And what about the slides themselves?',                                                            thai: 'แล้วสไลด์ล่ะครับ?' },
        { speaker: 'Daniel', text: 'Keep them simple. Each slide should highlight one idea, and text should be kept to a minimum.',     thai: 'ทำให้เรียบง่าย แต่ละสไลด์ควรเน้นแนวคิดเดียว และควรใช้ข้อความให้น้อยที่สุด' },
        { speaker: 'Host',   text: 'Any advice for nervous speakers?',                                                                thai: 'มีคำแนะนำสำหรับคนที่ตื่นเต้นไหมครับ?' },
        { speaker: 'Daniel', text: 'Practise out loud several times, and remember to pause. A well-placed pause is very persuasive.',   thai: 'ฝึกพูดออกเสียงหลาย ๆ ครั้ง และอย่าลืมเว้นจังหวะ การหยุดพักที่เหมาะเจาะช่วยโน้มน้าวใจได้มาก' },
      ],
      questions: [
        { id: 'b2u4-ls-q1', type: 'multiple-choice', prompt: 'According to Daniel, what is the biggest mistake speakers make?', options: ['Talking too fast','Forgetting who their audience is','Using no slides','Speaking too quietly'], correctIndex: 1, explanation: 'แดเนียลบอกว่า "people forget who their audience is"' },
        { id: 'b2u4-ls-q2', type: 'multiple-choice', prompt: 'How should a speaker begin?', options: ['With an apology','With a strong hook','By reading the slides','By thanking everyone at length'], correctIndex: 1, explanation: 'เขาบอกว่า "Start with a strong hook"' },
        { id: 'b2u4-ls-q3', type: 'multiple-choice', prompt: 'What advice does Daniel give about slides?', options: ['Add lots of text','Keep them simple, one idea each','Use many animations','Avoid images'], correctIndex: 1, explanation: 'เขาบอกว่า "Keep them simple. Each slide should highlight one idea"' },
        { id: 'b2u4-ls-q4', type: 'multiple-choice', prompt: 'What does Daniel say is very persuasive?', options: ['A loud voice','A well-placed pause','A long introduction','Reading quickly'], correctIndex: 1, explanation: 'เขาบอกว่า "A well-placed pause is very persuasive"' },
      ]
    },

    reading: {
      id: 'b2-unit-4-reading',
      type: 'Article',
      title: 'Delivering a Memorable Presentation',
      thai: 'การนำเสนอที่น่าจดจำ',
      emoji: '📖',
      level: 'B2',
      minutes: 4,
      paragraphs: [
        'A presentation is judged not only by the quality of its content but also by the way it is delivered. Even the most valuable information can be lost if it is presented in a dull or confusing manner. For this reason, professional speakers devote as much attention to their delivery as they do to their data.',
        'Structure is the backbone of any good talk. A clear presentation is usually divided into three parts: an introduction that tells the audience what will be covered, a main body in which each point is developed, and a conclusion in which the key messages are summarised. When this structure is followed, listeners find it much easier to follow the argument and remember it afterwards.',
        'Visual aids, when used well, can transform a presentation. A complex set of figures that would be difficult to describe in words can be understood at a glance if it is shown in a well-designed chart. However, slides should support the speaker, not replace them; a screen crowded with text is quickly ignored by the audience.',
        'Perhaps the most important skill of all is the ability to engage the listeners. This is achieved through eye contact, a varied tone of voice, and a genuine enthusiasm for the subject. A speaker who is clearly passionate is far more persuasive, and audiences are far more likely to be won over by someone who appears to believe in every word.',
      ],
      dialogue: null,
      glossary: [
        { word: 'delivery',    thai: 'การนำเสนอ / วิธีพูด',   def: 'the way in which a speech or presentation is given' },
        { word: 'backbone',    thai: 'แกนหลัก / โครงสร้างหลัก', def: 'the most important part that supports everything else' },
        { word: 'at a glance', thai: 'ในพริบตา / อย่างรวดเร็ว', def: 'immediately, with only a quick look' },
        { word: 'enthusiasm',  thai: 'ความกระตือรือร้น',       def: 'a strong feeling of interest and excitement' },
      ],
      summary: 'A memorable presentation depends on strong delivery, a clear three-part structure, well-designed visual aids that support the speaker, and the ability to engage the audience through eye contact, varied tone, and genuine enthusiasm.',
      summaryThai: 'การนำเสนอที่น่าจดจำขึ้นอยู่กับการนำเสนอที่ดี โครงสร้างสามส่วนที่ชัดเจน สื่อภาพที่ออกแบบดีเพื่อสนับสนุนผู้พูด และความสามารถในการดึงดูดผู้ฟังด้วยการสบตา น้ำเสียงที่หลากหลาย และความกระตือรือร้นที่จริงใจ',
      questions: [
        { id: 'b2u4-rd-q1', type: 'multiple-choice', prompt: 'A presentation is judged not only by content but also by what?', options: ['Its length','The way it is delivered','The number of slides','The room size'], correctIndex: 1, explanation: 'บทความบอกว่า "judged not only by the quality of its content but also by the way it is delivered"' },
        { id: 'b2u4-rd-q2', type: 'multiple-choice', prompt: 'What three parts make up a clear presentation?', options: ['Title, body, credits','Introduction, main body, conclusion','Slides, notes, handout','Question, answer, break'], correctIndex: 1, explanation: 'บทความระบุ introduction, main body, และ conclusion' },
        { id: 'b2u4-rd-q3', type: 'multiple-choice', prompt: 'What should visual aids do?', options: ['Replace the speaker','Support the speaker','Contain lots of text','Be avoided'], correctIndex: 1, explanation: 'บทความบอกว่า "slides should support the speaker, not replace them"' },
        { id: 'b2u4-rd-q4', type: 'multiple-choice', prompt: 'What makes a speaker more persuasive?', options: ['Reading from notes','Genuine enthusiasm','A quiet voice','Many slides'], correctIndex: 1, explanation: 'บทความบอกว่า "A speaker who is clearly passionate is far more persuasive"' },
      ]
    },

    test: {
      id: 'b2-unit-4-test',
      passMark: 0.70,
      questions: [
        { id: 'b2u4-t-01', type: 'multiple-choice', prompt: '"ผู้ฟัง / ผู้ชม" ในภาษาอังกฤษคือคำใด?',              options: ['handout','audience','slide','visual aid'], correctIndex: 1, explanation: '"audience" = ผู้ฟัง / ผู้ชม' },
        { id: 'b2u4-t-02', type: 'multiple-choice', prompt: 'What does "summarise" mean?',                        options: ['To ignore','To give the main points briefly','To repeat exactly','To read aloud'], correctIndex: 1, explanation: '"summarise" = สรุป (ให้ประเด็นหลักอย่างกระชับ)' },
        { id: 'b2u4-t-03', type: 'fill-in-blank',   prompt: 'To draw special attention to something is to ___ it.', answer: 'highlight', acceptedVariants: [], explanation: '"highlight" = เน้น / ชี้ให้เห็น' },
        { id: 'b2u4-t-04', type: 'multiple-choice', prompt: 'Which sentence is in the passive voice?',           options: ['The team wrote the report.','The report was written by the team.','The team writes reports.','The team will write it.'], correctIndex: 1, explanation: '"was written" = be + past participle = passive' },
        { id: 'b2u4-t-05', type: 'fill-in-blank',   prompt: 'The survey ___ conducted last year. (was/is)',      answer: 'was', acceptedVariants: [], explanation: 'อดีตใช้ was + conducted' },
        { id: 'b2u4-t-06', type: 'multiple-choice', prompt: 'Make it passive: "We will present the findings."',   options: ['The findings will present.','The findings will be presented.','The findings are presented.','The findings presented.'], correctIndex: 1, explanation: 'Future passive: will be + presented' },
        { id: 'b2u4-t-07', type: 'fill-in-blank',   prompt: 'These results ___ shown on the next slide. (is/are)', answer: 'are', acceptedVariants: [], explanation: 'results พหูพจน์ ใช้ are + shown' },
        { id: 'b2u4-t-08', type: 'multiple-choice', prompt: 'In the listening, what is the biggest mistake speakers make?', options: ['Talking too fast','Forgetting the audience','Using no slides','Speaking quietly'], correctIndex: 1, explanation: 'แดเนียลบอกว่า "people forget who their audience is"' },
        { id: 'b2u4-t-09', type: 'multiple-choice', prompt: 'In the listening, what does Daniel say is persuasive?', options: ['A loud voice','A well-placed pause','A long intro','Reading fast'], correctIndex: 1, explanation: 'เขาบอกว่า "A well-placed pause is very persuasive"' },
        { id: 'b2u4-t-10', type: 'multiple-choice', prompt: 'In the reading, what should visual aids do?',        options: ['Replace the speaker','Support the speaker','Hold lots of text','Be avoided'], correctIndex: 1, explanation: 'บทความบอกว่า "slides should support the speaker, not replace them"' },
      ]
    }
  }
]
