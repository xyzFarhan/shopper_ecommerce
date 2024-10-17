import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>

        <div className="input-box">
          <input type="email" placeholder="Email Address" required />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit" className="btn">Sign Up</button>

        <div className="register-links">
          <p>Already have an account? <a href="/login">Log In</a></p>

          <label>
            <input type="checkbox" required /> By continuing, I agree to the Terms of Use & Privacy Policy.
          </label>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
