import { setUserLogin } from "./authReducer";

const SET_INITIALAIZED = "SET-INITIALAIZED";

const initialstate = {
  initialaized: false,
};

const authReducers = (state = initialstate, action) => {
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

export const setInitializedSuccess = () => ({
  type: SET_INITIALAIZED,
});

export const setInitialaizedApp = () => (dispatch) => {
    let promise = dispatch(setUserLogin());
    promise.then(() => {
      dispatch(setInitializedSuccess());
    });
  };

export default authReducers;
