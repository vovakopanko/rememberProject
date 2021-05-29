import { subscribeAPI, userAPI } from "../API/api";

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
};

const friendsReducer = (
  state = initialstate,
  action: any
): initialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        userFriends: [
          ...state.userFriends.map((u: any) => {
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
          ...state.userFriends.map((u: any) => {
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

export const getUserThunkCreator =
  (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(togleIsFetching(true));
    let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(setCurrentPage(currentPage));
    dispatch(togleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(usersQuantity(data.totalCount));
  };

const postDeleteThunkCreator = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  thunkCreator: any
) => {
  dispatch(togleIsBlockButton(true, userId));
  let data = await apiMethod;
  dispatch(togleIsBlockButton(false, userId));
  if (data.resultCode === 0) {
    dispatch(thunkCreator(userId));
  }
};

export const deleteUsersThunkCreator =
  (userId: number) => async (dispatch: any) => {
    let apiMethod = subscribeAPI.deleteUser(userId);
    let thunkCreator = unfollow;
    postDeleteThunkCreator(dispatch, userId, apiMethod, thunkCreator);
  };

export const postUsersThunkCreator =
  (userId: number) => async (dispatch: any) => {
    let apiMethod = subscribeAPI.postUser(userId);
    let thunkCreator = follow;

    postDeleteThunkCreator(dispatch, userId, apiMethod, thunkCreator);
  };

export default friendsReducer;
