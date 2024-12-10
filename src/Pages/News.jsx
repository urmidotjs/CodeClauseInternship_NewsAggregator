import React from 'react';
import { useLocation } from 'react-router-dom';

function News() {
  const location = useLocation();
  const article = location.state?.article; 

  if (!article) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <p className="text-gray-300">No article data available. Please go back to the home page.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{article.title}</h1>
        <img
          src={article.urlToImage || 'https://via.placeholder.com/800x400?text=No+Image'}
          alt="News"
          className="w-full rounded-md mb-4"
        />
        <p className="text-gray-600 text-base mb-6">{article.description || 'No description available.'}</p>
        <p className="text-gray-600">{article.content || 'No content available.'}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-blue-500 hover:text-blue-600"
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
}

export default News;
