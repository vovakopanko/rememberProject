import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import s from "./Message.module.css";

class Message extends React.Component {
  render() {
    return (
      <div className={s.app__header}>
        <div className={s.app__header_title}>New Message:</div>
        <div className={s.app__header_names}>
          {this.props.usersNames.map((name) => (
            <div className={s.app__header_name}>
              <NavLink
                to={"/message/" + name.id}
                activeClassName={s.activeLink}
              >
                <b>{name.name}</b>
              </NavLink>
            </div>
          ))}
        </div>
        <div className={s.app__header_messages}>
          {this.props.usersMessages.map((message) => (
            <div className={s.app__header_message} key={message.id}>
              <div>{message.message}</div>
            </div>
          ))}
          <div>
            <textarea
              onChange={this.props.onChangeData}
              value={this.props.userNewMessage}
            ></textarea>
            <div>
              <button onClick={this.props.messageData}>Send message</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
