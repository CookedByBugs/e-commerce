import React from "react";
import { Col, Row } from "antd";
import Img from "../../../../assets/banner/Slider3.png";

const BestSelling = () => {
  return (
    <div>
      <div className="flex items-center gap-4 my-5">
        <div className="red-block"></div>
        <div className="red-block-text">This Month</div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="heading my-5">Best Selling Products</h2>
        <button className="btn-primary !px-5">View All</button>
      </div>
      <Row>
        <Col span={8}>
          <div className="p-4">
            <div className="bg-gray-100 h-[200px] rounded"></div>
            <h5 className="text-xl">The North Coat</h5>
            <p className="text-red-500 font-semibold">$ 99</p>
          </div>
        </Col>
      </Row>
      <div className="my-20 mx-auto">
        <img src={Img} alt="" className="rounded w-full" />
      </div>
    </div>
  );
};

export default BestSelling;
