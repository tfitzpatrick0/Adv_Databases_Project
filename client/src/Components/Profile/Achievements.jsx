import React from "react";

import A1 from "../../assets/a1.png";
import A2 from "../../assets/a2.jpg";
import A3 from "../../assets/a3.jpg";
import A4 from "../../assets/a4.jpg";
import A5 from "../../assets/a5.png";

import "./styles.css";

export default function Achievements({ achievements }) {
  const images = [A1, A2, A3, A4, A5];
  const achievementNames = [
    "7-Day Streak - Work out seven days in a row",
    "Workout Explorer - Try 5 different workout routines",
    "Consistency is Key - Log in at least 3 workouts every week for 1 month",
    "HydroPro - Drink eight cups of water every day for 1 week",
    "Old Reliable - Do the same workout routine 5 times",
  ];

  return (
    <div className="achievements__info">
      {achievements.map((achievement, index) => {
        return (
          <div className="achievements__badges" key={index}>
            <img
              className={achievement ? "" : "gray"}
              src={images[index]}
              alt="badge"
            />
            <h2>{achievementNames[index]}</h2>
          </div>
        );
      })}
    </div>
  );
}
