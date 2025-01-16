import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Popup from "../../UI/Popup/Popup";

import userIcon from "../../../assets/userIcon.png";
import emailIcon from "../../../assets/emailIcon.png";
import passIcon from "../../../assets/passIcon.png";
import { textData } from "../../../utils/textData";

import { fetchRegistration } from "../../../pages/Autorization/AuthSlice";
import { clearError } from "../../../pages/errors/errorSlice";

import styles from "./AuthForms.module.css";

const LoginForm = () => {
  const { status} = useSelector((state) => state.auth);
  const error = useSelector((state) => state.error);
  const [modalActive, setModalActive] = useState(!!error);


  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    setModalActive(!!error);
  }, [error]);

  const submitFormHandler = (values) => {
    //отправка формы на сервер сохранение в бд
    dispatch(
      fetchRegistration({
        email: values.email,
        password: values.password,
        username: values.name,
        lastName: values.lastName,
      })
    );
    if(!error && status==="success")navigate('/login')
  };

  return (
    <Formik
      initialValues={initialValues.registration}
      validationSchema={schemas.registration}
      validateOnBlur
      validateOnChange={false}
      onSubmit={(values, { resetForm }) => {
        submitFormHandler(values);
      }}
    >
      {({ errors, values, touched, isValid, dirty }) => (
        <Form className={styles.authForm}>
          <Input
            name="name"
            id="name"
            placeholder="Your name"
            img={userIcon}
            error={errors}
            values={values}
            touched={touched}
          />
          <Input
            name="lastName"
            id="lastName"
            placeholder="Your last name"
            img={userIcon}
            error={errors}
            values={values}
            touched={touched}
          />

          <Input
            name="email"
            id="email"
            placeholder="Your email"
            img={emailIcon}
            error={errors}
            values={values}
            touched={touched}
          />

          <div className={styles.passwordField}>
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
          </div>

          <Button
            type="submit"
            className={styles.authBtn}
            disabled={!isValid || !dirty}
          >
            {textData[`${pathname}`]["sendBtn"]}
          </Button>

          <div className={styles.alernativText}>
            <p>Do you have an account?</p>
            <Link to="../login">{textData[`${pathname}`]["linkBtn"]}</Link>
          </div>

          {modalActive &&
            (
              <Popup active={modalActive} setActive={setModalActive}>
                <div className={styles.popup}>
                  <h4>{error?.title}</h4>
                  <p>{error?.text}</p>
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

export default LoginForm;
