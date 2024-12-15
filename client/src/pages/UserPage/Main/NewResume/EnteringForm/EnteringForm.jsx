import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../../components/UI/Button/Button";
import Scroll from "../../../../../components/UI/Scroll/Scroll";
import Loader from "../../../../../components/UI/Loader/Loader";

import arrow from "../../../../../assets/user_page/builder/arrow-outlined.svg";

import { initialValues, schemas } from "../helper";
import { useMedia } from "../../../../../hoc/useMedia/useMedia";
import { fetchCreateResume, setInfo } from "../NewResumeSlice";

import {
  Target,
  Contacts,
  ProfSummaries,
  ProjExp,
  WorkExp,
  Certifications,
  Awards,
  Voluntiring,
  Publications,
  InterestsSkills,
  Educations,
} from "./FormComponents/index";

import styles from "./EnteringForm.module.css";
import ControlBtns from "./ControlBtns/ControlBtns";

const EnteringForm = () => {
  const [initialFormValues, setInitialFormValues] = useState(
    initialValues.entering
  );

  const { isEdit, getonestatus, info } = useSelector((state) => state.resume);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMediaQuery = useMedia("(max-width:1024px)");

  useEffect(() => {
    if (isEdit) setInitialFormValues(info);
  }, [info, isEdit]);

  const submitFormHandler = (values) => {
    //отправка формы на сервер сохранение в бд
    console.log("Sucsess", values);
    if (!isEdit) {
      dispatch(fetchCreateResume(values));
    } else {
     console.log('update');
    }
  };

  return getonestatus === "loading" ? (
    <Loader loading color="#958060" />
  ) : (
    <Formik
      initialValues={initialFormValues}
      validationSchema={schemas.entering}
      enableReinitialize
      onSubmit={(values, { resetForm }) => {
        submitFormHandler(values);
        resetForm();
        navigate("/user/builder");
        dispatch(setInfo({}));
      }}
    >
      {({ values, touched, errors, field }) => (
        <Form className={styles.form} onBlur={() => dispatch(setInfo(values))}>
          {/* <Button type="submit" className={styles.back}>
            <img src={arrow} alt="arrow" />
            <p>Back</p>
          </Button> */}
          <div className={styles.enteringContainer}>
            <h4 className={styles.title}>Entering information</h4>

            <Scroll
              height={!isMediaQuery ? "calc(100vh - 223px)" : ""}
              classContent={styles.scroll}
              withScroll={"withScroll"}
            >
              <Target values={values} touched={touched} />
              <Contacts values={values} touched={touched} />
              <ProfSummaries
                values={values}
                touched={touched}
                errors={errors}
              />
              <ProjExp errors={errors} />
              <WorkExp errors={errors} />
              <Educations errors={errors} />
              <Certifications errors={errors} />
              <Awards errors={errors} />
              <Voluntiring errors={errors} />
              <Publications errors={errors} />
              <InterestsSkills
                values={values}
                touched={touched}
                errors={errors}
              />
              <ControlBtns/>
            </Scroll>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EnteringForm;
