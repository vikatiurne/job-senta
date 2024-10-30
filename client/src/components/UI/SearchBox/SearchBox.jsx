import { useState } from "react";
import { ReactComponent as Search } from "../../../assets/user_page/home/search.svg";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");

  const changeHandler = (e) => {
    const text = e.target.value;
    setSearchText(text);

  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Resume search"
        className={styles.searchInput}
        value={searchText}
        onChange={changeHandler}
      />
      <Search />
    </div>
  );
};

export default SearchBox;
