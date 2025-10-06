import React from "react";
import { Route, Routes } from "react-router-dom";
import Frontend from "./Frontend";
import Auth from "./Auth";
import ProtectedAuth from "../components/ProtectedAuth";

const Index = () => {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="/auth/*" element={<ProtectedAuth Component={Auth} />} />
    </Routes>
  );
};

export default Index;
