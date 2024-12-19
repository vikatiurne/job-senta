import CustomCheckbox from "../../UI/CustomCheckbox/CustomCheckbox";
import DropDownBuilder from "../DropDownBuilder/DropDownBuilder";

import styles from "./HeaderTable.module.css";

const filter = [
  { title: "All resumes", value: "" },
  { title: "From A to Z", value: "target_A-Z" },
  { title: "From Z to A", value: "target_Z-A" },
  { title: "up Created", value: "createdAt_ASC" },
  { title: "down Created", value: "createdAt_DESC" },
  { title: "up Last edit", value: "updatedAt_ASC" },
  { title: "down Last edit", value: "updatedAt_DESC" },
  { title: "Favorite", value: "favorite" },
];

const HeaderTable = ({ onAllCheckboxChange }) => {
  const handleAllCheckboxChange = (event) => {
    const { checked } = event.target;
    onAllCheckboxChange(checked);
  };

  return (
    <div className={styles.headerTable}>
      <CustomCheckbox>
        <input
          type="checkbox"
          onChange={onAllCheckboxChange}
          className={styles.checkbox}
        />
      </CustomCheckbox>

      <p className={styles.text}>Resume Title</p>
      <p className={styles.text}>Creation date</p>
      <p className={styles.text}>Edit date</p>
      <DropDownBuilder title={"Filter"} childrenText={filter} />
    </div>
  );
};

export default HeaderTable;
