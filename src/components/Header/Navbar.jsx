import React from "react";
import { Input } from "antd";
import {
  HeartOutlined,
  HomeOutlined,
  ShopFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="py-6 border-gray-400 border-b-1">
      <div className="md:max-w-[80%] w-[95%] mx-auto">
        <div className="flex justify-between items-center h-full">
          <div className="font-semibold md:text-3xl text-lg lg:block hidden">ShopVerse <ShopFilled /></div>
          <div className="font-semibold md:text-3xl text-2xl lg:hidden"><ShopFilled /></div>
          <div className="">
            <div>
              <ul className="md:flex gap-4 hidden ">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <Link to="/auth/sign-up">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Input.Search size="middle" placeholder="Search" />
            </div>
            <div className="text-2xl">
              <HeartOutlined />
            </div>
            <div className="text-2xl">
              <ShoppingCartOutlined />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
