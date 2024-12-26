import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import EnteringForm from "./EnteringForm/EnteringForm";
import Preview from "./Preview/Preview";
import MobileBtns from "./MobileBtns/MobileBtns";
import Loader from "../../../../components/UI/Loader/Loader";

import { fetchGetOneResume } from "./NewResumeSlice";

import styles from "./NewResume.module.css";

const NewResume = () => {
  const { getonestatus } = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isEdit = localStorage.getItem("_jobseeker_resume_isedit") === "true";

  const pathArr = pathname.split("/");
  const resumeId = Number(pathArr[pathArr.length - 1]);

  useEffect(() => {
    if (isEdit) {
      dispatch(fetchGetOneResume(resumeId));
    }
  }, [dispatch, resumeId, isEdit]);
  

  return getonestatus === "loading" ? (
    <Loader loading color="#958060" />
  ) : (
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
