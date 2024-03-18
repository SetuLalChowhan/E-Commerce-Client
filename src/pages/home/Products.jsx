import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterdItems, setFilterItems] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchDaata = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
        setFilterItems(data);
      } catch (err) {
        console.log("error fetching Data", err);
      }
    };

    fetchDaata();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilterItems(filtered);
    setSelectCategory(category);
    setSortOption("default")
  };

  const showAll = () => {
    setFilterItems(products);
    setSelectCategory("all");
    setSortOption("default")
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filterdItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;

      case "low-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }
    setFilterItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto  px-4 mb-12 ">
      <h2 className="text-3xl font-semibold capitalize text-center my-8">
        Or subscribe to The Newsletter
      </h2>

      <div>
        <div className=" flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={()=>{showAll()}}>All Products</button>
            <button
              onClick={() => {
                filterItems("Dress");
              }}
            >
              Clothing
            </button>
            <button
              onClick={() => {
                filterItems("Hoodies");
              }}
            >
              Hoodies
            </button>
            <button
              onClick={() => {
                filterItems("Bag");
              }}
            >
              Bag
            </button>
          </div>
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-Black p-2 ">
              <FaFilter className=" text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => {
                handleSortChange(e.target.value);
              }}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>
        </div>
        <div>
          <Cards filterItems={filterdItems} />
        </div>
      </div>
    </div>
  );
};

export default Products;
