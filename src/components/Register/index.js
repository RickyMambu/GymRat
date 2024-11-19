import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/Firebase/index";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="Regist-wrapper">
      <div className="Regist-container">
        <h2 className="Regist-title">Register Your Account</h2>
        {error && <p className="error">{error}</p>}
        <form className="Regist-form" onSubmit={handleRegister}>
          <label htmlFor="Email">Email Address</label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="Regist-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
