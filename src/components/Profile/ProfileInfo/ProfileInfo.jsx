import React from "react";
import classMod from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://foter.com/photos/394/yellow-taxi-on-city-street.jpg"
          alt="account wallpaper"
        />
      </div>
      <div className={classMod.descriptionBlock}>
        <div> Ava +description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
