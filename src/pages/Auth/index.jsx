import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Login";
import SignUp from "./Register";
import Header from "../../components/Header";
import MobileBar from "../../components/Header/MobileBar";
const Auth = () => {
  return (
    <main>
      <Routes>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </main>
  );
};

export default Auth;
