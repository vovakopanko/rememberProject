import { createSelector } from "reselect";
import { AppStateType } from "./store";

export const getFriendsSelector = (state:AppStateType) => {
  return state.friendsPage.userFriends;
};

export const getFriends = createSelector(getFriendsSelector, (userFriends) =>  { 
  return userFriends})
  

export const getTotalFriendsSelector = (state:AppStateType) => {
  return state.friendsPage.totalUsersCount;
};

export const getTotalFriends = createSelector(getTotalFriendsSelector, (totalUsersCount) =>  { 
  return totalUsersCount})

export const getPageSizeSelector = (state:AppStateType) => {
  return state.friendsPage.pageSize;
};

export const getPageSize = createSelector(getPageSizeSelector, (pageSize) =>  { 
  return pageSize})

export const getCurrentPageSelector = (state:AppStateType) => {
  return state.friendsPage.currentPage;
};

export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage) =>  { 
  return currentPage})

export const getIsFetchingSelector = (state:AppStateType) => {
  return state.friendsPage.isFetching;
};

export const getIsFetching = createSelector(getIsFetchingSelector, (isFetching) =>  { 
  return isFetching})

export const getIsButtonLockSelector = (state:AppStateType) => {
  return state.friendsPage.isButtonLock;
};

export const getIsButtonLock = createSelector(getIsButtonLockSelector, (isButtonLock) =>  { 
  return isButtonLock})

export const getPortionSizeSelector = (state:AppStateType) => {
  return state.friendsPage.portionSize;
}

export const getPortionSize = createSelector(getPortionSizeSelector, (portionSize) => {
  return portionSize
})

export const getIsAuthSelector = (state:AppStateType) => {
  return state.auth.isAuth;
};

export const getIsAuth = createSelector(getIsAuthSelector, (isAuth) =>  { 
  return isAuth})