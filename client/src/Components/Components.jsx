import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Exercises from "./Exercises/Exercises";
import Routines from "./Routines/Routines";
import Workout from "./Workout/Workout";
import History from "./History/History";
import Profile from "./Profile/Profile";

import Login from "./Auth/Login";
import Register from "./Auth/Register";

export default function Components() {
  return (
    <div>
      <Router>
        {/* Can wrap auth routes and app routes in separate routing components
        --> the app routes will have Navbar and the auth routes won't */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={<ProtectedRoute path="/" element={Home} />}
          />
          <Route
            path="/exercises"
            element={<ProtectedRoute path="/" element={Exercises} />}
          />
          <Route
            path="/routines"
            element={<ProtectedRoute path="/" element={Routines} />}
          />
          <Route
            path="/workout"
            element={<ProtectedRoute path="/" element={Workout} />}
          />
          <Route
            path="/history"
            element={<ProtectedRoute path="/" element={History} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute path="/" element={Profile} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}
