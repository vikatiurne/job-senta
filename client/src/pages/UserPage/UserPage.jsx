import React from 'react';
import style from './UserPage.module.css'
import Navigation from './Navigation/Navigation.jsx';
import Main from './Main/Main.jsx';


const UserPage = () => {
    return <>

        <div className={style.userPageWrap}>
            <Navigation />
            <Main />
        </div>

    </>;
};

UserPage.propTypes = {};

export default UserPage;