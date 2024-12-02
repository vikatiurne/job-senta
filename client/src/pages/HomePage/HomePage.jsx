import { useEffect } from "react";
import { useDispatch } from "react-redux";

import DreamBlock from "../../components/HomePage/DreamBlock/DreamBlock";
import Footer from "../../components/HomePage/Footer/Footer";
import RegisterResume from "../../components/HomePage/RegisterResume/RegisterResume";
import Header from "../../components/HomePage/Header/Header";
import HeroBlock from "../../components/HomePage/HeroBlock/HeroBlock";
import Container from "../../hoc/layout/container/layout/container/Container";
import AboutUs from "../../components/HomePage/AboutUs/AboutUs";
import Join from "../../components/HomePage/Join/Join";
import OurService from "../../components/HomePage/OurService/OurService";

import { fetchAutoLogin } from "../Autorization/AuthSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   console.log(!token);
  //   if (!!token) dispatch(fetchAutoLogin());
  // }, [dispatch]);

  return (
    <>
      <Container>
        <Header />
        <HeroBlock />
        <DreamBlock />
        <OurService />
        <RegisterResume />
        <AboutUs />
        <Join />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
