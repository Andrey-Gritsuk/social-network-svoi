import React from "react";
import classMod from "./Message.module.css";

const Message = props => {
  return (
    <div className={classMod.message}>
      {props.message}
    </div>
  );
};

export default Message;
