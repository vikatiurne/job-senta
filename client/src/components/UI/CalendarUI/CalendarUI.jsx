import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar'
import './Calendar.css'
import { ReactComponent as CalendarIcon } from '../../../assets/user_page/home/calendar.svg'

const CalendarUI = (props) => {
    const { date, ...restProps } = props
    return (<>
        <Calendar
            next2Label={null}
            prev2Label={null}
            nextLabel={null}
            prevLabel={null}
            locale='en'
            showNeighboringMonth={true}
            value={date}
            navigationLabel={() => {
                return <>
                    <CalendarIcon />
                    <span>{date.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    })}   </span>

                </>
            }}
            {...restProps}
        />

    </>


    );
};

CalendarUI.propTypes = {};

export default CalendarUI;