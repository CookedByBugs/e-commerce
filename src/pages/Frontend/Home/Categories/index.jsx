import React from "react";
import MultiCarousel from "./Sub Components/Carousel";

const Categories = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="red-block"></div>
        <h3 className="red-block-text">Categories</h3>
      </div>
      <h1 className="heading mt-5">Browse By Category</h1>
      <hr className="text-gray-400 my-4" />
      <div>
        <MultiCarousel />
      </div>
    </div>
  );
};

export default Categories;
