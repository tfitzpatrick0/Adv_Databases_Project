import React from "react";

import Bear from "../../assets/1bear.png";
import Panda from "../../assets/2panda.png";
import Skelly from "../../assets/3skelly.png";
import Avo from "../../assets/4avo.png";

import "./styles.css";

export default function ProfileHeader({ username, age, profilePic }) {
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
