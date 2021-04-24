let FOLLOW = "FOLLOW_USER";
let UNFOLLOW = "UNFOLLOW_USER";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
let QUANTITYUSER = "QUANTIT-USER";
let TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

const initialstate = {
  userFriends: [],
  totalUsersCount: 0,
  pageSize: 5,
  currentPage: 2,
  isFetching: false,
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
        isFetching: action.isFetching
      }
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
  type:TOGGLE_IS_FETCHING,
  isFetching
})

export default friendsReducer;
