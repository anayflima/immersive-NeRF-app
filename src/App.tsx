import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { NavLink } from "react-router-dom";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          HackMIT<br></br>
          Immersive NeRF
        </p>
      </header>
      <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">

            <NavLink
              className="navbar-item"
              // activeClassName="is-active"
              to="/about"
            >
              About
            </NavLink>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    </div>

  );
}

export default App;
