import { useState } from "react";
import { Link } from "react-router-dom";

import DropDown from "../../../../../components/UI/DropDown/DropDown";
import SearchBox from "../../../../../components/UI/SearchBox/SearchBox";
import Btn from "../Btn/Btn";

import styles from "./BuilderHeader.module.css";

const BuilderHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState(false);
  const [selectedNewResume, setSelectedNewResume] = useState(false);
  const handleSelectedMenu = () => setSelectedMenu((prev) => !prev);
  const handleSelectedNewResume = () => setSelectedNewResume((prev) => !prev);

  const deleteHandler = () => {};
  const guideHandler = () => {};
  const importPdfHandler = () => {};
  const importLinkedInHandler = () => {};
  const createHandler = () => {};

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Resume Builder</h1>
      <SearchBox />
      <div className={styles.menu}>
        <Btn
          type="menu"
          onClick={handleSelectedMenu}
          dropDownActive={selectedMenu}
        />
        <DropDown
          className={styles.sectMenuDropDown}
          activeClass={selectedMenu}
          maxHeight="96px"
        >
          <ul className={styles.sectMenuDropDownList}>
            <li className={styles.sectMenuDropDownItem} onClick={deleteHandler}>
              Delete all resumes
            </li>
            <li className={styles.sectMenuDropDownItem} onClick={guideHandler}>
              Guide tour
            </li>
          </ul>
        </DropDown>
      </div>

      <div className={styles.newResume}>
        <Btn
          type="newResume"
          onClick={handleSelectedNewResume}
          dropDownActive={selectedNewResume}
        />
        <DropDown
          className={styles.sectMenuDropDown}
          activeClass={selectedNewResume}
          maxHeight="152px"
        >
          <ul className={styles.sectMenuDropDownList}>
            <li
              className={styles.sectMenuDropDownItem}
              onClick={importPdfHandler}
            >
              Import from PDF or Doc
            </li>
            <li
              className={styles.sectMenuDropDownItem}
              onClick={importLinkedInHandler}
            >
              Import from LinkedIn
            </li>
            <Link to="create">
              <li
                className={styles.sectMenuDropDownItem}
                onClick={createHandler}
              >
                Create a blank resume
              </li>
            </Link>
          </ul>
        </DropDown>
      </div>
    </div>
  );
};

export default BuilderHeader;
