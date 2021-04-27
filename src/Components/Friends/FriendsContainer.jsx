import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  togleIsBlockButton,
  getUserThunkCreator,
  deleteUsersThunkCreator,
  postUsersThunkCreator,
} from "../../redux/friendsReducer";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize);
  }
  getCurrentPage = (pageNumber) => {
    this.props.getUserThunkCreator(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <Friends
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        userFriends={this.props.userFriends}
        currentPage={this.props.currentPage}
        getCurrentPage={this.getCurrentPage}
        isFetching={this.props.isFetching}
        isButtonLock={this.props.isButtonLock}
        deleteUsersThunkCreator={this.props.deleteUsersThunkCreator}
        postUsersThunkCreator={this.props.postUsersThunkCreator}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    userFriends: state.friendsPage.userFriends,
    totalUsersCount: state.friendsPage.totalUsersCount,
    pageSize: state.friendsPage.pageSize,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    isButtonLock: state.friendsPage.isButtonLock,
    isAuth: state.auth.isAuth,
  };
};

// let mapDispatchToprops = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(follow(userId));
//     },
// }}

let AuthRedirectComponent = withAuthRedirect(FriendsContainer);

export default connect(mapStateToProps, {
  togleIsBlockButton,
  getUserThunkCreator,
  deleteUsersThunkCreator,
  postUsersThunkCreator,
})(AuthRedirectComponent);
