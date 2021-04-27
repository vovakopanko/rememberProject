import { subscribeAPI, userAPI } from "../API/api";

let FOLLOW = "FOLLOW_USER";
let UNFOLLOW = "UNFOLLOW_USER";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
let QUANTITYUSER = "QUANTIT-USER";
let TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
let WAITING_REQUEST = "WAITING-REQUEST";

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

export const getUserThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(togleIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(togleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(usersQuantity(data.totalCount));
    });
  };
};

export const deleteUsersThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(togleIsBlockButton(true, userId));
    subscribeAPI.deleteUser(userId).then((data) => {
      dispatch(togleIsBlockButton(false, userId));
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
    });
  };
};

export const postUsersThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(togleIsBlockButton(true, userId));
    subscribeAPI.postUser(userId).then((data) => {
      dispatch(togleIsBlockButton(false, userId));
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
    });
  };
};

export default friendsReducer;
