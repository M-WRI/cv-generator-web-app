import React from "react";
import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from "../../../services";

interface PrivateRouteProps {
  element: React.ComponentType;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element: Element,
}) => {
  const { isAuthenticated } = useIsAuthenticated();

  return isAuthenticated ? <Element /> : <Navigate to="/" />;
};
