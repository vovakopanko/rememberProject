import { AddPostAC, UpdateNewPostAC } from "../redux/profileReducer";
import Content from "./Content";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    usersPosts: state.profilePage.usersPosts,
    userNewPost: state.profilePage.userNewPost,
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(AddPostAC());
    },
    onChangePost: (body) => {
      let text = body.target.value;
      dispatch(UpdateNewPostAC(text))
    }
  }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;
