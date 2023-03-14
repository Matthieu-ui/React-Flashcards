import { useEffect, useState } from "react"






const cardContent = () => {




 useEffect(() => { 
   fetch ("../data/NodeData.json")
    .then(res => res.json())
    .then(data => setCard(data.questions))
    .catch(err => console.log(err))
    }, [])

    const [card, setCard] = useState([])
    const [key, setKey] = useState(0)

    //display first card

    useEffect(() => {

        setCard(card[0])
        setKey(key + 1)

    }, [card])








 



  return (
<>



    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">NodeJS Flash Cards</h1>
        <p className="text-2xl font-bold">Test your knowledge of NodeJS</p>
  
        <div className="card" key={key}>


            <div className="card-front">



                <p className="cardID">Card ID: {card.cardID}</p>


     
                </div>
            <div className="card-back">
                <p className="answer">{card.answer}</p>
                </div>

                </div>


      
                

        

      </div>

</> 

  )

}

export default cardContent

