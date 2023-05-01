import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function RegisterForm({ user, onChange, onSubmit }) {
  //form for register page
  return (
    <div>
      <div className="header">
        <h1>God Tier Gains</h1>
      </div>
      <div className="primary-bg">
        <div className="narrow-view">
          <div className="userinfo-container">
            <form className="userinfo-form" onSubmit={onSubmit}>
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
                type="email"
                value={user.email}
                name="email"
                placeholder="Email"
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
              <button className="submit-button" type="submit">
                Register
              </button>
            </form>
            <h3>
              Already have an account? <Link to="/login">LOGIN</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}