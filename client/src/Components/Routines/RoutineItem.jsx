import React, { useState } from "react";
import Exercises from "../Exercises/Exercises";

import "./styles.css";

export default function RoutineItem({ routine, handleAddExercise }) {
  const [expandRoutineItem, setExpandRoutineItem] = useState(false);
  const [expandExercises, setExpandExercises] = useState(false);

  // const [exercises, setExercises] = useState([
  //   "exercise 1",
  //   "exercise 2",
  //   "exercise 3",
  // ]);

  const selectExercise = (exercise) => {
    console.log("SELECTED EXERCISE: ", exercise);
    handleAddExercise(routine, exercise);
  };

  return (
    <div className="routine-item__wrapper bg-2">
      <div>
        <h2>{routine.name}</h2>
        <button onClick={() => setExpandRoutineItem(!expandRoutineItem)}>
          Edit
        </button>
      </div>
      {expandRoutineItem && (
        <div className="popup__routine-item__wrapper">
          <div className="popup__routine-item__body">
            {/* <span className="close-icon" onClick={() => setExpandRoutineItem(!expandRoutineItem)}>
              x
            </span> */}
            <div className="popup__routine-item-header">
              <h1>{routine.name}</h1>
              <div>
                <button className="button-1">Save</button>
                <button
                  className="button-2"
                  onClick={() => setExpandRoutineItem(!expandRoutineItem)}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="popup__routine-item-exercises">
              {routine.exercises.map((exercise, index) => (
                <div key={index}>
                  <h2>{exercise}</h2>
                  <button>Edit</button>
                </div>
              ))}
            </div>
            <button
              className="button-1"
              // make the functionality onClick={() => setExpandExercises(!expandExercises)} and also setExpandRoutineItem(!expandRoutineItem)
              onClick={() => setExpandExercises(!expandExercises)}
            >
              Add Exercises
            </button>
          </div>
        </div>
      )}
      {expandExercises && (
        <div className="popup__routine-item__wrapper">
          <button onClick={() => setExpandExercises(!expandExercises)}>
            Close
          </button>
          <Exercises onExerciseClick={selectExercise} />
        </div>
      )}
    </div>
  );
}
