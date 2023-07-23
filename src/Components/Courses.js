import React, { useState, useContext } from 'react';
import clogo from '../Components/download.jpg';
import '../Components/Courses.css';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import cources from '../Components/OIP.jpg';

function Courses() {
  const { isLoggedIn, login } = useContext(AuthContext);
  const [isPlayable, setIsPlayable] = useState(false);

  const handleEnrollClick = () => {
    if (isLoggedIn) {
      setIsPlayable(true);
      
    } 
    else {
      alert('You need to log in to access this content.');
      login();
    }
  };

  return (
    <>
      <nav id="navbar">
        <Link to="/">
          <h2 id="son">E-classroom</h2>
        </Link>
        <img src={clogo} height="30%" width="80%" alt="Wisflux Logo" />
        <ul className="list">
          <li>
            <a className="link" href="#webd">
              Python Basics
            </a>
          </li>
          <li>
            <a className="link" href="#android">
              React app full cource
            </a>
          </li>
          <li>
            <a className="link" href="#python">
              Java
            </a>
          </li>
        </ul>
      </nav>

      <main id="main-doc">
        <section className="main-section" id="webd">
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <div className="iframe-container">
                  {isPlayable ? (
                    <iframe
                      width="560"
                      height="515"
                      src="https://www.youtube.com/embed/videoseries?list=PLwGdqUZWnOp2jmYb2TQGYgBYp0xGwj9V1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="play-button">
                      <p>Enroll to watch the video</p>
                    </div>
                  )}
                </div>
                <h3 className="card-title">Python Basics</h3>
                <p className="card-description">Course Description</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll in Course
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="iframe-container">
                  {isPlayable ? (
                    <iframe
                      width="560"
                      height="515"
                      src="https://www.youtube.com/embed/videoseries?list=PLwGdqUZWnOp2jmYb2TQGYgBYp0xGwj9V1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="play-button">
                      <p>Enroll to watch the video</p>
                    </div>
                  )}
                </div>
                <h3 className="card-title">WEB DEVELOPMENT</h3>
                <p className="card-description">Course Description</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll in Course
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="main-section" id="android">
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <div className="iframe-container">
                  {isPlayable ? (
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/mXjZQX3UzOs"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="play-button">
                      <p>Enroll to watch the video</p>
                    </div>
                  )}
                </div>
                <h3 className="card-title">React app full cource</h3>
                <p className="card-description">Course Description</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll in Course
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="iframe-container">
                  {isPlayable ? (
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/mXjZQX3UzOs"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="play-button">
                      <p>Enroll to watch the video</p>
                    </div>
                  )}
                </div>
                <h3 className="card-title">ANDROID DEVELOPMENT</h3>
                <p className="card-description">Course Description</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll in Course
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Courses;
