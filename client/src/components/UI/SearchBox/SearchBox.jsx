import { useState } from "react";
import { ReactComponent as Search } from "../../../assets/user_page/home/search.svg";
import { ReactComponent as Close } from "../../../assets/user_page/home/close.svg";
import styles from "./SearchBox.module.css";
import cn from 'classnames'
import { useMedia } from '../../../hoc/useMedia/useMedia.js'


const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [isInputFocus, setIsInputFocus] = useState(true)


  const changeHandler = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleBlurInput = () => {
    setIsInputFocus(true)
  }

  return (
    <div className={cn(styles.search,
      { [styles.searchFocus]: !isInputFocus },
    )}>
      <input
        type="text"
        placeholder="Resume search"
        className={styles.searchInput}
        value={searchText}
        onChange={changeHandler}
        onBlur={handleBlurInput}
        onFocus={() => { setIsInputFocus(false) }}
      />
      <Search />
    </div>
  );
};

export default SearchBox;
