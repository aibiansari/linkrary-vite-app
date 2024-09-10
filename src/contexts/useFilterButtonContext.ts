import { useContext } from "react";
import { FilterButtonContext } from "./FilterButtonContext";

export const useFilterButtonContext = () => {
  const context = useContext(FilterButtonContext);
  if (!context) {
    throw new Error(
      "useFilterButtonContext must be used within a FilterButtonProvider"
    );
  }
  return context;
};
