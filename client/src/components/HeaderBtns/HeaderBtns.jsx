import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "../../components/UI/Button/Button";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import userIcon from "../../assets/userIcon.svg";

import styles from './HeaderBtns.module.css'

const HeaderBtns = () => {
    const { isAuthenticated } = useAuth0();

    const render = isAuthenticated ? (
      <LogoutButton />
    ) : (
      <>
        <Link to="/login" className={styles.link}>
          <Button className={styles.loginBtn}>
            <img src={userIcon} alt="userIcon" />
            Login
          </Button>
        </Link>
        <Link to="/registration" className={styles.link}>
          <Button className={styles.registrBtn}>Registration</Button>
        </Link>
      </>
    );
  
    return <div className={styles.btnContainer}>{render}</div>;
}

export default HeaderBtns