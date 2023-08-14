import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
   <Auth0Provider
     domain="dev-koz3ivhq2dj0py06.us.auth0.com"
     clientId="QYOoHQjJsEc3Lbbw02IIIlZeynCS4XVi"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}
   >
  <App/>
  </Auth0Provider>
       </Router>
   </React.StrictMode>
);

reportWebVitals();
