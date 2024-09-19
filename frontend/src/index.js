import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/Header';
import HeroSection from './hero-section/Hero-section';
import Advantages from './advantages/Advantages';
import AboutUs from './about-us/About-us';
import Background from './background/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HeroSection />
    <Background />
    <Advantages />
    <AboutUs />
  </React.StrictMode>
);
