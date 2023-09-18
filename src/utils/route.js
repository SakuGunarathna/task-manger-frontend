import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const PrivateRoute = () => {
  const isAuth = isAuthenticated();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
