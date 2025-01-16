import { Field } from "formik";

import styles from "./InputForResume.module.css";

const InputForResume = ({ id, name, placeholder, img, touched, errors }) => {
  return (
    <>
      <div
        className={
          !touched[name]   
          ? styles.inputContainer   
          : errors[name]   
          ? styles.inputContainerErr   
          : styles.inputContainer  
        }
      >
        {img}

        <Field
          autoComplete="off"
          name={name}
          id={id}
          placeholder={placeholder}
          className={
            !touched[name]
              ? `${styles.inputField} `
              : `${styles.inputField} ${styles.inputFieldTouched}`
          }
        />
      </div>
      {errors && name === "desiredPosition" && (
        <div className={styles.err}>{errors.desiredPosition}</div>
      )}
      {errors && name === "LinkedIn" && (
        <div className={styles.err}>{errors.LinkedIn}</div>
      )}
      {errors && name === "link" && (
        <div className={styles.err}>{errors.link}</div>
      )}
    </>
  );
};

export default InputForResume;
