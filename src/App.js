import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import StoreInfo from './components/StoreInfo';
import ImageSlider from './components/ImageSlider';
import Features from './components/Features';
import SecurityFeatures from './components/SecurityFeatures';
import Quiz from './components/Quiz';
import Countdown from './components/Countdown';
import Congrats from './components/Congrats';
import Footer from './components/Footer/Footer'; 

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
            <SecurityFeatures />
          </>
        } />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/congrats" element={<Congrats />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
