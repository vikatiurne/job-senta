import { useEffect, useState } from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";
import { getMonth, addDays, getYear } from "date-fns";
import range from "lodash/range";

import DateServices from "../../../utils/DateServices";
import { ReactComponent as Calendar } from "../../../assets/user_page/builder/createResume/calendar.svg";

import "react-datepicker/dist/react-datepicker.css";
import "./InputDate.css";

const InputDate = ({ name, placeholder }) => {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;

  const initialValue = value ? new Date(value) : null;
  const [receivedValue, setReceivedValue] = useState(initialValue);

  useEffect(() => {
    if (value) {
      const dateValue = new Date(value);
      if (!isNaN(dateValue.getTime())) {
        setReceivedValue(dateValue);
      } else {
        setReceivedValue(null);
      }
    } else {
      setReceivedValue(null);
    }
  }, [value]);

  const [selectedMonth, setSelectedMonth] = useState(
    DateServices.getDate(new Date(), "month")
  );
  const [selectedYear, setSelectedYear] = useState(
    DateServices.getDate(new Date(), "year")
  );
  const [isOpenMonth, setIsOpenMonth] = useState(false);
  const [isOpenYear, setIsOpenYear] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = range(1990, getYear(new Date()) + 1, 1);

  return (
    <DatePicker
      {...field}
      placeholderText={placeholder}
      selected={receivedValue}
      onChange={(date) => {
        setReceivedValue(date);
        setValue(date);
      }}
      value={receivedValue}
      autoComplete="off"
      popperClassName="popper"
      showMonthDropdown
      showYearDropdown
      maxDate={addDays(new Date(), 0)}
      className="datePicker"
      showPopperArrow={false}
      dateFormat="dd MMMM, yyyy"
      calendarStartDay={1}
      renderCustomHeader={({ date, changeYear, changeMonth }) => {
        return (
          <div className="calendar-header">
            <Calendar className="icon" />

            <div className="customSelect">
              <div
                className="selectBox"
                onClick={() => setIsOpenMonth((prev) => !prev)}
              >
                {selectedMonth ? selectedMonth : months[getMonth(date)]}
              </div>
              <div className={`options ${isOpenMonth ? "show" : null}`}>
                {months.map((option) => (
                  <div
                    key={option}
                    className={`${
                      option === selectedMonth ? "active" : "option"
                    }`}
                    onClick={() => {
                      changeMonth(months.indexOf(option));
                      setSelectedMonth(option);
                      setIsOpenMonth(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
            <p className="header-day">{DateServices.getDate(date, "day")},</p>
            <div className="customSelect">
              <div
                className="selectBox"
                onClick={() => setIsOpenYear((prev) => !prev)}
              >
                {selectedYear ? selectedYear : getYear(date)}
              </div>
              <div className={`options ${isOpenYear ? "show" : null}`}>
                {years.reverse().map((option) => (
                  <div
                    key={option}
                    className={`${
                      String(option) === String(selectedYear)
                        ? "active"
                        : "option"
                    }`}
                    onClick={() => {
                      changeYear(option);
                      setSelectedYear(option);
                      setIsOpenYear(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default InputDate;
