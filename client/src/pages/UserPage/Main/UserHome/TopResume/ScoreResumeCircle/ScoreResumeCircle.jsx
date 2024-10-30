import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'
import style from './ScoreResumeCircle.module.css'


const ScoreResumeCircle = (props) => {
    const { children, size, strokeWidth, progress, colorProgress } = props
    const radius = (size - strokeWidth) / 2
    const ferenceCircum = 2 * Math.PI * radius
    const progressOffset = ferenceCircum - (progress / 100) * ferenceCircum

    return (
        <div className={cn(style.ProgressWrap)}
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            <svg
                className={style.progressRing}
                width={`${size}`}
                height={`${size}`}>
                <circle
                    className={style.progressRingCircleBackground}
                    stroke="#a4a4a4"
                    strokeDashoffset={progressOffset}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeWidth={`${strokeWidth}`}

                />
                <circle
                    className={style.progressRingCircle}

                    stroke={colorProgress}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeDasharray={`${ferenceCircum} ${ferenceCircum}`}
                    strokeDashoffset={progressOffset}
                    strokeWidth={strokeWidth}
                />
            </svg>
            <div className={style.progressContent}>
                {children}
            </div>
        </div>
    );
};

ScoreResumeCircle.propTypes = {
    size: PropTypes.number,
    strokeWidth: PropTypes.number,
    progress: PropTypes.number,
    colorProgress: PropTypes.string,
    children: PropTypes.any,
};

export default ScoreResumeCircle;