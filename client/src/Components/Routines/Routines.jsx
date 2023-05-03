import React, { useState, useEffect } from "react";
import RoutineItem from "./RoutineItem";

import "./styles.css";

export default function Routines() {
  const [routines, setRoutines] = useState([]);
  const [recRoutines, setRecRoutines] = useState([]);

  useEffect(() => {
    // set routines as a dictionary object. each routine will have a name and a list of exercises
    setRoutines([
      {
        id: 0,
        name: "routine 1",
        exercises: ["exercise 1", "exercise 2", "exercise 3"],
      },
      {
        id: 1,
        name: "routine 2",
        exercises: ["exercise 1", "exercise 2", "exercise 3"],
      },
    ]);
    // setRoutines([
    //   "routine 1",
    //   "routine 2",
    //   "routine 3",
    //   "routine 4",
    //   "routine 5",
    //   "routine 6",
    //   "routine 7",
    //   "routine 8",
    //   "routine 9",
    //   "routine 10",
    //   "routine 11",
    //   "routine 12",
    //   "routine 13",
    //   "routine 14",
    //   "routine 15",
    //   "routine 16",
    //   "routine 17",
    //   "routine 18",
    //   "routine 19",
    //   "routine 20",
    // ]);
    setRecRoutines([
      {
        name: "rec routine 1",
        exercises: ["exercise 1", "exercise 2", "exercise 3"],
      },
      {
        name: "rec routine 2",
        exercises: ["exercise 1", "exercise 2", "exercise 3"],
      },
    ]);
  }, []);

  // create a function handleAddRoutine() that adds a routine to the list of routines
  const handleAddRoutine = () => {
    let newRoutine = {
      name: "routine test",
      exercises: ["exercise 1", "exercise 2", "exercise 3"],
    };
    setRoutines([...routines, newRoutine]);
  };

  const handleAddExercise = (routine, exercise) => {
    // console.log(routine);
    // console.log(exercise);

    // add exercises to routine.exercises
    const currRoutineId = routines.findIndex((r) => r.id === routine.id);
    console.log("Current Routine ID: ", currRoutineId);

    const updatedRoutine = {
      ...routines[currRoutineId],
      exercises: [...routines[currRoutineId].exercises, exercise],
    };
    console.log("Updated Routine: ", updatedRoutine);

    const newRoutines = [...routines];
    newRoutines[currRoutineId] = updatedRoutine;

    setRoutines(newRoutines);
  };

  return (
    <div className="routines__page-layout bg-1">
      <div className="user-routines__wrapper">
        <div className="user-routines-title">
          <h1>MY ROUTINES</h1>
          <button className="button-1" onClick={() => handleAddRoutine()}>
            Add Routine
          </button>
        </div>
        <div className="user-routines__body">
          {/* Want to add an on click routine dropdown with more info */}
          {routines.map((routine, index) => (
            // <div className="routine bg-1" key={index}>
            //   <h2>{routine}</h2>
            // </div>
            <RoutineItem
              routine={routine}
              handleAddExercise={handleAddExercise}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="rec-routines__wrapper">
        {recRoutines.map((routine, index) => (
          <div className="rec-routine bg-2" key={index}>
            <h2>{routine.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
