import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import WelcomeSection from "../../../components/AutorizationPage/WelcomeSection/WelcomeSection";
import Button from "../../../components/UI/Button/Button";
import AuthSection from "../../../components/AutorizationPage/AuthSection/AuthSection";
import { textData } from "../../../utils/textData";

import styles from "../Autorization.module.css";

const NewPassword = () => {
  const { pathname } = useLocation();
  const url = pathname.substring(0, pathname.indexOf('/', 1))


  return (
    <motion.div
      className={styles.authContainerLeft}
      initial={{ opacity: 0, transform: "translateX(-100%)" }}
      animate={{ opacity: 1, transform: "translateX(0%)" }}
      exit={{ opacity: 0, transform: "translateX(100%)" }}
      transition={{ ease: [0.1, 0.6, 0.8, 0.6] }}
    >
      <div className={styles.greetingsWrapper}>
        <div className={styles.greetingsContainer}>
          <WelcomeSection path={"/recovery-password"} />
          <Link to={textData[`${url}`]["link"]}>
          <Button className={styles.singinBtn}>
            {textData[`${url}`]["linkBtn"]}
          </Button>
          </Link>
        </div>
      </div>
      <AuthSection path={"/recovery-password"}/>
    </motion.div>
  );
};

export default NewPassword;
