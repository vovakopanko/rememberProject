import { ThunkAction } from "redux-thunk";
import { setUserLogin } from "./authReducer";
import { AppStateType } from "./store";

const SET_INITIALAIZED = "rememberMe/src/redux/appReducers/setInitialaized";

type initialstateType = {
  initialaized: boolean;
};

const initialstate: initialstateType = {
  initialaized: false,
};

const authReducers = (state = initialstate, action: ActionTypeAppreducer) => {
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

//Actions

type ActionTypeAppreducer = setInitializedSuccessActionType;

type setInitializedSuccessActionType = {
  type: typeof SET_INITIALAIZED;
};

export const setInitializedSuccess = (): setInitializedSuccessActionType => ({
  type: SET_INITIALAIZED,
});

// export type ThunkAction<R, S, E, A extends Action> = (
//   dispatch: ThunkDispatch<S, E, A>,
//   getState: () => S,
//   extraArgument: E
// ) => R;

type ThunkReducer = ThunkAction<
  void,
  AppStateType,
  unknown,
  ActionTypeAppreducer
>;

//Thunk

export const setInitialaizedApp = (): ThunkReducer => (dispatch) => {
  let promise = dispatch(setUserLogin());
  promise.then(() => {
    dispatch(setInitializedSuccess());
  });
};
export default authReducers;
