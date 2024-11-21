import { useState } from "react";

import styles from "./CustomSelect.module.css";
import { useField } from "formik";

const CustomSelect = ({ name, options, currentDate }) => {
  const [helpers] = useField(name);
  const { setValue } = helpers;

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
 
  };

  return (
    <div className={styles.customSelect}>
      <div
        className={styles.selectBox}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedOption ? selectedOption : currentDate}
      </div>
      <div className={`${styles.options} ${isOpen ? styles.show : null}`}>
        {options.map((option) => (
          <div
            key={option}
            className={styles.option}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CustomSelect;
