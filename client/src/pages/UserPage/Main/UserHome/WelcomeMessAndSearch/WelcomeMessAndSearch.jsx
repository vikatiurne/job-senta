import PropTypes from "prop-types";
import style from "./WelcomeMessAndSearch.module.css";
import cn from "classnames";
import Search from "./Search/Search.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useMedia } from "../../../../../hoc/useMedia/useMedia.js";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../../NewResume/NewResumeSlice.js";
import { useState } from "react";

const WelcomeMessAndSearch = ({ className }) => {
  const [showInputForMobile, setShowInputForMobile] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const { searchText } = useSelector((state) => state.resume);

  const isMediaQuery = useMedia("(max-width:600px)");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickSearch = () => {
    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText) {
      navigate("../builder");
      dispatch(setSearch(trimmedSearchText));
    }
  };

  const handleOpenSearch = () => {
    setShowInputForMobile(true);
  };

  return (
    <section className={cn(style.sectWelcome, className)}>
      <h1
        className={
          !showInputForMobile ? style.sectWelcomeTitle : style.hideTitle
        }
      >
        Welcome back, {user?.username}!
      </h1>
      <Search
        showInputForMobile={showInputForMobile}
        setShowInputForMobile={setShowInputForMobile}
        handleClickSearch={
          !isMediaQuery ? handleClickSearch :()=> setShowInputForMobile(true)
        }
      />
    </section>
  );
};

WelcomeMessAndSearch.propTypes = {
  className: PropTypes.string,
};

export default WelcomeMessAndSearch;
