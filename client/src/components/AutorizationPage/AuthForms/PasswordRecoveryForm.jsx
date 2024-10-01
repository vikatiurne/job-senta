import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Popup from "../../UI/Popup/Popup";

import emailIcon from "../../../assets/emailIcon.png";
import { textData } from "../../../utils/textData";

import styles from "./AuthForms.module.css";

const PasswordRecoveryForm = () => {
  const [modalActive, setModalActive] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const submitFormHandler = (values) => {
    console.log("Sucsess", values);
    setModalActive(true);
  };

  const handleModalClose = () => {
    setModalActive()
    navigate("/login");
  };

  return (
    <Formik
      initialValues={initialValues.recovery}
      validationSchema={schemas.recovery}
      onSubmit={(values, { resetForm }) => {
        submitFormHandler(values);
        resetForm();
      }}
    >
      {({ errors, values, touched, isValid, dirty }) => (
        <Form className={styles.authForm}>
          <Input
            name="email"
            id="email"
            placeholder="Your email"
            img={emailIcon}
            error={errors}
            values={values}
            touched={touched}
          />

          <Button
            type="submit"
            className={styles.authBtn}
            disabled={!isValid || !dirty}
          >
            {textData[`${pathname}`]["sendBtn"]}
          </Button>

          <div className={styles.alernativText}>
            <Link to="../login">Back to sing in</Link>
          </div>
          {modalActive && (
            <Popup active={modalActive} setActive={handleModalClose}>
              <div className={styles.popup}>
                <h4>Please check your email</h4>
                <p>
                  We have just sent an email with the next steps to reset your
                  password. The message should arrive within 5 minutes. If it's
                  not there, please check your spam folder or try again.
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

export default PasswordRecoveryForm;
