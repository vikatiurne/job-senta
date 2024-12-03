import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Button from "../../UI/Button/Button";
import imgBtnGoogle from "../../../assets/Google.png";
import imgBtnLinkedIn from "../../../assets/LinkedIn.png";

import styles from "./LoginAuth0Button.module.css";
import { useDispatch } from "react-redux";
import { fetchSocialAuth } from "../../../pages/Autorization/AuthSlice";

const LoginAuth0Button = ({ btnName }) => {
  const dispatch = useDispatch();
  const [src, setSrc] = useState("");
  const { user } = useAuth0();
  const { pathname } = useLocation();

  console.log(user);

  useEffect(() => {
    const img = btnName === "Google" ? imgBtnGoogle : imgBtnLinkedIn;
    setSrc(img);
  }, [btnName]);

  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/api/oauth/${btnName.toLowerCase()}`;
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
