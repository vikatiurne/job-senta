import React from 'react';
import style from './UserPage.module.css'
import Navigation from './Navigation/Navigation.jsx';
import Main from './Main/Main.jsx';
import Container from '../../hoc/layout/container/Container.jsx';

const UserPage = () => {
    return <>
        <Container>
            <div className={style.userPageWrap}>
                <Navigation />
                <Main />
            </div>
        </Container>

    </>;
};

UserPage.propTypes = {};

export default UserPage;