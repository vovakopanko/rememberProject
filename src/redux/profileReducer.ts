import { Dispatch } from "react";
import { profileAPI, userAPI } from "../API/api";
import { AppStateType } from "./store";

const ADD_POST = "rememberMe/src/redux/profileReducers/addPost";
const SET_PROFILR = "rememberMe/src/redux/profileReducers/setProfile";
const SET_STATUS = "rememberMe/src/redux/profileReducers/setStatus";
const SAVE_PHOTO = "rememberMe/src/redux/profileReducers/setPhoto";

type userPosts = {
  id: number;
  name: string;
  age: number;
  comment: string;
};

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

type initialstateType = typeof initialstate;

const initialstate = {
  usersPosts: [
    { id: 1, name: "Vova", age: 27, comment: "Привет я Вова" },
    { id: 2, name: "Tanya", age: 25, comment: "Привет я Таня" },
    { id: 3, name: "Egor", age: 22, comment: "Привет я Егор" },
  ] as Array<userPosts>,
  profile: null as profileType | null,
  status: "",
  photos: null as photosType | null,
};

const profileReducer = (
  state = initialstate,
  action: profileActionType
): initialstateType => {
  switch (action.type) {
    case ADD_POST:
      let com = action.userNewPost;
      return {
        ...state,
        usersPosts: [
          ...state.usersPosts,
          {
            id: 4,
            name: "Inkognito",
            age: 21,
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
    case SAVE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as profileType,
      };
    default:
      return state;
  }
};

// Action

type profileActionType =
  | setProfileType
  | AddPostType
  | setStatusType
  | setPhotoType;

type setProfileType = {
  type: typeof SET_PROFILR;
  profile: profileType;
};

export const setProfile = (profile: profileType): setProfileType => ({
  type: SET_PROFILR,
  profile,
});

type AddPostType = {
  type: typeof ADD_POST;
  userNewPost: string;
};

export const AddPost = (userNewPost: string): AddPostType => ({
  type: ADD_POST,
  userNewPost,
});

type setStatusType = {
  type: typeof SET_STATUS;
  status: string;
};

export const setStatus = (status: string): setStatusType => ({
  type: SET_STATUS,
  status,
});

type setPhotoType = {
  type: typeof SAVE_PHOTO;
  photos: photosType;
};

export const setPhoto = (photos: photosType): setPhotoType => ({
  type: SAVE_PHOTO,
  photos,
});

//Thunk

export const getUsersThunk =
  (userId: any) => async (dispatch: Dispatch<profileActionType>) => {
    let data = await userAPI.getUser(userId);
    dispatch(setProfile(data));
  };

export const getStatusThunk =
  (userId: number) => async (dispatch: Dispatch<profileActionType>) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
  };

export const updateStatusThunk =
  (status: string) => async (dispatch: Dispatch<profileActionType>) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };

export const savePhoto =
  (file: any) => async (dispatch: Dispatch<profileActionType>) => {
    let data = await profileAPI.setUserPhoto(file);
    if (data.resultCode === 0) {
      dispatch(setPhoto(data.data.photos));
    }
  };

// Why userId null | number don't asignation with numbe ? (173 row)
// 174 row mistake with THUNK

export const UpdateInformarionAboutUser =
  (profile: profileType) =>
  async (dispatch: any, getState: () => AppStateType) => {
    const userId = getState().auth.id;
    const data = await profileAPI.UpdateInfo(profile);
    if (data.data.resultCode === 0) {
      dispatch(getUsersThunk(userId));
    }
    // else {
    //   dispatch(stopSubmit("editprofile", {_error: data.data.messages[0] }));
    //   dispatch(stopSubmit("editprofile", {"contact" {facebook}: data.messages[0] }}));
    //       return Promise.reject(data.messages[0]);
    // }
  };

export default profileReducer;
