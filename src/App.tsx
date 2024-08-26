import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Linkrary/" element={<Home />} />
        <Route path="/Linkrary/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
};

export default App;
