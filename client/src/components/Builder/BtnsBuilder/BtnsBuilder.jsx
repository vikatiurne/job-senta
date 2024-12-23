import { useEffect, useState } from "react";

import { ReactComponent as Add } from "../../../assets/user_page/builder/ActiveResume/ic-duplicate.svg";
import { ReactComponent as Linkedin } from "../../../assets/user_page/builder/ActiveResume/ic-linkedin-download.svg";
import { ReactComponent as Download } from "../../../assets/user_page/builder/ActiveResume/ic-download.svg";
import { ReactComponent as Archive } from "../../../assets/user_page/builder/ActiveResume/archive.svg";
import { ReactComponent as Remove } from "../../../assets/user_page/builder/ActiveResume/ic-remove-all.svg";

import Button from "../../UI/Button/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchCloneResume,
  fetchDeleteOneResume,
  fetchDeleteSeveralResume,
  setCheckedResumes,
  setLimit,
} from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";

import styles from "./BtnsBuilder.module.css";

const BtnsBuilder = () => {
  const { limit, checkedResumes } = useSelector((state) => state.resume);

  const [limitNum, setLimitNum] = useState(limit);
  const [activeCloneBtn, setActiveCloneBtn] = useState(false);
  const [activeDownloadBtn, setActiveDownloadBtn] = useState(true);
  const [activeMultiBtn, setActiveMultiBtn] = useState(false);
  const [idsChecked, setIsdChecked] = useState([]);

  // const getArrCheckedItems = () => {
  //   return Object.keys(checkedResumes).filter((key) => checkedResumes[key]);
  // };
  const getArrCheckedItems = () => {
    return checkedResumes.map(obj => Object.keys(obj)[0]) 
  };

  const dispatch = useDispatch();

  console.log(checkedResumes)
  useEffect(() => {
    setIsdChecked(checkedResumes);
    const countChecked = checkedResumes.length;
    setActiveMultiBtn(countChecked > 0);
    setActiveDownloadBtn(countChecked === 0);
    setActiveCloneBtn(countChecked === 1);
  }, [checkedResumes]);

  const handleClone = () => {
    dispatch(fetchCloneResume(Object.keys(idsChecked[0])));
    dispatch(setCheckedResumes([]));
  };

  const handleDelete = () => {
    const idsToDelete = getArrCheckedItems();
    idsToDelete.length === 1
      ? dispatch(fetchDeleteOneResume(idsToDelete[0]))
      : dispatch(fetchDeleteSeveralResume(idsToDelete));
      dispatch(setCheckedResumes([]));
    setIsdChecked([]);
  };

  const handleLimit = (e) => {
    setLimitNum(Number(e.target.value));
    dispatch(setLimit(e.target.value));
  };

  return (
    <div className={styles.btnsConainer}>
      <div className={styles.btns}>
        <Button
          onClick={handleClone}
          className={activeCloneBtn ? styles.icon : styles.notActive}
          title="clone one resume"
          disabled={!activeCloneBtn}
        >
          <Add />
        </Button>

        <Button
          className={activeDownloadBtn ? styles.iconLd : styles.notActiveLd}
          title="download linkedin resume"
        >
          <Linkedin />
        </Button>

        <Button
          className={activeDownloadBtn ? styles.icon : styles.notActive}
          title="download .docx/.pdf resume"
        >
          <Download />
        </Button>

        <Button
          className={activeMultiBtn ? styles.icon : styles.notActiveLd}
          title="add to archive"
          disabled={!activeMultiBtn}
        >
          <Archive />
        </Button>

        <Button
          onClick={handleDelete}
          className={activeMultiBtn ? styles.icon : styles.notActiveLd}
          title="delete"
          disabled={!activeMultiBtn}
        >
          <Remove />
        </Button>
      </div>

      <label className={styles.label}>
        Show:{" "}
        <input
          className={styles.inputLimit}
          type="number"
          value={limitNum}
          onChange={handleLimit}
        />
      </label>
    </div>
  );
};

export default BtnsBuilder;
