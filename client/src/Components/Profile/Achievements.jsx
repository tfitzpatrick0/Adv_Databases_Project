import React from "react";

import A1 from "../../assets/a1.png";
import A2 from "../../assets/a2.jpg";
import A3 from "../../assets/a3.jpg";
import A4 from "../../assets/a4.jpg";
import A5 from "../../assets/a5.png";

import "./styles.css";

export default function Achievements({ achievements }) {
  // const displayProfilePic = (profilePic) => {
  //   if (profilePic === 1) {
  //     return <img src={Bear} alt="" height="150" width="150" />;
  //   } else if (profilePic === 2) {
  //     return <img src={Panda} alt="" height="150" width="150" />;
  //   } else if (profilePic === 3) {
  //     return <img src={Skelly} alt="" height="150" width="150" />;
  //   } else {
  //     return <img src={Avo} alt="" height="150" width="150" />;
  //   }
  // };

  const images = [A1, A2, A3, A4, A5];

  return (
    <div className="achievements__info">
      {achievements.map((achievement, index) => {
        return (
          <div className="achievements__badges" key={index}>
            <h2>{achievement}</h2>
            <img src={images[index]} alt="badge" />
          </div>
        );
      })}
    </div>
  );
}
