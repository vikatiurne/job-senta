import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

// import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import RootRouter from "./router/Router.jsx";
import { fetchAutoLogin } from "./pages/Autorization/AuthSlice.js";

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const token = localStorage.getItem("_jobseeker");
    if (!!token) dispatch(fetchAutoLogin());
  }, [dispatch]);

  const {
    // Auth state:
    // error,
    isAuthenticated,
    // isLoading,
    // user,
    // // Auth methods:
    getAccessTokenSilently,
    // getAccessTokenWithPopup,
    // getIdTokenClaims,
    // loginWithRedirect,
    // loginWithPopup,
    // logout,
  } = useAuth0();
  console.log('user Auth0:',isAuthenticated)

//   const fetchToken = async () => {  
//     try {  
//         const accessToken = await getAccessTokenSilently();  
//         console.log(accessToken);  
//     } catch (error) {  
//         console.error('Ошибка при получении токена', error);  
//     }  
// };  
//   console.log(fetchToken())

  return (

    // <AnimatedRoutes />
    <RootRouter />


  );
}

export default App;
