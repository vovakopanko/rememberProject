import { stopSubmit } from "redux-form";
import { meAPI } from "../API/api";

const SET_USER_DATA = "rememberMe/src/redux/appReducers/setUserData";

const initialstate = {
  id: null,
  login: null,
  password: null,
  email: null,
  isAuth: false,
};

const authReducers = (state = initialstate, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});

export const setUserLogin = () => (dispatch) => {
  return meAPI.me().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export const LoginThunk = (email, password, rememberMe) => (dispatch) => {
  meAPI.logIn(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserLogin());
    } else {
      let messages = data.messages.length > 0 ? data.messages[0] : "Some Error";
      dispatch(stopSubmit("login", { _error: messages }));
    }
  });
};

export const LogoutThunk = () => {
  return (dispatch) => {
    meAPI.logOut().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
  };
};

export default authReducers;
