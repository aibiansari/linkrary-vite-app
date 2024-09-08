import FilterModal from "@/components/ui/filterModal";
import Navbar from "@/components/ui/navbar";
import HorizontalScroll from "@/components/ui/ScrollX";
import React from "react";
import ChatGPT from "/icons/ChatGPT.webp";
import FMHY from "/icons/FMHY.webp";

const cards = [
  {
    image: ChatGPT, // Replace with actual image paths
    title: "ChatGPT",
    description: "This is a description for ChatGPT.",
    link: "https://example.com/1",
  },
  {
    image: FMHY,
    title: "FMHY",
    description: "This is a description for FMHY.",
    link: "https://example.com/2",
  },
  // Add more cards as needed
];

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
          Discover
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-2">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-element rounded-lg shadow-md p-4 flex items-center space-x-4 hover:bg-hover hover:scale-105 hover:shadow-lg hover:shadow-black/40 shadow-black/50 transition-all duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                draggable="false"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl text-white font-semibold">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-300">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
