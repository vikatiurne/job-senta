import { Routes, Route } from 'react-router-dom';

import UserHome from '../Main/UserHome/UserHome.jsx';

const UserRoutes = () => {
    return (
        <Routes>
            <Route path='home' element={<UserHome />} />
            <Route path='builder' />
            <Route path='analyse' />
            <Route path='contact' />
            <Route path='settings' />
        </Routes>
    )
};

UserRoutes.propTypes = {};

export default UserRoutes;