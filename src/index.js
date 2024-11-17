import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./config/Firebase";
import Mock from "./Mock";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Mock />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
