import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import logo from "../../../assets/user_page/home/logo.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <div className={styles.headerContainer} id="topPage">
      <img src={logo} alt="logo" />
      <NavBar burgerActive={burgerActive} setBurgerActive={setBurgerActive} />
    </div>
  );
};

export default Header;
