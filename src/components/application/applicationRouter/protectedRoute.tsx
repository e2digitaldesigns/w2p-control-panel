import React from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useToken } from "../../../hooks";

const getAuth = (getToken: () => string | null): boolean => {
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
  const { getToken } = useToken();

  if (getAuth(getToken)) {
    return children;
  }

  return <Navigate to={to || "/login"} replace />;
};
