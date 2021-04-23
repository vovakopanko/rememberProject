import { AddPostAC, UpdateNewPostAC } from "../../redux/profileReducer";
import { connect } from "react-redux";
import Content from "./Content";

let mapStateToProps = (state) => {
  return {
    usersPosts: state.profilePage.usersPosts,
    userNewPost: state.profilePage.userNewPost,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(AddPostAC());
    },
    onChangePost: (body) => {
      let text = body.target.value;
      dispatch(UpdateNewPostAC(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
