import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        
      });

      if (response.ok) {
      
       
        navigate('/login');
      } else {
        console.error('Error:', error);
      }
    } catch (error) {
     console.error('Error:', error);
      alert('An error occurred');
    }
  };

 
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... flex justify-center items-center">
        <div className="w-96 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {success && <div className="text-green-500 mb-4">{success}</div>}
          <form onSubmit={handleSubmit} >
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <button 
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              Register
            </button>
            <p >already existing account<Link to='/login' className="text-blue-500">login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
