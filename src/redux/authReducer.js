import { stopSubmit } from "redux-form";
import { meAPI, securityAPI } from "../API/api";

const SET_USER_DATA = "rememberMe/src/redux/authReducers/setUserData";
const GET_CAPTCHA_URL = "rememberMe/src/redux/authReducers/getCaptchaURL";

const initialstate = {
  id: null,
  login: null,
  password: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducers = (state = initialstate, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case GET_CAPTCHA_URL:
      return {
        ...state,
        ...action.captchaUrl,
      };
    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL,
  captchaUrl,
});

export const setUserLogin = () => async (dispatch) => {
  let data = await meAPI.me();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const LoginThunk = (email, password, rememberMe, captchaUrl) => async (dispatch) => {
    let data = await meAPI.logIn(email, password, rememberMe, captchaUrl);
    if (data.resultCode === 0) {
      dispatch(setUserLogin());
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let messages = data.messages.length > 0 ? data.messages[0] : "Some Error";
      dispatch(stopSubmit("login", { _error: messages }));
    }
  };

export const LogoutThunk = () => async (dispatch) => {
  let data = await meAPI.logOut();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaForLogin();
  const captchaUrl = data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducers;
