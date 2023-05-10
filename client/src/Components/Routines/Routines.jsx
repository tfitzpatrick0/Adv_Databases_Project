import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RoutineItem from "./RoutineItem";
import RecRoutineItem from "./RecRoutineItem";
import AddRoutine from "./AddRoutine";
import Workout from "../Workout/Workout";

import {
  getRoutinesByUserRoute,
  updateRoutineEntryRoute,
  getAnyMaxIdRoute,
  addRoutineRoute,
  addRoutineEntryRoute,
  deleteRoutineRoute,
} from "../../utils/api";

import "./styles.css";

export default function Routines() {
  const navigate = useNavigate();

  const [routines, setRoutines] = useState([]);

  const [showWorkout, setShowWorkout] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState();

  useEffect(() => {
    // get routines from database --> only get routineid, name, desc
    axios
      .get(getRoutinesByUserRoute + localStorage.getItem("uid"))
      .then((res) => {
        console.log("Routines from DB: ", res.data);
        let currRoutines = [];

        res.data.forEach((currRoutine) => {
          currRoutines.push({
            id: currRoutine[0],
            name: currRoutine[1],
            desc: currRoutine[2],
          });
        });

        setRoutines(currRoutines);
      });
  }, []);

  // create a function handleAddRoutine() that adds a routine to the list of routines
  const handleAddRoutine = async (
    newRoutineName,
    newRoutineDesc,
    newRoutineEntries
  ) => {
    let newRoutineId;

    console.log("Adding Routine: ", newRoutineName);
    console.log("Routine Description: ", newRoutineDesc);

    // wait for the max id to be retrieved from the database before adding the new routine
    await axios
      .post(getAnyMaxIdRoute, {
        column: "routine_id",
        table: "routines",
      })
      .then((res) => {
        console.log("Max Routine ID: ", res.data);
        newRoutineId = parseInt(res.data[0]) + 1;
        console.log("New Routine ID: ", newRoutineId);
      });

    const newRoutine = {
      id: newRoutineId,
      name: newRoutineName,
      desc: newRoutineDesc,
    };

    // add routine to database
    // let {routineid, uuserid, title, descr} = req.body;
    axios
      .post(addRoutineRoute, {
        routineid: newRoutineId,
        uuserid: localStorage.getItem("uid"),
        title: newRoutineName,
        descr: newRoutineDesc,
      })
      .then((res) => {
        console.log("Added Routine: ", res.data);
      });

    if (newRoutineEntries) {
      console.log("Adding Routine Entries: ", newRoutineEntries);

      for (const routineEntry of newRoutineEntries) {
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

        await axios
          .post(addRoutineEntryRoute, {
            routineeid: newRoutineEntryId,
            exid: routineEntry.exId,
            routinefk: newRoutineId,
            rreps: routineEntry.reps,
            tweight: routineEntry.weight,
            setsc: routineEntry.sets,
            intense: routineEntry.intensity,
          })
          .then((res) => {
            console.log("Added Routine Entry: ", res.data);
          });
      }
    }

    setRoutines([...routines, newRoutine]);
  };

  // Want to eventually navigate to the workout page with the selected routine
  const handleStartWorkout = (routine) => {
    console.log("START WORKOUT");
    setSelectedRoutine(routine);
    setShowWorkout(true);
    // navigate("/workout");
  };

  const handleDeleteRoutine = (routine) => {
    console.log("DELETING ROUTINE: ", routine.name);

    const updatedRoutines = routines.filter(
      (routineItem) => routineItem.id !== routine.id
    );
    console.log("Updated Routines: ", updatedRoutines);

    setRoutines(updatedRoutines);

    axios
      .post(deleteRoutineRoute, {
        routineid: routine.id,
        userid: localStorage.getItem("uid"),
      })
      .then((res) => {
        console.log("Deleted Routine: ", res.data);
      });
  };

  const handleOnSave = (routineId, routineEntries) => {
    console.log("Saving Routine Number: ", routineId);

    routineEntries.forEach((entry) => {
      axios
        .post(updateRoutineEntryRoute, {
          entryid: entry.entryId,
          key: "sets_comp",
          value: entry.sets,
        })
        .then((res) => {
          console.log("sets", res);
        });

      axios
        .post(updateRoutineEntryRoute, {
          entryid: entry.entryId,
          key: "reps",
          value: entry.reps,
        })
        .then((res) => {
          console.log("reps", res);
        });

      axios
        .post(updateRoutineEntryRoute, {
          entryid: entry.entryId,
          key: "tot_weight",
          value: entry.weight,
        })
        .then((res) => {
          console.log("weight", res);
        });

      axios
        .post(updateRoutineEntryRoute, {
          entryid: entry.entryId,
          key: "intensity",
          value: entry.intensity,
        })
        .then((res) => {
          console.log("intensity", res);
        });
    });
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
              <AddRoutine handleAddRoutine={handleAddRoutine} />
            </div>
            <div className="user-routines__body">
              {/* Want to add an on click routine dropdown with more info */}
              {routines &&
                routines.map((routine, index) => (
                  // <div className="routine bg-1" key={index}>
                  //   <h2>{routine}</h2>
                  // </div>
                  <RoutineItem
                    routine={routine}
                    handleStartWorkout={handleStartWorkout}
                    handleOnSave={handleOnSave}
                    handleDeleteRoutine={handleDeleteRoutine}
                    key={index}
                  />
                ))}
            </div>
          </div>
          <div className="rec-routines__wrapper">
            <RecRoutineItem handleAddRoutine={handleAddRoutine} />
          </div>
        </div>
      )}
    </>
  );
}
