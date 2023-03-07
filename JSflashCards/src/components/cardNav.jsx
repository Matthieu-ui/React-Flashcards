import { Icon } from "@iconify-icon/react";

const cardNav = (props) => {
    return (
        <div className="cardNav space-x-2 p-1">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded" onClick={props.prevCard}>    <Icon className='text-l' icon="ic:round-navigate-before" /></button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded" onClick={props.flipCard}>{`${props.buttonText}`}</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded" onClick={props.nextCard}><Icon className='text-l' icon="ic:round-navigate-next" /></button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded" onClick={props.randomCard}>Random</button>
        </div>
    );
}

export default cardNav;


    
    
