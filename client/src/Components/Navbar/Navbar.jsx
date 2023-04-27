import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import "./styles.css";

export default function Navbar() {
  const navList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Exercises",
      path: "/exercises",
    },
    {
      name: "Routines",
      path: "/routines",
    },
    {
      name: "Workout",
      path: "/workout",
    },
    {
      name: "History",
      path: "/history",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];

  const [navActive, setNavActive] = useState(0);

  // useEffect to set navActive to the index of the current path
  useEffect(() => {
    // get the current path
    const currentPath = window.location.pathname;
    // loop through navList
    if (currentPath === "/") {
      setNavActive(-1);
    } else {
      for (let i = 0; i < navList.length; i++) {
        // if the current path matches the path in navList
        if (currentPath === navList[i].path) {
          // set navActive to the index of the current path
          setNavActive(i);
        }
      }
    }
  }, []);

  return (
    <div id="nav-wrapper">
      <nav id="nav">
        <div class="nav left">
          <span class="gradient skew">
            <Link to="/" onClick={() => setNavActive(0)}>
              Logo Here
              {/* <img src={logo} alt="Logo" /> */}
            </Link>
          </span>
        </div>
        <div class="nav right">
          {navList.map((navItem, index) =>
            index === 0 ? (
              <></>
            ) : (
              <Link
                to={navItem.path}
                class={`nav-link ${index === navActive ? "active" : ""}`}
                key={index}
                onClick={() => setNavActive(index)}
              >
                <span class="nav-link-span">
                  <span class="u-nav">{navItem.name}</span>
                </span>
              </Link>
            )
          )}
        </div>
      </nav>
    </div>
    // <nav className="navbar">
    //   <Link to="/">
    //     <div className="navbar__logo">
    //       <img src={logo} alt="Logo" />
    //     </div>
    //   </Link>
    //   <ul className="navbar__links">
    //     <li>
    //       <Link className="navbar__links-link" to="/exercises">
    //         Exercises
    //       </Link>
    //     </li>
    //     <li>
    //       <Link className="navbar__links-link" to="/routines">
    //         Routines
    //       </Link>
    //     </li>
    //     <li>
    //       <Link className="navbar__links-link" to="/workout">
    //         Workout
    //       </Link>
    //     </li>
    //     <li>
    //       <Link className="navbar__links-link" to="/history">
    //         History
    //       </Link>
    //     </li>
    //   </ul>
    //   <div className="navbar__profile">
    //     <Link className="navbar__profile-link" to="/profile">
    //       Profile
    //     </Link>
    //   </div>
    // </nav>
  );
}
