import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageAC } from "../../redux/messageReducer";
import { AppStateType } from "../../redux/store";
import Message from "./Message.jsx";

let mapStateToProps = (state:AppStateType) => {
  return {
    usersNames: state.messagePage.usersNames,
    usersMessages: state.messagePage.usersMessages,
  };
};

// Преоброзование кода при помощи compose
// let AuthRedirectComponent = withAuthRedirect(Message)
// export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(connect(mapStateToProps, {addMessageAC}),withAuthRedirect)(Message)