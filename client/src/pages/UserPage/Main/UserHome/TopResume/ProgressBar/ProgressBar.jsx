import PropTypes from 'prop-types';

import style from './ProgressBar.module.css'

const ProgressBar = (props) => {
    const {
        title,
        progressColor,
        maxValue,
        progressValue,
        width,
        height

    } = props;


    const heightLine = height / 2;
    const offsetYForHeight = (height - heightLine) / 2
    const progressLine = progressValue * width / maxValue;

    return (
        <>
            <h6 className={style.progressBarTitle}>{title}</h6>
            <div className={style.progressBarWrap}>
                <svg
                    width={`${width}`}
                    height={`${height}`}
                    viewBox={`0 0 ${width} ${height}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">

                    <rect
                        y={`${offsetYForHeight}`}
                        width={`${width}`}
                        height={`${heightLine}`}
                        rx={`${offsetYForHeight}`}
                        fill="#A4A4A4" />

                    <rect
                        className={style.ProgressBarLine}
                        y={`${offsetYForHeight}`}
                        width={`${progressLine}`}
                        height={`${heightLine}`}
                        rx={`${offsetYForHeight}`}
                        fill={progressColor}
                    />

                    <ellipse
                        className={style.ProgressBarEllipce}
                        cx={`${progressLine}`}
                        width={`${height}`}
                        height={`${height}`}
                        cy={`${heightLine}`}
                        rx={`${heightLine}`}
                        ry={`${heightLine}`}
                        fill={progressColor}
                    />
                    <text
                        x={`${progressLine}`}
                        y={`${heightLine}`}
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight='500'
                        height={`${height}`}
                        fill="#f7f7f7"
                    >{progressValue}</text>
                </svg>
                <p className={style.progressBarMaxValue}>{maxValue}&nbsp;issues</p>
            </div>
        </>
    );
};

ProgressBar.propTypes = {
    title: PropTypes.string,
    progressColor: PropTypes.string,
    maxValue: PropTypes.number,
    progressValue: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default ProgressBar;