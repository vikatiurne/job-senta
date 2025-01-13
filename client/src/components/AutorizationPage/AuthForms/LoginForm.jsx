import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Popup from "../../UI/Popup/Popup";
import Loader from "../../UI/Loader/Loader";
import PopupContent from "../PopupContent/PopupContent";

import emailIcon from "../../../assets/emailIcon.png";
import passIcon from "../../../assets/passIcon.png";
import { textData } from "../../../utils/textData";

import {
  fetchLogin,
  resetAuthErr,
  resetAuthState,
  setRememberMe,
} from "../../../pages/Autorization/AuthSlice";

import styles from "./AuthForms.module.css";

const LoginForm = () => {
  const { error, status } = useSelector((state) => state.auth);
  const [modalActive, setModalActive] = useState(!!error);

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(resetAuthErr());
  }, [dispatch]);

  useEffect(() => {
    error ? setModalActive(true) : setModalActive(false);
  }, [error]);

  console.log(error);

  const submitFormHandler = (values) => {
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

          <Button
            type="submit"
            className={styles.authBtn}
            disabled={!isValid || !dirty}
          >
            {textData[`${pathname}`]["sendBtn"]}
          </Button>

          <div className={styles.alernativText}>
            <p>Do you have an account?</p>
            <Link to="../registration">
              {textData[`${pathname}`]["linkBtn"]}
            </Link>
          </div>

          {modalActive && (
            <Popup
              active={modalActive}
              setActive={() => {
                setModalActive();
                dispatch(resetAuthState());
              }}
            >
              {status === "loading" ? (
                <Loader loading color="#f7f7f7" />
              ) : (
                status === "error" && <PopupContent msg={error} />
              )}
            </Popup>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
