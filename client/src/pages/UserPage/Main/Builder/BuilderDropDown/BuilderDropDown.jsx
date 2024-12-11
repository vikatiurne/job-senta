import style from "./BuilderDropDown.module.css";
import React, { useState } from "react";

import cn from "classnames";
import { useDispatch } from "react-redux";
import DropDown from "../../../../../components/UI/DropDown/DropDown";
import Scroll from "../../../../../components/UI/Scroll/Scroll";
import { ReactComponent as DropDownIcon } from "../../../../../assets/user_page/home/dropdown.svg";
import { setSort } from "../../NewResume/NewResumeSlice";

export default function BuilderDropDown({ className, title, childrenText }) {
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
          {/* <Scroll
                        height="80px"
                  > */}
          {childrenText.map((item, i) => (
            <button
              key={i}
              className={style.sectResumeDropDownText}
                onClick={() => filterHandler(item.value)}
            >
              {item.title}
            </button>
          ))}

          {/* </Scroll> */}
        </DropDown>
      </div>
    </section>
  );
}
