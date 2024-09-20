import Cards from "@/components/ui/Cards";
import CategoryModal from "@/components/ui/categoryModal";
import FilterModal from "@/components/ui/filterModal";
import Navbar from "@/components/ui/navbar";
import HorizontalScroll from "@/components/ui/ScrollX";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen pb-4 mb-1 dark bg-body">
      <FilterModal />
      <CategoryModal />
      <Navbar page="search" />
      <HorizontalScroll />
      <div className="max-w-screen-2xl mt-16 w-full">
        <h1 className="p-8 mt-2 text-3xl md:text-4xl text-white font-Raleway font-bold">
          Discover
        </h1>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
