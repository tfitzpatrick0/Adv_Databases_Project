import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

export default function Workout({ routine }) {
  const navigate = useNavigate();

  const [exercises, setExercises] = useState([]);

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    // set exercises as a list from the routine prop
    if (routine) {
      for (let i = 0; i < routine.exercises.length; i++) {
        setExercises((exercises) => [...exercises, routine.exercises[i]]);
      }
    }
  }, []);

  const handleOnChange = (e, index) => {
    e.preventDefault();
    console.log(e.target);

    const { name, value: newValue } = e.target;
    console.log(name, newValue);

    console.log("LENGTH OF EXERCISES: ", exercises.length);
    console.log(exercises[index]);

    const updatedExercise = { ...exercises[index], [name]: newValue };
    const updatedExercises = exercises.map((exercise) => {
      if (exercise.name === updatedExercise.name) {
        return updatedExercise;
      }
      return exercise;
    });

    setExercises(updatedExercises);
  };

  const handleSaveWorkout = () => {
    console.log("SAVING WORKOUT");
    alert(`Workout Saved! Congrats on completing ${routine.name}!`);
    navigate("/");
  };

  return (
    // create an html layout that contains the routine title and a time at the top left,
    // and a start workout button and end workout button at the top right
    // and a list of exercises below that
    <div className="workout__page-layout bg-1">
      {routine ? (
        <>
          <div className="start-workout__wrapper">
            <div className="start-workout-routine-name">
              {/* <h1>{routine.name} - 00:00</h1> */}
              <h1>{routine.name}</h1>
            </div>
            <div className="start-workout-timer">
              <button className="button-1" onClick={() => handleSaveWorkout()}>
                Save Workout
              </button>
              {/* <button className="button-1">End Workout</button> */}
            </div>
            <div className="start-workout-timer">
              <button className="button-1" onClick={() => setToggle(!toggle)}>
                Edit Workout
              </button>
            </div>
          </div>
          <div className="workout-exercises__wrapper">
            <div className="panels__wrapper-2">
              {/* map elements from exercises into child div elements */}
              {exercises.map((exercise, index) => (
                <div className="panel-2 bg-2" key={index}>
                  <h2>{exercise.name}</h2>
                  <div className="flex-row">
                    <h3>Sets: </h3>
                    {toggle ? (
                      <h3 onDoubleClick={() => setToggle(!toggle)}>
                        {exercise.sets}
                      </h3>
                    ) : (
                      <input
                        type="text"
                        name="sets"
                        value={exercise.sets}
                        onChange={(e) => handleOnChange(e, index)}
                      />
                    )}
                  </div>
                  <div className="flex-row">
                    <h3>Reps: </h3>
                    {toggle ? (
                      <h3 onDoubleClick={() => setToggle(!toggle)}>
                        {exercise.reps}
                      </h3>
                    ) : (
                      <input
                        type="text"
                        name="reps"
                        value={exercise.reps}
                        onChange={(e) => handleOnChange(e, index)}
                      />
                    )}
                  </div>
                  <div className="flex-row">
                    <h3>Weight: </h3>
                    {toggle ? (
                      <h3 onDoubleClick={() => setToggle(!toggle)}>
                        {exercise.weight}
                      </h3>
                    ) : (
                      <input
                        type="text"
                        name="weight"
                        value={exercise.weight}
                        onChange={(e) => handleOnChange(e, index)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h1>Please Select a Routine from the Routines Page!</h1>
      )}
    </div>
  );
}
