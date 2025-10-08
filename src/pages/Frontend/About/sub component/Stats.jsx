import React, { useState } from "react";
import {
  DollarCircleFilled,
  DollarCircleOutlined,
  ShopOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
const Stats = () => {
  const [hover, setHover] = useState(null);
  const data = [
    {
      id: 1,
      icon: ShopOutlined,
      title: "Sellers active our site",
      value: "10.5k",
    },
    {
      id: 2,
      icon: DollarCircleOutlined,
      title: "Monthly product sale",
      value: "33k",
    },
    {
      id: 3,
      icon: ShoppingOutlined,
      title: "Customer active in our site",
      value: "45.5k",
    },
    {
      id: 4,
      icon: DollarCircleFilled,
      title: "Annual gross sale in our site",
      value: "25k",
    },
  ];

  const changeHoverState = (id) => {
    setHover(id);
  };

  return (
    <div className="mt-40 mx-auto  max-w-[80%]">
      <Row gutter={[16, 16]}>
        {data.map((d, i) => {
          return (
            <Col lg={6} md={12} xs={24} sm={24} key={i}>
              <div
                onMouseLeave={() => changeHoverState(0)}
                onMouseEnter={() => changeHoverState(d.id)}
                className={`text-center ${
                  hover == d.id && "bg-red-500"
                }  border rounded-lg transition-150`}
              >
                <div
                  className={`${
                    hover == d.id ? "bg-white/40" : "bg-gray-400"
                  } transition-150 w-[100px] mx-auto flex justify-center items-center my-5 h-[100px] rounded-full `}
                >
                  <div
                    className={`${
                      hover == d.id ? "bg-white" : "bg-black text-white"
                    } transition-150 w-[70px] mx-auto flex justify-center items-center h-[70px] rounded-full `}
                  >
                    <d.icon className="text-4xl mx-auto" />
                  </div>
                </div>
                <h2
                  className={`text-4xl font-bold ${
                    hover == d.id && "text-white"
                  }`}
                >
                  {d.value}
                </h2>
                <p className={`${hover == d.id && "text-white"} text-lg`}>
                  {d.title}
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Stats;
