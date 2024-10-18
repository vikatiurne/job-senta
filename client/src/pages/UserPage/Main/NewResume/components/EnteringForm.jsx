import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'

import InputForResume from "../../../../../components/UI/InputForResume/InputForResume";
import Button from "../../../../../components/UI/Button/Button";
import { ReactComponent as User } from "../../../../../assets/user_page/builder/createResume/user.svg";
import arrow from "../../../../../assets/user_page/builder/arrow-outlined.svg";
import { initialValues, schemas } from "../helper";

import styles from "./EnteringForm.module.css";
import { setPosition } from "../NewResumeSlice";

const EnteringForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setPosition(e.target.value))
    console.log(e.target.value)
  }

  const submitFormHandler = (values) => {
    //отправка формы на сервер сохранение в бд
    console.log("Sucsess", values);
  };

  return (
    <Formik
      initialValues={initialValues.entering}
      validationSchema={schemas.entering}
      onSubmit={(values, { resetForm }) => {
        submitFormHandler(values);
        resetForm();
        navigate("/user/builder");
      }}
    >
      {({ values, touched }) => (
        <Form className={styles.form}>
          <Button type="submit" className={styles.back}>
            <img src={arrow} alt="arrow" />
            <p>Back</p>
          </Button>
          <div className="enteringContainer">
            <h4 className={styles.title}>Entering information</h4>
            <label htmlFor="desiredPosition">Tatget Title</label>
            <InputForResume
              name="desiredPosition"
              id="desiredPosition"
              placeholder="Name of desired position"
              img={<User />}
              values={values}
              touched={touched}
              handleChange={(e)=>handleChange(e)}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EnteringForm;
