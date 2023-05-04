import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

import "./styles.css";

export default function Home() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    setRoutines([
      "routine 1",
      "routine 2",
      "routine 3",
      "routine 4",
      "routine 5",
      "routine 6",
      "routine 7",
      "routine 8",
      "routine 9",
    ]);
  }, []);

  return (
    <div className="homepage">
      <div className="quickstart__wrapper">
        {/* <button className="button-1">Quick Start</button> */}
        <img width={500} height={500} src={logo} alt="logo" />
      </div>
      <div className="hero__wrapper">
        {/* map elements from routines into child div elements */}
        {/* {routines.map((routine, index) => (
          <div className="panel-1 bg-1" key={index}>
            <h2>{routine}</h2>
          </div>
        ))} */}
        <h1 className="hero-text">Start your fitness journey TODAY</h1>
      </div>
    </div>
  );
}
