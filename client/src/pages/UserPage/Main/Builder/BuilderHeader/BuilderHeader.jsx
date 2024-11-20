import { useState } from "react";
import { Link } from "react-router-dom";
import cn from 'classnames'
import DropDown from "../../../../../components/UI/DropDown/DropDown";
import SearchBox from "../../../../../components/UI/SearchBox/SearchBox";
import Btn from "../Btn/Btn";

import styles from "./BuilderHeader.module.css";

const BuilderHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState(false);
  const [selectedNewResume, setSelectedNewResume] = useState(false);
  const handleSelectedMenu = () => {
    setSelectedMenu((prev) => !prev);
    if (selectedNewResume) {
      setSelectedNewResume(false)
    }

  }

  const handleSelectedNewResume = () => {
    setSelectedNewResume((prev) => !prev);
    if (selectedMenu) {
      setSelectedMenu(false)
    }
  }




  const deleteHandler = () => { };
  const guideHandler = () => { };
  const importPdfHandler = () => { };
  const importLinkedInHandler = () => { };
  const createHandler = () => { };

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Resume&nbsp;Builder</h1>
      <div className={styles.nav}>
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
                Delete&nbsp;all&nbsp;resumes
              </li>
              <li className={styles.sectMenuDropDownItem} onClick={guideHandler}>
                Guide&nbsp;tour
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
            className={styles.sectNewResumeDropDown}
            activeClass={selectedNewResume}
            maxHeight="152px"
          >
            <ul className={styles.sectMenuDropDownList}>
              <li
                className={styles.sectMenuDropDownItem}
                onClick={importPdfHandler}
              >
                Import&nbsp;from&nbsp;PDF&nbsp;or&nbsp;Doc
              </li>
              <li
                className={styles.sectMenuDropDownItem}
                onClick={importLinkedInHandler}
              >
                Import&nbsp;from&nbsp;LinkedIn
              </li>

              <li
                className={styles.sectMenuDropDownItem}
                onClick={createHandler}
              >
                <Link to="create"> Create&nbsp;a&nbsp;blank&nbsp;resume</Link>

              </li>
            </ul>
          </DropDown>

        </div>
        <SearchBox />
      </div>
    </div>
  );
};

export default BuilderHeader;
