
import logo from "../../../assets/Logo.png";

import styles from "./Header.module.css";
import NavBar from "../NavBar/NavBar";

import { useState } from "react";

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <img src={logo} alt="logo" />
      <NavBar burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
  
    </div>
  );
};

export default Header;
