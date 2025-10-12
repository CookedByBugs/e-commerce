import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./sub component/Hero";
import Stats from "./sub component/Stats";
import Team from "./sub component/Team";
import Services from "./sub component/Services";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mx-auto w-[80%] my-10">
        <span
          onClick={() => navigate("/")}
          className="text-gray-400 select-none cursor-pointer"
        >
          Home /
        </span>{" "}
        About
      </div>
      <Hero />
      <Stats />
      <Team />
      <Services />
    </div>
  );
};

export default About;
