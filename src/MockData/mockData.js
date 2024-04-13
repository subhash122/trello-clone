const boardsData = [
  {
    id: 1,
    title: 'to do',
    cards: [
      {
        id: 11,
        title: "Task1",
        date: "2022-05-05",
        desc: "Task1 Detail Description",
      },
      {
        id: 12,
        title: "Task2",
        labels: [{ color: "#1ebffa", text: "Frontend" }],
        date: "",
        desc: "Task2 Detail Description",
      },
      {
        id: 13,
        title: "Task3",
        labels: [{ color: "#1ebffa", text: "Frontend" }],
        date: "",
        desc: "Task3 Detail Description",
      },
      {
        id: 14,
        title: "Task4",
        labels: [{ color: "#1ebffa", text: "Frontend" }],
        date: "",
        desc: "Task4 Detail Description",
      },
    ],
  },
  {
    id: 2,
    title: 'pending',
    cards: [
      {
        id: 21,
        title: "Task5",
        date: "",
        desc: "Task5 Detail Description",

      },
    ],
  },
  {
    id: 3,
    title: 'blocked',
    cards: [
      {
        id: 31,
        title: "Task6",
        date: "2022-05-06",
        desc: "Task6 Detail Description",
      },
      {
        id: 32,
        title: "Task32",
        date: "2022-05-06",
        desc: "Task32 Detail Description",
      },
    ],
  },
  {
    id: 4,
    title: 'done',
    cards: [
      {
        id: 41,
        title: "Task7",
        date: "2022-05-04",
        desc: "Task7 Detail Description",
      },
      {
        id: 42,
        title: "Task6",
        date: "2022-05-06",
        desc: "Task42 Detail Description",
      },
    ],
  },

]

const projectsData = [
  {
    id: 1,
    title: 'first order issues',
    desc: 'issues that are first order. can be prioritise first'
  },
  {
    id: 2,
    title: 'dive deep',
    desc: ' indepth concepts of topics in programming. good for begginners. Ac turpis egestas maecenas pharetra convallis posuere'
  },
  {
    id: 3,
    title: 'trackier issues',
    desc: 'contains bugs found on the production appplicaction. Ac turpis egestas maecenas pharetra convallis posuere'
  },
  {
    id: 4,
    title: 'virtual box',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam.'
  },
  {
    id: 5,
    title: 'virtual box',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam.'
  },
  {
    id: 6,
    title: 'virtual box',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam.'
  },
  {
    id: 7,
    title: 'xman series',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam.'
  },
  {
    id: 8,
    title: 'assignment details',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam.'
  }, {
    id: 9,
    title: 'dashboard utilization',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam.'
  },
  {
    id: 10,
    title: 'vaksjdhkjasdasda',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam.'
  }
  ,
  {
    id: 11,
    title: 'asjdhad askjdhads kjadsh',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam.'
  }
  ,
  {
    id: 12,
    title: 'this is the last thing.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et leo duis ut diam quam.'
  }
]

export { boardsData, projectsData }