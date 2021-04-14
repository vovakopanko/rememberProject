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

let MessageUser = ({ message }) => {
  return (
    <div className={s.app__header_message}>
      <div>{message}</div>
    </div>
  );
};

const MessageContainer = (props) => {
  let postNameElement = props.UsersName.map((name) => (
    <NameUser key={name.id} name={name.name} id={name.id} />
  ));

  let postMessageElement = props.UserMessages.map((message) => (
    <MessageUser key={message.id} message={message.message} />
  ));

  let newMessageText = React.createRef();

  let messageData = () => {
    props.addNewMessage();
    // props.updateNewPost("");
  };

  let onChangeData = () => {
    let text = newMessageText.current.value;
    props.updateNewPost(text);
  };

  return (
    <div className={s.app__header}>
      <Message
        postMessageElement={postMessageElement}
        postNameElement={postNameElement}
        messageData={messageData}
        newMessageText={newMessageText}
        newTextInfo={props.newTextInfo}
        onChangeData={onChangeData}
      />
    </div>
  );
};

export default MessageContainer;
