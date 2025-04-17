import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home";
import PrivateRoute from './PrivateRoute'
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Route>

        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
