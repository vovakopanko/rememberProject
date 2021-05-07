export const getFriends = (state) => {
  return state.friendsPage.userFriends;
};

export const getTotalFriends = (state) => {
  return state.friendsPage.totalUsersCount;
};

export const getPageSize = (state) => {
  return state.friendsPage.pageSize;
};

export const getCurrentPage = (state) => {
  return state.friendsPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.friendsPage.isFetching;
};

export const getIsButtonLock = (state) => {
  return state.friendsPage.isButtonLock;
};

export const getIsAuth = (state) => {
  return state.auth.isAuth;
};
