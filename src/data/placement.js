// Placement-test question bank.
//
// Six CEFR levels (A1 → C2), each with a small set of multiple-choice items that
// grow in difficulty. The placement page walks the levels bottom-up and stops as
// soon as the learner clearly fails a level, so most people only see a handful of
// questions. Items mix grammar and vocabulary — the two signals that separate
// levels most cleanly for a self-study learner.
//
// Shape: { q, options: string[4], answer: <index of correct option>, note? }
// `note` (Thai) is shown on the result review to explain the point.

export const placementBank = [
  {
    level: 'A1',
    questions: [
      { q: 'She ___ a teacher.', options: ['is', 'are', 'am', 'be'], answer: 0 },
      { q: 'I have two ___.', options: ['childs', 'childrens', 'children', 'child'], answer: 2 },
      { q: 'Choose the greeting: "___ morning!"', options: ['Good', 'Nice', 'Well', 'Fine'], answer: 0 },
      { q: 'They ___ to school every day.', options: ['goes', 'go', 'going', 'gone'], answer: 1 },
    ],
  },
  {
    level: 'A2',
    questions: [
      { q: 'Yesterday I ___ to the market.', options: ['go', 'went', 'gone', 'going'], answer: 1 },
      { q: 'This box is ___ than that one.', options: ['heavy', 'heavier', 'heaviest', 'more heavy'], answer: 1 },
      { q: 'We ___ watching TV when you called.', options: ['was', 'were', 'are', 'is'], answer: 1 },
      { q: '"Reliable" is closest in meaning to:', options: ['lazy', 'trustworthy', 'expensive', 'quiet'], answer: 1 },
    ],
  },
  {
    level: 'B1',
    questions: [
      { q: "I've lived here ___ 2015.", options: ['for', 'since', 'from', 'during'], answer: 1 },
      { q: 'If it rains, we ___ stay home.', options: ['will', 'would', 'are', 'have'], answer: 0 },
      { q: 'The report ___ by the team last week.', options: ['wrote', 'was written', 'has written', 'writes'], answer: 1 },
      { q: '"To postpone" a meeting means to:', options: ['cancel it', 'attend it', 'delay it', 'shorten it'], answer: 2 },
    ],
  },
  {
    level: 'B2',
    questions: [
      { q: 'I wish I ___ more time to prepare.', options: ['have', 'had', 'will have', 'having'], answer: 1 },
      { q: 'She spoke ___ that everyone understood.', options: ['so clear', 'so clearly', 'such clear', 'clear enough'], answer: 1 },
      { q: 'By next year, he ___ here for a decade.', options: ['will work', 'will have worked', 'works', 'has worked'], answer: 1 },
      { q: '"A tedious task" is one that is:', options: ['exciting', 'urgent', 'boring', 'dangerous'], answer: 2 },
    ],
  },
  {
    level: 'C1',
    questions: [
      { q: 'Not until the deadline passed ___ the mistake.', options: ['he noticed', 'did he notice', 'he did notice', 'noticed he'], answer: 1 },
      { q: 'The proposal, ___ merits, was rejected.', options: ['despite of its', 'notwithstanding its', 'although its', 'in spite its'], answer: 1 },
      { q: '"To be candid" means to be:', options: ['secretive', 'frank and honest', 'polite', 'undecided'], answer: 1 },
      { q: 'Had I known, I ___ differently.', options: ['would act', 'would have acted', 'had acted', 'will act'], answer: 1 },
    ],
  },
  {
    level: 'C2',
    questions: [
      { q: 'His argument was so ___ that no one could refute it.', options: ['cogent', 'cogitate', 'cognate', 'coherency'], answer: 0 },
      { q: 'Choose the word meaning "brief and to the point":', options: ['verbose', 'succinct', 'ambiguous', 'redundant'], answer: 1 },
      { q: 'Rarely ___ such a compelling performance.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], answer: 1 },
      { q: '"To exacerbate a problem" is to make it:', options: ['disappear', 'clearer', 'worse', 'smaller'], answer: 2 },
    ],
  },
]

// Ordered list of levels — used to walk the ladder and to map a result back to a level.
export const PLACEMENT_LEVELS = placementBank.map(b => b.level)
