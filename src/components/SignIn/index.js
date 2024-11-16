import React from "react";
import "../../App.css";

const SignIn = () => {
  return (
    <div className="signup-wrapper">
      <div className="welcome-section">
        <h1>Welcome to GymRat!</h1>
        <p>
          No matter what your fitness goal may be, you'll find everything you
          need at GymRat.
        </p>
        <button className="reg-btn">Register</button>
      </div>
      <div className="signup-container">
        <h2 className="signup-title">Sign In</h2>
        <form className="signup-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter  your username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
