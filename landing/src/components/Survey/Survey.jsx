import React from 'react';
import Container from '../../hoc/layout/Container/Container';
import style from './Survey.module.css'
const Survey = () => {
    return (
        <section className={style.sectionSurvey}>
            <Container>
                <h1 className={style.sectionSurveyTitle}>
                    Your Experience – Our Future!
                    Help Us Improve!
                </h1>
                <a className={style.sectionSurveyLink}
                    href='https://docs.google.com/forms/d/e/1FAIpQLScHDtwnJ1OOcczeNRgrseQJUmJ2quQHiLWtLaffk-g7Kw_WDw/viewform'
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    Take a survey
                </a>
            </Container>
        </section>
    );
};


export default Survey;