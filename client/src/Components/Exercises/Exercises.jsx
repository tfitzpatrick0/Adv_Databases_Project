import React, { useState, useEffect } from "react";

import "./styles.css";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    setExercises([
      "exercise 1",
      "exercise 2",
      "exercise 3",
      "exercise 4",
      "exercise 5",
      "exercise 6",
      "exercise 7",
      "exercise 8",
      "exercise 9",
      "exercise 10",
    ]);
  }, []);

  return (
    // create an html layout that contains a search bar at the top, with a row of filters underdeath
    // and a list of exercises below that
    <div className="exercises__page-layout">
      <div className="search-bar__wrapper">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="filters__wrapper">
        <button className="button-1">Filter 1</button>
        <button className="button-1">Filter 2</button>
        <button className="button-1">Filter 3</button>
        <button className="button-1">Filter 4</button>
        <button className="button-1">Filter 5</button>
      </div>
      <div className="exercises__wrapper">
        {/* map elements from exercises into child div elements */}
        {exercises.map((exercise, index) => (
          <div className="exercise bg-1" key={index}>
            <h2>{exercise}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
