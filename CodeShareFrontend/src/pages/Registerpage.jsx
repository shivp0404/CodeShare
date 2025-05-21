import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Register Successfully');
        navigate('/login');
      } else {
        toast.error('Something went wrong!');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <div className="w-[90vw] sm:w-[50vw] min-h-[70vh] p-10 bg-[var(--text-color)] text-white rounded-2xl flex flex-col justify-center items-center shadow-lg space-y-6">
          
          {/* Big Logo or Branding */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-wide">
            Code<span className="text-accent">Share</span>
          </h1>

          {/* Subtitle */}
          <p className="text-center text-lg sm:text-xl text-gray-300">
            Save and Share Your Best Code Snippets
          </p>

          {/* Register Heading */}
          <h2 className="text-2xl font-semibold mb-2 mt-2">Create your account</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full px-4 sm:px-8">
            <div className="mb-4">
              <label htmlFor="username" className="block font-semibold mb-1">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                className="w-full px-4 py-2 text-[var(--text-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block font-semibold mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 text-[var(--text-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-8">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300 w-full sm:w-auto"
              >
                Register
              </button>
              <p className="text-sm text-gray-400">
                Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
              </p>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
