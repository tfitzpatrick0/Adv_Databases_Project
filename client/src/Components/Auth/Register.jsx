import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterForm from "./RegisterForm";

import {
  getMaxIdRoute,
  checkExistingUserRoute,
  validateUPRoute,
  insertNewUserRoute,
} from "../../utils/api";

import "./styles.css";

export default function Register() {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  // flag is the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (newUser && add) {
      console.log("New User: ", newUser);
      let newId = 20003;
      console.log("new id: ", newId);

      // axios.get(getMaxIdRoute).then((res) => {
      //   console.log("Max ID: ", res.data);
      //   newId = parseInt(res.data[0]) + 1;
      //   console.log("New ID: ", newId);
      // });

      // axios
      //   .post(checkExistingUserRoute, { username: newUser.username })
      //   .then((res) => {
      //     console.log("Existing User: ", res.data);
      //     if (res.data.length > 0) {
      //       alert("Username already exists!");
      //       // setAdd(false);
      //       return;
      //     }
      //   });

      axios
        .post(insertNewUserRoute, {
          userid: newId,
          username: newUser.username,
          passwd: newUser.password,
        })
        .then((res) => {
          console.log("New User successfully registered!");
          localStorage.setItem("uid", newId);
          // navigate("/");
          setAdd(false);
        });

      // createUser(newUser).then((userCreated) => {
      //   if (userCreated) {
      //     alert(
      //       `${userCreated.get("firstName")}, you successfully registered!`
      //     );
      //     navigate("/");
      //   }
      //   setAdd(false);
      // });
    }
  }, [newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);

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
