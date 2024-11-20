import { useEffect, useState } from "react";

import exportImg from "../../../../../assets/user_page/builder/createResume/export.svg";
import { ReactComponent as Export } from "../../../../../assets/user_page/builder/mobile/export.svg";
import { ReactComponent as Eye } from "../../../../../assets/user_page/builder/mobile/eye.svg";

import Button from "../../../../../components/UI/Button/Button";
import DropDown from "../../../../../components/UI/DropDown/DropDown";
import Popup from "../../../../../components/UI/Popup/Popup";
import Preview from "../Preview/Preview";

import { saveAs } from "file-saver";
import { Packer } from "docx";

import pdfMake from "pdfmake/build/pdfmake";


import styles from "./MobileBtns.module.css";
import { DocumentCreator } from "../CV-generators/cv-generator-docx";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { PdfCreator } from "../CV-generators/cv-generator-pdf";

const MobileBtns = () => {
  const [selectedExport, setSelectedExport] = useState(false);
  const [preview, setPreview] = useState(false);
  const [emptyResume, setEmptyResume] = useState(true);

  const info = useSelector((state) => state.createResume.info);

  useEffect(() => {
    setEmptyResume(!Object.keys(info).length);
  }, [info]);

  //имя вытаскивавем из БД
  // const user = "Darina Taranenko";
  const { user } = useAuth0();

  const handleSelectedExport = () => setSelectedExport((prev) => !prev);

  const handleDownloadPdf = () => {
    setSelectedExport(false);
    const doc = new PdfCreator();
    const docDefinition = doc.create(info, user);
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getBlob((blob) => {
      saveAs(blob, "resume.pdf");
    });
  };

  const handleDownloadDoc = () => {
    setSelectedExport(false);
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create(info, user);
    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "resume.docx");
    });
  };

  return (
    <>
      <div className={styles.exportBtns}>
        <Button
          className={`${styles.export} ${styles.exportDoc}`}
          onClick={handleDownloadDoc}
          disabled={emptyResume}
        >
          <img src={exportImg} alt="export" />
          <p>Export in DOC</p>
        </Button>
        <Button
          className={`${styles.export} ${styles.exportPdf}`}
          onClick={handleDownloadPdf}
          disabled={emptyResume}
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
            disabled={emptyResume}
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
