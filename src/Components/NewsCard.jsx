
import React from 'react';

function NewsCard({ id, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-300 shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200"
    >
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">
        {description || 'No description available.'}
      </p>
    </div>
  );
}

export default NewsCard;