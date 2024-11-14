import React from "react";
import "../src/assets/css/index.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Diet from "./components/Diet";
import Exercise from "./components/Exercise";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Diet />
      <Exercise />
      <About />
      <section></section>
    </div>
  );
};

export default App;
