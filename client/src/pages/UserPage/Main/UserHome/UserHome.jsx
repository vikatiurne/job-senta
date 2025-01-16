import { useDispatch, useSelector } from "react-redux";

import WelcomeMessAndSearch from "./WelcomeMessAndSearch/WelcomeMessAndSearch";
import CareerGoal from "./CareerGoal/CareerGoal.jsx";
import WidgetsBtn from "./WidgetsBtn/WidgetsBtn.jsx";
import ScoreResume from "./ScoreResume/ScoreResume.jsx";
import TopResume from "./TopResume/TopResume.jsx";
import ActiveAndArchivResume from "./ActiveAndArchivResume/ActiveAndArchivResume.jsx";
import CalendarUser from "./CalendarUser/CalendarUser.jsx";
import Loader from "../../../../components/UI/Loader/Loader.jsx";

import style from "./UserHome.module.css";
import { useEffect } from "react";
import { fetchGetAllResume } from "../NewResume/NewResumeSlice.js";
import { fetchGetGoal } from "./HomeSlice.js";

const UserHome = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "success") dispatch(fetchGetGoal());
  }, [dispatch, status]);

  useEffect(() => {
    if (status === "success")
      dispatch(
        fetchGetAllResume({
          page: 1,
          limit: 1000,
          sort: "createdAt_DESC",
          isArchive: false,
          isFavorite: false,
          searchText: "",
        })
      );
  }, [dispatch, status]);

  return status === "loading" ? (
    <Loader loading color="#958060" />
  ) : (
    <div className={style.pageHome}>
      <WelcomeMessAndSearch className={style.welcome} />
      <CareerGoal className={style.career} />
      <WidgetsBtn className={style.widget} />
      <ScoreResume className={style.score} />
      <TopResume className={style.resume} />
      <ActiveAndArchivResume className={style.activeAndArchiv} />
      <CalendarUser className={style.calendarUser} />
    </div>
  );
};

export default UserHome;
