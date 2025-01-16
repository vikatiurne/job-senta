import { ReactComponent as DownloadIcon } from "../../../../assets/user_page/builder/ActiveResume/ic-download.svg";

import Button from "../../../UI/Button/Button";

import styles from "../BtnsBuilder.module.css";

const Download = ({ onClick, isActive }) => {
  return (
    <Button
      onClick={onClick}
      className={isActive ? styles.icon : styles.notActive}
      title="download .docx/.pdf resume"
      disabled={!isActive}
    >
      <DownloadIcon />
    </Button>
  );
};

export default Download;
