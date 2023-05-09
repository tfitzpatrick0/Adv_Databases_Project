import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function RegisterForm({ user, onChange, onSubmit }) {
  const [showBasicForm, setShowBasicForm] = useState(true);

  const switchFormHandler = () => {
    if (user.firstName && user.lastName && user.username && user.password) {
      setShowBasicForm(false);
    } else {
      alert("Please fill out all fields!");
    }
  };

  //form for register page
  return (
    <div className="primary-bg">
      <div className="login-form-view">
        <div className="userinfo-container">
          <h1 className="login-header">Register</h1>
          {showBasicForm ? (
            <form className="userinfo-form">
              <input
                className="userinfo-input"
                type="text"
                value={user.firstName}
                name="firstName"
                placeholder="First Name"
                onChange={onChange}
                required
              />
              <input
                className="userinfo-input"
                type="text"
                value={user.lastName}
                name="lastName"
                placeholder="Last Name"
                onChange={onChange}
                required
              />
              <input
                className="userinfo-input"
                type="text"
                value={user.username}
                name="username"
                placeholder="Username"
                onChange={onChange}
                required
              />
              <input
                className="userinfo-input"
                type="password"
                value={user.password}
                name="password"
                placeholder="Password"
                min="0"
                onChange={onChange}
                required
              />
              <button
                className="submit-button"
                type="button"
                onClick={() => switchFormHandler()}
              >
                Continue
              </button>
            </form>
          ) : (
            // email: "",
            // bio: "",
            // sex: "",
            // day: "",
            // month: "",
            // year: "",
            <form className="userinfo-form">
              <input
                className="userinfo-input"
                type="text"
                value={user.email}
                name="email"
                placeholder="Email"
                onChange={onChange}
                required
              />
              <input
                className="userinfo-input"
                type="text"
                value={user.bio}
                name="bio"
                placeholder="Bio"
                onChange={onChange}
                required
              />
              {/* select with male and female, initial value is blank*/}
              <select className="userinfo-input" onChange={onChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className="date-container">
                <input
                  className="userinfo-input"
                  type="text"
                  value={user.day}
                  name="day"
                  placeholder="Day"
                  onChange={onChange}
                  required
                />
                <input
                  className="userinfo-input"
                  type="text"
                  value={user.month}
                  name="month"
                  placeholder="Month"
                  onChange={onChange}
                  required
                />
                <input
                  className="userinfo-input"
                  type="text"
                  value={user.year}
                  name="year"
                  placeholder="Year"
                  onChange={onChange}
                  required
                />
              </div>
              <button
                className="submit-button"
                type="button"
                onClick={onSubmit}
              >
                Register
              </button>
            </form>
          )}
          <h3>
            Already have an account? <Link to="/login">LOGIN</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
