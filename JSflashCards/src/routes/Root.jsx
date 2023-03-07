import NavBar from "../components/NavBar";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";
const Root = () => {
    return (
        // BROWSER ROUTER
        // errorElement={<div>Something went wrong</div>}
        <div>
        <NavBar />

        <div className='flex flex-col items-center justify-center bg-slate-600 min-h-screen'>
        <Link to="/react" className="text-gray-300 px-3 py-2 text-sm font-medium hover:scale-110 transition-transform drop-shadow-xl">  <Icon className='text-8xl' icon="skill-icons:react-dark" /></Link> 
        
        

        <p className='text-2xl text-white font-bold'>Welcome to the the React FlashCard App</p>

        </div>

 


    
           </div>
  





    );
    };  

  

    export default Root;
