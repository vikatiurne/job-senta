import { useState } from "react";
import { Link } from "react-router-dom";

import DropDown from "../../../../../components/UI/DropDown/DropDown";
import SearchBox from "../../../../../components/UI/SearchBox/SearchBox";
import Btn from "../Btn/Btn";

import styles from "./BuilderHeader.module.css";
import DragAndDropUpload from "../../../../../components/Builder/DragAndDropUpload/DragAndDropUpload";

const BuilderHeader = () => {
  const [selectedNewResume, setSelectedNewResume] = useState(false);
  const [activeModalFile, setActiveModalFile] = useState(false);
  const [activeModalLinkedin, setActiveModalLinkedin] = useState(false);

  const handleSelectedNewResume = () => {
    setSelectedNewResume((prev) => !prev);
  };

  const importPdforDocHandler = () => setActiveModalFile(true);
  const importLinkedInHandler = () => setActiveModalLinkedin(true);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>My&nbsp;Resume</h1>
        <div className={styles.nav}>
          <SearchBox />
          <div className={styles.newResume}>
            <Btn
              onClick={handleSelectedNewResume}
              dropDownActive={selectedNewResume}
            />
            <DropDown
              className={styles.sectNewResumeDropDown}
              activeClass={selectedNewResume}
              maxHeight="152px"
            >
              <ul className={styles.sectMenuDropDownList}>
                <li
                  className={styles.sectMenuDropDownItem}
                  onClick={importPdforDocHandler}
                >
                  Import&nbsp;from&nbsp;PDF&nbsp;or&nbsp;Doc
                </li>
                <li
                  className={styles.sectMenuDropDownItem}
                  onClick={importLinkedInHandler}
                >
                  Import&nbsp;from&nbsp;LinkedIn
                </li>

                <li className={styles.sectMenuDropDownItem}>
                  <Link to="create"> Create&nbsp;a&nbsp;blank&nbsp;resume</Link>
                </li>
              </ul>
            </DropDown>
          </div>
        </div>
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

export default BuilderHeader;
