import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <ul className="navbar__links">
        <li>
          <Link className="navbar__links-link" to="/exercises">
            Exercises
          </Link>
        </li>
        <li>
          <Link className="navbar__links-link" to="/routines">
            Routines
          </Link>
        </li>
        <li>
          <Link className="navbar__links-link" to="/workout">
            Workout
          </Link>
        </li>
        <li>
          <Link className="navbar__links-link" to="/history">
            History
          </Link>
        </li>
      </ul>
      <div className="navbar__profile">
        <Link className="navbar__profile-link" to="/profile">
          Profile
        </Link>
      </div>
    </nav>
  );
}