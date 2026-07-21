// Curated sentences for the Sentence Builder mode, grouped by CEFR level.
// Each entry: { thai: prompt, words: [tokens in correct order] }.
// Tokens include punctuation as their own tiles so learners place them too.

export const SENTENCE_SETS = [
  {
    level: 'A1',
    label: 'Beginner',
    sentences: [
      { thai: 'ชื่อของฉันคือพลอย', words: ['My', 'name', 'is', 'Ploy', '.'] },
      { thai: 'ฉันมาจากประเทศไทย', words: ['I', 'am', 'from', 'Thailand', '.'] },
      { thai: 'ยินดีที่ได้รู้จักคุณ', words: ['Nice', 'to', 'meet', 'you', '.'] },
      { thai: 'ฉันอาศัยอยู่ในกรุงเทพฯ', words: ['I', 'live', 'in', 'Bangkok', '.'] },
      { thai: 'เธอเป็นครู', words: ['She', 'is', 'a', 'teacher', '.'] },
      { thai: 'ฉันสบายดี ขอบคุณ', words: ["I'm", 'fine', ',', 'thank', 'you', '.'] },
      { thai: 'นี่คือสมุดของฉัน', words: ['This', 'is', 'my', 'book', '.'] },
      { thai: 'พวกเขาอยู่ที่ไหน?', words: ['Where', 'are', 'they', '?'] },
      { thai: 'วันนี้อากาศดี', words: ['The', 'weather', 'is', 'nice', 'today', '.'] },
      { thai: 'ฉันมีน้องสาวสองคน', words: ['I', 'have', 'two', 'sisters', '.'] },
    ]
  },
  {
    level: 'A2',
    label: 'Elementary',
    sentences: [
      { thai: 'ฉันตื่นนอนตอนเจ็ดโมงทุกวัน', words: ['I', 'wake', 'up', 'at', 'seven', 'every', 'day', '.'] },
      { thai: 'คุณมีงานอดิเรกอะไรบ้าง?', words: ['What', 'are', 'your', 'hobbies', '?'] },
      { thai: 'เธอชอบฟังเพลงและอ่านหนังสือ', words: ['She', 'likes', 'listening', 'to', 'music', 'and', 'reading', '.'] },
      { thai: 'ฉันต้องการกาแฟหนึ่งแก้ว', words: ['I', 'would', 'like', 'a', 'cup', 'of', 'coffee', '.'] },
      { thai: 'ห้องน้ำอยู่ที่ไหน?', words: ['Excuse', 'me', ',', 'where', 'is', 'the', 'bathroom', '?'] },
      { thai: 'ฉันไม่ค่อยกินข้าวเช้า', words: ['I', 'rarely', 'eat', 'breakfast', '.'] },
      { thai: 'ร้านนั้นอยู่ตรงข้ามกับโรงเรียน', words: ['The', 'shop', 'is', 'opposite', 'the', 'school', '.'] },
      { thai: 'คุณไม่ควรมาสาย', words: ['You', 'should', 'not', 'be', 'late', '.'] },
      { thai: 'เมื่อวานฉันไปตลาด', words: ['I', 'went', 'to', 'the', 'market', 'yesterday', '.'] },
      { thai: 'เขากำลังทำอาหารเย็นอยู่', words: ['He', 'is', 'cooking', 'dinner', '.'] },
    ]
  },
  {
    level: 'B1',
    label: 'Intermediate',
    sentences: [
      { thai: 'ฉันทำงานที่บริษัทนี้มาสามปีแล้ว', words: ["I've", 'worked', 'at', 'this', 'company', 'for', 'three', 'years', '.'] },
      { thai: 'เครื่องบินถูกดีเลย์เพราะสภาพอากาศแย่', words: ['The', 'flight', 'was', 'delayed', 'due', 'to', 'bad', 'weather', '.'] },
      { thai: 'ถ้าฉันชนะสลากกินแบ่ง ฉันจะเดินทางรอบโลก', words: ['If', 'I', 'won', 'the', 'lottery', ',', 'I', 'would', 'travel', 'the', 'world', '.'] },
      { thai: 'คุณเคยไปลอนดอนไหม?', words: ['Have', 'you', 'ever', 'been', 'to', 'London', '?'] },
      { thai: 'สะพานอีเฟลถูกสร้างในปี 1889', words: ['The', 'Eiffel', 'Tower', 'was', 'built', 'in', '1889', '.'] },
      { thai: 'ฉันโทรหาเธอไม่ได้เพราะสายไม่ว่าง', words: ['I', "couldn't", 'reach', 'her', 'because', 'the', 'line', 'was', 'engaged', '.'] },
      { thai: 'คุณว่างวันเสาร์ไหม?', words: ['Are', 'you', 'available', 'on', 'Saturday', '?'] },
      { thai: 'แพทย์แนะนำให้เธอพักผ่อนหนึ่งสัปดาห์', words: ['The', 'doctor', 'advised', 'her', 'to', 'rest', 'for', 'a', 'week', '.'] },
      { thai: 'ฉันกำลังคิดจะเปลี่ยนงาน', words: ["I'm", 'thinking', 'about', 'changing', 'jobs', '.'] },
      { thai: 'ถ้าฝนตก เราจะอยู่บ้าน', words: ['If', 'it', 'rains', ',', 'we', 'will', 'stay', 'home', '.'] },
    ]
  },
  {
    level: 'B2',
    label: 'Upper-Intermediate',
    sentences: [
      { thai: 'เธอบอกฉันว่าการประชุมถูกเลื่อนไปวันอังคาร', words: ['She', 'told', 'me', 'the', 'meeting', 'had', 'been', 'moved', 'to', 'Tuesday', '.'] },
      { thai: 'ฉันกลัวว่าจะมีปัญหากับบิลของฉัน', words: ["I'm", 'afraid', "there's", 'a', 'problem', 'with', 'my', 'bill', '.'] },
      { thai: 'เขาปฏิเสธว่าเขาไม่ได้ทำผิดพลาด', words: ['He', 'denied', 'making', 'any', 'mistakes', '.'] },
      { thai: 'ฉันขอโทษอย่างจริงใจสำหรับความไม่สะดวก', words: ['I', 'sincerely', 'apologise', 'for', 'the', 'inconvenience', '.'] },
      { thai: 'เธอถามว่าฉันทำงานที่ไหน', words: ['She', 'asked', 'where', 'I', 'worked', '.'] },
      { thai: 'ฉันอยากจะพูดคุยกับผู้จัดการ', words: ["I'd", 'like', 'to', 'speak', 'to', 'a', 'manager', ',', 'please', '.'] },
      { thai: 'ครูบอกให้เราเปิดหนังสือ', words: ['The', 'teacher', 'told', 'us', 'to', 'open', 'our', 'books', '.'] },
      { thai: 'นั่นเป็นความผิดของเราทั้งหมด', words: ['That', 'was', 'entirely', 'our', 'fault', '.'] },
      { thai: 'ฉันน่าจะโทรหาคุณก่อน', words: ['I', 'should', 'have', 'called', 'you', 'first', '.'] },
      { thai: 'รายงานต้องส่งภายในวันศุกร์', words: ['The', 'report', 'must', 'be', 'submitted', 'by', 'Friday', '.'] },
    ]
  },
  {
    level: 'C1',
    label: 'Advanced',
    sentences: [
      { thai: 'ฉันเห็นจุดของคุณ แต่ฉันอยากจะโต้แย้ง', words: ['I', 'see', 'your', 'point', ',', 'but', "I'd", 'like', 'to', 'respectfully', 'disagree', '.'] },
      { thai: 'อาจพูดได้ว่านโยบายนี้มีผลกระทบที่ไม่ได้ตั้งใจ', words: ['It', 'could', 'be', 'argued', 'that', 'this', 'policy', 'has', 'unintended', 'consequences', '.'] },
      { thai: 'การเจรจาต้องใช้ทั้งความอดทนและความยืดหยุ่น', words: ['Negotiation', 'requires', 'both', 'patience', 'and', 'flexibility', '.'] },
      { thai: 'เขาฟังอย่างตั้งใจก่อนที่จะตอบสนอง', words: ['He', 'listened', 'attentively', 'before', 'formulating', 'his', 'response', '.'] },
      { thai: 'ฉันอยากขอให้คุณพิจารณาใหม่อีกครั้ง', words: ['I', 'would', 'like', 'to', 'ask', 'you', 'to', 'reconsider', 'your', 'position', '.'] },
      { thai: 'ข้อมูลดูเหมือนจะสนับสนุนสมมติฐานนี้', words: ['The', 'data', 'appear', 'to', 'support', 'this', 'hypothesis', '.'] },
      { thai: 'บริษัทตัดสินใจยุติสัญญาด้วยผลทันที', words: ['The', 'company', 'decided', 'to', 'terminate', 'the', 'contract', 'with', 'immediate', 'effect', '.'] },
      { thai: 'เธอแสดงให้เห็นว่าเธอมีความสามารถในการเป็นผู้นำ', words: ['She', 'demonstrated', 'an', 'impressive', 'capacity', 'for', 'leadership', '.'] },
      { thai: 'ดูเหมือนว่าจะมีความเข้าใจผิดกัน', words: ['There', 'seems', 'to', 'have', 'been', 'a', 'misunderstanding', '.'] },
      { thai: 'ฉันขอสงวนสิทธิ์ในการเปลี่ยนแปลงแผน', words: ['I', 'reserve', 'the', 'right', 'to', 'change', 'the', 'plan', '.'] },
    ]
  },
  {
    level: 'C2',
    label: 'Proficiency',
    sentences: [
      { thai: 'แม้จะมีอุปสรรคมากมาย แต่โครงการก็สำเร็จลุล่วง', words: ['Despite', 'numerous', 'obstacles', ',', 'the', 'project', 'was', 'completed', 'successfully', '.'] },
      { thai: 'หากได้รับข้อมูลเร็วกว่านี้ เราคงตัดสินใจต่างออกไป', words: ['Had', 'we', 'received', 'the', 'information', 'sooner', ',', 'we', 'would', 'have', 'decided', 'differently', '.'] },
      { thai: 'ไม่เพียงแต่เธอมาสาย แต่เธอยังลืมเอกสารด้วย', words: ['Not', 'only', 'was', 'she', 'late', ',', 'but', 'she', 'also', 'forgot', 'the', 'documents', '.'] },
      { thai: 'ยิ่งคุณฝึกมากเท่าไร คุณก็ยิ่งมั่นใจมากขึ้นเท่านั้น', words: ['The', 'more', 'you', 'practise', ',', 'the', 'more', 'confident', 'you', 'become', '.'] },
      { thai: 'ข้อเสนอนี้แม้จะน่าสนใจ แต่ก็ยังต้องพิจารณาอย่างรอบคอบ', words: ['This', 'proposal', ',', 'although', 'appealing', ',', 'warrants', 'careful', 'consideration', '.'] },
      { thai: 'เธอพูดราวกับว่าเธอรู้ทุกอย่าง', words: ['She', 'speaks', 'as', 'if', 'she', 'knew', 'everything', '.'] },
      { thai: 'สิ่งที่ทำให้ฉันประทับใจที่สุดคือความทุ่มเทของทีม', words: ['What', 'impressed', 'me', 'most', 'was', 'the', "team's", 'dedication', '.'] },
      { thai: 'ภายใต้สถานการณ์เช่นนี้ เราไม่มีทางเลือกอื่น', words: ['Under', 'these', 'circumstances', ',', 'we', 'have', 'no', 'other', 'choice', '.'] },
      { thai: 'ไม่ว่าจะเกิดอะไรขึ้น ฉันจะสนับสนุนคุณเสมอ', words: ['No', 'matter', 'what', 'happens', ',', 'I', 'will', 'always', 'support', 'you', '.'] },
      { thai: 'เพียงเพราะมันยาก ไม่ได้หมายความว่าเป็นไปไม่ได้', words: ['Just', 'because', "it's", 'difficult', "doesn't", 'mean', "it's", 'impossible', '.'] },
    ]
  }
]
