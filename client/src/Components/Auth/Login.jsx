import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/AuthService.js";
import LoginForm from "./LoginForm";

import "./styles.css";

export default function Login() {
  const navigate = useNavigate();

  const [currUser, setCurrUser] = useState({
    email: "",
    password: "",
  });

  // flag is the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (currUser && add) {
      loginUser(currUser).then((userValidated) => {
        if (userValidated) {
          alert(`${userValidated.get("email")} has logged in!`);
          console.log("session token: ", userValidated.getSessionToken());
          navigate("/");
        }
        setAdd(false);
      });
    }
  }, [currUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);

    const { name, value: newValue } = e.target;
    console.log(newValue);

    setCurrUser({ ...currUser, [name]: newValue });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <div className="auth__page-layout bg-1">
      <div className="auth-welcome-text__wrapper">
        <h1 className="auth-welcome-text">GOD</h1>
        <h1 className="auth-welcome-text">TIER</h1>
        <h1 className="auth-welcome-text">GAINS</h1>
      </div>
      <LoginForm
        user={currUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
}
