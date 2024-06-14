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
import OfferPage from './components/OfferPage';
import PaymentPage from './components/PaymentPage';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importando o CSS do Bootstrap

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const NoHeaderLayout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <div className="App" style={{ marginTop: '80px' }}>
      <Countdown />
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <StoreInfo />
            <ImageSlider />
            <Features />
            <SecurityFeatures />
          </MainLayout>
        } />
        <Route path="/quiz" element={
          <NoHeaderLayout>
            <Quiz />
          </NoHeaderLayout>
        } />
        <Route path="/congrats" element={
           <NoHeaderLayout>
            <Congrats />
            </NoHeaderLayout>
        } />
        <Route path="/offer" element={
          <NoHeaderLayout>
            <OfferPage />
          </NoHeaderLayout>
        } />
        <Route path="/payment" element={
          <NoHeaderLayout>
            <PaymentPage />
          </NoHeaderLayout>
        } />
      </Routes>
    </div>
  );
}

export default App;
