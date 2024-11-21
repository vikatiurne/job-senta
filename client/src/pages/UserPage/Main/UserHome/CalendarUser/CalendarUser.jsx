import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CalendarUI from '../../../../../components/UI/CalendarUI/CalendarUI.jsx';
import style from './CalendarUser.module.css'
import cn from 'classnames'


const CalendarUser = ({ className }) => {
    const [date, setDate] = useState(new Date())

    // const handleClickMonth = (month) => {
    //     setDate(new Date(date.setMonth(month.getMonth())))
    // }

    // const handleClickYear = (year) => {
    //     setDate(new Date(date.setFullYear(year.getFullYear())))
    // }

    return (
        <section className={cn(style.sectCalendar, className)}>
            <CalendarUI
                date={date}
                // onClickMonth={handleClickMonth}
                // onClickYear={handleClickYear}
                // onChange={setDate}
                minDetail="month"
                showNavigation={true}
            />
        </section >
    );
};

CalendarUser.propTypes = {};

export default CalendarUser;