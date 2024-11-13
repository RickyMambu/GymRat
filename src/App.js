import React from "react";
import "../src/assets/css/index.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Diet from "./components/Diet";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Diet />
      <section></section>
    </div>
  );
};

export default App;
