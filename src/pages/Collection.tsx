import Cards from "@/components/ui/Cards";
import CategoryModal from "@/components/ui/categoryModal";
import FilterModal from "@/components/ui/filterModal";
import Navbar from "@/components/ui/navbar";
import HorizontalScroll from "@/components/ui/ScrollX";
import React from "react";
import { Link } from "react-router-dom";

const Collection: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pb-4 mb-1 dark bg-body">
      <FilterModal />
      <CategoryModal />
      <Navbar page="search" />
      <HorizontalScroll />
      <div className="max-w-screen-2xl mt-16 w-full">
        <div className="flex mt-2 items-center md:gap-3">
          <h1 className="p-8 text-3xl md:text-4xl text-white font-Raleway font-bold">
            Collection
          </h1>
          <Link
            to="/Linkrary/"
            className="text-sm md:text-base py-2 px-3 font-Raleway bg-neutral-800 hover:bg-element transition-colors duration-200 rounded-full text-neutral-200 font-semibold"
          >
            Go to Home
          </Link>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default Collection;
