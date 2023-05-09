import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

import {
  getAllExercisesRoute,
  getExercisesByFiltersRoute,
} from "../../utils/api";

import "./styles.css";

export default function Exercises({ onExerciseClick }) {
  const [exercises, setExercises] = useState([]);

  // state for search filters
  const [keyword, setKeyword] = useState("");
  const [extype, setExtype] = useState();
  const [bodypart, setBodypart] = useState();
  const [equipment, setEquipment] = useState();
  const [difficulty, setDifficulty] = useState();

  useEffect(() => {
    axios.get(getAllExercisesRoute).then((res) => {
      console.log("Exercises data: ", res.data);
      setExercises(res.data);
    });
  }, []);

  // search bar left side, filter button right side
  // pressing the filter button creates an area under the search bar with possible filters
  // pressing a filter button loads a dropdown menu with possible filter options
  // exercises are displayed in a grid below the search bar and filters
  const onSearchHandler = () => {
    console.log("Search Handler");
    console.log("Keyword: ", keyword);

    const reqData = {
      keyword: keyword,
      extype: extype,
      bodypart: bodypart,
      equipment: equipment,
      difficulty: difficulty,
    };

    // send a get request to getExercisesByKeywordRoute with reqData as the body
    // set the exercises state to the response data

    axios.post(getExercisesByFiltersRoute, reqData).then((res) => {
      console.log("Search results: ", res.data);
      setExercises(res.data);
    });
  };

  const onResetHandler = () => {
    setKeyword("");
    axios.get(getAllExercisesRoute).then((res) => {
      console.log("Exercises data: ", res.data);
      setExercises(res.data);
    });
  };

  const onKeywordChange = (e) => {
    e.preventDefault();
    console.log("Keyword: ", e.target.value);
    setKeyword(e.target.value);
  };

  const onExtypeChange = (e) => {
    e.preventDefault();
    console.log("Extype: ", e.target.value);
    setExtype(e.target.value);
  };

  const onBodypartChange = (e) => {
    e.preventDefault();
    console.log("Bodypart: ", e.target.value);
    setBodypart(e.target.value);
  };

  const onEquipmentChange = (e) => {
    e.preventDefault();
    console.log("Equipment: ", e.target.value);
    setEquipment(e.target.value);
  };

  const onDifficultyChange = (e) => {
    e.preventDefault();
    console.log("Difficulty: ", e.target.value);
    setDifficulty(e.target.value);
  };

  return (
    // create an html layout that contains a search bar at the top, with a row of filters underdeath
    // and a list of exercises below that
    <div className="exercises__page-layout bg-1">
      <div className="search-form__wrapper">
        <SearchForm
          onKeywordChange={onKeywordChange}
          onExtypeChange={onExtypeChange}
          onBodypartChange={onBodypartChange}
          onEquipmentChange={onEquipmentChange}
          onDifficultyChange={onDifficultyChange}
          onSearchHandler={onSearchHandler}
          onResetHandler={onResetHandler}
          numResults={exercises.length}
        />
      </div>
      <div className="exercises__wrapper">
        <div className="exercises-title">
          <h1>EXERCISES</h1>
        </div>
        {/* map elements from exercises into child div elements */}
        {exercises.map((exercise, index) => (
          // ternary operator --> is onExerciseClick defined? if so, pass it to the child div element
          <div
            className="exercise bg-2"
            onClick={
              onExerciseClick ? () => onExerciseClick(exercise[1]) : null
            }
            key={index}
          >
            <h3>{exercise[1]}</h3>
            <p>
              {exercise[2]} | {exercise[3]} | {exercise[4]} | {exercise[5]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
