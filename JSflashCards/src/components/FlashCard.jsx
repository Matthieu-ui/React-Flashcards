import { useState } from "react"
import CardData from "./cardData"
import CardNav from "./cardNav"

const cardContent = () => {

    // import the array of objects from cardData.jsx    
    const cardObject = CardData()

    // use the useState hook to create a state variable called card
    // card will be the first card in the array of objects
    // setCard will change the state of the card to display the next card in the array
    const [card, setCard] = useState(cardObject[0])

    // flip card to show answer and hide answer
    const [buttonText, setButtonText] = useState("Show Answer"); // set initial button text to "Show Answer"
    const [showAnswer, setShowAnswer] = useState(false); // set initial state of answer to false
    
    const flipCard = () => {
      if (showAnswer === true) { // if showAnswer is true
        setButtonText("Show Answer"); // change button text to "Show Answer"
        setShowAnswer(false); // hide answer
      } else if (showAnswer === false) { // if showAnswer is false
        setButtonText("Hide Answer"); // change button text to "Hide Answer"
        setShowAnswer(true); // show answer
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
      for (let i = 0; i < cardObject.length; i++) { // loop through cardObject
        if (card.cardID === i) { // if cardID matches index
          setCard(cardObject[i - 1]); // set card to previous card
          setShowAnswer(false); // hide answer
          setButtonText("Show Answer"); // reset button text
          if (i === 0) { // if cardID is 0
            setCard(cardObject[cardObject.length - 1]); // set card to last card in array
            setShowAnswer(false); // hide answer
            setButtonText("Show Answer"); // reset button text
          }
          break;
        }
      }
    };

    return ( 
      // card container
        <div className="container mx-auto p-10 m-10">
        <div className="relative w-full h-96">

          {/* Front of card */}
          <div className={`w-full h-full rounded-md bg-white ${showAnswer ? "hidden" : "block"} transition-transform duration-500 transform ${showAnswer ? "-rotate-y-180" : "rotate-y-0"} bg-[url('./src/assets/paper-texture.jpg')] overflow-y-auto`}>
            <div className="h-full flex flex-col justify-center">
              <div className="p-4">
                <h2 className="font-sans font-semibold question">{card.question}</h2>
                <p className="font-thin">Card ID: {card.cardID}</p>
              </div>
              <div className="flex justify-center items-center absolute w-full bottom-4">
                <CardNav nextCard={nextCard} prevCard={prevCard} flipCard={flipCard} buttonText={buttonText} />
              </div>
            </div>
          </div>
      
          {/* Back of card */}
          <div className={`w-full h-full rounded-md bg-white ${showAnswer ? "block" : "hidden"} transition-transform duration-500 transform ${showAnswer ? "rotate-y-0" : "-rotate-y-180"} bg-[url('./src/assets/paper-texture.jpg')] overflow-y-auto`}>
            <div className="h-full flex flex-col justify-center">
              <div className="p-4">
                <h2 className="font-sans font-semibold answer">{card.answer}</h2>
                <p className="font-thin">Card ID: {card.cardID}</p>
              </div>

              {/* button navigation */}
              <div className="flex justify-center items-center absolute w-full bottom-4">
                <CardNav nextCard={nextCard} prevCard={prevCard} flipCard={flipCard} buttonText={buttonText} />

              </div>
            </div>
          </div>
        </div>
      </div>
      

    )

}

export default cardContent

