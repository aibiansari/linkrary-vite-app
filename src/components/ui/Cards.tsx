import { useEffect, useRef, useState } from "react";
import { cards } from "@/data/Cards";
import { useCategoryContext } from "@/contexts/useCategoryContext";

const Cards = () => {
  const { selectedCategory } = useCategoryContext();
  const [visibleCards, setVisibleCards] = useState<string[]>([]);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const filteredCards =
    selectedCategory === "All Apps"
      ? cards
      : cards.filter((card) => card.categories.includes(selectedCategory));

  useEffect(() => {
    const currentRefs = cardRefs.current; // Copy refs for the effect

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = (entry.target as HTMLElement).dataset.index;
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, cardIndex!]);
          } else {
            setVisibleCards((prev) => prev.filter((i) => i !== cardIndex));
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on unmount
    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredCards]); // Add filteredCards as a dependency

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-8 py-2">
      {filteredCards.map((card, index) => (
        <a
          key={index}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          ref={(el) => (cardRefs.current[index] = el)}
          data-index={index.toString()} // Ensure index is a string
          className={`bg-stone-100 dark:bg-element rounded-lg shadow-md p-4 flex items-center space-x-4 dark:hover:bg-hover 
            ${
              visibleCards.includes(index.toString())
                ? "opacity-100"
                : "opacity-0 translate-y-5"
            } 
            hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/40 hover:shadow-black/20 shadow-black/30 
            dark:shadow-black/50 transition-all duration-300`}
        >
          <img
            src={card.image}
            alt={card.title}
            draggable="false"
            loading="lazy"
            className="h-16 w-16 rounded-lg object-cover"
          />
          <div className="overflow-hidden -translate-y-0.5">
            <h1 className="text-xl text-hover dark:text-white font-semibold transition-colors duration-500">
              {card.title}
            </h1>
            <p
              title={card.description}
              className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2"
            >
              {card.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Cards;
