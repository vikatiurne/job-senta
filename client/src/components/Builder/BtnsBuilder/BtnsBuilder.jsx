import { useEffect, useState } from "react";

import { ReactComponent as Add } from "../../../assets/user_page/builder/ActiveResume/ic-duplicate.svg";
import { ReactComponent as Linkedin } from "../../../assets/user_page/builder/ActiveResume/ic-linkedin-download.svg";
import { ReactComponent as Download } from "../../../assets/user_page/builder/ActiveResume/ic-download.svg";
import { ReactComponent as Archive } from "../../../assets/user_page/builder/ActiveResume/archive.svg";
import { ReactComponent as Remove } from "../../../assets/user_page/builder/ActiveResume/ic-remove-all.svg";

import Button from "../../UI/Button/Button";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchArchiveOneResume,
  fetchArchiveSeveralResume,
  fetchCloneResume,
  fetchDeleteOneResume,
  fetchDeleteSeveralResume,
  fetchGetAllResume,
  setCheckedResumes,
  setLimit,
} from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";

import styles from "./BtnsBuilder.module.css";

const BtnsBuilder = () => {
  const { limit, checkedResumes, isShowArchive, sort, isShowFavorite } = useSelector(
    (state) => state.resume
  );

  const [limitNum, setLimitNum] = useState(limit);
  const [activeCloneBtn, setActiveCloneBtn] = useState(false);
  const [activeDownloadBtn, setActiveDownloadBtn] = useState(true);
  const [activeMultiBtn, setActiveMultiBtn] = useState(false);
  const [idsChecked, setIdsChecked] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setIdsChecked(checkedResumes);
    const countChecked = checkedResumes.length;
    setActiveMultiBtn(countChecked > 0);
    setActiveDownloadBtn(countChecked === 0);
    setActiveCloneBtn(countChecked === 1);
  }, [checkedResumes]);

  const handleClone = () => {
    dispatch(fetchCloneResume(idsChecked[0]));
    dispatch(setCheckedResumes([]));
  };

  const handleDelete = () => {
    const idsToDelete = checkedResumes;
    idsToDelete.length === 1
      ? dispatch(fetchDeleteOneResume(idsToDelete[0]))
      : dispatch(fetchDeleteSeveralResume(idsToDelete));
    dispatch(setCheckedResumes([]));
    setIdsChecked([]);
  };

  const chengeStatusResume = ({ isArchive }) => {  
    const idsToChangeStatus = checkedResumes;  
    const action =  
      idsToChangeStatus.length === 1  
        ? fetchArchiveOneResume({ resumeId: idsToChangeStatus[0], isArchive })  
        : fetchArchiveSeveralResume({  
            resumeIds: idsToChangeStatus,  
            isArchive,  
          });  

    dispatch(action).then(() => {  
        dispatch(fetchGetAllResume({  
            page: 1,  
            limit,  
            sort,  
            isArchive: isShowArchive,
            isFavorite: isShowFavorite,  
        }));  
        dispatch(setCheckedResumes([]));  
        setIdsChecked([]);  
    });  
}; 

  const handleArchive = () => {
    const newArchiveStatus = !isShowArchive;  
    chengeStatusResume({  
        isArchive: newArchiveStatus 
    });  
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
          onClick={handleArchive}
          className={activeMultiBtn ? styles.icon : styles.notActiveLd}
          title={!isShowArchive ? "add to archive" : "add to active"}
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
