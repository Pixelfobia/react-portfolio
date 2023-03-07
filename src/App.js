import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Discover from "./components/pages/Search";
import Search from "./components/pages/Search";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Define routes using Route */}
        <Routes basename="react-portfolio">
          <Route path="/react-portfolio/" element={<Home />} />
          <Route path="/react-portfolio/about" element={<About />} />
          <Route path="/react-portfolio/discover" element={<Discover />} />
          <Route path="/react-portfolio/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
