export const listeningPieces = [
  {
    id: 'listening-cafe-order',
    type: 'Conversation',
    title: 'Ordering at a Cafe',
    thai: 'สั่งเครื่องดื่มที่คาเฟ่',
    emoji: '🎧',
    level: 'A2',
    segments: [
      { speaker: 'Barista', text: "Hi there! Welcome to Sunny Cafe. What can I get for you today?", thai: 'สวัสดีค่ะ ยินดีต้อนรับสู่ซันนี่คาเฟ่ รับอะไรดีคะ' },
      { speaker: 'Customer', text: "Hi! Can I have a medium latte, please?", thai: 'สวัสดีครับ ขอลาเต้แก้วกลางหนึ่งแก้วครับ' },
      { speaker: 'Barista', text: "Sure. Would you like it hot or iced?", thai: 'ได้ค่ะ รับแบบร้อนหรือเย็นคะ' },
      { speaker: 'Customer', text: "Iced, please. It's really warm outside today.", thai: 'แบบเย็นครับ วันนี้ข้างนอกร้อนมากเลย' },
      { speaker: 'Barista', text: "Good choice. Would you like anything to eat with that?", thai: 'เลือกได้ดีค่ะ รับอะไรทานคู่ด้วยไหมคะ' },
      { speaker: 'Customer', text: "Yes, a chocolate muffin sounds great.", thai: 'ครับ ขอมัฟฟินช็อกโกแลตชิ้นหนึ่งครับ' },
      { speaker: 'Barista', text: "Perfect. That will be five dollars in total.", thai: 'เยี่ยมค่ะ รวมทั้งหมดห้าดอลลาร์ค่ะ' },
      { speaker: 'Customer', text: "Here you go. Can I get a receipt, please?", thai: 'นี่ครับ ขอใบเสร็จด้วยได้ไหมครับ' },
      { speaker: 'Barista', text: "Of course. Your name will be called when the drink is ready.", thai: 'ได้ค่ะ เดี๋ยวจะเรียกชื่อเมื่อเครื่องดื่มพร้อมนะคะ' }
    ],
    questions: [
      { id: 'ls1-q1', type: 'multiple-choice', prompt: 'What drink does the customer order?', options: ['A medium latte', 'A small tea', 'A hot chocolate', 'An orange juice'], correctIndex: 0, explanation: 'ลูกค้าพูดว่า "Can I have a medium latte, please?" จึงสั่งลาเต้แก้วกลาง' },
      { id: 'ls1-q2', type: 'multiple-choice', prompt: 'Does the customer want the drink hot or iced?', options: ['Hot', 'Iced', 'Warm', 'Both'], correctIndex: 1, explanation: 'ลูกค้าตอบว่า "Iced, please" เพราะอากาศข้างนอกร้อน' },
      { id: 'ls1-q3', type: 'multiple-choice', prompt: 'What food does the customer choose?', options: ['A cookie', 'A sandwich', 'A chocolate muffin', 'A slice of cake'], correctIndex: 2, explanation: 'ลูกค้าพูดว่า "a chocolate muffin sounds great" จึงเลือกมัฟฟินช็อกโกแลต' },
      { id: 'ls1-q4', type: 'multiple-choice', prompt: 'How much is the order in total?', options: ['Three dollars', 'Four dollars', 'Five dollars', 'Six dollars'], correctIndex: 2, explanation: 'พนักงานบอกว่า "That will be five dollars in total" คือห้าดอลลาร์' }
    ]
  },
  {
    id: 'listening-study-tip-podcast',
    type: 'Podcast',
    title: 'One Simple Study Tip',
    thai: 'เคล็ดลับการเรียนง่ายๆ หนึ่งข้อ',
    emoji: '🎙️',
    level: 'B1',
    segments: [
      { speaker: 'Host', text: "Hey everyone, welcome back to Learn a Little, the podcast about small habits that make a big difference.", thai: 'สวัสดีทุกคน ยินดีต้อนรับกลับสู่รายการ Learn a Little พอดแคสต์เกี่ยวกับนิสัยเล็กๆ ที่สร้างความแตกต่างครั้งใหญ่' },
      { speaker: 'Host', text: "Today I want to share one simple study tip that completely changed how I learn new things.", thai: 'วันนี้ผมอยากแบ่งปันเคล็ดลับการเรียนง่ายๆ หนึ่งข้อ ที่เปลี่ยนวิธีการเรียนรู้ของผมไปเลย' },
      { speaker: 'Host', text: "The tip is this: study for just twenty-five minutes, and then take a short break.", thai: 'เคล็ดลับก็คือ เรียนแค่ยี่สิบห้านาที แล้วพักสั้นๆ' },
      { speaker: 'Host', text: "A lot of people try to study for hours without stopping, but our brains get tired quickly.", thai: 'หลายคนพยายามเรียนติดต่อกันหลายชั่วโมงโดยไม่หยุด แต่สมองของเราเหนื่อยเร็ว' },
      { speaker: 'Host', text: "When you take a five-minute break, you give your mind a chance to rest and remember more.", thai: 'เมื่อคุณพักห้านาที คุณให้โอกาสสมองได้พักและจดจำได้มากขึ้น' },
      { speaker: 'Host', text: "During the break, stand up, drink some water, or look out the window.", thai: 'ระหว่างพัก ให้ลุกขึ้นยืน ดื่มน้ำ หรือมองออกไปนอกหน้าต่าง' },
      { speaker: 'Host', text: "Try not to check your phone, because it can pull your attention away for too long.", thai: 'พยายามอย่าเช็กโทรศัพท์ เพราะมันจะดึงความสนใจของคุณไปนานเกินไป' },
      { speaker: 'Host', text: "After four rounds, take a longer break of around fifteen minutes.", thai: 'หลังจากทำครบสี่รอบ ให้พักยาวขึ้นประมาณสิบห้านาที' },
      { speaker: 'Host', text: "Give it a try this week, and let me know how it goes. Thanks for listening!", thai: 'ลองทำดูสัปดาห์นี้นะครับ แล้วบอกผมด้วยว่าเป็นอย่างไร ขอบคุณที่รับฟังครับ' }
    ],
    questions: [
      { id: 'ls2-q1', type: 'multiple-choice', prompt: 'How long does the host suggest studying before a break?', options: ['Ten minutes', 'Twenty-five minutes', 'Forty minutes', 'One hour'], correctIndex: 1, explanation: 'พิธีกรบอกว่า "study for just twenty-five minutes" คือยี่สิบห้านาที' },
      { id: 'ls2-q2', type: 'multiple-choice', prompt: 'Why do our brains need a break, according to the host?', options: ['They get tired quickly', 'They need food', 'They need music', 'They stop working at night'], correctIndex: 0, explanation: 'พิธีกรพูดว่า "our brains get tired quickly" คือสมองเหนื่อยเร็ว' },
      { id: 'ls2-q3', type: 'multiple-choice', prompt: 'What does the host say NOT to do during the break?', options: ['Drink water', 'Stand up', 'Check your phone', 'Look out the window'], correctIndex: 2, explanation: 'พิธีกรแนะนำว่า "Try not to check your phone" คืออย่าเช็กโทรศัพท์' },
      { id: 'ls2-q4', type: 'multiple-choice', prompt: 'How long is the longer break after four rounds?', options: ['Five minutes', 'Ten minutes', 'Fifteen minutes', 'Thirty minutes'], correctIndex: 2, explanation: 'พิธีกรบอกว่า "a longer break of around fifteen minutes" คือประมาณสิบห้านาที' }
    ]
  },
  {
    id: 'listening-morning-news',
    type: 'News',
    title: 'Morning News Bulletin',
    thai: 'ข่าวเช้าสรุปสั้น',
    emoji: '📻',
    level: 'B1',
    segments: [
      { speaker: 'Narrator', text: "Good morning, and welcome to your local news update for Tuesday, the eighth of July.", thai: 'อรุณสวัสดิ์ ยินดีต้อนรับสู่ข่าวท้องถิ่นประจำวันอังคารที่แปดกรกฎาคม' },
      { speaker: 'Narrator', text: "First, the weather. Today will be mostly sunny with a high of thirty-two degrees.", thai: 'เริ่มกันที่สภาพอากาศ วันนี้ท้องฟ้าส่วนใหญ่แจ่มใส อุณหภูมิสูงสุดสามสิบสององศา' },
      { speaker: 'Narrator', text: "There is a small chance of light rain in the evening, so you may want to carry an umbrella.", thai: 'ช่วงเย็นมีโอกาสฝนตกเล็กน้อย จึงควรพกร่มติดตัวไว้' },
      { speaker: 'Narrator', text: "In local news, the city library will reopen this Saturday after two months of repairs.", thai: 'ข่าวท้องถิ่น ห้องสมุดเมืองจะเปิดอีกครั้งวันเสาร์นี้ หลังจากซ่อมแซมมาสองเดือน' },
      { speaker: 'Narrator', text: "The library will offer free reading classes for children every weekend.", thai: 'ห้องสมุดจะเปิดสอนการอ่านฟรีสำหรับเด็กทุกสุดสัปดาห์' },
      { speaker: 'Narrator', text: "Also this weekend, a food festival will take place in the central park.", thai: 'สุดสัปดาห์นี้ยังมีเทศกาลอาหารจัดขึ้นที่สวนสาธารณะกลางเมืองด้วย' },
      { speaker: 'Narrator', text: "The festival starts at ten in the morning and runs until eight in the evening.", thai: 'เทศกาลเริ่มเวลาสิบโมงเช้าและจัดไปจนถึงสองทุ่ม' },
      { speaker: 'Narrator', text: "Organizers expect more than fifty food stalls from around the region.", thai: 'ผู้จัดงานคาดว่าจะมีร้านอาหารมากกว่าห้าสิบร้านจากทั่วภูมิภาค' },
      { speaker: 'Narrator', text: "That is all for now. We will be back with more news at noon. Have a wonderful day.", thai: 'สรุปข่าวเพียงเท่านี้ พบกับข่าวเพิ่มเติมช่วงเที่ยงวัน ขอให้เป็นวันที่ดีนะคะ' }
    ],
    questions: [
      { id: 'ls3-q1', type: 'multiple-choice', prompt: 'What is the high temperature for today?', options: ['Twenty-two degrees', 'Twenty-eight degrees', 'Thirty-two degrees', 'Thirty-six degrees'], correctIndex: 2, explanation: 'ผู้ประกาศบอกว่า "a high of thirty-two degrees" คือสูงสุดสามสิบสององศา' },
      { id: 'ls3-q2', type: 'multiple-choice', prompt: 'When will the city library reopen?', options: ['This Saturday', 'This Sunday', 'Next month', 'Today'], correctIndex: 0, explanation: 'ข่าวบอกว่า "the city library will reopen this Saturday" คือวันเสาร์นี้' },
      { id: 'ls3-q3', type: 'multiple-choice', prompt: 'Where will the food festival take place?', options: ['At the library', 'In the central park', 'At the city hall', 'On the main street'], correctIndex: 1, explanation: 'ข่าวบอกว่า "a food festival will take place in the central park" คือที่สวนสาธารณะกลางเมือง' },
      { id: 'ls3-q4', type: 'multiple-choice', prompt: 'What time does the food festival start?', options: ['Eight in the morning', 'Ten in the morning', 'Noon', 'Eight in the evening'], correctIndex: 1, explanation: 'ข่าวบอกว่า "The festival starts at ten in the morning" คือสิบโมงเช้า' }
    ]
  },
  {
    id: 'listening-happy-day-song',
    type: 'Song',
    title: 'A Happy Day',
    thai: 'วันที่แสนสุข',
    emoji: '🎵',
    level: 'A2',
    segments: [
      { speaker: null, text: "The sun is up, the sky is blue,", thai: 'พระอาทิตย์ขึ้นแล้ว ท้องฟ้าเป็นสีฟ้า' },
      { speaker: null, text: "A brand new day for me and you.", thai: 'วันใหม่สำหรับฉันและเธอ' },
      { speaker: null, text: "The birds all sing a happy song,", thai: 'นกทุกตัวร้องเพลงอย่างมีความสุข' },
      { speaker: null, text: "Come on and sing, and sing along.", thai: 'มาสิ มาร้องเพลงด้วยกัน' },
      { speaker: null, text: "We walk outside and feel the breeze,", thai: 'เราเดินออกไปข้างนอกและสัมผัสสายลม' },
      { speaker: null, text: "We say hello to birds and trees.", thai: 'เราทักทายนกและต้นไม้' },
      { speaker: null, text: "A cup of tea, a piece of bread,", thai: 'ชาสักถ้วย ขนมปังสักชิ้น' },
      { speaker: null, text: "A happy day is up ahead.", thai: 'วันที่แสนสุขกำลังรออยู่ข้างหน้า' },
      { speaker: null, text: "So smile with me and clap your hands,", thai: 'ดังนั้นยิ้มกับฉันและปรบมือ' },
      { speaker: null, text: "Today is ours, this is our land.", thai: 'วันนี้เป็นของเรา นี่คือดินแดนของเรา' }
    ],
    questions: [
      { id: 'ls4-q1', type: 'multiple-choice', prompt: 'What color is the sky in the song?', options: ['Grey', 'Blue', 'Red', 'Green'], correctIndex: 1, explanation: 'เพลงร้องว่า "the sky is blue" คือท้องฟ้าเป็นสีฟ้า' },
      { id: 'ls4-q2', type: 'multiple-choice', prompt: 'What do the birds do in the song?', options: ['Fly away', 'Sing a happy song', 'Sleep', 'Eat bread'], correctIndex: 1, explanation: 'เพลงร้องว่า "The birds all sing a happy song" คือนกร้องเพลงอย่างมีความสุข' },
      { id: 'ls4-q3', type: 'multiple-choice', prompt: 'What food and drink are mentioned in the song?', options: ['Coffee and cake', 'Tea and bread', 'Milk and rice', 'Juice and fruit'], correctIndex: 1, explanation: 'เพลงร้องว่า "A cup of tea, a piece of bread" คือชาและขนมปัง' },
      { id: 'ls4-q4', type: 'multiple-choice', prompt: 'What does the singer ask you to do near the end?', options: ['Run and jump', 'Smile and clap your hands', 'Close your eyes', 'Go to sleep'], correctIndex: 1, explanation: 'เพลงร้องว่า "smile with me and clap your hands" คือยิ้มและปรบมือ' }
    ]
  },
  {
    id: 'listening-my-morning-routine',
    type: 'Monologue',
    title: 'My Morning Routine',
    thai: 'กิจวัตรตอนเช้าของฉัน',
    emoji: '🗣️',
    level: 'A2',
    segments: [
      { speaker: 'Speaker', text: "Hi, I'm Maya, and I want to tell you about my morning routine.", thai: 'สวัสดีค่ะ ฉันชื่อมายา ฉันอยากเล่าเกี่ยวกับกิจวัตรตอนเช้าของฉัน' },
      { speaker: 'Speaker', text: "I usually wake up at six thirty, before my alarm rings.", thai: 'ปกติฉันตื่นตอนหกโมงครึ่ง ก่อนที่นาฬิกาปลุกจะดัง' },
      { speaker: 'Speaker', text: "The first thing I do is drink a big glass of water.", thai: 'สิ่งแรกที่ฉันทำคือดื่มน้ำหนึ่งแก้วใหญ่' },
      { speaker: 'Speaker', text: "Then I open the window and do some light stretching for ten minutes.", thai: 'จากนั้นฉันเปิดหน้าต่างและยืดเส้นเบาๆ สิบนาที' },
      { speaker: 'Speaker', text: "After that, I take a warm shower and get dressed for work.", thai: 'หลังจากนั้นฉันอาบน้ำอุ่นและแต่งตัวไปทำงาน' },
      { speaker: 'Speaker', text: "For breakfast, I love eating eggs with toast and a cup of coffee.", thai: 'มื้อเช้า ฉันชอบกินไข่กับขนมปังปิ้งและกาแฟหนึ่งถ้วย' },
      { speaker: 'Speaker', text: "While I eat, I read the news on my phone for a few minutes.", thai: 'ระหว่างกิน ฉันอ่านข่าวบนโทรศัพท์สักสองสามนาที' },
      { speaker: 'Speaker', text: "At seven forty-five, I leave home and walk to the bus stop.", thai: 'เวลาเจ็ดโมงสี่สิบห้า ฉันออกจากบ้านและเดินไปป้ายรถเมล์' },
      { speaker: 'Speaker', text: "I really enjoy my quiet mornings, because they help me feel ready for the day.", thai: 'ฉันชอบตอนเช้าที่เงียบสงบมาก เพราะมันช่วยให้ฉันรู้สึกพร้อมสำหรับวันใหม่' }
    ],
    questions: [
      { id: 'ls5-q1', type: 'multiple-choice', prompt: 'What time does Maya usually wake up?', options: ['Six o\'clock', 'Six thirty', 'Seven o\'clock', 'Seven forty-five'], correctIndex: 1, explanation: 'มายาบอกว่า "I usually wake up at six thirty" คือหกโมงครึ่ง' },
      { id: 'ls5-q2', type: 'multiple-choice', prompt: 'What is the first thing Maya does in the morning?', options: ['Takes a shower', 'Drinks a glass of water', 'Reads the news', 'Eats breakfast'], correctIndex: 1, explanation: 'มายาบอกว่า "The first thing I do is drink a big glass of water" คือดื่มน้ำ' },
      { id: 'ls5-q3', type: 'multiple-choice', prompt: 'What does Maya eat for breakfast?', options: ['Rice and soup', 'Eggs with toast', 'Fruit and yogurt', 'A sandwich'], correctIndex: 1, explanation: 'มายาบอกว่า "eating eggs with toast" คือไข่กับขนมปังปิ้ง' },
      { id: 'ls5-q4', type: 'multiple-choice', prompt: 'How does Maya get to the bus stop?', options: ['She drives', 'She walks', 'She rides a bike', 'She takes a taxi'], correctIndex: 1, explanation: 'มายาบอกว่า "walk to the bus stop" คือเดินไปป้ายรถเมล์' }
    ]
  }
];
