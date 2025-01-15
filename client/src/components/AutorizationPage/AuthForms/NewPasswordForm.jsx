import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";

import { initialValues, schemas } from "./helper";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Popup from "../../UI/Popup/Popup";
import Loader from "../../UI/Loader/Loader";
import PopupContent from "../PopupContent/PopupContent";

import passIcon from "../../../assets/passIcon.png";
import { textData } from "../../../utils/textData";

import { fetchResetPassword } from "../../../pages/Autorization/AuthSlice";
import { clearError } from "../../../pages/errors/errorSlice";

import styles from "./AuthForms.module.css";

const NewPasswordForm = () => {
  const [modalActive, setModalActive] = useState(false);
  const { status,msg } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { link } = useParams();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const submitFormHandler = (values) => {
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

          <Button
            type="submit"
            className={styles.recoveryBtn}
            disabled={!isValid || !dirty}
          >
            {textData["/recovery-password"]["sendBtn"]}
          </Button>
   
          <div className={styles.alernativText}>
            <Link to="../login">Back to sing in</Link>
          </div>
          {modalActive && (
            <Popup
              active={modalActive}
              setActive={() => {
                setModalActive();
                navigate("/login");
              }}
            >
              {status === "loading" ? (
                <Loader loading color="#f7f7f7" />
              ) : (
                <PopupContent msg={msg}/>
              )}
            </Popup>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default NewPasswordForm;
