import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./Login";
import SignUp from "./Register";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import Header from "../../components/Header";
import MobileBar from "../../components/Header/MobileBar";
const Auth = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
      <MobileBar />
    </main>
  );
};

export default Auth;
