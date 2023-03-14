import React from "react";
import { Link } from "react-router-dom";

// <div className="flex items-center justify-between">
// <a href="#" className="text-white hover:text-gray-300 font-mono font-bold text-xl">Open Source Community Board</a>
// <div className="flex flex-wrap items-center">
//   <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Home</a>
//   <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">About</a>
//   <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Contact</a>
// </div>

const NavBar = () => {

    return (
        <nav className="border border-b-slate-500 border-l-slate-500 border-r-slate-500 p-2 px-4 py-2 rounded-sm">
        <ul className="flex items-center justify-between">
            <li>
            <Link to="/" className=" hover:text-gray-600 font-mono font-bold text-xl">Home</Link>
            </li>
            <li>
            <Link to="/react" className=" hover:text-gray-600 px-3 py-2 text-sm font-medium">React</Link>
            </li>
        
        </ul>

      
      </nav>
      
    );
    }

export default NavBar;