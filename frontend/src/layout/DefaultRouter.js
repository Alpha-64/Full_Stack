import React from "react";
import MainLayout from "./MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import DashboardLayout from "./DashboardLayout";
import AdminDashboard from "../Dashboard/AdminDashboard";
import Contact from "../pages/Contact";
import ProtectedRoute from "../components/ProtectedRoute";

const DefaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [{ index: true, element: <AdminDashboard /> }],
  },
]);

export default DefaultRouter;
