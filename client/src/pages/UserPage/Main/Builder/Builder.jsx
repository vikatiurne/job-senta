import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../../components/UI/Button/Button";
import BuilderDropDown from "../Builder/BuilderDropDown/BuilderDropDown";
import { ReactComponent as Star } from "../../../../assets/user_page/home/star.svg";
import { ReactComponent as StarBorder } from "../../../../assets/user_page/home/starborder.svg";
import ScoreResumeCircle from "../UserHome/TopResume/ScoreResumeCircle/ScoreResumeCircle";

import { ReactComponent as Remove } from "../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/pajamas_remove-all.svg";
import { ReactComponent as Block } from "../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/majesticons_lock-line.svg";
import { ReactComponent as Edit } from "../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/lucide_edit.svg";
import { ReactComponent as Clone } from "../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/bx_duplicate.svg";

import styles from "./Builder.module.css";
import {
  fetchArchiveOneResume,
  fetchArchiveSeveralResume,
  fetchCloneResume,
  fetchDeleteOneResume,
  fetchDeleteSeveralResume,
  fetchGetAllResume,
  fetchGetOneResume,
} from "../NewResume/NewResumeSlice";
import DateServices from "../../../../utils/DateServices";
import Loader from "../../../../components/UI/Loader/Loader";
import { useOptimistic } from "react";

export default function Builder() {
  const [limit, setLimit] = useState(10);
  const [activeStarIds, setActiveStarIds] = useState([]);
  const [isArchive, setIsArchive] = useState(false);
  const [isShowArchive, setIsShowArchive] = useState(false);
  const [isShowFavorite, setIsShowFavorite] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  // вытаскиваем из стора тип сортировки
  const { sort, resumes, getallstatus, info } = useSelector(
    (state) => state.resume
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (sort === "favorite") setIsShowFavorite(true);
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
  }, [dispatch, limit, sort, info, isShowArchive, isShowFavorite]);

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

  const limitHandler = (e) => {
    !!e.target.value ? setLimit(Number(e.target.value)) : setLimit(10);
  };

  const handleStarClick = (id) => {  
    setActiveStarIds((prevActiveStars) => {  
        if (prevActiveStars.includes(id)) {  
            return prevActiveStars.filter(starId => starId !== id);  
        }   
        return [...prevActiveStars, id];  
    });  
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
      console.log(Object.keys(checkedItems)[0]);
      dispatch(fetchCloneResume(Object.keys(checkedItems)[0]));
      setCheckedItems({});
    } else {
      //сделать неактивной кнопку clone
    }
  };

  const chengeStatusResume = () => {
    const idsToArchive = getArrCheckedItems();
    if (idsToArchive.length > 0) {
      idsToArchive.length === 1
        ? dispatch(
            fetchArchiveOneResume({
              resumeId: idsToArchive[0],
              isArchive,
            })
          )
        : dispatch(
            fetchArchiveSeveralResume({
              resumeIds: idsToArchive,
              isArchive,
            })
          );
      setCheckedItems({});
    } else {
      //сделать неактивной кнопку archive
    }
  };

  const handleAddArchive = () => {
    setIsArchive(true);
    chengeStatusResume();
  };
  const handleReturnToActive = () => {
    setIsArchive(false);
    chengeStatusResume();
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
        <input type="number" value={limit} onChange={limitHandler} />
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
            onClick={()=>handleStarClick(item.id)}
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
  return getallstatus === "loading" ? <Loader /> : render;
  // <div className={styles.container}>
  //   <div className={styles.bilderContantContainerNav}>
  //       <Link to={''} className={styles.bilderNavLinkEl}>
  //         <Button children={'Active Resumes'} className={styles.bilderNavLink} />
  //       </Link>
  //       <Link to={'archived'} >
  //         <Button children={'Archived Resumes'} className={styles.bilderNavLink} />
  //       </Link>
  //     </div>
  //   <div className={styles.bilderContantContainer}>
  //     <div className={styles.containerTitle}>
  //       <div className={styles.titleElement}>
  //         <input type="checkbox" name="" id="" className={styles.checkBox} />
  //         <BuilderDropDown title={ 'Resume title'} cheldrentext={'From A to Z'}  cheldrentext2={'From Z to A'} />
  //       </div>
  //       <nav className={styles.bilderNavTitle}>
  //         <div className={styles.titleElement}>
  //           <BuilderDropDown title={ 'Analyse score'} cheldrentext={'Ascending'}  cheldrentext2={'Descending'}/>
  //         </div>
  //         <div className={styles.titleElement}>
  //           <BuilderDropDown title={ 'Creation date'} cheldrentext={'Ascending'}  cheldrentext2={'Descending'}/>
  //         </div>
  //         <div className={styles.titleElement}>
  //           <BuilderDropDown title={ 'Edit date'} cheldrentext={'Ascending'}  cheldrentext2={'Descending'}/>
  //         </div>
  //       </nav>
  //       <div className={styles.titleElement}>Actions</div>
  //     </div>

  //     <div className={styles.bilderTableContainer}>
  //       <div className={styles.tableElement}>
  //         <input type="checkbox" name="" id="" className={styles.checkBox} />
  //         <div className={styles.bilderTablePosition}> loooooooooooooooooooooooooooonag names</div>
  //       </div>
  //       <nav className={styles.bilderNavTitles}>
  //         <div className={styles.tableElement}>
  //           <ScoreResumeCircle
  //               size={50}
  //               strokeWidth={5}
  //               progress={50}
  //               colorProgress='#958060'
  //           >
  //               <div className={styles.sectResumeDescScore}>
  //                   <p className={styles.sectResumeScorePercent}>50</p>
  //                   <p className={styles.sectResumeScoreText}>100</p>
  //               </div>
  //           </ScoreResumeCircle>
  //         </div>
  //         <div className={styles.tableElement}>
  //           <div className="">22 march 2024</div>
  //         </div>
  //         <div className={styles.tableElement}>
  //           <div className="">-</div>
  //         </div>
  //       </nav>
  //       <div className={styles.tableElement}>
  //         <a href="#" className={styles.tableAction}><Edit/></a>
  //         <a href="#" className={styles.tableAction}><Clone/></a>
  //         <a href="#" className={styles.tableAction}><Block/></a>
  //         <a href="#" className={styles.tableAction}><Remove/></a>
  //       </div>
  //     </div>
  //     <div className={styles.bilderTableContainer}>
  //       <div className={styles.tableElement}>
  //         <input type="checkbox" name="" id="" className={styles.checkBox} />
  //         <div className={styles.bilderTablePosition}> l</div>
  //       </div>
  //       <nav className={styles.bilderNavTitles}>
  //         <div className={styles.tableElement}>
  //           <ScoreResumeCircle
  //               size={50}
  //               strokeWidth={5}
  //               progress={10}
  //               colorProgress='#958060'
  //           >
  //               <div className={styles.sectResumeDescScore}>
  //                   <p className={styles.sectResumeScorePercent}>10</p>
  //                   <p className={styles.sectResumeScoreText}>100</p>
  //               </div>
  //           </ScoreResumeCircle>
  //         </div>
  //         <div className={styles.tableElement}>
  //           <div className="">22 march 2024</div>
  //         </div>
  //         <div className={styles.tableElement}>
  //           <div className="">-</div>
  //         </div>
  //       </nav>
  //       <div className={styles.tableElement}>
  //         <a href="#" className={styles.tableAction}><Edit/></a>
  //         <a href="#" className={styles.tableAction}><Clone/></a>
  //         <a href="#" className={styles.tableAction}><Block/></a>
  //         <a href="#" className={styles.tableAction}><Remove/></a>
  //       </div>
  //     </div>
  //     <div className={styles.bilderTableContainer}>
  //       <div className={styles.tableElement}>
  //         <input type="checkbox" name="" id="" className={styles.checkBox} />
  //         <div className={styles.bilderTablePosition}> l</div>
  //       </div>
  //       <nav className={styles.bilderNavTitles}>
  //         <div className={styles.tableElement}>
  //           <ScoreResumeCircle
  //               size={50}
  //               strokeWidth={5}
  //               progress={99}
  //               colorProgress='#958060'
  //           >
  //               <div className={styles.sectResumeDescScore}>
  //                   <p className={styles.sectResumeScorePercent}>99</p>
  //                   <p className={styles.sectResumeScoreText}>100</p>
  //               </div>
  //           </ScoreResumeCircle>
  //         </div>
  //         <div className={styles.tableElement}>
  //           <div className="">22 march 2024</div>
  //         </div>
  //         <div className={styles.tableElement}>
  //           <div className="">22 march 2024</div>
  //         </div>
  //       </nav>
  //       <div className={styles.tableElement}>
  //         <a href="#" className={styles.tableAction}><Edit/></a>
  //         <a href="#" className={styles.tableAction}><Clone/></a>
  //         <a href="#" className={styles.tableAction}><Block/></a>
  //         <a href="#" className={styles.tableAction}><Remove/></a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}
