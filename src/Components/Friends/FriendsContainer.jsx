import Friends from "./Friends";
import { connect } from "react-redux";
import { FollowAC, UnfollowAC, setUsersAC } from "../../redux/friendsReducer";

let mapStateToProps = (state) => {
  return {
    userFriends: state.friendsPage.userFriends,
  };
};

let mapDispatchToprops = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(FollowAC(userId));
    },
    unfollow: (userId) => {
      dispatch(UnfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Friends);
