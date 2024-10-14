import React from 'react';
import PropTypes from 'prop-types';
import style from './UserHome.module.css'

import WelcomeMessAndSearch from './WelcomeMessAndSearch/WelcomeMessAndSearch';
import CareerGoal from './CareerGoal/CareerGoal.jsx';
import WidgetsBtn from './WidgetsBtn/WidgetsBtn.jsx';
import ScoreResume from './ScoreResume/ScoreResume.jsx';


const UserHome = () => {
    return (
        <div className={style.pageHome}>
            <WelcomeMessAndSearch
                className={style.sectfirst}
            />
            <CareerGoal
                className={style.sectsecond}
            />
            <WidgetsBtn
            />

            <ScoreResume
            />


        </div>

    );
};

UserHome.propTypes = {};

export default UserHome;