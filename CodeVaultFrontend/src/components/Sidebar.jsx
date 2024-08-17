import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';



const Sidebar = () => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize the loading state

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfileResponse = await fetch(`http://localhost:3000/main/${id}`);
        const userProfileData = await userProfileResponse.json();
        setUserProfile(userProfileData); // Set the fetched data to userProfile
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setLoading(false); // Ensure loading state is set to false after the fetch operation
      }
    };

    fetchUserProfile();
  }, [id]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userProfile) {
    return <div>No user profile found.</div>;
  }

  return (
    <aside className="bg-gray-800 text-white w-1/4 px-4 py-8 hidden sm:block">
      <div className=" mb-6">
        <button><Link className="text-xl font-bold  " to={`/user/${id}`}>Snippets</Link></button>
        <ul className="text-lg">
          {userProfile.snippets && userProfile.snippets.length > 0 ? (
            userProfile.snippets.map((snippet) => (
              <li key={snippet._id} className="mb-2 flex justify-center items-center ">
                <Link to={`/main/${id}/view/${snippet._id}`}  >
                  <h1 className=" hover:text-primary   transition-colors  duration-300">{snippet.heading}</h1>
                </Link>
              </li>
            ))
          ) : (
            <li>No snippets available.</li>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
