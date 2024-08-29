import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterButtonProvider } from "./contexts/FilterButtonContext";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

const App: React.FC = () => {
  return (
    <FilterButtonProvider>
      <Router>
        <Routes>
          <Route path="/Linkrary/" element={<Home />} />
          <Route path="/Linkrary/saved" element={<Saved />} />
        </Routes>
      </Router>
    </FilterButtonProvider>
  );
};

export default App;
