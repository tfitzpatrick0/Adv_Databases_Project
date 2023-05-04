import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function LoginForm({ user, onChange, onSubmit }) {
  //Form for login page
  return (
    <div className="primary-bg">
      <div className="login-form-view">
        <div className="userinfo-container">
          <h1 className="login-header">Login</h1>
          <form className="userinfo-form" onSubmit={onSubmit}>
            <input
              className="userinfo-input"
              type="text"
              value={user.email}
              name="username"
              placeholder="Username"
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
              LOGIN
            </button>
          </form>
          <h3>
            Don't have an account yet? <Link to="/register">REGISTER</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
