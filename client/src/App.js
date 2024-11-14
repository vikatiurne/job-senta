import { useAuth0 } from "@auth0/auth0-react";

// import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import RootRouter from "./router/Router.jsx";

function App() {
  const {
    // Auth state:
    // error,
    // isAuthenticated,
    // isLoading,
    user,
    // // Auth methods:
    // getAccessTokenSilently,
    // getAccessTokenWithPopup,
    // getIdTokenClaims,
    // loginWithRedirect,
    // loginWithPopup,
    // logout,
  } = useAuth0();
  console.log('user Auth0:',user)

  // console.log(getAccessTokenSilently({detailedResponse: true}))
  return (

    // <AnimatedRoutes />
    <RootRouter />


  );
}

export default App;
