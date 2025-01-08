import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const { error } = useSelector((state) => state.resume);

  const dispatch = useDispatch();
  const initialValues = { file: null };

  const validationSchema = Yup.object().shape({
    file: Yup.mixed().required("File not selected"),
  });

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);

  useEffect(() => {
    if (error) {
      setUploadError(error);
    }
  }, [error]);

  console.log(uploadError);

  const checkExt = (file) => {
    const allowedExt = ["pdf", "doc", "docx"];
    const currentExt = file.name.split(".").pop();
    return allowedExt.includes(currentExt);
  };

  const handleFileChange = (event, setFieldValue) => {
    const selectedFile = event.target.files[0];
    const isAllowedExt = checkExt(selectedFile);
    setFile(null)
    setUploadError(null);
    if (selectedFile && isAllowedExt) {
      setFile(selectedFile);
      setFieldValue("file", selectedFile);
      setUploadProgress(0);
    } else {
      setUploadError("Unsupported file format");
    }
  };

  const handleDrop = useCallback((event, setFieldValue) => {
    event.preventDefault();
    setIsDragging(false);
    setUploadError(null);
    setFile(null)
    const droppedFile = event.dataTransfer.files[0];
    const isAllowedExt = checkExt(droppedFile);
    if (droppedFile && isAllowedExt) {
      setFile(droppedFile);
      setFieldValue("file", droppedFile);
      setUploadProgress(0);
    } else {
      setUploadError("Unsupported file format");
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
    uploadFile(file);
    if (error) setUploadError(error);
  };

  const render = (
    <Popup
      active={active}
      setActive={() => {
        setModalActive(false);
        setUploadError(null);
      }}
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
            } `}
            onDrop={(event) => handleDrop(event, setFieldValue)}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <h2 className={styles.title}>Import from PDF or DOC</h2>
            <div
              className={uploadError ? styles.error : styles.form}
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
                <Button type="submit" className={styles.doneBtn}>
                  Done
                </Button>
              </>
            )}
            {uploadError && (
              <p className={styles.errorMessage}>{uploadError}</p>
            )}
          </Form>
        )}
      </Formik>
    </Popup>
  );

  return render;
};

export default DragAndDropUpload;
