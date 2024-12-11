import style from './BuilderDropDown.module.css'
import React, { useState } from 'react';

import cn from 'classnames'
import DropDown from '../../../../../components/UI/DropDown/DropDown';
import Scroll from '../../../../../components/UI/Scroll/Scroll';
import { ReactComponent as DropDownIcon } from '../../../../../assets/user_page/home/dropdown.svg'

export default function BuilderDropDown({className,title,cheldrentext,cheldrentext2}) {

  const [selectedResumes, setSelectedResumes] = useState(false)
  const handleSelectedResume = () => (setSelectedResumes(!selectedResumes))
  
  return (
    <section className={cn(style.sectResume, className)}>
            <div className={style.sectResumeWrap}>
                <div className={style.sectResumeToTrack}>
                  <p className={style.sectResumeText} >{title}</p>
                    <button
                        className={cn(style.sectResumeBtnDropDown,
                            { [style.sectResumeBtnDropDownActive]: selectedResumes }
                        )}
                        onClick={handleSelectedResume}
                    >
                    <DropDownIcon />
                    </button>
                </div>

                <DropDown
                    className={cn(style.sectResumeDropDown)}
                    activeClass={selectedResumes}
                    maxHeight='119px'
                >
                    <Scroll
                        height="80px"
                    >
                                <button className={style.sectResumeDropDownText}>{cheldrentext}</button>
                                <button className={style.sectResumeDropDownText}>{cheldrentext2}</button>
                                {/* <p className={style.sectResumeDropDownText}>From Z to A</p> */}
                            
                    </Scroll>

                </DropDown>

            </div>
           
        </section>
  )
}
