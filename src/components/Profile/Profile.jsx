import React from "react";
import classMod from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <img
        src="https://foter.com/photos/394/yellow-taxi-on-city-street.jpg"
        alt="account wallpaper"
      />
      <div>
        <div> Ava +description</div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
