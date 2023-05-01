import React, { useState } from "react";

import "./styles.css";

export default function RoutineItem({ routine }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="routine-item bg-2">
      <div className="routine-item__header">
        <h2>{routine}</h2>
        <button
          className="routine-item__header__button"
          onClick={() => setIsOpened(!isOpened)}
        >
          {isOpened ? "Close" : "Open"}
        </button>
      </div>
      {isOpened && (
        <div className="popup-box">
          <div className="box">
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
