import { useState } from "react";

import { ReactComponent as Add } from "../../../assets/user_page/builder/ActiveResume/ic-duplicate.svg";
import { ReactComponent as Linkedin } from "../../../assets/user_page/builder/ActiveResume/ic-linkedin-download.svg";
import { ReactComponent as Download } from "../../../assets/user_page/builder/ActiveResume/ic-download.svg";
import { ReactComponent as Archive } from "../../../assets/user_page/builder/ActiveResume/archive.svg";
import { ReactComponent as Remove } from "../../../assets/user_page/builder/ActiveResume/ic-remove-all.svg";

import styles from "./BtnsBuilder.module.css";

const BtnsBuilder = () => {
  const [limit, setLimit] = useState(10);

  const handleLimit = (e) => {
    !!e.target.value ? setLimit(Number(e.target.value)) : setLimit(10);
  };

  return (
    <div className={styles.btnsConainer}>
      <div className={styles.btns}>
        <Add className={styles.icon}/>
        <Linkedin className={styles.iconLd}/>
        <Download className={styles.icon}/>
        <Archive className={styles.icon}/>
        <Remove className={styles.icon}/>
      </div>

      <label className={styles.label}>
        Show:
        <input  className={styles.inputLimit} type="number" value={limit} onChange={handleLimit} />
      </label>
    </div>
  );
};

export default BtnsBuilder;
