import React, { useState } from "react";

import "./styles.css";

export default function RoutineItem({ routine }) {
  const [isOpened, setIsOpened] = useState(false);

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
            <div className="popup__header">
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
          </div>
        </div>
      )}
    </div>
  );
}
