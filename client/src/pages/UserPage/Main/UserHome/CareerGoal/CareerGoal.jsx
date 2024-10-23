import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import style from './CareerGoal.module.css'
import { ReactComponent as User } from '../../../../../assets/user_page/home/user.svg'
import { ReactComponent as Calendar } from '../../../../../assets/user_page/home/calendar.svg'
import { ReactComponent as Salary } from '../../../../../assets/user_page/home/salary.svg'
import { ReactComponent as Add } from '../../../../../assets/user_page/home/plus.svg'
import cn from 'classnames'

import ModalCareerGoal from './ModalCareerGoal/ModalCareerGoal';
import { ModalContext } from '../../../../../context/ModalContext.jsx';

const CareerGoal = ({ className }) => {

    const { showModalCareerGoal, fnShowModalCareerGoal } = useContext(ModalContext)

    const handleShowModalCareerGoal = () => {
        fnShowModalCareerGoal()
    }


    return (
        <section className={cn([style.sectCareerGoal], className)}>
            <h2 className={style.sectCareerGoalTitle}>Next career goal</h2>
            <ul className={style.sectCareerGoalList}>
                <li className={style.sectCareerGoalItem}>
                    <User />
                    <p className={style.sectCareerGoalText}> Target Title</p>
                </li>
                <li className={style.sectCareerGoalItem}>
                    <Calendar />
                    <p className={style.sectCareerGoalText} >Target date</p>
                </li>
                <li className={style.sectCareerGoalItem}>
                    <Salary />
                    <p className={style.sectCareerGoalText} >Target Salary Rage</p>
                </li>
            </ul>
            <button
                className={style.sectCareerGoalAdd}
                type='button'
                onClick={handleShowModalCareerGoal}
            >
                <Add />
            </button>
            {showModalCareerGoal && <ModalCareerGoal />}
        </section>
    );
};

CareerGoal.propTypes = {
    className: PropTypes.string,
};

export default CareerGoal;