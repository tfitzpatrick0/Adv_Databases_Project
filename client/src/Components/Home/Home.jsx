import React, { useState, useEffect } from "react";

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
    <>
      <div className="quickstart__wrapper">
        <button className="button-1">Quick Start</button>
      </div>
      <div className="panels__wrapper">
        {/* map elements from routines into child div elements */}
        {routines.map((routine, index) => (
          <div className="panel" key={index}>
            <h2>{routine}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
