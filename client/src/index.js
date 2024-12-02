import { BrowserRouter  } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import ModalProvider from "./context/ModalContext";
import "./index.css";

const root = createRoot(document.getElementById("root"));

const portalDiv = document.createElement('div')
portalDiv.id = 'portal'
document.body.append(portalDiv)


root.render(
  <Provider store={store}>

    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      authorizationParams={{
        redirect_uri: "http://localhost:5000/api/auth/login/callback",
        // redirect_uri: `${process.env.REACT_APP_API_URL}/callback`,
      }}
    >
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Auth0Provider>
  </Provider>
);