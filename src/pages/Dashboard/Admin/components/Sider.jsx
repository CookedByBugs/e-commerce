import React from "react";
import {
  DesktopOutlined,
  MenuFoldOutlined,
  ShopFilled,
  ShoppingFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
const Sider = () => {
  const { isSiderOpen, setIsSiderOpen } = useTabContext();
  const location = useLocation();
  const buttons = [
    {
      id: 1,
      title: "Dashboard",
      path: "/dashboard",
      icon: DesktopOutlined,
    },
    {
      id: 2,
      title: "My Profile",
      path: "/dashboard/profile",
      icon: UserOutlined,
    },
    {
      id: 3,
      title: "My Products",
      path: "/dashboard/products",
      icon: ShoppingFilled,
    },
  ];

  return (
    <div
      className={`bg-black max-w-[300px] fixed rounded-e-lg h-screen  transition-300 ${
        isSiderOpen ? "w-full" : "w-0"
      }`}
    >
      <div className="md:text-xl py-5">
        <div
          className={`${
            !isSiderOpen && "hidden"
          } text-white text-4xl mb-3 flex items-center justify-between px-3`}
        >
          <MenuFoldOutlined
            onClick={() => setIsSiderOpen(false)}
            className="cursor-pointer !text-white rounded"
          />
          <p className="text-2xl font-semibold">ShopVerse</p>
          {/* <ShopFilled /> */}
        </div>
        <div className={`mt-2 ${!isSiderOpen ? "hidden" : "block"}`}>
          {buttons.map((btn) => {
            const isActive = location.pathname == btn.path;
            return (
              <Link
                to={btn.path}
                key={btn?.id}
                className={`hover:bg-white rounded p-3 m-2 flex items-center gap-2 transition-300 ${
                  isActive ? "bg-white" : "bg-white/80"
                }`}
              >
                <btn.icon />
                <p>{btn?.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sider;
