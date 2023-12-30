"use client";
import React, { useEffect, useState } from "react";
import styles from "./crud.module.css";

function Crud() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState(1);

  const handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body: desc,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className={styles.mainContainer}>
      <input
        type="text"
        placeholder="title"
        style={{ height: "30px" }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="body or desc"
        style={{ height: "30px" }}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="user id"
        style={{ height: "30px" }}
        onChange={() => setUserId(1)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Crud;
