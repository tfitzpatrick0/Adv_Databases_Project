import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";

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
      "exercise 11",
      "exercise 12",
      "exercise 13",
      "exercise 14",
      "exercise 15",
      "exercise 16",
      "exercise 17",
      "exercise 18",
    ]);
  }, []);

  // search bar left side, filter button right side
  // pressing the filter button creates an area under the search bar with possible filters
  // pressing a filter button loads a dropdown menu with possible filter options
  // exercises are displayed in a grid below the search bar and filters

  return (
    // create an html layout that contains a search bar at the top, with a row of filters underdeath
    // and a list of exercises below that
    <div className="exercises__page-layout bg-1">
      <div className="search-form__wrapper">
        <SearchForm />
      </div>
      <div className="exercises__wrapper">
        <div className="exercises-title">
          <h1>EXERCISES</h1>
        </div>
        {/* map elements from exercises into child div elements */}
        {exercises.map((exercise, index) => (
          <div className="exercise bg-1" key={index}>
            <h3>{exercise}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
