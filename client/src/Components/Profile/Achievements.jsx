import React from "react";

import A1 from "../../assets/a1.png";
import A2 from "../../assets/a2.png";
import A3 from "../../assets/a3.png";
import A4 from "../../assets/a4.png";
import A5 from "../../assets/a5.png";

import "./styles.css";

export default function Achievements({ achievements }) {
  const displayProfilePic = (profilePic) => {
    if (profilePic === 1) {
      return <img src={Bear} alt="" height="150" width="150" />;
    } else if (profilePic === 2) {
      return <img src={Panda} alt="" height="150" width="150" />;
    } else if (profilePic === 3) {
      return <img src={Skelly} alt="" height="150" width="150" />;
    } else {
      return <img src={Avo} alt="" height="150" width="150" />;
    }
  };

  return (
    <div className="profile__header">
      {displayProfilePic(profilePic)}
      <div className="profile__header-info">
        <h1 className="profile-username">User - {username}</h1>
        <h1>Age - {age}</h1>
      </div>
    </div>
  );
}
