import { useState } from "react";

import exportImg from "../../../../../assets/user_page/builder/createResume/export.svg";
import { ReactComponent as Export } from "../../../../../assets/user_page/builder/mobile/export.svg";
import { ReactComponent as Eye } from "../../../../../assets/user_page/builder/mobile/eye.svg";

import Button from "../../../../../components/UI/Button/Button";
import DropDown from "../../../../../components/UI/DropDown/DropDown";
import Popup from "../../../../../components/UI/Popup/Popup";
import Preview from "../Preview/Preview";

import { jsPDF } from "jspdf";
import "jspdf/dist/polyfills.es.js";
import htmlDocx from "html-docx-js/dist/html-docx";
import { saveAs } from "file-saver";
import { Packer } from "docx";

import styles from "./MobileBtns.module.css";
import { DocumentCreator } from "../cv-generator";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { generateResume } from "../generator-cv";

const MobileBtns = () => {
  const [selectedExport, setSelectedExport] = useState(false);
  const [preview, setPreview] = useState(false);

  const info = useSelector((state) => state.createResume.info);

  //имя вытаскивавем из БД
  // const user = "Darina Taranenko";
  const { user } = useAuth0();

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
    // const doc = generateResume(info, user)

   
      const documentCreator = new DocumentCreator();
      const doc = documentCreator.create(info, user);

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, "example.docx");
      });
  

    // const content = document.getElementById('content').innerHTML; // Получаем HTML-код содержимого
    // const converted = htmlDocx.asBlob(content); // Конвертируем в DOCX

    // // Создаем ссылку для скачивания
    // const link = document.createElement('a');
    // link.href = URL.createObjectURL(converted);
    // link.download = 'resume.docx'; // Имя файла
    // link.click();
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
        <Eye onClick={() => setPreview(true)} className={styles.eye} />
        {preview && (
          <Popup
            active={preview}
            setActive={setPreview}
            className={styles.previewResume}
          >
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
