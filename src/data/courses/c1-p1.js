// C1 Part 1: Academic English (Economics, Politics, Psychology)
export const c1p1 = [
  // ============================================================
  // C1 Unit 1: Economics
  // ============================================================
  {
    id: 'c1-unit-1',
    title: 'Unit 1: Economics',
    thai: 'บทที่ 1: เศรษฐศาสตร์',
    emoji: '📈',

    vocabulary: {
      id: 'c1-unit-1-vocab',
      title: 'The Language of Economics',
      thai: 'ศัพท์เศรษฐศาสตร์',
      emoji: '📈',
      level: 'C1',
      words: [
        { word: 'inflation',      pos: 'noun',      ipa: '/ɪnˈfleɪʃən/',        emoji: '💸', thai: 'ภาวะเงินเฟ้อ',            def: 'a general and sustained increase in prices, which reduces the purchasing power of money', example: 'Soaring inflation has eroded the real value of household savings.',                 synonym: 'price rise',   antonym: 'deflation' },
        { word: 'recession',      pos: 'noun',      ipa: '/rɪˈseʃən/',          emoji: '📉', thai: 'ภาวะเศรษฐกิจถดถอย',      def: 'a period of temporary economic decline during which trade and industrial activity contract', example: 'The economy slipped into a deep recession after two consecutive quarters of negative growth.', synonym: 'downturn',    antonym: 'boom' },
        { word: 'fiscal',         pos: 'adjective', ipa: '/ˈfɪskəl/',           emoji: '🏛️', thai: 'เกี่ยวกับการคลัง',        def: 'relating to government revenue, especially taxes and public spending',                   example: 'The government adopted an expansionary fiscal policy to stimulate demand.',            synonym: 'budgetary',   antonym: null },
        { word: 'monetary',       pos: 'adjective', ipa: '/ˈmʌnɪtəri/',         emoji: '🪙', thai: 'เกี่ยวกับการเงิน',        def: 'relating to money supply, interest rates, and the operations of a central bank',          example: 'Tightening monetary policy is intended to curb runaway inflation.',                    synonym: null,           antonym: null },
        { word: 'commodity',      pos: 'noun',      ipa: '/kəˈmɒdɪti/',         emoji: '🛢️', thai: 'สินค้าโภคภัณฑ์',          def: 'a raw material or primary agricultural product that can be bought and sold',              example: 'Global commodity prices surged amid mounting supply constraints.',                     synonym: 'good',         antonym: null },
        { word: 'depreciation',   pos: 'noun',      ipa: '/dɪˌpriːʃiˈeɪʃən/',   emoji: '📊', thai: 'การอ่อนค่า / ค่าเสื่อม',  def: 'a fall in the value of a currency or asset over time',                                    example: 'The sharp depreciation of the baht made imports considerably more expensive.',         synonym: 'devaluation',  antonym: 'appreciation' },
        { word: 'subsidy',        pos: 'noun',      ipa: '/ˈsʌbsɪdi/',          emoji: '🤝', thai: 'เงินอุดหนุน',            def: 'a sum of money granted by the state to keep the price of a commodity or service low',     example: 'Fuel subsidies placed an unsustainable burden on the national budget.',                synonym: 'grant',        antonym: 'tax' },
        { word: 'equilibrium',    pos: 'noun',      ipa: '/ˌiːkwɪˈlɪbriəm/',    emoji: '⚖️', thai: 'จุดดุลยภาพ',             def: 'a state in which economic forces such as supply and demand are balanced',                 example: 'The market eventually reached equilibrium once prices adjusted.',                      synonym: 'balance',      antonym: 'imbalance' },
      ]
    },

    grammar: {
      id: 'c1-unit-1-grammar',
      title: 'Inversion for Emphasis',
      thai: 'การผกผันประโยคเพื่อเน้นความ (Inversion)',
      emoji: '📐',
      level: 'C1',
      summary: 'เรียนรู้การสลับตำแหน่งประธานกับกริยาช่วย (inversion) หลังคำหรือวลีเชิงลบ/จำกัด เพื่อเน้นความและสร้างสำนวนทางการเหมาะกับงานวิชาการด้านเศรษฐศาสตร์',
      explanation: [
        {
          heading: 'What is inversion?',
          body: 'Inversion คือการสลับลำดับปกติของประธานและกริยาช่วย (auxiliary verb) เพื่อเน้นความ มักใช้ในภาษาทางการและงานเขียนเชิงวิชาการ\n\nเมื่อขึ้นต้นประโยคด้วยวลีเชิงลบหรือจำกัด (negative / restrictive adverbials) เราต้องย้ายกริยาช่วยมาไว้หน้าประธาน เหมือนการตั้งคำถาม\n\nปกติ: The central bank rarely intervenes.\nInversion: Rarely does the central bank intervene.'
        },
        {
          heading: 'Common triggers',
          body: 'วลีที่มักกระตุ้นให้เกิด inversion เมื่อขึ้นต้นประโยค:\n\nNever · Rarely · Seldom · Hardly · Scarcely · No sooner ... than\nNot only ... but also · Not until · Little · Only then · Only after · Under no circumstances · At no point\n\n⚠️ จุดที่ผู้เรียนไทยมักผิด: ลืมใส่กริยาช่วย do/does/did เมื่อกริยาเป็น present/past simple\n❌ Never the economy recovered so quickly.\n✅ Never did the economy recover so quickly.'
        },
        {
          heading: 'Inversion with "not only" and "no sooner"',
          body: 'โครงสร้างสองแบบที่พบบ่อยในงานเศรษฐศาสตร์:\n\nNot only + [inversion] + but ... also ...\n→ Not only did prices rise, but wages also stagnated.\n\nNo sooner + [inversion] + than ...\n→ No sooner had the tariffs been announced than markets fell.'
        }
      ],
      examples: [
        { en: 'Rarely has a recession been so severe.',                                th: 'ภาวะถดถอยรุนแรงเช่นนี้เกิดขึ้นได้ยากมาก' },
        { en: 'Not only did inflation surge, but unemployment also climbed.',          th: 'ไม่เพียงแต่เงินเฟ้อพุ่งสูงเท่านั้น แต่การว่างงานก็เพิ่มขึ้นด้วย' },
        { en: 'No sooner had the bank cut rates than the currency depreciated.',       th: 'ทันทีที่ธนาคารลดดอกเบี้ย ค่าเงินก็อ่อนตัวลง' },
        { en: 'Under no circumstances should subsidies be withdrawn abruptly.',        th: 'ไม่ว่ากรณีใด ก็ไม่ควรยกเลิกเงินอุดหนุนอย่างกะทันหัน' },
        { en: 'Only after prices stabilised did consumer confidence return.',          th: 'หลังจากราคานิ่งแล้วเท่านั้น ความเชื่อมั่นของผู้บริโภคจึงกลับมา' },
        { en: 'Seldom do markets reach equilibrium without intervention.',             th: 'ตลาดแทบไม่เคยเข้าสู่จุดดุลยภาพได้เองโดยปราศจากการแทรกแซง' },
      ],
      practice: [
        { id: 'c1u1-gr-p1', type: 'fill-in-blank',  prompt: 'Rarely ___ the central bank intervene in the market. (do/does/did — present)', answer: 'does', acceptedVariants: [], explanation: 'ประธาน the central bank เป็นเอกพจน์ present จึงใช้ does หลัง Rarely' },
        { id: 'c1u1-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct inversion: "___ had the tariffs been imposed than exports fell."', options: ['No sooner','Not only','Only after','Hardly ever'], correctIndex: 0, explanation: 'โครงสร้าง No sooner ... than ใช้กับ past perfect (had)' },
        { id: 'c1u1-gr-p3', type: 'fill-in-blank',  prompt: 'Not only ___ prices rise, but wages also fell. (did/does/do — past)', answer: 'did', acceptedVariants: [], explanation: 'เหตุการณ์อดีต จึงใช้ did หลัง Not only' },
      ],
      quiz: [
        { id: 'c1u1-gr-q1', type: 'multiple-choice', prompt: 'Which sentence uses inversion correctly?', options: ['Never the economy has grown so fast.','Never has the economy grown so fast.','Never grown the economy has so fast.','Never economy has grown so fast.'], correctIndex: 1, explanation: 'หลัง Never ต้องย้ายกริยาช่วย has มาไว้หน้าประธาน' },
        { id: 'c1u1-gr-q2', type: 'fill-in-blank',   prompt: 'Under no circumstances ___ subsidies be removed overnight. (should)', answer: 'should', acceptedVariants: [], explanation: 'หลังวลีเชิงลบ Under no circumstances ใช้ modal should นำหน้าประธาน' },
        { id: 'c1u1-gr-q3', type: 'multiple-choice', prompt: 'Complete: "Only after the crisis ___ policymakers act decisively."', options: ['do','did','have','are'], correctIndex: 1, explanation: 'เหตุการณ์อดีตหลัง Only after ใช้ did นำหน้าประธาน' },
        { id: 'c1u1-gr-q4', type: 'multiple-choice', prompt: 'Identify the correctly inverted sentence.', options: ['Seldom the markets reach equilibrium.','Seldom do markets reach equilibrium.','Seldom markets do reach equilibrium.','Do seldom markets reach equilibrium.'], correctIndex: 1, explanation: 'หลัง Seldom ใช้ do + ประธาน + กริยารูปฐาน' },
      ]
    },

    listening: {
      id: 'c1-unit-1-listening',
      type: 'Podcast',
      title: 'The Economics Hour: Understanding Inflation',
      thai: 'พอดแคสต์เศรษฐศาสตร์: ทำความเข้าใจเงินเฟ้อ',
      emoji: '🎧',
      level: 'C1',
      segments: [
        { speaker: 'Host',    text: 'Welcome back to The Economics Hour. Today we are dissecting the forces driving persistent inflation across emerging markets.', thai: 'ยินดีต้อนรับกลับสู่ The Economics Hour วันนี้เราจะวิเคราะห์ปัจจัยที่ทำให้เงินเฟ้อยืดเยื้อในตลาดเกิดใหม่' },
        { speaker: 'Dr Chan', text: 'Thank you for having me. What is often overlooked is that inflation is not a single phenomenon but the product of overlapping supply and demand shocks.', thai: 'ขอบคุณที่เชิญมาครับ สิ่งที่มักถูกมองข้ามคือ เงินเฟ้อไม่ใช่ปรากฏการณ์เดียว แต่เป็นผลของแรงกระแทกด้านอุปทานและอุปสงค์ที่ทับซ้อนกัน' },
        { speaker: 'Host',    text: 'So would you attribute the recent surge primarily to monetary expansion?', thai: 'แล้วคุณจะยกให้การพุ่งขึ้นครั้งนี้เป็นผลจากการขยายตัวทางการเงินเป็นหลักไหมครับ?' },
        { speaker: 'Dr Chan', text: 'Only in part. Loose monetary policy certainly played a role, but soaring commodity prices amplified the pressure considerably.', thai: 'เพียงบางส่วนครับ นโยบายการเงินที่ผ่อนคลายมีบทบาทแน่นอน แต่ราคาสินค้าโภคภัณฑ์ที่พุ่งขึ้นก็ยิ่งเพิ่มแรงกดดันอย่างมาก' },
        { speaker: 'Host',    text: 'And how should central banks respond without tipping the economy into recession?', thai: 'แล้วธนาคารกลางควรตอบสนองอย่างไรโดยไม่ผลักเศรษฐกิจเข้าสู่ภาวะถดถอย?' },
        { speaker: 'Dr Chan', text: 'It is a delicate balancing act. Raising interest rates too aggressively risks stifling growth, yet acting too slowly allows expectations to become entrenched.', thai: 'มันเป็นการรักษาสมดุลที่ละเอียดอ่อน ขึ้นดอกเบี้ยเร็วเกินไปเสี่ยงกดการเติบโต แต่ช้าเกินไปก็ปล่อยให้ความคาดหวังเงินเฟ้อฝังลึก' },
        { speaker: 'Host',    text: 'Some argue that fiscal restraint matters just as much. Do you agree?', thai: 'บางคนแย้งว่าวินัยการคลังก็สำคัญไม่แพ้กัน คุณเห็นด้วยไหม?' },
        { speaker: 'Dr Chan', text: 'Absolutely. Coordinated fiscal and monetary policy is essential; otherwise, one arm of government undermines the other.', thai: 'เห็นด้วยอย่างยิ่งครับ การประสานนโยบายการคลังและการเงินเป็นสิ่งจำเป็น มิเช่นนั้นฝ่ายหนึ่งของรัฐจะบั่นทอนอีกฝ่าย' },
      ],
      questions: [
        { id: 'c1u1-ls-q1', type: 'multiple-choice', prompt: 'According to Dr Chan, inflation is best understood as:', options: ['A single, isolated event','The result of overlapping supply and demand shocks','Purely a monetary phenomenon','An inevitable consequence of trade'], correctIndex: 1, explanation: 'เขาบอกว่าเงินเฟ้อเป็น "the product of overlapping supply and demand shocks"' },
        { id: 'c1u1-ls-q2', type: 'multiple-choice', prompt: 'What amplified the recent inflationary pressure?', options: ['Falling wages','Soaring commodity prices','Lower taxes','Currency appreciation'], correctIndex: 1, explanation: 'เขาพูดว่า "soaring commodity prices amplified the pressure"' },
        { id: 'c1u1-ls-q3', type: 'multiple-choice', prompt: 'What is the risk of raising interest rates too aggressively?', options: ['Stifling economic growth','Increasing subsidies','Reducing taxes','Strengthening the currency'], correctIndex: 0, explanation: 'เขาบอกว่า "Raising interest rates too aggressively risks stifling growth"' },
        { id: 'c1u1-ls-q4', type: 'multiple-choice', prompt: 'What does Dr Chan say is essential to avoid one arm of government undermining the other?', options: ['Higher subsidies','Coordinated fiscal and monetary policy','Free-floating exchange rates','Reduced public spending'], correctIndex: 1, explanation: 'เขาบอกว่า "Coordinated fiscal and monetary policy is essential"' },
      ]
    },

    reading: {
      id: 'c1-unit-1-reading',
      type: 'Article',
      title: 'The Paradox of Prosperity',
      thai: 'ความย้อนแย้งแห่งความมั่งคั่ง',
      emoji: '📖',
      level: 'C1',
      minutes: 5,
      paragraphs: [
        'Economic growth has long been treated as the ultimate barometer of national wellbeing, yet a growing body of research suggests that the relationship between prosperity and welfare is far more tenuous than policymakers care to admit. Gross domestic product, the metric that dominates headlines, captures the aggregate value of goods and services but remains conspicuously silent on how that wealth is distributed, at what environmental cost it is generated, and whether it translates into meaningful improvements in quality of life.',
        'Consider the phenomenon economists term "immiserising growth", whereby an expansion in output paradoxically leaves the majority worse off. When the gains from productivity accrue disproportionately to a narrow segment of society, headline figures may soar even as median incomes stagnate. In such circumstances, the buoyant statistics that adorn government press releases obscure a widening chasm between the affluent and the rest, sowing the seeds of social discontent that no amount of aggregate expansion can readily assuage.',
        'Compounding the problem is the tendency to externalise costs that never appear on any balance sheet. The depletion of natural resources, the degradation of ecosystems, and the burden borne by future generations are routinely omitted from conventional accounting. A factory that pollutes a river may boost measured output while simultaneously destroying the livelihoods of those downstream, a transaction that registers as unambiguously positive in the ledger of national income yet is manifestly detrimental to collective welfare.',
        'None of this is to suggest that growth is inherently undesirable; rather, it is to argue that growth pursued as an end in itself, divorced from considerations of equity and sustainability, is a profoundly inadequate objective. Were governments to embrace broader measures of progress, ones that weigh distribution, environmental integrity, and human flourishing alongside raw output, they might craft policies far better attuned to what citizens actually value.',
      ],
      dialogue: null,
      glossary: [
        { word: 'tenuous',        thai: 'เปราะบาง / ไม่หนักแน่น',  def: 'very weak or slight; lacking a firm basis' },
        { word: 'immiserising',   thai: 'ทำให้ยากจนลง',           def: 'causing greater poverty or hardship despite apparent progress' },
        { word: 'externalise',    thai: 'ผลักภาระออกไปภายนอก',      def: 'to shift a cost onto parties who are not involved in a transaction' },
        { word: 'assuage',        thai: 'บรรเทา / ทำให้เบาลง',      def: 'to make an unpleasant feeling less intense' },
      ],
      summary: "The article challenges the equation of economic growth with wellbeing, arguing that GDP ignores distribution, environmental costs, and quality of life. It warns of 'immiserising growth' and urges broader measures of progress that weigh equity and sustainability.",
      summaryThai: 'บทความตั้งคำถามต่อการเทียบเท่าการเติบโตทางเศรษฐกิจกับความเป็นอยู่ที่ดี โดยชี้ว่า GDP ละเลยการกระจายรายได้ ต้นทุนสิ่งแวดล้อม และคุณภาพชีวิต พร้อมเตือนถึง "การเติบโตที่ทำให้ยากจนลง" และเรียกร้องให้ใช้ตัววัดความก้าวหน้าที่กว้างขึ้น',
      questions: [
        { id: 'c1u1-rd-q1', type: 'multiple-choice', prompt: 'What is the central criticism of GDP in the article?', options: ['It is too difficult to calculate','It ignores distribution, environmental cost, and quality of life','It overstates unemployment','It is rarely reported'], correctIndex: 1, explanation: 'ย่อหน้าแรกระบุว่า GDP เงียบเรื่องการกระจายความมั่งคั่ง ต้นทุนสิ่งแวดล้อม และคุณภาพชีวิต' },
        { id: 'c1u1-rd-q2', type: 'multiple-choice', prompt: 'What does "immiserising growth" describe?', options: ['Growth that benefits everyone equally','Growth that leaves the majority worse off','A period of recession','Rapid currency appreciation'], correctIndex: 1, explanation: 'ย่อหน้าสองอธิบายว่าเป็นการที่ผลผลิตขยายตัวแต่คนส่วนใหญ่กลับแย่ลง' },
        { id: 'c1u1-rd-q3', type: 'multiple-choice', prompt: 'How does the polluting factory example illustrate externalised costs?', options: ['It lowers national income','It boosts measured output while harming those downstream','It creates jobs for everyone','It reduces pollution over time'], correctIndex: 1, explanation: 'ย่อหน้าสามยกตัวอย่างโรงงานที่เพิ่มผลผลิตแต่ทำลายวิถีชีวิตของคนปลายน้ำ' },
        { id: 'c1u1-rd-q4', type: 'multiple-choice', prompt: 'What does the author ultimately advocate?', options: ['Abandoning economic growth entirely','Broader measures of progress that weigh equity and sustainability','Focusing solely on GDP','Reducing government spending'], correctIndex: 1, explanation: 'ย่อหน้าสุดท้ายเสนอให้ใช้ตัววัดความก้าวหน้าที่กว้างขึ้น รวมการกระจายรายได้และความยั่งยืน' },
      ]
    },

    test: {
      id: 'c1-unit-1-test',
      passMark: 0.70,
      questions: [
        { id: 'c1u1-t-01', type: 'multiple-choice', prompt: '"ภาวะเงินเฟ้อ" ในภาษาอังกฤษคือคำใด?', options: ['recession','inflation','subsidy','equilibrium'], correctIndex: 1, explanation: 'inflation = ภาวะเงินเฟ้อ' },
        { id: 'c1u1-t-02', type: 'multiple-choice', prompt: 'What does "fiscal" relate to?', options: ['Money supply and interest rates','Government revenue and public spending','Foreign exchange only','Stock prices'], correctIndex: 1, explanation: 'fiscal เกี่ยวกับรายได้รัฐและการใช้จ่ายภาครัฐ' },
        { id: 'c1u1-t-03', type: 'fill-in-blank',   prompt: 'The opposite of "inflation" is ___.', answer: 'deflation', acceptedVariants: [], explanation: 'ตรงข้ามกับ inflation คือ deflation' },
        { id: 'c1u1-t-04', type: 'multiple-choice', prompt: 'Which sentence uses inversion correctly?', options: ['Rarely the bank intervenes.','Rarely does the bank intervene.','Rarely intervenes the bank.','Rarely the bank does intervene.'], correctIndex: 1, explanation: 'หลัง Rarely ใช้ does + ประธาน + กริยารูปฐาน' },
        { id: 'c1u1-t-05', type: 'fill-in-blank',   prompt: 'No sooner ___ the tariffs been announced than markets fell. (had)', answer: 'had', acceptedVariants: [], explanation: 'โครงสร้าง No sooner ... than ใช้ past perfect (had)' },
        { id: 'c1u1-t-06', type: 'multiple-choice', prompt: 'Complete: "Not only ___ prices rise, but wages also stagnated."', options: ['do','does','did','are'], correctIndex: 2, explanation: 'เหตุการณ์อดีต ใช้ did หลัง Not only' },
        { id: 'c1u1-t-07', type: 'multiple-choice', prompt: 'In the podcast, what amplified inflationary pressure?', options: ['Falling commodity prices','Soaring commodity prices','Higher wages','Lower interest rates'], correctIndex: 1, explanation: 'Dr Chan บอกว่า soaring commodity prices เพิ่มแรงกดดัน' },
        { id: 'c1u1-t-08', type: 'multiple-choice', prompt: 'In the podcast, what did Dr Chan say is essential?', options: ['Higher subsidies','Coordinated fiscal and monetary policy','Free trade','Currency devaluation'], correctIndex: 1, explanation: 'เขาบอกว่าการประสานนโยบายการคลังและการเงินเป็นสิ่งจำเป็น' },
        { id: 'c1u1-t-09', type: 'multiple-choice', prompt: 'In the article, what does GDP fail to capture?', options: ['The total value of goods','How wealth is distributed and environmental costs','Government revenue','The number of workers'], correctIndex: 1, explanation: 'บทความชี้ว่า GDP ละเลยการกระจายความมั่งคั่งและต้นทุนสิ่งแวดล้อม' },
        { id: 'c1u1-t-10', type: 'fill-in-blank',   prompt: 'In the article, "immiserising growth" leaves the ___ worse off.', answer: 'majority', acceptedVariants: ['poor','most'], explanation: 'บทความระบุว่าการเติบโตแบบนี้ทำให้คนส่วนใหญ่ (majority) แย่ลง' },
      ]
    }
  },

  // ============================================================
  // C1 Unit 2: Politics
  // ============================================================
  {
    id: 'c1-unit-2',
    title: 'Unit 2: Politics',
    thai: 'บทที่ 2: การเมือง',
    emoji: '🏛️',

    vocabulary: {
      id: 'c1-unit-2-vocab',
      title: 'The Language of Politics',
      thai: 'ศัพท์การเมือง',
      emoji: '🏛️',
      level: 'C1',
      words: [
        { word: 'sovereignty',   pos: 'noun',      ipa: '/ˈsɒvrɪnti/',        emoji: '👑', thai: 'อธิปไตย',                def: 'the full right and power of a governing body to rule itself without external interference', example: 'The treaty was seen by critics as an erosion of national sovereignty.',              synonym: 'autonomy',      antonym: 'dependence' },
        { word: 'legislation',   pos: 'noun',      ipa: '/ˌledʒɪsˈleɪʃən/',   emoji: '📜', thai: 'การออกกฎหมาย / กฎหมาย',   def: 'laws considered collectively, or the process of making them',                             example: 'The proposed legislation faced fierce opposition in the upper house.',               synonym: 'law',           antonym: null },
        { word: 'partisan',      pos: 'adjective', ipa: '/ˈpɑːtɪzən/',        emoji: '🎌', thai: 'ที่ลำเอียงเข้าข้างพรรค',   def: 'strongly and often blindly supporting a particular party or cause',                       example: 'The debate degenerated into partisan bickering rather than reasoned analysis.',      synonym: 'biased',        antonym: 'impartial' },
        { word: 'incumbent',     pos: 'noun',      ipa: '/ɪnˈkʌmbənt/',       emoji: '🪑', thai: 'ผู้ดำรงตำแหน่งอยู่',       def: 'the current holder of a political office or position',                                    example: 'The incumbent narrowly retained her seat despite a swing against the party.',        synonym: 'officeholder',  antonym: 'challenger' },
        { word: 'mandate',       pos: 'noun',      ipa: '/ˈmændeɪt/',         emoji: '✅', thai: 'อาณัติ / อำนาจที่ได้รับ',  def: 'the authority granted to elected representatives by the voters',                          example: 'The government claimed a clear mandate to pursue sweeping reforms.',                  synonym: 'authority',     antonym: null },
        { word: 'coalition',     pos: 'noun',      ipa: '/ˌkəʊəˈlɪʃən/',      emoji: '🤝', thai: 'รัฐบาลผสม / พันธมิตร',    def: 'an alliance of parties or factions formed to govern or achieve a common goal',            example: 'A fragile coalition was cobbled together after the inconclusive election.',          synonym: 'alliance',      antonym: null },
        { word: 'accountability', pos: 'noun',     ipa: '/əˌkaʊntəˈbɪləti/',  emoji: '⚖️', thai: 'ความรับผิดชอบต่อสาธารณะ',  def: 'the obligation of those in power to justify their actions and accept responsibility',     example: 'Transparency and accountability are the cornerstones of democratic governance.',     synonym: 'answerability',  antonym: 'impunity' },
        { word: 'populism',      pos: 'noun',      ipa: '/ˈpɒpjʊlɪzəm/',      emoji: '📢', thai: 'ประชานิยม',              def: 'a political approach appealing to ordinary people who feel their concerns are ignored by elites', example: 'The rise of populism has reshaped the political landscape across the continent.', synonym: null,            antonym: null },
      ]
    },

    grammar: {
      id: 'c1-unit-2-grammar',
      title: 'Cleft Sentences for Emphasis',
      thai: 'ประโยคเน้นความแบบ Cleft',
      emoji: '📐',
      level: 'C1',
      summary: 'เรียนรู้การใช้ประโยค cleft (It-cleft และ Wh-cleft) เพื่อเน้นข้อมูลบางส่วนในประโยค เหมาะกับการโต้แย้งและวิเคราะห์ประเด็นการเมืองอย่างมีน้ำหนัก',
      explanation: [
        {
          heading: 'What is a cleft sentence?',
          body: 'Cleft sentence คือการแยกประโยคเดียวออกเป็นสองส่วน เพื่อเน้น (emphasise) ข้อมูลชิ้นใดชิ้นหนึ่ง ทำให้ผู้ฟังโฟกัสที่จุดที่เราต้องการ\n\nประโยคปกติ: The voters decided the outcome.\nCleft: It was the voters who decided the outcome. (เน้นที่ "the voters")'
        },
        {
          heading: 'It-cleft',
          body: 'โครงสร้าง: It + be + [ส่วนที่เน้น] + that / who + ...\n\nIt was in 1997 that the constitution was reformed.\nIt is accountability that voters demand most.\n\n⚠️ จุดที่ผู้เรียนไทยมักผิด: ลืมใส่ that/who หรือใช้ be ผิด tense\n❌ It was the coalition collapsed.\n✅ It was the coalition that collapsed.'
        },
        {
          heading: 'Wh-cleft (pseudo-cleft)',
          body: 'โครงสร้าง: What + [ประโยค] + be + [ส่วนที่เน้น]\n\nWhat the electorate wants is genuine reform.\nWhat undermined the government was its lack of accountability.\n\nใช้เน้นการกระทำหรือสิ่งที่ต้องการ มักขึ้นต้นด้วย What'
        }
      ],
      examples: [
        { en: 'It was the incumbent who lost the popular vote.',                  th: 'ผู้ที่แพ้คะแนนนิยมคือผู้ดำรงตำแหน่งเดิม' },
        { en: 'It is transparency that citizens value most.',                     th: 'สิ่งที่ประชาชนให้คุณค่ามากที่สุดคือความโปร่งใส' },
        { en: 'What the coalition lacked was a coherent policy.',                 th: 'สิ่งที่รัฐบาลผสมขาดคือนโยบายที่สอดคล้องกัน' },
        { en: 'What triggered the crisis was a breach of the mandate.',           th: 'สิ่งที่จุดชนวนวิกฤตคือการละเมิดอาณัติที่ได้รับ' },
        { en: 'It was only after the scandal that reforms were introduced.',      th: 'หลังจากเรื่องอื้อฉาวเท่านั้นที่การปฏิรูปถูกนำมาใช้' },
        { en: 'What matters in a democracy is accountability.',                   th: 'สิ่งที่สำคัญในระบอบประชาธิปไตยคือความรับผิดชอบต่อสาธารณะ' },
      ],
      practice: [
        { id: 'c1u2-gr-p1', type: 'fill-in-blank',  prompt: 'It was the voters ___ decided the outcome. (who/which)', answer: 'who', acceptedVariants: [], explanation: 'ใช้ who เพราะส่วนที่เน้นคือคน (the voters)' },
        { id: 'c1u2-gr-p2', type: 'multiple-choice', prompt: 'Which is a correct Wh-cleft sentence?', options: ['What the party needs is unity.','What needs the party is unity.','The party what needs is unity.','What is the party needs unity.'], correctIndex: 0, explanation: 'โครงสร้าง What + ประโยค + be + ส่วนที่เน้น' },
        { id: 'c1u2-gr-p3', type: 'fill-in-blank',  prompt: '___ was the coalition that collapsed. (It/What)', answer: 'It', acceptedVariants: [], explanation: 'It-cleft ขึ้นต้นด้วย It + was + ส่วนที่เน้น + that' },
      ],
      quiz: [
        { id: 'c1u2-gr-q1', type: 'multiple-choice', prompt: 'Choose the correct It-cleft sentence.', options: ['It was accountability voters demand.','It was accountability that voters demand.','It accountability that voters demand.','Was it accountability voters demand.'], correctIndex: 1, explanation: 'It + be + ส่วนที่เน้น + that + ประโยค' },
        { id: 'c1u2-gr-q2', type: 'fill-in-blank',   prompt: '___ the electorate wants is genuine reform. (What/It)', answer: 'What', acceptedVariants: [], explanation: 'Wh-cleft ขึ้นต้นด้วย What' },
        { id: 'c1u2-gr-q3', type: 'multiple-choice', prompt: 'Complete the cleft: "It was in 2014 ___ the constitution was suspended."', options: ['who','which','that','where'], correctIndex: 2, explanation: 'It-cleft ที่เน้นเวลา ใช้ that' },
        { id: 'c1u2-gr-q4', type: 'multiple-choice', prompt: 'Which sentence emphasises the cause of the crisis?', options: ['The crisis was caused by corruption.','What caused the crisis was corruption.','Corruption is a crisis cause.','A crisis of corruption caused.'], correctIndex: 1, explanation: 'Wh-cleft "What caused the crisis was ..." เน้นสาเหตุอย่างชัดเจน' },
      ]
    },

    listening: {
      id: 'c1-unit-2-listening',
      type: 'News',
      title: 'Nightly Report: A Fractured Parliament',
      thai: 'รายงานข่าวภาคค่ำ: รัฐสภาที่แตกแยก',
      emoji: '🎧',
      level: 'C1',
      segments: [
        { speaker: 'Anchor',    text: 'Good evening. Tonight, the nation wakes to a hung parliament after an election that has left no single party with an outright majority.', thai: 'สวัสดีตอนค่ำ คืนนี้ประเทศตื่นขึ้นมาพบกับสภาที่ไม่มีเสียงข้างมากเด็ดขาด หลังการเลือกตั้งที่ไม่มีพรรคใดได้เสียงข้างมาก' },
        { speaker: 'Reporter',  text: 'That is right. With the votes now counted, the incumbent party has fallen short of the threshold needed to govern alone.', thai: 'ถูกต้องครับ เมื่อนับคะแนนเสร็จแล้ว พรรครัฐบาลเดิมได้เสียงต่ำกว่าเกณฑ์ที่จำเป็นในการจัดตั้งรัฐบาลเดี่ยว' },
        { speaker: 'Anchor',    text: 'So what are the prospects for forming a stable coalition?', thai: 'แล้วโอกาสในการจัดตั้งรัฐบาลผสมที่มั่นคงเป็นอย่างไร?' },
        { speaker: 'Reporter',  text: 'Negotiations are already under way, but analysts warn that any alliance stitched together from ideologically opposed factions may prove fragile.', thai: 'การเจรจาเริ่มขึ้นแล้ว แต่นักวิเคราะห์เตือนว่าพันธมิตรที่ประกอบจากฝ่ายที่มีอุดมการณ์ขัดแย้งกันอาจเปราะบาง' },
        { speaker: 'Anchor',    text: 'And how has the electorate responded to this uncertainty?', thai: 'แล้วผู้มีสิทธิเลือกตั้งตอบสนองต่อความไม่แน่นอนนี้อย่างไร?' },
        { speaker: 'Reporter',  text: 'With visible frustration. Many voters feel their mandate has been diluted, and calls for greater accountability are growing louder.', thai: 'ด้วยความหงุดหงิดที่เห็นได้ชัด ผู้มีสิทธิเลือกตั้งหลายคนรู้สึกว่าอาณัติของตนถูกเจือจาง และเสียงเรียกร้องความรับผิดชอบก็ดังขึ้น' },
        { speaker: 'Anchor',    text: 'Is there any risk that the deadlock could trigger a fresh election?', thai: 'มีความเสี่ยงไหมว่าการยันกันนี้จะนำไปสู่การเลือกตั้งใหม่?' },
        { speaker: 'Reporter',  text: 'It cannot be ruled out. Should talks collapse, returning to the polls would be the constitutional last resort.', thai: 'ไม่อาจตัดออกได้ครับ หากการเจรจาล้มเหลว การกลับไปเลือกตั้งใหม่จะเป็นทางเลือกสุดท้ายตามรัฐธรรมนูญ' },
      ],
      questions: [
        { id: 'c1u2-ls-q1', type: 'multiple-choice', prompt: 'What is the outcome of the election?', options: ['A landslide victory','A hung parliament with no outright majority','A single-party government','A cancelled election'], correctIndex: 1, explanation: 'ผู้ประกาศบอกว่าเป็น "a hung parliament" ที่ไม่มีเสียงข้างมากเด็ดขาด' },
        { id: 'c1u2-ls-q2', type: 'multiple-choice', prompt: 'Why do analysts warn that a coalition may be fragile?', options: ['It has too many members','It combines ideologically opposed factions','It lacks funding','It is led by the incumbent'], correctIndex: 1, explanation: 'นักวิเคราะห์เตือนเรื่องพันธมิตรจากฝ่ายที่มีอุดมการณ์ขัดแย้งกัน' },
        { id: 'c1u2-ls-q3', type: 'multiple-choice', prompt: 'How do many voters feel about their mandate?', options: ['It has been strengthened','It has been diluted','It is unchanged','It is irrelevant'], correctIndex: 1, explanation: 'ผู้สื่อข่าวบอกว่าผู้ลงคะแนนรู้สึกว่าอาณัติถูกเจือจาง (diluted)' },
        { id: 'c1u2-ls-q4', type: 'multiple-choice', prompt: 'What would be the constitutional last resort if talks collapse?', options: ['Appointing a dictator','Returning to the polls','Dissolving the constitution','Foreign intervention'], correctIndex: 1, explanation: 'ผู้สื่อข่าวบอกว่าการกลับไปเลือกตั้งใหม่เป็นทางเลือกสุดท้ายตามรัฐธรรมนูญ' },
      ]
    },

    reading: {
      id: 'c1-unit-2-reading',
      type: 'Article',
      title: 'The Fragility of Democratic Norms',
      thai: 'ความเปราะบางของบรรทัดฐานประชาธิปไตย',
      emoji: '📖',
      level: 'C1',
      minutes: 5,
      paragraphs: [
        'Democracy is often imagined as a fortress of written constitutions and codified laws, yet its true resilience rests on something far more intangible: the unwritten norms that constrain how power is exercised. Chief among these is what political scientists call forbearance, the deliberate restraint by which those in power decline to deploy every legal weapon at their disposal. When leaders abandon such self-restraint, they may act entirely within the letter of the law while systematically hollowing out its spirit.',
        'History offers a sobering catalogue of democracies that unravelled not through dramatic coups but through the gradual normalisation of once-unthinkable conduct. An incumbent who packs the courts, gerrymanders constituencies, or muzzles a critical press need never suspend the constitution; each manoeuvre can be dressed in the garb of legality. It is precisely this veneer of legitimacy that renders democratic backsliding so insidious, for it disarms the very institutions that might otherwise sound the alarm.',
        'Equally corrosive is the collapse of mutual toleration, the recognition that political opponents are legitimate rivals rather than existential enemies. Once a governing faction persuades itself that the opposition constitutes a threat to be neutralised rather than a partner to be accommodated, the ordinary give-and-take of politics curdles into a zero-sum struggle. Compromise comes to be branded as betrayal, and the partisan fervour that follows leaves little room for the deliberation on which representative government depends.',
        'Safeguarding democracy, then, demands more than vigilance over its formal architecture. It requires the cultivation of a political culture in which restraint is prized, in which accountability is enforced not merely by courts but by an engaged citizenry, and in which the temptation to treat every contest as a fight to the death is resisted. Institutions, however elegantly designed, are ultimately only as robust as the norms that breathe life into them.',
      ],
      dialogue: null,
      glossary: [
        { word: 'forbearance',   thai: 'การยับยั้งชั่งใจ / ความอดกลั้น', def: 'patient self-control; refraining from using power one is legally entitled to' },
        { word: 'gerrymander',   thai: 'แบ่งเขตเลือกตั้งอย่างเอาเปรียบ',   def: 'to manipulate electoral boundaries to favour one party' },
        { word: 'insidious',     thai: 'ที่ค่อย ๆ แทรกซึมอย่างร้ายกาจ',    def: 'proceeding gradually and harmfully in a way that is not easily noticed' },
        { word: 'zero-sum',      thai: 'ผลรวมเป็นศูนย์ (ได้อย่างเสียอย่าง)', def: 'a situation in which one side’s gain is exactly the other side’s loss' },
      ],
      summary: "The article argues that democracy depends less on written laws than on unwritten norms—especially forbearance and mutual toleration. It warns that backsliding often occurs within the letter of the law and that safeguarding democracy requires a political culture of restraint and accountability.",
      summaryThai: 'บทความโต้แย้งว่าประชาธิปไตยพึ่งพาบรรทัดฐานที่ไม่ได้เขียนไว้ โดยเฉพาะการยับยั้งชั่งใจและการยอมรับซึ่งกันและกัน มากกว่ากฎหมายลายลักษณ์อักษร พร้อมเตือนว่าการถดถอยมักเกิดขึ้นภายในกรอบกฎหมาย และการปกป้องประชาธิปไตยต้องอาศัยวัฒนธรรมทางการเมืองแห่งการยับยั้งและความรับผิดชอบ',
      questions: [
        { id: 'c1u2-rd-q1', type: 'multiple-choice', prompt: 'According to the article, what does democracy’s true resilience rest on?', options: ['Written constitutions alone','Unwritten norms that constrain the use of power','Military strength','Economic growth'], correctIndex: 1, explanation: 'ย่อหน้าแรกระบุว่าความยืดหยุ่นที่แท้จริงอยู่ที่บรรทัดฐานที่ไม่ได้เขียนไว้' },
        { id: 'c1u2-rd-q2', type: 'multiple-choice', prompt: 'What is "forbearance"?', options: ['Using every legal weapon available','Deliberate restraint in exercising power','A type of election fraud','A written constitutional clause'], correctIndex: 1, explanation: 'บทความนิยาม forbearance ว่าเป็นการยับยั้งชั่งใจไม่ใช้อำนาจทางกฎหมายทุกอย่างที่มี' },
        { id: 'c1u2-rd-q3', type: 'multiple-choice', prompt: 'Why is democratic backsliding described as "insidious"?', options: ['It happens through violent coups','It is dressed in a veneer of legality that disarms institutions','It is always widely reported','It only affects courts'], correctIndex: 1, explanation: 'ย่อหน้าสองอธิบายว่าการถดถอยแฝงตัวในรูปแบบที่ดูถูกกฎหมาย จึงทำให้สถาบันไม่ทันระวัง' },
        { id: 'c1u2-rd-q4', type: 'multiple-choice', prompt: 'What does the collapse of "mutual toleration" lead to?', options: ['Greater compromise','A zero-sum struggle where compromise is branded betrayal','Stronger institutions','Lower voter turnout'], correctIndex: 1, explanation: 'ย่อหน้าสามอธิบายว่าเมื่อสูญเสียการยอมรับซึ่งกันและกัน การเมืองกลายเป็นการต่อสู้แบบผลรวมเป็นศูนย์' },
      ]
    },

    test: {
      id: 'c1-unit-2-test',
      passMark: 0.70,
      questions: [
        { id: 'c1u2-t-01', type: 'multiple-choice', prompt: '"อธิปไตย" ในภาษาอังกฤษคือคำใด?', options: ['legislation','sovereignty','mandate','coalition'], correctIndex: 1, explanation: 'sovereignty = อธิปไตย' },
        { id: 'c1u2-t-02', type: 'multiple-choice', prompt: 'What does "incumbent" mean?', options: ['A challenger for office','The current holder of a political office','A retired politician','A political party'], correctIndex: 1, explanation: 'incumbent = ผู้ดำรงตำแหน่งอยู่ในปัจจุบัน' },
        { id: 'c1u2-t-03', type: 'fill-in-blank',   prompt: 'The opposite of "partisan" is ___.', answer: 'impartial', acceptedVariants: [], explanation: 'ตรงข้ามกับ partisan (ลำเอียง) คือ impartial (เป็นกลาง)' },
        { id: 'c1u2-t-04', type: 'multiple-choice', prompt: 'Choose the correct It-cleft sentence.', options: ['It was the coalition collapsed.','It was the coalition that collapsed.','It the coalition that collapsed.','Was it the coalition collapsed.'], correctIndex: 1, explanation: 'It + be + ส่วนที่เน้น + that + ประโยค' },
        { id: 'c1u2-t-05', type: 'fill-in-blank',   prompt: '___ the electorate wants is genuine reform. (What/It)', answer: 'What', acceptedVariants: [], explanation: 'Wh-cleft ขึ้นต้นด้วย What' },
        { id: 'c1u2-t-06', type: 'multiple-choice', prompt: 'Complete: "It was the voters ___ decided the outcome."', options: ['which','who','what','whose'], correctIndex: 1, explanation: 'ใช้ who เพราะส่วนที่เน้นเป็นคน' },
        { id: 'c1u2-t-07', type: 'multiple-choice', prompt: 'In the news report, what is the election result?', options: ['A single-party majority','A hung parliament','A postponed vote','A unanimous victory'], correctIndex: 1, explanation: 'ข่าวรายงานว่าเป็นสภาที่ไม่มีเสียงข้างมากเด็ดขาด (hung parliament)' },
        { id: 'c1u2-t-08', type: 'multiple-choice', prompt: 'In the news report, what is the last resort if coalition talks collapse?', options: ['A military takeover','Returning to the polls','Suspending parliament','Foreign mediation'], correctIndex: 1, explanation: 'ผู้สื่อข่าวบอกว่าการเลือกตั้งใหม่เป็นทางเลือกสุดท้ายตามรัฐธรรมนูญ' },
        { id: 'c1u2-t-09', type: 'multiple-choice', prompt: 'In the article, what does democracy ultimately depend on?', options: ['Written laws alone','Unwritten norms such as forbearance and mutual toleration','Economic growth','A strong military'], correctIndex: 1, explanation: 'บทความเน้นว่าประชาธิปไตยพึ่งพาบรรทัดฐานที่ไม่ได้เขียนไว้' },
        { id: 'c1u2-t-10', type: 'fill-in-blank',   prompt: 'In the article, restraint in using power one is legally entitled to is called ___.', answer: 'forbearance', acceptedVariants: [], explanation: 'บทความนิยามการยับยั้งชั่งใจนี้ว่า forbearance' },
      ]
    }
  },

  // ============================================================
  // C1 Unit 3: Psychology
  // ============================================================
  {
    id: 'c1-unit-3',
    title: 'Unit 3: Psychology',
    thai: 'บทที่ 3: จิตวิทยา',
    emoji: '🧠',

    vocabulary: {
      id: 'c1-unit-3-vocab',
      title: 'The Language of Psychology',
      thai: 'ศัพท์จิตวิทยา',
      emoji: '🧠',
      level: 'C1',
      words: [
        { word: 'cognition',       pos: 'noun',      ipa: '/kɒɡˈnɪʃən/',        emoji: '🧠', thai: 'กระบวนการรับรู้ / ปัญญา',  def: 'the mental processes of acquiring knowledge through thought, experience, and the senses', example: 'Chronic stress can measurably impair cognition and memory.',                          synonym: 'thinking',      antonym: null },
        { word: 'resilience',      pos: 'noun',      ipa: '/rɪˈzɪliəns/',       emoji: '🌱', thai: 'ความยืดหยุ่นทางจิตใจ',     def: 'the capacity to recover quickly from adversity or setbacks',                             example: 'Psychological resilience enables people to adapt in the face of trauma.',            synonym: 'toughness',     antonym: 'fragility' },
        { word: 'bias',            pos: 'noun',      ipa: '/ˈbaɪəs/',           emoji: '🎯', thai: 'อคติ / ความลำเอียง',       def: 'a systematic tendency that causes judgement to deviate from rationality',                example: 'Confirmation bias leads us to favour information that supports our beliefs.',        synonym: 'prejudice',     antonym: 'objectivity' },
        { word: 'empathy',         pos: 'noun',      ipa: '/ˈempəθi/',          emoji: '💗', thai: 'ความเห็นอกเห็นใจ',         def: 'the ability to understand and share the feelings of another person',                     example: 'Empathy allows a therapist to build genuine rapport with clients.',                 synonym: 'compassion',    antonym: 'indifference' },
        { word: 'trauma',          pos: 'noun',      ipa: '/ˈtrɔːmə/',          emoji: '💔', thai: 'บาดแผลทางจิตใจ',          def: 'a deeply distressing experience that has a lasting psychological effect',                example: 'Unresolved childhood trauma can shape behaviour well into adulthood.',              synonym: null,            antonym: null },
        { word: 'perception',      pos: 'noun',      ipa: '/pəˈsepʃən/',        emoji: '👁️', thai: 'การรับรู้ / การมองเห็น',   def: 'the way in which something is understood or interpreted by the mind',                    example: 'Our perception of risk is often distorted by vivid but rare events.',               synonym: 'interpretation', antonym: null },
        { word: 'conditioning',    pos: 'noun',      ipa: '/kənˈdɪʃənɪŋ/',      emoji: '🔔', thai: 'การวางเงื่อนไข',           def: 'the process of training behaviour through association or reinforcement',                 example: 'Pavlov’s experiments demonstrated classical conditioning in dogs.',            synonym: null,            antonym: null },
        { word: 'introspection',   pos: 'noun',      ipa: '/ˌɪntrəˈspekʃən/',   emoji: '🪞', thai: 'การพินิจภายในจิตใจตนเอง',   def: 'the examination of one’s own thoughts and feelings',                                example: 'Careful introspection revealed the roots of her anxiety.',                          synonym: 'self-reflection', antonym: null },
      ]
    },

    grammar: {
      id: 'c1-unit-3-grammar',
      title: 'Mixed Conditionals',
      thai: 'ประโยคเงื่อนไขแบบผสม',
      emoji: '📐',
      level: 'C1',
      summary: 'เรียนรู้การใช้ประโยคเงื่อนไขแบบผสม (mixed conditionals) เพื่อเชื่อมโยงเหตุการณ์ในอดีตกับผลในปัจจุบัน หรือสภาวะปัจจุบันกับผลในอดีต เหมาะกับการวิเคราะห์เหตุและผลทางจิตวิทยา',
      explanation: [
        {
          heading: 'Why mixed conditionals?',
          body: 'ประโยคเงื่อนไขปกติ (2nd และ 3rd) อ้างถึงเวลาเดียว แต่ mixed conditionals ผสมสองเวลาเข้าด้วยกัน เหมาะเมื่อเงื่อนไขและผลลัพธ์อยู่คนละช่วงเวลา ซึ่งพบมากในจิตวิทยาที่อดีตส่งผลต่อปัจจุบัน'
        },
        {
          heading: 'Type 1: Past condition → Present result',
          body: 'โครงสร้าง: If + past perfect, ... would + verb (ปัจจุบัน)\n\nใช้เมื่อเงื่อนไขในอดีต (ที่ไม่เป็นจริง) มีผลต่อปัจจุบัน\n\nIf she had received therapy earlier, she would be more resilient now.\n(ถ้าเธอได้รับการบำบัดเร็วกว่านี้ ตอนนี้เธอคงเข้มแข็งกว่านี้)\n\n⚠️ จุดที่ผู้เรียนไทยมักผิด: ใช้ would have + V3 ในผลลัพธ์ ทั้งที่ผลอยู่ในปัจจุบัน\n❌ ... she would have been more resilient now.\n✅ ... she would be more resilient now.'
        },
        {
          heading: 'Type 2: Present condition → Past result',
          body: 'โครงสร้าง: If + past simple, ... would have + past participle (อดีต)\n\nใช้เมื่อสภาวะปัจจุบัน (ที่เป็นจริงเสมอ) อธิบายผลในอดีต\n\nIf he weren’t so anxious, he would have accepted the offer.\n(ถ้าเขาไม่วิตกกังวลเช่นนี้ เขาคงตอบรับข้อเสนอไปแล้ว)'
        }
      ],
      examples: [
        { en: 'If she had confronted the trauma, she would feel calmer today.',           th: 'ถ้าเธอได้เผชิญกับบาดแผลทางใจ ตอนนี้เธอคงรู้สึกสงบกว่านี้' },
        { en: 'If he weren’t so biased, he would have judged the evidence fairly.',   th: 'ถ้าเขาไม่มีอคติเช่นนี้ เขาคงตัดสินหลักฐานอย่างเป็นธรรมไปแล้ว' },
        { en: 'If they had understood cognition better, therapy would be more effective now.', th: 'ถ้าพวกเขาเข้าใจกระบวนการรับรู้ดีกว่านี้ การบำบัดในปัจจุบันคงได้ผลกว่านี้' },
        { en: 'If I were more empathetic, I would have noticed her distress earlier.',     th: 'ถ้าฉันเห็นอกเห็นใจมากกว่านี้ ฉันคงสังเกตเห็นความทุกข์ของเธอเร็วกว่านี้' },
        { en: 'If the conditioning had been gentler, the child would trust adults more.',  th: 'ถ้าการวางเงื่อนไขนุ่มนวลกว่านี้ เด็กคงไว้ใจผู้ใหญ่มากกว่านี้' },
        { en: 'If she practised introspection, she would have avoided that mistake.',      th: 'ถ้าเธอฝึกพินิจภายในจิตใจ เธอคงหลีกเลี่ยงความผิดพลาดนั้นไปแล้ว' },
      ],
      practice: [
        { id: 'c1u3-gr-p1', type: 'fill-in-blank',  prompt: 'If she had slept well last night, she ___ more alert now. (would be)', answer: 'would be', acceptedVariants: ["would be"], explanation: 'เงื่อนไขอดีต (had slept) → ผลปัจจุบัน จึงใช้ would be' },
        { id: 'c1u3-gr-p2', type: 'multiple-choice', prompt: 'Choose the correct mixed conditional: "If he weren’t so anxious, he ___ the offer yesterday."', options: ['would accept','would have accepted','will accept','accepts'], correctIndex: 1, explanation: 'สภาวะปัจจุบัน (weren’t) → ผลอดีต ใช้ would have accepted' },
        { id: 'c1u3-gr-p3', type: 'fill-in-blank',  prompt: 'If they had understood the bias, therapy ___ more effective today. (would be)', answer: 'would be', acceptedVariants: [], explanation: 'เงื่อนไขอดีต → ผลปัจจุบัน ใช้ would be' },
      ],
      quiz: [
        { id: 'c1u3-gr-q1', type: 'multiple-choice', prompt: 'Which sentence is a correct mixed conditional (past condition → present result)?', options: ['If she had rested, she would be calmer now.','If she had rested, she would have been calmer now.','If she rests, she would be calmer now.','If she rested, she would be calmer yesterday.'], correctIndex: 0, explanation: 'past perfect + would + verb (ปัจจุบัน) เชื่อมอดีตกับปัจจุบัน' },
        { id: 'c1u3-gr-q2', type: 'fill-in-blank',   prompt: 'If I were more empathetic, I ___ noticed her distress earlier. (would have)', answer: 'would have', acceptedVariants: [], explanation: 'สภาวะปัจจุบัน (were) → ผลอดีต ใช้ would have + V3' },
        { id: 'c1u3-gr-q3', type: 'multiple-choice', prompt: 'Complete: "If he ___ so biased, he would have judged the evidence fairly."', options: ['isn’t','weren’t','hadn’t been','wouldn’t be'], correctIndex: 1, explanation: 'สภาวะปัจจุบันที่เป็นจริง ใช้ past simple (weren’t) ในประโยค if' },
        { id: 'c1u3-gr-q4', type: 'multiple-choice', prompt: 'Identify the mixed conditional linking a past cause to a present state.', options: ['If it rains, we stay home.','If she had studied psychology, she would understand this better now.','If he studies, he will pass.','If they were rich, they would travel.'], correctIndex: 1, explanation: 'had studied (อดีต) + would understand ... now (ปัจจุบัน) คือ mixed conditional' },
      ]
    },

    listening: {
      id: 'c1-unit-3-listening',
      type: 'Podcast',
      title: 'Mind Matters: The Science of Resilience',
      thai: 'พอดแคสต์จิตใจสำคัญ: ศาสตร์แห่งความยืดหยุ่นทางจิตใจ',
      emoji: '🎧',
      level: 'C1',
      segments: [
        { speaker: 'Host',      text: 'Welcome to Mind Matters. Today we explore why some people bounce back from adversity while others are overwhelmed by it.', thai: 'ยินดีต้อนรับสู่ Mind Matters วันนี้เราจะสำรวจว่าทำไมบางคนฟื้นตัวจากความยากลำบากได้ ขณะที่บางคนถูกมันครอบงำ' },
        { speaker: 'Prof Lee',  text: 'It is a fascinating question. For decades, resilience was assumed to be a fixed trait, something you either possessed or you did not.', thai: 'เป็นคำถามที่น่าสนใจมากค่ะ หลายทศวรรษที่ผ่านมา เรามองว่าความยืดหยุ่นทางจิตใจเป็นลักษณะตายตัว ที่คุณมีหรือไม่มี' },
        { speaker: 'Host',      text: 'And is that view still held today?', thai: 'มุมมองนั้นยังคงอยู่ในปัจจุบันไหมครับ?' },
        { speaker: 'Prof Lee',  text: 'Not at all. Contemporary research suggests resilience is far more malleable; it can be cultivated through supportive relationships and deliberate cognitive strategies.', thai: 'ไม่เลยค่ะ งานวิจัยร่วมสมัยชี้ว่าความยืดหยุ่นสามารถหล่อหลอมได้ ผ่านความสัมพันธ์ที่เกื้อหนุนและกลยุทธ์ทางความคิดที่ตั้งใจ' },
        { speaker: 'Host',      text: 'So how does trauma factor into this?', thai: 'แล้วบาดแผลทางจิตใจเกี่ยวข้องอย่างไร?' },
        { speaker: 'Prof Lee',  text: 'Trauma can certainly undermine resilience, but paradoxically, adversity that is navigated with adequate support can actually strengthen it, a process we call post-traumatic growth.', thai: 'บาดแผลทางจิตใจบั่นทอนความยืดหยุ่นได้แน่นอน แต่ที่ย้อนแย้งคือ ความยากลำบากที่ผ่านพ้นไปพร้อมการสนับสนุนที่เพียงพอ กลับเสริมความยืดหยุ่นได้ เราเรียกกระบวนการนี้ว่าการเติบโตหลังบาดแผล' },
        { speaker: 'Host',      text: 'That is counterintuitive. What role does empathy play in fostering that growth?', thai: 'นั่นสวนความรู้สึกทั่วไปเลยนะครับ แล้วความเห็นอกเห็นใจมีบทบาทอย่างไรในการส่งเสริมการเติบโตนั้น?' },
        { speaker: 'Prof Lee',  text: 'A profound one. Feeling genuinely understood by others reduces the sense of isolation, and it is precisely that connection which allows people to reframe their experiences constructively.', thai: 'มีบทบาทลึกซึ้งค่ะ การรู้สึกว่าถูกเข้าใจอย่างแท้จริงลดความรู้สึกโดดเดี่ยว และการเชื่อมโยงนี้เองที่ทำให้คนตีความประสบการณ์ใหม่ในเชิงสร้างสรรค์' },
      ],
      questions: [
        { id: 'c1u3-ls-q1', type: 'multiple-choice', prompt: 'How was resilience traditionally viewed for decades?', options: ['As a skill anyone could learn','As a fixed trait you either had or did not','As irrelevant to psychology','As a form of trauma'], correctIndex: 1, explanation: 'Prof Lee บอกว่าเดิมมองว่าเป็นลักษณะตายตัว (fixed trait)' },
        { id: 'c1u3-ls-q2', type: 'multiple-choice', prompt: 'According to contemporary research, resilience can be cultivated through:', options: ['Medication alone','Supportive relationships and cognitive strategies','Avoiding all adversity','Genetic modification'], correctIndex: 1, explanation: 'เธอบอกว่าความยืดหยุ่นหล่อหลอมได้ผ่านความสัมพันธ์ที่เกื้อหนุนและกลยุทธ์ทางความคิด' },
        { id: 'c1u3-ls-q3', type: 'multiple-choice', prompt: 'What is "post-traumatic growth"?', options: ['A permanent decline after trauma','Adversity navigated with support that strengthens resilience','A medical treatment','A type of cognitive bias'], correctIndex: 1, explanation: 'เธออธิบายว่าเป็นความยากลำบากที่ผ่านพ้นพร้อมการสนับสนุน แล้วเสริมความยืดหยุ่น' },
        { id: 'c1u3-ls-q4', type: 'multiple-choice', prompt: 'What role does empathy play according to Prof Lee?', options: ['It increases isolation','It reduces isolation and enables people to reframe experiences','It has no measurable effect','It causes trauma'], correctIndex: 1, explanation: 'เธอบอกว่าการรู้สึกถูกเข้าใจลดความโดดเดี่ยวและช่วยตีความประสบการณ์ใหม่' },
      ]
    },

    reading: {
      id: 'c1-unit-3-reading',
      type: 'Article',
      title: 'The Mind’s Hidden Architects',
      thai: 'สถาปนิกที่ซ่อนเร้นของจิตใจ',
      emoji: '📖',
      level: 'C1',
      minutes: 5,
      paragraphs: [
        'We are inclined to believe that our decisions flow from careful, conscious deliberation, yet decades of research in cognitive psychology tell a rather different story. Beneath the surface of awareness, a host of mental shortcuts, or heuristics, quietly steer our judgements. These shortcuts evolved to help our ancestors make rapid decisions under uncertainty, and for the most part they serve us admirably. The trouble is that the very efficiency which makes them useful also renders them systematically unreliable in the unfamiliar conditions of modern life.',
        'Take the availability heuristic, whereby we estimate the likelihood of an event by how readily examples come to mind. Because dramatic, emotionally charged events are more memorable, we routinely overestimate the frequency of rare catastrophes while underestimating mundane but far more probable risks. Having been exposed to vivid coverage of a plane crash, a traveller may develop an irrational dread of flying, all the while thinking nothing of the considerably more dangerous drive to the airport.',
        'Equally pervasive is confirmation bias, the tendency to seek out, interpret, and recall information in a manner that reinforces what we already believe. Once a conviction takes hold, contradictory evidence is scrutinised with suspicion while corroborating evidence is accepted uncritically. This asymmetry helps explain why reasoned argument so seldom dislodges entrenched opinions, and why exposure to opposing views can, paradoxically, deepen rather than soften our convictions.',
        'Recognising these biases does not immunise us against them, for they operate largely beneath conscious control. Nevertheless, an awareness of their existence affords a measure of protection. By deliberately seeking disconfirming evidence, consulting others whose perspectives differ from our own, and cultivating the habit of introspection, we can partially counteract the distortions our minds impose. The goal is not to escape our cognitive architecture, which is impossible, but to navigate it with a little more wisdom.',
      ],
      dialogue: null,
      glossary: [
        { word: 'heuristic',       thai: 'วิธีลัดทางความคิด',           def: 'a mental shortcut that allows people to make judgements quickly' },
        { word: 'pervasive',       thai: 'ที่แพร่กระจายไปทั่ว',          def: 'spreading widely and present throughout something' },
        { word: 'corroborating',   thai: 'ที่ยืนยันสนับสนุน',            def: 'confirming or giving support to a statement or belief' },
        { word: 'disconfirming',   thai: 'ที่หักล้าง / ขัดแย้ง',        def: 'providing evidence against a belief or hypothesis' },
      ],
      summary: "The article explains that much of human judgement is driven by unconscious mental shortcuts (heuristics) such as the availability heuristic and confirmation bias. Though these cannot be eliminated, awareness of them—combined with seeking disconfirming evidence and introspection—can partly counteract their distortions.",
      summaryThai: 'บทความอธิบายว่าการตัดสินใจของมนุษย์จำนวนมากถูกขับเคลื่อนโดยวิธีลัดทางความคิดที่ไม่รู้ตัว เช่น availability heuristic และอคติยืนยันความเชื่อ แม้จะกำจัดไม่ได้ แต่การตระหนักรู้ ประกอบกับการหาหลักฐานที่หักล้างและการพินิจภายในจิตใจ ช่วยลดความบิดเบือนได้บางส่วน',
      questions: [
        { id: 'c1u3-rd-q1', type: 'multiple-choice', prompt: 'According to the article, what quietly steers many of our judgements?', options: ['Careful conscious deliberation','Mental shortcuts called heuristics','Random chance','External advisers'], correctIndex: 1, explanation: 'ย่อหน้าแรกระบุว่า heuristics คอยชี้นำการตัดสินใจอย่างเงียบ ๆ' },
        { id: 'c1u3-rd-q2', type: 'multiple-choice', prompt: 'What does the "availability heuristic" cause people to do?', options: ['Estimate likelihood by how easily examples come to mind','Ignore all dramatic events','Always calculate precise probabilities','Trust only statistics'], correctIndex: 0, explanation: 'ย่อหน้าสองอธิบายว่าเราประเมินความน่าจะเป็นจากความง่ายที่ตัวอย่างผุดขึ้นในใจ' },
        { id: 'c1u3-rd-q3', type: 'multiple-choice', prompt: 'Why does reasoned argument seldom dislodge entrenched opinions?', options: ['People never read arguments','Confirmation bias makes us scrutinise contradictory evidence while accepting corroborating evidence','Opinions are always correct','Arguments are too complex'], correctIndex: 1, explanation: 'ย่อหน้าสามอธิบายความไม่สมมาตรของอคติยืนยันความเชื่อ' },
        { id: 'c1u3-rd-q4', type: 'multiple-choice', prompt: 'What does the author suggest as a partial remedy?', options: ['Ignoring all evidence','Seeking disconfirming evidence and practising introspection','Trusting only our first instinct','Avoiding other people’s views'], correctIndex: 1, explanation: 'ย่อหน้าสุดท้ายแนะนำให้หาหลักฐานที่หักล้างและฝึกการพินิจภายในจิตใจ' },
      ]
    },

    test: {
      id: 'c1-unit-3-test',
      passMark: 0.70,
      questions: [
        { id: 'c1u3-t-01', type: 'multiple-choice', prompt: '"ความเห็นอกเห็นใจ" ในภาษาอังกฤษคือคำใด?', options: ['cognition','empathy','bias','trauma'], correctIndex: 1, explanation: 'empathy = ความเห็นอกเห็นใจ' },
        { id: 'c1u3-t-02', type: 'multiple-choice', prompt: 'What does "resilience" mean?', options: ['The tendency to give up easily','The capacity to recover quickly from adversity','A type of memory loss','A cognitive bias'], correctIndex: 1, explanation: 'resilience = ความสามารถในการฟื้นตัวจากความยากลำบาก' },
        { id: 'c1u3-t-03', type: 'fill-in-blank',   prompt: 'The opposite of "resilience" is ___.', answer: 'fragility', acceptedVariants: [], explanation: 'ตรงข้ามกับ resilience คือ fragility' },
        { id: 'c1u3-t-04', type: 'multiple-choice', prompt: 'Choose the correct mixed conditional (past condition → present result).', options: ['If she had rested, she would have been calmer now.','If she had rested, she would be calmer now.','If she rests, she would be calmer now.','If she rested, she is calmer now.'], correctIndex: 1, explanation: 'past perfect + would + verb (ปัจจุบัน)' },
        { id: 'c1u3-t-05', type: 'fill-in-blank',   prompt: 'If I were more empathetic, I ___ have noticed her distress earlier. (would)', answer: 'would', acceptedVariants: [], explanation: 'สภาวะปัจจุบัน (were) → ผลอดีต ใช้ would have + V3' },
        { id: 'c1u3-t-06', type: 'multiple-choice', prompt: 'Complete: "If he ___ so biased, he would have judged the evidence fairly."', options: ['isn’t','weren’t','hadn’t been','won’t be'], correctIndex: 1, explanation: 'สภาวะปัจจุบันที่เป็นจริง ใช้ past simple (weren’t)' },
        { id: 'c1u3-t-07', type: 'multiple-choice', prompt: 'In the podcast, how was resilience traditionally viewed?', options: ['As a learnable skill','As a fixed trait','As a disease','As a bias'], correctIndex: 1, explanation: 'Prof Lee บอกว่าเดิมมองว่าเป็นลักษณะตายตัว' },
        { id: 'c1u3-t-08', type: 'multiple-choice', prompt: 'In the podcast, what is "post-traumatic growth"?', options: ['Permanent psychological damage','Adversity with support that strengthens resilience','A medication','A memory test'], correctIndex: 1, explanation: 'เธออธิบายว่าความยากลำบากที่ผ่านพ้นพร้อมการสนับสนุนช่วยเสริมความยืดหยุ่น' },
        { id: 'c1u3-t-09', type: 'multiple-choice', prompt: 'In the article, what is the "availability heuristic"?', options: ['Estimating likelihood by how easily examples come to mind','Seeking only supporting evidence','Ignoring emotional events','Calculating exact probabilities'], correctIndex: 0, explanation: 'บทความอธิบายว่าเราประเมินความน่าจะเป็นจากความง่ายที่ตัวอย่างผุดขึ้นในใจ' },
        { id: 'c1u3-t-10', type: 'fill-in-blank',   prompt: 'In the article, the bias that makes us favour information supporting our beliefs is called ___ bias.', answer: 'confirmation', acceptedVariants: [], explanation: 'บทความเรียกอคติยืนยันความเชื่อว่า confirmation bias' },
      ]
    }
  }
]
