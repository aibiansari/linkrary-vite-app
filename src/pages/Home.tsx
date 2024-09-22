import Cards from "@/components/ui/Cards";
import CategoryModal from "@/components/ui/categoryModal";
import { useCategoryContext } from "@/contexts/useCategoryContext";
import { useThemeContext } from "@/contexts/useThemeContext";
import FilterModal from "@/components/ui/filterModal";
import Navbar from "@/components/ui/navbar";
import HorizontalScroll from "@/components/ui/ScrollX";
import React from "react";

const Home: React.FC = () => {
  const { theme } = useThemeContext();
  const { setSelectedCategory } = useCategoryContext();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelectedCategory("All Apps");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`flex flex-col items-center min-h-screen pb-4 mb-1 bg-white dark:bg-body transition-colors duration-500 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <FilterModal />
      <CategoryModal />
      <Navbar page="search" />
      <HorizontalScroll />
      <div className="max-w-screen-2xl mt-16 w-full">
        <h1 className="p-8 mt-2 text-3xl md:text-4xl text-black dark:text-white font-Raleway font-bold transition-colors duration-500">
          Discover
        </h1>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
