import React from 'react';
import PropTypes from 'prop-types';
import style from './WelcomeMessAndSearch.module.css'
import cn from 'classnames';
import SearchBox from '../../../../../components/UI/SearchBox/SearchBox';
const WelcomeMessAndSearch = ({ className }) => {
    return (
        <section className={cn(style.sectWelcome, className)}>
            <h1 className={style.sectWelcomeTitle}>Welcome back, Darina!</h1>
            <SearchBox/>
        </section>
    );
};

WelcomeMessAndSearch.propTypes = {
    className: PropTypes.string,
};

export default WelcomeMessAndSearch;