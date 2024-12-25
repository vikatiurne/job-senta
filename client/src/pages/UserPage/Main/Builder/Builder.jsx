import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import HeaderTable from "../../../../components/Builder/HeaderTable/HeaderTable";
import Loader from "../../../../components/UI/Loader/Loader";
import ResumeListItem from "../../../../components/Builder/ResumeListItem/ResumeListItem";
import BuilderFooter from "../../../../components/Builder/BuilderFooter/BuilderFooter";

import {
  fetchGetAllResume,
  setIsArciveResumes,
} from "../NewResume/NewResumeSlice";

import styles from "./Builder.module.css";

const Builder = () => {
  const [isShowArchive, setIsShowArchive] = useState(false);
  const [isShowFavorite, setIsShowFavorite] = useState(false);

  const { sort, resumes, getallstatus, limit, page } = useSelector(
    (state) => state.resume
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setIsShowFavorite(sort === "favorite");
  }, [sort]);

  useEffect(() => {
    dispatch(
      fetchGetAllResume({
        page,
        limit,
        sort,
        isArchive: isShowArchive,
        isFavorite: isShowFavorite,
      })
    );
  }, [dispatch, limit, sort, isShowArchive, isShowFavorite, page]);

  const hendleShowArchive = () => {
    setIsShowArchive(true);
    dispatch(setIsArciveResumes(true));
  };

  const hendleShowActive = () => {
    setIsShowArchive(false);
    dispatch(setIsArciveResumes(false));
  };

  const render = (
    <div className={styles.builderWrapper}>
      <div className={styles.resumeStatus}>
        <p
          onClick={hendleShowActive}
          className={`${styles.statusTitle} ${
            !isShowArchive ? styles.active : styles.archive
          }`}
        >
          Active Resumes
        </p>
        <p
          onClick={hendleShowArchive}
          className={`${styles.statusTitle} ${
            !isShowArchive ? styles.archive : styles.active
          }`}
        >
          Archived Resumes
        </p>
      </div>
      <div className={styles.builderContainer}>
        <div className={styles.builderTable}>
          <HeaderTable />
          {resumes.map((item) => (
            <ResumeListItem key={uuidv4()} item={item} />
          ))}
        </div>

        <BuilderFooter />
      </div>
    </div>
  );
  return getallstatus === "loading" ? <Loader /> : render;
};

export default Builder;
