import { subscribeAPI, userAPI } from "../API/api";

let FOLLOW = "rememberMe/src/redux/friendsReducers/followUser";
let UNFOLLOW = "rememberMe/src/redux/friendsReducers/unFollowUser";
let SET_USERS = "rememberMe/src/redux/friendsReducers/setUsers";
let SET_CURRENT_PAGE = "rememberMe/src/redux/friendsReducers/setCurrentPage";
let QUANTITYUSER = "rememberMe/src/redux/friendsReducers/quantityUser";
let TOGGLE_IS_FETCHING =
  "rememberMe/src/redux/friendsReducers/toggleIsFetching";
let WAITING_REQUEST = "rememberMe/src/redux/friendsReducers/waitingRequest";

const initialstate = {
  userFriends: [],
  totalUsersCount: 0,
  pageSize: 5,
  currentPage: 2,
  isFetching: false,
  isButtonLock: [],
};

const friendsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        userFriends: [
          ...state.userFriends.map((u) => {
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
          ...state.userFriends.map((u) => {
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
          : state.isButtonLock.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export let follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export let unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export let setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export let setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export let usersQuantity = (quantityUsers) => ({
  type: QUANTITYUSER,
  quantityUsers,
});

export let togleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export let togleIsBlockButton = (booleanData, userId) => ({
  type: WAITING_REQUEST,
  booleanData,
  userId,
});

export const getUserThunkCreator =
  (currentPage, pageSize) => async (dispatch) => {
    dispatch(togleIsFetching(true));
    let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(setCurrentPage(currentPage));
    dispatch(togleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(usersQuantity(data.totalCount));
  };

const postDeleteThunkCreator = async (
  dispatch,
  userId,
  apiMethod,
  thunkCreator
) => {
  dispatch(togleIsBlockButton(true, userId));
  let data = await apiMethod;
  dispatch(togleIsBlockButton(false, userId));
  if (data.resultCode === 0) {
    dispatch(thunkCreator(userId));
  }
};

export const deleteUsersThunkCreator = (userId) => async (dispatch) => {
  let apiMethod = subscribeAPI.deleteUser(userId);
  let thunkCreator = unfollow;
  postDeleteThunkCreator(dispatch, userId, apiMethod, thunkCreator);
};

export const postUsersThunkCreator = (userId) => async (dispatch) => {
  let apiMethod = subscribeAPI.postUser(userId);
  let thunkCreator = follow;

  postDeleteThunkCreator(dispatch, userId, apiMethod, thunkCreator);
};

export default friendsReducer;
