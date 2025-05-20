import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'; // Import icons

const Navbar = () => {


  return (
    <nav>
      <div className=" p-4 mx-auto  flex justify-between items-center bg-transparent ">
        {/* Navbar Logo Text */}
        <div className="flex items-center text-white text-2xl font-bold">
          <Link to="/">
            <span className="text-primary">Code</span>
            <span className="text-accent">Share</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
         
          <button className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-colors duration-300">
            <Link to="/login" className="py-2 text-white">
              Login
            </Link>
          </button>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
