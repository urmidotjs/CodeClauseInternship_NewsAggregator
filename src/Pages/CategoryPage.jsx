import React, { useState, useEffect } from 'react';
import axios from 'axios';
import conf from '../../conf'; 
import NewsCard from '../Components/NewsCard';
import { useParams, useNavigate } from 'react-router-dom'; 

function CategoryPage() {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const { category } = useParams();  
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCategoryData = async () => {
      
      
      try {
        const response = await axios.get(
          `${conf.baseUrl}/top-headlines?category=${category}&apiKey=${conf.apiKey}`
        );
         

        if (response.data.status === 'ok') {
          setCategoryData(response.data.articles);
          setCategoryName(category); 
        } else {
          setError('Error fetching category data');
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response) {
          setError("Error fetching category data");
        } else if (error.request) {
          setError("No response from server");
        } else {
          setError("An error occurred");
        }
      }
    };

    if (category) {
      fetchCategoryData();
    }
  }, [category]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-800">
      <h1 className="text-3xl font-semibold text-center my-4 text-white">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} News
      </h1>
      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {categoryData && Array.isArray(categoryData) && categoryData.length > 0 ? (
          categoryData.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              onClick={() => navigate(`/news/${index}`, { state: { article } })} 
            />
          ))
        ) : (
          <p>No articles available</p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;