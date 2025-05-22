import React from "react";
import Post from "../Post/Post";
import "./PostList.css";

function PostList() {
  //Array med 3 inlägg
  const posts = Array(3).fill("");

  return (
    <div className="post-list">
      {posts.map((_, index) => (
        <Post key={index} />
      ))}
    </div>
  );
}

export default PostList;
