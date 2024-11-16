import React, { useState } from "react";

const About = () => {
  return (
    <section id="About">
      <div className="about">
        <div className="about_main">
          <div className="about_text">
            <h1>
              <span>About</span>Us
            </h1>
            <p>
              Welcome to GymRat, your ultimate fitness companion. We're here to
              inspire, guide, and support you on your journey to health and
              wellness. We believe that fitness is more than just a routine—it's
              a lifestyle and a path toward a stronger, healthier, and more
              empowered you.
              <br />
              Join us and be part of a community that values resilience,
              discipline, and continuous improvement. Remember, every step
              counts, and together, we'll reach new heights of healtht
              lifestyle!
            </p>
          </div>
          <div className="image">
            <img
              src="./images/about.jpg"
              alt="about-pic"
              className="about-pic"
            />
          </div>
        </div>
        <div className="team">
          <h1>
            Our<span>Team</span>
          </h1>
          <div className="team_box">
            <div className="profile">
              <img
                src="./images/jeremy.png"
                alt="jeremy-pic"
                className="about-pic"
              />
              <div className="info">
                <h2 className="name">Purukan Jeremy</h2>
              </div>
            </div>
            <div className="profile">
              <img
                src="./images/ricky.jpg"
                alt="ricky-pic"
                className="about-pic"
              />
              <div className="info">
                <h2 className="name">Ricky Mambu</h2>
              </div>
            </div>
            <div className="profile">
              <img
                src="./images/ando.jpg"
                alt="ando-pic"
                className="about-pic"
              />
              <div className="info">
                <h2 className="name">Revando Aruperes</h2>
              </div>
            </div>
            <div className="profile">
              <img
                src="./images/mili.jpg"
                alt="emily-pic"
                className="about-pic"
              />
              <div className="info">
                <h2 className="name">Emily Pangemanan</h2>
              </div>
            </div>
            <div className="profile">
              <img
                src="./images/lika.jpg"
                alt="lika-pic"
                className="about-pic"
              />
              <div className="info">
                <h2 className="name">Noselycha Soriton</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
