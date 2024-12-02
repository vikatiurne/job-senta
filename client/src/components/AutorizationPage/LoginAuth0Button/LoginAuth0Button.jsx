import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "../../UI/Button/Button";
import imgBtnGoogle from "../../../assets/Google.png";
import imgBtnLinkedIn from "../../../assets/LinkedIn.png";

import styles from "./LoginAuth0Button.module.css";

const LoginAuth0Button = ({ btnName }) => {
  const [src, setSrc] = useState("");
  const {  user } = useAuth0();
  const { pathname } = useLocation();

  console.log(user);

  useEffect(() => {
    const img = btnName === "Google" ? imgBtnGoogle : imgBtnLinkedIn;
    setSrc(img);
  }, [btnName]);

  const handleLogin = () => {
    btnName === "Google"
      ? (window.location.href = "http://localhost:5000/api/oauth/google")
      : (window.location.href = "http://localhost:5000/api/oauth/linkedin");
  };

  return (
    <Button onClick={handleLogin} className={styles.containerBtns}>
      {pathname === "/login" ? (
        <div className={styles.socialBtn}>
          <img src={src} alt={btnName} className={styles.socialLogo} />
          <p>Sign in with {btnName}</p>
        </div>
      ) : (
        <div className={styles.socialBtn}>
          <img src={src} alt={btnName} className={styles.socialLogo} />
          <p>Sign up with {btnName}</p>
        </div>
      )}
    </Button>
  );
};

export default LoginAuth0Button;
