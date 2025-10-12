import React from "react";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import Admin from "./Admin";

const Dashboard = () => {
  const { user } = useAuthContext();

  switch (user.role) {
    case "admin":
      return <Admin />;
    default:
      return <p>UNAUTHORIZED</p>;
  }
};

export default Dashboard;
