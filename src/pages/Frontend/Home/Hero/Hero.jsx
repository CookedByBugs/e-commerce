import React from "react";
import Carousel from "./Carousel";
import Sider from "./Sider";
import { Col, Row } from "antd";

const Hero = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col
          xl={6}
          lg={6}
          md={6}
          sm={0}
          xs={0}
          className="border-r-1 !pt-3 border-gray-400"
        >
          <Sider />
        </Col>
        <Col xl={18} lg={18} md={18} sm={24} xs={24}>
          <Carousel />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
