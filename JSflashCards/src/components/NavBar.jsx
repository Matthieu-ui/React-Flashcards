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
        <nav className="bg-gray-800 px-4 py-2 rounded-sm shadow-md">
        <ul className="flex items-center justify-between">
            <li>
            <Link to="/" className="text-white hover:text-gray-300 font-mono font-bold text-xl">Home</Link>
            </li>
            <li>
            <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">About</Link>
            </li>
            <li>
            <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Contact</Link>
            </li>
        
        </ul>

      
      </nav>
      
    );
    }

export default NavBar;