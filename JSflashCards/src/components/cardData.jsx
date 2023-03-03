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
    }

          
]

return cardObject

}

export default cardData

//
