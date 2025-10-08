import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/Auth/AuthContext";

const ProtectedDashboard = ({ Component }) => {
  const { user } = useAuthContext();
  if (user?.role !== "admin") return <Navigate to={"/"} replace />;
  return <Component />;
};

export default ProtectedDashboard;
