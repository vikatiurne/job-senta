import { useField } from "formik";
import DatePicker from "react-datepicker";
import { ReactComponent as Calendar } from "../../../assets/user_page/builder/createResume/calendar.svg";

import "react-datepicker/dist/react-datepicker.css";
import "./InputDate.css";


const InputDate = ({ name, placeholder, start, end }) => {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;


  return (
    <DatePicker
      {...field}
      placeholderText={placeholder}
      selected={value}
      onChange={(date) => {
        const timeMs = Date.parse(date);
        setValue(
          new Date(timeMs).toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })
        );
      }}
      className="datePicker"
      showPopperArrow={false}
      dateFormat="dd MMMM, yyyy"
      renderCustomHeader={({ date }) => {
        return (
          <div className="calendar-header">
            <Calendar className="icon" />
            <p>
              {new Date(Date.parse(date)).toLocaleDateString("en-US", {
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
