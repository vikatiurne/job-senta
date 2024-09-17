import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/Header';
import HeroSection from './hero-section/Hero-section';
import Advantages from './advantages/Advantages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HeroSection />
    <Advantages />
  </React.StrictMode>
);
