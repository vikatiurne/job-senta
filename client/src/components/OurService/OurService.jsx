import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './OurService.module.css'
import cn from 'classnames'

import Button from '../UI/Button/Button.jsx';
import Container from '../../hoc/layout/container/Container.jsx'

import { ReactComponent as File } from '../../assets/file.svg'
import { ReactComponent as Ai } from '../../assets/ai.svg'
import { ReactComponent as FileAi } from '../../assets/fileAi.svg'
import { ReactComponent as Plus } from '../../assets/plus.svg'
import { ReactComponent as Minus } from '../../assets/minus.svg'
import ResumeFirst from '../../assets/exampe-resume-1.png'
import ResumeSecond from '../../assets/exampe-resume-2.png'
import ResumeThree from '../../assets/exampe-resume-3.png'

const OurService = () => {
    const resumeBuilder = 'builder'
    const analyzerAi = 'analyzer'

    const [activeContent, setActiveContent] = useState(resumeBuilder)

    const handleActiveContent = (content) => {
        setActiveContent(content)
    }

    return (
        <section className={style.sectionOurService} >
            <Container>
                <h1 className={style.sectionOurServiceTitile}>How is our service useful?</h1>
                <div className={style.sectionOurServiceNav}>
                    <Button
                        className={cn(style.sectionOurServiceBtn, { [style.active]: activeContent === resumeBuilder })}
                        onClick={() => { handleActiveContent(resumeBuilder) }}
                    >
                        <File />
                        <span className={style.sectionOurServiceText}>
                            Resume builder
                        </span>
                    </Button>
                    <Button
                        className={cn(style.sectionOurServiceBtn, { [style.active]: activeContent === analyzerAi })}
                        onClick={() => { handleActiveContent(analyzerAi) }}
                    >
                        <Ai />
                        <span className={style.sectionOurServiceText}>
                            AI analyzer
                        </span>
                    </Button>
                </div>
                <div className={style.sectionOurServiceContent}>
                    <div className={style.sectionOurServiceContentSlides}>
                        <div className={cn(style.sectionOurServiceSlide,
                            { [style.slideFirst]: activeContent === resumeBuilder },
                            { [style.slideSecond]: activeContent !== resumeBuilder },
                            style.slideResumeBuilder
                        )}>
                            <p className={style.sectionOurServiceDesc}>
                                Our tool allows you to quickly and conveniently create a professional resume using ready-made, stylish templates. Just enter your details and you'll have a perfectly structured resume in just a few minutes.
                            </p>
                            <div className={style.sectionOurServiceImgWrap}>
                                <img src={ResumeFirst} alt="exampe resume" />
                                <img src={ResumeSecond} alt="exampe resume" />
                                <img src={ResumeThree} alt="exampe resume" />
                            </div>

                        </div>
                        <div className={cn(style.sectionOurServiceSlide,
                            { [style.slideSecond]: activeContent === analyzerAi },
                            { [style.slideFirst]: activeContent !== analyzerAi },
                            style.slideAnalyzerAi

                        )}>
                            <p className={style.sectionOurServiceDesc}>
                                Powerful artificial intelligence analyzes your resume and provides detailed recommendations on how to improve it. It will help increase the chances of success by highlighting strengths and suggesting areas for improvement.
                            </p>

                            <div className={style.sectionOurServiceAnalysis}>
                                <div className={style.sectionOurServiceAnalysisImg} >
                                    <img src={ResumeFirst} width='181px' height='255px' alt="exampe resume" />
                                </div>
                                <h3 className={style.sectionOurServiceAnalysisTitle} ><FileAi /> Summary analysis: </h3>
                                <div className={style.sectionOurServiceAnalysisPlus}>
                                    <div >
                                        <Plus />
                                    </div>
                                    <p className={style.sectionOurServiceAnalysisText}>
                                        Professional design: modern style, cleanliness and conciseness.
                                        <br />
                                        Good structure: Logical division into blocks, easy reading.
                                        <br />
                                        Clarity and brevity: Information is presented clearly and without unnecessary details.
                                    </p>
                                </div>
                                <div className={style.sectionOurServiceAnalysisMinus}>
                                    <div>
                                        <Minus />
                                    </div>
                                    <p className={style.sectionOurServiceAnalysisText}>
                                        Lack of specifics: Poor descriptions of work experience, lack of information about projects, responsibilities, results.
                                        <br />
                                        Insufficiently detailed profile: No description of key qualities, strengths.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section >
    );
};

OurService.propTypes = {};

export default OurService;