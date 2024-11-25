import Button from "../../UI/Button/Button";
import img from "../../../assets/manHomePage.png";

import styles from "./RegisterResume.module.css";
import { Link } from "react-router-dom";

const RegisterResume = () => {
  return (
    <div className={styles.container} >
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <h2>
            Register today{" "}
            <span className={styles.thirdLine}>create a resume</span>{" "}
            <span className={styles.secondLine}>
              and apply for <span className={styles.thirdLine}>offers!</span>
            </span>
          </h2>
          <Link to="/registration"><Button className={styles.getStartedBtn}>Get started now</Button></Link>
        </div>
      </div>
      <img src={img} alt="hero" className={styles.imgHero} />
    </div>
  );
};

export default RegisterResume;
