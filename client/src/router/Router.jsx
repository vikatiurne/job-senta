import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "../pages/HomePage/HomePage.jsx";
import Login from "../pages/Autorization/Login/Login.jsx";
import Registration from "../pages/Autorization/Registartion/Registration.jsx";
import PasswordRecovery from "../pages/Autorization/PasswordRecovery/PasswordRecovery.jsx";
import NewPassword from "../pages/Autorization/NewPassword/NewPassword.jsx";
import UserPage from "../pages/UserPage/UserPage.jsx";
import UnprotectedRouter from "./hoc/UnprotectedRouter.jsx";
import ProtectedRouter from "./hoc/ProtectedRoute.jsx";
import Redirect from "../pages/Autorization/Redirect/Redirect.jsx";

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <UnprotectedRouter>
              <HomePage />
            </UnprotectedRouter>
          }
        />
        <Route
          path="/login"
          element={
            <UnprotectedRouter>
              <Login />
            </UnprotectedRouter>
          }
        />
        <Route path="/get-sosial-user" element={<Redirect />} />
        <Route
          path="/registration"
          element={
            <UnprotectedRouter>
              <Registration />
            </UnprotectedRouter>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <UnprotectedRouter>
              <PasswordRecovery />
            </UnprotectedRouter>
          }
        />
        <Route
          path="/recovery-password/:link"
          element={
            <UnprotectedRouter>
              <NewPassword />
            </UnprotectedRouter>
          }
        />
        <Route
          path="/user/*"
          element={
            <ProtectedRouter>
              <UserPage />
            </ProtectedRouter>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
