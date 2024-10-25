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
import { ReactComponent as Check } from "../../../../../assets/user_page/builder/createResume/check.svg";
import { ReactComponent as Pen } from "../../../../../assets/user_page/builder/createResume/pen.svg";
import { ReactComponent as Bag } from "../../../../../assets/user_page/builder/createResume/bag.svg";
import { ReactComponent as Calendar } from "../../../../../assets/user_page/builder/createResume/calendar.svg";
import arrow from "../../../../../assets/user_page/builder/arrow-outlined.svg";

import { initialValues, schemas } from "../helper";
import InputsBlock from "../../../../../components/UI/InputsBlock/InputsBlock";
import { setPosition, setProject } from "../NewResumeSlice";

import styles from "./EnteringForm.module.css";

const EnterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangePositin = (e) => dispatch(setPosition(e.target.value));

  const handleChangePhone = (e) => {};
  const handleChangeEmail = (e) => {};
  const handleChangeLinkedIn = (e) => {};
  const handleChangePrSum = (e) => {};
  const handleChangeProjExp = (e) => dispatch(setProject(e.target.value));
  const handleChangeRole = (e) => {};
  const handleChangeProjectLink = (e) => {};

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
                  className={
                    values["phone"] === "" &&
                    touched["phone"]
                      ? styles.gray
                      : null
                  }
                  />
                }
                touched={touched}
                handleChange={(e) => handleChangePhone(e)}
              />
              <InputForResume
                name="email"
                id="email"
                placeholder="Email"
                img={
                  <Email
                  className={
                    values["email"] === "" &&
                    touched["email"]
                      ? styles.gray
                      : null
                  }
                  />
                }
                touched={touched}
                handleChange={(e) => handleChangeEmail(e)}
              />
              <InputForResume
                name="LinkedIn"
                id="LinkedIn"
                placeholder="LinkedIn link or portfolio"
                img={
                  <Linked
                  className={
                    values["LinkedIn"] === "" &&
                    touched["LinkedIn"]
                      ? styles.gray
                      : null
                  }
                  />
                }
                touched={touched}
                handleChange={(e) => handleChangeLinkedIn(e)}
              />
            </div>

            <p className={styles.label}>Professional Summary</p>
            <TextArea
              name="professionalSummary"
              id="professionalSummary"
              placeholder="Brief description of professional summary or career goal"
              touched={touched}
              values={values}
              error={errors}
              handleChange={(e) => handleChangePrSum(e)}
            />

            <InputsBlock
              blockName="projExp"
              labelBlock="Project Experience"
              handleChange={(e) => handleChangeProjExp(e)}
              errors={errors}
              initial={{
                name: "",
                role: "",
                link: "",
              }}
              fields={[
                {
                  name: "name",
                  id: "name",
                  placeholder: "Name of the project",
                  type: "input",

                  img: <Project />,
                },
                {
                  name: "role",
                  id: "role",
                  placeholder: "Your roles and achievements",
                  type: "textarea",
                  warning: "(0 of 500 characters)",

                  img: <Pen />,
                },
                {
                  name: "link",
                  id: "link",
                  placeholder: "Project link (if any)",
                  type: "input",

                  img: <Linked />,
                },
              ]}
            />
            <InputsBlock
              blockName="workExp"
              labelBlock="Work Experience"
              initial={{
                companyName: "",
                position: "",
                dateStart: "",
                dateEnd: "",
                responsibilities: "",
              }}
              errors={errors}
              fields={[
                {
                  name: "companyName",
                  id: "companyName",
                  placeholder: "Company name",
                  type: "input",
                  img: <Bag />,
                },
                {
                  name: "position",
                  id: "position",
                  placeholder: "Position",
                  type: "input",
                  img: <Bag />,
                },
                {
                  dates: [
                    {
                      name: "dateStart",
                      id: "dateStart",
                      placeholder: "Date of start of work",
                      type: "input",
                      img: <Calendar />,
                    },
                    {
                      name: "dateEnd",
                      id: "dateEnd",
                      placeholder: "End date of work",
                      type: "input",
                      img: <Calendar />,
                    },
                  ],
                },

                {
                  name: "responsibilities",
                  id: "responsibilities",
                  placeholder: "Main responsibilities and achievements",
                  type: "textarea",
                  warning: "(0 of 500 characters)",
                  img: <Pen />,
                },
              ]}
            />
            <InputsBlock
              blockName="educ"
              labelBlock="Education"
              initial={{
                educName: "",
                specialty: "",
                dateStart: "",
                dateEnd: "",
              }}
              errors={errors}
              fields={[
                {
                  name: "educName",
                  id: "educName",
                  placeholder: "Name of the educational institution",
                  type: "input",
                  img: <Bag />,
                },
                {
                  name: "specialty",
                  id: "specialty",
                  placeholder: "Specialty",
                  type: "input",
                  img: <Bag />,
                },
                {
                  dates: [
                    {
                      name: "dateStart",
                      id: "dateStart",
                      placeholder: "Date of start of educational",
                      type: "input",
                      img: <Calendar />,
                    },
                    {
                      name: "dateEnd",
                      id: "dateEnd",
                      placeholder: "End date of educational",
                      type: "input",
                      img: <Calendar />,
                    },
                  ],
                },
              ]}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EnterForm;
