import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleRegistClick = () => {
    navigate("/Mock")
  }
  return (
    <div className="Regist-wrapper">
      <div className="Regist-container">
        <h2 className="Regist-title">Regist your Account</h2>
        <form className="Regist-form">
          <label htmlFor="Email">Email Address</label>
          <input
            type="text"
            id="Email"
            name="Email"
            placeholder="Enter  your email address"
            required
          />
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="Enter your username"
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

          <button type="submit" className="Regist-button" onClick={handleRegistClick}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
