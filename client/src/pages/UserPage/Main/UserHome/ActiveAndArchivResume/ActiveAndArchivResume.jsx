import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'
import style from './ActiveAndArchivResume.module.css'



const ActiveAndArchivResume = ({ className }) => {
    return (
        <section className={cn(style.sectAcriveArchiv, className)}>
            <div className={cn(style.activeResume, style.sectAcriveArchivBlock)}>
                <p className={style.activeResumeCount}>0</p>
                <p className={style.activeResumeText}>Your active resumes</p>
            </div>
            <div className={cn(style.archivResume, style.sectAcriveArchivBlock)}  >
                <p className={style.archivResumeCount}>0</p>
                <p className={style.archiResumeText}>Your active resumes</p>
            </div>

        </section>
    );
};

ActiveAndArchivResume.propTypes = {};

export default ActiveAndArchivResume;