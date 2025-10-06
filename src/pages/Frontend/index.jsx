import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "../../components/Header";
import MobileBar from "../../components/Header/MobileBar";
const Frontend = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default Frontend;
