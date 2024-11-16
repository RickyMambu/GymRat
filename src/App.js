import React from "react";
import "../src/assets/css/index.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Diet from "./components/Diet";
import Exercise from "./components/Exercise";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mock from "./Mock";

const App = () => {
  return (
    <div className="full">
      <Router>
        <Routes>
          <Route path="/src/components/Home" element={<Mock />}>
            <Navbar />
            <Home />
            <Diet />
            <Exercise />
            <About />
            <Contact />
          </Route>
        </Routes>
      </Router>
    </div>
    //   <Router>
    //   <Routes>
    //     <Route path="/" element={<Mock />} />
    //     <Route path="/home" element={<Home />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
