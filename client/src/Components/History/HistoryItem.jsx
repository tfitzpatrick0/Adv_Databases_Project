import React, { useState, useEffect } from "react";

import "./styles.css";

export default function HistoryItem({ historyItem }) {
  const [showHistoryEntries, setShowHistoryEntries] = useState(false);

  return (
    <div className="history-item__wrapper bg-2">
      <div>
        <h1>{historyItem.routineName}</h1>
        <h3>DATE: {historyItem.date}</h3>
        <button onClick={() => setShowHistoryEntries(!showHistoryEntries)}>
          View
        </button>
        {showHistoryEntries && (
          <div className="popup__routine-item__wrapper">
            <div className="popup__routine-item__body">
              <div className="popup__routine-item-header">
                <div className="flex-column">
                  <h1>{historyItem.routineName}</h1>
                  <h3>DATE: {historyItem.date}</h3>
                </div>
                <button
                  className="button-1"
                  onClick={() => setShowHistoryEntries(!showHistoryEntries)}
                >
                  Close
                </button>
              </div>
              <div className="popup__routine-item-exercises">
                {historyItem.entries &&
                  historyItem.entries.map((entry, index) => (
                    <div key={index}>
                      <h2>{entry.exName}</h2>
                      <div className="flex-column">
                        <h3>Sets: {entry.sets}</h3>
                        <h3>Reps: {entry.reps}</h3>
                        <h3>Weight: {entry.weight}</h3>
                        <h3>Intensity: {entry.intensity}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
