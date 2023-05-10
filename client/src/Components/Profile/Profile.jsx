import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileHeader from "./ProfileHeader";
import Achievements from "./Achievements";

import {
  getProfileRoute,
  updateProfilePicRoute,
  updateAchievementRoute,
} from "../../utils/api";
import { getAge } from "../../utils/date";

import "./styles.css";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState();
  const [profilePic, setProfilePic] = useState();
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // demo with UID = 1, should be stored in localStorage to pass into getProfile request
    const uid = localStorage.getItem("uid");

    axios.get(getProfileRoute + uid).then((res) => {
      console.log("Profile Data: ", res.data[0]);
      setUsername(res.data[0][0]);
      setBio(res.data[0][1]);
      setAge(getAge(res.data[0][2]));
      setProfilePic(res.data[0][3]);
      setAchievements(res.data[0].slice(4));
    });
  }, []);

  const onProfilePicChange = (e) => {
    e.preventDefault();
    console.log("Profile Pic: ", e.target.value);
    setProfilePic(e.target.value);

    const uid = localStorage.getItem("uid");

    const reqData = {
      userid: uid,
      newval: e.target.value,
    };

    axios.post(updateProfilePicRoute, reqData).then((res) => {
      console.log("Profile Pic update response: ", res.data);
    });
  };

  const handleAchievementClick = (achIndex) => {
    console.log("Achievement clicked: ", achIndex);
    const achievementFields = ["ach1", "ach2", "ach3", "ach4", "ach5"];

    if (achievements[achIndex] === 0) {
      // set achievements at achIndex to 1
      let newAchievements = [...achievements];
      newAchievements[achIndex] = 1;
      setAchievements(newAchievements);

      axios
        .post(updateAchievementRoute, {
          userid: localStorage.getItem("uid"),
          updatefield: achievementFields[achIndex],
        })
        .then((res) => {
          console.log("Achievement update response: ", res.data);
        });
    }
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
          <Achievements
            achievements={achievements}
            handleAchievementClick={handleAchievementClick}
          />
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
