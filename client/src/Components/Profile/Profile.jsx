import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileHeader from "./ProfileHeader";
import Achievements from "./Achievements";

import { getProfileRoute, updateProfilePicRoute } from "../../utils/api";

import "./styles.css";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState();
  const [profilePic, setProfilePic] = useState();
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // demo with UID = 1, should be stored in localStorage to pass into getProfile request
    const uid = 1;

    axios.get(getProfileRoute + uid).then((res) => {
      console.log("Profile Data: ", res.data[0]);
      setUsername(res.data[0][0]);
      setBio(res.data[0][1]);
      setAge(res.data[0][2]);
      setProfilePic(res.data[0][3]);
      setAchievements(res.data[0].slice(4));
    });
  }, []);

  const onProfilePicChange = (e) => {
    e.preventDefault();
    console.log("Profile Pic: ", e.target.value);
    setProfilePic(e.target.value);

    // const uid = 1;

    // const reqData = {
    //   userid: uid,
    //   newval: e.target.value,
    // };

    // axios.post(updateProfilePicRoute, reqData).then((res) => {
    //   console.log("Profile Pic update response: ", res.data);
    // });
  };

  // create an html layout that contains a profile header at the top, with image and username
  // below that, have a div section that contains profile information like a bio, age, height, weight, etc.
  // below that have a div section with a header above that reads "Dashboard"
  // this section should be a similar format to the profile information div
  // finally, at the bottom, have an area for achievement badges that will be displayed in a single row
  return (
    <div className="bg-1">
      <div className="profile__page-layout">
        <div className="profile__wrapper">
          <ProfileHeader
            username={username}
            age={age}
            profilePic={profilePic}
            onProfilePicChange={onProfilePicChange}
          />
          <div className="profile__info">
            <div className="profile__bio">
              <h1>Bio</h1>
              <p>{bio}</p>
            </div>
          </div>
          <div className="achievements__header">
            <h1>Achievements</h1>
          </div>
          <Achievements achievements={achievements} />
          <div className="dashboard__header">
            <h1>Dashboard</h1>
          </div>
          <div className="dashboard__info">
            <div className="dashboard__bio">
              <h2>Your progress report for this week:</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Nullam euismod, nisl eget ultricies ultrices, nunc
                nisl aliquam nunc, vitae aliquam nisl nunc eget nunc. Nulla
                facilisi. Nullam euismod, nisl eget ultricies ultrices, nunc
                nisl aliquam nunc, vitae aliquam nisl nunc eget nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
