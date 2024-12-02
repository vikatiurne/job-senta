import { useEffect, useState } from "react";
import { Link, useLocation,} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Popup from "../../UI/Popup/Popup";

import emailIcon from "../../../assets/emailIcon.png";
import passIcon from "../../../assets/passIcon.png";
import { textData } from "../../../utils/textData";

import {
  fetchLogin,
  setRememberMe,
} from "../../../pages/Autorization/AuthSlice";

import styles from "./AuthForms.module.css";

const LoginForm = () => {
  const errLogin = useSelector((state) => state.auth.error);

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (!!errLogin) setModalActive(true);
  }, [errLogin]);


  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const submitFormHandler = (values) => {
    console.log(values);
    //login
    dispatch(
      fetchLogin({
        email: values.email,
        password: values.password,
      })
    );
    dispatch(setRememberMe(values.toggle));
  };

  const handleLogin = () => {};

  return (
    <Formik
      initialValues={initialValues.login}
      validationSchema={schemas.login}
      validateOnBlur
      validateOnChange={false}
      onSubmit={(values) => {
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

          <Input
            name="password"
            id="password"
            placeholder="Password"
            img={passIcon}
            error={errors}
            values={values}
            touched={touched}
          />

          <div className={styles.passOptions}>
            <Field
              id="toggle"
              type="checkbox"
              name="toggle"
              className={styles.checkboxInput}
            />
            <label htmlFor="toggle" className={styles.checkboxLabel}>
              Remember me
            </label>
            <Link to="../forgot-password">Forgot your password?</Link>
          </div>
          {/* <Link to="/"> */}
          <Button
            type="submit"
            className={styles.authBtn}
            disabled={!isValid || !dirty}
            onClick={handleLogin}
          >
            {textData[`${pathname}`]["sendBtn"]}
          </Button>
          {/* </Link> */}
          <div className={styles.alernativText}>
            <p>Do you have an account?</p>
            <Link to="../registration">
              {textData[`${pathname}`]["linkBtn"]}
            </Link>
          </div>

          {modalActive && (
            <Popup active={modalActive} setActive={() => setModalActive()}>
              <div className={styles.popup}>
                <h4>{errLogin}</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maxime enim animi, assumenda vero nihil quisquam minus quo
                  iure officiis neque cumque at atque quibusdam facere nesciunt
                  laborum asperiores fuga similique!
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

export default LoginForm;
