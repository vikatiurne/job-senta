import burgerMenu from "../../../../../assets/user_page/builder/menu.svg";
import plus from "../../../../../assets/user_page/builder/btn_plus.svg";
import Button from "../../../../../components/UI/Button/Button";

import styles from "./Btn.module.css";

const MenuBtn = ({ type, onClick, dropDownActive }) => {
  return (
    <Button
      className={`${styles.btn} ${
        type === "menu" ? styles.menuBtn : styles.newResumeBtn
      } ${dropDownActive ? styles.withDropDown : null}`}
      onClick={onClick}
    >
      <img src={type === "menu" ? burgerMenu : plus} alt="burger" />
      <p>{type === "menu" ? "Menu" : "New Resume"}</p>
    </Button>
  );
};

export default MenuBtn;
