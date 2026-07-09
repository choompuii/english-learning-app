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
  }
];
