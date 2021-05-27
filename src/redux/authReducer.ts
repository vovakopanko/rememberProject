import { stopSubmit } from "redux-form";
import { meAPI, securityAPI } from "../API/api";

const SET_USER_DATA = "rememberMe/src/redux/authReducers/setUserData";
const GET_CAPTCHA_URL = "rememberMe/src/redux/authReducers/getCaptchaURL";

type initialStateType = {
  id: null | number,
  login: null | string,
  password: null | string,
  email: null | string,
  isAuth: boolean,
  captchaUrl: null | string,
}

const initialstate:initialStateType = {
  id: null,
  login: null,
  password: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducers = (state = initialstate, action:any):initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case GET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
};

type dataSetUserType = {
  id:null | number, 
  email:null | string, 
  login:null | string, 
  isAuth:boolean,
}

type setUserDataType = {
  type: typeof SET_USER_DATA,
  data: dataSetUserType,
}

export const setUserData = (id: null| number, email:null | string, login:null | string, isAuth:boolean):setUserDataType => ({
  type: SET_USER_DATA,
  data: { id, email, login, isAuth },
});

type getCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL,
  captchaUrl: string,
}

export const getCaptchaUrlSuccess = (captchaUrl:string):getCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL,
  captchaUrl,
});

export const setUserLogin = () => async (dispatch:any) => {
  let data = await meAPI.me();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const LoginThunk = (email:string, password:number, rememberMe:boolean, captcha:string):any => async (dispatch:any) => {
    let data = await meAPI.logIn(email, password, rememberMe, captcha);
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

export const LogoutThunk = () => async (dispatch:any) => {
  let data = await meAPI.logOut();
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch:any) => {
  const data = await securityAPI.getCaptchaForLogin();
  const captchaUrl = data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducers;
