import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterButtonProvider } from "./contexts/FilterButtonContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <CategoryProvider>
      <FilterButtonProvider>
        <Router>
          <Routes>
            <Route path="/Linkrary/" element={<Home />} />
            <Route path="/Linkrary/collection" element={<Collection />} />
            <Route path="/Linkrary/about" element={<About />} />
          </Routes>
        </Router>
      </FilterButtonProvider>
    </CategoryProvider>
  );
};

export default App;
