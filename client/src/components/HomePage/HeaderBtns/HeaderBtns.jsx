import { Link } from "react-router-dom";

import Button from "../../UI/Button/Button";

import styles from "./HeaderBtns.module.css";

const HeaderBtns = ({ burgerActive }) => {
  const render = (
    <>
      <Link to="/login" className={styles.link}>
        <Button className={styles.loginBtn}>
          <div className={styles.userIcon}></div>
          Login
        </Button>
      </Link>
      <Link to="/registration" className={styles.link}>
        <Button className={styles.registrBtn}>Registration</Button>
      </Link>
    </>
  );

  return (
    <div
      className={!burgerActive ? styles.btnContainer : styles.btnContainerShow}
    >
      {render}
    </div>
  );
};

export default HeaderBtns;
