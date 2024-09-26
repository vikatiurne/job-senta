import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Autorization/Login/Login";
import Registration from "./pages/Autorization/Registartion/Registration";
import PasswordRecovery from './pages/Autorization/PasswordRecovery/PasswordRecovery'
import NewPassword from "./pages/Autorization/NewPassword/NewPassword";

function App() {
  const {
    // Auth state:
    // error,
    // isAuthenticated,
    // isLoading,
    // user,
    // // Auth methods:
    // getAccessTokenSilently,
    // getAccessTokenWithPopup,
    // getIdTokenClaims,
    // loginWithRedirect,
    // loginWithPopup,
    // logout,
  } = useAuth0();

  // console.log(getAccessTokenSilently({detailedResponse: true}))
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="forgot-password" element={<PasswordRecovery />} />
        <Route path="recovery-password" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
