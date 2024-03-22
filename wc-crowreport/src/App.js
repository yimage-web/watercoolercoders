import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import TopicPage from './pages/TopicPage';
import './App.css'; // Tailwind CSS import

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topicId" element={<TopicPage />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;