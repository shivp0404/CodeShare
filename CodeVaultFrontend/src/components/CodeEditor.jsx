import React from 'react';


const CodeEditor = ({handlesubmit,handlechange,formData}) => {


  return (
    <div className="flex bg-highlight flex-col w-full p-2 h-screen">
      <form onSubmit={handlesubmit} className="flex flex-col w-full  h-screen">
      <div className='w-full  flex  justify-between'>
      <input
            type="text"
            name="heading"
            value={formData.heading}
            required
            onChange={handlechange}
           
            className="border w-1/4  text-center mb-2 border-gray-300 rounded-lg p-2"
            placeholder="Heading"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handlechange}
            required
            className="border w-2/3  text-center mb-2 border-gray-300 rounded-lg p-2"
            placeholder="description"
          />
      </div>
        <textarea
          name="code"
          value={formData.code}
          onChange={handlechange}
          className="flex-grow border border-gray-300 rounded-lg p-4 resize-none  "
          placeholder="Write your code here..."
          required
        />
       
        <div className='flex my-2 gap-2 w-full  '>
         
          <input
            type="text"
            name="tagInput"
            value={formData.tagInput}
            onChange={handlechange}
           required
            className="border w-3/4 border-gray-300 rounded-lg p-2"
            placeholder="Add tags"
          />
        
            <button type="submit" className="bg-green-500 w-1/4 text-white px-4 py-2 rounded-md mr-2">Save</button>
          
       
        </div>
      </form>
    </div>
  );
};

export default CodeEditor;
