import { ReactComponent as Linkedin } from "../../../../assets/user_page/builder/ActiveResume/ic-linkedin-download.svg";

import Button from "../../../UI/Button/Button";

import styles from "../BtnsBuilder.module.css";

const LinkedInDownload = ({isActive}) => {
  return (
    <Button
          className={isActive ? styles.iconLd : styles.notActiveLd}
          title="download linkedin resume"
          disabled={!isActive} 
        >
          <Linkedin />
        </Button>
  )
}

export default LinkedInDownload