import AllCards from "../components/cards/AllCards";
import NavBar from "../components/NavBar";
// import { Icon } from '@iconify-icon/react';



const ReactPage = () => {



    return (
        <div>
    
        <NavBar />
        <div className='flex flex-col items-center justify-center min-h-screen'>   
      
        <h1 className='text-4xl font-bold'>Think you have what it takes?</h1>
        <p className='text-2xl font-bold'>Test your knowledge of React, NodeJS, MongoDB and Tailwind CSS!</p>

        <AllCards />
       
        </div>

        </div>
 
  
    );
    }

export default ReactPage;

