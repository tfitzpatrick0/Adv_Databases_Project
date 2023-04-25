import React, { useState, useEffect } from "react";

import "./styles.css";

export default function Profile() {
  return (
    // create an html layout that contains a profile header at the top, with image and username
    // below that, have a div section that contains profile information like a bio, age, height, weight, etc.
    // below that have a div section with a header above that reads "Dashboard"
    // this section should be a similar format to the profile information div
    // finally, at the bottom, have an area for achievement badges that will be displayed in a single row
    <div className="profile__page-layout">
      <div className="profile__header">
        <img src="https://via.placeholder.com/150" alt="profile image" />
        <h1>Username</h1>
      </div>
      <div className="profile__info">
        <div className="profile__bio">
          <h2>Bio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Nullam euismod, nisl eget ultricies ultrices, nunc nisl
            aliquam nunc, vitae aliquam nisl nunc eget nunc. Nulla facilisi.
            Nullam euismod, nisl eget ultricies ultrices, nunc nisl aliquam
            nunc, vitae aliquam nisl nunc eget nunc.
          </p>
        </div>
        <div className="profile__age">
          <h2>Age</h2>
          <p>21</p>
        </div>
        <div className="profile__height">
          <h2>Height</h2>
          <p>6' 0"</p>
        </div>
        <div className="profile__weight">
          <h2>Weight</h2>
          <p>180 lbs</p>
        </div>
      </div>
      <div className="dashboard__header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard__info">
        <div className="dashboard__bio">
          <h2>Your progress report for this week:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Nullam euismod, nisl eget ultricies ultrices, nunc nisl
            aliquam nunc, vitae aliquam nisl nunc eget nunc. Nulla facilisi.
            Nullam euismod, nisl eget ultricies ultrices, nunc nisl aliquam
            nunc, vitae aliquam nisl nunc eget nunc.
          </p>
        </div>
      </div>
      <div className="achievements__header">
        <h1>Achievements</h1>
      </div>
      <div className="achievements__info">
        <div className="achievements__badges">
          <img src="https://via.placeholder.com/50" alt="badge" />
          <img src="https://via.placeholder.com/50" alt="badge" />
          <img src="https://via.placeholder.com/50" alt="badge" />
          <img src="https://via.placeholder.com/50" alt="badge" />
        </div>
      </div>
    </div>
  );
}
