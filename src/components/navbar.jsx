import React from 'react';
import '../styles.css';

const HomeWorkNevigation = () => {
  return (
    <>
      <div className='container'>
        <div className="nav-bar">
          <div className="nav-bar-lift">
            <div className="nav-bar-left-content">
              Frequently Asked Questions
            </div>
            <div className="nav-bar-left-content">
              Contact
            </div>
            <div className="nav-bar-left-content">
              get more customers
            </div>
            <div className="nav-bar-left-content-button">
              <button type="button" className="btn btn-outline-success nav-bar-left-content-button">
                Success
              </button>
            </div>
          </div>
          <div className="login-style-div">
            <a href="/login" className="login-style">
              Log-In
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="4" r="6"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeWorkNevigation;