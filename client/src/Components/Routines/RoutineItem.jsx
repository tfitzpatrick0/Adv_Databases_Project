import React, { useState, useEffect } from "react";
import axios from "axios";
import Exercises from "../Exercises/Exercises";

import {
  getAnyMaxIdRoute,
  getEntriesByRoutineRoute,
  addRoutineEntryRoute,
} from "../../utils/api";

import "./styles.css";

export default function RoutineItem({
  routine,
  handleStartWorkout,
  handleOnSave,
}) {
  const [routineEntries, setRoutineEntries] = useState([]);
  const [showRoutineEntries, setShowRoutineEntries] = useState(false);
  const [showExercises, setShowExercises] = useState(false);
  const [toggle, setToggle] = useState(true);

  // const [exercises, setExercises] = useState([
  //   "exercise 1",
  //   "exercise 2",
  //   "exercise 3",
  // ]);

  useEffect(() => {
    axios.get(getEntriesByRoutineRoute + routine.id).then((res) => {
      console.log(
        "Routine Entries from DB" + " for " + routine.name + ": ",
        res.data
      );
      let currRoutineEntries = [];

      res.data.forEach((currRoutineEntry) => {
        currRoutineEntries.push({
          entryId: currRoutineEntry[0],
          exId: currRoutineEntry[1],
          exName: currRoutineEntry[2],
          sets: currRoutineEntry[3],
          reps: currRoutineEntry[4],
          weight: currRoutineEntry[5],
          intensity: currRoutineEntry[6],
        });
      });

      setRoutineEntries(currRoutineEntries);
    });
  }, []);

  const selectExercise = async (exerciseId, exerciseName) => {
    console.log("SELECTED EXERCISE: ", exerciseName);
    setShowExercises(!showExercises);

    let newRoutineEntryId;

    await axios
      .post(getAnyMaxIdRoute, {
        column: "routine_entry_id",
        table: "routine_entry",
      })
      .then((res) => {
        console.log("Max Routine Entry ID: ", res.data);
        newRoutineEntryId = parseInt(res.data[0]) + 1;
        console.log("New Routine Entry ID: ", newRoutineEntryId);
      });

    const newRoutineEntry = {
      entryId: newRoutineEntryId,
      exId: exerciseId,
      exName: exerciseName,
      sets: 3,
      reps: 10,
      weight: 100,
      intensity: 5,
    };

    const updatedRoutineEntries = [...routineEntries, newRoutineEntry];
    setRoutineEntries(updatedRoutineEntries);

    // add routine entry to database
    // let {routineeid, exid, routinefk, rreps, tweight, setsc, dur, intense, note} = req.body;
    axios
      .post(addRoutineEntryRoute, {
        routineeid: newRoutineEntryId,
        exid: exerciseId,
        routinefk: routine.id,
        rreps: newRoutineEntry.reps,
        tweight: newRoutineEntry.weight,
        setsc: newRoutineEntry.sets,
        intense: newRoutineEntry.intensity,
      })
      .then((res) => {
        console.log("Added Routine Entry: ", res.data);
      });
  };

  const handleOnChange = (e, entryIndex) => {
    e.preventDefault();
    console.log(e.target);

    const { name, value: newValue } = e.target;
    console.log(name, newValue);

    console.log("ENTRY INDEX: ", entryIndex);

    const updatedRoutineEntry = {
      ...routineEntries[entryIndex],
      [name]: newValue,
    };
    console.log("Updated Routine Entry: ", updatedRoutineEntry);

    const updatedRoutineEntries = routineEntries.map((routineEntry) => {
      if (routineEntry.entryId === updatedRoutineEntry.entryId) {
        return updatedRoutineEntry;
      }
      return routineEntry;
    });
    console.log("Updated Routine Entries: ", updatedRoutineEntries);

    setRoutineEntries(updatedRoutineEntries);
  };

  return (
    <div className="routine-item__wrapper bg-2">
      <div>
        <h2>{routine.name}</h2>
        <h3>{routine.desc}</h3>
        <button onClick={() => setShowRoutineEntries(!showRoutineEntries)}>
          Edit
        </button>
      </div>
      {showRoutineEntries && (
        <div className="popup__routine-item__wrapper">
          <div className="popup__routine-item__body">
            <div className="popup__routine-item-header">
              <div className="flex-column">
                <h1>{routine.name}</h1>
                <h3>{routine.desc}</h3>
              </div>
              <div>
                <button
                  className="button-1"
                  onClick={() => handleStartWorkout(routine)}
                >
                  GO TO WORKOUT
                </button>
                <button
                  className="button-1"
                  onClick={() => handleOnSave(routine.id, routineEntries)}
                >
                  Save
                </button>
                <button
                  className="button-2"
                  onClick={() => setShowRoutineEntries(!showRoutineEntries)}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="popup__routine-item-exercises">
              <button onClick={() => setToggle(!toggle)}>Edit</button>
              {routineEntries &&
                routineEntries.map((entry, index) => (
                  <div key={index}>
                    <h2>{entry.exName}</h2>
                    <div className="flex-row">
                      <h3>Sets: </h3>
                      {toggle ? (
                        <h3 onDoubleClick={() => setToggle(!toggle)}>
                          {entry.sets}
                        </h3>
                      ) : (
                        <input
                          type="text"
                          name="sets"
                          value={entry.sets}
                          onChange={(e) => handleOnChange(e, index)}
                        />
                      )}
                    </div>
                    <div className="flex-row">
                      <h3>Reps: </h3>
                      {toggle ? (
                        <h3 onDoubleClick={() => setToggle(!toggle)}>
                          {entry.reps}
                        </h3>
                      ) : (
                        <input
                          type="text"
                          name="reps"
                          value={entry.reps}
                          onChange={(e) => handleOnChange(e, index)}
                        />
                      )}
                    </div>
                    <div className="flex-row">
                      <h3>Weight: </h3>
                      {toggle ? (
                        <h3 onDoubleClick={() => setToggle(!toggle)}>
                          {entry.weight}
                        </h3>
                      ) : (
                        <input
                          type="text"
                          name="weight"
                          value={entry.weight}
                          onChange={(e) => handleOnChange(e, index)}
                        />
                      )}
                    </div>
                    <div className="flex-row">
                      <h3>Intensity: </h3>
                      {toggle ? (
                        <h3 onDoubleClick={() => setToggle(!toggle)}>
                          {entry.intensity}
                        </h3>
                      ) : (
                        <input
                          type="text"
                          name="intensity"
                          value={entry.intensity}
                          onChange={(e) => handleOnChange(e, index)}
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <button
              className="button-1"
              // make the functionality onClick={() => setShowExercises(!showExercises)} and also setShowRoutineEntries(!showRoutineEntries)
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
