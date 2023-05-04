import React, { useState } from "react";

import Exercises from "../Exercises/Exercises";

import "./styles.css";

export default function RoutineItem({
  routine,
  handleStartWorkout,
  handleAddExercise,
  handleOnChange,
  routineIndex,
}) {
  const [showRoutineItem, setShowRoutineItem] = useState(false);
  const [showExercises, setShowExercises] = useState(false);
  const [toggle, setToggle] = useState(true);

  // const [exercises, setExercises] = useState([
  //   "exercise 1",
  //   "exercise 2",
  //   "exercise 3",
  // ]);

  const selectExercise = (exerciseName) => {
    console.log("SELECTED EXERCISE: ", exerciseName);
    setShowExercises(!showExercises);
    handleAddExercise(routine, exerciseName);
  };

  return (
    <div className="routine-item__wrapper bg-2">
      <div>
        <h2>{routine.name}</h2>
        <button onClick={() => setShowRoutineItem(!showRoutineItem)}>
          Edit
        </button>
      </div>
      {showRoutineItem && (
        <div className="popup__routine-item__wrapper">
          <div className="popup__routine-item__body">
            {/* <span className="close-icon" onClick={() => setShowRoutineItem(!showRoutineItem)}>
              x
            </span> */}
            <div className="popup__routine-item-header">
              <h1>{routine.name}</h1>
              <div>
                <button
                  className="button-1"
                  onClick={() => handleStartWorkout(routine)}
                >
                  GO TO WORKOUT
                </button>
                <button className="button-1">Save</button>
                <button
                  className="button-2"
                  onClick={() => setShowRoutineItem(!showRoutineItem)}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="popup__routine-item-exercises">
              <button onClick={() => setToggle(!toggle)}>Edit</button>
              {routine.exercises.map((exercise, index) => (
                <div key={index}>
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
                        onChange={(e) => handleOnChange(e, routineIndex, index)}
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
                        onChange={(e) => handleOnChange(e, routineIndex, index)}
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
                        onChange={(e) => handleOnChange(e, routineIndex, index)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="button-1"
              // make the functionality onClick={() => setShowExercises(!showExercises)} and also setShowRoutineItem(!showRoutineItem)
              onClick={() => setShowExercises(!showExercises)}
            >
              Add Exercises
            </button>
          </div>
        </div>
      )}
      {showExercises && (
        <div className="popup__routine-item__wrapper">
          <button onClick={() => setShowExercises(!showExercises)}>
            Close
          </button>
          <Exercises onExerciseClick={selectExercise} />
        </div>
      )}
    </div>
  );
}
