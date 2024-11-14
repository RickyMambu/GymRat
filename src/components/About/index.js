import React, { useState } from "react";

const About = () => {
  return (
    <section id="experience">
      <div className="about">
        <div className="about_main">
          <div className="about_text">
            <h1>
              <span>About</span>Us
            </h1>
          </div>
        </div>
        <div className="team">
          <h1>
            Our<span>Team</span>
          </h1>
          <div className="team_box">
            <div className="profile">
              <img
                src="./images/profile.jpg"
                alt="ando-pic"
                className="about-pic"
              />
              <div className="info">
                <h2 className="name">Revando Aruperes</h2>
              </div>
            </div>
            <div className="profile">
              <img
                src="./images/profile.jpg"
                alt="ricky-pic"
                className="about-pic"
              />
              <div className="info">
                <h2 className="name">Ricky Mambu</h2>
              </div>
            </div>
            <div className="profile">
              <img
                src="./images/profile.jpg"
                alt="jeremy-pic"
                className="about-pic"
              />
              <div className="info">
                <h2 className="name">Jeremy Purukan</h2>
              </div>
            </div>
            <div className="profile">
              <img
                src="./images/profile.jpg"
                alt="emily-pic"
                className="about-pic"
              />
              <div className="info">
                <h2 className="name">Emily Pangemanan</h2>
              </div>
            </div>
            <div className="profile">
              <img
                src="./images/profile.jpg"
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
