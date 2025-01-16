import { useSelector } from "react-redux";

import DreamBlock from "../../components/HomePage/DreamBlock/DreamBlock";
import Footer from "../../components/HomePage/Footer/Footer";
import RegisterResume from "../../components/HomePage/RegisterResume/RegisterResume";
import Header from "../../components/HomePage/Header/Header";
import HeroBlock from "../../components/HomePage/HeroBlock/HeroBlock";
import Container from "../../hoc/layout/container/layout/container/Container";
import AboutUs from "../../components/HomePage/AboutUs/AboutUs";
import Join from "../../components/HomePage/Join/Join";
import OurService from "../../components/HomePage/OurService/OurService";
import Loader from "../../components/UI/Loader/Loader";

const HomePage = () => {
  const { status } = useSelector((state) => state.auth);



  return status === "loading" ? (
    <Loader loading color="#958060" />
  ) : (
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
