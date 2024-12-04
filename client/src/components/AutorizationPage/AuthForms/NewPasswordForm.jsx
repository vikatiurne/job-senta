import { useState } from "react";
import {  Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Popup from "../../UI/Popup/Popup";

import passIcon from "../../../assets/passIcon.png";
import { textData } from "../../../utils/textData";

import styles from "./AuthForms.module.css";
import { fetchResetPassword } from "../../../pages/Autorization/AuthSlice";

const NewPasswordForm = () => {
  const [modalActive, setModalActive] = useState(false);
  const { msg } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { link } = useParams();

  const submitFormHandler = (values) => {
    //отправка нового пароля на сервер, обновление данных в бд
    console.log("Sucsess", values);
    dispatch(fetchResetPassword({ newPass: values.password, resetLink: link }));
    setModalActive(true);
  };

  return (
    <Formik
      initialValues={initialValues.newpass}
      validationSchema={schemas.newpass}
      validateOnBlur
      validateOnChange={false}
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
            {textData["/recovery-password"]["sendBtn"]}
          </Button>
          {/* </Link> */}
          <div className={styles.alernativText}>
            <Link to="../login">Back to sing in</Link>
          </div>
          {modalActive && (
            <Popup active={modalActive} setActive={() => {
              setModalActive()
              navigate("/login")
            }}>
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

export default NewPasswordForm;
