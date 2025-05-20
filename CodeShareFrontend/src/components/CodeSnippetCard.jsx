import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CodeSnippetCard = ({ snippet, id }) => {
  return (
    <motion.div
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 m-5"
    whileHover={{ scale: 1.03 }}
  >
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
     { snippet.heading}
    </h2>
    <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
     { snippet.description}
    </p>
    <div className="flex items-center">
      <Link to={`/main/${id}/view/${snippet._id}`}>
        <button className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark transition-colors duration-300">
          Explore
        </button>
      </Link>
    </div>
  </motion.div>
  );
};

export default CodeSnippetCard;
