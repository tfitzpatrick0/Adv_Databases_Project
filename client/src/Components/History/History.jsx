import React, { useState, useEffect } from "react";
import axios from "axios";
import HistoryItem from "./HistoryItem";

import { getHistoryRoute } from "../../utils/api";

import "./styles.css";

export default function History() {
  const [history, setHistory] = useState([]);
  const [date, setDate] = useState();
  const [routine, setRoutine] = useState();

  useEffect(() => {
    // demo with UID = 1, should be stored in localStorage to pass into getProfile request
    const uid = localStorage.getItem("uid");

    axios.get(getHistoryRoute + uid).then((res) => {
      console.log("History Data: ", res.data);
      // setHistory(res.data[0][0]);
      // setDate(res.data[0][1]);
      // setRoutine(res.data[0][2]);
      let currHistory = [];
      res.data.forEach((currHistoryEntry) => {
        let currHistoryItem = currHistory.find(
          (historyItem) => historyItem.id === currHistoryEntry[0]
        );

        if (currHistoryItem) {
          // if currHistoryItem exists, add the entry to the currHistoryItem's entry list
          currHistoryItem.entries.push({
            exName: currHistoryEntry[3],
            sets: currHistoryEntry[6],
            reps: currHistoryEntry[4],
            weight: currHistoryEntry[5],
            intensity: currHistoryEntry[7],
          });
        } else {
          // if currHistoryItem does not exist, create a new history object and add it to currHistory
          currHistory.push({
            id: currHistoryEntry[0],
            routineName: currHistoryEntry[1],
            date: currHistoryEntry[2],
            entries: [
              {
                exName: currHistoryEntry[3],
                sets: currHistoryEntry[6],
                reps: currHistoryEntry[4],
                weight: currHistoryEntry[5],
                intensity: currHistoryEntry[7],
              },
            ],
          });
        }
      });

      setHistory(currHistory);
    });
  }, []);

  return (
    <div className="history__page-layout bg-1">
      <div className="user-history__wrapper">
        <div className="user-history-title">
          <h1>MY HISTORY</h1>
        </div>
        <div>
          {history.map((historyItem, index) => (
            <HistoryItem historyItem={historyItem} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
