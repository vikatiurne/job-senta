import { useState } from "react";
import { Form, Formik } from "formik";
import { initialValues, schemas } from "./helper";

import Button from "../../UI/Button/Button";
import InputFooter from "../../UI/InputFooter/InputFooter";
import PopupFooter from "../../UI/PopupFooter/PopupFooter";

import userIcon from "../../../assets/FooterIcons.svg";
import emailIcon from "../../../assets/FooterEmail.svg";

import styles from "./AuthForms.module.css";

const QuestionForm = () => {
  const [modalActive, setModalActive] = useState(false);

  const submitFormHandler = (values) => {
    setModalActive(true);
    //отправка формы на сервер сохранение в бд
    console.log("Sucsess", values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues.question}
        validationSchema={schemas.question}
        validateOnBlur
        validateOnChange={false}
        onSubmit={(values, { resetForm }) => {
          submitFormHandler(values);
          resetForm();
        }}
      >
        {({ errors, values, touched, isValid, dirty }) => (
          (
            <Form className={styles.questionForm}>
              <InputFooter
                name="name"
                id="name"
                placeholder="Your full name"
                img={userIcon}
                error={errors}
                values={values}
                touched={touched}
              />

              <InputFooter
                name="email"
                id="email"
                placeholder="Your email"
                img={emailIcon}
                error={errors}
                values={values}
                touched={touched}
              />
              <InputFooter
                name="question"
                id="question"
                placeholder="Your questions"
                img={null}
                error={errors}
                values={values}
                touched={touched}
              />

              <Button
                type="submit"
                className={styles.footerBtn}
                disabled={!isValid || !dirty}
              >
                Send
              </Button>
            </Form>
          )
        )}
      </Formik>
      {modalActive && (
        <PopupFooter
          active={modalActive}
          setActive={setModalActive}
          contentClass={styles.modalFooterContent}
        >
          <div className={styles.footerPopup}>
            <h4 className={styles.footerPopupTitle}>THANK YOU!</h4>
            <p className={styles.footerPopupSubTitle}>
              Thank you for your question. It is important for us to be useful
              to you. The answer will come to you by mail.
            </p>
            <p className={styles.footerPopupSubTitle}>
              Thank you for choosing us - we work for you!
            </p>
            <p className={styles.footerPopupSubTitleLeave}>
              Best regards,
              <span>Jobseeker!</span>
            </p>
          </div>
        </PopupFooter>
      )}
    </>
  );
};

export default QuestionForm;
