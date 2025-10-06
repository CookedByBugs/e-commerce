import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItems from "./carouselItems.json";
import * as Icons from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MultiCarousel = () => {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
        {CarouselItems.map((card, i) => {
          const IconComponent = Icons[card.icon];
          return (
            <div
              key={i}
              onClick={()=>navigate(card.path)}
              className="min-h-200px w-full border border-gray-400 rounded bg-gray-100 cursor-pointer hover:bg-red-500 hover:!text-white transition-all duration-150"
            >
              <div className="text-7xl text-center p-5">
                {IconComponent && <IconComponent style={{ marginRight: 8 }} />}
              </div>
              <p className="text-2xl text-center">{card.name}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MultiCarousel;
