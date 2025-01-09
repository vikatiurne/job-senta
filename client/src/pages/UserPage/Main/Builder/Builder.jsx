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
import BtnsImport from "../../../../components/Builder/BtnsImport/BtnsImport";

const Builder = () => {
  const [isShowArchive, setIsShowArchive] = useState(false);
  const [isShowFavorite, setIsShowFavorite] = useState(false);

  const {
    sort,
    archiveResumes,
    activeResumes,
    getallstatus,
    limit,
    page,
    searchText,
    info,
  } = useSelector((state) => state.resume);

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
        isFavorite: isShowFavorite,
        searchText,
      })
    );
  }, [
    dispatch,
    limit,
    sort,
    isShowFavorite,
    page,
    searchText,
    info,
    isShowArchive,
  ]);

  const hendleShowArchive = () => {
    setIsShowArchive(true);
    dispatch(setIsArciveResumes(true));
  };

  const hendleShowActive = () => {
    setIsShowArchive(false);
    dispatch(setIsArciveResumes(false));
  };

  const renderResumes = (resumes, isActive) => {
    console.log(isActive, isShowFavorite);
    if (resumes.length === 0) {
      return (
        <p className={styles.emptyInfo}>
          {isActive
            ? isShowFavorite
              ? "No favorite resumes found"
              : "No active resumes found"
            : "No archived resumes found"}
        </p>
      );
    } else {
      return resumes.map((item) => (
        <ResumeListItem key={uuidv4()} item={item} />
      ));
    }
  };

  const renderActiveResumes = isShowFavorite
    ? activeResumes.filter((resume) => resume.isFavorite)
    : activeResumes;
  const renderArchiveResumes = isShowFavorite
    ? archiveResumes.filter((resume) => resume.isFavorite)
    : archiveResumes;

  const render =
    activeResumes.length > 0 ||
    archiveResumes.length > 0 ||
    searchText !== "" ||
    isShowFavorite ? (
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
            {!isShowArchive
              ? renderResumes(renderActiveResumes, true)
              : renderResumes(renderArchiveResumes, false)}
          </div>

          <BuilderFooter />
        </div>
      </div>
    ) : (
      <>
        <p className={styles.emptydata}>
          You don't have a resume yet. To create a resume, click the "+ Create
          resume" button or "+ Import Resume" button .
        </p>
        <BtnsImport />
      </>
    );

  return getallstatus === "loading" ? <Loader /> : render;
};

export default Builder;
