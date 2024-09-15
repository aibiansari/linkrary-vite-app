import { cards } from "@/data/Cards";
import { useCategoryContext } from "@/contexts/useCategoryContext";

const Cards = () => {
  const { selectedCategory } = useCategoryContext();

  const filteredCards =
    selectedCategory === "All Apps"
      ? cards
      : cards.filter((card) => card.categories.includes(selectedCategory));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-2">
      {filteredCards.map((card, index) => (
        <a
          key={index}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-element rounded-lg shadow-md p-4 flex items-center space-x-4 hover:bg-hover hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 shadow-black/50 transition-all duration-300"
        >
          <img
            src={card.image}
            alt={card.title}
            draggable="false"
            className="h-16 w-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl text-white font-semibold">{card.title}</h3>
            <p className="text-sm text-neutral-400 line-clamp-2">
              {card.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Cards;
