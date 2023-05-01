import React, { useState, useEffect } from "react";

import "./styles.css";

export default function Workout() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises([
      "exercise 1",
      "exercise 2",
      "exercise 3",
      "exercise 4",
      "exercise 5",
      "exercise 6",
    ]);
  }, []);

  return (
    // create an html layout that contains the routine title and a time at the top left,
    // and a start workout button and end workout button at the top right
    // and a list of exercises below that
    <div className="workout__page-layout bg-1">
      <div className="workout__header">
        <div className="workout-title">
          <h1>Routine 1 - 00:00</h1>
        </div>
        <div className="workout-timer">
          <button className="button-1">Start Workout</button>
          <button className="button-1">End Workout</button>
        </div>
      </div>
      <div className="workout__wrapper">
        <div className="panels__wrapper-2">
          {/* map elements from exercises into child div elements */}
          {exercises.map((exercise, index) => (
            <div className="panel-2 bg-2" key={index}>
              <h2>{exercise}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
