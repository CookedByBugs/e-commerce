import React, { useState } from "react";
import {
  AccountBookFilled,
  BuildOutlined,
  HomeOutlined,
  InfoCircleFilled,
  PhoneOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import Menu from "./sub compnents/menu";
import { useNavigate, Link } from "react-router-dom";

const MobileBar = () => {
  const { isAuth, user, handleSignout } = useAuthContext();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="border-b-1 bg-gray-50 border-gray-400 fixed bottom-0 left-0 right-0">
      <div className="">
        <ul className="flex md:hidden justify-evenly items-center py-2 ">
          <li>
            <Link to="/" className="mob-link" title="Home">
              <HomeOutlined />
            </Link>
          </li>
          <li>
            <a className="mob-link" title="Contact">
              <PhoneOutlined />
            </a>
          </li>
          <li>
            <Link to="/about" className="mob-link" title="About us">
              <InfoCircleFilled />
            </Link>
          </li>
          <li>
            {isAuth ? (
              <a
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                title={user.fullName}
                className="relative bg-red-500 rounded-full px-2 py-1 text-white cursor-pointer select-none"
              >
                {JSON.stringify(user.fullName).split("")[1]}
                {isMenuOpen && (
                  <div className="absolute !z-50 bottom-10 right-0 px-5 py-3 w-[250px] bg-black/40 backdrop-blur-2xl rounded">
                    <div>
                      <div className="my-1">Manage My Account</div>
                      <div className="my-1">Dashboard</div>
                      <div className="my-1" onClick={handleSignout}>
                        Sign out
                      </div>
                    </div>
                  </div>
                )}
              </a>
            ) : (
              <li>
                <a className="mob-link" title="User">
                  <UserOutlined />
                </a>
              </li>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileBar;
