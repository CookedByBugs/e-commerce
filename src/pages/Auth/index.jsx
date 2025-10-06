import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./Login";
import SignUp from "./Register";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
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
