import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../pages/Loader';



const Sidebar = ({ refreshTrigger }) => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  


  const fetchUserProfile = async () => {
    try {
      const userProfileResponse = await fetch(`/main/${id}`);
      const userProfileData = await userProfileResponse.json();
      setUserProfile(userProfileData);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [id, refreshTrigger]);

   

  if (loading) {
    return <Loader />;
  }

  if (!userProfile) {
    return <div className='text-white border-[3px] rounded-md text-center border-gray-300 '>No user profile found.</div>;
  }

  return (
    <aside className="bg-[var(--text-color)] text-center border-3px border-gray-300 rounded-md text-white w-1/4 hidden sm:block">
      <button>
        <Link className="text-xl font-bold" to={`/user/${id}`}>Snippets</Link>
      </button>
      <ul className="text-lg m-1">
        {userProfile.snippets && userProfile.snippets.length > 0 ? (
          userProfile.snippets.map((snippet) => (
            <li key={snippet._id} className="mb-2 flex justify-center items-center">
              <Link to={`/main/${id}/view/${snippet._id}`}>
                <h1 className="hover:text-primary transition-colors duration-300">{snippet.heading}</h1>
              </Link>
            </li>
          ))
        ) : (
          <li>No snippets available.</li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
