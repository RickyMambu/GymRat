import React from "react";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";
import GymPhoto from '../../assets/img/strong-man-training-gym.jpg';
import GymPhoto2 from '../../assets/img/people-doing-indoor-cycling.jpg';
import GymPhoto3 from '../../assets/img/close-up-kettlebells-workout-gym.jpg';

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
          <div className="image-container">
            <img src={GymPhoto2} alt="gym" className="gym-image side-image" />
            <img src={GymPhoto} alt="gym" className="gym-image center-image" />
            <img src={GymPhoto3} alt="gym" className="gym-image side-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
