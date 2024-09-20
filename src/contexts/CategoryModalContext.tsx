import { createContext, useState, ReactNode } from "react";

type CategoryModalContextType = {
  buttonState: boolean;
  setButtonState: React.Dispatch<React.SetStateAction<boolean>>;
};

// Initialize the context with the correct type or `null`
export const CategoryModalContext =
  createContext<CategoryModalContextType | null>(null);

export const CategoryModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [buttonState, setButtonState] = useState(false);

  return (
    <CategoryModalContext.Provider value={{ buttonState, setButtonState }}>
      {children}
    </CategoryModalContext.Provider>
  );
};
