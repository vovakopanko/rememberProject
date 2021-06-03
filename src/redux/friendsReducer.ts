import { subscribeAPI } from "../API/subscribeAPI";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./store";
import { Dispatch } from "react";
import { userAPI } from "../API/userAPI";

let FOLLOW = "rememberMe/src/redux/friendsReducers/followUser";
let UNFOLLOW = "rememberMe/src/redux/friendsReducers/unFollowUser";
let SET_USERS = "rememberMe/src/redux/friendsReducers/setUsers";
let SET_CURRENT_PAGE = "rememberMe/src/redux/friendsReducers/setCurrentPage";
let QUANTITYUSER = "rememberMe/src/redux/friendsReducers/quantityUser";
let TOGGLE_IS_FETCHING =
  "rememberMe/src/redux/friendsReducers/toggleIsFetching";
let WAITING_REQUEST = "rememberMe/src/redux/friendsReducers/waitingRequest";

type userFriendsType = {
  id: null | number;
  name: null | string;
  status: null | string;
  followed: null | boolean;
  photos: photosType;
};

type photosType = {
  small: string | null;
  large: string | null;
};

type initialStateType = typeof initialstate;

const initialstate = {
  userFriends: [] as Array<userFriendsType>,
  totalUsersCount: 0,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
  isButtonLock: [] as Array<number>,
  portionSize: 6,
};

const friendsReducer = (
  state = initialstate,
  //Looking for an error, when using the action type, all the action code showed a warning
  action: any
): initialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        userFriends: [
          ...state.userFriends.map((u: userFriendsType) => {
            if (u.id === action.userId) {
              return { ...u, followed: true };
            }
            return u;
          }),
        ],
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        userFriends: [
          ...state.userFriends.map((u: userFriendsType) => {
            if (u.id === action.userId) {
              return { ...u, followed: false };
            }
            return u;
          }),
        ],
      };
    }
    case SET_USERS: {
      return {
        ...state,
        userFriends: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case QUANTITYUSER: {
      return {
        ...state,
        totalUsersCount: action.quantityUsers,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case WAITING_REQUEST: {
      return {
        ...state,
        isButtonLock: action.booleanData
          ? [...state.isButtonLock, action.userId]
          : state.isButtonLock.filter((id: number) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

// Action

type friendsActionType =
  | followType
  | unfollowType
  | setUsersType
  | setCurrentPageType
  | usersQuantityType
  | togleIsFetchingType
  | togleIsBlockButtonType;

type followType = {
  type: typeof FOLLOW;
  userId: number;
};

export let follow = (userId: number): followType => ({
  type: FOLLOW,
  userId,
});

type unfollowType = {
  type: typeof UNFOLLOW;
  userId: number;
};

export let unfollow = (userId: number): unfollowType => ({
  type: UNFOLLOW,
  userId,
});

type setUsersType = {
  type: typeof SET_USERS;
  users: number;
};

export let setUsers = (users: number): setUsersType => ({
  type: SET_USERS,
  users,
});

type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export let setCurrentPage = (currentPage: number): setCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type usersQuantityType = {
  type: typeof QUANTITYUSER;
  quantityUsers: number;
};

export let usersQuantity = (quantityUsers: number): usersQuantityType => ({
  type: QUANTITYUSER,
  quantityUsers,
});

type togleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};

export let togleIsFetching = (isFetching: boolean): togleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type togleIsBlockButtonType = {
  type: typeof WAITING_REQUEST;
  booleanData: boolean;
  userId: number;
};

export let togleIsBlockButton = (
  booleanData: boolean,
  userId: number
): togleIsBlockButtonType => ({
  type: WAITING_REQUEST,
  booleanData,
  userId,
});

//Thunk

type FriendsThunkAction = ThunkAction<
  void,
  AppStateType,
  unknown,
  friendsActionType
>;

export const getUserThunkCreator =
  (currentPage: number, pageSize: number): FriendsThunkAction =>
  async (dispatch) => {
    dispatch(togleIsFetching(true));
    let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(setCurrentPage(currentPage));
    dispatch(togleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(usersQuantity(data.totalCount));
  };

const _postDeleteThunkCreator = async (
  dispatch: Dispatch<friendsActionType>,
  userId: number,
  apiMethod: any,
  ActionCreator: (userId:number) => followType | unfollowType
) => {
  dispatch(togleIsBlockButton(true, userId));
  let data = await apiMethod;
  dispatch(togleIsBlockButton(false, userId));
  if (data.resultCode === 0) {
    dispatch(ActionCreator(userId));
  }
};

export const deleteUsersThunkCreator =
  (userId: number): FriendsThunkAction =>
  async (dispatch) => {
    let apiMethod = subscribeAPI.deleteUser(userId);
    // let ActionCreator = unfollow;
    _postDeleteThunkCreator(dispatch, userId, apiMethod, unfollow);
  };

export const postUsersThunkCreator =
  (userId: number): FriendsThunkAction =>
  async (dispatch) => {
    let apiMethod = subscribeAPI.postUser(userId);
    // let ActionCreator = follow;
    _postDeleteThunkCreator(dispatch, userId, apiMethod, follow);
  };

export default friendsReducer;
