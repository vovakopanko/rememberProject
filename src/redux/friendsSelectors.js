import { createSelector } from "reselect";

export const getFriendsSelector = (state) => {
  return state.friendsPage.userFriends;
};

export const getFriends = createSelector(getFriendsSelector, (userFriends) =>  { 
  return userFriends})
  

export const getTotalFriendsSelector = (state) => {
  return state.friendsPage.totalUsersCount;
};

export const getTotalFriends = createSelector(getTotalFriendsSelector, (totalUsersCount) =>  { 
  return totalUsersCount})

export const getPageSizeSelector = (state) => {
  return state.friendsPage.pageSize;
};

export const getPageSize = createSelector(getPageSizeSelector, (pageSize) =>  { 
  return pageSize})

export const getCurrentPageSelector = (state) => {
  return state.friendsPage.currentPage;
};

export const getCurrentPage = createSelector(getCurrentPageSelector, (currentPage) =>  { 
  return currentPage})

export const getIsFetchingSelector = (state) => {
  return state.friendsPage.isFetching;
};

export const getIsFetching = createSelector(getIsFetchingSelector, (isFetching) =>  { 
  return isFetching})

export const getIsButtonLockSelector = (state) => {
  return state.friendsPage.isButtonLock;
};

export const getIsButtonLock = createSelector(getIsButtonLockSelector, (isButtonLock) =>  { 
  return isButtonLock})

export const getIsAuthSelector = (state) => {
  return state.auth.isAuth;
};

export const getIsAuth = createSelector(getIsAuthSelector, (isAuth) =>  { 
  return isAuth})