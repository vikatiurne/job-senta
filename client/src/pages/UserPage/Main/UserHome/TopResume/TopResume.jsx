import React from 'react';
import PropTypes from 'prop-types';
import style from './TopResume.module.css'

import DropDown from '../../../../../components/UI/DropDown/DropDown';
import ScoreResumeCircle from './ScoreResumeCircle/ScoreResumeCircle';


import { ReactComponent as DropDownIcon } from '../../../../../assets/user_page/home/dropdown.svg'
import { ReactComponent as Star } from '../../../../../assets/user_page/home/star.svg'


const TopResume = () => {
    return (
        <section className={style.sectResume}>
            <h1 className={style.sectResumeTitle}> <Star /> Top resume </h1>
            <div className={style.sectResumeWrap}>
                <div className={style.sectResumeToTrack}>
                    <button className={style.sectResumeBtnDropDown}>
                        <DropDownIcon />
                    </button>
                    <p className={style.sectResumeText} >Resume: <span className={style.sectResumeResourse} >Human Resources</span></p>
                </div>
                <p className={style.sectResumeDate}>03 March 2024</p>
                {/* <DropDown>

                </DropDown> */}

            </div>
            <ScoreResumeCircle
                size={140}
                strokeWidth={10}
                progress={87}
                colorProgress='#958060'
            >
                <div className={style.sectResumeDescScore}>
                    <p className={style.sectResumeScorePercent}>87%</p>
                    <p className={style.sectResumeScoreText}>Resume <br /> assessment</p>
                </div>
            </ScoreResumeCircle>

            <div className={style.sectResumeProgressBar}>


            </div>
        </section>
    );
};

TopResume.propTypes = {};

export default TopResume;