import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { ReactComponent as Search } from "../../../../../../assets/user_page/home/search.svg";
import { setSearch } from "../../../NewResume/NewResumeSlice.js";

import styles from "./Search.module.css";

const SearchBox = ({
  handleClickSearch,
  showInputForMobile,
  setShowInputForMobile,
}) => {
  const { searchText } = useSelector((state) => state.resume);
  const [isInputFocus, setIsInputFocus] = useState(true);

  const inputRef = useRef();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const text = e.target.value;
    dispatch(setSearch(text));
  };

  const handleBlurInput = () => {
    setIsInputFocus(true);
    setShowInputForMobile(false);
  };

  return (
    <div
      className={cn({
        [styles.searchMob]: showInputForMobile,
        [styles.search]: !showInputForMobile,
        [styles.searchFocus]: !isInputFocus,
      })}
    >
      <input
        type="text"
        placeholder="Resume search"
        className={cn({
          [styles.searchMobInput]: showInputForMobile,
          [styles.searchInput]: !showInputForMobile,
        })}
        ref={inputRef}
        value={searchText}
        onChange={changeHandler}
        onBlur={handleBlurInput}
        onFocus={() => {
          setIsInputFocus(false);
        }}
      />
      <Search onClick={handleClickSearch} />
    </div>
  );
};

export default SearchBox;
