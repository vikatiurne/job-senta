import { useState } from "react";
import { Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Popup from "../UI/Popup/Popup";
import userIcon from "../assets/userIcon.png";
import mailIcon from "../assets/mailIcon.png";

import styles from "./ContactsForm.module.css";

const ContactsForm = () => {
  const [modalActive, setModalActive] = useState(false);

  const sendContactsHandler = () => {
    setModalActive(true);
  };

  const submitFormHandler = () => {
    //отправка формы на сервер
    console.log("Sucsess");
  };

  return (
    <div className={styles.formWrapper} id="join">
      <div className={styles.formContainer}>
        <h2>find out more information and join us!</h2>
        <p>
          Become the first user of our service! Fill out the form and get
          exclusive access to create a professional resume. Leave your contacts
          now, and we will give you bonuses upon registration!
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={schemas.custom}
          validateOnBlur
          onSubmit={submitFormHandler}
        >
          <Form className={styles.inputs}>
            <Input
              type="text"
              name="name"
              placeholder={"Your full name"}
              inputClass={styles.input}
              wrapperClass={styles.inputWrapper}
              img={userIcon}
            />

            <Input
              type="email"
              name="email"
              placeholder={"Your email"}
              inputClass={styles.input}
              wrapperClass={styles.inputWrapper}
              img={mailIcon}
            />
          </Form>
        </Formik>
        <Button onClick={sendContactsHandler} className={styles.sendBtn}>
          Send contacts
        </Button>
        {modalActive && (
          <Popup active={modalActive} setActive={setModalActive}>
            <div className={styles.popup}>
              <h4>Thank you for your trust!</h4>
              <p>
                Your data has been received and we will contact you as soon as
                the service is launched. We appreciate your interest and would
                be happy to see you among the first users.
              </p>
              <p>Thank you for choosing us - we work for you!</p>
              <p>
                Best regards,<span>Jobseeker!</span>
              </p>
            </div>
          </Popup>
        )}
      </div>
    </div>
  );
};

export default ContactsForm;
