import React from "react";
import classMod from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classMod.content}>
      <img
        src="https://foter.com/photos/394/yellow-taxi-on-city-street.jpg"
        alt="account wallpaper"
      />
      <div>
        <div> Ava +description</div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div className={classMod.item}>post 1</div>
            <div className={classMod.item}>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
