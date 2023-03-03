const cardData = () => {

const cardObject = [
    {
        cardID: 0,
        question: "What is the difference between a function declaration and a function expression?",
        answer: "A function declaration is hoisted to the top of the scope, while a function expression is not. A function declaration can be called before it is defined, while a function expression cannot.",
        category: "JavaScript"
      },
      {
        cardID: 1,
        question: "What is the difference between == and ===?",
        answer: "The == operator will compare two values for equality, but will not check the type of the values. The === operator will compare two values for equality, and will also check the type of the values.",
        category: "JavaScript"
      },
      {
        cardID: 2,
        question: "What is the difference between a class and a constructor function?",
        answer: "A class is a blueprint for creating objects, while a constructor function is a function that creates objects. A class is not hoisted, while a constructor function is hoisted. A class cannot be called without the new keyword, while a constructor function can be called without the new keyword.",
        category: "JavaScript"
      },
      {
        cardID: 3,
        question: "What is the difference between a class and an object?",
        answer: "A class is a blueprint for creating objects, while an object is an instance of a class.",
        category: "JavaScript"
      }

      
]

return cardObject

}

export default cardData

//
