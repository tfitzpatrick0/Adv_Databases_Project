import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function LoginForm({ user, onChange, onSubmit }) {
  //Form for login page
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
                type="email"
                value={user.email}
                name="email"
                placeholder="Username (Email)"
                onChange={onChange}
                required
              />
              <input
                className="userinfo-input"
                type="password"
                placeholder="Password"
                value={user.password}
                name="password"
                onChange={onChange}
                required
              />
              <button className="submit-button" type="submit">
                Login
              </button>
            </form>
            <h3>
              Don't have an account yet? <Link to="/register">REGISTER</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
