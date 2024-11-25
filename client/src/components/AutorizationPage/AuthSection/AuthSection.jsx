import { Link, useLocation } from "react-router-dom";

import LoginAuth0Button from "../LoginAuth0Button/LoginAuth0Button";

import logo from "../../../assets/Logo.png";
import { textData } from "../../../utils/textData";

import styles from "./AuthSection.module.css";

const AuthSection = () => {
  const { pathname } = useLocation();

  const render = (
    <div className={styles.authContainer}>
     <Link to='/'><img src={logo} alt="logo" className={styles.logo} /></Link> 
      <h2>{textData[`${pathname}`]["title"]}</h2>
      <p className={styles.infoTitle}>{textData[`${pathname}`]["infoTitle"]}</p>

      {(pathname === "/login" || pathname === "/registration") && (
        <>
          <div className={styles.socialBtns}>
            <LoginAuth0Button btnName="Google" />
            <LoginAuth0Button btnName="LinkedIn" />
          </div>
          <p className={styles.toggleAuth}>
            {textData[`${pathname}`]["choiceInfo"]}
          </p>
        </>
      )}
      {textData[`${pathname}`]["component"]}
    </div>
  );
  return render;
};

export default AuthSection;
