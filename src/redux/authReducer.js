import { meAPI } from "../API/api";

const SET_USER_DATA = "SET-USER-DATA";

const initialstate = {
  id: null,
  login: null,
  password: null,
  email: null,
  isAuth: false
};

const authReducers = (state = initialstate, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth:true
      };
    default:
      return state;
  }
};

export const setUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export const setUserLogin = () => {
  return (dispatch) => {
    meAPI.me()
    .then((data) => {
      if(data.resultCode === 0){
      let { id, email, login } = data.data;
      console.warn(data);
      dispatch(setUserData(id, email, login));
    }
    });
  };
};

export default authReducers;
