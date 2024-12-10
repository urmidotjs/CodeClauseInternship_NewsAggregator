import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage';
import News from './Pages/News';

function App() {
  return (
    <div className="min-h-screen bg-gray-800"> 
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/news/:id" element={<News />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;