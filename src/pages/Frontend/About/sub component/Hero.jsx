import React from "react";
import img from "../../../../assets/about.png";
import { Col, Row } from "antd";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[95%] mx-auto">
        <Row gutter={[16, 16]}>
          <Col
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className=" !flex !justify-center !items-center"
          >
            <div className="max-w-[600px]">
              <h2 className="md:text-5xl text-3xl font-semibold mb-12">
                Our Story
              </h2>
              <p className="md:text-xl">
                Launched in 2015, Exclusive is South Asia’s premier online
                shopping marketplace with an active presence in Bangladesh.
                Supported by a wide range of tailored marketing, data, and
                service solutions, Exclusive has 10,500 sellers and 300 brands,
                and serves 3 million customers across the region.
              </p>
              <br />
              <p className="md:text-xl">
                Exclusive has more than 1 million products to offer and is
                growing very fast. Exclusive offers a diverse assortment of
                categories ranging from consumer goods to many more.
              </p>
            </div>
          </Col>
          <Col
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className=" !flex !justify-center !items-center"
          >
            <img src={img} alt="image" className=" w-[400px] lg:w-full" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
