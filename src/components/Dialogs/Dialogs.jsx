import React from "react";
import classMod from "./Dialogs.module.css";
import DialogItem from "./Dialog/Dialog"
import Message from "./Message/Message";

const Dialogs = props => {
  return (
    <div className={classMod.dialogs}>
      <div className={classMod.dialogsItems}>
        <DialogItem name="Max" id="1" />
        <DialogItem name="Nina" id="2" />
        <DialogItem name="Igor" id="3" />
        <DialogItem name="Alex" id="4" />
        <DialogItem name="Vlad" id="5" />
        <DialogItem name="Andrei" id="6" />
      </div>
      <div className={classMod.messages}>
        <Message message="Hello, country" />
        <Message message="let's go!!!!!!!!" />
        <Message message="I'm happy!!!!!!" />
        <Message message="Goodbye." />
      </div>
    </div>
  );
};

export default Dialogs;
