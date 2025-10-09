import React from "react";
import {
  CustomerServiceOutlined,
  SafetyCertificateOutlined,
  TruckFilled,
} from "@ant-design/icons";
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
    <div>
      <div>
        {data.map((d, i) => {
          return <div key={d.id}></div>;
        })}
      </div>
    </div>
  );
};

export default Services;
