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

type contactsType = {
  skype: null | string;
  vk: null | string;
  facebook: null | string;
  icq: null | string;
  email: null | string;
  googlePlus: null | string;
  twitter: null | string;
  instagram: null | string;
  whatsApp: null | string;
};

type profileType = {
  aboutMe: null | string;
  contacts: null | contactsType;
  lookingForAJob: null | boolean;
  lookingForAJobDescription: null | string;
  fullName: null | string;
  userId: null | number;
  photos: null | photosType;
};

type photosType = {
  small: string | null;
  large: string | null;
};

type PropsType = {
  getUsersThunk: (userId: number) => void;
  getStatusThunk: (userId: number) => void;
  updateStatusThunk: () => void;
  UpdateInformarionAboutUser:(formData:any)=>{then:any};
  match: any;
  savePhoto: any;
  id: number;
  profile: Array<profileType>;
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
