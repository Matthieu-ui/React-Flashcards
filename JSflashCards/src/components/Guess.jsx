import React, { useState } from "react";
import cardData from "./cardData";




const Guess = ({ card }) => {
    const [guess, setGuess] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);


    const handleGuess = (guess) => {
        console.log("handleGuess called with guess:", guess);
        console.log("card.answer:", card.answer);

        if (guess.toLowerCase() === card.answer.toLowerCase()) {
            setCorrect(true);
            setIncorrect(false);
            document.querySelector(".correct").innerHTML = "Correct!";
        } else {
            setIncorrect(true);
            setCorrect(false);
            document.querySelector(".incorrect").innerHTML = "Incorrect!";
        }

    };


    const handleInputChange = (event) => {
        setGuess(event.target.value);
    };



    return (
        <div className="guess">
            <form className="flex flex-col space-y-2 p-4" onSubmit={handleGuess} >
                <label className="text-xl font-bold">Your Guess:</label>
                <input
                    className="border-2 border-gray-300 p-2 rounded-lg"
                    type="text"
                    value={guess}
                    onChange={handleInputChange}
                />
                <button className="bg-gray-200 border border-black rounded-md p-2 hover:bg-gray-100" type="submit">Submit</button>
            </form>
            {isCorrect === true && <div className="correct text-center text-xl font-bold">Correct!</div>}
            {isCorrect === false && <div className="incorrect text-center text-xl font-bold">Incorrect!</div>}
        </div>
    );
};



export default Guess;