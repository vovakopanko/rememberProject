import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageAC } from "../../redux/messageReducer";
import Message from "./Message.jsx";

let mapStateToProps = (state) => {
  return {
    usersNames: state.messagePage.usersNames,
    usersMessages: state.messagePage.usersMessages,
    userNewMessage: state.messagePage.userNewMessage,
    // isAuth: state.auth.isAuth,
  };
};

// Преоброзование кода при помощи compose
// let AuthRedirectComponent = withAuthRedirect(Message)
// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(connect(mapStateToProps, {addMessageAC}),withAuthRedirect)(Message)