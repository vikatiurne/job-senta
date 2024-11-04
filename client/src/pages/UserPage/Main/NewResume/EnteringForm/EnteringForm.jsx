import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import InputForResume from "../../../../../components/UI/InputForResume/InputForResume";
import TextArea from "../../../../../components/UI/TextArea/TextArea";
import Button from "../../../../../components/UI/Button/Button";
import Scroll from "../../../../../components/UI/Scroll/Scroll";

import { ReactComponent as User } from "../../../../../assets/user_page/builder/createResume/user.svg";
import { ReactComponent as Phone } from "../../../../../assets/user_page/builder/createResume/phone.svg";
import { ReactComponent as Email } from "../../../../../assets/user_page/builder/createResume/email.svg";
import { ReactComponent as Linked } from "../../../../../assets/user_page/builder/createResume/link.svg";
import { ReactComponent as Project } from "../../../../../assets/user_page/builder/createResume/project-name.svg";
import { ReactComponent as Pen } from "../../../../../assets/user_page/builder/createResume/pen.svg";
import { ReactComponent as Bag } from "../../../../../assets/user_page/builder/createResume/bag.svg";
import { ReactComponent as Education } from "../../../../../assets/user_page/builder/createResume/education.svg";
import { ReactComponent as Certificate } from "../../../../../assets/user_page/builder/createResume/certificate.svg";
import { ReactComponent as Cup } from "../../../../../assets/user_page/builder/createResume/cup.svg";
import { ReactComponent as Volunteer } from "../../../../../assets/user_page/builder/createResume/volunteer.svg";
import { ReactComponent as Skills } from "../../../../../assets/user_page/builder/createResume/skills.svg";
import { ReactComponent as Article } from "../../../../../assets/user_page/builder/createResume/article.svg";
import { ReactComponent as Check } from "../../../../../assets/user_page/builder/createResume/check.svg";
import { ReactComponent as Calendar } from "../../../../../assets/user_page/builder/createResume/calendar.svg";
import arrow from "../../../../../assets/user_page/builder/arrow-outlined.svg";

import InputsBlock from "../../../../../components/UI/InputsBlock/InputsBlock";
import { initialValues, schemas } from "../helper";
import { setInfo } from "../NewResumeSlice";

import styles from "./EnteringForm.module.css";
import MultiSelect from "../../../../../components/UI/MultiSelect/MultiSelect";
import { skilsData } from "../../../../../utils/skilsData";

const EnteringForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      {({ values, touched, errors,field }) => (
        <Form className={styles.form} onBlur={() => dispatch(setInfo(values))}>
          <Button type="submit" className={styles.back}>
            <img src={arrow} alt="arrow" />
            <p>Back</p>
          </Button>
          <div className={styles.enteringContainer}>
            <h4 className={styles.title}>Entering information</h4>

            <Scroll height="calc(100vh - 252px)">
              <p className={styles.label}>Target Title</p>
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
              />
              <p className={styles.label}>Contacts</p>
              <div className={styles.contacts}>
                <InputForResume
                  name="phone"
                  id="phone"
                  placeholder="Phone number"
                  img={
                    !values["phone"] ?
                    <Phone
                      className={
                        values["phone"] === "" && touched["phone"]
                          ? styles.gray
                          : null
                      }
                    />: <Check />
                  }
                  touched={touched}
                />
                <InputForResume
                  name="email"
                  id="email"
                  placeholder="Email"
                  img={
                    !values["email"]?
                    <Email
                      className={
                        values["email"] === "" && touched["email"]
                          ? styles.gray
                          : null
                      }
                    />: <Check/>
                  }
                  touched={touched}
                />
                <InputForResume
                  name="LinkedIn"
                  id="LinkedIn"
                  placeholder="LinkedIn link or portfolio"
                  img={
                    !values["LinkedIn"]?
                    <Linked
                      className={
                        values["LinkedIn"] === "" && touched["LinkedIn"]
                          ? styles.gray
                          : null
                      }
                    />: <Check/>
                  }
                  touched={touched}
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
              />

              <InputsBlock
                blockName="projExp"
                labelBlock="Project Experience"
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
                    img: <Education />,
                  },
                  {
                    name: "specialty",
                    id: "specialty",
                    placeholder: "Specialty",
                    type: "input",
                    img: <Education />,
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
              <InputsBlock
                blockName="certif"
                labelBlock="Certifications"
                initial={{
                  certificateName: "",
                  institution: "",
                }}
                errors={errors}
                fields={[
                  {
                    name: "certificateName",
                    id: "certificateName",
                    placeholder: "Name of the certificate",
                    type: "input",
                    img: <Certificate />,
                  },
                  {
                    name: "institution",
                    id: "institution",
                    placeholder: "Institution",
                    type: "input",
                    img: <Certificate />,
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
              <InputsBlock
                blockName="award"
                labelBlock="Awards & Scholarships"
                initial={{
                  nameAward: "",
                  institutionAward: "",
                  merit: "",
                  date: "",
                }}
                errors={errors}
                fields={[
                  {
                    name: "nameAward",
                    id: "nameAward",
                    placeholder: "Name of the award",
                    type: "input",
                    img: <Cup />,
                  },
                  {
                    name: "institutionAward",
                    id: "institutionAward",
                    placeholder: "Institution",
                    type: "input",
                    img: <Cup />,
                  },
                  {
                    name: "date",
                    id: "date",
                    placeholder: "Date of start of educational",
                    type: "date",
                    img: <Calendar />,
                  },
                  {
                    name: "merit",
                    id: "merit",
                    placeholder: "A brief description of merit",
                    type: "textarea",
                    warning: "(0 of 500 characters)",
                    img: <Pen />,
                  },
                ]}
              />
              <InputsBlock
                blockName="voluntering"
                labelBlock="Volunteering & Leadership"
                initial={{
                  voluntering: "",
                  obligations: "",
                  dateStart: "",
                  dateEnd: "",
                }}
                errors={errors}
                fields={[
                  {
                    name: "voluntering",
                    id: "voluntering",
                    placeholder: "Name of organization",
                    type: "input",
                    img: <Volunteer />,
                  },

                  {
                    dates: [
                      {
                        name: "dateStart",
                        id: "dateStart",
                        placeholder: "Date of start",
                        type: "input",
                        img: <Calendar />,
                      },
                      {
                        name: "dateEnd",
                        id: "dateEnd",
                        placeholder: "Date end",
                        type: "input",
                        img: <Calendar />,
                      },
                    ],
                  },
                  {
                    name: "obligations",
                    id: "obligations",
                    placeholder: "Obligations",
                    type: "textarea",
                    warning: "(0 of 500 characters)",
                    img: <Pen />,
                  },
                ]}
              />
              <InputsBlock
                blockName="publ"
                labelBlock="Publications"
                initial={{
                  publication: "",
                  publicationLink: "",
                  date: "",
                }}
                errors={errors}
                fields={[
                  {
                    name: "publication",
                    id: "publication",
                    placeholder: "Name of the publication",
                    type: "input",
                    img: <Article />,
                  },

                  {
                    name: "date",
                    id: "date",
                    placeholder: "Date of publication",
                    type: "date",
                    img: <Calendar />,
                  },
                  {
                    name: "publicationLink",
                    id: "publicationLink",
                    placeholder: "Publication link (if any)",
                    type: "input",
                    img: <Linked />,
                  },
                ]}
              />


              <p className={styles.label}>Skills & Interests</p> 
              <div className={styles.skills}>
                {!values["skills"].length ? (
                  <Skills
                    className={
                      !values["skills"].length && touched['react-select-2-input']
                        ? styles.gray
                        : null
                    }
                  />
                ) : (
                  <Check />
                )}

                <Field
                  name="skills"
                  id="skills"
                  placeholder="Skills (enter manually or choose from the presented ones)"
                  isMulti={true}
                  component={MultiSelect}
                  options={skilsData}
                />
              </div>
              <TextArea
                name="interests"
                id="interests"
                placeholder="Write your own interests"
                touched={touched}
                values={values}
                error={errors}
              />
            </Scroll>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EnteringForm;
