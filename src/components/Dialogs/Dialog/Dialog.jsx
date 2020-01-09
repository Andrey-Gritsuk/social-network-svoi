import React from "react";
import { NavLink } from "react-router-dom";
import classMod from "./Dialog.module.css";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classMod.dialogItem + " " + classMod.active}>
      <NavLink to={path} activeClassName={classMod.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
