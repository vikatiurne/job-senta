import EnteringForm from "./EnteringForm/EnteringForm";
import Preview from "./Preview/Preview";
import Button from "../../../../components/UI/Button/Button";

import styles from "./NewResume.module.css";
import { useRef } from "react";
import MobileBtns from "./MobileBtns/MobileBtns";

const NewResume = () => {
  const pdfRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <EnteringForm />

      <div className={styles.previewWrapper}>
        <Preview ref={pdfRef} />
        <MobileBtns pdfRef={pdfRef} />
      </div>
    </div>
  );
};

export default NewResume;
