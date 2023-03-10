import { useState } from "react"
import cardData from "./cardData"
import CardData from "./cardData"
import CardNav from "./cardNav"
import Guess from "./Guess"

const cardContent = () => {

  


  // import the array of objects from cardData.jsx    
  const cardObject = CardData()
  const [currentCard, setCurrentCard] = useState(0);
  // use the useState hook to create a state variable called card
  // card will be the first card in the array of objects
  // setCard will change the state of the card to display the next card in the array
  const [card, setCard] = useState(cardObject[0])

  // use the useState hook to create a state variable called numCards
  const [numCards] = useState(cardObject.length)
  const [categoryIcon] = useState(cardObject[0].category)

  // flip card to show answer and hide answer
  const [buttonText, setButtonText] = useState("Show Answer"); // set initial button text to "Show Answer"
  const [showAnswer, setShowAnswer] = useState(false); // set initial state of answer to false

  const flipCard = () => {
     // flip animation on click
    const card = document.querySelector(".bg-flip");
    card.classList.toggle("flip");

    // if showAnswer is false, set showAnswer to true and change button text to "Show Question"

    if (!showAnswer) {
      setShowAnswer(true);
      setButtonText("Show Question");
    } else {
      setShowAnswer(false);
      setButtonText("Show Answer");
    }
  };


  const nextCard = () => {
    for (let i = 0; i < cardObject.length; i++) { // loop through cardObject
      if (card.cardID === i) { // if cardID matches index
        setCard(cardObject[i + 1]); // set card to next card
        setShowAnswer(false); // hide answer
        setButtonText("Show Answer"); // reset button text
        if (i === cardObject.length - 1) { // if cardID is last card in array
          setCard(cardObject[0]); // set card to first card in array
          setShowAnswer(false); // hide answer
          setButtonText("Show Answer"); // reset button text
        }
        break;
      }
    }
  };

  const prevCard = () => {
    const currentCardIndex = cardObject.findIndex(c => c.cardID === card.cardID); // find index of current card
    // if current card is first card in array, set previous card to last card in array, else set previous card to current card - 1
    const previousCardIndex = currentCardIndex === 0 ? cardObject.length - 1 : currentCardIndex - 1;
    const previousCard = cardObject[previousCardIndex]; // set previous card to cardObject at previousCardIndex
    setCard(previousCard);
    setShowAnswer(false);
    setButtonText("Show Answer");
  };

  // generate random card
  const randomCard = () => {
    const randomCardIndex = Math.floor(Math.random() * cardObject.length); // generate random number between 0 and length of cardObject
    const randomCard = cardObject[randomCardIndex]; // set randomCard to cardObject at randomCardIndex
    setCard(randomCard);
    setShowAnswer(false);
    setButtonText("Show Answer");
  };


// Guess.jsx is a component that will be used to check the user's answer
// import the Guess component
// pass the card object to the Guess component

  return (
<>

      <a href="/" className="button border bg-gray-200 border-black w-fit h-fit mx-auto position absolute left-10 top-40 p-1 rounded-md hover:bg-gray-100 cursor-pointer ">
      back
   
    </a>
    

    <div className="container mx-auto w-1/2 max-sm:w-full max-sm:p-4 drop-shadow-2xl mx-auto">
      {/* number of cards */}
      <div className="flex justify-center items-center mb-10">
        <p className="font-thin drop-shadow-md">Number of cards: {numCards}</p>
      </div>
     

      <div className="relative w-full h-96">

        {/* Front of card */}
        <div className={`flip w-full h-full rounded-md bg-content bg-top bg-left bg-gradient bg-repeat bg-gray-300 ${showAnswer ? "hidden" : "block"} ${showAnswer}`}>
          <div className="h-full flex flex-col justify-center">
            <div className="p-4">
              <h2 className="bg-flip font-sans drop-shadow-md font-semibold question">{card.question}</h2>
              <p className="bg-flip absolute top-0 left-0 m-4 font-thin drop-shadow-md">Card ID: {card.cardID}</p>
              <p className="absolute top-0 right-0 m-4 font-thin drop-shadow-2xl ">{categoryIcon}</p>
            </div>
            <div className="bg-flip flex justify-center items-center absolute w-full bottom-4">
              <CardNav nextCard={nextCard} prevCard={prevCard} flipCard={flipCard} randomCard={randomCard} buttonText={buttonText} />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className={`flip  w-full h-full rounded-md bg-content bg-gray-300 bg-top bg-left  bg-50 bg-gradient bg-repeat ${showAnswer ? "block" : "hidden"} ${showAnswer} `}>
          <div className="h-full flex flex-col justify-center">
            <div className="p-4">
              <h2 className="bg-flip font-sans font-semibold answer  drop-shadow-md">{card.answer}</h2>
              <p className="bg-flip absolute top-0 left-0 m-4 font-thin  drop-shadow-md">Card ID: {card.cardID}</p>
              <p className="absolute top-0 right-0 m-4 font-thin drop-shadow-2xl">{categoryIcon}</p>
            </div>

            {/* button navigation */}
            <div className="bg-flip flex justify-center items-center absolute w-full bottom-4">
              <CardNav nextCard={nextCard} prevCard={prevCard} flipCard={flipCard} buttonText={buttonText} />

            </div>
          </div>
        </div>
      </div>
      <Guess card={cardData[currentCard]} />
    </div>

</> 

  )

}

export default cardContent

