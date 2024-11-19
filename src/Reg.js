import React from "react";
import Register from "./components/Register";
import videoBg from "../src/assets/img/videoRock.mp4";
import "./App.css";

const Reg = () => {
  return (
    <div className="main">
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="background-video"
      ></video>
      <div className="dpeoverlay">
        <Register />
      </div>
    </div>
  );
};

export default Reg;
