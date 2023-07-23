import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

import '../Components/Login.css';

const Login = () => {
  
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        login();
        login();
        setLoginStatus('Login successful');
        window.location.href = '/courses';
      }
     

       else {
        setLoginStatus('Invalid username or password');
      }
    } else {
      setLoginStatus('User not found');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <i className="fas fa-lock"></i>
          </div>
        </div>
        <button className="login-button mb-2" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {loginStatus && <p className="login-status">{loginStatus}</p>}
      <p>
        Don't have an account? <Link to="/register">Signup here</Link>.
      </p>
    </div>
  );
};

export default Login;
