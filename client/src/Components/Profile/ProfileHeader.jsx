import React from "react";

import Bear from "../../assets/1bear.png";
import Panda from "../../assets/2panda.png";
import Skelly from "../../assets/3skelly.png";
import Avo from "../../assets/4avo.png";

import "./styles.css";

export default function ProfileHeader({
  username,
  age,
  profilePic,
  onProfilePicChange,
  handleLogOut,
}) {
  const displayProfilePic = (profilePic) => {
    console.log("NEW PROFILE PIC: ", profilePic);
    if (profilePic === 1 || profilePic === "1") {
      return <img src={Bear} alt="" height="150" width="150" />;
    } else if (profilePic === 2 || profilePic === "2") {
      return <img src={Panda} alt="" height="150" width="150" />;
    } else if (profilePic === 3 || profilePic === "3") {
      return <img src={Skelly} alt="" height="150" width="150" />;
    } else {
      return <img src={Avo} alt="" height="150" width="150" />;
    }
  };

  return (
    <div className="profile__header">
      <div className="profile__header-info">
        {displayProfilePic(profilePic)}
        <button className="button-1" onClick={handleLogOut}>
          LOG OUT
        </button>
        {/* dropdown form with four options */}
        <form>
          <select onChange={onProfilePicChange}>
            {/* hide first option after clicking away */}
            <option hidden></option>
            <option value={1}>Bear</option>
            <option value={2}>Panda</option>
            <option value={3}>Skelly</option>
            <option value={4}>Avo</option>
          </select>
        </form>
      </div>
      <div className="profile__header-info">
        <h1 className="profile-username">User - {username}</h1>
        <h1>Age - {age}</h1>
      </div>
    </div>
  );
}
