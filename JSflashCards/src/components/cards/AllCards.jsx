import { useEffect, useState } from "react"
// import NodeData from "./NodeData"
import CardNav from "../CardNav"
import cardData from "../data/cardData"



const cardContent = () => {
  const cardObject = cardData();
  

const topicCards = cardObject

const [currentCards, setCurrentCards] = useState([]);
const [card, setCard] = useState(topicCards[0])
const [numCards] = useState(topicCards.length)

useEffect(() => { 
  setCurrentCards((prevCards) => {
if (prevCards.length === 0) {
  return topicCards;
} else {
  return prevCards;
}

  });
}, [topicCards]);



  const nextCard = () => {
    const currentIndex = currentCards.findIndex((c) => c.cardID === card.cardID); // find index of current card in filtered array
    const nextIndex = (currentIndex + 1) % currentCards.length; // get index of next card, wrapping around to beginning if at end of array
    const nextCard = currentCards[nextIndex]; // get next card object
    setCard(nextCard); // set state to next card
    setShowAnswer(false); // hide answer
    setButtonText("Show Answer"); // reset button text
  };
  
  const prevCard = () => {
    const currentIndex = currentCards.findIndex((c) => c.cardID === card.cardID); // find index of current card in filtered array
    const prevIndex = (currentIndex - 1 + currentCards.length) % currentCards.length; // get index of previous card, wrapping around to end if at beginning of array
    const prevCard = currentCards[prevIndex]; // get previous card object
    setCard(prevCard); // set state to previous card
    setShowAnswer(false); // hide answer
    setButtonText("Show Answer"); // reset button text
  };

  const randomCard = () => {
    const randomIndex = Math.floor(Math.random() * currentCards.length); // get random index
    const randomCard = currentCards[randomIndex]; // get random card object
    setCard(randomCard); // set state to random card
    setShowAnswer(false); // hide answer
    setButtonText("Show Answer"); // reset button text
  };


   

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
        <div className={`flip border border-black w-full h-full rounded-md bg-content ${showAnswer ? "hidden" : "block"} ${showAnswer}`}>
          <div className="h-full flex flex-col justify-center">
            <div className="p-4">
              <h2 className="bg-flip font-sans drop-shadow-md font-semibold question">{card.question}</h2>
              <p className="bg-flip absolute top-0 left-0 m-4 font-thin drop-shadow-md">Card ID: {card.cardID}</p>
         
            </div>
            <div className="bg-flip flex justify-center items-center absolute w-full bottom-4">
              <CardNav nextCard={nextCard} prevCard={prevCard} flipCard={flipCard} randomCard={randomCard}  buttonText={buttonText}  />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className={`flip border border-black w-full h-full rounded-md bg-content ${showAnswer ? "block" : "hidden"} ${showAnswer} `}>
          <div className="h-full flex flex-col justify-center">
            <div className="p-4">
              <h2 className="bg-flip font-sans font-semibold answer  drop-shadow-md">{card.answer}</h2>
              <p className="bg-flip absolute top-0 left-0 m-4 font-thin  drop-shadow-md">Card ID: {card.cardID}</p>
              <p className="absolute top-0 right-0 m-4 font-thin drop-shadow-2xl"></p>
            </div>

            {/* button navigation */}
            <div className="bg-flip flex justify-center items-center absolute w-full bottom-4">
              <CardNav nextCard={nextCard} prevCard={prevCard} flipCard={flipCard} buttonText={buttonText} />

            </div>
          </div>
        </div>
      </div>
  
    </div>
    </>

  )

}

export default cardContent

