import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

import userIcon from "../../../assets/userIcon.png";
import emailIcon from "../../../assets/emailIcon.png";
import passIcon from "../../../assets/passIcon.png";
import { textData } from "../../../utils/textData";

import styles from "./AuthForms.module.css";
import { fetchRegistration } from "../../../pages/Autorization/AuthSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const submitFormHandler = (values) => {
    dispatch(
      fetchRegistration({
        email: values.email,
        password: values.password,
        name: values.name,
        lastName: values.lastName,
      })
    );
    //отправка формы на сервер сохранение в бд
    console.log("Sucsess", values);
  };

  return (
    <Formik
      initialValues={initialValues.registration}
      validationSchema={schemas.registration}
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
            <Link to="../login">{textData[`${pathname}`]["linkBtn"]}</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
