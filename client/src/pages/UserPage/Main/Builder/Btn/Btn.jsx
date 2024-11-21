import { ReactComponent as BurgerMenu } from "../../../../../assets/user_page/builder/menu.svg";
import { ReactComponent as Plus } from "../../../../../assets/user_page/builder/btn_plus.svg";
import Button from "../../../../../components/UI/Button/Button";

import styles from "./Btn.module.css";
import { useMedia } from '../../../../../hoc/useMedia/useMedia.js'

const MenuBtn = ({ type, onClick, dropDownActive }) => {

  const isMediaQuery = useMedia("(min-width:1024px)")
  console.log('isMediaQuery btn', isMediaQuery);

  return (
    <Button
      className={`${styles.btn} ${type === "menu" ? styles.menuBtn : styles.newResumeBtn
        } ${dropDownActive ? styles.withDropDown : null}`}
      onClick={onClick}
    >
      {type === "menu" ? <BurgerMenu /> : <Plus />}
      {isMediaQuery && <p>{type === "menu" ? "Menu" : "New Resume"}</p>}
    </Button>
  );
};

export default MenuBtn;
