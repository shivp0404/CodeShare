import React from 'react';
import Navbar from './Navbar';
import Sidebar from '../components/Sidebar';
import CodeEditor from '../components/CodeEditor';
import { useParams } from 'react-router';
import { useState } from 'react';

const Mainpage = () => {
  const id = useParams()
  const [formdata, setFormData] = useState({
    heading: '',
    description: '',
    code: '',
    tagInput: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formdata, [name]: value });
  };




  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
  
      const response = await fetch(`http://localhost:3000/main/${id.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Snippet created successfully:');
        setFormData({
          heading: '',
          description: '',
          code: '',
          tagInput: ''
        })
        // You can add further logic here, such as displaying a success message or resetting the form
      } else {
        console.error('Snippet creation failed:', response.statusText);
        // You can handle errors here, such as displaying an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error appropriately
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <CodeEditor handlesubmit={handleSubmit} handlechange={handleChange} formData={formdata} />
      </div>
    </div>
  );
};

export default Mainpage;
