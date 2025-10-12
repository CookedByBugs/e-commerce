import React, { useEffect } from "react";
import "./App.css";
import Routes from "./pages/Routes";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAuthContext } from "./contexts/Auth/AuthContext";
const App = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <Routes />
    </div>
  );
};

export default App;
