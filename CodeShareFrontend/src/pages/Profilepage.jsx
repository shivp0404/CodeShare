import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CodeSnippetCard from '../components/CodeSnippetCard';
import { useParams,Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfileResponse = await fetch(`http://localhost:3000/user/${id}`);
        const userProfileData = await userProfileResponse.json();
        setUserProfile(userProfileData);
      
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userProfile) {
    return <p>Error fetching user profile.</p>;
  }

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:3000/logout', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        navigate('/login');
        toast.success("login for adding snippet")
      } else {
        console.error('Logout failed');
        toast.error('Logout failed')
      }
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Error logging out');
    }
  };


  return (
    <div className="min-h-screen text-white bg-black   flex flex-col">
      <Navbar />
      <div className="container  mx-auto flex-grow">
        <div>
          <div className="flex p-3 justify-between items-center mt-2">
            <div>
              <h2 className="text-2xl font-semibold">{userProfile.username}</h2>
              <p className="text-white">{userProfile.email}</p>
              <p className="text-white">{userProfile.bio}</p>
            
            </div>
          <div className='px-3'>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"> <Link to={`/main/${id}`} >Create Snippet</Link> </button> 
          <button onClick={logout}  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-1">logout</button>
          </div>
          </div>
          <h3 className="text-3xl p-3 font-semibold ">Created Code Snippets</h3>
          <ul className="mt-4 flex item-center  flex-wrap">
            {userProfile.snippets.map(snippet => (
              <li key={snippet._id} className="m-2">
                <CodeSnippetCard snippet={snippet} id={id} />
                
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default ProfilePage;
