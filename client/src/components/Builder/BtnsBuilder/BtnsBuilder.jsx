import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchArchiveOneResume,
  fetchArchiveSeveralResume,
  fetchCloneResume,
  fetchDeleteOneResume,
  fetchDeleteSeveralResume,
  setCheckedResumes,
  setLimit,
} from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";

import Clone from "./Btns/Clone";
import LinkedInDownload from "./Btns/LinkedInDownload";
import Download from "./Btns/Download";
import Archive from "./Btns/Archive";
import Delete from "./Btns/Delete";

import styles from "./BtnsBuilder.module.css";
import DragAndDropUpload from "../DragAndDropUpload/DragAndDropUpload";

const BtnsBuilder = () => {
  const { limit, checkedResumes, isShowArchive } = useSelector(
    (state) => state.resume
  );

  const [limitNum, setLimitNum] = useState(limit);
  const [activeCloneBtn, setActiveCloneBtn] = useState(false);
  const [activeDownloadBtn, setActiveDownloadBtn] = useState(true);
  const [activeMultiBtn, setActiveMultiBtn] = useState(false);
  const [idsChecked, setIdsChecked] = useState([]);
  const [activeModalFile, setActiveModalFile] = useState(false);

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

  const importPdforDocHandler = () => setActiveModalFile(true);

  const changeStatusResume = ({ isArchive }) => {
    const idsToChangeStatus = checkedResumes;
    const action =
      idsToChangeStatus.length === 1
        ? fetchArchiveOneResume({ resumeId: idsToChangeStatus[0], isArchive })
        : fetchArchiveSeveralResume({
            resumeIds: idsToChangeStatus,
            isArchive,
          });

    dispatch(action);

    dispatch(setCheckedResumes([]));
    setIdsChecked([]);
  };

  const handleArchive = () => {
    const newArchiveStatus = !isShowArchive;
    changeStatusResume({
      isArchive: newArchiveStatus,
    });
  };

  const handleLimit = (e) => {
    setLimitNum(Number(e.target.value));
    dispatch(setLimit(e.target.value));
  };

  return (
    <>
      <div className={styles.btnsConainer}>
        <div className={styles.btns}>
          {!isShowArchive && (
            <>
              <Clone onClick={handleClone} isActive={activeCloneBtn} />
              <LinkedInDownload isActive={activeDownloadBtn} />
              <Download
                onClick={importPdforDocHandler}
                isActive={activeDownloadBtn}
              />
            </>
          )}

          <Archive
            onClick={handleArchive}
            isActive={activeMultiBtn}
            isShowArchive={isShowArchive}
          />
          <Delete onClick={handleDelete} isActive={activeMultiBtn} />
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
      {activeModalFile && (
        <DragAndDropUpload
          active={activeModalFile}
          setModalActive={setActiveModalFile}
        />
      )}
    </>
  );
};

export default BtnsBuilder;
