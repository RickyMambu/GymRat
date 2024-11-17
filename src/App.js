import React from "react";
import "../src/assets/css/index.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Diet from "./components/Diet";
import Exercise from "./components/Exercise";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="full">
      <Navbar />
      <Home />
      <Diet />
      <Exercise />
      <About />
      <Contact />
      <Footer />

      <section></section>
    </div>
  );
};

export default App;
