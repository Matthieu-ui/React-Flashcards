// carbon:logo-react
import { Icon } from '@iconify-icon/react';
const cardData = () => {

  const cardObject = [

    {
      cardID: 0,
      question: "How do you handle errors in React?",
      answer: "You can use the componentDidCatch lifecycle method to catch errors in the child components and display a fallback UI.",
      category: <Icon className='text-2xl' icon="skill-icons:react-dark" />
    },

    {
      cardID: 1,
      question: "What is React?",
      answer: "React is an open-source JavaScript library that is used for building user interfaces.",
      category: "React"
    },
    {
      cardID: 2,
      question: "What are the advantages of using React?",
      answer: "React provides a high level of performance, supports server-side rendering, has a large community, and has a large number of reusable components.",
      category: "React"
    },
    {
      cardID: 3,
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
      category: "React"
    },
    {
      cardID: 4,
      question: "What is the difference between Props and State in React?",
      answer: "Props are passed to a component from its parent and cannot be changed by the component, while State is internal to a component and can be changed by the component.",
      category: "React"
    },
    {
      cardID: 5,
      question: "What is the Virtual DOM?",
      answer: "The Virtual DOM is a lightweight representation of the actual DOM in memory, which is used by React to track changes and update the actual DOM efficiently.",
      category: "React"
    },
    {
      cardID: 6,
      question: "What are React Hooks?",
      answer: "React Hooks are functions that allow you to use state and other React features in functional components.",
      category: "React"
    },
    {
      cardID: 7,
      question: "What is the difference between useEffect and componentDidMount in React?",
      answer: "useEffect is a hook that is called after every render of a component, while componentDidMount is a lifecycle method that is called once after the component is mounted.",
      category: "React"
    },
    {
      cardID: 8,
      question: "What is Redux?",
      answer: "Redux is a state management library for JavaScript applications, which provides a predictable and centralized way to manage application state.",
      category: "React"
    },
    {
      cardID: 10,
      question: "What is the Virtual DOM in React?",
      answer: "The Virtual DOM is a lightweight representation of the actual DOM in memory, which React uses to determine the most efficient way to update the actual DOM. When a component’s state changes, React updates the Virtual DOM, calculates the most efficient way to update the actual DOM, and makes the necessary changes. This process is known as reconciliation.",
      category: "React"
    },
    {
      cardID: 11,
      question: "What is the significance of keys in React lists?",
      answer: "Keys are used to uniquely identify elements in a React list. When elements are added, moved, or removed from a list, React uses keys to determine which elements have changed, and updates the DOM accordingly. Keys should be unique, and should not change over time. This helps React optimize updates and improve performance.",
      category: "React"
    },

    {
      cardID: 12,
      question: "What is Node.js?",
      answer: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      category: "Node"
    },
    {
      cardID: 13,
      question: "What is Node.js used for?",
      answer: "Node.js is used for developing web applications and tools that run on the server-side.",
      category: "Node"
    },

    {
      cardID: 14,
      question: "What are the advantages of using Node.js?",
      answer: "Node.js provides a high level of performance, supports server-side rendering, has a large community, and has a large number of reusable components.",
      category: "Node"
    },
    {
      cardID: 15,
      question: "What is the difference between Node.js and JavaScript?",
      answer: "Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside a web browser, while JavaScript is a programming language that is used to create web pages.",
      category: "Node"

    },
    {
      cardID: 16,
      question: "What is the difference between Node.js and React?",
      answer: "Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside a web browser, while React is a JavaScript library for building user interfaces.",
      category: "Node"
    },
    {
      cardID: 17,
      question: "What is the difference between Node.js and Express?",
      answer: "Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside a web browser, while Express is a web application framework for Node.js.",
      category: "Node"
    },

    // MONGODB CARD DATA //

    {
      cardID: 18,
      question: "What is MongoDB?",
      answer: "MongoDB is a cross-platform, document-oriented, NoSQL database program that uses JSON-like documents with optional schemas.",
      category: "MongoDB"
    },

    {
      cardID: 19,
      question: "What is MongoDB used for?",
      answer: "MongoDB is used for developing web applications and tools that run on the server-side.",
      category: "MongoDB"
    },

    {
      cardID: 20,
      question: "What is the difference between MongoDB and SQL?",
      answer: "MongoDB is a NoSQL database program, while SQL is a relational database management system.",
      category: "MongoDB"
    },

    {
      cardID: 21,
      question: "What is the difference between a Non-relational database, and a relational database?",
      answer: "A relational database is a database that stores and provides access to data points that are related to one another. A non-relational database is a database that stores and provides access to data points that are not related to one another.",
      category: "MongoDB"
    },

    // Tailwind CSS CARD DATA //

    {
      cardID: 22,
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
      category: "TailwindCSS"
    },

    {
      cardID: 23,
      question: "What is Tailwind CSS used for?",
      answer: "Tailwind CSS is used for developing web applications and tools that run on the server-side.",
      category: "TailwindCSS"
    },

    {
      cardID: 24,
      question: "What are the advantages of using Tailwind CSS?",
      answer: "Tailwind CSS provides a high level of performance, supports server-side rendering, has a large community, and has a large number of reusable components.",
      category: "TailwindCSS"
    },

    {
      cardID: 25,
      question: "What is the difference between Tailwind CSS and Bootstrap?",
      answer: "Tailwind CSS is a utility-first CSS framework, while Bootstrap is a CSS framework that provides a grid system, prebuilt components, and plugins.",
      category: "TailwindCSS"
    },

    {
      cardID: 26,
      question: "What is the difference between Tailwind CSS and Material UI?",
      answer: "Tailwind CSS is a utility-first CSS framework, while Material UI is a React component library that provides prebuilt components.",
      category: "TailwindCSS"
    },

    {
      cardID: 27,
      question: "What does flex do in Tailwind CSS?",
      answer: "The flex utility in Tailwind CSS is used to set the flex property of an element.",
      category: "TailwindCSS"
    },

    {
      cardID: 28,
      question: "What does grid do in Tailwind CSS?",
      answer: "The grid utility in Tailwind CSS is used to set the display property of an element to grid.",
      category: "TailwindCSS"
    },

    {
      cardID: 29,
      question: "How do you make custom classes in Tailwind CSS?",
      answer: "You can make custom classes in Tailwind CSS by using the @apply directive.",
      category: "TailwindCSS"
    },

    {
      cardID: 30,
      question: "what is the purpose of tailwind.config.js? ",
      answer: "The purpose of tailwind.config.js is to configure Tailwind CSS.",
      category: "TailwindCSS"

    },

    {
      cardID: 31,
      question: "what is PostCSS? ",
      answer: "PostCSS is a tool for transforming CSS with JavaScript.",
      category: "TailwindCSS"

    },

    {
      cardID: 32,
      question: "what would grid grid-cols-3 flex flex-col justify-center items-center bg-gray-200 -do in Tailwind CSS? ",
      answer: "It would set the grid-template-columns property of an element to 3, set the display property of an element to flex, set the flex-direction property of an element to column, set the justify-content property of an element to center, set the align-items property of an element to center, and set the background-color property of an element to gray-200.",
    },

  ]

  return cardObject

}

export default cardData

//
