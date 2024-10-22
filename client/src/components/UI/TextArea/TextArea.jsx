import { Field } from "formik";
import { ReactComponent as Pen } from "../../../assets/user_page/builder/createResume/pen.svg";
import styles from "./TextArea.module.css";

const TextArea = ({
  id,
  name,
  placeholder,
  touched,
  error,
  handleChange,
}) => {

  return (
    <>
      <div className={styles.inputContainer}>
        <Pen />

        <Field
          as="textarea"
          type="textarea"
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
      <p
        className={!!error[name] ? styles.limitErr : styles.limit}
      >
        (0 of 500 characters)
      </p>
    </>
  );
};

export default TextArea;
