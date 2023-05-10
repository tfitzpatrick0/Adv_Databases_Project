import React, { useState, useEffect } from "react";

import "./styles.css";

export default function HistoryItem({ historyItem }) {
  const [showHistoryEntries, setShowHistoryEntries] = useState(false);

  return (
    <div className="history-item__wrapper">
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

// {showRoutineEntries && (
//   <div className="popup__routine-item__wrapper">
//     <div className="popup__routine-item__body">
//       <div className="popup__routine-item-header">
//         <div className="flex-column">
//           <h1>{routine.name}</h1>
//           <h3>{routine.desc}</h3>
//         </div>
//         <div>
//           <button
//             className="button-1"
//             onClick={() => handleStartWorkout(routine)}
//           >
//             GO TO WORKOUT
//           </button>
//           <button
//             className="button-1"
//             onClick={() => handleOnSave(routine.id, routineEntries)}
//           >
//             Save
//           </button>
// <button
//   className="button-2"
//   onClick={() => setShowRoutineEntries(!showRoutineEntries)}
// >
//   Close
// </button>
//         </div>
//       </div>
//       <div className="popup__routine-item-exercises">
//         <button onClick={() => setToggle(!toggle)}>Edit</button>
//         {routineEntries &&
//           routineEntries.map((entry, index) => (
//             <div key={index}>
//               <h2>{entry.exName}</h2>
//               <div className="flex-row">
//                 <h3>Sets: </h3>
//                 {toggle ? (
//                   <h3 onDoubleClick={() => setToggle(!toggle)}>
//                     {entry.sets}
//                   </h3>
//                 ) : (
//                   <input
//                     type="text"
//                     name="sets"
//                     value={entry.sets}
//                     onChange={(e) => handleOnChange(e, index)}
//                   />
//                 )}
//               </div>
//               <div className="flex-row">
//                 <h3>Reps: </h3>
//                 {toggle ? (
//                   <h3 onDoubleClick={() => setToggle(!toggle)}>
//                     {entry.reps}
//                   </h3>
//                 ) : (
//                   <input
//                     type="text"
//                     name="reps"
//                     value={entry.reps}
//                     onChange={(e) => handleOnChange(e, index)}
//                   />
//                 )}
//               </div>
//               <div className="flex-row">
//                 <h3>Weight: </h3>
//                 {toggle ? (
//                   <h3 onDoubleClick={() => setToggle(!toggle)}>
//                     {entry.weight}
//                   </h3>
//                 ) : (
//                   <input
//                     type="text"
//                     name="weight"
//                     value={entry.weight}
//                     onChange={(e) => handleOnChange(e, index)}
//                   />
//                 )}
//               </div>
//               <div className="flex-row">
//                 <h3>Intensity: </h3>
//                 {toggle ? (
//                   <h3 onDoubleClick={() => setToggle(!toggle)}>
//                     {entry.intensity}
//                   </h3>
//                 ) : (
//                   <input
//                     type="text"
//                     name="intensity"
//                     value={entry.intensity}
//                     onChange={(e) => handleOnChange(e, index)}
//                   />
//                 )}
//               </div>
//             </div>
//           ))}
//       </div>
//       <button
//         className="button-1"
//         // make the functionality onClick={() => setShowExercises(!showExercises)} and also setShowRoutineEntries(!showRoutineEntries)
//         onClick={() => setShowExercises(!showExercises)}
//       >
//         Add Exercises
//       </button>
//     </div>
//   </div>
// )}
