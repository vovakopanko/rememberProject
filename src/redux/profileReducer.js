const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_PROFILR = "SET-PROFILE";

const initialstate = {
  usersPosts: [
    { id: "1", name: "Vova", age: "27", comment: "Привет я Вова" },
    { id: "2", name: "Tanya", age: "25", comment: "Привет я Таня" },
    { id: "3", name: "Egor", age: "22", comment: "Привет я Егор" },
  ],
  userNewPost: "Write here your new post...",
  profile: null,
  // profile: [
  //   {
  //     photos: { large: null },
  //     fullname: null,
  //     aboutMe: null,
  //     lookingForAJobDescription: null,
  //     lookingForAJob: null,
  //     contacts: null,
  //   },
  // ],
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
        userNewPost: action.text,
      };
    case SET_PROFILR:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const setProfile = (profile) => ({
  type: SET_PROFILR,
  profile,
});

export const AddPost = () => ({
  type: ADD_POST,
});

export const UpdateNewPost = (text) => ({
  type: UPDATE_NEW_POST,
  text,
});

export default profileReducer;
