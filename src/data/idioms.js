// Idioms & Phrasal Verbs for Thai learners of English.
// Static content only — no APIs. 6 categories (3 idiom, 3 phrasal verb).
// Each item: { id, phrase, meaning, thai, example, note? }

export const idiomCategories = [
  {
    id: "everyday-idioms",
    title: "Everyday Idioms",
    thai: "สำนวนในชีวิตประจำวัน",
    type: "idiom",
    icon: "💬",
    level: "A2",
    items: [
      {
        id: "a-piece-of-cake",
        phrase: "a piece of cake",
        meaning: "something very easy to do",
        thai: "ง่ายมาก (ง่ายเหมือนปอกกล้วย)",
        example: "The exam was a piece of cake — I finished in ten minutes.",
        note: "ตรงตัว: ชิ้นเค้ก"
      },
      {
        id: "break-the-ice",
        phrase: "break the ice",
        meaning: "to make people feel more relaxed in a new or awkward situation",
        thai: "ทำลายความเงียบ/ความอึดอัด เพื่อเริ่มพูดคุยกัน",
        example: "He told a funny story to break the ice at the meeting.",
        note: "ตรงตัว: ทำให้น้ำแข็งแตก"
      },
      {
        id: "hit-the-sack",
        phrase: "hit the sack",
        meaning: "to go to bed",
        thai: "เข้านอน",
        example: "I am really tired, so I am going to hit the sack.",
        note: "พูดว่า hit the hay ก็ได้"
      },
      {
        id: "under-the-weather",
        phrase: "under the weather",
        meaning: "feeling slightly ill",
        thai: "รู้สึกไม่ค่อยสบาย ป่วยนิดหน่อย",
        example: "She stayed home today because she was feeling under the weather.",
        note: "ไม่ได้เกี่ยวกับสภาพอากาศจริง ๆ"
      },
      {
        id: "once-in-a-blue-moon",
        phrase: "once in a blue moon",
        meaning: "very rarely",
        thai: "นาน ๆ ครั้ง แทบไม่เกิดขึ้นเลย",
        example: "We only eat out once in a blue moon because it is expensive.",
        note: "ตรงตัว: ครั้งหนึ่งตอนพระจันทร์สีน้ำเงิน"
      },
      {
        id: "cost-an-arm-and-a-leg",
        phrase: "cost an arm and a leg",
        meaning: "to be very expensive",
        thai: "แพงมาก แพงหูฉี่",
        example: "That new phone costs an arm and a leg.",
        note: "ตรงตัว: ราคาเท่าแขนกับขา"
      },
      {
        id: "hit-the-nail-on-the-head",
        phrase: "hit the nail on the head",
        meaning: "to describe exactly what is causing a situation or problem",
        thai: "พูดถูกเผง โดนใจตรงประเด็น",
        example: "You hit the nail on the head — that is exactly why the plan failed.",
        note: "ตรงตัว: ตอกตะปูโดนหัวพอดี"
      },
      {
        id: "call-it-a-day",
        phrase: "call it a day",
        meaning: "to stop working on something for the day",
        thai: "เลิกงานสำหรับวันนี้ พอแค่นี้ก่อน",
        example: "We have done enough for now, so let us call it a day.",
        note: null
      },
      {
        id: "get-out-of-hand",
        phrase: "get out of hand",
        meaning: "to become impossible to control",
        thai: "เกินการควบคุม บานปลาย",
        example: "The party got out of hand when too many people showed up.",
        note: null
      },
      {
        id: "on-the-same-page",
        phrase: "on the same page",
        meaning: "to agree or have the same understanding about something",
        thai: "เข้าใจตรงกัน มองไปในทางเดียวกัน",
        example: "Before we start, let us make sure we are on the same page.",
        note: "ตรงตัว: อยู่หน้าเดียวกัน"
      },
      {
        id: "keep-an-eye-on",
        phrase: "keep an eye on",
        meaning: "to watch someone or something carefully",
        thai: "คอยดูแล คอยจับตาดู",
        example: "Could you keep an eye on my bag while I buy a ticket?",
        note: null
      },
      {
        id: "in-the-same-boat",
        phrase: "in the same boat",
        meaning: "in the same difficult situation as other people",
        thai: "เจอปัญหาเดียวกัน ตกอยู่ในสถานการณ์เดียวกัน",
        example: "Do not worry, we are all in the same boat with these deadlines.",
        note: "ตรงตัว: อยู่ในเรือลำเดียวกัน"
      }
    ]
  },
  {
    id: "emotions-and-people-idioms",
    title: "Emotions & People Idioms",
    thai: "สำนวนเกี่ยวกับอารมณ์และผู้คน",
    type: "idiom",
    icon: "😊",
    level: "B1",
    items: [
      {
        id: "cold-feet",
        phrase: "get cold feet",
        meaning: "to suddenly become nervous about doing something you planned",
        thai: "เกิดอาการกลัวหรือลังเลก่อนลงมือทำ ใจฝ่อ",
        example: "He got cold feet and cancelled the interview at the last minute.",
        note: "ตรงตัว: เท้าเย็น"
      },
      {
        id: "on-cloud-nine",
        phrase: "on cloud nine",
        meaning: "extremely happy",
        thai: "มีความสุขสุด ๆ ดีใจจนตัวลอย",
        example: "She has been on cloud nine since she passed the exam.",
        note: "ตรงตัว: อยู่บนเมฆที่เก้า"
      },
      {
        id: "a-pain-in-the-neck",
        phrase: "a pain in the neck",
        meaning: "an annoying person or thing",
        thai: "คนหรือสิ่งที่น่ารำคาญ ตัวปัญหา",
        example: "Filling in all these forms is a real pain in the neck.",
        note: "ตรงตัว: อาการปวดคอ"
      },
      {
        id: "down-in-the-dumps",
        phrase: "down in the dumps",
        meaning: "feeling sad or depressed",
        thai: "รู้สึกเศร้า หดหู่ ห่อเหี่ยว",
        example: "He has been down in the dumps since his dog died.",
        note: null
      },
      {
        id: "have-a-heart-of-gold",
        phrase: "have a heart of gold",
        meaning: "to be very kind and generous",
        thai: "เป็นคนใจดีมาก จิตใจงาม",
        example: "My grandmother has a heart of gold and helps everyone.",
        note: "ตรงตัว: มีหัวใจที่ทำจากทอง"
      },
      {
        id: "lose-your-temper",
        phrase: "lose your temper",
        meaning: "to suddenly become very angry",
        thai: "โมโห ควบคุมอารมณ์ไม่อยู่",
        example: "Try not to lose your temper when the kids are noisy.",
        note: null
      },
      {
        id: "keep-your-chin-up",
        phrase: "keep your chin up",
        meaning: "to stay cheerful in a difficult situation",
        thai: "ทำใจให้เข้มแข็ง อย่าท้อ สู้ ๆ",
        example: "I know things are hard now, but keep your chin up.",
        note: "ตรงตัว: เชิดคางขึ้น"
      },
      {
        id: "a-couch-potato",
        phrase: "a couch potato",
        meaning: "a lazy person who watches a lot of television",
        thai: "คนขี้เกียจที่เอาแต่นอนดูทีวี",
        example: "Since he lost his job, he has become a real couch potato.",
        note: "ตรงตัว: มันฝรั่งบนโซฟา"
      },
      {
        id: "the-life-and-soul-of-the-party",
        phrase: "the life and soul of the party",
        meaning: "a lively, fun person who everyone enjoys being around",
        thai: "คนที่เป็นตัวชูโรงในงาน สนุกสนานทำให้บรรยากาศครึกครื้น",
        example: "With his jokes and energy, Tom is always the life and soul of the party.",
        note: null
      },
      {
        id: "have-butterflies-in-your-stomach",
        phrase: "have butterflies in your stomach",
        meaning: "to feel very nervous, usually before something important",
        thai: "รู้สึกตื่นเต้น ประหม่า ใจเต้นตุ๊บ ๆ",
        example: "I had butterflies in my stomach before my first speech.",
        note: "ตรงตัว: มีผีเสื้อในท้อง"
      },
      {
        id: "get-on-someones-nerves",
        phrase: "get on someone's nerves",
        meaning: "to annoy someone",
        thai: "ทำให้คนอื่นรำคาญ กวนประสาท",
        example: "That loud music is really getting on my nerves.",
        note: null
      },
      {
        id: "feel-blue",
        phrase: "feel blue",
        meaning: "to feel sad or unhappy",
        thai: "รู้สึกเศร้า หม่นหมอง",
        example: "I always feel blue on rainy Sunday afternoons.",
        note: "สีฟ้า (blue) ในภาษาอังกฤษสื่อถึงความเศร้า"
      }
    ]
  },
  {
    id: "business-idioms",
    title: "Business Idioms",
    thai: "สำนวนในที่ทำงาน",
    type: "idiom",
    icon: "💼",
    level: "B2",
    items: [
      {
        id: "a-ballpark-figure",
        phrase: "a ballpark figure",
        meaning: "an approximate number or rough estimate",
        thai: "ตัวเลขคร่าว ๆ ประมาณการ",
        example: "I cannot give you an exact price, but a ballpark figure would be around 5,000 baht.",
        note: "มาจากศัพท์กีฬาเบสบอล"
      },
      {
        id: "back-to-the-drawing-board",
        phrase: "back to the drawing board",
        meaning: "to start planning something again because the first plan failed",
        thai: "กลับไปเริ่มวางแผนใหม่ตั้งแต่ต้น",
        example: "The client rejected our design, so it is back to the drawing board.",
        note: "ตรงตัว: กลับไปที่กระดานร่างแบบ"
      },
      {
        id: "get-the-ball-rolling",
        phrase: "get the ball rolling",
        meaning: "to start an activity or process",
        thai: "เริ่มลงมือทำ เริ่มดำเนินการ",
        example: "Let us get the ball rolling by introducing everyone on the team.",
        note: "ตรงตัว: ทำให้ลูกบอลกลิ้งไป"
      },
      {
        id: "cut-corners",
        phrase: "cut corners",
        meaning: "to do something in the cheapest or quickest way, often reducing quality",
        thai: "ทำแบบลวก ๆ ตัดขั้นตอนเพื่อประหยัดเวลาหรือเงิน",
        example: "If we cut corners on safety, someone could get hurt.",
        note: null
      },
      {
        id: "think-outside-the-box",
        phrase: "think outside the box",
        meaning: "to think in a new and creative way",
        thai: "คิดนอกกรอบ คิดสร้างสรรค์แบบใหม่ ๆ",
        example: "We need to think outside the box to beat our competitors.",
        note: "ตรงตัว: คิดนอกกล่อง"
      },
      {
        id: "on-the-same-wavelength",
        phrase: "on the same wavelength",
        meaning: "to understand each other well and think in a similar way",
        thai: "คิดตรงกัน เข้าใจกันดี",
        example: "My new manager and I are really on the same wavelength.",
        note: null
      },
      {
        id: "the-bottom-line",
        phrase: "the bottom line",
        meaning: "the most important fact or the final result, especially about money",
        thai: "ประเด็นสำคัญที่สุด/ผลกำไรขาดทุนสุทธิ",
        example: "The bottom line is that we need to increase sales this quarter.",
        note: "ตรงตัว: บรรทัดล่างสุด (ในงบการเงิน)"
      },
      {
        id: "in-the-red",
        phrase: "in the red",
        meaning: "losing money or in debt",
        thai: "ขาดทุน เป็นหนี้ ติดลบ",
        example: "The company has been in the red for three years in a row.",
        note: 'ตรงข้ามคือ "in the black" (มีกำไร)'
      },
      {
        id: "learn-the-ropes",
        phrase: "learn the ropes",
        meaning: "to learn how to do a particular job or task",
        thai: "เรียนรู้งาน เรียนรู้วิธีทำงาน",
        example: "It took me a few weeks to learn the ropes at my new job.",
        note: null
      },
      {
        id: "a-win-win-situation",
        phrase: "a win-win situation",
        meaning: "a situation where everyone benefits",
        thai: "สถานการณ์ที่ทุกฝ่ายได้ประโยชน์ (วิน-วิน)",
        example: "Working from home is a win-win situation for staff and the company.",
        note: null
      },
      {
        id: "raise-the-bar",
        phrase: "raise the bar",
        meaning: "to set a higher standard than before",
        thai: "ยกระดับมาตรฐานให้สูงขึ้น",
        example: "Their new product has really raised the bar for the whole industry.",
        note: "ตรงตัว: ยกคานให้สูงขึ้น (กีฬากระโดดสูง)"
      },
      {
        id: "touch-base",
        phrase: "touch base",
        meaning: "to briefly talk to someone to share or check information",
        thai: "ติดต่อพูดคุยกันสั้น ๆ เพื่ออัปเดตข้อมูล",
        example: "Let us touch base next week to see how the project is going.",
        note: "มาจากกีฬาเบสบอล"
      }
    ]
  },
  {
    id: "common-phrasal-verbs",
    title: "Common Phrasal Verbs",
    thai: "กริยาวลีที่ใช้บ่อย",
    type: "phrasal",
    icon: "🔤",
    level: "A2",
    items: [
      {
        id: "get-up",
        phrase: "get up",
        meaning: "to leave your bed after sleeping; to stand up",
        thai: "ตื่นนอน ลุกขึ้น",
        example: "I usually get up at six o'clock every morning.",
        note: null
      },
      {
        id: "turn-on",
        phrase: "turn on",
        meaning: "to make a machine or light start working",
        thai: "เปิด (เครื่องใช้ไฟฟ้า ไฟ)",
        example: "Please turn on the lights, it is getting dark.",
        note: "แยกได้: turn it on"
      },
      {
        id: "turn-off",
        phrase: "turn off",
        meaning: "to make a machine or light stop working",
        thai: "ปิด (เครื่องใช้ไฟฟ้า ไฟ)",
        example: "Do not forget to turn off the TV before you go to bed.",
        note: "แยกได้: turn it off"
      },
      {
        id: "look-for",
        phrase: "look for",
        meaning: "to try to find someone or something",
        thai: "มองหา ค้นหา",
        example: "I am looking for my keys — have you seen them?",
        note: "แยกไม่ได้: look for it"
      },
      {
        id: "give-up",
        phrase: "give up",
        meaning: "to stop trying to do something",
        thai: "ยอมแพ้ เลิกล้ม",
        example: "Do not give up — you are almost finished!",
        note: "แยกได้: give it up"
      },
      {
        id: "find-out",
        phrase: "find out",
        meaning: "to discover a fact or piece of information",
        thai: "ค้นพบ หาข้อมูล รู้ความจริง",
        example: "I want to find out what time the shop opens.",
        note: "แยกได้: find it out"
      },
      {
        id: "put-on",
        phrase: "put on",
        meaning: "to dress yourself in a piece of clothing",
        thai: "สวมใส่ (เสื้อผ้า)",
        example: "It is cold outside, so put on your jacket.",
        note: "แยกได้: put it on"
      },
      {
        id: "take-off",
        phrase: "take off",
        meaning: "to remove a piece of clothing; (of a plane) to leave the ground",
        thai: "ถอด (เสื้อผ้า); (เครื่องบิน) ทะยานขึ้น",
        example: "Please take off your shoes before you come inside.",
        note: "แยกได้: take it off"
      },
      {
        id: "wake-up",
        phrase: "wake up",
        meaning: "to stop sleeping",
        thai: "ตื่น (จากการหลับ)",
        example: "I woke up in the middle of the night because of the noise.",
        note: "แยกได้: wake me up"
      },
      {
        id: "sit-down",
        phrase: "sit down",
        meaning: "to move from standing to a sitting position",
        thai: "นั่งลง",
        example: "Please sit down and make yourself comfortable.",
        note: null
      },
      {
        id: "come-back",
        phrase: "come back",
        meaning: "to return to a place",
        thai: "กลับมา",
        example: "She went to the shop and came back an hour later.",
        note: null
      },
      {
        id: "go-out",
        phrase: "go out",
        meaning: "to leave home to do something, especially for fun",
        thai: "ออกไปข้างนอก ออกไปเที่ยว",
        example: "We are going out for dinner tonight.",
        note: null
      },
      {
        id: "pick-up",
        phrase: "pick up",
        meaning: "to lift something up; to collect someone or something",
        thai: "หยิบขึ้นมา; ไปรับ (คนหรือของ)",
        example: "Can you pick up the children from school today?",
        note: "แยกได้: pick it up"
      },
      {
        id: "write-down",
        phrase: "write down",
        meaning: "to record something on paper",
        thai: "จดบันทึก เขียนลง",
        example: "Let me write down your phone number.",
        note: "แยกได้: write it down"
      }
    ]
  },
  {
    id: "travel-and-daily-phrasal-verbs",
    title: "Travel & Daily Phrasal Verbs",
    thai: "กริยาวลีสำหรับการเดินทางและชีวิตประจำวัน",
    type: "phrasal",
    icon: "✈️",
    level: "B1",
    items: [
      {
        id: "check-in",
        phrase: "check in",
        meaning: "to register at a hotel or airport when you arrive",
        thai: "เช็คอิน ลงทะเบียนเข้าพัก/ก่อนขึ้นเครื่อง",
        example: "We need to check in at the hotel before three o'clock.",
        note: 'ตรงข้าม: check out (เช็คเอาต์)'
      },
      {
        id: "check-out",
        phrase: "check out",
        meaning: "to pay and leave a hotel",
        thai: "เช็คเอาต์ ชำระเงินและออกจากโรงแรม",
        example: "What time do we have to check out tomorrow?",
        note: null
      },
      {
        id: "set-off",
        phrase: "set off",
        meaning: "to start a journey",
        thai: "ออกเดินทาง",
        example: "We set off early to avoid the traffic.",
        note: "คล้ายกับ set out"
      },
      {
        id: "run-out-of",
        phrase: "run out of",
        meaning: "to have no more of something left",
        thai: "ใช้จนหมด ของหมด",
        example: "We ran out of petrol in the middle of nowhere.",
        note: "แยกไม่ได้: run out of it"
      },
      {
        id: "look-forward-to",
        phrase: "look forward to",
        meaning: "to feel excited about something that is going to happen",
        thai: "ตั้งตารอ รอคอยด้วยความตื่นเต้น",
        example: "I am really looking forward to our trip to Chiang Mai.",
        note: "ตามด้วยคำนามหรือ verb+ing: look forward to seeing you"
      },
      {
        id: "get-on",
        phrase: "get on",
        meaning: "to enter a bus, train, plane or boat",
        thai: "ขึ้น (รถเมล์ รถไฟ เครื่องบิน เรือ)",
        example: "Hurry up, we need to get on the train now.",
        note: 'ตรงข้าม: get off (ลงจากรถ)'
      },
      {
        id: "get-off",
        phrase: "get off",
        meaning: "to leave a bus, train, plane or boat",
        thai: "ลงจาก (รถเมล์ รถไฟ เครื่องบิน เรือ)",
        example: "We get off at the next stop.",
        note: null
      },
      {
        id: "drop-off",
        phrase: "drop off",
        meaning: "to take someone or something to a place and leave them there",
        thai: "ไปส่ง (คนหรือของ) แล้วออกมา",
        example: "I will drop you off at the airport on my way to work.",
        note: "แยกได้: drop it off"
      },
      {
        id: "pick-up-travel",
        phrase: "pick up",
        meaning: "to collect someone or something from a place",
        thai: "ไปรับ (คนหรือของ)",
        example: "I will pick you up from the station at eight.",
        note: "แยกได้: pick you up"
      },
      {
        id: "get-back",
        phrase: "get back",
        meaning: "to return to a place",
        thai: "กลับมาถึง กลับ",
        example: "We got back from our holiday last night.",
        note: null
      },
      {
        id: "go-away",
        phrase: "go away",
        meaning: "to leave a place, especially for a holiday",
        thai: "ไปเที่ยวต่างเมือง/ต่างจังหวัด; ไปให้พ้น",
        example: "We are going away for the weekend to relax by the sea.",
        note: null
      },
      {
        id: "eat-out",
        phrase: "eat out",
        meaning: "to have a meal at a restaurant instead of at home",
        thai: "ออกไปกินข้าวนอกบ้าน",
        example: "Let us eat out tonight — I do not feel like cooking.",
        note: null
      },
      {
        id: "wake-up-daily",
        phrase: "wake up",
        meaning: "to stop sleeping and become conscious",
        thai: "ตื่นนอน",
        example: "I have to wake up at five to catch the early flight.",
        note: "แยกได้: wake me up"
      },
      {
        id: "hurry-up",
        phrase: "hurry up",
        meaning: "to do something more quickly",
        thai: "รีบ เร่งมือ",
        example: "Hurry up, or we will miss the bus!",
        note: null
      }
    ]
  },
  {
    id: "business-phrasal-verbs",
    title: "Business Phrasal Verbs",
    thai: "กริยาวลีในที่ทำงาน",
    type: "phrasal",
    icon: "📊",
    level: "B2",
    items: [
      {
        id: "carry-out",
        phrase: "carry out",
        meaning: "to do or complete a task, plan or piece of work",
        thai: "ดำเนินการ ทำให้สำเร็จ ปฏิบัติตาม",
        example: "The team will carry out a survey before launching the product.",
        note: "แยกได้: carry it out"
      },
      {
        id: "put-off",
        phrase: "put off",
        meaning: "to delay something to a later time",
        thai: "เลื่อนออกไป ผัดผ่อน",
        example: "We had to put off the meeting until next Monday.",
        note: "แยกได้: put it off"
      },
      {
        id: "set-up",
        phrase: "set up",
        meaning: "to start or arrange something, such as a business or a meeting",
        thai: "จัดตั้ง ก่อตั้ง ตั้งค่า จัดเตรียม",
        example: "They set up a new branch in Bangkok last year.",
        note: "แยกได้: set it up"
      },
      {
        id: "deal-with",
        phrase: "deal with",
        meaning: "to take action to handle a problem, task or person",
        thai: "จัดการ รับมือ (ปัญหา งาน หรือคน)",
        example: "Our support team deals with customer complaints every day.",
        note: "แยกไม่ได้: deal with it"
      },
      {
        id: "follow-up",
        phrase: "follow up",
        meaning: "to take further action after something to check on progress",
        thai: "ติดตามผล สานต่อ",
        example: "I will follow up with the client after the presentation.",
        note: "คำนาม: a follow-up"
      },
      {
        id: "lay-off",
        phrase: "lay off",
        meaning: "to stop employing someone, usually because there is not enough work",
        thai: "ปลดพนักงาน (เพราะงานไม่พอ ไม่ใช่ความผิดพนักงาน)",
        example: "The factory had to lay off two hundred workers this year.",
        note: "แยกได้: lay them off"
      },
      {
        id: "take-over",
        phrase: "take over",
        meaning: "to take control of a company or a job",
        thai: "เข้าครอบครอง เทกโอเวอร์ รับช่วงต่อ",
        example: "A larger company took over our firm last month.",
        note: "แยกได้: take it over"
      },
      {
        id: "hand-in",
        phrase: "hand in",
        meaning: "to give a document or piece of work to someone in authority",
        thai: "ส่ง (เอกสาร งาน ใบลาออก)",
        example: "Please hand in your report by Friday.",
        note: "แยกได้: hand it in"
      },
      {
        id: "point-out",
        phrase: "point out",
        meaning: "to tell someone about a fact or draw attention to something",
        thai: "ชี้ให้เห็น ระบุ ทักท้วง",
        example: "She pointed out a mistake in the final figures.",
        note: "แยกได้: point it out"
      },
      {
        id: "work-out",
        phrase: "work out",
        meaning: "to find a solution or calculate something; to develop successfully",
        thai: "คิดหาทางออก คำนวณ; ลงเอยด้วยดี",
        example: "We need to work out how much the project will cost.",
        note: "แยกได้: work it out"
      },
      {
        id: "bring-up",
        phrase: "bring up",
        meaning: "to start talking about a subject",
        thai: "ยกขึ้นมาพูด หยิบยกประเด็น",
        example: "I will bring up the budget issue at tomorrow's meeting.",
        note: "แยกได้: bring it up"
      },
      {
        id: "go-over",
        phrase: "go over",
        meaning: "to examine or review something carefully",
        thai: "ตรวจทาน ทบทวน ดูอย่างละเอียด",
        example: "Let us go over the contract before we sign it.",
        note: "แยกไม่ได้: go over it"
      },
      {
        id: "fill-in",
        phrase: "fill in",
        meaning: "to complete a form by writing information in the spaces; to do someone's job temporarily",
        thai: "กรอก (แบบฟอร์ม); ทำงานแทนชั่วคราว",
        example: "Please fill in this application form and sign at the bottom.",
        note: "แยกได้: fill it in; อเมริกันมักใช้ fill out"
      },
      {
        id: "call-off",
        phrase: "call off",
        meaning: "to cancel an event or plan",
        thai: "ยกเลิก (งานหรือแผน)",
        example: "They called off the conference because of the storm.",
        note: "แยกได้: call it off"
      }
    ]
  }
]
