import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import PropTypes from "prop-types";
import { ReactComponent as User } from "../../../../../assets/user_page/home/user.svg";
import { ReactComponent as Calendar } from "../../../../../assets/user_page/home/calendar.svg";
import { ReactComponent as Salary } from "../../../../../assets/user_page/home/salary.svg";
import { ReactComponent as Add } from "../../../../../assets/user_page/home/plus.svg";
import { ReactComponent as Edit } from "../../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/lucide_edit.svg";
import { ReactComponent as Remove } from "../../../../../assets/user_page/builder/ActiveResume/ic-remove-all.svg";

import ModalCareerGoal from "./ModalCareerGoal/ModalCareerGoal";
import { ModalContext } from "../../../../../context/ModalContext.jsx";

import DateServices from "../../../../../utils/DateServices.js";

import style from "./CareerGoal.module.css";
import { fetchDeleteGoal } from "../HomeSlice.js";

const CareerGoal = ({ className }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { careerGoal } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const { showModalCareerGoal, fnShowModalCareerGoal } =
    useContext(ModalContext);

  const handleShowModalCareerGoal = () => fnShowModalCareerGoal();

  const handleEditGoal = () => {
    fnShowModalCareerGoal();
    setIsEdit(true);
  };
  const handleDeleteGoal = () => dispatch(fetchDeleteGoal());


  return (
    <section className={cn([style.sectCareerGoal], className)}>
      <h2 className={style.sectCareerGoalTitle}>Next career goal</h2>
      <ul className={style.sectCareerGoalList}>
        <li className={style.sectCareerGoalItem}>
          <User />
          <p className={style.sectCareerGoalText}>
            {careerGoal?.target || "Target Title"}
          </p>
        </li>
        <li className={style.sectCareerGoalItem}>
          <Calendar />
          <p className={style.sectCareerGoalText}>
            {careerGoal
              ? DateServices.getDate(careerGoal.date, "long")
              : "Target date"}
          </p>
        </li>
        <li className={style.sectCareerGoalItem}>
          <Salary />
          <p className={style.sectCareerGoalText}>
            {careerGoal?.salary || "Target Salary Rage"}
          </p>
        </li>
      </ul>
      {!careerGoal ? (
        <button
          className={style.sectCareerGoalAdd}
          type="button"
          onClick={handleShowModalCareerGoal}
        >
          <Add />
        </button>
      ) : (
        <div className={style.sectCareerGoalBtns}>
          <button
            className={style.sectCareerGoalDel}
            type="button"
            onClick={handleDeleteGoal}
          >
            <Remove />
          </button>
          <button
            className={style.sectCareerGoalEdit}
            type="button"
            onClick={handleEditGoal}
          >
            <Edit />
          </button>
        </div>
      )}
      {showModalCareerGoal && <ModalCareerGoal isEdit={isEdit} />}
    </section>
  );
};

CareerGoal.propTypes = {
  className: PropTypes.string,
};

export default CareerGoal;
