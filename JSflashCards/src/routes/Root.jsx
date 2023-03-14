import NavBar from "../components/NavBar";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
const Root = () => {
    return (
        // BROWSER ROUTER
        // errorElement={<div>Something went wrong</div>}
        <div>
        <NavBar />

        

        <div className='flex flex-col items-center justify-center min-h-screen'>
        
        <p className='text-2xl font-bold'>Welcome to the FlashCard App</p>
        <p className='text-2xl font-bold'>Select a topic to begin</p>
        <div className='flex flex-row items-center p-5 justify-center'>

        <Link to="/react" className="px-3 py-2 text-sm font-medium hover:scale-110 transition-transform drop-shadow-xl"> <Icon className='text-8xl' icon="skill-icons:react-dark" /></Link> 
        <Link to="/node" className="px-3 py-2 text-sm font-medium hover:scale-110 transition-transform drop-shadow-xl"> <Icon className='text-8xl' icon="skill-icons:nodejs-dark" /></Link>
        <Link to="/mongodb" className="px-3 py-2 text-sm font-medium hover:scale-110 transition-transform drop-shadow-xl"> <Icon className='text-8xl' icon="skill-icons:mongodb" /></Link>
        <Link to="/css" className="px-3 py-2 text-sm font-medium hover:scale-110 transition-transform drop-shadow-xl"> <Icon className='text-8xl' icon="skill-icons:tailwindcss-dark" /></Link>
        <Link to="/python" className="px-3 py-2 text-sm font-medium hover:scale-110 transition-transform drop-shadow-xl"> <Icon className='text-8xl' icon="skill-icons:git" /></Link>
        </div>

    
        

        </div>

 


    
           </div>
  





    );
    };  

  

    export default Root;
