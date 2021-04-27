import {
  AddPost,
  getUsersThunk,
  setProfile,
  UpdateNewPost,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import React from "react";
import Content from "./Content";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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
    // isAuth: state.auth.isAuth,
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

let AuthRedirectComponent = withAuthRedirect(ContentContainer);

let withRouterContentContainer = withRouter(AuthRedirectComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouterContentContainer);
