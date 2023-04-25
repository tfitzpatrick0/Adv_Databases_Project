import React, { useState, useEffect } from "react";

import "./styles.css";

export default function Routines() {
  const [routines, setRoutines] = useState([]);
  const [recRoutines, setRecRoutines] = useState([]);

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
      "routine 10",
      "routine 11",
      "routine 12",
      "routine 13",
      "routine 14",
      "routine 15",
      "routine 16",
      "routine 17",
      "routine 18",
      "routine 19",
      "routine 20",
    ]);
    setRecRoutines([
      "rec routine 1",
      "rec routine 2",
      "rec routine 3",
      "rec routine 4",
      "rec routine 5",
    ]);
  }, []);

  return (
    <div className="routines__page-layout">
      <div className="user-routines__wrapper">
        {routines.map((routine, index) => (
          <div className="routine" key={index}>
            <h2>{routine}</h2>
          </div>
        ))}
      </div>
      <div className="rec-routines__wrapper">
        {recRoutines.map((routine, index) => (
          <div className="rec-routine" key={index}>
            <h2>{routine}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
