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
  },
  {
    id: 'listening-at-the-bakery',
    type: 'Conversation',
    title: 'At the Bakery',
    thai: 'ที่ร้านเบเกอรี่',
    emoji: '🎧',
    level: 'A1',
    segments: [
      { speaker: 'Baker', text: 'Good morning! How can I help you?', thai: 'สวัสดีตอนเช้าค่ะ ให้ช่วยอะไรดีคะ' },
      { speaker: 'Customer', text: 'Hi. I want two pieces of bread, please.', thai: 'สวัสดีครับ ผมอยากได้ขนมปังสองชิ้นครับ' },
      { speaker: 'Baker', text: 'Okay. White bread or brown bread?', thai: 'ได้ค่ะ ขนมปังขาวหรือขนมปังโฮลวีตคะ' },
      { speaker: 'Customer', text: 'White bread, please.', thai: 'ขนมปังขาวครับ' },
      { speaker: 'Baker', text: 'Anything else?', thai: 'รับอะไรเพิ่มไหมคะ' },
      { speaker: 'Customer', text: 'Yes, one small cake, too.', thai: 'ครับ เค้กเล็กหนึ่งชิ้นด้วยครับ' },
      { speaker: 'Baker', text: 'That is five dollars.', thai: 'ทั้งหมดห้าดอลลาร์ค่ะ' },
      { speaker: 'Customer', text: 'Here you are. Thank you!', thai: 'นี่ครับ ขอบคุณครับ' }
    ],
    questions: [
      { id: 'ls6-q1', type: 'multiple-choice', prompt: 'How many pieces of bread does the customer want?', options: ['One', 'Two', 'Three', 'Four'], correctIndex: 1, explanation: 'ลูกค้าพูดว่า "two pieces of bread" คือขนมปังสองชิ้น' },
      { id: 'ls6-q2', type: 'multiple-choice', prompt: 'Which bread does the customer choose?', options: ['Brown bread', 'Black bread', 'White bread', 'No bread'], correctIndex: 2, explanation: 'ลูกค้าเลือก "white bread" คือขนมปังขาว' },
      { id: 'ls6-q3', type: 'multiple-choice', prompt: 'What else does the customer buy?', options: ['A small cake', 'A big cake', 'A drink', 'Nothing'], correctIndex: 0, explanation: 'ลูกค้าขอ "one small cake" คือเค้กเล็กหนึ่งชิ้น' },
      { id: 'ls6-q4', type: 'multiple-choice', prompt: 'How much does it cost?', options: ['Two dollars', 'Three dollars', 'Four dollars', 'Five dollars'], correctIndex: 3, explanation: 'คนขายบอกว่า "five dollars" คือห้าดอลลาร์' }
    ]
  },
  {
    id: 'listening-morning-habits',
    type: 'Monologue',
    title: 'My Morning Habits',
    thai: 'กิจวัตรตอนเช้าของฉัน',
    emoji: '🗣️',
    level: 'A2',
    segments: [
      { speaker: 'Speaker', text: 'I want to tell you about my morning routine.', thai: 'ฉันอยากเล่าเกี่ยวกับกิจวัตรตอนเช้าของฉัน' },
      { speaker: 'Speaker', text: "I usually wake up at six o'clock.", thai: 'ฉันมักตื่นนอนตอนหกโมงเช้า' },
      { speaker: 'Speaker', text: 'First, I drink a glass of water and wash my face.', thai: 'อย่างแรก ฉันดื่มน้ำหนึ่งแก้วและล้างหน้า' },
      { speaker: 'Speaker', text: 'Then I go for a short run in the park near my house.', thai: 'จากนั้นฉันไปวิ่งสั้นๆ ที่สวนใกล้บ้าน' },
      { speaker: 'Speaker', text: 'After that, I take a shower and get dressed.', thai: 'หลังจากนั้น ฉันอาบน้ำและแต่งตัว' },
      { speaker: 'Speaker', text: 'For breakfast, I like eggs, toast, and a cup of coffee.', thai: 'มื้อเช้าฉันชอบไข่ ขนมปังปิ้ง และกาแฟหนึ่งถ้วย' },
      { speaker: 'Speaker', text: 'I leave home at eight and take the bus to work.', thai: 'ฉันออกจากบ้านตอนแปดโมงและนั่งรถบัสไปทำงาน' },
      { speaker: 'Speaker', text: 'The bus ride takes about thirty minutes.', thai: 'การนั่งรถบัสใช้เวลาประมาณสามสิบนาที' },
      { speaker: 'Speaker', text: 'I really enjoy my quiet mornings before a busy day.', thai: 'ฉันชอบตอนเช้าที่เงียบสงบก่อนวันที่ยุ่งมาก' }
    ],
    questions: [
      { id: 'ls7-q1', type: 'multiple-choice', prompt: 'What time does the speaker wake up?', options: ["Five o'clock", "Six o'clock", "Seven o'clock", "Eight o'clock"], correctIndex: 1, explanation: "ผู้พูดบอกว่าตื่น \"at six o'clock\" คือหกโมงเช้า" },
      { id: 'ls7-q2', type: 'multiple-choice', prompt: 'Where does the speaker go for a run?', options: ['On the beach', 'At the gym', 'In the park', 'On the street'], correctIndex: 2, explanation: 'ผู้พูดไปวิ่ง "in the park" คือที่สวนสาธารณะ' },
      { id: 'ls7-q3', type: 'multiple-choice', prompt: 'What does the speaker drink at breakfast?', options: ['Tea', 'Juice', 'Milk', 'Coffee'], correctIndex: 3, explanation: 'มื้อเช้ามี "a cup of coffee" คือกาแฟ' },
      { id: 'ls7-q4', type: 'multiple-choice', prompt: 'How long is the bus ride?', options: ['About thirty minutes', 'About ten minutes', 'About one hour', 'About fifteen minutes'], correctIndex: 0, explanation: 'ผู้พูดบอกว่า "about thirty minutes" คือประมาณสามสิบนาที' }
    ]
  },
  {
    id: 'listening-planning-a-weekend-trip',
    type: 'Conversation',
    title: 'Planning a Weekend Trip',
    thai: 'วางแผนทริปสุดสัปดาห์',
    emoji: '🎧',
    level: 'A2',
    segments: [
      { speaker: 'Anna', text: 'Do you have any plans for this weekend?', thai: 'สุดสัปดาห์นี้เธอมีแผนอะไรไหม' },
      { speaker: 'Ben', text: 'Not yet. Do you want to do something together?', thai: 'ยังเลย เธออยากทำอะไรด้วยกันไหม' },
      { speaker: 'Anna', text: 'Yes! How about a short trip to the mountains?', thai: 'อยากสิ ไปเที่ยวภูเขาสั้นๆ เป็นไง' },
      { speaker: 'Ben', text: 'That sounds great. When should we leave?', thai: 'ฟังดูดีมาก เราควรออกเดินทางตอนไหนดี' },
      { speaker: 'Anna', text: "Let's leave on Saturday morning and come back Sunday.", thai: 'ออกเดินทางเช้าวันเสาร์แล้วกลับวันอาทิตย์ดีกว่า' },
      { speaker: 'Ben', text: 'Good idea. Should we drive or take the train?', thai: 'ความคิดดีนะ เราจะขับรถหรือนั่งรถไฟดี' },
      { speaker: 'Anna', text: "Let's take the train. It's cheaper and more relaxing.", thai: 'นั่งรถไฟดีกว่า ถูกกว่าและผ่อนคลายกว่า' },
      { speaker: 'Ben', text: 'Perfect. I will book two tickets tonight.', thai: 'เยี่ยม ฉันจะจองตั๋วสองใบคืนนี้' },
      { speaker: 'Anna', text: "Don't forget to bring a warm jacket. It's cold there.", thai: 'อย่าลืมเอาแจ็คเก็ตอุ่นๆ ไปด้วยนะ ที่นั่นอากาศหนาว' },
      { speaker: 'Ben', text: "Thanks for the reminder. I can't wait!", thai: 'ขอบใจที่เตือนนะ ฉันรอไม่ไหวแล้ว' }
    ],
    questions: [
      { id: 'ls8-q1', type: 'multiple-choice', prompt: 'Where do they want to go?', options: ['To the beach', 'To the mountains', 'To the city', 'To the lake'], correctIndex: 1, explanation: 'แอนนาเสนอ "a short trip to the mountains" คือไปเที่ยวภูเขา' },
      { id: 'ls8-q2', type: 'multiple-choice', prompt: 'When will they leave?', options: ['Friday night', 'Sunday morning', 'Saturday morning', 'Monday morning'], correctIndex: 2, explanation: 'พวกเขาจะออกเดินทาง "on Saturday morning" คือเช้าวันเสาร์' },
      { id: 'ls8-q3', type: 'multiple-choice', prompt: 'How will they travel?', options: ['By train', 'By car', 'By bus', 'By plane'], correctIndex: 0, explanation: 'พวกเขาตัดสินใจ "take the train" คือนั่งรถไฟ' },
      { id: 'ls8-q4', type: 'multiple-choice', prompt: 'What does Anna tell Ben to bring?', options: ['An umbrella', 'A camera', 'Sunglasses', 'A warm jacket'], correctIndex: 3, explanation: 'แอนนาบอกว่าอย่าลืม "a warm jacket" เพราะที่นั่นหนาว' }
    ]
  },
  {
    id: 'listening-the-power-of-good-sleep',
    type: 'Podcast',
    title: 'The Power of Good Sleep',
    thai: 'พลังของการนอนหลับที่ดี',
    emoji: '🎙️',
    level: 'B1',
    segments: [
      { speaker: 'Host', text: 'Welcome back to Healthy Habits, the podcast about small changes that improve your life.', thai: 'ยินดีต้อนรับกลับสู่ Healthy Habits พอดแคสต์เกี่ยวกับการเปลี่ยนแปลงเล็กๆ ที่ช่วยพัฒนาชีวิตของคุณ' },
      { speaker: 'Host', text: 'Today, I want to talk about something we all do but often ignore: sleep.', thai: 'วันนี้ฉันอยากพูดถึงสิ่งที่เราทุกคนทำแต่มักมองข้าม นั่นคือการนอน' },
      { speaker: 'Host', text: 'Many people think they can survive on just four or five hours a night.', thai: 'หลายคนคิดว่าพวกเขาอยู่ได้ด้วยการนอนแค่สี่หรือห้าชั่วโมงต่อคืน' },
      { speaker: 'Host', text: 'However, most adults actually need between seven and nine hours to feel their best.', thai: 'อย่างไรก็ตาม ผู้ใหญ่ส่วนใหญ่จริงๆ แล้วต้องการนอนเจ็ดถึงเก้าชั่วโมงเพื่อให้รู้สึกดีที่สุด' },
      { speaker: 'Host', text: 'Good sleep improves your memory, your mood, and even your ability to make decisions.', thai: 'การนอนที่ดีช่วยพัฒนาความจำ อารมณ์ และแม้กระทั่งความสามารถในการตัดสินใจ' },
      { speaker: 'Host', text: 'One simple tip is to keep your bedroom dark, quiet, and a little cool.', thai: 'เคล็ดลับง่ายๆ อย่างหนึ่งคือทำให้ห้องนอนของคุณมืด เงียบ และเย็นเล็กน้อย' },
      { speaker: 'Host', text: 'Another tip is to avoid looking at your phone for an hour before bed.', thai: 'อีกเคล็ดลับหนึ่งคือหลีกเลี่ยงการดูโทรศัพท์เป็นเวลาหนึ่งชั่วโมงก่อนนอน' },
      { speaker: 'Host', text: 'Try one of these ideas this week and notice how you feel in the morning.', thai: 'ลองใช้ไอเดียเหล่านี้สักข้อหนึ่งในสัปดาห์นี้ แล้วสังเกตว่าคุณรู้สึกอย่างไรในตอนเช้า' },
      { speaker: 'Host', text: "That's all for today. Thanks for listening, and sleep well.", thai: 'วันนี้ก็มีเท่านี้ ขอบคุณที่รับฟัง และหลับฝันดีนะ' }
    ],
    questions: [
      { id: 'ls9-q1', type: 'multiple-choice', prompt: 'How many hours of sleep do most adults need?', options: ['Four or five hours', 'Six or seven hours', 'Seven to nine hours', 'Ten to twelve hours'], correctIndex: 2, explanation: 'พิธีกรบอกว่าผู้ใหญ่ต้องการ "between seven and nine hours" คือเจ็ดถึงเก้าชั่วโมง' },
      { id: 'ls9-q2', type: 'multiple-choice', prompt: 'What does good sleep improve, according to the host?', options: ['Memory, mood, and decisions', 'Height and weight', 'Eyesight only', 'Cooking skills'], correctIndex: 0, explanation: 'พิธีกรบอกว่าการนอนที่ดีช่วยเรื่อง "memory, your mood, and your ability to make decisions"' },
      { id: 'ls9-q3', type: 'multiple-choice', prompt: 'How should the bedroom be?', options: ['Bright and warm', 'Dark, quiet, and cool', 'Loud and busy', 'Hot and sunny'], correctIndex: 1, explanation: 'พิธีกรแนะนำให้ห้องนอน "dark, quiet, and a little cool"' },
      { id: 'ls9-q4', type: 'multiple-choice', prompt: 'What should you avoid before bed?', options: ['Drinking water', 'Reading a book', 'Turning off the lights', 'Looking at your phone'], correctIndex: 3, explanation: 'พิธีกรแนะนำให้เลี่ยง "looking at your phone" หนึ่งชั่วโมงก่อนนอน' }
    ]
  },
  {
    id: 'listening-evening-news-bulletin',
    type: 'News',
    title: 'Evening News Bulletin',
    thai: 'ข่าวภาคค่ำ',
    emoji: '📻',
    level: 'B1',
    segments: [
      { speaker: 'Narrator', text: "Good evening, and welcome to the seven o'clock news.", thai: 'สวัสดีตอนค่ำ และยินดีต้อนรับสู่ข่าวเวลาหนึ่งทุ่ม' },
      { speaker: 'Narrator', text: 'Our top story tonight: the city council has approved a new plan to plant ten thousand trees this year.', thai: 'ข่าวเด่นคืนนี้ สภาเมืองได้อนุมัติแผนใหม่ในการปลูกต้นไม้หนึ่งหมื่นต้นในปีนี้' },
      { speaker: 'Narrator', text: 'Officials say the project will make the air cleaner and give people more green spaces.', thai: 'เจ้าหน้าที่กล่าวว่าโครงการนี้จะทำให้อากาศสะอาดขึ้นและมอบพื้นที่สีเขียวให้ประชาชนมากขึ้น' },
      { speaker: 'Narrator', text: 'In other news, heavy rain is expected across the region this weekend.', thai: 'ข่าวอื่นๆ คาดว่าจะมีฝนตกหนักทั่วภูมิภาคในสุดสัปดาห์นี้' },
      { speaker: 'Narrator', text: 'Drivers are advised to slow down and turn on their headlights for safety.', thai: 'ขอแนะนำให้ผู้ขับขี่ลดความเร็วและเปิดไฟหน้าเพื่อความปลอดภัย' },
      { speaker: 'Narrator', text: "In sports, the local football team won last night's match by two goals to one.", thai: 'ด้านกีฬา ทีมฟุตบอลท้องถิ่นชนะการแข่งขันเมื่อคืนนี้ด้วยสกอร์สองต่อหนึ่ง' },
      { speaker: 'Narrator', text: 'Fans celebrated in the streets late into the evening.', thai: 'แฟนบอลเฉลิมฉลองกันตามท้องถนนจนดึกดื่น' },
      { speaker: 'Narrator', text: 'And finally, a new library will open downtown next month.', thai: 'และสุดท้าย ห้องสมุดแห่งใหม่จะเปิดในย่านใจกลางเมืองในเดือนหน้า' },
      { speaker: 'Narrator', text: "That's all for now. We'll be back with more updates at nine.", thai: 'สำหรับตอนนี้ก็มีเท่านี้ เราจะกลับมาพร้อมข่าวเพิ่มเติมตอนสามทุ่ม' }
    ],
    questions: [
      { id: 'ls10-q1', type: 'multiple-choice', prompt: 'What is the top story?', options: ['A new library opening', 'A plan to plant trees', 'A football match', 'Heavy rain'], correctIndex: 1, explanation: 'ข่าวเด่นคือแผน "plant ten thousand trees" คือการปลูกต้นไม้หนึ่งหมื่นต้น' },
      { id: 'ls10-q2', type: 'multiple-choice', prompt: 'What weather is expected this weekend?', options: ['Heavy rain', 'Strong sunshine', 'Heavy snow', 'Strong wind'], correctIndex: 0, explanation: 'ข่าวบอกว่าคาดว่าจะมี "heavy rain" คือฝนตกหนัก' },
      { id: 'ls10-q3', type: 'multiple-choice', prompt: 'What was the score of the football match?', options: ['One to one', 'Three to two', 'Two goals to one', 'Zero to two'], correctIndex: 2, explanation: 'ทีมท้องถิ่นชนะ "by two goals to one" คือสองต่อหนึ่ง' },
      { id: 'ls10-q4', type: 'multiple-choice', prompt: 'When will the news return with more updates?', options: ['At seven', 'At eight', 'At ten', 'At nine'], correctIndex: 3, explanation: 'ผู้ประกาศบอกว่าจะกลับมา "at nine" คือตอนสามทุ่ม' }
    ]
  },
  {
    id: 'listening-first-day-abroad',
    type: 'Monologue',
    title: 'My First Day Abroad',
    thai: 'วันแรกของฉันในต่างแดน',
    emoji: '🗣️',
    level: 'B1',
    segments: [
      { speaker: 'Speaker', text: 'I still remember my very first day living in another country.', thai: 'ฉันยังจำวันแรกที่ได้ไปใช้ชีวิตในอีกประเทศหนึ่งได้เลย' },
      { speaker: 'Speaker', text: 'I arrived at the airport late at night, and I was really nervous.', thai: 'ฉันมาถึงสนามบินตอนดึกมาก และฉันก็รู้สึกประหม่ามากจริง ๆ' },
      { speaker: 'Speaker', text: 'My English was not very good, so I was afraid to talk to anyone.', thai: 'ภาษาอังกฤษของฉันยังไม่ค่อยดี ฉันเลยกลัวที่จะพูดกับใคร' },
      { speaker: 'Speaker', text: 'I could not find the bus to the city, and I felt completely lost.', thai: 'ฉันหารถบัสเข้าเมืองไม่เจอ และรู้สึกหลงทางไปหมด' },
      { speaker: 'Speaker', text: 'Then a kind old man saw me and asked if I needed help.', thai: 'จากนั้นชายชราใจดีคนหนึ่งเห็นฉัน และถามว่าฉันต้องการความช่วยเหลือไหม' },
      { speaker: 'Speaker', text: 'He walked with me to the right bus stop and even paid for my ticket.', thai: 'เขาเดินไปส่งฉันที่ป้ายรถบัสที่ถูกต้อง และยังจ่ายค่าตั๋วให้ฉันด้วย' },
      { speaker: 'Speaker', text: 'I wanted to give him money back, but he just smiled and said, welcome.', thai: 'ฉันอยากคืนเงินให้เขา แต่เขาแค่ยิ้มและพูดว่า ยินดีต้อนรับ' },
      { speaker: 'Speaker', text: 'That small act of kindness made me feel safe in a strange place.', thai: 'การกระทำเล็ก ๆ ที่มีน้ำใจนั้นทำให้ฉันรู้สึกปลอดภัยในที่แปลกหน้า' },
      { speaker: 'Speaker', text: 'Now, whenever I see a lost traveler, I try to help them too.', thai: 'ตอนนี้ เมื่อไหร่ก็ตามที่ฉันเห็นนักเดินทางที่หลงทาง ฉันก็พยายามช่วยพวกเขาเหมือนกัน' }
    ],
    questions: [
      { id: 'ls11-q1', type: 'multiple-choice', prompt: 'When did the speaker arrive at the airport?', options: ['Early in the morning', 'Late at night', 'In the afternoon', 'At noon'], correctIndex: 1, explanation: 'ผู้พูดบอกว่ามาถึงสนามบินตอนดึกมาก' },
      { id: 'ls11-q2', type: 'multiple-choice', prompt: 'Why was the speaker afraid to talk to people?', options: ['Their English was not good', 'They were too tired', 'They had no money', 'They lost their phone'], correctIndex: 0, explanation: 'ผู้พูดกลัวเพราะภาษาอังกฤษยังไม่ค่อยดี' },
      { id: 'ls11-q3', type: 'multiple-choice', prompt: 'What did the old man do for the speaker?', options: ['Gave them a place to sleep', 'Drove them home', 'Helped them find the bus and paid for the ticket', 'Called their family'], correctIndex: 2, explanation: 'ชายชราพาไปที่ป้ายรถบัสและจ่ายค่าตั๋วให้' },
      { id: 'ls11-q4', type: 'multiple-choice', prompt: 'How did the experience change the speaker?', options: ['They never traveled again', 'They now try to help lost travelers', 'They stopped trusting strangers', 'They moved back home'], correctIndex: 1, explanation: 'ตอนนี้ผู้พูดพยายามช่วยนักเดินทางที่หลงทางเช่นกัน' }
    ]
  },
  {
    id: 'listening-power-of-boredom',
    type: 'Podcast',
    title: 'The Hidden Power of Boredom',
    thai: 'พลังที่ซ่อนอยู่ของความเบื่อ',
    emoji: '🎙️',
    level: 'B2',
    segments: [
      { speaker: 'Host', text: 'Welcome back to the show. Today I want to talk about something we all try to avoid: boredom.', thai: 'ยินดีต้อนรับกลับสู่รายการ วันนี้ฉันอยากพูดถึงสิ่งที่เราทุกคนพยายามหลีกเลี่ยง นั่นคือความเบื่อ' },
      { speaker: 'Host', text: 'The moment we feel bored, most of us instantly reach for our phones.', thai: 'ทันทีที่เรารู้สึกเบื่อ พวกเราส่วนใหญ่ก็คว้าโทรศัพท์ขึ้นมาทันที' },
      { speaker: 'Host', text: 'But researchers have started to argue that boredom is actually good for us.', thai: 'แต่นักวิจัยเริ่มโต้แย้งว่าความเบื่อจริง ๆ แล้วดีต่อเรา' },
      { speaker: 'Host', text: 'When your mind has nothing to focus on, it begins to wander freely.', thai: 'เมื่อจิตใจของคุณไม่มีอะไรให้จดจ่อ มันจะเริ่มล่องลอยอย่างอิสระ' },
      { speaker: 'Host', text: 'And that wandering is exactly where creativity often comes from.', thai: 'และการล่องลอยนั้นเองมักเป็นที่มาของความคิดสร้างสรรค์' },
      { speaker: 'Host', text: 'Many great ideas were born not at a desk, but during a long, dull walk.', thai: 'ความคิดที่ยอดเยี่ยมมากมายไม่ได้เกิดขึ้นที่โต๊ะทำงาน แต่เกิดระหว่างการเดินที่ยาวนานและน่าเบื่อ' },
      { speaker: 'Host', text: 'The problem is that we no longer allow ourselves to be bored at all.', thai: 'ปัญหาคือเราไม่ยอมปล่อยให้ตัวเองรู้สึกเบื่อเลยแม้แต่น้อย' },
      { speaker: 'Host', text: 'Every empty moment is immediately filled with videos, messages, or games.', thai: 'ทุกช่วงเวลาว่างถูกเติมเต็มด้วยวิดีโอ ข้อความ หรือเกมทันที' },
      { speaker: 'Host', text: 'So my challenge for you this week is simple: do nothing for ten minutes a day.', thai: 'ดังนั้นความท้าทายของฉันสำหรับคุณในสัปดาห์นี้ง่ายมาก คือไม่ทำอะไรเลยวันละสิบนาที' },
      { speaker: 'Host', text: 'You might be surprised by the ideas that quietly appear when you stop distracting yourself.', thai: 'คุณอาจแปลกใจกับความคิดที่ค่อย ๆ ปรากฏขึ้นเมื่อคุณหยุดทำให้ตัวเองเสียสมาธิ' }
    ],
    questions: [
      { id: 'ls12-q1', type: 'multiple-choice', prompt: 'What do most people do when they feel bored, according to the host?', options: ['Go for a walk', 'Reach for their phones', 'Talk to a friend', 'Take a nap'], correctIndex: 1, explanation: 'ผู้ดำเนินรายการบอกว่าคนส่วนใหญ่คว้าโทรศัพท์ขึ้นมาทันที' },
      { id: 'ls12-q2', type: 'multiple-choice', prompt: 'Why do researchers say boredom can be good?', options: ['It saves money', 'It improves sleep', 'It lets the mind wander and spark creativity', 'It makes people work faster'], correctIndex: 2, explanation: 'เมื่อจิตใจล่องลอย มักเป็นที่มาของความคิดสร้างสรรค์' },
      { id: 'ls12-q3', type: 'multiple-choice', prompt: 'What does the host suggest is the main problem today?', options: ['We never allow ourselves to be bored', 'We work too many hours', 'We walk too much', 'We sleep too little'], correctIndex: 0, explanation: 'ปัญหาคือเราไม่ยอมปล่อยให้ตัวเองเบื่อเลย เติมเต็มทุกช่วงว่างทันที' },
      { id: 'ls12-q4', type: 'multiple-choice', prompt: 'What can we infer the host values most?', options: ['Constant productivity', 'Buying fewer devices', 'Unfilled quiet time for the mind', 'Exercising daily'], correctIndex: 2, explanation: 'จากทั้งหมด ผู้พูดให้คุณค่ากับเวลาเงียบ ๆ ที่ไม่ถูกเติมเต็มเพื่อให้จิตใจได้พัก' }
    ]
  },
  {
    id: 'listening-marine-biologist-interview',
    type: 'Conversation',
    title: 'An Interview with a Marine Biologist',
    thai: 'บทสัมภาษณ์นักชีววิทยาทางทะเล',
    emoji: '🎧',
    level: 'B2',
    segments: [
      { speaker: 'Interviewer', text: 'Thanks for joining us. Can you tell us what first drew you to the ocean?', thai: 'ขอบคุณที่มาร่วมรายการ คุณช่วยเล่าได้ไหมว่าอะไรดึงดูดคุณสู่ท้องทะเลตั้งแต่แรก' },
      { speaker: 'Biologist', text: 'Honestly, it started with a childhood trip to a tide pool. I was completely fascinated.', thai: 'พูดตามตรง มันเริ่มจากทริปวัยเด็กไปที่แอ่งน้ำริมทะเล ฉันหลงใหลมากเลย' },
      { speaker: 'Interviewer', text: 'And now you study coral reefs. Why are they so important?', thai: 'และตอนนี้คุณศึกษาแนวปะการัง ทำไมมันถึงสำคัญนัก' },
      { speaker: 'Biologist', text: 'Reefs cover a tiny part of the ocean, yet they support around a quarter of all marine species.', thai: 'แนวปะการังครอบคลุมพื้นที่เพียงเล็กน้อยของมหาสมุทร แต่กลับเป็นที่อยู่ของสิ่งมีชีวิตทางทะเลราวหนึ่งในสี่' },
      { speaker: 'Interviewer', text: "That's remarkable. What is the biggest threat they face today?", thai: 'น่าทึ่งมาก แล้วภัยคุกคามที่ใหญ่ที่สุดที่พวกมันเผชิญในตอนนี้คืออะไร' },
      { speaker: 'Biologist', text: 'Rising sea temperatures. When the water gets too warm, corals lose their colour and can die.', thai: 'อุณหภูมิน้ำทะเลที่สูงขึ้น เมื่อน้ำร้อนเกินไป ปะการังจะสูญเสียสีสันและอาจตายได้' },
      { speaker: 'Interviewer', text: 'Is there any hope, or is it too late?', thai: 'ยังพอมีความหวังไหม หรือมันสายเกินไปแล้ว' },
      { speaker: 'Biologist', text: "It's not too late, but we have to act quickly. Some reefs are already recovering where they're protected.", thai: 'มันยังไม่สายเกินไป แต่เราต้องลงมือเร็ว แนวปะการังบางแห่งเริ่มฟื้นตัวแล้วในที่ที่ได้รับการปกป้อง' },
      { speaker: 'Interviewer', text: 'What can ordinary people do to help?', thai: 'คนทั่วไปสามารถทำอะไรเพื่อช่วยได้บ้าง' },
      { speaker: 'Biologist', text: 'Reduce your carbon footprint and support the groups working to protect these areas.', thai: 'ลดการปล่อยคาร์บอนของคุณ และสนับสนุนกลุ่มที่ทำงานปกป้องพื้นที่เหล่านี้' },
      { speaker: 'Interviewer', text: 'Wise words. Thank you for sharing your passion with us today.', thai: 'คำพูดที่ชาญฉลาด ขอบคุณที่แบ่งปันความหลงใหลของคุณกับเราในวันนี้' }
    ],
    questions: [
      { id: 'ls13-q1', type: 'multiple-choice', prompt: "What first sparked the biologist's interest in the ocean?", options: ['A documentary film', 'A childhood trip to a tide pool', 'A university lecture', 'A diving holiday'], correctIndex: 1, explanation: 'ความสนใจเริ่มจากทริปวัยเด็กไปที่แอ่งน้ำริมทะเล' },
      { id: 'ls13-q2', type: 'multiple-choice', prompt: 'Why are coral reefs described as important?', options: ["They produce most of the world's oxygen", 'They support about a quarter of marine species', 'They are the largest ocean feature', 'They cool the whole ocean'], correctIndex: 1, explanation: 'แม้ครอบคลุมพื้นที่น้อย แต่เป็นที่อยู่ของสิ่งมีชีวิตทางทะเลราวหนึ่งในสี่' },
      { id: 'ls13-q3', type: 'multiple-choice', prompt: 'What is described as the biggest threat to reefs?', options: ['Overfishing', 'Plastic waste', 'Rising sea temperatures', 'Loud ships'], correctIndex: 2, explanation: 'ภัยคุกคามที่ใหญ่ที่สุดคืออุณหภูมิน้ำทะเลที่สูงขึ้น' },
      { id: 'ls13-q4', type: 'multiple-choice', prompt: "What is the biologist's overall attitude?", options: ['Hopeless and resigned', 'Cautiously hopeful if we act fast', 'Completely unconcerned', 'Angry at ordinary people'], correctIndex: 1, explanation: 'เธอบอกว่ายังไม่สายเกินไป แต่ต้องลงมือเร็ว จึงมีความหวังอย่างระมัดระวัง' }
    ]
  },
  {
    id: 'listening-attention-economy',
    type: 'Podcast',
    title: 'The Attention Economy',
    thai: 'เศรษฐกิจแห่งความสนใจ',
    emoji: '🎙️',
    level: 'C1',
    segments: [
      { speaker: 'Host', text: 'We tend to assume that the products we use online are free, but that assumption deserves scrutiny.', thai: 'เรามักคิดไปเองว่าผลิตภัณฑ์ที่เราใช้ออนไลน์นั้นฟรี แต่ข้อสันนิษฐานนั้นควรได้รับการตรวจสอบ' },
      { speaker: 'Host', text: 'In reality, if you are not paying for the product, your attention has quietly become the product itself.', thai: 'ในความเป็นจริง หากคุณไม่ได้จ่ายเงินซื้อผลิตภัณฑ์ ความสนใจของคุณก็ได้กลายเป็นผลิตภัณฑ์ไปอย่างเงียบ ๆ เสียเอง' },
      { speaker: 'Host', text: 'Platforms compete not for your money, but for the finite hours of your waking life.', thai: 'แพลตฟอร์มต่าง ๆ ไม่ได้แข่งขันเพื่อเงินของคุณ แต่แข่งขันเพื่อชั่วโมงอันจำกัดในยามที่คุณตื่นอยู่' },
      { speaker: 'Host', text: 'Every notification, every autoplay feature, is meticulously engineered to keep you engaged.', thai: 'ทุกการแจ้งเตือน ทุกฟีเจอร์เล่นอัตโนมัติ ล้วนถูกออกแบบอย่างพิถีพิถันเพื่อให้คุณอยู่ต่อ' },
      { speaker: 'Host', text: 'The underlying logic is straightforward: more engagement translates into more advertising revenue.', thai: 'ตรรกะเบื้องหลังนั้นตรงไปตรงมา คือยิ่งมีการมีส่วนร่วมมากเท่าไร ก็ยิ่งแปรเป็นรายได้จากโฆษณามากเท่านั้น' },
      { speaker: 'Host', text: 'What troubles me is the asymmetry of power in this arrangement.', thai: 'สิ่งที่ทำให้ฉันกังวลคือความไม่สมดุลของอำนาจในข้อตกลงนี้' },
      { speaker: 'Host', text: 'On one side sit teams of engineers with vast data; on the other, a single distracted human being.', thai: 'ฝ่ายหนึ่งคือทีมวิศวกรพร้อมข้อมูลมหาศาล อีกฝ่ายคือมนุษย์เพียงคนเดียวที่วอกแวก' },
      { speaker: 'Host', text: "We shouldn't blame ourselves for lacking willpower against systems designed to override it.", thai: 'เราไม่ควรโทษตัวเองที่ขาดความมุ่งมั่น ในเมื่อระบบถูกออกแบบมาเพื่อเอาชนะความมุ่งมั่นนั้น' },
      { speaker: 'Host', text: 'The solution, I believe, is not merely personal discipline but a demand for better design.', thai: 'ฉันเชื่อว่าทางออกไม่ใช่แค่วินัยส่วนตัว แต่คือการเรียกร้องให้มีการออกแบบที่ดีกว่า' },
      { speaker: 'Host', text: 'Until then, reclaiming our attention is perhaps the most quietly radical act available to us.', thai: 'จนกว่าจะถึงตอนนั้น การทวงคืนความสนใจของเราอาจเป็นการกระทำที่ปฏิวัติเงียบ ๆ ที่สุดเท่าที่เรามี' }
    ],
    questions: [
      { id: 'ls14-q1', type: 'multiple-choice', prompt: 'According to the host, what actually becomes the product on free platforms?', options: ['Your personal data files', 'Your attention', 'Your money', 'Your contacts'], correctIndex: 1, explanation: 'ผู้พูดบอกว่าหากไม่ได้จ่ายเงิน ความสนใจของคุณก็กลายเป็นผลิตภัณฑ์เสียเอง' },
      { id: 'ls14-q2', type: 'multiple-choice', prompt: 'What are platforms really competing for?', options: ['The finite hours of your waking life', 'Your subscription fees', 'Awards and prestige', 'More employees'], correctIndex: 0, explanation: 'แพลตฟอร์มแข่งขันเพื่อชั่วโมงอันจำกัดในยามที่คุณตื่นอยู่' },
      { id: 'ls14-q3', type: 'multiple-choice', prompt: 'Why does the host say we should not simply blame ourselves?', options: ['Because willpower does not exist', 'Because the systems are designed to override willpower', 'Because engineers are careless', 'Because everyone is equally distracted'], correctIndex: 1, explanation: 'ระบบถูกออกแบบมาเพื่อเอาชนะความมุ่งมั่น เราจึงไม่ควรโทษตัวเองเพียงอย่างเดียว' },
      { id: 'ls14-q4', type: 'multiple-choice', prompt: 'What does the host ultimately argue the real solution requires?', options: ['Deleting all apps', 'Only stronger personal discipline', 'A demand for better design, not just self-control', 'Paying for every service'], correctIndex: 2, explanation: 'ผู้พูดเชื่อว่าทางออกไม่ใช่แค่วินัยส่วนตัว แต่คือการเรียกร้องการออกแบบที่ดีกว่า' }
    ]
  },
  {
    id: 'listening-language-and-thought',
    type: 'Monologue',
    title: 'Does Language Shape Thought?',
    thai: 'ภาษากำหนดความคิดหรือไม่',
    emoji: '🗣️',
    level: 'C2',
    segments: [
      { speaker: 'Lecturer', text: 'For over a century, scholars have wrestled with a deceptively simple question: does the language we speak shape the way we think?', thai: 'กว่าหนึ่งศตวรรษที่นักวิชาการได้ขบคิดกับคำถามที่ดูเรียบง่ายอย่างลวงตา นั่นคือ ภาษาที่เราพูดกำหนดวิธีที่เราคิดหรือไม่' },
      { speaker: 'Lecturer', text: 'The strong version of this claim, that language rigidly imprisons cognition, has largely been discredited.', thai: 'ข้ออ้างในรูปแบบเข้มข้นที่ว่าภาษากักขังการรับรู้อย่างตายตัวนั้น ส่วนใหญ่ถูกหักล้างไปแล้ว' },
      { speaker: 'Lecturer', text: 'Yet a subtler proposition has proven remarkably resilient under empirical examination.', thai: 'ทว่าข้อเสนอที่ละเอียดอ่อนกว่ากลับพิสูจน์แล้วว่ายืนหยัดได้อย่างน่าทึ่งภายใต้การตรวจสอบเชิงประจักษ์' },
      { speaker: 'Lecturer', text: 'Consider languages that encode direction not as left and right, but as fixed cardinal points.', thai: 'ลองพิจารณาภาษาที่ระบุทิศทางไม่ใช่ด้วยซ้ายและขวา แต่ด้วยทิศหลักที่ตายตัว' },
      { speaker: 'Lecturer', text: 'Speakers of such languages develop an almost uncanny sense of orientation, tracking north and south instinctively.', thai: 'ผู้พูดภาษาเหล่านั้นพัฒนาสำนึกในการกำหนดทิศทางที่แทบจะเหนือธรรมชาติ โดยรับรู้ทิศเหนือและทิศใต้ได้โดยสัญชาตญาณ' },
      { speaker: 'Lecturer', text: 'This suggests that grammar does not dictate what we can think, but rather what we are habitually compelled to attend to.', thai: 'สิ่งนี้ชี้ให้เห็นว่าไวยากรณ์ไม่ได้กำหนดว่าเราคิดอะไรได้ แต่กำหนดว่าเราถูกบังคับให้ใส่ใจสิ่งใดเป็นนิสัยมากกว่า' },
      { speaker: 'Lecturer', text: 'The distinction is crucial, for it reframes the debate away from constraint and towards habitual attention.', thai: 'ความแตกต่างนี้สำคัญยิ่ง เพราะมันปรับกรอบการถกเถียงให้ห่างจากเรื่องการจำกัด ไปสู่เรื่องความใส่ใจที่เป็นนิสัย' },
      { speaker: 'Lecturer', text: 'Language, then, is less a cage than a lens, quietly foregrounding certain features of experience while relegating others to the periphery.', thai: 'ดังนั้นภาษาจึงไม่ใช่กรงขังเท่ากับเป็นเลนส์ ที่ค่อย ๆ ดึงคุณลักษณะบางอย่างของประสบการณ์มาไว้ข้างหน้า ขณะที่ผลักสิ่งอื่นไปไว้ที่ขอบ' },
      { speaker: 'Lecturer', text: 'To learn a new language, on this view, is not merely to acquire vocabulary, but to inhabit an alternative distribution of attention.', thai: 'ในมุมมองนี้ การเรียนภาษาใหม่จึงไม่ใช่เพียงการได้มาซึ่งคำศัพท์ แต่คือการเข้าไปอยู่ในการกระจายความใส่ใจแบบทางเลือก' },
      { speaker: 'Lecturer', text: 'And perhaps that is the quiet privilege of the multilingual mind: the capacity to see one world through several complementary frames.', thai: 'และบางทีนั่นอาจเป็นอภิสิทธิ์อันเงียบงันของจิตใจที่รู้หลายภาษา นั่นคือความสามารถในการมองโลกใบเดียวผ่านกรอบที่เกื้อหนุนกันหลายกรอบ' }
    ],
    questions: [
      { id: 'ls15-q1', type: 'multiple-choice', prompt: 'What has happened to the "strong version" of the claim?', options: ['It has been fully proven', 'It has largely been discredited', 'It was never tested', 'It is universally accepted'], correctIndex: 1, explanation: 'ข้ออ้างรูปแบบเข้มข้นที่ว่าภาษากักขังการรับรู้อย่างตายตัวถูกหักล้างไปแล้วเป็นส่วนใหญ่' },
      { id: 'ls15-q2', type: 'multiple-choice', prompt: 'What example illustrates the subtler proposition?', options: ['Languages without numbers', 'Languages using cardinal directions instead of left and right', 'Languages with no verbs', 'Languages spoken by very few people'], correctIndex: 1, explanation: 'ตัวอย่างคือภาษาที่ระบุทิศทางด้วยทิศหลักที่ตายตัวแทนซ้ายขวา' },
      { id: 'ls15-q3', type: 'multiple-choice', prompt: 'According to the lecturer, what does grammar mainly influence?', options: ['What we are capable of thinking', 'What we are habitually compelled to attend to', 'How fast we speak', 'How many words we can learn'], correctIndex: 1, explanation: 'ไวยากรณ์ไม่ได้กำหนดว่าคิดอะไรได้ แต่กำหนดว่าเราถูกบังคับให้ใส่ใจสิ่งใดเป็นนิสัย' },
      { id: 'ls15-q4', type: 'multiple-choice', prompt: 'What metaphor does the lecturer prefer for language?', options: ['A cage', 'A weapon', 'A lens', 'A map'], correctIndex: 2, explanation: 'ผู้บรรยายบอกว่าภาษาไม่ใช่กรงขังเท่ากับเป็นเลนส์' }
    ]
  }
];
