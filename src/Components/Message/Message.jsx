import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../validators/validator";
import { Textarea } from "../FormsControls/FormsControls";
import s from "./Message.module.css";

const maxLength70 = maxLengthCreator(70)

const MessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        validate={[required,maxLength70]}
        name={"Message"}
        placeholder={"Write your message"}
      />
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm({ form: "message" })(MessageForm);

class Message extends React.Component {
  render() {
    const onChange = (messages) => {
      this.props.addMessageAC(messages.Message);
    };
    return (
      <div className={s.app__header}>
        <div className={s.app__header_title}>New Message:</div>
        <div className={s.app__header_names}>
          {this.props.usersNames.map((name) => (
            <div className={s.app__header_name} key={name.id}>
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
          <MessageReduxForm
            onSubmit={onChange}
          />
        </div>
      </div>
    );
  }
}

export default Message;
