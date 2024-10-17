import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage.jsx";
import Login from "../pages/Autorization/Login/Login.jsx";
import Registration from "../pages/Autorization/Registartion/Registration.jsx";
import PasswordRecovery from "../pages/Autorization/PasswordRecovery/PasswordRecovery.jsx";
import NewPassword from "../pages/Autorization/NewPassword/NewPassword.jsx";
import UserPage from "../pages/UserPage/UserPage.jsx";
import { AnimatePresence } from "framer-motion";

export default () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/forgot-password" element={<PasswordRecovery />} />
                <Route path="/recovery-password" element={<NewPassword />} />
                <Route path="/user/*" element={< UserPage />} />
            </Routes>
        </AnimatePresence>
    );
};

