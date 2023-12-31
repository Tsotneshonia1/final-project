"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./registration.page.module.css"

function Registration() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  }, [url]);

  return (
    <div>
      <button
        onClick={() => {
          setUrl('https://jsonplaceholder.typicode.com/posts');
        }}
        className={styles.button} >
        პირველი
      </button>
      <button
        onClick={() => {
          setUrl('https://api.escuelajs.co/api/v1/products');
        }}
        className={styles.button} >
        მეორე
      </button>
      <Link href={"/registration/crud"}  className={styles.oper}>There are thief operations in the posts </Link>
      <Link href={"/registration/post"} className={styles.oper}>Go to posts</Link>
    </div>
  );
}

export default Registration;
