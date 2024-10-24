import Button from "../../../../components/UI/Button/Button";
import styles from "./Builder.module.css";

import React from 'react';
import BuilderDropDown from "./BuilderDropDown/BuilderDropDown";

import ScoreResumeCircle from "../UserHome/TopResume/ScoreResumeCircle/ScoreResumeCircle";

import { ReactComponent as Remove } from '../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/pajamas_remove-all.svg'
import { ReactComponent as Block } from '../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/majesticons_lock-line.svg'
import { ReactComponent as Copy } from '../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/bx_duplicate.svg'
import { ReactComponent as Edit } from '../../../../assets/user_page/builder/ActiveResume/Resume builder/Personal cabinet/lucide_edit.svg'
import { Link } from "react-router-dom";

export default function Builder(){
  return (
    <div className={styles.container}>
      <div className={styles.bilderContantContainerNav}>
        <Link to={''} className={styles.bilderNavLinkEl}>
          <Button children={'Active Resumes'} className={styles.bilderNavLink } />
        </Link>
        <Link to={'archived'}>
          <Button children={'Archived Resumes'} className={styles.bilderNavLink } />
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
            <div className={styles.bilderTablePosition}>Customer search manager</div>
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
              <div className="">28 Fabruary 2024</div>
            </div>
            <div className={styles.tableElement}>
              <div className="">23 March 2024</div>
            </div>
          </nav>
          <div className={styles.tableElement}>
            <a href="#" className={styles.tableAction}><Remove/></a>
            <a href="#" className={styles.tableAction}><Block/></a>
            <a href="#" className={styles.tableAction}><Copy/></a>
            <a href="#" className={styles.tableAction}><Edit/></a>
          </div>
        </div>
        <div className={styles.bilderTableContainer}>
          <div className={styles.tableElement}>
            <input type="checkbox" name="" id="" className={styles.checkBox} />
            <div className={styles.bilderTablePosition}>C</div>
          </div>
          <nav className={styles.bilderNavTitles}>
            <div className={styles.tableElement}>
              <ScoreResumeCircle
                  size={50}
                  strokeWidth={5}
                  progress={89}
                  colorProgress='#958060'
              >
                  <div className={styles.sectResumeDescScore}>
                      <p className={styles.sectResumeScorePercent}>89</p>
                      <p className={styles.sectResumeScoreText}>100</p>
                  </div>
              </ScoreResumeCircle>
            </div>
            <div className={styles.tableElement}>
              <div className="">28 Fabruary 2024</div>
            </div>
            <div className={styles.tableElement}>
              <div className="">23 March 2024</div>
            </div>
          </nav>
          <div className={styles.tableElement}>
            <a href="#" className={styles.tableAction}><Remove/></a>
            <a href="#" className={styles.tableAction}><Block/></a>
            <a href="#" className={styles.tableAction}><Copy/></a>
            <a href="#" className={styles.tableAction}><Edit/></a>
          </div>
        </div>
        <div className={styles.bilderTableContainer}>
          <div className={styles.tableElement}>
            <input type="checkbox" name="" id="" className={styles.checkBox} />
            <div className={styles.bilderTablePosition}>C</div>
          </div>
          <nav className={styles.bilderNavTitles}>
            <div className={styles.tableElement}>
              <ScoreResumeCircle
                  size={50}
                  strokeWidth={5}
                  progress={33}
                  colorProgress='#958060'
              >
                  <div className={styles.sectResumeDescScore}>
                      <p className={styles.sectResumeScorePercent}>33</p>
                      <p className={styles.sectResumeScoreText}>100</p>
                  </div>
              </ScoreResumeCircle>
            </div>
            <div className={styles.tableElement}>
              <div className="">28 Fabruary 2024</div>
            </div>
            <div className={styles.tableElement}>
              <div className="">23 March 2024</div>
            </div>
          </nav>
          <div className={styles.tableElement}>
            <a href="#" className={styles.tableAction}><Remove/></a>
            <a href="#" className={styles.tableAction}><Block/></a>
            <a href="#" className={styles.tableAction}><Copy/></a>
            <a href="#" className={styles.tableAction}><Edit/></a>
          </div>
        </div>
      </div>
    </div>
  );
};




