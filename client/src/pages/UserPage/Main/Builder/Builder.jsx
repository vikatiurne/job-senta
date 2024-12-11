import Button from "../../../../components/UI/Button/Button";
import styles from "./Builder.module.css";

import React from 'react';
import BuilderDropDown from "../Builder/BuilderDropDown/BuilderDropDown";

import ScoreResumeCircle from "../UserHome/TopResume/ScoreResumeCircle/ScoreResumeCircle";

import { ReactComponent as Remove } from '../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/pajamas_remove-all.svg'
import { ReactComponent as Block } from '../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/majesticons_lock-line.svg'
import { ReactComponent as Edit } from '../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/lucide_edit.svg'
import { ReactComponent as Clone } from '../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/bx_duplicate.svg'
import { Link  } from "react-router-dom";

export default function Builder() {

  return (
    <div className={styles.container}>
      <div className={styles.bilderContantContainerNav}>
          <Link to={''} className={styles.bilderNavLinkEl}>
            <Button children={'Active Resumes'} className={styles.bilderNavLink} />
          </Link>
          <Link to={'archived'} >
            <Button children={'Archived Resumes'} className={styles.bilderNavLink} />
          </Link>
        </div>
      <div className={styles.bilderContantContainer}>
        <div className={styles.containerTitle}>
          <div className={styles.titleElement}>
            <input type="checkbox" name="" id="" className={styles.checkBox} />
            <BuilderDropDown title={ 'Resume title'} cheldrentext={'From A to Z'}  cheldrentext2={'From Z to A'} />
          </div>
          <nav className={styles.bilderNavTitle}>
            <div className={styles.titleElement}>
              <BuilderDropDown title={ 'Analyse score'} cheldrentext={'Ascending'}  cheldrentext2={'Descending'}/>
            </div>
            <div className={styles.titleElement}>
              <BuilderDropDown title={ 'Creation date'} cheldrentext={'Ascending'}  cheldrentext2={'Descending'}/>
            </div>
            <div className={styles.titleElement}>
              <BuilderDropDown title={ 'Edit date'} cheldrentext={'Ascending'}  cheldrentext2={'Descending'}/>
            </div>
          </nav>
          <div className={styles.titleElement}>Actions</div>
        </div>
        
        <div className={styles.bilderTableContainer}>
          <div className={styles.tableElement}>
            <input type="checkbox" name="" id="" className={styles.checkBox} />
            <div className={styles.bilderTablePosition}> loooooooooooooooooooooooooooonag names</div>
          </div>
          <nav className={styles.bilderNavTitles}>
            <div className={styles.tableElement}>
              <ScoreResumeCircle
                  size={50}
                  strokeWidth={5}
                  progress={50}
                  colorProgress='#958060'
              >
                  <div className={styles.sectResumeDescScore}>
                      <p className={styles.sectResumeScorePercent}>50</p>
                      <p className={styles.sectResumeScoreText}>100</p>
                  </div>
              </ScoreResumeCircle>
            </div>
            <div className={styles.tableElement}>
              <div className="">22 march 2024</div>
            </div>
            <div className={styles.tableElement}>
              <div className="">-</div>
            </div>
          </nav>
          <div className={styles.tableElement}>
            <a href="#" className={styles.tableAction}><Edit/></a>
            <a href="#" className={styles.tableAction}><Clone/></a>
            <a href="#" className={styles.tableAction}><Block/></a>
            <a href="#" className={styles.tableAction}><Remove/></a>
          </div>
        </div>
        <div className={styles.bilderTableContainer}>
          <div className={styles.tableElement}>
            <input type="checkbox" name="" id="" className={styles.checkBox} />
            <div className={styles.bilderTablePosition}> l</div>
          </div>
          <nav className={styles.bilderNavTitles}>
            <div className={styles.tableElement}>
              <ScoreResumeCircle
                  size={50}
                  strokeWidth={5}
                  progress={10}
                  colorProgress='#958060'
              >
                  <div className={styles.sectResumeDescScore}>
                      <p className={styles.sectResumeScorePercent}>10</p>
                      <p className={styles.sectResumeScoreText}>100</p>
                  </div>
              </ScoreResumeCircle>
            </div>
            <div className={styles.tableElement}>
              <div className="">22 march 2024</div>
            </div>
            <div className={styles.tableElement}>
              <div className="">-</div>
            </div>
          </nav>
          <div className={styles.tableElement}>
            <a href="#" className={styles.tableAction}><Edit/></a>
            <a href="#" className={styles.tableAction}><Clone/></a>
            <a href="#" className={styles.tableAction}><Block/></a>
            <a href="#" className={styles.tableAction}><Remove/></a>
          </div>
        </div>
        <div className={styles.bilderTableContainer}>
          <div className={styles.tableElement}>
            <input type="checkbox" name="" id="" className={styles.checkBox} />
            <div className={styles.bilderTablePosition}> l</div>
          </div>
          <nav className={styles.bilderNavTitles}>
            <div className={styles.tableElement}>
              <ScoreResumeCircle
                  size={50}
                  strokeWidth={5}
                  progress={99}
                  colorProgress='#958060'
              >
                  <div className={styles.sectResumeDescScore}>
                      <p className={styles.sectResumeScorePercent}>99</p>
                      <p className={styles.sectResumeScoreText}>100</p>
                  </div>
              </ScoreResumeCircle>
            </div>
            <div className={styles.tableElement}>
              <div className="">22 march 2024</div>
            </div>
            <div className={styles.tableElement}>
              <div className="">22 march 2024</div>
            </div>
          </nav>
          <div className={styles.tableElement}>
            <a href="#" className={styles.tableAction}><Edit/></a>
            <a href="#" className={styles.tableAction}><Clone/></a>
            <a href="#" className={styles.tableAction}><Block/></a>
            <a href="#" className={styles.tableAction}><Remove/></a>
          </div>
        </div>
      </div>
    </div>
  );
};




