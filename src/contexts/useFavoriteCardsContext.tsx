import { useContext } from "react";
import { FavoriteCardsContext } from "./FavoriteCardsContext";

export const useFavoriteCardsContext = () => {
  const context = useContext(FavoriteCardsContext);
  if (!context) {
    throw new Error(
      "useFavoriteCardsContext must be used within a FavoriteCardsProvider"
    );
  }
  return context;
};
