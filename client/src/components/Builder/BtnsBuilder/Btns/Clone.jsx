
import { ReactComponent as Add } from "../../../../assets/user_page/builder/ActiveResume/ic-duplicate.svg";
import Button from "../../../UI/Button/Button";

import styles from "../BtnsBuilder.module.css";


const Clone = ({ onClick, isActive }) => {
 
  return (
    <Button
      onClick={onClick}
      className={isActive ? styles.icon : styles.notActive}
      title="clone one resume"
      disabled={!isActive}
    >
      <Add />
    </Button>
  );
};

export default Clone;
