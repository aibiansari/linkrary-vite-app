import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterButtonProvider } from "./contexts/FilterButtonContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import logo from "/logo.svg";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const About = lazy(() => import("./pages/About"));

const App: React.FC = () => {
  return (
    <CategoryProvider>
      <FilterButtonProvider>
        <Router>
          <Suspense
            fallback={
              <div className="relative bg-transparent min-h-screen flex items-center justify-center">
                <img
                  src={logo}
                  alt="Linkrary Logo"
                  className="w-12 h-12 absolute"
                />
                <img
                  src={logo}
                  alt="Linkrary Logo"
                  className="w-12 h-12 anim"
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
      </FilterButtonProvider>
    </CategoryProvider>
  );
};

export default App;
