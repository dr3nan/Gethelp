import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Auth0Provider } from '@auth0/auth0-react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain='dev-j8os0w0h1wu3z3qa.eu.auth0.com'
      clientId='8EBQY9gdTw76ma7N5qa329ASRgDAFMR9'
      redirectUri={window.location.origin}
    > */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// FEATURE: Auth0
