import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../UI/Button/Button";
import DropDown from "../../UI/DropDown/DropDown";

import { ReactComponent as Plus } from "../../../assets/user_page/builder/btn_plus.svg";
import { ReactComponent as DropDownIcon } from "../../../assets/user_page/home/dropdown.svg";

import styles from "./BtnsImport.module.css";

const BtnsImport = () => {
  const [dropDownActive, setDropDownActive] = useState(false);

  const handleDropDown = () => setDropDownActive((prev) => !prev);

  const importPdfHandler = () => {};
  const importLinkedInHandler = () => {};

  return (
    <div className={styles.btnContainer}>
      <Link to="./create" className={styles.createBtn}>
        <Plus /> <p>Create Resume</p>
      </Link>
      <div>
        <div
          className={`${styles.dropDownBtn}  ${
            dropDownActive && styles.bntWithDropDown
          }`}
          onClick={handleDropDown}
        >
          <p className={styles.btnTitle}>Import Resume</p>
          <Button
            className={`${styles.dropDown} ${
              dropDownActive ? styles.withDropDown : null
            }`}
          >
            <DropDownIcon />
          </Button>
        </div>
        <DropDown
          className={styles.importDropDown}
          activeClass={dropDownActive}
          maxHeight="119px"
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
          </ul>
        </DropDown>
      </div>
    </div>
  );
};

export default BtnsImport;
