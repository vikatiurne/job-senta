import PropTypes from 'prop-types';
import style from './WelcomeMessAndSearch.module.css'
import cn from 'classnames';
import Search from './Search/Search.jsx';
import { useAuth0 } from '@auth0/auth0-react';


const WelcomeMessAndSearch = ({ className }) => {

    const { user } = useAuth0()

    return (
        <section className={cn(style.sectWelcome, className)}>
            <h1 className={style.sectWelcomeTitle}>Welcome back, {user?.given_name || 'Darina'}!</h1>
            <Search />
        </section>
    );
};

WelcomeMessAndSearch.propTypes = {
    className: PropTypes.string,
};

export default WelcomeMessAndSearch;