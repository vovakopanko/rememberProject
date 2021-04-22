const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const initialstate = {
  usersPosts: [
    { id: "1", name: "Vova", age: "27", comment: "Привет я Вова" },
    { id: "2", name: "Tanya", age: "25", comment: "Привет я Таня" },
    { id: "3", name: "Egor", age: "22", comment: "Привет я Егор" },
  ],
  userNewPost: "Write here your new post...",
};

const profileReducer = (state = initialstate, action) => {
<<<<<<< HEAD
  switch (action.type) {
    case ADD_POST:
      let com = state.userNewPost;
      return {
        ...state,
        usersPosts: [
          ...state.usersPosts,
          {
            id: "4",
            name: "Inkognito",
            age: "21",
            comment: com,
          },
        ],
        userNewPost: "",
      };
    case UPDATE_NEW_POST:
      return {
        ...state,
        userNewPost: action.updatePost,
      };
=======

  let stateCopy;
  switch (action.type) {
    case ADD_POST:
      stateCopy = {
        ...state,
        usersPosts: [...state.usersPosts, {
          id: "4",
          name: "Inkognito",
          age: "21",
          comment: state.userNewPost
        }],
        userNewPost: ""
      }
      // let newPost = {
      //   id: "4",
      //   name: "Inkognito",
      //   age: "21",
      //   comment: stateCopy.userNewPost,
      // };
      // stateCopy.usersPosts.push(newPost);
      // stateCopy.userNewPost = "";
      return stateCopy;
    case UPDATE_NEW_POST:
      stateCopy = {
        ...state,
        userNewPost: action.updatePost
      }
      // stateCopy.userNewPost = action.updatePost;
      return stateCopy;
>>>>>>> refs/remotes/origin/master
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
