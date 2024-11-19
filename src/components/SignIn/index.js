import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Firebase/index";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/App");
    } catch (err) {
      setError("Invalid email or password.");
      console.error(err);
    }
  };
  
  return (
    <div className="signup-wrapper">
      <div className="welcome-section">
        <h1>Welcome to GymRat!</h1>
        <p>
          No matter what your fitness goal may be, you'll find everything you
          need at GymRat.
        </p>
        <button className="reg-btn" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
      <div className="signup-container">
        <h2 className="signup-title">Sign In</h2>
        <form className="signup-form" onSubmit={handleSignIn}>
          {error && <p className="error-message">{error}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
