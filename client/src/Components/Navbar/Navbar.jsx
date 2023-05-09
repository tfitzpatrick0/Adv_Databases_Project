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
    // {
    //   name: "Workout",
    //   path: "/workout",
    // },
    {
      name: "History",
      path: "/history",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];

  const [navActive, setNavActive] = useState(-1);

  // useEffect to set navActive to the index of the current path
  useEffect(() => {
    // get the current path
    const currentPath = window.location.pathname;
    // loop through navList

    for (let i = 0; i < navList.length; i++) {
      // if the current path matches the path in navList
      if (currentPath === navList[i].path) {
        // set navActive to the index of the current path
        setNavActive(i);
      }
    }
  }, []);

  return (
    <>
      <div id="nav-wrapper">
        <nav id="nav">
          <div className="nav left">
            <span className="gradient skew">
              <Link to="/" onClick={() => setNavActive(0)}>
                GOD TIER GAINS
                {/* <img src={logo} alt="Logo" /> */}
              </Link>
            </span>
          </div>
          <div className="nav right">
            {navList.map((navItem, index) => (
              // index === 0 ? (
              //   <></>
              // ) : (
              //   <Link
              //     to={navItem.path}
              //     className={`nav-link ${index === navActive ? "active" : ""}`}
              //     key={index}
              //     onClick={() => setNavActive(index)}
              //   >
              //     <span className="nav-link-span">
              //       <span className="u-nav">{navItem.name}</span>
              //     </span>
              //   </Link>
              // )
              <Link
                to={navItem.path}
                className={`nav-link ${index === navActive ? "active" : ""}`}
                key={index}
                onClick={() => setNavActive(index)}
              >
                <span className="nav-link-span">
                  <span className="u-nav">{navItem.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="nav-spacer"></div>
    </>
  );
}
