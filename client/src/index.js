import { BrowserRouter} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import "./index.css";
import ModalProvider from "./context/ModalContext.jsx";


const root = createRoot(document.getElementById("root"));
console.log(process.env.REACT_APP_AUTH0_DOMAIN);

const portalDiv = document.createElement('div')
portalDiv.id = 'portal'
document.body.append(portalDiv)


root.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-fmmmwvvd5srvjy25.us.auth0.com"
      clientId="jcmuOnsYIEYensVDERbueDW9Lk2NtZlO"
      // audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      authorizationParams={{
        redirect_uri: "http://localhost:3000/user/home",
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);
