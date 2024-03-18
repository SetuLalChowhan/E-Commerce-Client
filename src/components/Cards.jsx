import React from "react";
import { Link } from "react-router-dom";

const Card = ({ filterItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 items-center justify-center shadow-sm">
      {filterItems.slice(0, 8).map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              className="mx-auto w-full hover:scale-105 transition-all duration-300"
            />
          </Link>
          <div>
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>
            <div className="flex justify-between">
              <p className="text-black/50">{item.category}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
