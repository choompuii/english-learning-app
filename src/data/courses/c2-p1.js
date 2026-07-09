// C2 Part 1: Literature, Philosophy & Law
export const c2p1 = [
  // ============================================================
  // C2 Unit 1: Literature
  // ============================================================
  {
    id: 'c2-unit-1',
    title: 'Unit 1: Literature',
    thai: 'บทที่ 1: วรรณกรรม',
    emoji: '📚',

    vocabulary: {
      id: 'c2-unit-1-vocab',
      title: 'Literary Criticism & Style',
      thai: 'การวิจารณ์และสำนวนทางวรรณกรรม',
      emoji: '📚',
      level: 'C2',
      words: [
        { word: 'verisimilitude', pos: 'noun',      ipa: '/ˌverɪsɪˈmɪlɪtjuːd/', emoji: '🪞', thai: 'ความสมจริง / ความน่าเชื่อว่าเป็นจริง', def: 'the appearance of being true or real in a work of fiction',            example: 'The novel achieves remarkable verisimilitude through its meticulously observed dialogue.', synonym: 'realism',      antonym: 'implausibility' },
        { word: 'bildungsroman', pos: 'noun',        ipa: '/ˈbɪldʊŋzrəʊˌmɑːn/',  emoji: '🌱', thai: 'นวนิยายว่าด้วยการเติบโตของตัวละคร',       def: 'a novel dealing with the formative years and moral growth of its protagonist', example: 'Great Expectations is often read as a quintessential bildungsroman.',                 synonym: 'coming-of-age novel', antonym: null },
        { word: 'unreliable narrator', pos: 'noun',  ipa: '/ˌʌnrɪˈlaɪəbl̩ ˈnærətə/', emoji: '🎭', thai: 'ผู้เล่าเรื่องที่เชื่อถือไม่ได้',        def: 'a narrator whose account the reader cannot fully trust',                 example: 'The story\'s tension hinges on our slow realisation that we have an unreliable narrator.', synonym: null,          antonym: null },
        { word: 'pathos',        pos: 'noun',        ipa: '/ˈpeɪθɒs/',           emoji: '😢', thai: 'อารมณ์สะเทือนใจ / ความเวทนา',            def: 'a quality that evokes pity, sympathy or sorrow',                          example: 'The final chapter is charged with an almost unbearable pathos.',                       synonym: 'poignancy',    antonym: 'levity' },
        { word: 'allegory',      pos: 'noun',        ipa: '/ˈæləɡəri/',          emoji: '🗝️', thai: 'เรื่องเปรียบเปรย / นิทานเปรียบเทียบ',   def: 'a story with a hidden moral, political or spiritual meaning',              example: 'Animal Farm functions as a transparent allegory of the Russian Revolution.',           synonym: 'parable',      antonym: null },
        { word: 'canonical',     pos: 'adjective',   ipa: '/kəˈnɒnɪkl̩/',        emoji: '🏛️', thai: 'ที่ได้รับการยอมรับเป็นแบบฉบับ',        def: 'belonging to the accepted body of great literary works',                  example: 'Her poetry has since attained canonical status in the English tradition.',              synonym: 'authoritative', antonym: 'obscure' },
        { word: 'lyrical',       pos: 'adjective',   ipa: '/ˈlɪrɪkl̩/',          emoji: '🎼', thai: 'ที่มีท่วงทำนองไพเราะ / เชิงกวี',        def: 'expressing emotion in a beautiful, song-like way',                        example: 'The prose is so lyrical that it verges on poetry.',                                    synonym: 'poetic',       antonym: 'prosaic' },
        { word: 'to foreshadow', pos: 'verb',        ipa: '/tə fɔːˈʃædəʊ/',      emoji: '🔮', thai: 'บอกใบ้เหตุการณ์ล่วงหน้า',              def: 'to hint at or suggest a future event in a narrative',                     example: 'The storm in the opening scene subtly foreshadows the family\'s downfall.',            synonym: 'to presage',   antonym: null },
      ]
    },

    grammar: {
      id: 'c2-unit-1-grammar',
      title: 'Emphasis & Fronting',
      thai: 'การเน้นความและการนำส่วนขยายขึ้นต้นประโยค',
      emoji: '📐',
      level: 'C2',
      summary: 'ในภาษาวรรณกรรมและวิชาการระดับสูง ผู้เขียนมักย้ายส่วนขยายหรือส่วนเติมเต็มขึ้นมาต้นประโยค (fronting) และใช้โครงสร้าง cleft เพื่อเน้นความหมาย เมื่อนำ negative/limiting adverbial ขึ้นต้นต้องผัน subject-verb แบบ inversion',
      explanation: [
        {
          heading: 'Negative Inversion (การนำ negative adverbial ขึ้นต้น)',
          body: 'เมื่อนำวลีปฏิเสธหรือจำกัดความขึ้นต้นประโยคเพื่อเน้น ต้องสลับกริยาช่วยมาก่อนประธาน (inversion) เหมือนประโยคคำถาม\n\nNever · Rarely · Seldom · No sooner ... than · Not only ... but also · Little · Only then\n\n❌ Never I have read such a novel.\n✅ Never have I read such a novel.\n✅ Not only does she write, but she also translates.\n✅ Little did he know that the narrator was lying.'
        },
        {
          heading: 'Cleft sentences (ประโยคแยกเน้น: It-cleft / What-cleft)',
          body: 'ใช้ It is/was ... that ... หรือ What ... is/was ... เพื่อดึงส่วนหนึ่งของประโยคขึ้นมาเน้น\n\nปกติ: The imagery moved me.\nIt-cleft: It was the imagery that moved me. (เน้น "imagery")\nWhat-cleft: What moved me was the imagery.\n\nโครงสร้างนี้ทำให้ประโยควิชาการดูหนักแน่นและชี้จุดโฟกัสชัดเจน'
        },
        {
          heading: 'Fronting of complements & adverbials (การนำส่วนเติมเต็มขึ้นต้น)',
          body: 'ในการเขียนเชิงวรรณกรรมมักนำ adjective/complement/adverbial ขึ้นต้นเพื่อสร้างจังหวะและเน้นภาพ\n\nSuch was the power of her prose that critics fell silent.\nSo compelling was the argument that no one objected.\nDown the darkened corridor crept the frightened child.\n\n💡 หลัง So + adjective และ Such ต้อง inversion เช่นกัน'
        }
      ],
      examples: [
        { en: 'Never before had criticism been so divided over a single text.',           th: 'ไม่เคยมีมาก่อนที่การวิจารณ์จะแตกออกเป็นสองฝ่ายกับงานเขียนชิ้นเดียวเช่นนี้' },
        { en: 'It was precisely this ambiguity that secured the novel its reputation.',    th: 'ความคลุมเครือนี้เองที่ทำให้นวนิยายเรื่องนี้มีชื่อเสียง' },
        { en: 'What distinguishes her voice is its restraint.',                            th: 'สิ่งที่ทำให้น้ำเสียงของเธอโดดเด่นคือความสำรวม' },
        { en: 'So subtle was the foreshadowing that few readers noticed it.',              th: 'การบอกใบ้ล่วงหน้านั้นแยบยลจนผู้อ่านน้อยคนจะสังเกตเห็น' },
        { en: 'Not only does the allegory operate politically, but it also functions spiritually.', th: 'เรื่องเปรียบเปรยนี้ไม่เพียงทำงานในเชิงการเมือง แต่ยังทำงานในเชิงจิตวิญญาณด้วย' },
        { en: 'Rarely has a debut been received with such critical acclaim.',              th: 'ยากยิ่งที่ผลงานเปิดตัวจะได้รับคำชมจากนักวิจารณ์มากถึงเพียงนี้' },
      ],
      practice: [
        { id: 'c2u1-gr-p1', type: 'fill-in-blank',  prompt: 'Never before ___ I encountered such lyrical prose. (เติมกริยาช่วย)',   answer: 'had',  acceptedVariants: ['have'],       explanation: 'หลัง Never before ต้อง inversion นำกริยาช่วยมาก่อนประธาน' },
        { id: 'c2u1-gr-p2', type: 'multiple-choice', prompt: 'Choose the correctly inverted sentence.',                              options: ['Rarely I have seen such pathos.','Rarely have I seen such pathos.','Rarely I seen such pathos have.','Rarely seen have I such pathos.'], correctIndex: 1, explanation: 'Rarely ขึ้นต้น → inversion: have I seen' },
        { id: 'c2u1-gr-p3', type: 'fill-in-blank',  prompt: 'Rewrite as a cleft: "The ending shocked readers." → It was the ending ___ shocked readers.', answer: 'that', acceptedVariants: ['which'], explanation: 'It-cleft ใช้ It was ... that/which ...' },
      ],
      quiz: [
        { id: 'c2u1-gr-q1', type: 'multiple-choice', prompt: 'Which sentence uses negative inversion correctly?',                   options: ['Not only she writes but also translates.','Not only does she write but she also translates.','Not only writes she but also translates.','Not only she does write but also translates.'], correctIndex: 1, explanation: 'Not only ขึ้นต้น → does she write (inversion)' },
        { id: 'c2u1-gr-q2', type: 'fill-in-blank',  prompt: 'What ___ me most was the novel\'s restraint. (เติมกริยา)',           answer: 'moved', acceptedVariants: ['struck','impressed'], explanation: 'What-cleft: What + verb ... was ...' },
        { id: 'c2u1-gr-q3', type: 'multiple-choice', prompt: 'Complete: "So compelling ___ the argument that no one objected."',   options: ['was','it was','the argument was','has been'], correctIndex: 0, explanation: 'หลัง So + adjective ต้อง inversion: was the argument' },
        { id: 'c2u1-gr-q4', type: 'fill-in-blank',  prompt: 'Little ___ he know that the narrator was deceiving him.',            answer: 'did', acceptedVariants: [], explanation: 'Little ขึ้นต้น → inversion: did he know' },
      ]
    },

    listening: {
      id: 'c2-unit-1-listening',
      type: 'Podcast',
      title: 'The Art of the Unreliable Narrator',
      thai: 'ศิลปะของผู้เล่าเรื่องที่เชื่อถือไม่ได้',
      emoji: '🎧',
      level: 'C2',
      segments: [
        { speaker: 'Host',    text: 'Welcome back to Between the Lines. Today we\'re unpicking one of fiction\'s most seductive devices: the unreliable narrator. Dr Halloway, why do writers reach for it?', thai: 'ยินดีต้อนรับกลับสู่รายการ Between the Lines วันนี้เราจะมาแกะกลวิธีที่มีเสน่ห์ที่สุดอย่างหนึ่งของนิยาย นั่นคือผู้เล่าเรื่องที่เชื่อถือไม่ได้ ดร.ฮอลโลเวย์ ทำไมนักเขียนถึงเลือกใช้มันครับ?' },
        { speaker: 'Halloway', text: 'Because it implicates the reader. The moment you suspect your narrator is distorting events, you\'re forced to read actively, to interrogate every claim.', thai: 'เพราะมันดึงผู้อ่านเข้ามามีส่วนร่วม ทันทีที่คุณสงสัยว่าผู้เล่ากำลังบิดเบือนเหตุการณ์ คุณก็ถูกบังคับให้อ่านอย่างตื่นตัวและตั้งคำถามกับทุกข้อความ' },
        { speaker: 'Host',    text: 'So the pleasure lies in the detective work rather than the plot itself?', thai: 'ดังนั้นความเพลิดเพลินจึงอยู่ที่การสืบสวนมากกว่าตัวโครงเรื่องเองใช่ไหมครับ?' },
        { speaker: 'Halloway', text: 'Precisely. Take Nabokov\'s Humbert Humbert — his eloquence is a smokescreen. The more beautifully he writes, the less we should trust him.', thai: 'ใช่เลยค่ะ ยกตัวอย่างฮัมเบิร์ต ฮัมเบิร์ตของนาโบคอฟ วาทศิลป์ของเขาเป็นเพียงม่านบังตา ยิ่งเขาเขียนงดงามเท่าไร เราก็ยิ่งควรเชื่อเขาน้อยลงเท่านั้น' },
        { speaker: 'Host',    text: 'That\'s a provocative claim — that eloquence itself can be a warning sign.', thai: 'นั่นเป็นข้อเสนอที่ท้าทายทีเดียว ที่ว่าวาทศิลป์เองอาจเป็นสัญญาณเตือน' },
        { speaker: 'Halloway', text: 'It often is. Rarely does an honest narrator need to be so persuasive. The over-polished surface conceals a fracture underneath.', thai: 'มักเป็นเช่นนั้นค่ะ ยากยิ่งที่ผู้เล่าที่ซื่อสัตย์จะต้องพยายามโน้มน้าวถึงเพียงนั้น พื้นผิวที่ขัดเงาเกินไปมักซ่อนรอยร้าวไว้เบื้องล่าง' },
        { speaker: 'Host',    text: 'And for readers new to this — what should they look out for?', thai: 'แล้วสำหรับผู้อ่านที่เพิ่งเริ่มต้น พวกเขาควรสังเกตอะไรบ้างครับ?' },
        { speaker: 'Halloway', text: 'Contradictions, gaps, and the reactions of secondary characters. What the narrator omits is often more telling than what they confess.', thai: 'ความขัดแย้งในเนื้อหา ช่องว่างที่หายไป และปฏิกิริยาของตัวละครรอง สิ่งที่ผู้เล่าละเว้นไม่พูดมักจะบอกอะไรได้มากกว่าสิ่งที่เขาสารภาพ' },
      ],
      questions: [
        { id: 'c2u1-ls-q1', type: 'multiple-choice', prompt: 'According to Halloway, the main appeal of an unreliable narrator is that it:', options: ['simplifies the plot','forces the reader to read actively and question claims','removes the need for a narrator','makes the prose more lyrical'], correctIndex: 1, explanation: 'เธอกล่าวว่า "you\'re forced to read actively, to interrogate every claim"' },
        { id: 'c2u1-ls-q2', type: 'multiple-choice', prompt: 'What does Halloway say about Humbert Humbert\'s eloquence?', options: ['It proves he is honest','It is a smokescreen that should reduce our trust','It makes the plot faster','It is poorly written'], correctIndex: 1, explanation: 'เธอกล่าวว่า "his eloquence is a smokescreen"' },
        { id: 'c2u1-ls-q3', type: 'multiple-choice', prompt: 'What paradox does Halloway describe about honest narrators?', options: ['They rarely need to be so persuasive','They always lie','They never speak','They write badly on purpose'], correctIndex: 0, explanation: '"Rarely does an honest narrator need to be so persuasive"' },
        { id: 'c2u1-ls-q4', type: 'multiple-choice', prompt: 'What does Halloway advise new readers to notice?', options: ['Only the last chapter','Contradictions, gaps, and secondary characters\' reactions','The book cover','The author\'s biography'], correctIndex: 1, explanation: '"Contradictions, gaps, and the reactions of secondary characters"' },
      ]
    },

    reading: {
      id: 'c2-unit-1-reading',
      type: 'Article',
      title: 'Why the Classics Endure',
      thai: 'ทำไมงานคลาสสิกจึงคงอยู่ข้ามกาลเวลา',
      emoji: '📖',
      level: 'C2',
      minutes: 5,
      paragraphs: [
        'To ask why certain works endure while countless others fade into obscurity is to confront one of literature\'s most persistent enigmas. The comforting explanation — that the canon simply preserves the "best" writing — collapses under scrutiny, for taste is neither stable nor disinterested. What one generation reveres, the next may quietly retire; what was dismissed as marginal may be exhumed and crowned. Endurance, then, is less a verdict on intrinsic quality than an ongoing negotiation between text and reader.',
        'Yet to reduce the canon to mere fashion would be equally facile. The works that survive tend to possess a peculiar capacity for renewal: they yield fresh meaning under successive interrogations without exhausting themselves. A play such as Hamlet has been read as a Freudian case study, a political tragedy, a meditation on scepticism, and a study of grief — and none of these readings depletes the text. Its very ambiguity, so often mistaken for vagueness, is in fact a reservoir of interpretive possibility.',
        'This capacity for reinvention explains why translation and adaptation, far from diluting a classic, frequently prolong its life. Each new rendering re-inscribes the work within a fresh cultural moment, allowing it to speak to concerns its author could never have anticipated. The endurance of a text, in this sense, is a collaborative achievement, sustained by the readers, critics and artists who refuse to let it fall silent.',
        'None of this is to deny that power and privilege have shaped the canon. Whose voices were preserved, whose were suppressed, and by what mechanisms — these are questions that contemporary criticism rightly presses. But the recovery of neglected writers does not so much dismantle the idea of endurance as enrich it, reminding us that the conversation between past and present is never finished, and that the map of what deserves to last is perpetually being redrawn.',
      ],
      dialogue: null,
      glossary: [
        { word: 'obscurity',     thai: 'ความไม่เป็นที่รู้จัก / การเลือนหาย',    def: 'the state of being unknown or forgotten' },
        { word: 'the canon',     thai: 'ชุดงานวรรณกรรมที่ได้รับการยกย่องเป็นแบบฉบับ', def: 'the body of works generally accepted as the most important in a tradition' },
        { word: 'to exhume',     thai: 'ขุดขึ้นมาใหม่ / นำกลับมาพิจารณา',       def: 'to bring something back to attention after it has been forgotten' },
        { word: 'facile',        thai: 'ง่ายเกินไป / ตื้นเขิน',                 def: 'ignoring the true complexity of an issue; superficial' },
      ],
      summary: 'The article argues that literary endurance is not a simple verdict on intrinsic quality but an ongoing negotiation between text and reader. Enduring works survive because they yield fresh meaning under repeated interpretation; translation and adaptation prolong rather than dilute them. While power has undeniably shaped the canon, recovering neglected voices enriches, rather than destroys, the idea of endurance.',
      summaryThai: 'บทความเสนอว่าการที่งานวรรณกรรมคงอยู่ข้ามกาลเวลาไม่ใช่คำตัดสินคุณค่าในตัวเอง แต่เป็นการต่อรองระหว่างตัวบทกับผู้อ่าน งานที่คงอยู่ได้เพราะให้ความหมายใหม่ทุกครั้งที่ถูกตีความ การแปลและดัดแปลงยิ่งช่วยต่อลมหายใจให้งาน และแม้อำนาจจะมีส่วนกำหนดชุดงานคลาสสิก แต่การรื้อฟื้นเสียงที่ถูกลืมกลับยิ่งเพิ่มพูนแนวคิดเรื่องความคงอยู่',
      questions: [
        { id: 'c2u1-rd-q1', type: 'multiple-choice', prompt: 'What is the author\'s central claim about literary endurance?', options: ['It proves a work is objectively the best','It is an ongoing negotiation between text and reader','It depends only on the author\'s fame','It is decided permanently by one generation'], correctIndex: 1, explanation: '"Endurance ... is ... an ongoing negotiation between text and reader"' },
        { id: 'c2u1-rd-q2', type: 'multiple-choice', prompt: 'Why does the author cite Hamlet?', options: ['To prove it is poorly written','To show a text can yield many readings without being exhausted','To argue translations ruin classics','To show it is no longer read'], correctIndex: 1, explanation: 'Hamlet ถูกตีความได้หลายแบบโดยไม่หมดความหมาย แสดงถึง "reservoir of interpretive possibility"' },
        { id: 'c2u1-rd-q3', type: 'multiple-choice', prompt: 'According to the article, translation and adaptation:', options: ['dilute and weaken classics','prolong a classic\'s life by re-inscribing it in new moments','are irrelevant to endurance','always distort the original meaning'], correctIndex: 1, explanation: '"translation and adaptation ... frequently prolong its life"' },
        { id: 'c2u1-rd-q4', type: 'multiple-choice', prompt: 'How does the author regard the recovery of neglected writers?', options: ['As something that destroys the idea of endurance','As enriching the idea of endurance','As unimportant to criticism','As proof the canon should be abolished'], correctIndex: 1, explanation: '"the recovery of neglected writers does not so much dismantle the idea of endurance as enrich it"' },
      ]
    },

    test: {
      id: 'c2-unit-1-test',
      passMark: 0.70,
      questions: [
        { id: 'c2u1-t-01', type: 'multiple-choice', prompt: '"ความสมจริงในงานนิยาย" ตรงกับคำใด?', options: ['pathos','verisimilitude','allegory','bildungsroman'], correctIndex: 1, explanation: 'verisimilitude = ความสมจริง/น่าเชื่อว่าเป็นจริง' },
        { id: 'c2u1-t-02', type: 'multiple-choice', prompt: 'A novel tracing the moral growth of its protagonist is a:', options: ['allegory','bildungsroman','pathos','canon'], correctIndex: 1, explanation: 'bildungsroman = นวนิยายว่าด้วยการเติบโตของตัวละคร' },
        { id: 'c2u1-t-03', type: 'fill-in-blank',   prompt: 'A story with a hidden moral or political meaning is an ___.', answer: 'allegory', acceptedVariants: ['allegory','parable'], explanation: 'allegory = เรื่องเปรียบเปรย' },
        { id: 'c2u1-t-04', type: 'multiple-choice', prompt: 'Which sentence uses negative inversion correctly?', options: ['Never I have read such prose.','Never have I read such prose.','Never read I have such prose.','I never have read such prose so.'], correctIndex: 1, explanation: 'Never ขึ้นต้น → have I read (inversion)' },
        { id: 'c2u1-t-05', type: 'fill-in-blank',   prompt: 'Complete the cleft: It was the imagery ___ moved me most.', answer: 'that', acceptedVariants: ['which'], explanation: 'It-cleft ใช้ It was ... that/which ...' },
        { id: 'c2u1-t-06', type: 'multiple-choice', prompt: 'Choose the correct fronted structure.', options: ['So compelling the argument was that all agreed.','So compelling was the argument that all agreed.','So the argument compelling was that all agreed.','Compelling so was the argument all agreed.'], correctIndex: 1, explanation: 'So + adjective ขึ้นต้น → inversion: was the argument' },
        { id: 'c2u1-t-07', type: 'fill-in-blank',   prompt: 'Little ___ she know the narrator was lying.', answer: 'did', acceptedVariants: [], explanation: 'Little ขึ้นต้น → did she know' },
        { id: 'c2u1-t-08', type: 'multiple-choice', prompt: 'In the podcast, why does Humbert Humbert\'s eloquence matter?', options: ['It proves his honesty','It is a smokescreen reducing our trust','It speeds the plot','It shows poor writing'], correctIndex: 1, explanation: '"his eloquence is a smokescreen"' },
        { id: 'c2u1-t-09', type: 'multiple-choice', prompt: 'In the podcast, what is often more telling than a narrator\'s confessions?', options: ['The book title','What the narrator omits','The page count','The publisher'], correctIndex: 1, explanation: '"What the narrator omits is often more telling than what they confess"' },
        { id: 'c2u1-t-10', type: 'multiple-choice', prompt: 'In the article, the ambiguity of Hamlet is best described as:', options: ['a flaw to be corrected','a reservoir of interpretive possibility','simple vagueness','a translation error'], correctIndex: 1, explanation: '"Its very ambiguity ... is in fact a reservoir of interpretive possibility"' },
      ]
    }
  },

  // ============================================================
  // C2 Unit 2: Philosophy
  // ============================================================
  {
    id: 'c2-unit-2',
    title: 'Unit 2: Philosophy',
    thai: 'บทที่ 2: ปรัชญา',
    emoji: '🧠',

    vocabulary: {
      id: 'c2-unit-2-vocab',
      title: 'Concepts of Philosophical Argument',
      thai: 'มโนทัศน์ในการให้เหตุผลเชิงปรัชญา',
      emoji: '🧠',
      level: 'C2',
      words: [
        { word: 'epistemology',   pos: 'noun',      ipa: '/ɪˌpɪstɪˈmɒlədʒi/',   emoji: '🔍', thai: 'ญาณวิทยา (ทฤษฎีความรู้)',            def: 'the branch of philosophy concerned with the nature and limits of knowledge', example: 'Her epistemology holds that all knowledge is ultimately provisional.',            synonym: null,          antonym: null },
        { word: 'a priori',       pos: 'adjective', ipa: '/ˌeɪ praɪˈɔːraɪ/',     emoji: '💭', thai: 'ที่รู้ได้โดยไม่ต้องอาศัยประสบการณ์',   def: 'known to be true by reasoning alone, independently of experience',        example: 'Mathematical truths are often regarded as a priori.',                             synonym: null,          antonym: 'a posteriori' },
        { word: 'to reify',       pos: 'verb',      ipa: '/ˈriːɪfaɪ/',          emoji: '🧱', thai: 'ทำสิ่งนามธรรมให้กลายเป็นรูปธรรม',      def: 'to treat an abstraction as if it were a concrete thing',                  example: 'Critics accuse him of reifying society as though it were a single agent.',        synonym: null,          antonym: null },
        { word: 'tenable',        pos: 'adjective', ipa: '/ˈtenəbl̩/',          emoji: '🛡️', thai: 'ที่ปกป้องหรือยืนยันได้ด้วยเหตุผล',    def: 'able to be defended against objection or attack',                         example: 'The position is no longer tenable once we admit the counter-example.',            synonym: 'defensible',  antonym: 'untenable' },
        { word: 'dialectic',      pos: 'noun',      ipa: '/ˌdaɪəˈlektɪk/',      emoji: '⚖️', thai: 'วิภาษวิธี (การถกเถียงหาความจริง)',     def: 'a method of arriving at truth through the clash of opposing arguments',   example: 'Hegel\'s dialectic proceeds from thesis to antithesis to synthesis.',            synonym: null,          antonym: null },
        { word: 'contingent',     pos: 'adjective', ipa: '/kənˈtɪndʒənt/',      emoji: '🎲', thai: 'ที่ขึ้นอยู่กับเงื่อนไข / ไม่จำเป็นต้องเป็น', def: 'true or existing only under certain conditions; not necessary',        example: 'Whether it rains tomorrow is a contingent, not a necessary, fact.',              synonym: 'conditional', antonym: 'necessary' },
        { word: 'to conflate',    pos: 'verb',      ipa: '/kənˈfleɪt/',         emoji: '🔀', thai: 'ปนเปสองสิ่งเข้าด้วยกันอย่างผิดพลาด',   def: 'to combine two distinct ideas or things as if they were one',             example: 'The essay conflates morality with mere legality.',                                synonym: null,          antonym: 'to distinguish' },
        { word: 'sophistry',      pos: 'noun',      ipa: '/ˈsɒfɪstri/',         emoji: '🎭', thai: 'การใช้เหตุผลลวง / วาทศิลป์หลอกลวง',   def: 'clever but deliberately misleading reasoning',                            example: 'What sounds like rigorous logic is, on inspection, pure sophistry.',              synonym: 'casuistry',   antonym: null },
      ]
    },

    grammar: {
      id: 'c2-unit-2-grammar',
      title: 'Nominalisation & Hedging',
      thai: 'การเปลี่ยนเป็นนาม (nominalisation) และการใช้ภาษาแบบระมัดระวัง (hedging)',
      emoji: '📐',
      level: 'C2',
      summary: 'ภาษาปรัชญาและวิชาการมักเปลี่ยนกริยา/คุณศัพท์ให้เป็นนาม (nominalisation) เพื่อให้ประโยคกระชับและเป็นนามธรรม และใช้คำ hedging เพื่อลดการยืนยันเด็ดขาด ทำให้ข้ออ้างระมัดระวังและเปิดช่องต่อการโต้แย้ง',
      explanation: [
        {
          heading: 'Nominalisation (การเปลี่ยนเป็นนาม)',
          body: 'เปลี่ยนกริยาหรือคุณศัพท์ให้เป็นคำนาม เพื่อยกระดับให้เป็นแนวคิดที่พูดถึงได้\n\ndecide → the decision · argue → the argument\nassume → the assumption · fail → the failure\nfree → freedom · true → truth\n\nปกติ: We assumed the mind is separate, and this failed.\nวิชาการ: The assumption of a separate mind proved a failure.\n\n💡 ทำให้ประโยคเป็นนามธรรม กระชับ และเน้นที่มโนทัศน์มากกว่าผู้กระทำ'
        },
        {
          heading: 'Hedging (การพูดแบบระมัดระวัง)',
          body: 'ใช้คำที่ลดน้ำหนักการยืนยัน เพื่อไม่ให้ข้ออ้างแข็งทื่อเกินไป\n\nModal: may · might · could · would\nAdverb: arguably · seemingly · ostensibly · to some extent\nVerb: seem · appear · tend to · suggest\nวลี: it could be argued that · there is reason to think\n\n❌ This proves consciousness is an illusion.\n✅ This suggests that consciousness may, arguably, be an illusion.'
        },
        {
          heading: 'Boosting vs Hedging (การเน้นย้ำเทียบกับการระมัดระวัง)',
          body: 'บางครั้งผู้เขียนเน้นย้ำ (boosting) เพื่อความหนักแน่น: clearly · undeniably · it is evident that\n\nนักปรัชญาที่ชำนาญจะสลับใช้ทั้งสอง — hedge ในจุดที่ยังถกเถียงได้ และ boost ในจุดที่มั่นใจ เพื่อควบคุมน้ำเสียงและความน่าเชื่อถือ\n\nWhile it is undeniable that we experience, it remains far from clear what experience is.'
        }
      ],
      examples: [
        { en: 'The refutation of dualism rests on a single, contestable assumption.',        th: 'การหักล้างทวินิยมตั้งอยู่บนสมมติฐานเดียวที่ยังถกเถียงได้' },
        { en: 'It could be argued that moral truths are contingent rather than necessary.',   th: 'อาจโต้แย้งได้ว่าความจริงทางศีลธรรมนั้นขึ้นอยู่กับเงื่อนไข ไม่ใช่สิ่งจำเป็น' },
        { en: 'His reasoning seems, on closer inspection, to verge on sophistry.',            th: 'เมื่อพิจารณาใกล้ ๆ การให้เหตุผลของเขาดูจะเฉียดไปทางการใช้เหตุผลลวง' },
        { en: 'The distinction between knowledge and belief is arguably untenable.',          th: 'ความแตกต่างระหว่างความรู้กับความเชื่อนั้นอาจปกป้องไม่ได้' },
        { en: 'What matters is not the conclusion but the validity of the inference.',        th: 'สิ่งที่สำคัญไม่ใช่ข้อสรุป แต่เป็นความสมเหตุสมผลของการอนุมาน' },
        { en: 'There is reason to think the two concepts have been conflated.',              th: 'มีเหตุผลให้คิดว่ามโนทัศน์ทั้งสองถูกปนเปกัน' },
      ],
      practice: [
        { id: 'c2u2-gr-p1', type: 'multiple-choice', prompt: 'Nominalise the verb: "They assumed X." → "Their ___ of X."', options: ['assume','assuming','assumption','assumed'], correctIndex: 2, explanation: 'assume → assumption (คำนาม)' },
        { id: 'c2u2-gr-p2', type: 'fill-in-blank',  prompt: 'Add a hedge (one word): "This ___ suggest the theory is false." (modal)', answer: 'may', acceptedVariants: ['might','could'], explanation: 'may/might/could เป็น hedging modal ที่ลดการยืนยัน' },
        { id: 'c2u2-gr-p3', type: 'multiple-choice', prompt: 'Which sentence is most appropriately hedged for academic writing?', options: ['This proves the mind is material.','This clearly proves the mind is material, no doubt.','This arguably suggests that the mind may be material.','The mind is material, obviously.'], correctIndex: 2, explanation: 'ใช้ arguably + may = hedging เหมาะกับงานวิชาการ' },
      ],
      quiz: [
        { id: 'c2u2-gr-q1', type: 'fill-in-blank',  prompt: 'Nominalise "to decide": the ___.', answer: 'decision', acceptedVariants: [], explanation: 'decide → decision' },
        { id: 'c2u2-gr-q2', type: 'multiple-choice', prompt: 'Which word is a hedge (not a booster)?', options: ['undeniably','clearly','seemingly','evidently'], correctIndex: 2, explanation: 'seemingly เป็น hedge ส่วนอีกสามคำเป็น booster' },
        { id: 'c2u2-gr-q3', type: 'fill-in-blank',  prompt: 'Nominalise "free": ___.', answer: 'freedom', acceptedVariants: [], explanation: 'free (adj) → freedom (noun)' },
        { id: 'c2u2-gr-q4', type: 'multiple-choice', prompt: 'Choose the more nominalised, academic version.', options: ['We argued well and it convinced them.','Our argument was convincing.','The strength of our argument secured their conviction.','We told them and they agreed.'], correctIndex: 2, explanation: 'ใช้ nominalisation (strength, argument, conviction) แบบวิชาการ' },
      ]
    },

    listening: {
      id: 'c2-unit-2-listening',
      type: 'Monologue',
      title: 'The Trolley Problem Reconsidered',
      thai: 'ทบทวนปัญหารถราง',
      emoji: '🎧',
      level: 'C2',
      segments: [
        { speaker: 'Lecturer', text: 'The trolley problem has become philosophy\'s most overworked thought experiment, and yet it stubbornly refuses to be exhausted.', thai: 'ปัญหารถรางกลายเป็นการทดลองทางความคิดที่ถูกใช้จนซ้ำซากที่สุดของวงการปรัชญา แต่กระนั้นมันก็ยังดื้อดึงไม่ยอมหมดความหมาย' },
        { speaker: 'Lecturer', text: 'Recall the setup: a runaway trolley will kill five people unless you divert it onto a track where it will kill one. Most people say: divert it.', thai: 'ทบทวนโจทย์ รถรางที่ควบคุมไม่ได้จะพุ่งชนคนห้าคน เว้นแต่คุณจะเบี่ยงมันไปยังรางที่มีคนเพียงหนึ่งคน คนส่วนใหญ่ตอบว่า เบี่ยงมันไป' },
        { speaker: 'Lecturer', text: 'But alter the mechanism. Now you must physically push a large man off a bridge to stop the trolley. Suddenly, most people recoil.', thai: 'แต่ลองเปลี่ยนกลไก คราวนี้คุณต้องผลักชายร่างใหญ่ตกจากสะพานเพื่อหยุดรถราง ทันใดนั้นคนส่วนใหญ่กลับผวาถอย' },
        { speaker: 'Lecturer', text: 'The arithmetic is identical — one life for five — yet our intuitions diverge sharply. Why should the means matter if the outcome does not change?', thai: 'ตัวเลขเหมือนกันทุกประการ หนึ่งชีวิตแลกห้าชีวิต แต่สัญชาตญาณของเรากลับแตกต่างกันอย่างสิ้นเชิง เหตุใดวิธีการจึงสำคัญ ทั้งที่ผลลัพธ์ไม่เปลี่ยนแปลง?' },
        { speaker: 'Lecturer', text: 'The consequentialist insists it should not; only outcomes count. The deontologist replies that using a person merely as a means is impermissible.', thai: 'นักคิดสายผลนิยมยืนยันว่ามันไม่ควรสำคัญ นับเฉพาะผลลัพธ์เท่านั้น ส่วนนักคิดสายหน้าที่นิยมโต้ว่า การใช้บุคคลเป็นเพียงเครื่องมือนั้นเป็นสิ่งที่ยอมรับไม่ได้' },
        { speaker: 'Lecturer', text: 'What the experiment ultimately exposes is not the right answer, but the fault line running through our own moral psychology.', thai: 'สิ่งที่การทดลองนี้เปิดเผยในที่สุดไม่ใช่คำตอบที่ถูกต้อง แต่เป็นรอยร้าวที่พาดผ่านจิตวิทยาศีลธรรมของเราเอง' },
        { speaker: 'Lecturer', text: 'And that, I would suggest, is precisely its enduring value: it does not resolve our confusion so much as render it visible.', thai: 'และนั่นเอง ผมขอเสนอว่า คือคุณค่าที่คงอยู่ของมัน มันมิได้คลี่คลายความสับสนของเรา หากแต่ทำให้ความสับสนนั้นปรากฏชัด' },
      ],
      questions: [
        { id: 'c2u2-ls-q1', type: 'multiple-choice', prompt: 'In the second version, what makes people recoil?', options: ['More people would die','They must physically push a man to his death','The trolley speeds up','There is no track'], correctIndex: 1, explanation: '"you must physically push a large man off a bridge"' },
        { id: 'c2u2-ls-q2', type: 'multiple-choice', prompt: 'What does the lecturer say is puzzling about the two versions?', options: ['The arithmetic is different','The arithmetic is identical but intuitions diverge','No one dies in either','The outcomes are opposite'], correctIndex: 1, explanation: '"The arithmetic is identical ... yet our intuitions diverge sharply"' },
        { id: 'c2u2-ls-q3', type: 'multiple-choice', prompt: 'How does the deontologist object?', options: ['Only outcomes count','Using a person merely as a means is impermissible','Five lives are worth less','The trolley is not real'], correctIndex: 1, explanation: '"using a person merely as a means is impermissible"' },
        { id: 'c2u2-ls-q4', type: 'multiple-choice', prompt: 'What does the lecturer claim the experiment ultimately reveals?', options: ['The single correct answer','A fault line in our moral psychology','That philosophy is useless','That everyone agrees'], correctIndex: 1, explanation: '"the fault line running through our own moral psychology"' },
      ]
    },

    reading: {
      id: 'c2-unit-2-reading',
      type: 'Article',
      title: 'Can We Trust Our Intuitions?',
      thai: 'เราเชื่อสัญชาตญาณของเราได้หรือไม่?',
      emoji: '📖',
      level: 'C2',
      minutes: 5,
      paragraphs: [
        'Philosophers have long treated intuitions as data — the raw evidence against which theories of morality, knowledge and meaning are to be tested. When a theory clashes with a widely shared intuition, it is the theory, more often than not, that is quietly abandoned. Yet this deference raises an awkward question: why should the untutored verdicts of the mind carry any evidential weight at all?',
        'The optimistic answer holds that intuitions are the sedimented residue of countless generations of experience, a kind of cognitive shorthand refined by evolution and culture alike. On this view, to dismiss them wholesale would be to discard hard-won wisdom. The sceptic retorts that the very features which make intuitions feel authoritative — their immediacy, their resistance to argument — are precisely what should make us wary. What feels self-evident may be nothing more than prejudice wearing the mask of insight.',
        'Empirical work has sharpened these worries considerably. Experiments reveal that our moral intuitions can be nudged by factors that are, on reflection, morally irrelevant: the order in which cases are presented, the wording of a dilemma, even the cleanliness of the room. If a judgement can be swayed by an incidental smell, one might reasonably hesitate before enshrining it as bedrock. The mere fact that a conviction is deeply felt, the critic insists, tells us about our psychology, not about the world.',
        'Where does this leave the philosopher? Somewhere, perhaps, between reverence and suspicion. Intuitions cannot be jettisoned entirely, for without them we should have no starting point at all; every argument must rest, ultimately, on premises that strike us as compelling. But nor can they be treated as infallible oracles. The mature course is to treat them as fallible witnesses — testimony worth hearing, yet always open to cross-examination.',
      ],
      dialogue: null,
      glossary: [
        { word: 'deference',   thai: 'การยอมตาม / การให้น้ำหนักความสำคัญ',   def: 'the act of accepting or yielding to something as authoritative' },
        { word: 'sedimented',  thai: 'ที่สะสมทับถมมาเป็นชั้น ๆ',              def: 'gradually built up and settled over a long period of time' },
        { word: 'to jettison', thai: 'ทิ้งไป / ละทิ้ง',                       def: 'to abandon or discard something no longer wanted' },
        { word: 'infallible',  thai: 'ที่ไม่มีวันผิดพลาด',                    def: 'incapable of being wrong' },
      ],
      summary: 'The article examines whether philosophers should trust intuitions, which they often treat as evidence. Optimists see intuitions as evolved, refined wisdom; sceptics warn that their immediacy may mask prejudice, and empirical studies show intuitions can be swayed by irrelevant factors. The author concludes we should treat intuitions neither as infallible oracles nor as worthless — but as fallible witnesses open to cross-examination.',
      summaryThai: 'บทความพิจารณาว่านักปรัชญาควรเชื่อสัญชาตญาณหรือไม่ ในเมื่อมักถือว่ามันเป็นหลักฐาน ฝ่ายมองโลกในแง่ดีเห็นว่าสัญชาตญาณคือปัญญาที่สั่งสมและกลั่นกรองมา ฝ่ายกังขาเตือนว่าความฉับพลันของมันอาจซ่อนอคติไว้ และการทดลองแสดงว่าสัญชาตญาณถูกโน้มน้าวได้ด้วยปัจจัยไม่เกี่ยวข้อง ผู้เขียนสรุปว่าควรถือสัญชาตญาณเป็นพยานที่ผิดพลาดได้ ไม่ใช่คำพยากรณ์ที่ไม่มีวันผิด',
      questions: [
        { id: 'c2u2-rd-q1', type: 'multiple-choice', prompt: 'How have philosophers traditionally treated intuitions?', options: ['As worthless noise','As data or evidence against which theories are tested','As proof of God','As identical to logic'], correctIndex: 1, explanation: '"Philosophers have long treated intuitions as data"' },
        { id: 'c2u2-rd-q2', type: 'multiple-choice', prompt: 'What is the sceptic\'s worry about intuitions?', options: ['They are too slow','Their immediacy may mask prejudice','They are always correct','They cannot be felt'], correctIndex: 1, explanation: '"What feels self-evident may be nothing more than prejudice wearing the mask of insight"' },
        { id: 'c2u2-rd-q3', type: 'multiple-choice', prompt: 'What do empirical experiments reveal, according to the article?', options: ['Intuitions never change','Intuitions can be swayed by morally irrelevant factors','Intuitions are physical objects','Intuitions cause diseases'], correctIndex: 1, explanation: '"our moral intuitions can be nudged by factors that are ... morally irrelevant"' },
        { id: 'c2u2-rd-q4', type: 'multiple-choice', prompt: 'What is the author\'s concluding recommendation?', options: ['Abandon all intuitions','Treat intuitions as infallible oracles','Treat intuitions as fallible witnesses open to cross-examination','Ignore all philosophy'], correctIndex: 2, explanation: '"treat them as fallible witnesses ... always open to cross-examination"' },
      ]
    },

    test: {
      id: 'c2-unit-2-test',
      passMark: 0.70,
      questions: [
        { id: 'c2u2-t-01', type: 'multiple-choice', prompt: '"ญาณวิทยา (ทฤษฎีความรู้)" ตรงกับคำใด?', options: ['dialectic','epistemology','sophistry','pathos'], correctIndex: 1, explanation: 'epistemology = ญาณวิทยา' },
        { id: 'c2u2-t-02', type: 'multiple-choice', prompt: 'A claim known true by reasoning alone, without experience, is:', options: ['a posteriori','contingent','a priori','tenable'], correctIndex: 2, explanation: 'a priori = รู้ได้โดยไม่ต้องอาศัยประสบการณ์' },
        { id: 'c2u2-t-03', type: 'fill-in-blank',   prompt: 'To combine two distinct ideas as if they were one is to ___ them.', answer: 'conflate', acceptedVariants: [], explanation: 'conflate = ปนเปสองสิ่งเข้าด้วยกัน' },
        { id: 'c2u2-t-04', type: 'multiple-choice', prompt: 'Which is the noun form (nominalisation) of "assume"?', options: ['assuming','assumption','assumed','assumingly'], correctIndex: 1, explanation: 'assume → assumption' },
        { id: 'c2u2-t-05', type: 'fill-in-blank',   prompt: 'Nominalise "free": ___.', answer: 'freedom', acceptedVariants: [], explanation: 'free → freedom' },
        { id: 'c2u2-t-06', type: 'multiple-choice', prompt: 'Which word is a hedge, not a booster?', options: ['undeniably','arguably','clearly','evidently'], correctIndex: 1, explanation: 'arguably = hedge; อีกสามคำ = booster' },
        { id: 'c2u2-t-07', type: 'multiple-choice', prompt: 'Choose the appropriately hedged academic sentence.', options: ['This proves the theory false.','This arguably suggests the theory may be false.','The theory is obviously false.','No doubt the theory is false.'], correctIndex: 1, explanation: 'arguably + may = hedging ที่เหมาะสม' },
        { id: 'c2u2-t-08', type: 'multiple-choice', prompt: 'In the trolley monologue, why do people recoil in the second version?', options: ['More people die','They must physically push a man to his death','The trolley disappears','No one is at risk'], correctIndex: 1, explanation: '"you must physically push a large man off a bridge"' },
        { id: 'c2u2-t-09', type: 'multiple-choice', prompt: 'What does the lecturer say the trolley experiment ultimately exposes?', options: ['The one right answer','A fault line in our moral psychology','That maths is wrong','That trolleys are dangerous'], correctIndex: 1, explanation: '"the fault line running through our own moral psychology"' },
        { id: 'c2u2-t-10', type: 'multiple-choice', prompt: 'In the article, how should intuitions ultimately be treated?', options: ['As infallible oracles','As worthless','As fallible witnesses open to cross-examination','As physical objects'], correctIndex: 2, explanation: '"treat them as fallible witnesses ... open to cross-examination"' },
      ]
    }
  },

  // ============================================================
  // C2 Unit 3: Law
  // ============================================================
  {
    id: 'c2-unit-3',
    title: 'Unit 3: Law',
    thai: 'บทที่ 3: กฎหมาย',
    emoji: '⚖️',

    vocabulary: {
      id: 'c2-unit-3-vocab',
      title: 'Legal Reasoning & Terminology',
      thai: 'การให้เหตุผลและศัพท์ทางกฎหมาย',
      emoji: '⚖️',
      level: 'C2',
      words: [
        { word: 'precedent',        pos: 'noun',      ipa: '/ˈpresɪdənt/',       emoji: '📜', thai: 'บรรทัดฐาน / คำพิพากษาที่ยึดถือเป็นแบบอย่าง', def: 'an earlier legal decision used as a rule in later similar cases', example: 'The ruling set a precedent that lower courts are now bound to follow.', synonym: null, antonym: null },
        { word: 'to adjudicate',    pos: 'verb',      ipa: '/əˈdʒuːdɪkeɪt/',     emoji: '🧑‍⚖️', thai: 'ตัดสินชี้ขาด (ทางกฎหมาย)',            def: 'to make a formal, binding judgement on a dispute',                     example: 'It falls to the tribunal to adjudicate competing claims.',           synonym: 'to rule',    antonym: null },
        { word: 'liable',           pos: 'adjective', ipa: '/ˈlaɪəbl̩/',         emoji: '💸', thai: 'ต้องรับผิด (ตามกฎหมาย)',              def: 'legally responsible and required to pay or answer for something',       example: 'The manufacturer was held liable for the defective product.',        synonym: 'accountable', antonym: 'exempt' },
        { word: 'to construe',      pos: 'verb',      ipa: '/kənˈstruː/',        emoji: '🔎', thai: 'ตีความ (ถ้อยคำหรือกฎหมาย)',           def: 'to interpret the meaning of a statute, contract or clause',             example: 'The clause must be construed in light of the parties\' intentions.', synonym: 'to interpret', antonym: null },
        { word: 'jurisprudence',    pos: 'noun',      ipa: '/ˌdʒʊərɪsˈpruːdəns/', emoji: '🏛️', thai: 'นิติศาสตร์ / หลักปรัชญากฎหมาย',       def: 'the theory or philosophy of law; a body of judicial decisions',         example: 'The concept has evolved through a century of jurisprudence.',        synonym: null,          antonym: null },
        { word: 'mitigating',       pos: 'adjective', ipa: '/ˈmɪtɪɡeɪtɪŋ/',      emoji: '🪶', thai: 'ที่ช่วยบรรเทาโทษ',                    def: 'making an offence seem less serious and reducing the punishment',       example: 'The court took his cooperation into account as a mitigating factor.', synonym: 'extenuating', antonym: 'aggravating' },
        { word: 'onus of proof',    pos: 'noun',      ipa: '/ˈəʊnəs əv pruːf/',  emoji: '⚖️', thai: 'ภาระการพิสูจน์',                     def: 'the obligation to prove a disputed assertion or charge',                example: 'In criminal law the onus of proof rests with the prosecution.',      synonym: 'burden of proof', antonym: null },
        { word: 'notwithstanding',  pos: 'preposition', ipa: '/ˌnɒtwɪθˈstændɪŋ/', emoji: '↔️', thai: 'ถึงแม้ว่า / โดยไม่คำนึงถึง',         def: 'in spite of; without being affected by (formal/legal register)',        example: 'Notwithstanding the delay, the contract remains enforceable.',       synonym: 'despite',    antonym: null },
      ]
    },

    grammar: {
      id: 'c2-unit-3-grammar',
      title: 'Advanced Discourse Markers & Register',
      thai: 'คำเชื่อมโยงความขั้นสูงและระดับภาษาทางการ',
      emoji: '📐',
      level: 'C2',
      summary: 'ภาษากฎหมายและภาษาทางการใช้คำเชื่อมโยงความ (discourse markers) ที่แม่นยำเพื่อระบุเงื่อนไข ข้อยกเว้น และเหตุผล และเลือกใช้คำในระดับภาษาที่สูงกว่าภาษาพูดทั่วไป การเลือก register ที่เหมาะสมสำคัญยิ่งในบริบทวิชาชีพ',
      explanation: [
        {
          heading: 'Concession & exception markers (คำแสดงการยอมรับข้อโต้แย้งและข้อยกเว้น)',
          body: 'ใช้เพื่อยอมรับข้อเท็จจริงหนึ่งขณะยืนยันอีกข้อหนึ่ง\n\nnotwithstanding · albeit · nonetheless · nevertheless · that said · granted that\nsave (for) · except insofar as · subject to · provided that\n\nNotwithstanding the objection, the claim proceeds.\nThe agreement is binding, albeit subject to review.\nProvided that notice is given, the tenant may leave.'
        },
        {
          heading: 'Marking inference, purpose & condition (การระบุการอนุมาน จุดประสงค์ และเงื่อนไข)',
          body: 'Inference: hence · thus · therefore · accordingly · it follows that\nPurpose: with a view to · in order that · so as to\nCondition: in the event that · should (inverted) · on condition that\n\nShould the defendant fail to appear, judgement may be entered.\n(= If the defendant should fail... — inversion แทน if)\nThe evidence was inadmissible; accordingly, the charge was dropped.'
        },
        {
          heading: 'Register: formal vs informal (ระดับภาษา: ทางการ vs ไม่ทางการ)',
          body: 'ภาษากฎหมายเลือกคำระดับสูงและหลีกเลี่ยง phrasal verb ที่ไม่ทางการ\n\nget → obtain · give → confer/grant · start → commence\nask for → request · about → concerning/regarding · but → however\nend → terminate · before → prior to · after → following\n\nInformal: The court will look into it before it ends the case.\nFormal: The court will examine the matter prior to terminating proceedings.'
        }
      ],
      examples: [
        { en: 'Notwithstanding the delay, the parties remain bound by the contract.',        th: 'ถึงแม้จะมีความล่าช้า คู่สัญญายังคงผูกพันตามสัญญา' },
        { en: 'The evidence was circumstantial; accordingly, the jury acquitted.',           th: 'พยานหลักฐานเป็นเพียงพฤติเหตุแวดล้อม ดังนั้นคณะลูกขุนจึงยกฟ้อง' },
        { en: 'Should any dispute arise, it shall be referred to arbitration.',              th: 'หากเกิดข้อพิพาทใด ๆ ให้ส่งเรื่องเข้าสู่การอนุญาโตตุลาการ' },
        { en: 'The clause is enforceable, albeit narrowly construed by the court.',          th: 'ข้อสัญญานี้บังคับใช้ได้ แม้ศาลจะตีความอย่างจำกัดก็ตาม' },
        { en: 'The tenant may sublet, provided that written consent is obtained.',           th: 'ผู้เช่าอาจให้เช่าช่วงได้ โดยมีเงื่อนไขว่าต้องได้รับความยินยอมเป็นลายลักษณ์อักษร' },
        { en: 'Proceedings shall commence following the service of notice.',                 th: 'กระบวนพิจารณาจะเริ่มขึ้นภายหลังการส่งคำบอกกล่าว' },
      ],
      practice: [
        { id: 'c2u3-gr-p1', type: 'multiple-choice', prompt: 'Choose the most formal replacement for "start": Proceedings shall ___.', options: ['start','kick off','commence','get going'], correctIndex: 2, explanation: 'commence เป็นระดับภาษาทางการของ start' },
        { id: 'c2u3-gr-p2', type: 'fill-in-blank',  prompt: 'Complete the conditional inversion: "___ the defendant fail to appear, judgement may be entered." (= If)', answer: 'Should', acceptedVariants: ['should'], explanation: 'Should + subject + verb = inversion แทน If' },
        { id: 'c2u3-gr-p3', type: 'multiple-choice', prompt: 'Which marker signals a concession (accepting one point while asserting another)?', options: ['therefore','notwithstanding','accordingly','hence'], correctIndex: 1, explanation: 'notwithstanding = ถึงแม้ว่า (concession)' },
      ],
      quiz: [
        { id: 'c2u3-gr-q1', type: 'multiple-choice', prompt: 'Choose the formal (legal register) word for "before".', options: ['prior to','ahead of','in front of','sooner than'], correctIndex: 0, explanation: 'prior to = ระดับภาษาทางการของ before' },
        { id: 'c2u3-gr-q2', type: 'fill-in-blank',  prompt: 'Fill the inference marker: "The evidence was inadmissible; ___, the charge was dropped."', answer: 'accordingly', acceptedVariants: ['therefore','thus','hence'], explanation: 'accordingly/therefore/thus/hence = คำเชื่อมการอนุมาน' },
        { id: 'c2u3-gr-q3', type: 'multiple-choice', prompt: 'Which sentence is in the most appropriate legal register?', options: ['The court will look into it.','The court will examine the matter.','The court will check it out.','The court will sort it.'], correctIndex: 1, explanation: 'examine the matter เป็นภาษาทางการ; อีกสามข้อเป็น phrasal verb ไม่ทางการ' },
        { id: 'c2u3-gr-q4', type: 'multiple-choice', prompt: 'Which marker introduces a condition?', options: ['albeit','provided that','nonetheless','that said'], correctIndex: 1, explanation: 'provided that = โดยมีเงื่อนไขว่า (condition)' },
      ]
    },

    listening: {
      id: 'c2-unit-3-listening',
      type: 'Podcast',
      title: 'The Presumption of Innocence',
      thai: 'ข้อสันนิษฐานว่าบริสุทธิ์',
      emoji: '🎧',
      level: 'C2',
      segments: [
        { speaker: 'Host',     text: 'The presumption of innocence is invoked constantly, yet widely misunderstood. Professor Adaeze, what does it actually require?', thai: 'ข้อสันนิษฐานว่าบริสุทธิ์ถูกอ้างถึงอยู่เสมอ แต่กลับถูกเข้าใจผิดอย่างกว้างขวาง ศาสตราจารย์อาแดเซ มันเรียกร้องอะไรกันแน่ครับ?' },
        { speaker: 'Adaeze',   text: 'At its core, it places the onus of proof squarely on the prosecution. The accused need prove nothing; it is the state that must establish guilt.', thai: 'โดยแก่นแท้แล้ว มันวางภาระการพิสูจน์ไว้ที่ฝ่ายอัยการอย่างชัดเจน จำเลยไม่ต้องพิสูจน์อะไรเลย รัฐต่างหากที่ต้องพิสูจน์ความผิด' },
        { speaker: 'Host',     text: 'And to what standard must guilt be established?', thai: 'แล้วต้องพิสูจน์ความผิดถึงมาตรฐานระดับใดครับ?' },
        { speaker: 'Adaeze',   text: 'Beyond reasonable doubt — a deliberately demanding threshold. We would rather ten guilty persons go free than one innocent be wrongly convicted.', thai: 'จนสิ้นสงสัยอันมีเหตุผล ซึ่งเป็นมาตรฐานที่จงใจตั้งไว้สูง เรายอมให้ผู้กระทำผิดสิบคนลอยนวล ดีกว่าให้ผู้บริสุทธิ์หนึ่งคนต้องรับโทษอย่างผิด ๆ' },
        { speaker: 'Host',     text: 'Critics say this lets too many wrongdoers escape. How do you answer that?', thai: 'ผู้วิจารณ์บอกว่ามันปล่อยให้ผู้กระทำผิดหลุดรอดมากเกินไป คุณจะตอบเรื่องนี้อย่างไรครับ?' },
        { speaker: 'Adaeze',   text: 'The asymmetry is intentional, not accidental. A wrongful conviction inflicts an irreversible harm that a wrongful acquittal simply does not.', thai: 'ความไม่สมมาตรนี้เป็นความจงใจ ไม่ใช่ความบังเอิญ การตัดสินลงโทษที่ผิดพลาดก่อความเสียหายที่แก้ไขไม่ได้ ซึ่งการยกฟ้องที่ผิดพลาดไม่ได้ก่อขึ้น' },
        { speaker: 'Host',     text: 'So the principle is really a statement of values, not merely procedure?', thai: 'ดังนั้นหลักการนี้แท้จริงแล้วคือการประกาศคุณค่า ไม่ใช่เพียงกระบวนวิธีใช่ไหมครับ?' },
        { speaker: 'Adaeze',   text: 'Precisely. It encodes a moral choice about which errors a just society is prepared to tolerate — and which it is not.', thai: 'ถูกต้องค่ะ มันบรรจุการเลือกทางศีลธรรมไว้ว่าสังคมที่เที่ยงธรรมพร้อมจะยอมรับความผิดพลาดแบบใด และแบบใดที่ไม่ยอมรับ' },
      ],
      questions: [
        { id: 'c2u3-ls-q1', type: 'multiple-choice', prompt: 'On whom does the presumption of innocence place the onus of proof?', options: ['The accused','The prosecution','The judge','The jury'], correctIndex: 1, explanation: '"it places the onus of proof squarely on the prosecution"' },
        { id: 'c2u3-ls-q2', type: 'multiple-choice', prompt: 'To what standard must guilt be established?', options: ['On the balance of probabilities','Beyond reasonable doubt','Beyond any possibility','On a hunch'], correctIndex: 1, explanation: '"Beyond reasonable doubt — a deliberately demanding threshold"' },
        { id: 'c2u3-ls-q3', type: 'multiple-choice', prompt: 'Why does Adaeze say the asymmetry is intentional?', options: ['Because acquittals are cheaper','Because a wrongful conviction inflicts irreversible harm','Because judges prefer it','Because it speeds up trials'], correctIndex: 1, explanation: '"A wrongful conviction inflicts an irreversible harm that a wrongful acquittal simply does not"' },
        { id: 'c2u3-ls-q4', type: 'multiple-choice', prompt: 'What does Adaeze say the principle ultimately encodes?', options: ['A mere procedural formality','A moral choice about which errors a just society will tolerate','A cost-saving measure','A political slogan'], correctIndex: 1, explanation: '"It encodes a moral choice about which errors a just society is prepared to tolerate"' },
      ]
    },

    reading: {
      id: 'c2-unit-3-reading',
      type: 'Article',
      title: 'The Letter and the Spirit of the Law',
      thai: 'ลายลักษณ์อักษรและเจตนารมณ์ของกฎหมาย',
      emoji: '📖',
      level: 'C2',
      minutes: 5,
      paragraphs: [
        'Few tensions in jurisprudence are as enduring as that between the letter of the law and its spirit. The textualist insists that a statute means what its words say, no more and no less; to look beyond the enacted language, on this view, is to usurp the legislature\'s authority and substitute the judge\'s preferences for the democratic will. The purposive interpreter counters that words are inevitably imperfect vessels, and that fidelity to a law\'s underlying aim may sometimes require departing from its literal terms.',
        'Consider a by-law prohibiting "vehicles" in a public park. Read literally, it would bar an ambulance rushing to save a collapsed pedestrian — an outcome no legislator could plausibly have intended. The textualist must either strain the meaning of "vehicle" or accept an absurd result; the purposivist simply asks what mischief the rule was designed to prevent, and construes it accordingly. Yet the purposive approach is not without peril: once judges may consult unstated aims, the boundary between interpreting a law and rewriting it grows perilously thin.',
        'Notwithstanding these difficulties, most mature legal systems have arrived at an uneasy compromise. Courts begin with the ordinary meaning of the words, presuming that the legislature said what it meant; but where literal application would produce an absurdity or defeat the manifest purpose, they permit a measured departure. The onus, however, remains on the interpreter to justify any move beyond the text, and reviewing courts scrutinise such moves with care.',
        'What this debate ultimately illuminates is that legal interpretation can never be a purely mechanical exercise. Statutes are drafted by fallible people, in general terms, to govern circumstances that cannot all be foreseen. To read them wisely demands not only linguistic precision but also a disciplined sense of purpose — an awareness that the law is, in the end, an instrument in the service of human ends, and not an end in itself.',
      ],
      dialogue: null,
      glossary: [
        { word: 'textualist',  thai: 'ผู้ยึดถ้อยคำตามลายลักษณ์อักษร',        def: 'someone who interprets a law strictly according to its literal wording' },
        { word: 'to usurp',    thai: 'แย่งชิง / ก้าวก่ายอำนาจ',              def: 'to take power or a role wrongfully or by force' },
        { word: 'mischief',    thai: 'ปัญหา/ความเสียหายที่กฎหมายมุ่งป้องกัน', def: 'the specific harm or wrong that a law was designed to remedy (legal sense)' },
        { word: 'purposive',   thai: 'ที่ยึดตามเจตนารมณ์/จุดมุ่งหมาย',       def: 'guided by the underlying purpose or aim rather than the literal words' },
      ],
      summary: 'The article explores the enduring tension between the letter of the law (textualism) and its spirit (purposivism). Textualists warn that looking past the words usurps the legislature; purposivists argue that rigid literalism can produce absurd results, as with a rule banning "vehicles" that would bar an ambulance. Most systems reach a compromise: start with ordinary meaning, but permit a justified departure to avoid absurdity or defeat of purpose. Interpretation, the author concludes, can never be purely mechanical.',
      summaryThai: 'บทความสำรวจความตึงเครียดที่คงอยู่ระหว่างลายลักษณ์อักษรของกฎหมาย (สำนักยึดถ้อยคำ) กับเจตนารมณ์ (สำนักยึดจุดมุ่งหมาย) ฝ่ายยึดถ้อยคำเตือนว่าการมองข้ามคำคือการก้าวก่ายอำนาจนิติบัญญัติ ฝ่ายยึดจุดมุ่งหมายชี้ว่าการตีความตามตัวอักษรอย่างเคร่งครัดอาจให้ผลไร้เหตุผล เช่นกฎห้าม "ยานพาหนะ" ที่จะห้ามรถพยาบาลด้วย ระบบส่วนใหญ่ประนีประนอมโดยเริ่มจากความหมายทั่วไปแต่ยอมให้เบี่ยงเบนได้อย่างมีเหตุผล ผู้เขียนสรุปว่าการตีความกฎหมายไม่มีวันเป็นเพียงกลไกล้วน ๆ',
      questions: [
        { id: 'c2u3-rd-q1', type: 'multiple-choice', prompt: 'What does the textualist insist?', options: ['A statute means only what its words say','Judges should always consult unstated aims','Laws are irrelevant','The legislature is untrustworthy'], correctIndex: 0, explanation: '"a statute means what its words say, no more and no less"' },
        { id: 'c2u3-rd-q2', type: 'multiple-choice', prompt: 'Why is the "no vehicles in the park" example used?', options: ['To prove literal reading can produce absurd results','To ban ambulances','To show laws are perfect','To praise textualism'], correctIndex: 0, explanation: 'การอ่านตามตัวอักษรจะห้ามรถพยาบาล ซึ่งเป็นผลที่ไร้เหตุผล' },
        { id: 'c2u3-rd-q3', type: 'multiple-choice', prompt: 'What is the "peril" of the purposive approach?', options: ['It is too slow','The line between interpreting and rewriting a law grows thin','It bans all vehicles','It ignores judges'], correctIndex: 1, explanation: '"the boundary between interpreting a law and rewriting it grows perilously thin"' },
        { id: 'c2u3-rd-q4', type: 'multiple-choice', prompt: 'What compromise have most mature legal systems reached?', options: ['Always ignore the words','Start with ordinary meaning but allow a justified departure to avoid absurdity','Only ever follow the spirit','Abolish statutes'], correctIndex: 1, explanation: '"Courts begin with the ordinary meaning ... but where literal application would produce an absurdity ... they permit a measured departure"' },
      ]
    },

    test: {
      id: 'c2-unit-3-test',
      passMark: 0.70,
      questions: [
        { id: 'c2u3-t-01', type: 'multiple-choice', prompt: '"บรรทัดฐาน / คำพิพากษาที่ยึดเป็นแบบอย่าง" ตรงกับคำใด?', options: ['precedent','jurisprudence','onus of proof','mitigating'], correctIndex: 0, explanation: 'precedent = บรรทัดฐาน' },
        { id: 'c2u3-t-02', type: 'multiple-choice', prompt: 'To be legally responsible and required to pay is to be:', options: ['exempt','liable','construed','tenable'], correctIndex: 1, explanation: 'liable = ต้องรับผิดตามกฎหมาย' },
        { id: 'c2u3-t-03', type: 'fill-in-blank',   prompt: 'The obligation to prove a charge is the ___ of proof.', answer: 'onus', acceptedVariants: ['burden'], explanation: 'onus/burden of proof = ภาระการพิสูจน์' },
        { id: 'c2u3-t-04', type: 'multiple-choice', prompt: 'Choose the most formal (legal) word for "start".', options: ['kick off','commence','get going','begin sort of'], correctIndex: 1, explanation: 'commence = ระดับภาษาทางการของ start' },
        { id: 'c2u3-t-05', type: 'fill-in-blank',   prompt: 'Conditional inversion (= If): "___ the defendant fail to appear, judgement may be entered."', answer: 'Should', acceptedVariants: ['should'], explanation: 'Should + subject + verb = inversion แทน If' },
        { id: 'c2u3-t-06', type: 'multiple-choice', prompt: 'Which discourse marker signals a concession?', options: ['therefore','hence','notwithstanding','accordingly'], correctIndex: 2, explanation: 'notwithstanding = ถึงแม้ว่า (concession)' },
        { id: 'c2u3-t-07', type: 'multiple-choice', prompt: 'Which sentence uses the most appropriate legal register?', options: ['The court will check it out.','The court will examine the matter prior to terminating proceedings.','The court will look into it before it ends.','The court will sort things out.'], correctIndex: 1, explanation: 'examine / prior to / terminating = ภาษาทางการ' },
        { id: 'c2u3-t-08', type: 'multiple-choice', prompt: 'In the podcast, on whom does the onus of proof rest?', options: ['The accused','The prosecution','The witness','The victim'], correctIndex: 1, explanation: '"it places the onus of proof squarely on the prosecution"' },
        { id: 'c2u3-t-09', type: 'multiple-choice', prompt: 'In the podcast, why is the asymmetry between errors intentional?', options: ['Acquittals cost less','A wrongful conviction inflicts irreversible harm','Judges prefer convictions','It speeds up trials'], correctIndex: 1, explanation: '"A wrongful conviction inflicts an irreversible harm that a wrongful acquittal simply does not"' },
        { id: 'c2u3-t-10', type: 'multiple-choice', prompt: 'In the article, what does the "no vehicles in the park" case illustrate?', options: ['Literal reading can yield an absurd result','Ambulances are vehicles','Textualism is always right','Parks are dangerous'], correctIndex: 0, explanation: 'การอ่านตามตัวอักษรจะห้ามรถพยาบาล ซึ่งไร้เหตุผล' },
      ]
    }
  }
]
