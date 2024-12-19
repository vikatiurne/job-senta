import styles from "./CustomCheckbox.module.css"

const CustomCheckbox = ({ children }) => {
  return (
    <label className={styles.customCheckbox}>
      {children}
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CustomCheckbox;
