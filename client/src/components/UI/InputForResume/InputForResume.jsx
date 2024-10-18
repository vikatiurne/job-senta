import { Field } from "formik";

import styles from "./InputForResume.module.css";

const InputForResume = ({
  id,
  name,
  placeholder,
  img,
  touched,
  handleChange,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        {img}

        <Field
          autoComplete="off"
          name={name}
          id={id}
          placeholder={placeholder}
          onKeyUp={handleChange}
          className={
            !touched[name]
              ? `${styles.inputField} `
              : `${styles.inputField} ${styles.inputFieldTouched}`
          }
        />
      </div>
    </div>
  );
};

export default InputForResume;
