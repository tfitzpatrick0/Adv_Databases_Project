import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterForm from "./RegisterForm";

import {
  getAnyMaxIdRoute,
  insertNewUserRoute,
  insertNewUserInfoRoute,
} from "../../utils/api";

import "./styles.css";

export default function Register() {
  const navigate = useNavigate();

  // let {uuserid, uusername, ufirst, ulast, uage, uemail, ubio, usex, day, month, year} = req.body;
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    bio: "",
    sex: "M",
    day: "",
    month: "",
    year: "",
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);

    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({ ...newUser, [name]: newValue });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);

    if (
      newUser.firstName &&
      newUser.lastName &&
      newUser.username &&
      newUser.password &&
      newUser.email &&
      newUser.bio &&
      newUser.sex &&
      newUser.day &&
      newUser.month &&
      newUser.year
    ) {
      console.log("New User: ", newUser);
      let newUserpassId;

      // .post(getAnyMaxIdRoute, {
      //   column: "routine_entry_id",
      //   table: "routine_entry",
      // })

      await axios
        .post(getAnyMaxIdRoute, {
          column: "userid",
          table: "userpass",
        })
        .then((res) => {
          console.log("Max Userpass ID: ", res.data);
          newUserpassId = parseInt(res.data[0]) + 1;
          console.log("New Userpass ID: ", newUserpassId);
        });

      // let {uuserid, uusername, ufirst, ulast, uage, uemail, ubio, usex, day, month, year} = req.body;

      axios
        .post(insertNewUserRoute, {
          uid: newUserpassId,
          uname: newUser.username,
          pass: newUser.password,
        })
        .then((res) => {
          console.log("New User successfully registered!");
          localStorage.setItem("uid", newUserpassId);
        });

      axios
        .post(insertNewUserInfoRoute, {
          uuserid: newUserpassId,
          uusername: newUser.username,
          ufirst: newUser.firstName,
          ulast: newUser.lastName,
          uage: newUser.age,
          uemail: newUser.email,
          ubio: newUser.bio,
          usex: newUser.sex,
          day: newUser.day,
          month: newUser.month,
          year: newUser.year,
        })
        .then((res) => {
          console.log("New User Info successfully inputted into database!");
          navigate("/");
        });
    }
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
