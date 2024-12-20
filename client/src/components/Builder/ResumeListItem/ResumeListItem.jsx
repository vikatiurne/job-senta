import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as StarBorder } from "../../../assets/user_page/home/starborder.svg";
import { ReactComponent as Edit } from "../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/lucide_edit.svg";

import {
  fetchFavoriteResume,
  fetchGetOneResume,
} from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";
import DateServices from "../../../utils/DateServices";

import styles from "./ResumeListItem.module.css";
import CustomCheckbox from "../../UI/CustomCheckbox/CustomCheckbox";

const ResumeListItem = ({ item, isArchive }) => {
  const [activeStarIds, setActiveStarIds] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [isAllChecked, setIsAllChecked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickResumeHandler = (id) => {
    dispatch(fetchGetOneResume(id));
    navigate(`edit/${id}`);
  };

  const checkedCheckboxHandler = (event) => {
    const { id, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
    if (checked) {
      const allChecked =
        Object.keys(checkedItems).length ===
        Object.keys(checkedItems).length - 1;
      setIsAllChecked(allChecked);
    } else {
      setIsAllChecked(false);
    }
  };

  const handleAllCheckboxChange = (checked) => {
    setIsAllChecked(checked);
    const newCheckedItems = {};
    Object.keys(checkedItems).forEach((item) => {
      newCheckedItems[item] = checked;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleStarClick = (id) => {
    setActiveStarIds((prevActiveStars) => {
      if (prevActiveStars.includes(id)) {
        return prevActiveStars.filter((starId) => starId !== id);
      }
      return [...prevActiveStars, id];
    });
    dispatch(
      fetchFavoriteResume({
        resumeId: id,
        isFavorite: !activeStarIds.includes(id),
      })
    );
  };
  return (
    <div className={styles.itemContainer}>
      <div className={styles.control}>
        <CustomCheckbox>
          <input
            type="checkbox"
            id={item.id}
            className={styles.checkBox}
            checked={!!checkedItems[item.id]}
            onChange={checkedCheckboxHandler}
          />
        </CustomCheckbox>

        <Edit className={isArchive ? styles.hide : styles.edit} />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <StarBorder className={isArchive ? styles.hide : styles.star} />
          <p
            onClick={() => clickResumeHandler(item.id)}
            className={styles.itemText}
          >
            {item.target}
          </p>
        </div>
        <span className={styles.line}></span>
      </div>
      <p className={styles.itemDate}>
        {DateServices.getDate(item.createdAt, "long")}
      </p>
      <p className={styles.itemDate}>
        {DateServices.getDate(item.updatedAt, "long")}
      </p>
    </div>
  );
};

export default ResumeListItem;
