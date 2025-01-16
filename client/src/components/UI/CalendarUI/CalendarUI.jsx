import Calendar from "react-calendar";

import { ReactComponent as CalendarIcon } from "../../../assets/user_page/home/calendar.svg";
import Scroll from "../Scroll/Scroll";

import "./Calendar.css";

const CalendarUI = (props) => {
  const { date, ...restProps } = props;
  const minDate = new Date(date.getFullYear() - 2, 0, 1);
  const maxDate = new Date(date.getFullYear() + 3, 11, 31);


  return (
    <>
      <Scroll
        height='198px'>
        <Calendar
          next2Label={null}
          prev2Label={null}
          nextLabel={null}
          prevLabel={null}
          locale="en"
          showNeighboringMonth={true}
          value={date}
          minDate={minDate}
          maxDate={maxDate}
          navigationLabel={() => {
            return (
              <>
                <CalendarIcon />
                <span>
                  {date.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                </span >
              </>
            );
          }}
          {...restProps}
        />
      </Scroll >
    </>
  );
};


export default CalendarUI;
