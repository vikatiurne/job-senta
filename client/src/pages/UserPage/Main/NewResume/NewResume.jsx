import EnteringForm from "./EnteringForm/EnteringForm";
import Preview from "./Preview/Preview";
import MobileBtns from "./MobileBtns/MobileBtns";

import styles from "./NewResume.module.css";

const NewResume = () => {
  return (
    <div className={styles.wrapper}>
      <EnteringForm />
      <div className={styles.previewWrapper}>
        <Preview />
        <MobileBtns />
      </div>
    </div>
  );
};

export default NewResume;
