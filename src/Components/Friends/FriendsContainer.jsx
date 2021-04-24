import Friends from "./Friends";
import { connect } from "react-redux";
import {
  FollowAC,
  UnfollowAC,
  setUsersAC,
  setCurrentPage,
  userQuantityAC,
} from "../../redux/friendsReducer";

let mapStateToProps = (state) => {
  return {
    userFriends: state.friendsPage.userFriends,
    totalUsersCount: state.friendsPage.totalUsersCount,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage,
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
    setPage: (currentPage) => {
      dispatch(setCurrentPage(currentPage));
    },
    setQuantityUsers: (userQuantity) => {
      dispatch(userQuantityAC(userQuantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Friends);
