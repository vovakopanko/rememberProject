import {
  AddPost,
  getUsersThunk,
  setProfile,
  UpdateNewPost,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import React from "react";
import Content from "./Content";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "react-router";

class ContentContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 9629;
    }
    this.props.getUsersThunk(userId);
  }
  render() {
    return <Content {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    usersPosts: state.profilePage.usersPosts,
    userNewPost: state.profilePage.userNewPost,
    profile: state.profilePage.profile,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    AddPost: () => {
      dispatch(AddPost());
    },
    UpdateNewPost: (body) => {
      dispatch(UpdateNewPost(body.target.value));
    },
    setProfile: (profile) => {
      dispatch(setProfile(profile));
    },
    getUsersThunk: (userId) => {
      dispatch(getUsersThunk(userId));
    },
  };
};

export default compose(connect(mapStateToProps,
  mapDispatchToProps),withRouter,withAuthRedirect)(ContentContainer)