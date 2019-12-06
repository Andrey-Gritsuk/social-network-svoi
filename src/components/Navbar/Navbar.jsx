import React from "react";
import classMod from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classMod.nav}>
      <div className={`${classMod.item} ${classMod.active}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={classMod.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={classMod.item}>
        <a href="/news">News</a>
      </div>
      <div className={classMod.item}>
        <a href="/music">Music</a>
      </div>
      <div className={classMod.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
