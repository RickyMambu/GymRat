import React from "react";
import SignIn from "./components/SignIn";
import videoBg from "../src/assets/img/videoRock.mp4";
import "./App.css";

const Mock = () => {
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
        <SignIn />
      </div>
    </div>
  );
};

export default Mock;
