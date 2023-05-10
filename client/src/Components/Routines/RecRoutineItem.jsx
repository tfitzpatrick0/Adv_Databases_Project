import React, { useState, useEffect } from "react";

import { generateRecRoute } from "../../utils/api";

import "./styles.css";
import axios from "axios";

export default function RecRoutineItem({ handleAddRoutine }) {
  const recName = "Recommended Routine";
  const recDesc = "This is a recommended routine";
  const [recRoutineEntries, setRecRoutineEntries] = useState([]);

  useEffect(() => {
    axios.get(generateRecRoute).then((res) => {
      console.log("Recommended Routine: ", res.data);

      let currRoutineEntries = [];

      for (const key in res.data) {
        console.log("ExName: ", res.data[key][0][1]);
        currRoutineEntries.push({
          exId: res.data[key][0][0],
          exName: res.data[key][0][1],
          sets: 4,
          reps: 12,
          weight: 135,
          intensity: 7,
        });
      }

      setRecRoutineEntries(currRoutineEntries);
    });
  }, []);

  return (
    <div className="rec-routine bg-2">
      <button
        className="button-1"
        onClick={() => handleAddRoutine(recName, recDesc, recRoutineEntries)}
      >
        Add To Routines
      </button>
      <h1>{recName}</h1>
      <h2>{recDesc}</h2>
      {recRoutineEntries.map((recRoutineEntry, index) => (
        <div className="rec-routine-item" key={index}>
          <h3>{recRoutineEntry.exName}</h3>
          <h4>Sets: {recRoutineEntry.sets}</h4>
          <h4>Reps: {recRoutineEntry.reps}</h4>
          <h4>Weight: {recRoutineEntry.weight}</h4>
          <h4>Intensity: {recRoutineEntry.intensity}</h4>
        </div>
      ))}
    </div>
  );
}
