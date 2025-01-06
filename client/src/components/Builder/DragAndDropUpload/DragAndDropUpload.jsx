import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Popup from "../../UI/Popup/Popup";

import { ReactComponent as Doc } from "../../../assets/user_page/home/upload-doc.svg";
import { ReactComponent as Pdf } from "../../../assets/user_page/home/upload-pdf.svg";
import { ReactComponent as File } from "../../../assets/user_page/home/document.svg";

import styles from "./DragAndDropUpload.module.css";
import Button from "../../UI/Button/Button";
import { fetchUploadDocOrPdf } from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";

const DragAndDropUpload = ({ active, setModalActive }) => {
  const dispatch = useDispatch();
  const initialValues = { file: null };

  const validationSchema = Yup.object().shape({
    file: Yup.mixed().required("File not selected"),
  });

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event, setFieldValue) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFieldValue("file", selectedFile);
      setUploadProgress(0);
    }
  };

  const handleDrop = useCallback((event, setFieldValue) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setFieldValue("file", droppedFile);
      setUploadProgress(0);
    }
  }, []);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("resume", file);

    const config = {
      onUploadProgress: (progressEvent) => {
        const percentage = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadProgress(percentage);
      },
    };

    dispatch(fetchUploadDocOrPdf({ formData, config }));
  };

  const onSubmit = () => {
    if (file) {
      uploadFile(file);
    }
  };

  const render = (
    <Popup
      active={active}
      setActive={() => setModalActive(false)}
      style={{ width: "621px" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form
            className={`${styles.uploadContainer} ${
              isDragging ? styles.dragging : ""
            }`}
            onDrop={(event) => handleDrop(event, setFieldValue)}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <h2 className={styles.title}>Import from PDF or DOC</h2>
            <div
              className={styles.form}
              onDragLeave={handleDragLeave}
              onDragEnter={() => setIsDragging(true)}
            >
              <div className={styles.icons}>
                <Doc />
                <Pdf />
              </div>
              <p className={styles.instruction}>
                Drag and drop or{" "}
                <label htmlFor="file-upload" className={styles.label}>
                  browse
                </label>{" "}
                your file
              </p>
              <input
                type="file"
                onChange={(event) => handleFileChange(event, setFieldValue)}
                accept=".pdf,.doc,.docx"
                style={{ display: "none" }}
                id="file-upload"
              />
            </div>
            {file && (
              <>
                <div className={styles.fileInfo}>
                  <File />
                  <div className={styles.progressContainer}>
                    <p className={styles.fileName}>{file.name}</p>
                    <div className={styles.progress}>
                      <div
                        className={styles.progressBar}
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <div className={styles.progressInfo}>
                      <p className={styles.progressText}>
                        {Math.round(file.size / 1024)} MB of{" "}
                        {Math.round(file.size / 1024)} MB
                      </p>
                      <p className={styles.progressStatus}>
                        Uploading: {uploadProgress}%
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  type="submit"
                  className={styles.doneBtn}
                  disabled={uploadProgress !== 100 && !file}
                >
                  Done
                </Button>
              </>
            )}
          </Form>
        )}
      </Formik>
    </Popup>
  );

  return render;
};

export default DragAndDropUpload;
