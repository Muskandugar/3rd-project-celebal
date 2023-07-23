import React, { useContext } from 'react';
import '../Components/Home.css';
import Img from '../Components/download.jpg';
import home from '../Components/home.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };


  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={Img} alt="Logo" className="logo-image" />
          <span className="logo-text">E-classroom</span>
        </a>
        <div className="nav">
          <li><Link to="/courses">Courses</Link></li>
          {isLoggedIn ? (
           <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="">about</Link></li>
              <li><Link to="">features</Link></li>
              <li><Link to="">home</Link></li>

            </>
          )}
        </div>
      </nav>
      {/* navbar end */}

      <div className="container">
        <div className="image-container">
          <img src={home} alt="Image" />
        </div>
        <div className="form-container">
          <form>
            <h2>Join us</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <div className="input-wrapper">
                <input type="text" id="name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <div className="input-wrapper">
                <input type="email" id="email" />
              </div>
            </div>
            <button className="login-button mb-2" type="button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
