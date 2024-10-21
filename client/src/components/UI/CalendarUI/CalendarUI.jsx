import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar'
import './Calendar.css'


const CalendarUI = (props) => {
    return (<>
        <Calendar
            {...props}
        />

    </>


    );
};

CalendarUI.propTypes = {};

export default CalendarUI;