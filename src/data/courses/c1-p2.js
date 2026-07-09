// C1 Part 2: Science & Culture
export const c1p2 = [
  // ============================================================
  // C1 Unit 4: Science (วิทยาศาสตร์)
  // ============================================================
  {
    id: 'c1-unit-4',
    title: 'Unit 4: Science',
    thai: 'บทที่ 4: วิทยาศาสตร์',
    emoji: '🔬',

    // vocabulary section — shape matches vocabularyCategories item (skills/vocabulary.js)
    vocabulary: {
      id: 'c1-unit-4-vocab',
      title: 'Science & Research',
      thai: 'วิทยาศาสตร์และการวิจัย',
      emoji: '🔬',
      level: 'C1',
      words: [
        { word: 'hypothesis',    pos: 'noun',      ipa: '/haɪˈpɒθəsɪs/',      emoji: '💡', thai: 'สมมติฐาน',                def: 'a proposed explanation put forward as a starting point for further investigation',        example: 'The researchers tested their hypothesis under controlled conditions.',        synonym: 'proposition',   antonym: null },
        { word: 'empirical',     pos: 'adjective', ipa: '/ɪmˈpɪrɪkəl/',       emoji: '📊', thai: 'ที่อิงหลักฐานเชิงประจักษ์', def: 'based on observation or experiment rather than theory alone',                            example: 'Their conclusions rest on solid empirical evidence.',                          synonym: 'observational', antonym: 'theoretical' },
        { word: 'replicate',     pos: 'verb',      ipa: '/ˈrɛplɪkeɪt/',       emoji: '🔁', thai: 'ทำซ้ำ (การทดลอง)',        def: 'to repeat a study or experiment to confirm its findings',                                example: 'Independent teams failed to replicate the original results.',                  synonym: 'reproduce',     antonym: null },
        { word: 'peer review',   pos: 'noun',      ipa: '/ˌpɪər rɪˈvjuː/',    emoji: '🧑‍🔬', thai: 'การตรวจทานโดยผู้เชี่ยวชาญ', def: 'evaluation of scientific work by other experts in the same field before publication',     example: 'The paper was rejected during peer review for methodological flaws.',          synonym: null,            antonym: null },
        { word: 'anomaly',       pos: 'noun',      ipa: '/əˈnɒməli/',         emoji: '❓', thai: 'ความผิดปกติ / สิ่งที่ผิดแผก',  def: 'something that deviates from what is standard, normal, or expected',                    example: 'The sensor detected a temperature anomaly no one could explain.',              synonym: 'irregularity',  antonym: 'norm' },
        { word: 'correlation',   pos: 'noun',      ipa: '/ˌkɒrəˈleɪʃən/',     emoji: '📈', thai: 'ความสัมพันธ์เชิงสถิติ',    def: 'a mutual connection between two variables that tend to change together',                 example: 'Correlation does not necessarily imply causation.',                            synonym: 'association',   antonym: null },
        { word: 'breakthrough',  pos: 'noun',      ipa: '/ˈbreɪkθruː/',       emoji: '🚀', thai: 'ความก้าวหน้าครั้งสำคัญ',    def: 'an important discovery or development that overcomes a major obstacle',                  example: 'The vaccine represented a genuine breakthrough in immunology.',                synonym: 'advance',       antonym: 'setback' },
        { word: 'rigorous',      pos: 'adjective', ipa: '/ˈrɪɡərəs/',         emoji: '🎯', thai: 'เข้มงวด / รัดกุม',        def: 'extremely thorough, careful, and precise in method',                                     example: 'The trial followed a rigorous experimental protocol.',                         synonym: 'meticulous',    antonym: 'careless' },
      ]
    },

    // grammar section — shape matches grammarTopics item (skills/grammar.js)
    grammar: {
      id: 'c1-unit-4-grammar',
      title: 'The Advanced Passive & Nominalisation',
      thai: 'Passive ขั้นสูงและการทำคำกริยาให้เป็นคำนาม (Nominalisation)',
      emoji: '📐',
      level: 'C1',
      summary: 'เรียนรู้การใช้ passive voice ขั้นสูงและ nominalisation เพื่อเขียนภาษาวิชาการที่เป็นกลาง กระชับ และเน้นกระบวนการหรือผลลัพธ์แทนตัวผู้กระทำ',
      explanation: [
        {
          heading: 'Passive in Academic Register',
          body: 'ในงานเขียนวิทยาศาสตร์ เรามักใช้ passive voice เพื่อเน้นกระบวนการหรือผลลัพธ์ ไม่ใช่ผู้กระทำ ทำให้ประโยคดูเป็นกลางและเป็นวัตถุวิสัย\n\nActive:  The team measured the samples.\nPassive: The samples were measured (by the team).\n\nโครงสร้างที่พบบ่อย:\n• It is believed / thought / argued that...\n• The results are said to be reliable.\n• The samples are being analysed.'
        },
        {
          heading: 'Passive with Reporting Verbs',
          body: 'โครงสร้าง "It + be + past participle + that..." ใช้รายงานความคิดเห็นแบบเป็นกลาง\n\n• It is widely assumed that the model is accurate.\n• It has been demonstrated that the drug reduces symptoms.\n\nหรือใช้ประธานขึ้นต้น: "Subject + be + reported to + infinitive"\n• The compound is reported to be highly stable.'
        },
        {
          heading: 'Nominalisation',
          body: 'Nominalisation คือการเปลี่ยนคำกริยาหรือคำคุณศัพท์ให้เป็นคำนาม เพื่อให้ประโยคกระชับและเป็นทางการยิ่งขึ้น\n\nVerb → Noun:\n• analyse → analysis · discover → discovery · react → reaction\n\nเปรียบเทียบ:\n❌ (informal) We analysed the data, and this helped us understand the trend.\n✅ (academic) Analysis of the data enabled an understanding of the trend.'
        }
      ],
      examples: [
        { en: 'The experiment was repeated three times to ensure reliability.',        th: 'การทดลองถูกทำซ้ำสามครั้งเพื่อให้แน่ใจว่าเชื่อถือได้' },
        { en: 'It is widely believed that the theory requires revision.',              th: 'เชื่อกันอย่างกว้างขวางว่าทฤษฎีนี้จำเป็นต้องได้รับการแก้ไข' },
        { en: 'The samples are currently being analysed in the laboratory.',           th: 'ตัวอย่างกำลังถูกวิเคราะห์อยู่ในห้องปฏิบัติการ' },
        { en: 'The observation of this anomaly prompted further investigation.',       th: 'การสังเกตความผิดปกตินี้นำไปสู่การตรวจสอบเพิ่มเติม' },
        { en: 'The compound has been shown to inhibit bacterial growth.',             th: 'สารประกอบนี้ได้รับการพิสูจน์แล้วว่ายับยั้งการเจริญของแบคทีเรีย' },
        { en: 'A significant reduction in emissions was recorded after the trial.',    th: 'มีการบันทึกการลดลงอย่างมีนัยสำคัญของการปล่อยมลพิษหลังการทดลอง' },
      ],
      practice: [
        { id: 'c1u4-gr-p1', type: 'fill-in-blank',    prompt: 'Rewrite in the passive: "Scientists have confirmed the results." → The results ___ been confirmed by scientists.', answer: 'have', acceptedVariants: [], explanation: 'present perfect passive: have + been + past participle' },
        { id: 'c1u4-gr-p2', type: 'multiple-choice',  prompt: 'Choose the most academic form:',                                          options: ['They found out the cause quickly.','The cause was quickly identified.','They quickly saw the cause.','The cause, they saw it fast.'], correctIndex: 1, explanation: 'passive แบบวิชาการเน้นผลลัพธ์และเป็นกลาง' },
        { id: 'c1u4-gr-p3', type: 'fill-in-blank',    prompt: 'Nominalise the verb "analyse" into a noun: ___',                          answer: 'analysis', acceptedVariants: ['the analysis'], explanation: 'analyse (v.) → analysis (n.)' },
      ],
      quiz: [
        { id: 'c1u4-gr-q1', type: 'multiple-choice',  prompt: 'Which sentence uses the passive correctly?',                              options: ['The data were collected over six months.','The data collected over six months.','The data was collect over six months.','The data been collected over six months.'], correctIndex: 0, explanation: 'past passive: were + collected (data เป็นพหูพจน์ในทะเบียนวิชาการ)' },
        { id: 'c1u4-gr-q2', type: 'fill-in-blank',    prompt: 'Complete: It is widely ___ that the model needs revision. (assume)',      answer: 'assumed', acceptedVariants: [], explanation: 'It is + past participle + that... (assumed)' },
        { id: 'c1u4-gr-q3', type: 'multiple-choice',  prompt: 'Which is the noun form (nominalisation) of "react"?',                     options: ['reactive','reacting','reaction','reacted'], correctIndex: 2, explanation: 'react (v.) → reaction (n.)' },
        { id: 'c1u4-gr-q4', type: 'fill-in-blank',    prompt: 'Complete the passive: The compound is reported ___ be highly stable.',    answer: 'to', acceptedVariants: [], explanation: 'be reported to + infinitive' },
      ]
    },

    // listening section — shape matches listeningPieces item (skills/listening.js)
    listening: {
      id: 'c1-unit-4-listening',
      type: 'Podcast',
      title: 'The Reproducibility Crisis in Science',
      thai: 'วิกฤตการทำซ้ำผลการวิจัยในวงการวิทยาศาสตร์',
      emoji: '🎧',
      level: 'C1',
      segments: [
        { speaker: 'Host',    text: 'Welcome back to Lab Notes. Today we are tackling what many call the reproducibility crisis. Dr Reeves, could you set the scene for us?',                        thai: 'ยินดีต้อนรับกลับสู่ Lab Notes วันนี้เราจะพูดถึงสิ่งที่หลายคนเรียกว่าวิกฤตการทำซ้ำ ดร.รีฟส์ ช่วยปูพื้นให้เราหน่อยได้ไหมคะ' },
        { speaker: 'Dr Reeves', text: 'Certainly. In essence, a worrying number of published studies cannot be replicated when other teams attempt the same experiments.',                    thai: 'ได้ครับ โดยพื้นฐานแล้ว มีงานวิจัยที่ตีพิมพ์จำนวนน่ากังวลที่ไม่สามารถทำซ้ำได้เมื่อทีมอื่นทดลองแบบเดียวกัน' },
        { speaker: 'Host',    text: 'And why should the public care about a technical failure to replicate?',                                                                              thai: 'แล้วทำไมประชาชนทั่วไปจึงควรใส่ใจกับความล้มเหลวเชิงเทคนิคในการทำซ้ำล่ะคะ' },
        { speaker: 'Dr Reeves', text: 'Because replication is the very foundation of empirical science. If a finding cannot be reproduced, we cannot be confident it is real.',            thai: 'เพราะการทำซ้ำคือรากฐานของวิทยาศาสตร์เชิงประจักษ์ ถ้าผลการวิจัยทำซ้ำไม่ได้ เราก็มั่นใจไม่ได้ว่ามันเป็นจริง' },
        { speaker: 'Host',    text: 'What is driving the problem? Is it outright fraud?',                                                                                                thai: 'อะไรเป็นตัวขับเคลื่อนปัญหานี้คะ เป็นการฉ้อโกงโดยตรงหรือเปล่า' },
        { speaker: 'Dr Reeves', text: 'Rarely fraud. More often it is small sample sizes, selective reporting, and the intense pressure to publish novel, positive results.',           thai: 'ไม่ค่อยเป็นการฉ้อโกงครับ ส่วนใหญ่มักเกิดจากขนาดตัวอย่างที่เล็ก การรายงานแบบเลือกเฉพาะ และแรงกดดันอย่างหนักที่จะตีพิมพ์ผลใหม่ที่เป็นบวก' },
        { speaker: 'Host',    text: 'So what is being done to restore trust?',                                                                                                          thai: 'แล้วมีการทำอะไรเพื่อฟื้นความเชื่อมั่นบ้างคะ' },
        { speaker: 'Dr Reeves', text: 'Pre-registration of studies and open data are gaining ground. Once methods are declared in advance, results are far harder to manipulate.',      thai: 'การลงทะเบียนงานวิจัยล่วงหน้าและการเปิดเผยข้อมูลกำลังได้รับความนิยม เมื่อประกาศวิธีการล่วงหน้า ผลลัพธ์ก็ถูกบิดเบือนได้ยากขึ้นมาก' },
      ],
      questions: [
        { id: 'c1u4-ls-q1', type: 'multiple-choice', prompt: 'What is the "reproducibility crisis"?',                     options: ['Studies cannot be replicated by other teams','Laboratories are running out of funding','Journals refuse to publish research','Scientists cannot agree on definitions'], correctIndex: 0, explanation: 'ดร.รีฟส์อธิบายว่างานวิจัยจำนวนมากทำซ้ำไม่ได้เมื่อทีมอื่นทดลองแบบเดียวกัน' },
        { id: 'c1u4-ls-q2', type: 'multiple-choice', prompt: 'Why does Dr Reeves say replication matters?',               options: ['It saves money','It is the foundation of empirical science','It speeds up publication','It replaces peer review'], correctIndex: 1, explanation: 'เขาพูดว่า "replication is the very foundation of empirical science"' },
        { id: 'c1u4-ls-q3', type: 'multiple-choice', prompt: 'According to Dr Reeves, the main cause is usually:',        options: ['Outright fraud','Small samples and pressure to publish','Faulty equipment','Government interference'], correctIndex: 1, explanation: 'เขาบอกว่ามักเกิดจากตัวอย่างเล็ก การรายงานแบบเลือก และแรงกดดันในการตีพิมพ์' },
        { id: 'c1u4-ls-q4', type: 'multiple-choice', prompt: 'Which solution does he mention?',                          options: ['Higher salaries','Pre-registration of studies and open data','Banning replication','Fewer peer reviewers'], correctIndex: 1, explanation: 'เขากล่าวถึง pre-registration และ open data ว่าช่วยฟื้นความเชื่อมั่น' },
      ]
    },

    // reading section — shape matches readingPieces item (skills/reading.js)
    reading: {
      id: 'c1-unit-4-reading',
      type: 'Article',
      title: 'When Data Deceives: The Trap of Correlation',
      thai: 'เมื่อข้อมูลหลอกลวง: กับดักของความสัมพันธ์เชิงสถิติ',
      emoji: '📖',
      level: 'C1',
      minutes: 5,
      paragraphs: [
        'One of the most persistent misconceptions in the public understanding of science is the assumption that a statistical correlation between two variables necessarily implies that one causes the other. In reality, two phenomena may rise and fall in tandem for reasons that have nothing to do with any direct causal link. A frequently cited example is the strong correlation between ice-cream sales and drowning incidents; neither, of course, causes the other. Both are driven by a third, hidden variable: warm summer weather.',
        'The distinction matters because policy and medicine are increasingly shaped by large datasets. When an observational study reports that people who drink red wine live longer, it is tempting to conclude that wine confers longevity. Yet moderate wine drinkers may simply be wealthier, better educated, or more health-conscious in dozens of unmeasured ways. Such confounding factors can masquerade as genuine effects, and only a rigorous, controlled experiment can begin to disentangle them.',
        'This is precisely why the randomised controlled trial remains the gold standard of empirical enquiry. By assigning participants to groups purely by chance, researchers ensure that hidden variables are, on average, evenly distributed. Any systematic difference in outcome can then be attributed, with reasonable confidence, to the intervention itself rather than to some lurking confounder that was never accounted for.',
        'None of this is to suggest that correlational research is worthless. On the contrary, it is often the indispensable first step that generates the hypotheses later tested under controlled conditions. The danger lies not in observing correlations but in over-interpreting them. A scientifically literate public, one that instinctively asks "correlation or causation?", is far better equipped to resist the seductive but misleading headlines that saturate modern media.',
      ],
      dialogue: null,
      glossary: [
        { word: 'correlation',     thai: 'ความสัมพันธ์เชิงสถิติ',      def: 'a statistical relationship in which two variables tend to change together' },
        { word: 'confounding factor', thai: 'ปัจจัยรบกวน',              def: 'a hidden variable that influences both cause and effect, creating a misleading association' },
        { word: 'randomised controlled trial', thai: 'การทดลองแบบสุ่มมีกลุ่มควบคุม', def: 'a study in which participants are assigned to groups by chance to test an intervention' },
        { word: 'disentangle',     thai: 'แยกแยะ / คลี่คลาย',          def: 'to separate things that are complicated or confused' },
      ],
      summary: 'Correlation between two variables does not prove that one causes the other; hidden confounding factors often explain the link. Randomised controlled trials distribute such variables by chance and remain the gold standard, while correlational studies usefully generate hypotheses that must not be over-interpreted.',
      summaryThai: 'ความสัมพันธ์เชิงสถิติระหว่างสองตัวแปรไม่ได้พิสูจน์ว่าตัวหนึ่งเป็นสาเหตุของอีกตัว ปัจจัยรบกวนที่ซ่อนอยู่มักอธิบายความเชื่อมโยงนั้น การทดลองแบบสุ่มมีกลุ่มควบคุมช่วยกระจายตัวแปรเหล่านี้และยังคงเป็นมาตรฐานสูงสุด ขณะที่งานวิจัยเชิงสหสัมพันธ์มีประโยชน์ในการสร้างสมมติฐานแต่ต้องไม่ตีความเกินจริง',
      questions: [
        { id: 'c1u4-rd-q1', type: 'multiple-choice', prompt: 'What is the central misconception the article addresses?',       options: ['That experiments are unreliable','That correlation necessarily implies causation','That data cannot be trusted at all','That wine improves health'], correctIndex: 1, explanation: 'บทความชี้ว่าความเข้าใจผิดคือการคิดว่า correlation หมายถึง causation เสมอ' },
        { id: 'c1u4-rd-q2', type: 'multiple-choice', prompt: 'What actually links ice-cream sales and drowning?',            options: ['One causes the other','Nothing, it is a coincidence','A third variable: warm weather','Poor data collection'], correctIndex: 2, explanation: 'บทความระบุว่าทั้งสองถูกขับเคลื่อนด้วยตัวแปรที่ซ่อนอยู่คืออากาศร้อนในฤดูร้อน' },
        { id: 'c1u4-rd-q3', type: 'multiple-choice', prompt: 'Why is the randomised controlled trial the "gold standard"?',   options: ['It is cheaper','Random assignment distributes hidden variables evenly','It never uses statistics','It avoids using people'], correctIndex: 1, explanation: 'การสุ่มทำให้ตัวแปรที่ซ่อนอยู่กระจายอย่างสม่ำเสมอโดยเฉลี่ย' },
        { id: 'c1u4-rd-q4', type: 'multiple-choice', prompt: 'What value does the article assign to correlational research?', options: ['It is worthless','It generates hypotheses for later testing','It replaces experiments','It always misleads'], correctIndex: 1, explanation: 'บทความบอกว่ามันเป็นก้าวแรกที่จำเป็นในการสร้างสมมติฐาน' },
      ]
    },

    // unit test — 10 questions covering all sections
    test: {
      id: 'c1-unit-4-test',
      passMark: 0.70,
      questions: [
        { id: 'c1u4-t-01', type: 'multiple-choice', prompt: '"สมมติฐาน" ในภาษาอังกฤษเชิงวิชาการคือคำใด?',                    options: ['anomaly','hypothesis','correlation','breakthrough'], correctIndex: 1, explanation: '"hypothesis" = สมมติฐาน' },
        { id: 'c1u4-t-02', type: 'multiple-choice', prompt: 'What does "empirical" mean?',                                  options: ['based on royal authority','based on observation or experiment','based on emotion','based on tradition'], correctIndex: 1, explanation: '"empirical" = อิงหลักฐานเชิงประจักษ์จากการสังเกตหรือทดลอง' },
        { id: 'c1u4-t-03', type: 'fill-in-blank',   prompt: 'The antonym of "rigorous" is ___.',                            answer: 'careless', acceptedVariants: ['sloppy'], explanation: 'rigorous (เข้มงวด) ตรงข้ามกับ careless (สะเพร่า)' },
        { id: 'c1u4-t-04', type: 'multiple-choice', prompt: 'Choose the correct passive sentence.',                        options: ['The samples was analysed yesterday.','The samples were analysed yesterday.','The samples analysed yesterday.','The samples been analysed yesterday.'], correctIndex: 1, explanation: 'past passive พหูพจน์: were + analysed' },
        { id: 'c1u4-t-05', type: 'fill-in-blank',   prompt: 'Complete: It is widely ___ that the theory needs revision. (believe)', answer: 'believed', acceptedVariants: [], explanation: 'It is + past participle + that... (believed)' },
        { id: 'c1u4-t-06', type: 'multiple-choice', prompt: 'Which is the nominalisation of the verb "discover"?',          options: ['discovering','discovered','discovery','discoverable'], correctIndex: 2, explanation: 'discover (v.) → discovery (n.)' },
        { id: 'c1u4-t-07', type: 'multiple-choice', prompt: 'In the podcast, what usually causes the reproducibility crisis?', options: ['Outright fraud','Small samples and pressure to publish','Broken equipment','Lack of computers'], correctIndex: 1, explanation: 'ดร.รีฟส์บอกว่ามักเกิดจากตัวอย่างเล็กและแรงกดดันในการตีพิมพ์' },
        { id: 'c1u4-t-08', type: 'multiple-choice', prompt: 'In the podcast, which solution restores trust?',              options: ['Higher salaries','Pre-registration and open data','Banning journals','Fewer experiments'], correctIndex: 1, explanation: 'เขากล่าวถึง pre-registration และ open data' },
        { id: 'c1u4-t-09', type: 'multiple-choice', prompt: 'In the article, what links ice-cream sales and drowning?',    options: ['Direct causation','A third variable: warm weather','Bad statistics','Random chance only'], correctIndex: 1, explanation: 'ทั้งสองถูกขับเคลื่อนด้วยอากาศร้อนในฤดูร้อน' },
        { id: 'c1u4-t-10', type: 'fill-in-blank',   prompt: 'According to the article, the ___ controlled trial is the gold standard.', answer: 'randomised', acceptedVariants: ['randomized'], explanation: 'บทความระบุว่า randomised controlled trial เป็นมาตรฐานสูงสุด' },
      ]
    }
  },

  // ============================================================
  // C1 Unit 5: Culture (วัฒนธรรมและสังคม)
  // ============================================================
  {
    id: 'c1-unit-5',
    title: 'Unit 5: Culture',
    thai: 'บทที่ 5: วัฒนธรรมและสังคม',
    emoji: '🎭',

    // vocabulary section — shape matches vocabularyCategories item (skills/vocabulary.js)
    vocabulary: {
      id: 'c1-unit-5-vocab',
      title: 'Culture & Society',
      thai: 'วัฒนธรรมและสังคม',
      emoji: '🎭',
      level: 'C1',
      words: [
        { word: 'heritage',        pos: 'noun',      ipa: '/ˈhɛrɪtɪdʒ/',        emoji: '🏛️', thai: 'มรดกทางวัฒนธรรม',        def: 'valued traditions, buildings, and objects passed down from previous generations',       example: 'The old town was granted world heritage status.',                    synonym: 'legacy',        antonym: null },
        { word: 'assimilation',    pos: 'noun',      ipa: '/əˌsɪmɪˈleɪʃən/',    emoji: '🔀', thai: 'การกลืนกลายทางวัฒนธรรม',  def: 'the process by which a minority group gradually adopts the customs of a dominant one',   example: 'Full assimilation often means the loss of an ancestral language.',    synonym: 'integration',   antonym: 'segregation' },
        { word: 'indigenous',      pos: 'adjective', ipa: '/ɪnˈdɪdʒənəs/',      emoji: '🌏', thai: 'พื้นเมือง / ดั้งเดิม',    def: 'originating naturally in a particular place; native',                                    example: 'Indigenous communities have safeguarded these forests for centuries.', synonym: 'native',        antonym: 'foreign' },
        { word: 'cosmopolitan',    pos: 'adjective', ipa: '/ˌkɒzməˈpɒlɪtən/',   emoji: '🌆', thai: 'ที่มีความเป็นสากล',       def: 'containing or familiar with people and influences from many different countries',        example: 'London is a strikingly cosmopolitan city.',                          synonym: 'multicultural', antonym: 'provincial' },
        { word: 'norm',            pos: 'noun',      ipa: '/nɔːm/',             emoji: '📋', thai: 'บรรทัดฐานทางสังคม',       def: 'an accepted standard or way of behaving that most people in a society follow',           example: 'Punctuality is a strong social norm in that culture.',                synonym: 'convention',    antonym: null },
        { word: 'stereotype',      pos: 'noun',      ipa: '/ˈstɛriətaɪp/',      emoji: '🏷️', thai: 'ภาพเหมารวม',             def: 'an oversimplified and often unfair fixed idea about a type of person or group',          example: 'The film challenges tired national stereotypes.',                    synonym: 'cliché',        antonym: null },
        { word: 'diversity',       pos: 'noun',      ipa: '/daɪˈvɜːsɪti/',      emoji: '🌈', thai: 'ความหลากหลาย',           def: 'the state of including people or things of many different kinds',                        example: 'The festival celebrates the cultural diversity of the region.',       synonym: 'variety',       antonym: 'uniformity' },
        { word: 'preserve',        pos: 'verb',      ipa: '/prɪˈzɜːv/',         emoji: '🛡️', thai: 'อนุรักษ์ / รักษาไว้',     def: 'to keep something valuable safe from harm, loss, or change over time',                   example: 'Museums work to preserve fragile artefacts for future generations.',  synonym: 'conserve',      antonym: 'destroy' },
      ]
    },

    // grammar section — shape matches grammarTopics item (skills/grammar.js)
    grammar: {
      id: 'c1-unit-5-grammar',
      title: 'Inversion & Cleft Sentences',
      thai: 'การผกผันประโยค (Inversion) และประโยค Cleft เพื่อการเน้นย้ำ',
      emoji: '📐',
      level: 'C1',
      summary: 'เรียนรู้การใช้ inversion หลังคำเชิงลบและประโยค cleft (It is... / What...) เพื่อเน้นย้ำและสร้างสำนวนที่เป็นทางการและทรงพลังในการเขียนเชิงวิชาการและการโต้แย้ง',
      explanation: [
        {
          heading: 'Negative Inversion',
          body: 'เมื่อขึ้นต้นประโยคด้วยคำหรือวลีเชิงลบเพื่อเน้นย้ำ เราต้องสลับประธานกับกริยาช่วย (เหมือนการตั้งคำถาม)\n\nคำที่ใช้บ่อย: Never, Rarely, Seldom, Not only, No sooner, Little, Hardly\n\n• Rarely have we seen such diversity.\n• Not only does it preserve tradition, but it also attracts tourists.\n• Never before had the community faced such rapid change.'
        },
        {
          heading: 'It-Cleft Sentences',
          body: 'ประโยค cleft แบบ "It is/was + X + that/who..." ใช้เน้นส่วนใดส่วนหนึ่งของประโยค\n\nประโยคเดิม: Migration changed the city.\n• It was migration that changed the city. (เน้น migration)\n• It was the city that migration changed. (เน้น the city)'
        },
        {
          heading: 'What-Cleft (Pseudo-cleft)',
          body: 'ประโยค cleft แบบ "What... + is/was..." ใช้เน้นสิ่งที่ต้องการพูดถึง มักวางไว้ท้ายประโยค\n\nประโยคเดิม: We need to preserve our heritage.\n• What we need to do is preserve our heritage.\n• What matters most is cultural diversity.'
        }
      ],
      examples: [
        { en: 'Not only does the festival celebrate heritage, but it also unites the community.', th: 'เทศกาลนี้ไม่เพียงเฉลิมฉลองมรดก แต่ยังหลอมรวมชุมชนเข้าด้วยกัน' },
        { en: 'Rarely have I encountered such a cosmopolitan atmosphere.',                        th: 'ผมแทบไม่เคยพบบรรยากาศที่เป็นสากลเช่นนี้เลย' },
        { en: 'It was the younger generation that revived the dying language.',                   th: 'คนรุ่นใหม่นี่แหละที่ฟื้นภาษาที่กำลังจะสูญหาย' },
        { en: 'What truly defines a culture is its shared values.',                              th: 'สิ่งที่นิยามวัฒนธรรมอย่างแท้จริงคือค่านิยมร่วมของมัน' },
        { en: 'No sooner had the ban been lifted than the traditions returned.',                 th: 'ทันทีที่ยกเลิกคำสั่งห้าม ประเพณีต่าง ๆ ก็กลับคืนมา' },
        { en: 'Seldom is heritage preserved without deliberate effort.',                        th: 'มรดกทางวัฒนธรรมแทบไม่เคยถูกอนุรักษ์ไว้ได้โดยปราศจากความพยายามที่ตั้งใจ' },
      ],
      practice: [
        { id: 'c1u5-gr-p1', type: 'fill-in-blank',    prompt: 'Complete the inversion: Never ___ I seen such diversity. (auxiliary verb)', answer: 'have', acceptedVariants: [], explanation: 'Never + have + subject + past participle (present perfect inversion)' },
        { id: 'c1u5-gr-p2', type: 'multiple-choice',  prompt: 'Which sentence uses inversion correctly?',                                options: ['Rarely we have seen this.','Rarely have we seen this.','Rarely we seen this have.','Rarely seen we have this.'], correctIndex: 1, explanation: 'หลังคำเชิงลบ Rarely ต้องสลับกริยาช่วย: have we seen' },
        { id: 'c1u5-gr-p3', type: 'fill-in-blank',    prompt: 'Make an it-cleft emphasising "migration": ___ was migration that changed the city.', answer: 'It', acceptedVariants: [], explanation: 'it-cleft: It + was + X + that...' },
      ],
      quiz: [
        { id: 'c1u5-gr-q1', type: 'multiple-choice',  prompt: 'Choose the correct inversion after "Not only".',                          options: ['Not only it preserves tradition, but...','Not only does it preserve tradition, but...','Not only preserves it tradition, but...','Not only it does preserve tradition, but...'], correctIndex: 1, explanation: 'Not only + does + subject + base verb' },
        { id: 'c1u5-gr-q2', type: 'fill-in-blank',    prompt: 'Complete the what-cleft: ___ matters most is cultural diversity.',         answer: 'What', acceptedVariants: [], explanation: 'What-cleft ขึ้นต้นด้วย What' },
        { id: 'c1u5-gr-q3', type: 'multiple-choice',  prompt: 'Which is a correct it-cleft sentence?',                                    options: ['It was the community who revived the tradition.','It the community revived the tradition.','Was it the community revived the tradition.','It revived the community that the tradition.'], correctIndex: 0, explanation: 'It + was + the community + who... (เน้น the community)' },
        { id: 'c1u5-gr-q4', type: 'fill-in-blank',    prompt: 'Complete: No sooner had the ban been lifted ___ the traditions returned.', answer: 'than', acceptedVariants: [], explanation: 'No sooner... than... เป็นคู่สำนวนตายตัว' },
      ]
    },

    // listening section — shape matches listeningPieces item (skills/listening.js)
    listening: {
      id: 'c1-unit-5-listening',
      type: 'News',
      title: 'A Language on the Brink of Extinction',
      thai: 'ภาษาที่ใกล้สูญหาย',
      emoji: '🎧',
      level: 'C1',
      segments: [
        { speaker: 'Anchor',    text: 'Good evening. Tonight we turn to the quiet disappearance of the world’s languages, one of which vanishes roughly every two weeks.',            thai: 'สวัสดีค่ะ คืนนี้เราจะพูดถึงการสูญหายอย่างเงียบ ๆ ของภาษาต่าง ๆ ทั่วโลก ซึ่งภาษาหนึ่งหายไปทุก ๆ ราวสองสัปดาห์' },
        { speaker: 'Reporter',  text: 'In a remote highland village, only a handful of elders still speak the ancestral tongue fluently. Rarely do the young people use it at all.',   thai: 'ในหมู่บ้านบนที่สูงห่างไกล มีเพียงผู้เฒ่าไม่กี่คนที่ยังพูดภาษาบรรพบุรุษได้อย่างคล่องแคล่ว คนหนุ่มสาวแทบไม่ใช้มันเลย' },
        { speaker: 'Elder',     text: 'When our words die, so does the memory carried within them. What we lose is not merely grammar, but an entire way of seeing the world.',        thai: 'เมื่อคำพูดของเราตายไป ความทรงจำที่บรรจุอยู่ในนั้นก็ตายตามไปด้วย สิ่งที่เราสูญเสียไม่ใช่แค่ไวยากรณ์ แต่คือมุมมองต่อโลกทั้งมุมมอง' },
        { speaker: 'Reporter',  text: 'Linguists argue that assimilation and the dominance of global languages have accelerated the decline dramatically.',                          thai: 'นักภาษาศาสตร์โต้แย้งว่าการกลืนกลายและการครอบงำของภาษาสากลได้เร่งการเสื่อมถอยอย่างมาก' },
        { speaker: 'Linguist',  text: 'Not only are we losing words; we are losing unique bodies of knowledge about medicine, ecology, and history.',                                thai: 'เราไม่เพียงกำลังสูญเสียคำศัพท์ แต่เรากำลังสูญเสียองค์ความรู้อันเป็นเอกลักษณ์เกี่ยวกับการแพทย์ นิเวศวิทยา และประวัติศาสตร์' },
        { speaker: 'Reporter',  text: 'Yet there is cautious hope. Community-led schools are now teaching the language to children once more.',                                    thai: 'แต่ก็ยังมีความหวังอย่างระมัดระวัง โรงเรียนที่ชุมชนเป็นผู้นำกำลังสอนภาษานี้ให้เด็ก ๆ อีกครั้ง' },
        { speaker: 'Elder',     text: 'It is the children who give me hope. When I hear them sing our old songs, I believe the language may yet survive.',                        thai: 'เด็ก ๆ นี่แหละที่ให้ความหวังแก่ฉัน เมื่อได้ยินพวกเขาร้องเพลงเก่าของเรา ฉันเชื่อว่าภาษานี้อาจจะยังคงอยู่รอด' },
        { speaker: 'Anchor',    text: 'A reminder, then, that preserving heritage demands not nostalgia but action. Back to the studio.',                                          thai: 'นี่จึงเป็นเครื่องเตือนใจว่าการอนุรักษ์มรดกไม่ได้ต้องการความคิดถึงอดีต แต่ต้องการการลงมือทำ กลับไปที่สตูดิโอค่ะ' },
      ],
      questions: [
        { id: 'c1u5-ls-q1', type: 'multiple-choice', prompt: 'How often does a language reportedly vanish?',              options: ['Every day','Roughly every two weeks','Once a year','Every decade'], correctIndex: 1, explanation: 'ผู้ประกาศบอกว่าภาษาหนึ่งหายไปทุก ๆ ราวสองสัปดาห์' },
        { id: 'c1u5-ls-q2', type: 'multiple-choice', prompt: 'According to the elder, what is lost when a language dies?', options: ['Only grammar rules','An entire way of seeing the world','Nothing important','Just some vocabulary'], correctIndex: 1, explanation: 'ผู้เฒ่าพูดว่าสิ่งที่สูญเสียไม่ใช่แค่ไวยากรณ์ แต่คือมุมมองต่อโลกทั้งมุมมอง' },
        { id: 'c1u5-ls-q3', type: 'multiple-choice', prompt: 'What do linguists blame for the accelerated decline?',      options: ['Bad weather','Assimilation and dominance of global languages','Lack of dictionaries','Too many schools'], correctIndex: 1, explanation: 'นักภาษาศาสตร์โทษการกลืนกลายและการครอบงำของภาษาสากล' },
        { id: 'c1u5-ls-q4', type: 'multiple-choice', prompt: 'What gives the elder hope?',                                options: ['Government funding','Tourists','The children learning and singing','New technology'], correctIndex: 2, explanation: 'ผู้เฒ่าพูดว่า "It is the children who give me hope"' },
      ]
    },

    // reading section — shape matches readingPieces item (skills/reading.js)
    reading: {
      id: 'c1-unit-5-reading',
      type: 'Article',
      title: 'The Double Edge of Cultural Globalisation',
      thai: 'ดาบสองคมของโลกาภิวัตน์ทางวัฒนธรรม',
      emoji: '📖',
      level: 'C1',
      minutes: 5,
      paragraphs: [
        'Few forces have reshaped human societies as profoundly as cultural globalisation. Never before have ideas, images, and customs travelled so far and so fast. A teenager in Bangkok may listen to Korean pop, wear American brands, and cook Italian food, all within a single afternoon. To its champions, this unprecedented exchange represents a flowering of choice and a welcome erosion of narrow provincialism.',
        'Yet the same currents that enrich also threaten to homogenise. Critics warn that as a handful of dominant cultures saturate the global marketplace, countless local traditions are quietly pushed to the margins. What is lost, they argue, is not merely quaint custom but genuine diversity of thought. When every high street looks alike and every screen shows the same films, the world grows a little less various, a little less surprising.',
        'The reality, of course, resists such tidy oppositions. Cultures have never been static museum pieces; they have always borrowed, adapted, and reinvented themselves through contact with others. What appears at first glance to be simple assimilation frequently turns out to be creative hybridisation, in which foreign influences are absorbed and transformed into something distinctively local. It is this capacity for reinvention, rather than rigid preservation, that has allowed traditions to endure across the centuries.',
        'The challenge, then, is neither to resist global exchange nor to surrender to it uncritically, but to steer a thoughtful middle course. Communities that consciously document their heritage, teach their languages, and celebrate their distinctiveness can engage confidently with the wider world without being dissolved by it. Globalisation need not mean uniformity; handled wisely, it can become a stage on which local cultures perform, and are seen, as never before.',
      ],
      dialogue: null,
      glossary: [
        { word: 'globalisation',  thai: 'โลกาภิวัตน์',              def: 'the process by which the world becomes increasingly interconnected through trade and culture' },
        { word: 'homogenise',     thai: 'ทำให้เหมือนกันไปหมด',     def: 'to make things uniform or similar, removing differences' },
        { word: 'provincialism',  thai: 'ความคับแคบแบบท้องถิ่น',   def: 'a narrow outlook limited to the concerns of one’s own local area' },
        { word: 'hybridisation',  thai: 'การผสมผสานทางวัฒนธรรม',   def: 'the blending of different cultural elements into something new' },
      ],
      summary: 'Cultural globalisation offers unprecedented choice and exchange but risks homogenising the world and marginalising local traditions. Yet cultures have always adapted through contact, often producing creative hybridisation rather than pure assimilation. The wise response is a middle course: engaging with the world while consciously documenting and celebrating local distinctiveness.',
      summaryThai: 'โลกาภิวัตน์ทางวัฒนธรรมมอบทางเลือกและการแลกเปลี่ยนอย่างที่ไม่เคยมีมาก่อน แต่ก็เสี่ยงที่จะทำให้โลกเหมือนกันไปหมดและผลักประเพณีท้องถิ่นให้อยู่ชายขอบ อย่างไรก็ตาม วัฒนธรรมปรับตัวผ่านการติดต่อเสมอ มักก่อให้เกิดการผสมผสานเชิงสร้างสรรค์มากกว่าการกลืนกลายล้วน ๆ ทางออกที่ชาญฉลาดคือทางสายกลาง คือการมีส่วนร่วมกับโลกพร้อมกับบันทึกและเฉลิมฉลองเอกลักษณ์ท้องถิ่นอย่างตั้งใจ',
      questions: [
        { id: 'c1u5-rd-q1', type: 'multiple-choice', prompt: 'How do champions of globalisation view cultural exchange?',      options: ['As a threat to identity','As a flowering of choice','As economically harmful','As unavoidable decline'], correctIndex: 1, explanation: 'ผู้สนับสนุนมองว่าเป็น "a flowering of choice"' },
        { id: 'c1u5-rd-q2', type: 'multiple-choice', prompt: 'What do critics fear is truly lost?',                          options: ['Money','Genuine diversity of thought','Tourism revenue','Modern technology'], correctIndex: 1, explanation: 'นักวิจารณ์บอกว่าสิ่งที่สูญเสียคือความหลากหลายทางความคิดที่แท้จริง' },
        { id: 'c1u5-rd-q3', type: 'multiple-choice', prompt: 'According to the article, cultures have historically been:',   options: ['Static museum pieces','Always borrowing and reinventing','Completely isolated','Resistant to all change'], correctIndex: 1, explanation: 'บทความบอกว่าวัฒนธรรมยืม ปรับ และสร้างตัวเองใหม่เสมอ' },
        { id: 'c1u5-rd-q4', type: 'multiple-choice', prompt: 'What "middle course" does the article recommend?',            options: ['Rejecting all foreign influence','Surrendering to globalisation','Engaging while documenting local heritage','Ignoring the issue'], correctIndex: 2, explanation: 'บทความแนะนำให้มีส่วนร่วมกับโลกพร้อมบันทึกและเฉลิมฉลองเอกลักษณ์ท้องถิ่น' },
      ]
    },

    // unit test — 10 questions covering all sections
    test: {
      id: 'c1-unit-5-test',
      passMark: 0.70,
      questions: [
        { id: 'c1u5-t-01', type: 'multiple-choice', prompt: '"มรดกทางวัฒนธรรม" ในภาษาอังกฤษคือคำใด?',                       options: ['diversity','heritage','stereotype','norm'], correctIndex: 1, explanation: '"heritage" = มรดกทางวัฒนธรรม' },
        { id: 'c1u5-t-02', type: 'multiple-choice', prompt: 'What does "indigenous" mean?',                                 options: ['foreign','native to a place','modern','temporary'], correctIndex: 1, explanation: '"indigenous" = พื้นเมือง / ดั้งเดิม' },
        { id: 'c1u5-t-03', type: 'fill-in-blank',   prompt: 'The antonym of "diversity" is ___.',                          answer: 'uniformity', acceptedVariants: [], explanation: 'diversity (ความหลากหลาย) ตรงข้ามกับ uniformity (ความเหมือนกันไปหมด)' },
        { id: 'c1u5-t-04', type: 'multiple-choice', prompt: 'Which sentence uses inversion correctly?',                    options: ['Never I have seen such diversity.','Never have I seen such diversity.','Never seen I have such diversity.','Never I seen have such diversity.'], correctIndex: 1, explanation: 'Never + have + subject + past participle' },
        { id: 'c1u5-t-05', type: 'fill-in-blank',   prompt: 'Complete the what-cleft: ___ matters most is cultural diversity.', answer: 'What', acceptedVariants: [], explanation: 'What-cleft ขึ้นต้นด้วย What' },
        { id: 'c1u5-t-06', type: 'multiple-choice', prompt: 'Choose the correct "Not only" inversion.',                    options: ['Not only it preserves tradition...','Not only does it preserve tradition...','Not only preserve it tradition...','Not only preserves tradition it...'], correctIndex: 1, explanation: 'Not only + does + subject + base verb' },
        { id: 'c1u5-t-07', type: 'multiple-choice', prompt: 'In the news report, how often does a language vanish?',       options: ['Every day','Roughly every two weeks','Once a year','Never'], correctIndex: 1, explanation: 'ราวทุกสองสัปดาห์' },
        { id: 'c1u5-t-08', type: 'multiple-choice', prompt: 'In the news report, what gives the elder hope?',              options: ['Money','Tourists','The children learning the language','A new law'], correctIndex: 2, explanation: 'ผู้เฒ่าพูดว่าเด็ก ๆ ให้ความหวัง' },
        { id: 'c1u5-t-09', type: 'multiple-choice', prompt: 'In the article, what do critics fear is truly lost?',        options: ['Money','Genuine diversity of thought','Buildings','Food'], correctIndex: 1, explanation: 'ความหลากหลายทางความคิดที่แท้จริง' },
        { id: 'c1u5-t-10', type: 'fill-in-blank',   prompt: 'In the article, foreign influences are often absorbed through creative ___.', answer: 'hybridisation', acceptedVariants: ['hybridization'], explanation: 'บทความใช้คำว่า creative hybridisation' },
      ]
    }
  }
]
