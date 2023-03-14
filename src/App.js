import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Define routes using Route */}
        <Routes basename="react-portfolio">
          <Route path="/react-portfolio/" element={<Home />} />
          <Route path="/react-portfolio/project" element={<Project />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
