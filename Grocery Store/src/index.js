import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Auth0Provider
    domain="dev-pzxo8ji8x17r653g.us.auth0.com"
    clientId="u9wAbGSQMOIWfGwgT3OAJ1ANEISbnQ89"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>

);

