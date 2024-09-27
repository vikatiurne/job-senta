import { Link, useLocation } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import emailIcon from "../../assets/emailIcon.png";
import passIcon from "../../assets/passIcon.png";
import { textData } from "../../utils/textData";

import styles from "./AuthForms.module.css";

const LoginForm = () => {
  const { pathname } = useLocation();

  const submitFormHandler = (values) => {
    //отправка формы на сервер
    console.log("Sucsess", values);
  };

  return (
    <Formik
      initialValues={initialValues.login}
      validationSchema={schemas.login}
      onSubmit={(values,{ resetForm }) => {
        submitFormHandler(values)
        resetForm()
      }
      }
      
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
            <Link to="../forgot-password" >
              Forgot your password?
            </Link>
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
            <Link to="../registration">{textData[`${pathname}`]["linkBtn"]}</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
