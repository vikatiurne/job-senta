import { useState } from "react";
import { ReactComponent as Remove } from "../../../../assets/user_page/builder/ActiveResume/ic-remove-all.svg";

import Button from "../../../UI/Button/Button";

import styles from "../BtnsBuilder.module.css";
import Popup from "../../../UI/Popup/Popup";

const Delete = ({ onClick, isActive }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Button
        onClick={() => setModalActive(true)}
        className={isActive ? styles.icon : styles.notActiveLd}
        title="delete"
        disabled={!isActive}
      >
        <Remove />
      </Button>
      {modalActive && (
        <Popup
          active={modalActive}
          setActive={() => setModalActive()}
          style={{ width: "342px", margin: "280px" }}
          cross={styles.cross}
        >
          <div className={styles.popup}>
            <h4 className={styles.textPopap}>
              Are you sure you want to delete?
            </h4>
            <Button className={styles.delPopap} onClick={onClick}>Delate</Button>
            <Button className={styles.cancelPopap} onClick={() => setModalActive(false)}>Cancel</Button>
          </div>
        </Popup>
      )}
    </>
  );
};

export default Delete;
