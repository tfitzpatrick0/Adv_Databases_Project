import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  getAnyMaxIdRoute,
  getEntriesByRoutineRoute,
  saveWorkoutToHistRoute,
} from "../../utils/api";

import "./styles.css";

export default function Workout({ routine }) {
  const navigate = useNavigate();

  const [routineEntries, setRoutineEntries] = useState([]);

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    // set routineEntries from database
    if (routine) {
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
    }
  }, []);

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

  const handleSaveWorkout = async () => {
    console.log("SAVING WORKOUT");
    alert(`Workout Saved! Congrats on completing ${routine.name}!`);
    // navigate("/");

    let newWorkoutId;

    await axios
      .post(getAnyMaxIdRoute, {
        column: "workout_id",
        table: "history",
      })
      .then((res) => {
        console.log("Max Workout ID: ", res.data);
        newWorkoutId = parseInt(res.data[0]) + 1;
        console.log("New Workout ID: ", newWorkoutId);
      });

    if (routineEntries) {
      console.log("Adding Routine Entries To History: ", routineEntries);

      for (const routineEntry of routineEntries) {
        let newHistoryId;

        await axios
          .post(getAnyMaxIdRoute, {
            column: "hist_id",
            table: "history",
          })
          .then((res) => {
            console.log("Max History ID: ", res.data);
            newHistoryId = parseInt(res.data[0]) + 1;
            console.log("New History ID: ", newHistoryId);
          });

        // let {histid, workoutid, userid, routinename, exercisename, rreps, totweight, setscomp, iintensity} = req.body;
        await axios
          .post(saveWorkoutToHistRoute, {
            histid: newHistoryId,
            workoutid: newWorkoutId,
            userid: localStorage.getItem("uid"),
            routinename: routine.name,
            exercisename: routineEntry.exName,
            rreps: routineEntry.reps,
            totweight: routineEntry.weight,
            setscomp: routineEntry.sets,
            iintensity: routineEntry.intensity,
          })
          .then((res) => {
            console.log("Added Workout Entry to History: ", res.data);
          });
      }
    }

    navigate("/");
  };

  return (
    // create an html layout that contains the routine title and a time at the top left,
    // and a start workout button and end workout button at the top right
    // and a list of routineEntries below that
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
              {/* map elements from routineEntries into child div elements */}
              {routineEntries.map((routineEntry, index) => (
                <div className="panel-2 bg-2" key={index}>
                  <h2>{routineEntry.exName}</h2>
                  <div className="flex-row">
                    <h3>Sets: </h3>
                    {toggle ? (
                      <h3 onDoubleClick={() => setToggle(!toggle)}>
                        {routineEntry.sets}
                      </h3>
                    ) : (
                      <input
                        type="text"
                        name="sets"
                        value={routineEntry.sets}
                        onChange={(e) => handleOnChange(e, index)}
                      />
                    )}
                  </div>
                  <div className="flex-row">
                    <h3>Reps: </h3>
                    {toggle ? (
                      <h3 onDoubleClick={() => setToggle(!toggle)}>
                        {routineEntry.reps}
                      </h3>
                    ) : (
                      <input
                        type="text"
                        name="reps"
                        value={routineEntry.reps}
                        onChange={(e) => handleOnChange(e, index)}
                      />
                    )}
                  </div>
                  <div className="flex-row">
                    <h3>Weight: </h3>
                    {toggle ? (
                      <h3 onDoubleClick={() => setToggle(!toggle)}>
                        {routineEntry.weight}
                      </h3>
                    ) : (
                      <input
                        type="text"
                        name="weight"
                        value={routineEntry.weight}
                        onChange={(e) => handleOnChange(e, index)}
                      />
                    )}
                  </div>
                  <div className="flex-row">
                    <h3>Intensity: </h3>
                    {toggle ? (
                      <h3 onDoubleClick={() => setToggle(!toggle)}>
                        {routineEntry.intensity}
                      </h3>
                    ) : (
                      <input
                        type="text"
                        name="intensity"
                        value={routineEntry.intensity}
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
