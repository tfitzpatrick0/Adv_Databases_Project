import React, { useState } from "react";

import "./styles.css";

export default function RoutineItem({ routine }) {
  const [isOpened, setIsOpened] = useState(false);
  const [exercises, setExercises] = useState([
    "exercise 1",
    "exercise 2",
    "exercise 3",
  ]);

  return (
    <div className="routine-item__wrapper bg-2">
      <div>
        <h2>{routine}</h2>
        <button onClick={() => setIsOpened(!isOpened)}>Edit</button>
      </div>
      {isOpened && (
        <div className="popup__routine-item__wrapper">
          <div className="popup__routine-item__body">
            {/* <span className="close-icon" onClick={() => setIsOpened(!isOpened)}>
              x
            </span> */}
            <div className="popup__routine-item-header">
              <h1>{routine}</h1>
              <div>
                <button className="button-1">Save</button>
                <button
                  className="button-2"
                  onClick={() => setIsOpened(!isOpened)}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="popup__routine-item-exercises">
              {exercises.map((exercise, index) => (
                <div key={index}>
                  <h2>{exercise}</h2>
                  <button>Edit</button>
                </div>
              ))}
            </div>
            <button className="button-1">Add Exercises</button>
          </div>
        </div>
      )}
    </div>
  );
}
