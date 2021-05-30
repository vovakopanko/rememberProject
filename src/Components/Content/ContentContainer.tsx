import {
  AddPost,
  getUsersThunk,
  setProfile,
  getStatusThunk,
  updateStatusThunk,
  savePhoto,
  UpdateInformarionAboutUser,
} from "../../redux/profileReducer";
import { Wall } from "./Wall.jsx";
import { connect } from "react-redux";
import React from "react";
import Content from "./Content";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "react-router";
import Preloader from "../Preloader/Preloader";
import { AppStateType } from "../../redux/store";

type PropsType = {
  getUsersThunk: (userId: number) => void;
  getStatusThunk: (userId: number) => void;
  updateStatusThunk: () => void;
  UpdateInformarionAboutUser: () => void;
  match: any;
  savePhoto: any;
  id: number;
  profile: any;
  status: string;
  AddPost: () => void;
  usersPosts: Array<any>;
};

class ContentContainer extends React.Component<PropsType> {
  updateInformationAboutUser() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.id;
    }
    this.props.getUsersThunk(userId);
    this.props.getStatusThunk(userId);
  }
  componentDidMount() {
    this.updateInformationAboutUser();
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.updateInformationAboutUser();
    }
  }
  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    return (
      <div>
        <Content
          {...this.props}
          isOwner={!this.props.match.params.userId}
          savePhoto={this.props.savePhoto}
          profile={this.props.profile}
          updateStatusThunk={this.props.updateStatusThunk}
          status={this.props.status}
          UpdateInformarionAboutUser={this.props.UpdateInformarionAboutUser}
        />
        <Wall AddPost={this.props.AddPost} usersPosts={this.props.usersPosts} />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    usersPosts: state.profilePage.usersPosts,
    profile: state.profilePage.profile,
    id: state.auth.id,
    status: state.profilePage.status,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     AddPost: (text) => {
//       dispatch(AddPost(text));
//     },
//     setProfile: (profile) => {
//       dispatch(setProfile(profile));
//     },
//     getUsersThunk: (userId) => {
//       dispatch(getUsersThunk(userId));
//     },
//     getStatusThunk: (userId) => {
//       dispatch(getStatusThunk(userId));
//     },
//     updateStatusThunk: (status) => {
//       dispatch(updateStatusThunk(status));
//     },
//     savePhoto: (photo) => {
//       dispatch(savePhoto(photo))
//     }
//   };
// };

export default compose(
  connect(mapStateToProps, {
    AddPost,
    setProfile,
    getUsersThunk,
    getStatusThunk,
    updateStatusThunk,
    savePhoto,
    UpdateInformarionAboutUser,
  }),
  withRouter,
  withAuthRedirect
)(ContentContainer);
