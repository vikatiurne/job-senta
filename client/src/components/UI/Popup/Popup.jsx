import styles from "./Popup.module.css";

const Popup = ({ active, setActive, children, style, cross }) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive()}
    >
      <div
        className={
          active
            ? `${styles.modalContent} ${styles.active} `
            : styles.modalContent
        }
        style={{ width: !!style ? style.width : null, marginLeft: !!style ? style.margin : null }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={!cross ? styles.close : cross}
          onClick={() => setActive()}
        ></div>

        {children}
      </div>
    </div>
  );
};

export default Popup;
