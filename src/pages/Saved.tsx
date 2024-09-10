import Cards from "@/components/Cards";
import FilterModal from "@/components/ui/filterModal";
import Navbar from "@/components/ui/navbar";
import HorizontalScroll from "@/components/ui/ScrollX";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen dark">
      {/* Navbar */}
      <FilterModal />
      <Navbar />
      <HorizontalScroll />

      {/* Main Content */}
      <div className="max-w-screen-2xl mt-16 w-full bg-body">
        <h1 className="p-8 text-3xl md:text-4xl text-white font-Raleway font-bold">
          Collection
        </h1>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
