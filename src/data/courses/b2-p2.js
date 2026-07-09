// B2 Part 2: Problem Solving, Social Media, Business Email
export const b2p2 = [
  // ==========================================================================
  // B2 Unit 5: Problem Solving
  // ==========================================================================
  {
    id: 'b2-unit-5',
    title: 'Unit 5: Problem Solving',
    thai: 'บทที่ 5: การแก้ปัญหา',
    emoji: '🧩',

    vocabulary: {
      id: 'b2-unit-5-vocab',
      title: 'Problem Solving',
      thai: 'การแก้ปัญหา',
      emoji: '🧩',
      level: 'B2',
      words: [
        { word: 'obstacle',    pos: 'noun',      ipa: '/ˈɒb.stə.kəl/',    emoji: '🚧', thai: 'อุปสรรค',              def: 'something that blocks your way or makes progress difficult',       example: 'A lack of funding was the biggest obstacle to the project.',    synonym: 'barrier',      antonym: 'advantage' },
        { word: 'analyse',     pos: 'verb',      ipa: '/ˈæn.ə.laɪz/',     emoji: '🔍', thai: 'วิเคราะห์',            def: 'to examine something in detail to understand it',                  example: 'We need to analyse the data before making a decision.',         synonym: 'examine',      antonym: null },
        { word: 'feasible',    pos: 'adjective', ipa: '/ˈfiː.zə.bəl/',    emoji: '✅', thai: 'ที่เป็นไปได้',         def: 'possible to do easily or conveniently',                            example: 'Is this solution feasible within our budget?',                  synonym: 'viable',       antonym: 'impractical' },
        { word: 'resolve',     pos: 'verb',      ipa: '/rɪˈzɒlv/',        emoji: '🤝', thai: 'แก้ไข / คลี่คลาย',     def: 'to find a solution to a problem or difficulty',                    example: 'They managed to resolve the dispute peacefully.',               synonym: 'settle',       antonym: 'complicate' },
        { word: 'root cause',  pos: 'noun',      ipa: '/ruːt kɔːz/',      emoji: '🌱', thai: 'สาเหตุที่แท้จริง',      def: 'the fundamental reason why a problem happens',                     example: 'We must identify the root cause, not just the symptoms.',       synonym: 'origin',       antonym: null },
        { word: 'workaround',  pos: 'noun',      ipa: '/ˈwɜːk.ə.raʊnd/',  emoji: '🔧', thai: 'วิธีแก้ชั่วคราว',       def: 'a temporary way of dealing with a problem',                        example: 'Until the bug is fixed, use this workaround.',                  synonym: null,           antonym: null },
        { word: 'trade-off',   pos: 'noun',      ipa: '/ˈtreɪd.ɒf/',      emoji: '⚖️', thai: 'การแลกเปลี่ยนได้เสีย',  def: 'a balance between two things that cannot both be fully achieved',   example: 'There is a trade-off between speed and quality.',               synonym: 'compromise',   antonym: null },
        { word: 'contingency', pos: 'noun',      ipa: '/kənˈtɪn.dʒən.si/',emoji: '🛟', thai: 'แผนสำรอง',            def: 'a plan for an event that may or may not happen',                   example: 'We should have a contingency in case the supplier fails.',      synonym: 'backup plan',  antonym: null },
      ]
    },

    grammar: {
      id: 'b2-unit-5-grammar',
      title: 'Conditionals (2nd, 3rd & Mixed)',
      thai: 'ประโยคเงื่อนไข (แบบที่ 2, 3 และผสม)',
      emoji: '📐',
      level: 'B2',
      summary: 'เรียนรู้การใช้ประโยคเงื่อนไขแบบที่ 2, 3 และแบบผสม เพื่ออภิปรายสถานการณ์สมมติ ผลลัพธ์ในอดีต และการตัดสินใจแก้ปัญหา',
      explanation: [
        {
          heading: 'Second Conditional (สมมติปัจจุบัน/อนาคตที่ไม่จริง)',
          body: 'ใช้พูดถึงสถานการณ์สมมติที่ไม่เป็นจริงหรือไม่น่าจะเกิดขึ้น\n\nโครงสร้าง: If + past simple, ... would + verb\n\nIf we had more time, we would test every option.\n(ถ้าเรามีเวลามากกว่านี้ เราจะทดสอบทุกทางเลือก — แต่จริง ๆ เวลาไม่พอ)'
        },
        {
          heading: 'Third Conditional (สมมติในอดีตที่ไม่เกิดขึ้น)',
          body: 'ใช้พูดถึงเหตุการณ์ในอดีตที่ไม่ได้เกิดขึ้นจริง และผลที่ตามมาที่จินตนาการขึ้น\n\nโครงสร้าง: If + past perfect, ... would have + past participle\n\nIf we had identified the root cause earlier, we would have avoided the delay.\n(ถ้าเราเจอสาเหตุที่แท้จริงเร็วกว่านี้ เราคงเลี่ยงความล่าช้าได้)'
        },
        {
          heading: 'Mixed Conditional (เงื่อนไขผสม)',
          body: 'เชื่อมเงื่อนไขในอดีตกับผลในปัจจุบัน\n\nโครงสร้าง: If + past perfect, ... would + verb (ตอนนี้)\n\nIf we had chosen the other supplier, we would not have this problem now.\n(ถ้าตอนนั้นเราเลือกอีกซัพพลายเออร์ ตอนนี้เราคงไม่มีปัญหานี้)'
        }
      ],
      examples: [
        { en: 'If I were the manager, I would prioritise the root cause.',            th: 'ถ้าฉันเป็นผู้จัดการ ฉันจะให้ความสำคัญกับสาเหตุที่แท้จริงก่อน' },
        { en: 'If we had a bigger budget, this plan would be feasible.',              th: 'ถ้าเรามีงบมากกว่านี้ แผนนี้ก็จะเป็นไปได้' },
        { en: 'If they had listened to the team, the crisis would not have happened.',th: 'ถ้าพวกเขาฟังทีมงาน วิกฤตก็คงไม่เกิดขึ้น' },
        { en: 'We would have resolved it sooner if we had asked for help.',          th: 'เราคงแก้ได้เร็วกว่านี้ถ้าเราขอความช่วยเหลือ' },
        { en: 'If she had studied the data, she would understand the issue today.',  th: 'ถ้าเธอศึกษาข้อมูลมาแล้ว วันนี้เธอก็คงเข้าใจปัญหา' },
        { en: 'What would you do if the workaround failed?',                          th: 'คุณจะทำอย่างไรถ้าวิธีแก้ชั่วคราวไม่ได้ผล?' },
      ],
      practice: [
        { id: 'b2u5-gr-p1', type: 'fill-in-blank',  prompt: 'If we ___ (have) more data, we would decide faster.',                         answer: 'had', acceptedVariants: [], explanation: 'Second conditional ใช้ past simple ในประโยค if' },
        { id: 'b2u5-gr-p2', type: 'multiple-choice', prompt: 'If they had planned better, the project ___ on time.',                        options: ['will finish','would finish','would have finished','finishes'], correctIndex: 2, explanation: 'Third conditional: would have + past participle' },
        { id: 'b2u5-gr-p3', type: 'fill-in-blank',  prompt: 'If I ___ (be) you, I would find the root cause first.',                        answer: 'were', acceptedVariants: ['was'], explanation: 'Second conditional มักใช้ were กับทุกประธาน (were you)' },
      ],
      quiz: [
        { id: 'b2u5-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct second conditional.',                                     options: ['If we have time, we would test it.','If we had time, we would test it.','If we had time, we will test it.','If we have time, we tested it.'], correctIndex: 1, explanation: 'Second conditional: if + past simple, would + verb' },
        { id: 'b2u5-gr-q2', type: 'fill-in-blank',  prompt: 'If we had acted sooner, we ___ (avoid) the loss.',                             answer: 'would have avoided', acceptedVariants: ["would've avoided"], explanation: 'Third conditional: would have + past participle' },
        { id: 'b2u5-gr-q3', type: 'multiple-choice', prompt: 'Which is a mixed conditional?',                                               options: ['If it rains, we stay home.','If I had saved money, I would be rich now.','If I study, I will pass.','If she were tall, she would play basketball.'], correctIndex: 1, explanation: 'Mixed: past perfect (อดีต) + would + verb (ปัจจุบัน)' },
        { id: 'b2u5-gr-q4', type: 'fill-in-blank',  prompt: 'If I ___ (know) about the bug, I would report it now.',                        answer: 'had known', acceptedVariants: [], explanation: 'Mixed conditional ใช้ past perfect ในประโยค if' },
      ]
    },

    listening: {
      id: 'b2-unit-5-listening',
      type: 'Conversation',
      title: 'A Team Tackles a Deadline Crisis',
      thai: 'ทีมงานรับมือวิกฤตกำหนดส่งงาน',
      emoji: '🎧',
      level: 'B2',
      segments: [
        { speaker: 'Priya', text: "We have a serious problem. The client wants the report two days earlier than agreed.", thai: 'เรามีปัญหาใหญ่ ลูกค้าต้องการรายงานเร็วขึ้นสองวันจากที่ตกลงกันไว้' },
        { speaker: 'Marco', text: "Let's not panic. First, we should analyse what is actually causing the delay.",       thai: 'อย่าเพิ่งตื่นตระหนก ก่อนอื่นเราควรวิเคราะห์ว่าอะไรคือสาเหตุที่แท้จริงของความล่าช้า' },
        { speaker: 'Priya', text: "The root cause is that the data team hasn't finished the analysis yet.",              thai: 'สาเหตุที่แท้จริงคือทีมข้อมูลยังวิเคราะห์ไม่เสร็จ' },
        { speaker: 'Marco', text: "Then we need a workaround. Could we deliver a draft first and the full report later?",  thai: 'งั้นเราต้องหาวิธีแก้ชั่วคราว เราส่งฉบับร่างก่อนแล้วส่งฉบับเต็มทีหลังได้ไหม?' },
        { speaker: 'Priya', text: "That's feasible, but there's a trade-off: the draft won't include the final figures.",  thai: 'เป็นไปได้ แต่มีสิ่งที่ต้องแลก คือฉบับร่างจะไม่มีตัวเลขสุดท้าย' },
        { speaker: 'Marco', text: "If we explain that clearly, I think the client will accept it. Let's prepare a contingency too.", thai: 'ถ้าเราอธิบายให้ชัดเจน ฉันคิดว่าลูกค้าจะยอมรับ เรามาเตรียมแผนสำรองด้วย' },
        { speaker: 'Priya', text: "Agreed. If we had started the analysis earlier, we wouldn't be in this situation.",   thai: 'เห็นด้วย ถ้าเราเริ่มวิเคราะห์เร็วกว่านี้ เราคงไม่ตกอยู่ในสถานการณ์นี้' },
        { speaker: 'Marco', text: "True, but let's focus on resolving it now. I'll call the client in ten minutes.",       thai: 'จริง แต่ตอนนี้มาโฟกัสที่การแก้ปัญหากันเถอะ ฉันจะโทรหาลูกค้าในอีกสิบนาที' },
      ],
      questions: [
        { id: 'b2u5-ls-q1', type: 'multiple-choice', prompt: 'What is the main problem?',                        options: ['The client cancelled the project','The client wants the report earlier','The team lost the data','The budget was cut'], correctIndex: 1, explanation: 'Priya พูดว่าลูกค้าต้องการรายงานเร็วขึ้นสองวัน' },
        { id: 'b2u5-ls-q2', type: 'multiple-choice', prompt: 'What is the root cause of the delay?',            options: ['The client changed the topic','The data team is not finished','Marco was on holiday','The software crashed'], correctIndex: 1, explanation: 'สาเหตุที่แท้จริงคือทีมข้อมูลยังไม่เสร็จ' },
        { id: 'b2u5-ls-q3', type: 'multiple-choice', prompt: 'What workaround do they propose?',                options: ['Cancel the report','Hire more staff','Deliver a draft first','Ask for a month extension'], correctIndex: 2, explanation: 'Marco เสนอให้ส่งฉบับร่างก่อน' },
        { id: 'b2u5-ls-q4', type: 'multiple-choice', prompt: 'What is the trade-off of the workaround?',        options: ['It costs more money','The draft lacks final figures','It needs a new team','It delays other projects'], correctIndex: 1, explanation: 'Priya บอกว่าฉบับร่างจะไม่มีตัวเลขสุดท้าย' },
      ]
    },

    reading: {
      id: 'b2-unit-5-reading',
      type: 'Article',
      title: 'A Structured Approach to Problem Solving',
      thai: 'วิธีการแก้ปัญหาอย่างเป็นระบบ',
      emoji: '📖',
      level: 'B2',
      minutes: 4,
      paragraphs: [
        'Every workplace faces problems, but the teams that succeed are not the ones that avoid difficulties altogether. Instead, they are the ones that have a clear, structured method for dealing with them. Rather than reacting impulsively, effective problem solvers slow down and define exactly what the problem is before rushing towards a solution.',
        'The first step is to analyse the situation and identify the root cause. A common mistake is to treat the symptoms while ignoring the underlying issue. For example, if a product keeps failing, replacing it repeatedly is only a temporary workaround; understanding why it fails is what truly resolves the problem. Careful analysis, even when it feels slow, saves time in the long run.',
        'Once the cause is clear, the team should generate several possible solutions and weigh the trade-offs of each. No option is perfect, so decision-makers must consider cost, time, and risk. It is also wise to prepare a contingency plan, because even the most feasible solution can fail. Having a backup ready means the team is never caught completely off guard.',
        'Finally, the best problem solvers review the outcome. They ask what worked, what did not, and what they would do differently next time. This habit of reflection turns every challenge into a lesson, so that future obstacles become easier to overcome. In short, problem solving is less about intelligence and more about discipline and method.',
      ],
      dialogue: null,
      glossary: [
        { word: 'impulsively', thai: 'อย่างหุนหันพลันแล่น', def: 'acting suddenly without careful thought' },
        { word: 'symptoms',    thai: 'อาการ',              def: 'signs that show a problem exists, but not the cause itself' },
        { word: 'weigh',       thai: 'ชั่งน้ำหนัก / พิจารณา', def: 'to carefully consider the advantages and disadvantages' },
        { word: 'off guard',   thai: 'ไม่ทันตั้งตัว',       def: 'not prepared for something that happens' },
      ],
      summary: 'Successful teams solve problems with a structured method: define the problem, find the root cause, weigh trade-offs among solutions, prepare a contingency, and review the outcome to learn for next time.',
      summaryThai: 'ทีมที่ประสบความสำเร็จแก้ปัญหาอย่างเป็นระบบ คือ นิยามปัญหา หาสาเหตุที่แท้จริง ชั่งน้ำหนักข้อดีข้อเสียของทางเลือก เตรียมแผนสำรอง และทบทวนผลลัพธ์เพื่อเรียนรู้',
      questions: [
        { id: 'b2u5-rd-q1', type: 'multiple-choice', prompt: 'According to the article, what makes teams successful?', options: ['Avoiding all problems','Having a structured method','Working faster than others','Never making mistakes'], correctIndex: 1, explanation: 'ทีมที่สำเร็จมีวิธีการที่เป็นระบบชัดเจน' },
        { id: 'b2u5-rd-q2', type: 'multiple-choice', prompt: 'What is a common mistake mentioned?',                  options: ['Analysing too slowly','Treating symptoms not the root cause','Asking too many questions','Preparing too many plans'], correctIndex: 1, explanation: 'ข้อผิดพลาดที่พบบ่อยคือแก้ที่อาการแต่ไม่แก้ที่สาเหตุ' },
        { id: 'b2u5-rd-q3', type: 'multiple-choice', prompt: 'Why should teams prepare a contingency plan?',        options: ['To impress the client','Because even feasible solutions can fail','To save money','To avoid analysis'], correctIndex: 1, explanation: 'เพราะแม้ทางแก้ที่เป็นไปได้ก็อาจล้มเหลวได้' },
        { id: 'b2u5-rd-q4', type: 'multiple-choice', prompt: 'What does the final paragraph say problem solving depends on?', options: ['Intelligence','Luck','Discipline and method','Speed'], correctIndex: 2, explanation: 'บทความสรุปว่าการแก้ปัญหาขึ้นอยู่กับวินัยและวิธีการ' },
      ]
    },

    test: {
      id: 'b2-unit-5-test',
      passMark: 0.70,
      questions: [
        { id: 'b2u5-t-01', type: 'multiple-choice', prompt: '"อุปสรรค" ในภาษาอังกฤษคือคำใด?',                              options: ['obstacle','trade-off','contingency','workaround'], correctIndex: 0, explanation: '"obstacle" = อุปสรรค' },
        { id: 'b2u5-t-02', type: 'multiple-choice', prompt: 'What does "feasible" mean?',                                options: ['เป็นไปไม่ได้','ที่เป็นไปได้','แพงมาก','ยากมาก'], correctIndex: 1, explanation: '"feasible" = ที่เป็นไปได้' },
        { id: 'b2u5-t-03', type: 'fill-in-blank',   prompt: 'The fundamental reason a problem happens is the r___ cause.', answer: 'root', acceptedVariants: [], explanation: '"root cause" = สาเหตุที่แท้จริง' },
        { id: 'b2u5-t-04', type: 'multiple-choice', prompt: 'Choose the correct second conditional.',                   options: ['If we had a plan, we would succeed.','If we have a plan, we would succeed.','If we had a plan, we will succeed.','If we having a plan, we succeed.'], correctIndex: 0, explanation: 'Second conditional: if + past simple, would + verb' },
        { id: 'b2u5-t-05', type: 'fill-in-blank',   prompt: 'If they had tested it, they ___ (find) the bug.',            answer: 'would have found', acceptedVariants: ["would've found"], explanation: 'Third conditional: would have + past participle' },
        { id: 'b2u5-t-06', type: 'multiple-choice', prompt: 'Which sentence is a correct third conditional?',           options: ['If I know, I will help.','If I knew, I would help.','If I had known, I would have helped.','If I know, I helped.'], correctIndex: 2, explanation: 'Third conditional พูดถึงอดีตที่ไม่เกิดขึ้น' },
        { id: 'b2u5-t-07', type: 'fill-in-blank',   prompt: 'A temporary solution to a problem is called a w___.',        answer: 'workaround', acceptedVariants: [], explanation: '"workaround" = วิธีแก้ชั่วคราว' },
        { id: 'b2u5-t-08', type: 'multiple-choice', prompt: 'In the listening, what workaround did the team propose?',   options: ['Cancel the project','Deliver a draft first','Hire more staff','Change the client'], correctIndex: 1, explanation: 'ทีมเสนอให้ส่งฉบับร่างก่อน' },
        { id: 'b2u5-t-09', type: 'multiple-choice', prompt: 'In the listening, what was the root cause of the delay?',   options: ['The data team was not finished','The client changed the topic','The software crashed','The budget was cut'], correctIndex: 0, explanation: 'สาเหตุคือทีมข้อมูลยังไม่เสร็จ' },
        { id: 'b2u5-t-10', type: 'multiple-choice', prompt: 'According to the reading, problem solving depends most on:', options: ['Intelligence','Luck','Discipline and method','Money'], correctIndex: 2, explanation: 'บทความสรุปว่าขึ้นอยู่กับวินัยและวิธีการ' },
      ]
    }
  },

  // ==========================================================================
  // B2 Unit 6: Social Media
  // ==========================================================================
  {
    id: 'b2-unit-6',
    title: 'Unit 6: Social Media',
    thai: 'บทที่ 6: โซเชียลมีเดีย',
    emoji: '📱',

    vocabulary: {
      id: 'b2-unit-6-vocab',
      title: 'Social Media',
      thai: 'โซเชียลมีเดีย',
      emoji: '📱',
      level: 'B2',
      words: [
        { word: 'influencer',   pos: 'noun',      ipa: '/ˈɪn.flu.ən.sər/',  emoji: '⭐', thai: 'ผู้มีอิทธิพลออนไลน์',   def: 'a person who affects the opinions of many followers online',        example: 'The brand paid an influencer to promote its new phone.',        synonym: null,          antonym: null },
        { word: 'engagement',   pos: 'noun',      ipa: '/ɪnˈɡeɪdʒ.mənt/',   emoji: '💬', thai: 'การมีส่วนร่วม',        def: 'the level of likes, comments, and shares a post receives',          example: 'This video got huge engagement in just one hour.',              synonym: 'interaction', antonym: null },
        { word: 'viral',        pos: 'adjective', ipa: '/ˈvaɪ.rəl/',        emoji: '🔥', thai: 'ที่แพร่กระจายอย่างรวดเร็ว', def: 'spreading very quickly to many people online',                    example: 'Her post went viral overnight.',                                synonym: null,          antonym: null },
        { word: 'misinformation', pos: 'noun',    ipa: '/ˌmɪs.ɪn.fəˈmeɪ.ʃən/', emoji: '⚠️', thai: 'ข้อมูลที่ผิด',      def: 'false information that is spread, whether or not on purpose',        example: 'Social media can spread misinformation very fast.',             synonym: 'falsehood',   antonym: 'fact' },
        { word: 'algorithm',    pos: 'noun',      ipa: '/ˈæl.ɡə.rɪ.ðəm/',   emoji: '⚙️', thai: 'อัลกอริทึม',           def: 'a set of rules a platform uses to decide what content you see',      example: 'The algorithm decides which posts appear in your feed.',        synonym: null,          antonym: null },
        { word: 'authentic',    pos: 'adjective', ipa: '/ɔːˈθen.tɪk/',      emoji: '✅', thai: 'ที่แท้จริง / จริงใจ',    def: 'real and genuine, not fake or copied',                              example: 'Followers value authentic content over perfect photos.',        synonym: 'genuine',     antonym: 'fake' },
        { word: 'notification', pos: 'noun',      ipa: '/ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/', emoji: '🔔', thai: 'การแจ้งเตือน',      def: 'a message that tells you about new activity on an app',             example: 'I turned off notifications to focus on my work.',               synonym: 'alert',       antonym: null },
        { word: 'oversharing',  pos: 'noun',      ipa: '/ˌəʊ.vəˈʃeə.rɪŋ/',  emoji: '🙈', thai: 'การเปิดเผยมากเกินไป',   def: 'giving too much personal information online',                       example: 'Oversharing can put your privacy at risk.',                     synonym: null,          antonym: null },
      ]
    },

    grammar: {
      id: 'b2-unit-6-grammar',
      title: 'Reported Speech',
      thai: 'การเล่าคำพูดทางอ้อม (Reported Speech)',
      emoji: '📐',
      level: 'B2',
      summary: 'เรียนรู้การเปลี่ยนคำพูดตรง (direct speech) เป็นคำพูดทางอ้อม (reported speech) รวมถึงการเลื่อนกาล (backshift) และการเล่าคำถาม',
      explanation: [
        {
          heading: 'Backshift of Tenses (การเลื่อนกาล)',
          body: 'เมื่อเล่าคำพูดของคนอื่น มักเลื่อนกาลถอยไปหนึ่งขั้น\n\npresent simple → past simple\npresent continuous → past continuous\npast simple → past perfect\nwill → would · can → could\n\nDirect: "The post is going viral."\nReported: She said that the post was going viral.'
        },
        {
          heading: 'Reporting Verbs & "that"',
          body: 'ใช้ say, tell, explain, admit ฯลฯ นำหน้า\n\n⚠️ tell ต้องมีกรรม (คนที่ถูกบอก) แต่ say ไม่ต้อง\n✅ He told me (that) the algorithm had changed.\n✅ He said (that) the algorithm had changed.\n❌ He said me the algorithm had changed.'
        },
        {
          heading: 'Reported Questions (การเล่าคำถาม)',
          body: 'เปลี่ยนคำถามเป็นรูปประโยคบอกเล่า (ไม่มี do/does และไม่กลับประธานกับกริยา)\n\nWh-question: ใช้ wh-word ตามด้วยประโยคปกติ\nYes/No question: ใช้ if หรือ whether\n\nDirect: "Why did the video go viral?"\nReported: She asked why the video had gone viral.\nDirect: "Do you follow that influencer?"\nReported: He asked if I followed that influencer.'
        }
      ],
      examples: [
        { en: 'She said (that) social media was addictive.',                    th: 'เธอบอกว่าโซเชียลมีเดียทำให้เสพติด' },
        { en: 'He told me (that) his post had gone viral.',                     th: 'เขาบอกฉันว่าโพสต์ของเขาแพร่กระจายไปอย่างรวดเร็วแล้ว' },
        { en: 'They explained that the algorithm had changed.',                 th: 'พวกเขาอธิบายว่าอัลกอริทึมได้เปลี่ยนไปแล้ว' },
        { en: 'She asked if I had seen the influencer\'s new video.',           th: 'เธอถามว่าฉันได้ดูวิดีโอใหม่ของอินฟลูเอนเซอร์หรือยัง' },
        { en: 'He asked why engagement had dropped that week.',                 th: 'เขาถามว่าทำไมยอดการมีส่วนร่วมถึงลดลงในสัปดาห์นั้น' },
        { en: 'The expert warned that misinformation could spread quickly.',    th: 'ผู้เชี่ยวชาญเตือนว่าข้อมูลที่ผิดสามารถแพร่กระจายได้อย่างรวดเร็ว' },
      ],
      practice: [
        { id: 'b2u6-gr-p1', type: 'fill-in-blank',  prompt: 'Direct: "I am tired." → She said she ___ tired.',                        answer: 'was', acceptedVariants: [], explanation: 'present simple (am) → past simple (was)' },
        { id: 'b2u6-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct reported speech: "The post will go viral."',          options: ['He said the post will go viral.','He said the post would go viral.','He said the post goes viral.','He said the post go viral.'], correctIndex: 1, explanation: 'will → would ใน reported speech' },
        { id: 'b2u6-gr-p3', type: 'fill-in-blank',  prompt: 'Fill the correct verb: He ___ me that he liked the app. (say/tell)',       answer: 'told', acceptedVariants: [], explanation: 'tell ต้องมีกรรม (me) จึงใช้ told ไม่ใช่ said' },
      ],
      quiz: [
        { id: 'b2u6-gr-q1', type: 'multiple-choice', prompt: 'Direct: "I follow her." → Reported:',                                    options: ['He said he follows her.','He said he followed her.','He said he will follow her.','He said he is following her.'], correctIndex: 1, explanation: 'present simple (follow) → past simple (followed)' },
        { id: 'b2u6-gr-q2', type: 'fill-in-blank',  prompt: 'Direct: "Do you use TikTok?" → She asked ___ I used TikTok.',              answer: 'if', acceptedVariants: ['whether'], explanation: 'Yes/No question ใช้ if หรือ whether' },
        { id: 'b2u6-gr-q3', type: 'multiple-choice', prompt: 'Which reporting verb is used correctly?',                                 options: ['She said me the news.','She told to me the news.','She told me the news.','She said me that news.'], correctIndex: 2, explanation: 'tell + กรรม + (that) ... ถูกต้อง' },
        { id: 'b2u6-gr-q4', type: 'fill-in-blank',  prompt: 'Direct: "The video has 1m views." → He said the video ___ 1m views.',    answer: 'had', acceptedVariants: [], explanation: 'present perfect (has) → past perfect (had)' },
      ]
    },

    listening: {
      id: 'b2-unit-6-listening',
      type: 'Podcast',
      title: 'The Truth About Going Viral',
      thai: 'ความจริงเกี่ยวกับการเป็นไวรัล',
      emoji: '🎧',
      level: 'B2',
      segments: [
        { speaker: 'Host',  text: "Welcome back to the show. Today we're talking about what really makes content go viral.",        thai: 'ยินดีต้อนรับกลับสู่รายการ วันนี้เราจะพูดถึงว่าอะไรทำให้คอนเทนต์กลายเป็นไวรัลจริง ๆ' },
        { speaker: 'Guest', text: "Thanks for having me. The first thing people misunderstand is that going viral is mostly luck.", thai: 'ขอบคุณที่เชิญมา สิ่งแรกที่คนเข้าใจผิดคือการเป็นไวรัลส่วนใหญ่คือโชค' },
        { speaker: 'Host',  text: "So it's not really about the algorithm?",                                                        thai: 'งั้นมันไม่ได้เกี่ยวกับอัลกอริทึมจริง ๆ เหรอ?' },
        { speaker: 'Guest', text: "The algorithm matters, but it rewards engagement. If people comment and share, it spreads.",      thai: 'อัลกอริทึมมีผล แต่มันให้รางวัลกับการมีส่วนร่วม ถ้าคนคอมเมนต์และแชร์ มันก็จะแพร่กระจาย' },
        { speaker: 'Host',  text: "Many creators told me they felt pressure to post perfect content. Is that a mistake?",            thai: 'ครีเอเตอร์หลายคนบอกฉันว่าพวกเขารู้สึกกดดันที่ต้องโพสต์คอนเทนต์ที่สมบูรณ์แบบ นั่นเป็นความผิดพลาดไหม?' },
        { speaker: 'Guest', text: "Yes. Audiences today value authentic content. They can tell when something feels fake.",         thai: 'ใช่ ผู้ชมทุกวันนี้ให้คุณค่ากับคอนเทนต์ที่จริงใจ พวกเขารู้เมื่ออะไรบางอย่างดูปลอม' },
        { speaker: 'Host',  text: "What about the risk of misinformation spreading through viral posts?",                            thai: 'แล้วความเสี่ยงที่ข้อมูลผิดจะแพร่กระจายผ่านโพสต์ไวรัลล่ะ?' },
        { speaker: 'Guest', text: "That's the dark side. A false story can reach millions before anyone checks the facts.",          thai: 'นั่นคือด้านมืด เรื่องเท็จสามารถเข้าถึงคนนับล้านก่อนที่ใครจะตรวจสอบข้อเท็จจริง' },
      ],
      questions: [
        { id: 'b2u6-ls-q1', type: 'multiple-choice', prompt: 'What does the guest say people misunderstand about going viral?', options: ['It is easy to plan','It is mostly luck','It never happens','It is illegal'], correctIndex: 1, explanation: 'แขกบอกว่าการเป็นไวรัลส่วนใหญ่คือโชค' },
        { id: 'b2u6-ls-q2', type: 'multiple-choice', prompt: 'According to the guest, what does the algorithm reward?',        options: ['Perfect photos','Engagement','Paid ads only','Long videos'], correctIndex: 1, explanation: 'อัลกอริทึมให้รางวัลกับการมีส่วนร่วม (engagement)' },
        { id: 'b2u6-ls-q3', type: 'multiple-choice', prompt: 'What kind of content do audiences value today?',               options: ['Perfect content','Fake content','Authentic content','Expensive content'], correctIndex: 2, explanation: 'ผู้ชมให้คุณค่ากับคอนเทนต์ที่จริงใจ (authentic)' },
        { id: 'b2u6-ls-q4', type: 'multiple-choice', prompt: 'What does the guest call the "dark side" of viral posts?',      options: ['Too many comments','Spread of misinformation','Slow internet','High costs'], correctIndex: 1, explanation: 'ด้านมืดคือการแพร่กระจายของข้อมูลที่ผิด' },
      ]
    },

    reading: {
      id: 'b2-unit-6-reading',
      type: 'Article',
      title: 'Living Well in a World of Feeds',
      thai: 'การใช้ชีวิตอย่างมีคุณภาพในโลกของฟีดข่าว',
      emoji: '📖',
      level: 'B2',
      minutes: 4,
      paragraphs: [
        'Social media has transformed the way we communicate, work, and even think. Platforms that were once used to share holiday photos are now powerful tools for business, activism, and news. Yet the same technology that connects billions of people also raises serious questions about privacy, mental health, and truth.',
        'One of the biggest concerns is misinformation. Because algorithms are designed to maximise engagement, they often promote content that provokes strong emotions rather than content that is accurate. A dramatic but false headline may spread far faster than a careful correction, and by the time the truth appears, the damage is already done.',
        'Another issue is the pressure to present a perfect life. Users constantly compare themselves to the polished images of influencers, which can harm self-esteem. Experts increasingly advise that authentic, honest content is healthier both for creators and their audiences. At the same time, oversharing personal details can expose users to real risks, from scams to identity theft.',
        'None of this means we should abandon social media. Used thoughtfully, it offers genuine benefits: learning, community, and opportunity. The key is digital literacy, that is, the ability to question sources, protect our privacy, and control how much time we spend scrolling. Technology is only as healthy as the habits we build around it.',
      ],
      dialogue: null,
      glossary: [
        { word: 'activism',       thai: 'การเคลื่อนไหวทางสังคม', def: 'the activity of working to bring about political or social change' },
        { word: 'provokes',       thai: 'กระตุ้น / ยั่วยุ',       def: 'causes a strong reaction or feeling' },
        { word: 'self-esteem',    thai: 'ความภูมิใจในตนเอง',      def: 'the confidence and respect you have for yourself' },
        { word: 'digital literacy', thai: 'การรู้เท่าทันดิจิทัล', def: 'the skill of using online information and technology wisely and safely' },
      ],
      summary: 'Social media brings connection and opportunity but also spreads misinformation and harms well-being. Since algorithms reward engaging, emotional content, users need digital literacy: question sources, protect privacy, value authenticity, and manage screen time.',
      summaryThai: 'โซเชียลมีเดียสร้างการเชื่อมต่อและโอกาส แต่ก็แพร่ข้อมูลผิดและกระทบสุขภาพจิต เนื่องจากอัลกอริทึมให้รางวัลกับคอนเทนต์ที่เร้าอารมณ์ ผู้ใช้จึงต้องรู้เท่าทันดิจิทัล คือ ตั้งคำถามกับแหล่งข้อมูล ปกป้องความเป็นส่วนตัว เห็นคุณค่าความจริงใจ และจัดการเวลาหน้าจอ',
      questions: [
        { id: 'b2u6-rd-q1', type: 'multiple-choice', prompt: 'Why do algorithms often promote inaccurate content?',        options: ['Because it is cheaper','Because they maximise engagement','Because users request it','Because it is illegal'], correctIndex: 1, explanation: 'อัลกอริทึมถูกออกแบบให้เพิ่มการมีส่วนร่วม จึงมักดันคอนเทนต์ที่เร้าอารมณ์' },
        { id: 'b2u6-rd-q2', type: 'multiple-choice', prompt: 'What can constant comparison with influencers harm?',        options: ['Internet speed','Self-esteem','Battery life','Storage space'], correctIndex: 1, explanation: 'การเปรียบเทียบตัวเองกับอินฟลูเอนเซอร์อาจทำร้ายความภูมิใจในตนเอง' },
        { id: 'b2u6-rd-q3', type: 'multiple-choice', prompt: 'According to the article, oversharing can lead to:',          options: ['More followers','Scams and identity theft','Better engagement','Faster feeds'], correctIndex: 1, explanation: 'การเปิดเผยมากเกินไปอาจนำไปสู่การหลอกลวงและการขโมยตัวตน' },
        { id: 'b2u6-rd-q4', type: 'multiple-choice', prompt: 'What does the article say is the key to using social media well?', options: ['Buying premium apps','Digital literacy','Having many followers','Posting daily'], correctIndex: 1, explanation: 'กุญแจสำคัญคือการรู้เท่าทันดิจิทัล (digital literacy)' },
      ]
    },

    test: {
      id: 'b2-unit-6-test',
      passMark: 0.70,
      questions: [
        { id: 'b2u6-t-01', type: 'multiple-choice', prompt: '"ข้อมูลที่ผิด" ในภาษาอังกฤษคือคำใด?',                            options: ['engagement','misinformation','algorithm','notification'], correctIndex: 1, explanation: '"misinformation" = ข้อมูลที่ผิด' },
        { id: 'b2u6-t-02', type: 'multiple-choice', prompt: 'What does "viral" describe?',                                   options: ['เก่ามาก','ที่แพร่กระจายอย่างรวดเร็ว','ที่เป็นความลับ','ที่แพงมาก'], correctIndex: 1, explanation: '"viral" = ที่แพร่กระจายอย่างรวดเร็ว' },
        { id: 'b2u6-t-03', type: 'fill-in-blank',   prompt: 'The opposite of "fake" is a___.',                              answer: 'authentic', acceptedVariants: ['genuine'], explanation: '"authentic" = แท้จริง ตรงข้ามกับ fake' },
        { id: 'b2u6-t-04', type: 'multiple-choice', prompt: 'Direct: "The post is popular." → Reported:',                   options: ['She said the post is popular.','She said the post was popular.','She said the post will be popular.','She said the post be popular.'], correctIndex: 1, explanation: 'present simple (is) → past simple (was)' },
        { id: 'b2u6-t-05', type: 'fill-in-blank',   prompt: 'Direct: "Do you like this app?" → He asked ___ I liked the app.', answer: 'if', acceptedVariants: ['whether'], explanation: 'Yes/No question ใช้ if หรือ whether' },
        { id: 'b2u6-t-06', type: 'multiple-choice', prompt: 'Which sentence uses reporting verbs correctly?',              options: ['He said me the truth.','He told me the truth.','He told to me the truth.','He said to me that truth.'], correctIndex: 1, explanation: 'tell + กรรม (me) ถูกต้อง' },
        { id: 'b2u6-t-07', type: 'fill-in-blank',   prompt: 'Direct: "I will post it." → She said she ___ post it.',         answer: 'would', acceptedVariants: [], explanation: 'will → would ใน reported speech' },
        { id: 'b2u6-t-08', type: 'multiple-choice', prompt: 'In the podcast, what does the algorithm reward?',             options: ['Perfect photos','Engagement','Paid ads','Long text'], correctIndex: 1, explanation: 'อัลกอริทึมให้รางวัลกับการมีส่วนร่วม' },
        { id: 'b2u6-t-09', type: 'multiple-choice', prompt: 'In the podcast, what kind of content do audiences value?',    options: ['Fake','Perfect','Authentic','Expensive'], correctIndex: 2, explanation: 'ผู้ชมให้คุณค่ากับคอนเทนต์ที่จริงใจ' },
        { id: 'b2u6-t-10', type: 'multiple-choice', prompt: 'According to the reading, what is the key to using social media well?', options: ['Many followers','Digital literacy','Premium apps','Daily posting'], correctIndex: 1, explanation: 'กุญแจสำคัญคือการรู้เท่าทันดิจิทัล' },
      ]
    }
  },

  // ==========================================================================
  // B2 Unit 7: Business Email
  // ==========================================================================
  {
    id: 'b2-unit-7',
    title: 'Unit 7: Business Email',
    thai: 'บทที่ 7: อีเมลธุรกิจ',
    emoji: '✉️',

    vocabulary: {
      id: 'b2-unit-7-vocab',
      title: 'Business Email',
      thai: 'อีเมลธุรกิจ',
      emoji: '✉️',
      level: 'B2',
      words: [
        { word: 'recipient',    pos: 'noun',      ipa: '/rɪˈsɪp.i.ənt/',    emoji: '📬', thai: 'ผู้รับ',              def: 'the person who receives a message or email',                        example: 'Please check that the recipient address is correct.',           synonym: 'addressee',   antonym: 'sender' },
        { word: 'attachment',   pos: 'noun',      ipa: '/əˈtætʃ.mənt/',     emoji: '📎', thai: 'ไฟล์แนบ',             def: 'a file that is sent together with an email',                        example: 'You will find the report in the attachment.',                   synonym: null,          antonym: null },
        { word: 'inquiry',      pos: 'noun',      ipa: '/ɪnˈkwaɪə.ri/',     emoji: '❓', thai: 'การสอบถาม',           def: 'a formal request for information',                                  example: 'Thank you for your inquiry about our services.',                synonym: 'enquiry',     antonym: null },
        { word: 'clarify',      pos: 'verb',      ipa: '/ˈklær.ɪ.faɪ/',     emoji: '💡', thai: 'ทำให้ชัดเจน',          def: 'to make something clearer or easier to understand',                 example: 'Could you clarify the deadline for this task?',                 synonym: 'explain',     antonym: 'confuse' },
        { word: 'acknowledge',  pos: 'verb',      ipa: '/əkˈnɒl.ɪdʒ/',      emoji: '✔️', thai: 'ตอบรับ / รับทราบ',     def: 'to confirm that you have received or noticed something',            example: 'I am writing to acknowledge receipt of your invoice.',          synonym: 'confirm',     antonym: 'ignore' },
        { word: 'regarding',    pos: 'preposition', ipa: '/rɪˈɡɑː.dɪŋ/',    emoji: '📝', thai: 'เกี่ยวกับ',            def: 'about; concerning a particular subject',                            example: 'I am writing regarding the meeting next week.',                 synonym: 'concerning',  antonym: null },
        { word: 'prompt',       pos: 'adjective', ipa: '/prɒmpt/',          emoji: '⏱️', thai: 'ที่รวดเร็ว / ทันท่วงที', def: 'done quickly and without delay',                                  example: 'Thank you for your prompt reply.',                              synonym: 'quick',       antonym: 'delayed' },
        { word: 'sincerely',    pos: 'adverb',    ipa: '/sɪnˈsɪə.li/',      emoji: '🖋️', thai: 'ด้วยความจริงใจ',       def: 'a formal way to close a letter or email',                           example: 'Yours sincerely, John Smith.',                                  synonym: null,          antonym: null },
      ]
    },

    grammar: {
      id: 'b2-unit-7-grammar',
      title: 'Passive Voice & Formal Email Phrases',
      thai: 'ประโยค Passive และวลีทางการในอีเมล',
      emoji: '📐',
      level: 'B2',
      summary: 'เรียนรู้การใช้ passive voice เพื่อความสุภาพและเป็นทางการ พร้อมวลีมาตรฐานสำหรับเปิด ปิด และร้องขอในอีเมลธุรกิจ',
      explanation: [
        {
          heading: 'Passive Voice ในอีเมลทางการ',
          body: 'ในบริบทธุรกิจ นิยมใช้ passive เพื่อให้ฟังดูสุภาพ เป็นกลาง และเน้นที่การกระทำมากกว่าตัวบุคคล\n\nโครงสร้าง: be + past participle\n\nActive: We will send the invoice tomorrow.\nPassive: The invoice will be sent tomorrow.\n\nActive: We have received your order.\nPassive: Your order has been received.'
        },
        {
          heading: 'Formal Opening & Closing Phrases',
          body: 'วลีเปิด (Openings):\n- I am writing to inquire about ... (ผมเขียนมาเพื่อสอบถามเกี่ยวกับ ...)\n- I am writing regarding ... (ผมเขียนมาเกี่ยวกับ ...)\n- Thank you for your email regarding ...\n\nวลีปิด (Closings):\n- I look forward to hearing from you. (ผมหวังว่าจะได้รับคำตอบจากท่าน)\n- Please do not hesitate to contact me. (โปรดอย่าลังเลที่จะติดต่อผม)\n- Yours sincerely, / Kind regards,'
        },
        {
          heading: 'Polite Requests (การร้องขออย่างสุภาพ)',
          body: 'ใช้รูปแบบอ้อมเพื่อความสุภาพ\n\n- Could you please clarify ...? (ช่วยอธิบายให้ชัดเจน ... ได้ไหม?)\n- I would be grateful if you could ... (ผมจะขอบคุณมากหากท่านช่วย ...)\n- Would it be possible to ...? (จะเป็นไปได้ไหมที่จะ ...?)\n\n⚠️ หลีกเลี่ยงประโยคสั่งตรง ๆ เช่น "Send me the file." ควรใช้ "Could you please send me the file?"'
        }
      ],
      examples: [
        { en: 'Your order has been received and will be processed shortly.',        th: 'คำสั่งซื้อของท่านได้รับแล้วและจะดำเนินการในไม่ช้า' },
        { en: 'The report will be sent to you by Friday.',                          th: 'รายงานจะถูกส่งถึงท่านภายในวันศุกร์' },
        { en: 'I am writing regarding your inquiry about our services.',            th: 'ผมเขียนมาเกี่ยวกับการสอบถามของท่านเรื่องบริการของเรา' },
        { en: 'Could you please clarify the delivery date?',                        th: 'ท่านช่วยอธิบายวันจัดส่งให้ชัดเจนได้ไหม?' },
        { en: 'I would be grateful if you could confirm the meeting time.',         th: 'ผมจะขอบคุณมากหากท่านช่วยยืนยันเวลาประชุม' },
        { en: 'Please do not hesitate to contact me if you have any questions.',    th: 'โปรดอย่าลังเลที่จะติดต่อผมหากท่านมีคำถามใด ๆ' },
      ],
      practice: [
        { id: 'b2u7-gr-p1', type: 'fill-in-blank',  prompt: 'Passive: Your email ___ (receive) yesterday.',                          answer: 'was received', acceptedVariants: [], explanation: 'Passive อดีต: was/were + past participle' },
        { id: 'b2u7-gr-p2', type: 'multiple-choice', prompt: 'Which is the passive form of "We will send the file"?',               options: ['The file will send.','The file will be sent.','The file is sent.','The file sends.'], correctIndex: 1, explanation: 'will + be + past participle = will be sent' },
        { id: 'b2u7-gr-p3', type: 'multiple-choice', prompt: 'Which is the most polite email request?',                             options: ['Send me the report now.','I want the report.','Could you please send me the report?','Give the report.'], correctIndex: 2, explanation: 'Could you please ...? เป็นการร้องขอที่สุภาพที่สุด' },
      ],
      quiz: [
        { id: 'b2u7-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct passive sentence.',                              options: ['The invoice has sent.','The invoice has been sent.','The invoice have been sent.','The invoice been sent.'], correctIndex: 1, explanation: 'Present perfect passive: has been + past participle' },
        { id: 'b2u7-gr-q2', type: 'fill-in-blank',  prompt: 'Passive: The meeting ___ (schedule) for Monday. (present)',           answer: 'is scheduled', acceptedVariants: [], explanation: 'Passive ปัจจุบัน: is + past participle' },
        { id: 'b2u7-gr-q3', type: 'multiple-choice', prompt: 'Which is a correct formal email closing?',                          options: ['See ya!','Bye now.','Yours sincerely,','Later.'], correctIndex: 2, explanation: '"Yours sincerely," เป็นการปิดอีเมลทางการ' },
        { id: 'b2u7-gr-q4', type: 'fill-in-blank',  prompt: 'Complete the opening: I am writing to ___ about your prices. (สอบถาม)', answer: 'inquire', acceptedVariants: ['enquire'], explanation: '"I am writing to inquire about ..." = เขียนมาเพื่อสอบถาม' },
      ]
    },

    listening: {
      id: 'b2-unit-7-listening',
      type: 'Conversation',
      title: 'Following Up on an Important Email',
      thai: 'การติดตามอีเมลสำคัญ',
      emoji: '🎧',
      level: 'B2',
      segments: [
        { speaker: 'Anna',   text: "Hi Ken, did you get the email I sent regarding the new contract?",                     thai: 'สวัสดีเคน คุณได้รับอีเมลที่ฉันส่งเกี่ยวกับสัญญาฉบับใหม่ไหม?' },
        { speaker: 'Ken',    text: "Yes, I did, thank you. But I haven't opened the attachment yet.",                     thai: 'ได้รับแล้วครับ ขอบคุณครับ แต่ผมยังไม่ได้เปิดไฟล์แนบเลย' },
        { speaker: 'Anna',   text: "No problem. Could you please acknowledge receipt once you've reviewed it?",           thai: 'ไม่เป็นไรค่ะ ช่วยตอบรับหน่อยได้ไหมเมื่อคุณตรวจสอบเรียบร้อยแล้ว?' },
        { speaker: 'Ken',    text: "Of course. There's one point I'd like you to clarify, though.",                       thai: 'แน่นอนครับ แต่มีจุดหนึ่งที่ผมอยากให้คุณอธิบายให้ชัดเจนครับ' },
        { speaker: 'Anna',   text: "Sure. What would you like me to explain?",                                           thai: 'ได้ค่ะ คุณอยากให้ฉันอธิบายเรื่องอะไร?' },
        { speaker: 'Ken',    text: "The payment terms. The email said the invoice will be sent within thirty days.",      thai: 'เรื่องเงื่อนไขการชำระเงินครับ ในอีเมลบอกว่าใบแจ้งหนี้จะถูกส่งภายในสามสิบวัน' },
        { speaker: 'Anna',   text: "That's correct. And payment is expected within fifteen days of the invoice date.",    thai: 'ถูกต้องค่ะ และคาดว่าจะชำระเงินภายในสิบห้าวันนับจากวันที่ในใบแจ้งหนี้' },
        { speaker: 'Ken',    text: "Perfect, that's clear now. Thank you for your prompt reply, Anna.",                   thai: 'เยี่ยมเลย ตอนนี้ชัดเจนแล้วครับ ขอบคุณสำหรับการตอบกลับที่รวดเร็วครับแอนนา' },
      ],
      questions: [
        { id: 'b2u7-ls-q1', type: 'multiple-choice', prompt: 'What was the email about?',                        options: ['A holiday plan','The new contract','A job interview','An office party'], correctIndex: 1, explanation: 'แอนนาส่งอีเมลเกี่ยวกับสัญญาฉบับใหม่' },
        { id: 'b2u7-ls-q2', type: 'multiple-choice', prompt: 'What has Ken NOT done yet?',                       options: ['Received the email','Opened the attachment','Read the subject','Replied to Anna'], correctIndex: 1, explanation: 'เคนยังไม่ได้เปิดไฟล์แนบ' },
        { id: 'b2u7-ls-q3', type: 'multiple-choice', prompt: 'What does Ken want Anna to clarify?',              options: ['The meeting date','The office address','The payment terms','The email subject'], correctIndex: 2, explanation: 'เคนอยากให้ชี้แจงเรื่องเงื่อนไขการชำระเงิน' },
        { id: 'b2u7-ls-q4', type: 'multiple-choice', prompt: 'Within how many days is payment expected?',        options: ['Ten days','Fifteen days','Thirty days','Sixty days'], correctIndex: 1, explanation: 'คาดว่าจะชำระเงินภายในสิบห้าวันนับจากวันที่ในใบแจ้งหนี้' },
      ]
    },

    reading: {
      id: 'b2-unit-7-reading',
      type: 'Article',
      title: 'The Art of the Professional Email',
      thai: 'ศิลปะของการเขียนอีเมลอย่างมืออาชีพ',
      emoji: '📖',
      level: 'B2',
      minutes: 4,
      paragraphs: [
        'In the modern workplace, email remains the backbone of professional communication. A well-written message can build trust and move a project forward, while a careless one can create confusion or even damage a relationship. Because the recipient cannot hear your tone of voice, every word you choose matters more than in a face-to-face conversation.',
        'A strong business email begins with a clear subject line and an appropriate greeting. The opening should state your purpose quickly, using phrases such as "I am writing regarding" or "Thank you for your inquiry." Readers are busy, so the main point should never be buried at the bottom. If a file is included, it is good practice to mention the attachment directly so that it is not overlooked.',
        'Tone is equally important. Formal English often relies on the passive voice and polite requests to sound respectful; for instance, "Could you please clarify the deadline?" is far better received than a blunt command. It is also wise to acknowledge messages promptly, even if only to confirm that a full reply will follow. A short, courteous acknowledgement reassures the sender that their request has not been ignored.',
        'Finally, always proofread before sending. Spelling mistakes and the wrong recipient can undermine an otherwise excellent message. Close with a professional sign-off such as "Kind regards" or "Yours sincerely," followed by your name and role. These small details signal care and competence, and in business, the impression you leave is often as valuable as the information you send.',
      ],
      dialogue: null,
      glossary: [
        { word: 'backbone',   thai: 'แกนหลัก / กระดูกสันหลัง', def: 'the most important part that supports everything else' },
        { word: 'buried',     thai: 'ถูกซ่อน / ถูกฝัง',        def: 'hidden so that it is hard to find or notice' },
        { word: 'blunt',      thai: 'ตรงไปตรงมาจนดูห้วน',      def: 'saying something in a very direct way that may seem rude' },
        { word: 'proofread',  thai: 'ตรวจทาน',                def: 'to read a text carefully to find and correct mistakes' },
      ],
      summary: 'Because recipients cannot hear tone, professional emails must be clear and polite. State your purpose early with formal openings, mention attachments, use passive voice and polite requests, acknowledge messages promptly, proofread, and close with a professional sign-off.',
      summaryThai: 'เนื่องจากผู้รับไม่ได้ยินน้ำเสียง อีเมลมืออาชีพต้องชัดเจนและสุภาพ คือ บอกจุดประสงค์ตั้งแต่ต้นด้วยวลีเปิดที่เป็นทางการ กล่าวถึงไฟล์แนบ ใช้ passive และการร้องขอที่สุภาพ ตอบรับอย่างรวดเร็ว ตรวจทาน และปิดท้ายอย่างมืออาชีพ',
      questions: [
        { id: 'b2u7-rd-q1', type: 'multiple-choice', prompt: 'Why does every word matter more in email than in conversation?', options: ['Emails are longer','The recipient cannot hear your tone','Emails are public','Words cost money'], correctIndex: 1, explanation: 'ผู้รับไม่ได้ยินน้ำเสียง ทุกคำจึงสำคัญมากขึ้น' },
        { id: 'b2u7-rd-q2', type: 'multiple-choice', prompt: 'Where should the main point of an email be placed?',          options: ['At the very bottom','Stated quickly near the start','In the attachment','In the subject only'], correctIndex: 1, explanation: 'ควรบอกจุดประสงค์อย่างรวดเร็วใกล้ต้นอีเมล' },
        { id: 'b2u7-rd-q3', type: 'multiple-choice', prompt: 'What does formal English often rely on to sound respectful?',  options: ['Slang','Emojis','Passive voice and polite requests','Capital letters'], correctIndex: 2, explanation: 'ภาษาทางการมักใช้ passive และการร้องขอที่สุภาพ' },
        { id: 'b2u7-rd-q4', type: 'multiple-choice', prompt: 'What should you always do before sending an email?',          options: ['Add more attachments','Proofread it','Make it longer','Send it to everyone'], correctIndex: 1, explanation: 'ควรตรวจทาน (proofread) ก่อนส่งเสมอ' },
      ]
    },

    test: {
      id: 'b2-unit-7-test',
      passMark: 0.70,
      questions: [
        { id: 'b2u7-t-01', type: 'multiple-choice', prompt: '"ผู้รับ" ในภาษาอังกฤษคือคำใด?',                                options: ['sender','recipient','attachment','inquiry'], correctIndex: 1, explanation: '"recipient" = ผู้รับ' },
        { id: 'b2u7-t-02', type: 'multiple-choice', prompt: 'What does "clarify" mean?',                                    options: ['ทำให้สับสน','ทำให้ชัดเจน','ทำให้ช้า','ทำให้ยาก'], correctIndex: 1, explanation: '"clarify" = ทำให้ชัดเจน' },
        { id: 'b2u7-t-03', type: 'fill-in-blank',   prompt: 'A file sent with an email is an a___.',                        answer: 'attachment', acceptedVariants: [], explanation: '"attachment" = ไฟล์แนบ' },
        { id: 'b2u7-t-04', type: 'multiple-choice', prompt: 'Choose the correct passive sentence.',                        options: ['The report has sent.','The report has been sent.','The report have been sent.','The report been sent.'], correctIndex: 1, explanation: 'Present perfect passive: has been + past participle' },
        { id: 'b2u7-t-05', type: 'fill-in-blank',   prompt: 'Passive: Your order ___ (receive). (present perfect)',        answer: 'has been received', acceptedVariants: [], explanation: 'has been + past participle' },
        { id: 'b2u7-t-06', type: 'multiple-choice', prompt: 'Which is the most polite email request?',                     options: ['Send the invoice now.','I need the invoice.','Could you please send the invoice?','Invoice, now.'], correctIndex: 2, explanation: 'Could you please ...? สุภาพที่สุด' },
        { id: 'b2u7-t-07', type: 'multiple-choice', prompt: 'Which is a correct formal email closing?',                    options: ['Cheers mate!','Yours sincerely,','TTYL','Bye!'], correctIndex: 1, explanation: '"Yours sincerely," เป็นการปิดอีเมลทางการ' },
        { id: 'b2u7-t-08', type: 'multiple-choice', prompt: 'In the listening, what did Ken want clarified?',             options: ['The meeting date','The payment terms','The office address','The email subject'], correctIndex: 1, explanation: 'เคนอยากให้ชี้แจงเรื่องเงื่อนไขการชำระเงิน' },
        { id: 'b2u7-t-09', type: 'multiple-choice', prompt: 'In the listening, within how many days is payment expected?', options: ['Ten','Fifteen','Thirty','Sixty'], correctIndex: 1, explanation: 'ชำระเงินภายในสิบห้าวันนับจากวันที่ในใบแจ้งหนี้' },
        { id: 'b2u7-t-10', type: 'multiple-choice', prompt: 'According to the reading, what should you always do before sending?', options: ['Add attachments','Proofread','Make it longer','Send to everyone'], correctIndex: 1, explanation: 'ควรตรวจทานก่อนส่งเสมอ' },
      ]
    }
  }
]
