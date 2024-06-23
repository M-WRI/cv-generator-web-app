import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface PrivateRouteProps {
  element: React.ComponentType;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element: Element,
}) => {
  const isAuthenticated = !!Cookies.get("token");
  return isAuthenticated ? <Element /> : <Navigate to="/" />;
};