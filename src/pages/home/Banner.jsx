import React from "react";
import banner from "/images/banner.png";
import { FaShoppingBag } from "react-icons/fa";
const Banner = () => {
  return (
    <div className=" bg-primaryBG py-12 lg:px-28 px-4 ">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-around items-center">
        <div className=" ">
          <img src={banner} alt="banner" />
        </div>
        <div className="">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can Explore many Differnt Collection From Various
            Brands Here{" "}
          </p>
          <button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
            <FaShoppingBag className=" inline-flex " />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
