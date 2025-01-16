import { useSelector } from "react-redux";
import cn from "classnames";

import style from "./ActiveAndArchivResume.module.css";

const ActiveAndArchivResume = ({ className }) => {
  const { activeCount, archiveCount } = useSelector((state) => state.resume);

  return (
    <section className={cn(style.sectAcriveArchiv, className)}>
      <div className={cn(style.activeResume, style.sectAcriveArchivBlock)}>
        <p className={style.activeResumeCount}>{activeCount}</p>
        <p className={style.activeResumeText}>Your active resumes</p>
      </div>
      <div className={cn(style.archivResume, style.sectAcriveArchivBlock)}>
        <p className={style.archivResumeCount}>{archiveCount}</p>
        <p className={style.archiResumeText}>Your active resumes</p>
      </div>
    </section>
  );
};


export default ActiveAndArchivResume;
