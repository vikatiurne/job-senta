import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CalendarUI from '../../../../../components/UI/CalendarUI/CalendarUI.jsx';
import style from './CalendarUser.module.css'
import cn from 'classnames'
import { ReactComponent as Calendar } from '../../../../../assets/user_page/home/calendar.svg'

const CalendarUser = ({ className }) => {
    const [date, setDate] = useState(new Date())

    return (
        <section className={cn(style.sectCalendar, className)}>
            <CalendarUI
                locale='en'
                next2Label={null}
                prev2Label={null}
                nextLabel={null}
                prevLabel={null}
                minDetail="month"
                value={date}
                showNavigation={true}
                navigationLabel={() => {
                    return <>
                        <Calendar />
                        <span>{date.toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}   </span>

                    </>
                }}
                showNeighboringMonth={true}
            />
        </section >
    );
};

CalendarUser.propTypes = {};

export default CalendarUser;