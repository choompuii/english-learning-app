export const readingPieces = [
  {
    id: "reading-market-day",
    type: "Story",
    title: "A Day at the Market",
    thai: "วันที่ตลาด",
    emoji: "📖",
    level: "A2",
    minutes: 3,
    paragraphs: [
      "Every Saturday morning, Nong goes to the local market with her mother. They leave the house early, when the air is still cool. The market is only a short walk from their home, so they do not need to take a bus. Nong loves this trip because the market is always full of colour and noise.",
      "When they arrive, the first stall they visit sells fresh fruit. The seller is a friendly old woman who always gives Nong a slice of mango to try. Nong's mother buys apples, bananas, and a big green watermelon. She puts everything into a large basket that she carries on her arm.",
      "Next, they walk to the part of the market where people sell vegetables and fish. The smell of fresh fish is strong, but Nong does not mind. Her mother chooses some tomatoes and a fish for dinner. She talks with the sellers and asks about the price before she pays.",
      "Before they go home, Nong and her mother stop to eat noodles at a small food stall. The soup is hot and delicious. Nong feels happy and full. On the way home, she helps her mother carry the heavy basket. She already looks forward to next Saturday."
    ],
    dialogue: null,
    glossary: [
      { word: "stall", thai: "แผงขายของ", def: "a small shop or table where things are sold" },
      { word: "seller", thai: "คนขาย", def: "a person who sells things" },
      { word: "basket", thai: "ตะกร้า", def: "a container used to carry or hold things" },
      { word: "price", thai: "ราคา", def: "the amount of money you pay for something" },
      { word: "fresh", thai: "สด", def: "recently made or picked, not old" },
      { word: "delicious", thai: "อร่อย", def: "having a very good taste" }
    ],
    summary: "Nong goes to the local market every Saturday morning with her mother. They buy fruit, vegetables, and fish, and eat noodles before walking home.",
    summaryThai: "หนองไปตลาดใกล้บ้านกับแม่ทุกเช้าวันเสาร์ พวกเขาซื้อผลไม้ ผัก และปลา แล้วกินก๋วยเตี๋ยวก่อนเดินกลับบ้าน",
    questions: [
      {
        id: "rd1-q1",
        type: "multiple-choice",
        prompt: "When does Nong go to the market?",
        options: ["Saturday morning", "Sunday evening", "Monday afternoon", "Friday night"],
        correctIndex: 0,
        explanation: "จากย่อหน้าแรก หนองไปตลาดทุกเช้าวันเสาร์"
      },
      {
        id: "rd1-q2",
        type: "multiple-choice",
        prompt: "What does the fruit seller give Nong to try?",
        options: ["A slice of mango", "A banana", "An apple", "A watermelon"],
        correctIndex: 0,
        explanation: "ย่อหน้าที่สองบอกว่าคนขายให้มะม่วงชิ้นหนึ่งลองชิม"
      },
      {
        id: "rd1-q3",
        type: "multiple-choice",
        prompt: "How do Nong and her mother travel to the market?",
        options: ["They walk", "They take a bus", "They drive a car", "They ride bikes"],
        correctIndex: 0,
        explanation: "ตลาดอยู่ใกล้บ้าน จึงเดินไปโดยไม่ต้องขึ้นรถบัส"
      },
      {
        id: "rd1-q4",
        type: "multiple-choice",
        prompt: "What do they eat before going home?",
        options: ["Noodles", "Rice and fish", "Fruit", "Bread"],
        correctIndex: 0,
        explanation: "ย่อหน้าสุดท้ายบอกว่าพวกเขาหยุดกินก๋วยเตี๋ยวก่อนกลับบ้าน"
      }
    ]
  },
  {
    id: "reading-new-city-park",
    type: "News",
    title: "New Park Opens in the City Centre",
    thai: "สวนสาธารณะแห่งใหม่เปิดใจกลางเมือง",
    emoji: "📰",
    level: "B1",
    minutes: 4,
    paragraphs: [
      "A new public park opened last weekend in the centre of the city. The park, which covers nearly ten hectares, was built on land that used to be an empty car park. Thousands of residents visited on the first day to enjoy the open space, and the mayor gave a short speech at the opening ceremony.",
      "The project took two years to complete and cost the city about forty million baht. According to officials, the money paid for new trees, walking paths, a children's playground, and a small lake. Solar-powered lights were also installed so that visitors can use the park safely in the evening.",
      "Local residents have welcomed the new green space. One woman who lives nearby said that she now takes her children to the playground every day after school. Business owners in the area also expect the park to attract more customers to their shops and restaurants.",
      "City officials say the park is part of a larger plan to make the city greener and healthier. They hope to open two more parks in different districts within the next five years. Volunteers will help to plant additional trees during a community event next month."
    ],
    dialogue: null,
    glossary: [
      { word: "resident", thai: "ผู้อยู่อาศัย", def: "a person who lives in a particular place" },
      { word: "ceremony", thai: "พิธี", def: "a formal event held on an important occasion" },
      { word: "official", thai: "เจ้าหน้าที่", def: "a person who holds a position in a government or organization" },
      { word: "install", thai: "ติดตั้ง", def: "to put equipment in place so it is ready to use" },
      { word: "attract", thai: "ดึงดูด", def: "to make people want to come to a place" },
      { word: "volunteer", thai: "อาสาสมัคร", def: "a person who does work without being paid" },
      { word: "district", thai: "เขต", def: "an area of a city or country" }
    ],
    summary: "A new ten-hectare park opened in the city centre last weekend after two years of work. Residents and business owners have welcomed it, and the city plans to open more parks in the coming years.",
    summaryThai: "สวนสาธารณะแห่งใหม่ขนาดสิบเฮกตาร์เปิดใจกลางเมืองเมื่อสุดสัปดาห์ที่ผ่านมา หลังใช้เวลาสร้างสองปี ประชาชนและเจ้าของธุรกิจต่างยินดี และเมืองวางแผนเปิดสวนเพิ่มในอนาคต",
    questions: [
      {
        id: "rd2-q1",
        type: "multiple-choice",
        prompt: "What was on the land before the park was built?",
        options: ["An empty car park", "An old school", "A factory", "A shopping mall"],
        correctIndex: 0,
        explanation: "ย่อหน้าแรกบอกว่าสวนสร้างบนที่ดินที่เคยเป็นลานจอดรถว่าง"
      },
      {
        id: "rd2-q2",
        type: "multiple-choice",
        prompt: "How long did the project take to complete?",
        options: ["Two years", "Six months", "Five years", "Ten years"],
        correctIndex: 0,
        explanation: "ย่อหน้าที่สองระบุว่าโครงการใช้เวลาสองปีจึงเสร็จ"
      },
      {
        id: "rd2-q3",
        type: "multiple-choice",
        prompt: "Why were solar-powered lights installed?",
        options: [
          "So visitors can use the park safely in the evening",
          "To save money on trees",
          "To attract more birds",
          "To power the children's playground"
        ],
        correctIndex: 0,
        explanation: "ย่อหน้าที่สองบอกว่าติดตั้งไฟพลังงานแสงอาทิตย์เพื่อให้ใช้สวนได้อย่างปลอดภัยในตอนเย็น"
      },
      {
        id: "rd2-q4",
        type: "multiple-choice",
        prompt: "What do city officials plan to do in the next five years?",
        options: [
          "Open two more parks in different districts",
          "Close the new park",
          "Build a car park",
          "Raise ticket prices"
        ],
        correctIndex: 0,
        explanation: "ย่อหน้าสุดท้ายบอกว่าเจ้าหน้าที่หวังจะเปิดสวนเพิ่มอีกสองแห่งในห้าปีข้างหน้า"
      }
    ]
  },
  {
    id: "reading-learning-to-cook",
    type: "Blog",
    title: "My First Week Learning to Cook",
    thai: "สัปดาห์แรกของฉันกับการหัดทำอาหาร",
    emoji: "✍️",
    level: "A2",
    minutes: 3,
    paragraphs: [
      "Hi everyone! This week I decided to learn how to cook. For a long time, I only ate food from restaurants or the microwave. But I want to eat healthier food and save some money, so I finally started to cook at home.",
      "On the first day, I made a simple omelette. It was not perfect, but it tasted good! I felt very proud of myself. My kitchen was a little messy, and I burned my first try, but the second one was much better. Now I know that practice really helps.",
      "During the week, I also learned to cook rice and a easy vegetable soup. I watched some short videos online and followed the steps slowly. My friend gave me a helpful tip: read the whole recipe before you begin. That way, you know what to do next.",
      "Cooking is more fun than I thought. I still make mistakes, but I am getting better every day. Next week, I want to try to make fried rice with chicken. If you are thinking about learning to cook, my advice is simple: just start, and do not be afraid of small mistakes!"
    ],
    dialogue: null,
    glossary: [
      { word: "healthier", thai: "ดีต่อสุขภาพมากขึ้น", def: "better for your body" },
      { word: "omelette", thai: "ไข่เจียว", def: "a dish made from beaten eggs cooked in a pan" },
      { word: "messy", thai: "รกเลอะเทอะ", def: "dirty or not tidy" },
      { word: "recipe", thai: "สูตรอาหาร", def: "a set of instructions for cooking a dish" },
      { word: "practice", thai: "การฝึกฝน", def: "doing something many times to get better at it" },
      { word: "advice", thai: "คำแนะนำ", def: "an idea about what someone should do" }
    ],
    summary: "The writer describes their first week of learning to cook at home. They made an omelette, rice, and soup, learned from mistakes, and now enjoy cooking.",
    summaryThai: "ผู้เขียนเล่าถึงสัปดาห์แรกของการหัดทำอาหารที่บ้าน ทำไข่เจียว ข้าว และซุป เรียนรู้จากความผิดพลาด และตอนนี้สนุกกับการทำอาหาร",
    questions: [
      {
        id: "rd3-q1",
        type: "multiple-choice",
        prompt: "Why did the writer decide to learn to cook?",
        options: [
          "To eat healthier food and save money",
          "To open a restaurant",
          "To win a cooking contest",
          "To teach a class"
        ],
        correctIndex: 0,
        explanation: "ย่อหน้าแรกบอกว่าผู้เขียนอยากกินอาหารที่ดีต่อสุขภาพและประหยัดเงิน"
      },
      {
        id: "rd3-q2",
        type: "multiple-choice",
        prompt: "What did the writer cook on the first day?",
        options: ["An omelette", "Fried rice", "Vegetable soup", "Chicken"],
        correctIndex: 0,
        explanation: "ย่อหน้าที่สองบอกว่าวันแรกทำไข่เจียว"
      },
      {
        id: "rd3-q3",
        type: "multiple-choice",
        prompt: "What tip did the writer's friend give?",
        options: [
          "Read the whole recipe before you begin",
          "Always use the microwave",
          "Cook only at night",
          "Never watch videos"
        ],
        correctIndex: 0,
        explanation: "ย่อหน้าที่สามบอกว่าเพื่อนแนะนำให้อ่านสูตรอาหารทั้งหมดก่อนเริ่ม"
      },
      {
        id: "rd3-q4",
        type: "multiple-choice",
        prompt: "What does the writer want to cook next week?",
        options: [
          "Fried rice with chicken",
          "An omelette",
          "Vegetable soup",
          "Plain rice"
        ],
        correctIndex: 0,
        explanation: "ย่อหน้าสุดท้ายบอกว่าสัปดาห์หน้าอยากลองทำข้าวผัดกับไก่"
      }
    ]
  },
  {
    id: "reading-ordering-food",
    type: "Conversation",
    title: "Ordering Food at a Cafe",
    thai: "การสั่งอาหารที่ร้านกาแฟ",
    emoji: "💬",
    level: "A2",
    minutes: 2,
    paragraphs: [],
    dialogue: [
      { speaker: "Waiter", text: "Good afternoon! Welcome to Sunny Cafe. Are you ready to order?" },
      { speaker: "Anna", text: "Yes, I think so. Can I see the menu again, please?" },
      { speaker: "Waiter", text: "Of course. Here you are. Today our special is chicken sandwich with a small salad." },
      { speaker: "Anna", text: "That sounds good. I would like the chicken sandwich, please." },
      { speaker: "Waiter", text: "Great choice. Would you like anything to drink?" },
      { speaker: "Anna", text: "Yes, can I have a glass of orange juice?" },
      { speaker: "Waiter", text: "Sure. Would you like the juice with ice?" },
      { speaker: "Anna", text: "No ice, thank you. How much is the sandwich?" },
      { speaker: "Waiter", text: "The sandwich is one hundred baht, and the juice is fifty baht." },
      { speaker: "Anna", text: "Okay, that is fine. Can I pay by card?" },
      { speaker: "Waiter", text: "Yes, we accept cards. Your food will be ready in about ten minutes." },
      { speaker: "Anna", text: "Perfect. Thank you very much!" }
    ],
    glossary: [
      { word: "order", thai: "สั่ง", def: "to ask for food or drink in a restaurant" },
      { word: "menu", thai: "เมนู", def: "a list of the food and drinks a restaurant offers" },
      { word: "special", thai: "เมนูพิเศษ", def: "a dish that a restaurant offers on a certain day" },
      { word: "choice", thai: "ตัวเลือก", def: "a decision about what you want" },
      { word: "accept", thai: "รับ", def: "to agree to take something, such as a payment" },
      { word: "ready", thai: "พร้อม", def: "prepared and able to be used or served" }
    ],
    summary: "Anna orders a chicken sandwich and orange juice at Sunny Cafe. She asks about the price and pays by card, and the waiter says her food will be ready in ten minutes.",
    summaryThai: "แอนนาสั่งแซนด์วิชไก่และน้ำส้มที่ร้านซันนี่คาเฟ่ เธอถามราคาและจ่ายด้วยบัตร พนักงานบอกว่าอาหารจะพร้อมในสิบนาที",
    questions: [
      {
        id: "rd4-q1",
        type: "multiple-choice",
        prompt: "What does Anna order to eat?",
        options: ["A chicken sandwich", "A salad only", "A pizza", "Fried rice"],
        correctIndex: 0,
        explanation: "แอนนาสั่งแซนด์วิชไก่ตามที่พนักงานแนะนำ"
      },
      {
        id: "rd4-q2",
        type: "multiple-choice",
        prompt: "What does Anna want to drink?",
        options: ["Orange juice", "Coffee", "Water", "Tea"],
        correctIndex: 0,
        explanation: "แอนนาขอน้ำส้มหนึ่งแก้ว"
      },
      {
        id: "rd4-q3",
        type: "multiple-choice",
        prompt: "How much is the sandwich?",
        options: ["One hundred baht", "Fifty baht", "Ten baht", "Two hundred baht"],
        correctIndex: 0,
        explanation: "พนักงานบอกว่าแซนด์วิชราคาหนึ่งร้อยบาท ส่วนน้ำส้มห้าสิบบาท"
      },
      {
        id: "rd4-q4",
        type: "multiple-choice",
        prompt: "How will Anna pay?",
        options: ["By card", "With cash", "With coins", "By phone app"],
        correctIndex: 0,
        explanation: "แอนนาถามว่าจ่ายด้วยบัตรได้ไหม และพนักงานตอบว่ารับบัตร"
      }
    ]
  },
  {
    id: "reading-why-sleep-matters",
    type: "Article",
    title: "Why Sleep Matters",
    thai: "ทำไมการนอนจึงสำคัญ",
    emoji: "🧠",
    level: "B1",
    minutes: 4,
    paragraphs: [
      "Sleep is something we all do every day, but many people do not get enough of it. Doctors say that most adults need between seven and nine hours of sleep each night. When we sleep well, our bodies and minds have time to rest and repair themselves. Without enough sleep, we may feel tired, slow, and unhappy.",
      "One important reason sleep matters is memory. While we sleep, the brain processes what we learned during the day and stores it for later. Students who sleep well often remember information better and do better on tests. In this way, a good night's sleep can be just as useful as extra study time.",
      "Sleep also affects our health. People who regularly sleep too little have a higher risk of illnesses such as heart disease and diabetes. Sleep helps the body control weight and fight infections. It also improves our mood, so we are less likely to feel stressed or angry during the day.",
      "There are simple ways to sleep better. Experts suggest going to bed at the same time every night and avoiding screens before sleep. A quiet, dark, and cool room also helps. By making sleep a priority, we can improve both our health and our daily life."
    ],
    dialogue: null,
    glossary: [
      { word: "adult", thai: "ผู้ใหญ่", def: "a fully grown person" },
      { word: "repair", thai: "ซ่อมแซม", def: "to fix something that is damaged or tired" },
      { word: "memory", thai: "ความจำ", def: "the ability to remember information" },
      { word: "process", thai: "ประมวลผล", def: "to deal with and organize information" },
      { word: "risk", thai: "ความเสี่ยง", def: "the chance that something bad will happen" },
      { word: "mood", thai: "อารมณ์", def: "the way you feel at a particular time" },
      { word: "priority", thai: "สิ่งสำคัญลำดับต้น", def: "something that is treated as more important than others" }
    ],
    summary: "Sleep is important for memory, health, and mood, and most adults need seven to nine hours a night. The article suggests simple habits, such as a regular bedtime and avoiding screens, to sleep better.",
    summaryThai: "การนอนสำคัญต่อความจำ สุขภาพ และอารมณ์ และผู้ใหญ่ส่วนใหญ่ต้องการนอนคืนละเจ็ดถึงเก้าชั่วโมง บทความแนะนำนิสัยง่าย ๆ เช่น เข้านอนเป็นเวลาและเลี่ยงหน้าจอ เพื่อการนอนที่ดีขึ้น",
    questions: [
      {
        id: "rd5-q1",
        type: "multiple-choice",
        prompt: "How many hours of sleep do most adults need each night?",
        options: ["Seven to nine hours", "Three to four hours", "Ten to twelve hours", "One to two hours"],
        correctIndex: 0,
        explanation: "ย่อหน้าแรกระบุว่าผู้ใหญ่ส่วนใหญ่ต้องการนอนคืนละเจ็ดถึงเก้าชั่วโมง"
      },
      {
        id: "rd5-q2",
        type: "multiple-choice",
        prompt: "How does sleep help students?",
        options: [
          "It helps them remember information better",
          "It makes them taller",
          "It gives them more money",
          "It makes them eat less"
        ],
        correctIndex: 0,
        explanation: "ย่อหน้าที่สองบอกว่าการนอนช่วยให้จำข้อมูลได้ดีขึ้นและทำข้อสอบได้ดีขึ้น"
      },
      {
        id: "rd5-q3",
        type: "multiple-choice",
        prompt: "According to the article, what can too little sleep increase the risk of?",
        options: [
          "Heart disease and diabetes",
          "Broken bones",
          "Poor eyesight only",
          "Hair loss"
        ],
        correctIndex: 0,
        explanation: "ย่อหน้าที่สามบอกว่าการนอนน้อยเพิ่มความเสี่ยงต่อโรคหัวใจและเบาหวาน"
      },
      {
        id: "rd5-q4",
        type: "multiple-choice",
        prompt: "What do experts suggest to sleep better?",
        options: [
          "Go to bed at the same time and avoid screens",
          "Drink coffee before bed",
          "Sleep with the lights on",
          "Exercise all night"
        ],
        correctIndex: 0,
        explanation: "ย่อหน้าสุดท้ายแนะนำให้เข้านอนเวลาเดิมทุกคืนและเลี่ยงหน้าจอก่อนนอน"
      }
    ]
  },
  {
    id: 'reading-the-new-cat',
    type: 'Story',
    title: 'The New Cat',
    thai: 'แมวตัวใหม่',
    emoji: '📖',
    level: 'A1',
    minutes: 2,
    paragraphs: [
      'One morning, Mali opens her front door. A small cat is on the step. It is gray and thin. The cat looks up at her and says, "Meow." Mali smiles at the little cat.',
      'Mali gives the cat some milk and some fish. The cat is very hungry. It eats fast. Then it sits in the warm sun and sleeps for a long time.',
      'In the evening, the cat does not go away. It stays with Mali. She gives it a soft bed near the window. Now Mali is happy. She has a new friend.'
    ],
    dialogue: null,
    glossary: [
      { word: 'step', thai: 'ขั้นบันได', def: 'a flat place where you put your foot to go up or down' },
      { word: 'thin', thai: 'ผอม', def: 'not fat; having little weight' },
      { word: 'hungry', thai: 'หิว', def: 'wanting to eat food' },
      { word: 'warm', thai: 'อบอุ่น', def: 'a little hot, in a nice way' },
      { word: 'soft', thai: 'นุ่ม', def: 'nice and gentle to touch, not hard' },
      { word: 'friend', thai: 'เพื่อน', def: 'a person or animal you like and spend time with' }
    ],
    summary: "A small gray cat comes to Mali's door. She feeds it, and the cat decides to stay with her as her new friend.",
    summaryThai: 'แมวสีเทาตัวเล็กมาที่หน้าประตูบ้านของมะลิ เธอให้อาหารมัน และแมวก็ตัดสินใจอยู่กับเธอเป็นเพื่อนใหม่',
    questions: [
      {
        id: 'rd6-q1',
        type: 'multiple-choice',
        prompt: 'What color is the cat?',
        options: ['Black', 'Gray', 'White', 'Brown'],
        correctIndex: 1,
        explanation: "ในเรื่องบอกว่าแมว 'is gray and thin' คือมีสีเทาและผอม"
      },
      {
        id: 'rd6-q2',
        type: 'multiple-choice',
        prompt: 'What does Mali give the cat to eat?',
        options: ['Rice and eggs', 'Bread and water', 'Milk and fish', 'Meat and vegetables'],
        correctIndex: 2,
        explanation: "ประโยค 'Mali gives the cat some milk and some fish' บอกว่าเธอให้นมและปลา"
      },
      {
        id: 'rd6-q3',
        type: 'multiple-choice',
        prompt: 'What does the cat do in the sun?',
        options: ['It sleeps', 'It runs', 'It cries', 'It plays'],
        correctIndex: 0,
        explanation: "ในเรื่องบอกว่า 'it sits in the warm sun and sleeps' คือมันนอนหลับกลางแดด"
      },
      {
        id: 'rd6-q4',
        type: 'multiple-choice',
        prompt: 'What happens in the evening?',
        options: ['The cat runs away', 'Mali is sad', 'Another cat comes', 'The cat stays with Mali'],
        correctIndex: 3,
        explanation: "ประโยค 'the cat does not go away. It stays with Mali' บอกว่าแมวอยู่กับมะลิต่อ"
      }
    ]
  },
  {
    id: 'reading-my-morning-walk',
    type: 'Blog',
    title: 'My Morning Walk',
    thai: 'การเดินตอนเช้าของฉัน',
    emoji: '✍️',
    level: 'A1',
    minutes: 2,
    paragraphs: [
      'I like to walk in the morning. Every day, I get up early. The air is cool and fresh. Not many cars are on the road. It is very quiet and nice.',
      'I walk to the small park near my home. I see birds in the trees. Sometimes I see my neighbor. We say hello and talk for a short time. Then I sit on a bench and drink water.',
      'After my walk, I feel happy and strong. My morning walk is good for my body and my mind. I think everyone should try it. It is easy and free!'
    ],
    dialogue: null,
    glossary: [
      { word: 'fresh', thai: 'สดชื่น', def: 'clean and cool; new and nice' },
      { word: 'quiet', thai: 'เงียบ', def: 'with little or no noise' },
      { word: 'park', thai: 'สวนสาธารณะ', def: 'a green place with grass and trees for people to enjoy' },
      { word: 'neighbor', thai: 'เพื่อนบ้าน', def: 'a person who lives near you' },
      { word: 'bench', thai: 'ม้านั่ง', def: 'a long seat for two or more people' },
      { word: 'strong', thai: 'แข็งแรง', def: 'having a lot of power in your body; healthy' }
    ],
    summary: 'The writer shares how much they enjoy walking in the park every morning and why it makes them feel happy and healthy.',
    summaryThai: 'ผู้เขียนเล่าว่าชอบเดินในสวนสาธารณะทุกเช้ามากแค่ไหน และทำไมมันทำให้รู้สึกมีความสุขและสุขภาพดี',
    questions: [
      {
        id: 'rd7-q1',
        type: 'multiple-choice',
        prompt: 'When does the writer walk?',
        options: ['At night', 'In the morning', 'At noon', 'In the afternoon'],
        correctIndex: 1,
        explanation: "ประโยคแรก 'I like to walk in the morning' บอกว่าเดินตอนเช้า"
      },
      {
        id: 'rd7-q2',
        type: 'multiple-choice',
        prompt: 'How is the air in the morning?',
        options: ['Hot and dirty', 'Cold and wet', 'Cool and fresh', 'Dry and dusty'],
        correctIndex: 2,
        explanation: "ในเรื่องบอกว่า 'The air is cool and fresh' คืออากาศเย็นและสดชื่น"
      },
      {
        id: 'rd7-q3',
        type: 'multiple-choice',
        prompt: 'Where does the writer walk to?',
        options: ['A small park', 'A big city', 'The beach', 'A shop'],
        correctIndex: 0,
        explanation: "ประโยค 'I walk to the small park near my home' บอกว่าเดินไปสวนสาธารณะเล็กๆ"
      },
      {
        id: 'rd7-q4',
        type: 'multiple-choice',
        prompt: 'How does the writer feel after the walk?',
        options: ['Tired and sad', 'Angry', 'Sleepy', 'Happy and strong'],
        correctIndex: 3,
        explanation: "ประโยค 'I feel happy and strong' บอกว่ารู้สึกมีความสุขและแข็งแรง"
      }
    ]
  },
  {
    id: 'reading-at-the-coffee-shop',
    type: 'Conversation',
    title: 'At the Coffee Shop',
    thai: 'ที่ร้านกาแฟ',
    emoji: '💬',
    level: 'A2',
    minutes: 3,
    paragraphs: [],
    dialogue: [
      { speaker: 'Ben', text: 'Hi, good morning! What can I get for you today?' },
      { speaker: 'Nina', text: 'Good morning. Can I have a large iced coffee, please?' },
      { speaker: 'Ben', text: 'Sure. Would you like milk and sugar with that?' },
      { speaker: 'Nina', text: "A little milk, but no sugar, thanks. I'm trying to eat less sugar." },
      { speaker: 'Ben', text: 'Good choice! Anything to eat? Our banana cake is fresh today.' },
      { speaker: 'Nina', text: 'Oh, that sounds nice. Yes, one piece of banana cake, please.' },
      { speaker: 'Ben', text: 'Great. That will be one hundred and twenty baht in total.' },
      { speaker: 'Nina', text: 'Here you are. Can I pay by phone?' },
      { speaker: 'Ben', text: 'Of course. Just scan the code here. Perfect, it worked. Please wait a moment.' },
      { speaker: 'Nina', text: 'Thank you so much. Have a nice day!' }
    ],
    glossary: [
      { word: 'iced', thai: 'เย็น (ใส่น้ำแข็ง)', def: 'made cold with ice' },
      { word: 'sugar', thai: 'น้ำตาล', def: 'a sweet white thing you put in food or drinks' },
      { word: 'choice', thai: 'ตัวเลือก', def: 'the act of choosing; a thing you pick' },
      { word: 'fresh', thai: 'สด', def: 'made or picked a short time ago; not old' },
      { word: 'total', thai: 'รวมทั้งหมด', def: 'the whole amount when you add everything together' },
      { word: 'scan', thai: 'สแกน', def: 'to read a code with a machine or phone' }
    ],
    summary: 'Nina orders a large iced coffee and banana cake at a coffee shop, asks for no sugar, and pays with her phone.',
    summaryThai: 'นีน่าสั่งกาแฟเย็นแก้วใหญ่และเค้กกล้วยที่ร้านกาแฟ ขอไม่ใส่น้ำตาล และจ่ายเงินด้วยโทรศัพท์',
    questions: [
      {
        id: 'rd8-q1',
        type: 'multiple-choice',
        prompt: 'What drink does Nina order?',
        options: ['A hot tea', 'A small juice', 'A large iced coffee', 'A glass of water'],
        correctIndex: 2,
        explanation: "นีน่าพูดว่า 'Can I have a large iced coffee, please?' คือกาแฟเย็นแก้วใหญ่"
      },
      {
        id: 'rd8-q2',
        type: 'multiple-choice',
        prompt: 'Why does Nina say no to sugar?',
        options: ['She is trying to eat less sugar', 'She does not like coffee', 'The shop has no sugar', 'She is in a hurry'],
        correctIndex: 0,
        explanation: "นีน่าพูดว่า 'I'm trying to eat less sugar' คือเธอพยายามกินน้ำตาลให้น้อยลง"
      },
      {
        id: 'rd8-q3',
        type: 'multiple-choice',
        prompt: 'What food does Nina buy?',
        options: ['A sandwich', 'Banana cake', 'A cookie', 'Nothing'],
        correctIndex: 1,
        explanation: "นีน่าสั่ง 'one piece of banana cake' หลังจากเบนแนะนำ"
      },
      {
        id: 'rd8-q4',
        type: 'multiple-choice',
        prompt: 'How does Nina pay?',
        options: ['With coins', 'With a card', 'With cash', 'By phone'],
        correctIndex: 3,
        explanation: "นีน่าถามว่า 'Can I pay by phone?' และเบนบอกให้สแกนโค้ด"
      }
    ]
  },
  {
    id: 'reading-city-plants-more-trees',
    type: 'News',
    title: 'City Plants More Trees to Fight the Heat',
    thai: 'เมืองปลูกต้นไม้เพิ่มเพื่อสู้กับความร้อน',
    emoji: '📰',
    level: 'B1',
    minutes: 4,
    paragraphs: [
      'The city of Riverton announced this week that it will plant 20,000 new trees over the next two years. City leaders say the project is a direct response to rising temperatures, which have made summers uncomfortable and even dangerous for some residents.',
      'According to a recent study, streets with many trees can be several degrees cooler than streets with none. The shade from the leaves blocks the sun, and the trees also release water into the air, which helps lower the temperature. Officials hope this will reduce the number of people who get sick during heat waves.',
      'Not everyone is fully convinced. Some business owners worry that planting will block their shops or take up parking spaces. In answer, the city has promised to work closely with local communities and to choose planting spots carefully, so that the trees help people without causing new problems.',
      'The first 5,000 trees will be planted this year, starting in the neighborhoods that suffer the most from heat. Volunteers are welcome to join, and the city will offer free training. Experts say the full benefit of the project may take ten years to appear, but that starting now is essential.'
    ],
    dialogue: null,
    glossary: [
      { word: 'announced', thai: 'ประกาศ', def: 'said something officially and in public' },
      { word: 'temperatures', thai: 'อุณหภูมิ', def: 'how hot or cold something is' },
      { word: 'residents', thai: 'ผู้อยู่อาศัย', def: 'people who live in a particular place' },
      { word: 'shade', thai: 'ร่มเงา', def: 'an area out of the sun where it is cooler and darker' },
      { word: 'convinced', thai: 'เชื่อมั่น', def: 'made to feel sure that something is true or good' },
      { word: 'volunteers', thai: 'อาสาสมัคร', def: 'people who do work without being paid' }
    ],
    summary: 'The city of Riverton plans to plant 20,000 trees in two years to lower summer temperatures, though some business owners have concerns.',
    summaryThai: 'เมืองริเวอร์ตันวางแผนปลูกต้นไม้ 20,000 ต้นภายในสองปีเพื่อลดอุณหภูมิในฤดูร้อน แม้เจ้าของธุรกิจบางคนจะมีความกังวล',
    questions: [
      {
        id: 'rd9-q1',
        type: 'multiple-choice',
        prompt: 'How many trees will the city plant over the next two years?',
        options: ['5,000', '10,000', '20,000', '50,000'],
        correctIndex: 2,
        explanation: "ย่อหน้าแรกบอกว่าเมืองจะปลูก '20,000 new trees over the next two years'"
      },
      {
        id: 'rd9-q2',
        type: 'multiple-choice',
        prompt: 'According to the study, why are streets with trees cooler?',
        options: ['The shade blocks the sun and trees release water into the air', 'The trees make wind', 'The trees are painted white', 'There are fewer cars'],
        correctIndex: 0,
        explanation: 'ย่อหน้าที่สองอธิบายว่าร่มเงาบังแดดและต้นไม้ปล่อยน้ำสู่อากาศ ช่วยลดอุณหภูมิ'
      },
      {
        id: 'rd9-q3',
        type: 'multiple-choice',
        prompt: 'Why are some business owners worried?',
        options: ['Trees cost too much money', 'Trees attract insects', 'Trees may block their shops or take parking spaces', 'Trees grow too slowly'],
        correctIndex: 2,
        explanation: 'ย่อหน้าที่สามบอกว่าเจ้าของธุรกิจกังวลว่าต้นไม้อาจบังร้านหรือกินพื้นที่จอดรถ'
      },
      {
        id: 'rd9-q4',
        type: 'multiple-choice',
        prompt: 'How long may the full benefit of the project take to appear?',
        options: ['One year', 'Two years', 'Five years', 'Ten years'],
        correctIndex: 3,
        explanation: "ย่อหน้าสุดท้ายบอกว่า 'the full benefit... may take ten years to appear'"
      }
    ]
  },
  {
    id: 'reading-why-we-dream',
    type: 'Article',
    title: 'Why Do We Dream?',
    thai: 'ทำไมเราถึงฝัน?',
    emoji: '📄',
    level: 'B1',
    minutes: 4,
    paragraphs: [
      'Almost everyone dreams, even people who say they never do. In fact, scientists believe we all have several dreams each night, but we usually forget most of them soon after we wake up. For thousands of years, people have asked the same question: why do we dream at all?',
      "One popular idea is that dreams help our brains sort and store memories. During sleep, the brain seems to review the events of the day, keeping the important information and letting go of the rest. This may be why students often remember lessons better after a good night's sleep.",
      'Another theory is that dreams help us deal with strong emotions. When something worries us or makes us afraid, our dreams may let us face those feelings in a safe way. Some researchers even think this practice can make us calmer and more prepared for real problems.',
      'The truth is that no single theory explains everything, and dreams remain one of the great mysteries of the human mind. What scientists do agree on is that sleep matters. Whatever the reason for our dreams, getting enough rest keeps both our bodies and our minds healthy.'
    ],
    dialogue: null,
    glossary: [
      { word: 'forget', thai: 'ลืม', def: 'to not remember something' },
      { word: 'memories', thai: 'ความทรงจำ', def: 'things you remember from the past' },
      { word: 'review', thai: 'ทบทวน', def: 'to look at or think about something again' },
      { word: 'emotions', thai: 'อารมณ์', def: 'strong feelings such as fear, joy, or anger' },
      { word: 'theory', thai: 'ทฤษฎี', def: 'an idea that tries to explain why something happens' },
      { word: 'mysteries', thai: 'ปริศนา', def: 'things that are hard to understand or explain' }
    ],
    summary: 'The article explains two main ideas about why we dream: to store memories and to handle emotions, while noting that dreams remain a mystery.',
    summaryThai: 'บทความอธิบายแนวคิดหลักสองอย่างว่าทำไมเราถึงฝัน คือเพื่อเก็บความทรงจำและเพื่อจัดการกับอารมณ์ พร้อมระบุว่าความฝันยังคงเป็นปริศนา',
    questions: [
      {
        id: 'rd10-q1',
        type: 'multiple-choice',
        prompt: 'Why do many people think they do not dream?',
        options: ['They sleep too little', 'They forget most of their dreams', 'Only children dream', 'Dreams are not real'],
        correctIndex: 1,
        explanation: 'ย่อหน้าแรกบอกว่าเรามักลืมความฝันส่วนใหญ่หลังตื่น จึงคิดว่าไม่ได้ฝัน'
      },
      {
        id: 'rd10-q2',
        type: 'multiple-choice',
        prompt: 'According to the first theory, what do dreams help the brain do?',
        options: ['Sort and store memories', 'Make new friends', 'Grow bigger', 'Wake up faster'],
        correctIndex: 0,
        explanation: 'ย่อหน้าที่สองอธิบายว่าความฝันช่วยสมองจัดเรียงและเก็บความทรงจำ'
      },
      {
        id: 'rd10-q3',
        type: 'multiple-choice',
        prompt: 'What does the second theory say dreams help us do?',
        options: ['Learn languages', 'Sleep longer', 'Deal with strong emotions', 'Eat better'],
        correctIndex: 2,
        explanation: 'ย่อหน้าที่สามบอกว่าความฝันช่วยเราจัดการกับอารมณ์ที่รุนแรง'
      },
      {
        id: 'rd10-q4',
        type: 'multiple-choice',
        prompt: 'What do scientists agree on?',
        options: ['Dreams are always about the future', 'Everyone has the same dreams', 'One theory explains everything', 'Sleep matters for health'],
        correctIndex: 3,
        explanation: 'ย่อหน้าสุดท้ายบอกว่านักวิทยาศาสตร์เห็นตรงกันว่าการนอนหลับสำคัญต่อสุขภาพ'
      }
    ]
  },
  {
    id: 'reading-my-first-solo-trip',
    type: 'Blog',
    title: 'My First Solo Trip Abroad',
    thai: 'ทริปเที่ยวคนเดียวครั้งแรกในต่างประเทศ',
    emoji: '📝',
    level: 'B1',
    minutes: 4,
    paragraphs: [
      'Last spring, I finally did something I had been dreaming about for years: I travelled abroad completely on my own. My family thought it was a strange idea, and honestly, I was nervous too. I bought a cheap flight to Vietnam, packed one small backpack, and promised myself that I would be brave. When the plane took off, my heart was beating fast, but I also felt more free than ever before.',
      'The first two days were harder than I expected. I got lost several times, and I could not read most of the signs. In one small town, I ordered food by pointing at pictures because I did not speak the local language. A kind woman at the market saw that I was confused and helped me find my hotel. That moment taught me that people are usually friendly if you simply ask for help.',
      'As the days passed, I became more confident. I learned to take local buses, bargain politely at the markets, and start conversations with other travellers. I met people from many different countries, and we shared stories over cheap noodles and coffee. I realised that travelling alone does not mean being lonely. In fact, I made more friends than I usually do at home.',
      'By the end of the trip, I felt like a different person. I had solved problems by myself, tried strange food, and discovered that I could trust my own decisions. Now I encourage everyone to try a solo trip at least once. You do not need a lot of money or perfect plans. You only need the courage to take the first step and the patience to learn along the way.'
    ],
    dialogue: null,
    glossary: [
      { word: 'nervous', thai: 'ประหม่า, กังวล', def: 'worried or slightly afraid about something' },
      { word: 'confused', thai: 'สับสน', def: 'unable to understand something clearly' },
      { word: 'confident', thai: 'มั่นใจ', def: 'feeling sure about your own abilities' },
      { word: 'bargain', thai: 'ต่อรองราคา', def: 'to discuss a price in order to make it lower' },
      { word: 'lonely', thai: 'เหงา, โดดเดี่ยว', def: 'unhappy because you are alone' },
      { word: 'courage', thai: 'ความกล้าหาญ', def: 'the ability to do something difficult or frightening' }
    ],
    summary: "A first-person blog about the writer's first solo trip abroad, which felt scary at first but built confidence and led to new friendships.",
    summaryThai: 'บล็อกเล่าประสบการณ์การเที่ยวคนเดียวครั้งแรกในต่างประเทศ ซึ่งตอนแรกน่ากลัวแต่ทำให้มั่นใจขึ้นและได้เพื่อนใหม่',
    questions: [
      {
        id: 'rd11-q1',
        type: 'multiple-choice',
        prompt: 'How did the writer feel when the plane took off?',
        options: ['Bored and tired', 'Nervous but free', 'Angry with the family', 'Completely calm'],
        correctIndex: 1,
        explanation: 'ในย่อหน้าแรกผู้เขียนบอกว่าหัวใจเต้นแรง (ประหม่า) แต่ก็รู้สึกอิสระมากกว่าที่เคย'
      },
      {
        id: 'rd11-q2',
        type: 'multiple-choice',
        prompt: 'How did the writer order food in the small town?',
        options: ['By pointing at pictures', 'By speaking the local language', 'By using a phone app', 'By asking another tourist'],
        correctIndex: 0,
        explanation: 'ผู้เขียนสั่งอาหารด้วยการชี้ที่รูปภาพเพราะพูดภาษาท้องถิ่นไม่ได้'
      },
      {
        id: 'rd11-q3',
        type: 'multiple-choice',
        prompt: 'What did the writer learn about travelling alone?',
        options: ['It is always dangerous', 'It is very expensive', 'It does not mean being lonely', 'It is boring after a while'],
        correctIndex: 2,
        explanation: 'ผู้เขียนพบว่าการเที่ยวคนเดียวไม่ได้แปลว่าเหงา และได้เพื่อนมากกว่าตอนอยู่บ้าน'
      },
      {
        id: 'rd11-q4',
        type: 'multiple-choice',
        prompt: "What is the writer's main advice at the end?",
        options: ['Only travel with family', 'Save a lot of money first', 'Try a solo trip at least once', 'Avoid strange food'],
        correctIndex: 2,
        explanation: 'ตอนท้ายผู้เขียนแนะนำให้ทุกคนลองเที่ยวคนเดียวสักครั้ง โดยต้องมีความกล้าและความอดทน'
      }
    ]
  },
  {
    id: 'reading-how-sleep-shapes-memory',
    type: 'Article',
    title: 'How Sleep Shapes Your Memory',
    thai: 'การนอนหลับหล่อหลอมความจำอย่างไร',
    emoji: '📄',
    level: 'B2',
    minutes: 5,
    paragraphs: [
      'Most people think of sleep as a time when the brain simply switches off and rests. In reality, the sleeping brain is remarkably active, and much of that activity is dedicated to strengthening what we have learned during the day. Scientists now believe that sleep plays a central role in turning short-term experiences into lasting memories, a process known as consolidation.',
      'During deep sleep, the brain replays the events of the day at high speed. This replay helps to move information from the hippocampus, a temporary storage area, into the cortex, where memories can be kept for the long term. Without enough deep sleep, this transfer becomes weaker, and details we thought we had learned can fade surprisingly quickly.',
      'Different stages of sleep appear to support different kinds of memory. Deep sleep is especially important for facts and events, such as vocabulary or historical dates. In contrast, the dreaming stage, known as REM sleep, seems to help with skills, emotions, and creative problem-solving. This may explain why people often wake up with a fresh solution to a problem that seemed impossible the night before.',
      'The practical lessons are clear. Students who study late into the night and sacrifice sleep may actually remember less than those who study a little less but sleep well. A short review before bed, followed by a full night of rest, tends to produce stronger memories than hours of tired cramming.',
      'Understanding this connection can change the way we plan our learning. Rather than treating sleep as wasted time, we can see it as an essential part of the learning process itself. In a culture that often celebrates staying awake and working harder, the science of memory offers a surprising reminder: sometimes the smartest thing you can do is close the book and go to bed.'
    ],
    dialogue: null,
    glossary: [
      { word: 'consolidation', thai: 'การทำให้มั่นคง (การรวบรวมความจำ)', def: 'the process of making memories stronger and more permanent' },
      { word: 'hippocampus', thai: 'ฮิปโปแคมปัส (สมองส่วนความจำ)', def: 'a part of the brain that stores memories temporarily' },
      { word: 'cortex', thai: 'เปลือกสมอง', def: 'the outer layer of the brain used for long-term memory and thinking' },
      { word: 'replay', thai: 'เล่นซ้ำ', def: 'to repeat or go over something again' },
      { word: 'sacrifice', thai: 'เสียสละ', def: 'to give up something valuable in order to get something else' },
      { word: 'cramming', thai: 'การอ่านหนังสืออย่างเร่งรีบ', def: 'studying a lot of information quickly, usually just before a test' }
    ],
    summary: 'An informative article explaining how the sleeping brain consolidates memories, why different sleep stages support different learning, and why sleep beats late-night cramming.',
    summaryThai: 'บทความอธิบายว่าสมองขณะหลับช่วยรวบรวมความจำอย่างไร ทำไมช่วงการนอนต่างกันช่วยการเรียนรู้ต่างกัน และทำไมการนอนดีกว่าการอ่านหนังสือดึกๆ',
    questions: [
      {
        id: 'rd12-q1',
        type: 'multiple-choice',
        prompt: 'What does the article say about the brain during sleep?',
        options: ['It switches off completely', 'It stays remarkably active', 'It only rests the body', 'It stops storing memories'],
        correctIndex: 1,
        explanation: 'บทความบอกว่าสมองขณะหลับยังทำงานอย่างมาก โดยเฉพาะการเสริมสร้างสิ่งที่เรียนรู้มา'
      },
      {
        id: 'rd12-q2',
        type: 'multiple-choice',
        prompt: 'According to the article, what happens during deep sleep?',
        options: ['The brain deletes old memories', "The brain replays the day's events", 'The body produces new cells only', 'Dreams create false facts'],
        correctIndex: 1,
        explanation: 'ช่วงหลับลึกสมองจะเล่นซ้ำเหตุการณ์ของวัน เพื่อย้ายข้อมูลจากฮิปโปแคมปัสไปยังเปลือกสมอง'
      },
      {
        id: 'rd12-q3',
        type: 'multiple-choice',
        prompt: 'Why might someone wake up with a solution to a hard problem?',
        options: ['Because deep sleep stores facts', 'Because they studied all night', 'Because REM sleep supports creative problem-solving', 'Because the hippocampus is empty'],
        correctIndex: 2,
        explanation: 'ข้อนี้ต้องอนุมาน บทความบอกว่าช่วง REM ช่วยเรื่องทักษะ อารมณ์ และการแก้ปัญหาเชิงสร้างสรรค์'
      },
      {
        id: 'rd12-q4',
        type: 'multiple-choice',
        prompt: 'What is the main message of the final paragraph?',
        options: ['Working harder is always best', 'Sleep is wasted time', 'Sleep is an essential part of learning', 'Books should be avoided at night'],
        correctIndex: 2,
        explanation: 'ย่อหน้าสุดท้ายชี้ว่าการนอนเป็นส่วนสำคัญของการเรียนรู้ ไม่ใช่เวลาที่เสียเปล่า'
      }
    ]
  },
  {
    id: 'reading-city-launches-free-bikes',
    type: 'News',
    title: 'City Launches Free Bicycle Scheme to Cut Traffic',
    thai: 'เมืองเปิดตัวโครงการจักรยานฟรีเพื่อลดการจราจร',
    emoji: '📰',
    level: 'B2',
    minutes: 4,
    paragraphs: [
      'The city of Greenford announced yesterday that it will launch a free public bicycle scheme next month, aiming to reduce traffic congestion and improve air quality. Under the plan, residents will be able to borrow bicycles from more than fifty docking stations across the city and return them at any other station at no cost for the first year.',
      'Officials said the project is part of a wider effort to cut carbon emissions and encourage healthier lifestyles. The city council has invested twelve million dollars in new bicycles, docking stations, and dedicated cycle lanes. Mayor Elena Ruiz described the scheme as an investment in the future rather than a temporary experiment.',
      'Not everyone welcomed the announcement. Some drivers complained that the new cycle lanes would take space away from cars and make traffic worse in the short term. A group of local business owners also raised concerns that reduced parking could affect their sales, though the council promised to review these issues within six months.',
      'Similar schemes in other cities have produced mixed but generally positive results. In several European capitals, free or low-cost bicycles have led to fewer cars in the centre and cleaner air, but success has often depended on safe cycle lanes and public support. Greenford officials say they will publish usage data every three months so that residents can judge the project for themselves.'
    ],
    dialogue: null,
    glossary: [
      { word: 'congestion', thai: 'การจราจรติดขัด', def: 'a situation in which a place is too full of traffic' },
      { word: 'docking station', thai: 'จุดจอด (สถานีจอดจักรยาน)', def: 'a place where shared bicycles are parked and picked up' },
      { word: 'emissions', thai: 'การปล่อยมลพิษ', def: 'gases sent out into the air, especially harmful ones' },
      { word: 'dedicated', thai: 'ที่จัดไว้เฉพาะ', def: 'used for only one particular purpose' },
      { word: 'council', thai: 'สภาท้องถิ่น', def: 'a group of people elected to manage a city or area' },
      { word: 'residents', thai: 'ผู้อยู่อาศัย', def: 'people who live in a particular place' }
    ],
    summary: "A news report on Greenford's new free public bicycle scheme, its goals of cutting traffic and pollution, the concerns of drivers and businesses, and comparisons with other cities.",
    summaryThai: 'ข่าวรายงานโครงการจักรยานสาธารณะฟรีของเมืองกรีนฟอร์ด เป้าหมายลดการจราจรและมลพิษ ความกังวลของผู้ขับรถและร้านค้า และการเปรียบเทียบกับเมืองอื่น',
    questions: [
      {
        id: 'rd13-q1',
        type: 'multiple-choice',
        prompt: 'What is the main goal of the new bicycle scheme?',
        options: ['To make money for the city', 'To reduce traffic and improve air quality', 'To replace all public buses', 'To attract foreign tourists'],
        correctIndex: 1,
        explanation: 'ข่าวระบุว่าเป้าหมายหลักคือการลดการจราจรติดขัดและปรับปรุงคุณภาพอากาศ'
      },
      {
        id: 'rd13-q2',
        type: 'multiple-choice',
        prompt: 'How much will residents pay to use the bikes in the first year?',
        options: ['Twelve dollars', 'A small monthly fee', 'Nothing', 'Only for long trips'],
        correctIndex: 2,
        explanation: 'ประชาชนสามารถยืมและคืนจักรยานได้ฟรีในปีแรก'
      },
      {
        id: 'rd13-q3',
        type: 'multiple-choice',
        prompt: 'Why did some business owners raise concerns?',
        options: ['The bikes were too expensive', 'Reduced parking could affect their sales', 'They wanted more docking stations', 'They preferred electric cars'],
        correctIndex: 1,
        explanation: 'เจ้าของธุรกิจกังวลว่าที่จอดรถที่ลดลงอาจกระทบยอดขาย'
      },
      {
        id: 'rd13-q4',
        type: 'multiple-choice',
        prompt: 'What can we infer about the success of similar schemes elsewhere?',
        options: ['They always fail completely', 'They depend partly on safe cycle lanes and public support', 'They only work in Greenford', 'They require no investment'],
        correctIndex: 1,
        explanation: 'ข้อนี้ต้องอนุมาน ข่าวบอกว่าความสำเร็จมักขึ้นอยู่กับเลนจักรยานที่ปลอดภัยและการสนับสนุนจากประชาชน'
      }
    ]
  },
  {
    id: 'reading-the-price-of-convenience',
    type: 'Article',
    title: 'The Hidden Price of Convenience',
    thai: 'ราคาที่ซ่อนอยู่ของความสะดวกสบาย',
    emoji: '📄',
    level: 'C1',
    minutes: 6,
    paragraphs: [
      "We live in an age that worships convenience. With a few taps on a screen, we can summon a meal, a taxi, or a week's groceries, all delivered to our door within hours. On the surface, this seems like an unambiguous triumph of modern life, a liberation from the tedious chores that once consumed our time. Yet the more deeply we rely on these frictionless services, the more we should ask what, precisely, we are trading away in return.",
      'The most obvious cost is economic, though it is often invisible to the consumer. The low prices and instant delivery that we take for granted are frequently sustained by workers in precarious conditions, paid by the task and stripped of the protections that traditional employment once guaranteed. Convenience, in other words, does not eliminate labour; it merely relocates it, pushing the effort and the risk onto people we never see.',
      'There is also a subtler, psychological price. When every desire can be satisfied almost instantly, our capacity for patience and delayed gratification begins to erode. Studies of consumer behaviour suggest that the very ease of these services encourages us to want more, more often, and to feel a peculiar frustration when anything fails to arrive at once. Convenience, paradoxically, can leave us less content rather than more.',
      'Perhaps the most significant loss is one of competence and connection. Skills that previous generations regarded as ordinary, such as cooking a meal or repairing a household object, are quietly disappearing because outsourcing them has become so effortless. Along with these skills, we lose small but meaningful encounters, the conversation with a shopkeeper or the shared effort of a task, that once wove individuals into a community.',
      'None of this is an argument for rejecting modern convenience altogether, which would be both unrealistic and unnecessary. The point is rather to resist the assumption that convenience is always and only a gain. By recognising its hidden costs, we can make more deliberate choices, deciding when the time we save is genuinely worth the price, and when a little friction is precisely what a good life requires.'
    ],
    dialogue: null,
    glossary: [
      { word: 'unambiguous', thai: 'ชัดเจน ไม่กำกวม', def: 'having only one clear meaning; not causing doubt' },
      { word: 'frictionless', thai: 'ราบรื่นไร้อุปสรรค', def: 'happening smoothly and easily, without effort or obstacles' },
      { word: 'precarious', thai: 'ไม่มั่นคง เสี่ยง', def: 'uncertain and not safe or secure' },
      { word: 'gratification', thai: 'ความพึงพอใจ', def: 'the feeling of pleasure when a desire is satisfied' },
      { word: 'outsourcing', thai: 'การจ้างงานภายนอก', def: 'paying an outside person or company to do a task for you' },
      { word: 'deliberate', thai: 'ที่ตั้งใจ ไตร่ตรอง', def: 'done carefully and on purpose after thinking' }
    ],
    summary: 'An analytical opinion article arguing that the convenience of modern on-demand services carries hidden economic, psychological, and social costs, and calls for more deliberate choices.',
    summaryThai: 'บทความเชิงวิเคราะห์ที่โต้แย้งว่าความสะดวกสบายของบริการยุคใหม่แฝงต้นทุนด้านเศรษฐกิจ จิตใจ และสังคม และเรียกร้องให้เลือกอย่างไตร่ตรองมากขึ้น',
    questions: [
      {
        id: 'rd14-q1',
        type: 'multiple-choice',
        prompt: 'According to the article, why is the economic cost of convenience often invisible?',
        options: ['Because prices are actually very high', 'Because the labour and risk are pushed onto unseen workers', 'Because consumers refuse to pay', 'Because delivery is always delayed'],
        correctIndex: 1,
        explanation: 'บทความอธิบายว่าความสะดวกไม่ได้ลบแรงงานออกไป แต่ย้ายมันไปยังคนงานที่เราไม่เห็นและอยู่ในสภาพที่ไม่มั่นคง'
      },
      {
        id: 'rd14-q2',
        type: 'multiple-choice',
        prompt: 'What psychological effect does the writer describe as paradoxical?',
        options: ['Convenience makes us more patient', 'Convenience can leave us less content, not more', 'Convenience removes all desire', 'Convenience improves memory'],
        correctIndex: 1,
        explanation: 'ย่อหน้าที่สามชี้ว่าความสะดวกอาจทำให้เราพึงพอใจน้อยลงแทนที่จะมากขึ้น ซึ่งเป็นเรื่องย้อนแย้ง'
      },
      {
        id: 'rd14-q3',
        type: 'multiple-choice',
        prompt: 'What does the writer suggest we lose along with everyday skills?',
        options: ['Money and property', 'Meaningful encounters that build community', 'Access to technology', 'Our need for food'],
        correctIndex: 1,
        explanation: 'ผู้เขียนบอกว่าเมื่อทักษะหายไป เราก็สูญเสียการพบปะเล็กๆ น้อยๆ ที่เชื่อมโยงผู้คนเข้าเป็นชุมชนไปด้วย'
      },
      {
        id: 'rd14-q4',
        type: 'multiple-choice',
        prompt: "What is the writer's overall position on convenience?",
        options: ['It should be rejected entirely', 'It is always purely a benefit', 'It should be chosen deliberately, aware of its hidden costs', 'It is only a problem for workers'],
        correctIndex: 2,
        explanation: 'ข้อนี้ต้องอนุมานจากย่อหน้าสุดท้าย ผู้เขียนไม่ได้ปฏิเสธความสะดวก แต่ต้องการให้เลือกอย่างไตร่ตรองโดยรู้ต้นทุนที่ซ่อนอยู่'
      }
    ]
  },
  {
    id: 'reading-the-tyranny-of-metrics',
    type: 'Article',
    title: 'The Tyranny of Metrics',
    thai: 'การครอบงำของตัวชี้วัด',
    emoji: '📄',
    level: 'C2',
    minutes: 7,
    paragraphs: [
      'There is a seductive appeal to measurement. To quantify a phenomenon is to seem to master it, to replace the murky uncertainties of human judgement with the crisp authority of a number. Across schools, hospitals, corporations, and governments, this faith in metrics has hardened into an orthodoxy, one that holds that anything worth doing can be counted, and that anything counted can be improved. Yet beneath this reassuring logic lies a set of distortions so pervasive that they threaten to undermine the very ends that measurement was meant to serve.',
      "The central flaw is captured by what economists call Goodhart's Law: when a measure becomes a target, it ceases to be a good measure. Once a number acquires consequences, people optimise for the number rather than for the underlying reality it was supposed to represent. A hospital judged by waiting times learns to reclassify patients; a school ranked by test scores narrows its teaching to whatever the examination rewards. The metric is duly satisfied, while the substance it was designed to capture quietly deteriorates.",
      'This substitution of the measurable for the meaningful carries a further, more insidious cost. Not everything that matters can be counted, and the relentless demand for quantification tends to marginalise precisely those goods that resist it. The patience of a nurse, the intellectual curiosity a teacher kindles, the trust that binds a functioning institution, these are the intangibles that make an organisation genuinely valuable, and they are exactly the qualities that a spreadsheet cannot register and therefore learns to ignore.',
      'Defenders of metrics will object, not without reason, that the alternative, opaque and unaccountable judgement, is hardly preferable, and that measurement remains an indispensable corrective to bias, favouritism, and self-serving anecdote. This is a fair point, and it would be naive to romanticise the era before performance data. The error lies not in measuring as such, but in the fetishisation of measurement, in the fantasy that numbers can wholly replace the discernment of experienced professionals rather than merely inform it.',
      'The remedy, then, is neither wholesale rejection nor uncritical embrace, but a mature humility about what metrics can and cannot do. Numbers should be treated as one input among several, interrogated rather than worshipped, and always subordinated to the judgement of those who understand the terrain they claim to describe. To recover this balance is to remember an old and unfashionable truth: that some of the most important things in human life will never fit neatly into a column on a chart.'
    ],
    dialogue: null,
    glossary: [
      { word: 'orthodoxy', thai: 'ความเชื่อกระแสหลัก', def: 'a belief or set of beliefs generally accepted as correct' },
      { word: 'pervasive', thai: 'แพร่กระจายไปทั่ว', def: 'spreading widely and present everywhere' },
      { word: 'insidious', thai: 'ที่ค่อยๆ เป็นอันตราย', def: 'causing harm gradually and in a way that is not easily noticed' },
      { word: 'intangibles', thai: 'สิ่งที่จับต้องไม่ได้', def: 'valuable things that cannot be touched or precisely measured' },
      { word: 'indispensable', thai: 'ที่ขาดไม่ได้', def: 'absolutely necessary and impossible to do without' },
      { word: 'discernment', thai: 'วิจารณญาณ', def: 'the ability to judge well and understand things clearly' }
    ],
    summary: 'A sophisticated essay arguing that the obsession with metrics distorts the behaviour it measures and neglects unquantifiable goods, and calling for humility that treats numbers as one input subordinate to expert judgement.',
    summaryThai: 'บทความเชิงวิเคราะห์ระดับสูงที่โต้แย้งว่าการหมกมุ่นกับตัวชี้วัดบิดเบือนพฤติกรรมและละเลยคุณค่าที่วัดไม่ได้ พร้อมเรียกร้องให้ใช้ตัวเลขเป็นเพียงข้อมูลหนึ่งที่อยู่ใต้วิจารณญาณของผู้เชี่ยวชาญ',
    questions: [
      {
        id: 'rd15-q1',
        type: 'multiple-choice',
        prompt: "What does Goodhart's Law describe, according to the essay?",
        options: ['Measures always improve reality', 'When a measure becomes a target, it stops being a good measure', 'Numbers cannot be manipulated', 'Judgement is always superior to data'],
        correctIndex: 1,
        explanation: 'บทความอ้างกฎของกู๊ดฮาร์ตว่าเมื่อตัวชี้วัดกลายเป็นเป้าหมาย มันจะไม่ใช่ตัวชี้วัดที่ดีอีกต่อไป'
      },
      {
        id: 'rd15-q2',
        type: 'multiple-choice',
        prompt: 'Which example illustrates the distortion the writer warns about?',
        options: ['A hospital reclassifying patients to improve waiting-time figures', 'A hospital hiring more nurses', 'A school building a new library', 'A company raising its wages'],
        correctIndex: 0,
        explanation: 'ผู้เขียนยกตัวอย่างโรงพยาบาลที่จัดประเภทผู้ป่วยใหม่เพื่อให้ตัวเลขเวลารอดูดีขึ้น ในขณะที่เนื้อแท้แย่ลง'
      },
      {
        id: 'rd15-q3',
        type: 'multiple-choice',
        prompt: 'What does the writer concede to defenders of metrics?',
        options: ['That metrics should be rejected entirely', 'That intangibles do not matter', 'That opaque, unaccountable judgement is not preferable and measurement corrects bias', 'That numbers can fully replace professionals'],
        correctIndex: 2,
        explanation: 'ข้อนี้ต้องอนุมาน ผู้เขียนยอมรับว่าการใช้ดุลยพินิจที่ไร้ความโปร่งใสก็ไม่ได้ดีกว่า และการวัดช่วยแก้อคติได้'
      },
      {
        id: 'rd15-q4',
        type: 'multiple-choice',
        prompt: "What is the writer's proposed remedy?",
        options: ['Worship numbers more fully', 'Abandon all measurement', 'Treat metrics as one input, subordinate to expert judgement', 'Replace professionals with spreadsheets'],
        correctIndex: 2,
        explanation: 'ทางแก้ที่ผู้เขียนเสนอคือความถ่อมตน ใช้ตัวเลขเป็นเพียงข้อมูลหนึ่งที่อยู่ใต้วิจารณญาณของผู้เชี่ยวชาญ ไม่ปฏิเสธหรือบูชาจนสุดโต่ง'
      }
    ]
  }
];
