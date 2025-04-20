import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppProviders from "./AppProviders";
import {RouterProvider} from 'react-router-dom'
import DefailtRouter from "./layout/DefailtRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={DefailtRouter} />
    </AppProviders>
  </React.StrictMode>
);
