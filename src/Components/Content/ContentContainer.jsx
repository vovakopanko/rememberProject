import { AddPost, setProfile, UpdateNewPost } from "../../redux/profileReducer";
import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import Content from "./Content";
import { withRouter } from "react-router";

class ContentContainer extends React.Component {
  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 9629;
    }
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
      .then((Response) => {
        this.props.setProfile(Response.data);
      });
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
      let text = body.target.value;
      dispatch(UpdateNewPost(text));
    },
    setProfile: (profile) => {
      dispatch(setProfile(profile));
    },
  };
};

let withRouterContentContainer = withRouter(ContentContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouterContentContainer);
