import { ReactComponent as ArchiveIcon } from "../../../../assets/user_page/builder/ActiveResume/archive.svg";

import Button from "../../../UI/Button/Button";

import styles from "../BtnsBuilder.module.css";

const Archive = ({ onClick, isActive,isShowArchive }) => {
  return (
    <Button
          onClick={onClick}
          className={isActive ? styles.icon : styles.notActiveLd}
          title={!isShowArchive ? "add to archive" : "add to active"}
          disabled={!isActive}
        >
          <ArchiveIcon />
        </Button>
  )
}

export default Archive