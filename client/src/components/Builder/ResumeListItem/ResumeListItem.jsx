import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { ReactComponent as StarBorder } from "../../../assets/user_page/home/starborder.svg";
import { ReactComponent as Edit } from "../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/lucide_edit.svg";

import {
  fetchFavoriteResume,
  fetchGetOneResume,
  setCheckedResumes,
} from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";
import DateServices from "../../../utils/DateServices";

import styles from "./ResumeListItem.module.css";
import CustomCheckbox from "../../UI/CustomCheckbox/CustomCheckbox";

const ResumeListItem = ({ item, isArchive }) => {
  const [checkedItem, setCheckedItem] = useState(false);
  const [activeStarIds, setActiveStarIds] = useState([]);

  const { checkedResumes } = useSelector((state) => state.resume);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isChecked = checkedResumes.some((checkbox) => checkbox[item.id]);
    setCheckedItem(isChecked);
  }, [checkedResumes, item.id]);

  const clickResumeHandler = (id) => {
    dispatch(fetchGetOneResume(id));
    navigate(`edit/${id}`);
  };

  const checkedCheckboxHandler = (event) => {
    const { checked } = event.target;

    const newCheckedResumes = checked
      ? [...checkedResumes, { [item.id]: true }]
      : checkedResumes.filter((checkbox) => !checkbox[item.id]);

    dispatch(setCheckedResumes(newCheckedResumes));
    setCheckedItem(checked);
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
            checked={checkedItem}
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
