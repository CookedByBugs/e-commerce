import React from "react";
import { useAuthContext } from "../contexts/Auth/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedAuth = ({ Component }) => {
  const navigate = useNavigate();
  const { isAuth } = useAuthContext();
  if (isAuth) return <Navigate to={"/"} replace />;

  return <Component />;
};

export default ProtectedAuth;
