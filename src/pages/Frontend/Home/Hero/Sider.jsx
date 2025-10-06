import React from "react";
import { useNavigate } from "react-router-dom";
import sideLinks from "./siderLink.json";
const Sider = () => {
  const navigate = useNavigate();
  return (
    <div>
      {sideLinks.map((link, i) => (
        <p
          key={i}
          onClick={() => navigate(link.path)}
          className="lg:text-xl py-2"
        >
          <a className="!text-black hover:ps-1 !transition-all !duration-100">
            {link.name + " >"}
          </a>
        </p>
      ))}
    </div>
  );
};

export default Sider;
