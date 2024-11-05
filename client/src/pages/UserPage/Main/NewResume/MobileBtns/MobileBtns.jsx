import { useState } from "react";
import Button from "../../../../../components/UI/Button/Button";
import exportImg from "../../../../../assets/user_page/builder/createResume/export.svg";
import { ReactComponent as Export } from "../../../../../assets/user_page/builder/mobile/export.svg";
import { ReactComponent as Eye } from "../../../../../assets/user_page/builder/mobile/eye.svg";
import DropDown from "../../../../../components/UI/DropDown/DropDown";
import Popup from "../../../../../components/UI/Popup/Popup";
import Preview from "../Preview/Preview";

import { jsPDF } from "jspdf";
import "jspdf/dist/polyfills.es.js";

import styles from "./MobileBtns.module.css";

const MobileBtns = ({pdfRef}) => {
  const [selectedExport, setSelectedExport] = useState(false);
  const [preview, setPreview] = useState(false);
  const handleSelectedExport = () => setSelectedExport((prev) => !prev);

  const handleDownloadPdf = () => {
    setSelectedExport(false);
    // const content = pdfRef.current;
    // console.log(pdfRef);

    // const doc = new jsPDF();

    // doc.html(content, {
    //   callback: function (doc) {
    //     doc.save("resume.pdf");
    //   },
    // });
  };
  const handleDownloadDoc = () => {
    setSelectedExport(false);
  };

  return (
    <>
      <div className={styles.exportBtns}>
        <Button
          className={`${styles.export} ${styles.exportDoc}`}
          onClick={handleDownloadDoc}
        >
          <img src={exportImg} alt="export" />
          <p>Export in DOC</p>
        </Button>
        <Button
          className={`${styles.export} ${styles.exportPdf}`}
          onClick={handleDownloadPdf}
        >
          <img src={exportImg} alt="export" />
          <p>Export in PDF</p>
        </Button>
      </div>

      <div className={styles.mobileBtns}>
        <Eye onClick={() => setPreview(true)} className={styles.eye } />
        {preview && (
          <Popup active={preview} setActive={setPreview}>
            <Preview active={preview} />
          </Popup>
        )}

        <div className={styles.exportBtnMob}>
          <Button
            className={`${styles.exportMob} ${
              selectedExport ? styles.dropDownActive : null
            }`}
            onClick={() => handleSelectedExport()}
          >
            <Export />
            <p>Export</p>
          </Button>
          <DropDown
            className={styles.exportDropDown}
            activeClass={selectedExport}
            maxHeight="96px"
          >
            <ul className={styles.dropDownList}>
              <li className={styles.dropDownItem} onClick={handleDownloadDoc}>
                Export in DOC
              </li>
              <li className={styles.dropDownItem} onClick={handleDownloadPdf}>
                Export in PDF
              </li>
            </ul>
          </DropDown>
        </div>
      </div>
    </>
  );
};

export default MobileBtns;
