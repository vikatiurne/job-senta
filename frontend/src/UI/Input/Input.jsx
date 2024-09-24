import { Field, ErrorMessage as Error } from "formik";

import styles from "./Input.module.css";

const Input = ({ id, name, placeholder, img }) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        <Field
          name={name}
          id={id}
          placeholder={placeholder}
          className={styles.inputField}
        />
        <img src={img} alt={img} className={styles.icon} />
      </div>
      <Error name={name}>
        {(error) => <span className={styles.errField}>{error}</span>}
      </Error>
    </div>
  );
};

export default Input;
