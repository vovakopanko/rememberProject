import { profileAPI, userAPI } from "../API/api";

const ADD_POST = "rememberMe/src/redux/profileReducers/addPost";
const SET_PROFILR = "rememberMe/src/redux/profileReducers/setProfile";
const SET_STATUS = "rememberMe/src/redux/profileReducers/setStatus";

const initialstate = {
  usersPosts: [
    { id: "1", name: "Vova", age: "27", comment: "Привет я Вова" },
    { id: "2", name: "Tanya", age: "25", comment: "Привет я Таня" },
    { id: "3", name: "Egor", age: "22", comment: "Привет я Егор" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_POST:
      let com = action.userNewPost;
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
      };
    case SET_PROFILR:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const setProfile = (profile) => ({
  type: SET_PROFILR,
  profile,
});

export const AddPost = (userNewPost) => ({
  type: ADD_POST,
  userNewPost,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

// = (userId) - замыкание
 
export const getUsersThunk = (userId) => async (dispatch) => {
  let data = await userAPI.getUser(userId);
  dispatch(setProfile(data));
};
// Old type Asynchronous requests
// export const getUsersThunk = (userId) => {
//   return (dispatch) => {
//     userAPI.getUser(userId).then((data) => {
//       dispatch(setProfile(data));
//     });
//   }
// }

export const getStatusThunk = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

// export const getStatusThunk = (userId) => {
//   return (dispatch) => {
//     profileAPI.getStatus(userId).then(Response => {
//       dispatch(setStatus(Response.data))
//     })
//   }
// }

export const updateStatusThunk = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

// export const updateStatusThunk = (status) => {
//   return (dispatch) => {
//     profileAPI.updateStatus(status).then(Response => {
//       if (Response.data.resultCode === 0) {
//         dispatch(setStatus(status))
//       }
//     })
//   }
// }

export default profileReducer;
