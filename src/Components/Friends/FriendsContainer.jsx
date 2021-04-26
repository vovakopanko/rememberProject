import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  usersQuantity,
  togleIsFetching,
  togleIsBlockButton,
} from "../../redux/friendsReducer";
import Friends from "./Friends";
import { userAPI } from "../../API/api";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.togleIsFetching(true);
    userAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        debugger;
        this.props.togleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.usersQuantity(data.totalCount);
      });
  }
  getCurrentPage = (pageNumber) => {
    this.props.setCurrentPage(this.props.currentPage);
    this.props.togleIsFetching(true);
    userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.togleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <Friends
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        userFriends={this.props.userFriends}
        currentPage={this.props.currentPage}
        getCurrentPage={this.getCurrentPage}
        isFetching={this.props.isFetching}
        isButtonLock={this.props.isButtonLock}
        togleIsBlockButton={this.props.togleIsBlockButton}
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
  };
};

// let mapDispatchToprops = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(follow(userId));
//     },
// }}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  usersQuantity,
  togleIsFetching,
  togleIsBlockButton,
})(FriendsContainer);
