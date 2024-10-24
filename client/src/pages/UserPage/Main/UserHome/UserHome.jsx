import React from 'react';
import PropTypes from 'prop-types';
import style from './UserHome.module.css'

import WelcomeMessAndSearch from './WelcomeMessAndSearch/WelcomeMessAndSearch';
import CareerGoal from './CareerGoal/CareerGoal.jsx';
import WidgetsBtn from './WidgetsBtn/WidgetsBtn.jsx';
import ScoreResume from './ScoreResume/ScoreResume.jsx';
import TopResume from './TopResume/TopResume.jsx';
import ActiveAndArchivResume from './ActiveAndArchivResume/ActiveAndArchivResume.jsx';
import CalendarUser from './CalendarUser/CalendarUser.jsx';

const UserHome = () => {
    return (
        <div className={style.pageHome}>
            <WelcomeMessAndSearch
                className={style.welcome}
            />
            <CareerGoal
                className={style.career}
            />
            <WidgetsBtn
                className={style.widget}
            />
            <ScoreResume
                className={style.score}
            />

            <TopResume
                className={style.resume}
            />
            <ActiveAndArchivResume
                className={style.activeAndArchiv}
            />
            <CalendarUser
                className={style.calendarUser}
            />

        </div>

    );
};

UserHome.propTypes = {};

export default UserHome;