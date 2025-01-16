import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Arrow } from "../../../assets/user_page/builder/ActiveResume/ic-arrow-back.svg";

import Button from "../../UI/Button/Button";

import { setPage } from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";

import styles from "./Pagination.module.css";

const Pagination = () => {
  const dispatch = useDispatch();

  const { resumesCount, limit, page } = useSelector((state) => state.resume);

  const pagesCount = Math.ceil(resumesCount / limit);
  const activePrevArrow = page > 1;
  const activeNextArrow = page < pagesCount;

  const handlePrevPage = () => {
    if (page > 1) dispatch(setPage(page - 1));
  };

  const handleNextPage = () => {
    if (page < pagesCount) dispatch(setPage(page + 1));
  };

  return (
    <div className={styles.paginationContainer}>
      <Button
        className={
          activePrevArrow ? styles.arrowLeft : styles.arrowNotActiveLeft
        }
        onClick={handlePrevPage}
        disabled={!activePrevArrow}
      >
        <Arrow />
      </Button>

      <Button
        className={
          activeNextArrow ? styles.arrowRight : styles.arrowNotActiveRight
        }
        onClick={handleNextPage}
        disabled={!activeNextArrow}
      >
        <Arrow />
      </Button>
    </div>
  );
};

export default Pagination;
