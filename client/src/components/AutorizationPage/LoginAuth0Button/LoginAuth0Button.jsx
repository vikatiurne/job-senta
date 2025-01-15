import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Button from "../../UI/Button/Button";
import imgBtnGoogle from "../../../assets/Google.png";
import imgBtnLinkedIn from "../../../assets/LinkedIn.png";

import { setMethodAuth } from "../../../pages/Autorization/AuthSlice";

import styles from "./LoginAuth0Button.module.css";


const LoginAuth0Button = ({ btnName }) => {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth)

  const dispatch = useDispatch();
  const [src, setSrc] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    const img = btnName === "Google" ? imgBtnGoogle : imgBtnLinkedIn;
    setSrc(img);
  }, [btnName]);

  const handleLogin = () => {
    dispatch(setMethodAuth("social"));
    const path = `${
      process.env.REACT_APP_API_URL
    }/api/oauth/${btnName.toLowerCase()}`;
    window.location.href = path;
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
