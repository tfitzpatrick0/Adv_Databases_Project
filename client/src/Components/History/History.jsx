import React, { useState, useEffect } from "react";
import axios from "axios";

import { getHistoryRoute } from "../../utils/api";

import "./styles.css";

export default function History() {
  const [history, setHistory] = useState([]);
  const [date, setDate] = useState();
  const [routine, setRoutine] = useState();

  useEffect(() => {
    // demo with UID = 1, should be stored in localStorage to pass into getProfile request
    const uid = 1;

    axios.get(getHistoryRoute + uid).then((res) => {
      console.log("History Data: ", res.data);
      // setHistory(res.data[0][0]);
      // setDate(res.data[0][1]);
      // setRoutine(res.data[0][2]);
      setHistory(res.data);
    });
  }, []);

  return (
    <div>
      {/* <h1>HISTORY: {history}</h1>
      <h3>DATE: {date}</h3>
      <h3>ROUTINE: {routine}</h3> */}
      {history.map((historyItem, index) => (
        <div key={index}>
          <h1>ROUTINE: {historyItem[2]}</h1>
          <h3>DATE: {historyItem[1]}</h3>
        </div>
      ))}
    </div>
  );
}
