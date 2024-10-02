import iconBurger from "../../assets/icons/burgerIcon.svg";
import iconClose from "../../assets/icons/closeIcon.svg";
import iconFacebook from "../../assets/icons/facebookIcon.svg";
import iconInstagram from "../../assets/icons/instagramIcon.svg";
import iconTwiter from "../../assets/icons/twiterIcon.svg";

import Button from "../UI/Button/Button";

import styles from "./NavBar.module.css";

const navBar = [" Advantages", "About us", "FAQ"];

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
        <div
          className={
            !burgerActive
              ? styles.socialLincs
              : `${styles.socialLincsActive} ${styles.socialLincs}`
          }
        >
         <a href=""><img src={iconTwiter} alt="twiter" /></a> 
         <a href=""><img src={iconInstagram} alt="instagram" /></a> 
          <a href=""><img src={iconFacebook} alt="facebook" /></a>
        </div>
        <ul className={!burgerActive ? styles.navList : styles.navListBurger}>
          {navBar.map((item, i) => (
            <a
              href={`#${item}`}
              key={item + i}
              onClick={() => setBurgerActive(false)}
            >
              <li>{item}</li>
            </a>
          ))}
        </ul>
        <Button className={styles.joinBtn}>
          <a href="#Join us">Join us</a>
        </Button>
      </nav>

      <div
        className={styles.burger}
        onClick={() => setBurgerActive(!burgerActive)}
      >
        {!burgerActive ? (
          <img src={iconBurger} alt="burger" className={styles.open} />
        ) : (
          <img src={iconClose} alt="close" className={styles.close}/>
        )}
      </div>
    </>
  );
};

export default NavBar;
