import { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Popup from "../../UI/Popup/Popup";

import emailIcon from "../../../assets/emailIcon.png";
import { textData } from "../../../utils/textData";

import { fetchForgotPassword } from "../../../pages/Autorization/AuthSlice";

import styles from "./AuthForms.module.css";

const PasswordRecoveryForm = () => {
  const [modalActive, setModalActive] = useState(false);

  const { msg } = useSelector((state) => state.auth);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitFormHandler = (values) => {
    console.log("Sucsess", values);
    dispatch(fetchForgotPassword(values));
    setModalActive(true);
  };

  const handleModalClose = () => {
    setModalActive();
    navigate("/");
  };

  return (
    <Formik
      initialValues={initialValues.recovery}
      validationSchema={schemas.recovery}
      validateOnBlur
      validateOnChange={false}
      onSubmit={(values, { resetForm }) => {
        submitFormHandler(values);
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
            {textData["/forgot-password"]["sendBtn"]}
          </Button>

          <div className={styles.alernativText}>
            <Link to="../login">Back to sing in</Link>
          </div>
          {modalActive && (
            <Popup active={modalActive} setActive={handleModalClose}>
              <div className={styles.popup}>
                <h4>{msg?.title}</h4>
                <p>{msg?.text}</p>
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
