import Button from "../../UI/Button/Button";

import styles from "./Join.module.css";

const Join = () => {
  return (
    <div className={styles.container} id="Price">
     
        <h2 className={styles.title}>
          Do you want to stand <span className={styles.secondLine}>out among</span>
          <span className={styles.thirdLine}>candidates and get the best vacancies?</span>
        </h2>
        <Button className={styles.joinBtn}>Join now</Button>
      
    </div>
  );
};

export default Join;
