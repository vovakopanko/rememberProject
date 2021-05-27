import { subscribeAPI, userAPI } from "../API/api";

const REMOVE_FRIENDS = "rememberMe/src/redux/friendsReducers/removeFriends";
const SET_FRIENDS = "rememberMe/src/redux/friendsReducers/setFriends";
const LOADING_FRIENDS = "rememberMe/src/redux/friendsReducers/loadingFriends";


const initialstate = {
 friends: [],
 loadingFriends: false,
};

const friendsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case REMOVE_FRIENDS:
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (action.friendId === f.id) {
                        return {...f, followed: false}
                    }
                    return u;
                })
            }
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
            }
        case LOADING_FRIENDS:
            return {
                ...state,
                loadingFriends: !state.loadingFriends
            }
    default:
      return state;
  }
};

//AC
export const removeSuccess = (friendId) => ({type: REMOVE_FRIENDS, friendId});
export const setFriendsSuccess = (friends) => ({type: SET_FRIENDS, friends});
export const loadingFriends = () => ({type: LOADING_FRIENDS});


//Thunk
export const getFriends = () => async (dispatch) => {
    dispatch(loadingFriends())
    const response = await friendsApi.getFriends()
    dispatch(loadingFriends())
    dispatch(setFriendsSuccess(response.items))
}

export const removeFriend = (friendId) => async (dispatch) => {
    let response = await usersApi.unFollow(friendId)
    if (response.data.resultCode === 0) {
        dispatch(removeSuccess(friendId))
        dispatch(getFriends(friendId))
    }

}
