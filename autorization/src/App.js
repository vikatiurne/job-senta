import { useAuth0 } from "@auth0/auth0-react";

import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import Container from "./hoc/layout/container/Container";

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
    <Container>
      <AnimatedRoutes />
    </Container>
  );
}

export default App;
