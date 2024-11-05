import { Field } from "formik";

import styles from "./InputForResume.module.css";

const InputForResume = ({
  id,
  name,
  placeholder,
  img,
  touched,
  className
}) => {
  return (

      <div className={`${styles.inputContainer} ${styles[`${className}`]}`}>
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
