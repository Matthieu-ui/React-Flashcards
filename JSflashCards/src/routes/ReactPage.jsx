import ReactCard from "../components/cards/ReactCard";
import NavBar from "../components/NavBar";
// import { Icon } from '@iconify-icon/react';



const ReactPage = () => {



    return (
        <div>
    
        <NavBar />
        <div className='flex flex-col items-center justify-center min-h-screen'>   
      
        <h1 className='text-4xl font-bold'>React Flash Cards</h1>
        <p className='text-2xl font-bold'>Test your knowledge of React</p>

        <ReactCard />
       
        </div>

        </div>
 
  
    );
    }

export default ReactPage;

