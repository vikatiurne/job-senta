import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import InputForResume from "../../../../../components/UI/InputForResume/InputForResume";
import TextArea from "../../../../../components/UI/TextArea/TextArea";
import Button from "../../../../../components/UI/Button/Button";

import { ReactComponent as User } from "../../../../../assets/user_page/builder/createResume/user.svg";
import { ReactComponent as Phone } from "../../../../../assets/user_page/builder/createResume/phone.svg";
import { ReactComponent as Email } from "../../../../../assets/user_page/builder/createResume/email.svg";
import { ReactComponent as Linked } from "../../../../../assets/user_page/builder/createResume/link.svg";
import { ReactComponent as Project } from "../../../../../assets/user_page/builder/createResume/project-name.svg";
import { ReactComponent as Plus } from "../../../../../assets/user_page/builder/btn_plus.svg";
import { ReactComponent as Check } from "../../../../../assets/user_page/builder/createResume/check.svg";

import arrow from "../../../../../assets/user_page/builder/arrow-outlined.svg";
import { initialValues, schemas } from "../helper";

import styles from "./EnteringForm.module.css";
import { setPosition, setProject } from "../NewResumeSlice";
import { useEffect, useState } from "react";
import RenderBlocks from "../utils/renderBlocks";
import { Block } from "../utils/addField";

const EnteringForm = () => {
  const [pressAdd, setPressAdd] = useState(false);
  const [blocks, setBlocks] = useState([]);
  console.log(blocks)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangePositin = (e) => dispatch(setPosition(e.target.value));

  const handleChangePhone = (e) => {};
  const handleChangeEmail = (e) => {};
  const handleChangeLinkedIn = (e) => {};
  const handleChangePrSum = (e) => {};
  const handleChangeProject = (e) => dispatch(setProject(e.target.value));
  const handleChangeRole = (e) => {};
  const handleChangeProjectLink = (e) => {};

  const addFieldsHandler = (values, touched, errors) => {
    setPressAdd(true);
    
    setBlocks([...blocks, { id: Math.random() }]);
  };

  const submitFormHandler = (values) => {
    //отправка формы на сервер сохранение в бд
    console.log("Sucsess", values);
  };

  useEffect(() => {
    console.log("render");
  }, [pressAdd]);

  return (
    <Formik
      initialValues={initialValues.entering}
      validationSchema={schemas.entering}
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        submitFormHandler(values);
        resetForm();
        navigate("/user/builder");
      }}
    >
      {({ values, touched, errors }) => (
        <Form className={styles.form}>
          <Button type="submit" className={styles.back}>
            <img src={arrow} alt="arrow" />
            <p>Back</p>
          </Button>
          <div className={styles.enteringContainer}>
            <h4 className={styles.title}>Entering information</h4>
            <p className={styles.label}>Tatget Title</p>
            <InputForResume
              name="desiredPosition"
              id="desiredPosition"
              placeholder="Name of desired position"
              img={
                values["desiredPosition"] === "" ? (
                  <User
                    className={
                      values["desiredPosition"] === "" &&
                      touched["desiredPosition"]
                        ? styles.gray
                        : null
                    }
                  />
                ) : (
                  <Check />
                )
              }
              values={values}
              touched={touched}
              handleChange={(e) => handleChangePositin(e)}
            />
            <p className={styles.label}>Contacts</p>
            <div className={styles.contacts}>
              <InputForResume
                name="phone"
                id="phone"
                placeholder="Phone number"
                img={
                  <Phone
                    className={values["phone"] !== "" ? styles.gray : null}
                  />
                }
                values={values}
                touched={touched}
                handleChange={(e) => handleChangePhone(e)}
              />
              <InputForResume
                name="email"
                id="email"
                placeholder="Email"
                img={
                  <Email
                    className={values["email"] !== "" ? styles.gray : null}
                  />
                }
                values={values}
                touched={touched}
                handleChange={(e) => handleChangeEmail(e)}
              />
              <InputForResume
                name="LinkedIn"
                id="LinkedIn"
                placeholder="LinkedIn link or portfolio"
                img={
                  <Linked
                    className={values["LinkedIn"] !== "" ? styles.gray : null}
                  />
                }
                values={values}
                touched={touched}
                handleChange={(e) => handleChangeLinkedIn(e)}
              />
            </div>

            <p className={styles.label}>Professional Summary</p>
            <TextArea
              name="professionalSummary"
              id="professionalSummary"
              placeholder="Brief description of professional summary or career goal"
              values={values}
              touched={touched}
              error={errors}
              handleChange={(e) => handleChangePrSum(e)}
            />

            <div className={styles.add}>
              <p className={styles.label}>Project Experience</p>
              <Plus
                className={styles.plus}
                onClick={(values, touched, errors) =>
                  addFieldsHandler(values, touched, errors)
                }
              />
            </div>

            <InputForResume
              name="projectName"
              id="projectName"
              placeholder="Name of the project"
              img={
                <Project
                  className={values["projectName"] !== "" ? styles.gray : null}
                />
              }
              values={values}
              touched={touched}
              handleChange={(e) => handleChangeProject(e)}
            />
            <TextArea
              name="role"
              id="role"
              placeholder="Your roles and achievements"
              values={values}
              touched={touched}
              error={errors}
              handleChange={(e) => handleChangeRole(e)}
            />
            <InputForResume
              name="projectLink"
              id="projectLink"
              placeholder="Project link (if any)"
              img={
                <Linked
                  className={values["projectLink"] !== "" ? styles.gray : null}
                />
              }
              values={values}
              touched={touched}
              handleChange={(e) => handleChangeProjectLink(e)}
            />
{console.log(values)}
{console.log(touched)}
            {blocks.map((id,i) => (
          
              <div key={i}>
                <InputForResume
                 
                  name={`projectName${i + 1}`}
                  id={`projectName${i + 1}`}
                  placeholder="Name of the project"
                  img={
                    <Project
                      className={
                        values[`projectName${i + 1}`] !== "" ? styles.gray : null
                      }
                    />
                  }
                  values={values}
                  touched={touched}
                  handleChange={(e) => dispatch(setProject(e.target.value))}
                />
                <TextArea
                 
                  name={`role${i + 1}`}
                  id={`role${i + 1}`}
                  placeholder="Your roles and achievements"
                  values={values}
                  touched={touched}
                  error={errors}
                  handleChange={(e) => handleChangeRole(e)}
                />
                <InputForResume
                
                  name={`projectLink${i + 1}`}
                  id={`projectLink${i + 1}`}
                  placeholder="Project link (if any)"
                  img={
                    <Linked
                      className={
                        values["projectLink"] !== "" ? styles.gray : null
                      }
                    />
                  }
                  values={values}
                  touched={touched}
                  handleChange={(e) => handleChangeProjectLink(e)}
                />
              </div>
            ))}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EnteringForm;
