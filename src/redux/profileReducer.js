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
