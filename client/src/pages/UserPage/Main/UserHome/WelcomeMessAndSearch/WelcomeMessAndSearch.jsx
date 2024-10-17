import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Search } from '../../../../../assets/user_page/home/search.svg'
import style from './WelcomeMessAndSearch.module.css'
import cn from 'classnames';
const WelcomeMessAndSearch = ({ className }) => {
    console.log(typeof className);

    return (
        <section className={cn(style.sectWelcome, className)}>
            <h1 className={style.sectWelcomeTitle}>Welcome back, Darina!</h1>
            <div className={style.sectWelcomeSearch}>
                <input type="text"
                    placeholder='Resume search'
                    className={style.sectWelcomeSearchInput}
                />
                <Search />
            </div>
        </section>
    );
};

WelcomeMessAndSearch.propTypes = {
    className: PropTypes.string,
};

export default WelcomeMessAndSearch;