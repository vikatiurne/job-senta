import EnteringForm from "./EnteringForm/EnteringForm";
import Preview from "./Preview/Preview";


import styles from "./NewResume.module.css";

const NewResume = () => {


  return (
    <div className={styles.wrapper}>
      <EnteringForm />

      <div className={styles.previewWrapper}>
        <Preview />
       
      </div>
    </div>
  );
};

export default NewResume;
