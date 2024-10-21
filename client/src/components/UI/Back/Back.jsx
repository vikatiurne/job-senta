import { Link } from "react-router-dom";

import arrow from "../../../assets/user_page/builder/arrow-outlined.svg";
import styles from "./Back.module.css";

const Back = () => {
  return (
    <Link to=".." className={styles.back}>
      <img src={arrow} alt="arrow" />
      <p>Back</p>
    </Link>
  );
};

export default Back;
