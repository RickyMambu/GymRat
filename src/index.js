import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./config/Firebase";
import Mock from "./Mock";
import Reg from "./Reg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Mock" element={<Mock />} />
        <Route path="/Reg" element={<Reg/>} />
        <Route path="/App" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
