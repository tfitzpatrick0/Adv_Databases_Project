import React, { useState } from "react";

import "./styles.css";

export default function AddRoutine({ handleAddRoutine }) {
  const [newRoutineName, setNewRoutineName] = useState("");
  const [showAddRoutine, setShowAddRoutine] = useState(false);

  return (
    <>
      <button
        className="button-1"
        onClick={() => setShowAddRoutine(!showAddRoutine)}
      >
        Add Routine
      </button>
      {showAddRoutine && (
        <div className="popup__routine-item__wrapper">
          <div className="popup__routine-item__body">
            <div className="popup__routine-item-header">
              <h1>Create a New Routine</h1>
              <div>
                <button
                  className="button-1"
                  onClick={() => {
                    handleAddRoutine(newRoutineName);
                    setShowAddRoutine(!showAddRoutine);
                  }}
                >
                  Create Routine
                </button>
                <button
                  className="button-1"
                  onClick={() => setShowAddRoutine(!showAddRoutine)}
                >
                  Close
                </button>
              </div>
            </div>
            <div>
              <h2>Routine Name: </h2>
              <input
                type="text"
                onChange={(e) => setNewRoutineName(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
