import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import MultiCarousel from "./Sub Components/MultiCarousel";
const TodaySpecial = () => {
  return (
    <div className="md:my-20 my-10">
      <div className="flex items-center gap-4">
        <div className="red-block"></div>
        <h2 className="red-block-text">Today's</h2>
      </div>
      <div>
        <div className="flex justify-between items-center gap-5">
          <div className="md:flex gap-20 items-center ">
            <h2 className="heading md:my-0 my-5 ">Flash Sales</h2>
            <div className="flex justify-center items-center">
              <div className="time-container">
                <span className="">Days</span> <br />
                <span className="time-value">03</span>
              </div>
              :
              <div className="time-container">
                <span className="">Hours</span>
                <br /> <span className="time-value">23</span>
              </div>
              :
              <div className="time-container">
                <span className="">Minutes</span>
                <br /> <span className="time-value">19</span>
              </div>
              :
              <div className="time-container">
                <span>Seconds</span> <br />
                <span className="time-value">39</span>
              </div>
            </div>
          </div>
        </div>
        <MultiCarousel />
      </div>
    </div>
  );
};

export default TodaySpecial;
