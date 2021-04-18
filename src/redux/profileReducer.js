const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: "4",
        name: "Inkognito",
        age: "21",
        comment: state.userNewPost,
      };
      state.usersPosts.push(newPost);
      state.userNewPost = "";
      return state;
    case UPDATE_NEW_POST:
      state.userNewPost = action.updatePost;
      return state;
    default:
      return state;
  }
};

export const AddPostAC = () => ({
  type: ADD_POST,
});

export const UpdateNewPostAC = (text) => ({
  type: UPDATE_NEW_POST,
  updatePost: text,
});

export default profileReducer;
