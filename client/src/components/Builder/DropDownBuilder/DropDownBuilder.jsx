import style from "./DropDownBuilder.module.css";
import  { useState } from "react";

import cn from "classnames";
import { useDispatch } from "react-redux";
import DropDown from "../../../components/UI/DropDown/DropDown";

import { ReactComponent as DropDownIcon } from "../../../assets/user_page/home/dropdown.svg";

import { setSort } from "../../../pages/UserPage/Main/NewResume/NewResumeSlice";


export default function DropDownBuilder({ className, title, childrenText }) {
  const [selectedResumes, setSelectedResumes] = useState(false);
  const handleSelectedResume = () => setSelectedResumes(!selectedResumes);
  const dispatch = useDispatch();

  // закидываем в стор тип сортировки
  const filterHandler = (val) => dispatch(setSort(val));

  return (
    <section className={cn(style.sectResume, className)}>
      <div className={style.sectResumeWrap}>
        <div className={style.sectResumeToTrack}>
          <p className={style.sectResumeText}>{title}</p>
          <button
            className={cn(style.sectResumeBtnDropDown, {
              [style.sectResumeBtnDropDownActive]: selectedResumes,
            })}
            onClick={handleSelectedResume}
          >
            <DropDownIcon />
          </button>
        </div>

        <DropDown
          className={cn(style.sectResumeDropDown)}
          activeClass={selectedResumes}
          maxHeight="500px"
        >
          
          {childrenText.map((item, i) => (
            <button
              key={i}
              className={style.sectResumeDropDownText}
                onClick={() => filterHandler(item.value)}
            >
              {item.title}
            </button>
          ))}

         
        </DropDown>
      </div>
    </section>
  );
}
