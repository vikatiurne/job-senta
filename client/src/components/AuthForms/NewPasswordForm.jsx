import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Popup from "../UI/Popup/Popup";

import passIcon from "../../assets/passIcon.png";
import { textData } from "../../utils/textData";

import styles from "./AuthForms.module.css";

const NewPasswordForm = () => {
  const [modalActive, setModalActive] = useState(false);
  const { pathname } = useLocation();

  const submitFormHandler = (values) => {
    //отправка формы на сервер
    console.log("Sucsess", values);
    setModalActive(true);
  };

  return (
    <Formik
      initialValues={initialValues.newpass}
      validationSchema={schemas.newpass}
      onSubmit={(values, { resetForm }) => {
        submitFormHandler(values);
        resetForm();
      }}
    >
      {({ errors, values, touched, isValid, dirty }) => (
        <Form className={styles.authForm}>
          <Input
            name="password"
            id="password"
            placeholder="Password"
            img={passIcon}
            error={errors}
            values={values}
            touched={touched}
          />
          <Input
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Password confirmation"
            img={passIcon}
            error={errors}
            values={values}
            touched={touched}
          />

          {/* <Link to="/"> */}
          <Button
            type="submit"
            className={styles.recoveryBtn}
            disabled={!isValid || !dirty}
          >
            {textData[`${pathname}`]["sendBtn"]}
          </Button>
          {/* </Link> */}
          <div className={styles.alernativText}>
            <Link to="../login">Back to sing in</Link>
          </div>
          {modalActive && (
            <Popup active={modalActive} setActive={setModalActive}>
              <div className={styles.popup}>
                <h4>Congratulations!</h4>
                <p>
                Your password has been successfully changed! Now you can enter your personal account using new data.
                </p>
                <p>Thank you for choosing us - we work for you!</p>
                <p>
                  Best regards,<span>Jobseeker!</span>
                </p>
              </div>
            </Popup>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default NewPasswordForm;
