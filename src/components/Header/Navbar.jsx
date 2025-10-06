import React, { useState } from "react";
import { Input } from "antd";
import {
  CloseOutlined,
  HeartOutlined,
  HomeOutlined,
  PoweroffOutlined,
  ShopFilled,
  ShoppingCartOutlined,
  ShoppingOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
const Navbar = () => {
  const { isAuth, user, handleSignout } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="py-6 border-gray-400 border-b-1">
      <div className="md:max-w-[80%] w-[95%] mx-auto">
        <div className="flex justify-between items-center h-full">
          <div className="font-semibold md:text-3xl text-lg lg:block hidden">
            ShopVerse <ShopFilled />
          </div>
          <div className="font-semibold md:text-3xl text-2xl lg:hidden">
            <ShopFilled />
          </div>
          <div className="">
            <div>
              <ul className="md:flex gap-4 hidden ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                {!isAuth ? (
                  <li>
                    <Link to="/auth/sign-up">Sign Up</Link>
                  </li>
                ) : null}
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
            {isAuth ? (
              <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                title={user.fullName}
                className="relative bg-red-500 rounded-full px-2 py-1 text-white cursor-pointer select-none"
              >
                {JSON.stringify(user.fullName).split("")[1]}
                {isMenuOpen && (
                  <div className="absolute z-10 top-10 -left-55 px-5 py-3 w-[250px] bg-black/40 backdrop-blur-2xl rounded">
                    <ul>
                      <li>
                        <a
                          className="select-none block my-2 font-semibold"
                          href=""
                        >
                          <UserOutlined /> Manage My Account
                        </a>
                      </li>
                      <li>
                        <a
                          className="select-none block my-2 font-semibold"
                          href=""
                        >
                          <ShoppingOutlined /> My Order
                        </a>
                      </li>
                      <li>
                        <a
                          className="select-none block my-2 font-semibold"
                          href=""
                        >
                          <CloseOutlined /> My Cancellations
                        </a>
                      </li>
                      <li>
                        <a
                          className="select-none block my-2 font-semibold"
                          href=""
                        >
                          <StarOutlined /> My Reviews
                        </a>
                      </li>
                      <li>
                        <a
                          className="select-none block my-2 font-semibold"
                          href=""
                          onClick={handleSignout}
                        >
                          <PoweroffOutlined /> Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
