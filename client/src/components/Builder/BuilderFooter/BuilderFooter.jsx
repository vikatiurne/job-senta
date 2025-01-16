import { Link } from "react-router-dom";
import styles from "./BuilderFooter.module.css";
import Pagination from "../Pagination/Pagination";
import BtnsBuilder from "../BtnsBuilder/BtnsBuilder";

const BuilderFooter = () => {
  return (
    <footer>
      <Link to="create" className={styles.linkToCreate}>
        <div className={styles.title}>+ New Resume</div>
      </Link>
      <Pagination />
      <BtnsBuilder />
    </footer>
  );
};

export default BuilderFooter;
