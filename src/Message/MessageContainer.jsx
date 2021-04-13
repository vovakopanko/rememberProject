import React from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message.jsx";
import s from "./Message.module.css";

let NameUser = (props) => {
  let path = "/message/" + props.id;
  return (
    <div className={s.app__header_name}>
      <NavLink to={path} activeClassName={s.activeLink}>
        <b>{props.name}</b>
      </NavLink>
    </div>
  );
};

let MessageUser = ({message}) => {
  return (
    <div className={s.app__header_message}>
      <div>{message}</div>
    </div>
  );
};

const MessageContainer = (props) => {
  let postNameElement = props.UsersName.map((name) => (
    <NameUser name={name.name} id={name.id} />
  ));

  let postMessageElement = props.UserMessages.map((message) => (
    <MessageUser message={message.message} />
  ));

  let newMessageText = React.createRef();

  let messageData = () => {
    let text = newMessageText.current.value;
    props.addNewMessage(text);
    debugger;
  };

  return (
    <div className={s.app__header}>
      <Message
        postMessageElement={postMessageElement}
        postNameElement={postNameElement}
        messageData={messageData}
        newMessageText={newMessageText}
      />
    </div>
  );
};

export default MessageContainer;
