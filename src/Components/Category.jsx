import React from 'react';
import { Link } from 'react-router-dom';

function Category() {
  const categories = [
    'Technology',
    'Sports',
    'Health',
    'Science',
    'Business',
    'Entertainment',
    'Politics',
  ];

  const categoryColors = [
    'bg-gray-800',  
    'bg-black',     
    'bg-gray-700',  
    'bg-black',     
    'bg-gray-600',  
    'bg-black',     
    'bg-gray-500',  
    'bg-black',     
  ];

  return (
    <div className="flex justify-center gap-4 flex-wrap mt-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={`/${category.toLowerCase()}`}
          className={`border-2 border-gray-300 ${categoryColors[index]} p-4 text-center w-32 h-32 flex items-center justify-center rounded-md shadow-md hover:bg-opacity-80 transition-all`}
        >
          <span className="text-lg font-medium text-white">{category}</span>
        </Link>
      ))}
    </div>
  );
}

export default Category;

