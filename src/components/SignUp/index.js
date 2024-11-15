import React from 'react';
import '../../App.css';

const SignUp = () => {
    
  return (
    <div className="signup-container">
      <h2 className="signup-title">Join GymRat</h2>
      <form className="signup-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required />
        
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
        
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
