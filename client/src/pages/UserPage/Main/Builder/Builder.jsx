import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BuilderDropDown from "../Builder/BuilderDropDown/BuilderDropDown";
import HeaderTable from "../../../../components/Builder/HeaderTable/HeaderTable";

import { ReactComponent as StarBorder } from "../../../../assets/user_page/home/starborder.svg";

import styles from "./Builder.module.css";
import {
  fetchArchiveOneResume,
  fetchArchiveSeveralResume,
  fetchCloneResume,
  fetchDeleteOneResume,
  fetchDeleteSeveralResume,
  fetchFavoriteResume,
  fetchGetAllResume,
  fetchGetOneResume,
} from "../NewResume/NewResumeSlice";
import DateServices from "../../../../utils/DateServices";
import Loader from "../../../../components/UI/Loader/Loader";
import ResumeListItem from "../../../../components/Builder/ResumeListItem/ResumeListItem";
import BuilderFooter from "../../../../components/Builder/BuilderFooter/BuilderFooter";

const Builder = () => {
  // const [limit, setLimit] = useState(10);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [activeStarIds, setActiveStarIds] = useState([]);
  const [isShowArchive, setIsShowArchive] = useState(false);
  const [isShowFavorite, setIsShowFavorite] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  // вытаскиваем из стора тип сортировки
  const { sort, resumes, getallstatus, limit } = useSelector(
    (state) => state.resume
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveStarIds(
      resumes.filter((item) => item.isFavorite).map((item) => item.id)
    );
  }, [resumes]);

  useEffect(() => {
    if (sort === "favorite") {
      setIsShowFavorite(true);
    } else {
      setIsShowFavorite(false);
    }
  }, [sort]);

  // при загрузке страницы делаем запрос на получение всех резюмешек из бд
  useEffect(() => {
    dispatch(
      fetchGetAllResume({
        page: 1,
        limit,
        sort,
        isArchive: isShowArchive,
        isFavorite: isShowFavorite,
      })
    );
  }, [dispatch, limit, sort, isShowArchive, isShowFavorite]);

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

  // const limitHandler = (e) => {
  //   !!e.target.value ? setLimit(Number(e.target.value)) : setLimit(10);
  // };

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

  const getArrCheckedItems = () => {
    return Object.keys(checkedItems).filter((key) => checkedItems[key]);
  };

  const handleDelete = () => {
    const idsToDelete = getArrCheckedItems();
    if (idsToDelete.length > 0) {
      idsToDelete.length === 1
        ? dispatch(fetchDeleteOneResume(idsToDelete[0]))
        : dispatch(fetchDeleteSeveralResume(idsToDelete));
      setCheckedItems({});
    } else {
      //сделать неактивной кнопку del
    }
  };

  const handleClone = () => {
    const idsToClone = getArrCheckedItems();
    if (idsToClone.length === 1) {
      dispatch(fetchCloneResume(Object.keys(checkedItems)[0]));
      setCheckedItems({});
    } else {
      //сделать неактивной кнопку clone
    }
  };

  const chengeStatusResume = ({ isArchive }) => {
    const idsToChengeStatus = getArrCheckedItems();
    if (idsToChengeStatus.length > 0) {
      idsToChengeStatus.length === 1
        ? dispatch(
            fetchArchiveOneResume({
              resumeId: idsToChengeStatus[0],
              isArchive,
            })
          )
        : dispatch(
            fetchArchiveSeveralResume({
              resumeIds: idsToChengeStatus,
              isArchive,
            })
          );
      setCheckedItems({});
    } else {
      //сделать неактивной кнопку archive
    }
  };

  const handleAddArchive = () => {
    chengeStatusResume({ isArchive: true });
  };
  const handleReturnToActive = () => {
    chengeStatusResume({ isArchive: false });
  };

  const hendleShowArchive = () => setIsShowArchive(true);

  const hendleShowActive = () => setIsShowArchive(false);

  const render = (
    <>
      <div onClick={hendleShowArchive}>Show Archive</div>
      <div onClick={hendleShowActive}>Show Active</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <input type="checkbox" name="" id="" className={styles.checkBox} />
        <p>Resume Title</p>
        <p>Creation date</p>
        <p>Edit date</p>
        <BuilderDropDown title={"Filter"} childrenText={filter} />
      </div>
      <div className={styles.limit}>
        <p>Show:</p>
        {/* <input type="number" value={limit} onChange={limitHandler} /> */}
      </div>

      {resumes.map((item) => (
        <div
          key={uuidv4()}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            alignItems: "center",
          }}
        >
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
            style={{ fill: activeStarIds.includes(item.id) ? "red" : "green" }}
          />

          <p onClick={() => clickResumeHandler(item.id)}>{item.target}</p>
          <p>{DateServices.getDate(item.createdAt, "long")}</p>
          <p>{DateServices.getDate(item.updatedAt, "long")}</p>
        </div>
      ))}
      <div onClick={handleDelete}>Delete</div>
      <div onClick={handleClone}>Clone</div>
      <div onClick={handleAddArchive}>Add Archive</div>
      <div onClick={handleReturnToActive}>Return to active</div>
    </>
  );

  const render2 = (
    <div className={styles.builderWrapper}>
      <div className={styles.resumeStatus}>
        <p
          onClick={hendleShowActive}
          className={`${styles.statusTitle} ${
            !isShowArchive ? styles.active : styles.archive
          }`}
        >
          Active Resumes
        </p>
        <p
          onClick={hendleShowArchive}
          className={`${styles.statusTitle} ${
            !isShowArchive ? styles.archive : styles.active
          }`}
        >
          Archived Resumes
        </p>
      </div>
      <div className={styles.builderContainer}>
        <div className={styles.builderTable}>
          <HeaderTable/>
          {resumes.map((item) => (
            <ResumeListItem
              key={uuidv4()}
              item={item}
              isArchive={isShowArchive}
            />
          ))}
        </div>

        <BuilderFooter />
      </div>
    </div>
  );
  return getallstatus === "loading" ? <Loader /> : render2;
};

export default Builder;
