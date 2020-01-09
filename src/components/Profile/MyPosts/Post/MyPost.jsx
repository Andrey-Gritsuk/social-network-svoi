import React from "react";
import classMod from "./MyPost.module.css";

const MyPost = props => {
  return (
    <div className={classMod.item}>
      <img
        src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg"
        alt="avatar"
      />
      {props.post}
      <div>
        <span>
          like {props.likesCount}
        </span>
      </div>
    </div>
  );
};

export default MyPost;
