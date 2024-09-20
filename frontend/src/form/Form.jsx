import { useState } from "react";
import Input from "../UI/Input/Input";
import userIcon from "../assets/userIcon.png";
import mailIcon from "../assets/mailIcon.png";

import styles from "./Form.module.css";
import Button from "../UI/Button/Button";
import Popup from "../UI/Popup/Popup";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const sendContactsHandler = () => {
    setModalActive(true);
  };

  return (
    <div className={styles.formWrapper}>
      <div  className={styles.formContainer}>
        <h2>find out more information and join us!</h2>
        <p>
          Become the first user of our service! Fill out the form and get
          exclusive access to create a professional resume. Leave your contacts
          now, and we will give you bonuses upon registration!
        </p>
        <div className={styles.inputs}>
          <Input
            type={"text"}
            onChange={(e) => nameHandler(e)}
            placeholder={"Your full name"}
            value={name}
            inputClass={styles.input}
            wrapperClass={styles.inputWrapper}
            src={userIcon}
            alt="userIcon"
          />

          <Input
            type={"email"}
            onChange={(e) => emailHandler(e)}
            placeholder={"Your email"}
            value={email}
            inputClass={styles.input}
            wrapperClass={styles.inputWrapper}
            src={mailIcon}
            alt="userIcon"
          />
        </div>
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

export default Form;
