import App from "./App";
import { BrowserRouter} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";

import { store } from "./app/store";

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
        redirect_uri: `${process.env.REACT_APP_URL}/user/home`,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);
