import FlashCard from "../components/FlashCard";
import NavBar from "../components/NavBar";
// import { Icon } from '@iconify-icon/react';



const ReactPage = () => {



    return (
        <div>
    
        <NavBar />
        <div className='flex flex-col items-center justify-center bg-slate-600 min-h-screen'>   
      
        <h1 className='text-4xl text-white font-bold'>React Flash Cards</h1>
        <p className='text-2xl text-white font-bold'>Test your knowledge of React</p>

        <FlashCard />
       
        </div>

        </div>
 
  
    );
    }

export default ReactPage;

