import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './TopResume.module.css'
import cn from 'classnames'
import DropDown from '../../../../../components/UI/DropDown/DropDown';
import ScoreResumeCircle from './ScoreResumeCircle/ScoreResumeCircle';
import ProgressBar from './ProgressBar/ProgressBar';
import Scroll from '../../../../../components/UI/Scroll/Scroll';
import { ReactComponent as DropDownIcon } from '../../../../../assets/user_page/home/dropdown.svg'
import { ReactComponent as Star } from '../../../../../assets/user_page/home/star.svg'
import { ReactComponent as StarBorder } from '../../../../../assets/user_page/home/starborder.svg'
import { useMedia } from '../../../../../hoc/useMedia/useMedia.js'

const TopResume = ({ className }) => {

    const [selectedResumes, setSelectedResumes] = useState(false)
    const handleSelectedResume = () => (setSelectedResumes(!selectedResumes))
    const hasMediaQuery = useMedia("(max-width:1024px)")
    const hasMediaQueryProgressBar = useMedia("(max-width:456px)")

    return (
        <section className={cn(style.sectResume, className)}>
            <h1 className={style.sectResumeTitle}> <Star /> Top resume </h1>
            <div className={style.sectResumeWrap}>
                <div className={style.sectResumeToTrack}>
                    <button
                        className={cn(style.sectResumeBtnDropDown,
                            { [style.sectResumeBtnDropDownActive]: selectedResumes }
                        )}
                        onClick={handleSelectedResume}
                    >
                        <DropDownIcon />
                    </button>
                    <p className={style.sectResumeText} >Resume: <span className={style.sectResumeResourse} >Human Resources</span></p>
                </div>
                <p className={style.sectResumeDate}>03 March 2024</p>

                <DropDown
                    className={cn(style.sectResumeDropDown)}
                    activeClass={selectedResumes}
                    maxHeight='119px'
                >
                    <h3 className={style.sectResumeDropDownTitle}>Select the resume you want to track</h3>
                    <Scroll
                        height="80px"
                    >
                        <ul className={style.sectResumeDropDownList}>
                            <li className={style.sectResumeDropDownItem}>
                                <p className={style.sectResumeDropDownText}>Administrator</p>
                                <time className={style.sectResumeDropDownDate}>29 February 2024</time>
                                <StarBorder />
                            </li>
                            <li className={style.sectResumeDropDownItem}>
                                <p className={style.sectResumeDropDownText}>Human Resources</p>
                                <time className={style.sectResumeDropDownDate}>03 March 2024</time>
                                <Star />
                            </li>
                            <li className={style.sectResumeDropDownItem}>
                                <p className={style.sectResumeDropDownText}>Customer search manager</p>
                                <time className={style.sectResumeDropDownDate}>23 March 2024</time>
                                <StarBorder />
                            </li>
                            <li className={style.sectResumeDropDownItem}>
                                <p className={style.sectResumeDropDownText}>Administrator</p>
                                <time className={style.sectResumeDropDownDate}>29 February 2024</time>
                                <StarBorder />
                            </li>
                            <li className={style.sectResumeDropDownItem}>
                                <p className={style.sectResumeDropDownText}>Human Resources</p>
                                <time className={style.sectResumeDropDownDate}>03 March 2024</time>
                                <Star />
                            </li>
                            <li className={style.sectResumeDropDownItem}>
                                <p className={style.sectResumeDropDownText}>Customer search manager</p>
                                <time className={style.sectResumeDropDownDate}>23 March 2024</time>
                                <StarBorder />
                            </li>
                        </ul>
                    </Scroll>

                </DropDown>

            </div>


            <ScoreResumeCircle
                size={hasMediaQuery ? 110 : 140}
                strokeWidth={10}
                progress={65}
                colorProgress='#958060'
            >
                <div className={style.sectResumeDescScore}>
                    <p className={style.sectResumeScorePercent}>65%</p>
                    <p className={style.sectResumeScoreText}>Resume <br /> assessment</p>
                </div>
            </ScoreResumeCircle>
            <div className={style.sectResumeProgressBar}>
                <ProgressBar
                    width={hasMediaQueryProgressBar ? 262 : 573}
                    height={16}
                    title='Resume Structure'
                    progressColor='#A6A482'
                    maxValue={10}
                    progressValue={6}
                />
                <ProgressBar
                    width={hasMediaQueryProgressBar ? 262 : 573}
                    height={16}
                    title='Measurable Results'
                    progressColor='#685843'
                    maxValue={10}
                    progressValue={2}
                />
                <ProgressBar
                    width={hasMediaQueryProgressBar ? 262 : 573}
                    height={16}
                    title='Resume Structure'
                    progressColor='#737084'
                    maxValue={10}
                    progressValue={8}
                />
                <p className={style.sectResumeProgressBarIssues}>0 Issues</p>
            </div>


        </section>
    );
};

TopResume.propTypes = {};

export default TopResume;