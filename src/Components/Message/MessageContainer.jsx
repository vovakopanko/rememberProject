import { connect } from "react-redux";
import { addMessageAC, updateNewMessageAC } from "../../redux/messageReducer";
import Message from "./Message.jsx";

let mapStateToProps = (state) => {
  return {
    usersNames: state.messagePage.usersNames,
    usersMessages: state.messagePage.usersMessages,
    userNewMessage: state.messagePage.userNewMessage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onChangeData: (mes) => {
      let text = mes.target.value;
      dispatch(updateNewMessageAC(text));
    },
    messageData: () => {
      dispatch(addMessageAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
