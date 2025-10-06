import React from "react";
import { AccountBookFilled, BuildOutlined, HomeOutlined, InfoCircleFilled, PhoneOutlined, UsergroupAddOutlined, UserOutlined } from "@ant-design/icons"

const MobileBar = () => {
  return (
    <div className="border-b-1 bg-gray-50 border-gray-400 fixed bottom-0 left-0 right-0">
      <div className="">
        <ul className="flex md:hidden justify-evenly items-center py-2 ">
          <li>
            <a className="mob-link" title="Home" ><HomeOutlined /></a>
          </li>
          <li>
            <a className="mob-link" title="Contact" ><PhoneOutlined /></a>
          </li>
          <li>
            <a className="mob-link" title="About us" ><InfoCircleFilled /></a>
          </li>
          <li>
            <a className="mob-link" title="User" ><UserOutlined /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileBar;
