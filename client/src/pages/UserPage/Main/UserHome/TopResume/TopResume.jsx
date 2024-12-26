import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";

import DropDown from "../../../../../components/UI/DropDown/DropDown";
import ScoreResumeCircle from "./ScoreResumeCircle/ScoreResumeCircle";
import ProgressBar from "./ProgressBar/ProgressBar";
import Scroll from "../../../../../components/UI/Scroll/Scroll";

import { ReactComponent as DropDownIcon } from "../../../../../assets/user_page/home/dropdown.svg";
import { ReactComponent as Star } from "../../../../../assets/user_page/home/star.svg";
import { ReactComponent as StarBorder } from "../../../../../assets/user_page/home/starborder.svg";

import { useMedia } from "../../../../../hoc/useMedia/useMedia.js";

import style from "./TopResume.module.css";
import DateServices from "../../../../../utils/DateServices.js";

const TopResume = ({ className }) => {
  const { resumes } = useSelector((state) => state.resume);

  const [selectedResumes, setSelectedResumes] = useState(false);
  const [activeStarIds, setActiveStarIds] = useState([]);
  const [topResume, setTopResume] = useState(resumes[0]);

  useEffect(() => {
    setActiveStarIds(
      resumes.filter((item) => item.isFavorite).map((item) => item.id)
    );
  }, [resumes]);

  const handleSelectedResume = () => setSelectedResumes(!selectedResumes);

  const handleSelectTop = (id) => {
    const newTop = resumes.filter((item) => id === item.id);
    setTopResume(newTop[0]);
    setSelectedResumes(false);
  };

  const hasMediaQuery = useMedia("(max-width:1024px)");
  const hasMediaQueryProgressBar = useMedia("(max-width:456px)");

  return (
    <section className={cn(style.sectResume, className)}>
      <h1 className={style.sectResumeTitle}>
        {" "}
        <Star /> Top resume{" "}
      </h1>


   { !!resumes.length &&  <div className={style.sectResumeWrap}>
        <div className={style.sectResumeToTrack} onClick={handleSelectedResume}>
          <button
            className={cn(style.sectResumeBtnDropDown, {
              [style.sectResumeBtnDropDownActive]: selectedResumes,
            })}
          >
            <DropDownIcon />
          </button>
          <p className={style.sectResumeText}>
            Resume:{" "}
            <span className={style.sectResumeResourse}>
              {topResume?.target}
            </span>
          </p>
        </div>
        <p className={style.sectResumeDate}>
          {DateServices.getDate(topResume?.createdAt, "long")}
        </p>

        <DropDown
          className={cn(style.sectResumeDropDown)}
          activeClass={selectedResumes}
          maxHeight="119px"
        >
          <h3 className={style.sectResumeDropDownTitle}>
            Select the resume you want to track
          </h3>
          <Scroll height="80px">
            <ul className={style.sectResumeDropDownList}>
              {resumes.map((item) => (
                <li
                  key={uuidv4()}
                  className={style.sectResumeDropDownItem}
                  onClick={() => handleSelectTop(item.id)}
                >
                  <p className={style.sectResumeDropDownText}>{item.target}</p>
                  <time className={style.sectResumeDropDownDate}>
                    {DateServices.getDate(item.createdAt, "long")}
                  </time>
                  <StarBorder
                    style={{
                      fill: activeStarIds.includes(item.id)
                        ? "#958060"
                        : "transparent",
                    }}
                  />
                </li>
              ))}
            </ul>
          </Scroll>
        </DropDown>
      </div>}

      <ScoreResumeCircle
        size={hasMediaQuery ? 110 : 140}
        strokeWidth={10}
        progress={65}
        colorProgress="#958060"
      >
        <div className={style.sectResumeDescScore}>
          <p className={style.sectResumeScorePercent}>65%</p>
          <p className={style.sectResumeScoreText}>
            Resume <br /> assessment
          </p>
        </div>
      </ScoreResumeCircle>
      <div className={style.sectResumeProgressBar}>
        <ProgressBar
          width={hasMediaQueryProgressBar ? 262 : 573}
          height={16}
          title="Resume Structure"
          progressColor="#A6A482"
          maxValue={10}
          progressValue={6}
        />
        <ProgressBar
          width={hasMediaQueryProgressBar ? 262 : 573}
          height={16}
          title="Measurable Results"
          progressColor="#685843"
          maxValue={10}
          progressValue={2}
        />
        <ProgressBar
          width={hasMediaQueryProgressBar ? 262 : 573}
          height={16}
          title="Resume Structure"
          progressColor="#737084"
          maxValue={10}
          progressValue={8}
        />
        <p className={style.sectResumeProgressBarIssues}>0 Issues</p>
      </div>
    </section>
  );
};

export default TopResume;
