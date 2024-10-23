import { useSelector } from "react-redux";
import EnteringForm from "./components/EnteringForm";

import styles from "./NewResume.module.css";

const NewResume = () => {
  const position = useSelector((state) => state.createResume.desiredPosition);

  //имя вытаскивавем из БД
  const userName = "Darina Taranenko";

  return (
    <div className={styles.wrapper}>
      
      <EnteringForm />

      <div className={styles.previewContainer}>
        <h4>{userName}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default NewResume;
