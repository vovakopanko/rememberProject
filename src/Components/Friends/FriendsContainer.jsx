import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  togleIsBlockButton,
  getUserThunkCreator,
  deleteUsersThunkCreator,
  postUsersThunkCreator,
} from "../../redux/friendsReducer";
import {
  getCurrentPage,
  getFriends,
  getIsAuth,
  getIsButtonLock,
  getIsFetching,
  getPageSize,
  getPortionSize,
  getTotalFriends,
} from "../../redux/friendsSelectors";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize);
  }
  getCurrentPage = (pageNumber) => {
    this.props.getUserThunkCreator(pageNumber, this.props.pageSize);
  };

  componentDidUpdate(prevProps, prevStatus) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

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
        portionSize={this.props.portionSize}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    userFriends: getFriends(state),
    totalUsersCount: getTotalFriends(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isButtonLock: getIsButtonLock(state),
    isAuth: getIsAuth(state),
    portionSize: getPortionSize(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    togleIsBlockButton,
    getUserThunkCreator,
    deleteUsersThunkCreator,
    postUsersThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(FriendsContainer);
