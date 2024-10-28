import EnteringForm from "./EnteringForm/EnteringForm";
import Preview from "./Preview/Preview";
import Button from "../../../../components/UI/Button/Button";
import exportImg from "../../../../assets/user_page/builder/createResume/export.svg";

import styles from "./NewResume.module.css";

const NewResume = () => {


  return (
    <div className={styles.wrapper}>
      <EnteringForm />

      <div className={styles.previewWrapper}>
        <Preview />
        <div className={styles.exportBtns}>
        <Button className={`${styles.export} ${styles.exportDoc}`}>
         <img src={exportImg} alt="export" />
         <p>Export in DOC</p> 
        </Button>
        <Button className={`${styles.export} ${styles.exportPdf}`}>
        <img src={exportImg} alt="export" />
         <p>Export in PDF</p> 
        </Button>

        </div>
      </div>
    </div>
  );
};

export default NewResume;
