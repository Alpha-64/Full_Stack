import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BrowserRouter from "react-router-dom";
// import { GoogleOAuthProvider } from '@react-oauth/google'; // Future
// import { Provider } from 'react-redux'; // Future for Redux

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID"> */}
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider> */}
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>
);
