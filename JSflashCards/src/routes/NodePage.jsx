import NodeCard from "../components/cards/NodeCard";
import NavBar from "../components/NavBar";
// import { Icon } from '@iconify-icon/react';



const ReactPage = () => {



    return (
        <div>
    
        <NavBar />
        <div className='flex flex-col items-center justify-center min-h-screen'>   


        <NodeCard/>
       
        </div>

        </div>
 
  
    );
    }

export default ReactPage;

