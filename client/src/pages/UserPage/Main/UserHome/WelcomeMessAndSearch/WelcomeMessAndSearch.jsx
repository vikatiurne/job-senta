import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import Search from "./Search/Search.jsx";
import { useMedia } from "../../../../../hoc/useMedia/useMedia.js";

import { setSearch } from "../../NewResume/NewResumeSlice.js";

import style from "./WelcomeMessAndSearch.module.css";

const WelcomeMessAndSearch = ({ className }) => {
  const [showInputForMobile, setShowInputForMobile] = useState(false);

  const user = useSelector((state) => state.auth.user);
  const { searchText } = useSelector((state) => state.resume);

  const isMediaQuery = useMedia("(max-width:600px)");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(""));
  }, [dispatch]);

  const handleSearchClick = () => {
    const trimmedSearchText = searchText.trim();
    if (trimmedSearchText || !isMediaQuery) {
      navigate("../builder");
      dispatch(setSearch(trimmedSearchText));
    } else if (isMediaQuery) {
      setShowInputForMobile(true);
    }
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
        handleClickSearch={handleSearchClick}
      />
    </section>
  );
};

WelcomeMessAndSearch.propTypes = {
  className: PropTypes.string,
};

export default WelcomeMessAndSearch;
