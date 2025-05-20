import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage"
import Homepage from "./pages/Homepage";
import Registerpage from "./pages/Registerpage";
import Mainpage from "./pages/Mainpage";
import Profilepage from "./pages/Profilepage";
import Viewpage from "./pages/Viewpage";
import { Toaster } from 'react-hot-toast';
import Editpage from "./pages/Editpage";
const App = () => {
  return (
   <>
   <Toaster 
  position="bottom-right"
  reverseOrder={false} // if you want newer toasts at bottom
  toastOptions={{
    style: {
      background: '#333',
      color: '#fff',
    },
  }}
/>
    <Router>
      <Routes>
        {/* Define routes here */}
        
       
        
        <Route path="/" element={<Homepage />} /> */
        <Route path="/login" element={<Loginpage />} />
        <Route path="/main/:id" element={<Mainpage />} />
        <Route path="/user/:id" element={<Profilepage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/main/:id/view/:id2" element={<Viewpage/>} />
        <Route path="/main/:id/edit/:id2" element={<Editpage/>} />
         <Route path="/main/:id/delete/:id2" element={<Viewpage/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
   </>
  );
};

export default App;
