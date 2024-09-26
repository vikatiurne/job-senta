import styles from './Popup.module.css';

const Popup = ({ active, setActive, children }) => {
  
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive()}
    >
      <div
        className={
          active
            ? `${styles.modalContent} ${styles.active}`
            : styles.modalContent
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.close} onClick={() => setActive()}></div>
       
        {children}
      </div>
    </div>
  );
};

export default Popup;
