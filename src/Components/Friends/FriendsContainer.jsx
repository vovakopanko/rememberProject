import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  usersQuantity,
  togleIsFetching,
} from "../../redux/friendsReducer";
import axios from "axios";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.togleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        debugger;
        this.props.togleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.usersQuantity(response.data.totalCount);
      });
  }
  getCurrentPage = (pageNumber) => {
    this.props.setCurrentPage(this.props.currentPage);
    this.props.togleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.togleIsFetching(false);
        this.props.setUsers(response.data.items);
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
  };
};

// let mapDispatchToprops = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(follow(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollow(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPage(currentPage));
//     },
//     usersQuantity: (userQuantity) => {
//       dispatch(usersQuantity(userQuantity));
//     },
//     togleIsFetching: (isFetching) => {
//       dispatch(togleIsFetching(isFetching));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  usersQuantity,
  togleIsFetching,
})(FriendsContainer);
