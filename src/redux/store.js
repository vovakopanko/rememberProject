import friendsReducer from "./friendsReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import authReducers from "./authReducer";
import appReducers from "./appReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  friendsPage: friendsReducer,
  auth: authReducers,
  app: appReducers,
  form: formReducer,
});

const store = createStore(reducers,applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
