import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";

import styles from "./HomePage.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  const render = isAuthenticated ? (
    <LogoutButton />
  ) : (
    <>
      <Link to="registration">
        <Button className={styles.loginBtn}>Registration</Button>
      </Link>
      <Link to="login">
        <Button className={styles.loginBtn}>Login</Button>
      </Link>
    </>
  );

  return render;
};

export default HomePage;
