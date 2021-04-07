import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Message.module.css";

const NameUser = (props) => {
  let path = "/message/" + props.id;

  return (
    <div className={s.app__header_name}>
      <NavLink to={path} activeClassName={s.activeLink}>
        <b>{props.name}</b>
      </NavLink>
    </div>
  );
};

const MessageUser = (props) => {
  return (
    <div className={s.app__header_message}>
      <div>{props.message}</div>
    </div>
  );
};
const Message = () => {
  return (
    <div className={s.app__header}>
      <div className={s.app__header_title}>New Message:</div>
      <div className={s.app__header_names}>
        <NameUser name="Egor" id="1" />
        <NameUser name="Vova" id="2" />
        <NameUser name="Tanya" id="3" />
      </div>
      <div className={s.app__header_messages}>
        <MessageUser message="Hi, How are you?" />
        <MessageUser message="Hi, Where you been? What happened?" />
        <MessageUser message="At me All right. I'm worked more time, because don;t called you" />
      </div>
    </div>
  );
};

export default Message;
