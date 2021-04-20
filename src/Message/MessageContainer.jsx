import { connect } from "react-redux";
import { addMessageAC, updateNewMessageAC } from "../redux/messageReducer";
import Message from "./Message.jsx";

let mapStateToProps = (state) => {
  return {
    usersNames: state.messagePage.usersNames,
    usersMessages: state.messagePage.usersMessages,
    userNewMessage: state.messagePage.userNewMessage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    messageData: () => {
      dispatch(addMessageAC());
    },
    onChangeData: (body) => {
      let text = body.target.value;
      dispatch(updateNewMessageAC(text));
    }
  }
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer
