import { Link, useLocation } from "react-router-dom";

import WelcomeSection from "../../../components/WelcomeSection/WelcomeSection";
import Button from "../../../components/UI/Button/Button";
import AuthSection from "../../../components/AuthSection/AuthSection";
import { textData } from "../../../utils/textData";

import styles from "../Autorization.module.css";

const NewPassword = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.authContainerLeft}>
      <div className={styles.greetingsWrapper}>
        <div className={styles.greetingsContainer}>
          <WelcomeSection />
          <Link to={textData[`${pathname}`]["link"]}>
            <Button className={styles.singinBtn}>
              {textData[`${pathname}`]["linkBtn"]}
            </Button>
          </Link>
        </div>
      </div>
      <AuthSection />
    </div>
  );
};

export default NewPassword