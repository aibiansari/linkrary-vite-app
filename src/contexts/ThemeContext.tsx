import { createContext, useState, useEffect, ReactNode } from "react";

type ThemeContextType = {
  theme: string; // Can be "light", "dark", or "system
  setTheme: (theme: string) => void;
};
export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme; // "light", "dark", or "system"
    return "system"; // Default to system
  });

  // Effect to apply the theme based on user selection or system preference
  useEffect(() => {
    const applyTheme = () => {
      if (theme === "system") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        document.documentElement.classList.toggle("dark", systemPrefersDark);
      } else {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
    };

    applyTheme();
    localStorage.setItem("theme", theme); // Save theme preference to localStorage

    // Listen for system theme changes if "system" mode is enabled
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme();

      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
