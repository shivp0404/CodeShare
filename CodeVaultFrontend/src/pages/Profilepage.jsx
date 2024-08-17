import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CodeSnippetCard from '../components/CodeSnippetCard';
import { useParams,Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
        console.log(userProfileData)
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
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 ...   flex flex-col">
      <Navbar />
      <div className="container  mx-auto flex-grow">
        <div>
          <div className="flex justify-between items-center mt-8">
            <div>
            <img
              src={userProfile.avatar}
              alt="User Avatar"
              className="w-16 h-16 rounded-full mr-4"
            />
              <h2 className="text-2xl font-semibold">{userProfile.username}</h2>
              <p className="text-gray-600">{userProfile.email}</p>
              <p className="text-gray-700 mt-2">{userProfile.bio}</p>
            </div>
          <div>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"><Link to={`/main/${id}`} >create Snippet</Link></button>
          <button onClick={logout}  className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">logout</button>
          </div>
          </div>
          <h3 className="text-xl font-semibold mt-8">Created Code Snippets</h3>
          <ul className="mt-4 flex flex-wrap">
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
