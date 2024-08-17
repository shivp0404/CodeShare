import React from "react";
import { Link } from "react-router-dom";

const CodeSnippetCard = ({ snippet, id }) => {
  return (
    <div className=" bg-primary m-5 p-4">
      <div className="bg-white shadow rounded-lg p-4 h-full">
        <h2 className="text-lg font-semibold mb-2">{snippet.heading}</h2>
        <p className="text-sm text-gray-600 mb-4">{snippet.description}</p>
        <div className=" flex  items-center">
          <button className="bg-accent  text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-colors duration-300">
            <Link to={`/main/${id}/view/${snippet._id}`}>Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippetCard;
