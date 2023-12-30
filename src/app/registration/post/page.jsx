"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <>
          <Link href={`/registration/post/${post.id}`}>{post.title}</Link>
          <br />
          <br />
        </>
      ))}
    </div>
  );
}

export default Post;