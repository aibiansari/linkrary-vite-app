import { useRef } from "react";
import { useFilterButtonContext } from "@/contexts/FilterButtonContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { RiAppsFill } from "react-icons/ri";
import {
  FaMusic,
  FaVideo,
  FaGamepad,
  FaBook,
  FaHeadphones,
} from "react-icons/fa";

const categories = [
  { name: "All Apps", icon: <RiAppsFill /> },
  { name: "AI Tools", icon: <FaMusic /> },
  { name: "Audio Tools", icon: <FaHeadphones /> },
  { name: "Video Tools", icon: <FaVideo /> },
  { name: "Games Libraries", icon: <FaGamepad /> },
  { name: "Free Apps", icon: <FaHeadphones /> },
  { name: "Design Inspirations", icon: <FaVideo /> },
  { name: "Web Dev Tools", icon: <FaGamepad /> },
  { name: "Free Fonts", icon: <FaBook /> },
  { name: "SVG Assets", icon: <FaGamepad /> },
  { name: "Open Source", icon: <FaBook /> },
  { name: "Web Libraries", icon: <FaHeadphones /> },
  { name: "Stores", icon: <FaVideo /> },
  { name: "Converter", icon: <FaGamepad /> },
  { name: "Useful Sites", icon: <FaBook /> },
  { name: "Watch Online", icon: <FaBook /> },
  { name: "Free Games", icon: <FaBook /> },
  { name: "Torrent Sites", icon: <FaBook /> },
  { name: "PDF Tools", icon: <FaBook /> },
  { name: "Cracked Tools", icon: <FaBook /> },
  { name: "Cloud Services", icon: <FaBook /> },
  { name: "Watch Online", icon: <FaBook /> },
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
