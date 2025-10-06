import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Slider } from "react-responsive-carousel";
import Img1 from "../../../../assets/banner/Slider1.png";
import Img2 from "../../../../assets/banner/Slider2.png";
import Img3 from "../../../../assets/banner/Slider3.png";

const Carousel = () => {
  return (
    <Slider className="md:ps-5 pt-5 mx-auto" autoPlay interval={1500} showStatus={false} showThumbs={false} swipeable infiniteLoop>
      <div className="">
        <img className="select-none object-fit w-full lg:h-[350px] sm:w-full h-[100px]" src={Img1} />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div className="">
        <img className="select-none object-fit w-full lg:h-[350px] sm:w-full h-[100px]" src={Img2} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div className="">
        <img className="select-none object-fit w-full lg:h-[350px] sm:w-full h-[100px]" src={Img3} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Slider>
  );
};

export default Carousel;
