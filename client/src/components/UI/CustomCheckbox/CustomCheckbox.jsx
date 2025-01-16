import styles from "./CustomCheckbox.module.css"

const CustomCheckbox = ({ children, className }) => {
  return (
    <label className={`${styles.customCheckbox} ${className}`}>
      {children}
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CustomCheckbox;
