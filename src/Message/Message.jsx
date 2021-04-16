import React from "react";
import s from "./Message.module.css";

const Message = ({
  postNameElement,
  postMessageElement,
  newMessageText,
  messageData,
  onChangeData,
  userNewMessage,
}) => {
  return (
    <div className={s.app__header}>
      <div className={s.app__header_title}>New Message:</div>
      <div className={s.app__header_names}>{postNameElement}</div>
      <div className={s.app__header_messages}>
        {postMessageElement}
        <div>
          <textarea
            onChange={onChangeData}
            value={userNewMessage}
            ref={newMessageText}
          ></textarea>
          <div>
            <button onClick={messageData}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
