import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterButtonProvider } from "./contexts/FilterButtonContext";
import { CategoryModalProvider } from "./contexts/CategoryModalContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import logo from "/logo.svg";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const About = lazy(() => import("./pages/About"));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CategoryProvider>
        <FilterButtonProvider>
          <CategoryModalProvider>
            <Router>
              <Suspense
                fallback={
                  <div className="relative bg-white dark:bg-body min-h-screen flex items-center justify-center">
                    <img
                      src={logo}
                      alt="Linkrary Logo"
                      className="w-12 h-12 absolute invert dark:invert-0"
                    />
                    <img
                      src={logo}
                      alt="Linkrary Logo"
                      className="w-12 h-12 anim invert dark:invert-0"
                    />
                  </div>
                }
              >
                <Routes>
                  <Route path="/Linkrary/" element={<Home />} />
                  <Route path="/Linkrary/collection" element={<Collection />} />
                  <Route path="/Linkrary/about" element={<About />} />
                </Routes>
              </Suspense>
            </Router>
          </CategoryModalProvider>
        </FilterButtonProvider>
      </CategoryProvider>
    </ThemeProvider>
  );
};

export default App;
