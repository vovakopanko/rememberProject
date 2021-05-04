import { profileAPI, userAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const SET_PROFILR = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";

const initialstate = {
  usersPosts: [
    { id: "1", name: "Vova", age: "27", comment: "Привет я Вова" },
    { id: "2", name: "Tanya", age: "25", comment: "Привет я Таня" },
    { id: "3", name: "Egor", age: "22", comment: "Привет я Егор" },
  ],
  profile: null,
  status: ""
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
      }
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
  userNewPost
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})

export const getUsersThunk = (userId) => {
  return (dispatch) => {
    userAPI.getUser(userId).then((data) => {
      dispatch(setProfile(data));
    });
  }
}

export const getStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(Response => { 
      dispatch(setStatus(Response.data))
    })
  }
}

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(Response => {
      if (Response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}

export default profileReducer;
