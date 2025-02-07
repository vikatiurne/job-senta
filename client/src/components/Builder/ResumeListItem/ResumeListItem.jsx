import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Edit from "../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/lucide_edit.svg";
import { ReactComponent as StarBorder } from "../../../assets/user_page/home/starborder.svg";
import CustomCheckbox from "../../UI/CustomCheckbox/CustomCheckbox";

import {
  fetchFavoriteResume,
  setCheckedResumes,
} from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";
import DateServices from "../../../utils/DateServices";

import styles from "./ResumeListItem.module.css";

const ResumeListItem = ({ item }) => {
  const [checkedItem, setCheckedItem] = useState(false);
  const [activeStarIds, setActiveStarIds] = useState([]);

  const { checkedResumes, archiveResumes, activeResumes, isShowArchive } =
    useSelector((state) => state.resume);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isChecked = checkedResumes.includes(String(item.id));
    setCheckedItem(isChecked);
  }, [checkedResumes, item.id]);

  useEffect(() => {
    let showedResumes = [];
    if (!isShowArchive) {
      showedResumes = activeResumes
        .filter((item) => item.isFavorite)
        .map((item) => item.id);
    } else {
      showedResumes = archiveResumes
        .filter((item) => item.isFavorite)
        .map((item) => item.id);
    }
    setActiveStarIds(showedResumes);
  }, [isShowArchive,activeResumes,archiveResumes]);

  const clickResumeHandler = (id) => {
    if (!isShowArchive) {
      navigate(`edit/${id}`);
      localStorage.setItem("_jobseeker_resume_isedit", true);
    }
  };

  const checkedCheckboxHandler = (event) => {
    const { id, checked } = event.target;

    const newCheckedResumes = checked
      ? [...checkedResumes, id]
      : checkedResumes.filter((checkedId) => checkedId !== id);

    dispatch(setCheckedResumes(newCheckedResumes));
    setCheckedItem(checked);
  };

  const handleStarClick = (id) => {
    const isFavorite = activeStarIds.includes(id);
    const newFavoriteResumes = !isFavorite
      ? activeStarIds.filter((starId) => starId !== id)
      : [...activeStarIds, id];

    setActiveStarIds(newFavoriteResumes);
    dispatch(
      fetchFavoriteResume({
        resumeId: id,
        isFavorite: !isFavorite,
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
        <img
          src={Edit}
          alt="edit"
          onClick={() => clickResumeHandler(item.id)}
          className={isShowArchive ? styles.hide : styles.edit}
        />
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <StarBorder
            style={{
              fill: activeStarIds.includes(item.id) ? "#958060" : "transparent",
              display: isShowArchive ? "none" : "block",
            }}
            onClick={() => handleStarClick(item.id)}
          />

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
