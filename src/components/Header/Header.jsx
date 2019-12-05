import React from "react";
import classMod from "./Header.module.css";

const Header = () => {
  return (
    <header className={classMod.header}>
      <img
        src="https://image.flaticon.com/icons/svg/783/783347.svg"
        alt="global logo"
      />
    </header>
  );
};

export default Header;
