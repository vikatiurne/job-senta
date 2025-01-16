import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { ReactComponent as Search } from "../../../assets/user_page/home/search.svg";

import { setSearch } from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const search = useSelector((state) => state.resume.searchText);
  const [searchText, setSearchText] = useState(search);
  const [isInputFocus, setIsInputFocus] = useState(true);

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  const changeHandler = (e) => {
    const text = e.target.value;
    setSearchText(text);
    dispatch(setSearch(text));
  };

  const handleBlurInput = () => {
    setIsInputFocus(true);
  };

  return (
    <div className={cn(styles.search, { [styles.searchFocus]: !isInputFocus })}>
      <input
        type="text"
        placeholder="Resume search"
        className={styles.searchInput}
        value={searchText}
        onChange={changeHandler}
        onBlur={handleBlurInput}
        onFocus={() => {
          setIsInputFocus(false);
        }}
      />
      <Search />
    </div>
  );
};

export default SearchBox;
