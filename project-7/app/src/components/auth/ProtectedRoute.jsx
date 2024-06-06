import React from "react";
import useAuth from "../../customHooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return <>{token ? children : <Navigate to="/signin" />}</>;
};

export default ProtectedRoute;
