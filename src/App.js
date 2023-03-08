import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Define routes using Route */}
        <Routes basename="react-portfolio">
          <Route path="/react-portfolio/" element={<Home />} />
          <Route path="/react-portfolio/gallery" element={<Gallery />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
