import React from "react";
import classMod from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classMod.nav}>
      {/* <div className={`${classMod.item} ${classMod.active}`}> */}
      <div className={classMod.item}>
        <NavLink to="/profile" activeClassName={classMod.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={classMod.item}>
        <NavLink to="/dialogs" activeClassName={classMod.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={classMod.item}>
        <NavLink to="/news" activeClassName={classMod.activeLink}>
          News
        </NavLink>
      </div>
      <div className={classMod.item}>
        <NavLink to="/music" activeClassName={classMod.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={classMod.item}>
        <NavLink to="/settings" activeClassName={classMod.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
