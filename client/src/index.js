import { BrowserRouter} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
console.log(process.env.REACT_APP_AUTH0_DOMAIN);



root.render(
  <Auth0Provider
    domain="dev-fmmmwvvd5srvjy25.us.auth0.com"
    clientId="jcmuOnsYIEYensVDERbueDW9Lk2NtZlO"
    audience="https://dev-fmmmwvvd5srvjy25.us.auth0.com/api/v2/"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/user/home",
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
