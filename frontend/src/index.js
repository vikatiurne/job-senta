import React from 'react';
import ReactDOM from 'react-dom/client';
import './layout/styles/normalize.css';
import './index.css';
import Header from './header/Header';
import HeroSection from './hero-section/Hero-section';
import Advantages from './advantages/Advantages';
import AboutUs from './about-us/About-us';
import Background from './background/Background';
import ContactsForm from './form/ContactsForm';
import FAQ from './faq/faq';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import Footer from './components/Footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HeroSection />
    <Background />
    <Advantages />
    <AboutUs />
    <ContactsForm />
    <FAQ />
    <RegistrationForm />
    <Footer />
  </React.StrictMode>
); 
