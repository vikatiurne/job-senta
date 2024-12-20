import { ReactComponent as Arrow } from "../../../assets/user_page/builder/ActiveResume/ic-arrow-back.svg";

import styles from "./Pagination.module.css";

const Pagination = () => {
  const handlePrevPage = () => {};
  const handleNextPage = () => {};

  return (
    <div className={styles.paginationContainer}>
      <Arrow className={styles.arrowLeft} onClick={handlePrevPage} />
      <Arrow className={styles.arrowRight} onClick={handleNextPage} />
    </div>
  );
};

export default Pagination;
