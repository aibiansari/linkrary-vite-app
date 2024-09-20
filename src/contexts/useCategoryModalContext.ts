import { useContext } from "react";
import { CategoryModalContext } from "./CategoryModalContext";

export const useCategoryModalContext = () => {
  const context = useContext(CategoryModalContext);
  if (!context) {
    throw new Error(
      "useCategoryModalContext must be used within a CategoryModalProvidor"
    );
  }
  return context;
};
