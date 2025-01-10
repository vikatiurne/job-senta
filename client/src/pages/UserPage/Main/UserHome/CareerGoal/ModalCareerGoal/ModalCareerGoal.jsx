import { useContext } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Close } from "../../../../../../assets/user_page/home/close.svg";
import { ReactComponent as Calendar } from "../../../../../../assets/user_page/home/formDate.svg";
import User from "../../../../../../assets/user_page/home/formUser.svg";
import { ReactComponent as Check } from "../../../../../../assets/checkIcon.svg";
import Salary from "../../../../../../assets/user_page/home/formSalary.svg";

import { ModalContext } from "../../../../../../context/ModalContext.jsx";
import ModalBase from "../../../../../../components/ModalBase/ModalBase";
import Button from "../../../../../../components/UI/Button/Button.jsx";
import Input from "../../../../../../components/UI/Input/Input.jsx";
import InputDate from "../../../../../../components/UI/InputDate/InputDate.jsx";

import { fetchCreateGoal } from "../../HomeSlice.js";

import validation from "./validation/validationSchema.js";

import style from "./ModalCareerGoal.module.css";

const ModalCareerGoal = ({ isEdit }) => {
  isEdit = false || isEdit;
  const { careerGoal } = useSelector((state) => state.home);

  const initialStateCarer = {
    title: !isEdit ? "" : careerGoal.target,
    date: !isEdit ? "" : careerGoal.date,
    salary: !isEdit ? "" : careerGoal.salary,
  };

  const { fnShowModalCareerGoal } = useContext(ModalContext);

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const transformData = new Date(values.date);
    values.date = transformData;
    dispatch(fetchCreateGoal(values));
  };

  return (
    <ModalBase
      onClose={() => {
        fnShowModalCareerGoal();
      }}
      classModal={style.modalCareer}
      classModalContent={style.modalCareerContent}
    >
      <h1 className={style.modalCareerTitle}>Your next career goal</h1>
      <p className={style.modalCareerText}>
        Create your goal in searching for a job and confidently go to it with us
      </p>
      <Formik
        initialValues={initialStateCarer}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          fnShowModalCareerGoal();
          resetForm();
        }}
      >
        {({ values, errors, touched, isValid, isSubmitting, dirty }) => (
          <Form>
            <Input
              id="title"
              name="title"
              img={User}
              placeholder="Target Title"
              error={errors}
              values={values}
              touched={touched}
            />
            <div className={style.inputContainer}>
              {!touched["date"] || errors["date"] ? <Calendar /> : <Check />}
              <InputDate
                id="date"
                name="date"
                placeholder="Target Date"
                styles={touched["date"] ? style.pickerOk : style.picker}
                maxDate={false}
              />
            </div>
            <Input
              type="number"
              id="salary"
              name="salary"
              img={Salary}
              placeholder="Target Salary Rage"
              error={errors}
              values={values}
              touched={touched}
            />
            <Button
              type="submit"
              className={style.modalCareerSubmit}
              disabled={!(isValid && dirty) || isSubmitting}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
      <button
        className={style.modalCareerClose}
        type="button"
        onClick={() => {
          fnShowModalCareerGoal();
        }}
      >
        <Close />
      </button>
    </ModalBase>
  );
};

ModalCareerGoal.propTypes = {};

export default ModalCareerGoal;
