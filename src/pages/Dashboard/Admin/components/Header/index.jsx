import React from "react";
import { MenuUnfoldOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useTabContext } from "../../../../../contexts/Tab/TabContext";
const Header = () => {
  const { setIsSiderOpen } = useTabContext();
  return (
    <div className="bg-black p-3">
      <div className="md:w-[80%] mx-auto flex justify-between items-center">
        <div>
          <div
            onClick={() => setIsSiderOpen(true)}
            className="text-white text-4xl"
          >
            <MenuUnfoldOutlined />
          </div>
        </div>
        <div>
          <div className="text-white md:text-3xl text-xl font-bold">
            Admin Panel
          </div>
        </div>
        <div>
          <div className="btn-logout">
            <PoweroffOutlined /> Sign out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
