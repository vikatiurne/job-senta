import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "../../UI/Button/Button";
import LogoutButton from "../../../components/AutorizationPage/LogoutButton/LogoutButton";

import styles from './HeaderBtns.module.css'

const HeaderBtns = ({burgerActive}) => {
    const { isAuthenticated } = useAuth0();

    const render = isAuthenticated ? (
      <LogoutButton />
    ) : (
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
  
    return <div className={!burgerActive? styles.btnContainer: styles.btnContainerShow}>{render}</div>;
}

export default HeaderBtns