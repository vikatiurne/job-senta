import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import Login from "../../pages/Autorization/Login/Login";
import Registration from "../../pages/Autorization/Registartion/Registration";
import PasswordRecovery from "../../pages/Autorization/PasswordRecovery/PasswordRecovery";
import NewPassword from "../../pages/Autorization/NewPassword/NewPassword";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation()
    
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgot-password" element={<PasswordRecovery />} />
        <Route path="/recovery-password" element={<NewPassword />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
