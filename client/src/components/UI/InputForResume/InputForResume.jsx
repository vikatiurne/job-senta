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

      <div className={styles.inputContainer}>
        {img}

      <Field
     
          autoComplete="off"
          name={name}
          id={id}
          placeholder={placeholder}
          // onBlur={handleChange}
          onKeyUp={handleChange}
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
