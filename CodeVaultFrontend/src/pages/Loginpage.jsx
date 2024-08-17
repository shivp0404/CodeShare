import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Loginpage = () => {
  const [ formData , setFormData] = useState({
    username: "",
    password:"",
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login successful');
        navigate(`/user/${data._id}`)
       
       
      } else {
        const errorText = await response.text();
     
      }
    } catch (error) {
    
      navigate('/register')
    }
  };
  return (
    <div className="min-h-screen  flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...  flex justify-center items-center">
        <div className="w-96 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="username" name="username" onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
            </div>
           
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
              <input type="password" id="password" name="password" onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
            </div>
           <div className='flex  items-center space-x-12'>
           <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300">Login</button> 
           <p >Create an new  <Link to='/register' className="text-blue-500">register</Link></p>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
