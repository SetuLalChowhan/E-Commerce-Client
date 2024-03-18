import React from "react";
import { Link } from "react-router-dom";

const companyLogo = [
  { id: 1, img: "/images/company/01.png" },
  { id: 2, img: "/images/company/03.png" },
  { id: 3, img: "/images/company/04.png" },
  { id: 4, img: "/images/company/brand-4.png" },
  { id: 5, img: "/images/company/05.png" },
];

const Category = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto container  px-4  ">
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="id" />
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4 ">
        <p className="font-semibold uppercase md:-rotate-90 text-center bg-Black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          {" "}
          Explore new and popular styles{" "}
        </p>
        <div>
          <Link to="/">
            <img
              src="/images/category/img-1.png"
              className=" w-full hover:scale-105 transition-all duration-200 "
              alt=""
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src="/images/category/img-2.png"
                className=" w-full hover:scale-105 transition-all duration-200 "
                alt=""
              />
            </Link>
            <Link to="/">
              <img
                src="/images/category/img-3.png"
                className=" w-full hover:scale-105 transition-all duration-200 "
                alt=""
              />
            </Link>
            <Link to="/">
              <img
                src="/images/category/img-4.png"
                className=" w-full hover:scale-105 transition-all duration-200 "
                alt=""
              />
            </Link>
            <Link to="/">
              <img
                src="/images/category/img-5.png"
                className=" w-full hover:scale-105 transition-all duration-200 "
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
