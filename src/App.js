import './index.css';
import React from 'react';
import Navigation from './components/Nav';
import Home from './components/sections/homePage.js';
import ReviewPage from './components/sections/reviewPage.js';
import VideoContent from './components/sections/video-content.js';
import TeamPage from './components/sections/teamPage.js'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/ReviewPage' exact element={<ReviewPage />} />
          <Route path='/VideoContent' exact element={<VideoContent />} />
          <Route path='/teamPage' exact element={<TeamPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
