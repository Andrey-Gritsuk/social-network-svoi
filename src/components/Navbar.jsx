import React from "react";
import classMod from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classMod.nav}>
      <div className={`${classMod.item} ${classMod.active}`}>
        <a>Profile</a>
      </div>
      <div className={classMod.item}>
        <a>Messagese</a>
      </div>
      <div className={classMod.item}>
        <a>News</a>
      </div>
      <div className={classMod.item}>
        <a>Music</a>
      </div>
      <div className={classMod.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
