import { Link } from "react-router-dom";

import LoginAuth0Button from "../LoginAuth0Button/LoginAuth0Button";

import logo from "../../../assets/Logo.png";
import { textData } from "../../../utils/textData";

import styles from "./AuthSection.module.css";


const AuthSection = ({path}) => {

  const render = (
      <div className={styles.authContainer}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <h2>{textData[`${path}`]["title"]}</h2>
        <p className={styles.infoTitle}>
          {textData[`${path}`]["infoTitle"]}
        </p>

        {(path === "/login" || path === "/registration") && (
          <>
            <div className={styles.socialBtns}>
              <LoginAuth0Button btnName="Google" />
              <LoginAuth0Button btnName="LinkedIn" />
            </div>
            <p className={styles.toggleAuth}>
              {textData[`${path}`]["choiceInfo"]}
            </p>
          </>
        )}
        {textData[`${path}`]["component"]}
      </div>
  );
  return render;
};

export default AuthSection;
