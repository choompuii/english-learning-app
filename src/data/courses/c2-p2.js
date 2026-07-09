// C2 Part 2: Business & International Relations
export const c2p2 = [
  // ============================================================
  // C2 Unit 4: Business (ธุรกิจระดับสูง)
  // ============================================================
  {
    id: 'c2-unit-4',
    title: 'Unit 4: Business',
    thai: 'บทที่ 4: ธุรกิจระดับสูง',
    emoji: '💼',

    vocabulary: {
      id: 'c2-unit-4-vocab',
      title: 'High-Level Business',
      thai: 'ศัพท์ธุรกิจระดับสูง',
      emoji: '💼',
      level: 'C2',
      words: [
        { word: 'leverage',       pos: 'verb', ipa: '/ˈlevərɪdʒ/',        emoji: '⚖️', thai: 'ใช้ประโยชน์ / งัดข้อได้เปรียบ',   def: 'to use something to maximum advantage',                                    example: 'The firm leveraged its brand equity to enter adjacent markets.',        synonym: 'exploit',      antonym: 'squander' },
        { word: 'divest',         pos: 'verb', ipa: '/daɪˈvest/',         emoji: '📉', thai: 'ขายกิจการ / ถอนการลงทุน',        def: 'to sell off a subsidiary, asset, or investment',                           example: 'The conglomerate opted to divest its underperforming logistics arm.',   synonym: 'sell off',     antonym: 'acquire' },
        { word: 'fiduciary',      pos: 'adjective', ipa: '/fɪˈduːʃieri/',  emoji: '🤝', thai: 'เกี่ยวกับหน้าที่ความไว้วางใจ',    def: 'involving trust, especially regarding managing money for another party',   example: 'Directors owe a fiduciary duty to act in shareholders’ interests.', synonym: 'trust-based',  antonym: null },
        { word: 'incumbent',      pos: 'noun', ipa: '/ɪnˈkʌmbənt/',        emoji: '🏛️', thai: 'ผู้ครองตลาดเดิม',                def: 'an established company or person currently holding a position',             example: 'Disruptive start-ups eroded the incumbent’s dominant market share.', synonym: 'established player', antonym: 'challenger' },
        { word: 'arbitrage',      pos: 'noun', ipa: '/ˈɑːrbɪtrɑːʒ/',       emoji: '💱', thai: 'การเก็งกำไรจากส่วนต่างราคา',      def: 'profiting from price differences in different markets',                    example: 'Traders exploited a fleeting arbitrage between the two exchanges.',     synonym: null,           antonym: null },
        { word: 'consolidate',    pos: 'verb', ipa: '/kənˈsɒlɪdeɪt/',      emoji: '🧩', thai: 'ควบรวม / รวบให้เป็นปึกแผ่น',       def: 'to combine into a single, more effective or coherent whole',               example: 'The merger consolidated a fragmented industry under one banner.',       synonym: 'merge',        antonym: 'fragment' },
        { word: 'headwind',       pos: 'noun', ipa: '/ˈhedwɪnd/',          emoji: '🌬️', thai: 'ปัจจัยกดดัน / อุปสรรค',           def: 'a force or condition that hinders progress or growth',                     example: 'Rising interest rates posed a serious headwind to expansion.',          synonym: 'obstacle',     antonym: 'tailwind' },
        { word: 'prudent',        pos: 'adjective', ipa: '/ˈpruːdənt/',    emoji: '🧠', thai: 'รอบคอบ / สุขุม',                 def: 'acting with careful judgement and foresight',                              example: 'A prudent CFO maintains ample liquidity through the cycle.',            synonym: 'judicious',    antonym: 'reckless' },
      ]
    },

    grammar: {
      id: 'c2-unit-4-grammar',
      title: 'Emphasis, Fronting & Nominalisation',
      thai: 'การเน้นย้ำ การนำหน้าประโยค และการเปลี่ยนเป็นคำนาม',
      emoji: '📐',
      level: 'C2',
      summary: 'เรียนรู้เทคนิคระดับ C2 สำหรับภาษาธุรกิจที่เป็นทางการ ได้แก่ cleft sentences การนำวลีมาไว้หน้าประโยค (fronting) และการใช้ nominalisation เพื่อให้สำนวนกระชับและเป็นทางการแบบรายงานผู้บริหาร',
      explanation: [
        {
          heading: 'Cleft sentences for emphasis',
          body: 'Cleft sentences ใช้แยกประโยคเพื่อเน้นข้อมูลบางส่วน\n\nIt-cleft: It was the board that approved the merger. (เน้นว่า "board" คือผู้อนุมัติ)\nWhat-cleft: What drove growth was disciplined cost control. (เน้นสาเหตุของการเติบโต)\n\nโครงสร้างนี้พบมากในการนำเสนอผลประกอบการเพื่อชี้จุดสำคัญ'
        },
        {
          heading: 'Fronting & inversion',
          body: 'การนำวลีปฏิเสธหรือวลีบอกสถานที่/เงื่อนไขมาไว้หน้าประโยคทำให้ต้องสลับกริยา (inversion) และให้ความรู้สึกเป็นทางการหนักแน่น\n\nNot only did revenue rise, but margins also expanded.\nRarely have we seen such volatility.\nOnly after the audit did the risks become clear.'
        },
        {
          heading: 'Nominalisation',
          body: 'การเปลี่ยนกริยา/คุณศัพท์ให้เป็นคำนามทำให้ภาษาเป็นทางการและกระชับ เหมาะกับรายงานทางการ\n\nWe decided to expand → The decision to expand...\nThe market grew rapidly → The rapid growth of the market...\nPrices fell sharply → The sharp fall in prices...'
        }
      ],
      examples: [
        { en: 'It was prudent cost management that preserved the margin.',          th: 'การบริหารต้นทุนอย่างรอบคอบต่างหากที่รักษาอัตรากำไรไว้ได้' },
        { en: 'What the board prioritised was long-term shareholder value.',        th: 'สิ่งที่คณะกรรมการให้ความสำคัญคือมูลค่าระยะยาวของผู้ถือหุ้น' },
        { en: 'Not only did we consolidate operations, but we also divested weak units.', th: 'เราไม่เพียงควบรวมการดำเนินงาน แต่ยังขายหน่วยงานที่อ่อนแอออกไปด้วย' },
        { en: 'Rarely has an incumbent faced disruption on this scale.',            th: 'ยากที่ผู้ครองตลาดเดิมจะเผชิญการเปลี่ยนแปลงในระดับนี้' },
        { en: 'The consolidation of the sector reshaped competitive dynamics.',     th: 'การควบรวมของอุตสาหกรรมได้เปลี่ยนพลวัตการแข่งขันไปโดยสิ้นเชิง' },
        { en: 'Only after divestment did the balance sheet strengthen.',            th: 'หลังจากขายกิจการออกไปแล้วเท่านั้น งบดุลจึงแข็งแกร่งขึ้น' },
      ],
      practice: [
        { id: 'c2u4-gr-p1', type: 'fill-in-blank',  prompt: 'It ___ the CFO who flagged the liquidity risk. (verb "to be", past)', answer: 'was', acceptedVariants: [], explanation: 'It-cleft ในอดีตใช้ "was" เพื่อเน้นประธาน' },
        { id: 'c2u4-gr-p2', type: 'multiple-choice', prompt: 'Complete the fronted negative: "Not only did revenue rise, ___ margins also expand."', options: ['and','but','so','or'], correctIndex: 1, explanation: 'โครงสร้าง "Not only... but also..." ใช้ but' },
        { id: 'c2u4-gr-p3', type: 'fill-in-blank',  prompt: 'Nominalise: "The market grew rapidly." → "The rapid ___ of the market."', answer: 'growth', acceptedVariants: ['growth'], explanation: 'grew (กริยา) → growth (คำนาม)' },
      ],
      quiz: [
        { id: 'c2u4-gr-q1', type: 'multiple-choice', prompt: 'Which sentence correctly uses inversion after a fronted negative adverbial?', options: ['Rarely we have seen such volatility.','Rarely have we seen such volatility.','Rarely we seen have such volatility.','Rarely seen we have such volatility.'], correctIndex: 1, explanation: 'หลัง "Rarely" ต้องสลับกริยาช่วยมาก่อนประธาน: have we seen' },
        { id: 'c2u4-gr-q2', type: 'multiple-choice', prompt: 'Choose the best what-cleft for emphasis.', options: ['We prioritised what long-term value.','What we prioritised was long-term value.','What was we prioritised long-term value.','Long-term value what we prioritised.'], correctIndex: 1, explanation: 'โครงสร้าง what-cleft: What + subject + verb + was + focus' },
        { id: 'c2u4-gr-q3', type: 'fill-in-blank',  prompt: 'Nominalise the verb: "The company decided to expand." → "The ___ to expand..."', answer: 'decision', acceptedVariants: ['decision'], explanation: 'decided (กริยา) → decision (คำนาม)' },
        { id: 'c2u4-gr-q4', type: 'multiple-choice', prompt: 'Which fronted structure is grammatically correct?', options: ['Only after the audit the risks became clear.','Only after the audit did the risks become clear.','Only after the audit became the risks clear.','Only after the audit risks did become clear.'], correctIndex: 1, explanation: 'หลัง "Only after..." ต้อง inversion: did the risks become' },
      ]
    },

    listening: {
      id: 'c2-unit-4-listening',
      type: 'Podcast',
      title: 'Boardroom Strategy Podcast',
      thai: 'พอดแคสต์กลยุทธ์ห้องประชุมผู้บริหาร',
      emoji: '🎧',
      level: 'C2',
      segments: [
        { speaker: 'Host',    text: 'Welcome back. Today we’re unpacking how incumbents defend market share against nimble challengers.', thai: 'ยินดีต้อนรับกลับมาครับ วันนี้เราจะมาเจาะลึกว่าผู้ครองตลาดเดิมป้องกันส่วนแบ่งตลาดจากคู่แข่งที่ว่องไวได้อย่างไร' },
        { speaker: 'Analyst', text: 'The instinct is to consolidate, but consolidation alone rarely addresses the underlying cost structure.', thai: 'สัญชาตญาณคือการควบรวม แต่การควบรวมเพียงอย่างเดียวมักไม่ได้แก้ที่โครงสร้างต้นทุนพื้นฐาน' },
        { speaker: 'Host',    text: 'So where should management focus its capital?', thai: 'แล้วฝ่ายบริหารควรทุ่มเงินทุนไปที่ไหนครับ?' },
        { speaker: 'Analyst', text: 'What tends to create durable value is leveraging existing distribution rather than chasing new geographies prematurely.', thai: 'สิ่งที่มักสร้างมูลค่าที่ยั่งยืนคือการใช้ประโยชน์จากช่องทางจัดจำหน่ายที่มีอยู่ แทนที่จะรีบไล่ตามตลาดใหม่' },
        { speaker: 'Host',    text: 'And the headwinds? Interest rates, supply chains?', thai: 'แล้วปัจจัยกดดันล่ะครับ อัตราดอกเบี้ย ห่วงโซ่อุปทาน?' },
        { speaker: 'Analyst', text: 'Precisely. A prudent board keeps liquidity ample, so it can divest weak assets without a fire sale.', thai: 'ถูกต้องครับ คณะกรรมการที่รอบคอบจะรักษาสภาพคล่องให้เพียงพอ เพื่อขายสินทรัพย์ที่อ่อนแอได้โดยไม่ต้องเทขายราคาถูก' },
        { speaker: 'Host',    text: 'It sounds like discipline, not ambition, is the deciding factor.', thai: 'ฟังดูเหมือนว่าวินัย ไม่ใช่ความทะเยอทะยาน คือปัจจัยชี้ขาด' },
        { speaker: 'Analyst', text: 'Exactly. It is discipline that separates the survivors from the casualties.', thai: 'ใช่เลยครับ วินัยต่างหากที่แยกผู้อยู่รอดออกจากผู้ล้มเหลว' },
      ],
      questions: [
        { id: 'c2u4-ls-q1', type: 'multiple-choice', prompt: 'According to the analyst, what does consolidation alone often fail to fix?', options: ['Brand image','The underlying cost structure','Employee morale','Marketing budgets'], correctIndex: 1, explanation: 'นักวิเคราะห์พูดว่า "consolidation alone rarely addresses the underlying cost structure"' },
        { id: 'c2u4-ls-q2', type: 'multiple-choice', prompt: 'What does the analyst say creates durable value?', options: ['Chasing new geographies quickly','Cutting all costs','Leveraging existing distribution','Raising prices'], correctIndex: 2, explanation: 'นักวิเคราะห์พูดว่า "leveraging existing distribution rather than chasing new geographies"' },
        { id: 'c2u4-ls-q3', type: 'multiple-choice', prompt: 'Why does a prudent board keep liquidity ample?', options: ['To pay higher dividends','To divest weak assets without a fire sale','To hire more staff','To fund advertising'], correctIndex: 1, explanation: 'พูดว่า "keeps liquidity ample, so it can divest weak assets without a fire sale"' },
        { id: 'c2u4-ls-q4', type: 'multiple-choice', prompt: 'What does the analyst say is the deciding factor?', options: ['Ambition','Discipline','Luck','Size'], correctIndex: 1, explanation: 'พูดว่า "It is discipline that separates the survivors from the casualties"' },
      ]
    },

    reading: {
      id: 'c2-unit-4-reading',
      type: 'Article',
      title: 'The Quiet Art of Corporate Discipline',
      thai: 'ศิลปะอันเงียบงันของวินัยองค์กร',
      emoji: '📖',
      level: 'C2',
      minutes: 5,
      paragraphs: [
        'For all the fanfare that surrounds bold acquisitions and audacious expansion, the enterprises that endure are seldom the loudest. It is measured, almost unglamorous discipline—prudent capital allocation, an unflinching grasp of the cost base, and the willingness to divest what no longer earns its keep—that quietly compounds into lasting advantage.',
        'Incumbents, in particular, labour under a peculiar delusion: that scale alone confers safety. Yet scale absent agility is merely inertia dressed in a better suit. When a nimble challenger reframes the terms of competition, the incumbent’s vast infrastructure, so recently a moat, calcifies into a liability that cannot be reconfigured overnight.',
        'What separates the survivors is rarely the grandeur of their vision. Rather, it is their fiduciary seriousness—the recognition that stewardship of other people’s capital demands restraint as much as ambition. Leveraging existing strengths, they resist the seductive arithmetic of arbitrage and refuse to mistake activity for progress.',
        'None of this is glamorous, and none of it photographs well for the annual report’s cover. But headwinds do not discriminate between the reckless and the careful; they simply expose the difference. In the end, it is the boardroom that treats prudence as a strategy, not a constraint, that lives to compete another cycle.',
      ],
      dialogue: null,
      glossary: [
        { word: 'fanfare',   thai: 'ความเอิกเกริก / การโหมประโคม', def: 'a lot of showy publicity or attention' },
        { word: 'moat',      thai: 'เกราะป้องกันเชิงธุรกิจ',        def: 'a durable competitive advantage that protects a company from rivals' },
        { word: 'calcify',   thai: 'แข็งตัว / กลายเป็นสิ่งเปลี่ยนแปลงยาก', def: 'to become rigid and resistant to change' },
        { word: 'stewardship', thai: 'การดูแลจัดการทรัพย์สินของผู้อื่น', def: 'the responsible management of resources entrusted to one’s care' },
      ],
      summary: 'The article argues that enduring companies win through quiet discipline—prudent capital allocation, cost awareness, and timely divestment—rather than through bold expansion. Scale without agility becomes a liability, and fiduciary seriousness distinguishes survivors from casualties.',
      summaryThai: 'บทความชี้ว่าองค์กรที่ยั่งยืนชนะด้วยวินัยอันเงียบงัน ได้แก่ การจัดสรรทุนอย่างรอบคอบ ความเข้าใจต้นทุน และการขายกิจการที่ถูกจังหวะ มากกว่าการขยายตัวอย่างกล้าบ้าบิ่น ขนาดที่ปราศจากความคล่องตัวกลายเป็นภาระ และความจริงจังในหน้าที่ความไว้วางใจคือสิ่งที่แยกผู้อยู่รอดออกจากผู้ล้มเหลว',
      questions: [
        { id: 'c2u4-rd-q1', type: 'multiple-choice', prompt: 'According to the article, what quietly compounds into lasting advantage?', options: ['Bold acquisitions','Measured, unglamorous discipline','Aggressive marketing','Rapid geographic expansion'], correctIndex: 1, explanation: 'ย่อหน้าแรกระบุว่า "measured, almost unglamorous discipline... quietly compounds into lasting advantage"' },
        { id: 'c2u4-rd-q2', type: 'multiple-choice', prompt: 'What "peculiar delusion" do incumbents labour under?', options: ['That agility is worthless','That scale alone confers safety','That prudence is a weakness','That challengers never win'], correctIndex: 1, explanation: 'ย่อหน้าสองระบุว่า incumbents เชื่อผิดว่า "scale alone confers safety"' },
        { id: 'c2u4-rd-q3', type: 'multiple-choice', prompt: 'What does the author say separates the survivors?', options: ['The grandeur of their vision','Their fiduciary seriousness','Their advertising budget','Their willingness to take arbitrage risks'], correctIndex: 1, explanation: 'ย่อหน้าสามระบุว่า "it is their fiduciary seriousness" ที่แยกผู้อยู่รอด' },
        { id: 'c2u4-rd-q4', type: 'multiple-choice', prompt: 'What do headwinds do, according to the final paragraph?', options: ['Reward the reckless','Discriminate against the careful','Expose the difference between reckless and careful','Guarantee failure for everyone'], correctIndex: 2, explanation: 'ย่อหน้าสุดท้าย: "headwinds... simply expose the difference"' },
      ]
    },

    test: {
      id: 'c2-unit-4-test',
      passMark: 0.70,
      questions: [
        { id: 'c2u4-t-01', type: 'multiple-choice', prompt: 'What does "to divest" mean?', options: ['To acquire a company','To sell off an asset or subsidiary','To hire executives','To raise capital'], correctIndex: 1, explanation: 'divest = ขายกิจการ / ถอนการลงทุน' },
        { id: 'c2u4-t-02', type: 'multiple-choice', prompt: 'A "headwind" in business is best described as ___.', options: ['a supportive trend','a force that hinders progress','a type of dividend','a marketing strategy'], correctIndex: 1, explanation: 'headwind = ปัจจัยกดดัน / อุปสรรค (ตรงข้ามกับ tailwind)' },
        { id: 'c2u4-t-03', type: 'fill-in-blank',   prompt: 'A director who acts with careful judgement and foresight is ___ (adjective starting with "pru").', answer: 'prudent', acceptedVariants: ['prudent'], explanation: 'prudent = รอบคอบ / สุขุม' },
        { id: 'c2u4-t-04', type: 'multiple-choice', prompt: '"___ owe a fiduciary duty to shareholders." Choose the meaning of "fiduciary".', options: ['based on speed','based on trust and responsibility','based on marketing','based on debt'], correctIndex: 1, explanation: 'fiduciary = เกี่ยวกับหน้าที่ความไว้วางใจ' },
        { id: 'c2u4-t-05', type: 'multiple-choice', prompt: 'Which sentence correctly uses inversion after a fronted negative?', options: ['Not only revenue rose, but margins expanded.','Not only did revenue rise, but margins also expanded.','Not only revenue did rise, but margins expanded.','Not only rose revenue, but margins expanded.'], correctIndex: 1, explanation: 'หลัง "Not only" ต้อง inversion: did revenue rise' },
        { id: 'c2u4-t-06', type: 'fill-in-blank',   prompt: 'Nominalise: "Prices fell sharply." → "The sharp ___ in prices." (noun of "fell")', answer: 'fall', acceptedVariants: ['fall'], explanation: 'fell (กริยา) → fall (คำนาม)' },
        { id: 'c2u4-t-07', type: 'multiple-choice', prompt: 'Choose the correct it-cleft for emphasis.', options: ['It was the board approved the merger.','It was the board that approved the merger.','It the board was that approved the merger.','That was the board it approved the merger.'], correctIndex: 1, explanation: 'It-cleft: It + was + focus + that + clause' },
        { id: 'c2u4-t-08', type: 'multiple-choice', prompt: 'In the podcast, what does the analyst say creates durable value?', options: ['Chasing new geographies quickly','Leveraging existing distribution','Cutting the workforce','Increasing debt'], correctIndex: 1, explanation: 'นักวิเคราะห์พูดถึง "leveraging existing distribution"' },
        { id: 'c2u4-t-09', type: 'multiple-choice', prompt: 'In the podcast, what does the analyst call the deciding factor?', options: ['Ambition','Discipline','Scale','Luck'], correctIndex: 1, explanation: '"It is discipline that separates the survivors from the casualties"' },
        { id: 'c2u4-t-10', type: 'multiple-choice', prompt: 'In the article, why does scale without agility become a problem?', options: ['It guarantees profit','It is merely inertia and can calcify into a liability','It always attracts regulators','It reduces the cost base'], correctIndex: 1, explanation: 'ย่อหน้าสอง: "scale absent agility is merely inertia" และ "calcifies into a liability"' },
      ]
    }
  },

  // ============================================================
  // C2 Unit 5: International Relations (ความสัมพันธ์ระหว่างประเทศ)
  // ============================================================
  {
    id: 'c2-unit-5',
    title: 'Unit 5: International Relations',
    thai: 'บทที่ 5: ความสัมพันธ์ระหว่างประเทศ',
    emoji: '🌐',

    vocabulary: {
      id: 'c2-unit-5-vocab',
      title: 'Diplomacy & Statecraft',
      thai: 'การทูตและการบริหารรัฐกิจ',
      emoji: '🌐',
      level: 'C2',
      words: [
        { word: 'rapprochement', pos: 'noun', ipa: '/ræˌprɒʃˈmɒ̃/',   emoji: '🤝', thai: 'การฟื้นฟูความสัมพันธ์อันดี',        def: 'the re-establishment of cordial relations between states',                 example: 'A cautious rapprochement followed decades of hostility.',              synonym: 'reconciliation', antonym: 'estrangement' },
        { word: 'sovereignty',   pos: 'noun', ipa: '/ˈsɒvrɪnti/',         emoji: '👑', thai: 'อธิปไตย',                          def: 'a state’s supreme authority over its own territory and affairs',        example: 'The treaty explicitly respected each nation’s sovereignty.',       synonym: 'autonomy',      antonym: 'subjugation' },
        { word: 'multilateral',  pos: 'adjective', ipa: '/ˌmʌltiˈlætərəl/', emoji: '🏛️', thai: 'พหุภาคี / หลายฝ่าย',              def: 'involving more than two nations or parties',                               example: 'A multilateral framework proved more durable than bilateral pacts.',   synonym: null,            antonym: 'unilateral' },
        { word: 'sanction',      pos: 'noun', ipa: '/ˈsæŋkʃən/',          emoji: '🚫', thai: 'มาตรการคว่ำบาตร',                  def: 'a penalty imposed on a state to compel a change in policy',                example: 'Targeted sanctions were calibrated to pressure the regime, not civilians.', synonym: 'penalty',   antonym: 'reward' },
        { word: 'détente',       pos: 'noun', ipa: '/deɪˈtɒnt/',          emoji: '🕊️', thai: 'การผ่อนคลายความตึงเครียด',          def: 'an easing of hostility or strained relations between states',              example: 'The summit ushered in an era of fragile détente.',                     synonym: 'easing',        antonym: 'escalation' },
        { word: 'hegemony',      pos: 'noun', ipa: '/hɪˈdʒeməni/',        emoji: '⚔️', thai: 'อำนาจครอบงำ / ความเป็นเจ้า',        def: 'dominance of one state over others within a region or system',             example: 'Rising powers increasingly contest the established hegemony.',         synonym: 'dominance',     antonym: 'parity' },
        { word: 'accord',        pos: 'noun', ipa: '/əˈkɔːrd/',           emoji: '📜', thai: 'ข้อตกลง / สนธิสัญญา',              def: 'a formal agreement between states or parties',                             example: 'The parties signed an accord to de-escalate along the border.',        synonym: 'agreement',     antonym: 'discord' },
        { word: 'reciprocity',   pos: 'noun', ipa: '/ˌresɪˈprɒsɪti/',     emoji: '🔄', thai: 'การตอบแทนซึ่งกันและกัน',            def: 'the mutual exchange of privileges or concessions between states',          example: 'Trade concessions were extended on a basis of strict reciprocity.',    synonym: 'mutuality',     antonym: null },
      ]
    },

    grammar: {
      id: 'c2-unit-5-grammar',
      title: 'Hedging, Diplomatic Register & Ellipsis',
      thai: 'การใช้ภาษาแบบระมัดระวัง สำนวนทางการทูต และการละคำ',
      emoji: '📐',
      level: 'C2',
      summary: 'เรียนรู้ภาษาระดับ C2 สำหรับงานทางการทูต ได้แก่ hedging (การพูดแบบระมัดระวังไม่ฟันธง) การใช้ passive และ modal เพื่อความสุภาพเป็นทางการ และ ellipsis (การละคำที่เข้าใจได้)',
      explanation: [
        {
          heading: 'Hedging & tentative language',
          body: 'ในภาษาทางการทูต การไม่ฟันธงคือทักษะสำคัญ ใช้ hedges เพื่อลดความแข็งกร้าว\n\nIt would appear that... / One might argue that...\nThere is arguably scope for... / It is not inconceivable that...\nThe parties may wish to consider...\n\nแทนที่จะพูด "You are wrong" ให้พูด "We would respectfully take a different view."'
        },
        {
          heading: 'Diplomatic register: passive & modals',
          body: 'การใช้ passive และ modal ช่วยลดการชี้นิ้วกล่าวโทษและทำให้ประโยคเป็นทางการ\n\nActive/blunt: You broke the agreement.\nDiplomatic: It appears the agreement may not have been fully honoured.\n\nModals of softening: could, might, would, may เพิ่มความสุภาพและความไม่ผูกมัด'
        },
        {
          heading: 'Ellipsis',
          body: 'Ellipsis คือการละคำที่ผู้ฟังเข้าใจได้จากบริบท ทำให้ภาษากระชับ\n\nSome states favoured sanctions; others (favoured), dialogue.\nWe can accept clause one but not (clause) two.\nThey promised to comply, and comply they must (comply).'
        }
      ],
      examples: [
        { en: 'It would appear that both sides remain committed to dialogue.',        th: 'ดูเหมือนว่าทั้งสองฝ่ายยังคงมุ่งมั่นต่อการเจรจา' },
        { en: 'The parties may wish to consider a phased withdrawal.',                th: 'คู่เจรจาอาจต้องการพิจารณาการถอนกำลังแบบเป็นขั้นตอน' },
        { en: 'We would respectfully take a different view on sovereignty.',          th: 'เราขอแสดงความเห็นต่างอย่างสุภาพในประเด็นอธิปไตย' },
        { en: 'It appears the accord may not have been fully honoured.',             th: 'ดูเหมือนว่าข้อตกลงอาจไม่ได้รับการปฏิบัติตามอย่างครบถ้วน' },
        { en: 'Some delegations backed sanctions; others, engagement.',              th: 'บางคณะผู้แทนสนับสนุนมาตรการคว่ำบาตร ส่วนคณะอื่นสนับสนุนการมีปฏิสัมพันธ์' },
        { en: 'There is arguably scope for a measured rapprochement.',               th: 'อาจกล่าวได้ว่ายังมีช่องทางสำหรับการฟื้นฟูความสัมพันธ์อย่างระมัดระวัง' },
      ],
      practice: [
        { id: 'c2u5-gr-p1', type: 'multiple-choice', prompt: 'Which is the most diplomatic (hedged) way to disagree?', options: ['You are completely wrong.','That is a stupid idea.','We would respectfully take a different view.','No, absolutely not.'], correctIndex: 2, explanation: 'ภาษาทางการทูตใช้ hedging เพื่อลดความแข็งกร้าว' },
        { id: 'c2u5-gr-p2', type: 'fill-in-blank',  prompt: 'Soften with a modal: "It ___ appear that talks have stalled." (modal of tentativeness starting with "w")', answer: 'would', acceptedVariants: ['would'], explanation: '"It would appear that..." เป็นสำนวน hedging ทั่วไป' },
        { id: 'c2u5-gr-p3', type: 'multiple-choice', prompt: 'Which sentence uses ellipsis correctly?', options: ['Some states favoured sanctions; others favoured dialogue too dialogue.','Some states favoured sanctions; others, dialogue.','Some states sanctions favoured; others dialogue.','Some states favoured; others sanctions dialogue.'], correctIndex: 1, explanation: 'Ellipsis ละกริยาซ้ำ "favoured": others, dialogue' },
      ],
      quiz: [
        { id: 'c2u5-gr-q1', type: 'multiple-choice', prompt: 'Choose the most diplomatic rephrasing of "You broke the agreement."', options: ['You clearly broke the agreement.','It appears the agreement may not have been fully honoured.','You are guilty of breaking it.','The agreement was broken by you.'], correctIndex: 1, explanation: 'Passive + modal + hedge ลดการกล่าวโทษโดยตรง' },
        { id: 'c2u5-gr-q2', type: 'fill-in-blank',  prompt: 'Hedge the claim: "It is not ___ that a deal will be reached." (adjective meaning "impossible to imagine")', answer: 'inconceivable', acceptedVariants: ['inconceivable'], explanation: '"It is not inconceivable that..." เป็นสำนวน hedging ระดับ C2' },
        { id: 'c2u5-gr-q3', type: 'multiple-choice', prompt: 'Which phrase best expresses tentative suggestion in diplomatic register?', options: ['You must consider a ceasefire.','Consider a ceasefire now.','The parties may wish to consider a ceasefire.','A ceasefire is ordered.'], correctIndex: 2, explanation: '"The parties may wish to consider..." เป็นสำนวนเสนอแนะแบบสุภาพ' },
        { id: 'c2u5-gr-q4', type: 'multiple-choice', prompt: 'Identify the sentence that correctly uses ellipsis.', options: ['We can accept clause one but not clause two clause.','We can accept clause one but not two.','We can accept but not one two clause.','We accept can clause one not two.'], correctIndex: 1, explanation: 'Ellipsis ละ "clause": "but not two"' },
      ]
    },

    listening: {
      id: 'c2-unit-5-listening',
      type: 'News',
      title: 'Summit Diplomacy: Evening Bulletin',
      thai: 'ข่าวภาคค่ำ: การทูตในการประชุมสุดยอด',
      emoji: '🎧',
      level: 'C2',
      segments: [
        { speaker: 'Anchor',      text: 'Good evening. After three days of tense negotiations, delegates have reportedly edged towards a fragile rapprochement.', thai: 'สวัสดีตอนค่ำครับ หลังการเจรจาอันตึงเครียดสามวัน มีรายงานว่าคณะผู้แทนขยับเข้าใกล้การฟื้นฟูความสัมพันธ์อันเปราะบาง' },
        { speaker: 'Correspondent', text: 'That’s right. It would appear that both sides have quietly softened their positions on territorial sovereignty.', thai: 'ถูกต้องครับ ดูเหมือนว่าทั้งสองฝ่ายได้ผ่อนปรนท่าทีเรื่องอธิปไตยเหนือดินแดนอย่างเงียบๆ' },
        { speaker: 'Anchor',      text: 'And what of the sanctions that have strained relations for years?', thai: 'แล้วมาตรการคว่ำบาตรที่ทำให้ความสัมพันธ์ตึงเครียดมาหลายปีล่ะครับ?' },
        { speaker: 'Correspondent', text: 'Officials suggest a phased easing, contingent on verified compliance and strict reciprocity.', thai: 'เจ้าหน้าที่ชี้ว่าจะมีการผ่อนคลายแบบเป็นขั้นตอน โดยขึ้นอยู่กับการปฏิบัติตามที่ตรวจสอบได้และการตอบแทนซึ่งกันและกันอย่างเคร่งครัด' },
        { speaker: 'Anchor',      text: 'Is a formal accord within reach?', thai: 'ข้อตกลงอย่างเป็นทางการอยู่ในระยะที่เอื้อมถึงไหมครับ?' },
        { speaker: 'Correspondent', text: 'Arguably. A multilateral framework is favoured, though it is not inconceivable that talks could yet unravel.', thai: 'อาจกล่าวได้ครับ กรอบพหุภาคีเป็นที่นิยม แม้จะไม่ใช่เรื่องที่คิดไม่ถึงว่าการเจรจาอาจล่มได้' },
        { speaker: 'Anchor',      text: 'So this is détente, but a cautious one.', thai: 'เท่ากับนี่คือการผ่อนคลายความตึงเครียด แต่เป็นไปอย่างระมัดระวัง' },
        { speaker: 'Correspondent', text: 'Precisely. Neither side wishes to concede hegemony, so every clause is being negotiated word by word.', thai: 'ถูกต้องครับ ไม่มีฝ่ายใดต้องการยอมสละความเป็นเจ้า ดังนั้นทุกข้อจึงถูกเจรจากันคำต่อคำ' },
      ],
      questions: [
        { id: 'c2u5-ls-q1', type: 'multiple-choice', prompt: 'What have the delegates reportedly edged towards?', options: ['Open conflict','A fragile rapprochement','Total surrender','A trade war'], correctIndex: 1, explanation: 'ผู้ประกาศพูดว่า "edged towards a fragile rapprochement"' },
        { id: 'c2u5-ls-q2', type: 'multiple-choice', prompt: 'On what is the phased easing of sanctions contingent?', options: ['A cash payment','Verified compliance and strict reciprocity','A change of government','Public opinion'], correctIndex: 1, explanation: 'ผู้สื่อข่าวพูดว่า "contingent on verified compliance and strict reciprocity"' },
        { id: 'c2u5-ls-q3', type: 'multiple-choice', prompt: 'Which framework is favoured for a formal agreement?', options: ['Unilateral','Bilateral only','Multilateral','No framework'], correctIndex: 2, explanation: '"A multilateral framework is favoured"' },
        { id: 'c2u5-ls-q4', type: 'multiple-choice', prompt: 'Why is every clause negotiated word by word?', options: ['Because the deadline is far away','Because neither side wishes to concede hegemony','Because translators are slow','Because the accord is already signed'], correctIndex: 1, explanation: '"Neither side wishes to concede hegemony, so every clause is being negotiated word by word"' },
      ]
    },

    reading: {
      id: 'c2-unit-5-reading',
      type: 'Article',
      title: 'The Grammar of Diplomacy',
      thai: 'ไวยากรณ์แห่งการทูต',
      emoji: '📖',
      level: 'C2',
      minutes: 5,
      paragraphs: [
        'Diplomacy is, at its core, the deliberate art of saying almost everything without ever saying too much. Where the layperson hears evasion, the seasoned envoy recognises craftsmanship: a single hedged clause—"it would appear that positions have converged"—can preserve a negotiation that a blunter formulation would have detonated on contact.',
        'The vocabulary of statecraft is calibrated to leave doors ajar. Terms such as rapprochement, détente, and accord are chosen precisely because they promise movement without conceding sovereignty. A state may signal willingness to explore reciprocity while committing to nothing, extending an olive branch whose thorns remain, prudently, intact.',
        'Yet ambiguity is not the same as weakness. Multilateral frameworks endure not despite their studied vagueness but because of it; language elastic enough to accommodate divergent domestic audiences is language robust enough to survive them. The most durable accords are frequently those whose key clauses can be read, in good faith, in more than one way.',
        'None of this is cynicism. It is, rather, the recognition that between the extremes of capitulation and confrontation lies a vast, contested middle ground—and that the words chosen to describe it are not mere decoration, but instruments of power in their own right. He who commands the grammar of diplomacy commands, in no small measure, the peace.',
      ],
      dialogue: null,
      glossary: [
        { word: 'envoy',        thai: 'ทูต / ผู้แทนทางการทูต',       def: 'a diplomatic representative sent on a mission' },
        { word: 'olive branch', thai: 'สัญญาณเสนอไมตรี',            def: 'a gesture or offer intended to make peace' },
        { word: 'capitulation', thai: 'การยอมจำนน',                 def: 'the act of surrendering or giving in completely' },
        { word: 'studied',      thai: 'ที่จงใจ / ที่ตั้งใจอย่างแยบยล', def: 'deliberate and carefully considered, not accidental' },
      ],
      summary: 'The article portrays diplomacy as a craft of deliberate, hedged language. Terms like rapprochement and détente promise movement without conceding sovereignty, and multilateral accords endure precisely because their calculated ambiguity accommodates divergent audiences. Mastering diplomatic grammar is itself an instrument of power.',
      summaryThai: 'บทความนำเสนอการทูตในฐานะศิลปะของภาษาที่จงใจใช้แบบระมัดระวังไม่ฟันธง คำอย่าง rapprochement และ détente สื่อถึงการขยับโดยไม่ยอมสละอธิปไตย และข้อตกลงพหุภาคีคงทนได้เพราะความกำกวมที่ตั้งใจไว้รองรับผู้ฟังที่หลากหลาย การเชี่ยวชาญไวยากรณ์แห่งการทูตจึงเป็นเครื่องมือแห่งอำนาจในตัวเอง',
      questions: [
        { id: 'c2u5-rd-q1', type: 'multiple-choice', prompt: 'How does the article describe diplomacy at its core?', options: ['The art of saying nothing at all','The art of saying almost everything without saying too much','The art of aggressive confrontation','The art of surrendering gracefully'], correctIndex: 1, explanation: 'ย่อหน้าแรก: "the deliberate art of saying almost everything without ever saying too much"' },
        { id: 'c2u5-rd-q2', type: 'multiple-choice', prompt: 'Why are terms like rapprochement and détente chosen?', options: ['They sound impressive','They promise movement without conceding sovereignty','They are easy to translate','They guarantee immediate peace'], correctIndex: 1, explanation: 'ย่อหน้าสอง: "chosen precisely because they promise movement without conceding sovereignty"' },
        { id: 'c2u5-rd-q3', type: 'multiple-choice', prompt: 'According to the article, why do multilateral frameworks endure?', options: ['Because they are perfectly clear','Because of their studied vagueness','Because they favour one nation','Because they are rarely used'], correctIndex: 1, explanation: 'ย่อหน้าสาม: "endure not despite their studied vagueness but because of it"' },
        { id: 'c2u5-rd-q4', type: 'multiple-choice', prompt: 'What is the author’s final claim about the grammar of diplomacy?', options: ['It is mere decoration','It is a sign of weakness','It is an instrument of power that commands the peace','It should be abandoned'], correctIndex: 2, explanation: 'ย่อหน้าสุดท้าย: "He who commands the grammar of diplomacy commands... the peace"' },
      ]
    },

    test: {
      id: 'c2-unit-5-test',
      passMark: 0.70,
      questions: [
        { id: 'c2u5-t-01', type: 'multiple-choice', prompt: 'What does "sovereignty" mean?', options: ['A trade tariff','A state’s supreme authority over its own affairs','A type of sanction','A diplomatic dinner'], correctIndex: 1, explanation: 'sovereignty = อธิปไตย' },
        { id: 'c2u5-t-02', type: 'multiple-choice', prompt: '"Détente" refers to ___.', options: ['an escalation of hostility','an easing of strained relations','a declaration of war','a trade embargo'], correctIndex: 1, explanation: 'détente = การผ่อนคลายความตึงเครียด (ตรงข้ามกับ escalation)' },
        { id: 'c2u5-t-03', type: 'fill-in-blank',   prompt: 'The mutual exchange of concessions between states is called ___ (noun starting with "recip").', answer: 'reciprocity', acceptedVariants: ['reciprocity'], explanation: 'reciprocity = การตอบแทนซึ่งกันและกัน' },
        { id: 'c2u5-t-04', type: 'multiple-choice', prompt: 'A framework involving more than two nations is ___.', options: ['unilateral','bilateral','multilateral','fiduciary'], correctIndex: 2, explanation: 'multilateral = พหุภาคี / หลายฝ่าย' },
        { id: 'c2u5-t-05', type: 'multiple-choice', prompt: 'Which is the most diplomatic rephrasing of "You broke the agreement"?', options: ['You obviously broke it.','It appears the agreement may not have been fully honoured.','You are the one to blame.','You broke it, full stop.'], correctIndex: 1, explanation: 'Passive + modal + hedge ลดการกล่าวโทษ' },
        { id: 'c2u5-t-06', type: 'fill-in-blank',   prompt: 'Hedge the statement: "It ___ appear that talks have stalled." (tentative modal starting with "w")', answer: 'would', acceptedVariants: ['would'], explanation: '"It would appear that..." เป็นสำนวน hedging' },
        { id: 'c2u5-t-07', type: 'multiple-choice', prompt: 'Which sentence correctly uses ellipsis?', options: ['Some states favoured sanctions; others favoured dialogue dialogue.','Some delegations backed sanctions; others, engagement.','Some states sanctions; favoured others engagement.','Some backed states sanctions others engagement.'], correctIndex: 1, explanation: 'Ellipsis ละกริยาซ้ำ "backed": others, engagement' },
        { id: 'c2u5-t-08', type: 'multiple-choice', prompt: 'In the news bulletin, on what is the easing of sanctions contingent?', options: ['A public apology','Verified compliance and strict reciprocity','A financial payment','A change of leader'], correctIndex: 1, explanation: 'ผู้สื่อข่าวพูดว่า "contingent on verified compliance and strict reciprocity"' },
        { id: 'c2u5-t-09', type: 'multiple-choice', prompt: 'In the bulletin, why is every clause negotiated word by word?', options: ['Because of slow translators','Because neither side wishes to concede hegemony','Because the accord is signed','Because the deadline passed'], correctIndex: 1, explanation: '"Neither side wishes to concede hegemony"' },
        { id: 'c2u5-t-10', type: 'multiple-choice', prompt: 'In the article, why do multilateral frameworks endure?', options: ['Because of their perfect clarity','Because of their studied vagueness','Because they favour one state','Because they are legally binding on citizens'], correctIndex: 1, explanation: 'ย่อหน้าสาม: "endure... because of" their studied vagueness' },
      ]
    }
  }
]
