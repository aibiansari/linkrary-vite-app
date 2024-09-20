import { useRef } from "react";
import { useFilterButtonContext } from "@/contexts/useFilterButtonContext";
import { useCategoryContext } from "@/contexts/useCategoryContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import {
  FaVideo,
  FaGamepad,
  FaBook,
  FaHeadphones,
  FaPaintBrush,
  FaLaptopCode,
  FaTools,
  FaLightbulb,
  FaUnlockAlt,
  FaPlay,
  FaCodeBranch,
  FaPalette,
  FaRobot,
  FaImages,
} from "react-icons/fa";
import { RiAppsFill, RiFontSize } from "react-icons/ri";
import { MdLibraryBooks } from "react-icons/md";

const categories = [
  { name: "All Apps", icon: <RiAppsFill /> },
  { name: "AI Tools", icon: <FaRobot /> },
  { name: "Audio Tools", icon: <FaHeadphones /> },
  { name: "Video Tools", icon: <FaVideo /> },
  { name: "Design Tools", icon: <FaPaintBrush /> },
  { name: "Game Libraries", icon: <FaGamepad /> },
  { name: "Design Inspiration", icon: <FaPalette /> },
  { name: "Web Development", icon: <FaLaptopCode /> },
  { name: "Font Resources", icon: <RiFontSize /> },
  { name: "SVG Icons", icon: <FaCodeBranch /> },
  { name: "Web Libraries", icon: <MdLibraryBooks /> },
  { name: "File Converters", icon: <FaTools /> },
  { name: "Torrent Resources", icon: <FaUnlockAlt /> },
  { name: "Useful Websites", icon: <FaLightbulb /> },
  { name: "Streaming Services", icon: <FaPlay /> },
  { name: "Cracked Apps", icon: <FaUnlockAlt /> },
  { name: "PDF Utilities", icon: <FaBook /> },
  { name: "Stock Images", icon: <FaImages /> },
];

const HorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { buttonState, setButtonState } = useFilterButtonContext();
  const { selectedCategory, setSelectedCategory } = useCategoryContext();
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-16 z-10 bg-body border-y-[1px] border-neutral-800">
      <div className="relative flex items-center w-[96vw] md:w-[98vw] lg:w-[99vw] max-w-screen-2xl py-1.5 md:py-0 md:px-4">
        <button
          onClick={() => setButtonState(!buttonState)}
          className="hidden md:flex py-2 px-3 items-center justify-center gap-2 font-Raleway bg-element hover:bg-hover transition-colors duration-200 rounded-full text-neutral-200 font-semibold"
        >
          <PiSlidersHorizontalBold />
          Filters
        </button>
        <div className="hidden md:block h-9 w-[1.4px] shrink-0 bg-element ml-5 mr-1"></div>
        <button onClick={() => scroll("left")} className="hidden md:block p-2">
          <FaArrowLeft
            size="2.4em"
            className="text-white hover:bg-element transition-all duration-200 p-3 rounded-full"
          />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto text-sm md:text-base space-x-2 md:space-x-6"
          style={{ scrollbarWidth: "none" }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`flex items-center gap-1.5 py-2 px-3 rounded-full transition-colors duration-200 whitespace-nowrap ${
                selectedCategory === category.name
                  ? "bg-hover text-neutral-300"
                  : "text-neutral-400 hover:bg-hover"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        <button onClick={() => scroll("right")} className="hidden md:block p-2">
          <FaArrowRight
            size="2.4em"
            className="text-white hover:bg-element transition-all duration-200 p-3 rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default HorizontalScroll;
