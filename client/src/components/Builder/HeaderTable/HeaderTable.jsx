import CustomCheckbox from "../../UI/CustomCheckbox/CustomCheckbox";
import DropDownBuilder from "../DropDownBuilder/DropDownBuilder";

import { ReactComponent as Arrow } from "../../../assets/user_page/builder/arrow_filter.svg";
import { ReactComponent as Star } from "../../../assets/user_page/home/star.svg";

import styles from "./HeaderTable.module.css";

const filter = [
  { title: "All resumes", value: "" },
  { title: "From A to Z", value: "target_A-Z" },
  { title: "From Z to A", value: "target_Z-A" },
  {
    title: (
      <div className={styles.sort}>
        <Arrow />
        Created
      </div>
    ),
    value: "createdAt_ASC",
  },
  {
    title: (
      <div className={styles.sort}>
        <Arrow className={styles.arrowDown} />
        Created
      </div>
    ),
    value: "createdAt_DESC",
  },
  {
    title: (
      <div className={styles.sort}>
        <Arrow />
        Last edit
      </div>
    ),
    value: "updatedAt_ASC",
  },
  {
    title: (
      <div className={styles.sort}>
        <Arrow className={styles.arrowDown} />
        Last edit
      </div>
    ),
    value: "updatedAt_DESC",
  },
  {
    title: (
      <div className={styles.sort}>
        <Star className={styles.star} />
        Favorite
      </div>
    ),
    value: "favorite",
  },
];

const HeaderTable = ({ onAllCheckboxChange }) => {
  const handleAllCheckboxChange = (event) => {
    const { checked } = event.target;
    onAllCheckboxChange(checked);
  };

  return (
    <div className={styles.headerTable}>
      <CustomCheckbox className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={onAllCheckboxChange}
          className={styles.checkbox}
        />
      </CustomCheckbox>

      <p className={styles.text}>Resume Title</p>
      <p className={styles.textDate}>Creation date</p>
      <p className={styles.textDate}>Edit date</p>
      <DropDownBuilder title={"Filter"} childrenText={filter} className={styles.dropdown}/>
    </div>
  );
};

export default HeaderTable;
