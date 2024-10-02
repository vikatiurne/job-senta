import iconBurger from "../../../assets/burgerIcon.svg";
import iconClose from "../../../assets/closeIcon.svg";
import iconFacebook from "../../../assets/facebookIcon.svg";
import iconInstagram from "../../../assets/instagramIcon.svg";
import iconTwiter from "../../../assets/twiterIcon.svg";

import HeaderBtns from "../HeaderBtns/HeaderBtns";

import styles from "./NavBar.module.css";

const navBar = ["Tools", "About us", "Price"];

const NavBar = ({ burgerActive, setBurgerActive }) => {
  return (
    <>
      <nav
        className={
          !burgerActive
            ? styles.navContainer
            : `${styles.navBurgerActive} ${styles.navContainerBurger}`
        }
      >
        <ul className={!burgerActive ? styles.navList : styles.navListBurger}>
          {navBar.map((item, i) => (
            <a href={`#${item}`} key={item+i} onClick={()=>setBurgerActive(false)}>
              <li>{item}</li>
            </a>
          ))}
         
        </ul>
        <HeaderBtns burgerActive={burgerActive} />
      </nav>

      <div
        className={styles.burger}
        onClick={() => setBurgerActive(!burgerActive)}
      >
        {!burgerActive ? (
          <img src={iconBurger} alt="burger" />
        ) : (
          <img src={iconClose} alt="close" />
        )}
      </div>

      <div
        className={
          !burgerActive
            ? styles.socialLincs
            : `${styles.socialLincsActive} ${styles.socialLincs}`
        }
      >
        <img src={iconTwiter} alt="twiter" />
        <img src={iconInstagram} alt="instagram" />
        <img src={iconFacebook} alt="facebook" />
      </div>
    </>
  );
};

export default NavBar;
