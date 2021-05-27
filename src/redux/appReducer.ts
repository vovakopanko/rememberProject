import { setUserLogin } from "./authReducer";

const SET_INITIALAIZED = "rememberMe/src/redux/appReducers/setInitialaized";

type initialstateType = {
  initialaized: boolean
}

const initialstate:initialstateType = {
  initialaized: false,
};

const authReducers = (state = initialstate, action:any):initialstateType => {
  switch (action.type) {
    case SET_INITIALAIZED:
      return {
        ...state,
        initialaized: true,
      };
    default:
      return state;
  }
};

type setInitializedSuccessActionType = {
  type: typeof SET_INITIALAIZED
}

export const setInitializedSuccess = ():setInitializedSuccessActionType => ({
  type: SET_INITIALAIZED,
});

export const setInitialaizedApp = () => (dispatch:any) => {
    let promise = dispatch(setUserLogin());
    promise.then(() => {
      dispatch(setInitializedSuccess());
    });
  };

export default authReducers;
