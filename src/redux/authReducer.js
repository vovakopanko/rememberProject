const SET_USER_DATA = "SET-USER-DATA";

let initialstate = {
  id: null,
  login: null,
  password: null,
  email: null,
};

let authReducers = (state = initialstate, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

export let setUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export default authReducers;
