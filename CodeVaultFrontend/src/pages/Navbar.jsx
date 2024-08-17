import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {



  return (
    <nav>
      <div className="p-2 mx-auto flex justify-between bg-primary items-center">
        <div>
          <Link to="/" className="text-xl text-white">
            CodeVault
          </Link>
        </div>    
        <button className=" bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-colors duration-300">
        <Link to="/login" className="py-2 text-white">
                Login
         </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
