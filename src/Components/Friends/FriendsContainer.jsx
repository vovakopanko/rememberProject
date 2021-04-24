import React from "react";
import { connect } from "react-redux";
import {
  FollowAC,
  UnfollowAC,
  setUsersAC,
  setCurrentPage,
  userQuantityAC,
  togleIsFetching,
} from "../../redux/friendsReducer";
import axios from "axios";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.addPreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.addPreloader(false);
        this.props.setUsers(response.data.items);
        this.props.setQuantityUsers(response.data.totalCount);
      });
  }
  getCurrentPage = (pageNumber) => {
    this.props.setPage(this.props.currentPage);
    this.props.addPreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.addPreloader(false);
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
    addPreloader: (isFetching) => {
      dispatch(togleIsFetching(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(FriendsContainer);
