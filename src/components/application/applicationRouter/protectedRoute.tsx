import React from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { getToken } from "../../../utils/token/token";

const getAuth = (): any => {
  let loggedIn = false;

  try {
    const token = getToken();
    const userData = token ? jwtDecode(token) : null;
    if (userData) loggedIn = true;
  } catch (err) {
    console.error(err);
  }

  return loggedIn;
};

type ProtectedRouteProps = {
  children: React.ReactElement;
  to?: string;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  to
}) => {
  if (getAuth()) {
    return children;
  }

  return <Navigate to={to || "/login"} replace />;
};
