import React from "react";
import {
  CustomerServiceOutlined,
  SafetyCertificateOutlined,
  TruckFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";
const Services = () => {
  const data = [
    {
      id: 1,
      icon: TruckFilled,
      title: "FREE AND FAST DELIVERY",
      subline: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: CustomerServiceOutlined,
      title: "24/7 CUSTOMER SERVICE",
      subline: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: SafetyCertificateOutlined,
      title: "MONEY BACK GUARANTEE",
      subline: "We return money in 30 days",
    },
  ];

  return (
    <div className="w-[80%] mx-auto ">
      <div className="">
        <Row gutter={[16, 16]} className="!w-full ">
          {data.map((d) => {
            return (
              <Col lg={8} md={12} sm={24} xs={24} className="" key={d.id}>
                <div className="p-3 rounded flex items-center flex-col">
                  <div className="w-[110px] h-[110px] bg-gray-400 rounded-full flex justify-center items-center">
                    <div className="w-[80px] text-white h-[80px] text-4xl bg-black rounded-full flex justify-center items-center">
                      <d.icon />
                    </div>
                  </div>
                  <p className="mt-10 mb-2 font-bold text-3xl">{d.title}</p>
                  <p className="text-xl">{d.subline}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Services;
