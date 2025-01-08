import { useState } from "react";
import PropTypes from "prop-types";
import style from "./WidgetsBtn.module.css";
import { ReactComponent as AddFile } from "../../../../../assets/user_page/home/addfile.svg";
import { ReactComponent as Contact } from "../../../../../assets/user_page/home/contact.svg";
import { ReactComponent as File } from "../../../../../assets/user_page/home/file.svg";
import { ReactComponent as Analyse } from "../../../../../assets/user_page/home/analyse.svg";
import { ReactComponent as User } from "../../../../../assets/user_page/home/user.svg";

import cn from "classnames";
import { Link } from "react-router-dom";
import DragAndDropUpload from "../../../../../components/Builder/DragAndDropUpload/DragAndDropUpload";

const WidgetsBtn = ({ className }) => {
  const [activeModalFile, setActiveModalFile] = useState(false);

  return (
    <>
      <section className={cn(style.sectWidget, className)}>
        <ul className={style.sectWidgetList}>
          <li className={style.sectWidgetItem}>
            <button
              onClick={() => setActiveModalFile(true)}
              className={cn(style.sectWidgetBtn, style.sectWidgetBtnImport)}
            >
              <AddFile />
              Import a resume
            </button>
          </li>
          <li className={style.sectWidgetItem}>
            <button
              className={cn(style.sectWidgetBtn, style.sectWidgetBtnContact)}
            >
              <Contact />
              Contacts list
            </button>
          </li>
          <li className={style.sectWidgetItem}>
            <Link
              to="../builder"
              className={cn(style.sectWidgetBtn, style.sectWidgetBtnResume)}
            >
              <File />
              My Resumes
            </Link>
          </li>
          <li className={style.sectWidgetItem}>
            <Link
              to="../analyse"
              className={cn(style.sectWidgetBtn, style.sectWidgetBtnAnalyse)}
            >
              <Analyse />
              Analyse a resume
            </Link>
          </li>
          <li className={style.sectWidgetItem}>
            <button
              className={cn(style.sectWidgetBtn, style.sectWidgetBtnAccount)}
            >
              <User />
              My Account
            </button>
          </li>
        </ul>
      </section>
      {activeModalFile && (
        <DragAndDropUpload
          active={activeModalFile}
          setModalActive={setActiveModalFile}
        />
      )}
    </>
  );
};

WidgetsBtn.propTypes = {
  className: PropTypes.string,
};

export default WidgetsBtn;
