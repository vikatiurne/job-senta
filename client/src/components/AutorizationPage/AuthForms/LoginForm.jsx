import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate,} from "react-router-dom";
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
  const error = useSelector((state) => state.auth.error);
  const status = useSelector((state) => state.auth.status);
  const [modalActive, setModalActive] = useState(!!error);

  const navigate = useNavigate()

  useEffect(() => {
    setModalActive(!!error);
  }, [error]);

  useEffect(() => {
    status==="success" && navigate("/user/home");
  }, [status]);


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
            <Popup active={modalActive} setActive={setModalActive}>
              <div className={styles.popup}>
                <h4>{error?.title}</h4>
                <p>
                 {error?.text}
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
