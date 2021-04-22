import { AddPostAC, UpdateNewPostAC } from "../redux/profileReducer";
import Content from "./Content";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    usersPosts: state.profilePage.usersPosts,
    userNewPost: state.profilePage.userNewPost,
<<<<<<< HEAD
  };
};

=======
  }
};
>>>>>>> refs/remotes/origin/master
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(AddPostAC());
    },
    onChangePost: (body) => {
      let text = body.target.value;
<<<<<<< HEAD
      dispatch(UpdateNewPostAC(text));
    },
  };
};

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);
=======
      dispatch(UpdateNewPostAC(text))
    }
  }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)
>>>>>>> refs/remotes/origin/master

export default ContentContainer;
