import { useDispatch } from "react-redux";
import { ReactComponent as StarBorder } from "../../../assets/user_page/home/starborder.svg";

import styles from "./ResumeListItem.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  fetchFavoriteResume,
  fetchGetOneResume,
} from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";
import DateServices from "../../../utils/DateServices";

const ResumeListItem = ({ item }) => {
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
    <div>
      <input
        type="checkbox"
        name=""
        id={item.id}
        className={styles.checkBox}
        checked={!!checkedItems[item.id]}
        onChange={checkedCheckboxHandler}
      />
      <StarBorder
        id={item.id}
        onClick={() => handleStarClick(item.id)}
        style={{
          fill: activeStarIds.includes(item.id) ? "red" : "green",
        }}
      />

      <p onClick={() => clickResumeHandler(item.id)}>{item.target}</p>
      <p>{DateServices.getDate(item.createdAt, "long")}</p>
      <p>{DateServices.getDate(item.updatedAt, "long")}</p>
    </div>
  );
};

export default ResumeListItem;
