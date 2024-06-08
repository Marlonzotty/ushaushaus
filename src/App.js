// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StoreInfo from './components/StoreInfo';
import ImageSlider from './components/ImageSlider';
import Features from './components/Features';
import Quiz from './components/Quiz';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <Countdown />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <StoreInfo />
            <ImageSlider />
            <Features />
          </>
        } />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
