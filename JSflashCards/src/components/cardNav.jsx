

const cardNav = (props) => {
    return (
        <div className="cardNav space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.prevCard}>Prev</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.flipCard}>{`${props.buttonText}`}</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.nextCard}>Next</button>
        </div>
    );
}

export default cardNav;


    