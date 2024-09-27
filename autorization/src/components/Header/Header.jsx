import HeaderBtns from "../HeaderBtns/HeaderBtns";

import logo from "../../assets/Logo.png";

import styles from "./Header.module.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt="logo" />
      <NavBar />
      <HeaderBtns />
    </div>
  );
};

export default Header;
