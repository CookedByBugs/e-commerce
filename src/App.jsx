import React, { useEffect } from "react";
import "./App.css";
import Routes from "./pages/Routes";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import MobileBar from "./components/Header/MobileBar";
import { useAuthContext } from "./contexts/Auth/AuthContext";
const App = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 2000,
    });
  }, []);
  const { data } = useAuthContext();
  console.log("data:", data?.user);
  return (
    <div>
      <Header />
      <Routes />
      <MobileBar />
    </div>
  );
};

export default App;
