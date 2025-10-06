import React from "react";
import Sider from "./Hero/Sider";
import { Col, Row } from "antd";
import Carousel from "./Hero/Carousel";
import TodaySpecial from "./TodaySpecial/TodaySpecial";
import Hero from "./Hero/Hero";
import Categories from "./Categories";
import BestSelling from "./BestSelling/BestSelling";
import OurProducts from "./OurProducts/OurProducts";

const Home = () => {
  
  return (
    <div className="md:max-w-[80%] w-[95%]  mx-auto">
      <Hero />
      <TodaySpecial />
      <hr className="my-10 text-gray-400" />
      <Categories />
      <hr className="my-10 text-gray-400" />
      <BestSelling />
      <hr className="my-10 text-gray-400" />
      <OurProducts />
    </div>
  );
};

export default Home;
