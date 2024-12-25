import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Scroll from "../../../../../components/UI/Scroll/Scroll";
import Loader from "../../../../../components/UI/Loader/Loader";

import { initialValues, schemas } from "../helper";
import { useMedia } from "../../../../../hoc/useMedia/useMedia";
import {
  fetchCreateResume,
  fetchGetOneResume,
  fetchUpdateResume,
  setInfo,
} from "../NewResumeSlice";

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
import DateServices from "../../../../../utils/DateServices";

const EnteringForm = () => {
  const [initialFormValues, setInitialFormValues] = useState(
    initialValues.entering
  );

  const { isEdit, getonestatus, info } = useSelector((state) => state.resume);
  console.log(isEdit)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isMediaQuery = useMedia("(max-width:1024px)");

  const pathArr = pathname.split("/");
  const resumeId = pathArr[pathArr.length - 1];

  useEffect(() => {
    if (isEdit) {
      setInitialFormValues(info);
    }
  }, [info, isEdit]);

  const submitFormHandler = (values) => {
    //отправка формы на сервер сохранение в бд
    console.log("Sucsess", values);
    !isEdit
      ? dispatch(fetchCreateResume(values))
      : dispatch(fetchUpdateResume({ resumeId, values }));
  };

  return getonestatus === "loading" ? (
    <Loader loading color="#958060" />
  ) : (
    <Formik
      initialValues={initialFormValues}
      validationSchema={schemas.entering}
      enableReinitialize
      onSubmit={async (values, { resetForm }) => {
        const data = await DateServices.transformDateValues(values);
        submitFormHandler(data);
        resetForm();
        navigate("/user/builder");
        dispatch(setInfo({}));
      }}
    >
      {({ values, touched, errors, field, resetForm }) => (
        <Form className={styles.form} onBlur={() => dispatch(setInfo(values))}>
          <div className={styles.enteringContainer}>
            <h4 className={styles.title}>Entering information</h4>

            <Scroll
              height={!isMediaQuery ? "calc(100vh - 223px)" : ""}
              classContent={styles.scroll}
              withScroll={"withScroll"}
            >
              <Target values={values} touched={touched} errors={errors} />
              <Contacts values={values} touched={touched} errors={errors} />
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
              <ControlBtns reset={resetForm} />
            </Scroll>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EnteringForm;
