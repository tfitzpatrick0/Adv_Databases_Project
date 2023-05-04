import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

//Protected Route component

export default function ProtectedRoute({ element: Component, ...rest }) {
  console.log("Protected Route Component: ", Component);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      setIsLoading(false);
    } else {
      navigate("/login");
    }
  }, [isLoading]);

  console.log("rest: ", rest);
  console.log("authenticted");

  //Prevent flashing protected page when routing illegally, will instead flash "Loading..."
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Navbar />
        <Component />
      </>
    );
  }
}
