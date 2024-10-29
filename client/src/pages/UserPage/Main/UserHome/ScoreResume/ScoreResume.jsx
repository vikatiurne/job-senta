import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ScoreResume.module.css'
import cn from 'classnames'

import { ReactComponent as Score } from '../../../../../assets/user_page/home/score.svg'
import { ReactComponent as DropDownIcon } from '../../../../../assets/user_page/home/dropdown.svg'
import { ReactComponent as Eye } from '../../../../../assets/user_page/home/eye.svg'
import DropDown from '../../../../../components/UI/DropDown/DropDown.jsx';


const ScoreResume = ({ className }) => {

    const [selectedMinScore, setSelectedMinScore] = useState(false)
    const [selectedMaxScore, setSelectedMaxScore] = useState(false)

    const handleSelectedMinScore = () => { setSelectedMinScore(!selectedMinScore) }
    const handleSelectedMaxScore = () => { setSelectedMaxScore(!selectedMaxScore) }



    return (
        <section className={cn(style.sectScoreResume, className)}>
            <ul className={style.sectScoreResumeList} >
                <li className={cn(
                    style.sectScoreResumeItem,
                    style.sectScoreResumeItemAverage
                )}>
                    <h6 className={style.sectScoreResumeItemTitle} >Average score of resume <Score /></h6>
                    <p className={style.sectScoreResumeItemScore} >0%</p>
                </li>
                <li className={cn(
                    style.sectScoreResumeItem,
                    style.sectScoreResumeItemMin,
                    { [style.sectScoreResumeItemMinAcive]: selectedMinScore },
                )}>
                    <h6 className={style.sectScoreResumeItemTitle} >Min&nbsp;score  <Score /></h6>
                    <p className={style.sectScoreResumeItemScore} >0%</p>
                    <button
                        type='text'
                        className={cn(style.sectScoreResumeItemDropDown,
                            { [style.scoreActive]: selectedMinScore }
                        )}
                        onClick={handleSelectedMinScore}
                    >
                        <DropDownIcon />
                    </button>



                    <DropDown
                        className={cn(style.scoreMinDropDown)}
                        activeClass={selectedMinScore}
                        maxHeight='119px'
                    >
                        <h6 className={style.scoreDropDownTitle}>Top 3 best resumes</h6>
                        <ul className={style.scoreDropDownList}>
                            <li className={style.scoreDropDownItem}>
                                <span className={style.scoreDropDownItemText}>Administrator</span>
                                <button
                                    type='text'
                                    className={style.scoreDropDownItemBtn}
                                >
                                    <Eye />
                                </button>
                            </li>
                            <li className={style.scoreDropDownItem}>
                                <span className={style.scoreDropDownItemText}>Administrator</span>
                                <button
                                    type='text'
                                    className={style.scoreDropDownItemBtn}
                                >
                                    <Eye />
                                </button>
                            </li>
                            <li className={style.scoreDropDownItem}>
                                <span className={style.scoreDropDownItemText} >Administrator</span>
                                <button
                                    className={style.scoreDropDownItemBtn}>
                                    <Eye />
                                </button>
                            </li>
                        </ul>
                    </DropDown>
                </li>
                <li className={cn(
                    style.sectScoreResumeItem,
                    style.sectScoreResumeItemMax,
                    { [style.sectScoreResumeItemMaxAcive]: selectedMaxScore },
                )}>
                    <h6 className={style.sectScoreResumeItemTitle} >Max&nbsp;score  <Score /></h6>
                    <p className={style.sectScoreResumeItemScore} >0%</p>

                    <button
                        type='text'
                        className={cn(style.sectScoreResumeItemDropDown,
                            { [style.scoreActive]: selectedMaxScore }
                        )}
                        onClick={handleSelectedMaxScore}
                    >
                        <DropDownIcon />
                    </button>

                    <DropDown
                        className={cn(style.scoreMaxDropDown)}
                        activeClass={selectedMaxScore}
                        maxHeight='119px'
                    >
                        <h6 className={style.scoreDropDownTitle} >Top 3 problem resumes</h6>
                        <ul className={style.scoreDropDownList}>
                            <li className={style.scoreDropDownItem}>
                                <span className={style.scoreDropDownItemText}>HR manager</span>
                                <button
                                    type='text'
                                    className={style.scoreDropDownItemBtn}
                                >
                                    <Eye />
                                </button>
                            </li>
                            <li className={style.scoreDropDownItem}>
                                <span className={style.scoreDropDownItemText}>HR manager</span>
                                <button
                                    type='text'
                                    className={style.scoreDropDownItemBtn}
                                >
                                    <Eye />
                                </button>
                            </li>
                            <li className={style.scoreDropDownItem}>
                                <span className={style.scoreDropDownItemText}>HR manager</span>
                                <button
                                    type='text'
                                    className={style.scoreDropDownItemBtn}
                                >
                                    <Eye />
                                </button>
                            </li>
                        </ul>
                    </DropDown>
                </li>
            </ul>
        </section >
    );
};

ScoreResume.propTypes = {};

export default ScoreResume;