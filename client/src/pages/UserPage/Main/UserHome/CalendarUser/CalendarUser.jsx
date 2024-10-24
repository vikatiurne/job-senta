import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CalendarUI from '../../../../../components/UI/CalendarUI/CalendarUI.jsx';
import style from './CalendarUser.module.css'
import cn from 'classnames'


const CalendarUser = ({ className }) => {
    const [date, setDate] = useState(new Date())
    return (
        <section className={cn(style.sectCalendar, className)}>
            <CalendarUI
                date={date}
                minDetail="month"
                showNavigation={true}
            />
        </section >
    );
};

CalendarUser.propTypes = {};

export default CalendarUser;