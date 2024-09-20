import { useEffect, useRef } from "react";
import { useCategoryModalContext } from "@/contexts/useCategoryModalContext";
import { useCategoryContext } from "@/contexts/useCategoryContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { categories } from "@/data/Categories";

const HorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { buttonState, setButtonState } = useCategoryModalContext();
  const {
    selectedCategory,
    setSelectedCategory,
    categoryToScroll,
    setCategoryToScroll,
  } = useCategoryContext();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCategoryClick = (name: string) => {
    setSelectedCategory(name);

    const index = categories.findIndex((category) => category.name === name);
    if (index !== -1 && categoryRefs.current[index] && scrollRef.current) {
      const categoryButton = categoryRefs.current[index];
      const { left, right, width } = categoryButton!.getBoundingClientRect();
      const { left: containerLeft, right: containerRight } =
        scrollRef.current.getBoundingClientRect();

      if (left < containerLeft) {
        scrollRef.current.scrollBy({
          left: left - containerLeft - width / 2,
          behavior: "smooth",
        });
      } else if (right > containerRight) {
        scrollRef.current.scrollBy({
          left: right - containerRight + width / 2,
          behavior: "smooth",
        });
      }
    }
  };

  // Scroll to the selected category when categoryToScroll is updated
  useEffect(() => {
    if (categoryToScroll) {
      handleCategoryClick(categoryToScroll);
      setCategoryToScroll(null); // Reset after scrolling
    }
  }, [categoryToScroll, setCategoryToScroll]);

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
              ref={(el) => (categoryRefs.current[index] = el)}
              className={`flex items-center gap-1.5 py-2 px-3 rounded-full transition-colors duration-200 whitespace-nowrap ${
                selectedCategory === category.name
                  ? "bg-hover text-neutral-300"
                  : "text-neutral-400 hover:bg-hover"
              }`}
              onClick={() => handleCategoryClick(category.name)}
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
