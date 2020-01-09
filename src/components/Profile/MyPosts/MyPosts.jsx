import React from "react";
import classMod from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";

const MyPosts = props => {
  let postsData = [
    { id: 1, post: "Hello, I'm glad to see you!!", likesCount: 12 },
    { id: 2, post: "Yoo!!!!!!!! OMG...", likesCount: 45 },
    { id: 3, post: "It's a beautiful day!", likesCount: 35 },
    { id: 3, post: "wwwwwwwwooooooo!", likesCount: 44 },
    { id: 3, post: "WHAT A F*CK!", likesCount: 63 },
  ];

  let postsElements = postsData.map(elem =>
    <MyPost post={elem.post} likesCount={elem.likesCount} />
  );

  return (
    <div className={classMod.postsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10" />
        </div>
        <button>Add post</button>
      </div>
      <div className={classMod.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
