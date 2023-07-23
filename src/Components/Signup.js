import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import '../Components/Login.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const user = {
      username: username,
      password: password
    };

    // Store the user in local storage
    localStorage.setItem('user', JSON.stringify(user));

    alert(`Registered with username: ${username} and password: ${password}`);
    window.location.href = '/';
  };

  return (
    <div className="login-container">
      <h1>Register</h1><hr />
      <form>
        <div className="form-group">
          <label>Username:</label>
          <div className="input-wrapper">
            <input type="text" value={username} onChange={handleUsernameChange} />
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div className="input-wrapper">
            <input type="password" value={password} onChange={handlePasswordChange} />
            <i className="fas fa-lock"></i>
          </div>
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <div className="input-wrapper">
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            <i className="fas fa-lock"></i>
          </div>
        </div>
        <button className="login-button mb-2" type="button" onClick={handleRegister}>Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link>.</p>
    </div>
  );
};

export default Signup;
