import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RoutineItem from "./RoutineItem";

import Workout from "../Workout/Workout";

import "./styles.css";

export default function Routines() {
  const navigate = useNavigate();

  const [routines, setRoutines] = useState([]);
  const [recRoutines, setRecRoutines] = useState([]);

  const [showWorkout, setShowWorkout] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState();

  useEffect(() => {
    // set routines as a dictionary object. each routine will have a name and a list of exercises
    setRoutines([
      {
        id: 0,
        name: "Push Day",
        exercises: [
          {
            name: "Bench Press",
            sets: 3,
            reps: 6,
            weight: 225,
          },
          {
            name: "Pushups",
            sets: 4,
            reps: 25,
            weight: 0,
          },
          {
            name: "Cable Crossover",
            sets: 3,
            reps: 10,
            weight: 50,
          },
        ],
      },
      {
        id: 1,
        name: "Pull Day",
        exercises: [
          {
            name: "Barbell bent-over row",
            sets: 4,
            reps: 10,
            weight: 155,
          },
          {
            name: "Lat pull-down",
            sets: 4,
            reps: 12,
            weight: 120,
          },
          {
            name: "Single-arm dumbbell row",
            sets: 3,
            reps: 16,
            weight: 55,
          },
        ],
      },
    ]);

    setRecRoutines([
      {
        id: 0,
        name: "rec routine 1",
        // exercises: ["exercise 1", "exercise 2", "exercise 3"],
        exercises: [
          {
            id: 0,
            exercise: {
              name: "exercise 1",
              sets: 3,
              reps: 10,
              weight: 100,
            },
          },
        ],
      },
    ]);
  }, []);

  // create a function handleAddRoutine() that adds a routine to the list of routines
  const handleAddRoutine = () => {
    const newRoutine = {
      id: routines.length,
      name: "routine test",
      exercises: [
        {
          name: "exercise 1",
          sets: 3,
          reps: 10,
          weight: 100,
        },
      ],
    };
    setRoutines([...routines, newRoutine]);
  };

  // Want to eventually navigate to the workout page with the selected routine
  const handleStartWorkout = (routine) => {
    console.log("START WORKOUT");
    setSelectedRoutine(routine);
    setShowWorkout(true);
    // navigate("/workout");
  };

  const handleAddExercise = (routine, exerciseName) => {
    const exercise = {
      name: exerciseName,
      sets: 3,
      reps: 10,
      weight: 100,
    };

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

  const handleOnChange = (e, routineIndex, exerciseIndex) => {
    e.preventDefault();
    console.log(e.target);

    const { name, value: newValue } = e.target;
    console.log(name, newValue);

    console.log("ROUTINE INDEX: ", routineIndex);
    console.log("EXERCISE INDEX: ", exerciseIndex);

    console.log(
      "LENGTH OF EXERCISES: ",
      routines[routineIndex].exercises.length
    );
    console.log(routines[routineIndex].exercises[exerciseIndex]);

    const updatedExercise = {
      ...routines[routineIndex].exercises[exerciseIndex],
      [name]: newValue,
    };
    console.log("Updated Exercise: ", updatedExercise);

    const updatedExercises = routines[routineIndex].exercises.map(
      (exercise) => {
        if (exercise.name === updatedExercise.name) {
          return updatedExercise;
        }
        return exercise;
      }
    );
    console.log("Updated Exercises ", updatedExercises);

    const updatedRoutine = {
      ...routines[routineIndex],
      exercises: updatedExercises,
    };
    console.log("Updated Routine: ", updatedRoutine);

    const updatedRoutines = routines.map((routine) => {
      if (routine.id === routines[routineIndex].id) {
        return updatedRoutine;
      }
      return routine;
    });

    setRoutines(updatedRoutines);
  };

  return (
    <>
      {showWorkout ? (
        <Workout routine={selectedRoutine} />
      ) : (
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
                  handleStartWorkout={handleStartWorkout}
                  handleAddExercise={handleAddExercise}
                  handleOnChange={handleOnChange}
                  routineIndex={index}
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
      )}
      {/* {showWorkout && <Workout routine={selectedRoutine} />} */}
    </>
  );
}
