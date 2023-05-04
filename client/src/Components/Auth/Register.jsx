import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../Services/AuthService.js";
import RegisterForm from "./RegisterForm";

import "./styles.css";

export default function Register() {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // flag is the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
          navigate("/");
        }
        setAdd(false);
      });
    }
  }, [newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);

    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({ ...newUser, [name]: newValue });
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
      <RegisterForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
}
