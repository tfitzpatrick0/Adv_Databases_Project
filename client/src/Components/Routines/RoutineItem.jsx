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
        <div className="routine-item__popup-wrapper">
          <div className="routine-item__popup-body">
            <span className="close-icon" onClick={() => setIsOpened(!isOpened)}>
              x
            </span>
            {routine} is opened
          </div>
        </div>
      )}
    </div>
  );
}
