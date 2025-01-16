import CalendarUI from '../../../../../components/UI/CalendarUI/CalendarUI.jsx';
import cn from 'classnames'

import style from './CalendarUser.module.css'


const CalendarUser = ({ className }) => {

    return (
        <section className={cn(style.sectCalendar, className)}>
            <CalendarUI
                date={new Date()}
                minDetail="month"
                showNavigation={true}
            />
        </section >
    );
};


export default CalendarUser;