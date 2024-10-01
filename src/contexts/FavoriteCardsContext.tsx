import { createContext, useState, ReactNode, useEffect } from "react";

// Define the shape of the context value
type FavoriteCardsContextType = {
  favCards: string[];
  setFavCards: React.Dispatch<React.SetStateAction<string[]>>;
};

// Initialize the context with the correct type
export const FavoriteCardsContext =
  createContext<FavoriteCardsContextType | null>(null);

export const FavoriteCardsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favCards, setFavCards] = useState<string[]>(() => {
    // Fetch favorites from localStorage or initialize it
    return JSON.parse(localStorage.getItem("Collection") || "[]");
  });

  // Optionally, you can update localStorage whenever favCards changes
  useEffect(() => {
    localStorage.setItem("Collection", JSON.stringify(favCards));
  }, [favCards]);

  return (
    <FavoriteCardsContext.Provider value={{ favCards, setFavCards }}>
      {children}
    </FavoriteCardsContext.Provider>
  );
};
