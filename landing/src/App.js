import "./App.css";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Survey from './components/Survey/Survey.jsx'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Survey />
      <About />
      <Survey />
      <ContactsForm />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
