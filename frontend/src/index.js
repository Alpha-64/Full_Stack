import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppProviders from "./AppProviders";
import {RouterProvider} from 'react-router-dom'
import DefaultRouter from "./layout/DefaultRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={DefaultRouter} />
    </AppProviders>
  </React.StrictMode>
);
