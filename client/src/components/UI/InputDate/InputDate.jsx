import { useField } from "formik";
import DatePicker from "react-datepicker";
import { ReactComponent as Calendar } from "../../../assets/user_page/builder/createResume/calendar.svg";

import "react-datepicker/dist/react-datepicker.css";
import "./InputDate.css";
// import { useState } from "react";

const InputDate = ({ name, placeholder, start, end }) => {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;

  // console.log(value)
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(startDate);

  return (
    <DatePicker
      {...field}
      placeholderText={placeholder}
      selected={value}
      // selected={start ? startDate : endDate}
      // startDate={startDate}
      // endDate={endDate}
      // selectsStart={start ? true : null}
      // selectsEnd={end ? true : null}
      // minDate={end ? startDate : null}
      onChange={(date) => {
        setValue(date);
        // start ? setStartDate(date) : setEndDate(date);
      }}
      className="datePicker"
      showPopperArrow={false}
      dateFormat="dd MMMM, yyyy"
      renderCustomHeader={({ date }) => {
        return (
          <div className="calendar-header">
            <Calendar className="icon" />
            <p>
              {date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        );
      }}
    />
  );
};

export default InputDate;
