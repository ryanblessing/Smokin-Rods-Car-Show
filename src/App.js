import './App.css';
import React from 'react';
import Navigation from './components/Nav';
import Home from './components/sections/homePage';
import ReviewPage from './components/sections/reviewPage';
import VideoContent from './components/sections/video-content';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/ReviewPage' exact element={<ReviewPage />} />
          <Route path='/VideoContent' exact element={<VideoContent />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
