import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "../../components/Header";
import MobileBar from "../../components/Header/MobileBar";
import About from "./About";
const Frontend = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <MobileBar />
    </main>
  );
};

export default Frontend;
