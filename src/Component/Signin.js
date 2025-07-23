import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reduxweb-backend.onrender.com/signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.message === 'Signin successful') {
          // Navigate to home page or dashboard
          navigate('/');
        } else {
          alert(response.data.error || 'Signin failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Signin error:', error);
        alert('Signin failed. User already exists. Please try again later.');
      });
  };

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h1 className='signup-title'>Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="remember-me">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label>Remember Me</label>
        </div>
        <button type="submit">Sign In</button>
        <p className='signup-footer'>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
