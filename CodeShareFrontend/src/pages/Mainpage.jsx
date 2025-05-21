import React from 'react';
import Navbar from './Navbar';
import Sidebar from '../components/Sidebar';
import CodeEditor from '../components/CodeEditor';
import { useParams } from 'react-router';
import { useState } from 'react';
import toast from 'react-hot-toast';
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

  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const handleSnippetCreated = () => {
    setRefreshTrigger(prev => !prev); // Toggle to force Sidebar to refetch
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
  
      const response = await fetch(`/main/${id.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      });

      if (response.ok) {
        const result = await response.json();
      handleSnippetCreated()
        setFormData({
          heading: '',
          description: '',
          code: '',
          tagInput: ''
        })
        toast.success("Snippet saved successfully!");
        
        // You can add further logic here, such as displaying a success message or resetting the form
      } else {
        console.error('Snippet creation failed:', response.statusText);
        toast.error("Snippet creation failed");
        // You can handle errors here, such as displaying an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Error submitting form:");
      // Handle the error appropriately
    }
  };
  return (
    <div className="min-h-screen bg-black ">
      <Navbar />
      <div className="flex  flex-grow">
        <Sidebar refreshTrigger={refreshTrigger} />
        <CodeEditor handlesubmit={handleSubmit} handlechange={handleChange} formData={formdata} />
      </div>
    </div>
  );
};

export default Mainpage;
