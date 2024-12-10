import React, { useState, useEffect } from 'react';
import axios from 'axios';
import conf from '../../conf';
import Category from '../Components/Category';
import NewsCard from '../Components/NewsCard';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(
          `${conf.baseUrl}/top-headlines?category=general&apiKey=${conf.apiKey}`
        );
        
        if (response.data.status === 'ok') {
          setNewsData(response.data.articles);
        } else {
          console.error('Error fetching news:', response.data.message);
        }
      } catch (error) {
        console.error('Error in fetching news:', error.message);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-800"> 
      <Category />
      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(newsData) && newsData.length > 0 ? (
          newsData.map((article, index) => (
            <NewsCard
              key={index}
              id={index}
              title={article.title}
              description={article.description}
              onClick={() => navigate(`/news/${index}`, { state: { article } })}
            />
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
}

export default Home;