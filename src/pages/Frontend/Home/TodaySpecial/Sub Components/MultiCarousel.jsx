import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1500}
        infinite={true}
        itemClass="px-2"
      >
        <div className="bg-red-500 h-[200px] flex justify-center items-center text-white text-3xl font-bold w-full my-2">
          1
        </div>
        <div className="bg-blue-500 h-[200px] flex justify-center items-center text-white text-3xl font-bold w-full my-2">
          2
        </div>
        <div className="bg-green-500 h-[200px] flex justify-center items-center text-white text-3xl font-bold w-full my-2">
          3
        </div>
        <div className="bg-yellow-500 h-[200px] flex justify-center items-center text-white text-3xl font-bold w-full my-2">
          4
        </div>
        <div className="bg-purple-500 h-[200px] flex justify-center items-center text-white text-3xl font-bold w-full my-2">
          5
        </div>
        <div className="bg-pink-500 h-[200px] flex justify-center items-center text-white text-3xl font-bold w-full my-2">
          6
        </div>
      </Carousel>
      <div className="text-center my-10">
        <button className="btn-primary">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default MultiCarousel;
