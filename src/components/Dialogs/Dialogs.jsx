import React from "react";
import classMod from "./Dialogs.module.css";
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogData = [
    { id: 1, name: "Max" },
    { id: 2, name: "Nina" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Igor" },
    { id: 5, name: "Diva" },
    { id: 6, name: "Roy" }
  ];

  let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Yoo!!!!!!!!" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "I'm happy, friend! You are so beautiful!" }
  ];

  let dialogsElements = dialogData.map(elem =>
    <DialogItem name={elem.name} id={elem.id} />
  );

  let messagesElements = messagesData.map(elem =>
    <Message message={elem.message} />
  );

  return (
    <div className={classMod.dialogs}>
      <div className={classMod.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classMod.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
