import { useRef } from "react";
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
  { name: "Music", icon: <FaMusic /> },
  { name: "Audio", icon: <FaHeadphones /> },
  { name: "Video", icon: <FaVideo /> },
  { name: "Games", icon: <FaGamepad /> },
  { name: "Books", icon: <FaBook /> },
  { name: "Audio", icon: <FaHeadphones /> },
  { name: "Video", icon: <FaVideo /> },
  { name: "Games", icon: <FaGamepad /> },
  { name: "Books", icon: <FaBook /> },
  { name: "Games", icon: <FaGamepad /> },
  { name: "Books", icon: <FaBook /> },
  { name: "Audio", icon: <FaHeadphones /> },
  { name: "Video", icon: <FaVideo /> },
  { name: "Games", icon: <FaGamepad /> },
  { name: "Books", icon: <FaBook /> },
];

const HorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-20 md:top-16 z-10 bg-body border-y-[1px] border-element">
      <div className="relative flex items-center w-[96vw] md:w-[98vw] lg:w-[99vw] max-w-screen-2xl md:px-4">
        <button className="hidden md:flex py-2 px-3 items-center justify-center gap-2 font-Raleway bg-element hover:bg-hover transition-colors duration-200 rounded-full text-neutral-200 font-semibold">
          <PiSlidersHorizontalBold />
          Filters
        </button>
        <div className="hidden md:block h-9 w-[1.4px] shrink-0 bg-element ml-5 mr-1"></div>
        <button onClick={() => scroll("left")} className="p-2">
          <FaArrowLeft
            size="2.4em"
            className="text-white hover:bg-element transition-all duration-200 p-3 rounded-full"
          />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto text-sm md:text-base space-x-2 md:space-x-6 mx-2"
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
        <button onClick={() => scroll("right")} className="p-2">
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
