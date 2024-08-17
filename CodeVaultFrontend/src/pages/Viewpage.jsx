import React, { useRef } from 'react';
import Navbar from './Navbar';
import CodeViewer from '../components/CodeViewer';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { FiEdit, FiTrash2} from 'react-icons/fi'; // Example icons from react-icons
import { FaClipboard, FaWhatsapp, FaFacebook, FaSnapchat, FaInstagram } from 'react-icons/fa'; // More icons
import { useNavigate } from 'react-router';

const ViewPage = () => {
  const { id, id2 } = useParams();
  const [code, setCode] = useState(null);
  const codeRef = useRef(null);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchCode = async () => {
      try {
        // Fetch code based on the ID from the URL
        const response = await fetch(`http://localhost:3000/main/${id}/view/${id2}`);
        const data = await response.json();
        if (data) {
          setCode(data.code);
        } else {
          console.error('Snippet not found');
        }
      } catch (error) {
        console.error('Error fetching code:', error);
      }
    };
    fetchCode();
  }, [id, id2]);

  const handleDelete = async () => {
    try {
      // Send delete request to backend
      const response = await fetch(`http://localhost:3000/main/${id}/delete/${id2}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        confirm("You want to delete this Snippet")
        navigate(`/main/${id}`)
      } else {
        console.error('Failed to delete content');
      }
    } catch (error) {
      console.error('Error deleting content:', error);
    }
  };

  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText).then(() => {
        console.log('Code copied to clipboard');
      }, (error) => {
        console.error('Failed to copy code:', error);
      });
    }
  };

  const shareUrl = window.location.href;
  const shareText = code;

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}%20${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    snapchat: `https://snapchat.com/scan?attachmentUrl=${encodeURIComponent(shareUrl)}`,
    instagram: `https://instagram.com`,
  };

  return (
    <div className='bg-black w-full h-screen'>
      <Navbar />
      <div className='flex items-center p-4 justify-between'>
        <h2 className="text-xl text-white">Code Viewer</h2>
        <div className='flex items-center p-4 justify-evenly  flex-wrap'>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
          <FaWhatsapp /> 
        </a>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-4 py-2 rounded-md mr-2">
          <FaFacebook /> 
        </a>
        <a href={shareLinks.snapchat} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2">
          <FaSnapchat />
        </a>
        <a href={shareLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white px-4 py-2 rounded-md">
          <FaInstagram /> 
        </a>
      </div>
        <div>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
            <Link to={`/main/${id}/edit/${id2}`}><FiEdit /> </Link>
          </button>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
            <Link to={`/user/${id}`}><FaTimes /> </Link>
          </button>
          <button onClick={handleDelete} type="button" className="bg-red-500 text-white px-4 py-2 rounded-md">
            <Link to={`/main/${id}/delete/${id2}`}><FiTrash2 /> </Link>
          </button>
          <button onClick={copyToClipboard} type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md ml-2">
            <FaClipboard />
          </button>
        </div>
      </div>
     
      <div ref={codeRef}>
        <CodeViewer codeString={code} />
      </div>
    </div>
  );
};

export default ViewPage;
