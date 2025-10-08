import React from "react";
import {
  CloseOutlined,
  PoweroffOutlined,
  ShoppingOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
const Menu = () => {
  const { handleSignout, user } = useAuthContext();

  switch (user.role) {
    case "admin":
      return (
        <ul>
          <li>
            <a className="select-none block my-4 font-semibold" href="">
              <UserOutlined /> Manage My Account
            </a>
          </li>
          <li>
            <a className="select-none block my-4 font-semibold" href="">
              <StarOutlined /> Dashboard
            </a>
          </li>
          <li>
            <a
              className="select-none block my-4 font-semibold"
              href=""
              onClick={handleSignout}
            >
              <PoweroffOutlined  /> Sign out
            </a>
          </li>
        </ul>
      );
    default:
      return (
        <div>
          <ul>
            <li>
              <a className="select-none block my-2 font-semibold" href="">
                <UserOutlined /> Manage My Account
              </a>
            </li>
            <li>
              <a className="select-none block my-2 font-semibold" href="">
                <ShoppingOutlined /> My Order
              </a>
            </li>
            <li>
              <a className="select-none block my-2 font-semibold" href="">
                <CloseOutlined /> My Cancellations
              </a>
            </li>
            <li>
              <a className="select-none block my-2 font-semibold" href="">
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
      );

      break;
  }
};

export default Menu;
