<<<<<<< HEAD
let FOLLOW = "FOLLOW_USER";
let UNFOLLOW = "UNFOLLOW_USER";
let SET_USERS = "SET_USERS";

const initialstate = {
  userFriends: [],
};
=======
const initialstate = {
  userFriends: [
    { id: "1", name: "Vova" },
    { id: "2", name: "Tanya" },
    { id: "3", name: "Egor" },]
}

>>>>>>> refs/remotes/origin/master

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
        userFriends: [...state.userFriends, ...action.users],
      };
    }
    default:
      return state;
  }
};

export let FollowAC = (userId) => ({
  type: FOLLOW,
  userId: userId,
});

export let UnfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId: userId,
});

export let setUsersAC = (users) => ({
  type: SET_USERS,
  users: users,
});

export default friendsReducer;
