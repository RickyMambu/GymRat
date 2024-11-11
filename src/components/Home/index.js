import React from "react";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

const Home = () => {
  return (
    <div>
    <MouseTrail strokeColor="rgb(240, 219, 79)" lineWidthStart={10} />
      <section className="home-section">
        <div className="home-content">
          <h1 className="home-title">Welcome to GymRat</h1>
          <p className="home-paragraph">
            "Push yourself because no one else is going to do it for you. Every
            workout brings you a step closer to greatness. Stay strong, stay
            motivated, and keep pushing forward!"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
