import { useEffect, useState } from "react";
import { Field } from "formik";

import crossIcon from "../../../assets/icons/crossIcon.svg";
import checkIcon from "../../../assets/icons/greencheckIcon.svg";

import styles from "./Input.module.css";

const Input = ({ id, name, placeholder, img, error, touched }) => {
  const [isHideErrMsg, setIsHideErrMsg] = useState(false);

  useEffect(() => {
    error[name] ? setIsHideErrMsg(false) : setIsHideErrMsg(true);
  }, [error, name]);

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        {!touched[name] ? (
          <img src={img} alt={img} className={styles.icon} />
        ) : (
          <img
            src={error[name] ? crossIcon : checkIcon}
            alt="icon"
            className={styles.icon}
          />
        )}
        {/* {console.log(name, ":", error[name])} */}
        <Field
          autoComplete="off"
          name={name}
          id={id}
          placeholder={placeholder}
          className={
            !touched[name] || !error[name] || isHideErrMsg
              ? error[name]
                ? `${styles.inputField} ${styles.inputFieldErr}`
                : `${styles.inputField} ${styles.inputFieldCorrect}`
              : `${styles.inputField} ${styles.inputNotvisible}`
          }
        />
      </div>

      {error[name] && touched[name] && (
        <div
          onClick={() => setIsHideErrMsg(true)}
          className={isHideErrMsg ? styles.hideErrField : styles.errField}
        >
          <p>{error[name]}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
