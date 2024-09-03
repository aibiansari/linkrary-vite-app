import { useRef } from "react";
import { useFilterButtonContext } from "@/contexts/FilterButtonContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import {
  FaVideo,
  FaGamepad,
  FaBook,
  FaHeadphones,
  FaPaintBrush,
  FaLaptopCode,
  FaCloud,
  FaStore,
  FaTools,
  FaLightbulb,
  FaLock,
  FaPlay,
  FaCodeBranch,
  FaPalette,
  FaCode,
  FaBrain,
} from "react-icons/fa";
import { RiAppsFill, RiFontSize, RiOpenSourceLine } from "react-icons/ri";
import { MdLibraryBooks } from "react-icons/md";

const categories = [
  { name: "All Apps", icon: <RiAppsFill /> },
  { name: "AI Tools", icon: <FaBrain /> },
  { name: "Audio Tools", icon: <FaHeadphones /> },
  { name: "Video Editing", icon: <FaVideo /> },
  { name: "Game Libraries", icon: <FaGamepad /> },
  { name: "Freeware", icon: <FaTools /> },
  { name: "Design Inspiration", icon: <FaPalette /> },
  { name: "Web Development", icon: <FaLaptopCode /> },
  { name: "Font Resources", icon: <RiFontSize /> },
  { name: "SVG Icons", icon: <FaCodeBranch /> },
  { name: "Open Source", icon: <RiOpenSourceLine /> },
  { name: "Web Libraries", icon: <MdLibraryBooks /> },
  { name: "Online Stores", icon: <FaStore /> },
  { name: "File Converters", icon: <FaTools /> },
  { name: "Useful Websites", icon: <FaLightbulb /> },
  { name: "Streaming Services", icon: <FaPlay /> },
  { name: "Free Games", icon: <FaGamepad /> },
  { name: "Torrent Resources", icon: <FaLock /> },
  { name: "PDF Utilities", icon: <FaBook /> },
  { name: "Cracked Softwares", icon: <FaLock /> },
  { name: "Cloud Solutions", icon: <FaCloud /> },
  { name: "3D Design Tools", icon: <FaPaintBrush /> },
  { name: "Coding Resources", icon: <FaCode /> },
  { name: "Stock Images", icon: <FaPalette /> },
];

const HorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { buttonState, setButtonState } = useFilterButtonContext();
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-20 md:top-16 z-10 bg-body border-y-[1px] border-neutral-900">
      <div className="relative flex items-center w-[96vw] md:w-[98vw] lg:w-[99vw] max-w-screen-2xl md:px-4">
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
              className="flex items-center gap-1.5 whitespace-nowrap text-neutral-400 font-Raleway font-medium py-2 px-3 rounded-full hover:bg-hover transition-colors duration-200"
              onClick={() => console.log(`${category.name} clicked`)}
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
