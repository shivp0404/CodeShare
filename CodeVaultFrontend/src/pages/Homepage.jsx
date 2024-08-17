import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative h-[92.2vh]">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://www.shutterstock.com/shutterstock/videos/1107364275/preview/stock-footage-computer-binary-matrix-digital-rain-information-flow-high-tech-digital-matrix-binary-code-falling.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"> </div>
      <div className="absolute inset-0 flex items-center justify-center flex-wrap text-white">
       <div>
       <h1 className="text-[8vw] mx font-bold">Welcome to Codevault</h1>
       <p className='text-center text-[4vw]'>Keep your Snippets, Save & Share </p>
        
       <div className="flex justify-center items-center ">
      <button className="bg-accent text-white px-8 py-4 rounded-md hover:bg-accent-dark transition-colors duration-300">
        <Link to="/login" className="text-white">
          Get Started
        </Link>
      </button>
    </div>
       
       </div>
      </div>
    </div>
    </div>
  );
};

export default Homepage;
