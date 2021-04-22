import { connect } from "react-redux";
import { addMessageAC, updateNewMessageAC } from "../redux/messageReducer";
import Message from "./Message.jsx";

let mapStateToProps = (state) => {
  return {
    usersNames: state.messagePage.usersNames,
    usersMessages: state.messagePage.usersMessages,
    userNewMessage: state.messagePage.userNewMessage,
<<<<<<< HEAD
  };
=======
  }
>>>>>>> refs/remotes/origin/master
};

let mapDispatchToProps = (dispatch) => {
  return {
<<<<<<< HEAD
    onChangeData: (mes) => {
      let text = mes.target.value;
      dispatch(updateNewMessageAC(text));
    },
    messageData: () => {
      dispatch(addMessageAC());
    },
  };
=======
    messageData: () => {
      dispatch(addMessageAC());
    },
    onChangeData: (body) => {
      let text = body.target.value;
      dispatch(updateNewMessageAC(text));
    }
  }
>>>>>>> refs/remotes/origin/master
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

<<<<<<< HEAD
export default MessageContainer;
=======
export default MessageContainer
>>>>>>> refs/remotes/origin/master
