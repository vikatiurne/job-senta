import styles from "./Popup.module.css";

const Popup = ({ active, setActive, children, className = null }) => {
  console.log(!className);

  return (
    <div
      className={
        active
          ? `${styles.modal} ${styles.active} ${
              !className ? null : styles.modalBottom
            }`
          : styles.modal
      }
      onClick={() => setActive()}
    >
      <div
        className={
          active
            ? `${styles.modalContent} ${styles.active}  ${className}`
            : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div className={styles.close} onClick={() => setActive()}></div> */}
        <div
          className={!className ? styles.close : styles.closeDark}
          onClick={() => setActive()}
        ></div>

        {children}
      </div>
    </div>
  );
};

export default Popup;
