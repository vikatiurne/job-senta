import { Link, useLocation } from "react-router-dom";

import AuthSection from "../../../components/AuthSection/AuthSection";
import WelcomeSection from "../../../components/WelcomeSection/WelcomeSection";
import Button from "../../../components/UI/Button/Button";

import styles from "../Autorization.module.css";
import { textData } from "../../../utils/textData";

const PasswordRecovery = () => {
    const { pathname } = useLocation();

  return (
    <div className={styles.authContainerLeft}>
      <div className={styles.greetingsWrapper}>
        <div className={styles.greetingsContainer}>
          <WelcomeSection />
          <Link to={textData[`${pathname}`]["link"]}>
            <Button className={styles.singinBtn}>{textData[`${pathname}`]["linkBtn"]}</Button>
          </Link>
        </div>
      </div>
      <AuthSection />
    </div>
  );
};

export default PasswordRecovery;
