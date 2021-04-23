import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Message.module.css";

const Message = ({
  usersMessages,
  usersNames,
  onChangeData,
  messageData,
  userNewMessage,
}) => {
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
  let postNameElement = usersNames.map((name) => (
    <NameUser key={name.id} name={name.name} id={name.id} />
  ));

  let postMessageElement = usersMessages.map((message) => (
    <MessageUser key={message.id} message={message.message} />
  ));
  return (
    <div className={s.app__header}>
      <div className={s.app__header_title}>New Message:</div>
      <div className={s.app__header_names}>{postNameElement}</div>
      <div className={s.app__header_messages}>
        {postMessageElement}
        <div>
          <textarea onChange={onChangeData} value={userNewMessage}></textarea>
          <div>
            <button onClick={messageData}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
