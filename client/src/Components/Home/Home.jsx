import React, { useEffect } from "react";

import "./styles.css";

export default function Home() {
  // write a useEffect hook to fetch data from the backend

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="bg-1">
      <h1>Hello</h1>
      Test
    </div>
  );
}
