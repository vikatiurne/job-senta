import { Field } from "formik";

import styles from "./InputForResume.module.css";

const InputForResume = ({ id, name, placeholder, img, touched }) => {
  return (
    <div className={`${styles.inputContainer} }`}>
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
  );
};

export default InputForResume;
