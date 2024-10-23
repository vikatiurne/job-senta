import PropTypes from 'prop-types';
import style from './WelcomeMessAndSearch.module.css'
import cn from 'classnames';
import SearchBox from '../../../../../components/UI/SearchBox/SearchBox';
import { useAuth0 } from '@auth0/auth0-react';


const WelcomeMessAndSearch = ({ className }) => {
    console.log(typeof className);

    const { user } = useAuth0()

    return (
        <section className={cn(style.sectWelcome, className)}>
            <h1 className={style.sectWelcomeTitle}>Welcome back, {user?.given_name || 'Darina'}!</h1>
            <SearchBox/>
        </section>
    );
};

WelcomeMessAndSearch.propTypes = {
    className: PropTypes.string,
};

export default WelcomeMessAndSearch;