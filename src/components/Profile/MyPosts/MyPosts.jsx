import React from "react";
import classMod from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="10" />
        <button>Add post</button>
      </div>
      <div className={classMod.posts}>
        <MyPost message="Hello, how are you?" likeCounts="15" />
        <MyPost message="I'm happy!!!!!" likeCounts="20" />
      </div>
    </div>
  );
};

export default MyPosts;
