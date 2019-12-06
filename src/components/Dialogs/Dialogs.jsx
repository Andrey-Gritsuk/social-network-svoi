import React from "react";
import classMod from "./Dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={classMod.dialogs}>
      <div className={classMod.dialogsItems}>
        <div className={classMod.dialog + " "+ classMod.active}>Max</div>
        <div className={classMod.dialog}>Andrei</div>
        <div className={classMod.dialog}>Vlad</div>
        <div className={classMod.dialog}>Alex</div>
        <div className={classMod.dialog}>Igor</div>
      </div>
      <div className={classMod.messages}>
        <div className={classMod.message}>You're beautiful!!!!!!!!!!</div>
        <div className={classMod.message}>It's my life</div>
        <div className={classMod.message}>Close the dore, please!!</div>
      </div>
    </div>
  );
};

export default Dialogs;
