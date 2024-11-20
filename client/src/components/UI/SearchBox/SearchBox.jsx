import { useState } from "react";
import { ReactComponent as Search } from "../../../assets/user_page/home/search.svg";
import { ReactComponent as Close } from "../../../assets/user_page/home/close.svg";
import styles from "./SearchBox.module.css";
import cn from 'classnames'
import { useMedia } from '../../../hoc/useMedia/useMedia.js'
import Button from "../Button/Button";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [isInputFocus, setIsInputFocus] = useState(true)
  const [showInputForMobile, setShowInputForMobile] = useState(false)
  const isMediaQuery = useMedia('(max-width:1150px)')

  const changeHandler = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleBlurInput = () => {
    setIsInputFocus(true)
  }

  return (
    <>
      {isMediaQuery ? <>
        <button
          type="button"
          className={styles.btnIconSearchMobile}
          onClick={() => { setShowInputForMobile(!showInputForMobile) }}
        >
          <Search />
        </button>
        <div className={cn(styles.searchMobile,
          { [styles.searchFocus]: !isInputFocus },
          { [styles.searchMobileShow]: showInputForMobile && isMediaQuery }
        )}>
          <input
            type="text"
            placeholder="Resume search"
            className={styles.searchInputMobile}
            value={searchText}
            onChange={changeHandler}
          // onBlur={handleBlurInput}
          // onFocus={() => { setIsInputFocus(false) }}
          />
          <button type="button"
            className={styles.searchIconCloseMobile}
            onClick={() => {
              setSearchText('')
              setShowInputForMobile(false)
            }}
          > <Close /></button>
        </div>
      </> : <div className={cn(styles.search,
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
        {isInputFocus && <Search />}
      </div>
      }
    </>
  );
};

export default SearchBox;
